import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{c as E}from"./index-i5X67GZP.js";import{R as W}from"./index-DJO9vBfz.js";import{c}from"./createLucideIcon-BFnLqEV_.js";import{X as M}from"./x-B0qYhAM_.js";/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=c("Ban",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.9 4.9 14.2 14.2",key:"1m5liu"}]]);/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=c("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=c("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=c("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);function S({message:C,type:s="info",description:l,showIcon:q=!0,closable:P=!1}){const[z,_]=W.useState(!0);return z?e.jsxs("div",{className:E("p-3 border border-solid rounded-sm",{"bg-blue-500 bg-opacity-10 border-blue-500":s==="info","bg-red-500 bg-opacity-10 border-red-500":s==="error","bg-green-500 bg-opacity-10 border-green-500":s==="success","bg-yellow-500 bg-opacity-10 border-yellow-500":s==="warning"}),children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsxs("span",{className:"text-sm flex items-center gap-2",children:[q&&e.jsxs("span",{children:[s==="info"&&e.jsx(L,{size:14,className:"text-blue-500"}),s==="success"&&e.jsx(V,{size:14,className:"text-green-500"}),s==="error"&&e.jsx(R,{size:14,className:"text-red-500"}),s==="warning"&&e.jsx(B,{size:14,className:"text-yellow-500"})]}),C]}),P&&e.jsx(M,{size:18,className:"cursor-pointer",onClick:()=>_(!1)})]}),l&&e.jsx("p",{className:"text-xs",children:l})]}):null}S.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{message:{required:!0,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"union",raw:'"success" | "error" | "warning" | "info"',elements:[{name:"literal",value:'"success"'},{name:"literal",value:'"error"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"info"'}]},description:"",defaultValue:{value:'"info"',computed:!1}},description:{required:!1,tsType:{name:"string"},description:""},showIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const G={component:S,title:"Alert",tags:["autodocs"]},r={args:{message:"This is an info alert",description:"This is the description of the info alert , it can be multiline",type:"info"}},a={args:{message:"This is a success alert",description:"This is the description of the success alert , it can be multiline",type:"success"}},i={args:{message:"This is an error alert",description:"This is the description of the error alert , it can be multiline",type:"error"}},t={args:{message:"This is a warning alert",description:"This is the description of the warning alert , it can be multiline",type:"warning"}},n={args:{message:"Info alert without icon",description:"This is the description of the info alert , it can be multiline",type:"info",showIcon:!1}},o={args:{message:"This is a closable alert",description:"This is the description of the closable alert , it can be multiline",type:"info",closable:!0}};var p,m,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    message: "This is an info alert",
    description: "This is the description of the info alert , it can be multiline",
    type: "info"
  }
} as {
  args: AlertProps;
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,g,h;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    message: "This is a success alert",
    description: "This is the description of the success alert , it can be multiline",
    type: "success"
  }
} as {
  args: AlertProps;
}`,...(h=(g=a.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var f,b,y;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    message: "This is an error alert",
    description: "This is the description of the error alert , it can be multiline",
    type: "error"
  }
} as {
  args: AlertProps;
}`,...(y=(b=i.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var x,T,w;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    message: "This is a warning alert",
    description: "This is the description of the warning alert , it can be multiline",
    type: "warning"
  }
} as {
  args: AlertProps;
}`,...(w=(T=t.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var j,k,A;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    message: "Info alert without icon",
    description: "This is the description of the info alert , it can be multiline",
    type: "info",
    showIcon: false
  }
} as {
  args: AlertProps;
}`,...(A=(k=n.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var I,N,v;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    message: "This is a closable alert",
    description: "This is the description of the closable alert , it can be multiline",
    type: "info",
    closable: true
  }
} as {
  args: AlertProps;
}`,...(v=(N=o.parameters)==null?void 0:N.docs)==null?void 0:v.source}}};const H=["Info","Success","Error","Warning","WithoutIcon","Closable"];export{o as Closable,i as Error,r as Info,a as Success,t as Warning,n as WithoutIcon,H as __namedExportsOrder,G as default};
