(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{165:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return b}));var a=n(2),i=n(9),o=(n(0),n(278)),r={id:"dev-center-registration",title:"Dev Center Registration",sidebar_label:"Dev Center Registration"},l={id:"version-4.x/editor-flow/dev-center-registration",title:"Dev Center Registration",description:"> Note: Currently, dev center is new and not stable. You can't create an out of iframe app just using dev center. You have to use rpc calls to app service to configure correctly your widget.",source:"@site/versioned_docs/version-4.x/editor-flow/dev-center-registration.md",permalink:"/yoshi/docs/editor-flow/dev-center-registration",editUrl:"https://github.com/wix/yoshi/edit/master/website/versioned_docs/version-4.x/editor-flow/dev-center-registration.md",version:"4.x",lastUpdatedBy:"Artem Yavorsky",lastUpdatedAt:1589444600,sidebar_label:"Dev Center Registration"},p=[{value:"Register an app in dev center manually",id:"register-an-app-in-dev-center-manually",children:[]},{value:"Create your app&#39;s components (local development)",id:"create-your-apps-components-local-development",children:[]},{value:"Troubleshooting new app registration",id:"troubleshooting-new-app-registration",children:[]}],c={rightToc:p};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Note: Currently, dev center is new and not stable. You can't create an out of iframe app just using dev center. You have to use rpc calls to app service to configure correctly your widget.")),Object(o.b)("h3",{id:"register-an-app-in-dev-center-manually"},"Register an app in dev center manually"),Object(o.b)("p",null,"Initially, you probably need the app configured to work with your localhost. So all next examples are based on local configuration."),Object(o.b)("p",null,"Steps to register your app in dev center:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Just go to the new dev center: ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://dev.wix.com/dc3/my-apps"}),"https://dev.wix.com/dc3/my-apps")),Object(o.b)("li",{parentName:"ul"},"Click ",Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"Create New App"))," on the top right."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"(Optional, but useful)"),": Rename your app: Go to ",Object(o.b)("strong",{parentName:"li"},"Market Listing")," -> ",Object(o.b)("strong",{parentName:"li"},"App Name")," and change the name to something you want.")),Object(o.b)("h3",{id:"create-your-apps-components-local-development"},"Create your app's components (local development)"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Platform component")," (required)"),Object(o.b)("blockquote",{parentName:"li"},Object(o.b)("p",{parentName:"blockquote"},"Each app should contain one platform component. This component responsible for loading ",Object(o.b)("inlineCode",{parentName:"p"},"viewerScript")," for your app which all collects OOI widgets and OOI Page controllers."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("em",{parentName:"p"},"Register platform component (viewerScript):")),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Pick some name for your platform component."),Object(o.b)("li",{parentName:"ul"},"Add ",Object(o.b)("inlineCode",{parentName:"li"},"viewerScript")," url to ",Object(o.b)("inlineCode",{parentName:"li"},"Viewer URL")," field. For example, for local development it will be ",Object(o.b)("inlineCode",{parentName:"li"},"https://localhost:3200/viewerScript.bundle.js"),"."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"OOI Widget")," / ",Object(o.b)("strong",{parentName:"p"},"OOI Page")),Object(o.b)("blockquote",{parentName:"li"},Object(o.b)("p",{parentName:"blockquote"},"Out of Iframe Component, which contain UI logic as a React Component and functional logic as a controller. Being rendered on both editor and viewer parts. You should create new OOI widget for each widget in your project. This approach will be automated in future."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("em",{parentName:"p"},"Register Out of iFrame Widget (viewerWidget + editor endpoints):")),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Fill the name of your component.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"In ",Object(o.b)("strong",{parentName:"p"},"Widget Info")," section add ",Object(o.b)("inlineCode",{parentName:"p"},"[:componentName]ViewerWidget")," url to ",Object(o.b)("inlineCode",{parentName:"p"},"Component URL"),". For example, ",Object(o.b)("inlineCode",{parentName:"p"},"https://localhost:3200/buttonViewerWidget.bundle.js"),". This will configure platform to render component in viewer.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"In ",Object(o.b)("strong",{parentName:"p"},"Widget Endpoints")," section add:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Editor endpoint to render your widget via ",Object(o.b)("inlineCode",{parentName:"li"},"Component URL"),". It could be your server or static html file url (see more: ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/wix/yoshi/issues/2013"}),"#2013"),"), which will be rendered in iFrame by platform. For local development (after you start the app by ",Object(o.b)("inlineCode",{parentName:"li"},"yoshi-flow-editor start"),") it will be available by: ",Object(o.b)("inlineCode",{parentName:"li"},"https://localhost:3000/editor/:componentName"),"."),Object(o.b)("li",{parentName:"ul"},"Settings Panel endpoint. Server or static html url which will render settings for your widget. For local development it will be ",Object(o.b)("inlineCode",{parentName:"li"},"https://localhost:3000/settings/:componentName"),"."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Update your ",Object(o.b)("strong",{parentName:"p"},"local app"),". Each widget should be represented by component in your app. To map dev center widget with your component just add ",Object(o.b)("inlineCode",{parentName:"p"},'"id": "{Widget ID}"')," to ",Object(o.b)("inlineCode",{parentName:"p"},".component.json")," in the component's directory. This will allow yoshi to create all the magic under the hood."))))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"OOI Page")," - The same as OOI Widget, but renders as a page. After adding it to your site, you can see it in the top left website navigation or via specific page url on the viewer site. The dev center configuration process is pretty the same as OOI Widget.")),Object(o.b)("h3",{id:"troubleshooting-new-app-registration"},"Troubleshooting new app registration"),Object(o.b)("p",null,"Currently, new dev center is not supporting some features."),Object(o.b)("h5",{id:"needed-fields-is-missing-for-newly-created-apps"},"Needed fields is missing for newly created apps"),Object(o.b)("p",null,"You can find out that your app is not appearing on your website after installation or clicking ",Object(o.b)("inlineCode",{parentName:"p"},"Test Your App"),". Other issue is that only one widget is loading on the website."),Object(o.b)("p",null,"To review your app's model, visit\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://dev.wix.com/_api/app-service/v1/apps/%7BappDefinitionId%7D"}),"https://dev.wix.com/_api/app-service/v1/apps/{appDefinitionId}")),Object(o.b)("p",null,"The main thing here is ",Object(o.b)("inlineCode",{parentName:"p"},"components")," array. There are 2 issues:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"At least one component should have ",Object(o.b)("inlineCode",{parentName:"li"},"default: true")," field."),Object(o.b)("li",{parentName:"ul"},"If we want to load multiple widgets on the same time, we should add ",Object(o.b)("inlineCode",{parentName:"li"},"essential: true")," to component's that are not default, but should be loaded with it.")),Object(o.b)("p",null,"Since Dev Center is not supporting it for now, we can use RPC calls bypassing Dev Center:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Connect to VPN."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://pbo.wixpress.com/rpc-console-poc/app-service-webapp/ip-10-43-142-184.ec2.internal/Components/update?W3siY29tcFR5cGUiOiJXSURHRVRfT1VUX09GX0lGUkFNRSIsImNvbXBOYW1lIjoiYnV0dG9uIG9rb2siLCJjb21wSWQiOiIvLyBDT1BZIEZST00gREVWX0NFTlRFUiIsImFwcElkIjoiLy8gQ09QWSBGUk9NIERFVl9DRU5URVIiLCJjb21wRGF0YSI6eyJ3aWRnZXRPdXRPZklmcmFtZURhdGEiOnsid2lkZ2V0RGF0YSI6eyJzZW9FbmRwb2ludFVybCI6bnVsbCwic2V0dGluZ3NFbmRwb2ludFVybCI6Imh0dHBzOi8vbG9jYWxob3N0OjMwMDAvc2V0dGluZ3MvYnV0dG9uIiwid2lkZ2V0RW5kcG9pbnRVcmwiOiJodHRwczovL2xvY2FsaG9zdDozMDAwL2VkaXRvci9idXR0b24iLCJlc3NlbnRpYWwiOnRydWUsInB1Ymxpc2hlZCI6ZmFsc2UsImhlaWdodCI6MjUwLCJmaXhlZFBvc2l0aW9uT3B0aW9uIjp7IndpZGdldEhvcml6b250YWwiOiJOT05FX0hPUklaT05UQUwiLCJ3aWRnZXRWZXJ0aWNhbCI6Ik5PTkVfVkVSVElDQUwifSwid2lkZ2V0TW9iaWxlRW5kcG9pbnRVcmwiOm51bGwsIndpZGdldERpc3BsYXkiOm51bGwsIndpZGdldFdpZHRoVHlwZSI6IkNVU1RPTSIsInRwYVdpZGdldElkIjoiLy8gdGhlIHNhbWUgYXMgY29tcElkIiwiZGVmYXVsdCI6dHJ1ZSwicG9zaXRpb24iOm51bGwsIndpZHRoIjoyNTAsImFkZE9ubHlPbmNlIjpmYWxzZX0sImNvbnRyb2xsZXJVcmwiOm51bGwsImNvbXBvbmVudFVybCI6Imh0dHBzOi8vbG9jYWxob3N0OjMyMDAvYnV0dG9uVmlld2VyV2lkZ2V0LmJ1bmRsZS5qcyJ9fX1d.eyJ3aXhTZXNzaW9uIjoiIn0="}),"Go to RPC console"),". Sign in if needed"),Object(o.b)("li",{parentName:"ul"},"Go to ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://dev.wix.com/dc3/my-apps"}),"Dev Center")," and select your app. (You will need this to copy app id and component id)."),Object(o.b)("li",{parentName:"ul"},"Fill ",Object(o.b)("inlineCode",{parentName:"li"},"appId")," from Dev center's ",Object(o.b)("inlineCode",{parentName:"li"},"Dashboard")," -> ",Object(o.b)("inlineCode",{parentName:"li"},"App ID"),"."),Object(o.b)("li",{parentName:"ul"},"Fill ",Object(o.b)("inlineCode",{parentName:"li"},"compId")," from Dev center's ",Object(o.b)("inlineCode",{parentName:"li"},"Components")," -> ",Object(o.b)("inlineCode",{parentName:"li"},"{Your OOI Component}")," -> ",Object(o.b)("inlineCode",{parentName:"li"},"Widget ID"),". Paste the same value to  ",Object(o.b)("inlineCode",{parentName:"li"},"tpaWidgetId")," field."),Object(o.b)("li",{parentName:"ul"},"Verify ",Object(o.b)("inlineCode",{parentName:"li"},"essential"),", ",Object(o.b)("inlineCode",{parentName:"li"},"default")," (if it's first component) selected."),Object(o.b)("li",{parentName:"ul"},"Paste your WixSession token to ",Object(o.b)("inlineCode",{parentName:"li"},"Identity")," -> ",Object(o.b)("inlineCode",{parentName:"li"},"WixSession")," at the bottom of RPC console. You can take this token from your cookie. It's everything that is going after ",Object(o.b)("inlineCode",{parentName:"li"},"wixSession2=")," untill ",Object(o.b)("inlineCode",{parentName:"li"},";")," or end of string.")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"All fields will be set to default after you update it from Dev Center again. So, if you have some issues and using RPC to fix it, please don't update the same components via Dev Center, untill issues will be resolved on it's side.")),Object(o.b)("h5",{id:"versions-are-not-being-updated-automatically"},"Versions are not being updated automatically"),Object(o.b)("p",null,"Currently, Dev Center is not updating new versions via ",Object(o.b)("inlineCode",{parentName:"p"},".ci_config"),". Only manual updating approach is working if you created a new RC version.\nJust go to component's configuration and update versions for all needed urls:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-diff"}),"- https://static.parastorage.com/services/{artifactId}/1.34.0/labelViewerWidget.bundle.min.js\n+ https://static.parastorage.com/services/{artifactId}/1.35.0/labelViewerWidget.bundle.min.js\n")))}b.isMDXComponent=!0},278:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),b=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},s=function(e){var t=b(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=b(n),m=a,u=s["".concat(r,".").concat(m)]||s[m]||d[m]||o;return n?i.a.createElement(u,l({ref:t},c,{components:n})):i.a.createElement(u,l({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);