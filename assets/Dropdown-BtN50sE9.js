import{r as f,a as L,aC as H,j as e,I as b}from"./index-BofOdt6x.js";import{C as S}from"./CardBox-DwJnOFrw.js";import{C as B}from"./CodeModal-BtUURIBs.js";import{$ as ge,a as je}from"./useFocusRing-Cu1umf0H.js";import{w as be}from"./use-active-press-Bji0LVDj.js";import{s as we,a as Me}from"./use-text-value-B2fzKGR0.js";import{O as re,K as F,o as I,L as T,u as ae,_ as le,p as Ie,n as Q,b as ve}from"./render-XO5tK_Yh.js";import{M as Ne,F as ye,y as Se,x as De,R as Ee,b as Ce,d as Be}from"./floating-DpZ-TSj_.js";import{y as ke}from"./use-inert-others-B6K3cN7k.js";import{R as Pe,n as Re,m as $e,f as Ae,r as Le}from"./portal-BU1Ivwaw.js";import{e as Fe}from"./use-resolve-button-type-CG-lxRoK.js";import{y as q}from"./use-sync-refs-sXKuz3Bt.js";import{u as Te,c as w,f as z}from"./calculate-active-index-jf2H5fHr.js";import{c as Oe,i as U,u as _e,x as Ke,R as Ge}from"./open-closed-B3wvST03.js";import{F as He}from"./use-tree-walker-ByvM6Bh1.js";import{r as Qe}from"./bugs-DpEN4NTH.js";import{A as Ue,h as qe,j as Ve,F as ie,G as de,_ as We}from"./focus-management-BjWZEwKP.js";import{w as Je}from"./description-DAuExW8v.js";import{o as j}from"./keyboard-C1Wiwm26.js";import{K as ce,P as ze}from"./label-Ce_cNn0Z.js";import{A as Xe,m as Ye}from"./index-BkIwsrNq.js";import{B as Ze}from"./BreadcrumbComp-B936abq-.js";import"./Card-D_l9r_n3.js";import"./toConsumableArray-CcjcqDNZ.js";import"./extends-CF3RwP-h.js";import"./core-DD6kpHa4.js";import"./owner-S-LMO14O.js";import"./floating-ui.react-CA4f3tMh.js";import"./use-server-handoff-complete-Df2eFvDN.js";import"./disabled-mEMLDSam.js";var et=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(et||{}),tt=(t=>(t[t.Pointer=0]="Pointer",t[t.Other=1]="Other",t))(tt||{}),nt=(t=>(t[t.OpenMenu=0]="OpenMenu",t[t.CloseMenu=1]="CloseMenu",t[t.GoToItem=2]="GoToItem",t[t.Search=3]="Search",t[t.ClearSearch=4]="ClearSearch",t[t.RegisterItem=5]="RegisterItem",t[t.UnregisterItem=6]="UnregisterItem",t[t.SetButtonElement=7]="SetButtonElement",t[t.SetItemsElement=8]="SetItemsElement",t))(nt||{});function X(t,s=r=>r){let r=t.activeItemIndex!==null?t.items[t.activeItemIndex]:null,o=We(s(t.items.slice()),c=>c.dataRef.current.domRef.current),a=r?o.indexOf(r):null;return a===-1&&(a=null),{items:o,activeItemIndex:a}}let st={1(t){return t.menuState===1?t:{...t,activeItemIndex:null,menuState:1}},0(t){return t.menuState===0?t:{...t,__demoMode:!1,menuState:0}},2:(t,s)=>{var r,o,a,c,u;if(t.menuState===1)return t;let m={...t,searchQuery:"",activationTrigger:(r=s.trigger)!=null?r:1,__demoMode:!1};if(s.focus===w.Nothing)return{...m,activeItemIndex:null};if(s.focus===w.Specific)return{...m,activeItemIndex:t.items.findIndex(h=>h.id===s.id)};if(s.focus===w.Previous){let h=t.activeItemIndex;if(h!==null){let M=t.items[h].dataRef.current.domRef,n=z(s,{resolveItems:()=>t.items,resolveActiveIndex:()=>t.activeItemIndex,resolveId:d=>d.id,resolveDisabled:d=>d.dataRef.current.disabled});if(n!==null){let d=t.items[n].dataRef.current.domRef;if(((o=M.current)==null?void 0:o.previousElementSibling)===d.current||((a=d.current)==null?void 0:a.previousElementSibling)===null)return{...m,activeItemIndex:n}}}}else if(s.focus===w.Next){let h=t.activeItemIndex;if(h!==null){let M=t.items[h].dataRef.current.domRef,n=z(s,{resolveItems:()=>t.items,resolveActiveIndex:()=>t.activeItemIndex,resolveId:d=>d.id,resolveDisabled:d=>d.dataRef.current.disabled});if(n!==null){let d=t.items[n].dataRef.current.domRef;if(((c=M.current)==null?void 0:c.nextElementSibling)===d.current||((u=d.current)==null?void 0:u.nextElementSibling)===null)return{...m,activeItemIndex:n}}}}let p=X(t),x=z(s,{resolveItems:()=>p.items,resolveActiveIndex:()=>p.activeItemIndex,resolveId:h=>h.id,resolveDisabled:h=>h.dataRef.current.disabled});return{...m,...p,activeItemIndex:x}},3:(t,s)=>{let r=t.searchQuery!==""?0:1,o=t.searchQuery+s.value.toLowerCase(),a=(t.activeItemIndex!==null?t.items.slice(t.activeItemIndex+r).concat(t.items.slice(0,t.activeItemIndex+r)):t.items).find(u=>{var m;return((m=u.dataRef.current.textValue)==null?void 0:m.startsWith(o))&&!u.dataRef.current.disabled}),c=a?t.items.indexOf(a):-1;return c===-1||c===t.activeItemIndex?{...t,searchQuery:o}:{...t,searchQuery:o,activeItemIndex:c,activationTrigger:1}},4(t){return t.searchQuery===""?t:{...t,searchQuery:"",searchActiveItemIndex:null}},5:(t,s)=>{let r=X(t,o=>[...o,{id:s.id,dataRef:s.dataRef}]);return{...t,...r}},6:(t,s)=>{let r=X(t,o=>{let a=o.findIndex(c=>c.id===s.id);return a!==-1&&o.splice(a,1),o});return{...t,...r,activationTrigger:1}},7:(t,s)=>t.buttonElement===s.element?t:{...t,buttonElement:s.element},8:(t,s)=>t.itemsElement===s.element?t:{...t,itemsElement:s.element}},ee=f.createContext(null);ee.displayName="MenuContext";function V(t){let s=f.useContext(ee);if(s===null){let r=new Error(`<${t} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,V),r}return s}function ot(t,s){return ae(s.type,st,t,s)}let rt=f.Fragment;function it(t,s){let{__demoMode:r=!1,...o}=t,a=f.useReducer(ot,{__demoMode:r,menuState:r?0:1,buttonElement:null,itemsElement:null,items:[],searchQuery:"",activeItemIndex:null,activationTrigger:1}),[{menuState:c,itemsElement:u,buttonElement:m},p]=a,x=q(s);Pe(c===0,[m,u],(k,E)=>{p({type:1}),Ue(E,qe.Loose)||(k.preventDefault(),m==null||m.focus())});let h=I(()=>{p({type:1})}),M=f.useMemo(()=>({open:c===0,close:h}),[c,h]),n={ref:x},d=T();return L.createElement(Ne,null,L.createElement(ee.Provider,{value:a},L.createElement(Oe,{value:ae(c,{0:U.Open,1:U.Closed})},d({ourProps:n,theirProps:o,slot:M,defaultTag:rt,name:"Menu"}))))}let at="button";function lt(t,s){var r;let o=f.useId(),{id:a=`headlessui-menu-button-${o}`,disabled:c=!1,autoFocus:u=!1,...m}=t,[p,x]=V("Menu.Button"),h=ye(),M=q(s,Se(),I(g=>x({type:7,element:g}))),n=I(g=>{switch(g.key){case j.Space:case j.Enter:case j.ArrowDown:g.preventDefault(),g.stopPropagation(),H.flushSync(()=>x({type:0})),x({type:2,focus:w.First});break;case j.ArrowUp:g.preventDefault(),g.stopPropagation(),H.flushSync(()=>x({type:0})),x({type:2,focus:w.Last});break}}),d=I(g=>{switch(g.key){case j.Space:g.preventDefault();break}}),k=I(g=>{var K;if(Qe(g.currentTarget))return g.preventDefault();c||(p.menuState===0?(H.flushSync(()=>x({type:1})),(K=p.buttonElement)==null||K.focus({preventScroll:!0})):(g.preventDefault(),x({type:0})))}),{isFocusVisible:E,focusProps:P}=ge({autoFocus:u}),{isHovered:R,hoverProps:O}=je({isDisabled:c}),{pressed:$,pressProps:C}=be({disabled:c}),_=f.useMemo(()=>({open:p.menuState===0,active:$||p.menuState===0,disabled:c,hover:R,focus:E,autofocus:u}),[p,R,E,$,c,u]),A=le(h(),{ref:M,id:a,type:Fe(t,p.buttonElement),"aria-haspopup":"menu","aria-controls":(r=p.itemsElement)==null?void 0:r.id,"aria-expanded":p.menuState===0,disabled:c||void 0,autoFocus:u,onKeyDown:n,onKeyUp:d,onClick:k},P,O,C);return T()({ourProps:A,theirProps:m,slot:_,defaultTag:at,name:"Menu.Button"})}let dt="div",ct=re.RenderStrategy|re.Static;function ut(t,s){var r,o;let a=f.useId(),{id:c=`headlessui-menu-items-${a}`,anchor:u,portal:m=!1,modal:p=!0,transition:x=!1,...h}=t,M=De(u),[n,d]=V("Menu.Items"),[k,E]=Ee(M),P=Ce(),[R,O]=f.useState(null),$=q(s,M?k:null,I(l=>d({type:8,element:l})),O),C=Re(n.itemsElement);M&&(m=!0);let _=_e(),[A,g]=Ke(x,R,_!==null?(_&U.Open)===U.Open:n.menuState===0);$e(A,n.buttonElement,()=>{d({type:1})});let K=n.__demoMode?!1:p&&n.menuState===0;Ae(K,C);let W=n.__demoMode?!1:p&&n.menuState===0;ke(W,{allowed:f.useCallback(()=>[n.buttonElement,n.itemsElement],[n.buttonElement,n.itemsElement])});let J=n.menuState!==0,v=we(J,n.buttonElement)?!1:A;f.useEffect(()=>{let l=n.itemsElement;l&&n.menuState===0&&l!==(C==null?void 0:C.activeElement)&&l.focus({preventScroll:!0})},[n.menuState,n.itemsElement,C]),He(n.menuState===0,{container:n.itemsElement,accept(l){return l.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:l.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(l){l.setAttribute("role","none")}});let G=Ie(),ue=I(l=>{var ne,se,oe;switch(G.dispose(),l.key){case j.Space:if(n.searchQuery!=="")return l.preventDefault(),l.stopPropagation(),d({type:3,value:l.key});case j.Enter:if(l.preventDefault(),l.stopPropagation(),d({type:1}),n.activeItemIndex!==null){let{dataRef:fe}=n.items[n.activeItemIndex];(se=(ne=fe.current)==null?void 0:ne.domRef.current)==null||se.click()}de(n.buttonElement);break;case j.ArrowDown:return l.preventDefault(),l.stopPropagation(),d({type:2,focus:w.Next});case j.ArrowUp:return l.preventDefault(),l.stopPropagation(),d({type:2,focus:w.Previous});case j.Home:case j.PageUp:return l.preventDefault(),l.stopPropagation(),d({type:2,focus:w.First});case j.End:case j.PageDown:return l.preventDefault(),l.stopPropagation(),d({type:2,focus:w.Last});case j.Escape:l.preventDefault(),l.stopPropagation(),H.flushSync(()=>d({type:1})),(oe=n.buttonElement)==null||oe.focus({preventScroll:!0});break;case j.Tab:l.preventDefault(),l.stopPropagation(),H.flushSync(()=>d({type:1})),Ve(n.buttonElement,l.shiftKey?ie.Previous:ie.Next);break;default:l.key.length===1&&(d({type:3,value:l.key}),G.setTimeout(()=>d({type:4}),350));break}}),me=I(l=>{switch(l.key){case j.Space:l.preventDefault();break}}),pe=f.useMemo(()=>({open:n.menuState===0}),[n.menuState]),he=le(M?P():{},{"aria-activedescendant":n.activeItemIndex===null||(r=n.items[n.activeItemIndex])==null?void 0:r.id,"aria-labelledby":(o=n.buttonElement)==null?void 0:o.id,id:c,onKeyDown:ue,onKeyUp:me,role:"menu",tabIndex:n.menuState===0?0:void 0,ref:$,style:{...h.style,...E,"--button-width":Be(n.buttonElement,!0).width},...Ge(g)}),xe=T();return L.createElement(Le,{enabled:m?t.static||A:!1},xe({ourProps:he,theirProps:h,slot:pe,defaultTag:dt,features:ct,visible:v,name:"Menu.Items"}))}let mt=f.Fragment;function pt(t,s){let r=f.useId(),{id:o=`headlessui-menu-item-${r}`,disabled:a=!1,...c}=t,[u,m]=V("Menu.Item"),p=u.activeItemIndex!==null?u.items[u.activeItemIndex].id===o:!1,x=f.useRef(null),h=q(s,x);Q(()=>{if(!u.__demoMode&&u.menuState===0&&p&&u.activationTrigger!==0)return ve().requestAnimationFrame(()=>{var v,G;(G=(v=x.current)==null?void 0:v.scrollIntoView)==null||G.call(v,{block:"nearest"})})},[u.__demoMode,x,p,u.menuState,u.activationTrigger,u.activeItemIndex]);let M=Me(x),n=f.useRef({disabled:a,domRef:x,get textValue(){return M()}});Q(()=>{n.current.disabled=a},[n,a]),Q(()=>(m({type:5,id:o,dataRef:n}),()=>m({type:6,id:o})),[n,o]);let d=I(()=>{m({type:1})}),k=I(v=>{if(a)return v.preventDefault();m({type:1}),de(u.buttonElement)}),E=I(()=>{if(a)return m({type:2,focus:w.Nothing});m({type:2,focus:w.Specific,id:o})}),P=Te(),R=I(v=>{P.update(v),!a&&(p||m({type:2,focus:w.Specific,id:o,trigger:0}))}),O=I(v=>{P.wasMoved(v)&&(a||p||m({type:2,focus:w.Specific,id:o,trigger:0}))}),$=I(v=>{P.wasMoved(v)&&(a||p&&m({type:2,focus:w.Nothing}))}),[C,_]=ce(),[A,g]=Je(),K=f.useMemo(()=>({active:p,focus:p,disabled:a,close:d}),[p,a,d]),W={id:o,ref:h,role:"menuitem",tabIndex:a===!0?void 0:-1,"aria-disabled":a===!0?!0:void 0,"aria-labelledby":C,"aria-describedby":A,disabled:void 0,onClick:k,onFocus:E,onPointerEnter:R,onMouseEnter:R,onPointerMove:O,onMouseMove:O,onPointerLeave:$,onMouseLeave:$},J=T();return L.createElement(_,null,L.createElement(g,null,J({ourProps:W,theirProps:c,slot:K,defaultTag:mt,name:"Menu.Item"})))}let ht="div";function xt(t,s){let[r,o]=ce(),a=t,c={ref:s,"aria-labelledby":r,role:"group"},u=T();return L.createElement(o,null,u({ourProps:c,theirProps:a,slot:{},defaultTag:ht,name:"Menu.Section"}))}let ft="header";function gt(t,s){let r=f.useId(),{id:o=`headlessui-menu-heading-${r}`,...a}=t,c=ze();Q(()=>c.register(o),[o,c.register]);let u={id:o,ref:s,role:"presentation",...c.props};return T()({ourProps:u,theirProps:a,slot:{},defaultTag:ft,name:"Menu.Heading"})}let jt="div";function bt(t,s){let r=t,o={ref:s,role:"separator"};return T()({ourProps:o,theirProps:r,slot:{},defaultTag:jt,name:"Menu.Separator"})}let wt=F(it),N=F(lt),y=F(ut),i=F(pt),Y=F(xt),Z=F(gt),te=F(bt),D=Object.assign(wt,{Button:N,Items:y,Item:i,Section:Y,Heading:Z,Separator:te});const Mt=()=>e.jsx("div",{children:e.jsx(B,{children:`


import CardBox from "../shared/CardBox";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Icon } from "@iconify/react";
        
<Menu>
    <MenuButton className="ui-button bg-primary gap-2">
    Options
    <Icon icon="solar:alt-arrow-down-outline" height={18} />
    </MenuButton>
    <MenuItems transition anchor="bottom" className="ui-dropdown ui-dropdown-animation">
    <MenuItem>
        <button className="ui-dropdown-item group">
        <Icon icon="solar:pen-new-square-outline" height={18} />
        Edit
        <kbd className="ms-auto hidden text-xs text-bodytext group-data-[focus]:inline ">
            ⌘E
        </kbd>
        </button>
    </MenuItem>
    <MenuItem>
        <button className="ui-dropdown-item group ">
        <Icon icon="solar:copy-outline" height={18} />
        Duplicate
        <kbd className="ms-auto hidden text-xs text-bodytext group-data-[focus]:inline">
            ⌘D
        </kbd>
        </button>
    </MenuItem>
    <MenuItem>
        <button className="ui-dropdown-item group ">
        <Icon icon="solar:archive-check-broken" height={18} />
        Archive
        <kbd className="ms-auto hidden text-xs text-bodytext group-data-[focus]:inline">
            ⌘A
        </kbd>
        </button>
    </MenuItem>
    <MenuItem>
        <button className="ui-dropdown-item group ">
        <Icon
            icon="solar:trash-bin-minimalistic-2-outline"
            height={18}
        />
        Delete
        <kbd className="ms-auto hidden text-xs text-bodytext group-data-[focus]:inline">
            ⌘D
        </kbd>
        </button>
    </MenuItem>
    </MenuItems>
</Menu>  
                    `})}),It=()=>e.jsx("div",{children:e.jsxs(S,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Basic Dropdown"}),e.jsx(Mt,{})]}),e.jsxs(D,{children:[e.jsxs(N,{className:"ui-button bg-primary gap-2",children:["Options",e.jsx(b,{icon:"solar:alt-arrow-down-outline",height:18})]}),e.jsxs(y,{transition:!0,anchor:"bottom",className:"ui-dropdown ui-dropdown-animation",children:[e.jsx(i,{children:e.jsxs("button",{className:"ui-dropdown-item group",children:[e.jsx(b,{icon:"solar:pen-new-square-outline",height:18}),"Edit",e.jsx("kbd",{className:"ms-auto hidden text-xs text-bodytext group-data-[focus]:inline ",children:"⌘ E"})]})}),e.jsx(i,{children:e.jsxs("button",{className:"ui-dropdown-item group ",children:[e.jsx(b,{icon:"solar:copy-outline",height:18}),"Duplicate",e.jsx("kbd",{className:"ms-auto hidden text-xs text-bodytext group-data-[focus]:inline",children:"⌘ D"})]})}),e.jsx(i,{children:e.jsxs("button",{className:"ui-dropdown-item group ",children:[e.jsx(b,{icon:"solar:archive-check-broken",height:18}),"Archive",e.jsx("kbd",{className:"ms-auto hidden text-xs text-bodytext group-data-[focus]:inline",children:"⌘ A"})]})}),e.jsx(i,{children:e.jsxs("button",{className:"ui-dropdown-item group ",children:[e.jsx(b,{icon:"solar:trash-bin-minimalistic-2-outline",height:18}),"Delete",e.jsx("kbd",{className:"ms-auto hidden text-xs text-bodytext group-data-[focus]:inline",children:"⌘ D"})]})})]})]})]})}),vt=()=>e.jsx("div",{children:e.jsx(B,{children:`


import CardBox from "../shared/CardBox";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Icon } from "@iconify/react";
        
const ButtonDropdown = () => {
  function showSettingsDialog() {
    alert("Open settings dialog!");
  }
  function showSupportDialog() {
    alert("Open Support dialog!");
  }
  function showLogoutDialog() {
    alert("Open Logout dialog!");
  }
  return (
    <div>
      <CardBox>
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-lg font-semibold">Button Action</h4>
        </div>
        <Menu>
          <MenuButton className="ui-button bg-success gap-2">
            My Action <Icon icon="solar:alt-arrow-down-outline" height={18} />
          </MenuButton>
          <MenuItems transition anchor="bottom" className="ui-dropdown ui-dropdown-animation">
            <MenuItem>
              <button onClick={showSettingsDialog} className="ui-dropdown-item">
                Settings
              </button>
            </MenuItem>
            <MenuItem>
              <button onClick={showSupportDialog} className="ui-dropdown-item">
                Support
              </button>
            </MenuItem>
            <MenuItem>
              <button onClick={showLogoutDialog} className="ui-dropdown-item">
                Logout
              </button>
            </MenuItem>
          </MenuItems>
        </Menu>
      </CardBox>
    </div>
  );
};  
                    `})}),Nt=()=>{function t(){alert("Open settings dialog!")}function s(){alert("Open Support dialog!")}function r(){alert("Open Logout dialog!")}return e.jsx("div",{children:e.jsxs(S,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Button Action"}),e.jsx(vt,{})]}),e.jsxs(D,{children:[e.jsxs(N,{className:"ui-button bg-success gap-2",children:["My Action ",e.jsx(b,{icon:"solar:alt-arrow-down-outline",height:18})]}),e.jsxs(y,{transition:!0,anchor:"bottom",className:"ui-dropdown ui-dropdown-animation",children:[e.jsx(i,{children:e.jsx("button",{onClick:t,className:"ui-dropdown-item",children:"Settings"})}),e.jsx(i,{children:e.jsx("button",{onClick:s,className:"ui-dropdown-item",children:"Support"})}),e.jsx(i,{children:e.jsx("button",{onClick:r,className:"ui-dropdown-item",children:"Logout"})})]})]})]})})},yt=({href:t,onClick:s,children:r})=>e.jsx("a",{className:"ui-dropdown-item",href:t,onClick:s,children:r}),St=()=>e.jsx("div",{children:e.jsxs(S,{children:[e.jsx("div",{className:"flex items-center justify-between mb-2",children:e.jsx("h4",{className:"text-lg font-semibold",children:"Closing Manually"})}),e.jsxs(D,{children:[e.jsxs(N,{className:"ui-button  bg-primary gap-2",children:["Terms ",e.jsx(b,{icon:"solar:alt-arrow-down-outline",height:18})]}),e.jsx(y,{anchor:"bottom",className:"ui-dropdown",children:e.jsx(i,{children:({close:t})=>e.jsx(yt,{href:"/",onClick:t,children:"Read and accept"})})})]})]})}),Dt=()=>e.jsx("div",{children:e.jsx(B,{children:`


import CardBox from "../shared/CardBox";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Icon } from "@iconify/react";
        
