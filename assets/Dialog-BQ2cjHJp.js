import{r as i,a as d,j as e}from"./index-CbdGNVhE.js";import{C as A}from"./CodeModal-CQLFjqdl.js";import{C as B}from"./CardBox-DWufozWR.js";import{o as Oe}from"./keyboard-C1Wiwm26.js";import{E as ce}from"./use-event-listener-hcH-Y6pZ.js";import{x as K,n as ue,c as Te,t as Ee,R as Fe,f as Ie,m as Pe,l as te,r as $e,X as Se}from"./portal-BwguBjbq.js";import{n as Ae,K as F,o as O,u as q,p as Be,L as R,c as de,O as ae}from"./render-NI4Jg5tu.js";import{y as Re}from"./use-inert-others-oUvP3Aj6.js";import{u as Me,a as z,b as ze,R as Le,O as le}from"./use-tab-direction-zBck8BXx.js";import{l as me}from"./use-server-handoff-complete-DVUiotRc.js";import{y as H}from"./use-sync-refs-BkeMvBOG.js";import{C as He}from"./close-provider-CzAj5LVa.js";import{u as pe,i as L,s as We}from"./open-closed-Ds_Qw___.js";import{w as Ye,H as W}from"./description-UBmOgCgm.js";import{f as fe}from"./use-is-mounted-C8NUJwad.js";import{m as Z,r as V}from"./active-element-history-Bh-9dXkb.js";import{f as se,s as ne}from"./hidden-BpERx2SG.js";import{P as S,F as j,I as y,T as oe}from"./focus-management-CnjimqFj.js";import{z as Ge,F as xe}from"./transition-D497Y5iK.js";import{A as Ue,m as ie}from"./index-DVVV_Nxn.js";import{B as Ve}from"./BreadcrumbComp-B5-q4JsV.js";import"./toConsumableArray-CGYUFXbV.js";import"./extends-CF3RwP-h.js";import"./Card-DYrQhspN.js";import"./owner-fH536Zf5.js";import"./disabled-DeIIXrEU.js";function qe(t,a=typeof document<"u"?document.defaultView:null,l){let s=K(t,"escape");ce(a,"keydown",n=>{s&&(n.defaultPrevented||n.key===Oe.Escape&&l(n))})}function Ke(){var t;let[a]=i.useState(()=>typeof window<"u"&&typeof window.matchMedia=="function"?window.matchMedia("(pointer: coarse)"):null),[l,s]=i.useState((t=a==null?void 0:a.matches)!=null?t:!1);return Ae(()=>{if(!a)return;function n(r){s(r.matches)}return a.addEventListener("change",n),()=>a.removeEventListener("change",n)},[a]),l}function ge(t){if(!t)return new Set;if(typeof t=="function")return new Set(t());let a=new Set;for(let l of t.current)l.current instanceof HTMLElement&&a.add(l.current);return a}let Ze="div";var C=(t=>(t[t.None=0]="None",t[t.InitialFocus=1]="InitialFocus",t[t.TabLock=2]="TabLock",t[t.FocusLock=4]="FocusLock",t[t.RestoreFocus=8]="RestoreFocus",t[t.AutoFocus=16]="AutoFocus",t))(C||{});function _e(t,a){let l=i.useRef(null),s=H(l,a),{initialFocus:n,initialFocusFallback:r,containers:u,features:o=15,...m}=t;me()||(o=0);let c=ue(l);et(o,{ownerDocument:c});let p=tt(o,{ownerDocument:c,container:l,initialFocus:n,initialFocusFallback:r});at(o,{ownerDocument:c,container:l,containers:u,previousActiveElement:p});let T=Me(),N=O(x=>{let w=l.current;w&&(g=>g())(()=>{q(T.current,{[z.Forwards]:()=>{S(w,j.First,{skipElements:[x.relatedTarget,r]})},[z.Backwards]:()=>{S(w,j.Last,{skipElements:[x.relatedTarget,r]})}})})}),h=K(!!(o&2),"focus-trap#tab-lock"),b=Be(),D=i.useRef(!1),k={ref:s,onKeyDown(x){x.key=="Tab"&&(D.current=!0,b.requestAnimationFrame(()=>{D.current=!1}))},onBlur(x){if(!(o&4))return;let w=ge(u);l.current instanceof HTMLElement&&w.add(l.current);let g=x.relatedTarget;g instanceof HTMLElement&&g.dataset.headlessuiFocusGuard!=="true"&&(be(w,g)||(D.current?S(l.current,q(T.current,{[z.Forwards]:()=>j.Next,[z.Backwards]:()=>j.Previous})|j.WrapAround,{relativeTo:x.target}):x.target instanceof HTMLElement&&y(x.target)))}},v=R();return d.createElement(d.Fragment,null,h&&d.createElement(se,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:N,features:ne.Focusable}),v({ourProps:k,theirProps:m,defaultTag:Ze,name:"FocusTrap"}),h&&d.createElement(se,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:N,features:ne.Focusable}))}let Qe=F(_e),Xe=Object.assign(Qe,{features:C});function Je(t=!0){let a=i.useRef(V.slice());return Z(([l],[s])=>{s===!0&&l===!1&&de(()=>{a.current.splice(0)}),s===!1&&l===!0&&(a.current=V.slice())},[t,V,a]),O(()=>{var l;return(l=a.current.find(s=>s!=null&&s.isConnected))!=null?l:null})}function et(t,{ownerDocument:a}){let l=!!(t&8),s=Je(l);Z(()=>{l||(a==null?void 0:a.activeElement)===(a==null?void 0:a.body)&&y(s())},[l]),Te(()=>{l&&y(s())})}function tt(t,{ownerDocument:a,container:l,initialFocus:s,initialFocusFallback:n}){let r=i.useRef(null),u=K(!!(t&1),"focus-trap#initial-focus"),o=fe();return Z(()=>{if(t===0)return;if(!u){n!=null&&n.current&&y(n.current);return}let m=l.current;m&&de(()=>{if(!o.current)return;let c=a==null?void 0:a.activeElement;if(s!=null&&s.current){if((s==null?void 0:s.current)===c){r.current=c;return}}else if(m.contains(c)){r.current=c;return}if(s!=null&&s.current)y(s.current);else{if(t&16){if(S(m,j.First|j.AutoFocus)!==oe.Error)return}else if(S(m,j.First)!==oe.Error)return;if(n!=null&&n.current&&(y(n.current),(a==null?void 0:a.activeElement)===n.current))return;console.warn("There are no focusable elements inside the <FocusTrap />")}r.current=a==null?void 0:a.activeElement})},[n,u,t]),r}function at(t,{ownerDocument:a,container:l,containers:s,previousActiveElement:n}){let r=fe(),u=!!(t&4);ce(a==null?void 0:a.defaultView,"focus",o=>{if(!u||!r.current)return;let m=ge(s);l.current instanceof HTMLElement&&m.add(l.current);let c=n.current;if(!c)return;let p=o.target;p&&p instanceof HTMLElement?be(m,p)?(n.current=p,y(p)):(o.preventDefault(),o.stopPropagation(),y(c)):y(n.current)},!0)}function be(t,a){for(let l of t)if(l.contains(a))return!0;return!1}var lt=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(lt||{}),st=(t=>(t[t.SetTitleId=0]="SetTitleId",t))(st||{});let nt={0(t,a){return t.titleId===a.id?t:{...t,titleId:a.id}}},_=i.createContext(null);_.displayName="DialogContext";function Y(t){let a=i.useContext(_);if(a===null){let l=new Error(`<${t} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,Y),l}return a}function ot(t,a){return q(a.type,nt,t,a)}let re=F(function(t,a){let l=i.useId(),{id:s=`headlessui-dialog-${l}`,open:n,onClose:r,initialFocus:u,role:o="dialog",autoFocus:m=!0,__demoMode:c=!1,unmount:p=!1,...T}=t,N=i.useRef(!1);o=function(){return o==="dialog"||o==="alertdialog"?o:(N.current||(N.current=!0,console.warn(`Invalid role [${o}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)),"dialog")}();let h=pe();n===void 0&&h!==null&&(n=(h&L.Open)===L.Open);let b=i.useRef(null),D=H(b,a),k=ue(b),v=n?0:1,[x,w]=i.useReducer(ot,{titleId:null,descriptionId:null,panelRef:i.createRef()}),g=O(()=>r(!1)),Q=O(f=>w({type:0,id:f})),E=me()?v===0:!1,[he,ve]=Ee(),ye={get current(){var f;return(f=x.panelRef.current)!=null?f:b.current}},G=ze(),{resolveContainers:U}=Le({mainTreeNode:G,portals:he,defaultContainers:[ye]}),X=h!==null?(h&L.Closing)===L.Closing:!1;Re(c||X?!1:E,{allowed:O(()=>{var f,ee;return[(ee=(f=b.current)==null?void 0:f.closest("[data-headlessui-portal]"))!=null?ee:null]}),disallowed:O(()=>{var f;return[(f=G==null?void 0:G.closest("body > *:not(#headlessui-portal-root)"))!=null?f:null]})}),Fe(E,U,f=>{f.preventDefault(),g()}),qe(E,k==null?void 0:k.defaultView,f=>{f.preventDefault(),f.stopPropagation(),document.activeElement&&"blur"in document.activeElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur(),g()}),Ie(c||X?!1:E,k,U),Pe(E,b,g);let[we,je]=Ye(),Ne=i.useMemo(()=>[{dialogState:v,close:g,setTitleId:Q,unmount:p},x],[v,x,g,Q,p]),J=i.useMemo(()=>({open:v===0}),[v]),De={ref:D,id:s,role:o,tabIndex:-1,"aria-modal":c?void 0:v===0?!0:void 0,"aria-labelledby":x.titleId,"aria-describedby":we,unmount:p},ke=!Ke(),$=C.None;E&&!c&&($|=C.RestoreFocus,$|=C.TabLock,m&&($|=C.AutoFocus),ke&&($|=C.InitialFocus));let Ce=R();return d.createElement(We,null,d.createElement(te,{force:!0},d.createElement($e,null,d.createElement(_.Provider,{value:Ne},d.createElement(Se,{target:b},d.createElement(te,{force:!1},d.createElement(je,{slot:J},d.createElement(ve,null,d.createElement(Xe,{initialFocus:u,initialFocusFallback:b,containers:U,features:$},d.createElement(He,{value:g},Ce({ourProps:De,theirProps:T,slot:J,defaultTag:it,features:rt,visible:v===0,name:"Dialog"})))))))))))}),it="div",rt=ae.RenderStrategy|ae.Static;function ct(t,a){let{transition:l=!1,open:s,...n}=t,r=pe(),u=t.hasOwnProperty("open")||r!==null,o=t.hasOwnProperty("onClose");if(!u&&!o)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!u)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!o)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(!r&&typeof t.open!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${t.open}`);if(typeof t.onClose!="function")throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${t.onClose}`);return(s!==void 0||l)&&!n.static?d.createElement(le,null,d.createElement(Ge,{show:s,transition:l,unmount:n.unmount},d.createElement(re,{ref:a,...n}))):d.createElement(le,null,d.createElement(re,{ref:a,open:s,...n}))}let ut="div";function dt(t,a){let l=i.useId(),{id:s=`headlessui-dialog-panel-${l}`,transition:n=!1,...r}=t,[{dialogState:u,unmount:o},m]=Y("Dialog.Panel"),c=H(a,m.panelRef),p=i.useMemo(()=>({open:u===0}),[u]),T=O(k=>{k.stopPropagation()}),N={ref:c,id:s,onClick:T},h=n?xe:i.Fragment,b=n?{unmount:o}:{},D=R();return d.createElement(h,{...b},D({ourProps:N,theirProps:r,slot:p,defaultTag:ut,name:"Dialog.Panel"}))}let mt="div";function pt(t,a){let{transition:l=!1,...s}=t,[{dialogState:n,unmount:r}]=Y("Dialog.Backdrop"),u=i.useMemo(()=>({open:n===0}),[n]),o={ref:a,"aria-hidden":!0},m=l?xe:i.Fragment,c=l?{unmount:r}:{},p=R();return d.createElement(m,{...c},p({ourProps:o,theirProps:s,slot:u,defaultTag:mt,name:"Dialog.Backdrop"}))}let ft="h2";function xt(t,a){let l=i.useId(),{id:s=`headlessui-dialog-title-${l}`,...n}=t,[{dialogState:r,setTitleId:u}]=Y("Dialog.Title"),o=H(a);i.useEffect(()=>(u(s),()=>u(null)),[s,u]);let m=i.useMemo(()=>({open:r===0}),[r]),c={ref:o,id:s};return R()({ourProps:c,theirProps:n,slot:m,defaultTag:ft,name:"Dialog.Title"})}let gt=F(ct),I=F(dt),bt=F(pt),P=F(xt),M=Object.assign(gt,{Panel:I,Title:P,Description:W});const ht=()=>e.jsx("div",{children:e.jsx(A,{children:`
    
    import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
    import  { useState } from "react";

    const BasicDialog = () => {
    let [isOpen, setIsOpen] = useState(false);

    function open() {
        setIsOpen(true);
    }

    function close() {
        setIsOpen(false);
    }
    return (
        <div>
            <Dialog
            open={isOpen}
            as="div"
            className="relative z-10 focus:outline-none"
            onClose={close}
            >
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <DialogPanel
                transition
                className="w-full max-w-md rounded-lg bg-white dark:bg-darkgray p-6 shadow-md dark:dark-shadow-md backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
              >
                <DialogTitle
                  as="h3"
                  className="text-base font-semibold text-ld"
                >
                  Payment successful
                </DialogTitle>
                <p className="mt-2 text-sm text-bodytext">
                  Your payment has been successfully submitted. We’ve sent you
                  an email with all of the details of your order.
                </p>
                <div className="mt-4 flex gap-3">
                  <button className="ui-button px-6 bg-info" onClick={close}>
                    Got it, thanks!
                  </button>
                  <button onClick={() => setIsOpen(false)} className="ui-button bg-error px-6" >Cancel</button>
                </div>
              </DialogPanel>
            </div>
          </div>
        </Dialog>
        </div>
    );
    };
        `})}),vt=()=>{let[t,a]=i.useState(!1);function l(){a(!0)}function s(){a(!1)}return e.jsx("div",{children:e.jsxs(B,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Basic Dialog"}),e.jsx(ht,{})]}),e.jsx("button",{onClick:l,className:"ui-button bg-primary justify-center",children:"Open Dialog"}),e.jsx(M,{open:t,as:"div",className:"relative z-10 focus:outline-none",onClose:s,children:e.jsx("div",{className:"fixed inset-0 z-10 w-screen overflow-y-auto",children:e.jsx("div",{className:"flex min-h-full items-center justify-center p-4",children:e.jsxs(I,{transition:!0,className:"w-full max-w-md rounded-lg bg-white dark:bg-darkgray p-6 shadow-md dark:dark-shadow-md backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0",children:[e.jsx(P,{as:"h3",className:"text-lg font-semibold text-ld",children:"Payment successful"}),e.jsx("p",{className:"mt-2 text-sm text-bodytext",children:"Your payment has been successfully submitted. We’ve sent you an email with all of the details of your order."}),e.jsxs("div",{className:"mt-4 flex gap-3",children:[e.jsx("button",{className:"ui-button-small px-6 bg-info",onClick:s,children:"Got it, thanks!"}),e.jsx("button",{onClick:()=>a(!1),className:"ui-button-small bg-error px-6",children:"Cancel"})]})]})})})})]})})},yt=()=>e.jsx("div",{children:e.jsx(A,{children:`
    
    import { useState } from "react";
    
    import {
    Description,
    Dialog,
    DialogBackdrop,
    DialogPanel,
    DialogTitle,
    } from "@headlessui/react";


    const DialogWithBackdrop = () => {
  let [isOpen, setIsOpen] = useState(false);
  return (
    <div>
        <button onClick={() => setIsOpen(true)} className="ui-button bg-secondary justify-center">Open Dialog</button>
        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="relative z-50"
        >
          {/* The backdrop, rendered as a fixed sibling to the panel container */}
          <DialogBackdrop className="fixed inset-0 bg-black/30" />

          {/* Full-screen container to center the panel */}
          <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
            {/* The actual dialog panel  */}
            <DialogPanel
              transition
              className="w-full max-w-md rounded-lg bg-white dark:bg-darkgray p-6 shadow-md dark:dark-shadow-md backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle className="text-lg font-semibold text-ld">
                Deactivate account
              </DialogTitle>
              <Description className="mt-2 text-sm text-bodytext">
                This will permanently deactivate your account
              </Description>
              <p className="mt-2 text-sm text-bodytext">
                Are you sure you want to deactivate your account? All of your
                data will be permanently removed.
              </p>
              <div className="flex gap-3 mt-4">
                <button
                  onClick={() => setIsOpen(false)}
                  className="ui-button-small bg-error"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="ui-button-small bg-warning"
                >
                  Deactivate
                </button>
              </div>
            </DialogPanel>
          </div>
        </Dialog>
    </div>
    
        `})}),wt=()=>{let[t,a]=i.useState(!1);return e.jsx("div",{children:e.jsxs(B,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Dialog With Backdrop"}),e.jsx(yt,{})]}),e.jsx("button",{onClick:()=>a(!0),className:"ui-button bg-secondary justify-center",children:"Open Dialog"}),e.jsxs(M,{open:t,onClose:()=>a(!1),className:"relative z-50",children:[e.jsx(bt,{className:"fixed inset-0 bg-black/30"}),e.jsx("div",{className:"fixed inset-0 flex w-screen items-center justify-center p-4",children:e.jsxs(I,{transition:!0,className:"w-full max-w-md rounded-lg bg-white dark:bg-darkgray p-6 shadow-md dark:dark-shadow-md backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0",children:[e.jsx(P,{className:"text-lg font-semibold text-ld",children:"Deactivate account"}),e.jsx(W,{className:"mt-2 text-sm text-bodytext",children:"This will permanently deactivate your account"}),e.jsx("p",{className:"mt-2 text-sm text-bodytext",children:"Are you sure you want to deactivate your account? All of your data will be permanently removed."}),e.jsxs("div",{className:"flex gap-3 mt-4",children:[e.jsx("button",{onClick:()=>a(!1),className:"ui-button-small bg-error",children:"Cancel"}),e.jsx("button",{onClick:()=>a(!1),className:"ui-button-small bg-warning",children:"Deactivate"})]})]})})]})]})})},jt=()=>e.jsx("div",{children:e.jsx(A,{children:`
    
    
    import {
    Description,
    Dialog,
    DialogPanel,
    DialogTitle,
    } from "@headlessui/react";
    import { AnimatePresence, motion } from "framer-motion";
    import { useState } from "react"; 
    
    
    const FramerAnimationDialog = () => {
    let [isOpen, setIsOpen] = useState(false);
    return (
    <div>
        <button onClick={() => setIsOpen(true)} className="ui-button bg-warning justify-center">Open dialog</button>
        <AnimatePresence>
          {isOpen && (
            <Dialog
              static
              open={isOpen}
              onClose={() => setIsOpen(false)}
              className="relative z-50"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/30"
              />
              <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                <DialogPanel
                  as={motion.div}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="w-full max-w-md rounded-lg bg-white dark:bg-darkgray p-6 shadow-md dark:dark-shadow-md"
                >
                  <DialogTitle className="text-lg font-semibold text-ld">
                  Framer Motion Dialog
                  </DialogTitle>
                  <Description className="mt-2 text-sm text-bodytext">
                    This will permanently deactivate your account
                  </Description>
                  <p className="mt-2 text-sm text-bodytext">
                    Are you sure you want to deactivate your account? All of
                    your data will be permanently removed.
                  </p>
                  <div className="flex gap-3 mt-5">
                    <button onClick={() => setIsOpen(false)} className="ui-button-small px-6 bg-error">Cancel</button>
                    <button onClick={() => setIsOpen(false)} className="ui-button-small px-6 bg-warning">Deactivate</button>
                  </div>
                </DialogPanel>
              </div>
            </Dialog>
          )}
        </AnimatePresence>
        </div>
        );
        };
    
        `})}),Nt=()=>{let[t,a]=i.useState(!1);return e.jsx("div",{children:e.jsxs(B,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Framer Motion Dialog"}),e.jsx(jt,{})]}),e.jsx("button",{onClick:()=>a(!0),className:"ui-button bg-warning justify-center",children:"Open dialog"}),e.jsx(Ue,{children:t&&e.jsxs(M,{static:!0,open:t,onClose:()=>a(!1),className:"relative z-50",children:[e.jsx(ie.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 bg-black/30"}),e.jsx("div",{className:"fixed inset-0 flex w-screen items-center justify-center p-4",children:e.jsxs(I,{as:ie.div,initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.95},className:"w-full max-w-md rounded-lg bg-white dark:bg-darkgray p-6 shadow-md dark:dark-shadow-md",children:[e.jsx(P,{className:"text-lg font-semibold text-ld",children:"Framer Motion Dialog"}),e.jsx(W,{className:"mt-2 text-sm text-bodytext",children:"This will permanently deactivate your account"}),e.jsx("p",{className:"mt-2 text-sm text-bodytext",children:"Are you sure you want to deactivate your account? All of your data will be permanently removed."}),e.jsxs("div",{className:"flex gap-3 mt-5",children:[e.jsx("button",{onClick:()=>a(!1),className:"ui-button-small px-6 bg-error",children:"Cancel"}),e.jsx("button",{onClick:()=>a(!1),className:"ui-button-small px-6 bg-warning",children:"Deactivate"})]})]})})]})})]})})},Dt=()=>e.jsx("div",{children:e.jsx(A,{children:`
    
    import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
    import  { useState } from "react";

    const BasicDialog = () => {
    let [isOpen, setIsOpen] = useState(false);
    return (
        <div>
        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="z-50 realtive"
        >
          <div className="fixed inset-0 w-screen overflow-y-auto p-4">
            <div className="flex min-h-full items-center justify-center">
              <DialogPanel className="max-w-lg space-y-4 rounded-lg bg-white dark:bg-darkgray p-6 shadow-md dark:dark-shadow-md backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0">
                <DialogTitle className="text-lg font-semibold text-ld ">
                  Deactivate account
                </DialogTitle>
                <Description className="mt-3 text-sm text-bodytext">
                  This will permanently deactivate your account
                </Description>
                <p className="mt-2 text-sm text-bodytext">
                  Are you sure you want to deactivate your account? All of your
                  data will be permanently removed.
                </p>
                <div className="flex gap-3 mt-3">
                  <button
                    className="ui-button-small px-6 bg-info"
                    onClick={() => setIsOpen(false)}
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="ui-button-small bg-error px-6"
                  >
                    Deactivate
                  </button>
                </div>
              </DialogPanel>
            </div>
          </div>
        </Dialog>
        </div>
    );
    };
        `})}),kt=()=>{let[t,a]=i.useState(!1);return e.jsx("div",{children:e.jsxs(B,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Scrollable Dialog"}),e.jsx(Dt,{})]}),e.jsx("button",{onClick:()=>a(!0),className:"ui-button bg-success justify-center",children:"Open Dialog"}),e.jsx(M,{open:t,onClose:()=>a(!1),className:"z-50 realtive",children:e.jsx("div",{className:"fixed inset-0 w-screen overflow-y-auto p-4",children:e.jsx("div",{className:"flex min-h-full items-center justify-center",children:e.jsxs(I,{className:"max-w-lg space-y-4 rounded-lg bg-white dark:bg-darkgray p-6 shadow-md dark:dark-shadow-md backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0",children:[e.jsx(P,{className:"text-lg font-semibold text-ld ",children:"Deactivate account"}),e.jsx(W,{className:"mt-3 text-sm text-bodytext",children:"This will permanently deactivate your account"}),e.jsx("p",{className:"mt-2 text-sm text-bodytext",children:"Are you sure you want to deactivate your account? All of your data will be permanently removed."}),e.jsxs("div",{className:"flex gap-3 mt-3",children:[e.jsx("button",{className:"ui-button-small px-6 bg-info",onClick:()=>a(!1),children:"Cancel"}),e.jsx("button",{onClick:()=>a(!1),className:"ui-button-small bg-error px-6",children:"Deactivate"})]})]})})})})]})})},Ct=()=>e.jsx("div",{children:e.jsx(A,{children:`
    
    import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
    import  { useState } from "react";
    import CardBox from "src/components/shared/CardBox";
    
    <div className="flex items-center justify-between mb-2">
        <h4 className="text-lg font-semibold">Transitions Dialog</h4>
        </div>
        <button
          onClick={() => setIsOpen(true)}
          className="ui-button bg-error justify-center"
        >
          Open Dialog
        </button>

        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          transition
          className="fixed inset-0 flex w-screen items-center justify-center bg-black/30 p-4 transition duration-300 ease-out data-[closed]:opacity-0 z-50"
        >
          <div className="fixed inset-0 z-50 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <DialogPanel
                transition
                className="w-full max-w-md rounded-lg bg-white dark:bg-darkgray p-6 shadow-md dark:dark-shadow-md "
              >
                <DialogTitle as="h3" className="text-lg font-semibold text-ld">
                  Transition Dialog
                </DialogTitle>
                <p className="mt-2 text-sm text-bodytext">
                  Your payment has been successfully submitted. We’ve sent you
                  an email with all of the details of your order.
                </p>
                <div className="mt-4 flex gap-3">
                  <button
                    className="ui-button-small px-6 bg-info"
                    onClick={close}
                  >
                    Got it, thanks!
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="ui-button-small bg-error px-6"
                  >
                    Cancel
                  </button>
                </div>
              </DialogPanel>
            </div>
          </div>
        </Dialog>
      
      `})}),Ot=()=>{let[t,a]=i.useState(!1);return e.jsx("div",{children:e.jsxs(B,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Transitions Dialog"}),e.jsx(Ct,{})]}),e.jsx("button",{onClick:()=>a(!0),className:"ui-button bg-error justify-center",children:"Open Dialog"}),e.jsx(M,{open:t,onClose:()=>a(!1),transition:!0,className:"fixed inset-0 flex w-screen items-center justify-center bg-black/30 p-4 transition duration-300 ease-out data-[closed]:opacity-0 z-50",children:e.jsx("div",{className:"fixed inset-0 z-50 w-screen overflow-y-auto",children:e.jsx("div",{className:"flex min-h-full items-center justify-center p-4",children:e.jsxs(I,{transition:!0,className:"w-full max-w-md rounded-lg bg-white dark:bg-darkgray p-6 shadow-md dark:dark-shadow-md ",children:[e.jsx(P,{as:"h3",className:"text-lg font-semibold text-ld",children:"Transition Dialog"}),e.jsx("p",{className:"mt-2 text-sm text-bodytext",children:"Your payment has been successfully submitted. We’ve sent you an email with all of the details of your order."}),e.jsxs("div",{className:"mt-4 flex gap-3",children:[e.jsx("button",{className:"ui-button-small px-6 bg-info",onClick:()=>a(!1),children:"Got it, thanks!"}),e.jsx("button",{onClick:()=>a(!1),className:"ui-button-small bg-error px-6",children:"Cancel"})]})]})})})})]})})},Tt=[{to:"/",title:"Home"},{title:"Dialog"}],ta=()=>e.jsxs(e.Fragment,{children:[e.jsx(Ve,{title:"Dialog",items:Tt}),e.jsxs("div",{className:"grid grid-cols-12 gap-30",children:[e.jsx("div",{className:"lg:col-span-4 md:col-span-6 col-span-12",children:e.jsx(vt,{})}),e.jsx("div",{className:"lg:col-span-4 md:col-span-6 col-span-12",children:e.jsx(wt,{})}),e.jsx("div",{className:"lg:col-span-4 md:col-span-6 col-span-12",children:e.jsx(kt,{})}),e.jsx("div",{className:"lg:col-span-4 md:col-span-6 col-span-12",children:e.jsx(Ot,{})}),e.jsx("div",{className:"lg:col-span-4 md:col-span-6 col-span-12",children:e.jsx(Nt,{})})]})]});export{ta as default};
