(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{113:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return u}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),o=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=o(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=o(a),d=r,u=m["".concat(i,".").concat(d)]||m[d]||s[d]||b;return a?n.a.createElement(u,p(p({ref:t},l),{},{components:a})):n.a.createElement(u,p({ref:t},l))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,i=new Array(b);i[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<b;l++)i[l]=a[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},78:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return o}));var r=a(3),n=a(7),b=(a(0),a(113)),i={id:"map",title:"Function: map",sidebar_label:"map",custom_edit_url:null,hide_title:!0},p={unversionedId:"safe/functions/map",id:"safe/functions/map",isDocsHomePage:!1,title:"Function: map",description:"\u25b8 map(arr ArrayCBT, thisArg? R[]",source:"@site/docs/safe/functions/map.md",sourceDirName:"safe/functions",slug:"/safe/functions/map",permalink:"/docs/safe/functions/map",editUrl:null,version:"current",lastUpdatedAt:1619066311,formattedLastUpdatedAt:"4/22/2021",sidebar_label:"map",frontMatter:{id:"map",title:"Function: map",sidebar_label:"map",custom_edit_url:null,hide_title:!0},sidebar:"sidebar",previous:{title:"Function: isArithmeticSequence",permalink:"/docs/safe/functions/isarithmeticsequence"},next:{title:"Function: mapip",permalink:"/docs/safe/functions/mapip"}},c=[],l={toc:c};function o(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"map"),"<Q, T, R",">","(",Object(b.b)("inlineCode",{parentName:"p"},"arr"),": Q, ",Object(b.b)("inlineCode",{parentName:"p"},"callback?"),": ",Object(b.b)("em",{parentName:"p"},"ArrayCBT"),"<T, R",">",", ",Object(b.b)("inlineCode",{parentName:"p"},"thisArg?"),": ",Object(b.b)("em",{parentName:"p"},"unknown"),"): R[]"),Object(b.b)("p",null,"A more-or-less spec-compliant Array map."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"remarks"))," "),Object(b.b)("p",null,"Certain steps in the spec have been omitted through the use of es6 features or for performance.\nThis implementation outperforms built-in .map but runs measurably worse than other non-spec-compliant solutions out there.\nIf you are looking for raw speed, use the unsafe version of mapip, which outperforms everybody."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"see"))," ",Object(b.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map"},"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map")),Object(b.b)("h4",{id:"type-parameters"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"),Object(b.b)("th",{parentName:"tr",align:"left"},"Default"),Object(b.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"Q")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"unknown")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"unknown"),"[]"),Object(b.b)("td",{parentName:"tr",align:"left"},"The type of the array-like being provided.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"T")),Object(b.b)("td",{parentName:"tr",align:"left"},"-"),Object(b.b)("td",{parentName:"tr",align:"left"},"Q","[keyof Q]"),Object(b.b)("td",{parentName:"tr",align:"left"},"The type of elements in the array-like being provided.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"R")),Object(b.b)("td",{parentName:"tr",align:"left"},"-"),Object(b.b)("td",{parentName:"tr",align:"left"},"T"),Object(b.b)("td",{parentName:"tr",align:"left"},"The return value of the provided callback, and thus, type of resulting array elements.")))),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"),Object(b.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"arr")),Object(b.b)("td",{parentName:"tr",align:"left"},"Q"),Object(b.b)("td",{parentName:"tr",align:"left"},"The input array-like to map through.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"callback")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"ArrayCBT"),"<T, R",">"),Object(b.b)("td",{parentName:"tr",align:"left"},"The callback provided to produce mapped results.                   This iteratee is invoked with three arguments: value, index","|","key, and arr.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"thisArg")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"unknown")),Object(b.b)("td",{parentName:"tr",align:"left"},"The value to use as ",Object(b.b)("inlineCode",{parentName:"td"},"this")," when executing callback.")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," R[]"),Object(b.b)("p",null,"R[] - The new mapped array."),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/kaihodev/hikidashi/blob/e741bbd/src/safe/array/map.ts#L26"},"safe/array/map.ts:26")))}o.isMDXComponent=!0}}]);