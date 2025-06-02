import{r as t,a as G,j as e,I as Ge}from"./index-CbdGNVhE.js";import{C as K}from"./CodeModal-CQLFjqdl.js";import{C as I}from"./CardBox-DWufozWR.js";import{$ as de,a as ce}from"./useFocusRing-CXvZpW1I.js";import{u as Ce}from"./use-by-comparator-BYOBCm-o.js";import{l as De,T as we}from"./use-default-value-xkMuo3m4.js";import{K as Q,o as L,L as q,s as ue,n as pe,_ as me,u as $e}from"./render-NI4Jg5tu.js";import{y as J}from"./use-sync-refs-BkeMvBOG.js";import{a as he}from"./disabled-DeIIXrEU.js";import{j as Be,p as Pe,H as V}from"./field-Bz5zx8cw.js";import{K as fe,u as Fe,I as ze,Q as A}from"./label-MdCs77Yl.js";import{r as xe}from"./bugs-DpEN4NTH.js";import{P as se,F as _,T as re,_ as Ee}from"./focus-management-CnjimqFj.js";import{u as Te}from"./owner-fH536Zf5.js";import{w as ge,U as Oe,H as be}from"./description-UBmOgCgm.js";import{o as P}from"./keyboard-C1Wiwm26.js";import{B as Ue}from"./BreadcrumbComp-B5-q4JsV.js";import"./toConsumableArray-CGYUFXbV.js";import"./extends-CF3RwP-h.js";import"./Card-DYrQhspN.js";import"./hidden-BpERx2SG.js";var Le=(s=>(s[s.RegisterOption=0]="RegisterOption",s[s.UnregisterOption=1]="UnregisterOption",s))(Le||{});let Ie={0(s,r){let a=[...s.options,{id:r.id,element:r.element,propsRef:r.propsRef}];return{...s,options:Ee(a,l=>l.element.current)}},1(s,r){let a=s.options.slice(),l=s.options.findIndex(h=>h.id===r.id);return l===-1?s:(a.splice(l,1),{...s,options:a})}},X=t.createContext(null);X.displayName="RadioGroupDataContext";function Y(s){let r=t.useContext(X);if(r===null){let a=new Error(`<${s} /> is missing a parent <RadioGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,Y),a}return r}let Z=t.createContext(null);Z.displayName="RadioGroupActionsContext";function ee(s){let r=t.useContext(Z);if(r===null){let a=new Error(`<${s} /> is missing a parent <RadioGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,ee),a}return r}function Ae(s,r){return $e(r.type,Ie,s,r)}let Me="div";function He(s,r){let a=t.useId(),l=he(),{id:h=`headlessui-radiogroup-${a}`,value:z,form:b,name:v,onChange:n,by:x,disabled:d=l||!1,defaultValue:f,...E}=s,p=Ce(x),[j,C]=t.useReducer(Ae,{options:[]}),c=j.options,[y,T]=fe(),[D,R]=ge(),N=t.useRef(null),w=J(N,r),k=De(f),[i,$]=we(z,n,k),B=t.useMemo(()=>c.find(o=>!o.propsRef.current.disabled),[c]),S=t.useMemo(()=>c.some(o=>p(o.propsRef.current.value,i)),[c,i]),u=L(o=>{var O;if(d||p(o,i))return!1;let g=(O=c.find(W=>p(W.propsRef.current.value,o)))==null?void 0:O.propsRef.current;return g!=null&&g.disabled?!1:($==null||$(o),!0)}),H=L(o=>{let O=N.current;if(!O)return;let g=Te(O),W=c.filter(m=>m.propsRef.current.disabled===!1).map(m=>m.element.current);switch(o.key){case P.Enter:Pe(o.currentTarget);break;case P.ArrowLeft:case P.ArrowUp:if(o.preventDefault(),o.stopPropagation(),se(W,_.Previous|_.WrapAround)===re.Success){let m=c.find(U=>U.element.current===(g==null?void 0:g.activeElement));m&&u(m.propsRef.current.value)}break;case P.ArrowRight:case P.ArrowDown:if(o.preventDefault(),o.stopPropagation(),se(W,_.Next|_.WrapAround)===re.Success){let m=c.find(U=>U.element.current===(g==null?void 0:g.activeElement));m&&u(m.propsRef.current.value)}break;case P.Space:{o.preventDefault(),o.stopPropagation();let m=c.find(U=>U.element.current===(g==null?void 0:g.activeElement));m&&u(m.propsRef.current.value)}break}}),ae=L(o=>(C({type:0,...o}),()=>C({type:1,id:o.id}))),ke=t.useMemo(()=>({value:i,firstOption:B,containsCheckedOption:S,disabled:d,compare:p,...j}),[i,B,S,d,p,j]),je=t.useMemo(()=>({registerOption:ae,change:u}),[ae,u]),ye={ref:w,id:h,role:"radiogroup","aria-labelledby":y,"aria-describedby":D,onKeyDown:H},Re=t.useMemo(()=>({value:i}),[i]),Ne=t.useCallback(()=>{if(k!==void 0)return u(k)},[u,k]),Se=q();return G.createElement(R,{name:"RadioGroup.Description"},G.createElement(T,{name:"RadioGroup.Label"},G.createElement(Z.Provider,{value:je},G.createElement(X.Provider,{value:ke},v!=null&&G.createElement(Be,{disabled:d,data:{[v]:i||"on"},overrides:{type:"radio",checked:i!=null},form:b,onReset:Ne}),Se({ourProps:ye,theirProps:E,slot:Re,defaultTag:Me,name:"RadioGroup"})))))}let We="div";function _e(s,r){var a;let l=Y("RadioGroup.Option"),h=ee("RadioGroup.Option"),z=t.useId(),{id:b=`headlessui-radiogroup-option-${z}`,value:v,disabled:n=l.disabled||!1,autoFocus:x=!1,...d}=s,f=t.useRef(null),E=J(f,r),[p,j]=fe(),[C,c]=ge(),y=ue({value:v,disabled:n});pe(()=>h.registerOption({id:b,element:f,propsRef:y}),[b,h,f,y]);let T=L(u=>{var H;if(xe(u.currentTarget))return u.preventDefault();h.change(v)&&((H=f.current)==null||H.focus())}),D=((a=l.firstOption)==null?void 0:a.id)===b,{isFocusVisible:R,focusProps:N}=de({autoFocus:x}),{isHovered:w,hoverProps:k}=ce({isDisabled:n}),i=l.compare(l.value,v),$=me({ref:E,id:b,role:"radio","aria-checked":i?"true":"false","aria-labelledby":p,"aria-describedby":C,"aria-disabled":n?!0:void 0,tabIndex:n?-1:i||!l.containsCheckedOption&&D?0:-1,onClick:n?void 0:T,autoFocus:x},N,k),B=t.useMemo(()=>({checked:i,disabled:n,active:R,hover:w,focus:R,autofocus:x}),[i,n,w,R,x]),S=q();return G.createElement(c,{name:"RadioGroup.Description"},G.createElement(j,{name:"RadioGroup.Label"},S({ourProps:$,theirProps:d,slot:B,defaultTag:We,name:"RadioGroup.Option"})))}let Ke="span";function Ve(s,r){var a;let l=Y("Radio"),h=ee("Radio"),z=t.useId(),b=Fe(),v=he(),{id:n=b||`headlessui-radio-${z}`,value:x,disabled:d=l.disabled||v||!1,autoFocus:f=!1,...E}=s,p=t.useRef(null),j=J(p,r),C=ze(),c=Oe(),y=ue({value:x,disabled:d});pe(()=>h.registerOption({id:n,element:p,propsRef:y}),[n,h,p,y]);let T=L(S=>{var u;if(xe(S.currentTarget))return S.preventDefault();h.change(x)&&((u=p.current)==null||u.focus())}),{isFocusVisible:D,focusProps:R}=de({autoFocus:f}),{isHovered:N,hoverProps:w}=ce({isDisabled:d}),k=((a=l.firstOption)==null?void 0:a.id)===n,i=l.compare(l.value,x),$=me({ref:j,id:n,role:"radio","aria-checked":i?"true":"false","aria-labelledby":C,"aria-describedby":c,"aria-disabled":d?!0:void 0,tabIndex:d?-1:i||!l.containsCheckedOption&&k?0:-1,autoFocus:f,onClick:d?void 0:T},R,w),B=t.useMemo(()=>({checked:i,disabled:d,hover:N,focus:D,autofocus:f}),[i,d,N,D,f]);return q()({ourProps:$,theirProps:E,slot:B,defaultTag:Ke,name:"Radio"})}let Qe=Q(He),qe=Q(_e),F=Q(Ve),Je=A,Xe=be,M=Object.assign(Qe,{Option:qe,Radio:F,Label:Je,Description:Xe});const Ye=()=>e.jsx("div",{children:e.jsx(K,{children:`
    
    
    import { Radio, RadioGroup } from '@headlessui/react'
    import { useState } from 'react'
    import { Icon } from "@iconify/react";

    const plans = [
    { name: 'Startup', ram: '12GB', cpus: '6 CPUs', disk: '256GB SSD disk' },
    { name: 'Business', ram: '16GB', cpus: '8 CPUs', disk: '512GB SSD disk' },
    { name: 'Enterprise', ram: '32GB', cpus: '12 CPUs', disk: '1TB SSD disk' },
    ]

    const [selected, setSelected] = useState(plans[0])

    <RadioGroup value={selected} onChange={setSelected} aria-label="Server size" className="space-y-4">
          {plans.map((plan) => (
            <Radio
              key={plan.name}
              value={plan}
              className="group relative flex cursor-pointer rounded-md bg-lightgray dark:bg-dark py-4 px-5 text-ld shadow-md transition focus:outline-none data-[focus]:outline-1 data-[focus]:outline-primary data-[checked]:bg-primary dark:data-[checked]:bg-primary"
            >
              <div className="flex w-full items-center justify-between">
                <div className="text-sm">
                  <p className="font-semibold text-ld text-base group-data-[checked]:text-white">{plan.name}</p>
                  <div className="flex gap-2 text-bodytext text-sm group-data-[checked]:text-white/50">
                    <div>{plan.ram}</div>
                    <div aria-hidden="true">&middot;</div>
                    <div>{plan.cpus}</div>
                    <div aria-hidden="true">&middot;</div>
                    <div>{plan.disk}</div>
                  </div>
                </div>
                
                <Icon icon="solar:check-circle-linear" height={20} className="opacity-0 transition group-data-[checked]:opacity-100 text-white"/>
                {/* <CheckCircleIcon className="size-6 fill-white opacity-0 transition group-data-[checked]:opacity-100" /> */}
              </div>
            </Radio>
          ))}
        </RadioGroup>
    
        `})}),te=[{name:"Startup",ram:"12GB",cpus:"6 CPUs",disk:"256GB SSD disk"},{name:"Business",ram:"16GB",cpus:"8 CPUs",disk:"512GB SSD disk"},{name:"Enterprise",ram:"32GB",cpus:"12 CPUs",disk:"1TB SSD disk"}],Ze=()=>{const[s,r]=t.useState(te[0]);return e.jsx("div",{children:e.jsxs(I,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Styling Radio Group"}),e.jsx(Ye,{})]}),e.jsx("div",{className:"mx-auto w-full",children:e.jsx(M,{value:s,onChange:r,"aria-label":"Server size",className:"space-y-4",children:te.map(a=>e.jsx(F,{value:a,className:"group relative flex cursor-pointer rounded-md bg-lightgray dark:bg-dark py-4 px-5 text-ld shadow-md transition focus:outline-none data-[focus]:outline-1 data-[focus]:outline-primary data-[checked]:bg-primary dark:data-[checked]:bg-primary",children:e.jsxs("div",{className:"flex w-full items-center justify-between",children:[e.jsxs("div",{className:"text-sm",children:[e.jsx("p",{className:"font-semibold text-ld text-base group-data-[checked]:text-white",children:a.name}),e.jsxs("div",{className:"flex gap-2 text-bodytext text-sm group-data-[checked]:text-white/50",children:[e.jsx("div",{children:a.ram}),e.jsx("div",{"aria-hidden":"true",children:"·"}),e.jsx("div",{children:a.cpus}),e.jsx("div",{"aria-hidden":"true",children:"·"}),e.jsx("div",{children:a.disk})]})]}),e.jsx(Ge,{icon:"solar:check-circle-linear",height:20,className:"opacity-0 transition group-data-[checked]:opacity-100 text-white"})]})},a.name))})})]})})},ve=()=>e.jsx("div",{children:e.jsx(K,{children:`
    
    import {
    Field,
    Label,
    Radio,
    RadioGroup,
    } from "@headlessui/react";
    import { useState } from "react";   
    const plans = ["Developing", "Designing", "Coding","Graphics Design","Accounting"];

    const [selected, setSelected] = useState(plans[0]);

    <RadioGroup
          value={selected}
          onChange={setSelected}
          aria-label="Server size"
          className="flex flex-col gap-3"
        >
          {plans.map((plan) => (
            <Field key={plan} className="flex items-center gap-2">
              <Radio
                value={plan}
                className="group flex size-5 items-center justify-center rounded-full border border-ld bg-white dark:bg-transparent data-[checked]:bg-primary dark:data-[checked]:bg-primary outline-0"
              >
                <span className="invisible size-2 rounded-full bg-white group-data-[checked]:visible" />
              </Radio>
              <Label className="text-sm text-ld">{plan}</Label>
            </Field>
          ))}
    </RadioGroup>
        `})}),ie=["Developing","Designing","Coding","Graphics Design","Accounting","Frontend"],ea=()=>{const[,s]=t.useState(ie[0]);return e.jsx("div",{children:e.jsxs(I,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Disabled Radio Group "}),e.jsx(ve,{})]}),e.jsx(M,{onChange:s,"aria-label":"Server size",className:"flex flex-col gap-3",children:ie.map(r=>e.jsxs(V,{className:"flex items-center gap-3 ",children:[e.jsx(F,{disabled:!0,value:r,className:"group cursor-pointer flex size-5 items-center justify-center rounded-full border border-ld bg-white dark:bg-transparent data-[checked]:bg-primary dark:data-[checked]:bg-primary outline-0",children:e.jsx("span",{className:"invisible size-2 rounded-full bg-white group-data-[checked]:visible"})}),e.jsx(A,{className:"text-sm text-ld cursor-pointer opacity-50",children:r})]},r))})]})})},oe=["Developing","Designing","Coding","Graphics Design","Accounting","Frontend"],aa=()=>{const[s,r]=t.useState(oe[0]);return e.jsx("div",{children:e.jsxs(I,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Simple Radio Group "}),e.jsx(ve,{})]}),e.jsx(M,{value:s,onChange:r,"aria-label":"Server size",className:"flex flex-col gap-3",children:oe.map(a=>e.jsxs(V,{className:"flex items-center gap-3",children:[e.jsx(F,{value:a,className:"group cursor-pointer flex size-5 items-center justify-center rounded-full border border-ld bg-white dark:bg-transparent data-[checked]:bg-primary dark:data-[checked]:bg-primary outline-0",children:e.jsx("span",{className:"invisible size-2 rounded-full bg-white group-data-[checked]:visible"})}),e.jsx(A,{className:"text-sm text-ld cursor-pointer",children:a})]},a))})]})})},sa=()=>e.jsx("div",{children:e.jsx(K,{children:`
    
    import {
    Description,
    Field,
    Label,
    Radio,
    RadioGroup,
    } from "@headlessui/react";
    import { useState } from "react";

    const plans = [
    { name: "Startup", description: "12GB, 6 CPUs, 256GB SSD disk" },
    { name: "Business", description: "16GB, 8 CPUs, 512GB SSD disk" },
    { name: "Enterprise", description: "32GB, 12 CPUs, 1TB SSD disk" },
    ];   
    
    const [selected, setSelected] = useState(plans[0]);        

    <RadioGroup
          value={selected}
          onChange={setSelected}
          aria-label="Server size"
          className="flex flex-col gap-3"
        >
          {plans.map((plan) => (
            <Field key={plan.name} className="flex items-center gap-3 bg-lightgray dark:bg-dark py-2 px-4 rounded-md ">
              <Radio
                value={plan}
                className="group cursor-pointer flex size-5 items-center justify-center rounded-full border border-ld bg-white dark:bg-transparent data-[checked]:bg-primary dark:data-[checked]:bg-primary outline-0"
              >
                <span className="invisible size-2 rounded-full bg-white group-data-[checked]:visible " />
              </Radio>
              <div >
                <Label className="text-ld cursor-pointer">{plan.name}</Label>
                <Description className="text-bodytext text-xs">
                  {plan.description}
                </Description>
              </div>
            </Field>
          ))}
        </RadioGroup>
        `})}),le=[{name:"Startup",description:"12GB, 6 CPUs, 256GB SSD disk"},{name:"Business",description:"16GB, 8 CPUs, 512GB SSD disk"},{name:"Enterprise",description:"32GB, 12 CPUs, 1TB SSD disk"}],ra=()=>{const[s,r]=t.useState(le[0]);return e.jsx("div",{children:e.jsxs(I,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"With Description"}),e.jsx(sa,{})]}),e.jsx(M,{value:s,onChange:r,"aria-label":"Server size",className:"flex flex-col gap-3",children:le.map(a=>e.jsxs(V,{className:"flex items-center gap-3 bg-lightgray dark:bg-dark py-2 px-4 rounded-md ",children:[e.jsx(F,{value:a,className:"group cursor-pointer flex size-5 items-center justify-center rounded-full border border-ld bg-white dark:bg-transparent data-[checked]:bg-primary dark:data-[checked]:bg-primary outline-0",children:e.jsx("span",{className:"invisible size-2 rounded-full bg-white group-data-[checked]:visible "})}),e.jsxs("div",{children:[e.jsx(A,{className:"text-ld cursor-pointer",children:a.name}),e.jsx(be,{className:"text-bodytext text-xs",children:a.description})]})]},a.name))})]})})},ta=()=>e.jsx("div",{children:e.jsx(K,{children:`
    
    import {
    Field,
    Fieldset,
    Label,
    Legend,
    Radio,
    RadioGroup,
    } from "@headlessui/react";
    import { useState } from "react";

    const plans = [
    "Developing",
    "Designing",
    "Coding",
    "Graphics Design",
    "Accounting",
    "Frontend",
    "Seo",
    ];

    const [selected, setSelected] = useState(plans[0]);

     <form action="/plans" method="post">
          <RadioGroup
            value={selected}
            onChange={setSelected}
            aria-label="Server size"
            className="flex flex-col gap-3"
          >
            {plans.map((plan) => (
              <Field key={plan} className="flex items-center gap-3">
                <Radio
                  value={plan}
                  className="group cursor-pointer flex size-5 items-center justify-center rounded-full border border-ld bg-white dark:bg-transparent data-[checked]:bg-primary dark:data-[checked]:bg-primary outline-0"
                >
                  <span className="invisible size-2 rounded-full bg-white group-data-[checked]:visible" />
                </Radio>
                <Label className="text-sm text-ld cursor-pointer">{plan}</Label>
              </Field>
            ))}
          </RadioGroup>
          <div className="flex gap-3 mt-4">
            <button className="ui-button bg-primary">Submit</button>
            <button className="ui-button bg-error">Cancel</button>
          </div>
        </form>

        `})}),ne=["Developing","Designing","Coding","Graphics Design","Accounting","Frontend","Seo"],ia=()=>{const[s,r]=t.useState(ne[0]);return e.jsx("div",{children:e.jsxs(I,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"With HTML forms"}),e.jsx(ta,{})]}),e.jsxs("form",{action:"/plans",method:"post",children:[e.jsx(M,{value:s,onChange:r,"aria-label":"Server size",className:"flex flex-col gap-3",children:ne.map(a=>e.jsxs(V,{className:"flex items-center gap-3",children:[e.jsx(F,{value:a,className:"group cursor-pointer flex size-5 items-center justify-center rounded-full border border-ld bg-white dark:bg-transparent data-[checked]:bg-primary dark:data-[checked]:bg-primary outline-0",children:e.jsx("span",{className:"invisible size-2 rounded-full bg-white group-data-[checked]:visible"})}),e.jsx(A,{className:"text-sm text-ld cursor-pointer",children:a})]},a))}),e.jsxs("div",{className:"flex gap-3 mt-4",children:[e.jsx("button",{className:"ui-button bg-primary",children:"Submit"}),e.jsx("button",{className:"ui-button bg-error",children:"Cancel"})]})]})]})})},oa=[{to:"/",title:"Home"},{title:"RadioGRoup"}],Da=()=>e.jsxs(e.Fragment,{children:[e.jsx(Ue,{title:"Radio Group",items:oa}),e.jsxs("div",{className:"grid grid-cols-12 gap-30",children:[e.jsx("div",{className:"lg:col-span-4  col-span-12",children:e.jsx(aa,{})}),e.jsx("div",{className:"lg:col-span-4 col-span-12",children:e.jsx(ra,{})}),e.jsx("div",{className:"lg:col-span-4 col-span-12",children:e.jsx(ea,{})}),e.jsx("div",{className:"lg:col-span-6 col-span-12",children:e.jsx(Ze,{})}),e.jsx("div",{className:"lg:col-span-6 col-span-12",children:e.jsx(ia,{})})]})]});export{Da as default};