<Menu>
    <MenuButton className="ui-button bg-error gap-2">
    My Profile <Icon icon="solar:alt-arrow-down-outline" height={18} />
    </MenuButton>
    <MenuItems transition anchor="bottom" className="ui-dropdown ui-dropdown-animation">
    <MenuItem>
        <a className="ui-dropdown-item" href="/settings">
        Settings
        </a>
    </MenuItem>
    <MenuItem>
        <a className="ui-dropdown-item" href="/support">
        Support
        </a>
    </MenuItem>
    <MenuItem disabled>
        <a className="ui-dropdown-item data-[disabled]:opacity-50" href="/license">
        License
        </a>
    </MenuItem>
    <MenuItem disabled>
        <a className="ui-dropdown-item data-[disabled]:opacity-50" href="/logout">
        Logout
        </a>
    </MenuItem>
    </MenuItems>
</Menu>
                    `})}),Et=()=>e.jsx("div",{children:e.jsxs(S,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Disable Items"}),e.jsx(Dt,{})]}),e.jsxs(D,{children:[e.jsxs(N,{className:"ui-button bg-error gap-2",children:["My Profile ",e.jsx(b,{icon:"solar:alt-arrow-down-outline",height:18})]}),e.jsxs(y,{transition:!0,anchor:"bottom",className:"ui-dropdown ui-dropdown-animation",children:[e.jsx(i,{children:e.jsx("a",{className:"ui-dropdown-item",href:"/settings",children:"Settings"})}),e.jsx(i,{children:e.jsx("a",{className:"ui-dropdown-item",href:"/support",children:"Support"})}),e.jsx(i,{disabled:!0,children:e.jsx("a",{className:"ui-dropdown-item data-[disabled]:opacity-50",href:"/license",children:"License"})}),e.jsx(i,{disabled:!0,children:e.jsx("a",{className:"ui-dropdown-item data-[disabled]:opacity-50",href:"/logout",children:"Logout"})})]})]})]})}),Ct=()=>e.jsx("div",{children:e.jsx(B,{children:`


