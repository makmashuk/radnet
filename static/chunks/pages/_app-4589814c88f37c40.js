(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1118:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return c(2603)}])},2184:function(a,b,c){"use strict";c.d(b,{U:function(){return g},i:function(){return h}});var d=c(5893),e=c(7294),f=c(7280),g=(0,e.createContext)(),h=function(a){var b=a.children,c=(0,e.useReducer)(f.I6,f.E3),h=c[0],i=c[1];return(0,d.jsx)(g.Provider,{value:{state:h,dispatch:i},children:void 0===b?null:b})}},2603:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return n}});var d=c(1799),e=c(5893),f=c(7294);function g(){return(0,e.jsx)("nav",{children:(0,e.jsx)("div",{className:"bg-neutral-100",children:(0,e.jsx)("div",{className:"container",children:(0,e.jsxs)("h1",{className:"padding-block-500 fs-700",children:["Saige",(0,e.jsx)("span",{style:{color:"#2bb449"},children:"QA"})]})})})})}var h=c(1163),i=c(7516),j=[{id:"46f7dc9b-e75d-40e0-8d14-1e7334d16d5e",link:"/dashboard/practice-overview",title:"Home",icon:""},{id:"46f7dc9b-e75d-40e0-8d14-1e7334d16d5ee",link:"/",title:"Home1",icon:""},{id:"46f7dc9b-e75d-40e0-8d14-1e7334d16d5eee",link:"/",title:"Home2",icon:""},{id:"46f7dc9b-e75d-40e0-8d14-1e7334d16d5eeee",link:"/",title:"Home3",icon:""},];function k(){var a=(0,h.useRouter)(),b=(0,f.useState)("46f7dc9b-e75d-40e0-8d14-1e7334d16d5e"),c=b[0],d=b[1],g=function(b){console.log(b),d(b.id),a.push(b.link)};return(0,e.jsx)("nav",{style:{position:"fixed",height:"100%",width:"75px",background:"var(--clr-sidebar-bg)",padding:"20px 0"},children:j.map(function(a){return(0,e.jsxs)("div",{className:"sidebar__link ".concat(c===a.id?"active":null),onClick:function(){return g(a)},children:[(0,e.jsx)("div",{className:"triangle1"}),(0,e.jsx)("div",{className:"sidebar__link_icon",children:(0,e.jsx)(i.OKt,{size:25,color:c===a.id?"black":"white"})}),(0,e.jsx)("div",{className:"triangle2"})]},a.id)})})}function l(a){var b=a.children;return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{children:(0,e.jsx)(k,{})}),(0,e.jsxs)("main",{style:{marginLeft:"75px"},children:[(0,e.jsx)(g,{}),b]})]})}var m=c(2184);c(906);var n=function(a){var b=a.Component,c=a.pageProps;return(0,e.jsx)(m.i,{children:(0,e.jsx)(l,{children:(0,e.jsx)(b,(0,d.Z)({},c))})})}},7280:function(a,b,c){"use strict";c.d(b,{E3:function(){return e},GJ:function(){return g},I6:function(){return f}});var d={CHANGE_BREADCRUMB:"CHANGE_BREADCRUMB"},e=[{title:"Dashboard",link:"dashboard",current:!0},],f=function(){arguments.length>0&& void 0!==arguments[0]&&arguments[0];var a=arguments.length>1?arguments[1]:void 0;if(a.type===d.CHANGE_BREADCRUMB)return a.payload;throw Error("Unhandled action type: ".concat(a.type))},g=function(){var a=arguments.length>0&& void 0!==arguments[0]?arguments[0]:null;return{type:d.CHANGE_BREADCRUMB,payload:a}}},906:function(){},1163:function(a,b,c){a.exports=c(387)},7516:function(a,b,c){"use strict";c.d(b,{DaR:function(){return f},OKt:function(){return g},"Ol$":function(){return e}});var d=c(8357);function e(a){return(0,d.w_)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M21 3H5a1 1 0 0 0-1 1v2.59c0 .523.213 1.037.583 1.407L10 13.414V21a1.001 1.001 0 0 0 1.447.895l4-2c.339-.17.553-.516.553-.895v-5.586l5.417-5.417c.37-.37.583-.884.583-1.407V4a1 1 0 0 0-1-1zm-6.707 9.293A.996.996 0 0 0 14 13v5.382l-2 1V13a.996.996 0 0 0-.293-.707L6 6.59V5h14.001l.002 1.583-5.71 5.71z"}}]})(a)}function f(a){return(0,d.w_)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M5 22h14a2 2 0 0 0 2-2v-9a1 1 0 0 0-.29-.71l-8-8a1 1 0 0 0-1.41 0l-8 8A1 1 0 0 0 3 11v9a2 2 0 0 0 2 2zm5-2v-5h4v5zm-5-8.59 7-7 7 7V20h-3v-5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v5H5z"}}]})(a)}function g(a){return(0,d.w_)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586 6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z"}}]})(a)}},8357:function(a,b,c){"use strict";c.d(b,{w_:function(){return j}});var d=c(7294),e={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},f=d.createContext&&d.createContext(e),g=function(){return(g=Object.assign||function(a){for(var b,c=1,d=arguments.length;c<d;c++)for(var e in b=arguments[c])Object.prototype.hasOwnProperty.call(b,e)&&(a[e]=b[e]);return a}).apply(this,arguments)},h=function(a,b){var c={};for(var d in a)Object.prototype.hasOwnProperty.call(a,d)&&0>b.indexOf(d)&&(c[d]=a[d]);if(null!=a&&"function"==typeof Object.getOwnPropertySymbols)for(var e=0,d=Object.getOwnPropertySymbols(a);e<d.length;e++)0>b.indexOf(d[e])&&Object.prototype.propertyIsEnumerable.call(a,d[e])&&(c[d[e]]=a[d[e]]);return c};function i(a){return a&&a.map(function(a,b){return d.createElement(a.tag,g({key:b},a.attr),i(a.child))})}function j(a){return function(b){return d.createElement(k,g({attr:g({},a.attr)},b),i(a.child))}}function k(a){var b=function(b){var c,e=a.attr,f=a.size,i=a.title,j=h(a,["attr","size","title"]),k=f||b.size||"1em";return b.className&&(c=b.className),a.className&&(c=(c?c+" ":"")+a.className),d.createElement("svg",g({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},b.attr,e,j,{className:c,style:g(g({color:a.color||b.color},b.style),a.style),height:k,width:k,xmlns:"http://www.w3.org/2000/svg"}),i&&d.createElement("title",null,i),a.children)};return void 0!==f?d.createElement(f.Consumer,null,function(a){return b(a)}):b(e)}},1799:function(a,b,c){"use strict";function d(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function e(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},e=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),e.forEach(function(b){d(a,b,c[b])})}return a}c.d(b,{Z:function(){return e}})}},function(a){var b=function(b){return a(a.s=b)};a.O(0,[774,179],function(){return b(1118),b(387)}),_N_E=a.O()}])