import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{R as C,r as T}from"./index-DJO9vBfz.js";import{T as k}from"./index-BjW8pI2J.js";import{c}from"./index-i5X67GZP.js";import{c as h}from"./createLucideIcon-BFnLqEV_.js";/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=h("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=h("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);function i({value:a="",onChange:o=()=>{},options:r=[],name:m="",placeholder:x="",disabled:S=!1,size:U="medium",rounded:V="none"}){const[u,d]=C.useState(!1);let l=null;a&&(l=r.find(n=>n.value===a));let j=l?e.jsxs("div",{className:"flex gap-2 items-center",children:[l.image&&e.jsx("img",{src:l.image,alt:l.label,className:"w-5 h-4 mr-2"}),l.label]}):x;return e.jsx(k,{children:e.jsxs("div",{className:"w-max",children:[e.jsxs("div",{className:c("border border-solid rounded-sm p-2 border-primary cursor-pointer px-3 flex justify-between items-center gap-7",{"bg-gray-100 pointer-events-none cursor-not-allowed":S}),onClick:()=>d(!u),children:[j,e.jsx("span",{children:u?e.jsx(N,{size:15,className:"text-primary"}):e.jsx(q,{size:15,className:"text-primary"})})]}),u&&e.jsx("div",{className:"flex flex-col gap-3 border border-gray-300 border-solid rounded-sm p-2 cursor-pointer mt-1",children:r.map(n=>e.jsxs("div",{className:c("hover:bg-gray-300 p-1 rounded flex items-center",{"bg-gray-300":n.value===a}),onClick:()=>{o(n.value),d(!1)},children:[n.image&&e.jsx("img",{src:n.image,alt:n.label,className:"w-5 h-4 mr-2"}),n.label]}))})]})})}i.__docgenInfo={description:"",methods:[],displayName:"Select",props:{value:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"",defaultValue:{value:'""',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | number) => void",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"value"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},options:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
  label: string;\r
  value: string | number;\r
  image?: string;\r
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}},{key:"image",value:{name:"string",required:!1}}]}}],raw:`Array<{\r
  label: string;\r
  value: string | number;\r
  image?: string;\r
}>`},description:"",defaultValue:{value:"[]",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},rounded:{required:!1,tsType:{name:"union",raw:'"none" | "small" | "medium" | "large" | "full"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'},{name:"literal",value:'"full"'}]},description:"",defaultValue:{value:'"none"',computed:!1}}}};const O={title:"Select",component:i,tags:["autodocs"]},y=a=>{const[o,r]=T.useState("");return e.jsx(i,{...a,onChange:m=>r(m),value:o})},s={args:{placeholder:"Select a country",options:[{label:"India",value:"india"},{label:"USA",value:"usa"},{label:"UK",value:"uk"},{label:"Canada",value:"canada"}],onChange:a=>console.log(a)},render:y},t={args:{placeholder:"Select a country",options:[{label:"India",value:"india",image:"https://www.countryflags.com/wp-content/uploads/india-flag-png-large.png"},{label:"USA",value:"usa",image:"https://www.countryflags.com/wp-content/uploads/united-states-of-america-flag-png-large.png"},{label:"UK",value:"uk",image:"https://www.countryflags.com/wp-content/uploads/united-kingdom-flag-png-large.png"},{label:"Canada",value:"canada",image:"https://www.countryflags.com/wp-content/uploads/canada-flag-png-large.png"}],onChange:a=>console.log(a)},render:y};var p,g,f;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    placeholder: "Select a country",
    options: [{
      label: "India",
      value: "india"
    }, {
      label: "USA",
      value: "usa"
    }, {
      label: "UK",
      value: "uk"
    }, {
      label: "Canada",
      value: "canada"
    }],
    onChange: (value: string) => console.log(value)
  },
  render: Template
} as {
  args: SelectProps;
}`,...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var v,w,b;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    placeholder: "Select a country",
    options: [{
      label: "India",
      value: "india",
      image: "https://www.countryflags.com/wp-content/uploads/india-flag-png-large.png"
    }, {
      label: "USA",
      value: "usa",
      image: "https://www.countryflags.com/wp-content/uploads/united-states-of-america-flag-png-large.png"
    }, {
      label: "UK",
      value: "uk",
      image: "https://www.countryflags.com/wp-content/uploads/united-kingdom-flag-png-large.png"
    }, {
      label: "Canada",
      value: "canada",
      image: "https://www.countryflags.com/wp-content/uploads/canada-flag-png-large.png"
    }],
    onChange: (value: string) => console.log(value)
  },
  render: Template
} as {
  args: SelectProps;
}`,...(b=(w=t.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};const E=["Basic","Advanced"];export{t as Advanced,s as Basic,E as __namedExportsOrder,O as default};