import CardBox from "../shared/CardBox";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Icon } from "@iconify/react";
        
<Menu>
    <MenuButton className="ui-button bg-secondary gap-2">
    My Account <Icon icon="solar:alt-arrow-down-outline" height={18} />
    </MenuButton>
    <MenuItems
    transition
    anchor="top start"
    className="ui-dropdown ui-dropdown-animation"
    >
    <MenuItem>
        <a className="ui-dropdown-item" href="/settings">
        Settings
        </a>
    </MenuItem>
    <MenuItem>
        <a className="ui-dropdown-item" href="/support">
        Support
        </a>
    </MenuItem>
    <MenuItem>
        <a className="ui-dropdown-item" href="/license">
        License
        </a>
    </MenuItem>
    </MenuItems>
</Menu>  
                    `})}),Bt=()=>e.jsx("div",{children:e.jsxs(S,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Position"}),e.jsx(Ct,{})]}),e.jsxs(D,{children:[e.jsxs(N,{className:"ui-button bg-secondary gap-2",children:["My Account ",e.jsx(b,{icon:"solar:alt-arrow-down-outline",height:18})]}),e.jsxs(y,{transition:!0,anchor:"top start",className:"ui-dropdown ui-dropdown-animation",children:[e.jsx(i,{children:e.jsx("a",{className:"ui-dropdown-item",href:"/settings",children:"Settings"})}),e.jsx(i,{children:e.jsx("a",{className:"ui-dropdown-item",href:"/support",children:"Support"})}),e.jsx(i,{children:e.jsx("a",{className:"ui-dropdown-item",href:"/license",children:"License"})})]})]})]})}),kt=()=>e.jsx("div",{children:e.jsx(B,{children:`


