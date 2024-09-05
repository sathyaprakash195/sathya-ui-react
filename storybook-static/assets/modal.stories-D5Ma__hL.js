import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{r as k}from"./index-DJO9vBfz.js";import{c as B}from"./index-i5X67GZP.js";import{B as i}from"./index-4Ns97eRu.js";import{X as N}from"./x-B0qYhAM_.js";import"./index-BjW8pI2J.js";import"./createLucideIcon-BFnLqEV_.js";function d({showModal:l,onCancel:t,footer:a,title:v,children:w,size:n="medium",cancelButtonText:j="Cancel",okButtonText:y="Ok",onOk:C=()=>{},closable:b=!0}){return l?e.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center",children:e.jsxs("div",{className:B("bg-white shadow-lg rounded p-5 flex flex-col gap-3",{"w-1/4":n==="small","w-1/2":n==="medium","w-3/4":n==="large"}),children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("h1",{className:"text-lg font-normal",children:v}),b&&e.jsx(N,{onClick:t,className:"cursor-pointer"})]}),e.jsx("hr",{}),e.jsx("div",{className:"text-sm",children:w}),a&&e.jsxs("div",{className:"flex justify-end gap-5",children:[e.jsx(i,{title:j,onClick:t,variant:"outlined",rounded:"small"}),e.jsx(i,{title:y,onClick:C,rounded:"small"})]})]})}):null}d.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{showModal:{required:!0,tsType:{name:"boolean"},description:""},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},footer:{required:!1,tsType:{name:"boolean"},description:""},title:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},cancelButtonText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Cancel"',computed:!1}},okButtonText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Ok"',computed:!1}},onOk:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},closable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const W={title:"Modal",component:d,tags:["autodocs"]},u=l=>{const[t,a]=k.useState(!1);return e.jsxs("div",{children:[e.jsx(i,{title:"Open Modal",onClick:()=>a(!0),variant:"outlined",rounded:"medium"}),e.jsx(d,{...l,showModal:t,onCancel:()=>a(!1)})]})},r={args:{showModal:!0,children:"Modal Content",closable:!0,title:"Modal Title",size:"medium"},render:u},s={args:{showModal:!0,children:"Modal Content",closable:!0,title:"Modal Title",size:"medium",footer:!0,cancelButtonText:"Close",okButtonText:"Save",onOk:()=>alert("Saved!")},render:u},o={args:{showModal:!0,children:"Modal Content",closable:!1,title:"Modal Title",size:"medium"},render:u};var c,m,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    showModal: true,
    children: "Modal Content",
    closable: true,
    title: "Modal Title",
    size: "medium"
  },
  render: Template
} as {
  args: ModalProps;
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var f,g,h;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    showModal: true,
    children: "Modal Content",
    closable: true,
    title: "Modal Title",
    size: "medium",
    footer: true,
    cancelButtonText: "Close",
    okButtonText: "Save",
    onOk: () => alert("Saved!")
  },
  render: Template
} as {
  args: ModalProps;
}`,...(h=(g=s.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var x,M,T;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    showModal: true,
    children: "Modal Content",
    closable: false,
    title: "Modal Title",
    size: "medium"
  },
  render: Template
} as {
  args: ModalProps;
}`,...(T=(M=o.parameters)==null?void 0:M.docs)==null?void 0:T.source}}};const E=["Basic","WithFooter","WithoutCloseButton"];export{r as Basic,s as WithFooter,o as WithoutCloseButton,E as __namedExportsOrder,W as default};
