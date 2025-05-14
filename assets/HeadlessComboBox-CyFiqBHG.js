import{r as d,aC as se,a as _,j as s,I as qe}from"./index-P2HWq5AB.js";import{C as K}from"./CardBox-iBHS77gx.js";import{$ as tt,a as ot}from"./useFocusRing-Di4h4CvJ.js";import{w as ut}from"./use-active-press-C4eQ0n2y.js";import{u as mt}from"./use-by-comparator-BGy9MiJd.js";import{l as pt,T as ht}from"./use-default-value-877t43tv.js";import{o as y,O as Qe,K as he,u as ie,n as te,L as be,p as bt,_ as Fe,s as xt,b as He}from"./render-BKlKWd6j.js";import{M as ft,y as gt,x as vt,R as yt,b as wt,d as Ue}from"./floating-BhKuzvxx.js";import{y as Ct}from"./use-inert-others-B7wCIoFb.js";import{R as St,n as nt,m as jt,f as kt,r as Ot,a as Et}from"./portal-Cyz56xWt.js";import{E as Pt}from"./use-event-listener-B4O8R_w4.js";import{e as It}from"./use-resolve-button-type-CWZZrYkE.js";import{y as ye}from"./use-sync-refs-CHG90QLp.js";import{u as Tt,c as T,f as Ge}from"./calculate-active-index-DY51T5z2.js";import{c as Nt,i as ve,u as Rt,x as Mt,R as Dt}from"./open-closed-Br83XxfI.js";import{F as $t}from"./use-tree-walker-BW5oAcEd.js";import{m as Je,r as Xe}from"./active-element-history-BlX46idP.js";import{a as Lt}from"./disabled-CgoTiXBv.js";import{j as zt,H as le}from"./field-BPMTWBig.js";import{l as Ye,f as Kt}from"./frozen-Ci_TEGHj.js";import{Q as we,K as Ft,u as Bt,I as Be}from"./label-CN3rczfl.js";import{r as At}from"./bugs-DpEN4NTH.js";import{_ as _t}from"./focus-management-CRpniyYN.js";import{U as Vt}from"./description-CBNApkT-.js";import{o as W}from"./keyboard-C1Wiwm26.js";import{C as de}from"./CodeModal-ZdVmlQAl.js";import{c as Ze}from"./clsx-B-dksMZM.js";import{A as Wt,m as qt}from"./index-DTgOLtjS.js";import{B as Qt}from"./BreadcrumbComp-BnVnHUMk.js";import"./owner-CBjDaIWd.js";import"./floating-ui.react-C67KESGd.js";import"./use-server-handoff-complete-CjS_LuND.js";import"./hidden-BgX8pakw.js";import"./toConsumableArray-B7RXd_Ox.js";import"./extends-CF3RwP-h.js";import"./core-DD6kpHa4.js";function ae(e,a,o){let n=o.initialDeps??[],r;return()=>{var t,i,l,c;let m;o.key&&((t=o.debug)!=null&&t.call(o))&&(m=Date.now());const p=e();if(!(p.length!==n.length||p.some((u,S)=>n[S]!==u)))return r;n=p;let w;if(o.key&&((i=o.debug)!=null&&i.call(o))&&(w=Date.now()),r=a(...p),o.key&&((l=o.debug)!=null&&l.call(o))){const u=Math.round((Date.now()-m)*100)/100,S=Math.round((Date.now()-w)*100)/100,C=S/16,x=(k,V)=>{for(k=String(k);k.length<V;)k=" "+k;return k};console.info(`%c⏱ ${x(S,5)} /${x(u,5)} ms`,`
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0,Math.min(120-120*C,120))}deg 100% 31%);`,o==null?void 0:o.key)}return(c=o==null?void 0:o.onChange)==null||c.call(o,r),r}}function Ce(e,a){if(e===void 0)throw new Error("Unexpected undefined");return e}const Ht=(e,a)=>Math.abs(e-a)<1,Ut=(e,a,o)=>{let n;return function(...r){e.clearTimeout(n),n=e.setTimeout(()=>a.apply(this,r),o)}},Gt=e=>e,Jt=e=>{const a=Math.max(e.startIndex-e.overscan,0),o=Math.min(e.endIndex+e.overscan,e.count-1),n=[];for(let r=a;r<=o;r++)n.push(r);return n},Xt=(e,a)=>{const o=e.scrollElement;if(!o)return;const n=e.targetWindow;if(!n)return;const r=i=>{const{width:l,height:c}=i;a({width:Math.round(l),height:Math.round(c)})};if(r(o.getBoundingClientRect()),!n.ResizeObserver)return()=>{};const t=new n.ResizeObserver(i=>{const l=i[0];if(l!=null&&l.borderBoxSize){const c=l.borderBoxSize[0];if(c){r({width:c.inlineSize,height:c.blockSize});return}}r(o.getBoundingClientRect())});return t.observe(o,{box:"border-box"}),()=>{t.unobserve(o)}},et={passive:!0},Yt=typeof window>"u"?!0:"onscrollend"in window,Zt=(e,a)=>{const o=e.scrollElement;if(!o)return;const n=e.targetWindow;if(!n)return;let r=0;const t=e.options.useScrollendEvent&&Yt?()=>{}:Ut(n,()=>{a(r,!1)},e.options.isScrollingResetDelay),i=m=>()=>{const{horizontal:p,isRtl:g}=e.options;r=p?o.scrollLeft*(g&&-1||1):o.scrollTop,t(),a(r,m)},l=i(!0),c=i(!1);return c(),o.addEventListener("scroll",l,et),o.addEventListener("scrollend",c,et),()=>{o.removeEventListener("scroll",l),o.removeEventListener("scrollend",c)}},eo=(e,a,o)=>{if(a!=null&&a.borderBoxSize){const n=a.borderBoxSize[0];if(n)return Math.round(n[o.options.horizontal?"inlineSize":"blockSize"])}return Math.round(e.getBoundingClientRect()[o.options.horizontal?"width":"height"])},to=(e,{adjustments:a=0,behavior:o},n)=>{var r,t;const i=e+a;(t=(r=n.scrollElement)==null?void 0:r.scrollTo)==null||t.call(r,{[n.options.horizontal?"left":"top"]:i,behavior:o})};class oo{constructor(a){this.unsubs=[],this.scrollElement=null,this.targetWindow=null,this.isScrolling=!1,this.scrollToIndexTimeoutId=null,this.measurementsCache=[],this.itemSizeCache=new Map,this.pendingMeasuredCacheIndexes=[],this.scrollRect=null,this.scrollOffset=null,this.scrollDirection=null,this.scrollAdjustments=0,this.elementsCache=new Map,this.observer=(()=>{let o=null;const n=()=>o||(!this.targetWindow||!this.targetWindow.ResizeObserver?null:o=new this.targetWindow.ResizeObserver(r=>{r.forEach(t=>{this._measureElement(t.target,t)})}));return{disconnect:()=>{var r;(r=n())==null||r.disconnect(),o=null},observe:r=>{var t;return(t=n())==null?void 0:t.observe(r,{box:"border-box"})},unobserve:r=>{var t;return(t=n())==null?void 0:t.unobserve(r)}}})(),this.range=null,this.setOptions=o=>{Object.entries(o).forEach(([n,r])=>{typeof r>"u"&&delete o[n]}),this.options={debug:!1,initialOffset:0,overscan:1,paddingStart:0,paddingEnd:0,scrollPaddingStart:0,scrollPaddingEnd:0,horizontal:!1,getItemKey:Gt,rangeExtractor:Jt,onChange:()=>{},measureElement:eo,initialRect:{width:0,height:0},scrollMargin:0,gap:0,indexAttribute:"data-index",initialMeasurementsCache:[],lanes:1,isScrollingResetDelay:150,enabled:!0,isRtl:!1,useScrollendEvent:!0,...o}},this.notify=o=>{var n,r;(r=(n=this.options).onChange)==null||r.call(n,this,o)},this.maybeNotify=ae(()=>(this.calculateRange(),[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]),o=>{this.notify(o)},{key:!1,debug:()=>this.options.debug,initialDeps:[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]}),this.cleanup=()=>{this.unsubs.filter(Boolean).forEach(o=>o()),this.unsubs=[],this.observer.disconnect(),this.scrollElement=null,this.targetWindow=null},this._didMount=()=>()=>{this.cleanup()},this._willUpdate=()=>{var o;const n=this.options.enabled?this.options.getScrollElement():null;if(this.scrollElement!==n){if(this.cleanup(),!n){this.maybeNotify();return}this.scrollElement=n,this.scrollElement&&"ownerDocument"in this.scrollElement?this.targetWindow=this.scrollElement.ownerDocument.defaultView:this.targetWindow=((o=this.scrollElement)==null?void 0:o.window)??null,this.elementsCache.forEach(r=>{this.observer.observe(r)}),this._scrollToOffset(this.getScrollOffset(),{adjustments:void 0,behavior:void 0}),this.unsubs.push(this.options.observeElementRect(this,r=>{this.scrollRect=r,this.maybeNotify()})),this.unsubs.push(this.options.observeElementOffset(this,(r,t)=>{this.scrollAdjustments=0,this.scrollDirection=t?this.getScrollOffset()<r?"forward":"backward":null,this.scrollOffset=r,this.isScrolling=t,this.maybeNotify()}))}},this.getSize=()=>this.options.enabled?(this.scrollRect=this.scrollRect??this.options.initialRect,this.scrollRect[this.options.horizontal?"width":"height"]):(this.scrollRect=null,0),this.getScrollOffset=()=>this.options.enabled?(this.scrollOffset=this.scrollOffset??(typeof this.options.initialOffset=="function"?this.options.initialOffset():this.options.initialOffset),this.scrollOffset):(this.scrollOffset=null,0),this.getFurthestMeasurement=(o,n)=>{const r=new Map,t=new Map;for(let i=n-1;i>=0;i--){const l=o[i];if(r.has(l.lane))continue;const c=t.get(l.lane);if(c==null||l.end>c.end?t.set(l.lane,l):l.end<c.end&&r.set(l.lane,!0),r.size===this.options.lanes)break}return t.size===this.options.lanes?Array.from(t.values()).sort((i,l)=>i.end===l.end?i.index-l.index:i.end-l.end)[0]:void 0},this.getMeasurementOptions=ae(()=>[this.options.count,this.options.paddingStart,this.options.scrollMargin,this.options.getItemKey,this.options.enabled],(o,n,r,t,i)=>(this.pendingMeasuredCacheIndexes=[],{count:o,paddingStart:n,scrollMargin:r,getItemKey:t,enabled:i}),{key:!1}),this.getMeasurements=ae(()=>[this.getMeasurementOptions(),this.itemSizeCache],({count:o,paddingStart:n,scrollMargin:r,getItemKey:t,enabled:i},l)=>{if(!i)return this.measurementsCache=[],this.itemSizeCache.clear(),[];this.measurementsCache.length===0&&(this.measurementsCache=this.options.initialMeasurementsCache,this.measurementsCache.forEach(p=>{this.itemSizeCache.set(p.key,p.size)}));const c=this.pendingMeasuredCacheIndexes.length>0?Math.min(...this.pendingMeasuredCacheIndexes):0;this.pendingMeasuredCacheIndexes=[];const m=this.measurementsCache.slice(0,c);for(let p=c;p<o;p++){const g=t(p),w=this.options.lanes===1?m[p-1]:this.getFurthestMeasurement(m,p),u=w?w.end+this.options.gap:n+r,S=l.get(g),C=typeof S=="number"?S:this.options.estimateSize(p),x=u+C,k=w?w.lane:p%this.options.lanes;m[p]={index:p,start:u,size:C,end:x,key:g,lane:k}}return this.measurementsCache=m,m},{key:!1,debug:()=>this.options.debug}),this.calculateRange=ae(()=>[this.getMeasurements(),this.getSize(),this.getScrollOffset()],(o,n,r)=>this.range=o.length>0&&n>0?no({measurements:o,outerSize:n,scrollOffset:r}):null,{key:!1,debug:()=>this.options.debug}),this.getIndexes=ae(()=>[this.options.rangeExtractor,this.calculateRange(),this.options.overscan,this.options.count],(o,n,r,t)=>n===null?[]:o({startIndex:n.startIndex,endIndex:n.endIndex,overscan:r,count:t}),{key:!1,debug:()=>this.options.debug}),this.indexFromElement=o=>{const n=this.options.indexAttribute,r=o.getAttribute(n);return r?parseInt(r,10):(console.warn(`Missing attribute name '${n}={index}' on measured element.`),-1)},this._measureElement=(o,n)=>{const r=this.indexFromElement(o),t=this.measurementsCache[r];if(!t)return;const i=t.key,l=this.elementsCache.get(i);l!==o&&(l&&this.observer.unobserve(l),this.observer.observe(o),this.elementsCache.set(i,o)),o.isConnected&&this.resizeItem(r,this.options.measureElement(o,n,this))},this.resizeItem=(o,n)=>{const r=this.measurementsCache[o];if(!r)return;const t=this.itemSizeCache.get(r.key)??r.size,i=n-t;i!==0&&((this.shouldAdjustScrollPositionOnItemSizeChange!==void 0?this.shouldAdjustScrollPositionOnItemSizeChange(r,i,this):r.start<this.getScrollOffset()+this.scrollAdjustments)&&this._scrollToOffset(this.getScrollOffset(),{adjustments:this.scrollAdjustments+=i,behavior:void 0}),this.pendingMeasuredCacheIndexes.push(r.index),this.itemSizeCache=new Map(this.itemSizeCache.set(r.key,n)),this.notify(!1))},this.measureElement=o=>{if(!o){this.elementsCache.forEach((n,r)=>{n.isConnected||(this.observer.unobserve(n),this.elementsCache.delete(r))});return}this._measureElement(o,void 0)},this.getVirtualItems=ae(()=>[this.getIndexes(),this.getMeasurements()],(o,n)=>{const r=[];for(let t=0,i=o.length;t<i;t++){const l=o[t],c=n[l];r.push(c)}return r},{key:!1,debug:()=>this.options.debug}),this.getVirtualItemForOffset=o=>{const n=this.getMeasurements();if(n.length!==0)return Ce(n[st(0,n.length-1,r=>Ce(n[r]).start,o)])},this.getOffsetForAlignment=(o,n)=>{const r=this.getSize(),t=this.getScrollOffset();n==="auto"&&(o<=t?n="start":o>=t+r?n="end":n="start"),n==="start"?o=o:n==="end"?o=o-r:n==="center"&&(o=o-r/2);const i=this.options.horizontal?"scrollWidth":"scrollHeight",c=(this.scrollElement?"document"in this.scrollElement?this.scrollElement.document.documentElement[i]:this.scrollElement[i]:0)-r;return Math.max(Math.min(c,o),0)},this.getOffsetForIndex=(o,n="auto")=>{o=Math.max(0,Math.min(o,this.options.count-1));const r=this.measurementsCache[o];if(!r)return;const t=this.getSize(),i=this.getScrollOffset();if(n==="auto")if(r.end>=i+t-this.options.scrollPaddingEnd)n="end";else if(r.start<=i+this.options.scrollPaddingStart)n="start";else return[i,n];const l=n==="end"?r.end+this.options.scrollPaddingEnd:r.start-this.options.scrollPaddingStart;return[this.getOffsetForAlignment(l,n),n]},this.isDynamicMode=()=>this.elementsCache.size>0,this.cancelScrollToIndex=()=>{this.scrollToIndexTimeoutId!==null&&this.targetWindow&&(this.targetWindow.clearTimeout(this.scrollToIndexTimeoutId),this.scrollToIndexTimeoutId=null)},this.scrollToOffset=(o,{align:n="start",behavior:r}={})=>{this.cancelScrollToIndex(),r==="smooth"&&this.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."),this._scrollToOffset(this.getOffsetForAlignment(o,n),{adjustments:void 0,behavior:r})},this.scrollToIndex=(o,{align:n="auto",behavior:r}={})=>{o=Math.max(0,Math.min(o,this.options.count-1)),this.cancelScrollToIndex(),r==="smooth"&&this.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size.");const t=this.getOffsetForIndex(o,n);if(!t)return;const[i,l]=t;this._scrollToOffset(i,{adjustments:void 0,behavior:r}),r!=="smooth"&&this.isDynamicMode()&&this.targetWindow&&(this.scrollToIndexTimeoutId=this.targetWindow.setTimeout(()=>{if(this.scrollToIndexTimeoutId=null,this.elementsCache.has(this.options.getItemKey(o))){const[m]=Ce(this.getOffsetForIndex(o,l));Ht(m,this.getScrollOffset())||this.scrollToIndex(o,{align:l,behavior:r})}else this.scrollToIndex(o,{align:l,behavior:r})}))},this.scrollBy=(o,{behavior:n}={})=>{this.cancelScrollToIndex(),n==="smooth"&&this.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."),this._scrollToOffset(this.getScrollOffset()+o,{adjustments:void 0,behavior:n})},this.getTotalSize=()=>{var o;const n=this.getMeasurements();let r;return n.length===0?r=this.options.paddingStart:r=this.options.lanes===1?((o=n[n.length-1])==null?void 0:o.end)??0:Math.max(...n.slice(-this.options.lanes).map(t=>t.end)),Math.max(r-this.options.scrollMargin+this.options.paddingEnd,0)},this._scrollToOffset=(o,{adjustments:n,behavior:r})=>{this.options.scrollToFn(o,{behavior:r,adjustments:n},this)},this.measure=()=>{this.itemSizeCache=new Map,this.notify(!1)},this.setOptions(a)}}const st=(e,a,o,n)=>{for(;e<=a;){const r=(e+a)/2|0,t=o(r);if(t<n)e=r+1;else if(t>n)a=r-1;else return r}return e>0?e-1:0};function no({measurements:e,outerSize:a,scrollOffset:o}){const n=e.length-1,t=st(0,n,l=>e[l].start,o);let i=t;for(;i<n&&e[i].end<o+a;)i++;return{startIndex:t,endIndex:i}}const so=typeof document<"u"?d.useLayoutEffect:d.useEffect;function ro(e){const a=d.useReducer(()=>({}),{})[1],o={...e,onChange:(r,t)=>{var i;t?se.flushSync(a):a(),(i=e.onChange)==null||i.call(e,r,t)}},[n]=d.useState(()=>new oo(o));return n.setOptions(o),d.useEffect(()=>n._didMount(),[]),so(()=>n._willUpdate()),n}function ao(e){return ro({observeElementRect:Xt,observeElementOffset:Zt,scrollToFn:to,...e})}function rt(e){let a=d.useRef({value:"",selectionStart:null,selectionEnd:null});return Pt(e,"blur",o=>{let n=o.target;n instanceof HTMLInputElement&&(a.current={value:n.value,selectionStart:n.selectionStart,selectionEnd:n.selectionEnd})}),y(()=>{if(document.activeElement!==e&&e instanceof HTMLInputElement&&e.isConnected){if(e.focus({preventScroll:!0}),e.value!==a.current.value)e.setSelectionRange(e.value.length,e.value.length);else{let{selectionStart:o,selectionEnd:n}=a.current;o!==null&&n!==null&&e.setSelectionRange(o,n)}a.current={value:"",selectionStart:null,selectionEnd:null}}})}var Ae=(e=>(e[e.Left=0]="Left",e[e.Right=2]="Right",e))(Ae||{}),io=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(io||{}),lo=(e=>(e[e.Single=0]="Single",e[e.Multi=1]="Multi",e))(lo||{}),co=(e=>(e[e.Pointer=0]="Pointer",e[e.Focus=1]="Focus",e[e.Other=2]="Other",e))(co||{}),uo=(e=>(e[e.OpenCombobox=0]="OpenCombobox",e[e.CloseCombobox=1]="CloseCombobox",e[e.GoToOption=2]="GoToOption",e[e.SetTyping=3]="SetTyping",e[e.RegisterOption=4]="RegisterOption",e[e.UnregisterOption=5]="UnregisterOption",e[e.SetActivationTrigger=6]="SetActivationTrigger",e[e.UpdateVirtualConfiguration=7]="UpdateVirtualConfiguration",e[e.SetInputElement=8]="SetInputElement",e[e.SetButtonElement=9]="SetButtonElement",e[e.SetOptionsElement=10]="SetOptionsElement",e))(uo||{});function Se(e,a=o=>o){let o=e.activeOptionIndex!==null?e.options[e.activeOptionIndex]:null,n=a(e.options.slice()),r=n.length>0&&n[0].dataRef.current.order!==null?n.sort((i,l)=>i.dataRef.current.order-l.dataRef.current.order):_t(n,i=>i.dataRef.current.domRef.current),t=o?r.indexOf(o):null;return t===-1&&(t=null),{options:r,activeOptionIndex:t}}let mo={1(e){var a;return(a=e.dataRef.current)!=null&&a.disabled||e.comboboxState===1?e:{...e,activeOptionIndex:null,comboboxState:1,isTyping:!1,activationTrigger:2,__demoMode:!1}},0(e){var a,o;if((a=e.dataRef.current)!=null&&a.disabled||e.comboboxState===0)return e;if((o=e.dataRef.current)!=null&&o.value){let n=e.dataRef.current.calculateIndex(e.dataRef.current.value);if(n!==-1)return{...e,activeOptionIndex:n,comboboxState:0,__demoMode:!1}}return{...e,comboboxState:0,__demoMode:!1}},3(e,a){return e.isTyping===a.isTyping?e:{...e,isTyping:a.isTyping}},2(e,a){var o,n,r,t;if((o=e.dataRef.current)!=null&&o.disabled||e.optionsElement&&!((n=e.dataRef.current)!=null&&n.optionsPropsRef.current.static)&&e.comboboxState===1)return e;if(e.virtual){let{options:m,disabled:p}=e.virtual,g=a.focus===T.Specific?a.idx:Ge(a,{resolveItems:()=>m,resolveActiveIndex:()=>{var u,S;return(S=(u=e.activeOptionIndex)!=null?u:m.findIndex(C=>!p(C)))!=null?S:null},resolveDisabled:p,resolveId(){throw new Error("Function not implemented.")}}),w=(r=a.trigger)!=null?r:2;return e.activeOptionIndex===g&&e.activationTrigger===w?e:{...e,activeOptionIndex:g,activationTrigger:w,isTyping:!1,__demoMode:!1}}let i=Se(e);if(i.activeOptionIndex===null){let m=i.options.findIndex(p=>!p.dataRef.current.disabled);m!==-1&&(i.activeOptionIndex=m)}let l=a.focus===T.Specific?a.idx:Ge(a,{resolveItems:()=>i.options,resolveActiveIndex:()=>i.activeOptionIndex,resolveId:m=>m.id,resolveDisabled:m=>m.dataRef.current.disabled}),c=(t=a.trigger)!=null?t:2;return e.activeOptionIndex===l&&e.activationTrigger===c?e:{...e,...i,isTyping:!1,activeOptionIndex:l,activationTrigger:c,__demoMode:!1}},4:(e,a)=>{var o,n,r;if((o=e.dataRef.current)!=null&&o.virtual)return{...e,options:[...e.options,a.payload]};let t=a.payload,i=Se(e,c=>(c.push(t),c));e.activeOptionIndex===null&&(n=e.dataRef.current)!=null&&n.isSelected(a.payload.dataRef.current.value)&&(i.activeOptionIndex=i.options.indexOf(t));let l={...e,...i,activationTrigger:2};return(r=e.dataRef.current)!=null&&r.__demoMode&&e.dataRef.current.value===void 0&&(l.activeOptionIndex=0),l},5:(e,a)=>{var o;if((o=e.dataRef.current)!=null&&o.virtual)return{...e,options:e.options.filter(r=>r.id!==a.id)};let n=Se(e,r=>{let t=r.findIndex(i=>i.id===a.id);return t!==-1&&r.splice(t,1),r});return{...e,...n,activationTrigger:2}},6:(e,a)=>e.activationTrigger===a.trigger?e:{...e,activationTrigger:a.trigger},7:(e,a)=>{var o,n;if(e.virtual===null)return{...e,virtual:{options:a.options,disabled:(o=a.disabled)!=null?o:()=>!1}};if(e.virtual.options===a.options&&e.virtual.disabled===a.disabled)return e;let r=e.activeOptionIndex;if(e.activeOptionIndex!==null){let t=a.options.indexOf(e.virtual.options[e.activeOptionIndex]);t!==-1?r=t:r=null}return{...e,activeOptionIndex:r,virtual:{options:a.options,disabled:(n=a.disabled)!=null?n:()=>!1}}},8:(e,a)=>e.inputElement===a.element?e:{...e,inputElement:a.element},9:(e,a)=>e.buttonElement===a.element?e:{...e,buttonElement:a.element},10:(e,a)=>e.optionsElement===a.element?e:{...e,optionsElement:a.element}},_e=d.createContext(null);_e.displayName="ComboboxActionsContext";function xe(e){let a=d.useContext(_e);if(a===null){let o=new Error(`<${e} /> is missing a parent <Combobox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,xe),o}return a}let at=d.createContext(null);function po(e){let a=ce("VirtualProvider"),{options:o}=a.virtual,[n,r]=d.useMemo(()=>{let m=a.optionsElement;if(!m)return[0,0];let p=window.getComputedStyle(m);return[parseFloat(p.paddingBlockStart||p.paddingTop),parseFloat(p.paddingBlockEnd||p.paddingBottom)]},[a.optionsElement]),t=ao({enabled:o.length!==0,scrollPaddingStart:n,scrollPaddingEnd:r,count:o.length,estimateSize(){return 40},getScrollElement(){return a.optionsElement},overscan:12}),[i,l]=d.useState(0);te(()=>{l(m=>m+1)},[o]);let c=t.getVirtualItems();return c.length===0?null:_.createElement(at.Provider,{value:t},_.createElement("div",{style:{position:"relative",width:"100%",height:`${t.getTotalSize()}px`},ref:m=>{m&&a.activationTrigger!==0&&a.activeOptionIndex!==null&&o.length>a.activeOptionIndex&&t.scrollToIndex(a.activeOptionIndex)}},c.map(m=>{var p;return _.createElement(d.Fragment,{key:m.key},_.cloneElement((p=e.children)==null?void 0:p.call(e,{...e.slot,option:o[m.index]}),{key:`${i}-${m.key}`,"data-index":m.index,"aria-setsize":o.length,"aria-posinset":m.index+1,style:{position:"absolute",top:0,left:0,transform:`translateY(${m.start}px)`,overflowAnchor:"none"}}))})))}let pe=d.createContext(null);pe.displayName="ComboboxDataContext";function ce(e){let a=d.useContext(pe);if(a===null){let o=new Error(`<${e} /> is missing a parent <Combobox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,ce),o}return a}function ho(e,a){return ie(a.type,mo,e,a)}let bo=d.Fragment;function xo(e,a){var o,n;let r=Lt(),{value:t,defaultValue:i,onChange:l,form:c,name:m,by:p,disabled:g=r||!1,onClose:w,__demoMode:u=!1,multiple:S=!1,immediate:C=!1,virtual:x=null,nullable:k,...V}=e,$=pt(i),[P=S?[]:void 0,L]=ht(t,l,$),[O,v]=d.useReducer(ho,{dataRef:d.createRef(),comboboxState:u?0:1,isTyping:!1,options:[],virtual:x?{options:x.options,disabled:(o=x.disabled)!=null?o:()=>!1}:null,activeOptionIndex:null,activationTrigger:2,inputElement:null,buttonElement:null,optionsElement:null,__demoMode:u}),z=d.useRef(!1),J=d.useRef({static:!1,hold:!1}),q=mt(p),X=y(b=>x?p===null?x.options.indexOf(b):x.options.findIndex(j=>q(j,b)):O.options.findIndex(j=>q(j.dataRef.current.value,b))),Z=d.useCallback(b=>ie(f.mode,{1:()=>P.some(j=>q(j,b)),0:()=>q(P,b)}),[P]),Y=y(b=>O.activeOptionIndex===X(b)),f=d.useMemo(()=>({...O,immediate:C,optionsPropsRef:J,value:P,defaultValue:$,disabled:g,mode:S?1:0,virtual:x?O.virtual:null,get activeOptionIndex(){if(z.current&&O.activeOptionIndex===null&&(x?x.options.length>0:O.options.length>0)){if(x){let j=x.options.findIndex(G=>{var fe,We;return!((We=(fe=x.disabled)==null?void 0:fe.call(x,G))!=null&&We)});if(j!==-1)return j}let b=O.options.findIndex(j=>!j.dataRef.current.disabled);if(b!==-1)return b}return O.activeOptionIndex},calculateIndex:X,compare:q,isSelected:Z,isActive:Y}),[P,$,g,S,u,O,x]);te(()=>{var b;x&&v({type:7,options:x.options,disabled:(b=x.disabled)!=null?b:null})},[x,x==null?void 0:x.options,x==null?void 0:x.disabled]),te(()=>{O.dataRef.current=f},[f]);let E=f.comboboxState===0;St(E,[f.buttonElement,f.inputElement,f.optionsElement],()=>A.closeCombobox());let U=d.useMemo(()=>{var b,j,G;return{open:f.comboboxState===0,disabled:g,activeIndex:f.activeOptionIndex,activeOption:f.activeOptionIndex===null?null:f.virtual?f.virtual.options[(b=f.activeOptionIndex)!=null?b:0]:(G=(j=f.options[f.activeOptionIndex])==null?void 0:j.dataRef.current.value)!=null?G:null,value:P}},[f,g,P]),ee=y(()=>{if(f.activeOptionIndex!==null){if(A.setIsTyping(!1),f.virtual)h(f.virtual.options[f.activeOptionIndex]);else{let{dataRef:b}=f.options[f.activeOptionIndex];h(b.current.value)}A.goToOption(T.Specific,f.activeOptionIndex)}}),oe=y(()=>{v({type:0}),z.current=!0}),re=y(()=>{v({type:1}),z.current=!1,w==null||w()}),ue=y(b=>{v({type:3,isTyping:b})}),me=y((b,j,G)=>(z.current=!1,b===T.Specific?v({type:2,focus:T.Specific,idx:j,trigger:G}):v({type:2,focus:b,trigger:G}))),B=y((b,j)=>(v({type:4,payload:{id:b,dataRef:j}}),()=>{f.isActive(j.current.value)&&(z.current=!0),v({type:5,id:b})})),h=y(b=>ie(f.mode,{0(){return L==null?void 0:L(b)},1(){let j=f.value.slice(),G=j.findIndex(fe=>q(fe,b));return G===-1?j.push(b):j.splice(G,1),L==null?void 0:L(j)}})),Q=y(b=>{v({type:6,trigger:b})}),N=y(b=>{v({type:8,element:b})}),H=y(b=>{v({type:9,element:b})}),I=y(b=>{v({type:10,element:b})}),A=d.useMemo(()=>({onChange:h,registerOption:B,goToOption:me,setIsTyping:ue,closeCombobox:re,openCombobox:oe,setActivationTrigger:Q,selectActiveOption:ee,setInputElement:N,setButtonElement:H,setOptionsElement:I}),[]),[ne,it]=Ft(),lt=a===null?{}:{ref:a},dt=d.useCallback(()=>{if($!==void 0)return L==null?void 0:L($)},[L,$]),ct=be();return _.createElement(it,{value:ne,props:{htmlFor:(n=f.inputElement)==null?void 0:n.id},slot:{open:f.comboboxState===0,disabled:g}},_.createElement(ft,null,_.createElement(_e.Provider,{value:A},_.createElement(pe.Provider,{value:f},_.createElement(Nt,{value:ie(f.comboboxState,{0:ve.Open,1:ve.Closed})},m!=null&&_.createElement(zt,{disabled:g,data:P!=null?{[m]:P}:{},form:c,onReset:dt}),ct({ourProps:lt,theirProps:V,slot:U,defaultTag:bo,name:"Combobox"}))))))}let fo="input";function go(e,a){var o,n,r,t,i;let l=ce("Combobox.Input"),c=xe("Combobox.Input"),m=d.useId(),p=Bt(),{id:g=p||`headlessui-combobox-input-${m}`,onChange:w,displayValue:u,disabled:S=l.disabled||!1,autoFocus:C=!1,type:x="text",...k}=e,V=d.useRef(null),$=ye(V,a,gt(),c.setInputElement),P=nt(l.inputElement),L=bt(),O=y(()=>{c.onChange(null),l.optionsElement&&(l.optionsElement.scrollTop=0),c.goToOption(T.Nothing)}),v=d.useMemo(()=>{var h;return typeof u=="function"&&l.value!==void 0?(h=u(l.value))!=null?h:"":typeof l.value=="string"?l.value:""},[l.value,u]);Je(([h,Q],[N,H])=>{if(l.isTyping)return;let I=V.current;I&&((H===0&&Q===1||h!==N)&&(I.value=h),requestAnimationFrame(()=>{if(l.isTyping||!I||(P==null?void 0:P.activeElement)!==I)return;let{selectionStart:A,selectionEnd:ne}=I;Math.abs((ne??0)-(A??0))===0&&A===0&&I.setSelectionRange(I.value.length,I.value.length)}))},[v,l.comboboxState,P,l.isTyping]),Je(([h],[Q])=>{if(h===0&&Q===1){if(l.isTyping)return;let N=V.current;if(!N)return;let H=N.value,{selectionStart:I,selectionEnd:A,selectionDirection:ne}=N;N.value="",N.value=H,ne!==null?N.setSelectionRange(I,A,ne):N.setSelectionRange(I,A)}},[l.comboboxState]);let z=d.useRef(!1),J=y(()=>{z.current=!0}),q=y(()=>{L.nextFrame(()=>{z.current=!1})}),X=y(h=>{switch(c.setIsTyping(!0),h.key){case W.Enter:if(l.comboboxState!==0||z.current)return;if(h.preventDefault(),h.stopPropagation(),l.activeOptionIndex===null){c.closeCombobox();return}c.selectActiveOption(),l.mode===0&&c.closeCombobox();break;case W.ArrowDown:return h.preventDefault(),h.stopPropagation(),ie(l.comboboxState,{0:()=>c.goToOption(T.Next),1:()=>c.openCombobox()});case W.ArrowUp:return h.preventDefault(),h.stopPropagation(),ie(l.comboboxState,{0:()=>c.goToOption(T.Previous),1:()=>{se.flushSync(()=>c.openCombobox()),l.value||c.goToOption(T.Last)}});case W.Home:if(h.shiftKey)break;return h.preventDefault(),h.stopPropagation(),c.goToOption(T.First);case W.PageUp:return h.preventDefault(),h.stopPropagation(),c.goToOption(T.First);case W.End:if(h.shiftKey)break;return h.preventDefault(),h.stopPropagation(),c.goToOption(T.Last);case W.PageDown:return h.preventDefault(),h.stopPropagation(),c.goToOption(T.Last);case W.Escape:return l.comboboxState!==0?void 0:(h.preventDefault(),l.optionsElement&&!l.optionsPropsRef.current.static&&h.stopPropagation(),l.mode===0&&l.value===null&&O(),c.closeCombobox());case W.Tab:if(l.comboboxState!==0)return;l.mode===0&&l.activationTrigger!==1&&c.selectActiveOption(),c.closeCombobox();break}}),Z=y(h=>{w==null||w(h),l.mode===0&&h.target.value===""&&O(),c.openCombobox()}),Y=y(h=>{var Q,N,H;let I=(Q=h.relatedTarget)!=null?Q:Xe.find(A=>A!==h.currentTarget);if(!((N=l.optionsElement)!=null&&N.contains(I))&&!((H=l.buttonElement)!=null&&H.contains(I))&&l.comboboxState===0)return h.preventDefault(),l.mode===0&&l.value===null&&O(),c.closeCombobox()}),f=y(h=>{var Q,N,H;let I=(Q=h.relatedTarget)!=null?Q:Xe.find(A=>A!==h.currentTarget);(N=l.buttonElement)!=null&&N.contains(I)||(H=l.optionsElement)!=null&&H.contains(I)||l.disabled||l.immediate&&l.comboboxState!==0&&L.microTask(()=>{se.flushSync(()=>c.openCombobox()),c.setActivationTrigger(1)})}),E=Be(),U=Vt(),{isFocused:ee,focusProps:oe}=tt({autoFocus:C}),{isHovered:re,hoverProps:ue}=ot({isDisabled:S}),me=d.useMemo(()=>({open:l.comboboxState===0,disabled:S,hover:re,focus:ee,autofocus:C}),[l,re,ee,C,S]),B=Fe({ref:$,id:g,role:"combobox",type:x,"aria-controls":(o=l.optionsElement)==null?void 0:o.id,"aria-expanded":l.comboboxState===0,"aria-activedescendant":l.activeOptionIndex===null?void 0:l.virtual?(n=l.options.find(h=>!h.dataRef.current.disabled&&l.compare(h.dataRef.current.value,l.virtual.options[l.activeOptionIndex])))==null?void 0:n.id:(r=l.options[l.activeOptionIndex])==null?void 0:r.id,"aria-labelledby":E,"aria-describedby":U,"aria-autocomplete":"list",defaultValue:(i=(t=e.defaultValue)!=null?t:l.defaultValue!==void 0?u==null?void 0:u(l.defaultValue):null)!=null?i:l.defaultValue,disabled:S||void 0,autoFocus:C,onCompositionStart:J,onCompositionEnd:q,onKeyDown:X,onChange:Z,onFocus:f,onBlur:Y},oe,ue);return be()({ourProps:B,theirProps:k,slot:me,defaultTag:fo,name:"Combobox.Input"})}let vo="button";function yo(e,a){var o;let n=ce("Combobox.Button"),r=xe("Combobox.Button"),t=ye(a,r.setButtonElement),i=d.useId(),{id:l=`headlessui-combobox-button-${i}`,disabled:c=n.disabled||!1,autoFocus:m=!1,...p}=e,g=rt(n.inputElement),w=y(v=>{switch(v.key){case W.Space:case W.Enter:v.preventDefault(),v.stopPropagation(),n.comboboxState===1&&se.flushSync(()=>r.openCombobox()),g();return;case W.ArrowDown:v.preventDefault(),v.stopPropagation(),n.comboboxState===1&&(se.flushSync(()=>r.openCombobox()),n.value||r.goToOption(T.First)),g();return;case W.ArrowUp:v.preventDefault(),v.stopPropagation(),n.comboboxState===1&&(se.flushSync(()=>r.openCombobox()),n.value||r.goToOption(T.Last)),g();return;case W.Escape:if(n.comboboxState!==0)return;v.preventDefault(),n.optionsElement&&!n.optionsPropsRef.current.static&&v.stopPropagation(),se.flushSync(()=>r.closeCombobox()),g();return;default:return}}),u=y(v=>{v.preventDefault(),!At(v.currentTarget)&&(v.button===Ae.Left&&(n.comboboxState===0?r.closeCombobox():r.openCombobox()),g())}),S=Be([l]),{isFocusVisible:C,focusProps:x}=tt({autoFocus:m}),{isHovered:k,hoverProps:V}=ot({isDisabled:c}),{pressed:$,pressProps:P}=ut({disabled:c}),L=d.useMemo(()=>({open:n.comboboxState===0,active:$||n.comboboxState===0,disabled:c,value:n.value,hover:k,focus:C}),[n,k,C,$,c]),O=Fe({ref:t,id:l,type:It(e,n.buttonElement),tabIndex:-1,"aria-haspopup":"listbox","aria-controls":(o=n.optionsElement)==null?void 0:o.id,"aria-expanded":n.comboboxState===0,"aria-labelledby":S,disabled:c||void 0,autoFocus:m,onMouseDown:u,onKeyDown:w},x,V,P);return be()({ourProps:O,theirProps:p,slot:L,defaultTag:vo,name:"Combobox.Button"})}let wo="div",Co=Qe.RenderStrategy|Qe.Static;function So(e,a){var o,n,r;let t=d.useId(),{id:i=`headlessui-combobox-options-${t}`,hold:l=!1,anchor:c,portal:m=!1,modal:p=!0,transition:g=!1,...w}=e,u=ce("Combobox.Options"),S=xe("Combobox.Options"),C=vt(c);C&&(m=!0);let[x,k]=yt(C),[V,$]=d.useState(null),P=wt(),L=ye(a,C?x:null,S.setOptionsElement,$),O=nt(u.optionsElement),v=Rt(),[z,J]=Mt(g,V,v!==null?(v&ve.Open)===ve.Open:u.comboboxState===0);jt(z,u.inputElement,S.closeCombobox);let q=u.__demoMode?!1:p&&u.comboboxState===0;kt(q,O);let X=u.__demoMode?!1:p&&u.comboboxState===0;Ct(X,{allowed:d.useCallback(()=>[u.inputElement,u.buttonElement,u.optionsElement],[u.inputElement,u.buttonElement,u.optionsElement])}),te(()=>{var B;u.optionsPropsRef.current.static=(B=e.static)!=null?B:!1},[u.optionsPropsRef,e.static]),te(()=>{u.optionsPropsRef.current.hold=l},[u.optionsPropsRef,l]),$t(u.comboboxState===0,{container:u.optionsElement,accept(B){return B.getAttribute("role")==="option"?NodeFilter.FILTER_REJECT:B.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(B){B.setAttribute("role","none")}});let Z=Be([(o=u.buttonElement)==null?void 0:o.id]),Y=d.useMemo(()=>({open:u.comboboxState===0,option:void 0}),[u.comboboxState]),f=y(()=>{S.setActivationTrigger(0)}),E=y(B=>{B.preventDefault(),S.setActivationTrigger(0)}),U=Fe(C?P():{},{"aria-labelledby":Z,role:"listbox","aria-multiselectable":u.mode===1?!0:void 0,id:i,ref:L,style:{...w.style,...k,"--input-width":Ue(u.inputElement,!0).width,"--button-width":Ue(u.buttonElement,!0).width},onWheel:u.activationTrigger===0?void 0:f,onMouseDown:E,...Dt(J)}),ee=z&&u.comboboxState===1,oe=Ye(ee,(n=u.virtual)==null?void 0:n.options),re=Ye(ee,u.value),ue=y(B=>u.compare(re,B));if(u.virtual){if(oe===void 0)throw new Error("Missing `options` in virtual mode");Object.assign(w,{children:_.createElement(pe.Provider,{value:oe!==u.virtual.options?{...u,virtual:{...u.virtual,options:oe}}:u},_.createElement(po,{slot:Y},w.children))})}let me=be();return _.createElement(Ot,{enabled:m?e.static||z:!1},_.createElement(pe.Provider,{value:u.mode===1?u:{...u,isSelected:ue}},me({ourProps:U,theirProps:{...w,children:_.createElement(Kt,{freeze:ee},typeof w.children=="function"?(r=w.children)==null?void 0:r.call(w,Y):w.children)},slot:Y,defaultTag:wo,features:Co,visible:z,name:"Combobox.Options"})))}let jo="div";function ko(e,a){var o,n,r,t;let i=ce("Combobox.Option"),l=xe("Combobox.Option"),c=d.useId(),{id:m=`headlessui-combobox-option-${c}`,value:p,disabled:g=(r=(n=(o=i.virtual)==null?void 0:o.disabled)==null?void 0:n.call(o,p))!=null?r:!1,order:w=null,...u}=e,S=rt(i.inputElement),C=i.virtual?i.activeOptionIndex===i.calculateIndex(p):i.activeOptionIndex===null?!1:((t=i.options[i.activeOptionIndex])==null?void 0:t.id)===m,x=i.isSelected(p),k=d.useRef(null),V=xt({disabled:g,value:p,domRef:k,order:w}),$=d.useContext(at),P=ye(a,k,$?$.measureElement:null),L=y(()=>{l.setIsTyping(!1),l.onChange(p)});te(()=>l.registerOption(m,V),[V,m]);let O=d.useRef(!(i.virtual||i.__demoMode));te(()=>{if(!i.virtual&&!i.__demoMode)return He().requestAnimationFrame(()=>{O.current=!0})},[i.virtual,i.__demoMode]),te(()=>{if(O.current&&i.comboboxState===0&&C&&i.activationTrigger!==0)return He().requestAnimationFrame(()=>{var E,U;(U=(E=k.current)==null?void 0:E.scrollIntoView)==null||U.call(E,{block:"nearest"})})},[k,C,i.comboboxState,i.activationTrigger,i.activeOptionIndex]);let v=y(E=>{E.preventDefault(),E.button===Ae.Left&&(g||(L(),Et()||requestAnimationFrame(()=>S()),i.mode===0&&l.closeCombobox()))}),z=y(()=>{if(g)return l.goToOption(T.Nothing);let E=i.calculateIndex(p);l.goToOption(T.Specific,E)}),J=Tt(),q=y(E=>J.update(E)),X=y(E=>{if(!J.wasMoved(E)||g||C)return;let U=i.calculateIndex(p);l.goToOption(T.Specific,U,0)}),Z=y(E=>{J.wasMoved(E)&&(g||C&&(i.optionsPropsRef.current.hold||l.goToOption(T.Nothing)))}),Y=d.useMemo(()=>({active:C,focus:C,selected:x,disabled:g}),[C,x,g]),f={id:m,ref:P,role:"option",tabIndex:g===!0?void 0:-1,"aria-disabled":g===!0?!0:void 0,"aria-selected":x,disabled:void 0,onMouseDown:v,onFocus:z,onPointerEnter:q,onMouseEnter:q,onPointerMove:X,onMouseMove:X,onPointerLeave:Z,onMouseLeave:Z};return be()({ourProps:f,theirProps:u,slot:Y,defaultTag:jo,name:"Combobox.Option"})}let Oo=he(xo),Ve=he(yo),R=he(go),Eo=we,M=he(So),D=he(ko),F=Object.assign(Oo,{Input:R,Button:Ve,Label:Eo,Options:M,Option:D});const je=[{id:1,name:"Durward Reynolds"},{id:2,name:"Kenton Towne"},{id:3,name:"Therese Wunsch"},{id:4,name:"Benedict Kessler"},{id:5,name:"Katelyn Rohan"}],Po=()=>{const[e,a]=d.useState(je[0]),[o,n]=d.useState(""),r=o===""?je:je.filter(t=>t.name.toLowerCase().includes(o.toLowerCase()));return s.jsx(s.Fragment,{children:s.jsxs(K,{children:[s.jsx("h4",{className:"text-lg font-semibold mb-2",children:"Rendering Active Option Details"}),s.jsx(F,{value:e,onChange:()=>a,onClose:()=>n(""),children:({activeOption:t})=>s.jsxs(s.Fragment,{children:[s.jsx(R,{"aria-label":"Assignee",displayValue:i=>i==null?void 0:i.name,onChange:i=>n(i.target.value),className:"w-full ui-form-control rounded-md"}),s.jsx(M,{anchor:"top",className:"origin-top border transition duration-200 ease-out empty:invisible data-[closed]:scale-95 data-[closed]:opacity-0 absolute z-10 mt-1 max-h-60 w-[var(--input-width)]  overflow-auto rounded-md bg-white dark:bg-dark py-1 text-base shadow-md dark:shadow-dark-md ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm empty:invisible",children:r.map(i=>s.jsx(D,{value:i,className:"group flex cursor-pointer ui-dropdown-item bg-hover dark:bg-hover text-ld hover:text-primary dark:hover:text-primary  data-[focus]:bg-hover data-[focus]:text-primary",children:i.name},i.id))}),t&&s.jsxs("p",{className:"text-ld",children:["The currently focused user is: ",s.jsx("b",{children:t.name})]})]})})]})})},Io=()=>s.jsx("div",{children:s.jsx(de,{children:`
    
    import {
    Combobox,
    ComboboxInput,
    ComboboxOption,
    ComboboxOptions,
    } from "@headlessui/react";
    import { useState } from "react";

    const people = [
    { id: 1, name: "Durward Reynolds" },
    { id: 2, name: "Kenton Towne" },
    { id: 3, name: "Therese Wunsch" },
    { id: 4, name: "Benedict Kessler" },
    { id: 5, name: "Katelyn Rohan" },
    ];

    const [selectedPerson, setSelectedPerson] = useState<string>(people[0].name);
    const [query, setQuery] = useState("");

    const filteredPeople =
        query === ""
      ? people
      : people.filter((person) =>
          person.name.toLowerCase().includes(query.toLowerCase())
        );

    <form action="/projects/1/assignee" method="post" className="flex gap-3">
          <Combobox
            name="assignee"
            value={selectedPerson}
            onChange={(value) => setSelectedPerson(value as string)}
            onClose={() => setQuery("")}
          >
            <ComboboxInput
              aria-label="Assignee"
              displayValue={() => selectedPerson}
              onChange={(event) => setQuery(event.target.value)}
              className="w-full ui-form-control rounded-md"
            />
            <ComboboxOptions
              anchor="bottom"
              className="absolute z-10 mt-1 max-h-60 w-[var(--input-width)] overflow-auto rounded-md bg-white dark:bg-dark py-1 text-base shadow-md dark:shadow-dark-md ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm empty:invisible"
            >
              {filteredPeople.map((person) => (
                <ComboboxOption
                  key={person.id}
                  value={person.name}
                  className="group flex cursor-pointer ui-dropdown-item bg-hover dark:bg-hover text-ld hover:text-primary dark:hover:text-primary  data-[focus]:bg-hover data-[focus]:text-primary"
                >
                  {person.name}
                </ComboboxOption>
              ))}
            </ComboboxOptions>
          </Combobox>
          <button type="submit" className="ui-button bg-primary">Submit</button>
    </form>    
        `})}),ke=[{id:1,name:"Durward Reynolds"},{id:2,name:"Kenton Towne"},{id:3,name:"Therese Wunsch"},{id:4,name:"Benedict Kessler"},{id:5,name:"Katelyn Rohan"}],To=()=>{const[e,a]=d.useState(ke[0].name),[o,n]=d.useState(""),r=o===""?ke:ke.filter(t=>t.name.toLowerCase().includes(o.toLowerCase()));return s.jsx("div",{children:s.jsxs(K,{children:[s.jsxs("div",{className:"flex items-center justify-between mb-2",children:[s.jsx("h4",{className:"text-lg font-semibold",children:"HTML Forms"}),s.jsx(Io,{})]}),s.jsxs("form",{action:"/projects/1/assignee",method:"post",className:"flex gap-3",children:[s.jsxs(F,{name:"assignee",value:e,onChange:t=>a(t),onClose:()=>n(""),children:[s.jsx(R,{"aria-label":"Assignee",displayValue:()=>e,onChange:t=>n(t.target.value),className:"w-full ui-form-control rounded-md"}),s.jsx(M,{anchor:"bottom",className:"absolute z-10 mt-1 max-h-60 w-[var(--input-width)] overflow-auto rounded-md bg-white dark:bg-dark py-1 text-base shadow-md dark:shadow-dark-md ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm empty:invisible",children:r.map(t=>s.jsx(D,{value:t.name,className:"group flex cursor-pointer ui-dropdown-item bg-hover dark:bg-hover text-ld hover:text-primary dark:hover:text-primary  data-[focus]:bg-hover data-[focus]:text-primary",children:t.name},t.id))})]}),s.jsx("button",{type:"submit",className:"ui-button bg-primary",children:"Submit"})]})]})})},No=()=>s.jsx("div",{children:s.jsx(de,{children:`
    
    
    import {
    Combobox,
    ComboboxButton,
    ComboboxInput,
    ComboboxOption,
    ComboboxOptions,
    } from "@headlessui/react";
    import { Icon } from "@iconify/react";
    import clsx from "clsx";
    import { useState } from "react";
    interface Person {
    id: number;
    name: string;
    }

    const people: Person[] = [
    { id: 1, name: "Tom Cook" },
    { id: 2, name: "Wade Cooper" },
    { id: 3, name: "Tanya Fox" },
    { id: 4, name: "Arlene Mccoy" },
    { id: 5, name: "Devon Webb" },
    ];

    const [query, setQuery] = useState<string>('');
    const [selected, setSelected] = useState<Person>(people[1]);

    const filteredPeople =
    query === ''
      ? people
      : people.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase());
        });

        <div className="mx-auto">
         <Combobox value={selected} onChange={(value: Person) => setSelected(value)} onClose={() => setQuery('')}>
            <div className="relative">
              <ComboboxInput
                className={clsx(
                  'w-full ui-form-control rounded-md',
                  'focus:outline-none focus:dark:ring-2 focus:dark:ring-white/25'
                )}
                displayValue={(person: Person) => person?.name}
                onChange={(event) => setQuery(event.target.value)}
              />
              <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">
                <Icon icon="solar:alt-arrow-down-outline" height={20} />
              </ComboboxButton>
            </div>

            <ComboboxOptions
              anchor="bottom"
              transition
              className={clsx(
                'absolute z-10 mt-1 max-h-60 w-[var(--input-width)] overflow-auto rounded-md bg-white dark:bg-dark py-1 text-base shadow-md dark:shadow-dark-md ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm',
                'transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0'
              )}
            >
              {filteredPeople.map((person) => (
                <ComboboxOption
                  key={person.id}
                  value={person}
                  className="group flex cursor-pointer ui-dropdown-item bg-hover dark:bg-hover hover:text-primary text-primary dark:text-primary data-[focus]:bg-hover data-[focus]:text-primary"
                >
                  <Icon icon="solar:check-read-linear" className="invisible  group-data-[selected]:visible" height={20} />
                  <div className="text-sm text-ld hover:text-primary data-[focus]:text-primary data-[focus]:text-primary">{person.name}</div>
                </ComboboxOption>
              ))}
            </ComboboxOptions>
          </Combobox>
        </div>    
    
        `})}),Oe=[{id:1,name:"Tom Cook"},{id:2,name:"Wade Cooper"},{id:3,name:"Tanya Fox"},{id:4,name:"Arlene Mccoy"},{id:5,name:"Devon Webb"}],Ro=()=>{const[e,a]=d.useState(""),[o,n]=d.useState(Oe[1]),r=e===""?Oe:Oe.filter(t=>t.name.toLowerCase().includes(e.toLowerCase()));return s.jsx("div",{children:s.jsxs(K,{children:[s.jsxs("div",{className:"flex items-center justify-between mb-2",children:[s.jsx("h4",{className:"text-lg font-semibold",children:"Basic"}),s.jsx(No,{})]}),s.jsx("div",{className:"",children:s.jsxs(F,{value:o,onChange:t=>n(t),onClose:()=>a(""),children:[s.jsxs("div",{className:"relative",children:[s.jsx(R,{className:Ze("w-full ui-form-control rounded-md","focus:outline-none focus:dark:ring-2 focus:dark:ring-white/25"),displayValue:t=>t==null?void 0:t.name,onChange:t=>a(t.target.value)}),s.jsx(Ve,{className:"group absolute inset-y-0 right-0 px-2.5",children:s.jsx(qe,{icon:"solar:alt-arrow-down-outline",height:20})})]}),s.jsx(M,{anchor:"bottom",transition:!0,className:Ze("absolute z-10 mt-1 max-h-60 w-[var(--input-width)] overflow-auto rounded-md bg-white dark:bg-dark py-1 text-base shadow-md dark:shadow-dark-md ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm","transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0"),children:r.map(t=>s.jsxs(D,{value:t,className:"group flex cursor-pointer ui-dropdown-item bg-hover dark:bg-hover hover:text-primary text-primary dark:text-primary data-[focus]:bg-hover data-[focus]:text-primary",children:[s.jsx(qe,{icon:"solar:check-read-linear",className:"invisible  group-data-[selected]:visible",height:20}),s.jsx("div",{className:"text-sm text-ld hover:text-primary data-[focus]:text-primary data-[focus]:text-primary",children:t.name})]},t.id))})]})})]})})},Ee=["Durward Reynolds","Kenton Towne","Therese Wunsch","Benedict Kessler","Katelyn Rohan"],Mo=()=>{const[e,a]=d.useState(Ee[0]),[o,n]=d.useState(""),r=o===""?Ee:Ee.filter(i=>i.toLowerCase().includes(o.toLowerCase())),t=i=>{a(i),n("")};return s.jsx("div",{children:s.jsxs(K,{children:[s.jsx("div",{className:"flex items-center justify-between mb-2",children:s.jsx("h4",{className:"text-lg font-semibold",children:"Binding Values"})}),s.jsxs(F,{value:e,onChange:t,children:[s.jsx(R,{"aria-label":"Assignee",onChange:i=>n(i.target.value),value:o,className:"w-full ui-form-control rounded-md"}),s.jsx(M,{anchor:"bottom",className:"origin-top border transition duration-200 ease-out empty:invisible data-[closed]:scale-95 data-[closed]:opacity-0 absolute z-10 mt-1 max-h-60 w-[var(--input-width)]  overflow-auto rounded-md bg-white dark:bg-dark py-1 text-base shadow-md dark:shadow-dark-md ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm empty:invisible",children:r.map(i=>s.jsx(D,{value:i,className:"group flex cursor-pointer ui-dropdown-item bg-hover dark:bg-hover text-ld hover:text-primary dark:hover:text-primary  data-[focus]:bg-hover data-[focus]:text-primary",children:i},i))})]})]})})},Pe=[{id:1,name:"Durward Reynolds"},{id:2,name:"Kenton Towne"},{id:3,name:"Therese Wunsch"},{id:4,name:"Benedict Kessler"},{id:5,name:"Katelyn Rohan"}],Do=()=>{const[e,a]=d.useState(Pe[0]),[o,n]=d.useState(""),r=o===""?Pe:Pe.filter(t=>t.name.toLowerCase().includes(o.toLowerCase()));return s.jsx(s.Fragment,{children:s.jsxs(K,{children:[s.jsx("h4",{className:"text-lg font-semibold mb-2",children:"Binding Objects as Values"}),s.jsxs(F,{value:e,onChange:()=>a,onClose:()=>n(""),children:[s.jsx(R,{"aria-label":"Assignee",displayValue:t=>t==null?void 0:t.name,onChange:t=>n(t.target.value),className:"w-full ui-form-control rounded-md"}),s.jsx(M,{anchor:"bottom",className:"origin-top border transition duration-200 ease-out empty:invisible data-[closed]:scale-95 data-[closed]:opacity-0 absolute z-10 mt-1 max-h-60 w-[var(--input-width)]  overflow-auto rounded-md bg-white dark:bg-dark py-1 text-base shadow-md dark:shadow-dark-md ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm empty:invisible",children:r.map(t=>s.jsx(D,{value:t,className:"group flex cursor-pointer ui-dropdown-item bg-hover dark:bg-hover text-ld hover:text-primary dark:hover:text-primary  data-[focus]:bg-hover data-[focus]:text-primary",children:t.name},t.id))})]})]})})},Ie=[{id:1,name:"Durward Reynolds"},{id:2,name:"Kenton Towne"},{id:3,name:"Therese Wunsch"},{id:4,name:"Benedict Kessler"},{id:5,name:"Katelyn Rohan"}],$o=()=>{const[e,a]=d.useState(Ie[0]),[o,n]=d.useState(""),r=o===""?Ie:Ie.filter(t=>t.name.toLowerCase().includes(o.toLowerCase()));return s.jsx("div",{children:s.jsxs(K,{children:[s.jsx("div",{className:"flex items-center justify-between mb-2",children:s.jsx("h4",{className:"text-lg font-semibold",children:"Open On Focus"})}),s.jsxs(F,{immediate:!0,value:e,onChange:()=>a,onClose:()=>n(""),children:[s.jsx(R,{"aria-label":"Assignee",displayValue:t=>t==null?void 0:t.name,onChange:t=>n(t.target.value),className:"w-full ui-form-control rounded-md"}),s.jsx(M,{anchor:"bottom",className:"origin-top border transition duration-200 ease-out empty:invisible data-[closed]:scale-95 data-[closed]:opacity-0 absolute z-10 mt-1 max-h-60 w-[var(--input-width)]  overflow-auto rounded-md bg-white dark:bg-dark py-1 text-base shadow-md dark:shadow-dark-md ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm empty:invisible",children:r.map(t=>s.jsx(D,{value:t,className:"group flex cursor-pointer ui-dropdown-item bg-hover dark:bg-hover text-ld hover:text-primary dark:hover:text-primary  data-[focus]:bg-hover data-[focus]:text-primary",children:t.name},t.id))})]})]})})},Lo=()=>s.jsx("div",{children:s.jsx(de,{children:`
    
    import  { useState } from "react";
    import {
    Field,
    Combobox,
    ComboboxInput,
    ComboboxOptions,
    ComboboxOption,
    Label,
    } from "@headlessui/react";


    // Define the type for the person object
    interface Person {
    id: number;
    name: string;
    }

    const people: Person[] = [
    { id: 1, name: "Durward Reynolds" },
    { id: 2, name: "Kenton Towne" },
    { id: 3, name: "Therese Wunsch" },
    { id: 4, name: "Benedict Kessler" },
    { id: 5, name: "Katelyn Rohan" },
    ];
    
    
    const [selectedPerson, setSelectedPerson] = useState<Person | null>(
        people[0]
      );
      const [query, setQuery] = useState("");
    
      const filteredPeople =
        query === ""
          ? people
          : people.filter((person) => {
              return person.name.toLowerCase().includes(query.toLowerCase());
            });


    <Field>
          <Combobox
            value={selectedPerson}
            onChange={setSelectedPerson}
            onClose={() => setQuery("")}
          >
            <ComboboxInput
              displayValue={(person: Person | null) =>
                person ? person.name : ""
              }
              onChange={(event) => setQuery(event.target.value)}
              className="w-full ui-form-control rounded-md"
            />
            <ComboboxOptions anchor="top start" className="absolute z-10 mt-1 max-h-60 w-[var(--input-width)] overflow-auto rounded-md bg-white dark:bg-dark py-1 text-base shadow-md dark:shadow-dark-md ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm empty:invisible">
              {filteredPeople.map((person) => (
                <ComboboxOption
                  key={person.id}
                  value={person}
                  className="group flex cursor-pointer ui-dropdown-item bg-hover dark:bg-hover text-ld hover:text-primary dark:hover:text-primary  data-[focus]:bg-hover data-[focus]:text-primary"
                >
                  {person.name}
                </ComboboxOption>
              ))}
            </ComboboxOptions>
          </Combobox>
    </Field>        
        
        `})}),Te=[{id:1,name:"Durward Reynolds"},{id:2,name:"Kenton Towne"},{id:3,name:"Therese Wunsch"},{id:4,name:"Benedict Kessler"},{id:5,name:"Katelyn Rohan"}],zo=()=>{const[e,a]=d.useState(Te[0]),[o,n]=d.useState(""),r=o===""?Te:Te.filter(t=>t.name.toLowerCase().includes(o.toLowerCase()));return s.jsx("div",{children:s.jsxs(K,{children:[s.jsxs("div",{className:"flex items-center justify-between mb-2",children:[s.jsx("h4",{className:"text-lg font-semibold",children:"Dropdown Position"}),s.jsx(Lo,{})]}),s.jsx(le,{children:s.jsxs(F,{value:e,onChange:a,onClose:()=>n(""),children:[s.jsx(R,{displayValue:t=>t?t.name:"",onChange:t=>n(t.target.value),className:"w-full ui-form-control rounded-md"}),s.jsx(M,{anchor:"top start",className:"absolute z-10 mt-1 max-h-60 w-[var(--input-width)] overflow-auto rounded-md bg-white dark:bg-dark py-1 text-base shadow-md dark:shadow-dark-md ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm empty:invisible",children:r.map(t=>s.jsx(D,{value:t,className:"group flex cursor-pointer ui-dropdown-item bg-hover dark:bg-hover text-ld hover:text-primary dark:hover:text-primary  data-[focus]:bg-hover data-[focus]:text-primary",children:t.name},t.id))})]})})]})})},Ne=[{id:1,name:"Durward Reynolds"},{id:2,name:"Kenton Towne"},{id:3,name:"Therese Wunsch"},{id:4,name:"Benedict Kessler"},{id:5,name:"Katelyn Rohan"}],Ko=()=>{const[e,a]=d.useState(Ne[0]),[o,n]=d.useState(""),r=o===""?Ne:Ne.filter(t=>t.name.toLowerCase().includes(o.toLowerCase()));return s.jsx("div",{children:s.jsxs(K,{children:[s.jsx("div",{className:"flex items-center justify-between mb-2",children:s.jsx("h4",{className:"text-lg font-semibold",children:"Dropdown Width"})}),s.jsx(le,{children:s.jsxs(F,{value:e,onChange:a,onClose:()=>n(""),children:[s.jsx(R,{displayValue:t=>t?t.name:"",onChange:t=>n(t.target.value),className:"w-full ui-form-control rounded-md"}),s.jsx(M,{anchor:"bottom",className:"absolute z-10 mt-1 max-h-60 w-56 overflow-auto rounded-md bg-white dark:bg-dark py-1 text-base shadow-md dark:shadow-dark-md ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm empty:invisible",children:r.map(t=>s.jsx(D,{value:t,className:"group flex cursor-pointer ui-dropdown-item bg-hover dark:bg-hover text-ld hover:text-primary dark:hover:text-primary  data-[focus]:bg-hover data-[focus]:text-primary",children:t.name},t.id))})]})})]})})},Fo=()=>s.jsx("div",{children:s.jsx(de,{children:`
    
    import  { useState } from "react";
    import CardBox from "src/components/shared/CardBox";
    import {
    Field,
    Combobox,
    ComboboxInput,
    ComboboxOptions,
    ComboboxOption,
    Label,
    } from "@headlessui/react";

    // Define the type for the person object
    interface Person {
    id: number;
    name: string;
    }

    const people: Person[] = [
    { id: 1, name: "Durward Reynolds" },
    { id: 2, name: "Kenton Towne" },
    { id: 3, name: "Therese Wunsch" },
    { id: 4, name: "Benedict Kessler" },
    { id: 5, name: "Katelyn Rohan" },
    ];

    const [selectedPerson, setSelectedPerson] = useState<Person | null>(
        people[0]
    );
    const [query, setQuery] = useState("");

    const filteredPeople =
        query === ""
        ? people
        : people.filter((person) => {
            return person.name.toLowerCase().includes(query.toLowerCase());
            });
    
    <Field className="flex gap-3  items-center" disabled>
        <Label className="text-ld">Assignee:</Label>
        <Combobox
        value={selectedPerson}
        onChange={setSelectedPerson}
        onClose={() => setQuery("")}
        >
        <ComboboxInput
            displayValue={(person: Person | null) =>
            person ? person.name : ""
            }
            onChange={(event) => setQuery(event.target.value)}
            className="w-full ui-form-control rounded-md"
        />
        <ComboboxOptions anchor="bottom" className="absolute z-10 mt-1 max-h-60 w-[var(--input-width)] overflow-auto rounded-md bg-white dark:bg-dark py-1 text-base shadow-md dark:shadow-dark-md ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm empty:invisible">
            {filteredPeople.map((person) => (
            <ComboboxOption
                key={person.id}
                value={person}
                className="group flex cursor-pointer ui-dropdown-item bg-hover dark:bg-hover text-ld hover:text-primary dark:hover:text-primary  data-[focus]:bg-hover data-[focus]:text-primary"
            >
                {person.name}
            </ComboboxOption>
            ))}
        </ComboboxOptions>
        </Combobox>
    </Field>        
    
    `})}),Re=[{id:1,name:"Durward Reynolds"},{id:2,name:"Kenton Towne"},{id:3,name:"Therese Wunsch"},{id:4,name:"Benedict Kessler"},{id:5,name:"Katelyn Rohan"}],Bo=()=>{const[e,a]=d.useState(Re[0]),[o,n]=d.useState(""),r=o===""?Re:Re.filter(t=>t.name.toLowerCase().includes(o.toLowerCase()));return s.jsx("div",{children:s.jsxs(K,{children:[s.jsxs("div",{className:"flex items-center justify-between mb-2",children:[s.jsx("h4",{className:"text-lg font-semibold",children:"Disabled"}),s.jsx(Fo,{})]}),s.jsxs(le,{className:"flex gap-3  items-center",disabled:!0,children:[s.jsx(we,{className:"text-ld",children:"Select:"}),s.jsxs(F,{value:e,onChange:a,onClose:()=>n(""),children:[s.jsx(R,{displayValue:t=>t?t.name:"",onChange:t=>n(t.target.value),className:"w-full ui-form-control rounded-md"}),s.jsx(M,{anchor:"bottom",className:"absolute z-10 mt-1 max-h-60 w-[var(--input-width)] overflow-auto rounded-md bg-white dark:bg-dark py-1 text-base shadow-md dark:shadow-dark-md ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm empty:invisible",children:r.map(t=>s.jsx(D,{value:t,className:"group flex cursor-pointer ui-dropdown-item bg-hover dark:bg-hover text-ld hover:text-primary dark:hover:text-primary  data-[focus]:bg-hover data-[focus]:text-primary",children:t.name},t.id))})]})]})]})})},Ao=()=>s.jsx("div",{children:s.jsx(de,{children:`
    
    import  { useState } from "react";
    import {
    Field,
    Combobox,
    ComboboxInput,
    ComboboxOptions,
    ComboboxOption,
    Label,
    } from "@headlessui/react";
    import ComboWithLableCode from "./Codes/ComboWithLableCode";

    // Define the type for the person object
    interface Person {
    id: number;
    name: string;
    available: boolean;
    }

    const people: Person[] = [
    { id: 1, name: "Durward Reynolds", available: true },
    { id: 2, name: "Kenton Towne", available: true },
    { id: 3, name: "Therese Wunsch", available: true },
    { id: 4, name: "Benedict Kessler", available: false },
    { id: 5, name: "Katelyn Rohan", available: true },
    ];  
    
    
    const [selectedPerson, setSelectedPerson] = useState<Person | null>(
    people[0]
    );
    const [query, setQuery] = useState("");

    const filteredPeople =
        query === ""
        ? people
        : people.filter((person) => {
            return person.name.toLowerCase().includes(query.toLowerCase());
            });

    <Field className="flex gap-3  items-center">
          <Label className="text-ld">Assignee:</Label>
          <Combobox
            value={selectedPerson}
            onChange={setSelectedPerson}
            onClose={() => setQuery("")}
          >
            <ComboboxInput
              displayValue={(person: Person | null) =>
                person ? person.name : ""
              }
              onChange={(event) => setQuery(event.target.value)}
              className="w-full ui-form-control rounded-md"
            />
            <ComboboxOptions
              anchor="bottom"
              className="absolute z-10 mt-1 max-h-60 w-[var(--input-width)] overflow-auto rounded-md bg-white dark:bg-dark py-1 text-base shadow-md dark:shadow-dark-md ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm empty:invisible"
            >
              {filteredPeople.map((person) => (
                <ComboboxOption
                  key={person.id}
                  value={person}
                  disabled={!person.available}
                  className="group flex cursor-pointer ui-dropdown-item bg-hover dark:bg-hover text-ld hover:text-primary dark:hover:text-primary  data-[focus]:bg-hover data-[focus]:text-primary  data-[disabled]:opacity-50 data-[disabled]:hover:text-bodytext"
                >
                  {person.name}
                </ComboboxOption>
              ))}
            </ComboboxOptions>
          </Combobox>
        </Field>        

        
        `})}),Me=[{id:1,name:"Durward Reynolds",available:!0},{id:2,name:"Kenton Towne",available:!0},{id:3,name:"Therese Wunsch",available:!0},{id:4,name:"Benedict Kessler",available:!1},{id:5,name:"Katelyn Rohan",available:!0}],_o=()=>{const[e,a]=d.useState(Me[0]),[o,n]=d.useState(""),r=o===""?Me:Me.filter(t=>t.name.toLowerCase().includes(o.toLowerCase()));return s.jsx("div",{children:s.jsxs(K,{children:[s.jsxs("div",{className:"flex items-center justify-between mb-2",children:[s.jsx("h4",{className:"text-lg font-semibold",children:"Disabled Combo Option"}),s.jsx(Ao,{})]}),s.jsxs(le,{className:"flex gap-3  items-center",children:[s.jsx(we,{className:"text-ld",children:"Assignee:"}),s.jsxs(F,{value:e,onChange:a,onClose:()=>n(""),children:[s.jsx(R,{displayValue:t=>t?t.name:"",onChange:t=>n(t.target.value),className:"w-full ui-form-control rounded-md"}),s.jsx(M,{anchor:"bottom",className:"absolute z-10 mt-1 max-h-60 w-[var(--input-width)] overflow-auto rounded-md bg-white dark:bg-dark py-1 text-base shadow-md dark:shadow-dark-md ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm empty:invisible",children:r.map(t=>s.jsx(D,{value:t,disabled:!t.available,className:"group flex cursor-pointer ui-dropdown-item bg-hover dark:bg-hover text-ld hover:text-primary dark:hover:text-primary  data-[focus]:bg-hover data-[focus]:text-primary  data-[disabled]:opacity-50 data-[disabled]:hover:text-bodytext",children:t.name},t.id))})]})]})]})})},ge=[{id:1,name:"Durward Reynolds"},{id:2,name:"Kenton Towne"},{id:3,name:"Therese Wunsch"},{id:4,name:"Benedict Kessler"},{id:5,name:"Katelyn Rohan"}],Vo=()=>{const[e,a]=d.useState([ge[0],ge[1]]),[o,n]=d.useState(""),r=o===""?ge:ge.filter(t=>t.name.toLowerCase().includes(o.toLowerCase()));return s.jsx("div",{children:s.jsxs(K,{children:[s.jsx("div",{className:"flex items-center justify-between mb-2",children:s.jsx("h4",{className:"text-lg font-semibold",children:"Selecting Multiple Values"})}),s.jsxs(F,{multiple:!0,value:e,onChange:a,onClose:()=>n(""),children:[e.length>0&&s.jsx("ul",{children:e.map(t=>s.jsx("li",{children:t.name},t.id))}),s.jsx(R,{"aria-label":"Assignees",onChange:t=>n(t.target.value),className:"w-full ui-form-control rounded-md"}),s.jsx(M,{anchor:"bottom",className:"origin-top border transition duration-200 ease-out empty:invisible data-[closed]:scale-95 data-[closed]:opacity-0 absolute z-10 mt-1 max-h-60 w-[var(--input-width)]  overflow-auto rounded-md bg-white dark:bg-dark py-1 text-base shadow-md dark:shadow-dark-md ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm empty:invisible",children:r.map(t=>s.jsx(D,{value:t,className:"group flex cursor-pointer ui-dropdown-item bg-hover dark:bg-hover text-ld hover:text-primary dark:hover:text-primary  data-[focus]:bg-hover data-[focus]:text-primary",children:t.name},t.id))})]})]})})},De=[{id:1,name:"Durward Reynolds"},{id:2,name:"Kenton Towne"},{id:3,name:"Therese Wunsch"},{id:4,name:"Benedict Kessler"},{id:5,name:"Katelyn Rohan"}],Wo=d.forwardRef((e,a)=>s.jsx("button",{ref:a,...e})),qo=()=>{const[e,a]=d.useState(De[0]),[o,n]=d.useState(""),r=o===""?De:De.filter(t=>t.name.toLowerCase().includes(o.toLowerCase()));return s.jsxs(K,{children:[s.jsx("h4",{className:"text-lg font-semibold mb-2",children:"Rendering As Different Elements"}),s.jsxs(F,{value:e,onChange:()=>a,onClose:()=>n(""),children:[s.jsxs("span",{className:"flex gap-3",children:[s.jsx(R,{"aria-label":"Assignee",displayValue:t=>t==null?void 0:t.name,onChange:t=>n(t.target.value),className:"w-full ui-form-control rounded-md"}),s.jsx(Ve,{as:Wo,className:"ui-button bg-primary text-white",children:"Open"})]}),s.jsx(M,{as:"ul",className:"origin-top border transition duration-200 ease-out empty:invisible data-[closed]:scale-95 data-[closed]:opacity-0 absolute z-10 mt-1 max-h-60 w-[var(--input-width)]  overflow-auto rounded-md bg-white dark:bg-dark py-1 text-base shadow-md dark:shadow-dark-md ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm empty:invisible",children:r.map(t=>s.jsx(D,{as:"li",value:t,className:"group flex cursor-pointer ui-dropdown-item bg-hover dark:bg-hover text-ld hover:text-primary dark:hover:text-primary  data-[focus]:bg-hover data-[focus]:text-primary",children:t.name},t.id))})]})]})},$e=[{id:1,name:"Durward Reynolds"},{id:2,name:"Kenton Towne"},{id:3,name:"Therese Wunsch"},{id:4,name:"Benedict Kessler"},{id:5,name:"Katelyn Rohan"}],Qo=()=>{const[e,a]=d.useState($e[0]),[o,n]=d.useState(""),r=o===""?$e:$e.filter(t=>t.name.toLowerCase().includes(o.toLowerCase()));return s.jsx(s.Fragment,{children:s.jsxs(K,{children:[s.jsx("h4",{className:"text-lg font-semibold mb-2",children:"Virtual Scrolling"}),s.jsxs(F,{value:e,virtual:{options:r},onChange:()=>a,onClose:()=>n(""),children:[s.jsx(R,{"aria-label":"Assignee",displayValue:t=>t==null?void 0:t.name,onChange:t=>n(t.target.value),className:"w-full ui-form-control rounded-md"}),s.jsx(M,{anchor:"bottom",className:"origin-top border transition duration-200 ease-out empty:invisible data-[closed]:scale-95 data-[closed]:opacity-0 absolute z-10 mt-1 max-h-60 w-[var(--input-width)]  overflow-auto rounded-md bg-white dark:bg-dark py-1 text-base shadow-md dark:shadow-dark-md ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm empty:invisible",children:({option:t})=>s.jsx(D,{value:t,className:"group flex cursor-pointer ui-dropdown-item bg-hover dark:bg-hover text-ld hover:text-primary dark:hover:text-primary  data-[focus]:bg-hover data-[focus]:text-primary",children:t.name})})]})]})})},Le=[{id:1,name:"Durward Reynolds"},{id:2,name:"Kenton Towne"},{id:3,name:"Therese Wunsch"},{id:4,name:"Benedict Kessler"},{id:5,name:"Katelyn Rohan"}],Ho=()=>{const[e,a]=d.useState(Le[0]),[o,n]=d.useState(""),r=o===""?Le:Le.filter(t=>t.name.toLowerCase().includes(o.toLowerCase()));return s.jsx("div",{children:s.jsxs(K,{children:[s.jsx("div",{className:"flex items-center justify-between mb-2",children:s.jsx("h4",{className:"text-lg font-semibold",children:"With FramerMotion"})}),s.jsx(F,{value:e,onChange:a,onClose:()=>n(""),children:({open:t})=>s.jsxs(s.Fragment,{children:[s.jsx(R,{displayValue:i=>i?i.name:"",onChange:i=>n(i.target.value),className:"w-full ui-form-control rounded-md"}),s.jsx(Wt,{children:t&&s.jsx(M,{static:!0,as:qt.div,initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.95},anchor:"bottom",className:"origin-top empty:invisible data-[closed]:scale-95 data-[closed]:opacity-0 absolute z-10 mt-1 max-h-60 w-[var(--input-width)]  overflow-auto rounded-md bg-white dark:bg-dark py-1 text-base shadow-md dark:shadow-dark-md ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm empty:invisible",onAnimationComplete:()=>n(""),children:r.map(i=>s.jsx(D,{value:i,className:"group flex cursor-pointer ui-dropdown-item bg-hover dark:bg-hover text-ld hover:text-primary dark:hover:text-primary  data-[focus]:bg-hover data-[focus]:text-primary",children:i.name},i.id))})})]})})]})})},Uo=()=>s.jsx("div",{children:s.jsx(de,{children:`
    
    import  { useState } from "react";
    import CardBox from "src/components/shared/CardBox";
    import {
    Field,
    Combobox,
    ComboboxInput,
    ComboboxOptions,
    ComboboxOption,
    Label,
    } from "@headlessui/react";

    // Define the type for the person object
    interface Person {
    id: number;
    name: string;
    }

    const people: Person[] = [
    { id: 1, name: "Durward Reynolds" },
    { id: 2, name: "Kenton Towne" },
    { id: 3, name: "Therese Wunsch" },
    { id: 4, name: "Benedict Kessler" },
    { id: 5, name: "Katelyn Rohan" },
    ];

    const [selectedPerson, setSelectedPerson] = useState<Person | null>(
        people[0]
    );
    const [query, setQuery] = useState("");

    const filteredPeople =
        query === ""
        ? people
        : people.filter((person) => {
            return person.name.toLowerCase().includes(query.toLowerCase());
            });
    
    <Field className="flex gap-3  items-center" >
        <Label className="text-ld">Assignee:</Label>
        <Combobox
        value={selectedPerson}
        onChange={setSelectedPerson}
        onClose={() => setQuery("")}
        >
        <ComboboxInput
            displayValue={(person: Person | null) =>
            person ? person.name : ""
            }
            onChange={(event) => setQuery(event.target.value)}
            className="w-full ui-form-control rounded-md"
        />
        <ComboboxOptions anchor="bottom" className="absolute z-10 mt-1 max-h-60 w-[var(--input-width)] overflow-auto rounded-md bg-white dark:bg-dark py-1 text-base shadow-md dark:shadow-dark-md ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm empty:invisible">
            {filteredPeople.map((person) => (
            <ComboboxOption
                key={person.id}
                value={person}
                className="group flex cursor-pointer ui-dropdown-item bg-hover dark:bg-hover text-ld hover:text-primary dark:hover:text-primary  data-[focus]:bg-hover data-[focus]:text-primary"
            >
                {person.name}
            </ComboboxOption>
            ))}
        </ComboboxOptions>
        </Combobox>
    </Field>        
    
    `})}),ze=[{id:1,name:"Durward Reynolds"},{id:2,name:"Kenton Towne"},{id:3,name:"Therese Wunsch"},{id:4,name:"Benedict Kessler"},{id:5,name:"Katelyn Rohan"}],Go=()=>{const[e,a]=d.useState(ze[0]),[o,n]=d.useState(""),r=o===""?ze:ze.filter(t=>t.name.toLowerCase().includes(o.toLowerCase()));return s.jsx("div",{children:s.jsxs(K,{children:[s.jsxs("div",{className:"flex items-center justify-between mb-2",children:[s.jsx("h4",{className:"text-lg font-semibold",children:"With Label"}),s.jsx(Uo,{})]}),s.jsxs(le,{className:"flex gap-3  items-center",children:[s.jsx(we,{className:"text-ld",children:"Assignee:"}),s.jsxs(F,{value:e,onChange:a,onClose:()=>n(""),children:[s.jsx(R,{displayValue:t=>t?t.name:"",onChange:t=>n(t.target.value),className:"w-full ui-form-control rounded-md"}),s.jsx(M,{anchor:"bottom",className:"absolute z-10 mt-1 max-h-60 w-[var(--input-width)] overflow-auto rounded-md bg-white dark:bg-dark py-1 text-base shadow-md dark:shadow-dark-md ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm empty:invisible",children:r.map(t=>s.jsx(D,{value:t,className:"group flex cursor-pointer ui-dropdown-item bg-hover dark:bg-hover text-ld hover:text-primary dark:hover:text-primary  data-[focus]:bg-hover data-[focus]:text-primary",children:t.name},t.id))})]})]})]})})},Ke=[{id:1,name:"Durward Reynolds"},{id:2,name:"Kenton Towne"},{id:3,name:"Therese Wunsch"},{id:4,name:"Benedict Kessler"},{id:5,name:"Katelyn Rohan"}],Jo=()=>{const[e,a]=d.useState(Ke[0]),[o,n]=d.useState(""),r=o===""?Ke:Ke.filter(t=>t.name.toLowerCase().includes(o.toLowerCase()));return s.jsx("div",{children:s.jsxs(K,{children:[s.jsx("div",{className:"flex items-center justify-between mb-2",children:s.jsx("h4",{className:"text-lg font-semibold",children:"With Transitions"})}),s.jsx(le,{children:s.jsxs(F,{value:e,onChange:a,onClose:()=>n(""),children:[s.jsx(R,{displayValue:t=>t?t.name:"",onChange:t=>n(t.target.value),className:"w-full ui-form-control rounded-md"}),s.jsx(M,{transition:!0,anchor:"bottom",className:"origin-top border transition duration-200 ease-out empty:invisible data-[closed]:scale-95 data-[closed]:opacity-0 absolute z-10 mt-1 max-h-60 w-[var(--input-width)]  overflow-auto rounded-md bg-white dark:bg-dark py-1 text-base shadow-md dark:shadow-dark-md ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm empty:invisible",children:r.map(t=>s.jsx(D,{value:t,className:"group flex cursor-pointer ui-dropdown-item bg-hover dark:bg-hover text-ld hover:text-primary dark:hover:text-primary  data-[focus]:bg-hover data-[focus]:text-primary",children:t.name},t.id))})]})})]})})},Dn=()=>{const e=[{to:"/",title:"Home"},{title:"Combobox"}];return s.jsxs(s.Fragment,{children:[s.jsx(Qt,{title:"Combobox",items:e}),s.jsxs("div",{className:"grid grid-cols-12 gap-30",children:[s.jsx("div",{className:"lg:col-span-4 md:col-span-6 col-span-12",children:s.jsx(Ro,{})}),s.jsx("div",{className:"lg:col-span-4 md:col-span-6 col-span-12",children:s.jsx(Go,{})}),s.jsx("div",{className:"lg:col-span-4 md:col-span-6 col-span-12",children:s.jsx(Bo,{})}),s.jsx("div",{className:"lg:col-span-4 md:col-span-6 col-span-12",children:s.jsx(_o,{})}),s.jsx("div",{className:"lg:col-span-4 md:col-span-6 col-span-12",children:s.jsx(To,{})}),s.jsx("div",{className:"lg:col-span-4 md:col-span-6 col-span-12",children:s.jsx(zo,{})}),s.jsx("div",{className:"lg:col-span-4 md:col-span-6 col-span-12",children:s.jsx(Ko,{})}),s.jsx("div",{className:"lg:col-span-4 md:col-span-6 col-span-12",children:s.jsx(Jo,{})}),s.jsx("div",{className:"lg:col-span-4 md:col-span-6 col-span-12",children:s.jsx(Ho,{})}),s.jsx("div",{className:"lg:col-span-4 md:col-span-6 col-span-12",children:s.jsx(Mo,{})}),s.jsx("div",{className:"lg:col-span-4 md:col-span-6 col-span-12",children:s.jsx($o,{})}),s.jsx("div",{className:"lg:col-span-4 md:col-span-6 col-span-12",children:s.jsx(qo,{})}),s.jsx("div",{className:"lg:col-span-4 md:col-span-6 col-span-12",children:s.jsx(Do,{})}),s.jsx("div",{className:"lg:col-span-4 md:col-span-6 col-span-12",children:s.jsx(Po,{})}),s.jsx("div",{className:"lg:col-span-4 md:col-span-6 col-span-12",children:s.jsx(Qo,{})}),s.jsx("div",{className:"lg:col-span-4 md:col-span-6 col-span-12",children:s.jsx(Vo,{})})]})]})};export{Dn as default};
