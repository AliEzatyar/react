import{j as s,aE as e,b9 as r,bu as o,bv as l,bb as n}from"./index-CbdGNVhE.js";import{C as t}from"./CardBox-DWufozWR.js";import{C as i}from"./CodeModal-CQLFjqdl.js";import{B as c}from"./BreadcrumbComp-B5-q4JsV.js";import"./Card-DYrQhspN.js";import"./toConsumableArray-CGYUFXbV.js";import"./extends-CF3RwP-h.js";const d=()=>s.jsx("div",{children:s.jsx(i,{children:`
    import { ListGroup } from "flowbite-react";
    
    <ListGroup>
      <ListGroup.Item>Profile</ListGroup.Item>
      <ListGroup.Item>Settings</ListGroup.Item>
      <ListGroup.Item>Messages</ListGroup.Item>
      <ListGroup.Item disabled>Download</ListGroup.Item>
    </ListGroup>
                `})}),m=()=>s.jsx("div",{children:s.jsxs(t,{children:[s.jsxs("div",{className:"flex items-center justify-between mb-2",children:[s.jsx("h4",{className:"text-lg font-semibold",children:"Default list group"}),s.jsx(d,{})]}),s.jsx("div",{children:s.jsxs(e,{children:[s.jsx(e.Item,{children:"Profile"}),s.jsx(e.Item,{children:"Settings"}),s.jsx(e.Item,{children:"Messages"}),s.jsx(e.Item,{disabled:!0,children:"Download"})]})})]})}),a=()=>s.jsx("div",{children:s.jsx(i,{children:`
    import { ListGroup } from "flowbite-react";
    
    <ListGroup>
      <ListGroup.Item href="#" active>
        Profile
      </ListGroup.Item>
      <ListGroup.Item href="#">Settings</ListGroup.Item>
      <ListGroup.Item href="#">Messages</ListGroup.Item>
      <ListGroup.Item href="#">Download</ListGroup.Item>
    </ListGroup>
                `})}),u=()=>s.jsx("div",{children:s.jsxs(t,{children:[s.jsxs("div",{className:"flex items-center justify-between mb-2",children:[s.jsx("h4",{className:"text-lg font-semibold",children:"List items as links"}),s.jsx(a,{})]}),s.jsx("div",{children:s.jsxs(e,{children:[s.jsx(e.Item,{href:"#",active:!0,children:"Profile"}),s.jsx(e.Item,{href:"#",children:"Settings"}),s.jsx(e.Item,{href:"#",children:"Messages"}),s.jsx(e.Item,{href:"#",children:"Download"})]})})]})}),p=()=>s.jsx("div",{children:s.jsx(i,{children:`
    import { ListGroup } from "flowbite-react";

    <ListGroup>
      <ListGroup.Item
        onClick={() => alert("Profile clicked!")}
        active
      >
        Profile
      </ListGroup.Item>
      <ListGroup.Item>Settings</ListGroup.Item>
      <ListGroup.Item>Messages</ListGroup.Item>
      <ListGroup.Item>Download</ListGroup.Item>
    </ListGroup>
                `})}),x=()=>s.jsx("div",{children:s.jsxs(t,{children:[s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsx("h4",{className:"text-lg font-semibold",children:"List group with buttons"}),s.jsx(p,{})]}),s.jsx("div",{children:s.jsxs(e,{children:[s.jsx(e.Item,{onClick:()=>alert("Profile clicked!"),active:!0,children:"Profile"}),s.jsx(e.Item,{children:"Settings"}),s.jsx(e.Item,{children:"Messages"}),s.jsx(e.Item,{children:"Download"})]})})]})}),j=()=>s.jsx("div",{children:s.jsx(i,{children:`
    import { ListGroup } from "flowbite-react";
    import { HiCloudDownload, HiInbox, HiOutlineAdjustments, HiUserCircle } from "react-icons/hi";
    
    <ListGroup>
      <ListGroup.Item icon={HiUserCircle} active>
        Profile
      </ListGroup.Item>
      <ListGroup.Item icon={HiOutlineAdjustments}>
        Settings
      </ListGroup.Item>
      <ListGroup.Item icon={HiInbox}>Messages</ListGroup.Item>
      <ListGroup.Item icon={HiCloudDownload}>Download</ListGroup.Item>
    </ListGroup>  
                `})}),h=()=>s.jsx("div",{children:s.jsxs(t,{children:[s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsx("h4",{className:"text-lg font-semibold",children:"List group with icons"}),s.jsx(j,{})]}),s.jsx("div",{children:s.jsxs(e,{children:[s.jsx(e.Item,{icon:r,active:!0,children:"Profile"}),s.jsx(e.Item,{icon:o,children:"Settings"}),s.jsx(e.Item,{icon:l,children:"Messages"}),s.jsx(e.Item,{icon:n,children:"Download"})]})})]})}),L=[{to:"/",title:"Home"},{title:"List Group"}],C=()=>s.jsxs(s.Fragment,{children:[s.jsx(c,{title:"List Group",items:L}),s.jsxs("div",{className:"grid grid-cols-12 gap-30",children:[s.jsx("div",{className:"lg:col-span-6 md:col-span-6 col-span-12",children:s.jsx(m,{})}),s.jsx("div",{className:"lg:col-span-6 md:col-span-6 col-span-12",children:s.jsx(u,{})}),s.jsx("div",{className:"lg:col-span-6 md:col-span-6 col-span-12",children:s.jsx(x,{})}),s.jsx("div",{className:"lg:col-span-6 md:col-span-6 col-span-12",children:s.jsx(h,{})})]})]});export{C as default};
