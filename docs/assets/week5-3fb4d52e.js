import{j as n,S as r,T as s,r as l,c as d,R as h}from"./Stack-1f1385d5.js";import{B as j}from"./Box-1c04c9fc.js";function m({imgLink:t,name:e,officeHour:c,email:o,phone:a,office:x}){return n.jsx(n.Fragment,{children:n.jsxs(r,{direction:"row",spacing:2,children:[n.jsx(u,{imgLink:t,name:e}),n.jsx(f,{officeHour:c,email:o,phone:a,office:x})]})})}function u({imgLink:t,name:e}){return n.jsxs(r,{direction:"column",spacing:2,children:[n.jsx(j,{sx:{width:"200px",height:"100%"},children:n.jsx("img",{src:t,alt:"image",width:"100%"})}),n.jsxs(s,{variant:"h6",children:[e," 教授"]})]})}function f({officeHour:t,email:e,phone:c,office:o}){return n.jsx(n.Fragment,{children:n.jsxs(r,{direction:"column",spacing:2,children:[n.jsx(i,{title:"Office Hours",content:t}),n.jsx(i,{title:"Email",content:e}),n.jsx(i,{title:"Phone",content:c}),n.jsx(i,{title:"Office",content:o})]})})}function i({title:t,content:e}){return n.jsxs(r,{direction:"column",spacing:2,children:[n.jsx(s,{variant:"h6",children:t}),n.jsx(s,{variant:"body1",children:e})]})}function g(){return l.useState(0),n.jsx(n.Fragment,{children:n.jsx(m,{imgLink:"https://econ.ntpu.edu.tw/storage/images/ZlP7DHjLRh8IeahmFoT1EMxkmCgaxYtguN76FqiW.jpg",name:"郭文宗",title:"教授",officeHour:"Thu. 12:00 - 14:00",email:"guowc@gm.ntpu.edu.tw",phone:"886-2-86741111 ext. 67156",office:"社3F16"})})}d.createRoot(document.getElementById("root")).render(n.jsx(h.StrictMode,{children:n.jsx(g,{})}));
