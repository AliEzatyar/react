import{c as r,j as e,at as t}from"./index-CbdGNVhE.js";import{C as s}from"./CardBox-DWufozWR.js";import{C as a}from"./CodeModal-CQLFjqdl.js";import{B as c}from"./BreadcrumbComp-B5-q4JsV.js";import"./Card-DYrQhspN.js";import"./toConsumableArray-CGYUFXbV.js";import"./extends-CF3RwP-h.js";var i=r("calendar-month","IconCalendarMonth",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M7 14h.013",key:"svg-4"}],["path",{d:"M10.01 14h.005",key:"svg-5"}],["path",{d:"M13.01 14h.005",key:"svg-6"}],["path",{d:"M16.015 14h.005",key:"svg-7"}],["path",{d:"M13.015 17h.005",key:"svg-8"}],["path",{d:"M7.01 17h.005",key:"svg-9"}],["path",{d:"M10.01 17h.005",key:"svg-10"}]]);const o=()=>e.jsx("div",{children:e.jsxs(s,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Autohide"}),e.jsx(a,{children:`
    import { Datepicker } from "flowbite-react";
    import { IconCalendarMonth } from '@tabler/icons-react'

    <Datepicker autoHide={false} className="form-control" icon={() => <IconCalendarMonth size={20} />} />
              `})]}),e.jsx(t,{autoHide:!1,className:"form-control",icon:()=>e.jsx(i,{size:20})})]})}),l=()=>e.jsx("div",{children:e.jsxs(s,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Default Datepicker"}),e.jsx(a,{children:`
    import { Datepicker } from "flowbite-react";
    import { IconCalendarMonth } from "@tabler/icons-react";
    
    <Datepicker className="form-control"
    icon={() => <IconCalendarMonth size={20} />} />  
              `})]}),e.jsx(t,{className:"form-control",icon:()=>e.jsx(i,{size:20})})]})}),n=()=>e.jsx("div",{children:e.jsxs(s,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Limit The Date"}),e.jsx(a,{children:`
    import { Datepicker } from "flowbite-react";
    
    <Datepicker
        minDate={new Date(2023, 0, 1)}
        maxDate={new Date(2023, 3, 30)}
        className="form-control"
        icon={() => <IconCalendarMonth size={20} />}
    />
              `})]}),e.jsx(t,{minDate:new Date(2023,0,1),maxDate:new Date(2023,3,30),className:"form-control",icon:()=>e.jsx(i,{size:20})})]})}),m=()=>e.jsx("div",{children:e.jsxs(s,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Localization"}),e.jsx(a,{children:`
    import { Datepicker } from "flowbite-react";
    
    <Datepicker
        language="pt-BR"
        labelTodayButton="Hoje"
        labelClearButton="Limpar"
        className="form-control"
        icon={() => <IconCalendarMonth size={20} />}
    />
              `})]}),e.jsx(t,{language:"pt-BR",labelTodayButton:"Hoje",labelClearButton:"Limpar",className:"form-control",icon:()=>e.jsx(i,{size:20})})]})}),d=()=>e.jsx("div",{children:e.jsxs(s,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"With Title"}),e.jsx(a,{children:`
    import { Datepicker } from "flowbite-react";
    import { IconCalendarMonth } from '@tabler/icons-react'

    <Datepicker title="DatePicker Title" className="form-control" icon={() => <IconCalendarMonth size={20} />} />
              `})]}),e.jsx(t,{title:"DatePicker Title",className:"form-control",icon:()=>e.jsx(i,{size:20})})]})}),h=()=>e.jsx("div",{children:e.jsxs(s,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Week Start"}),e.jsx(a,{children:`
    import { Datepicker } from "flowbite-react";
    
    <Datepicker
        weekStart={1} // Monday
        className="form-control"
        icon={() => <IconCalendarMonth size={20} />}
    />
              `})]}),e.jsx(t,{weekStart:1,className:"form-control",icon:()=>e.jsx(i,{size:20})})]})}),x=[{to:"/",title:"Home"},{title:"Datepicker"}],g=()=>e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Datepicker",items:x}),e.jsxs("div",{className:"grid grid-cols-12 gap-30",children:[e.jsx("div",{className:"lg:col-span-4  col-span-12",children:e.jsx(l,{})}),e.jsx("div",{className:"lg:col-span-4  col-span-12",children:e.jsx(m,{})}),e.jsx("div",{className:"lg:col-span-4  col-span-12",children:e.jsx(n,{})}),e.jsx("div",{className:"lg:col-span-4  col-span-12",children:e.jsx(h,{})}),e.jsx("div",{className:"lg:col-span-4  col-span-12",children:e.jsx(o,{})}),e.jsx("div",{className:"lg:col-span-4  col-span-12",children:e.jsx(d,{})})]})]});export{g as default};
