(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{1175:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return d}),t.d(n,"_frontmatter",function(){return f});t(14),t(15),t(18),t(19),t(22),t(13);var o=t(2),a=t(4),r=t.n(a),i=t(0);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function m(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function p(e,n){return!n||"object"!==s(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,n){return(u=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var d=function(e){function n(e){var t;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(t=p(this,l(n).call(this,e))).layout=null,t}var t,a,s;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&u(e,n)}(n,r.a.Component),t=n,(a=[{key:"render",value:function(){var e=this.props,n=e.components;c(e,["components"]);return Object(o.d)(i.MDXTag,{name:"wrapper",components:n},Object(o.d)(i.MDXTag,{name:"h1",components:n},"Styling"),Object(o.d)(i.MDXTag,{name:"p",components:n},"CSS is easy. Everyone is thinking at least that in the first place. Cause You get not forced to make things right - so it fells like an endless freedom. But actually, this is a kind of trap."),Object(o.d)(i.MDXTag,{name:"blockquote",components:n},Object(o.d)(i.MDXTag,{name:"p",components:n,parentName:"blockquote"},"It is VERY important to do CSS right from the very beginning.")),Object(o.d)(i.MDXTag,{name:"p",components:n},"You will else find Yourself making a fix of a fix, and so on. Also, refactoring and enhancements will often effect code deeper down as well."),Object(o.d)(i.MDXTag,{name:"h2",components:n},"Structure"),Object(o.d)(i.MDXTag,{name:"p",components:n},"To write more structured and uniform CSS code, stick with the following approach:"),Object(o.d)(i.MDXTag,{name:"ol",components:n},Object(o.d)(i.MDXTag,{name:"li",components:n,parentName:"ol"},"start the most influential and important properties first then work progressively toward aesthetics and motion effects."),Object(o.d)(i.MDXTag,{name:"li",components:n,parentName:"ol"},"leave one empty line between these groups")),Object(o.d)(i.MDXTag,{name:"p",components:n},"This helps coworkers quickly find and understand the sentence and meaning of the CSS code."),Object(o.d)(i.MDXTag,{name:"h3",components:n},"Example structure of CSS"),Object(o.d)(i.MDXTag,{name:"pre",components:n},Object(o.d)(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-css"}},".my-selector {\n  /* -- 1. Layout -- */\n  position: relative;\n  z-index: 1;\n  display: block;\n\n  /* -- 2. Sizes & Spaces -- */\n  width: 0.5em;\n  height: 0.5em;\n  /* will be the same as our local font-size of 1.5rem */\n  padding: 1em;\n\n  /* -- 3. Fonts & Typography -- */\n  font-family: var(--font-family-default);\n  font-weight: var(--font-weight-default);\n  font-size: 1.5rem;\n  color: var(--color-sea-green);\n\n  /* -- 4. Styling -- */\n  /* use Pixel for borders. They don't need to be dynamic */\n  border: 1px solid var(--color-mint-green);\n  opacity: 1;\n\n  /* -- 5. Animations -- */\n  transition: opacity 0.2s linear;\n}\n")),Object(o.d)(i.MDXTag,{name:"h2",components:n},"Units"),Object(o.d)(i.MDXTag,{name:"p",components:n},"Here is a list of what we should use as layout and styling units to embrace the best possible accessibility experience and visual correctness."),Object(o.d)(i.MDXTag,{name:"ul",components:n},Object(o.d)(i.MDXTag,{name:"li",components:n,parentName:"ul"},Object(o.d)(i.MDXTag,{name:"strong",components:n,parentName:"li"},Object(o.d)(i.MDXTag,{name:"inlineCode",components:n,parentName:"strong"},"rem")),": Use ",Object(o.d)(i.MDXTag,{name:"em",components:n,parentName:"li"},"rem")," as a default sizing unit - when ever other units don't are favorited."),Object(o.d)(i.MDXTag,{name:"li",components:n,parentName:"ul"},Object(o.d)(i.MDXTag,{name:"strong",components:n,parentName:"li"},Object(o.d)(i.MDXTag,{name:"inlineCode",components:n,parentName:"strong"},"em")),": Use ",Object(o.d)(i.MDXTag,{name:"em",components:n,parentName:"li"},"em")," only on complex layouts, when ever You need the sizes to respond to constrains. But use ",Object(o.d)(i.MDXTag,{name:"em",components:n,parentName:"li"},"em")," for CSS ",Object(o.d)(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"@media")," queries for the best browser compatibility."),Object(o.d)(i.MDXTag,{name:"li",components:n,parentName:"ul"},Object(o.d)(i.MDXTag,{name:"strong",components:n,parentName:"li"},Object(o.d)(i.MDXTag,{name:"inlineCode",components:n,parentName:"strong"},"px")),": Use ",Object(o.d)(i.MDXTag,{name:"em",components:n,parentName:"li"},"pixels")," on visual helper lines and borders. Borders don't need necessarily to be responsive."),Object(o.d)(i.MDXTag,{name:"li",components:n,parentName:"ul"},Object(o.d)(i.MDXTag,{name:"strong",components:n,parentName:"li"},Object(o.d)(i.MDXTag,{name:"inlineCode",components:n,parentName:"strong"},"viewport units and percentage")),": Use these units to make layout and component withs responsive. Also placing and positioning layout wrappers, with these units, may give the user a good experience.")))}}])&&m(t.prototype,a),s&&m(t,s),n}();d.isMDXComponent=!0;var f={title:"Best Practices for styling",menuTitle:"for styling",draft:!1,order:1}}}]);
//# sourceMappingURL=component---src-pages-uilib-usage-best-practices-for-styling-md-0ac3f2486f8e77b105d8.js.map