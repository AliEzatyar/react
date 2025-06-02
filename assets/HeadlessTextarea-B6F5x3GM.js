import{j as e}from"./index-CbdGNVhE.js";import{C as s}from"./CardBox-DWufozWR.js";import{C as a}from"./CodeModal-CQLFjqdl.js";import{J as t}from"./textarea-DXgbd8qw.js";import{H as d}from"./description-UBmOgCgm.js";import{H as r}from"./field-Bz5zx8cw.js";import{Q as i}from"./label-MdCs77Yl.js";import{B as l}from"./BreadcrumbComp-B5-q4JsV.js";import"./Card-DYrQhspN.js";import"./toConsumableArray-CGYUFXbV.js";import"./extends-CF3RwP-h.js";import"./useFocusRing-CXvZpW1I.js";import"./disabled-DeIIXrEU.js";import"./render-NI4Jg5tu.js";import"./use-sync-refs-BkeMvBOG.js";import"./hidden-BpERx2SG.js";const m=()=>e.jsx("div",{children:e.jsxs(s,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Basic Textarea"}),e.jsx(a,{children:`
    import { Textarea } from "@headlessui/react";

    <Textarea
        name="description"
        className="ui-form-control"
        rows={3}
      ></Textarea>
            `})]}),e.jsx(t,{name:"description",className:"ui-form-control rounded-md",rows:6})]})}),n=()=>e.jsx("div",{children:e.jsxs(s,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Disabled Textarea"}),e.jsx(a,{children:`
    import { Description, Field, Label, Textarea } from "@headlessui/react";

    <Field disabled>
        <Label className="text-ld mb-1 block font-medium data-[disabled]:opacity-50">
        Type Here
        </Label>
        <Description className="text-bodytext text-xs mb-2 data-[disabled]:opacity-50">
        Add any extra information about your event here.
        </Description>
        <Textarea
        name="description"
        className="ui-form-control rounded-md data-[disabled]:bg-gray-100"
        rows={6}
        ></Textarea>
    </Field>
            `})]}),e.jsxs(r,{disabled:!0,children:[e.jsx(i,{className:"text-ld mb-1 block font-medium data-[disabled]:opacity-50",children:"Type Here"}),e.jsx(d,{className:"text-bodytext text-xs mb-2 data-[disabled]:opacity-50",children:"Add any extra information about your event here."}),e.jsx(t,{name:"description",className:"ui-form-control rounded-md data-[disabled]:bg-gray-100 dark:data-[disabled]:bg-dark",rows:6})]})]})}),c=()=>e.jsx("div",{children:e.jsxs(s,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Discription With Textarea"}),e.jsx(a,{children:`
    import { Description, Field, Label, Textarea } from "@headlessui/react";

   <Field>
        <Label className="text-ld mb-1 block font-medium">Type Here</Label>
        <Description className="text-bodytext text-xs mb-2">
        Add any extra information about your event here.
        </Description>
        <Textarea
        name="description"
        className="ui-form-control rounded-md"
        rows={6}
        ></Textarea>
    </Field>
            `})]}),e.jsxs(r,{children:[e.jsx(i,{className:"text-ld mb-1 block font-medium",children:"Type Here"}),e.jsx(d,{className:"text-bodytext text-xs mb-2",children:"Add any extra information about your event here."}),e.jsx(t,{name:"description",className:"ui-form-control rounded-md",rows:6})]})]})}),x=()=>e.jsx("div",{children:e.jsxs(s,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Label With Textarea"}),e.jsx(a,{children:`
    import { Textarea } from "@headlessui/react";

    <Field>
        <Label className="text-ld mb-2 block ">Description</Label>
        <Textarea
        name="description"
        className="ui-form-control rounded-md"
        rows={4}
        ></Textarea>
    </Field>
            `})]}),e.jsxs(r,{children:[e.jsx(i,{className:"text-ld mb-2 block font-medium",children:"Description"}),e.jsx(t,{name:"description",className:"ui-form-control rounded-md",rows:4})]})]})}),k=()=>{const o=[{to:"/",title:"Home"},{title:"Textarea"}];return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Textarea",items:o}),e.jsxs("div",{className:"grid grid-cols-12 gap-30",children:[e.jsx("div",{className:"md:col-span-6 col-span-12",children:e.jsx(m,{})}),e.jsx("div",{className:"md:col-span-6 col-span-12",children:e.jsx(x,{})}),e.jsx("div",{className:"md:col-span-6 col-span-12",children:e.jsx(c,{})}),e.jsx("div",{className:"md:col-span-6 col-span-12",children:e.jsx(n,{})})]})]})};export{k as default};
