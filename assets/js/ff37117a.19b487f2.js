"use strict";(self.webpackChunk_teamhanko_docs=self.webpackChunk_teamhanko_docs||[]).push([[842],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),h=a,d=m["".concat(s,".").concat(h)]||m[h]||c[h]||r;return n?o.createElement(d,i(i({ref:t},p),{},{components:n})):o.createElement(d,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(7294),a=n(6010);const r="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return o.createElement("div",{role:"tabpanel",className:(0,a.Z)(r,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>N});var o=n(7462),a=n(7294),r=n(6010),i=n(2466),l=n(6775),s=n(1980),u=n(7392),p=n(12);function c(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:o,default:a}}=e;return{value:t,label:n,attributes:o,default:a}}))}function m(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function d(e){let{queryString:t=!1,groupId:n}=e;const o=(0,l.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(r),(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(o.location.search);t.set(r,e),o.replace({...o.location,search:t.toString()})}),[r,o])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:o}=e,r=m(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const o=n.find((e=>e.default))??n[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:r}))),[s,u]=d({queryString:n,groupId:o}),[c,k]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,r]=(0,p.Nk)(n);return[o,(0,a.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:o}),g=(()=>{const e=s??c;return h({value:e,tabValues:r})?e:null})();(0,a.useLayoutEffect)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),k(e)}),[u,k,r]),tabValues:r}}var g=n(2389);const f="tabList__CuJ",b="tabItem_LNqP";function v(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),m=e=>{const t=e.currentTarget,n=p.indexOf(t),o=u[n].value;o!==l&&(c(t),s(o))},h=e=>{var t;let n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=p.indexOf(e.currentTarget)+1;n=p[t]??p[0];break}case"ArrowLeft":{const t=p.indexOf(e.currentTarget)-1;n=p[t]??p[p.length-1];break}}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,o.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>p.push(e),onKeyDown:h,onClick:m},i,{className:(0,r.Z)("tabs__item",b,null==i?void 0:i.className,{"tabs__item--active":l===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:o}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===o));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==o}))))}function w(e){const t=k(e);return a.createElement("div",{className:(0,r.Z)("tabs-container",f)},a.createElement(v,(0,o.Z)({},e,t)),a.createElement(y,(0,o.Z)({},e,t)))}function N(e){const t=(0,g.Z)();return a.createElement(w,(0,o.Z)({key:String(t)},e))}},4399:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var o=n(7462),a=(n(7294),n(3905)),r=n(4866),i=n(5162);const l={title:"Vue + Hanko",sidebar_label:"Vue",keywords:["vue"],sidebar_custom_props:{docCardIconName:"vue"}},s="Vue",u={unversionedId:"guides/vue",id:"guides/vue",title:"Vue + Hanko",description:"In this guide you will learn how to use the",source:"@site/docs/guides/vue.mdx",sourceDirName:"guides",slug:"/guides/vue",permalink:"/guides/vue",draft:!1,tags:[],version:"current",frontMatter:{title:"Vue + Hanko",sidebar_label:"Vue",keywords:["vue"],sidebar_custom_props:{docCardIconName:"vue"}},sidebar:"docs",previous:{title:"Svelte",permalink:"/guides/svelte"},next:{title:"Backend guide",permalink:"/guides/backend"}},p={},c=[{value:"Install dependencies",id:"install-dependencies",level:2},{value:"Configure component resolution",id:"configure-component-resolution",level:2},{value:"Add <code>&lt;hanko-auth&gt;</code> component",id:"add-hanko-auth-component",level:2},{value:"Add <code>&lt;hanko-events&gt;</code> component",id:"add-hanko-events-component",level:2},{value:"Add <code>&lt;hanko-profile&gt;</code> component",id:"hanko-profile",level:2},{value:"Implement logout",id:"implement-logout",level:2},{value:"Customize component styles",id:"customize-component-styles",level:2},{value:"Authenticate backend requests",id:"authenticate-backend-requests",level:2}],m={toc:c};function h(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"vue"},"Vue"),(0,a.kt)("p",null,"In this guide you will learn how to use the\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/teamhanko/hanko/blob/main/frontend/elements/README.md"},"hanko-elements")," web components to\nadd authentication and a user profile to your Vue application."),(0,a.kt)("h2",{id:"install-dependencies"},"Install dependencies"),(0,a.kt)("p",null,"Install the ",(0,a.kt)("inlineCode",{parentName:"p"},"@teamhanko/hanko-elements")," package:"),(0,a.kt)(r.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @teamhanko/hanko-elements\n"))),(0,a.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @teamhanko/hanko-elements\n")))),(0,a.kt)("h2",{id:"configure-component-resolution"},"Configure component resolution"),(0,a.kt)("p",null,"Vue needs to know which elements to treat as custom elements, otherwise it will issue a warning regarding component\nresolution. To do so, provide a predicate function that determines which elements are to be considered custom elements\nto ",(0,a.kt)("a",{parentName:"p",href:"https://vuejs.org/guide/extras/web-components.html#using-custom-elements-in-vue"},(0,a.kt)("inlineCode",{parentName:"a"},"compilerOptions.isCustomElement")),"\nin your configuration:"),(0,a.kt)(r.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"vite",label:"Vite Config",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'{7-9} title="vite.config.js" showLineNumbers',"{7-9}":!0,title:'"vite.config.js"',showLineNumbers:!0},"import vue from '@vitejs/plugin-vue'\n\nexport default {\n  plugins: [\n    vue({\n      template: {\n        compilerOptions: {\n          isCustomElement: (tag) => tag.startsWith(\"hanko-\")\n        }\n      }\n    })\n  ]\n}\n"))),(0,a.kt)(i.Z,{value:"cli",label:"Vue CLI Config",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'{8-10} title="vue.config.js" showLineNumbers',"{8-10}":!0,title:'"vue.config.js"',showLineNumbers:!0},"module.exports = {\n  chainWebpack: config => {\n    config.module\n      .rule('vue')\n      .use('vue-loader')\n      .tap(options => ({\n        ...options,\n        compilerOptions: {\n          isCustomElement: (tag) => tag.startsWith(\"hanko-\")\n        }\n      }))\n  }\n}\n")))),(0,a.kt)("h2",{id:"add-hanko-auth-component"},"Add ",(0,a.kt)("inlineCode",{parentName:"h2"},"<hanko-auth>")," component"),(0,a.kt)("p",null,"To provide a login interface in your app, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"<hanko-auth>")," web component. To do so, first import the\n",(0,a.kt)("inlineCode",{parentName:"p"},"register")," function from ",(0,a.kt)("inlineCode",{parentName:"p"},"@teamhanko/hanko-elements")," in your Vue component. Call it with the URL of the Hanko API as an argument\nto register the ",(0,a.kt)("inlineCode",{parentName:"p"},"<hanko-auth>")," element with\nthe browser's ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/de/docs/Web/API/CustomElementRegistry"},(0,a.kt)("inlineCode",{parentName:"a"},"CustomElementRegistry")),". Then\nuse the element in your component template."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If you are using ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.hanko.io"},"Hanko Cloud"),", you can find the API URL on your project dashboard.\nIf you are self-hosting you need to provide the URL of your running Hanko backend.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="HankoAuth.vue" showLineNumbers',title:'"HankoAuth.vue"',showLineNumbers:!0},'<script setup>\nimport { onMounted } from "vue";\nimport { register } from "@teamhanko/hanko-elements";\n\nconst hankoApi = "<YOUR_API_URL>";\n\nonMounted(() => {\n  // register the component\n  // see: https://github.com/teamhanko/hanko/blob/main/frontend/elements/README.md#script\n  register(hankoApi)\n    .catch((error) => {\n      // handle error\n    });\n});\n<\/script>\n\n<template>\n  <hanko-auth />\n</template>\n')),(0,a.kt)("h2",{id:"add-hanko-events-component"},"Add ",(0,a.kt)("inlineCode",{parentName:"h2"},"<hanko-events>")," component"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"<hanko-events>")," component provides a convenient way to subscribe to specific\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/teamhanko/hanko/blob/main/frontend/elements/README.md#events"},"events")," without displaying any UI elements.\nThe other hanko-elements will also dispatch these events."),(0,a.kt)("p",null,"To utilize this functionality in your Vue application, you can leverage Vue's event binding mechanism and define\ncallback functions within your component. This allows you to respond to the dispatched events accordingly."),(0,a.kt)("p",null,"Import the ",(0,a.kt)("inlineCode",{parentName:"p"},"register")," function from ",(0,a.kt)("inlineCode",{parentName:"p"},"@teamhanko/hanko-elements")," in your Vue component. Call it with the URL of the\nHanko API as an argument to register the ",(0,a.kt)("inlineCode",{parentName:"p"},"<hanko-events>")," element with the browser's\n",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/de/docs/Web/API/CustomElementRegistry"},(0,a.kt)("inlineCode",{parentName:"a"},"CustomElementRegistry")),".\nThen use the element in your component template."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="HankoAuth.vue" showLineNumbers',title:'"HankoAuth.vue"',showLineNumbers:!0},'<script setup>\n// highlight-next-line\nimport { useRouter } from "vue-router";\nimport { onMounted } from "vue";\nimport { register } from "@teamhanko/hanko-elements";\n\nconst hankoApi = "<YOUR_API_URL>";\n\n// highlight-next-line\nconst router = useRouter();\n\n// highlight-start\nconst redirectAfterLogin = () => {\n  // successfully logged in, redirect to a page in your application\n  router.push({ path: "..." });\n};\n// highlight-end\n\nonMounted(() => {\n  // register the component\n  // see: https://github.com/teamhanko/hanko/blob/main/frontend/elements/README.md#script\n  register(hankoApi))\n    .catch((error) => {\n      // handle error\n    });\n});\n<\/script>\n\n<template>\n  // highlight-next-line\n  <hanko-events @onAuthFlowCompleted="redirectAfterLogin" />\n  <hanko-auth />\n</template>\n')),(0,a.kt)("p",null,"Alternatively, subscribe directly on the ",(0,a.kt)("inlineCode",{parentName:"p"},"<hanko-auth>")," element:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},'<hanko-auth @onAuthFlowCompleted="redirectAfterLogin" />\n')),(0,a.kt)("h2",{id:"hanko-profile"},"Add ",(0,a.kt)("inlineCode",{parentName:"h2"},"<hanko-profile>")," component"),(0,a.kt)("p",null,"To provide a page where users can manage their email addresses, password and passkeys, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"<hanko-profile>")," web\ncomponent. Just as with the ",(0,a.kt)("inlineCode",{parentName:"p"},"<hanko-auth>")," component, import the ",(0,a.kt)("inlineCode",{parentName:"p"},"register")," function from ",(0,a.kt)("inlineCode",{parentName:"p"},"@teamhanko/hanko-elements")," in\nyour Vue component. Call it with the\nURL of the Hanko API as an argument to register the ",(0,a.kt)("inlineCode",{parentName:"p"},"<hanko-profile>")," element with the browser's\n",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/de/docs/Web/API/CustomElementRegistry"},(0,a.kt)("inlineCode",{parentName:"a"},"CustomElementRegistry")),". Then use\nthe element in your component."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="HankoProfile.vue" showLineNumbers',title:'"HankoProfile.vue"',showLineNumbers:!0},'<script setup>\nimport { onMounted } from "vue";\nimport { register } from "@teamhanko/hanko-elements";\n\nconst hankoApi = "<YOUR_API_URL>";\n\nonMounted(() => {\n  // register the component\n  // see: https://github.com/teamhanko/hanko/blob/main/frontend/elements/README.md#script\n  register(hankoApi)\n    .catch((error) => {\n      // handle error\n    });\n});\n<\/script>\n\n<template>\n  <hanko-profile />\n</template>\n\n')),(0,a.kt)("h2",{id:"implement-logout"},"Implement logout"),(0,a.kt)("p",null,"Use the Hanko client provided by ",(0,a.kt)("inlineCode",{parentName:"p"},"@teamhanko/hanko-elements")," to log out users. On logout a custom event is\ndispatched that you can subscribe to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="HankoProfile.vue" showLineNumbers',title:'"HankoProfile.vue"',showLineNumbers:!0},'<script setup>\nimport { onMounted } from "vue";\n// highlight-start\nimport { useRouter } from "vue-router";\nimport { register, Hanko } from "@teamhanko/hanko-elements";\n// highlight-end\n\nconst hankoApi = "<YOUR_API_URL>";\n\n// highlight-start\nconst router = useRouter();\nconst hanko = new Hanko(hankoApi);\n// highlight-end\n\n// highlight-start\nconst logout = () => {\n  hanko.user.logout().catch((error) => {\n    // handle error\n  })\n}\n// highlight-end\n\n// highlight-start\nconst redirectAfterLogout = () => {\n  router.push({ path: "..." });\n}\n// highlight-end\n\nonMounted(() => {\n  // register the component\n  // see: https://github.com/teamhanko/hanko/blob/main/frontend/elements/README.md#script\n  register(hankoApi)\n    .catch((error) => {\n      // handle error\n    });\n});\n<\/script>\n\n<template>\n  // highlight-start\n  <button @click="logout">Logout</button>\n  <hanko-profile @onUserLoggedOut="redirectAfterLogout" />\n  // highlight-end\n</template>\n\n')),(0,a.kt)("h2",{id:"customize-component-styles"},"Customize component styles"),(0,a.kt)("p",null,"The styles of the ",(0,a.kt)("inlineCode",{parentName:"p"},"hanko-auth")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"hanko-profile")," can be customized using CSS variables and parts. See our guide\non customization ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/teamhanko/hanko/tree/main/frontend/elements#ui-customization"},"here"),"."),(0,a.kt)("h2",{id:"authenticate-backend-requests"},"Authenticate backend requests"),(0,a.kt)("p",null,"If you want to authenticate requests in your own backend, please view our ",(0,a.kt)("a",{parentName:"p",href:"/guides/backend"},"backend guide"),"."))}h.isMDXComponent=!0}}]);