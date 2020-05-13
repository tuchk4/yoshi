(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{161:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(2),i=n(6),a=(n(0),n(229)),o={id:"getting-started",title:"Getting Started",sidebar_label:"Getting Started"},s={id:"version-4.x/yoshi-server/getting-started",title:"Getting Started",description:"Welcome to Yoshi Server documentation!",source:"@site/versioned_docs/version-4.x/yoshi-server/getting-started.md",permalink:"/yoshi/docs/yoshi-server/getting-started",editUrl:"https://github.com/wix/yoshi/edit/master/website/versioned_docs/version-4.x/yoshi-server/getting-started.md",version:"4.x",lastUpdatedBy:"Ran Yitzhaki",lastUpdatedAt:1589364391,sidebar_label:"Getting Started",sidebar:"version-4.x/yoshi-server",next:{title:"Consuming Data from the Server",permalink:"/yoshi/docs/yoshi-server/consuming-data-from-the-server"}},c=[{value:"Why we built Yoshi Server",id:"why-we-built-yoshi-server",children:[]},{value:"Setup",id:"setup",children:[]},{value:"Manual setup",id:"manual-setup",children:[]},{value:"Adding your first Yoshi Server function",id:"adding-your-first-yoshi-server-function",children:[]}],l={rightToc:c};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Welcome to Yoshi Server documentation!"),Object(a.b)("p",null,"Yoshi Server makes it easier to consume data from the server by adding an abstraction over client server communication, using conventions."),Object(a.b)("h2",{id:"why-we-built-yoshi-server"},"Why we built Yoshi Server"),Object(a.b)("h4",{id:"less-boilerplate"},"Less boilerplate"),Object(a.b)("p",null,"With Yoshi Server, there's no need to setup a ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/wix-platform/wix-node-platform"}),"node-platform")," server."),Object(a.b)("h4",{id:"type-safety-for-client-server-communication"},"Type safety for client-server communication"),Object(a.b)("p",null,"When using Typescript, client-server communication is fully typed."),Object(a.b)("h4",{id:"better-error-handling"},"Better error handling"),Object(a.b)("p",null,"Yoshi Server handles server errors and displays them on your browser."),Object(a.b)("h4",{id:"built-in-hmr-support"},"Built in HMR support"),Object(a.b)("p",null,"HMR support out of the box, no need to setup anything."),Object(a.b)("h4",{id:"get-updates-easier"},"Get updates easier"),Object(a.b)("p",null,"With Yoshi server, it will be easier to ship updates without breaking changes."),Object(a.b)("h2",{id:"setup"},"Setup"),Object(a.b)("p",null,"We recommend creating a new Yoshi Server app using the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://wix.github.io/yoshi/docs/getting-started/create-app"}),Object(a.b)("inlineCode",{parentName:"a"},"create-yoshi-app")),". It is available for both Fullstack and Business Manager apps."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npx create-yoshi-app my-app-name\n")),Object(a.b)("h2",{id:"manual-setup"},"Manual setup"),Object(a.b)("h5",{id:"prerequisits"},"Prerequisits"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"A fullstack app (both server and client are together, using the same ",Object(a.b)("inlineCode",{parentName:"li"},"package.json")," file)."),Object(a.b)("li",{parentName:"ul"},"We currently support only projects using the ",Object(a.b)("inlineCode",{parentName:"li"},"app-flow"),' ("projectType": "app" in your Yoshi configuration). If you do not use it, please migrate first (see ',Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://wix.github.io/yoshi/docs/guides/app-flow"}),"https://wix.github.io/yoshi/docs/guides/app-flow")," for more details)")),Object(a.b)("p",null,"Install ",Object(a.b)("inlineCode",{parentName:"p"},"yoshi-server")," and ",Object(a.b)("inlineCode",{parentName:"p"},"yoshi-server-client"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"npm install yoshi-server yoshi-server-client\n")),Object(a.b)("p",null,"Update ",Object(a.b)("inlineCode",{parentName:"p"},"yoshi.config.js")," of ",Object(a.b)("inlineCode",{parentName:"p"},"package.json"),"'s ",Object(a.b)("inlineCode",{parentName:"p"},"yoshi")," section:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-diff"}),'"yoshi": {\n  "projectType": "app",\n+  "yoshiServer": true,\n...\n}\n')),Object(a.b)("p",null,"Set your server to handle requests"),Object(a.b)("p",null,"Yoshi Server will handle server requests by convention (see ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"consuming-data-from-the-server#server-functions"}),"server functions")," and ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"exposing-route"}),"route functions"),"). All we have to do is bootstrap it from our ",Object(a.b)("inlineCode",{parentName:"p"},"index.js")," file:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'require("yoshi-server/bootstrap");\n')),Object(a.b)("p",null,"Now you are ready to add your first Yoshi Server function."),Object(a.b)("h2",{id:"adding-your-first-yoshi-server-function"},"Adding your first Yoshi Server function"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Files with ",Object(a.b)("inlineCode",{parentName:"p"},".api.js")," or ",Object(a.b)("inlineCode",{parentName:"p"},".api.ts")," extention with named export functions will be treated as ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"consuming-data-from-the-server#server-functions"}),"server functions"),".")),Object(a.b)("p",null,"Add a ",Object(a.b)("inlineCode",{parentName:"p"},"greet.api.ts")," file to your project (if your project is in Javascript, use ",Object(a.b)("inlineCode",{parentName:"p"},".js")," for all examples):"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'// greet.api.ts\nimport { method } from "yoshi-server";\n\nexport const greeting = method(function(name: string) {\n  return {\n    greet: `hello ${name}!`,\n    name\n  };\n});\n')),Object(a.b)("p",null,"Now that we have our first server function (",Object(a.b)("inlineCode",{parentName:"p"},"greeting"),"), let's consume the data from our client code."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'import HttpClient from "yoshi-server-client";\nimport { greeting } from "./greet.api";\n\nconst client = new HttpClient();\n\nclient.request({ method: greeting, args: ["John"] }).then(data => {\n  console.log(data.greet);\n});\n')),Object(a.b)("p",null,"That's it!"),Object(a.b)("p",null,"Running ",Object(a.b)("inlineCode",{parentName:"p"},"npx yoshi start")," shows ",Object(a.b)("inlineCode",{parentName:"p"},"hello John")," in the console."),Object(a.b)("h4",{id:"what-just-happened-here"},"What just happened here?"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"yoshi-server-client")," is triggering xhr calls behind the scenes."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"yoshi-server")," has one endpoint, ",Object(a.b)("inlineCode",{parentName:"li"},"_api_")," (open devtools to see it). All requests are made as ",Object(a.b)("inlineCode",{parentName:"li"},"post")," requests, with data about the function that we want to call and the arguments."),Object(a.b)("li",{parentName:"ul"},"If you are using Typescript, server arguments and response are typed!"),Object(a.b)("li",{parentName:"ul"},"For Business Manager modules, all API requests to ",Object(a.b)("inlineCode",{parentName:"li"},"/_api/projectName")," are mapped to ",Object(a.b)("inlineCode",{parentName:"li"},"/_api_")," (Yoshi Server)")))}p.isMDXComponent=!0},229:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},b=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(n),d=r,h=b["".concat(o,".").concat(d)]||b[d]||u[d]||a;return n?i.a.createElement(h,s({ref:t},l,{components:n})):i.a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);