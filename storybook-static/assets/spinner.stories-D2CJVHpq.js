import{j as t}from"./jsx-runtime-CkxqCPlQ.js";import{c as z}from"./index-i5X67GZP.js";import"./index-DJO9vBfz.js";function h({size:o,color:n,text:k=""}){return t.jsxs("div",{className:"w-max flex flex-col gap-1",children:[t.jsx("div",{className:z("border border-solid border-t-transparent rounded-full animate-spin",{"h-10 w-10 border-4":o==="small","h-16 w-16 border-8":o==="medium","h-24 w-24 border-8":o==="large"}),style:{borderTopColor:"transparent",borderRightColor:n,borderBottomColor:n,borderLeftColor:n}}),t.jsx("span",{className:"text-sm",children:k})]})}h.__docgenInfo={description:"",methods:[],displayName:"Spinner",props:{size:{required:!0,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:""},color:{required:!0,tsType:{name:"string"},description:""},text:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const w={title:"Spinner",component:h,tags:["autodocs"]},e={args:{size:"small",color:"black"}},r={args:{size:"medium",color:"black"}},s={args:{size:"large",color:"black"}},a={args:{size:"small",color:"black",text:"Loading products..."}};var l,i,c;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    size: "small",
    color: "black"
  }
} as {
  args: SpinnerProps;
}`,...(c=(i=e.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var m,d,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    size: "medium",
    color: "black"
  }
} as {
  args: SpinnerProps;
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,g,b;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    size: "large",
    color: "black"
  }
} as {
  args: SpinnerProps;
}`,...(b=(g=s.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var x,S,f;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    size: "small",
    color: "black",
    text: "Loading products..."
  }
} as {
  args: SpinnerProps;
}`,...(f=(S=a.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};const y=["Small","Medium","Large","WithText"];export{s as Large,r as Medium,e as Small,a as WithText,y as __namedExportsOrder,w as default};
