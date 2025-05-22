import{r as o,aM as O,aN as D,bK as E,bL as S,bM as T,j as e,bN as z,bO as W,p as J,B as s,aZ as Y,A as l,b as d,ab as U}from"./index-BofOdt6x.js";import{C as t}from"./CardBox-DwJnOFrw.js";import{C as c}from"./CodeModal-BtUURIBs.js";import{B as G}from"./BreadcrumbComp-B936abq-.js";import"./Card-D_l9r_n3.js";import"./toConsumableArray-CcjcqDNZ.js";import"./extends-CF3RwP-h.js";import"./core-DD6kpHa4.js";function a({children:r,content:n,theme:v={},arrow:j=!0,trigger:u="click",initialOpen:b,open:y,onOpenChange:f,placement:N="bottom",...w}){const[k,P]=o.useState(!!b),p=o.useRef(null),i=O(D().popover,v),x=y??k,I=E({open:x,placement:N,arrowRef:p,setOpen:f??P}),{floatingStyles:B,context:m,placement:C,middlewareData:{arrow:{x:F,y:A}={}},refs:M}=I,{getFloatingProps:R,getReferenceProps:h}=S({context:m,role:"dialog",trigger:u}),L=r.ref,g=T([m.refs.setReference,L]);if(!o.isValidElement(r))throw Error("Invalid target element");const q=o.useMemo(()=>o.cloneElement(r,h({ref:g,"data-testid":"flowbite-popover-target",...r==null?void 0:r.props})),[r,g,h]);return e.jsxs(e.Fragment,{children:[q,x&&e.jsx(z,{context:m,modal:!0,children:e.jsx("div",{className:i.base,ref:M.setFloating,"data-testid":"flowbite-popover",...w,style:B,...R(),children:e.jsxs("div",{className:"relative",children:[j&&e.jsx("div",{className:i.arrow.base,"data-testid":"flowbite-popover-arrow",ref:p,style:{top:A??" ",left:F??" ",right:" ",bottom:" ",[W({placement:C})]:i.arrow.placement},children:" "}),e.jsx("div",{className:i.content,children:n})]})})})]})}const H=()=>e.jsx("div",{children:e.jsxs(t,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Company Profile"}),e.jsx(c,{children:`
    import { Popover, Button } from "flowbite-react";
    import user3 from "/src/assets/images/profile/user-3.jpg"

    <Popover
          aria-labelledby="profile-popover"
          content={
            <div className="w-64 p-3 ">
              <div className="mb-2 flex items-center justify-between">
                <a href="#">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={user3}
                    alt="Jese Leos"
                  />
                </a>
                <div>
                  <button
                    type="button"
                    className="rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-primary dark:hover:bg-primaryemphasis dark:focus:ring-blue-600 "
                  >
                    Follow
                  </button>
                </div>
              </div>
              <p
                id="profile-popover"
                className="text-base font-semibold leading-none text-gray-900 dark:text-white"
              >
                <a href="#">Jese Leos</a>
              </p>
              <p className="mb-3 text-sm font-normal">
                <a href="#" className="hover:underline">
                  @jeseleos
                </a>
              </p>
              <p className="mb-4 text-sm">
                Open-source contributor. Building{" "}
                <a
                  href="#"
                  className="text-primary hover:underline dark:text-primary"
                >
                  matdash IM
                </a>
                .
              </p>
              <ul className="flex text-sm">
                <li className="me-2">
                  <a href="#" className="hover:underline">
                    <span className="font-semibold text-gray-900 dark:text-white">
                      799
                    </span>
                    <span>Following</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    <span className="font-semibold text-gray-900 dark:text-white">
                      3,758
                    </span>
                    <span>Followers</span>
                  </a>
                </li>
              </ul>
            </div>
          }
        >
          <Button color="primary" >
            Company profile
          </Button>
    </Popover>
                `})]}),e.jsx(a,{"aria-labelledby":"profile-popover",content:e.jsxs("div",{className:"w-64 p-3 ",children:[e.jsxs("div",{className:"mb-2 flex items-center justify-between",children:[e.jsx("a",{href:"#",children:e.jsx("img",{className:"h-10 w-10 rounded-full",src:J,alt:"Jese Leos"})}),e.jsx("div",{children:e.jsx("button",{type:"button",className:"rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-primary dark:hover:bg-primaryemphasis dark:focus:ring-blue-600 ",children:"Follow"})})]}),e.jsx("p",{id:"profile-popover",className:"text-base font-semibold leading-none text-gray-900 dark:text-white",children:e.jsx("a",{href:"#",children:"Jese Leos"})}),e.jsx("p",{className:"mb-3 text-sm font-normal",children:e.jsx("a",{href:"#",className:"hover:underline",children:"@jeseleos"})}),e.jsxs("p",{className:"mb-4 text-sm",children:["Open-source contributor. Building"," ",e.jsx("a",{href:"#",className:"text-primary hover:underline dark:text-primary",children:"matdash IM"}),"."]}),e.jsxs("ul",{className:"flex text-sm",children:[e.jsx("li",{className:"me-2",children:e.jsxs("a",{href:"#",className:"hover:underline",children:[e.jsx("span",{className:"font-semibold text-gray-900 dark:text-white",children:"799"}),e.jsx("span",{children:"Following"})]})}),e.jsx("li",{children:e.jsxs("a",{href:"#",className:"hover:underline",children:[e.jsx("span",{className:"font-semibold text-gray-900 dark:text-white",children:"3,758"}),e.jsx("span",{children:"Followers"})]})})]})]}),children:e.jsx(s,{color:"primary",children:"Company profile"})})]})});function K(r){return Y({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"m11.998 17 7-8h-14z"},child:[]}]})(r)}const V=()=>{const[r,n]=o.useState(!1);return e.jsx("div",{children:e.jsxs(t,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Controlled"}),e.jsx(c,{children:`
      <Popover
        aria-labelledby="area-popover"
        open={open}
        onOpenChange={setOpen}
        content={
          <div className="flex w-64 flex-col gap-4 p-4 text-sm text-gray-500 dark:text-gray-400">
            <div>
              <h2 id="area-popover" className="text-base text-gray-500">
                Area (sqft)
              </h2>
              <div className="mb-2 block">
                <Label htmlFor="minsqft" value="Minimum sqft" />
              </div>
              <TextInput id="minsqft" type="number" />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="maxsqft" value="Maximum sqft" />
              </div>
              <TextInput id="maxsqft" type="number" />
            </div>
            <div className="flex gap-2">
              <Button color="gray">Reset</Button>
              <Button color="primary" onClick={() => setOpen(false)}>
                Save
              </Button>
            </div>
          </div>
        }
      >
        <Button color="primary">
          Area <BiCaretDown className="ml-2" />
        </Button>
      </Popover>  
                `})]}),e.jsx(a,{"aria-labelledby":"area-popover",open:r,onOpenChange:n,content:e.jsxs("div",{className:"flex w-64 flex-col gap-4 p-4 text-sm text-gray-500 dark:text-gray-400 ",children:[e.jsxs("div",{children:[e.jsx("h2",{id:"area-popover",className:"text-base text-gray-500",children:"Area (sqft)"}),e.jsx("div",{className:"mb-2 block",children:e.jsx(l,{htmlFor:"minsqft",value:"Minimum sqft"})}),e.jsx(d,{id:"minsqft",type:"number"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"mb-2 block",children:e.jsx(l,{htmlFor:"maxsqft",value:"Maximum sqft"})}),e.jsx(d,{id:"maxsqft",type:"number"})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(s,{color:"gray",children:"Reset"}),e.jsx(s,{color:"primary",onClick:()=>n(!1),children:"Save"})]})]}),children:e.jsxs(s,{color:"primary",children:["Area ",e.jsx(K,{className:"ml-2"})]})})]})})},X=()=>e.jsx("div",{children:e.jsxs(t,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-lg font-semibold ",children:"Default popover"}),e.jsx(c,{children:`
    import { Button, Popover } from "flowbite-react";

    <Popover
      aria-labelledby="default-popover"
      content={
        <div className="w-64 text-sm text-gray-500 dark:text-gray-400">
          <div className="border-b rounded-t-3xl border-gray-200 bg-gray-100 px-3 py-2 dark:border-gray-600 dark:bg-gray-700">
            <h3
              id="default-popover"
              className="font-semibold text-gray-900 dark:text-white"
            >
              Popover title
            </h3>
          </div>
          <div className="px-3 py-2">
            <p>
              And here's some amazing content. It's very engaging.
              Right?
            </p>
          </div>
        </div>
      }
    >
      <Button color="primary">Default popover</Button>
    </Popover>
                `})]}),e.jsx(a,{"aria-labelledby":"default-popover",content:e.jsxs("div",{className:"w-64 text-sm text-gray-500 dark:text-gray-400",children:[e.jsx("div",{className:"border-b rounded-t-3xl border-gray-200 bg-gray-100 px-3 py-2 dark:border-gray-600 dark:bg-gray-700",children:e.jsx("h3",{id:"default-popover",className:"font-semibold text-gray-900 dark:text-white",children:"Popover title"})}),e.jsx("div",{className:"px-3 py-2",children:e.jsx("p",{children:"And here's some amazing content. It's very engaging. Right?"})})]}),children:e.jsx(s,{color:"primary",children:"Default popover"})})]})}),Z=()=>e.jsx("div",{children:e.jsxs(t,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-lg font-semibold ",children:"Disable arrow"}),e.jsx(c,{children:`
    import { Popover, Button } from "flowbite-react";
            
    <Popover
          aria-labelledby="default-popover"
          content={
            <div className="w-64 text-sm text-gray-500 dark:text-gray-400 ">
              <div className="border-b rounded-t-3xl border-gray-200 bg-gray-100 px-3 py-2 dark:border-gray-600 dark:bg-gray-700">
                <h3
                  id="default-popover"
                  className="font-semibold text-gray-900 dark:text-white"
                >
                  Popover title
                </h3>
              </div>
              <div className="px-3 py-2">
                <p>
                  And here's some amazing content. It's very engaging. Right?
                </p>
              </div>
            </div>
          }
          arrow={false}
        >
          <Button color="primary">No Arrow Popover</Button>
    </Popover>
            `})]}),e.jsx(a,{"aria-labelledby":"default-popover",content:e.jsxs("div",{className:"w-64 text-sm text-gray-500 dark:text-gray-400 ",children:[e.jsx("div",{className:"border-b rounded-t-3xl border-gray-200 bg-gray-100 px-3 py-2 dark:border-gray-600 dark:bg-gray-700",children:e.jsx("h3",{id:"default-popover",className:"font-semibold text-gray-900 dark:text-white",children:"Popover title"})}),e.jsx("div",{className:"px-3 py-2",children:e.jsx("p",{children:"And here's some amazing content. It's very engaging. Right?"})})]}),arrow:!1,children:e.jsx(s,{color:"primary",children:"No Arrow Popover"})})]})}),$=()=>e.jsx("div",{children:e.jsxs(t,{children:[e.jsx("h4",{className:"text-lg font-semibold mb-2",children:"Image popover"}),e.jsxs("p",{className:"text-gray-500 dark:text-gray-400",children:["Due to its central geographic location in Southern Europe,"," ",e.jsx(a,{trigger:"hover",content:e.jsx("div",{className:"w-96 text-sm text-gray-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400",children:e.jsxs("div",{className:"grid grid-cols-5",children:[e.jsx("div",{className:"col-span-3 p-3",children:e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"font-semibold text-gray-900 dark:text-white",children:"About Italy"}),e.jsx("p",{children:"Italy is located in the middle of the Mediterranean Sea, in Southern Europe it is also considered part of Western Europe. A unitary parliamentary republic with Rome as its capital and largest city."}),e.jsxs("a",{href:"#",className:"flex items-center font-medium text-primary hover:text-primary hover:underline dark:text-primary dark:hover:text-primary",children:["Read more"," ",e.jsx("svg",{className:"ms-1.5 h-2 w-2 rtl:rotate-180","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 6 10",children:e.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"m1 9 4-4-4-4"})})]})]})}),e.jsx("img",{src:"https://flowbite.com/docs/images/popovers/italy.png",className:"col-span-2 h-full",alt:"Italy map"})]})}),children:e.jsx("a",{href:"#",className:"text-primary underline hover:no-underline dark:text-primary",children:"Italy"})})," ","has historically been home to myriad peoples and cultures. In addition to the various ancient peoples dispersed throughout what is now modern-day Italy, the most predominant being the Indo-European Italic peoples who gave the peninsula its name, beginning from the classical era, Phoenicians and Carthaginians founded colonies mostly in insular Italy the most predominant being the Indo-European Italic peoples who gave the peninsula its name, beginning from the classical era, Phoenicians and Carthaginians founded colonies mostly in insular Italy the most predominant being the Indo-European Italic peoples who gave the peninsula its name, beginning from the classical era, Phoenicians and Carthaginians founded colonies mostly in insular Italy Phoenicians and Carthaginians founded colonies mostly in insular Italy"]})]})}),Q=()=>e.jsx("div",{children:e.jsxs(t,{children:[e.jsx("h4",{className:"text-lg font-semibold mb-2",children:"Password Strength"}),e.jsxs("form",{className:"flex flex-col gap-4",children:[e.jsxs("div",{children:[e.jsx("div",{className:"mb-2 block",children:e.jsx(l,{htmlFor:"email1",value:"Your email"})}),e.jsx(d,{id:"email1",type:"email",placeholder:"info@matdash.com",className:"form-control",required:!0})]}),e.jsxs("div",{children:[e.jsx("div",{className:"mb-2 block",children:e.jsx(l,{htmlFor:"password1",value:"Your password"})}),e.jsx(a,{trigger:"hover",content:e.jsxs("div",{className:"space-y-2 p-3",children:[e.jsx("h3",{className:"font-semibold text-gray-900 dark:text-white",children:"Must have at least 6 characters"}),e.jsxs("div",{className:"grid grid-cols-4 gap-2",children:[e.jsx("div",{className:"h-1 bg-orange-300 dark:bg-orange-400"}),e.jsx("div",{className:"h-1 bg-orange-300 dark:bg-orange-400"}),e.jsx("div",{className:"h-1 bg-gray-200 dark:bg-gray-600"}),e.jsx("div",{className:"h-1 bg-gray-200 dark:bg-gray-600"})]}),e.jsx("p",{children:"It’s better to have:"}),e.jsxs("ul",{children:[e.jsxs("li",{className:"mb-1 flex items-center",children:[e.jsx("svg",{className:"me-2 h-3.5 w-3.5 text-green-400 dark:text-green-500","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 16 12",children:e.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M1 5.917 5.724 10.5 15 1.5"})}),"Upper & lower case letters"]}),e.jsxs("li",{className:"mb-1 flex items-center",children:[e.jsx("svg",{className:"me-2.5 h-3 w-3 text-gray-300 dark:text-gray-400","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:e.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})}),"A symbol (#$&)"]}),e.jsxs("li",{className:"flex items-center",children:[e.jsx("svg",{className:"me-2.5 h-3 w-3 text-gray-300 dark:text-gray-400","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:e.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})}),"A longer password (min. 12 chars.)"]})]})]}),children:e.jsx(d,{id:"password1",type:"password",required:!0,className:"form-control"})})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(U,{id:"remember",className:"checkbox"}),e.jsx(l,{htmlFor:"remember",children:"Remember me"})]}),e.jsx(s,{type:"submit",color:"primary",children:"Submit"})]})]})}),_=()=>{const r=e.jsxs("div",{className:"w-64 text-sm text-gray-500 dark:text-gray-400",children:[e.jsx("div",{className:"border-b border-gray-200 bg-gray-100 px-3 py-2 dark:border-gray-600 dark:bg-gray-700",children:e.jsx("h3",{className:"font-semibold text-gray-900 dark:text-white",children:"Popover title"})}),e.jsx("div",{className:"px-3 py-2",children:e.jsx("p",{children:"And here's some amazing content. It's very engaging. Right?"})})]});return e.jsx("div",{children:e.jsxs(t,{children:[e.jsx("h4",{className:"text-lg font-semibold mb-2",children:"Placement"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(a,{content:r,placement:"top",children:e.jsx(s,{color:"primary",children:"Popover top"})}),e.jsx(a,{content:r,placement:"right",children:e.jsx(s,{color:"primary",children:"Popover right"})}),e.jsx(a,{content:r,placement:"bottom",children:e.jsx(s,{color:"primary",children:"Popover bottom"})}),e.jsx(a,{content:r,placement:"left",children:e.jsx(s,{color:"primary",children:"Popover left"})})]})]})})},ee=()=>{const r=e.jsxs("div",{className:"w-64 text-sm text-gray-500 dark:text-gray-400",children:[e.jsx("div",{className:"border-b border-gray-200 bg-gray-100 px-3 py-2 dark:border-gray-600 dark:bg-gray-700",children:e.jsx("h3",{className:"font-semibold text-gray-900 dark:text-white",children:"Popover title"})}),e.jsx("div",{className:"px-3 py-2",children:e.jsx("p",{children:"And here's some amazing content. It's very engaging. Right?"})})]});return e.jsx("div",{children:e.jsxs(t,{children:[e.jsx("h4",{className:"text-lg font-semibold mb-2",children:"Trigger Type"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(a,{content:r,trigger:"hover",children:e.jsx(s,{color:"primary",children:"Popover hover"})}),e.jsx(a,{content:r,trigger:"click",children:e.jsx(s,{color:"primary",children:"Popover click"})})]})]})})},re=[{to:"/",title:"Home"},{title:"Popover"}],me=()=>e.jsxs(e.Fragment,{children:[e.jsx(G,{title:"Popover",items:re}),e.jsxs("div",{className:"grid grid-cols-12 gap-30",children:[e.jsx("div",{className:"lg:col-span-3 md:col-span-6 col-span-12",children:e.jsx(X,{})}),e.jsx("div",{className:"lg:col-span-3 md:col-span-6 col-span-12",children:e.jsx(H,{})}),e.jsx("div",{className:"lg:col-span-3 md:col-span-6 col-span-12",children:e.jsx(V,{})}),e.jsx("div",{className:"lg:col-span-3 md:col-span-6 col-span-12",children:e.jsx(Z,{})}),e.jsx("div",{className:"lg:col-span-6 col-span-12",children:e.jsx($,{})}),e.jsx("div",{className:"lg:col-span-6 col-span-12",children:e.jsx(Q,{})}),e.jsx("div",{className:"lg:col-span-8 col-span-12",children:e.jsx(_,{})}),e.jsx("div",{className:"lg:col-span-4 col-span-12",children:e.jsx(ee,{})})]})]});export{me as default};
