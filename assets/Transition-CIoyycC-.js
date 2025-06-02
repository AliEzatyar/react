import{j as e,r as i,I as c,k as m}from"./index-CbdGNVhE.js";import{C as n}from"./CardBox-DWufozWR.js";import{C as o}from"./CodeModal-CQLFjqdl.js";import{z as r}from"./transition-D497Y5iK.js";import{c as d}from"./clsx-B-dksMZM.js";import{H as l}from"./button-BeXxI_uV.js";import{B as u}from"./BreadcrumbComp-B5-q4JsV.js";import"./Card-DYrQhspN.js";import"./toConsumableArray-CGYUFXbV.js";import"./extends-CF3RwP-h.js";import"./render-NI4Jg5tu.js";import"./use-is-mounted-C8NUJwad.js";import"./use-server-handoff-complete-DVUiotRc.js";import"./use-sync-refs-BkeMvBOG.js";import"./open-closed-Ds_Qw___.js";import"./useFocusRing-CXvZpW1I.js";import"./use-active-press-B171Jcqa.js";import"./owner-fH536Zf5.js";import"./disabled-DeIIXrEU.js";const h=()=>e.jsx("div",{children:e.jsx(o,{children:`
    
    import  { useState } from "react";
    import { Transition } from '@headlessui/react'

    const [open, setOpen] = useState(false)

    <button onClick={() => setOpen((open) => !open)} className="ui-button bg-primary justify-center">Toggle Transition</button>
    <Transition show={open}>
        <div className="transition duration-300 ease-in data-[closed]:opacity-0">I will fade in and out</div>
    </Transition>
        `})}),p=()=>{const[t,s]=i.useState(!1);return e.jsx("div",{children:e.jsxs(n,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Basic Transition"}),e.jsx(h,{})]}),e.jsx("button",{onClick:()=>s(a=>!a),className:"ui-button bg-primary justify-center",children:"Toggle Transition"}),e.jsx(r,{show:t,children:e.jsx("div",{className:"transition duration-300 ease-in data-[closed]:opacity-0 bg-lightgray dark:bg-dark rounded-sm shadow-md dark:shadow-dark-md p-4 w-72 ",children:"I will fade in and out"})})]})})},x=()=>e.jsx("div",{children:e.jsx(o,{children:`
    
    import  { useState } from "react";
    import { Button, Transition } from "@headlessui/react";
    import { Icon } from "@iconify/react";
    import clsx from "clsx";

    let [isShowing, setIsShowing] = useState(true);

    <div className="flex flex-col items-center">
          <div className="size-[6.25rem]">
            <Transition show={isShowing}>
              <div
                className={clsx(
                  "size-full rounded-xl bg-primary shadow-lg transition duration-400",
                  "data-[closed]:scale-50 data-[closed]:rotate-[-120deg] data-[closed]:opacity-0",
                  "data-[leave]:duration-200 data-[leave]:ease-in-out",
                  "data-[leave]:data-[closed]:scale-95 data-[leave]:data-[closed]:rotate-[0deg]"
                )}
              />
            </Transition>
          </div>

          <Button
            onClick={() => {
              setIsShowing(false);
              setTimeout(() => setIsShowing(true), 500);
            }}
            className=" transition data-[hover]:scale-105 ui-button justify-cente bg-error gap-3 mt-4"
          >
            <Icon icon="solar:refresh-bold" height={20} />
            <span>Click to transition</span>
          </Button>
    </div>
        `})}),f=()=>{let[t,s]=i.useState(!0);return e.jsx("div",{children:e.jsxs(n,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Click To Transition"}),e.jsx(x,{})]}),e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("div",{className:"size-[6.25rem]",children:e.jsx(r,{show:t,children:e.jsx("div",{className:d("size-full rounded-xl bg-primary shadow-lg transition duration-400","data-[closed]:scale-50 data-[closed]:rotate-[-120deg] data-[closed]:opacity-0","data-[leave]:duration-200 data-[leave]:ease-in-out","data-[leave]:data-[closed]:scale-95 data-[leave]:data-[closed]:rotate-[0deg]")})})}),e.jsxs(l,{onClick:()=>{s(!1),setTimeout(()=>s(!0),500)},className:" transition data-[hover]:scale-105 ui-button justify-center bg-secondary gap-3 mt-4",children:[e.jsx(c,{icon:"solar:refresh-bold",height:20}),e.jsx("span",{children:"Click to transition"})]})]})]})})},g=()=>e.jsx("div",{children:e.jsx(o,{children:`
    
    import  { useState } from "react";
    import { Transition, TransitionChild } from "@headlessui/react";

    
    <button
          onClick={() => setOpen(true)}
          className="ui-button bg-primary justify-center"
        >
          Coordinating Transition
    </button>
    <Transition show={open}>
        {/* Backdrop */}
        <TransitionChild>
        <div
            className="fixed inset-0 bg-black/30 transition duration-300 data-[closed]:opacity-0"
            onClick={() => setOpen(false)}
        />
        </TransitionChild>

        {/* Slide-in sidebar */}
        <TransitionChild>
        <div className="fixed inset-y-0 z-[50] left-0 w-80 bg-white dark:bg-dark transition duration-300 data-[closed]:-translate-x-full p-4">
            <h3 className="text-lg mb-2">This Is Sidebar</h3>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s, when an unknown printer took a galley
            of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.
            </p>
        </div>
        </TransitionChild>
    </Transition>
        `})}),j=()=>{const{setIsSidebarOpen:t}=i.useContext(m);return e.jsx("div",{children:e.jsxs(n,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Coordinating Transition"}),e.jsx(g,{})]}),e.jsx("button",{onClick:()=>t(!0),className:"ui-button bg-success justify-center",children:"Coordinating Transition"})]})})},b=()=>e.jsx("div",{children:e.jsx(o,{children:`
    
    import  { useState } from "react";
    import { Transition } from "@headlessui/react";
    import clsx from "clsx";

    <div className="relative">
        <button onClick={() => setOpen((open) => !open)} className="ui-button bg-secondary justify-center w-full">Transition</button>
        <Transition show={open}>
        <div
            className={clsx([
            // Base styles
            "absolute transition ease-in-out bg-white dark:bg-dark rounded-sm shadow-md dark:shadow-dark-md p-4 w-72 mt-1",
            // Shared closed styles
            "data-[closed]:opacity-0 ",
            // Entering styles
            "data-[enter]:duration-100 data-[enter]:data-[closed]:-translate-x-full",
            // Leaving styles
            "data-[leave]:duration-300 data-[leave]:data-[closed]:translate-x-full",
            ])}
        >
            I will enter from the left and leave to the right
        </div>
        </Transition>
    </div>
        `})}),v=()=>{const[t,s]=i.useState(!1);return e.jsx("div",{children:e.jsxs(n,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Different Transition"}),e.jsx(b,{})]}),e.jsxs("div",{className:"relative",children:[e.jsx("button",{onClick:()=>s(a=>!a),className:"ui-button bg-secondary justify-center w-full",children:"Enter Leave Transition"}),e.jsx(r,{show:t,children:e.jsx("div",{className:d(["absolute transition ease-in-out bg-white dark:bg-dark rounded-sm shadow-md dark:shadow-dark-md p-4 w-72 mt-1","data-[closed]:opacity-0 ","data-[enter]:duration-100 data-[enter]:data-[closed]:-translate-x-full","data-[leave]:duration-300 data-[leave]:data-[closed]:translate-x-full"]),children:"I will enter from the left and leave to the right"})})]})]})})},y=()=>e.jsx("div",{children:e.jsx(o,{children:`
    
    import  { useState } from "react";
    import { Transition, Button } from "@headlessui/react"; 
    
    const [open, setOpen] = useState(true);

    <div className="flex flex-col items-center">
        <Transition show={open} appear={true}>
        <div className="transition duration-300 ease-in data-[closed]:opacity-0 bg-lightgray dark:bg-dark rounded-sm shadow-md dark:shadow-dark-md p-4 w-72">
            I will fade in on initial render
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </div>
        </Transition>
        <Button
        onClick={() => setOpen((open) => !open)}
        className="transition data-[hover]:scale-105 ui-button justify-center bg-info gap-3 mt-5  "
        >
        On Intial Transition
        </Button>
    </div>
        `})}),w=()=>{const[t,s]=i.useState(!0);return e.jsx("div",{children:e.jsxs(n,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Transitioning On Initial Mount"}),e.jsx(y,{})]}),e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx(r,{show:t,appear:!0,children:e.jsx("div",{className:"transition duration-300 ease-in data-[closed]:opacity-0 bg-lightgray dark:bg-dark rounded-sm shadow-md dark:shadow-dark-md p-4 w-72",children:"I will fade in on initial render Lorem Ipsum is simply dummy text of the printing and typesetting industry."})}),e.jsx(l,{onClick:()=>s(a=>!a),className:"transition data-[hover]:scale-105 ui-button justify-center bg-info gap-3 mt-5  ",children:"On Intial Transition"})]})]})})},T=[{to:"/",title:"Home"},{title:"Transition"}],K=()=>e.jsxs(e.Fragment,{children:[e.jsx(u,{title:"Transition",items:T}),e.jsxs("div",{className:"grid grid-cols-12 gap-30",children:[e.jsx("div",{className:"lg:col-span-4 col-span-12",children:e.jsx(p,{})}),e.jsx("div",{className:"lg:col-span-4 col-span-12",children:e.jsx(v,{})}),e.jsx("div",{className:"lg:col-span-4 col-span-12",children:e.jsx(j,{})}),e.jsx("div",{className:"lg:col-span-6 col-span-12",children:e.jsx(f,{})}),e.jsx("div",{className:"lg:col-span-6 col-span-12",children:e.jsx(w,{})})]})]});export{K as default};