import CardBox from "../shared/CardBox";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Icon } from "@iconify/react";
        
<Menu>
    <MenuButton className="ui-button  bg-secondary gap-2">
    My Account <Icon icon="solar:alt-arrow-down-outline" height={18} />
    </MenuButton>
    <MenuItems transition anchor="bottom" className="ui-dropdown ui-dropdown-animation !w-80 !max-w-80">
    <MenuItem>
        <a className="ui-dropdown-item" href="/settings">
        Settings
        </a>
    </MenuItem>
    <MenuItem>
        <a className="ui-dropdown-item" href="/support">
        Support
        </a>
    </MenuItem>
    <MenuItem>
        <a className="ui-dropdown-item" href="/license">
        License
        </a>
    </MenuItem>
    </MenuItems>
</Menu> 
                    `})}),Pt=()=>e.jsx("div",{children:e.jsxs(S,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Dropdown Width"}),e.jsx(kt,{})]}),e.jsxs(D,{children:[e.jsxs(N,{className:"ui-button  bg-primary gap-2",children:["My Account ",e.jsx(b,{icon:"solar:alt-arrow-down-outline",height:18})]}),e.jsxs(y,{transition:!0,anchor:"bottom",className:"ui-dropdown ui-dropdown-animation !w-80 !max-w-80",children:[e.jsx(i,{children:e.jsx("a",{className:"ui-dropdown-item",href:"/settings",children:"Settings"})}),e.jsx(i,{children:e.jsx("a",{className:"ui-dropdown-item",href:"/support",children:"Support"})}),e.jsx(i,{children:e.jsx("a",{className:"ui-dropdown-item",href:"/license",children:"License"})})]})]})]})}),Rt=()=>e.jsx("div",{children:e.jsxs(S,{children:[e.jsx("div",{className:"flex items-center justify-between mb-2",children:e.jsx("h4",{className:"text-lg font-semibold",children:"Framer Motion"})}),e.jsx(D,{children:({open:t})=>e.jsxs(e.Fragment,{children:[e.jsxs(N,{className:"ui-button  bg-error gap-2",children:["My Account ",e.jsx(b,{icon:"solar:alt-arrow-down-outline",height:18})]}),e.jsx(Xe,{children:t&&e.jsxs(y,{static:!0,as:Ye.div,initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.95},anchor:"bottom",className:"origin-top ui-dropdown ",children:[e.jsx(i,{children:e.jsx("a",{className:"ui-dropdown-item",href:"/settings",children:"Settings"})}),e.jsx(i,{children:e.jsx("a",{className:"ui-dropdown-item",href:"/support",children:"Support"})}),e.jsx(i,{children:e.jsx("a",{className:"ui-dropdown-item",href:"/license",children:"License"})})]})})]})})]})}),$t=()=>e.jsx("div",{children:e.jsx(B,{children:`


