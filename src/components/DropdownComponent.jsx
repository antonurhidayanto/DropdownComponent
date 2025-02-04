import React, { useState, useEffect, useRef } from 'react';
import './Dropdown.css';

const MultiSelectDropdown = ({
  label='Label',
  options = [],
  placeholder = "",
  maxSelections = null,
  searchEnabled = true,
  selectAllEnabled = true,
  isMultiple = true,
  filterOptions = false,
  onChange,
  outline = true,
  ...props
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Filter opsi berdasarkan pencarian Jika search diaktifkan, gunakan filter; jika tidak, tampilkan semua opsi
const filteredOptions = filterOptions && searchEnabled
  ? options.filter(option => option.label.toLowerCase().includes(searchTerm.toLowerCase()))
  : options; // Jika filterOptions = false, tampilkan semua opsi


  // Toggle dropdown
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
    setSearchTerm('');
  }
  // Menangani perubahan pencarian
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Menangani pemilihan item
  const handleOptionSelect = (option) => {
    if (isMultiple) {
    setSelectedOptions(prevSelected => {
      const isSelected = (prevSelected || []).some(item => item.value === option.value);

      if (isSelected) {
        return prevSelected.filter(item => item.value !== option.value);
      } else {
        if (maxSelections && prevSelected.length >= maxSelections) {
          return prevSelected;
        }
        return [...(prevSelected || []), option];
      }
    });
    }else {
        // Single select mode
        setSelectedOptions(option);
        setShowDropdown(false); // Tutup dropdown setelah memilih
      }

    if (onChange) {
      onChange(selectedOptions);
    }
  };

  // Menghapus item yang dipilih dari input field
  const removeSelectedItem = (option) => {
    if(isMultiple){
        setSelectedOptions(prevSelected => prevSelected.filter(item => item.value !== option.value)); 
    }else{
        setSelectedOptions(null);
    }
  };

  // Menangani klik luar dropdown untuk menutup
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
        setSelectedOptions(isMultiple ? [] : ''); 
  }, [isMultiple]);

  // Fungsi untuk menampilkan teks yang di-highlight dalam pencarian
  const highlightText = (text) => {
    if (!searchTerm) return text;
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.replace(regex, '<span class="highlight">$1</span>');
  };

  if (!options) {
    return null;
  }
  // Pilih semua opsi
  const handleSelectAll = () => {
        if (options?.length === selectedOptions.length) {
            setSelectedOptions([]);
          } else {
            setSelectedOptions([...options]);
          }
  };

  return (
    <div className='dropdown-container'>
        <label htmlFor="label" className="label">{label}: </label>
        <div className="selectcontainer" ref={dropdownRef}>
        {/* HEADER: Menampilkan item terpilih */}
        <div className={`selectheader ${outline ? '':'outline'}`} onClick={toggleDropdown}>
            {isMultiple ? (
            selectedOptions.length > 0 ? (
            <div className="selected-items">
                {selectedOptions.map(option => (
                <div key={option.value} className="selected-item">
                    {option.label}
                    <span className="remove-item" onClick={(e) => {
                    e.stopPropagation();
                    removeSelectedItem(option);
                    setSelectedOptions('')
                    }}>×</span>
                </div>
                ))}
            </div>
            ) : (
            <span className="placeholder">{placeholder}</span>
            )
            ) : (
                selectedOptions ? (
                    <div className='selected-item'>
                        {selectedOptions.label}
                        <span className="remove-item" onClick={(e) => {
                        e.stopPropagation();
                        removeSelectedItem(selectedOptions);
                        setSelectedOptions('')
                        }}>×</span>
                    </div>
                ) : (
                   <span className="placeholder">{placeholder}</span>
                )
            )}
        </div>

        {/* DROPDOWN MENU */}
        {showDropdown && (
            <div className="selectdropdown">
            {/* INPUT SEARCH */}
            {searchEnabled && (
                <div className="selectsearch-container">
                    <svg className="svg-icon search-icon" aria-labelledby="title desc" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.9 19.7"><title id="title">Search Icon</title><desc id="desc">A magnifying glass icon.</desc><g className="search-path" fill="none" stroke="#848F91"><path strokeLinecap="square" d="M18.5 18.3l-5.4-5.4"/><circle cx="8" cy="8" r="7"/></g></svg>
                    <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="selectsearch"
                    />
                    <hr/>
                </div>
            )}

            {/* SELECT ALL BUTTON */}
            {selectAllEnabled ? (
                <div className="selectoption select-all" onClick={handleSelectAll}>
                <input
                    type="checkbox"
                    checked={selectedOptions.length === options.length}
                    readOnly
                />
                <span>Select All</span>
                </div>
            ): <div className='separator'>
                
                </div>} 

            {/* LIST OPTIONS */}
            <div className="selectoptions">
                {filteredOptions.length > 0 ? (
                filteredOptions.map(option => (
                    <div
                    key={option.value}
                    className={`selectoption ${isMultiple && (selectedOptions || []).some(item => item.value === option.value) ? 'selected' : (selectedOptions?.value === option.value ? 'selected' : '')}`}
                    onClick={() => handleOptionSelect(option)}
                    >
                    {isMultiple && (
                        <input
                            type="checkbox"
                            checked={(selectedOptions || []).some(item => item.value === option.value)}
                            readOnly
                        />
                    )}
                    <span dangerouslySetInnerHTML={{ __html: highlightText(option.label) }}/>
                    </div>
                ))
                ) : (
                <div className="no-options">No options found</div>
                )}
            </div>
          </div>
        )}
        </div>
    </div>
  );
};

export default MultiSelectDropdown;
