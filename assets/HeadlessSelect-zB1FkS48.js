import{j as e}from"./index-BofOdt6x.js";import{C as t}from"./CardBox-DwJnOFrw.js";import{C as l}from"./CodeModal-BtUURIBs.js";import{j as s}from"./select-D9qSjNSs.js";import{H as o}from"./description-DAuExW8v.js";import{H as a}from"./field-Df14yZ9f.js";import{Q as i}from"./label-Ce_cNn0Z.js";import{B as d}from"./BreadcrumbComp-B936abq-.js";import"./Card-D_l9r_n3.js";import"./toConsumableArray-CcjcqDNZ.js";import"./extends-CF3RwP-h.js";import"./core-DD6kpHa4.js";import"./useFocusRing-Cu1umf0H.js";import"./use-active-press-Bji0LVDj.js";import"./owner-S-LMO14O.js";import"./render-XO5tK_Yh.js";import"./disabled-mEMLDSam.js";import"./use-sync-refs-sXKuz3Bt.js";import"./hidden-BTmvpjwx.js";const n=()=>e.jsx("div",{children:e.jsxs(t,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Basic Select"}),e.jsx(l,{children:`
    import { Select } from "@headlessui/react";    
         
    <Select name="status" aria-label="Project status" className="ui-form-control rounded-md">
        <option value="active">Active</option>
        <option value="paused">Paused</option>
        <option value="delayed">Delayed</option>
        <option value="canceled">Canceled</option>
    </Select>
            `})]}),e.jsxs(s,{name:"status","aria-label":"Project status",className:"ui-form-control rounded-md my-4",children:[e.jsx("option",{value:"active",children:"Active"}),e.jsx("option",{value:"paused",children:"Paused"}),e.jsx("option",{value:"delayed",children:"Delayed"}),e.jsx("option",{value:"canceled",children:"Canceled"})]})]})}),r=()=>e.jsx("div",{children:e.jsxs(t,{children:[e.jsxs("div",{className:"flex items-center justify-between ",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Disabeld Select"}),e.jsx(l,{children:`
    import { Field, Label, Select,Description } from "@headlessui/react";    
     
    <Field disabled>
          <Label className="text-ld mb-1 block data-[disabled]:opacity-50">Project status</Label>
          <Description className="mb-2 text-bodytext text-xs data-[disabled]:opacity-50">This will be visible to clients on the project.</Description>
          <Select
            name="status"
            aria-label="Project status"
            className="ui-form-control rounded-md data-[disabled]:opacity-50"
          >
            <option value="active">Active</option>
            <option value="paused">Paused</option>
            <option value="delayed">Delayed</option>
            <option value="canceled">Canceled</option>
          </Select>
    </Field>
        `})]}),e.jsxs(a,{disabled:!0,children:[e.jsx(i,{className:"text-ld mb-1 block data-[disabled]:opacity-50",children:"Project status"}),e.jsx(o,{className:"mb-2 text-bodytext text-xs data-[disabled]:opacity-50",children:"This will be visible to clients on the project."}),e.jsxs(s,{name:"status","aria-label":"Project status",className:"ui-form-control rounded-md data-[disabled]:opacity-50",children:[e.jsx("option",{value:"active",children:"Active"}),e.jsx("option",{value:"paused",children:"Paused"}),e.jsx("option",{value:"delayed",children:"Delayed"}),e.jsx("option",{value:"canceled",children:"Canceled"})]})]})]})}),m=()=>e.jsx("div",{children:e.jsxs(t,{children:[e.jsxs("div",{className:"flex items-center justify-between ",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"With Descrioption Select"}),e.jsx(l,{children:`
    import { Field, Label, Select,Description } from "@headlessui/react";    
     
    <Field>
          <Label className="text-ld mb-1 block">Project status</Label>
          <Description className="mb-2 text-bodytext text-xs">This will be visible to clients on the project.</Description>
          <Select
            name="status"
            aria-label="Project status"
            className="ui-form-control rounded-md"
          >
            <option value="active">Active</option>
            <option value="paused">Paused</option>
            <option value="delayed">Delayed</option>
            <option value="canceled">Canceled</option>
          </Select>
    </Field>
        `})]}),e.jsxs(a,{children:[e.jsx(i,{className:"text-ld mb-1 block",children:"Project status"}),e.jsx(o,{className:"mb-2 text-bodytext text-xs",children:"This will be visible to clients on the project."}),e.jsxs(s,{name:"status","aria-label":"Project status",className:"ui-form-control rounded-md",children:[e.jsx("option",{value:"active",children:"Active"}),e.jsx("option",{value:"paused",children:"Paused"}),e.jsx("option",{value:"delayed",children:"Delayed"}),e.jsx("option",{value:"canceled",children:"Canceled"})]})]})]})}),p=()=>e.jsx("div",{children:e.jsxs(t,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"With Label Select"}),e.jsx(l,{children:`
    import { Field, Label, Select } from "@headlessui/react";    
       
    <Field>
          <Label className="text-ld mb-2 block">Project status</Label>
          <Select
            name="status"
            aria-label="Project status"
            className="ui-form-control rounded-md"
          >
            <option value="active">Active</option>
            <option value="paused">Paused</option>
            <option value="delayed">Delayed</option>
            <option value="canceled">Canceled</option>
          </Select>
    </Field>
          `})]}),e.jsxs(a,{children:[e.jsx(i,{className:"text-ld mb-2 block",children:"Project status"}),e.jsxs(s,{name:"status","aria-label":"Project status",className:"ui-form-control rounded-md",children:[e.jsx("option",{value:"active",children:"Active"}),e.jsx("option",{value:"paused",children:"Paused"}),e.jsx("option",{value:"delayed",children:"Delayed"}),e.jsx("option",{value:"canceled",children:"Canceled"})]})]})]})}),B=()=>{const c=[{to:"/",title:"Home"},{title:"Select"}];return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Select",items:c}),e.jsxs("div",{className:"grid grid-cols-12 gap-30",children:[e.jsx("div",{className:"md:col-span-6 col-span-12",children:e.jsx(n,{})}),e.jsx("div",{className:"md:col-span-6 col-span-12",children:e.jsx(p,{})}),e.jsx("div",{className:"md:col-span-6 col-span-12",children:e.jsx(m,{})}),e.jsx("div",{className:"md:col-span-6 col-span-12",children:e.jsx(r,{})})]})]})};export{B as default};
