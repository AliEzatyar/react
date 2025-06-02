import{j as e,r as l,B as o,M as t,p as m,b as p,aa as h,q as x,by as f}from"./index-CbdGNVhE.js";import{C as c}from"./CardBox-DWufozWR.js";import{C as d}from"./CodeModal-CQLFjqdl.js";import{B as g}from"./BreadcrumbComp-B5-q4JsV.js";import"./Card-DYrQhspN.js";import"./toConsumableArray-CGYUFXbV.js";import"./extends-CF3RwP-h.js";const j=()=>e.jsx("div",{children:e.jsx(d,{children:`
    
    import { Button, Modal } from "flowbite-react";
    import { useState } from "react";

    const [openModal, setOpenModal] = useState(true);
    
    <Button onClick={() => setOpenModal(true)}>Toggle modal</Button>
    <Modal show={openModal} onClose={() => setOpenModal(false)}>
      <Modal.Header>Terms of Service</Modal.Header>
      <Modal.Body>
        <div className="space-y-6">
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
            companies around the world are updating their terms of service agreements to comply.
          </p>
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant
            to ensure a common set of data rights in the European Union. It requires organizations to notify users as
            soon as possible of high-risk data breaches that could personally affect them.
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => setOpenModal(false)}>I accept</Button>
        <Button color="gray" onClick={() => setOpenModal(false)}>
          Decline
        </Button>
      </Modal.Footer>
    </Modal>
              `})}),v=()=>{const[s,a]=l.useState(!1);return e.jsx("div",{children:e.jsxs(c,{children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Default Modal"}),e.jsx(j,{})]}),e.jsxs("div",{className:"mt-2",children:[e.jsx(o,{onClick:()=>a(!0),className:"w-full",color:"primary",children:"Default Modal"}),e.jsxs(t,{show:s,onClose:()=>a(!1),children:[e.jsx(t.Header,{className:"rounded-t-md pb-0",children:"Terms of Service"}),e.jsx(t.Body,{children:e.jsxs("div",{className:"space-y-6",children:[e.jsx("p",{className:"text-base leading-relaxed text-gray-500 dark:text-gray-400",children:"With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply."}),e.jsx("p",{className:"text-base leading-relaxed text-gray-500 dark:text-gray-400",children:"The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them."})]})}),e.jsxs(t.Footer,{children:[e.jsx(o,{onClick:()=>a(!1),className:" bg-primary",children:"I accept"}),e.jsx(o,{color:"gray",onClick:()=>a(!1),children:"Decline"})]})]})]})]})})},y=()=>e.jsx("div",{children:e.jsx(d,{children:`
    
    const [formModal, setFormModal] = useState(false);
    const [email, setEmail] = useState("");
    function onCloseModal() {
        setFormModal(false);
        setEmail("");
      }
    
    <Button
    onClick={() => setFormModal(true)}
    className="w-fit"
    color="info"
    >
    Modal with form elements
    </Button>
    <Modal show={formModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header className="px-6 pb-4">Sign in to our platform</Modal.Header>
        <Modal.Body>
            <div className="space-y-6">
            
            <div>
                <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
                </div>
                <TextInput
                id="email"
                placeholder="name@company.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                />
            </div>
            <div>
                <div className="mb-2 block">
                <Label htmlFor="password" value="Your password" />
                </div>
                <TextInput id="password" type="password" required />
            </div>
            <div className="flex justify-between">
                <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">Remember me</Label>
                </div>
                <a
                href="#"
                className="text-sm text-cyan-700 hover:underline dark:text-cyan-500"
                >
                Lost Password?
                </a>
            </div>
            <div className="w-full">
                <Button className=" bg-primary">
                Log in to your account
                </Button>
            </div>
            <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
                Not registered?&nbsp;
                <a
                href="#"
                className="text-cyan-700 hover:underline dark:text-cyan-500"
                >
                Create account
                </a>
            </div>
            </div>
        </Modal.Body>
    </Modal>
              `})}),M=()=>{const[s,a]=l.useState(!1),[r,n]=l.useState("");function i(){a(!1),n("")}return e.jsx("div",{children:e.jsxs(c,{children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Modal with form elements"}),e.jsx(y,{})]}),e.jsxs("div",{className:"mt-2",children:[e.jsx(o,{onClick:()=>a(!0),className:"w-full",color:"info",children:"Modal with form elements"}),e.jsxs(t,{show:s,size:"md",onClose:i,popup:!0,children:[e.jsx(t.Header,{className:"px-6 pb-4",children:"Sign in to our platform"}),e.jsx(t.Body,{children:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("div",{className:"mb-2 block",children:e.jsx(m,{htmlFor:"email",value:"Your email"})}),e.jsx(p,{id:"email",placeholder:"name@company.com",value:r,onChange:u=>n(u.target.value),required:!0})]}),e.jsxs("div",{children:[e.jsx("div",{className:"mb-2 block",children:e.jsx(m,{htmlFor:"password",value:"Your password"})}),e.jsx(p,{id:"password",type:"password",required:!0})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(h,{id:"remember"}),e.jsx(m,{htmlFor:"remember",children:"Remember me"})]}),e.jsx("a",{href:"#",className:"text-sm text-cyan-700 hover:underline dark:text-cyan-500",children:"Lost Password?"})]}),e.jsx("div",{className:"w-full",children:e.jsx(o,{className:" bg-primary",children:"Log in to your account"})}),e.jsxs("div",{className:"flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300",children:["Not registered? ",e.jsx("a",{href:"#",className:"text-cyan-700 hover:underline dark:text-cyan-500",children:"Create account"})]})]})})]})]})]})})},N=()=>e.jsx("div",{children:e.jsx(d,{children:`
    
    import { Button, Modal, Select } from "flowbite-react";
    import { useState } from "react";

    const [openModal, setOpenModal] = useState(true);
    const [modalPlacement, setModalPlacement] = useState('center')

    <div className="flex flex-wrap gap-4">
      <div className="w-40">
        <Select
          defaultValue="center"
          onChange={(event) => setModalPlacement(event.target.value)}
        >
          <option value="center">Center</option>
          <option value="top-left">Top left</option>
          <option value="top-center">Top center</option>
          <option value="top-right">Top right</option>
          <option value="center-left">Center left</option>
          <option value="center-right">Center right</option>
          <option value="bottom-right">Bottom right</option>
          <option value="bottom-center">Bottom center</option>
          <option value="bottom-left">Bottom left</option>
        </Select>
      </div>
      <Button
        onClick={() => setPlaceModal(true)}
        className="w-fit"
        color="error"
      >
        Toggle modal
      </Button>
    </div>
    <Modal
      show={placeModal}
      position={modalPlacement}
      onClose={() => setPlaceModal(false)}
    >
      <Modal.Header>Small modal</Modal.Header>
      <Modal.Body>
        <div className="space-y-6 p-6">
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            With less than a month to go before the European Union
            enacts new consumer privacy laws for its citizens,
            companies around the world are updating their terms of
            service agreements to comply.
          </p>
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            The European Union’s General Data Protection Regulation
            (G.D.P.R.) goes into effect on May 25 and is meant to
            ensure a common set of data rights in the European Union.
            It requires organizations to notify users as soon as
            possible of high-risk data breaches that could personally
            affect them.
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() => setPlaceModal(false)}
          className="bg-primary "
        >
          I accept
        </Button>
        <Button
          color="gray"
          onClick={() => setPlaceModal(false)}
          
        >
          Decline
        </Button>
      </Modal.Footer>
    </Modal>
              `})}),b=()=>{const[s,a]=l.useState(!1),[r,n]=l.useState("center");return e.jsx("div",{children:e.jsxs(c,{children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Placement options"}),e.jsx(N,{})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx("div",{className:"w-40",children:e.jsxs(x,{defaultValue:"center",onChange:i=>n(i.target.value),children:[e.jsx("option",{value:"center",children:"Center"}),e.jsx("option",{value:"top-left",children:"Top left"}),e.jsx("option",{value:"top-center",children:"Top center"}),e.jsx("option",{value:"top-right",children:"Top right"}),e.jsx("option",{value:"center-left",children:"Center left"}),e.jsx("option",{value:"center-right",children:"Center right"}),e.jsx("option",{value:"bottom-right",children:"Bottom right"}),e.jsx("option",{value:"bottom-center",children:"Bottom center"}),e.jsx("option",{value:"bottom-left",children:"Bottom left"})]})}),e.jsx(o,{onClick:()=>a(!0),className:"w-fit",color:"error",children:"Toggle Modal"})]}),e.jsxs(t,{show:s,position:r,onClose:()=>a(!1),children:[e.jsx(t.Header,{className:"pb-0",children:"Small modal"}),e.jsx(t.Body,{children:e.jsxs("div",{className:"space-y-6",children:[e.jsx("p",{className:"text-base leading-relaxed text-gray-500 dark:text-gray-400",children:"With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply."}),e.jsx("p",{className:"text-base leading-relaxed text-gray-500 dark:text-gray-400",children:"The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them."})]})}),e.jsxs(t.Footer,{children:[e.jsx(o,{onClick:()=>a(!1),className:"bg-primary ",children:"I accept"}),e.jsx(o,{color:"gray",onClick:()=>a(!1),children:"Decline"})]})]})]})]})})},w=()=>e.jsx("div",{children:e.jsx(d,{children:`
    
    import { Button, Modal } from "flowbite-react";
    import { useState } from "react";

    const [popupModal, setPopupModal] = useState(true);
    
    <Button
    onClick={() => setPopupModal(true)}
    className="w-fit"
    color="secondary">Pop-up modal</Button>
    <Modal
    show={popupModal}
    size="md"
    onClose={() => setPopupModal(false)}
    popup
    className="rounded-t-md"
    >
        <Modal.Header />
        <Modal.Body>
            <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                Are you sure you want to delete this product?
            </h3>
            <div className="flex justify-center gap-4">
                <Button color="error" onClick={() => setPopupModal(false)}>
                {"Yes, I'm sure"}
                </Button>
                <Button color="gray" onClick={() => setPopupModal(false)}>
                No, cancel
                </Button>
            </div>
            </div>
        </Modal.Body>   
    </Modal>
              `})}),C=()=>{const[s,a]=l.useState(!1);return e.jsx("div",{children:e.jsxs(c,{children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Pop-up Modal"}),e.jsx(w,{})]}),e.jsxs("div",{className:"mt-2",children:[e.jsx(o,{onClick:()=>a(!0),className:"w-full",color:"secondary",children:"Pop-up Modal"}),e.jsxs(t,{show:s,size:"md",onClose:()=>a(!1),popup:!0,className:"rounded-t-md",children:[e.jsx(t.Header,{}),e.jsx(t.Body,{children:e.jsxs("div",{className:"text-center",children:[e.jsx(f,{className:"mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200"}),e.jsx("h3",{className:"mb-5 text-lg font-normal text-gray-500 dark:text-gray-400",children:"Are you sure you want to delete this product?"}),e.jsxs("div",{className:"flex justify-center gap-4",children:[e.jsx(o,{color:"error",onClick:()=>a(!1),children:"Yes, I'm sure"}),e.jsx(o,{color:"gray",onClick:()=>a(!1),children:"No, cancel"})]})]})})]})]})]})})},k=()=>{const[s,a]=l.useState(!1),[r,n]=l.useState("md");return e.jsx("div",{children:e.jsx(c,{children:e.jsxs("div",{children:[e.jsx("h4",{className:"text-lg font-semibold ",children:"Sizing options"}),e.jsxs("div",{className:"flex flex-wrap gap-4 mt-4",children:[e.jsx("div",{className:"w-40",children:e.jsxs(x,{defaultValue:"md",onChange:i=>n(i.target.value),children:[e.jsx("option",{value:"sm",children:"sm"}),e.jsx("option",{value:"md",children:"md"}),e.jsx("option",{value:"lg",children:"lg"}),e.jsx("option",{value:"xl",children:"xl"}),e.jsx("option",{value:"2xl",children:"2xl"}),e.jsx("option",{value:"3xl",children:"3xl"}),e.jsx("option",{value:"4xl",children:"4xl"}),e.jsx("option",{value:"5xl",children:"5xl"}),e.jsx("option",{value:"6xl",children:"6xl"}),e.jsx("option",{value:"7xl",children:"7xl"})]})}),e.jsx(o,{onClick:()=>a(!0),className:"w-fit",color:"success",children:"Toggle Modal"})]}),e.jsxs(t,{show:s,size:r,onClose:()=>a(!1),children:[e.jsx(t.Header,{className:"pb-0",children:"Small modal"}),e.jsx(t.Body,{children:e.jsxs("div",{className:"space-y-6 ",children:[e.jsx("p",{className:"text-base leading-relaxed text-gray-500 dark:text-gray-400",children:"With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply."}),e.jsx("p",{className:"text-base leading-relaxed text-gray-500 dark:text-gray-400",children:"The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them."})]})}),e.jsxs(t.Footer,{children:[e.jsx(o,{onClick:()=>a(!1),className:"bg-primary ",children:"I accept"}),e.jsx(o,{color:"gray",onClick:()=>a(!1),children:"Decline"})]})]})]})})})},B=[{to:"/",title:"Home"},{title:"Modals"}],H=()=>e.jsxs(e.Fragment,{children:[e.jsx(g,{title:"Modals",items:B}),e.jsxs("div",{className:"grid grid-cols-12 gap-30",children:[e.jsx("div",{className:"lg:col-span-4 md:col-span-4 col-span-12",children:e.jsx(v,{})}),e.jsx("div",{className:"lg:col-span-4 md:col-span-4 col-span-12",children:e.jsx(C,{})}),e.jsx("div",{className:"lg:col-span-4 md:col-span-4 col-span-12",children:e.jsx(M,{})}),e.jsx("div",{className:"lg:col-span-6 md:col-span-6 col-span-12",children:e.jsx(k,{})}),e.jsx("div",{className:"lg:col-span-6 md:col-span-6 col-span-12",children:e.jsx(b,{})})]})]});export{H as default};
