(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{1204:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",function(){return i}),n.d(t,"default",function(){return l});n(16),n(14),n(20),n(19),n(18),n(22),n(4),n(5);var o=n(0);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i={title:"Best Practices for testing",menuTitle:"for testing",status:"wip",draft:!1,order:3},a={_frontmatter:i},c="wrapper";function l(e){var t=e.components,n=s(e,["components"]);return Object(o.mdx)(c,r({},a,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("h1",null,"Testing Frontend Code"),Object(o.mdx)("p",null,"It is a good idea to include some tips and tricks for frontend testing\nSince accessibility and user experience are major factors in any design system, it may be sensible to include some tips and tricks for frontend testing."),Object(o.mdx)("h2",null,"Write tests, but not too many"),Object(o.mdx)("p",null,"That said, write tests to gain confidence that your code is strong for both refactoring, enhancements and new features."),Object(o.mdx)("p",null,'Frontend code is changing and moving fast. So 100% code coverage should never be a goal by itself, rather try to make tests which reflect what the end-user would do. By doing so, you will probably cover several internal functions and states by simulating a "click" anyways.'),Object(o.mdx)("h3",null,"Static testing"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"Use static testers like ",Object(o.mdx)("strong",{parentName:"li"},"ESLint")," (also in your editor of choice) to detect typos etc."),Object(o.mdx)("li",{parentName:"ul"},"Use code formatters like ",Object(o.mdx)("strong",{parentName:"li"},"Prettier")," to uniform code style. This makes working together so much more fun and makes your everyday more productive."),Object(o.mdx)("li",{parentName:"ul"},"Like ESLint, there is also a linter for styling, called ",Object(o.mdx)("strong",{parentName:"li"},"StyleLint"),". It works even on styled components.")),Object(o.mdx)("h3",null,"Integration tests"),Object(o.mdx)("p",null,"Do not write unit tests in frontend code. But make integration tests.\nThink as a user. Think how the user will interact with your application. Do not shallow test, but test components like a user would get it (use mount or render to also test their children, cause a user would do have these as well)."),Object(o.mdx)("p",null,"There are several packages you can integrate in your test, so your can test your code for accessibility e.g. ",Object(o.mdx)("inlineCode",{parentName:"p"},"axe")," and ",Object(o.mdx)("inlineCode",{parentName:"p"},"pa11y"),"."),Object(o.mdx)("h3",null,"End-to-end testing"),Object(o.mdx)("p",null,"Having tests which actually run in a browser, makes a lot of sense in frontend code. This method of testing is good to gain confidence and ensure a flow of interactions is working correctly - like a user registration process."),Object(o.mdx)("p",null,"Of course, end-to-end tests can be run on a CI server as well. Make sure you run your tests against a production-like version of your application."))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-uilib-usage-best-practices-for-testing-md-feb66f846313c4e525ac.js.map