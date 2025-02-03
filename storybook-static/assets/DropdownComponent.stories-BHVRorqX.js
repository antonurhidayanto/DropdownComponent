import{r}from"./index-C2WPW1L7.js";import{j as e}from"./jsx-runtime-C6qLVRqm.js";const S=({label:E="Label",options:t=[],placeholder:p="",maxSelections:m=null,searchEnabled:h=!0,selectAllEnabled:k=!0,isMultiple:o=!0,filterOptions:C=!1,onChange:f,outline:y=!0,..._})=>{const[c,L]=r.useState(""),[a,s]=r.useState([]),[v,u]=r.useState(!1),d=r.useRef(null),x=C&&h?t.filter(l=>l.label.toLowerCase().includes(c.toLowerCase())):t,q=()=>{u(!v),L("")},D=l=>{L(l.target.value)},V=l=>{o?s(n=>(n||[]).some(g=>g.value===l.value)?n.filter(g=>g.value!==l.value):m&&n.length>=m?n:[...n||[],l]):(s(l),u(!1)),f&&f(a)},b=l=>{s(o?n=>n.filter(O=>O.value!==l.value):null)};r.useEffect(()=>{const l=n=>{d.current&&!d.current.contains(n.target)&&u(!1)};return document.addEventListener("click",l),()=>{document.removeEventListener("click",l)}},[]),r.useEffect(()=>{s(o?[]:"")},[o]);const I=l=>{if(!c)return l;const n=new RegExp(`(${c})`,"gi");return l.replace(n,'<span class="highlight">$1</span>')};if(!t)return null;const A=()=>{(t==null?void 0:t.length)===a.length?s([]):s([...t])};return e.jsxs("div",{className:"dropdown-container",children:[e.jsxs("label",{htmlFor:"label",className:"label",children:[E,": "]}),e.jsxs("div",{className:"multi-select-container",ref:d,children:[e.jsx("div",{className:`multi-select-header ${y?"":"outline"}`,onClick:q,children:o?a.length>0?e.jsx("div",{className:"selected-items",children:a.map(l=>e.jsxs("div",{className:"selected-item",children:[l.label,e.jsx("span",{className:"remove-item",onClick:n=>{n.stopPropagation(),b(l)},children:"×"})]},l.value))}):e.jsx("span",{className:"placeholder",children:p}):a?e.jsxs("div",{className:"selected-item",children:[a.label,e.jsx("span",{className:"remove-item",onClick:l=>{l.stopPropagation(),b(a)},children:"×"})]}):e.jsx("span",{className:"placeholder",children:p})}),v&&e.jsxs("div",{className:"multi-select-dropdown",children:[h&&e.jsxs("div",{className:"multi-select-search-container",children:[e.jsxs("svg",{className:"svg-icon search-icon","aria-labelledby":"title desc",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 19.9 19.7",children:[e.jsx("title",{id:"title",children:"Search Icon"}),e.jsx("desc",{id:"desc",children:"A magnifying glass icon."}),e.jsxs("g",{className:"search-path",fill:"none",stroke:"#848F91",children:[e.jsx("path",{strokeLinecap:"square",d:"M18.5 18.3l-5.4-5.4"}),e.jsx("circle",{cx:"8",cy:"8",r:"7"})]})]}),e.jsx("input",{type:"text",value:c,onChange:D,className:"multi-select-search"}),e.jsx("hr",{})]}),k?e.jsxs("div",{className:"multi-select-option select-all",onClick:A,children:[e.jsx("input",{type:"checkbox",checked:a.length===t.length,readOnly:!0}),e.jsx("span",{children:"Select All"})]}):e.jsx("div",{className:"separator"}),e.jsx("div",{className:"multi-select-options",children:x.length>0?x.map(l=>e.jsxs("div",{className:`multi-select-option ${o&&(a||[]).some(n=>n.value===l.value)||(a==null?void 0:a.value)===l.value?"selected":""}`,onClick:()=>V(l),children:[o&&e.jsx("input",{type:"checkbox",checked:(a||[]).some(n=>n.value===l.value),readOnly:!0}),e.jsx("span",{dangerouslySetInnerHTML:{__html:I(l.label)}})]},l.value)):e.jsx("div",{className:"no-options",children:"No options found"})})]})]})]})};S.__docgenInfo={description:"",methods:[],displayName:"MultiSelectDropdown",props:{label:{defaultValue:{value:"'Label'",computed:!1},required:!1},options:{defaultValue:{value:"[]",computed:!1},required:!1},placeholder:{defaultValue:{value:'""',computed:!1},required:!1},maxSelections:{defaultValue:{value:"null",computed:!1},required:!1},searchEnabled:{defaultValue:{value:"true",computed:!1},required:!1},selectAllEnabled:{defaultValue:{value:"true",computed:!1},required:!1},isMultiple:{defaultValue:{value:"true",computed:!1},required:!1},filterOptions:{defaultValue:{value:"false",computed:!1},required:!1},outline:{defaultValue:{value:"true",computed:!1},required:!1}}};const W={title:"Components/MultiSelectDropdown",component:S,tags:["autodocs"],argTypes:{searchEnabled:{control:"boolean"},selectAllEnabled:{control:"boolean"},maxSelections:{control:{type:"number",min:0,max:10}},label:{control:"text"},filterOptions:{control:"boolean"},isMultiple:{control:"boolean"},outline:{control:"boolean"}}},i={args:{options:[{label:"Option 1",value:"Option 1"},{label:"Option With Icon",value:"Option With Icon"},{label:"Long Long Option 3",value:"Long Long Option 3"},{label:"Long Long Long Option 4",value:"Long Long Long Option 4"},{label:"Long Long Long Long Option 5",value:"Long Long Long Long Option 5"},{label:"Long Long Long Long Long Option 6",value:"Long Long Long Long Long Option 6"}],placeholder:"",searchEnabled:!0,selectAllEnabled:!1,maxSelections:6,label:"Label",filterOptions:!1,isMultiple:!0,outline:!0}};var j,N,w;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    options: [{
      label: 'Option 1',
      value: 'Option 1'
    }, {
      label: 'Option With Icon',
      value: 'Option With Icon'
    }, {
      label: 'Long Long Option 3',
      value: 'Long Long Option 3'
    }, {
      label: 'Long Long Long Option 4',
      value: 'Long Long Long Option 4'
    }, {
      label: 'Long Long Long Long Option 5',
      value: 'Long Long Long Long Option 5'
    }, {
      label: 'Long Long Long Long Long Option 6',
      value: 'Long Long Long Long Long Option 6'
    }],
    placeholder: "",
    searchEnabled: true,
    selectAllEnabled: false,
    maxSelections: 6,
    label: "Label",
    filterOptions: false,
    isMultiple: true,
    outline: true
  }
}`,...(w=(N=i.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};const $=["DropdownComponent"];export{i as DropdownComponent,$ as __namedExportsOrder,W as default};