import CardBox from "../shared/CardBox";
import {  
  Menu,
  MenuButton,
  MenuItems,
  MenuSection,
  MenuHeading,
  MenuItem,
  MenuSeparator, } from "@headlessui/react";
import { Icon } from "@iconify/react";
        
<Menu>
    <MenuButton className="ui-button bg-primary gap-2">
    My Groups
    <Icon icon="solar:alt-arrow-down-outline" height={18} />
    </MenuButton>
    <MenuItems transition anchor="bottom" className="ui-dropdown ui-dropdown-animation">
    <MenuSection>
        <MenuHeading className="text-ld text-sm font-semibold px-4 py-1">
        Settings
        </MenuHeading>
        <MenuItem>
        <a className="ui-dropdown-item" href="/profile">
            My profile
        </a>
        </MenuItem>
        <MenuItem>
        <a className="ui-dropdown-item" href="/notifications">
            Notifications
        </a>
        </MenuItem>
    </MenuSection>
    <MenuSeparator className="my-1 h-px bg-border dark:bg-darkborder" />
    <MenuSection>
        <MenuHeading className="text-ld text-sm font-semibold px-4 py-1">
        Support
        </MenuHeading>
        <MenuItem>
        <a className="ui-dropdown-item" href="/support">
            Documentation
        </a>
        </MenuItem>
        <MenuItem>
        <a className="ui-dropdown-item" href="/license">
            License
        </a>
        </MenuItem>
    </MenuSection>
    </MenuItems>
