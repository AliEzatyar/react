import{r as s,a as o,j as e}from"./index-BofOdt6x.js";import{C as h}from"./CardBox-DwJnOFrw.js";import{C as u}from"./CodeModal-BtUURIBs.js";import{$ as te,a as ne}from"./useFocusRing-Cu1umf0H.js";import{w as se}from"./use-active-press-Bji0LVDj.js";import{l as le,T as re}from"./use-default-value-DguRhiB9.js";import{K as ie,p as de,o as N,_ as ce,L as H}from"./render-XO5tK_Yh.js";import{e as oe}from"./use-resolve-button-type-CG-lxRoK.js";import{y as he}from"./use-sync-refs-sXKuz3Bt.js";import{a as ue}from"./disabled-mEMLDSam.js";import{j as ge,p as be,H as d}from"./field-Df14yZ9f.js";import{u as xe,I as me,Q as c,K as pe}from"./label-Ce_cNn0Z.js";import{r as fe}from"./bugs-DpEN4NTH.js";import{U as we,H as ke,w as Ne}from"./description-DAuExW8v.js";import{o as B}from"./keyboard-C1Wiwm26.js";import{B as je}from"./BreadcrumbComp-B936abq-.js";import"./Card-D_l9r_n3.js";import"./toConsumableArray-CcjcqDNZ.js";import"./extends-CF3RwP-h.js";import"./core-DD6kpHa4.js";import"./owner-S-LMO14O.js";import"./hidden-BTmvpjwx.js";let z=s.createContext(null);z.displayName="GroupContext";let ye=s.Fragment;function Se(a){var t;let[r,m]=s.useState(null),[j,y]=pe(),[S,i]=Ne(),p=s.useMemo(()=>({switch:r,setSwitch:m}),[r,m]),C={},v=a,f=H();return o.createElement(i,{name:"Switch.Description",value:S},o.createElement(y,{name:"Switch.Label",value:j,props:{htmlFor:(t=p.switch)==null?void 0:t.id,onClick(w){r&&(w.currentTarget instanceof HTMLLabelElement&&w.preventDefault(),r.click(),r.focus({preventScroll:!0}))}}},o.createElement(z.Provider,{value:p},f({ourProps:C,theirProps:v,slot:{},defaultTag:ye,name:"Switch.Group"}))))}let Ce="button";function ve(a,t){var r;let m=s.useId(),j=xe(),y=ue(),{id:S=j||`headlessui-switch-${m}`,disabled:i=y||!1,checked:p,defaultChecked:C,onChange:v,name:f,value:w,form:R,autoFocus:k=!1,...I}=a,E=s.useContext(z),[K,M]=s.useState(null),O=s.useRef(null),W=he(O,t,E===null?null:E.setSwitch,M),g=le(C),[b,x]=re(p,v,g??!1),G=de(),[F,$]=s.useState(!1),L=N(()=>{$(!0),x==null||x(!b),G.nextFrame(()=>{$(!1)})}),A=N(l=>{if(fe(l.currentTarget))return l.preventDefault();l.preventDefault(),L()}),U=N(l=>{l.key===B.Space?(l.preventDefault(),L()):l.key===B.Enter&&be(l.currentTarget)}),V=N(l=>l.preventDefault()),_=me(),q=we(),{isFocusVisible:D,focusProps:J}=te({autoFocus:k}),{isHovered:T,hoverProps:Q}=ne({isDisabled:i}),{pressed:P,pressProps:X}=se({disabled:i}),Y=s.useMemo(()=>({checked:b,disabled:i,hover:T,focus:D,active:P,autofocus:k,changing:F}),[b,T,D,P,i,F,k]),Z=ce({id:S,ref:W,role:"switch",type:oe(a,K),tabIndex:a.tabIndex===-1?0:(r=a.tabIndex)!=null?r:0,"aria-checked":b,"aria-labelledby":_,"aria-describedby":q,disabled:i||void 0,autoFocus:k,onClick:A,onKeyUp:U,onKeyPress:V},J,Q,X),ee=s.useCallback(()=>{if(g!==void 0)return x==null?void 0:x(g)},[x,g]),ae=H();return o.createElement(o.Fragment,null,f!=null&&o.createElement(ge,{disabled:i,data:{[f]:w||"on"},overrides:{type:"checkbox",checked:b},form:R,onReset:ee}),ae({ourProps:Z,theirProps:I,slot:Y,defaultTag:Ce,name:"Switch"}))}let ze=ie(ve),Ee=Se,Fe=c,$e=ke,n=Object.assign(ze,{Group:Ee,Label:Fe,Description:$e});const Le=()=>e.jsx("div",{children:e.jsx(u,{children:`
    
    import { Switch } from "@headlessui/react";
    import { useState } from "react";

    const [enabled, setEnabled] = useState(false);

    <div className="flex flex-wrap gap-3">
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-primary"
        >
          <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
        </Switch>  
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-secondary"
        >
          <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
        </Switch>  
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-success"
        >
          <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
        </Switch>    
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-error"
        >
          <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
        </Switch>      
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-warning"
        >
          <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
        </Switch> 
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-info"
        >
          <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
        </Switch> 
        </div>
            `})}),De=()=>{const[a,t]=s.useState(!1);return e.jsx("div",{children:e.jsxs(h,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Basic Switches"}),e.jsx(Le,{})]}),e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsx(n,{checked:a,onChange:t,className:"group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-primary",children:e.jsx("span",{className:"size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6"})}),e.jsx(n,{checked:a,onChange:t,className:"group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-secondary",children:e.jsx("span",{className:"size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6"})}),e.jsx(n,{checked:a,onChange:t,className:"group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-success",children:e.jsx("span",{className:"size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6"})}),e.jsx(n,{checked:a,onChange:t,className:"group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-error",children:e.jsx("span",{className:"size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6"})}),e.jsx(n,{checked:a,onChange:t,className:"group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-warning",children:e.jsx("span",{className:"size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6"})}),e.jsx(n,{checked:a,onChange:t,className:"group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-info",children:e.jsx("span",{className:"size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6"})})]})]})})},Te=()=>e.jsx("div",{children:e.jsx(u,{children:`
    
    import { Switch } from "@headlessui/react";
    import { useState } from "react";

    const [enabled, setEnabled] = useState(true);

    <div className="flex flex-wrap gap-3">
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-primary"
        >
          <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
        </Switch>  
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-secondary"
        >
          <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
        </Switch>  
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-success"
        >
          <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
        </Switch>    
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-error"
        >
          <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
        </Switch>      
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-warning"
        >
          <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
        </Switch> 
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-info"
        >
          <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
        </Switch> 
        </div>
            `})}),Pe=()=>{const[a,t]=s.useState(!0);return e.jsx("div",{children:e.jsxs(h,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Default On Switches"}),e.jsx(Te,{})]}),e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsx(n,{checked:a,onChange:t,className:"group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-primary",children:e.jsx("span",{className:"size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6"})}),e.jsx(n,{checked:a,onChange:t,className:"group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-secondary",children:e.jsx("span",{className:"size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6"})}),e.jsx(n,{checked:a,onChange:t,className:"group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-success",children:e.jsx("span",{className:"size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6"})}),e.jsx(n,{checked:a,onChange:t,className:"group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-error",children:e.jsx("span",{className:"size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6"})}),e.jsx(n,{checked:a,onChange:t,className:"group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-warning",children:e.jsx("span",{className:"size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6"})}),e.jsx(n,{checked:a,onChange:t,className:"group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-info",children:e.jsx("span",{className:"size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6"})})]})]})})},Be=()=>e.jsx("div",{children:e.jsx(u,{children:`
    
    import { Switch, Field } from "@headlessui/react";
    import { useState } from "react";
    
    const [enabled, setEnabled] = useState(true);
    
    <Field className="flex flex-wrap gap-3" disabled>
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 data-[checked]:bg-primary"
          >
            <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
          </Switch>
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 data-[checked]:bg-secondary"
          >
            <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
          </Switch>
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 data-[checked]:bg-success"
          >
            <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
          </Switch>
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 data-[checked]:bg-error"
          >
            <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
          </Switch>
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 data-[checked]:bg-warning"
          >
            <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
          </Switch>
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 data-[checked]:bg-info"
          >
            <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
          </Switch>
        </Field>
        `})}),He=()=>{const[a,t]=s.useState(!0);return e.jsx("div",{children:e.jsxs(h,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Disabled Switches"}),e.jsx(Be,{})]}),e.jsxs(d,{className:"flex flex-wrap gap-3",disabled:!0,children:[e.jsx(n,{checked:a,onChange:t,className:"group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 data-[checked]:bg-primary",children:e.jsx("span",{className:"size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6"})}),e.jsx(n,{checked:a,onChange:t,className:"group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 data-[checked]:bg-secondary",children:e.jsx("span",{className:"size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6"})}),e.jsx(n,{checked:a,onChange:t,className:"group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 data-[checked]:bg-success",children:e.jsx("span",{className:"size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6"})}),e.jsx(n,{checked:a,onChange:t,className:"group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 data-[checked]:bg-error",children:e.jsx("span",{className:"size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6"})}),e.jsx(n,{checked:a,onChange:t,className:"group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 data-[checked]:bg-warning",children:e.jsx("span",{className:"size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6"})}),e.jsx(n,{checked:a,onChange:t,className:"group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 data-[checked]:bg-info",children:e.jsx("span",{className:"size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6"})})]})]})})},Re=()=>e.jsx("div",{children:e.jsx(u,{children:`
    
    import { Switch } from "@headlessui/react";
    import { useState } from "react";

    <div className="flex flex-wrap gap-3">
          <Switch
            as="div"
            checked={enabled}
            onChange={setEnabled}
            className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-primary"
          >
            <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
          </Switch>
          <Switch
            as="div"
            checked={enabled}
            onChange={setEnabled}
            className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-secondary"
          >
            <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
          </Switch>
          <Switch
            as="div"
            checked={enabled}
            onChange={setEnabled}
            className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-success"
          >
            <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
          </Switch>
          <Switch
            as="div"
            checked={enabled}
            onChange={setEnabled}
            className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-error"
          >
            <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
          </Switch>
          <Switch
            as="div"
            checked={enabled}
            onChange={setEnabled}
            className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-warning"
          >
            <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
          </Switch>
          <Switch
            as="div"
            checked={enabled}
            onChange={setEnabled}
            className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-info"
          >
            <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
          </Switch>
        </div>
            `})}),Ie=()=>{const[a,t]=s.useState(!1);return e.jsx("div",{children:e.jsxs(h,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Rendering as Element"}),e.jsx(Re,{})]}),e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsx(n,{as:"div",checked:a,onChange:t,className:"group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-primary",children:e.jsx("span",{className:"size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6"})}),e.jsx(n,{as:"div",checked:a,onChange:t,className:"group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-secondary",children:e.jsx("span",{className:"size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6"})}),e.jsx(n,{as:"div",checked:a,onChange:t,className:"group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-success",children:e.jsx("span",{className:"size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6"})}),e.jsx(n,{as:"div",checked:a,onChange:t,className:"group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-error",children:e.jsx("span",{className:"size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6"})}),e.jsx(n,{as:"div",checked:a,onChange:t,className:"group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-warning",children:e.jsx("span",{className:"size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6"})}),e.jsx(n,{as:"div",checked:a,onChange:t,className:"group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-info",children:e.jsx("span",{className:"size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6"})})]})]})})},Ke=()=>e.jsx("div",{children:e.jsx(u,{children:`
    
    import  { useState } from "react";
    import { Switch, Field, Label } from "@headlessui/react";

    const [enabled, setEnabled] = useState(true);

    <div className="flex flex-wrap gap-3">
          <Field>
            <Label className="block text-ld mb-2">Enable</Label>
            <Switch
              checked={enabled}
              onChange={setEnabled}
              className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-primary"
            >
              <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
            </Switch>
          </Field>
          <Field>
            <Label className="block text-ld mb-2">Enable</Label>
            <Switch
              checked={enabled}
              onChange={setEnabled}
              className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-secondary"
            >
              <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
            </Switch>
          </Field>
          <Field>
            <Label className="block text-ld mb-2">Enable</Label>
            <Switch
              checked={enabled}
              onChange={setEnabled}
              className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-error"
            >
              <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
            </Switch>
          </Field>
          <Field>
            <Label className="block text-ld mb-2">Enable</Label>
            <Switch
              checked={enabled}
              onChange={setEnabled}
              className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-warning"
            >
              <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
            </Switch>
          </Field>
          <Field>
            <Label className="block text-ld mb-2">Enable</Label>
            <Switch
              checked={enabled}
              onChange={setEnabled}
              className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-info"
            >
              <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
            </Switch>
          </Field>
          <Field>
            <Label className="block text-ld mb-2">Enable</Label>
            <Switch
              checked={enabled}
              onChange={setEnabled}
              className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-success"
            >
              <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
            </Switch>
          </Field>
        </div>
            `})}),Me=()=>{const[a,t]=s.useState(!0);return e.jsx("div",{children:e.jsxs(h,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Adding a Label"}),e.jsx(Ke,{})]}),e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsxs(d,{children:[e.jsx(c,{className:"block text-ld mb-2",children:"Enable"}),e.jsx(n,{checked:a,onChange:t,className:"group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-primary",children:e.jsx("span",{className:"size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6"})})]}),e.jsxs(d,{children:[e.jsx(c,{className:"block text-ld mb-2",children:"Enable"}),e.jsx(n,{checked:a,onChange:t,className:"group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-secondary",children:e.jsx("span",{className:"size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6"})})]}),e.jsxs(d,{children:[e.jsx(c,{className:"block text-ld mb-2",children:"Enable"}),e.jsx(n,{checked:a,onChange:t,className:"group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-error",children:e.jsx("span",{className:"size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6"})})]}),e.jsxs(d,{children:[e.jsx(c,{className:"block text-ld mb-2",children:"Enable"}),e.jsx(n,{checked:a,onChange:t,className:"group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-warning",children:e.jsx("span",{className:"size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6"})})]}),e.jsxs(d,{children:[e.jsx(c,{className:"block text-ld mb-2",children:"Enable"}),e.jsx(n,{checked:a,onChange:t,className:"group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-info",children:e.jsx("span",{className:"size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6"})})]})]})]})})},Oe=()=>e.jsx("div",{children:e.jsx(u,{children:`
    
    import { Switch } from "@headlessui/react";
    import { useState } from "react";

    <div className="flex flex-wrap gap-3">
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition duration-700 data-[checked]:bg-primary"
          >
            <span className="size-4 translate-x-1 rounded-full bg-white transition duration-700 group-data-[checked]:translate-x-6" />
          </Switch>
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition duration-700 data-[checked]:bg-secondary"
          >
            <span className="size-4 translate-x-1 rounded-full bg-white transition duration-700 group-data-[checked]:translate-x-6" />
          </Switch>
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition duration-700 data-[checked]:bg-success"
          >
            <span className="size-4 translate-x-1 rounded-full bg-white transition duration-700 group-data-[checked]:translate-x-6" />
          </Switch>
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition duration-700 data-[checked]:bg-error"
          >
            <span className="size-4 translate-x-1 rounded-full bg-white transition duration-700 group-data-[checked]:translate-x-6" />
          </Switch>
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition duration-700 data-[checked]:bg-warning"
          >
            <span className="size-4 translate-x-1 rounded-full bg-white transition duration-700 group-data-[checked]:translate-x-6" />
          </Switch>
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition duration-700 data-[checked]:bg-info"
          >
            <span className="size-4 translate-x-1 rounded-full bg-white transition duration-700 group-data-[checked]:translate-x-6" />
          </Switch>
        </div>
            `})}),We=()=>{const[a,t]=s.useState(!0);return e.jsx("div",{children:e.jsxs(h,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Adding Transitions"}),e.jsx(Oe,{})]}),e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsx(n,{checked:a,onChange:t,className:"group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition duration-700 data-[checked]:bg-primary",children:e.jsx("span",{className:"size-4 translate-x-1 rounded-full bg-white transition duration-700 group-data-[checked]:translate-x-6"})}),e.jsx(n,{checked:a,onChange:t,className:"group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition duration-700 data-[checked]:bg-secondary",children:e.jsx("span",{className:"size-4 translate-x-1 rounded-full bg-white transition duration-700 group-data-[checked]:translate-x-6"})}),e.jsx(n,{checked:a,onChange:t,className:"group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition duration-700 data-[checked]:bg-success",children:e.jsx("span",{className:"size-4 translate-x-1 rounded-full bg-white transition duration-700 group-data-[checked]:translate-x-6"})}),e.jsx(n,{checked:a,onChange:t,className:"group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition duration-700 data-[checked]:bg-error",children:e.jsx("span",{className:"size-4 translate-x-1 rounded-full bg-white transition duration-700 group-data-[checked]:translate-x-6"})}),e.jsx(n,{checked:a,onChange:t,className:"group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition duration-700 data-[checked]:bg-warning",children:e.jsx("span",{className:"size-4 translate-x-1 rounded-full bg-white transition duration-700 group-data-[checked]:translate-x-6"})}),e.jsx(n,{checked:a,onChange:t,className:"group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition duration-700 data-[checked]:bg-info",children:e.jsx("span",{className:"size-4 translate-x-1 rounded-full bg-white transition duration-700 group-data-[checked]:translate-x-6"})})]})]})})},ha=()=>{const a=[{to:"/",title:"Home"},{title:"Switch"}];return e.jsxs(e.Fragment,{children:[e.jsx(je,{title:"Switch",items:a}),e.jsxs("div",{className:"grid grid-cols-12 gap-30",children:[e.jsx("div",{className:"lg:col-span-4 md:col-span-6 col-span-12",children:e.jsx(De,{})}),e.jsx("div",{className:"lg:col-span-4 md:col-span-6 col-span-12",children:e.jsx(Pe,{})}),e.jsx("div",{className:"lg:col-span-4 md:col-span-6 col-span-12",children:e.jsx(He,{})}),e.jsx("div",{className:"lg:col-span-4 md:col-span-6 col-span-12",children:e.jsx(Me,{})}),e.jsx("div",{className:"lg:col-span-4 md:col-span-6 col-span-12",children:e.jsx(We,{})}),e.jsx("div",{className:"lg:col-span-4 md:col-span-6 col-span-12",children:e.jsx(Ie,{})})]})]})};export{ha as default};
