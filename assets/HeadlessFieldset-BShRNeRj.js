import{r as n,a as m,j as e}from"./index-P2HWq5AB.js";import{H as o}from"./description-CBNApkT-.js";import{H as a}from"./field-BPMTWBig.js";import{y as C}from"./use-sync-refs-CHG90QLp.js";import{a as I,l as M}from"./disabled-CgoTiXBv.js";import{K as u,L as T}from"./render-BKlKWd6j.js";import{K as E,Q as i}from"./label-CN3rczfl.js";import{S as h}from"./input-DOEtquUU.js";import{j as f}from"./select-DIrJDDUE.js";import{J as b}from"./textarea-BnJmjY1Q.js";import{C as j}from"./CardBox-iBHS77gx.js";import{C as N}from"./CodeModal-ZdVmlQAl.js";import{B as H}from"./BreadcrumbComp-BnVnHUMk.js";import"./hidden-BgX8pakw.js";import"./useFocusRing-Di4h4CvJ.js";import"./use-active-press-C4eQ0n2y.js";import"./owner-CBjDaIWd.js";import"./toConsumableArray-B7RXd_Ox.js";import"./extends-CF3RwP-h.js";import"./core-DD6kpHa4.js";function $(l){let t=typeof l=="string"?l:void 0,[r,d]=n.useState(t);return[t??r,n.useCallback(s=>{t||s instanceof HTMLElement&&d(s.tagName.toLowerCase())},[t])]}let p="fieldset";function A(l,t){var r;let d=I(),{disabled:s=d||!1,...F}=l,[v,k]=$((r=l.as)!=null?r:p),c=C(t,k),[x,w]=E(),L=n.useMemo(()=>({disabled:s}),[s]),D=v==="fieldset"?{ref:c,"aria-labelledby":x,disabled:s||void 0}:{ref:c,role:"group","aria-labelledby":x,"aria-disabled":s||void 0},S=T();return m.createElement(M,{value:s},m.createElement(w,null,S({ourProps:D,theirProps:F,slot:L,defaultTag:p,name:"Fieldset"})))}let y=u(A);function B(l,t){return m.createElement(i,{as:"div",ref:t,...l})}let g=u(B);const U=()=>e.jsx("div",{children:e.jsx(N,{children:`
    
    import {
    Description,
    Field,
    Fieldset,
    Input,
    Label,
    Legend,
    Select,
    Textarea,
    } from "@headlessui/react";  
     
    <Fieldset className="space-y-6 rounded-xl bg-lightgray dark:bg-dark p-6" disabled>
          <Legend className="text-base/7 font-semibold dark:text-white text-dark">
            Shipping Details
          </Legend>
          <Field>
            <Label className="text-ld font-medium text-sm">
              Street address
            </Label>
            <Input
              className="w-full ui-form-control rounded-md py-2 px-3 mt-3"
            />
          </Field>
          <Field>
            <Label className="text-ld font-medium text-sm">
              Country
            </Label>
            <Description className="text-bodytext text-xs mt-1">
              We currently only ship to North America.
            </Description>
           
            <div className="relative">
              <Select
                className="ui-form-control  rounded-md mt-3"
              >
                <option>Canada</option>
                <option>Mexico</option>
                <option>United States</option>
              </Select>
            </div>
           
          </Field>
          <Field>
            <Label className="text-ld font-medium text-sm">
              Delivery notes
            </Label>
            <Description className="text-xs text-bodytext mt-1">
              If you have a tiger, we'd like to know about it.
            </Description>
            <Textarea
              className="ui-form-control rounded-lg mt-3"
              rows={3}
            />
          </Field>
        </Fieldset>
        `})}),W=()=>e.jsx("div",{children:e.jsxs(j,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Disable Fieldset Form"}),e.jsx(U,{})]}),e.jsxs(y,{className:"space-y-6 rounded-xl bg-lightgray dark:bg-dark p-6",disabled:!0,children:[e.jsx(g,{className:"text-base/7 font-semibold dark:text-white text-dark",children:"Shipping Details"}),e.jsxs(a,{children:[e.jsx(i,{className:"text-ld font-medium text-sm",children:"Street address"}),e.jsx(h,{className:"w-full ui-form-control rounded-md py-2 px-3 mt-3"})]}),e.jsxs(a,{children:[e.jsx(i,{className:"text-ld font-medium text-sm",children:"Country"}),e.jsx(o,{className:"text-bodytext text-xs mt-1",children:"We currently only ship to North America."}),e.jsx("div",{className:"relative",children:e.jsxs(f,{className:"ui-form-control  rounded-md mt-3",children:[e.jsx("option",{children:"Canada"}),e.jsx("option",{children:"Mexico"}),e.jsx("option",{children:"United States"})]})})]}),e.jsxs(a,{children:[e.jsx(i,{className:"text-ld font-medium text-sm",children:"Delivery notes"}),e.jsx(o,{className:"text-xs text-bodytext mt-1",children:"If you have a tiger, we'd like to know about it."}),e.jsx(b,{className:"ui-form-control rounded-lg mt-3",rows:3})]})]})]})}),K=()=>e.jsx("div",{children:e.jsx(N,{children:`
    
    import {
    Description,
    Field,
    Fieldset,
    Input,
    Label,
    Legend,
    Select,
    Textarea,
    } from "@headlessui/react";  
     
    <Fieldset className="space-y-6 rounded-xl bg-lightgray dark:bg-dark p-6">
          <Legend className="text-base/7 font-semibold dark:text-white text-dark">
            Shipping Details
          </Legend>
          <Field>
            <Label className="text-ld font-medium text-sm">
              Street address
            </Label>
            <Input
              className="w-full ui-form-control rounded-md py-2 px-3 mt-3"
            />
          </Field>
          <Field>
            <Label className="text-ld font-medium text-sm">
              Country
            </Label>
            <Description className="text-bodytext text-xs mt-1">
              We currently only ship to North America.
            </Description>
           
            <div className="relative">
              <Select
                className="ui-form-control  rounded-md mt-3"
              >
                <option>Canada</option>
                <option>Mexico</option>
                <option>United States</option>
              </Select>
            </div>
           
          </Field>
          <Field>
            <Label className="text-ld font-medium text-sm">
              Delivery notes
            </Label>
            <Description className="text-xs text-bodytext mt-1">
              If you have a tiger, we'd like to know about it.
            </Description>
            <Textarea
              className="ui-form-control rounded-lg mt-3"
              rows={3}
            />
          </Field>
        </Fieldset>
        `})}),P=()=>e.jsx("div",{children:e.jsxs(j,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Fieldset Form"}),e.jsx(K,{})]}),e.jsxs(y,{className:"space-y-6 rounded-xl bg-lightgray dark:bg-dark p-6",children:[e.jsx(g,{className:"text-base/7 font-semibold dark:text-white text-dark",children:"Shipping Details"}),e.jsxs(a,{children:[e.jsx(i,{className:"text-ld font-medium text-sm",children:"Street address"}),e.jsx(h,{className:"w-full ui-form-control rounded-md py-2 px-3 mt-3"})]}),e.jsxs(a,{children:[e.jsx(i,{className:"text-ld font-medium text-sm",children:"Country"}),e.jsx(o,{className:"text-bodytext text-xs mt-1",children:"We currently only ship to North America."}),e.jsx("div",{className:"relative",children:e.jsxs(f,{className:"ui-form-control  rounded-md mt-3",children:[e.jsx("option",{children:"Canada"}),e.jsx("option",{children:"Mexico"}),e.jsx("option",{children:"United States"})]})})]}),e.jsxs(a,{children:[e.jsx(i,{className:"text-ld font-medium text-sm",children:"Delivery notes"}),e.jsx(o,{className:"text-xs text-bodytext mt-1",children:"If you have a tiger, we'd like to know about it."}),e.jsx(b,{className:"ui-form-control rounded-lg mt-3",rows:3})]})]})]})}),R=[{to:"/",title:"Home"},{title:"Fieldset"}],ne=()=>e.jsxs(e.Fragment,{children:[e.jsx(H,{title:"Fieldset",items:R}),e.jsxs("div",{className:"grid grid-cols-12 gap-30",children:[e.jsx("div",{className:"lg:col-span-6 col-span-12",children:e.jsx(P,{})}),e.jsx("div",{className:"lg:col-span-6 col-span-12",children:e.jsx(W,{})})]})]});export{ne as default};
