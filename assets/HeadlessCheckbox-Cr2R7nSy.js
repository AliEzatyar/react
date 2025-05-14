import{r as s,a as v,j as e}from"./index-P2HWq5AB.js";import{$ as q,a as J}from"./useFocusRing-Di4h4CvJ.js";import{w as Y}from"./use-active-press-C4eQ0n2y.js";import{l as Z,T as ee}from"./use-default-value-877t43tv.js";import{K as se,p as ae,o as j,_ as te,L as ie}from"./render-BKlKWd6j.js";import{a as oe}from"./disabled-CgoTiXBv.js";import{j as ce,p as re,H as i}from"./field-BPMTWBig.js";import{u as ne,I as le,Q as o}from"./label-CN3rczfl.js";import{r as de}from"./bugs-DpEN4NTH.js";import{U as he,H as xe}from"./description-CBNApkT-.js";import{o as F}from"./keyboard-C1Wiwm26.js";import{C as h}from"./CardBox-iBHS77gx.js";import{C as x}from"./CodeModal-ZdVmlQAl.js";import{c as S}from"./clsx-B-dksMZM.js";import{B as be}from"./BreadcrumbComp-BnVnHUMk.js";import"./owner-CBjDaIWd.js";import"./hidden-BgX8pakw.js";import"./use-sync-refs-CHG90QLp.js";import"./toConsumableArray-B7RXd_Ox.js";import"./extends-CF3RwP-h.js";import"./core-DD6kpHa4.js";let pe="span";function me(a,t){let r=s.useId(),n=ne(),b=oe(),{id:p=n||`headlessui-checkbox-${r}`,disabled:l=b||!1,autoFocus:f=!1,checked:B,defaultChecked:M,onChange:T,name:N,value:$,form:D,indeterminate:g=!1,...U}=a,m=Z(M),[u,k]=ee(B,T,m??!1),H=le(),A=he(),P=ae(),[L,y]=s.useState(!1),C=j(()=>{y(!0),k==null||k(!u),P.nextFrame(()=>{y(!1)})}),R=j(d=>{if(de(d.currentTarget))return d.preventDefault();d.preventDefault(),C()}),z=j(d=>{d.key===F.Space?(d.preventDefault(),C()):d.key===F.Enter&&re(d.currentTarget)}),I=j(d=>d.preventDefault()),{isFocusVisible:w,focusProps:K}=q({autoFocus:f}),{isHovered:W,hoverProps:_}=J({isDisabled:l}),{pressed:E,pressProps:G}=Y({disabled:l}),O=te({ref:t,id:p,role:"checkbox","aria-checked":g?"mixed":u?"true":"false","aria-labelledby":H,"aria-describedby":A,"aria-disabled":l?!0:void 0,indeterminate:g?"true":void 0,tabIndex:l?void 0:0,onKeyUp:l?void 0:z,onKeyPress:l?void 0:I,onClick:l?void 0:R},K,_,G),Q=s.useMemo(()=>({checked:u,disabled:l,hover:W,focus:w,active:E,indeterminate:g,changing:L,autofocus:f}),[u,g,l,W,w,E,L,f]),V=s.useCallback(()=>{if(m!==void 0)return k==null?void 0:k(m)},[k,m]),X=ie();return v.createElement(v.Fragment,null,N!=null&&v.createElement(ce,{disabled:l,data:{[N]:$||"on"},overrides:{type:"checkbox",checked:u},form:D,onReset:V}),X({ourProps:O,theirProps:U,slot:Q,defaultTag:pe,name:"Checkbox"}))}let c=se(me);const ue=()=>e.jsx("div",{children:e.jsx(x,{children:`
    
    import  { useState } from "react";
    import { Checkbox, Field, Label } from "@headlessui/react"; 
    
    <div className="flex flex-col gap-3">
          <div>
            <Field disabled className="flex items-center gap-3">
              
              <Checkbox
                checked={enabled}
                onChange={setEnabled}
                className="group block size-4 rounded border bg-white data-[checked]:bg-blue-500 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 data-[checked]:data-[disabled]:bg-gray-500"
              >
                <svg
                  className="stroke-white opacity-0 group-data-[checked]:opacity-100"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M3 8L6 11L11 3.5"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Checkbox>
              <Label className="data-[disabled]:opacity-50">
                Enable beta features
              </Label>
            </Field>
          </div>
          <div>
            <Field disabled className="flex items-center gap-3">
              
              <Checkbox
                checked={enabled}
                onChange={setEnabled}
                className="group block size-4 rounded border bg-white data-[checked]:bg-blue-500 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 data-[checked]:data-[disabled]:bg-gray-500"
              >
                <svg
                  className="stroke-white opacity-0 group-data-[checked]:opacity-100"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M3 8L6 11L11 3.5"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Checkbox>
              <Label className="data-[disabled]:opacity-50">
                Enable beta features
              </Label>
            </Field>
          </div>
        </div>
        `})}),ke=()=>{const[a,t]=s.useState(!1);return e.jsx("div",{children:e.jsxs(h,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Disable Checkbox"}),e.jsx(ue,{})]}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("div",{children:e.jsxs(i,{disabled:!0,className:"flex items-center gap-3",children:[e.jsx(c,{checked:a,onChange:t,className:"group block size-4 rounded border bg-white data-[checked]:bg-blue-500 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 data-[checked]:data-[disabled]:bg-gray-500",children:e.jsx("svg",{className:"stroke-white opacity-0 group-data-[checked]:opacity-100",viewBox:"0 0 14 14",fill:"none",children:e.jsx("path",{d:"M3 8L6 11L11 3.5",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})})}),e.jsx(o,{className:"data-[disabled]:opacity-50",children:"Enable beta features"})]})}),e.jsx("div",{children:e.jsxs(i,{disabled:!0,className:"flex items-center gap-3",children:[e.jsx(c,{checked:a,onChange:t,className:"group block size-4 rounded border bg-white data-[checked]:bg-blue-500 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 data-[checked]:data-[disabled]:bg-gray-500",children:e.jsx("svg",{className:"stroke-white opacity-0 group-data-[checked]:opacity-100",viewBox:"0 0 14 14",fill:"none",children:e.jsx("path",{d:"M3 8L6 11L11 3.5",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})})}),e.jsx(o,{className:"data-[disabled]:opacity-50",children:"Enable beta features"})]})})]})]})})},ge=()=>{const[a,t]=s.useState(!1),[r,n]=s.useState(!1),[b,p]=s.useState(!1);return e.jsx("div",{children:e.jsxs(h,{children:[e.jsx("div",{className:"flex items-center justify-between mb-2",children:e.jsx("h4",{className:"text-lg font-semibold",children:"Render As a Div Elements"})}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("div",{children:e.jsxs(i,{className:"flex items-center gap-3",children:[e.jsx(c,{as:"div",checked:a,onChange:t,className:"group block ui-checkbox",children:e.jsx("svg",{className:"stroke-white opacity-0 transition group-data-[checked]:opacity-100",viewBox:"0 0 14 14",fill:"none",height:15,children:e.jsx("path",{d:"M3 8L6 11L11 3.5",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})})}),e.jsx(o,{className:"cursor-pointer",children:"Checkbox With Transitoin"})]})}),e.jsx("div",{children:e.jsxs(i,{className:"flex items-center gap-3",children:[e.jsx(c,{as:"div",checked:r,onChange:n,className:"group block ui-checkbox",children:e.jsx("svg",{className:"stroke-white opacity-0 transition group-data-[checked]:opacity-100",viewBox:"0 0 14 14",fill:"none",height:15,children:e.jsx("path",{d:"M3 8L6 11L11 3.5",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})})}),e.jsx(o,{className:"cursor-pointer",children:"Checkbox With Transitoin"})]})}),e.jsx("div",{children:e.jsxs(i,{className:"flex items-center gap-3",children:[e.jsx(c,{as:"div",checked:b,onChange:p,className:"group block ui-checkbox",children:e.jsx("svg",{className:"stroke-white opacity-0 transition group-data-[checked]:opacity-100",viewBox:"0 0 14 14",fill:"none",height:15,children:e.jsx("path",{d:"M3 8L6 11L11 3.5",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})})}),e.jsx(o,{className:"cursor-pointer",children:"Checkbox With Transitoin"})]})})]})]})})},je=()=>{const[a,t]=s.useState(!1);return e.jsx("div",{children:e.jsxs(h,{children:[e.jsx("div",{className:"flex items-center justify-between mb-2",children:e.jsx("h4",{className:"text-lg font-semibold",children:"Render Props"})}),e.jsx("div",{className:"flex flex-col gap-3",children:e.jsx("div",{children:e.jsxs(i,{className:"flex gap-3",children:[e.jsx(c,{checked:a,onChange:t,as:s.Fragment,children:({checked:r,disabled:n})=>e.jsx("span",{className:S("group block h-[18px] w-[18px] rounded border border-bordergray dark:border-darkborder bg-white dark:bg-transparent data-[checked]:bg-primary dark:data-[checked]:bg-primary",!r&&"bg-white",r&&!n&&"bg-primary",r&&n&&"bg-gray-500",n&&"cursor-not-allowed opacity-50"),children:e.jsx("svg",{className:S("stroke-white",r?"opacity-100":"opacity-0"),viewBox:"0 0 14 14",fill:"none",height:15,children:e.jsx("path",{d:"M3 8L6 11L11 3.5",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})})})}),e.jsx(o,{children:"Each component also exposes information about its current state via render props that you can use to conditionally apply different styles or render different content."})]})})})]})})},fe=()=>e.jsx("div",{children:e.jsx(x,{children:`
    
    import { Checkbox, Field, Label } from "@headlessui/react";
    import { useState } from "react";
    
    const [enabled, setEnabled] = useState(false);
    const [enabled1, setEnabled1] = useState(false);
    const [enabled2, setEnabled2] = useState(false);

     <div className="flex flex-col gap-3">
          <div>
            <Field className="flex items-center gap-3">
              <Checkbox
                checked={enabled}
                onChange={setEnabled}
                className="group block ui-checkbox"
              >
                <svg
                  className="stroke-white opacity-0 transition group-data-[checked]:opacity-100"
                  viewBox="0 0 14 14"
                  fill="none"
                  height={15}
                >
                  <path
                    d="M3 8L6 11L11 3.5"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Checkbox>
              <Label className="cursor-pointer">Checkbox With Transitoin</Label>
            </Field>
          </div>
          <div>
            <Field className="flex items-center gap-3">
              <Checkbox
                checked={enabled1}
                onChange={setEnabled1}
                className="group block ui-checkbox"
              >
                <svg
                  className="stroke-white opacity-0 transition group-data-[checked]:opacity-100"
                  viewBox="0 0 14 14"
                  fill="none"
                  height={15}
                >
                  <path
                    d="M3 8L6 11L11 3.5"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Checkbox>
              <Label className="cursor-pointer">Checkbox With Transitoin</Label>
            </Field>
          </div>
          <div>
            <Field className="flex items-center gap-3">
              <Checkbox
                checked={enabled2}
                onChange={setEnabled2}
                className="group block ui-checkbox"
              >
                <svg
                  className="stroke-white opacity-0 transition group-data-[checked]:opacity-100"
                  viewBox="0 0 14 14"
                  fill="none"
                  height={15}
                >
                  <path
                    d="M3 8L6 11L11 3.5"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Checkbox>
              <Label className="cursor-pointer">Checkbox With Transitoin</Label>
            </Field>
          </div>
        </div>
        

        `})}),ve=()=>{const[a,t]=s.useState(!1),[r,n]=s.useState(!1),[b,p]=s.useState(!1);return e.jsx("div",{children:e.jsxs(h,{children:[e.jsxs("div",{className:"flex items-center justify-between ",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Transitions Checkbox"}),e.jsx(fe,{})]}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("div",{children:e.jsxs(i,{className:"flex items-center gap-3",children:[e.jsx(c,{checked:a,onChange:t,className:"group block ui-checkbox",children:e.jsx("svg",{className:"stroke-white opacity-0 transition group-data-[checked]:opacity-100",viewBox:"0 0 14 14",fill:"none",height:15,children:e.jsx("path",{d:"M3 8L6 11L11 3.5",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})})}),e.jsx(o,{className:"cursor-pointer",children:"Checkbox With Transitoin"})]})}),e.jsx("div",{children:e.jsxs(i,{className:"flex items-center gap-3",children:[e.jsx(c,{checked:r,onChange:n,className:"group block ui-checkbox",children:e.jsx("svg",{className:"stroke-white opacity-0 transition group-data-[checked]:opacity-100",viewBox:"0 0 14 14",fill:"none",height:15,children:e.jsx("path",{d:"M3 8L6 11L11 3.5",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})})}),e.jsx(o,{className:"cursor-pointer",children:"Checkbox With Transitoin"})]})}),e.jsx("div",{children:e.jsxs(i,{className:"flex items-center gap-3",children:[e.jsx(c,{checked:b,onChange:p,className:"group block ui-checkbox",children:e.jsx("svg",{className:"stroke-white opacity-0 transition group-data-[checked]:opacity-100",viewBox:"0 0 14 14",fill:"none",height:15,children:e.jsx("path",{d:"M3 8L6 11L11 3.5",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})})}),e.jsx(o,{className:"cursor-pointer",children:"Checkbox With Transitoin"})]})})]})]})})},Ne=()=>e.jsx("div",{children:e.jsx(x,{children:`
    
    
    import { Checkbox, Field, Label } from "@headlessui/react";
    import { useState } from "react";  
    
    const [enabled, setEnabled] = useState(false);

    <form action="/accounts" method="post">
          <Field className="flex items-center gap-3">
            <Checkbox
              checked={enabled}
              onChange={setEnabled}
              name="terms-of-service"
              className="group block ui-checkbox"
            >
              <svg
                className="stroke-white opacity-0 group-data-[checked]:opacity-100"
                viewBox="0 0 14 14"
                fill="none"
                height={15}
              >
                <path
                  d="M3 8L6 11L11 3.5"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Checkbox>
            <Label className="cursor-pointer">Agree to terms and conditions</Label>
          </Field>
          <div className="flex gap-3 mt-4">
          <button className="ui-button bg-primary justify-center">Submit</button>
          <button className="ui-button bg-error justify-center">Cancel</button>
          </div>
    </form>
        `})}),Le=()=>{const[a,t]=s.useState(!1);return e.jsx("div",{children:e.jsxs(h,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"With HTML Forms"}),e.jsx(Ne,{})]}),e.jsxs("form",{action:"/accounts",method:"post",children:[e.jsxs(i,{className:"flex items-center gap-3",children:[e.jsx(c,{checked:a,onChange:t,name:"terms-of-service",className:"group block ui-checkbox",children:e.jsx("svg",{className:"stroke-white opacity-0 group-data-[checked]:opacity-100",viewBox:"0 0 14 14",fill:"none",height:15,children:e.jsx("path",{d:"M3 8L6 11L11 3.5",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})})}),e.jsx(o,{className:"cursor-pointer",children:"Agree to terms and conditions"})]}),e.jsxs("div",{className:"flex gap-3 mt-4",children:[e.jsx("button",{className:"ui-button bg-primary justify-center",children:"Submit"}),e.jsx("button",{className:"ui-button bg-error justify-center",children:"Cancel"})]})]})]})})},ye=()=>e.jsx("div",{children:e.jsx(x,{children:`
    
    
    import { Checkbox, Field, Label } from "@headlessui/react"; 

    <form action="/accounts" method="post">
          <Field className="flex items-center gap-3">
            <Checkbox
              defaultChecked={true}
              name="terms-of-service"
              className="group block size-4 rounded border bg-white data-[checked]:bg-blue-500"
            >
              <svg
                className="stroke-white opacity-0 group-data-[checked]:opacity-100"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M3 8L6 11L11 3.5"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Checkbox>
            <Label className="cursor-pointer">
              Agree to terms and conditions
            </Label>
          </Field>
          <div className="flex gap-3 mt-4">
            <button className="ui-button bg-primary justify-center">
              Submit
            </button>
            <button className="ui-button bg-error justify-center">
              Cancel
            </button>
          </div>
        </form>
    
        `})}),Ce=()=>e.jsx("div",{children:e.jsxs(h,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Using as Uncontrolled "}),e.jsx(ye,{})]}),e.jsxs("form",{action:"/accounts",method:"post",children:[e.jsxs(i,{className:"flex items-center gap-3",children:[e.jsx(c,{defaultChecked:!0,name:"terms-of-service",className:"group block ui-checkbox",children:e.jsx("svg",{className:"stroke-white opacity-0 group-data-[checked]:opacity-100",viewBox:"0 0 14 14",fill:"none",children:e.jsx("path",{d:"M3 8L6 11L11 3.5",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})})}),e.jsx(o,{className:"cursor-pointer",children:"Agree to terms and conditions"})]}),e.jsxs("div",{className:"flex gap-3 mt-4",children:[e.jsx("button",{className:"ui-button bg-primary justify-center",children:"Submit"}),e.jsx("button",{className:"ui-button bg-error justify-center",children:"Cancel"})]})]})]})}),we=()=>e.jsx("div",{children:e.jsx(x,{children:`
    
    
    import { Checkbox, Description, Field, Label } from "@headlessui/react";
    import { useState } from "react";
    
    const [enabled, setEnabled] = useState(false);

    <div>
        <Field className="flex gap-3">
        <Checkbox
            checked={enabled}
            onChange={setEnabled}
            className="group block ui-checkbox"
            >
            <svg
                className="stroke-white opacity-0 group-data-[checked]:opacity-100 rounded"
                viewBox="0 0 14 14"
                fill="none"
                height={15}
            >
                <path
                d="M3 8L6 11L11 3.5"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                />
            </svg>
            </Checkbox>
        <div>
            <Label>Enable beta features</Label>
            <Description>
            This will give you early access to new features we're
            developing.
            </Description>
        </div>
        </Field>
    </div>
        `})}),We=()=>{const[a,t]=s.useState(!1);return e.jsx("div",{children:e.jsxs(h,{children:[e.jsxs("div",{className:"flex items-center justify-between ",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"With Discription"}),e.jsx(we,{})]}),e.jsx("div",{children:e.jsxs(i,{className:"flex gap-3",children:[e.jsx(c,{checked:a,onChange:t,className:"group block ui-checkbox",children:e.jsx("svg",{className:"stroke-white opacity-0 group-data-[checked]:opacity-100 rounded",viewBox:"0 0 14 14",fill:"none",height:15,children:e.jsx("path",{d:"M3 8L6 11L11 3.5",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})})}),e.jsxs("div",{children:[e.jsx(o,{children:"Enable beta features"}),e.jsx(xe,{children:"This will give you early access to new features we're developing."})]})]})})]})})},Ee=()=>e.jsx("div",{children:e.jsx(x,{children:`
    
    import  { useState } from "react";
    import { Checkbox, Field, Label } from "@headlessui/react"; 
     
    const [enabled, setEnabled] = useState(false);
    const [enabled1, setEnabled1] = useState(false);

    <div className="flex flex-col gap-3">
          <div>
            <Field className="flex items-center gap-3">
              <Checkbox
                checked={enabled}
                onChange={setEnabled}
                className="group block ui-checkbox"
              >
                <svg
                  className="stroke-white opacity-0 group-data-[checked]:opacity-100 rounded"
                  viewBox="0 0 14 14"
                  fill="none"
                  height={15}
                >
                  <path
                    d="M3 8L6 11L11 3.5"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Checkbox>
              <Label className="cursor-pointer">Checkbox With Label</Label>
            </Field>
          </div>
          <div>
            <Field className="flex items-center gap-3">
              <Checkbox
                checked={enabled1}
                onChange={setEnabled1}
                className="group block ui-checkbox"
              >
                <svg
                  className="stroke-white opacity-0 group-data-[checked]:opacity-100 rounded"
                  viewBox="0 0 14 14"
                  fill="none"
                  height={15}
                >
                  <path
                    d="M3 8L6 11L11 3.5"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Checkbox>
              <Label className="cursor-pointer">Checkbox With Label</Label>
            </Field>
          </div>
        </div>
        `})}),Fe=()=>{const[a,t]=s.useState(!1),[r,n]=s.useState(!1);return e.jsx("div",{children:e.jsxs(h,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Checkbox Label"}),e.jsx(Ee,{})]}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("div",{children:e.jsxs(i,{className:"flex items-center gap-3",children:[e.jsx(c,{checked:a,onChange:t,className:"group block ui-checkbox",children:e.jsx("svg",{className:"stroke-white opacity-0 group-data-[checked]:opacity-100 rounded",viewBox:"0 0 14 14",fill:"none",height:15,children:e.jsx("path",{d:"M3 8L6 11L11 3.5",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})})}),e.jsx(o,{className:"cursor-pointer",children:"Checkbox With Label"})]})}),e.jsx("div",{children:e.jsxs(i,{className:"flex items-center gap-3",children:[e.jsx(c,{checked:r,onChange:n,className:"group block ui-checkbox",children:e.jsx("svg",{className:"stroke-white opacity-0 group-data-[checked]:opacity-100 rounded",viewBox:"0 0 14 14",fill:"none",height:15,children:e.jsx("path",{d:"M3 8L6 11L11 3.5",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})})}),e.jsx(o,{className:"cursor-pointer",children:"Checkbox With Label"})]})})]})]})})},Se=[{to:"/",title:"Home"},{title:"Checkbox"}],Ye=()=>e.jsxs("div",{children:[e.jsx(be,{title:"Checkbox",items:Se}),e.jsxs("div",{className:"grid grid-cols-12 gap-30",children:[e.jsx("div",{className:"lg:col-span-4 md:col-span-6 col-span-12",children:e.jsx(Fe,{})}),e.jsx("div",{className:"lg:col-span-4 md:col-span-6 col-span-12",children:e.jsx(We,{})}),e.jsx("div",{className:"lg:col-span-4 md:col-span-6 col-span-12",children:e.jsx(ke,{})}),e.jsx("div",{className:"lg:col-span-4 md:col-span-6 col-span-12",children:e.jsx(Le,{})}),e.jsx("div",{className:"lg:col-span-4 md:col-span-6 col-span-12",children:e.jsx(Ce,{})}),e.jsx("div",{className:"lg:col-span-4 md:col-span-6 col-span-12",children:e.jsx(ve,{})}),e.jsx("div",{className:"lg:col-span-4 md:col-span-6 col-span-12",children:e.jsx(ge,{})}),e.jsx("div",{className:"lg:col-span-4 md:col-span-6 col-span-12",children:e.jsx(je,{})})]})]});export{Ye as default};
