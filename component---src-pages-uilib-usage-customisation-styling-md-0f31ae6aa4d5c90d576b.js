(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{1183:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return g}),t.d(n,"_frontmatter",function(){return u});t(14),t(15),t(18),t(19),t(22),t(13);var a=t(2),o=t(4),s=t.n(o),c=t(0),p=(t(27),t(17),t(236));function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function i(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function l(e,n){return!n||"object"!==m(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,n){return(b=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var g=function(e){function n(e){var t;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(t=l(this,d(n).call(this,e))).layout=null,t}var t,o,m;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&b(e,n)}(n,s.a.Component),t=n,(o=[{key:"render",value:function(){var e=this.props,n=e.components;r(e,["components"]);return Object(a.d)(c.MDXTag,{name:"wrapper",components:n},Object(a.d)(c.MDXTag,{name:"h1",components:n},"CSS Styles"),Object(a.d)(c.MDXTag,{name:"p",components:n},"To ensure flexibility and the possibility of ",Object(a.d)(c.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/uilib/usage/customisation/theming"}},"theming"),", the DNB CSS Styles area build in a bottom up manner."),Object(a.d)(c.MDXTag,{name:"p",components:n},"The styles are decoupled from the functional ",Object(a.d)(c.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/uilib/components"}},"components"),".\nThere are several Packages You can use and combine."),Object(a.d)(c.MDXTag,{name:"h2",components:n},"Main Packages"),Object(a.d)(c.MDXTag,{name:"ul",components:n},Object(a.d)(c.MDXTag,{name:"li",components:n,parentName:"ul"},Object(a.d)(c.MDXTag,{name:"strong",components:n,parentName:"li"},"dnb-ui-core")," - Includes the ",Object(a.d)(c.MDXTag,{name:"em",components:n,parentName:"li"},"DNB Main Styles")," like ",Object(a.d)(c.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"/uilib/helper-classes"}},"helper classes"),", font loader, colors and a over-all reset (normalize)."),Object(a.d)(c.MDXTag,{name:"li",components:n,parentName:"ul"},Object(a.d)(c.MDXTag,{name:"strong",components:n,parentName:"li"},"dnb-theme-ui")," - Includes ",Object(a.d)(c.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"/uilib/elements"}},"optional class selectors for elements"),", ",Object(a.d)(c.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"#spacing"}},"optional default spacing"),", ",Object(a.d)(c.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"/uilib/typography"}},"default typography")," as well as a theme for every ",Object(a.d)(c.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"/uilib/components"}},"component"),"."),Object(a.d)(c.MDXTag,{name:"li",components:n,parentName:"ul"},Object(a.d)(c.MDXTag,{name:"strong",components:n,parentName:"li"},"dnb-ui-components")," - Includes all the basic layout styles for the ",Object(a.d)(c.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"/uilib/components"}},"components"),"."),Object(a.d)(c.MDXTag,{name:"li",components:n,parentName:"ul"},Object(a.d)(c.MDXTag,{name:"strong",components:n,parentName:"li"},"dnb-ui-patterns")," - Includes all the styles (and themes) for ",Object(a.d)(c.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"/uilib/patterns"}},"patterns")," (not shown in the ",Object(a.d)(c.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"#css-structure-diagram"}},"Diagram"),").")),Object(a.d)(c.MDXTag,{name:"h2",components:n},"Sub Packages"),Object(a.d)(c.MDXTag,{name:"ul",components:n},Object(a.d)(c.MDXTag,{name:"li",components:n,parentName:"ul"},Object(a.d)(c.MDXTag,{name:"strong",components:n,parentName:"li"},"dnb-ui-body")," - Includes the default body style and a CSS reset (normalize)."),Object(a.d)(c.MDXTag,{name:"li",components:n,parentName:"ul"},Object(a.d)(c.MDXTag,{name:"strong",components:n,parentName:"li"},"dnb-ui-basis")," - Includes everything from ",Object(a.d)(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"dnb-ui-core"),", except ",Object(a.d)(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"dnb-ui-body"),"."),Object(a.d)(c.MDXTag,{name:"li",components:n,parentName:"ul"},Object(a.d)(c.MDXTag,{name:"strong",components:n,parentName:"li"},"dnb-ui-elements")," - This package will force styles for all the HTML Elements/Tags. Use it carefully - cause this will effect existing styles as well.")),Object(a.d)(c.MDXTag,{name:"p",components:n},"All the CSS packages are ready to use, ",Object(a.d)(c.MDXTag,{name:"strong",components:n,parentName:"p"},"minified CSS files"),". You will find the main style here: ",Object(a.d)(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"dnb-ui-lib/style/dnb-ui-core.min.css")),Object(a.d)(c.MDXTag,{name:"p",components:n},"Additionally, it is also possible to import a style and theme for every single component separately. You find the styles here, like: ",Object(a.d)(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"dnb-ui-lib/components/[button]/style/dnb-button.min.css")," - read more about ",Object(a.d)(c.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/uilib/usage/customisation/consume-styles#single-component-only"}},"how to import a single-component style")),Object(a.d)(c.MDXTag,{name:"p",components:n},"The following Diagram gives an overall overview how the packages are structured."),Object(a.d)(c.MDXTag,{name:"h2",components:n},"CSS Structure Diagram"),Object(a.d)("div",{className:"margin-bottom"},Object(a.d)(p.default,null)),Object(a.d)(c.MDXTag,{name:"h2",components:n},"How to deal with existing styles"),Object(a.d)(c.MDXTag,{name:"p",components:n},"The ",Object(a.d)(c.MDXTag,{name:"strong",components:n,parentName:"p"},"dnb-ui-core")," package includes some styles witch effects the global scope (body and CSS reset). To avoid interference with existing styles, let's say a header or a menu, You could only use the ",Object(a.d)(c.MDXTag,{name:"strong",components:n,parentName:"p"},"dnb-ui-basis")," package in combination with other packages like ",Object(a.d)(c.MDXTag,{name:"strong",components:n,parentName:"p"},"dnb-theme-ui")," and ",Object(a.d)(c.MDXTag,{name:"strong",components:n,parentName:"p"},"dnb-ui-components"),"."),Object(a.d)(c.MDXTag,{name:"p",components:n},"You may have a look at some ",Object(a.d)(c.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/uilib/usage/customisation/styling/legacy-styling"}},"code examples of dealing with legacy code"),"."),Object(a.d)(c.MDXTag,{name:"h3",components:n},"Example import"),Object(a.d)(c.MDXTag,{name:"pre",components:n},Object(a.d)(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"import 'dnb-ui-lib/style/basis'\nimport 'dnb-ui-lib/style/components'\nimport 'dnb-ui-lib/style/themes/ui'\n\n// instead of all together\n/* import 'dnb-ui-lib/style' */\n")),Object(a.d)(c.MDXTag,{name:"h3",components:n},"Use Eufemia Styles elsewhere {#core-style}"),Object(a.d)(c.MDXTag,{name:"p",components:n},"If You neither include the ",Object(a.d)(c.MDXTag,{name:"strong",components:n,parentName:"p"},"dnb-ui-core")," nor the ",Object(a.d)(c.MDXTag,{name:"strong",components:n,parentName:"p"},"dnb-ui-body")," package, then You ending up having no Eufemia styles for the Document ",Object(a.d)(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<body>"),". To have the Eufemia Core styles inside a wrapper anyway, simply use the following helper class: ",Object(a.d)(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},".dnb-core-style")),Object(a.d)(c.MDXTag,{name:"pre",components:n},Object(a.d)(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-html"}},'<div class="dnb-core-style">\n  \x3c!-- Wrapper to have correct Eufemia styles inside --\x3e\n  <h1 class="dnb-h1">I have now the Eufemia Style</h1>\n  <p class="dnb-p">👉 Me as well</p>\n</div>\n')),Object(a.d)(c.MDXTag,{name:"h4",components:n},"CSS Specificity"),Object(a.d)(c.MDXTag,{name:"p",components:n},"Once You use the ",Object(a.d)(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},".dnb-core-style")," wrapper class, You may in some circumstances, need to use it to modify already given properties."),Object(a.d)(c.MDXTag,{name:"p",components:n},"For ",Object(a.d)(c.MDXTag,{name:"strong",components:n,parentName:"p"},"Styled Components")," You do it this way:"),Object(a.d)(c.MDXTag,{name:"pre",components:n},Object(a.d)(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx"}},"import { P } from 'dnb-ui-lib/elements'\nconst MyElement = styled(P)`\n  .dnb-core-style & {\n    margin-top: 3rem;\n  }\n  color: var(--color-sky-blue);\n`\n")),Object(a.d)(c.MDXTag,{name:"p",components:n},"In CSS You simply do it this way:"),Object(a.d)(c.MDXTag,{name:"pre",components:n},Object(a.d)(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-css"}},".dnb-core-style .my-element {\n  margin-top: 3rem;\n  color: var(--color-sky-blue);\n}\n")),Object(a.d)(c.MDXTag,{name:"h2",components:n},"Spacing for Articles {#spacing}"),Object(a.d)(c.MDXTag,{name:"p",components:n},"To ensure more flexibility in styling, all the margins / spacings are reset to zero. But more often we have to have a by default defined spacing, e.g. ",Object(a.d)(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"margin")," on HTML Elements like headings or paragraphs."),Object(a.d)(c.MDXTag,{name:"p",components:n},"To use the default DNB spacings, define a CSS class called: ",Object(a.d)(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},".dnb-spacing"),"\nEffected HTML Elements inside this container will then have a default spacing. This will be specially helpful for article alike pages."),Object(a.d)(c.MDXTag,{name:"pre",components:n},Object(a.d)(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-html"}},'<article class="dnb-spacing">\n  \x3c!-- DNB spacings --\x3e\n  <h1 class="dnb-h1">e.g. I have now the Eufemia spacing (margin)</h1>\n  <p class="dnb-p">👉 Me as well</p>\n</article>\n')),Object(a.d)(c.MDXTag,{name:"p",components:n},"The styles for the ",Object(a.d)(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},".dnb-spacing")," are included in the package: ",Object(a.d)(c.MDXTag,{name:"strong",components:n,parentName:"p"},"dnb-theme-ui"),"\nFor more details, check out the source file: ",Object(a.d)(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"spacing.scss")),Object(a.d)(c.MDXTag,{name:"h2",components:n},"Styling of HTML Elements (tags)"),Object(a.d)(c.MDXTag,{name:"p",components:n},"To deal with HTML Elements, without declaring them individual with the right css classes, like ",Object(a.d)(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},'<h1 class="dnb-h1">'),", You can import the sub package ",Object(a.d)(c.MDXTag,{name:"strong",components:n,parentName:"p"},"dnb-ui-elements"),"."),Object(a.d)(c.MDXTag,{name:"p",components:n},Object(a.d)(c.MDXTag,{name:"strong",components:n,parentName:"p"},"NB:")," Use it carefully - cause this will effect existing styles as well!"),Object(a.d)(c.MDXTag,{name:"pre",components:n},Object(a.d)(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"/* directly the CSS file */\nimport 'dnb-ui-lib/style/dnb-ui-elements.min.css'\n\n/* ... or by the shorthand */\nimport 'dnb-ui-lib/style/elements'\n")),Object(a.d)(c.MDXTag,{name:"pre",components:n},Object(a.d)(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-html"}},"\x3c!-- HTML Elements in the wild --\x3e\n<h1>I'm now Eufemia styled</h1>\n<ul>\n  <li>Me as well</li>\n</ul>\n")))}}])&&i(t.prototype,o),m&&i(t,m),n}();g.isMDXComponent=!0;var u={title:"CSS Styles",draft:!1,order:1}}}]);
//# sourceMappingURL=component---src-pages-uilib-usage-customisation-styling-md-0f31ae6aa4d5c90d576b.js.map