</Menu>
                    `})}),At=()=>e.jsx("div",{children:e.jsxs(S,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Grouping Items"}),e.jsx($t,{})]}),e.jsxs(D,{children:[e.jsxs(N,{className:"ui-button bg-info gap-2",children:["My Groups",e.jsx(b,{icon:"solar:alt-arrow-down-outline",height:18})]}),e.jsxs(y,{transition:!0,anchor:"bottom",className:"ui-dropdown ui-dropdown-animation",children:[e.jsxs(Y,{children:[e.jsx(Z,{className:"text-ld text-sm font-semibold px-4 py-1",children:"Settings"}),e.jsx(i,{children:e.jsx("a",{className:"ui-dropdown-item",href:"/profile",children:"My profile"})}),e.jsx(i,{children:e.jsx("a",{className:"ui-dropdown-item",href:"/notifications",children:"Notifications"})})]}),e.jsx(te,{className:"my-1 h-px bg-border dark:bg-darkborder"}),e.jsxs(Y,{children:[e.jsx(Z,{className:"text-ld text-sm font-semibold px-4 py-1",children:"Support"}),e.jsx(i,{children:e.jsx("a",{className:"ui-dropdown-item",href:"/support",children:"Documentation"})}),e.jsx(i,{children:e.jsx("a",{className:"ui-dropdown-item",href:"/license",children:"License"})})]})]})]})]})}),Lt=()=>e.jsx("div",{children:e.jsx(B,{children:`


