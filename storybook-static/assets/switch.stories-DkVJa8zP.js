import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{r as S}from"./index-DJO9vBfz.js";import{c as d}from"./index-i5X67GZP.js";function l({label:n="",checked:r,onChange:o,disabled:w=!1,orientation:i="vertical"}){return e.jsxs("div",{className:d("flex gap-1",{"flex-row items-center":i==="horizontal","flex-col":i==="vertical"}),children:[e.jsx("span",{className:"text-sm",children:n}),e.jsx("div",{className:d("bg-gray-400 w-10 p-1 rounded-full flex cursor-pointer",{"bg-primary justify-end":r,"opacity-50 pointer-events-none cursor-not-allowed":w}),onClick:()=>o(!r),children:e.jsx("div",{className:"w-4 h-4 rounded-full bg-white"})})]})}l.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},checked:{required:!0,tsType:{name:"boolean"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"",defaultValue:{value:'"vertical"',computed:!1}}}};const j={title:"Switch",component:l,tags:["autodocs"]},c=n=>{const[r,o]=S.useState(!1);return e.jsx(l,{...n,checked:r,onChange:o})},a={args:{label:"Is Active ?",checked:!1},render:c},s={args:{label:"Is Active ?",checked:!1,orientation:"horizontal"},render:c},t={args:{label:"Is Active ?",checked:!0,disabled:!0},render:c};var u,m,p;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: "Is Active ?",
    checked: false
  },
  render: Template
} as {
  args: SwitchProps;
  render: () => JSX.Element;
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var f,h,g;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: "Is Active ?",
    checked: false,
    orientation: "horizontal"
  },
  render: Template
} as {
  args: SwitchProps;
  render: () => JSX.Element;
}`,...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var v,b,x;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: "Is Active ?",
    checked: true,
    disabled: true
  },
  render: Template
} as {
  args: SwitchProps;
  render: () => JSX.Element;
}`,...(x=(b=t.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};const z=["Basic","Horizontal","Disabled"];export{a as Basic,t as Disabled,s as Horizontal,z as __namedExportsOrder,j as default};
