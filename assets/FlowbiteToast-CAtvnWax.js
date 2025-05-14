import{j as e,bT as s,bU as r,r as o,B as t,bV as d,bW as m,ba as x,bf as h,bX as j}from"./index-P2HWq5AB.js";import{C as a}from"./CardBox-iBHS77gx.js";import{C as i}from"./CodeModal-ZdVmlQAl.js";import{B as g}from"./BreadcrumbComp-BnVnHUMk.js";import"./toConsumableArray-B7RXd_Ox.js";import"./extends-CF3RwP-h.js";import"./core-DD6kpHa4.js";const f=()=>e.jsx("div",{children:e.jsxs(a,{children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h4",{className:"text-lg font-semibold mb-2",children:"Default Toast"}),e.jsx(i,{children:`
    import { Toast } from "flowbite-react";
    import { HiFire } from "react-icons/hi";
    
    <Toast>
      <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-500 dark:bg-cyan-800 dark:text-cyan-200">
        <HiFire className="h-5 w-5" />
      </div>
      <div className="ml-3 text-sm font-normal">Set yourself free.</div>
      <Toast.Toggle />
    </Toast>  
                `})]}),e.jsxs(s,{children:[e.jsx("div",{className:"inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-500 dark:bg-cyan-800 dark:text-cyan-200",children:e.jsx(r,{className:"h-5 w-5"})}),e.jsx("div",{className:"ml-3 text-sm font-normal",children:"Set yourself free."}),e.jsx(s.Toggle,{})]})]})}),v=()=>{const[n,l]=o.useState(!1);return e.jsx("div",{children:e.jsxs(a,{children:[e.jsx("h4",{className:"text-lg font-semibold mb-2",children:"Dismissal Toast"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(t,{onClick:()=>l(c=>!c),color:"primary",children:"Toggle toast"}),n&&e.jsxs(s,{children:[e.jsx("div",{className:"inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-500 dark:bg-cyan-800 dark:text-cyan-200",children:e.jsx(r,{className:"h-5 w-5"})}),e.jsx("div",{className:"ml-3 text-sm font-normal",children:"Set yourself free."}),e.jsx(s.Toggle,{onDismiss:()=>l(!1)})]})]})]})})},b=()=>e.jsx("div",{children:e.jsxs(a,{children:[e.jsx("h4",{className:"text-lg font-semibold mb-2",children:"Feedback Toast"}),e.jsxs(s,{children:[e.jsx(d,{className:"h-5 w-5 text-primary dark:text-primary"}),e.jsx("div",{className:"pl-4 text-sm font-normal",children:"Message sent successfully."})]})]})}),N=()=>e.jsx("div",{children:e.jsxs(a,{children:[e.jsx("h4",{className:"text-lg font-semibold mb-2",children:"Interactive Toast"}),e.jsx(s,{children:e.jsxs("div",{className:"flex items-start",children:[e.jsx("div",{className:"inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-500 dark:bg-cyan-900 dark:text-cyan-300",children:e.jsx(m,{className:"h-5 w-5"})}),e.jsxs("div",{className:"ml-3 text-sm font-normal",children:[e.jsx("span",{className:"mb-1 text-sm font-semibold text-gray-900 dark:text-white",children:"Update available"}),e.jsx("div",{className:"mb-2 text-sm font-normal",children:"A new software version is available for download.A new software version is available for download.A new software version is available for download.A new software version is available for"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("div",{className:"w-auto",children:e.jsx(t,{size:"xs",color:"primary",children:"Update"})}),e.jsx("div",{className:"w-auto",children:e.jsx(t,{color:"light",size:"xs",children:"Not now"})})]})]}),e.jsx(s.Toggle,{})]})})]})}),u=()=>e.jsx("div",{children:e.jsxs(a,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-lg font-semibold ",children:"Toast Colors"}),e.jsx(i,{children:`
    import { Toast } from "flowbite-react";
    import { HiCheck, HiExclamation, HiX } from "react-icons/hi";
    
    <div className="flex flex-col gap-4">
      <Toast>
        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
          <HiCheck className="h-5 w-5" />
        </div>
        <div className="ml-3 text-sm font-normal">
          Item moved successfully.
        </div>
        <Toast.Toggle />
      </Toast>
      <Toast>
        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200">
          <HiX className="h-5 w-5" />
        </div>
        <div className="ml-3 text-sm font-normal">
          Item has been deleted.
        </div>
        <Toast.Toggle />
      </Toast>
      <Toast>
        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-500 dark:bg-orange-700 dark:text-orange-200">
          <HiExclamation className="h-5 w-5" />
        </div>
        <div className="ml-3 text-sm font-normal">
          Improve password difficulty.
        </div>
        <Toast.Toggle />
      </Toast>
    </div>  
                `})]}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs(s,{children:[e.jsx("div",{className:"inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200",children:e.jsx(x,{className:"h-5 w-5"})}),e.jsx("div",{className:"ml-3 text-sm font-normal",children:"Item moved successfully."}),e.jsx(s.Toggle,{})]}),e.jsxs(s,{children:[e.jsx("div",{className:"inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200",children:e.jsx(h,{className:"h-5 w-5"})}),e.jsx("div",{className:"ml-3 text-sm font-normal",children:"Item has been deleted."}),e.jsx(s.Toggle,{})]}),e.jsxs(s,{children:[e.jsx("div",{className:"inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-500 dark:bg-orange-700 dark:text-orange-200",children:e.jsx(j,{className:"h-5 w-5"})}),e.jsx("div",{className:"ml-3 text-sm font-normal",children:"Improve password difficulty."}),e.jsx(s.Toggle,{})]})]})]})}),p=()=>e.jsx("div",{children:e.jsxs(a,{children:[e.jsx("h4",{className:"text-lg font-semibold mb-2",children:"Toast With Button"}),e.jsxs(s,{children:[e.jsx("div",{className:"text-sm font-normal",children:"Conversation archived."}),e.jsxs("div",{className:"ml-auto flex items-center space-x-2",children:[e.jsx("a",{href:"#",className:"rounded-lg p-1.5 text-sm font-medium text-primary hover:bg-cyan-100 dark:text-primary dark:hover:bg-gray-700",children:"Undo"}),e.jsx(s.Toggle,{})]})]})]})}),y=[{to:"/",title:"Home"},{title:"Toast"}],I=()=>e.jsxs(e.Fragment,{children:[e.jsx(g,{title:"Toast",items:y}),e.jsxs("div",{className:"grid grid-cols-12 gap-30",children:[e.jsx("div",{className:"md:col-span-6 col-span-12",children:e.jsx(f,{})}),e.jsx("div",{className:"md:col-span-6 col-span-12",children:e.jsx(p,{})}),e.jsx("div",{className:"md:col-span-6 col-span-12",children:e.jsx(N,{})}),e.jsx("div",{className:"md:col-span-6 col-span-12",children:e.jsx(u,{})}),e.jsx("div",{className:"md:col-span-6 col-span-12",children:e.jsx(b,{})}),e.jsx("div",{className:"md:col-span-6 col-span-12",children:e.jsx(v,{})})]})]});export{I as default};
