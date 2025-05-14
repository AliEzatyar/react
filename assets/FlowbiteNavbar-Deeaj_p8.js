import{j as e,N as a,F as s,B as o,L as l,f as r,ae as t,o as d}from"./index-P2HWq5AB.js";import{C as i}from"./CardBox-iBHS77gx.js";import{C as n}from"./CodeModal-ZdVmlQAl.js";import{B as c}from"./BreadcrumbComp-BnVnHUMk.js";import"./toConsumableArray-B7RXd_Ox.js";import"./extends-CF3RwP-h.js";import"./core-DD6kpHa4.js";const m=()=>e.jsx("div",{children:e.jsxs(i,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Navbar With CTA Button"}),e.jsx(n,{children:`
      import { Button, Navbar } from "flowbite-react";
      
      <Navbar fluid className="rounded-md">
        <FullLogo/>
          <div className="flex md:order-2">
            <Button color="primary">Get started</Button>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse className="overflow-x-auto">
            <Navbar.Link href="#" active className="text-primary">
              Home
            </Navbar.Link>
            <Navbar.Link href="#">About</Navbar.Link>
            <Navbar.Link href="#">Services</Navbar.Link>
            <Navbar.Link href="#">Pricing</Navbar.Link>
            <Navbar.Link href="#">Contact</Navbar.Link>
          </Navbar.Collapse>
      </Navbar>
                `})]}),e.jsxs(a,{fluid:!0,className:"rounded-md",children:[e.jsx(s,{}),e.jsxs("div",{className:"flex md:order-2",children:[e.jsx(o,{color:"primary",className:"me-1",children:"Get started"}),e.jsx(a.Toggle,{})]}),e.jsxs(a.Collapse,{className:"overflow-x-auto",children:[e.jsx(a.Link,{href:"#",active:!0,className:"text-primary",children:"Home"}),e.jsx(a.Link,{href:"#",children:"About"}),e.jsx(a.Link,{href:"#",children:"Services"}),e.jsx(a.Link,{href:"#",children:"Pricing"}),e.jsx(a.Link,{href:"#",children:"Contact"})]})]})]})}),v=()=>e.jsx("div",{children:e.jsxs(i,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Default Navbar"}),e.jsx(n,{children:`
       import {Navbar } from "flowbite-react";
      
       <Navbar fluid className="rounded-md">
          <FullLogo />
          <Navbar.Toggle />
          <Navbar.Collapse className="overflow-x-auto">
            <Navbar.Link href="#" active className="text-primary">
              Home
            </Navbar.Link>
            <Navbar.Link as={Link} href="#">
              About
            </Navbar.Link>
            <Navbar.Link href="#">Services</Navbar.Link>
            <Navbar.Link href="#">Pricing</Navbar.Link>
            <Navbar.Link href="#">Contact</Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
                `})]}),e.jsxs(a,{fluid:!0,className:"rounded-md",children:[e.jsx(s,{}),e.jsx(a.Toggle,{}),e.jsxs(a.Collapse,{className:"overflow-x-auto",children:[e.jsx(a.Link,{href:"#",active:!0,className:"text-primary",children:"Home"}),e.jsx(a.Link,{as:l,to:"#",children:"About"}),e.jsx(a.Link,{href:"#",children:"Services"}),e.jsx(a.Link,{href:"#",children:"Pricing"}),e.jsx(a.Link,{href:"#",children:"Contact"})]})]})]})}),N=()=>e.jsx("div",{children:e.jsxs(i,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Navbar With Dropdown"}),e.jsx(n,{children:`
      import { Navbar, Dropdown, Avatar } from "flowbite-react";
      
      <Navbar fluid className="rounded-md">
          <FullLogo />
          <div className="flex md:order-2">
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar
                  alt="User settings"
                  img={user}
                  rounded
                />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">Bonnie Green</span>
                <span className="block truncate text-sm font-medium">
                  info@matdash.com
                </span>
              </Dropdown.Header>
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse className="overflow-x-auto">
            <Navbar.Link href="#" active className="text-primary">
              Home
            </Navbar.Link>
            <Navbar.Link href="#">About</Navbar.Link>
            <Navbar.Link href="#">Services</Navbar.Link>
            <Navbar.Link href="#">Pricing</Navbar.Link>
            <Navbar.Link href="#">Contact</Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
                `})]}),e.jsxs(a,{fluid:!0,className:"rounded-md",children:[e.jsx(s,{}),e.jsxs("div",{className:"flex md:order-2",children:[e.jsxs(r,{arrowIcon:!1,inline:!0,label:e.jsx(t,{alt:"User settings",img:d,rounded:!0}),children:[e.jsxs(r.Header,{children:[e.jsx("span",{className:"block text-sm",children:"Bonnie Green"}),e.jsx("span",{className:"block truncate text-sm font-medium",children:"info@matdash.com"})]}),e.jsx(r.Item,{children:"Dashboard"}),e.jsx(r.Item,{children:"Settings"}),e.jsx(r.Item,{children:"Earnings"}),e.jsx(r.Divider,{}),e.jsx(r.Item,{children:"Sign out"})]}),e.jsx(a.Toggle,{})]}),e.jsxs(a.Collapse,{className:"overflow-x-auto",children:[e.jsx(a.Link,{href:"#",active:!0,className:"text-primary",children:"Home"}),e.jsx(a.Link,{href:"#",children:"About"}),e.jsx(a.Link,{href:"#",children:"Services"}),e.jsx(a.Link,{href:"#",children:"Pricing"}),e.jsx(a.Link,{href:"#",children:"Contact"})]})]})]})}),x=[{to:"/",title:"Home"},{title:"Navbar"}],k=()=>e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Navbar",items:x}),e.jsxs("div",{className:"grid grid-cols-12 gap-30",children:[e.jsx("div",{className:"col-span-12",children:e.jsx(v,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(m,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(N,{})})]})]});export{k as default};
