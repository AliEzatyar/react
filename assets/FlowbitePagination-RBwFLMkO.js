import{j as e,r as o,bJ as r}from"./index-P2HWq5AB.js";import{C as i}from"./CardBox-iBHS77gx.js";import{C as c}from"./CodeModal-ZdVmlQAl.js";import{B as l}from"./BreadcrumbComp-BnVnHUMk.js";import"./toConsumableArray-B7RXd_Ox.js";import"./extends-CF3RwP-h.js";import"./core-DD6kpHa4.js";const g=()=>e.jsx("div",{children:e.jsx(c,{children:`
    
    import { Pagination } from "flowbite-react";
    import { useState } from "react";

    const [currentPage, setCurrentPage] = useState(1);
    const onPageChange = (page: number) => setCurrentPage(page);

      <Pagination
        currentPage={currentPage}
        totalPages={100}
        onPageChange={onPageChange}
      />
                `})}),x=()=>{const[t,a]=o.useState(1),n=s=>a(s);return e.jsx("div",{children:e.jsxs(i,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Default Pagination"}),e.jsx(g,{})]}),e.jsx("div",{className:"flex sm:justify-center",children:e.jsx(r,{currentPage:t,totalPages:100,onPageChange:n})})]})})},P=()=>e.jsx("div",{children:e.jsx(c,{children:`
    
    import { Pagination } from "flowbite-react";
    import { useState } from "react";

    const [controltextPage, setControltextPage] = useState(1);
    const onControtextChange = (page: number) => setControltextPage(page);

      <Pagination
        layout="pagination"
        currentPage={controltextPage}
        totalPages={1000}
        onPageChange={onControtextChange}
        previousLabel="Go back"
        nextLabel="Go forward"
        showIcons
      />
                `})}),u=()=>{const[t,a]=o.useState(1),n=s=>a(s);return e.jsx("div",{children:e.jsxs(i,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Pagination Control Button Text"}),e.jsx(P,{})]}),e.jsx("div",{className:"flex overflow-x-auto sm:justify-center",children:e.jsx(r,{layout:"pagination",currentPage:t,totalPages:1e3,onPageChange:n,previousLabel:"Go back",nextLabel:"Go forward",showIcons:!0})})]})})},d=()=>e.jsx("div",{children:e.jsx(c,{children:`
                  
      
      import { Pagination } from "flowbite-react";
      import { useState } from "react";

      const [currentPages, setCurrentPages] = useState(1);
      const onPageChanges = (page: number) => setCurrentPages(page);
      
      <Pagination
        currentPage={currentPages}
        totalPages={100}
        onPageChange={onPageChanges}
        showIcons
      />
                `})}),m=()=>{const[t,a]=o.useState(1),n=s=>a(s);return e.jsx("div",{children:e.jsxs(i,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Pagination With Icons"}),e.jsx(d,{})]}),e.jsx("div",{className:"flex sm:justify-center",children:e.jsx(r,{currentPage:t,totalPages:100,onPageChange:n,showIcons:!0})})]})})},h=()=>e.jsx("div",{children:e.jsx(c,{children:`
    
    import { Pagination } from "flowbite-react";
    import { useState } from "react";
    
    const [flowPagin, setFlowPagin] = useState(1);
    const onFlowChange = (page: number) => setFlowPagin(page);

      <Pagination
        layout="navigation"
        currentPage={flowPagin}
        totalPages={100}
        onPageChange={onFlowChange}
      />
                `})}),j=()=>{const[t,a]=o.useState(1),n=s=>a(s);return e.jsx("div",{children:e.jsxs(i,{children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h4",{className:"text-lg font-semibold mb-2",children:"Previous And Next Button"}),e.jsx(h,{})]}),e.jsx("div",{className:"flex overflow-x-auto sm:justify-center py-4",children:e.jsx(r,{layout:"navigation",currentPage:t,totalPages:100,onPageChange:n})})]})})},f=()=>e.jsx("div",{children:e.jsx(c,{children:`
                  
      
      import { Pagination } from "flowbite-react";
      import { useState } from "react";

      const [currentPages, setCurrentPages] = useState(1);
      const onPageChanges = (page: number) => setCurrentPages(page);
      
      <Pagination
        currentPage={currentPages}
        totalPages={100}
        onPageChange={onPageChanges}
        showIcons
      />
                `})}),C=()=>{const[t,a]=o.useState(1),n=s=>a(s);return e.jsx("div",{children:e.jsxs(i,{children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h4",{className:"text-lg font-semibold mb-2",children:"With Icon"}),e.jsx(f,{})]}),e.jsx("div",{className:"flex overflow-x-auto sm:justify-center py-4",children:e.jsx(r,{layout:"navigation",currentPage:t,totalPages:100,onPageChange:n,showIcons:!0})})]})})},b=()=>e.jsx("div",{children:e.jsx(c,{children:`
    
    import { Pagination } from "flowbite-react";
    import { useState } from "react";

    const [tablePage, setTablePage] = useState(1);
    const onTableChange = (page: number) => setTablePage(page);

      <Pagination
        layout="table"
        currentPage={tablePage}
        totalPages={100}
        onPageChange={onTableChange}
        showIcons
      />
                `})}),p=()=>{const[t,a]=o.useState(1),n=s=>a(s);return e.jsx("div",{children:e.jsxs(i,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Table Data Navigation"}),e.jsx(b,{})]}),e.jsx("div",{className:"flex overflow-x-auto sm:justify-center",children:e.jsx(r,{layout:"table",currentPage:t,totalPages:100,onPageChange:n,showIcons:!0})})]})})},v=[{to:"/",title:"Home"},{title:"Pagination"}],B=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Pagination",items:v}),e.jsxs("div",{className:"grid grid-cols-12 gap-30",children:[e.jsx("div",{className:"lg:col-span-6 col-span-12",children:e.jsx(x,{})}),e.jsx("div",{className:"lg:col-span-6 col-span-12",children:e.jsx(m,{})}),e.jsx("div",{className:"lg:col-span-4 col-span-12",children:e.jsx(j,{})}),e.jsx("div",{className:"lg:col-span-4 col-span-12",children:e.jsx(C,{})}),e.jsx("div",{className:"lg:col-span-4 col-span-12",children:e.jsx(p,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(u,{})})]})]});export{B as default};
