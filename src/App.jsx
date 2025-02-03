
import MultiSelectDropdown from "./components/DropdownComponent";
import './App.css';

const App = () => {

  const options = [
    { label: 'Option 1', value: 'Option 1' },
    { label: 'Option With Icon', value: 'Option With Icon' },
    { label: 'Long Long Option 3', value: 'Long Long Option 3' },
    { label: 'Long Long Long Option 4', value: 'Long Long Long Option 4' },
    { label: 'Long Long Long Long Option 5', value: 'Long Long Long Long Option 5' },
    { label: 'Long Long Long Long Long Option 6', value: 'Long Long Long Long Long Option 6' },
  ];

  const handleSelectionChange = (selectedOptions) => {
    console.log("Selected Items:", selectedOptions);
  };
 
  return (
    // <div className="app">
      <MultiSelectDropdown
        label={"Dropdown"}
        placeholder="Select items"
        options={options}
        isSearchable={true}
        selectAllEnabled={true}
        maxSelections={6}
        isMultiple={true}
        filterOptions={false}
        onChange={handleSelectionChange}
      />
    // </div>
  )
};



export default App
