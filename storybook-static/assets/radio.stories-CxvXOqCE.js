import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{r as T}from"./index-DJO9vBfz.js";import{c as o}from"./index-i5X67GZP.js";function u({value:a="",onChange:t=()=>{},options:i=[],name:m="",label:x="",disabled:r=!1,size:V="medium",rounded:q="none",orientation:h="horizontal"}){return e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("span",{className:"text-sm",children:x}),e.jsx("div",{className:o("flex gap-5",{"flex-col":h==="vertical","pointer-events-none cursor-not-allowed":r}),children:i.map(n=>e.jsxs("div",{className:"flex items-center gap-1 cursor-pointer",onClick:()=>t(n.value),children:[e.jsx("div",{className:o("w-4 h-4 border border-solid rounded-full box-border",{"border-primary":n.value===a&&!r,"border-gray-300":r,"border-[5px] ":n.value===a})}),e.jsx("span",{className:o("text-sm mt-[2px]",{"text-gray-500":r}),children:n.label})]}))})]})}u.__docgenInfo={description:"",methods:[],displayName:"Radio",props:{value:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"",defaultValue:{value:'""',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | number) => void",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"value"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},options:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
  label: string;\r
  value: string | number;\r
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}}]}}],raw:`Array<{\r
  label: string;\r
  value: string | number;\r
}>`},description:"",defaultValue:{value:"[]",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},rounded:{required:!1,tsType:{name:"union",raw:'"none" | "small" | "medium" | "large" | "full"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'},{name:"literal",value:'"full"'}]},description:"",defaultValue:{value:'"none"',computed:!1}},orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"",defaultValue:{value:'"horizontal"',computed:!1}}}};const S={title:"Radio",component:u,tags:["autodocs"]},b=a=>{const[t,i]=T.useState("");return e.jsx(u,{...a,value:t,onChange:m=>i(m)})},y=[{label:"India",value:"india"},{label:"USA",value:"usa"},{label:"UK",value:"uk"},{label:"Canada",value:"canada"}],l={args:{label:"Select country",options:y},render:b},s={args:{label:"Select country",options:y,orientation:"vertical"},render:b};var d,c,p;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: "Select country",
    options
  },
  render: Template
} as {
  args: RadioProps;
}`,...(p=(c=l.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var v,f,g;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: "Select country",
    options,
    orientation: "vertical"
  },
  render: Template
} as {
  args: RadioProps;
}`,...(g=(f=s.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const z=["Basic","VerticalOptions"];export{l as Basic,s as VerticalOptions,z as __namedExportsOrder,S as default};
