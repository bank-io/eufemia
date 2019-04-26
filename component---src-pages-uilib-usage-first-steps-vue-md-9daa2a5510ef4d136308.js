(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{1219:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",function(){return i}),t.d(n,"default",function(){return u});t(16),t(14),t(20),t(19),t(18),t(22),t(4),t(5);var o=t(0);function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function r(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i={title:"Vue",draft:!1,order:6},d={_frontmatter:i},p="wrapper";function u(e){var n=e.components,t=r(e,["components"]);return Object(o.mdx)(p,a({},d,t,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("h1",null,"Vue JS"),Object(o.mdx)("h2",null,"How to"),Object(o.mdx)("p",null,"With Vue, you could use the included ",Object(o.mdx)("a",a({parentName:"p"},{href:"/uilib/usage/first-steps/web-components"}),"Web Components")," support to get the HTML elements in place. But it's much more powerful to simply use the build in feature (bindings), powered by ",Object(o.mdx)("a",a({parentName:"p"},{href:"https://github.com/akxcv/vuera"}),"Vuera"),"."),Object(o.mdx)("pre",null,Object(o.mdx)("code",a({parentName:"pre"},{className:"language-js"}),"import Vue from 'vue'\n\n// get Vuera upp and runnning\nimport dnb, { Button } from 'dnb-ui-lib/components/vue'\n\nexport default {\n  name: 'app',\n  data: () => ({...}),\n  methods: {myClickHandler: () => {}, ...},\n  // now we have our components we want to use\n  components: dnb.getComponents(Vue)\n}\n")),Object(o.mdx)("p",null,"And the syntax would look like:"),Object(o.mdx)("pre",null,Object(o.mdx)("code",a({parentName:"pre"},{className:"language-html"}),'<template lang="html">\n  <div id="app" class="dnb-spacing">\n    <dnb-button text="Button" @on_click="myClickHandler"></dnb-button>\n  </div>\n</template>\n')),Object(o.mdx)("h2",null,"Setup"),Object(o.mdx)("p",null,"Besides ",Object(o.mdx)("inlineCode",{parentName:"p"},"vue")," and ",Object(o.mdx)("inlineCode",{parentName:"p"},"vuera"),", you may also install, ",Object(o.mdx)("inlineCode",{parentName:"p"},"dnb-ui-lib"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"react")," and ",Object(o.mdx)("inlineCode",{parentName:"p"},"react-dom"),"."),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},"NB:")," Make sure You add ",Object(o.mdx)("inlineCode",{parentName:"p"},"vuera")," to Your Package dependencies. Even if You not use it directly in Your Application."),Object(o.mdx)("pre",null,Object(o.mdx)("code",a({parentName:"pre"},{className:"language-json"}),'"dependencies": {\n  "dnb-ui-lib": "*",\n  "react": "^16.6",\n  "react-dom": "^16.6",\n  "vue": "^2",\n  "vuera": "**^2**"\n},\n...\n')),Object(o.mdx)("h2",null,"Build"),Object(o.mdx)("p",null,"If You run this app inside the mono repo Eufemia, then make sure You build the ",Object(o.mdx)("inlineCode",{parentName:"p"},"dnb-ui-lib")," first. To do so, go to the ",Object(o.mdx)("inlineCode",{parentName:"p"},"dnb-ui-lib")," directory and run ",Object(o.mdx)("inlineCode",{parentName:"p"},"yarn build"),". This is because we consume the package content directly like: import ",Object(o.mdx)("inlineCode",{parentName:"p"},"dnb-ui-lib/components")," and not from the ",Object(o.mdx)("inlineCode",{parentName:"p"},"src")," folder, like: ",Object(o.mdx)("inlineCode",{parentName:"p"},"dnb-ui-lib/src/components"),"."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-uilib-usage-first-steps-vue-md-9daa2a5510ef4d136308.js.map