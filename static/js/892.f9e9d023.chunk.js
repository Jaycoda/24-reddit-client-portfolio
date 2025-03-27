"use strict";(self.webpackChunk_24_reddit_client_portfolio=self.webpackChunk_24_reddit_client_portfolio||[]).push([[892],{892:(e,t,n)=>{n.r(t),n.d(t,{default:()=>j});var o=n(43),s=n(3),r=n(168),i=n(475);const l=e=>{const t=Math.floor((Date.now()-new Date(1e3*e).getTime())/1e3),n=Math.floor(t/60),o=Math.floor(n/60),s=Math.floor(o/24),r=Math.floor(s/7),i=Math.floor(s/30),l=Math.floor(s/365);return t<60?"just now":n<60?`${n} minutes ago`:o<24?`${o} hours ago`:1===s?"yesterday":s<7?`${s} days ago`:r<4?`${r} weeks ago`:i<12?`${i} months ago`:`${l} years ago`};var c=n(579);const u=e=>{var t,n;const{post:o}=e;return(0,c.jsxs)("div",{className:"post",children:[(0,c.jsx)("h2",{children:(0,c.jsx)(i.N_,{to:`/post/${o.id}`,state:{detailPost:o},children:null===o||void 0===o?void 0:o.title})}),null!==(t=o.url_overridden_by_dest)&&void 0!==t&&t.includes("jpeg")||null!==(n=o.url_overridden_by_dest)&&void 0!==n&&n.includes("png")?(0,c.jsx)("img",{src:o.url_overridden_by_dest,alt:(null===o||void 0===o?void 0:o.title)||"No Title"}):(0,c.jsx)("p",{children:"Image not available"}),(0,c.jsxs)("p",{children:["subreddit: ",o.subreddit]}),(0,c.jsxs)("p",{children:["posted by: ",o.author]}),(0,c.jsxs)("p",{children:["upvotes: ",o.ups]}),(0,c.jsxs)("p",{children:["comments: ",o.num_comments]}),(0,c.jsxs)("p",{children:["created: ",l(o.created_utc)]})]},o.id)};function a(e){if("function"!==typeof e)throw new TypeError(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"expected a function, instead received "+typeof e)}var d=e=>Array.isArray(e)?e:[e];function p(e){const t=Array.isArray(e[0])?e[0]:e;return function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"expected all items to be functions, instead received the following types: ";if(!e.every((e=>"function"===typeof e))){const n=e.map((e=>"function"===typeof e?`function ${e.name||"unnamed"}()`:typeof e)).join(", ");throw new TypeError(`${t}[${n}]`)}}(t,"createSelector expects all input-selectors to be functions, but received the following types: "),t}Symbol(),Object.getPrototypeOf({});var f="undefined"!==typeof WeakRef?WeakRef:class{constructor(e){this.value=e}deref(){return this.value}};function h(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={s:0,v:void 0,o:null,p:null};const{resultEqualityCheck:o}=t;let s,r=0;function i(){let t=n;const{length:i}=arguments;for(let e=0,n=i;e<n;e++){const n=arguments[e];if("function"===typeof n||"object"===typeof n&&null!==n){let e=t.o;null===e&&(t.o=e=new WeakMap);const o=e.get(n);void 0===o?(t={s:0,v:void 0,o:null,p:null},e.set(n,t)):t=o}else{let e=t.p;null===e&&(t.p=e=new Map);const o=e.get(n);void 0===o?(t={s:0,v:void 0,o:null,p:null},e.set(n,t)):t=o}}const l=t;let c;if(1===t.s)c=t.v;else if(c=e.apply(null,arguments),r++,o){const e=s?.deref?.()??s;null!=e&&o(e,c)&&(c=e,0!==r&&r--);s="object"===typeof c&&null!==c||"function"===typeof c?new f(c):c}return l.s=1,l.v=c,c}return i.clearCache=()=>{n={s:0,v:void 0,o:null,p:null},i.resetResultsCount()},i.resultsCount=()=>r,i.resetResultsCount=()=>{r=0},i}function y(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];const s="function"===typeof e?{memoize:e,memoizeOptions:n}:e,r=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];let o,r=0,i=0,l={},c=t.pop();"object"===typeof c&&(l=c,c=t.pop()),a(c,`createSelector expects an output function after the inputs, but received: [${typeof c}]`);const u={...s,...l},{memoize:f,memoizeOptions:y=[],argsMemoize:v=h,argsMemoizeOptions:m=[],devModeChecks:g={}}=u,j=d(y),b=d(m),w=p(t),x=f((function(){return r++,c.apply(null,arguments)}),...j);const _=v((function(){i++;const e=function(e,t){const n=[],{length:o}=e;for(let s=0;s<o;s++)n.push(e[s].apply(null,t));return n}(w,arguments);return o=x.apply(null,e),o}),...b);return Object.assign(_,{resultFunc:c,memoizedResultFunc:x,dependencies:w,dependencyRecomputations:()=>i,resetDependencyRecomputations:()=>{i=0},lastResult:()=>o,recomputations:()=>r,resetRecomputations:()=>{r=0},memoize:f,argsMemoize:v})};return Object.assign(r,{withTypes:()=>r}),r}var v=y(h),m=Object.assign((function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:v;!function(e){if("object"!==typeof e)throw new TypeError(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"expected an object, instead received "+typeof e)}(e,"createStructuredSelector expects first argument to be an object where each property is a selector, instead received a "+typeof e);const n=Object.keys(e),o=t(n.map((t=>e[t])),(function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];return t.reduce(((e,t,o)=>(e[n[o]]=t,e)),{})}));return o}),{withTypes:()=>m});const g=()=>{const e=v([e=>e.reddit.posts,e=>e.reddit.status,e=>e.reddit.query],((e,t,n)=>({posts:e,status:t,query:n}))),{posts:t,status:n,query:i}=(0,s.d4)(e),l=i,a=(0,s.wA)();(0,o.useEffect)((()=>{"idle"===n&&a((0,r.jQ)())}),[n,a]);const d=t.filter((e=>!l||e.title.toLowerCase().split(" ").includes(l)));return(0,c.jsxs)("div",{children:[(0,c.jsx)("h1",{children:"Reddit Posts"}),"loading"===n&&(0,c.jsx)("p",{children:"Loading..."}),"failed"===n&&(0,c.jsx)("p",{children:"Failed"}),"succeeded"===n&&(0===t.length?(0,c.jsx)("p",{children:"No posts available"}):d.length>0?d.map((e=>(0,c.jsx)(u,{post:e},e.id))):(0,c.jsx)("p",{children:"No posts found"}))]})};function j(){return(0,c.jsx)("div",{className:"main",children:(0,c.jsx)(g,{})})}}}]);
//# sourceMappingURL=892.f9e9d023.chunk.js.map