import{r,a as F,j as e}from"./index-CbdGNVhE.js";import{C as z}from"./CardBox-DWufozWR.js";import{C as R}from"./CodeModal-CQLFjqdl.js";import{$ as me,a as je}from"./useFocusRing-CXvZpW1I.js";import{w as we}from"./use-active-press-B171Jcqa.js";import{O as re,K,s as Q,o as E,n as Z,L as W,_ as ce,u as V,c as Ne}from"./render-NI4Jg5tu.js";import{e as Ce}from"./use-resolve-button-type-CgW3LA2y.js";import{y as H}from"./use-sync-refs-BkeMvBOG.js";import{f as Pe}from"./use-is-mounted-C8NUJwad.js";import{f as ue,s as Ie}from"./hidden-BpERx2SG.js";import{_ as J,T as X,P as G,F as j}from"./focus-management-CnjimqFj.js";import{u as ke}from"./owner-fH536Zf5.js";import{o as w}from"./keyboard-C1Wiwm26.js";import{B as Le}from"./BreadcrumbComp-B5-q4JsV.js";import"./Card-DYrQhspN.js";import"./toConsumableArray-CGYUFXbV.js";import"./extends-CF3RwP-h.js";function Ae({onFocus:t}){let[a,s]=r.useState(!0),i=Pe();return a?F.createElement(ue,{as:"button",type:"button",features:Ie.Focusable,onFocus:d=>{d.preventDefault();let n,o=50;function u(){if(o--<=0){n&&cancelAnimationFrame(n);return}if(t()){if(cancelAnimationFrame(n),!i.current)return;s(!1);return}n=requestAnimationFrame(u)}n=requestAnimationFrame(u)}}):null}const he=r.createContext(null);function ze(){return{groups:new Map,get(t,a){var s;let i=this.groups.get(t);i||(i=new Map,this.groups.set(t,i));let d=(s=i.get(a))!=null?s:0;i.set(a,d+1);let n=Array.from(i.keys()).indexOf(a);function o(){let u=i.get(a);u>1?i.set(a,u-1):i.delete(a)}return[n,o]}}}function Se({children:t}){let a=r.useRef(ze());return r.createElement(he.Provider,{value:a},t)}function pe(t){let a=r.useContext(he);if(!a)throw new Error("You must wrap your component in a <StableCollection>");let s=r.useId(),[i,d]=a.current.get(t,s);return r.useEffect(()=>d,[]),i}var $e=(t=>(t[t.Forwards=0]="Forwards",t[t.Backwards=1]="Backwards",t))($e||{}),Ee=(t=>(t[t.Less=-1]="Less",t[t.Equal=0]="Equal",t[t.Greater=1]="Greater",t))(Ee||{}),Me=(t=>(t[t.SetSelectedIndex=0]="SetSelectedIndex",t[t.RegisterTab=1]="RegisterTab",t[t.UnregisterTab=2]="UnregisterTab",t[t.RegisterPanel=3]="RegisterPanel",t[t.UnregisterPanel=4]="UnregisterPanel",t))(Me||{});let De={0(t,a){var s;let i=J(t.tabs,h=>h.current),d=J(t.panels,h=>h.current),n=i.filter(h=>{var y;return!((y=h.current)!=null&&y.hasAttribute("disabled"))}),o={...t,tabs:i,panels:d};if(a.index<0||a.index>i.length-1){let h=V(Math.sign(a.index-t.selectedIndex),{[-1]:()=>1,0:()=>V(Math.sign(a.index),{[-1]:()=>0,0:()=>0,1:()=>1}),1:()=>0});if(n.length===0)return o;let y=V(h,{0:()=>i.indexOf(n[0]),1:()=>i.indexOf(n[n.length-1])});return{...o,selectedIndex:y===-1?t.selectedIndex:y}}let u=i.slice(0,a.index),N=[...i.slice(a.index),...u].find(h=>n.includes(h));if(!N)return o;let g=(s=i.indexOf(N))!=null?s:t.selectedIndex;return g===-1&&(g=t.selectedIndex),{...o,selectedIndex:g}},1(t,a){if(t.tabs.includes(a.tab))return t;let s=t.tabs[t.selectedIndex],i=J([...t.tabs,a.tab],n=>n.current),d=t.selectedIndex;return t.info.current.isControlled||(d=i.indexOf(s),d===-1&&(d=t.selectedIndex)),{...t,tabs:i,selectedIndex:d}},2(t,a){return{...t,tabs:t.tabs.filter(s=>s!==a.tab)}},3(t,a){return t.panels.includes(a.panel)?t:{...t,panels:J([...t.panels,a.panel],s=>s.current)}},4(t,a){return{...t,panels:t.panels.filter(s=>s!==a.panel)}}},te=r.createContext(null);te.displayName="TabsDataContext";function O(t){let a=r.useContext(te);if(a===null){let s=new Error(`<${t} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(s,O),s}return a}let ae=r.createContext(null);ae.displayName="TabsActionsContext";function se(t){let a=r.useContext(ae);if(a===null){let s=new Error(`<${t} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(s,se),s}return a}function Ge(t,a){return V(a.type,De,t,a)}let Fe="div";function Oe(t,a){let{defaultIndex:s=0,vertical:i=!1,manual:d=!1,onChange:n,selectedIndex:o=null,...u}=t;const N=i?"vertical":"horizontal",g=d?"manual":"auto";let h=o!==null,y=Q({isControlled:h}),M=H(a),[b,p]=r.useReducer(Ge,{info:y,selectedIndex:o??s,tabs:[],panels:[]}),q=r.useMemo(()=>({selectedIndex:b.selectedIndex}),[b.selectedIndex]),B=Q(n||(()=>{})),L=Q(b.tabs),f=r.useMemo(()=>({orientation:N,activation:g,...b}),[N,g,b]),D=E(x=>(p({type:1,tab:x}),()=>p({type:2,tab:x}))),U=E(x=>(p({type:3,panel:x}),()=>p({type:4,panel:x}))),v=E(x=>{T.current!==x&&B.current(x),h||p({type:0,index:x})}),T=Q(h?t.selectedIndex:b.selectedIndex),S=r.useMemo(()=>({registerTab:D,registerPanel:U,change:v}),[]);Z(()=>{p({type:0,index:o??s})},[o]),Z(()=>{if(T.current===void 0||b.tabs.length<=0)return;let x=J(b.tabs,A=>A.current);x.some((A,$)=>b.tabs[$]!==A)&&v(x.indexOf(b.tabs[T.current]))});let ee={ref:M},_=W();return F.createElement(Se,null,F.createElement(ae.Provider,{value:S},F.createElement(te.Provider,{value:f},f.tabs.length<=0&&F.createElement(Ae,{onFocus:()=>{var x,A;for(let $ of L.current)if(((x=$.current)==null?void 0:x.tabIndex)===0)return(A=$.current)==null||A.focus(),!0;return!1}}),_({ourProps:ee,theirProps:u,slot:q,defaultTag:Fe,name:"Tabs"}))))}let Re="div";function qe(t,a){let{orientation:s,selectedIndex:i}=O("Tab.List"),d=H(a),n=r.useMemo(()=>({selectedIndex:i}),[i]),o=t,u={ref:d,role:"tablist","aria-orientation":s};return W()({ourProps:u,theirProps:o,slot:n,defaultTag:Re,name:"Tabs.List"})}let Be="button";function Ue(t,a){var s,i;let d=r.useId(),{id:n=`headlessui-tabs-tab-${d}`,disabled:o=!1,autoFocus:u=!1,...N}=t,{orientation:g,activation:h,selectedIndex:y,tabs:M,panels:b}=O("Tab"),p=se("Tab"),q=O("Tab"),[B,L]=r.useState(null),f=r.useRef(null),D=H(f,a,L);Z(()=>p.registerTab(f),[p,f]);let U=pe("tabs"),v=M.indexOf(f);v===-1&&(v=U);let T=v===y,S=E(l=>{var C;let Y=l();if(Y===X.Success&&h==="auto"){let ve=(C=ke(f))==null?void 0:C.activeElement,ne=q.tabs.findIndex(Te=>Te.current===ve);ne!==-1&&p.change(ne)}return Y}),ee=E(l=>{let C=M.map(Y=>Y.current).filter(Boolean);if(l.key===w.Space||l.key===w.Enter){l.preventDefault(),l.stopPropagation(),p.change(v);return}switch(l.key){case w.Home:case w.PageUp:return l.preventDefault(),l.stopPropagation(),S(()=>G(C,j.First));case w.End:case w.PageDown:return l.preventDefault(),l.stopPropagation(),S(()=>G(C,j.Last))}if(S(()=>V(g,{vertical(){return l.key===w.ArrowUp?G(C,j.Previous|j.WrapAround):l.key===w.ArrowDown?G(C,j.Next|j.WrapAround):X.Error},horizontal(){return l.key===w.ArrowLeft?G(C,j.Previous|j.WrapAround):l.key===w.ArrowRight?G(C,j.Next|j.WrapAround):X.Error}}))===X.Success)return l.preventDefault()}),_=r.useRef(!1),x=E(()=>{var l;_.current||(_.current=!0,(l=f.current)==null||l.focus({preventScroll:!0}),p.change(v),Ne(()=>{_.current=!1}))}),A=E(l=>{l.preventDefault()}),{isFocusVisible:$,focusProps:xe}=me({autoFocus:u}),{isHovered:ie,hoverProps:be}=je({isDisabled:o}),{pressed:oe,pressProps:fe}=we({disabled:o}),ge=r.useMemo(()=>({selected:T,hover:ie,active:oe,focus:$,autofocus:u,disabled:o}),[T,ie,$,oe,u,o]),ye=ce({ref:D,onKeyDown:ee,onMouseDown:A,onClick:x,id:n,role:"tab",type:Ce(t,B),"aria-controls":(i=(s=b[v])==null?void 0:s.current)==null?void 0:i.id,"aria-selected":T,tabIndex:T?0:-1,disabled:o||void 0,autoFocus:u},xe,be,fe);return W()({ourProps:ye,theirProps:N,slot:ge,defaultTag:Be,name:"Tabs.Tab"})}let _e="div";function Je(t,a){let{selectedIndex:s}=O("Tab.Panels"),i=H(a),d=r.useMemo(()=>({selectedIndex:s}),[s]),n=t,o={ref:i};return W()({ourProps:o,theirProps:n,slot:d,defaultTag:_e,name:"Tabs.Panels"})}let Ve="div",Ke=re.RenderStrategy|re.Static;function We(t,a){var s,i,d,n;let o=r.useId(),{id:u=`headlessui-tabs-panel-${o}`,tabIndex:N=0,...g}=t,{selectedIndex:h,tabs:y,panels:M}=O("Tab.Panel"),b=se("Tab.Panel"),p=r.useRef(null),q=H(p,a);Z(()=>b.registerPanel(p),[b,p]);let B=pe("panels"),L=M.indexOf(p);L===-1&&(L=B);let f=L===h,{isFocusVisible:D,focusProps:U}=me(),v=r.useMemo(()=>({selected:f,focus:D}),[f,D]),T=ce({ref:q,id:u,role:"tabpanel","aria-labelledby":(i=(s=y[L])==null?void 0:s.current)==null?void 0:i.id,tabIndex:f?N:-1},U),S=W();return!f&&((d=g.unmount)==null||d)&&!((n=g.static)!=null&&n)?F.createElement(ue,{"aria-hidden":"true",...T}):S({ourProps:T,theirProps:g,slot:v,defaultTag:Ve,features:Ke,visible:f,name:"Tabs.Panel"})}let He=K(Ue),P=K(Oe),I=K(qe),k=K(Je),m=K(We),c=Object.assign(He,{Group:P,List:I,Panels:k,Panel:m});const Ye=()=>e.jsx("div",{children:e.jsx(R,{children:`
    
    import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";  
    
    const categories = [
    {
        name: "Recent",
        posts: [
        {
            id: 1,
            title: "Does drinking coffee make you smarter?",
            date: "5h ago",
            commentCount: 5,
            shareCount: 2,
        },
        {
            id: 2,
            title: "So you've bought coffee... now what?",
            date: "2h ago",
            commentCount: 3,
            shareCount: 2,
        },
        ],
    },
    {
        name: "Popular",
        posts: [
        {
            id: 1,
            title: "Is tech making coffee better or worse?",
            date: "Jan 7",
            commentCount: 29,
            shareCount: 16,
        },
        {
            id: 2,
            title: "The most innovative things happening in coffee",
            date: "Mar 19",
            commentCount: 24,
            shareCount: 12,
        },
        ],
    },
    {
        name: "Trending",
        posts: [
        {
            id: 1,
            title: "Ask Me Anything: 10 answers to your questions about coffee",
            date: "2d ago",
            commentCount: 9,
            shareCount: 5,
        },
        {
            id: 2,
            title: "The worst advice we've ever heard about coffee",
            date: "4d ago",
            commentCount: 1,
            shareCount: 2,
        },
        ],
    },
    ];

    <div className="w-full">
          <TabGroup>
            <TabList className="flex gap-3">
              {categories.map(({ name }) => (
                <Tab
                  key={name}
                  className="rounded-md py-2 px-4 text-sm font-semibold text-ld focus:outline-none data-[selected]:bg-primary data-[hover]:text-white data-[selected]:text-white data-[hover]:bg-primary data-[selected]:data-[hover]:bg-primary data-[focus]:outline-1 data-[focus]:outline-primary"
                >
                  {name}
                </Tab>
              ))}
            </TabList>
            <TabPanels className="mt-3">
              {categories.map(({ name, posts }) => (
                <TabPanel key={name} className="rounded-xl bg-lightgray dark:bg-dark p-3">
                  <ul>
                    {posts.map((post) => (
                      <li
                        key={post.id}
                        className="relative rounded-md p-3 text-sm transition hover:bg-white/5"
                      >
                        <a href="#" className="font-semibold text-ld ">
                          <span className="absolute inset-0" />
                          {post.title}
                        </a>
                        <ul
                          className="flex gap-2 text-bodytext"
                          aria-hidden="true"
                        >
                          <li>{post.date}</li>
                          <li aria-hidden="true">&middot;</li>
                          <li>{post.commentCount} comments</li>
                          <li aria-hidden="true">&middot;</li>
                          <li>{post.shareCount} shares</li>
                        </ul>
                      </li>
                    ))}
                  </ul>
                </TabPanel>
              ))}
            </TabPanels>
          </TabGroup>
        </div>
        `})}),de=[{name:"Recent",posts:[{id:1,title:"Does drinking coffee make you smarter?",date:"5h ago",commentCount:5,shareCount:2},{id:2,title:"So you've bought coffee... now what?",date:"2h ago",commentCount:3,shareCount:2}]},{name:"Popular",posts:[{id:1,title:"Is tech making coffee better or worse?",date:"Jan 7",commentCount:29,shareCount:16},{id:2,title:"The most innovative things happening in coffee",date:"Mar 19",commentCount:24,shareCount:12}]},{name:"Trending",posts:[{id:1,title:"Ask Me Anything: 10 answers to your questions about coffee",date:"2d ago",commentCount:9,shareCount:5},{id:2,title:"The worst advice we've ever heard about coffee",date:"4d ago",commentCount:1,shareCount:2}]}],Qe=()=>e.jsx("div",{children:e.jsxs(z,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Basic Tabs"}),e.jsx(Ye,{})]}),e.jsx("div",{className:"w-full",children:e.jsxs(P,{children:[e.jsx(I,{className:"flex gap-3",children:de.map(({name:t})=>e.jsx(c,{className:"rounded-md py-2 px-4 text-sm font-semibold text-ld focus:outline-none data-[selected]:bg-primary data-[hover]:text-white data-[selected]:text-white data-[hover]:bg-primary data-[selected]:data-[hover]:bg-primary data-[focus]:outline-1 data-[focus]:outline-primary",children:t},t))}),e.jsx(k,{className:"mt-3",children:de.map(({name:t,posts:a})=>e.jsx(m,{className:"rounded-xl bg-lightgray dark:bg-dark p-3",children:e.jsx("ul",{children:a.map(s=>e.jsxs("li",{className:"relative rounded-md p-3 text-sm transition hover:bg-white/5",children:[e.jsxs("a",{href:"#",className:"font-semibold text-ld ",children:[e.jsx("span",{className:"absolute inset-0"}),s.title]}),e.jsxs("ul",{className:"flex gap-2 text-bodytext","aria-hidden":"true",children:[e.jsx("li",{children:s.date}),e.jsx("li",{"aria-hidden":"true",children:"·"}),e.jsxs("li",{children:[s.commentCount," comments"]}),e.jsx("li",{"aria-hidden":"true",children:"·"}),e.jsxs("li",{children:[s.shareCount," shares"]})]})]},s.id))})},t))})]})})]})}),Xe=()=>{const[t,a]=r.useState(0);return e.jsx("div",{children:e.jsxs(z,{children:[e.jsx("div",{className:"flex items-center justify-between mb-2",children:e.jsx("h4",{className:"text-lg font-semibold",children:"Controlling Selected Tab"})}),e.jsxs(P,{selectedIndex:t,onChange:a,children:[e.jsxs(I,{className:"flex gap-3",children:[e.jsx(c,{className:"rounded-md py-2 px-4 text-sm font-semibold text-ld focus:outline-none data-[selected]:bg-primary data-[hover]:text-white data-[selected]:text-white data-[hover]:bg-primary data-[selected]:data-[hover]:bg-primary data-[focus]:outline-1 data-[focus]:outline-primary",children:"Tab 1"}),e.jsx(c,{className:"rounded-md py-2 px-4 text-sm font-semibold text-ld focus:outline-none data-[selected]:bg-primary data-[hover]:text-white data-[selected]:text-white data-[hover]:bg-primary data-[selected]:data-[hover]:bg-primary data-[focus]:outline-1 data-[focus]:outline-primary ",children:"Tab 2"}),e.jsx(c,{className:"rounded-md py-2 px-4 text-sm font-semibold text-ld focus:outline-none data-[selected]:bg-primary data-[hover]:text-white data-[selected]:text-white data-[hover]:bg-primary data-[selected]:data-[hover]:bg-primary data-[focus]:outline-1 data-[focus]:outline-primary",children:"Tab 3"})]}),e.jsxs(k,{className:"rounded-xl bg-lightgray dark:bg-dark p-3 mt-3",children:[e.jsx(m,{className:"text-bodytext",children:"One Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy text that is not meant to mean anything. It is used as a placeholder in magazine layouts, for example, in order to give an impression of the finished document."}),e.jsx(m,{className:"text-bodytext",children:"Two Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy text that is not meant to mean anything. It is used as a placeholder in magazine layouts, for example, in order to give an impression of the finished document."}),e.jsx(m,{className:"text-bodytext",children:"Three Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy text that is not meant to mean anything. It is used as a placeholder in magazine layouts, for example, in order to give an impression of the finished document."})]})]})]})})},Ze=()=>e.jsx("div",{children:e.jsx(R,{children:`
    
    import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";    
      
    <TabGroup>
        <TabList>
        <Tab className="rounded-md py-2 px-4 text-sm font-semibold text-ld focus:outline-none data-[selected]:bg-primary data-[hover]:text-white data-[selected]:text-white data-[hover]:bg-primary data-[selected]:data-[hover]:bg-primary data-[focus]:outline-1 data-[focus]:outline-primary">Tab 1</Tab>
        <Tab disabled className="rounded-md py-2 px-4 text-sm font-semibold text-ld focus:outline-none data-[selected]:bg-primary data-[hover]:text-white data-[selected]:text-white data-[hover]:bg-primary data-[selected]:data-[hover]:bg-primary data-[focus]:outline-1 data-[focus]:outline-primary disabled:opacity-50">
            Tab 2
        </Tab>
        <Tab className="rounded-md py-2 px-4 text-sm font-semibold text-ld focus:outline-none data-[selected]:bg-primary data-[hover]:text-white data-[selected]:text-white data-[hover]:bg-primary data-[selected]:data-[hover]:bg-primary data-[focus]:outline-1 data-[focus]:outline-primary">Tab 3</Tab>
        </TabList>
        <TabPanels className="rounded-xl bg-lightgray dark:bg-dark p-3">
        <TabPanel className="text-bodytext">One Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy text that is not meant to mean anything. It is used as a placeholder in magazine layouts, for example, in order to give an impression of the finished document.</TabPanel>
        <TabPanel className="text-bodytext">Two Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy text that is not meant to mean anything. It is used as a placeholder in magazine layouts, for example, in order to give an impression of the finished document.</TabPanel>
        <TabPanel className="text-bodytext">Three Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy text that is not meant to mean anything. It is used as a placeholder in magazine layouts, for example, in order to give an impression of the finished document.</TabPanel>
        </TabPanels>
    </TabGroup>

        `})}),et=()=>e.jsx("div",{children:e.jsxs(z,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Disable Tab"}),e.jsx(Ze,{})]}),e.jsxs(P,{children:[e.jsxs(I,{className:"flex gap-3",children:[e.jsx(c,{className:"rounded-md py-2 px-4 text-sm font-semibold text-ld focus:outline-none data-[selected]:bg-primary data-[hover]:text-white data-[selected]:text-white data-[hover]:bg-primary data-[selected]:data-[hover]:bg-primary data-[focus]:outline-1 data-[focus]:outline-primary",children:"Tab 1"}),e.jsx(c,{disabled:!0,className:"rounded-md py-2 px-4 text-sm font-semibold text-ld focus:outline-none data-[selected]:bg-primary data-[hover]:text-white data-[selected]:text-white data-[hover]:bg-primary data-[selected]:data-[hover]:bg-primary data-[focus]:outline-1 data-[focus]:outline-primary disabled:opacity-50",children:"Tab 2"}),e.jsx(c,{className:"rounded-md py-2 px-4 text-sm font-semibold text-ld focus:outline-none data-[selected]:bg-primary data-[hover]:text-white data-[selected]:text-white data-[hover]:bg-primary data-[selected]:data-[hover]:bg-primary data-[focus]:outline-1 data-[focus]:outline-primary",children:"Tab 3"})]}),e.jsxs(k,{className:"rounded-xl bg-lightgray dark:bg-dark p-3 mt-3",children:[e.jsx(m,{className:"text-bodytext",children:"One Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy text that is not meant to mean anything. It is used as a placeholder in magazine layouts, for example, in order to give an impression of the finished document."}),e.jsx(m,{className:"text-bodytext",children:"Two Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy text that is not meant to mean anything. It is used as a placeholder in magazine layouts, for example, in order to give an impression of the finished document."}),e.jsx(m,{className:"text-bodytext",children:"Three Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy text that is not meant to mean anything. It is used as a placeholder in magazine layouts, for example, in order to give an impression of the finished document."})]})]})]})}),tt=()=>e.jsx("div",{children:e.jsx(R,{children:`
    import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/react";
    

    <TabGroup onChange={(index) => {
            console.log("Changed selected tab to:", index);
          }}>
          <TabList className="flex gap-3">
            <Tab className="rounded-md py-2 px-4 text-sm font-semibold text-ld focus:outline-none data-[selected]:bg-primary data-[hover]:text-white data-[selected]:text-white data-[hover]:bg-primary data-[selected]:data-[hover]:bg-primary data-[focus]:outline-1 data-[focus]:outline-primary">
              Tab 1
            </Tab>
            <Tab className="rounded-md py-2 px-4 text-sm font-semibold text-ld focus:outline-none data-[selected]:bg-primary data-[hover]:text-white data-[selected]:text-white data-[hover]:bg-primary data-[selected]:data-[hover]:bg-primary data-[focus]:outline-1 data-[focus]:outline-primary ">
              Tab 2
            </Tab>
            <Tab className="rounded-md py-2 px-4 text-sm font-semibold text-ld focus:outline-none data-[selected]:bg-primary data-[hover]:text-white data-[selected]:text-white data-[hover]:bg-primary data-[selected]:data-[hover]:bg-primary data-[focus]:outline-1 data-[focus]:outline-primary">
              Tab 3
            </Tab>
          </TabList>
          <TabPanels className="rounded-xl bg-lightgray dark:bg-dark p-3 mt-3">
            <TabPanel className="text-bodytext">
              One Lorem ipsum dolor sit amet, consectetur adipisici elit…’
              (complete text) is dummy text that is not meant to mean anything.
              It is used as a placeholder in magazine layouts, for example, in
              order to give an impression of the finished document.
            </TabPanel>
            <TabPanel className="text-bodytext">
              Two Lorem ipsum dolor sit amet, consectetur adipisici elit…’
              (complete text) is dummy text that is not meant to mean anything.
              It is used as a placeholder in magazine layouts, for example, in
              order to give an impression of the finished document.
            </TabPanel>
            <TabPanel className="text-bodytext">
              Three Lorem ipsum dolor sit amet, consectetur adipisici elit…’
              (complete text) is dummy text that is not meant to mean anything.
              It is used as a placeholder in magazine layouts, for example, in
              order to give an impression of the finished document.
            </TabPanel>
          </TabPanels>
        </TabGroup>
        `})}),at=()=>e.jsx("div",{children:e.jsxs(z,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Listening For Changes Tab"}),e.jsx(tt,{})]}),e.jsxs(P,{onChange:t=>{console.log("Changed selected tab to:",t)},children:[e.jsxs(I,{className:"flex gap-3",children:[e.jsx(c,{className:"rounded-md py-2 px-4 text-sm font-semibold text-ld focus:outline-none data-[selected]:bg-primary data-[hover]:text-white data-[selected]:text-white data-[hover]:bg-primary data-[selected]:data-[hover]:bg-primary data-[focus]:outline-1 data-[focus]:outline-primary",children:"Tab 1"}),e.jsx(c,{className:"rounded-md py-2 px-4 text-sm font-semibold text-ld focus:outline-none data-[selected]:bg-primary data-[hover]:text-white data-[selected]:text-white data-[hover]:bg-primary data-[selected]:data-[hover]:bg-primary data-[focus]:outline-1 data-[focus]:outline-primary ",children:"Tab 2"}),e.jsx(c,{className:"rounded-md py-2 px-4 text-sm font-semibold text-ld focus:outline-none data-[selected]:bg-primary data-[hover]:text-white data-[selected]:text-white data-[hover]:bg-primary data-[selected]:data-[hover]:bg-primary data-[focus]:outline-1 data-[focus]:outline-primary",children:"Tab 3"})]}),e.jsxs(k,{className:"rounded-xl bg-lightgray dark:bg-dark p-3 mt-3",children:[e.jsx(m,{className:"text-bodytext",children:"One Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy text that is not meant to mean anything. It is used as a placeholder in magazine layouts, for example, in order to give an impression of the finished document."}),e.jsx(m,{className:"text-bodytext",children:"Two Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy text that is not meant to mean anything. It is used as a placeholder in magazine layouts, for example, in order to give an impression of the finished document."}),e.jsx(m,{className:"text-bodytext",children:"Three Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy text that is not meant to mean anything. It is used as a placeholder in magazine layouts, for example, in order to give an impression of the finished document."})]})]})]})}),st=()=>e.jsx("div",{children:e.jsx(R,{children:`
    
    import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";    
      
    <TabGroup manual>
        <TabList className="flex gap-3">
        <Tab className="rounded-md py-2 px-4 text-sm font-semibold text-ld focus:outline-none data-[selected]:bg-primary data-[hover]:text-white data-[selected]:text-white data-[hover]:bg-primary data-[selected]:data-[hover]:bg-primary data-[focus]:outline-1 data-[focus]:outline-primary">Tab 1</Tab>
        <Tab className="rounded-md py-2 px-4 text-sm font-semibold text-ld focus:outline-none data-[selected]:bg-primary data-[hover]:text-white data-[selected]:text-white data-[hover]:bg-primary data-[selected]:data-[hover]:bg-primary data-[focus]:outline-1 data-[focus]:outline-primary ">
            Tab 2
        </Tab>
        <Tab className="rounded-md py-2 px-4 text-sm font-semibold text-ld focus:outline-none data-[selected]:bg-primary data-[hover]:text-white data-[selected]:text-white data-[hover]:bg-primary data-[selected]:data-[hover]:bg-primary data-[focus]:outline-1 data-[focus]:outline-primary">Tab 3</Tab>
        </TabList>
        <TabPanels className="rounded-xl bg-lightgray dark:bg-dark p-3 mt-3">
        <TabPanel className="text-bodytext">One Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy text that is not meant to mean anything. It is used as a placeholder in magazine layouts, for example, in order to give an impression of the finished document.</TabPanel>
        <TabPanel className="text-bodytext">Two Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy text that is not meant to mean anything. It is used as a placeholder in magazine layouts, for example, in order to give an impression of the finished document.</TabPanel>
        <TabPanel className="text-bodytext">Three Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy text that is not meant to mean anything. It is used as a placeholder in magazine layouts, for example, in order to give an impression of the finished document.</TabPanel>
        </TabPanels>
    </TabGroup>

        `})}),it=()=>e.jsx("div",{children:e.jsxs(z,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Manually Active Tab"}),e.jsx(st,{})]}),e.jsxs(P,{manual:!0,children:[e.jsxs(I,{className:"flex gap-3",children:[e.jsx(c,{className:"rounded-md py-2 px-4 text-sm font-semibold text-ld focus:outline-none data-[selected]:bg-primary data-[hover]:text-white data-[selected]:text-white data-[hover]:bg-primary data-[selected]:data-[hover]:bg-primary data-[focus]:outline-1 data-[focus]:outline-primary",children:"Tab 1"}),e.jsx(c,{className:"rounded-md py-2 px-4 text-sm font-semibold text-ld focus:outline-none data-[selected]:bg-primary data-[hover]:text-white data-[selected]:text-white data-[hover]:bg-primary data-[selected]:data-[hover]:bg-primary data-[focus]:outline-1 data-[focus]:outline-primary ",children:"Tab 2"}),e.jsx(c,{className:"rounded-md py-2 px-4 text-sm font-semibold text-ld focus:outline-none data-[selected]:bg-primary data-[hover]:text-white data-[selected]:text-white data-[hover]:bg-primary data-[selected]:data-[hover]:bg-primary data-[focus]:outline-1 data-[focus]:outline-primary",children:"Tab 3"})]}),e.jsxs(k,{className:"rounded-xl bg-lightgray dark:bg-dark p-3 mt-3",children:[e.jsx(m,{className:"text-bodytext",children:"One Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy text that is not meant to mean anything. It is used as a placeholder in magazine layouts, for example, in order to give an impression of the finished document."}),e.jsx(m,{className:"text-bodytext",children:"Two Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy text that is not meant to mean anything. It is used as a placeholder in magazine layouts, for example, in order to give an impression of the finished document."}),e.jsx(m,{className:"text-bodytext",children:"Three Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy text that is not meant to mean anything. It is used as a placeholder in magazine layouts, for example, in order to give an impression of the finished document."})]})]})]})}),ot=()=>e.jsx("div",{children:e.jsxs(z,{children:[e.jsx("div",{className:"flex items-center justify-between mb-2",children:e.jsx("h4",{className:"text-lg font-semibold",children:"Rendering As Different Elements"})}),e.jsxs(P,{manual:!0,children:[e.jsxs(I,{className:"flex gap-3",as:"aside",children:[e.jsx(c,{className:"rounded-md py-2 px-4 text-sm font-semibold text-ld focus:outline-none data-[selected]:bg-primary data-[hover]:text-white data-[selected]:text-white data-[hover]:bg-primary data-[selected]:data-[hover]:bg-primary data-[focus]:outline-1 data-[focus]:outline-primary",children:"Tab 1"}),e.jsx(c,{className:"rounded-md py-2 px-4 text-sm font-semibold text-ld focus:outline-none data-[selected]:bg-primary data-[hover]:text-white data-[selected]:text-white data-[hover]:bg-primary data-[selected]:data-[hover]:bg-primary data-[focus]:outline-1 data-[focus]:outline-primary ",children:"Tab 2"}),e.jsx(c,{className:"rounded-md py-2 px-4 text-sm font-semibold text-ld focus:outline-none data-[selected]:bg-primary data-[hover]:text-white data-[selected]:text-white data-[hover]:bg-primary data-[selected]:data-[hover]:bg-primary data-[focus]:outline-1 data-[focus]:outline-primary",children:"Tab 3"})]}),e.jsxs(k,{className:"rounded-xl bg-lightgray dark:bg-dark p-3 mt-3",as:"section",children:[e.jsx(m,{className:"text-bodytext",children:"One Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy text that is not meant to mean anything. It is used as a placeholder in magazine layouts, for example, in order to give an impression of the finished document."}),e.jsx(m,{className:"text-bodytext",children:"Two Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy text that is not meant to mean anything. It is used as a placeholder in magazine layouts, for example, in order to give an impression of the finished document."}),e.jsx(m,{className:"text-bodytext",children:"Three Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy text that is not meant to mean anything. It is used as a placeholder in magazine layouts, for example, in order to give an impression of the finished document."})]})]})]})}),nt=()=>e.jsx("div",{children:e.jsx(R,{children:`
    import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/react";
    

    <TabGroup defaultIndex={1}>
          <TabList className="flex gap-3">
            <Tab className="rounded-md py-2 px-4 text-sm font-semibold text-ld focus:outline-none data-[selected]:bg-primary data-[hover]:text-white data-[selected]:text-white data-[hover]:bg-primary data-[selected]:data-[hover]:bg-primary data-[focus]:outline-1 data-[focus]:outline-primary">
              Tab 1
            </Tab>
            <Tab className="rounded-md py-2 px-4 text-sm font-semibold text-ld focus:outline-none data-[selected]:bg-primary data-[hover]:text-white data-[selected]:text-white data-[hover]:bg-primary data-[selected]:data-[hover]:bg-primary data-[focus]:outline-1 data-[focus]:outline-primary ">
              Tab 2
            </Tab>
            <Tab className="rounded-md py-2 px-4 text-sm font-semibold text-ld focus:outline-none data-[selected]:bg-primary data-[hover]:text-white data-[selected]:text-white data-[hover]:bg-primary data-[selected]:data-[hover]:bg-primary data-[focus]:outline-1 data-[focus]:outline-primary">
              Tab 3
            </Tab>
          </TabList>
          <TabPanels className="rounded-xl bg-lightgray dark:bg-dark p-3 mt-3">
            <TabPanel className="text-bodytext">
              One Lorem ipsum dolor sit amet, consectetur adipisici elit…’
              (complete text) is dummy text that is not meant to mean anything.
              It is used as a placeholder in magazine layouts, for example, in
              order to give an impression of the finished document.
            </TabPanel>
            <TabPanel className="text-bodytext">
              Two Lorem ipsum dolor sit amet, consectetur adipisici elit…’
              (complete text) is dummy text that is not meant to mean anything.
              It is used as a placeholder in magazine layouts, for example, in
              order to give an impression of the finished document.
            </TabPanel>
            <TabPanel className="text-bodytext">
              Three Lorem ipsum dolor sit amet, consectetur adipisici elit…’
              (complete text) is dummy text that is not meant to mean anything.
              It is used as a placeholder in magazine layouts, for example, in
              order to give an impression of the finished document.
            </TabPanel>
          </TabPanels>
        </TabGroup>
        `})}),rt=()=>e.jsx("div",{children:e.jsxs(z,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Specifying The Default Tab"}),e.jsx(nt,{})]}),e.jsxs(P,{defaultIndex:1,children:[e.jsxs(I,{className:"flex gap-3",children:[e.jsx(c,{className:"rounded-md py-2 px-4 text-sm font-semibold text-ld focus:outline-none data-[selected]:bg-primary data-[hover]:text-white data-[selected]:text-white data-[hover]:bg-primary data-[selected]:data-[hover]:bg-primary data-[focus]:outline-1 data-[focus]:outline-primary",children:"Tab 1"}),e.jsx(c,{className:"rounded-md py-2 px-4 text-sm font-semibold text-ld focus:outline-none data-[selected]:bg-primary data-[hover]:text-white data-[selected]:text-white data-[hover]:bg-primary data-[selected]:data-[hover]:bg-primary data-[focus]:outline-1 data-[focus]:outline-primary ",children:"Tab 2"}),e.jsx(c,{className:"rounded-md py-2 px-4 text-sm font-semibold text-ld focus:outline-none data-[selected]:bg-primary data-[hover]:text-white data-[selected]:text-white data-[hover]:bg-primary data-[selected]:data-[hover]:bg-primary data-[focus]:outline-1 data-[focus]:outline-primary",children:"Tab 3"})]}),e.jsxs(k,{className:"rounded-xl bg-lightgray dark:bg-dark p-3 mt-3",children:[e.jsx(m,{className:"text-bodytext",children:"One Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy text that is not meant to mean anything. It is used as a placeholder in magazine layouts, for example, in order to give an impression of the finished document."}),e.jsx(m,{className:"text-bodytext",children:"Two Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy text that is not meant to mean anything. It is used as a placeholder in magazine layouts, for example, in order to give an impression of the finished document."}),e.jsx(m,{className:"text-bodytext",children:"Three Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy text that is not meant to mean anything. It is used as a placeholder in magazine layouts, for example, in order to give an impression of the finished document."})]})]})]})}),dt=()=>e.jsx("div",{children:e.jsx(R,{children:`
    
    import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";   
    
    const categories = [
    {
        name: "Recent",
        posts: [
        {
            id: 1,
            title: "Does drinking coffee make you smarter?",
            date: "5h ago",
            commentCount: 5,
            shareCount: 2,
        },
        {
            id: 2,
            title: "So you've bought coffee... now what?",
            date: "2h ago",
            commentCount: 3,
            shareCount: 2,
        },
        ],
    },
    {
        name: "Popular",
        posts: [
        {
            id: 1,
            title: "Is tech making coffee better or worse?",
            date: "Jan 7",
            commentCount: 29,
            shareCount: 16,
        },
        {
            id: 2,
            title: "The most innovative things happening in coffee",
            date: "Mar 19",
            commentCount: 24,
            shareCount: 12,
        },
        ],
    },
    {
        name: "Trending",
        posts: [
        {
            id: 1,
            title: "Ask Me Anything: 10 answers to your questions about coffee",
            date: "2d ago",
            commentCount: 9,
            shareCount: 5,
        },
        {
            id: 2,
            title: "The worst advice we've ever heard about coffee",
            date: "4d ago",
            commentCount: 1,
            shareCount: 2,
        },
        ],
    },
    {
        name: "Extreme",
        posts: [
        {
            id: 1,
            title: "Ask Me Anything: 10 answers to your questions about coffee",
            date: "2d ago",
            commentCount: 9,
            shareCount: 5,
        },
        {
            id: 2,
            title: "The worst advice we've ever heard about coffee",
            date: "4d ago",
            commentCount: 1,
            shareCount: 2,
        },
        ],
    },
    ];

    <div className="w-full pb-5">
          <TabGroup vertical className="flex gap-3 ">
            <TabList className="flex flex-col gap-3">
              {categories.map(({ name }) => (
                <Tab
                  key={name}
                  className="rounded-md py-2 px-4 text-sm font-semibold text-ld focus:outline-none data-[selected]:bg-primary data-[hover]:text-white data-[selected]:text-white data-[hover]:bg-primary data-[selected]:data-[hover]:bg-primary data-[focus]:outline-1 data-[focus]:outline-primary"
                >
                  {name}
                </Tab>
              ))}
            </TabList>
            <TabPanels className="w-full">
              {categories.map(({ name, posts }) => (
                <TabPanel
                  key={name}
                  className="rounded-xl bg-lightgray dark:bg-dark p-3"
                >
                  <ul>
                    {posts.map((post) => (
                      <li
                        key={post.id}
                        className="relative rounded-md p-3 text-sm transition hover:bg-white/5"
                      >
                        <a href="#" className="font-semibold text-ld ">
                          <span className="absolute inset-0" />
                          {post.title}
                        </a>
                        <ul
                          className="flex gap-2 text-bodytext"
                          aria-hidden="true"
                        >
                          <li>{post.date}</li>
                          <li aria-hidden="true">&middot;</li>
                          <li>{post.commentCount} comments</li>
                          <li aria-hidden="true">&middot;</li>
                          <li>{post.shareCount} shares</li>
                        </ul>
                      </li>
                    ))}
                  </ul>
                </TabPanel>
              ))}
            </TabPanels>
          </TabGroup>
        </div>

        `})}),le=[{name:"Recent",posts:[{id:1,title:"Does drinking coffee make you smarter?",date:"5h ago",commentCount:5,shareCount:2},{id:2,title:"So you've bought coffee... now what?",date:"2h ago",commentCount:3,shareCount:2}]},{name:"Popular",posts:[{id:1,title:"Is tech making coffee better or worse?",date:"Jan 7",commentCount:29,shareCount:16},{id:2,title:"The most innovative things happening in coffee",date:"Mar 19",commentCount:24,shareCount:12}]},{name:"Trending",posts:[{id:1,title:"Ask Me Anything: 10 answers to your questions about coffee",date:"2d ago",commentCount:9,shareCount:5},{id:2,title:"The worst advice we've ever heard about coffee",date:"4d ago",commentCount:1,shareCount:2}]},{name:"Extreme",posts:[{id:1,title:"Ask Me Anything: 10 answers to your questions about coffee",date:"2d ago",commentCount:9,shareCount:5},{id:2,title:"The worst advice we've ever heard about coffee",date:"4d ago",commentCount:1,shareCount:2}]}],lt=()=>e.jsx("div",{children:e.jsxs(z,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Vertical Tabs"}),e.jsx(dt,{})]}),e.jsx("div",{className:"w-full pb-5",children:e.jsxs(P,{vertical:!0,className:"flex gap-3 ",children:[e.jsx(I,{className:"flex flex-col gap-3",children:le.map(({name:t})=>e.jsx(c,{className:"rounded-md py-2 px-4 text-sm font-semibold text-ld focus:outline-none data-[selected]:bg-primary data-[hover]:text-white data-[selected]:text-white data-[hover]:bg-primary data-[selected]:data-[hover]:bg-primary data-[focus]:outline-1 data-[focus]:outline-primary",children:t},t))}),e.jsx(k,{className:"w-full",children:le.map(({name:t,posts:a})=>e.jsx(m,{className:"rounded-xl bg-lightgray dark:bg-dark p-3",children:e.jsx("ul",{children:a.map(s=>e.jsxs("li",{className:"relative rounded-md p-3 text-sm transition hover:bg-white/5",children:[e.jsxs("a",{href:"#",className:"font-semibold text-ld ",children:[e.jsx("span",{className:"absolute inset-0"}),s.title]}),e.jsxs("ul",{className:"flex gap-2 text-bodytext","aria-hidden":"true",children:[e.jsx("li",{children:s.date}),e.jsx("li",{"aria-hidden":"true",children:"·"}),e.jsxs("li",{children:[s.commentCount," comments"]}),e.jsx("li",{"aria-hidden":"true",children:"·"}),e.jsxs("li",{children:[s.shareCount," shares"]})]})]},s.id))})},t))})]})})]})}),mt=[{to:"/",title:"Home"},{title:"Tabs"}],kt=()=>e.jsxs(e.Fragment,{children:[e.jsx(Le,{title:"Tabs",items:mt}),e.jsxs("div",{className:"grid grid-cols-12 gap-30",children:[e.jsx("div",{className:"lg:col-span-6 col-span-12",children:e.jsx(Qe,{})}),e.jsx("div",{className:"lg:col-span-6 col-span-12",children:e.jsx(lt,{})}),e.jsx("div",{className:"lg:col-span-6 col-span-12",children:e.jsx(et,{})}),e.jsx("div",{className:"lg:col-span-6 col-span-12",children:e.jsx(it,{})}),e.jsx("div",{className:"lg:col-span-6 col-span-12",children:e.jsx(rt,{})}),e.jsx("div",{className:"lg:col-span-6 col-span-12",children:e.jsx(at,{})}),e.jsx("div",{className:"lg:col-span-6 col-span-12",children:e.jsx(Xe,{})}),e.jsx("div",{className:"lg:col-span-6 col-span-12",children:e.jsx(ot,{})})]})]});export{kt as default};