import CardBox from "../shared/CardBox";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Icon } from "@iconify/react";
        
<Menu>
    <MenuButton className="ui-button bg-secondary gap-2">
    My Account <Icon icon="solar:alt-arrow-down-outline" height={18} />
    </MenuButton>
    <MenuItems transition anchor="bottom" className="ui-dropdown ui-dropdown-animation">
    <MenuItem >
        <a className="ui-dropdown-item" href="/settings">
        Settings
        </a>
    </MenuItem>
    <MenuItem>
        <a className="ui-dropdown-item" href="/support">
        Support
        </a>
    </MenuItem>
    <MenuItem>
        <a className="ui-dropdown-item" href="/license">
        License
        </a>
    </MenuItem>
    </MenuItems>
</Menu>  
                    `})}),Ft=()=>e.jsx("div",{children:e.jsxs(S,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Links Dropdown"}),e.jsx(Lt,{})]}),e.jsxs(D,{children:[e.jsxs(N,{className:"ui-button bg-secondary gap-2",children:["My Account ",e.jsx(b,{icon:"solar:alt-arrow-down-outline",height:18})]}),e.jsxs(y,{transition:!0,anchor:"bottom",className:"ui-dropdown ui-dropdown-animation",children:[e.jsx(i,{children:e.jsx("a",{className:"ui-dropdown-item",href:"/settings",children:"Settings"})}),e.jsx(i,{children:e.jsx("a",{className:"ui-dropdown-item",href:"/support",children:"Support"})}),e.jsx(i,{children:e.jsx("a",{className:"ui-dropdown-item",href:"/license",children:"License"})})]})]})]})});let Tt=f.forwardRef(function(t,s){return e.jsx("button",{className:"...",ref:s,...t})});const Ot=()=>e.jsx("div",{children:e.jsxs(S,{children:[e.jsx("div",{className:"flex items-center justify-between mb-2",children:e.jsx("h4",{className:"text-lg font-semibold",children:"Rendering Elements"})}),e.jsxs(D,{children:[e.jsxs(N,{as:Tt,className:"ui-button  bg-secondary gap-2",children:["My account ",e.jsx(b,{icon:"solar:alt-arrow-down-outline",height:18})]}),e.jsxs(y,{anchor:"bottom",as:"section",className:"ui-dropdown ui-dropdown-animation",children:[e.jsx(i,{as:"a",className:"ui-dropdown-item",href:"/settings",children:"Settings"}),e.jsx(i,{as:"a",className:"ui-dropdown-item",href:"/support",children:"Support"}),e.jsx(i,{as:"a",className:"ui-dropdown-item",href:"/license",children:"License"})]})]})]})}),_t=()=>e.jsx("div",{children:e.jsx(B,{children:`


