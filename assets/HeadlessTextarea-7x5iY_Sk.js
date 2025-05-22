import{j as e}from"./index-BofOdt6x.js";import{C as s}from"./CardBox-DwJnOFrw.js";import{C as a}from"./CodeModal-BtUURIBs.js";import{J as t}from"./textarea-Bh1_-cxD.js";import{H as o}from"./description-DAuExW8v.js";import{H as r}from"./field-Df14yZ9f.js";import{Q as i}from"./label-Ce_cNn0Z.js";import{B as l}from"./BreadcrumbComp-B936abq-.js";import"./Card-D_l9r_n3.js";import"./toConsumableArray-CcjcqDNZ.js";import"./extends-CF3RwP-h.js";import"./core-DD6kpHa4.js";import"./useFocusRing-Cu1umf0H.js";import"./disabled-mEMLDSam.js";import"./render-XO5tK_Yh.js";import"./use-sync-refs-sXKuz3Bt.js";import"./hidden-BTmvpjwx.js";const m=()=>e.jsx("div",{children:e.jsxs(s,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Basic Textarea"}),e.jsx(a,{children:`
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
            `})]}),e.jsxs(r,{disabled:!0,children:[e.jsx(i,{className:"text-ld mb-1 block font-medium data-[disabled]:opacity-50",children:"Type Here"}),e.jsx(o,{className:"text-bodytext text-xs mb-2 data-[disabled]:opacity-50",children:"Add any extra information about your event here."}),e.jsx(t,{name:"description",className:"ui-form-control rounded-md data-[disabled]:bg-gray-100 dark:data-[disabled]:bg-dark",rows:6})]})]})}),c=()=>e.jsx("div",{children:e.jsxs(s,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Discription With Textarea"}),e.jsx(a,{children:`
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
            `})]}),e.jsxs(r,{children:[e.jsx(i,{className:"text-ld mb-1 block font-medium",children:"Type Here"}),e.jsx(o,{className:"text-bodytext text-xs mb-2",children:"Add any extra information about your event here."}),e.jsx(t,{name:"description",className:"ui-form-control rounded-md",rows:6})]})]})}),x=()=>e.jsx("div",{children:e.jsxs(s,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Label With Textarea"}),e.jsx(a,{children:`
    import { Textarea } from "@headlessui/react";

    <Field>
        <Label className="text-ld mb-2 block ">Description</Label>
        <Textarea
        name="description"
        className="ui-form-control rounded-md"
        rows={4}
        ></Textarea>
    </Field>
            `})]}),e.jsxs(r,{children:[e.jsx(i,{className:"text-ld mb-2 block font-medium",children:"Description"}),e.jsx(t,{name:"description",className:"ui-form-control rounded-md",rows:4})]})]})}),B=()=>{const d=[{to:"/",title:"Home"},{title:"Textarea"}];return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Textarea",items:d}),e.jsxs("div",{className:"grid grid-cols-12 gap-30",children:[e.jsx("div",{className:"md:col-span-6 col-span-12",children:e.jsx(m,{})}),e.jsx("div",{className:"md:col-span-6 col-span-12",children:e.jsx(x,{})}),e.jsx("div",{className:"md:col-span-6 col-span-12",children:e.jsx(c,{})}),e.jsx("div",{className:"md:col-span-6 col-span-12",children:e.jsx(n,{})})]})]})};export{B as default};
