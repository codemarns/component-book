import{j as e}from"./jsx-runtime-ffb262ed.js";import{r as o,R as T}from"./index-76fb7be0.js";import{v as I}from"./v4-4a60fe23.js";import{B as f,c as x,S as j}from"./SvgIcon-b8a51d03.js";import"./_commonjsHelpers-de833af9.js";function q(a,r){switch(r.type){case"add":return[...a,{id:I()}];case"remove":return a.filter(s=>s.id!==r.id);case"remove-all":return[];default:throw Error("Unkown type: "+r.type)}}const D={main:{base:"h-screen w-screen bg-primary-50 text-default-800 overflow-hidden"},sidebar:{base:"fixed inset-0 z-[1] !right-0 h-full bg-default-900 text-default-50 duration-500 ease transition-all",screen:{default:{appearance:{expand:{base:"w-[256px]"},minimize:{base:"w-[80px]"}}},mobile:{appearance:{show:{base:"w-[256px] ml-0"},hide:{base:"w-[256px] -ml-[256px]"}}}},header:{base:"h-16 px-4 flex-1 flex items-center justify-end",icon:{base:"cursor-pointer"}}},wrapper:{base:"h-full w-full overflow-hidden duration-500 ease transition-all",screen:{default:{appearance:{auto:{base:"pl-[80px] xl:pl-[256px]"},contain:{base:"pl-[80px]"}}},mobile:{base:"pl-0"}}},container:{base:"relative h-full min-h-full w-full overflow-x-hidden overflow-y-auto duration-500 ease transition-all"},header:{base:"sticky top-0 h-16 w-full px-4 bg-white border-b border-default-100/50 flex items-center justify-between",icon:{base:"cursor-pointer hover:text-default-950"},actiops:{base:"flex items-center gap-4",item:{base:"w-12 h-12 rounded-full bg-primary-100/50"}}},content:{base:"w-full min-h-[calc(100%-7rem)] p-4"},footer:{base:"sticky bottom-0 h-12 w-full px-4 bg-default-50 text-default-300 flex items-center justify-center"}},u=o.createContext({}),L=o.createContext({}),b=()=>{const{tasks:a,onAddItem:r,onRemoveAllItem:s}=o.useContext(u);return e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(f,{label:"Add",icon:"plus",onClick:r}),e.jsx(f,{icon:"trash",color:"danger",label:"Remove All",disabled:(a==null?void 0:a.length)===0,onClick:s})]})};try{b.displayName="Actions",b.__docgenInfo={description:"",displayName:"Actions",props:{tasks:{defaultValue:null,description:"",name:"tasks",required:!1,type:{name:"TaskProps[]"}},onAddItem:{defaultValue:null,description:"",name:"onAddItem",required:!1,type:{name:"(() => void)"}},onRemoveAllItem:{defaultValue:null,description:"",name:"onRemoveAllItem",required:!1,type:{name:"(() => void)"}}}}}catch{}const h=({id:a})=>{const{onRemoveItem:r}=o.useContext(u),s={root:{base:"group h-auto p-4 space-y-8 bg-white border hover:shadow-lg hover:scale-[1.0025] rounded-xl transition-all",header:{base:"",title:{base:"group-hover:text-primary break-words"}},actions:{base:"flex-1 flex items-center justify-end"}}},{root:n}=s;return e.jsxs("div",{id:a,className:n.base,children:[e.jsxs("p",{children:["Task ID: ",e.jsx("b",{className:n.header.title.base,children:a})]}),e.jsx("div",{className:n.actions.base,children:e.jsx(f,{label:"Remove",icon:"trash",color:"danger",variant:"outline",onClick:()=>r(a)})})]})};try{h.displayName="Task",h.__docgenInfo={description:"",displayName:"Task",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}}}}}catch{}const V=()=>e.jsx("div",{className:"flex-1 h-[100px] text-center",children:"No records found."}),v=()=>{const{tasks:a,column:r=1}=o.useContext(u),s={root:{base:"grid grid-cols-1 gap-4 p-4 bg-default-50 rounded-xl",column:{1:"grid-cols-1",2:"grid-cols-2",3:"grid-cols-3",4:"grid-cols-4",5:"grid-cols-5",6:"grid-cols-6",7:"grid-cols-7",8:"grid-cols-8",9:"grid-cols-9",10:"grid-cols-10",11:"grid-cols-11",12:"grid-cols-12"}}},{root:n}=s;return(a==null?void 0:a.length)===0?e.jsx(V,{}):e.jsx("div",{className:x(n.base,n.column[r]),children:a==null?void 0:a.map(t=>e.jsx(h,{id:t.id},t.id))})};try{v.displayName="TaskList",v.__docgenInfo={description:"",displayName:"TaskList",props:{column:{defaultValue:null,description:"",name:"column",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"9"},{value:"10"},{value:"11"},{value:"12"}]}}}}}catch{}const M=[],w=a=>{const{column:r=1,onChange:s}=a,[n,t]=o.useReducer(q,M),p=()=>{t({type:"add",id:I()})},c=l=>{t({type:"remove",id:l})},m=()=>{t({type:"remove-all",id:""})};return T.useEffect(()=>{s&&s(n)},[n]),e.jsx(u.Provider,{value:{tasks:n,column:r,onAddItem:p,onRemoveItem:c,onRemoveAllItem:m},children:e.jsx(L.Provider,{value:t,children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(b,{}),e.jsx(v,{})]})})})};try{w.displayName="Crud",w.__docgenInfo={description:"",displayName:"Crud",props:{column:{defaultValue:null,description:"",name:"column",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"9"},{value:"10"},{value:"11"},{value:"12"}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((tasks: TaskProps[]) => void)"}}}}}catch{}const g=()=>{const[a,r]=o.useState(!0),[s,n]=o.useState(window.innerWidth<=768),[t,p]=o.useState(window.innerWidth>=1280);o.useEffect(()=>{r(!!t)},[t]),o.useEffect(()=>{const _=()=>{n(window.innerWidth<=768),p(window.innerWidth>=1280)};return window.addEventListener("resize",_),()=>{window.removeEventListener("resize",_)}},[t,s]);const c=()=>{r(!a)},{main:m,sidebar:l,wrapper:i,container:k,header:y,content:R,footer:A}=D,E=x(l.base,s?a?l.screen.mobile.appearance.show.base:l.screen.mobile.appearance.hide.base:a?l.screen.default.appearance.expand.base:l.screen.default.appearance.minimize.base),z=x(i.base,s?i.screen.mobile.base:a?i.screen.default.appearance.auto.base:i.screen.default.appearance.contain.base);return e.jsxs("main",{className:m.base,children:[e.jsx("aside",{className:E,children:e.jsx("div",{className:l.header.base,children:a&&!t&&e.jsx(j,{size:"lg",path:"M6 18L18 6M6 6l12 12",className:l.header.icon.base,onClick:c})})}),e.jsx("div",{className:z,children:e.jsxs("div",{className:k.base,children:[e.jsx("header",{className:y.base,children:e.jsx(j,{size:"lg",path:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5",className:y.icon.base,onClick:c})}),e.jsxs("div",{className:R.base,children:[e.jsxs("span",{children:["Expand Sidebar:"," ",e.jsx("b",{className:a?"text-success":"text-default",children:a?"true":"false"})]}),e.jsx("hr",{}),e.jsxs("span",{children:["Window Size >= 1024: ",e.jsx("b",{className:t?"text-success":"text-default",children:t?"true":"false"})]}),e.jsx("hr",{}),e.jsxs("span",{children:["Mobile Size <= 768: ",e.jsx("b",{className:s?"text-success":"text-default",children:s?"true":"false"})]})]}),e.jsx("footer",{className:A.base,children:"Footer"})]})})]})};try{g.displayName="Sidebar",g.__docgenInfo={description:"",displayName:"Sidebar",props:{}}}catch{}const O={component:g,title:"Utilities/Sidebar",tags:["autodocs"],argTypes:{}},d={args:{},parameters:{layout:"fullscreen"}};var N,C,S;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {},
  parameters: {
    layout: "fullscreen"
  }
}`,...(S=(C=d.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};const G=["Default"];export{d as Default,G as __namedExportsOrder,O as default};
//# sourceMappingURL=Sidebar.stories-6a758fcf.js.map
