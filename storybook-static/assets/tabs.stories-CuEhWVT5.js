import{j as a}from"./jsx-runtime-CkxqCPlQ.js";import{r as w}from"./index-DJO9vBfz.js";import{c as n}from"./index-i5X67GZP.js";function d({tabsData:s,activeTab:e,onTabChange:c,disabledTabIndexes:N=[],orientaion:r="horizontal"}){return a.jsxs("div",{className:n("flex gap-5",{"flex-row justify-start":r==="vertical","flex-col":r==="horizontal"}),children:[a.jsx("div",{className:n("flex gap-5 border-0 border-solid border-gray-300",{"flex-col border-r":r==="vertical","flex-row border-b":r==="horizontal"}),children:s.map((j,t)=>a.jsx("div",{className:n("py-2 pr-2 cursor-pointer",{"border-primary border-solid border-b-4 border-0":e===t&&r==="horizontal","border-primary border-solid border-r-4 border-0":e===t&&r==="vertical","opacity-50 cursor-not-allowed pointer-events-none":N.includes(t)}),onClick:()=>c(t),children:a.jsx("span",{className:n("text-sm text-gray-500",{"text-primary":e===t}),children:j.title})}))}),a.jsx("div",{className:"text-sm",children:s[e].content})]})}d.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{tabsData:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
  title: string;\r
  content: React.ReactNode;\r
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"content",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}}]}}],raw:`Array<{\r
  title: string;\r
  content: React.ReactNode;\r
}>`},description:""},activeTab:{required:!0,tsType:{name:"number"},description:""},onTabChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""},disabledTabIndexes:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:"",defaultValue:{value:"[]",computed:!1}},orientaion:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"",defaultValue:{value:'"horizontal"',computed:!1}}}};const S={component:d,title:"Tabs",tags:["autodocs"]},m=[{title:"Tab 1",content:"Content of Tab 1"},{title:"Tab 2",content:"Content of Tab 2"},{title:"Tab 3",content:"Content of Tab 3"}],p=s=>{const[e,c]=w.useState(0);return a.jsx(d,{...s,activeTab:e,onTabChange:c})},o={args:{tabsData:m},render:p},i={args:{tabsData:m,disabledTabIndexes:[1]},render:p},l={args:{tabsData:m,orientaion:"vertical"},render:p};var u,b,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    tabsData
  },
  render: Template
} as {
  args: TabsProps;
  render: () => JSX.Element;
}`,...(g=(b=o.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var T,f,x;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    tabsData,
    disabledTabIndexes: [1]
  },
  render: Template
} as {
  args: TabsProps;
  render: () => JSX.Element;
}`,...(x=(f=i.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var y,v,h;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    tabsData,
    orientaion: "vertical"
  },
  render: Template
} as {
  args: TabsProps;
  render: () => JSX.Element;
}`,...(h=(v=l.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const C=["Basic","WithDisabledTabs","Vertical"];export{o as Basic,l as Vertical,i as WithDisabledTabs,C as __namedExportsOrder,S as default};
