import{a as j,r as a,j as e,I as p}from"./index-CbdGNVhE.js";import{C as z}from"./CardBox-DWufozWR.js";import{C as k}from"./CodeModal-CQLFjqdl.js";import{$ as Z,a as ee}from"./useFocusRing-CXvZpW1I.js";import{w as te}from"./use-active-press-B171Jcqa.js";import{O as U,K as $,o as D,L as M,u as F,_ as V}from"./render-NI4Jg5tu.js";import{e as se}from"./use-resolve-button-type-CgW3LA2y.js";import{y as O,T as ae}from"./use-sync-refs-BkeMvBOG.js";import{c as ie,i as S,u as oe,x as re,R as le,s as ne}from"./open-closed-Ds_Qw___.js";import{C as ce}from"./close-provider-CzAj5LVa.js";import{r as de}from"./bugs-DpEN4NTH.js";import{u as ue}from"./owner-fH536Zf5.js";import{o as B}from"./keyboard-C1Wiwm26.js";import{y as me}from"./close-button-B7Vht3e3.js";import{A as L,m as T}from"./index-DVVV_Nxn.js";import{B as pe}from"./BreadcrumbComp-B5-q4JsV.js";import"./Card-DYrQhspN.js";import"./toConsumableArray-CGYUFXbV.js";import"./extends-CF3RwP-h.js";import"./button-BeXxI_uV.js";import"./disabled-DeIIXrEU.js";var X;let xe=(X=j.startTransition)!=null?X:function(t){t()};var he=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(he||{}),fe=(t=>(t[t.ToggleDisclosure=0]="ToggleDisclosure",t[t.CloseDisclosure=1]="CloseDisclosure",t[t.SetButtonId=2]="SetButtonId",t[t.SetPanelId=3]="SetPanelId",t[t.SetButtonElement=4]="SetButtonElement",t[t.SetPanelElement=5]="SetPanelElement",t))(fe||{});let ye={0:t=>({...t,disclosureState:F(t.disclosureState,{0:1,1:0})}),1:t=>t.disclosureState===1?t:{...t,disclosureState:1},2(t,s){return t.buttonId===s.buttonId?t:{...t,buttonId:s.buttonId}},3(t,s){return t.panelId===s.panelId?t:{...t,panelId:s.panelId}},4(t,s){return t.buttonElement===s.element?t:{...t,buttonElement:s.element}},5(t,s){return t.panelElement===s.element?t:{...t,panelElement:s.element}}},R=a.createContext(null);R.displayName="DisclosureContext";function A(t){let s=a.useContext(R);if(s===null){let m=new Error(`<${t} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(m,A),m}return s}let W=a.createContext(null);W.displayName="DisclosureAPIContext";function q(t){let s=a.useContext(W);if(s===null){let m=new Error(`<${t} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(m,q),m}return s}let H=a.createContext(null);H.displayName="DisclosurePanelContext";function ge(){return a.useContext(H)}function ve(t,s){return F(s.type,ye,t,s)}let we=a.Fragment;function je(t,s){let{defaultOpen:m=!1,...h}=t,n=a.useRef(null),f=O(s,ae(c=>{n.current=c},t.as===void 0||t.as===a.Fragment)),y=a.useReducer(ve,{disclosureState:m?0:1,buttonElement:null,panelElement:null,buttonId:null,panelId:null}),[{disclosureState:i,buttonId:o},N]=y,r=D(c=>{N({type:1});let g=ue(n);if(!g||!o)return;let w=c?c instanceof HTMLElement?c:c.current instanceof HTMLElement?c.current:g.getElementById(o):g.getElementById(o);w==null||w.focus()}),I=a.useMemo(()=>({close:r}),[r]),v=a.useMemo(()=>({open:i===0,close:r}),[i,r]),b={ref:f},C=M();return j.createElement(R.Provider,{value:y},j.createElement(W.Provider,{value:I},j.createElement(ce,{value:r},j.createElement(ie,{value:F(i,{0:S.Open,1:S.Closed})},C({ourProps:b,theirProps:h,slot:v,defaultTag:we,name:"Disclosure"})))))}let Ne="button";function be(t,s){let m=a.useId(),{id:h=`headlessui-disclosure-button-${m}`,disabled:n=!1,autoFocus:f=!1,...y}=t,[i,o]=A("Disclosure.Button"),N=ge(),r=N===null?!1:N===i.panelId,I=a.useRef(null),v=O(I,s,D(l=>{if(!r)return o({type:4,element:l})}));a.useEffect(()=>{if(!r)return o({type:2,buttonId:h}),()=>{o({type:2,buttonId:null})}},[h,o,r]);let b=D(l=>{var P;if(r){if(i.disclosureState===1)return;switch(l.key){case B.Space:case B.Enter:l.preventDefault(),l.stopPropagation(),o({type:0}),(P=i.buttonElement)==null||P.focus();break}}else switch(l.key){case B.Space:case B.Enter:l.preventDefault(),l.stopPropagation(),o({type:0});break}}),C=D(l=>{switch(l.key){case B.Space:l.preventDefault();break}}),c=D(l=>{var P;de(l.currentTarget)||n||(r?(o({type:0}),(P=i.buttonElement)==null||P.focus()):o({type:0}))}),{isFocusVisible:g,focusProps:w}=Z({autoFocus:f}),{isHovered:E,hoverProps:K}=ee({isDisabled:n}),{pressed:J,pressProps:_}=te({disabled:n}),Q=a.useMemo(()=>({open:i.disclosureState===0,hover:E,active:J,disabled:n,focus:g,autofocus:f}),[i,E,J,g,n,f]),G=se(t,i.buttonElement),Y=r?V({ref:v,type:G,disabled:n||void 0,autoFocus:f,onKeyDown:b,onClick:c},w,K,_):V({ref:v,id:h,type:G,"aria-expanded":i.disclosureState===0,"aria-controls":i.panelElement?i.panelId:void 0,disabled:n||void 0,autoFocus:f,onKeyDown:b,onKeyUp:C,onClick:c},w,K,_);return M()({ourProps:Y,theirProps:y,slot:Q,defaultTag:Ne,name:"Disclosure.Button"})}let De="div",Ie=U.RenderStrategy|U.Static;function Ce(t,s){let m=a.useId(),{id:h=`headlessui-disclosure-panel-${m}`,transition:n=!1,...f}=t,[y,i]=A("Disclosure.Panel"),{close:o}=q("Disclosure.Panel"),[N,r]=a.useState(null),I=O(s,D(E=>{xe(()=>i({type:5,element:E}))}),r);a.useEffect(()=>(i({type:3,panelId:h}),()=>{i({type:3,panelId:null})}),[h,i]);let v=oe(),[b,C]=re(n,N,v!==null?(v&S.Open)===S.Open:y.disclosureState===0),c=a.useMemo(()=>({open:y.disclosureState===0,close:o}),[y.disclosureState,o]),g={ref:I,id:h,...le(C)},w=M();return j.createElement(ne,null,j.createElement(H.Provider,{value:y.panelId},w({ourProps:g,theirProps:f,slot:c,defaultTag:De,features:Ie,visible:b,name:"Disclosure.Panel"})))}let Pe=$(je),d=$(be),u=$(Ce),x=Object.assign(Pe,{Button:d,Panel:u});const Be=()=>e.jsx("div",{children:e.jsx(k,{children:`
    
    
    import CardBox from "src/components/shared/CardBox";
    import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    } from "@headlessui/react";
    import { Icon } from "@iconify/react";
        
    <div className="mx-auto w-full max-w-lg divide-y divide-border dark:divide-darkborder rounded-xl bg-lightgray dark:bg-dark">
        <Disclosure as="div" className="py-4 px-6" defaultOpen={true}>
        <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-sm font-medium text-ld group-data-[hover]:text-primary">
            What is your refund policy?
            </span>
            <Icon
            icon="solar:alt-arrow-down-outline"
            height={18}
            className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180"
            />
        </DisclosureButton>
        <DisclosurePanel className="mt-2 text-xs text-bodytext">
            Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete
            text) is dummy text that is not meant to mean anything. It is used
            as a placeholder in magazine layouts, for example, in order to
            give an impression of the finished document. The text is
            intentionally unintelligible so that the viewer is not distracted
            by the content
        </DisclosurePanel>
        </Disclosure>
        <Disclosure as="div" className="py-4 px-6">
        <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-sm font-medium text-ld group-data-[hover]:text-primary">
            Can I reserve a magazine?
            </span>
            <Icon
            icon="solar:alt-arrow-down-outline"
            height={18}
            className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180"
            />
        </DisclosureButton>
        <DisclosurePanel className="mt-2 text-xs text-bodytext">
            Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete
            text) is dummy text that is not meant to mean anything. It is used
            as a placeholder in magazine layouts, for example, in order to
            give an impression of the finished document. The text is
            intentionally unintelligible so that the viewer is not distracted
            by the content
        </DisclosurePanel>
        </Disclosure>
        <Disclosure as="div" className="py-4 px-6">
        <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-sm font-medium text-ld group-data-[hover]:text-primary">
            Do I have the right to return an item?
            </span>
            <Icon
            icon="solar:alt-arrow-down-outline"
            height={18}
            className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180"
            />
        </DisclosureButton>
        <DisclosurePanel className="mt-2 text-xs text-bodytext">
            Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete
            text) is dummy text that is not meant to mean anything. It is used
            as a placeholder in magazine layouts, for example, in order to
            give an impression of the finished document. The text is
            intentionally unintelligible so that the viewer is not distracted
            by the content
        </DisclosurePanel>
        </Disclosure>
    </div>
                    `})}),ze=()=>e.jsx("div",{children:e.jsxs(z,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Basic Disclosure"}),e.jsx(Be,{})]}),e.jsxs("div",{className:"mx-auto w-full max-w-lg divide-y divide-border dark:divide-darkborder rounded-xl bg-lightgray dark:bg-dark",children:[e.jsxs(x,{as:"div",className:"py-4 px-6",defaultOpen:!0,children:[e.jsxs(d,{className:"group flex w-full items-center justify-between",children:[e.jsx("span",{className:"text-sm font-medium text-ld group-data-[hover]:text-primary",children:"What is your refund policy?"}),e.jsx(p,{icon:"solar:alt-arrow-down-outline",height:18,className:"size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180"})]}),e.jsx(u,{className:"mt-2 text-xs text-bodytext",children:"Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy text that is not meant to mean anything. It is used as a placeholder in magazine"})]}),e.jsxs(x,{as:"div",className:"py-4 px-6",children:[e.jsxs(d,{className:"group flex w-full items-center justify-between",children:[e.jsx("span",{className:"text-sm font-medium text-ld group-data-[hover]:text-primary",children:"Can I reserve a magazine?"}),e.jsx(p,{icon:"solar:alt-arrow-down-outline",height:18,className:"size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180"})]}),e.jsx(u,{className:"mt-2 text-xs text-bodytext",children:"Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy text that is not meant to mean anything. It is used as a placeholder in magazine"})]}),e.jsxs(x,{as:"div",className:"py-4 px-6",children:[e.jsxs(d,{className:"group flex w-full items-center justify-between",children:[e.jsx("span",{className:"text-sm font-medium text-ld group-data-[hover]:text-primary",children:"Do I have the right to return an item?"}),e.jsx(p,{icon:"solar:alt-arrow-down-outline",height:18,className:"size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180"})]}),e.jsx(u,{className:"mt-2 text-xs text-bodytext",children:"Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy text that is not meant to mean anything. It is used as a placeholder in magazine"})]})]})]})}),ke=({children:t})=>e.jsx("a",{href:"/samplepage",children:t}),Ee=()=>e.jsx("div",{children:e.jsx(k,{children:`
    
    import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    CloseButton,
    } from "@headlessui/react";
    
    import CardBox from "src/components/shared/CardBox";
    import MyCustomLink from "./MyLink";
    import { Icon } from "@iconify/react";

    <Disclosure>
        <DisclosureButton className="group bg-primary ui-button">
        Open mobile menu
        <Icon
            icon="solar:alt-arrow-down-outline"
            height={18}
            className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180"
        />
        </DisclosureButton>
        <DisclosurePanel>
        <CloseButton as={MyCustomLink} >
            Go with your link
        </CloseButton>
        </DisclosurePanel>
    </Disclosure>
        
        `})}),Se=()=>e.jsx("div",{children:e.jsxs(z,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Closing Disclosures Manually"}),e.jsx(Ee,{})]}),e.jsxs(x,{children:[e.jsxs(d,{className:"group bg-primary ui-button",children:["Open mobile menu",e.jsx(p,{icon:"solar:alt-arrow-down-outline",height:18,className:"size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180"})]}),e.jsx(u,{className:"px-4 py-1",children:e.jsx(me,{as:ke,children:"Go with your link"})})]})]})}),Le=()=>e.jsx("div",{children:e.jsx(k,{children:`
    
    
    import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    } from "@headlessui/react";
    import { AnimatePresence, motion } from "framer-motion";
    import { Icon } from "@iconify/react";

    <div className="mx-auto w-full max-w-lg divide-y divide-border dark:divide-darkborder rounded-xl bg-lightgray dark:bg-dark">
          <Disclosure as="div" className="py-4 px-6">
            {({ open }) => (
              <>
                <DisclosureButton className="group flex w-full items-center justify-between">
                  <span className="text-sm font-medium text-ld group-data-[hover]:text-primary">
                    What is your refund policy?
                  </span>
                  <Icon
                    icon="solar:alt-arrow-down-outline"
                    height={18}
                    className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180"
                  />
                </DisclosureButton>
                <div className="overflow-hidden">
                  <AnimatePresence>
                    {open && (
                      <DisclosurePanel
                        static
                        as={motion.div}
                        initial={{ opacity: 0, y: -24 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -24 }}
                        className="origin-top text-xs mt-2 text-bodytext"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipisici elit…’
                        (complete text) is dummy text that is not meant to mean
                        anything. It is used as a placeholder in magazine
                        layouts,
                      </DisclosurePanel>
                    )}
                  </AnimatePresence>
                </div>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="py-4 px-6">
            {({ open }) => (
              <>
                <DisclosureButton className="group flex w-full items-center justify-between">
                  <span className="text-sm font-medium text-ld group-data-[hover]:text-primary">
                    Can I reserve a magazine?
                  </span>
                  <Icon
                    icon="solar:alt-arrow-down-outline"
                    height={18}
                    className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180"
                  />
                </DisclosureButton>
                <div className="overflow-hidden">
                  <AnimatePresence>
                    {open && (
                      <DisclosurePanel
                        static
                        as={motion.div}
                        initial={{ opacity: 0, y: -24 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -24 }}
                        className="origin-top text-xs text-bodytext mt-2"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipisici elit…’
                        (complete text) is dummy text that is not meant to mean
                        anything. It is used as a placeholder in magazine
                        layouts,
                      </DisclosurePanel>
                    )}
                  </AnimatePresence>
                </div>
              </>
            )}
          </Disclosure>
    </div>

        `})}),Te=()=>e.jsx("div",{children:e.jsxs(z,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Disclosure With Framer Motion"}),e.jsx(Le,{})]}),e.jsxs("div",{className:"mx-auto w-full  divide-y divide-border dark:divide-darkborder rounded-xl bg-lightgray dark:bg-dark",children:[e.jsx(x,{as:"div",className:"py-4 px-6",children:({open:t})=>e.jsxs(e.Fragment,{children:[e.jsxs(d,{className:"group flex w-full items-center justify-between",children:[e.jsx("span",{className:"text-sm font-medium text-ld group-data-[hover]:text-primary",children:"What is your refund policy?"}),e.jsx(p,{icon:"solar:alt-arrow-down-outline",height:18,className:"size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180"})]}),e.jsx("div",{className:"overflow-hidden",children:e.jsx(L,{children:t&&e.jsx(u,{static:!0,as:T.div,initial:{opacity:0,y:-24},animate:{opacity:1,y:0},exit:{opacity:0,y:-24},className:"origin-top text-xs mt-2 text-bodytext",children:"Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy text that is not meant to mean anything. It is used as a placeholder in magazine layouts,Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy text that is not meant to mean anything. It is used as a placeholder in magazine layouts,"})})})]})}),e.jsx(x,{as:"div",className:"py-4 px-6",children:({open:t})=>e.jsxs(e.Fragment,{children:[e.jsxs(d,{className:"group flex w-full items-center justify-between",children:[e.jsx("span",{className:"text-sm font-medium text-ld group-data-[hover]:text-primary",children:"Can I reserve a magazine?"}),e.jsx(p,{icon:"solar:alt-arrow-down-outline",height:18,className:"size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180"})]}),e.jsx("div",{className:"overflow-hidden",children:e.jsx(L,{children:t&&e.jsx(u,{static:!0,as:T.div,initial:{opacity:0,y:-24},animate:{opacity:1,y:0},exit:{opacity:0,y:-24},className:"origin-top text-xs text-bodytext mt-2",children:"Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy text that is not meant to mean anything. It is used as a placeholder in magazine layouts,Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy text that is not meant to mean anything. It is used as a placeholder in magazine layouts,"})})})]})}),e.jsx(x,{as:"div",className:"py-4 px-6",children:({open:t})=>e.jsxs(e.Fragment,{children:[e.jsxs(d,{className:"group flex w-full items-center justify-between",children:[e.jsx("span",{className:"text-sm font-medium text-ld group-data-[hover]:text-primary",children:"Do I have the right to return an item?"}),e.jsx(p,{icon:"solar:alt-arrow-down-outline",height:18,className:"size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180"})]}),e.jsx("div",{className:"overflow-hidden",children:e.jsx(L,{children:t&&e.jsx(u,{static:!0,as:T.div,initial:{opacity:0,y:-24},animate:{opacity:1,y:0},exit:{opacity:0,y:-24},className:"origin-top text-xs text-bodytext mt-2",children:"Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy text that is not meant to mean anything. It is used as a placeholder in magazine layouts,Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy text that is not meant to mean anything. It is used as a placeholder in magazine layouts,"})})})]})})]})]})}),$e=()=>e.jsx("div",{children:e.jsx(k,{children:`
    
    import { forwardRef } from "react";
    import CardBox from "src/components/shared/CardBox";
    import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    } from "@headlessui/react";
    import { Icon } from "@iconify/react";
    let MyCustomButton = forwardRef(function (props: any, ref: any) {
    return <button className="..." ref={ref} {...props} />;
    });

    <Disclosure as="div">
        <DisclosureButton
        as={MyCustomButton}
        className="group bg-secondary ui-button w-full"
        >
       What languages do you support?
        <Icon
            icon="solar:alt-arrow-down-outline"
            height={18}
            className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180"
        />
        </DisclosureButton>
        <DisclosurePanel as="ul" className="px-4 py-3">
        <li className="py-1">HTML</li>
        <li className="py-1">CSS</li>
        <li className="py-1">JavaScript</li>
        </DisclosurePanel>
    </Disclosure>
        `})});let Me=a.forwardRef(function(t,s){return e.jsx("button",{className:"...",ref:s,...t})});const Fe=()=>e.jsx("div",{children:e.jsxs(z,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Rendering As Different Elements"}),e.jsx($e,{})]}),e.jsxs(x,{as:"div",children:[e.jsxs(d,{as:Me,className:"group bg-secondary ui-button w-full",children:["What languages do you support?",e.jsx(p,{icon:"solar:alt-arrow-down-outline",height:18,className:"size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180"})]}),e.jsxs(u,{as:"ul",className:"px-4 py-3",children:[e.jsx("li",{className:"py-1",children:"HTML"}),e.jsx("li",{className:"py-1",children:"CSS"}),e.jsx("li",{className:"py-1",children:"JavaScript"})]})]})]})}),Oe=()=>e.jsx("div",{children:e.jsx(k,{children:`
    
    
    import CardBox from "src/components/shared/CardBox";
    import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    } from "@headlessui/react";
    import { Icon } from "@iconify/react";
    <div className="mx-auto w-full max-w-lg divide-y divide-border dark:divide-darkborder rounded-xl bg-lightgray dark:bg-dark">
        <Disclosure as="div" className="py-4 px-6" defaultOpen={true}>
        <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-sm font-medium text-ld group-data-[hover]:text-primary">
            What is your refund policy?
            </span>
            <Icon
            icon="solar:alt-arrow-down-outline"
            height={18}
            className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180"
            />
        </DisclosureButton>
        <DisclosurePanel
            transition
            className="mt-2 text-xs text-bodytext origin-top transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0"
        >
            Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete
            text) is dummy text that is not meant to mean anything. It is used
            as a placeholder in magazine layouts, for example, in order to
            give an impression of the finished document. The text is
            intentionally unintelligible so that the viewer is not distracted
            by the content
        </DisclosurePanel>
        </Disclosure>
        <Disclosure as="div" className="py-4 px-6">
        <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-sm font-medium text-ld group-data-[hover]:text-primary">
            Can I reserve a magazine?
            </span>
            <Icon
            icon="solar:alt-arrow-down-outline"
            height={18}
            className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180"
            />
        </DisclosureButton>
        <DisclosurePanel
            transition
            className="mt-2 text-xs text-bodytext origin-top transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0"
        >
            Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete
            text) is dummy text that is not meant to mean anything. It is used
            as a placeholder in magazine layouts, for example, in order to
            give an impression of the finished document. The text is
            intentionally unintelligible so that the viewer is not distracted
            by the content
        </DisclosurePanel>
        </Disclosure>
        <Disclosure as="div" className="py-4 px-6">
        <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-sm font-medium text-ld group-data-[hover]:text-primary">
            Do I have the right to return an item?
            </span>
            <Icon
            icon="solar:alt-arrow-down-outline"
            height={18}
            className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180"
            />
        </DisclosureButton>
        <DisclosurePanel
            transition
            className="mt-2 text-xs text-bodytext origin-top transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0"
        >
            Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete
            text) is dummy text that is not meant to mean anything. It is used
            as a placeholder in magazine layouts, for example, in order to
            give an impression of the finished document. The text is
            intentionally unintelligible so that the viewer is not distracted
            by the content
        </DisclosurePanel>
        </Disclosure>
    </div>
        
        `})}),Re=()=>e.jsx("div",{children:e.jsxs(z,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Transitions Disclosure"}),e.jsx(Oe,{})]}),e.jsxs("div",{className:"mx-auto w-full max-w-lg divide-y divide-border dark:divide-darkborder rounded-xl bg-lightgray dark:bg-dark",children:[e.jsxs(x,{as:"div",className:"py-4 px-6",defaultOpen:!0,children:[e.jsxs(d,{className:"group flex w-full items-center justify-between",children:[e.jsx("span",{className:"text-sm font-medium text-ld group-data-[hover]:text-primary",children:"What is your refund policy?"}),e.jsx(p,{icon:"solar:alt-arrow-down-outline",height:18,className:"size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180"})]}),e.jsx(u,{transition:!0,className:"mt-2 text-xs text-bodytext origin-top transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0",children:"Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy text that is not meant to mean anything. It is used as a placeholder in magazine"})]}),e.jsxs(x,{as:"div",className:"py-4 px-6",children:[e.jsxs(d,{className:"group flex w-full items-center justify-between",children:[e.jsx("span",{className:"text-sm font-medium text-ld group-data-[hover]:text-primary",children:"Can I reserve a magazine?"}),e.jsx(p,{icon:"solar:alt-arrow-down-outline",height:18,className:"size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180"})]}),e.jsx(u,{transition:!0,className:"mt-2 text-xs text-bodytext origin-top transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0",children:"Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy text that is not meant to mean anything. It is used as a placeholder in magazine"})]}),e.jsxs(x,{as:"div",className:"py-4 px-6",children:[e.jsxs(d,{className:"group flex w-full items-center justify-between",children:[e.jsx("span",{className:"text-sm font-medium text-ld group-data-[hover]:text-primary",children:"Do I have the right to return an item?"}),e.jsx(p,{icon:"solar:alt-arrow-down-outline",height:18,className:"size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180"})]}),e.jsx(u,{transition:!0,className:"mt-2 text-xs text-bodytext origin-top transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0",children:"Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy text that is not meant to mean anything. It is used as a placeholder in magazine"})]})]})]})}),Ae=[{to:"/",title:"Home"},{title:"Disclosure"}],nt=()=>e.jsxs(e.Fragment,{children:[e.jsx(pe,{title:"Disclosure",items:Ae}),e.jsxs("div",{className:"grid grid-cols-12 gap-30",children:[e.jsx("div",{className:"lg:col-span-6 col-span-12",children:e.jsx(ze,{})}),e.jsx("div",{className:"lg:col-span-6 col-span-12",children:e.jsx(Re,{})}),e.jsx("div",{className:"lg:col-span-6 col-span-12",children:e.jsx(Se,{})}),e.jsx("div",{className:"lg:col-span-6 col-span-12",children:e.jsx(Fe,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(Te,{})})]})]});export{nt as default};