import CardBox from "../shared/CardBox";
import { Menu, MenuButton, MenuItem, MenuItems,MenuSeparator } from "@headlessui/react";
import { Icon } from "@iconify/react";
        
<Menu>
    <MenuButton className="ui-button bg-warning gap-2">
    My Account <Icon icon="solar:alt-arrow-down-outline" height={18} />
    </MenuButton>
    <MenuItems transition anchor="bottom" className="ui-dropdown ui-dropdown-animation">
    <MenuItem>
        <a className="ui-dropdown-item" href="/settings">
        Settings
        </a>
    </MenuItem>
    <MenuSeparator className="my-1 h-px bg-border dark:bg-darkborder" />
    <MenuItem>
        <a className="ui-dropdown-item" href="/support">
        Support
        </a>
    </MenuItem>
    <MenuItem>
        <a className="ui-dropdown-item" href="/license">
        License
        </a>
    </MenuItem>
    </MenuItems>
</Menu>
                    `})}),Kt=()=>e.jsx("div",{children:e.jsxs(S,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Separating Items"}),e.jsx(_t,{})]}),e.jsxs(D,{children:[e.jsxs(N,{className:"ui-button bg-warning gap-2",children:["My Account ",e.jsx(b,{icon:"solar:alt-arrow-down-outline",height:18})]}),e.jsxs(y,{transition:!0,anchor:"bottom",className:"ui-dropdown ui-dropdown-animation",children:[e.jsx(i,{children:e.jsx("a",{className:"ui-dropdown-item",href:"/settings",children:"Settings"})}),e.jsx(te,{className:"my-1 h-px bg-border dark:bg-darkborder"}),e.jsx(i,{children:e.jsx("a",{className:"ui-dropdown-item",href:"/support",children:"Support"})}),e.jsx(i,{children:e.jsx("a",{className:"ui-dropdown-item",href:"/license",children:"License"})})]})]})]})}),Gt=()=>e.jsx("div",{children:e.jsxs(S,{children:[e.jsx("div",{className:"flex items-center justify-between mb-2",children:e.jsx("h4",{className:"text-lg font-semibold",children:"Transitions"})}),e.jsxs(D,{children:[e.jsxs(N,{className:"ui-button  bg-success gap-2",children:["My Account ",e.jsx(b,{icon:"solar:alt-arrow-down-outline",height:18})]}),e.jsxs(y,{transition:!0,anchor:"bottom",className:"ui-dropdown origin-top transition duration-500 ease-out data-[closed]:scale-95 data-[closed]:opacity-0",children:[e.jsx(i,{children:e.jsx("a",{className:"ui-dropdown-item",href:"/settings",children:"Settings"})}),e.jsx(i,{children:e.jsx("a",{className:"ui-dropdown-item",href:"/support",children:"Support"})}),e.jsx(i,{children:e.jsx("a",{className:"ui-dropdown-item",href:"/license",children:"License"})})]})]})]})}),Ht=[{to:"/",title:"Home"},{title:"Dropdown"}],Mn=()=>e.jsxs(e.Fragment,{children:[e.jsx(Ze,{title:"Dropdown",items:Ht}),e.jsxs("div",{className:"grid grid-cols-12 gap-30",children:[e.jsx("div",{className:"lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12",children:e.jsx(It,{})}),e.jsx("div",{className:"lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12",children:e.jsx(Ft,{})}),e.jsx("div",{className:"lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12",children:e.jsx(Nt,{})}),e.jsx("div",{className:"lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12",children:e.jsx(Et,{})}),e.jsx("div",{className:"lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12",children:e.jsx(Kt,{})}),e.jsx("div",{className:"lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12",children:e.jsx(At,{})}),e.jsx("div",{className:"lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12",children:e.jsx(Bt,{})}),e.jsx("div",{className:"lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12",children:e.jsx(Pt,{})}),e.jsx("div",{className:"lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12",children:e.jsx(Gt,{})}),e.jsx("div",{className:"lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12",children:e.jsx(Rt,{})}),e.jsx("div",{className:"lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12",children:e.jsx(St,{})}),e.jsx("div",{className:"lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12",children:e.jsx(Ot,{})})]})]});export{Mn as default};
