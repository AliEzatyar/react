import{j as e}from"./index-CbdGNVhE.js";import{C as t}from"./CardBox-DWufozWR.js";import{C as l}from"./CodeModal-CQLFjqdl.js";import{j as s}from"./select-epLYfjc0.js";import{H as o}from"./description-UBmOgCgm.js";import{H as a}from"./field-Bz5zx8cw.js";import{Q as i}from"./label-MdCs77Yl.js";import{B as d}from"./BreadcrumbComp-B5-q4JsV.js";import"./Card-DYrQhspN.js";import"./toConsumableArray-CGYUFXbV.js";import"./extends-CF3RwP-h.js";import"./useFocusRing-CXvZpW1I.js";import"./use-active-press-B171Jcqa.js";import"./owner-fH536Zf5.js";import"./render-NI4Jg5tu.js";import"./disabled-DeIIXrEU.js";import"./use-sync-refs-BkeMvBOG.js";import"./hidden-BpERx2SG.js";const n=()=>e.jsx("div",{children:e.jsxs(t,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Basic Select"}),e.jsx(l,{children:`
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
          `})]}),e.jsxs(a,{children:[e.jsx(i,{className:"text-ld mb-2 block",children:"Project status"}),e.jsxs(s,{name:"status","aria-label":"Project status",className:"ui-form-control rounded-md",children:[e.jsx("option",{value:"active",children:"Active"}),e.jsx("option",{value:"paused",children:"Paused"}),e.jsx("option",{value:"delayed",children:"Delayed"}),e.jsx("option",{value:"canceled",children:"Canceled"})]})]})]})}),k=()=>{const c=[{to:"/",title:"Home"},{title:"Select"}];return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Select",items:c}),e.jsxs("div",{className:"grid grid-cols-12 gap-30",children:[e.jsx("div",{className:"md:col-span-6 col-span-12",children:e.jsx(n,{})}),e.jsx("div",{className:"md:col-span-6 col-span-12",children:e.jsx(p,{})}),e.jsx("div",{className:"md:col-span-6 col-span-12",children:e.jsx(m,{})}),e.jsx("div",{className:"md:col-span-6 col-span-12",children:e.jsx(r,{})})]})]})};export{k as default};
