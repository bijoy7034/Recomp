import{f as x}from"./index-DhvbgntC.js";import{b as S}from"./Checkbox-GwA9Qx6M.js";import{G as L}from"./iconBase-UKYPtEjm.js";import{R as w}from"./index-DmM0KDA7.js";import"./index-CnHy7ftH.js";import"./index-nLeaPAJ8.js";function R(P){return L({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"},child:[]},{tag:"polyline",attr:{points:"12 5 19 12 12 19"},child:[]}]})(P)}const W={title:"Components/Button",component:S,parameters:{layout:"centered"},tags:["autodocs"],args:{onPress:x()},argTypes:{label:{description:"Text inside the button"},isDisabled:{description:"Disables the button when true",control:"boolean"},onPress:{description:"Function triggered on button press",action:"pressed"},variant:{description:"Defines the button style (primary/secondary)",control:"radio",options:["primary","secondary"]},icon:{description:"Optional icon element",control:"none"},isPending:{description:"Displays a loading state when true",control:"boolean"}}},r={args:{label:"Primary"}},e={args:{label:"Disabled",isDisabled:!0}},o={args:{label:"Next",icon:w.createElement(R,null)}},a={args:{label:"Confirm",variant:"secondary"}},n={args:{label:"Loading...",isPending:!0}};var s,t,i;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    label: "Primary"
  }
}`,...(i=(t=r.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};var c,l,d;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: "Disabled",
    isDisabled: true
  }
}`,...(d=(l=e.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var p,m,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: "Next",
    icon: <FiArrowRight />
  }
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,b,y;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: "Confirm",
    variant: "secondary"
  }
}`,...(y=(b=a.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var h,f,D;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: "Loading...",
    isPending: true
  }
}`,...(D=(f=n.parameters)==null?void 0:f.docs)==null?void 0:D.source}}};const _=["Primary","Disabled","WithIcon","Secondary","Loading"];export{e as Disabled,n as Loading,r as Primary,a as Secondary,o as WithIcon,_ as __namedExportsOrder,W as default};
