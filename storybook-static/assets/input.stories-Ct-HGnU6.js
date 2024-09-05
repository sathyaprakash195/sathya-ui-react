import{j as a}from"./jsx-runtime-CkxqCPlQ.js";import{c as R}from"./index-i5X67GZP.js";import{T as B}from"./index-BjW8pI2J.js";import"./index-DJO9vBfz.js";function w({value:U,onChange:V,name:j="",placeholder:S="",label:N="",disabled:u=!1,type:P="text",size:o="medium",rounded:e="none",error:m=""}){return a.jsx(B,{children:a.jsxs("div",{className:"flex flex-col w-max gap-1",children:[a.jsx("label",{htmlFor:"input",className:"text-sm",children:N}),a.jsx("input",{type:P,name:j,value:U,placeholder:S,onChange:_=>V(_.target.value),disabled:u,className:R("px-5 border-solid",{"h-10":o==="medium","h-8":o==="small","h-12":o==="large","rounded-none":e==="none","rounded-sm":e==="small","rounded-md":e==="medium","rounded-lg":e==="large","rounded-full":e==="full","border-primary focus:outline-none":!u,"border border-red-500 border-solid":m,"cursor-not-allowed pointer-events-none bg-opacity-50":u})}),m&&a.jsx("span",{className:"text-red-500",children:m})]})})}w.__docgenInfo={description:"",methods:[],displayName:"Input",props:{value:{required:!0,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string | number) => void",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"value"}],return:{name:"void"}}},description:""},name:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},type:{required:!1,tsType:{name:"union",raw:'"text" | "number" | "password"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"number"'},{name:"literal",value:'"password"'}]},description:"",defaultValue:{value:'"text"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},rounded:{required:!1,tsType:{name:"union",raw:'"none" | "small" | "medium" | "large" | "full"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'},{name:"literal",value:'"full"'}]},description:"",defaultValue:{value:'"none"',computed:!1}},error:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const F={title:"Input",component:w,tags:["autodocs"]},r={args:{label:"Username",placeholder:"Enter your username",rounded:"full"}},n={args:{label:"Username",placeholder:"Enter your username",size:"large"}},s={args:{label:"Username",placeholder:"Enter your username",error:"Invalid username"}},l={args:{label:"Username",placeholder:"Enter your username",disabled:!0,value:"Sathya"}},t={args:{label:"Username",placeholder:"Enter your username",rounded:"large"}};var d,i,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: "Username",
    placeholder: "Enter your username",
    rounded: "full"
  }
} as {
  args: InputProps;
}`,...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var c,g,f;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: "Username",
    placeholder: "Enter your username",
    size: "large"
  }
} as {
  args: InputProps;
}`,...(f=(g=n.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var v,b,y;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: "Username",
    placeholder: "Enter your username",
    error: "Invalid username"
  }
} as {
  args: InputProps;
}`,...(y=(b=s.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var h,x,E;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: "Username",
    placeholder: "Enter your username",
    disabled: true,
    value: "Sathya"
  }
} as {
  args: InputProps;
}`,...(E=(x=l.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};var T,I,q;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: "Username",
    placeholder: "Enter your username",
    rounded: "large"
  }
} as {
  args: InputProps;
}`,...(q=(I=t.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};const O=["Basic","Large","Error","Disabled","Rounded"];export{r as Basic,l as Disabled,s as Error,n as Large,t as Rounded,O as __namedExportsOrder,F as default};
