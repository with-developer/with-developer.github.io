(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[3],[,,function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"d",(function(){return a})),n.d(t,"e",(function(){return c})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"f",(function(){return l}));const r={desktop:2080,laptop:1680,tablet:1024,mobile:696,mobileS:400},a=e=>`${e}px`,c=e=>e/16+"rem",i=e=>Number(e.replace("ms","")),o=e=>`${e}ms`,l=e=>e.split(" ").map((e=>Number(e)/255))},,,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return l})),n.d(t,"e",(function(){return s})),n.d(t,"d",(function(){return u})),n.d(t,"f",(function(){return d})),n.d(t,"g",(function(){return h})),n.d(t,"h",(function(){return b})),n.d(t,"i",(function(){return j})),n.d(t,"j",(function(){return f})),n.d(t,"k",(function(){return m})),n.d(t,"l",(function(){return p}));var r=n(0),a=n(14);var c=function(){return Object(r.useContext)(a.a)};var i=function(e=""){const[t,n]=Object(r.useState)(e),[a,c]=Object(r.useState)(),[i,o]=Object(r.useState)(!1);return{value:t,error:a,onChange:e=>{n(e.target.value),o(!0),a&&e.target.checkValidity()&&c(null)},onBlur:e=>{i&&e.target.checkValidity()},onInvalid:e=>{e.preventDefault(),c(e.target.validationMessage)}}};let o=0;var l=()=>{const[e,t]=Object(r.useState)(null);return Object(r.useEffect)((()=>t(++o)),[]),e};var s=function(e,t,n){const a=Object(r.useRef)();Object(r.useEffect)((()=>{a.current=e})),Object(r.useEffect)((()=>{if(null!==t){let e=setInterval((function(){a.current()}),t);return()=>clearInterval(e)}}),[t,n])};var u=function(e,t,n={},a=!0){const[c,i]=Object(r.useState)(!1),[o,l]=Object(r.useState)(!1);return Object(r.useEffect)((()=>{if(!(null===e||void 0===e?void 0:e.current))return;const r=new IntersectionObserver((([e])=>{const{isIntersecting:n,target:a}=e;i(n),n&&t&&(r.unobserve(a),l(!0))}),n);return!o&&a&&r.observe(e.current),()=>r.disconnect()}),[e,t,n,o,a]),c};var d=function(e,t){const[n,a]=Object(r.useState)((()=>{try{const n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(n){return console.error(n),t}}));return[n,t=>{try{const r=t instanceof Function?t(n):t;a(r),window.localStorage.setItem(e,JSON.stringify(r))}catch(r){console.error(r)}}]};var h=function(e,t=!0){const[n,a]=Object(r.useState)(0),c=b();return Object(r.useEffect)((()=>{let n=!1,r=null;const i=()=>{const{innerHeight:r}=window,c=Math.max(0,window.scrollY)*e,i=Math.max(-r,Math.min(r,c));a(t?i:c),n=!1},o=()=>{n||(n=!0,r=requestAnimationFrame(i))};return c||window.addEventListener("scroll",o),()=>{window.removeEventListener("scroll",o),cancelAnimationFrame(r)}}),[t,e,c]),n};var b=function(){const[e,t]=Object(r.useState)((()=>{var e,t;return null===(e=(t=window).matchMedia)||void 0===e?void 0:e.call(t,"(prefers-reduced-motion: reduce)").matches}));return Object(r.useEffect)((()=>{var e,n;const r=null===(e=(n=window).matchMedia)||void 0===e?void 0:e.call(n,"(prefers-reduced-motion: reduce)"),a=()=>{t(null===r||void 0===r?void 0:r.matches)};return null===r||void 0===r||r.addListener(a),a(),()=>{null===r||void 0===r||r.removeListener(a)}}),[]),e};var j=function(e){const t=Object(r.useRef)();return Object(r.useEffect)((()=>{t.current=e}),[e]),t.current};var f=function(){return Object(r.useContext)(a.b)};var m=function(){const{status:e}=f(),t=j(e),n=b();Object(r.useEffect)((()=>{("entering"===t&&"entered"===e||n&&"entered"===e)&&(window.scrollTo(0,0),document.getElementById("MainContent").focus())}),[n,t,e])};var p=function(){const e="object"===typeof window,t=navigator.userAgent.match(/iphone|ipod|ipad/i),n=Object(r.useRef)((()=>({w:0,h:0}))),a=Object(r.useRef)((()=>Math.abs(window.orientation))),c=Object(r.useCallback)((()=>{let e=document.createElement("div");e.style.position="fixed",e.style.height="100vh",e.style.width=0,e.style.top=0,document.documentElement.appendChild(e),a.current.w=90===n.current?e.offsetHeight:window.innerWidth,a.current.h=90===n.current?window.innerWidth:e.offsetHeight,document.documentElement.removeChild(e),e=null}),[]),i=Object(r.useCallback)((()=>e?t?(c(),90!==Math.abs(window.orientation)?a.current.h:a.current.w):window.innerHeight:0),[c,e,t]),o=Object(r.useCallback)((()=>({width:e?window.innerWidth:0,height:i()})),[i,e]),[l,s]=Object(r.useState)((()=>o()));return Object(r.useEffect)((()=>{const e=()=>{s(o())};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[o,e]),l}},function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i}));var r=n(2);const a="system-ui, -apple-system, BlinkMacSystemFont, San Francisco, Roboto, Segoe UI, Ubuntu, Helvetica Neue, sans-serif",c={base:{rgbBlack:"0 0 0",rgbWhite:"255 255 255",bezierFastoutSlowin:"cubic-bezier(0.4, 0.0, 0.2, 1)",durationXS:"200ms",durationS:"300ms",durationM:"400ms",durationL:"600ms",durationXL:"800ms",systemFontStack:a,fontStack:`Gotham, ${a}`,monoFontStack:"SFMono Regular, Roboto Mono, Consolas, Liberation Mono, Menlo, Courier, monospace",japaneseFontStack:"\u30d2\u30e9\u30ae\u30ce\u89d2\u30b4 Pro W3, Hiragino Kaku Gothic Pro, Hiragino Sans, Osaka, \u30e1\u30a4\u30ea\u30aa, Meiryo, Segoe UI, sans-serif",fontWeightRegular:400,fontWeightMedium:500,fontWeightBold:700,fontSizeH0:Object(r.e)(140),fontSizeH1:Object(r.e)(100),fontSizeH2:Object(r.e)(58),fontSizeH3:Object(r.e)(38),fontSizeH4:Object(r.e)(28),fontSizeBodyXL:Object(r.e)(22),fontSizeBodyL:Object(r.e)(20),fontSizeBodyM:Object(r.e)(18),fontSizeBodyS:Object(r.e)(16),fontSizeBodyXS:Object(r.e)(14),lineHeightTitle:"1.1",lineHeightBody:"1.5",maxWidthS:"540px",maxWidthM:"720px",maxWidthL:"1096px",maxWidthXL:"1680px",spaceOuter:"64px",spaceXS:"4px",spaceS:"8px",spaceM:"16px",spaceL:"24px",spaceXL:"32px",space2XL:"48px",space3XL:"64px",space4XL:"96px",space5XL:"128px"},desktop:{fontSizeH0:Object(r.e)(120),fontSizeH1:Object(r.e)(80)},laptop:{maxWidthS:"480px",maxWidthM:"640px",maxWidthL:"1000px",maxWidthXL:"1100px",spaceOuter:"48px",fontSizeH0:Object(r.e)(100),fontSizeH1:Object(r.e)(70),fontSizeH2:Object(r.e)(52),fontSizeH3:Object(r.e)(36),fontSizeH4:Object(r.e)(26)},tablet:{fontSizeH0:Object(r.e)(80),fontSizeH1:Object(r.e)(60),fontSizeH2:Object(r.e)(48),fontSizeH3:Object(r.e)(32),fontSizeH4:Object(r.e)(24)},mobile:{spaceOuter:"24px",fontSizeH0:Object(r.e)(56),fontSizeH1:Object(r.e)(40),fontSizeH2:Object(r.e)(34),fontSizeH3:Object(r.e)(28),fontSizeH4:Object(r.e)(22),fontSizeBodyL:Object(r.e)(18),fontSizeBodyM:Object(r.e)(16),fontSizeBodyS:Object(r.e)(14)},mobileS:{spaceOuter:"16px",fontSizeH0:Object(r.e)(42),fontSizeH1:Object(r.e)(38),fontSizeH2:Object(r.e)(28),fontSizeH3:Object(r.e)(24),fontSizeH4:Object(r.e)(20)}},i={dark:{themeId:"dark",rgbBackground:"17 17 17",rgbBackgroundLight:"26 26 26",rgbPrimary:"0 229 255",rgbAccent:"0 229 255",rgbText:"255 255 255",rgbError:"255 0 60",colorTextTitle:"rgb(var(--rgbText) / 1)",colorTextBody:"rgb(var(--rgbText) / 0.8)",colorTextLight:"rgb(var(--rgbText) / 0.6)"},light:{themeId:"light",rgbBackground:"242 242 242",rgbBackgroundLight:"255 255 255",rgbPrimary:"0 0 0",rgbAccent:"0 229 255",rgbText:"0 0 0",rgbError:"210 14 60",colorTextTitle:"rgb(var(--rgbText) / 1)",colorTextBody:"rgb(var(--rgbText) / 0.7)",colorTextLight:"rgb(var(--rgbText) / 0.6)"}}},,,function(e,t,n){"use strict";var r=n(1),a=n(4),c=n.n(a),i=n(0);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var l=i.createElement("path",{d:"M22.92 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.83 4.5 17.72 4 16.46 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.73-1.89-8.84-4.48-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 01-1.93.07 4.28 4.28 0 004 2.98 8.521 8.521 0 01-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.9 20.29 6.16 21 8.58 21c7.88 0 12.21-6.54 12.21-12.21 0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"});function s({title:e,titleId:t,...n},r){return i.createElement("svg",o({width:24,height:24,viewBox:"0 0 24 24",ref:r,"aria-labelledby":t},n),e?i.createElement("title",{id:t},e):null,l)}const u=i.forwardRef(s);n.p;function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var h=i.createElement("path",{fillRule:"evenodd",d:"M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10A10 10 0 012 12zm14.86-6.09A7.726 7.726 0 0012 4.2c-.57 0-1.12.07-1.66.18.66.87 1.66 2.29 2.69 4.27 1.47-.65 2.81-1.51 3.83-2.74zM8.55 5c.55.65 1.63 2.06 2.79 4.25-2.34.71-4.73.87-6.16.87h-.13c-.24 0-.45 0-.62-.01C5 7.87 6.5 6 8.55 5zM4.2 11.89V12c0 1.91.7 3.66 1.84 5 .41-.61 1.12-1.54 2.15-2.5 1.08-.97 2.54-1.96 4.4-2.58-.15-.36-.3-.7-.45-1.03-2.78.87-5.52 1-7.08 1.01h-.01c-.34 0-.63 0-.85-.01zm12.22 6.53A57.5 57.5 0 0015 13.17c.5-.07 1-.11 1.58-.11h.02c.93 0 1.95.12 3.06.37a7.788 7.788 0 01-3.24 4.99zM12 19.8c-1.74 0-3.34-.57-4.64-1.54.28-.45.87-1.32 1.82-2.22.96-.93 2.32-1.89 4.05-2.46.59 1.67 1.13 3.57 1.54 5.71-.86.33-1.77.51-2.77.51zm6.13-12.62a7.823 7.823 0 011.66 4.45 15.32 15.32 0 00-3.19-.35h-.01c-.8 0-1.55.07-2.26.19l-.027-.067c-.16-.395-.313-.774-.493-1.143 1.58-.69 3.09-1.68 4.32-3.08z"});function b({title:e,titleId:t,...n},r){return i.createElement("svg",d({width:24,height:24,viewBox:"0 0 24 24",ref:r,"aria-labelledby":t},n),e?i.createElement("title",{id:t},e):null,h)}const j=i.forwardRef(b);n.p;function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var m=i.createElement("path",{d:"M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"});function p({title:e,titleId:t,...n},r){return i.createElement("svg",f({width:24,height:24,viewBox:"0 0 24 24",ref:r,"aria-labelledby":t},n),e?i.createElement("title",{id:t},e):null,m)}const O=i.forwardRef(p);n.p;function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var g=i.createElement("path",{d:"M12.875 3.516L12 1.932l-.875 1.584-9.393 17L.912 22h22.175l-.82-1.484-9.392-17zM19.697 20H4.303L12 6.068 19.697 20zM11 15v-4h2v4h-2zm0 3v-2h2v2h-2z"});function x({title:e,titleId:t,...n},r){return i.createElement("svg",v({width:24,height:24,viewBox:"0 0 24 24",ref:r,"aria-labelledby":t},n),e?i.createElement("title",{id:t},e):null,g)}const w=i.forwardRef(x);n.p;function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var _=i.createElement("path",{d:"M22 6H2V4h20v2zM2 13h16v-2H2v2zm0 7h20v-2H2v2z"});function S({title:e,titleId:t,...n},r){return i.createElement("svg",y({width:24,height:24,viewBox:"0 0 24 24",ref:r,"aria-labelledby":t},n),e?i.createElement("title",{id:t},e):null,_)}const z=i.forwardRef(S);n.p;function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var M=i.createElement("path",{d:"M14.207 4.793l6.5 6.5.707.707-.707.707-6.5 6.5-1.414-1.414L17.586 13H3v-2h14.586l-4.793-4.793 1.414-1.414z"});function E({title:e,titleId:t,...n},r){return i.createElement("svg",k({width:24,height:24,viewBox:"0 0 24 24",ref:r,"aria-labelledby":t},n),e?i.createElement("title",{id:t},e):null,M)}const N=i.forwardRef(E);n.p;function H(){return(H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var L=i.createElement("path",{d:"M13.586 12L7.793 6.207l1.414-1.414 6.5 6.5.707.707-.707.707-6.5 6.5-1.414-1.414L13.586 12z"});function B({title:e,titleId:t,...n},r){return i.createElement("svg",H({width:24,height:24,viewBox:"0 0 24 24",ref:r,"aria-labelledby":t},n),e?i.createElement("title",{id:t},e):null,L)}const I=i.forwardRef(B);n.p;function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var R=i.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"});function P({title:e,titleId:t,...n},r){return i.createElement("svg",C({width:24,height:24,viewBox:"0 0 24 24",ref:r,"aria-labelledby":t},n),e?i.createElement("title",{id:t},e):null,R)}const T=i.forwardRef(P);n.p;function $(){return($=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var W=i.createElement("path",{d:"M2.01 21L23 12 2.01 3 2 10l15 2-15 2 .01 7z"});function F({title:e,titleId:t,...n},r){return i.createElement("svg",$({width:24,height:24,viewBox:"0 0 24 24",ref:r,"aria-labelledby":t},n),e?i.createElement("title",{id:t},e):null,W)}const A=i.forwardRef(F);n.p;function X(){return(X=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var V=i.createElement("path",{d:"M8 5v14l11-7z"});function U({title:e,titleId:t,...n},r){return i.createElement("svg",X({width:24,height:24,viewBox:"0 0 24 24",ref:r,"aria-labelledby":t},n),e?i.createElement("title",{id:t},e):null,V)}const G=i.forwardRef(U);n.p;function J(){return(J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var D=i.createElement("path",{d:"M6 19h4V5H6v14zm8-14v14h4V5h-4z"});function q({title:e,titleId:t,...n},r){return i.createElement("svg",J({width:24,height:24,viewBox:"0 0 24 24",ref:r,"aria-labelledby":t},n),e?i.createElement("title",{id:t},e):null,D)}const K=i.forwardRef(q);n.p;function Y(){return(Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Q=i.createElement("path",{fillRule:"evenodd",d:"M15 10a2 2 0 100 4 2 2 0 000-4zm-2 5.464A4 4 0 0017.646 9 4 4 0 0015 2H9a4 4 0 00-2.646 7 4.01 4.01 0 00-.818 1 4 4 0 00.818 5 3.977 3.977 0 00-.818 1A4 4 0 1013 18v-2.536zM11 16H9a2 2 0 102 2v-2zM9 8h2V4H9a2 2 0 100 4zm0 2a2 2 0 100 4h2v-4H9zm4-2V4h2a2 2 0 010 4h-2z"});function Z({title:e,titleId:t,...n},r){return i.createElement("svg",Y({width:24,height:24,viewBox:"0 0 24 24",ref:r,"aria-labelledby":t},n),e?i.createElement("title",{id:t},e):null,Q)}const ee=i.forwardRef(Z);n.p,n(37);const te={twitter:u,dribbble:j,github:O,error:w,menu:z,arrowRight:N,chevronRight:I,close:T,send:A,play:G,pause:K,figma:ee};t.a=({icon:e,style:t,className:n,...a})=>{const i=te[e];return Object(r.jsx)(i,{"aria-hidden":!0,className:c()("icon",n),...a})}},,function(e,t,n){"use strict";function r(e){e.currentTarget.blur()}n.d(t,"a",(function(){return r}))},function(e,t,n){"use strict";n.d(t,"a",(function(){return $})),n.d(t,"b",(function(){return W}));var r=n(1);n(34),n(35);const a={menuOpen:!1,theme:"dark"};function c(e,t){const{type:n,value:r}=t;switch(n){case"setTheme":return{...e,theme:r};case"toggleTheme":{const t="dark"===e.theme?"light":"dark";return{...e,theme:t}}case"toggleMenu":return{...e,menuOpen:!e.menuOpen};default:throw new Error}}var i=n(4),o=n.n(i),l=(n(36),n(11)),s=n(7);n(38);var u=function({highlight:e,className:t,...n}){const a=`monogram-clip-${Object(s.c)()}`;return Object(r.jsxs)("svg",{"aria-hidden":!0,className:o()("monogram",t),width:"46",height:"29",viewBox:"0 0 46 29",...n,children:[Object(r.jsx)("defs",{children:Object(r.jsx)("clipPath",{id:a,children:Object(r.jsx)("path",{d:"M16.525 28.462l7.18-18.35.003-.001 9.72 18.442a.838.838 0 001.524-.093l3.39-8.824a.846.846 0 00-.04-.686L30.307 3.605A6.698 6.698 0 0024.367 0h-4.6a.84.84 0 00-.74 1.23l3.63 6.887-3.655 9.15-7.12-13.662A6.698 6.698 0 005.942 0h-4.6a.842.842 0 00-.748 1.23L15 28.554a.839.839 0 001.524-.092zM42.392 8.806a.835.835 0 00.387-.446v.001l2.67-7.23a.838.838 0 00-.785-1.129h-6.578a.837.837 0 00-.736 1.238l3.907 7.226c.22.41.729.56 1.135.34z"})})}),Object(r.jsx)("rect",{clipPath:`url(#${a})`,width:"100%",height:"100%"}),e&&Object(r.jsx)("g",{clipPath:`url(#${a})`,children:Object(r.jsx)("rect",{className:"monogram__highlight",width:"100%",height:"100%"})})]})},d=n(8),h=n(0),b=n(12),j=n(49),f=n(13),m=n(2),p=n(19),O=n(18);n(42);var v=({menuOpen:e,...t})=>{const n=o()("nav-toggle__icon",{"nav-toggle__icon--open":e});return Object(r.jsx)(O.a,{iconOnly:!0,className:"nav-toggle","aria-label":"Menu","aria-expanded":e,...t,children:Object(r.jsxs)("div",{className:"nav-toggle__inner",children:[Object(r.jsx)(l.a,{className:o()(n,"nav-toggle__icon--menu"),open:e,icon:"menu"}),Object(r.jsx)(l.a,{className:o()(n,"nav-toggle__icon--close"),open:e,icon:"close"})]})})};n(43);var g=({isMobile:e,...t})=>{const{dispatch:n,theme:a}=Object(s.a)(),c="dark"===a,i=`theme-toggle-mask-${Object(s.c)()}`;return Object(r.jsx)(O.a,{iconOnly:!0,className:o()("theme-toggle",{"theme-toggle--mobile":e}),"aria-label":"Toggle theme",onClick:()=>{n({type:"toggleTheme"})},...t,children:Object(r.jsxs)("svg",{"aria-hidden":!0,className:"theme-toggle__svg",width:"38",height:"38",viewBox:"0 0 38 38",children:[Object(r.jsx)("defs",{children:Object(r.jsxs)("mask",{id:i,children:[Object(r.jsx)("circle",{className:o()("theme-toggle__circle","theme-toggle__circle--mask",{"theme-toggle__circle--dark":c}),cx:"19",cy:"19",r:"13"}),Object(r.jsx)("circle",{className:o()("theme-toggle__mask",{"theme-toggle__mask--dark":c}),cx:"25",cy:"14",r:"9"})]})}),Object(r.jsx)("path",{className:o()("theme-toggle__path",{"theme-toggle__path--dark":c}),d:"M19 3v7M19 35v-7M32.856 11l-6.062 3.5M5.144 27l6.062-3.5M5.144 11l6.062 3.5M32.856 27l-6.062-3.5"}),Object(r.jsx)("circle",{className:o()("theme-toggle__circle",{"theme-toggle__circle--dark":c}),mask:`url(#${i})`,cx:"19",cy:"19",r:"12"})]})})};const x=[{label:"Projects",pathname:"/",hash:"#project-1"},{label:"Details",pathname:"/",hash:"#details"},{label:"Contact",pathname:"/contact"}],w=[{label:"Twitter",url:"https://twitter.com/hamishMW",icon:"twitter"},{label:"Figma",url:"https://www.figma.com/@Hamish",icon:"figma"},{label:"Github",url:"https://github.com/HamishMW",icon:"github"}],y=()=>Object(r.jsx)("div",{className:"navbar__nav-icons",children:w.map((({label:e,url:t,icon:n})=>Object(r.jsx)("a",{className:"navbar__nav-icon-link","aria-label":e,href:t,onMouseUp:f.a,target:"_blank",rel:"noopener noreferrer",children:Object(r.jsx)(l.a,{className:"navbar__nav-icon",icon:n})},e)))});function _(e){const{menuOpen:t,dispatch:n}=Object(s.a)(),{location:a}=e,[c,i]=Object(h.useState)(),l=Object(s.l)(),O=Object(h.useRef)(),w=l.width<=m.a.mobile||l.height<=696,_=()=>{i(Math.random().toString(32).substr(2,8))},S=()=>{_(),t&&n({type:"toggleMenu"})},z=(e="",t="")=>!!e&&`${e}${t}`===`${a.pathname}${a.hash}`;return Object(r.jsxs)("header",{className:"navbar",ref:O,children:[Object(r.jsx)(b.b,{className:"navbar__logo",to:{pathname:"/",hash:"#intro",state:c},"aria-label":"Hamish Williams, Designer",onClick:S,onMouseUp:f.a,children:Object(r.jsx)(u,{highlight:!0})}),Object(r.jsx)(v,{onClick:()=>n({type:"toggleMenu"}),menuOpen:t}),Object(r.jsxs)("nav",{className:"navbar__nav",children:[Object(r.jsx)("div",{className:"navbar__nav-list",children:x.map((({label:e,pathname:t,hash:n})=>Object(r.jsx)(b.b,{className:"navbar__nav-link","aria-current":z(t,n)?"page":void 0,onClick:_,to:{pathname:t,hash:n,state:c},onMouseUp:f.a,children:e},e)))}),Object(r.jsx)(y,{})]}),Object(r.jsx)(j.a,{mountOnEnter:!0,unmountOnExit:!0,in:t,timeout:{enter:0,exit:Object(m.b)(d.b.base.durationL)},onEnter:p.b,children:e=>Object(r.jsxs)("nav",{className:`navbar__mobile-nav navbar__mobile-nav--${e}`,children:[x.map((({label:t,pathname:n,hash:a},i)=>Object(r.jsx)(b.b,{className:o()("navbar__mobile-nav-link",`navbar__mobile-nav-link--${e}`),"aria-current":z(n,a)?"page":void 0,onClick:S,to:{pathname:n,hash:a,state:c},onMouseUp:f.a,style:{transitionDelay:Object(m.c)(Number(Object(m.b)(d.b.base.durationS))+50*i)},children:t},t))),Object(r.jsx)(y,{}),Object(r.jsx)(g,{isMobile:!0})]})}),!w&&Object(r.jsx)(g,{})]})}var S=Object(h.memo)(_),z=n(24),k=n(20),M=n(17),E=n(3),N=n(48),H=n(23);const L=Object(h.lazy)((()=>Promise.all([n.e(0),n.e(1),n.e(2),n.e(5)]).then(n.bind(null,101)))),B=Object(h.lazy)((()=>Promise.all([n.e(0),n.e(11)]).then(n.bind(null,105)))),I=Object(h.lazy)((()=>Promise.all([n.e(0),n.e(1),n.e(2),n.e(15),n.e(6)]).then(n.bind(null,99)))),C=Object(h.lazy)((()=>n.e(7).then(n.bind(null,102)))),R=Object(h.lazy)((()=>n.e(10).then(n.bind(null,100)))),P=Object(h.lazy)((()=>Promise.all([n.e(0),n.e(12)]).then(n.bind(null,106)))),T=Object(h.lazy)((()=>n.e(8).then(n.bind(null,103)))),$=Object(h.createContext)(),W=Object(h.createContext)(),F=()=>{const e=Object(E.e)(),{pathname:t}=e;return Object(r.jsxs)(h.Fragment,{children:[Object(r.jsx)(M.a,{children:Object(r.jsx)("link",{rel:"canonical",href:`https://hamishw.com${t}`})}),Object(r.jsx)(k.a,{showOnFocus:!0,as:"a",className:"skip-to-main",href:"#MainContent",children:"Skip to main content"}),Object(r.jsx)(S,{location:e}),Object(r.jsx)(N.a,{component:"main",className:"app",tabIndex:-1,id:"MainContent",children:Object(r.jsx)(j.a,{timeout:Object(m.b)(d.b.base.durationS),onEnter:p.b,children:n=>Object(r.jsx)(W.Provider,{value:{status:n},children:Object(r.jsx)("div",{className:o()("app__page",`app__page--${n}`),children:Object(r.jsx)(h.Suspense,{fallback:Object(r.jsx)(h.Fragment,{}),children:Object(r.jsxs)(E.c,{location:e,children:[Object(r.jsx)(E.a,{path:"/",element:Object(r.jsx)(L,{})}),Object(r.jsx)(E.a,{path:"/contact",element:Object(r.jsx)(B,{})}),Object(r.jsx)(E.a,{path:"/projects/smart-sparrow",element:Object(r.jsx)(I,{})}),Object(r.jsx)(E.a,{path:"/projects/slice",element:Object(r.jsx)(C,{})}),Object(r.jsx)(E.a,{path:"/projects/volkihar-knight",element:Object(r.jsx)(R,{})}),Object(r.jsx)(E.a,{path:"/uses",element:Object(r.jsx)(T,{})}),Object(r.jsx)(E.a,{path:"*",element:Object(r.jsx)(P,{})})]},t)})})})},t)})]})};t.c=()=>{const[e]=Object(s.f)("theme","dark"),[t,n]=Object(h.useReducer)(c,a);return Object(h.useEffect)((()=>{H.a||console.info("\n__  __  __\n\\ \\ \\ \\ \\\u2215\n \\ \\\u2215\\ \\\n  \\\u2215  \\\u2215\n\n\nTaking a peek huh? Check out the source code: https://github.com/HamishMW/portfolio\n\n\n"),window.history.scrollRestoration="manual"}),[]),Object(h.useEffect)((()=>{n({type:"setTheme",value:e})}),[e]),Object(r.jsx)($.Provider,{value:{...t,dispatch:n},children:Object(r.jsx)(z.b,{themeId:t.theme,children:Object(r.jsx)(b.a,{children:Object(r.jsx)(F,{})})})})}},,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(1),a=n(0),c=n(4),i=n.n(c),o=n(12),l=n(9),s=n(7),u=n(2),d=n(20);n(40);var h=({className:e,style:t,size:n=32,text:a="Loading...",...c})=>{const o=()=>Object(l.createPortal)(Object(r.jsx)(d.a,{className:"loader-announcement","aria-live":"assertive",children:a}),document.body);if(Object(s.h)())return Object(r.jsxs)("div",{className:"loader-text",...c,children:[a,o()]});const h=Math.round(n/3*.2),b=Math.round(n/3-2*h-1);return Object(r.jsxs)("div",{className:i()("loader",e),"aria-label":a,style:{"--size":Object(u.d)(n),"--spanSize":Object(u.d)(b),"--gapSize":Object(u.d)(h),...t},...c,children:[Object(r.jsxs)("div",{className:"loader__content",children:[Object(r.jsx)("div",{className:"loader__span"}),Object(r.jsx)("div",{className:"loader__span"}),Object(r.jsx)("div",{className:"loader__span"})]}),o()]})},b=n(11),j=n(13);n(41);const f=Object(a.forwardRef)((({className:e,as:t,secondary:n,loading:a,loadingText:c="loading",icon:l,iconEnd:s,iconHoverShift:u,iconOnly:d,children:f,rel:m,target:p,href:O,...v},g)=>{const x=null===O||void 0===O?void 0:O.includes("://"),w=x||"#"===(null===O||void 0===O?void 0:O[0])?"a":o.b,y=t||(O?w:"button");return Object(r.jsxs)(y,{className:i()("button",e,{"button--loading":a,"button--icon-only":d,"button--secondary":n}),href:O&&x?O:void 0,to:O&&!x?O:void 0,rel:m||x?"noopener noreferrer":void 0,target:p||x?"_blank":void 0,onMouseUp:j.a,ref:g,...v,children:[!!l&&Object(r.jsx)(b.a,{className:i()("button__icon",{"button__icon--start":!d,"button__icon--shift":u}),icon:l}),!!f&&Object(r.jsx)("span",{className:"button__text",children:f}),!!s&&Object(r.jsx)(b.a,{className:i()("button__icon",{"button__icon--end":!d,"button__icon--shift":u}),icon:s}),a&&Object(r.jsx)(h,{className:"button__loader",size:32,text:c})]})}))},function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return c}));const r=["entering","entered"],a=e=>r.includes(e),c=e=>e&&e.offsetHeight},function(e,t,n){"use strict";var r=n(1),a=n(4),c=n.n(a);n(39);t.a=({className:e,showOnFocus:t,as:n="span",children:a,visible:i,...o})=>Object(r.jsx)(n,{className:c()("visually-hidden",e,{"visually-hidden--hidden":!i&&!t,"visually-hidden--show-on-focus":t}),...o,children:a})},,,function(e,t,n){"use strict";const r="ReactSnap"===navigator.userAgent;t.a=r},function(e,t,n){"use strict";n.d(t,"c",(function(){return l})),n.d(t,"a",(function(){return j}));var r=n(1),a=n(0),c=n(17),i=n(4),o=n.n(i);var l=function(){return Object(a.useContext)(j)},s=n(8),u=n(2),d=n.p+"static/media/gotham-book.9c2a0ce4.woff2",h=n.p+"static/media/gotham-medium.0ad7d622.woff2";const b=`\n  @font-face {\n    font-family: "Gotham";\n    font-weight: 400;\n    src: url(${d}) format("woff");\n    font-display: swap;\n  }\n\n  @font-face {\n    font-family: "Gotham";\n    font-weight: 500;\n    src: url(${h}) format("woff2");\n    font-display: swap;\n  }\n`,j=Object(a.createContext)({});function f(e){return Object.keys(e).filter((e=>"themeId"!==e)).map((t=>`--${t}: ${e[t]};`)).join("\n")}function m(e){let t={};for(const n of Object.keys(e))"themeId"!==n&&(t[`--${n}`]=e[n]);return t}const p=`\n  :root {\n    ${f(s.b.base)}\n  }\n\n  ${Object.keys(u.a).map((e=>`\n        @media (max-width: ${u.a[e]}px) {\n          :root {\n            ${f(s.b[e])}\n          }\n        }\n      `)).join("\n")}\n\n  .dark {\n    ${f(s.a.dark)}\n  }\n\n  .light {\n    ${f(s.a.light)}\n  }\n`;t.b=({themeId:e="dark",theme:t,children:n,className:i,as:u="div"})=>{const f={...s.a[e],...t},O=!l().themeId;return Object(a.useEffect)((()=>{O&&(window.localStorage.setItem("theme",JSON.stringify(e)),document.body.classList.remove("light","dark"),document.body.classList.add(e))}),[e,O]),Object(r.jsxs)(j.Provider,{value:f,children:[O&&Object(r.jsxs)(a.Fragment,{children:[Object(r.jsxs)(c.a,{children:[Object(r.jsx)("link",{rel:"preload",href:h,as:"font",crossorigin:""}),Object(r.jsx)("link",{rel:"preload",href:d,as:"font",crossorigin:""}),Object(r.jsx)("style",{children:b}),Object(r.jsx)("style",{children:p})]}),n]}),!O&&Object(r.jsx)(u,{className:o()("theme-provider",i),style:m(f),children:n})]})}},,,,function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(9),c=n(14);const i=document.getElementById("root");i.hasChildNodes()?Object(a.hydrate)(Object(r.jsx)(c.c,{}),i):Object(a.render)(Object(r.jsx)(c.c,{}),i)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){}],[[28,4,9]]]);
//# sourceMappingURL=main.a7254e9c.chunk.js.map