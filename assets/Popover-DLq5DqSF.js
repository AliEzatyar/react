import{r,a as h,j as e}from"./index-P2HWq5AB.js";import{C as G}from"./CardBox-iBHS77gx.js";import{C as z}from"./CodeModal-ZdVmlQAl.js";import{$ as $e,a as Me}from"./useFocusRing-Di4h4CvJ.js";import{w as Re}from"./use-active-press-C4eQ0n2y.js";import{M as Ae,y as Fe,x as Te,R as Oe,b as De,d as _e}from"./floating-BhKuzvxx.js";import{O as de,K as re,s as ke,o as y,L as ne,u as Y,_ as me,n as Ke}from"./render-BKlKWd6j.js";import{E as Le}from"./use-event-listener-B4O8R_w4.js";import{n as he,t as Ge,R as ze,m as He,f as We,r as Ue}from"./portal-Cyz56xWt.js";import{e as Ve}from"./use-resolve-button-type-CWZZrYkE.js";import{b as Je,R as Qe,O as Ne,u as Pe,a as H}from"./use-tab-direction-CzH6925o.js";import{y as ae,T as Ye}from"./use-sync-refs-CHG90QLp.js";import{c as Ze,i as oe,u as je,x as we,R as Se,s as qe}from"./open-closed-Br83XxfI.js";import{C as Xe}from"./close-provider-BzKj8JRn.js";import{f as ue,s as pe}from"./hidden-BgX8pakw.js";import{r as Be}from"./bugs-DpEN4NTH.js";import{b as ve,P as Q,F as W,A as et,h as tt,T as xe}from"./focus-management-CRpniyYN.js";import{u as at}from"./owner-CBjDaIWd.js";import{o as J}from"./keyboard-C1Wiwm26.js";import{y as ot}from"./close-button-B-NSUUI6.js";import{A as rt,m as st}from"./index-DTgOLtjS.js";import{B as nt}from"./BreadcrumbComp-BnVnHUMk.js";import"./toConsumableArray-B7RXd_Ox.js";import"./extends-CF3RwP-h.js";import"./core-DD6kpHa4.js";import"./floating-ui.react-C67KESGd.js";import"./use-server-handoff-complete-CjS_LuND.js";import"./button-ClQVDFZy.js";import"./disabled-CgoTiXBv.js";var dt=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(dt||{}),lt=(t=>(t[t.TogglePopover=0]="TogglePopover",t[t.ClosePopover=1]="ClosePopover",t[t.SetButton=2]="SetButton",t[t.SetButtonId=3]="SetButtonId",t[t.SetPanel=4]="SetPanel",t[t.SetPanelId=5]="SetPanelId",t))(lt||{});let it={0:t=>({...t,popoverState:Y(t.popoverState,{0:1,1:0}),__demoMode:!1}),1(t){return t.popoverState===1?t:{...t,popoverState:1,__demoMode:!1}},2(t,s){return t.button===s.button?t:{...t,button:s.button}},3(t,s){return t.buttonId===s.buttonId?t:{...t,buttonId:s.buttonId}},4(t,s){return t.panel===s.panel?t:{...t,panel:s.panel}},5(t,s){return t.panelId===s.panelId?t:{...t,panelId:s.panelId}}},fe=r.createContext(null);fe.displayName="PopoverContext";function le(t){let s=r.useContext(fe);if(s===null){let u=new Error(`<${t} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(u,le),u}return s}let ie=r.createContext(null);ie.displayName="PopoverAPIContext";function ge(t){let s=r.useContext(ie);if(s===null){let u=new Error(`<${t} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(u,ge),u}return s}let be=r.createContext(null);be.displayName="PopoverGroupContext";function Ee(){return r.useContext(be)}let ce=r.createContext(null);ce.displayName="PopoverPanelContext";function ct(){return r.useContext(ce)}function mt(t,s){return Y(s.type,it,t,s)}let ut="div";function pt(t,s){var u;let{__demoMode:S=!1,...v}=t,P=r.useRef(null),B=ae(s,Ye(l=>{P.current=l})),n=r.useRef([]),x=r.useReducer(mt,{__demoMode:S,popoverState:S?0:1,buttons:n,button:null,buttonId:null,panel:null,panelId:null,beforePanelSentinel:r.createRef(),afterPanelSentinel:r.createRef(),afterButtonSentinel:r.createRef()}),[{popoverState:j,button:o,buttonId:f,panel:p,panelId:k,beforePanelSentinel:N,afterPanelSentinel:g,afterButtonSentinel:d},m]=x,b=he((u=P.current)!=null?u:o),F=r.useMemo(()=>{if(!o||!p)return!1;for(let w of document.querySelectorAll("body > *"))if(Number(w==null?void 0:w.contains(o))^Number(w==null?void 0:w.contains(p)))return!0;let l=ve(),a=l.indexOf(o),c=(a+l.length-1)%l.length,i=(a+1)%l.length,I=l[c],R=l[i];return!p.contains(I)&&!p.contains(R)},[o,p]),T=ke(f),O=ke(k),Z=r.useMemo(()=>({buttonId:T,panelId:O,close:()=>m({type:1})}),[T,O,m]),D=Ee(),E=D==null?void 0:D.registerPopover,U=y(()=>{var l;return(l=D==null?void 0:D.isFocusWithinPopoverGroup())!=null?l:(b==null?void 0:b.activeElement)&&((o==null?void 0:o.contains(b.activeElement))||(p==null?void 0:p.contains(b.activeElement)))});r.useEffect(()=>E==null?void 0:E(Z),[E,Z]);let[M,q]=Ge(),V=Je(o),_=Qe({mainTreeNode:V,portals:M,defaultContainers:[o,p]});Le(b==null?void 0:b.defaultView,"focus",l=>{var a,c,i,I,R,w;l.target!==window&&l.target instanceof HTMLElement&&j===0&&(U()||o&&p&&(_.contains(l.target)||(c=(a=N.current)==null?void 0:a.contains)!=null&&c.call(a,l.target)||(I=(i=g.current)==null?void 0:i.contains)!=null&&I.call(i,l.target)||(w=(R=d.current)==null?void 0:R.contains)!=null&&w.call(R,l.target)||m({type:1})))},!0),ze(j===0,_.resolveContainers,(l,a)=>{m({type:1}),et(a,tt.Loose)||(l.preventDefault(),o==null||o.focus())});let K=y(l=>{m({type:1});let a=l?l instanceof HTMLElement?l:"current"in l&&l.current instanceof HTMLElement?l.current:o:o;a==null||a.focus()}),X=r.useMemo(()=>({close:K,isPortalled:F}),[K,F]),ee=r.useMemo(()=>({open:j===0,close:K}),[j,K]),te={ref:B},se=ne();return h.createElement(Ne,{node:V},h.createElement(Ae,null,h.createElement(ce.Provider,{value:null},h.createElement(fe.Provider,{value:x},h.createElement(ie.Provider,{value:X},h.createElement(Xe,{value:K},h.createElement(Ze,{value:Y(j,{0:oe.Open,1:oe.Closed})},h.createElement(q,null,se({ourProps:te,theirProps:v,slot:ee,defaultTag:ut,name:"Popover"})))))))))}let xt="button";function ht(t,s){let u=r.useId(),{id:S=`headlessui-popover-button-${u}`,disabled:v=!1,autoFocus:P=!1,...B}=t,[n,x]=le("Popover.Button"),{isPortalled:j}=ge("Popover.Button"),o=r.useRef(null),f=`headlessui-focus-sentinel-${r.useId()}`,p=Ee(),k=p==null?void 0:p.closeOthers,N=ct()!==null;r.useEffect(()=>{if(!N)return x({type:3,buttonId:S}),()=>{x({type:3,buttonId:null})}},[N,S,x]);let[g]=r.useState(()=>Symbol()),d=ae(o,s,Fe(),y(a=>{if(!N){if(a)n.buttons.current.push(g);else{let c=n.buttons.current.indexOf(g);c!==-1&&n.buttons.current.splice(c,1)}n.buttons.current.length>1&&console.warn("You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."),a&&x({type:2,button:a})}})),m=ae(o,s),b=he(o),F=y(a=>{var c,i,I;if(N){if(n.popoverState===1)return;switch(a.key){case J.Space:case J.Enter:a.preventDefault(),(i=(c=a.target).click)==null||i.call(c),x({type:1}),(I=n.button)==null||I.focus();break}}else switch(a.key){case J.Space:case J.Enter:a.preventDefault(),a.stopPropagation(),n.popoverState===1&&(k==null||k(n.buttonId)),x({type:0});break;case J.Escape:if(n.popoverState!==0)return k==null?void 0:k(n.buttonId);if(!o.current||b!=null&&b.activeElement&&!o.current.contains(b.activeElement))return;a.preventDefault(),a.stopPropagation(),x({type:1});break}}),T=y(a=>{N||a.key===J.Space&&a.preventDefault()}),O=y(a=>{var c,i;Be(a.currentTarget)||v||(N?(x({type:1}),(c=n.button)==null||c.focus()):(a.preventDefault(),a.stopPropagation(),n.popoverState===1&&(k==null||k(n.buttonId)),x({type:0}),(i=n.button)==null||i.focus()))}),Z=y(a=>{a.preventDefault(),a.stopPropagation()}),{isFocusVisible:D,focusProps:E}=$e({autoFocus:P}),{isHovered:U,hoverProps:M}=Me({isDisabled:v}),{pressed:q,pressProps:V}=Re({disabled:v}),_=n.popoverState===0,K=r.useMemo(()=>({open:_,active:q||_,disabled:v,hover:U,focus:D,autofocus:P}),[_,U,D,q,v,P]),X=Ve(t,n.button),ee=N?me({ref:m,type:X,onKeyDown:F,onClick:O,disabled:v||void 0,autoFocus:P},E,M,V):me({ref:d,id:n.buttonId,type:X,"aria-expanded":n.popoverState===0,"aria-controls":n.panel?n.panelId:void 0,disabled:v||void 0,autoFocus:P,onKeyDown:F,onKeyUp:T,onClick:O,onMouseDown:Z},E,M,V),te=Pe(),se=y(()=>{let a=n.panel;if(!a)return;function c(){Y(te.current,{[H.Forwards]:()=>Q(a,W.First),[H.Backwards]:()=>Q(a,W.Last)})===xe.Error&&Q(ve().filter(i=>i.dataset.headlessuiFocusGuard!=="true"),Y(te.current,{[H.Forwards]:W.Next,[H.Backwards]:W.Previous}),{relativeTo:n.button})}c()}),l=ne();return h.createElement(h.Fragment,null,l({ourProps:ee,theirProps:B,slot:K,defaultTag:xt,name:"Popover.Button"}),_&&!N&&j&&h.createElement(ue,{id:f,ref:n.afterButtonSentinel,features:pe.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:se}))}let vt="div",ft=de.RenderStrategy|de.Static;function Ie(t,s){let u=r.useId(),{id:S=`headlessui-popover-backdrop-${u}`,transition:v=!1,...P}=t,[{popoverState:B},n]=le("Popover.Backdrop"),[x,j]=r.useState(null),o=ae(s,j),f=je(),[p,k]=we(v,x,f!==null?(f&oe.Open)===oe.Open:B===0),N=y(m=>{if(Be(m.currentTarget))return m.preventDefault();n({type:1})}),g=r.useMemo(()=>({open:B===0}),[B]),d={ref:o,id:S,"aria-hidden":!0,onClick:N,...Se(k)};return ne()({ourProps:d,theirProps:P,slot:g,defaultTag:vt,features:ft,visible:p,name:"Popover.Backdrop"})}let gt="div",bt=de.RenderStrategy|de.Static;function yt(t,s){let u=r.useId(),{id:S=`headlessui-popover-panel-${u}`,focus:v=!1,anchor:P,portal:B=!1,modal:n=!1,transition:x=!1,...j}=t,[o,f]=le("Popover.Panel"),{close:p,isPortalled:k}=ge("Popover.Panel"),N=`headlessui-focus-sentinel-before-${u}`,g=`headlessui-focus-sentinel-after-${u}`,d=r.useRef(null),m=Te(P),[b,F]=Oe(m),T=De();m&&(B=!0);let[O,Z]=r.useState(null),D=ae(d,s,m?b:null,y(a=>f({type:4,panel:a})),Z),E=he(d);Ke(()=>(f({type:5,panelId:S}),()=>{f({type:5,panelId:null})}),[S,f]);let U=je(),[M,q]=we(x,O,U!==null?(U&oe.Open)===oe.Open:o.popoverState===0);He(M,o.button,()=>{f({type:1})});let V=o.__demoMode?!1:n&&M;We(V,E);let _=y(a=>{var c;switch(a.key){case J.Escape:if(o.popoverState!==0||!d.current||E!=null&&E.activeElement&&!d.current.contains(E.activeElement))return;a.preventDefault(),a.stopPropagation(),f({type:1}),(c=o.button)==null||c.focus();break}});r.useEffect(()=>{var a;t.static||o.popoverState===1&&((a=t.unmount)==null||a)&&f({type:4,panel:null})},[o.popoverState,t.unmount,t.static,f]),r.useEffect(()=>{if(o.__demoMode||!v||o.popoverState!==0||!d.current)return;let a=E==null?void 0:E.activeElement;d.current.contains(a)||Q(d.current,W.First)},[o.__demoMode,v,d.current,o.popoverState]);let K=r.useMemo(()=>({open:o.popoverState===0,close:p}),[o.popoverState,p]),X=me(m?T():{},{ref:D,id:S,onKeyDown:_,onBlur:v&&o.popoverState===0?a=>{var c,i,I,R,w;let L=a.relatedTarget;L&&d.current&&((c=d.current)!=null&&c.contains(L)||(f({type:1}),((I=(i=o.beforePanelSentinel.current)==null?void 0:i.contains)!=null&&I.call(i,L)||(w=(R=o.afterPanelSentinel.current)==null?void 0:R.contains)!=null&&w.call(R,L))&&L.focus({preventScroll:!0})))}:void 0,tabIndex:-1,style:{...j.style,...F,"--button-width":_e(o.button,!0).width},...Se(q)}),ee=Pe(),te=y(()=>{let a=d.current;if(!a)return;function c(){Y(ee.current,{[H.Forwards]:()=>{var i;Q(a,W.First)===xe.Error&&((i=o.afterPanelSentinel.current)==null||i.focus())},[H.Backwards]:()=>{var i;(i=o.button)==null||i.focus({preventScroll:!0})}})}c()}),se=y(()=>{let a=d.current;if(!a)return;function c(){Y(ee.current,{[H.Forwards]:()=>{if(!o.button)return;let i=ve(),I=i.indexOf(o.button),R=i.slice(0,I+1),w=[...i.slice(I+1),...R];for(let L of w.slice())if(L.dataset.headlessuiFocusGuard==="true"||O!=null&&O.contains(L)){let ye=w.indexOf(L);ye!==-1&&w.splice(ye,1)}Q(w,W.First,{sorted:!1})},[H.Backwards]:()=>{var i;Q(a,W.Previous)===xe.Error&&((i=o.button)==null||i.focus())}})}c()}),l=ne();return h.createElement(qe,null,h.createElement(ce.Provider,{value:S},h.createElement(ie.Provider,{value:{close:p,isPortalled:k}},h.createElement(Ue,{enabled:B?t.static||M:!1},M&&k&&h.createElement(ue,{id:N,ref:o.beforePanelSentinel,features:pe.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:te}),l({ourProps:X,theirProps:j,slot:K,defaultTag:gt,features:bt,visible:M,name:"Popover.Panel"}),M&&k&&h.createElement(ue,{id:g,ref:o.afterPanelSentinel,features:pe.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:se})))))}let kt="div";function Nt(t,s){let u=r.useRef(null),S=ae(u,s),[v,P]=r.useState([]),B=y(g=>{P(d=>{let m=d.indexOf(g);if(m!==-1){let b=d.slice();return b.splice(m,1),b}return d})}),n=y(g=>(P(d=>[...d,g]),()=>B(g))),x=y(()=>{var g;let d=at(u);if(!d)return!1;let m=d.activeElement;return(g=u.current)!=null&&g.contains(m)?!0:v.some(b=>{var F,T;return((F=d.getElementById(b.buttonId.current))==null?void 0:F.contains(m))||((T=d.getElementById(b.panelId.current))==null?void 0:T.contains(m))})}),j=y(g=>{for(let d of v)d.buttonId.current!==g&&d.close()}),o=r.useMemo(()=>({registerPopover:n,unregisterPopover:B,isFocusWithinPopoverGroup:x,closeOthers:j}),[n,B,x,j]),f=r.useMemo(()=>({}),[]),p=t,k={ref:S},N=ne();return h.createElement(Ne,null,h.createElement(be.Provider,{value:o},N({ourProps:k,theirProps:p,slot:f,defaultTag:kt,name:"Popover.Group"})))}let Pt=re(pt),C=re(ht),jt=re(Ie),Ce=re(Ie),$=re(yt),wt=re(Nt),A=Object.assign(Pt,{Button:C,Backdrop:Ce,Overlay:jt,Panel:$,Group:wt});const St=()=>e.jsx("div",{children:e.jsx(z,{children:`
    
    import { PopoverButton, PopoverPanel, Popover } from "@headlessui/react";    
     
    <div className="flex w-full">
          <div className="flex gap-8 bg-lightgray dark:bg-dark py-2 px-4 rounded-sm w-full">
            <div className="text-sm font-semibold text-ld">
              Products
            </div>
            <Popover>
              <PopoverButton className="block text-sm font-semibold text-ld focus:outline-none data-[active]:text-primary data-[hover]:text-primary data-[focus]:outline-1 data-[focus]:outline-white">
                Solutions
              </PopoverButton>
              <PopoverPanel
                transition
                anchor="bottom"
                className="divide-y divide-border dark:divide-darkborder rounded-sm bg-white dark:bg-dark text-sm shadow-md dark:shadow-dark-md transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
              >
                <div className="p-3">
                  <a
                    className="block rounded-sm py-2 px-3 transition hover:bg-lightgray hover:dark:bg-darkmuted"
                    href="#"
                  >
                    <p className="text-sm font-semibold text-ld">Insights</p>
                    <p className="text-bodytext text-sm">
                      Measure actions your users take
                    </p>
                  </a>
                  <a
                    className="block rounded-sm py-2 px-3 transition hover:bg-lightgray hover:dark:bg-darkmuted "
                    href="#"
                  >
                    <p className="text-sm font-semibold text-ld">Automations</p>
                    <p className="text-bodytext text-sm">
                      Create your own targeted content
                    </p>
                  </a>
                  <a
                    className="block rounded-sm py-2 px-3 transition hover:bg-lightgray hover:dark:bg-darkmuted "
                    href="#"
                  >
                    <p className="text-sm font-semibold text-ld">Reports</p>
                    <p className="text-bodytext text-sm">Keep track of your growth</p>
                  </a>
                </div>
                <div className="p-3">
                  <a
                    className="block rounded-sm py-2 px-3 transition hover:bg-lightgray hover:dark:bg-darkmuted "
                    href="#"
                  >
                    <p className="text-sm font-semibold text-ld">Documentation</p>
                    <p className="text-bodytext text-sm">
                      Start integrating products and tools
                    </p>
                  </a>
                </div>
              </PopoverPanel>
            </Popover>
            <div className="text-sm font-semibold text-ld">Pricing</div>
        </div>
        `})}),Bt=()=>e.jsx("div",{children:e.jsxs(G,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Basic Popover"}),e.jsx(St,{})]}),e.jsx("div",{className:"flex w-full",children:e.jsxs("div",{className:"flex gap-8 bg-lightgray dark:bg-dark py-2 px-4 rounded-sm w-full",children:[e.jsx("div",{className:"text-sm font-semibold text-ld",children:"Products"}),e.jsxs(A,{children:[e.jsx(C,{className:"block text-sm font-semibold text-ld focus:outline-none data-[active]:text-primary data-[hover]:text-primary data-[focus]:outline-1 data-[focus]:outline-white",children:"Solutions"}),e.jsxs($,{transition:!0,anchor:"bottom",className:"divide-y divide-border dark:divide-darkborder rounded-sm bg-white dark:bg-dark text-sm shadow-md dark:shadow-dark-md transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0",children:[e.jsxs("div",{className:"p-3",children:[e.jsxs("a",{className:"block rounded-sm py-2 px-3 transition hover:bg-lightgray hover:dark:bg-darkmuted",href:"#",children:[e.jsx("p",{className:"text-sm font-semibold text-ld",children:"Insights"}),e.jsx("p",{className:"text-bodytext text-sm",children:"Measure actions your users take"})]}),e.jsxs("a",{className:"block rounded-sm py-2 px-3 transition hover:bg-lightgray hover:dark:bg-darkmuted ",href:"#",children:[e.jsx("p",{className:"text-sm font-semibold text-ld",children:"Automations"}),e.jsx("p",{className:"text-bodytext text-sm",children:"Create your own targeted content"})]}),e.jsxs("a",{className:"block rounded-sm py-2 px-3 transition hover:bg-lightgray hover:dark:bg-darkmuted ",href:"#",children:[e.jsx("p",{className:"text-sm font-semibold text-ld",children:"Reports"}),e.jsx("p",{className:"text-bodytext text-sm",children:"Keep track of your growth"})]})]}),e.jsx("div",{className:"p-3",children:e.jsxs("a",{className:"block rounded-sm py-2 px-3 transition hover:bg-lightgray hover:dark:bg-darkmuted ",href:"#",children:[e.jsx("p",{className:"text-sm font-semibold text-ld",children:"Documentation"}),e.jsx("p",{className:"text-bodytext text-sm",children:"Start integrating products and tools"})]})})]})]}),e.jsx("div",{className:"text-sm font-semibold text-ld",children:"Pricing"})]})})]})}),Et=({children:t})=>e.jsx("a",{className:"ui-dropdown-item",href:"/samplepage",children:t}),It=()=>e.jsx("div",{children:e.jsx(z,{children:`
    
    
    import {
    CloseButton,
    Popover,
    PopoverButton,
    PopoverPanel,
    } from "@headlessui/react";
    import MyLink from "./MyLink";

    <div className="flex gap-8 bg-lightgray dark:bg-dark py-2 px-4 rounded-sm w-full flex justify-center">
        <Popover>
        <PopoverButton className="block text-sm font-semibold text-ld focus:outline-none data-[active]:text-primary data-[hover]:text-primary data-[focus]:outline-1 data-[focus]:outline-white">
            Open Popover
        </PopoverButton>
        <PopoverPanel
            anchor="bottom"
            className="w-52 py-4 rounded-sm bg-white dark:bg-dark text-sm shadow-md dark:shadow-dark-md transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
        >
            <CloseButton as={MyLink}>Insights</CloseButton>
        </PopoverPanel>
        </Popover>
    </div>

        `})}),Ct=()=>e.jsx("div",{children:e.jsxs(G,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Closing Popovers Manually"}),e.jsx(It,{})]}),e.jsx("div",{className:"flex gap-8 bg-lightgray dark:bg-dark py-2 px-4 rounded-sm w-full flex justify-center",children:e.jsxs(A,{children:[e.jsx(C,{className:"block text-sm font-semibold text-ld focus:outline-none data-[active]:text-primary data-[hover]:text-primary data-[focus]:outline-1 data-[focus]:outline-white",children:"Open Popover"}),e.jsx($,{anchor:"bottom",className:"w-52 py-4 rounded-sm bg-white dark:bg-dark text-sm shadow-md dark:shadow-dark-md transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0",children:e.jsx(ot,{as:Et,children:"Insights"})})]})})]})}),$t=()=>e.jsx("div",{children:e.jsx(z,{children:`
    
    
    import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
    import { AnimatePresence, motion } from "framer-motion";

    <div className="flex gap-8 bg-lightgray dark:bg-dark py-2 px-4 rounded-sm w-full flex justify-center">
          <Popover>
            {({ open }) => (
              <>
                <PopoverButton className="block text-sm font-semibold text-ld focus:outline-none data-[active]:text-primary data-[hover]:text-primary data-[focus]:outline-1 data-[focus]:outline-white">
                  Framer Motion
                </PopoverButton>
                <AnimatePresence>
                  {open && (
                    <PopoverPanel
                      static
                      as={motion.div}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      anchor="bottom"
                      className="flex origin-top flex-col w-52 z-[60] py-4 rounded-sm bg-white dark:bg-dark text-sm shadow-md dark:shadow-dark-md"
                    >
                      <a href="/analytics" className="ui-dropdown-item">
                        Analytics
                      </a>
                      <a href="/engagement" className="ui-dropdown-item">
                        Engagement
                      </a>
                      <a href="/security" className="ui-dropdown-item">
                        Security
                      </a>
                      <a href="/integrations" className="ui-dropdown-item">
                        Integrations
                      </a>
                    </PopoverPanel>
                  )}
                </AnimatePresence>
              </>
            )}
          </Popover>
        </div>


        `})}),Mt=()=>e.jsx("div",{children:e.jsxs(G,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Framer Motion Popover"}),e.jsx($t,{})]}),e.jsx("div",{className:"flex gap-8 bg-lightgray dark:bg-dark py-2 px-4 rounded-sm w-full flex justify-center",children:e.jsx(A,{children:({open:t})=>e.jsxs(e.Fragment,{children:[e.jsx(C,{className:"block text-sm font-semibold text-ld focus:outline-none data-[active]:text-primary data-[hover]:text-primary data-[focus]:outline-1 data-[focus]:outline-white",children:"Framer Motion"}),e.jsx(rt,{children:t&&e.jsxs($,{static:!0,as:st.div,initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.95},anchor:"bottom",className:"flex origin-top flex-col w-52 z-[60] py-4 rounded-sm bg-white dark:bg-dark text-sm shadow-md dark:shadow-dark-md",children:[e.jsx("a",{href:"/analytics",className:"ui-dropdown-item",children:"Analytics"}),e.jsx("a",{href:"/engagement",className:"ui-dropdown-item",children:"Engagement"}),e.jsx("a",{href:"/security",className:"ui-dropdown-item",children:"Security"}),e.jsx("a",{href:"/integrations",className:"ui-dropdown-item",children:"Integrations"})]})})]})})})]})}),Rt=()=>e.jsx("div",{children:e.jsx(z,{children:`
    
    import { PopoverButton, PopoverPanel, Popover } from "@headlessui/react";    
     
    <div className="flex w-full">
          <div className="flex gap-8 bg-lightgray dark:bg-dark py-2 px-4 rounded-sm w-full">
            <Popover>
              <PopoverButton className="block text-sm font-semibold text-ld focus:outline-none data-[active]:text-primary data-[hover]:text-primary data-[focus]:outline-1 data-[focus]:outline-white">
                Products
              </PopoverButton>
              <PopoverPanel
                transition
                anchor="bottom"
                className="divide-y divide-border dark:divide-darkborder rounded-sm bg-white dark:bg-dark text-sm shadow-md dark:shadow-dark-md transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
              >
                <div className="p-3">
                  <a
                    className="block rounded-sm py-2 px-3 transition hover:bg-lightgray hover:dark:bg-darkmuted"
                    href="#"
                  >
                    <p className="text-sm font-semibold text-ld">Insights</p>
                    <p className="text-bodytext text-sm">
                      Measure actions your users take
                    </p>
                  </a>
                  <a
                    className="block rounded-sm py-2 px-3 transition hover:bg-lightgray hover:dark:bg-darkmuted "
                    href="#"
                  >
                    <p className="text-sm font-semibold text-ld">Automations</p>
                    <p className="text-bodytext text-sm">
                      Create your own targeted content
                    </p>
                  </a>
                  <a
                    className="block rounded-sm py-2 px-3 transition hover:bg-lightgray hover:dark:bg-darkmuted "
                    href="#"
                  >
                    <p className="text-sm font-semibold text-ld">Reports</p>
                    <p className="text-bodytext text-sm">
                      Keep track of your growth
                    </p>
                  </a>
                </div>
                <div className="p-3">
                  <a
                    className="block rounded-sm py-2 px-3 transition hover:bg-lightgray hover:dark:bg-darkmuted "
                    href="#"
                  >
                    <p className="text-sm font-semibold text-ld">
                      Documentation
                    </p>
                    <p className="text-bodytext text-sm">
                      Start integrating products and tools
                    </p>
                  </a>
                </div>
              </PopoverPanel>
            </Popover>
            <Popover>
              <PopoverButton className="block text-sm font-semibold text-ld focus:outline-none data-[active]:text-primary data-[hover]:text-primary data-[focus]:outline-1 data-[focus]:outline-white">
                Solutions
              </PopoverButton>
              <PopoverPanel
                transition
                anchor="bottom"
                className="divide-y divide-border dark:divide-darkborder rounded-sm bg-white dark:bg-dark text-sm shadow-md dark:shadow-dark-md transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
              >
                <div className="p-3">
                  <a
                    className="block rounded-sm py-2 px-3 transition hover:bg-lightgray hover:dark:bg-darkmuted"
                    href="#"
                  >
                    <p className="text-sm font-semibold text-ld">Insights</p>
                    <p className="text-bodytext text-sm">
                      Measure actions your users take
                    </p>
                  </a>
                  <a
                    className="block rounded-sm py-2 px-3 transition hover:bg-lightgray hover:dark:bg-darkmuted "
                    href="#"
                  >
                    <p className="text-sm font-semibold text-ld">Automations</p>
                    <p className="text-bodytext text-sm">
                      Create your own targeted content
                    </p>
                  </a>
                  <a
                    className="block rounded-sm py-2 px-3 transition hover:bg-lightgray hover:dark:bg-darkmuted "
                    href="#"
                  >
                    <p className="text-sm font-semibold text-ld">Reports</p>
                    <p className="text-bodytext text-sm">
                      Keep track of your growth
                    </p>
                  </a>
                </div>
                <div className="p-3">
                  <a
                    className="block rounded-sm py-2 px-3 transition hover:bg-lightgray hover:dark:bg-darkmuted "
                    href="#"
                  >
                    <p className="text-sm font-semibold text-ld">
                      Documentation
                    </p>
                    <p className="text-bodytext text-sm">
                      Start integrating products and tools
                    </p>
                  </a>
                </div>
              </PopoverPanel>
            </Popover>
            <Popover>
              <PopoverButton className="block text-sm font-semibold text-ld focus:outline-none data-[active]:text-primary data-[hover]:text-primary data-[focus]:outline-1 data-[focus]:outline-white">
                Pricing
              </PopoverButton>
              <PopoverPanel
                transition
                anchor="bottom"
                className="divide-y divide-border dark:divide-darkborder rounded-sm bg-white dark:bg-dark text-sm shadow-md dark:shadow-dark-md transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
              >
                <div className="p-3">
                  <a
                    className="block rounded-sm py-2 px-3 transition hover:bg-lightgray hover:dark:bg-darkmuted"
                    href="#"
                  >
                    <p className="text-sm font-semibold text-ld">Insights</p>
                    <p className="text-bodytext text-sm">
                      Measure actions your users take
                    </p>
                  </a>
                  <a
                    className="block rounded-sm py-2 px-3 transition hover:bg-lightgray hover:dark:bg-darkmuted "
                    href="#"
                  >
                    <p className="text-sm font-semibold text-ld">Automations</p>
                    <p className="text-bodytext text-sm">
                      Create your own targeted content
                    </p>
                  </a>
                  <a
                    className="block rounded-sm py-2 px-3 transition hover:bg-lightgray hover:dark:bg-darkmuted "
                    href="#"
                  >
                    <p className="text-sm font-semibold text-ld">Reports</p>
                    <p className="text-bodytext text-sm">
                      Keep track of your growth
                    </p>
                  </a>
                </div>
                <div className="p-3">
                  <a
                    className="block rounded-sm py-2 px-3 transition hover:bg-lightgray hover:dark:bg-darkmuted "
                    href="#"
                  >
                    <p className="text-sm font-semibold text-ld">
                      Documentation
                    </p>
                    <p className="text-bodytext text-sm">
                      Start integrating products and tools
                    </p>
                  </a>
                </div>
              </PopoverPanel>
            </Popover>
        </div>
        `})}),At=()=>e.jsx("div",{children:e.jsxs(G,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Grouping Related Popover"}),e.jsx(Rt,{})]}),e.jsx("div",{className:"flex w-full",children:e.jsxs("div",{className:"flex gap-8 bg-lightgray dark:bg-dark py-2 px-4 rounded-sm w-full",children:[e.jsxs(A,{children:[e.jsx(C,{className:"block text-sm font-semibold text-ld focus:outline-none data-[active]:text-primary data-[hover]:text-primary data-[focus]:outline-1 data-[focus]:outline-white",children:"Products"}),e.jsxs($,{transition:!0,anchor:"bottom",className:"divide-y divide-border dark:divide-darkborder rounded-sm bg-white dark:bg-dark text-sm shadow-md dark:shadow-dark-md transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0",children:[e.jsxs("div",{className:"p-3",children:[e.jsxs("a",{className:"block rounded-sm py-2 px-3 transition hover:bg-lightgray hover:dark:bg-darkmuted",href:"#",children:[e.jsx("p",{className:"text-sm font-semibold text-ld",children:"Insights"}),e.jsx("p",{className:"text-bodytext text-sm",children:"Measure actions your users take"})]}),e.jsxs("a",{className:"block rounded-sm py-2 px-3 transition hover:bg-lightgray hover:dark:bg-darkmuted ",href:"#",children:[e.jsx("p",{className:"text-sm font-semibold text-ld",children:"Automations"}),e.jsx("p",{className:"text-bodytext text-sm",children:"Create your own targeted content"})]}),e.jsxs("a",{className:"block rounded-sm py-2 px-3 transition hover:bg-lightgray hover:dark:bg-darkmuted ",href:"#",children:[e.jsx("p",{className:"text-sm font-semibold text-ld",children:"Reports"}),e.jsx("p",{className:"text-bodytext text-sm",children:"Keep track of your growth"})]})]}),e.jsx("div",{className:"p-3",children:e.jsxs("a",{className:"block rounded-sm py-2 px-3 transition hover:bg-lightgray hover:dark:bg-darkmuted ",href:"#",children:[e.jsx("p",{className:"text-sm font-semibold text-ld",children:"Documentation"}),e.jsx("p",{className:"text-bodytext text-sm",children:"Start integrating products and tools"})]})})]})]}),e.jsxs(A,{children:[e.jsx(C,{className:"block text-sm font-semibold text-ld focus:outline-none data-[active]:text-primary data-[hover]:text-primary data-[focus]:outline-1 data-[focus]:outline-white",children:"Solutions"}),e.jsxs($,{transition:!0,anchor:"bottom",className:"divide-y divide-border dark:divide-darkborder rounded-sm bg-white dark:bg-dark text-sm shadow-md dark:shadow-dark-md transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0",children:[e.jsxs("div",{className:"p-3",children:[e.jsxs("a",{className:"block rounded-sm py-2 px-3 transition hover:bg-lightgray hover:dark:bg-darkmuted",href:"#",children:[e.jsx("p",{className:"text-sm font-semibold text-ld",children:"Insights"}),e.jsx("p",{className:"text-bodytext text-sm",children:"Measure actions your users take"})]}),e.jsxs("a",{className:"block rounded-sm py-2 px-3 transition hover:bg-lightgray hover:dark:bg-darkmuted ",href:"#",children:[e.jsx("p",{className:"text-sm font-semibold text-ld",children:"Automations"}),e.jsx("p",{className:"text-bodytext text-sm",children:"Create your own targeted content"})]}),e.jsxs("a",{className:"block rounded-sm py-2 px-3 transition hover:bg-lightgray hover:dark:bg-darkmuted ",href:"#",children:[e.jsx("p",{className:"text-sm font-semibold text-ld",children:"Reports"}),e.jsx("p",{className:"text-bodytext text-sm",children:"Keep track of your growth"})]})]}),e.jsx("div",{className:"p-3",children:e.jsxs("a",{className:"block rounded-sm py-2 px-3 transition hover:bg-lightgray hover:dark:bg-darkmuted ",href:"#",children:[e.jsx("p",{className:"text-sm font-semibold text-ld",children:"Documentation"}),e.jsx("p",{className:"text-bodytext text-sm",children:"Start integrating products and tools"})]})})]})]}),e.jsxs(A,{children:[e.jsx(C,{className:"block text-sm font-semibold text-ld focus:outline-none data-[active]:text-primary data-[hover]:text-primary data-[focus]:outline-1 data-[focus]:outline-white",children:"Pricing"}),e.jsxs($,{transition:!0,anchor:"bottom",className:"divide-y divide-border dark:divide-darkborder rounded-sm bg-white dark:bg-dark text-sm shadow-md dark:shadow-dark-md transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0",children:[e.jsxs("div",{className:"p-3",children:[e.jsxs("a",{className:"block rounded-sm py-2 px-3 transition hover:bg-lightgray hover:dark:bg-darkmuted",href:"#",children:[e.jsx("p",{className:"text-sm font-semibold text-ld",children:"Insights"}),e.jsx("p",{className:"text-bodytext text-sm",children:"Measure actions your users take"})]}),e.jsxs("a",{className:"block rounded-sm py-2 px-3 transition hover:bg-lightgray hover:dark:bg-darkmuted ",href:"#",children:[e.jsx("p",{className:"text-sm font-semibold text-ld",children:"Automations"}),e.jsx("p",{className:"text-bodytext text-sm",children:"Create your own targeted content"})]}),e.jsxs("a",{className:"block rounded-sm py-2 px-3 transition hover:bg-lightgray hover:dark:bg-darkmuted ",href:"#",children:[e.jsx("p",{className:"text-sm font-semibold text-ld",children:"Reports"}),e.jsx("p",{className:"text-bodytext text-sm",children:"Keep track of your growth"})]})]}),e.jsx("div",{className:"p-3",children:e.jsxs("a",{className:"block rounded-sm py-2 px-3 transition hover:bg-lightgray hover:dark:bg-darkmuted ",href:"#",children:[e.jsx("p",{className:"text-sm font-semibold text-ld",children:"Documentation"}),e.jsx("p",{className:"text-bodytext text-sm",children:"Start integrating products and tools"})]})})]})]})]})})]})}),Ft=()=>e.jsx("div",{children:e.jsx(z,{children:`
    
    import {
    Popover,
    PopoverButton,
    PopoverPanel,
    PopoverBackdrop,
    } from "@headlessui/react";    
     
    <div className="flex gap-8 bg-lightgray dark:bg-dark py-2 px-4 rounded-sm w-full flex justify-center">
          <Popover className="relative ">
            <PopoverButton className="block text-sm font-semibold text-ld focus:outline-none data-[active]:text-primary data-[hover]:text-primary data-[focus]:outline-1 data-[focus]:outline-white">
              Open Popover
            </PopoverButton>
            <PopoverBackdrop className="fixed inset-0 bg-black/15 z-50" />
            <PopoverPanel
              transition
              anchor="bottom"
              className="w-52 z-[60] py-4 rounded-sm bg-white dark:bg-dark text-sm shadow-md dark:shadow-dark-md transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
            >
              <div className="flex flex-col gap-1">
                <a href="/analytics" className="ui-dropdown-item">
                  Analytics
                </a>
                <a href="/engagement" className="ui-dropdown-item">
                  Engagement
                </a>
                <a href="/security" className="ui-dropdown-item">
                  Security
                </a>
                <a href="/integrations" className="ui-dropdown-item">
                  Integrations
                </a>
              </div>
            </PopoverPanel>
          </Popover>
    </div>
        `})}),Tt=()=>e.jsx("div",{children:e.jsxs(G,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Popover Backdrop"}),e.jsx(Ft,{})]}),e.jsx("div",{className:"flex gap-8 bg-lightgray dark:bg-dark py-2 px-4 rounded-sm w-full flex justify-center",children:e.jsxs(A,{className:"relative ",children:[e.jsx(C,{className:"block text-sm font-semibold text-ld focus:outline-none data-[active]:text-primary data-[hover]:text-primary data-[focus]:outline-1 data-[focus]:outline-white",children:"Open Popover"}),e.jsx(Ce,{className:"fixed inset-0 bg-black/15 z-50"}),e.jsx($,{transition:!0,anchor:"bottom",className:"w-52 z-[60] py-4 rounded-sm bg-white dark:bg-dark text-sm shadow-md dark:shadow-dark-md transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0",children:e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("a",{href:"/analytics",className:"ui-dropdown-item",children:"Analytics"}),e.jsx("a",{href:"/engagement",className:"ui-dropdown-item",children:"Engagement"}),e.jsx("a",{href:"/security",className:"ui-dropdown-item",children:"Security"}),e.jsx("a",{href:"/integrations",className:"ui-dropdown-item",children:"Integrations"})]})})]})})]})}),Ot=()=>e.jsx("div",{children:e.jsx(z,{children:`
    import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
    
    <div className="flex gap-8 bg-lightgray dark:bg-dark py-2 px-4 rounded-sm w-full">
          <Popover className="relative">
            <PopoverButton className="block text-sm font-semibold text-ld focus:outline-none data-[active]:text-primary data-[hover]:text-primary data-[focus]:outline-1 data-[focus]:outline-white">
              Solutions
            </PopoverButton>
            <PopoverPanel
              transition
              anchor="top start"
              className="w-52 py-4 rounded-sm bg-white dark:bg-dark text-sm shadow-md dark:shadow-dark-md transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
            >
              <div className="flex flex-col gap-1">
                <a href="/analytics" className="ui-dropdown-item">
                  Analytics
                </a>
                <a href="/engagement" className="ui-dropdown-item">
                  Engagement
                </a>
                <a href="/security" className="ui-dropdown-item">
                  Security
                </a>
                <a href="/integrations" className="ui-dropdown-item">
                  Integrations
                </a>
              </div>
            </PopoverPanel>
          </Popover>
    </div>
        
        `})}),Dt=()=>e.jsx("div",{children:e.jsxs(G,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Popover Positioning"}),e.jsx(Ot,{})]}),e.jsx("div",{className:"flex gap-8 bg-lightgray dark:bg-dark py-2 px-4 rounded-sm w-full flex justify-center",children:e.jsxs(A,{className:"relative flex justify-center",children:[e.jsx(C,{className:"block text-sm font-semibold text-ld focus:outline-none data-[active]:text-primary data-[hover]:text-primary data-[focus]:outline-1 data-[focus]:outline-white",children:"Top Popover"}),e.jsx($,{transition:!0,anchor:"top start",className:"w-52 py-4 rounded-sm bg-white dark:bg-dark text-sm shadow-md dark:shadow-dark-md transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0",children:e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("a",{href:"/analytics",className:"ui-dropdown-item",children:"Analytics"}),e.jsx("a",{href:"/engagement",className:"ui-dropdown-item",children:"Engagement"}),e.jsx("a",{href:"/security",className:"ui-dropdown-item",children:"Security"}),e.jsx("a",{href:"/integrations",className:"ui-dropdown-item",children:"Integrations"})]})})]})})]})}),_t=()=>e.jsx("div",{children:e.jsx(z,{children:`
    import { PopoverButton, PopoverPanel, Popover } from "@headlessui/react";
      
    
    <div className="flex gap-8 bg-lightgray dark:bg-dark py-2 px-4 rounded-sm w-full flex justify-center">
          <Popover className="relative ">
            <PopoverButton className="block text-sm font-semibold text-ld focus:outline-none data-[active]:text-primary data-[hover]:text-primary data-[focus]:outline-1 data-[focus]:outline-white">
              Open Popover
            </PopoverButton>
            <PopoverPanel
              transition
              anchor="bottom"
              className="w-52 z-[60] py-4 rounded-sm bg-white dark:bg-dark text-sm shadow-md dark:shadow-dark-md transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
            >
              <div className="flex flex-col gap-1">
                <a href="/analytics" className="ui-dropdown-item">
                  Analytics
                </a>
                <a href="/engagement" className="ui-dropdown-item">
                  Engagement
                </a>
                <a href="/security" className="ui-dropdown-item">
                  Security
                </a>
                <a href="/integrations" className="ui-dropdown-item">
                  Integrations
                </a>
              </div>
            </PopoverPanel>
          </Popover>
    </div>
        `})}),Kt=()=>e.jsx("div",{children:e.jsxs(G,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Popover Transitions"}),e.jsx(_t,{})]}),e.jsx("div",{className:"flex gap-8 bg-lightgray dark:bg-dark py-2 px-4 rounded-sm w-full flex justify-center",children:e.jsxs(A,{className:"relative ",children:[e.jsx(C,{className:"block text-sm font-semibold text-ld focus:outline-none data-[active]:text-primary data-[hover]:text-primary data-[focus]:outline-1 data-[focus]:outline-white",children:"Open Popover"}),e.jsx($,{transition:!0,anchor:"bottom",className:"w-52 z-[60] py-4 rounded-sm bg-white dark:bg-dark text-sm shadow-md dark:shadow-dark-md transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0",children:e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("a",{href:"/analytics",className:"ui-dropdown-item",children:"Analytics"}),e.jsx("a",{href:"/engagement",className:"ui-dropdown-item",children:"Engagement"}),e.jsx("a",{href:"/security",className:"ui-dropdown-item",children:"Security"}),e.jsx("a",{href:"/integrations",className:"ui-dropdown-item",children:"Integrations"})]})})]})})]})}),Lt=()=>e.jsx("div",{children:e.jsx(z,{children:`
    
    import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";   
    
    <div className="flex gap-8 bg-lightgray dark:bg-dark py-2 px-4 rounded-sm w-full">
        <Popover className="relative">
        <PopoverButton className="block text-sm font-semibold text-ld focus:outline-none data-[active]:text-primary data-[hover]:text-primary data-[focus]:outline-1 data-[focus]:outline-white">Solutions</PopoverButton>
        <PopoverPanel
        transition
            anchor="bottom"
            className="w-52 py-4 rounded-sm bg-white dark:bg-dark text-sm shadow-md dark:shadow-dark-md transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
        >
            <div className="flex flex-col gap-1">
            <a href="/analytics" className="ui-dropdown-item">
                Analytics
            </a>
            <a href="/engagement" className="ui-dropdown-item">
                Engagement
            </a>
            <a href="/security" className="ui-dropdown-item">
                Security
            </a>
            <a href="/integrations" className="ui-dropdown-item">
                Integrations
            </a>
            </div>
        </PopoverPanel>
        </Popover>
    </div>
        `})}),Gt=()=>e.jsx("div",{children:e.jsxs(G,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Popover Width"}),e.jsx(Lt,{})]}),e.jsx("div",{className:"flex gap-8 bg-lightgray dark:bg-dark py-2 px-4 rounded-sm w-full flex justify-center",children:e.jsxs(A,{className:"relative ",children:[e.jsx(C,{className:"block text-sm font-semibold text-ld focus:outline-none data-[active]:text-primary data-[hover]:text-primary data-[focus]:outline-1 data-[focus]:outline-white",children:"Open Popover"}),e.jsx($,{transition:!0,anchor:"bottom",className:"w-52 py-4 rounded-sm bg-white dark:bg-dark text-sm shadow-md dark:shadow-dark-md transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0",children:e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("a",{href:"/analytics",className:"ui-dropdown-item",children:"Analytics"}),e.jsx("a",{href:"/engagement",className:"ui-dropdown-item",children:"Engagement"}),e.jsx("a",{href:"/security",className:"ui-dropdown-item",children:"Security"}),e.jsx("a",{href:"/integrations",className:"ui-dropdown-item",children:"Integrations"})]})})]})})]})}),zt=()=>e.jsx("div",{children:e.jsx(z,{children:`
    
    import {
    Popover,
    PopoverButton,
    PopoverPanel,
    } from "@headlessui/react";
    import { forwardRef } from "react";

    let MyCustomButton = forwardRef(function (props: any, ref: any) {
    return <button className="..." ref={ref} {...props} />;
    });
    
    <div className="flex gap-8 bg-lightgray dark:bg-dark py-2 px-4 rounded-sm w-full ">
          <Popover as="nav">
            <PopoverButton
              as={MyCustomButton}
              className="block text-sm font-semibold text-ld focus:outline-none data-[active]:text-primary data-[hover]:text-primary data-[focus]:outline-1 data-[focus]:outline-white"
            >
              Render As Form View
            </PopoverButton>
            <PopoverPanel
              as="form"
              className="w-60 py-4 rounded-sm bg-white dark:bg-dark text-sm shadow-md dark:shadow-dark-md transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
            >
              <div className="flex flex-col gap-1">
                <a href="/analytics" className="ui-dropdown-item">
                  Analytics
                </a>
                <a href="/engagement" className="ui-dropdown-item">
                  Engagement
                </a>
                <a href="/security" className="ui-dropdown-item">
                  Security
                </a>
                <a href="/integrations" className="ui-dropdown-item">
                  Integrations
                </a>
              </div>
            </PopoverPanel>
          </Popover>
    </div>

        
        `})});let Ht=r.forwardRef(function(t,s){return e.jsx("button",{className:"...",ref:s,...t})});const Wt=()=>e.jsx("div",{children:e.jsxs(G,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Rendering Different Elements"}),e.jsx(zt,{})]}),e.jsx("div",{className:"flex gap-8 bg-lightgray dark:bg-dark py-2 px-4 rounded-sm w-full ",children:e.jsxs(A,{as:"nav",children:[e.jsx(C,{as:Ht,className:"block text-sm font-semibold text-ld focus:outline-none data-[active]:text-primary data-[hover]:text-primary data-[focus]:outline-1 data-[focus]:outline-white",children:"Render As Form View"}),e.jsx($,{as:"form",className:"w-60 py-4 rounded-sm bg-white dark:bg-dark text-sm shadow-md dark:shadow-dark-md transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0",children:e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("a",{href:"/analytics",className:"ui-dropdown-item",children:"Analytics"}),e.jsx("a",{href:"/engagement",className:"ui-dropdown-item",children:"Engagement"}),e.jsx("a",{href:"/security",className:"ui-dropdown-item",children:"Security"}),e.jsx("a",{href:"/integrations",className:"ui-dropdown-item",children:"Integrations"})]})})]})})]})}),Ut=[{to:"/",title:"Home"},{title:"Popover"}],Na=()=>e.jsxs(e.Fragment,{children:[e.jsx(nt,{title:"Popover",items:Ut}),e.jsxs("div",{className:"grid grid-cols-12 gap-30",children:[e.jsx("div",{className:"lg:col-span-4 md:col-span-6 col-span-12",children:e.jsx(Bt,{})}),e.jsx("div",{className:"lg:col-span-4 md:col-span-6 col-span-12",children:e.jsx(At,{})}),e.jsx("div",{className:"lg:col-span-4 md:col-span-6 col-span-12",children:e.jsx(Gt,{})}),e.jsx("div",{className:"lg:col-span-4 md:col-span-6 col-span-12",children:e.jsx(Dt,{})}),e.jsx("div",{className:"lg:col-span-4 md:col-span-6 col-span-12",children:e.jsx(Tt,{})}),e.jsx("div",{className:"lg:col-span-4 md:col-span-6 col-span-12",children:e.jsx(Kt,{})}),e.jsx("div",{className:"lg:col-span-4 md:col-span-6 col-span-12",children:e.jsx(Mt,{})}),e.jsx("div",{className:"lg:col-span-4 md:col-span-6 col-span-12",children:e.jsx(Ct,{})}),e.jsx("div",{className:"lg:col-span-4 md:col-span-6 col-span-12",children:e.jsx(Wt,{})})]})]});export{Na as default};
