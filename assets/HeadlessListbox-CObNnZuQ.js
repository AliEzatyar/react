import{r as a,a as F,aC as U,j as e,I as k}from"./index-P2HWq5AB.js";import{C as B}from"./CardBox-iBHS77gx.js";import{C as J}from"./CodeModal-ZdVmlQAl.js";import{$ as Ue,a as Ve}from"./useFocusRing-Di4h4CvJ.js";import{w as ze}from"./use-active-press-C4eQ0n2y.js";import{u as Ge}from"./use-by-comparator-BGy9MiJd.js";import{l as qe,T as Je}from"./use-default-value-877t43tv.js";import{s as Xe,a as Ze}from"./use-text-value-6sezWMq3.js";import{O as ye,K as X,u as G,n as je,o as v,p as Be,L as Z,_ as Ce,s as Ye,b as et}from"./render-BKlKWd6j.js";import{M as tt,y as st,F as nt,x as ot,R as it,b as at,d as lt}from"./floating-BhKuzvxx.js";import{y as rt}from"./use-inert-others-B7wCIoFb.js";import{R as ct,n as dt,m as ut,f as mt,r as pt}from"./portal-Cyz56xWt.js";import{e as xt}from"./use-resolve-button-type-CWZZrYkE.js";import{y as Y}from"./use-sync-refs-CHG90QLp.js";import{u as bt,c as S,f as he}from"./calculate-active-index-DY51T5z2.js";import{c as ht,i as oe,u as ft,x as vt,R as jt}from"./open-closed-Br83XxfI.js";import{a as gt}from"./disabled-CgoTiXBv.js";import{j as wt,p as yt,H as ee}from"./field-BPMTWBig.js";import{l as Lt}from"./frozen-Ci_TEGHj.js";import{Q as ie,K as St,u as Nt,I as Ot}from"./label-CN3rczfl.js";import{r as Rt}from"./bugs-DpEN4NTH.js";import{A as Pt,h as Tt,j as $t,F as Le,_ as Et}from"./focus-management-CRpniyYN.js";import{u as It}from"./owner-CBjDaIWd.js";import{U as Dt,H as ge}from"./description-CBNApkT-.js";import{o as R}from"./keyboard-C1Wiwm26.js";import{A as Kt,m as Bt}from"./index-DTgOLtjS.js";import{B as Ct}from"./BreadcrumbComp-BnVnHUMk.js";import"./toConsumableArray-B7RXd_Ox.js";import"./extends-CF3RwP-h.js";import"./core-DD6kpHa4.js";import"./floating-ui.react-C67KESGd.js";import"./use-server-handoff-complete-CjS_LuND.js";import"./hidden-BgX8pakw.js";var Mt=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(Mt||{}),Ft=(t=>(t[t.Single=0]="Single",t[t.Multi=1]="Multi",t))(Ft||{}),kt=(t=>(t[t.Pointer=0]="Pointer",t[t.Other=1]="Other",t))(kt||{}),Wt=(t=>(t[t.OpenListbox=0]="OpenListbox",t[t.CloseListbox=1]="CloseListbox",t[t.GoToOption=2]="GoToOption",t[t.Search=3]="Search",t[t.ClearSearch=4]="ClearSearch",t[t.RegisterOption=5]="RegisterOption",t[t.UnregisterOption=6]="UnregisterOption",t[t.SetButtonElement=7]="SetButtonElement",t[t.SetOptionsElement=8]="SetOptionsElement",t))(Wt||{});function fe(t,n=s=>s){let s=t.activeOptionIndex!==null?t.options[t.activeOptionIndex]:null,o=Et(n(t.options.slice()),f=>f.dataRef.current.domRef.current),l=s?o.indexOf(s):null;return l===-1&&(l=null),{options:o,activeOptionIndex:l}}let At={1(t){return t.dataRef.current.disabled||t.listboxState===1?t:{...t,activeOptionIndex:null,listboxState:1,__demoMode:!1}},0(t){if(t.dataRef.current.disabled||t.listboxState===0)return t;let n=t.activeOptionIndex,{isSelected:s}=t.dataRef.current,o=t.options.findIndex(l=>s(l.dataRef.current.value));return o!==-1&&(n=o),{...t,listboxState:0,activeOptionIndex:n,__demoMode:!1}},2(t,n){var s,o,l,f,g;if(t.dataRef.current.disabled||t.listboxState===1)return t;let p={...t,searchQuery:"",activationTrigger:(s=n.trigger)!=null?s:1,__demoMode:!1};if(n.focus===S.Nothing)return{...p,activeOptionIndex:null};if(n.focus===S.Specific)return{...p,activeOptionIndex:t.options.findIndex(u=>u.id===n.id)};if(n.focus===S.Previous){let u=t.activeOptionIndex;if(u!==null){let m=t.options[u].dataRef.current.domRef,w=he(n,{resolveItems:()=>t.options,resolveActiveIndex:()=>t.activeOptionIndex,resolveId:b=>b.id,resolveDisabled:b=>b.dataRef.current.disabled});if(w!==null){let b=t.options[w].dataRef.current.domRef;if(((o=m.current)==null?void 0:o.previousElementSibling)===b.current||((l=b.current)==null?void 0:l.previousElementSibling)===null)return{...p,activeOptionIndex:w}}}}else if(n.focus===S.Next){let u=t.activeOptionIndex;if(u!==null){let m=t.options[u].dataRef.current.domRef,w=he(n,{resolveItems:()=>t.options,resolveActiveIndex:()=>t.activeOptionIndex,resolveId:b=>b.id,resolveDisabled:b=>b.dataRef.current.disabled});if(w!==null){let b=t.options[w].dataRef.current.domRef;if(((f=m.current)==null?void 0:f.nextElementSibling)===b.current||((g=b.current)==null?void 0:g.nextElementSibling)===null)return{...p,activeOptionIndex:w}}}}let d=fe(t),j=he(n,{resolveItems:()=>d.options,resolveActiveIndex:()=>d.activeOptionIndex,resolveId:u=>u.id,resolveDisabled:u=>u.dataRef.current.disabled});return{...p,...d,activeOptionIndex:j}},3:(t,n)=>{if(t.dataRef.current.disabled||t.listboxState===1)return t;let s=t.searchQuery!==""?0:1,o=t.searchQuery+n.value.toLowerCase(),l=(t.activeOptionIndex!==null?t.options.slice(t.activeOptionIndex+s).concat(t.options.slice(0,t.activeOptionIndex+s)):t.options).find(g=>{var p;return!g.dataRef.current.disabled&&((p=g.dataRef.current.textValue)==null?void 0:p.startsWith(o))}),f=l?t.options.indexOf(l):-1;return f===-1||f===t.activeOptionIndex?{...t,searchQuery:o}:{...t,searchQuery:o,activeOptionIndex:f,activationTrigger:1}},4(t){return t.dataRef.current.disabled||t.listboxState===1||t.searchQuery===""?t:{...t,searchQuery:""}},5:(t,n)=>{let s={id:n.id,dataRef:n.dataRef},o=fe(t,l=>[...l,s]);return t.activeOptionIndex===null&&t.dataRef.current.isSelected(n.dataRef.current.value)&&(o.activeOptionIndex=o.options.indexOf(s)),{...t,...o}},6:(t,n)=>{let s=fe(t,o=>{let l=o.findIndex(f=>f.id===n.id);return l!==-1&&o.splice(l,1),o});return{...t,...s,activationTrigger:1}},7:(t,n)=>t.buttonElement===n.element?t:{...t,buttonElement:n.element},8:(t,n)=>t.optionsElement===n.element?t:{...t,optionsElement:n.element}},we=a.createContext(null);we.displayName="ListboxActionsContext";function ae(t){let n=a.useContext(we);if(n===null){let s=new Error(`<${t} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(s,ae),s}return n}let le=a.createContext(null);le.displayName="ListboxDataContext";function te(t){let n=a.useContext(le);if(n===null){let s=new Error(`<${t} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(s,te),s}return n}function _t(t,n){return G(n.type,At,t,n)}let Ht=a.Fragment;function Qt(t,n){var s;let o=gt(),{value:l,defaultValue:f,form:g,name:p,onChange:d,by:j,invalid:u=!1,disabled:m=o||!1,horizontal:w=!1,multiple:b=!1,__demoMode:i=!1,...y}=t;const Q=w?"horizontal":"vertical";let A=Y(n),P=qe(f),[N=b?[]:void 0,T]=Je(l,d,P),[M,L]=a.useReducer(_t,{dataRef:a.createRef(),listboxState:i?0:1,options:[],searchQuery:"",activeOptionIndex:null,activationTrigger:1,optionsVisible:!1,buttonElement:null,optionsElement:null,__demoMode:i}),_=a.useRef({static:!1,hold:!1}),H=a.useRef(new Map),h=Ge(j),K=a.useCallback(x=>G(r.mode,{1:()=>N.some(O=>h(O,x)),0:()=>h(N,x)}),[N]),r=a.useMemo(()=>({...M,value:N,disabled:m,invalid:u,mode:b?1:0,orientation:Q,compare:h,isSelected:K,optionsPropsRef:_,listRef:H}),[N,m,u,b,M,H]);je(()=>{M.dataRef.current=r},[r]);let V=r.listboxState===0;ct(V,[r.buttonElement,r.optionsElement],(x,O)=>{var W;L({type:1}),Pt(O,Tt.Loose)||(x.preventDefault(),(W=r.buttonElement)==null||W.focus())});let re=a.useMemo(()=>({open:r.listboxState===0,disabled:m,invalid:u,value:N}),[r,m,N,u]),ce=v(x=>{let O=r.options.find(W=>W.id===x);O&&q(O.dataRef.current.value)}),de=v(()=>{if(r.activeOptionIndex!==null){let{dataRef:x,id:O}=r.options[r.activeOptionIndex];q(x.current.value),L({type:2,focus:S.Specific,id:O})}}),ue=v(()=>L({type:0})),se=v(()=>L({type:1})),ne=Be(),me=v((x,O,W)=>{ne.dispose(),ne.microTask(()=>x===S.Specific?L({type:2,focus:S.Specific,id:O,trigger:W}):L({type:2,focus:x,trigger:W}))}),pe=v((x,O)=>(L({type:5,id:x,dataRef:O}),()=>L({type:6,id:x}))),q=v(x=>G(r.mode,{0(){return T==null?void 0:T(x)},1(){let O=r.value.slice(),W=O.findIndex(Qe=>h(Qe,x));return W===-1?O.push(x):O.splice(W,1),T==null?void 0:T(O)}})),xe=v(x=>L({type:3,value:x})),c=v(()=>L({type:4})),$=v(x=>{L({type:7,element:x})}),z=v(x=>{L({type:8,element:x})}),be=a.useMemo(()=>({onChange:q,registerOption:pe,goToOption:me,closeListbox:se,openListbox:ue,selectActiveOption:de,selectOption:ce,search:xe,clearSearch:c,setButtonElement:$,setOptionsElement:z}),[]),[ke,We]=St({inherit:!0}),Ae={ref:A},_e=a.useCallback(()=>{if(P!==void 0)return T==null?void 0:T(P)},[T,P]),He=Z();return F.createElement(We,{value:ke,props:{htmlFor:(s=r.buttonElement)==null?void 0:s.id},slot:{open:r.listboxState===0,disabled:m}},F.createElement(tt,null,F.createElement(we.Provider,{value:be},F.createElement(le.Provider,{value:r},F.createElement(ht,{value:G(r.listboxState,{0:oe.Open,1:oe.Closed})},p!=null&&N!=null&&F.createElement(wt,{disabled:m,data:{[p]:N},form:g,onReset:_e}),He({ourProps:Ae,theirProps:y,slot:re,defaultTag:Ht,name:"Listbox"}))))))}let Ut="button";function Vt(t,n){var s;let o=te("Listbox.Button"),l=ae("Listbox.Button"),f=a.useId(),g=Nt(),{id:p=g||`headlessui-listbox-button-${f}`,disabled:d=o.disabled||!1,autoFocus:j=!1,...u}=t,m=Y(n,st(),l.setButtonElement),w=nt(),b=v(r=>{switch(r.key){case R.Enter:yt(r.currentTarget);break;case R.Space:case R.ArrowDown:r.preventDefault(),U.flushSync(()=>l.openListbox()),o.value||l.goToOption(S.First);break;case R.ArrowUp:r.preventDefault(),U.flushSync(()=>l.openListbox()),o.value||l.goToOption(S.Last);break}}),i=v(r=>{switch(r.key){case R.Space:r.preventDefault();break}}),y=v(r=>{var V;if(Rt(r.currentTarget))return r.preventDefault();o.listboxState===0?(U.flushSync(()=>l.closeListbox()),(V=o.buttonElement)==null||V.focus({preventScroll:!0})):(r.preventDefault(),l.openListbox())}),Q=v(r=>r.preventDefault()),A=Ot([p]),P=Dt(),{isFocusVisible:N,focusProps:T}=Ue({autoFocus:j}),{isHovered:M,hoverProps:L}=Ve({isDisabled:d}),{pressed:_,pressProps:H}=ze({disabled:d}),h=a.useMemo(()=>({open:o.listboxState===0,active:_||o.listboxState===0,disabled:d,invalid:o.invalid,value:o.value,hover:M,focus:N,autofocus:j}),[o.listboxState,o.value,d,M,N,_,o.invalid,j]),K=Ce(w(),{ref:m,id:p,type:xt(t,o.buttonElement),"aria-haspopup":"listbox","aria-controls":(s=o.optionsElement)==null?void 0:s.id,"aria-expanded":o.listboxState===0,"aria-labelledby":A,"aria-describedby":P,disabled:d||void 0,autoFocus:j,onKeyDown:b,onKeyUp:i,onKeyPress:Q,onClick:y},T,L,H);return Z()({ourProps:K,theirProps:u,slot:h,defaultTag:Ut,name:"Listbox.Button"})}let Me=a.createContext(!1),zt="div",Gt=ye.RenderStrategy|ye.Static;function qt(t,n){var s,o;let l=a.useId(),{id:f=`headlessui-listbox-options-${l}`,anchor:g,portal:p=!1,modal:d=!0,transition:j=!1,...u}=t,m=ot(g),[w,b]=a.useState(null);m&&(p=!0);let i=te("Listbox.Options"),y=ae("Listbox.Options"),Q=dt(i.optionsElement),A=ft(),[P,N]=vt(j,w,A!==null?(A&oe.Open)===oe.Open:i.listboxState===0);ut(P,i.buttonElement,y.closeListbox);let T=i.__demoMode?!1:d&&i.listboxState===0;mt(T,Q);let M=i.__demoMode?!1:d&&i.listboxState===0;rt(M,{allowed:a.useCallback(()=>[i.buttonElement,i.optionsElement],[i.buttonElement,i.optionsElement])});let L=i.listboxState!==0,_=Xe(L,i.buttonElement)?!1:P,H=P&&i.listboxState===1,h=Lt(H,i.value),K=v(c=>i.compare(h,c)),r=a.useMemo(()=>{var c;if(m==null||!((c=m==null?void 0:m.to)!=null&&c.includes("selection")))return null;let $=i.options.findIndex(z=>K(z.dataRef.current.value));return $===-1&&($=0),$},[m,i.options]),V=(()=>{if(m==null)return;if(r===null)return{...m,inner:void 0};let c=Array.from(i.listRef.current.values());return{...m,inner:{listRef:{current:c},index:r}}})(),[re,ce]=it(V),de=at(),ue=Y(n,m?re:null,y.setOptionsElement,b),se=Be();a.useEffect(()=>{var c;let $=i.optionsElement;$&&i.listboxState===0&&$!==((c=It($))==null?void 0:c.activeElement)&&($==null||$.focus({preventScroll:!0}))},[i.listboxState,i.optionsElement]);let ne=v(c=>{var $,z;switch(se.dispose(),c.key){case R.Space:if(i.searchQuery!=="")return c.preventDefault(),c.stopPropagation(),y.search(c.key);case R.Enter:if(c.preventDefault(),c.stopPropagation(),i.activeOptionIndex!==null){let{dataRef:be}=i.options[i.activeOptionIndex];y.onChange(be.current.value)}i.mode===0&&(U.flushSync(()=>y.closeListbox()),($=i.buttonElement)==null||$.focus({preventScroll:!0}));break;case G(i.orientation,{vertical:R.ArrowDown,horizontal:R.ArrowRight}):return c.preventDefault(),c.stopPropagation(),y.goToOption(S.Next);case G(i.orientation,{vertical:R.ArrowUp,horizontal:R.ArrowLeft}):return c.preventDefault(),c.stopPropagation(),y.goToOption(S.Previous);case R.Home:case R.PageUp:return c.preventDefault(),c.stopPropagation(),y.goToOption(S.First);case R.End:case R.PageDown:return c.preventDefault(),c.stopPropagation(),y.goToOption(S.Last);case R.Escape:c.preventDefault(),c.stopPropagation(),U.flushSync(()=>y.closeListbox()),(z=i.buttonElement)==null||z.focus({preventScroll:!0});return;case R.Tab:c.preventDefault(),c.stopPropagation(),U.flushSync(()=>y.closeListbox()),$t(i.buttonElement,c.shiftKey?Le.Previous:Le.Next);break;default:c.key.length===1&&(y.search(c.key),se.setTimeout(()=>y.clearSearch(),350));break}}),me=(s=i.buttonElement)==null?void 0:s.id,pe=a.useMemo(()=>({open:i.listboxState===0}),[i.listboxState]),q=Ce(m?de():{},{id:f,ref:ue,"aria-activedescendant":i.activeOptionIndex===null||(o=i.options[i.activeOptionIndex])==null?void 0:o.id,"aria-multiselectable":i.mode===1?!0:void 0,"aria-labelledby":me,"aria-orientation":i.orientation,onKeyDown:ne,role:"listbox",tabIndex:i.listboxState===0?0:void 0,style:{...u.style,...ce,"--button-width":lt(i.buttonElement,!0).width},...jt(N)}),xe=Z();return F.createElement(pt,{enabled:p?t.static||P:!1},F.createElement(le.Provider,{value:i.mode===1?i:{...i,isSelected:K}},xe({ourProps:q,theirProps:u,slot:pe,defaultTag:zt,features:Gt,visible:_,name:"Listbox.Options"})))}let Jt="div";function Xt(t,n){let s=a.useId(),{id:o=`headlessui-listbox-option-${s}`,disabled:l=!1,value:f,...g}=t,p=a.useContext(Me)===!0,d=te("Listbox.Option"),j=ae("Listbox.Option"),u=d.activeOptionIndex!==null?d.options[d.activeOptionIndex].id===o:!1,m=d.isSelected(f),w=a.useRef(null),b=Ze(w),i=Ye({disabled:l,value:f,domRef:w,get textValue(){return b()}}),y=Y(n,w,h=>{h?d.listRef.current.set(o,h):d.listRef.current.delete(o)});je(()=>{if(!d.__demoMode&&d.listboxState===0&&u&&d.activationTrigger!==0)return et().requestAnimationFrame(()=>{var h,K;(K=(h=w.current)==null?void 0:h.scrollIntoView)==null||K.call(h,{block:"nearest"})})},[w,u,d.__demoMode,d.listboxState,d.activationTrigger,d.activeOptionIndex]),je(()=>{if(!p)return j.registerOption(o,i)},[i,o,p]);let Q=v(h=>{var K;if(l)return h.preventDefault();j.onChange(f),d.mode===0&&(U.flushSync(()=>j.closeListbox()),(K=d.buttonElement)==null||K.focus({preventScroll:!0}))}),A=v(()=>{if(l)return j.goToOption(S.Nothing);j.goToOption(S.Specific,o)}),P=bt(),N=v(h=>{P.update(h),!l&&(u||j.goToOption(S.Specific,o,0))}),T=v(h=>{P.wasMoved(h)&&(l||u||j.goToOption(S.Specific,o,0))}),M=v(h=>{P.wasMoved(h)&&(l||u&&j.goToOption(S.Nothing))}),L=a.useMemo(()=>({active:u,focus:u,selected:m,disabled:l,selectedOption:m&&p}),[u,m,l,p]),_=p?{}:{id:o,ref:y,role:"option",tabIndex:l===!0?void 0:-1,"aria-disabled":l===!0?!0:void 0,"aria-selected":m,disabled:void 0,onClick:Q,onFocus:A,onPointerEnter:N,onMouseEnter:N,onPointerMove:T,onMouseMove:T,onPointerLeave:M,onMouseLeave:M},H=Z();return!m&&p?null:H({ourProps:_,theirProps:g,slot:L,defaultTag:Jt,name:"Listbox.Option"})}let Zt=a.Fragment;function Yt(t,n){let{options:s,placeholder:o,...l}=t,f={ref:Y(n)},g=te("ListboxSelectedOption"),p=a.useMemo(()=>({}),[]),d=g.value===void 0||g.value===null||g.mode===1&&Array.isArray(g.value)&&g.value.length===0,j=Z();return F.createElement(Me.Provider,{value:!0},j({ourProps:f,theirProps:{...l,children:F.createElement(F.Fragment,null,o&&d?o:s)},slot:p,defaultTag:Zt,name:"ListboxSelectedOption"}))}let es=X(Qt),E=X(Vt),ts=ie,I=X(qt),D=X(Xt),ss=X(Yt),C=Object.assign(es,{Button:E,Label:ts,Options:I,Option:D,SelectedOption:ss});const Fe=()=>e.jsx("div",{children:e.jsx(J,{children:`
    
    import {
    Listbox,
    ListboxButton,
    ListboxOption,
    ListboxOptions,
    } from "@headlessui/react";
    import { useState } from "react";
    import { Icon } from "@iconify/react";

    const people = [
    { id: 1, name: "Durward Reynolds" },
    { id: 2, name: "Kenton Towne" },
    { id: 3, name: "Therese Wunsch" },
    { id: 4, name: "Benedict Kessler" },
    { id: 5, name: "Katelyn Rohan" },
    ];    

    const [selectedPerson, setSelectedPerson] = useState(people[0]);

    <Listbox value={selectedPerson} onChange={setSelectedPerson}>
        <ListboxButton className="ui-button bg-primary justify-between items-center gap-3">{selectedPerson.name} <Icon icon="solar:alt-arrow-down-outline" height={18} /></ListboxButton>
        <ListboxOptions anchor="bottom" className="ui-dropdown">
        {people.map((person) => (
            <ListboxOption
            key={person.id}
            value={person}
            className="ui-dropdown-item"
            >
            {person.name}
            </ListboxOption>
        ))}
        </ListboxOptions>
    </Listbox>
        `})}),Se=[{id:1,name:"Durward Reynolds"},{id:2,name:"Kenton Towne"},{id:3,name:"Therese Wunsch"},{id:4,name:"Benedict Kessler"},{id:5,name:"Katelyn Rohan"}],ns=()=>{const[t,n]=a.useState(Se[0]);return e.jsx("div",{children:e.jsxs(B,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Basic Listbox"}),e.jsx(Fe,{})]}),e.jsxs(C,{value:t,onChange:n,children:[e.jsxs(E,{className:"ui-button bg-primary justify-between items-center gap-3",children:[t.name," ",e.jsx(k,{icon:"solar:alt-arrow-down-outline",height:18})]}),e.jsx(I,{anchor:"bottom",className:"ui-dropdown ",children:Se.map(s=>e.jsx(D,{value:s,className:"ui-dropdown-item",children:s.name},s.id))})]})]})})},os=()=>e.jsx("div",{children:e.jsx(J,{children:`
    
    import {
    Listbox,
    ListboxButton,
    ListboxOption,
    ListboxOptions,
    } from "@headlessui/react";
    import { useState } from "react";
    import { Icon } from "@iconify/react";

    const people = [
    { id: 1, name: "Durward Reynolds", available: true },
    { id: 2, name: "Kenton Towne", available: true },
    { id: 3, name: "Therese Wunsch", available: false },
    { id: 4, name: "Benedict Kessler", available: false },
    { id: 5, name: "Katelyn Rohan", available: true },
    ];  
    
    const [selectedPerson, setSelectedPerson] = useState(people[0]);

    <Field className="w-full">
          <Label className="text-sm mb-1 text-ld">Assignee:</Label>
          <Description className="text-xs mb-2">
            This person will have full access to this project.
          </Description>
          <Listbox value={selectedPerson} onChange={setSelectedPerson}>
            <ListboxButton className="ui-button bg-success  justify-between items-center gap-3 w-full">
              {selectedPerson.name}{" "}
              <Icon icon="solar:alt-arrow-down-outline" height={18} />
            </ListboxButton>
            <ListboxOptions anchor="bottom" className="ui-dropdown">
              {people.map((person) => (
                <ListboxOption
                  key={person.id}
                  value={person}
                  className="ui-dropdown-item data-[disabled]:opacity-50 data-[disabled]:hover:text-bodytext"
                  disabled={!person.available}
                >
                  {person.name}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </Listbox>
        </Field>
        `})}),Ne=[{id:1,name:"Durward Reynolds",available:!0},{id:2,name:"Kenton Towne",available:!0},{id:3,name:"Therese Wunsch",available:!1},{id:4,name:"Benedict Kessler",available:!1},{id:5,name:"Katelyn Rohan",available:!0}],is=()=>{const[t,n]=a.useState(Ne[0]);return e.jsx("div",{children:e.jsxs(B,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Disable Listbox Option"}),e.jsx(os,{})]}),e.jsxs(ee,{className:"w-full",children:[e.jsx(ie,{className:"text-sm mb-1 text-ld",children:"Assignee:"}),e.jsx(ge,{className:"text-xs mb-2",children:"This person will have full access to this project."}),e.jsxs(C,{value:t,onChange:n,children:[e.jsxs(E,{className:"ui-button bg-success  justify-between items-center gap-3 w-full",children:[t.name," ",e.jsx(k,{icon:"solar:alt-arrow-down-outline",height:18})]}),e.jsx(I,{anchor:"bottom",className:"ui-dropdown",children:Ne.map(s=>e.jsx(D,{value:s,className:"ui-dropdown-item data-[disabled]:opacity-50 data-[disabled]:hover:text-bodytext",disabled:!s.available,children:s.name},s.id))})]})]})]})})},Oe=[{id:1,name:"Durward Reynolds"},{id:2,name:"Kenton Towne"},{id:3,name:"Therese Wunsch"},{id:4,name:"Benedict Kessler"},{id:5,name:"Katelyn Rohan"}],as=()=>{const[t,n]=a.useState(Oe[0]);return e.jsx("div",{children:e.jsxs(B,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Disable Listbox"}),e.jsx(Fe,{})]}),e.jsx(ee,{className:"flex gap-3 items-center w-full",disabled:!0,children:e.jsxs(C,{value:t,onChange:n,children:[e.jsxs(E,{className:"ui-button bg-slate-500 justify-between items-center gap-3 w-full",children:[t.name," ",e.jsx(k,{icon:"solar:alt-arrow-down-outline",height:18})]}),e.jsx(I,{anchor:"bottom",className:"ui-dropdown",children:Oe.map(s=>e.jsx(D,{value:s,className:"ui-dropdown-item",children:s.name},s.id))})]})})]})})},Re=[{id:1,name:"Durward Reynolds"},{id:2,name:"Kenton Towne"},{id:3,name:"Therese Wunsch"},{id:4,name:"Benedict Kessler"},{id:5,name:"Katelyn Rohan"}],ls=()=>{const[t,n]=a.useState(Re[0]);return e.jsx("div",{children:e.jsxs(B,{children:[e.jsx("div",{className:"flex items-center justify-between mb-2",children:e.jsx("h4",{className:"text-lg font-semibold",children:"Horizontal Listbox"})}),e.jsxs(C,{value:t,onChange:n,children:[e.jsxs(E,{className:"ui-button bg-info justify-between items-center gap-3",children:[t.name," ",e.jsx(k,{icon:"solar:alt-arrow-down-outline",height:18})]}),e.jsx(I,{anchor:"bottom",className:"ui-dropdown w-80 !max-w-80 flex flex-row",children:Re.map(s=>e.jsx(D,{value:s,className:"ui-dropdown-item",children:s.name},s.id))})]})]})})},rs=()=>e.jsx("div",{children:e.jsx(J,{children:`
    
    import {
    Field,
    Label,
    Listbox,
    ListboxButton,
    ListboxOption,
    ListboxOptions,
    } from "@headlessui/react";
    import { useState } from "react";
    import { Icon } from "@iconify/react";

    const people = [
    { id: 1, name: "Durward Reynolds" },
    { id: 2, name: "Kenton Towne" },
    { id: 3, name: "Therese Wunsch" },
    { id: 4, name: "Benedict Kessler" },
    { id: 5, name: "Katelyn Rohan" },
    ];

    const [selectedPerson, setSelectedPerson] = useState(people[0]);

    <Field className="flex gap-3 items-center w-full">
          <Label className="block text-ld font-medium">Assignee:</Label>
          <Listbox value={selectedPerson} onChange={setSelectedPerson} >
            <ListboxButton className="ui-button bg-primary justify-between items-center gap-3 w-full">
              {selectedPerson.name}{" "}
              <Icon icon="solar:alt-arrow-down-outline" height={18} />
            </ListboxButton>
            <ListboxOptions anchor="bottom" className="ui-dropdown">
              {people.map((person) => (
                <ListboxOption
                  key={person.id}
                  value={person}
                  className="ui-dropdown-item"
                >
                  {person.name}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </Listbox>
        </Field>
    
        `})}),Pe=[{id:1,name:"Durward Reynolds"},{id:2,name:"Kenton Towne"},{id:3,name:"Therese Wunsch"},{id:4,name:"Benedict Kessler"},{id:5,name:"Katelyn Rohan"}],cs=()=>{const[t,n]=a.useState(Pe[0]);return e.jsx("div",{children:e.jsxs(B,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Label With Listbox"}),e.jsx(rs,{})]}),e.jsxs(ee,{className:"flex gap-3 items-center w-full",children:[e.jsx(ie,{className:"block text-ld font-medium",children:"Assignee:"}),e.jsxs(C,{value:t,onChange:n,children:[e.jsxs(E,{className:"ui-button bg-secondary justify-between items-center gap-3 w-full",children:[t.name," ",e.jsx(k,{icon:"solar:alt-arrow-down-outline",height:18})]}),e.jsx(I,{anchor:"bottom",className:"ui-dropdown",children:Pe.map(s=>e.jsx(D,{value:s,className:"ui-dropdown-item",children:s.name},s.id))})]})]})]})})},Te=[{id:1,name:"Durward Reynolds"},{id:2,name:"Kenton Towne"},{id:3,name:"Therese Wunsch"},{id:4,name:"Benedict Kessler"},{id:5,name:"Katelyn Rohan"}],ds=()=>{const[t,n]=a.useState(Te[0]);return e.jsx("div",{children:e.jsxs(B,{children:[e.jsx("div",{className:"flex items-center justify-between mb-2",children:e.jsx("h4",{className:"text-lg font-semibold",children:"Listbox With Framer Motion "})}),e.jsx(C,{value:t,onChange:n,children:({open:s})=>e.jsxs(e.Fragment,{children:[e.jsxs(E,{className:"ui-button bg-secondary justify-between items-center gap-3",children:[t.name," ",e.jsx(k,{icon:"solar:alt-arrow-down-outline",height:18})]}),e.jsx(Kt,{children:s&&e.jsx(I,{static:!0,as:Bt.div,initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.95},anchor:"bottom",className:"origin-top ui-dropdown ",children:Te.map(o=>e.jsx(D,{value:o,className:"ui-dropdown-item",children:o.name},o.id))})})]})})]})})},$e=[{id:1,name:"Durward Reynolds"},{id:2,name:"Kenton Towne"},{id:3,name:"Therese Wunsch"},{id:4,name:"Benedict Kessler"},{id:5,name:"Katelyn Rohan"}],us=()=>{const[t,n]=a.useState($e[0]);return e.jsx("div",{children:e.jsxs(B,{children:[e.jsx("div",{className:"flex items-center justify-between mb-2",children:e.jsx("h4",{className:"text-lg font-semibold",children:"Listbox With Transitions"})}),e.jsxs(C,{value:t,onChange:n,children:[e.jsxs(E,{className:"ui-button bg-primary justify-between items-center gap-3",children:[t.name," ",e.jsx(k,{icon:"solar:alt-arrow-down-outline",height:18})]}),e.jsx(I,{anchor:"bottom",transition:!0,className:"ui-dropdown origin-top transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0",children:$e.map(s=>e.jsx(D,{value:s,className:"ui-dropdown-item",children:s.name},s.id))})]})]})})},Ee=[{id:1,name:"Durward Reynolds"},{id:2,name:"Kenton Towne"},{id:3,name:"Therese Wunsch"},{id:4,name:"Benedict Kessler"},{id:5,name:"Katelyn Rohan"}],ms=()=>{const[t,n]=a.useState(Ee[0]);return e.jsx("div",{children:e.jsxs(B,{children:[e.jsx("div",{className:"flex items-center justify-between mb-2",children:e.jsx("h4",{className:"text-lg font-semibold",children:"Listbox Width"})}),e.jsxs(C,{value:t,onChange:n,children:[e.jsxs(E,{className:"ui-button bg-error justify-between items-center gap-3",children:[t.name," ",e.jsx(k,{icon:"solar:alt-arrow-down-outline",height:18})]}),e.jsx(I,{anchor:"bottom",className:"ui-dropdown w-80 !max-w-80",children:Ee.map(s=>e.jsx(D,{value:s,className:"ui-dropdown-item",children:s.name},s.id))})]})]})})},ps=()=>e.jsx("div",{children:e.jsx(J,{children:`
    
    import {
    Description,
    Field,
    Label,
    Listbox,
    ListboxButton,
    ListboxOption,
    ListboxOptions,
    } from "@headlessui/react";
    import { useState } from "react";
    import { Icon } from "@iconify/react";


    const people = [
    { id: 1, name: "Durward Reynolds", available: true },
    { id: 2, name: "Kenton Towne", available: true },
    { id: 3, name: "Therese Wunsch", available: false },
    { id: 4, name: "Benedict Kessler", available: false },
    { id: 5, name: "Katelyn Rohan", available: true },
    ];
    
    const [selectedPerson, setSelectedPerson] = useState(people[0]);


    <Field className="w-full">
          <Description className="text-xs mb-2">
            This person will have full access to this project.
            This person will have full access to this project.
          </Description>
          <Listbox value={selectedPerson} onChange={setSelectedPerson}>
            <ListboxButton className="ui-button bg-warning  justify-between items-center gap-3 w-full">
              {selectedPerson.name}{" "}
              <Icon icon="solar:alt-arrow-down-outline" height={18} />
            </ListboxButton>
            <ListboxOptions anchor="bottom" className="ui-dropdown">
              {people.map((person) => (
                <ListboxOption
                  key={person.id}
                  value={person}
                  className="ui-dropdown-item"
                >
                  {person.name}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </Listbox>
    </Field>
        `})}),Ie=[{id:1,name:"Durward Reynolds",available:!0},{id:2,name:"Kenton Towne",available:!0},{id:3,name:"Therese Wunsch",available:!1},{id:4,name:"Benedict Kessler",available:!1},{id:5,name:"Katelyn Rohan",available:!0}],xs=()=>{const[t,n]=a.useState(Ie[0]);return e.jsx("div",{children:e.jsxs(B,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Listbox With Description"}),e.jsx(ps,{})]}),e.jsxs(ee,{className:"w-full",children:[e.jsx(ge,{className:"text-xs mb-2",children:"This person will have full access to this project. This person will have full access to this project."}),e.jsxs(C,{value:t,onChange:n,children:[e.jsxs(E,{className:"ui-button bg-warning  justify-between items-center gap-3 w-full",children:[t.name," ",e.jsx(k,{icon:"solar:alt-arrow-down-outline",height:18})]}),e.jsx(I,{anchor:"bottom",className:"ui-dropdown",children:Ie.map(s=>e.jsx(D,{value:s,className:"ui-dropdown-item",children:s.name},s.id))})]})]})]})})},bs=()=>e.jsx("div",{children:e.jsx(J,{children:`
    
    import {
    Description,
    Field,
    Label,
    Listbox,
    ListboxButton,
    ListboxOption,
    ListboxOptions,
    } from "@headlessui/react";
    import { useState } from "react";
    import { Icon } from "@iconify/react";
    const people = [
    { id: 1, name: "Durward Reynolds" },
    { id: 2, name: "Kenton Towne" },
    { id: 3, name: "Therese Wunsch" },
    { id: 4, name: "Benedict Kessler" },
    { id: 5, name: "Katelyn Rohan" },
    ];  

    const [selectedPerson, setSelectedPerson] = useState(people[0]);
    
    <form action="/projects/1" method="post " className="flex gap-3">
          <Field className="w-full">
            <Label className="text-sm mb-1 text-ld">Assignee:</Label>
            <Description className="text-xs mb-2">
              This person will have full access to this project.
            </Description>
            <Listbox
              name="assignee"
              value={selectedPerson}
              onChange={setSelectedPerson}
            >
                <span className="flex gap-3">
              <ListboxButton className="ui-button bg-primary  justify-between items-center gap-3 w-full">
                {selectedPerson.name}{" "}
                <Icon icon="solar:alt-arrow-down-outline" height={18} />
              </ListboxButton>
              <button className="ui-button bg-secondary">Submit</button>
              </span>
              <ListboxOptions anchor="bottom" className="ui-dropdown">
                {people.map((person) => (
                  <ListboxOption
                    key={person.id}
                    value={person}
                    className="ui-dropdown"
                  >
                    {person.name}
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </Listbox>
          </Field>
    </form>

        `})}),De=[{id:1,name:"Durward Reynolds"},{id:2,name:"Kenton Towne"},{id:3,name:"Therese Wunsch"},{id:4,name:"Benedict Kessler"},{id:5,name:"Katelyn Rohan"}],hs=()=>{const[t,n]=a.useState(De[0]);return e.jsx("div",{children:e.jsxs(B,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Using HTML forms"}),e.jsx(bs,{})]}),e.jsx("form",{action:"/projects/1",method:"post ",className:"flex gap-3",children:e.jsxs(ee,{className:"w-full",children:[e.jsx(ie,{className:"text-sm mb-1 text-ld",children:"Assignee:"}),e.jsx(ge,{className:"text-xs mb-2",children:"This person will have full access to this project."}),e.jsxs(C,{name:"assignee",value:t,onChange:n,children:[e.jsxs("span",{className:"flex gap-3",children:[e.jsxs(E,{className:"ui-button bg-primary  justify-between items-center gap-3 w-full",children:[t.name," ",e.jsx(k,{icon:"solar:alt-arrow-down-outline",height:18})]}),e.jsx("button",{className:"ui-button bg-secondary",children:"Submit"})]}),e.jsx(I,{anchor:"bottom",className:"ui-dropdown",children:De.map(s=>e.jsx(D,{value:s,className:"ui-dropdown-item",children:s.name},s.id))})]})]})})]})})},ve=[{id:1,name:"Durward Reynolds"},{id:2,name:"Kenton Towne"},{id:3,name:"Therese Wunsch"},{id:4,name:"Benedict Kessler"},{id:5,name:"Katelyn Rohan"}],fs=()=>{const[t,n]=a.useState([ve[0],ve[1]]);return e.jsx("div",{children:e.jsxs(B,{children:[e.jsx("div",{className:"flex items-center justify-between mb-2",children:e.jsx("h4",{className:"text-lg font-semibold",children:"Selecting Multiple Values"})}),e.jsxs(C,{value:t,onChange:n,multiple:!0,children:[e.jsx(E,{className:"ui-button bg-success justify-between items-center gap-3",children:t.map(s=>s.name).join(", ")}),e.jsx(I,{anchor:"bottom",className:"origin-top ui-dropdown",children:ve.map(s=>e.jsx(D,{value:s,className:"ui-dropdown-item",children:s.name},s.id))})]})]})})},Ke=[{id:1,name:"Durward Reynolds"},{id:2,name:"Kenton Towne"},{id:3,name:"Therese Wunsch"},{id:4,name:"Benedict Kessler"},{id:5,name:"Katelyn Rohan"}];let vs=a.forwardRef(function(n,s){return e.jsx("button",{ref:s,...n})});const js=()=>{const[t,n]=a.useState(Ke[0]);return e.jsx("div",{children:e.jsxs(B,{children:[e.jsx("div",{className:"flex items-center justify-between mb-2",children:e.jsx("h4",{className:"text-lg font-semibold",children:"Rendering as Different Elements "})}),e.jsxs(C,{value:t,onChange:n,children:[e.jsxs(E,{as:vs,className:"ui-button bg-error justify-between items-center gap-3",children:[t.name," ",e.jsx(k,{icon:"solar:alt-arrow-down-outline",height:18})]}),e.jsx(I,{anchor:"bottom",as:"ul",className:"ui-dropdown",children:Ke.map(s=>e.jsx(D,{as:"li",value:s,className:"ui-dropdown-item",children:s.name},s.id))})]})]})})},gs=[{to:"/",title:"Home"},{title:"Listbox"}],en=()=>e.jsxs(e.Fragment,{children:[e.jsx(Ct,{title:"Listbox",items:gs}),e.jsxs("div",{className:"grid grid-cols-12 gap-30",children:[e.jsx("div",{className:"lg:col-span-4 md:col-span-6 col-span-12",children:e.jsx(ns,{})}),e.jsx("div",{className:"lg:col-span-4 md:col-span-6 col-span-12",children:e.jsx(cs,{})}),e.jsx("div",{className:"lg:col-span-4 md:col-span-6 col-span-12",children:e.jsx(as,{})}),e.jsx("div",{className:"lg:col-span-4 md:col-span-6 col-span-12",children:e.jsx(is,{})}),e.jsx("div",{className:"lg:col-span-4 md:col-span-6 col-span-12",children:e.jsx(xs,{})}),e.jsx("div",{className:"lg:col-span-4 md:col-span-6 col-span-12",children:e.jsx(hs,{})}),e.jsx("div",{className:"lg:col-span-4 md:col-span-6 col-span-12",children:e.jsx(ms,{})}),e.jsx("div",{className:"lg:col-span-4 md:col-span-6 col-span-12",children:e.jsx(ls,{})}),e.jsx("div",{className:"lg:col-span-4 md:col-span-6 col-span-12",children:e.jsx(us,{})}),e.jsx("div",{className:"lg:col-span-4 md:col-span-6 col-span-12",children:e.jsx(ds,{})}),e.jsx("div",{className:"lg:col-span-4 md:col-span-6 col-span-12",children:e.jsx(fs,{})}),e.jsx("div",{className:"lg:col-span-4 md:col-span-6 col-span-12",children:e.jsx(js,{})})]})]});export{en as default};
