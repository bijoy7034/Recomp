import{R as e,r as u}from"./index-DmM0KDA7.js";import{b as c,a as z}from"./Input-CqMWoZAq.js";import{G as I}from"./iconBase-UKYPtEjm.js";import"./index-CnHy7ftH.js";import"./index-nLeaPAJ8.js";function M(r){return I({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 2C9.243 2 7 4.243 7 7v2H6c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-9c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v2H9V7zm9.002 13H13v-2.278c.595-.347 1-.985 1-1.722 0-1.103-.897-2-2-2s-2 .897-2 2c0 .736.405 1.375 1 1.722V20H6v-9h12l.002 9z"},child:[]}]})(r)}function L(r){return I({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"},child:[]}]})(r)}const N={title:"Components/Input",component:c,tags:["autodocs"],argTypes:{label:{description:"The label text displayed above the input field.",control:"text"},placeholder:{description:"The placeholder text inside the input field.",control:"text"},icon:{description:"An optional icon to be displayed inside the input field.",control:"object"},type:{description:"The type of input field (e.g., text, password, email).",control:"text"},description:{description:"A small description or helper text below the input field.",control:"text"},alert:{description:"Displays an alert message below the input field in case of an error.",control:"text"},required:{description:"Marks the field as required.",control:"boolean"},validationBehavior:{description:"Specifies how validation is handled (e.g., 'native' or 'aria').",control:{type:"radio"},options:["native","aria"]}}},t={args:{label:"Name",placeholder:"Enter your name"}},n={args:{label:"Email",placeholder:"Enter your email",description:"We'll never share your email with anyone else."}},o={args:{label:"Username",placeholder:"Enter your username",icon:e.createElement(L,null)}},s={args:{label:"Password",type:"password",placeholder:"Enter your password",description:"Must be at least 8 characters.",icon:e.createElement(M,null)}},l={render:()=>{const[r,p]=u.useState(null),[a,R]=u.useState({username:"",password:""}),d=i=>q=>{R({...a,[i]:q.target.value})},U=i=>{i.preventDefault(),p(null),a.password.length<8?p("Password must be at least 8 characters."):r(JSON.stringify(a,null,2))};return e.createElement("form",{onSubmit:U,style:{display:"flex",flexDirection:"column",gap:"1rem",width:"300px"}},e.createElement(c,{label:"Username",placeholder:"Enter your username",icon:e.createElement(L,null),value:a.username,onChange:d("username"),required:!0}),e.createElement(c,{alert:r,label:"Password",type:"password",placeholder:"Enter your password",description:"Must be at least 8 characters.",icon:e.createElement(M,null),value:a.password,onChange:d("password"),required:!0}),e.createElement(z,{type:"submit",label:"Login"}))}};var m,h,f;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: "Name",
    placeholder: "Enter your name"
  }
}`,...(f=(h=t.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var g,b,y;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: "Email",
    placeholder: "Enter your email",
    description: "We'll never share your email with anyone else."
  }
}`,...(y=(b=n.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var w,v,E;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: "Username",
    placeholder: "Enter your username",
    icon: <BiUser />
  }
}`,...(E=(v=o.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};var x,D,S;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
    description: "Must be at least 8 characters.",
    icon: <BiLock />
  }
}`,...(S=(D=s.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var B,C,F;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    const [alert, setAlert] = useState(null);
    const [formData, setFormData] = useState({
      username: "",
      password: ""
    });
    const handleChange = field => e => {
      setFormData({
        ...formData,
        [field]: e.target.value
      });
    };
    const handleSubmit = e => {
      e.preventDefault();
      setAlert(null);
      if (formData.password.length < 8) {
        setAlert("Password must be at least 8 characters.");
      } else {
        alert(JSON.stringify(formData, null, 2));
      }
    };
    return <form onSubmit={handleSubmit} style={{
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      width: "300px"
    }}>
      <RecompInput label="Username" placeholder="Enter your username" icon={<BiUser />} value={formData.username} onChange={handleChange("username")} required />
      <RecompInput alert={alert} label="Password" type="password" placeholder="Enter your password" description={"Must be at least 8 characters."} icon={<BiLock />} value={formData.password} onChange={handleChange("password")} required />
      <RecompButton type="submit" label="Login" />
    </form>;
  }
}`,...(F=(C=l.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};const T=["Default","WithDescription","WithIcon","FullFeature","LoginForm"];export{t as Default,s as FullFeature,l as LoginForm,n as WithDescription,o as WithIcon,T as __namedExportsOrder,N as default};
