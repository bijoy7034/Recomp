import{R as e,r as m}from"./index-CC6F48bw.js";import{c,R as q,b as z}from"./Checkbox-QNpjXm2F.js";import{G as F}from"./iconBase-BW3gPWBH.js";import"./index-w8ShHWsj.js";import"./index-qiR4Kxfn.js";function I(r){return F({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 2C9.243 2 7 4.243 7 7v2H6c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-9c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v2H9V7zm9.002 13H13v-2.278c.595-.347 1-.985 1-1.722 0-1.103-.897-2-2-2s-2 .897-2 2c0 .736.405 1.375 1 1.722V20H6v-9h12l.002 9z"},child:[]}]})(r)}function M(r){return F({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"},child:[]}]})(r)}const T={title:"Components/Input",component:c,tags:["autodocs"],argTypes:{label:{description:"The label text displayed above the input field.",control:"text"},placeholder:{description:"The placeholder text inside the input field.",control:"text"},icon:{description:"An optional icon to be displayed inside the input field.",control:"object"},type:{description:"The type of input field (e.g., text, password, email).",control:"text"},description:{description:"A small description or helper text below the input field.",control:"text"},alert:{description:"Displays an alert message below the input field in case of an error.",control:"text"},required:{description:"Marks the field as required.",control:"boolean"},validationBehavior:{description:"Specifies how validation is handled (e.g., 'native' or 'aria').",control:{type:"radio"},options:["native","aria"]}}},t={args:{label:"Name",placeholder:"Enter your name"}},o={args:{label:"Email",placeholder:"Enter your email",description:"We'll never share your email with anyone else."}},s={args:{label:"Username",placeholder:"Enter your username",icon:e.createElement(M,null)}},n={args:{label:"Password",type:"password",placeholder:"Enter your password",description:"Must be at least 8 characters.",icon:e.createElement(I,null)}},l={render:()=>{const[r,p]=m.useState(null),[a,L]=m.useState({username:"",password:""}),d=i=>k=>{L({...a,[i]:k.target.value})},U=i=>{i.preventDefault(),p(null),a.password.length<8?p("Password must be at least 8 characters."):r(JSON.stringify(a,null,2))};return e.createElement("form",{onSubmit:U,style:{display:"flex",flexDirection:"column",gap:"1rem",width:"300px"}},e.createElement(c,{label:"Username",placeholder:"Enter your username",icon:e.createElement(M,null),value:a.username,onChange:d("username"),required:!0}),e.createElement(c,{alert:r,label:"Password",type:"password",placeholder:"Enter your password",description:"Must be at least 8 characters.",icon:e.createElement(I,null),value:a.password,onChange:d("password"),required:!0}),e.createElement(q,{label:"Remember me"}),e.createElement(z,{type:"submit",label:"Login"}))}};var u,h,b;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: "Name",
    placeholder: "Enter your name"
  }
}`,...(b=(h=t.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var f,g,y;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: "Email",
    placeholder: "Enter your email",
    description: "We'll never share your email with anyone else."
  }
}`,...(y=(g=o.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var w,v,E;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: "Username",
    placeholder: "Enter your username",
    icon: <BiUser />
  }
}`,...(E=(v=s.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};var x,D,S;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
    description: "Must be at least 8 characters.",
    icon: <BiLock />
  }
}`,...(S=(D=n.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var C,R,B;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
      <RecompCheckbox label='Remember me' />
      <RecompButton type="submit" label="Login" />
    </form>;
  }
}`,...(B=(R=l.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};const O=["Default","WithDescription","WithIcon","FullFeature","LoginForm"];export{t as Default,n as FullFeature,l as LoginForm,o as WithDescription,s as WithIcon,O as __namedExportsOrder,T as default};
