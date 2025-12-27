import"./index-CC6F48bw.js";import{fn as e}from"./index-DajN9u-m.js";import{a as g}from"./Checkbox-QNpjXm2F.js";import"./index-w8ShHWsj.js";import"./index-qiR4Kxfn.js";const L={title:"Components/Menu",component:g,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{items:{description:"List of menu items with labels and actions"},variant:{control:{type:"radio"},options:["primary","secondary"],description:"Theme variant of the menu"}}},k=[{label:"Open",onClick:e()},{label:"Rename",onClick:e()},{label:"Duplicate",onClick:e()},{label:"Share",onClick:e()},{label:"Delete",onClick:e()}],n={args:{items:k,variant:"primary"}},a={args:{items:k,variant:"secondary"}},r={args:{items:[{label:"Settings",onClick:e()},{label:"Logout",onClick:e()}],variant:"primary"}},o={args:{items:[{label:"Dashboard",onClick:e()},{label:"Profile",onClick:e()},{label:"Messages",onClick:e()},{label:"Notifications",onClick:e()},{label:"Security",onClick:e()},{label:"Preferences",onClick:e()},{label:"Help",onClick:e()},{label:"Logout",onClick:e()}],variant:"primary"}};var s,l,t;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    items: sampleItems,
    variant: "primary"
  }
}`,...(t=(l=n.parameters)==null?void 0:l.docs)==null?void 0:t.source}}};var i,c,m;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    items: sampleItems,
    variant: "secondary"
  }
}`,...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,u,b;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    items: [{
      label: "Settings",
      onClick: fn()
    }, {
      label: "Logout",
      onClick: fn()
    }],
    variant: "primary"
  }
}`,...(b=(u=r.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var d,C,f;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    items: [{
      label: "Dashboard",
      onClick: fn()
    }, {
      label: "Profile",
      onClick: fn()
    }, {
      label: "Messages",
      onClick: fn()
    }, {
      label: "Notifications",
      onClick: fn()
    }, {
      label: "Security",
      onClick: fn()
    }, {
      label: "Preferences",
      onClick: fn()
    }, {
      label: "Help",
      onClick: fn()
    }, {
      label: "Logout",
      onClick: fn()
    }],
    variant: "primary"
  }
}`,...(f=(C=o.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};const D=["DefaultMenu","SecondaryThemeMenu","ShortMenu","LongMenu"];export{n as DefaultMenu,o as LongMenu,a as SecondaryThemeMenu,r as ShortMenu,D as __namedExportsOrder,L as default};
