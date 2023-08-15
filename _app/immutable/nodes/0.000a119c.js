import{s as S,n as m,o as D,b as O,c as z,u as B,g as F,d as W}from"../chunks/scheduler.e9b79cf6.js";import{S as k,i as C,g as d,h as g,x as R,k as $,a as I,f as p,s as E,m as x,j as y,c as j,n as w,y as h,r as L,u as M,v as T,d as b,t as v,w as A}from"../chunks/index.258ff712.js";import{l as q,S as N}from"../chunks/Section.664e570d.js";import{b as H}from"../chunks/paths.6a073ace.js";function U(o){let e,s=`<div class="h-8 lg:h-16 py-1 lg:py-2 px-2 lg:px-4 absolute top-0 left-0 right-0 flex justify-between"><a href="${H}/"><img class="h-full w-auto object-contain lg:pt-1 lg:pr-1 lg:pb-1 lg:pl-2" src="${q}" alt="Home"/></a> <nav class="flex flex-col [&amp;&gt;:not(:first-child)]:border-t-2 lg:[&amp;&gt;:not(:first-child)]:opacity-0 lg:[&amp;:hover&gt;:not(:first-child)]:opacity-100"><a class="text-base lg:text-xl no-underline p-2" href="${H}/">Home</a> <a class="text-base lg:text-xl no-underline p-2 border-white transition duration-300 ease-in-out" href="${H}/about">About</a></nav></div>`;return{c(){e=d("header"),e.innerHTML=s,this.h()},l(t){e=g(t,"HEADER",{class:!0,"data-svelte-h":!0}),R(e)!=="svelte-12j784d"&&(e.innerHTML=s),this.h()},h(){$(e,"class","sticky top-0 left-0 opacity-0 z-[9999]")},m(t,l){I(t,e,l),o[1](e)},p:m,i:m,o:m,d(t){t&&p(e),o[1](null)}}}function V(o,e,s){let t;D(()=>{if(typeof IntersectionObserver<"u"){const r={threshold:[.5]},c=new IntersectionObserver(u=>{u.forEach(n=>{n.intersectionRatio<=.5&&(t.style.opacity==="0"||t.style.opacity==="")&&(s(0,t.style.transition="opacity .6s ease-in",t),s(0,t.style.opacity="1",t))})},r),f=document.querySelector("#Hero");return f!==null?c.observe(f):s(0,t.style.opacity="1",t),()=>{f!==null&&c.unobserve(f)}}});function l(r){O[r?"unshift":"push"](()=>{t=r,s(0,t)})}return[t,l]}class G extends k{constructor(e){super(),C(this,e,V,U,S,{})}}const P=""+new URL("../assets/github-mark-white.fab00c2d.svg",import.meta.url).href,Y=""+new URL("../assets/envelope-regular.bcb0268e.svg",import.meta.url).href;function J(o){let e,s,t=`<a href="https://github.com/tiredBlueWhale"><img class="w-16 h-16 object-container" src="${P}" alt="GitHub"/></a> <a href="mailto: tired.blue.whale@gmail.com"><img class="w-16 h-16 object-container" src="${Y}" alt="Mail"/></a>`,l,r,c,f,u;return{c(){e=d("footer"),s=d("div"),s.innerHTML=t,l=E(),r=d("span"),c=x("Copyright @ "),f=x(o[0]),u=x(" Tired Blue Whale. All rights reserved"),this.h()},l(n){e=g(n,"FOOTER",{class:!0});var a=y(e);s=g(a,"DIV",{class:!0,"data-svelte-h":!0}),R(s)!=="svelte-1iazwkg"&&(s.innerHTML=t),l=j(a),r=g(a,"SPAN",{class:!0});var i=y(r);c=w(i,"Copyright @ "),f=w(i,o[0]),u=w(i," Tired Blue Whale. All rights reserved"),i.forEach(p),a.forEach(p),this.h()},h(){$(s,"class","flex gap-4"),$(r,"class","text-white"),$(e,"class","h-full p-8 flex flex-col justify-center items-center gap-6")},m(n,a){I(n,e,a),h(e,s),h(e,l),h(e,r),h(r,c),h(r,f),h(r,u)},p:m,i:m,o:m,d(n){n&&p(e)}}}function K(o){return[new Date().getFullYear()]}class Q extends k{constructor(e){super(),C(this,e,K,J,S,{})}}function X(o){let e,s;return e=new Q({}),{c(){L(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,l){T(e,t,l),s=!0},i(t){s||(b(e.$$.fragment,t),s=!0)},o(t){v(e.$$.fragment,t),s=!1},d(t){A(e,t)}}}function Z(o){let e,s,t,l,r,c,f;s=new G({});const u=o[0].default,n=z(u,o,o[1],null);return c=new N({props:{$$slots:{default:[X]},$$scope:{ctx:o}}}),{c(){e=d("div"),L(s.$$.fragment),t=E(),l=d("main"),n&&n.c(),r=E(),L(c.$$.fragment),this.h()},l(a){e=g(a,"DIV",{class:!0});var i=y(e);M(s.$$.fragment,i),t=j(i),l=g(i,"MAIN",{class:!0});var _=y(l);n&&n.l(_),_.forEach(p),r=j(i),M(c.$$.fragment,i),i.forEach(p),this.h()},h(){$(l,"class","z-10"),$(e,"class","relative flex flex-col min-h-screen")},m(a,i){I(a,e,i),T(s,e,null),h(e,t),h(e,l),n&&n.m(l,null),h(e,r),T(c,e,null),f=!0},p(a,[i]){n&&n.p&&(!f||i&2)&&B(n,u,a,a[1],f?W(u,a[1],i,null):F(a[1]),null);const _={};i&2&&(_.$$scope={dirty:i,ctx:a}),c.$set(_)},i(a){f||(b(s.$$.fragment,a),b(n,a),b(c.$$.fragment,a),f=!0)},o(a){v(s.$$.fragment,a),v(n,a),v(c.$$.fragment,a),f=!1},d(a){a&&p(e),A(s),n&&n.d(a),A(c)}}}function ee(o,e,s){let{$$slots:t={},$$scope:l}=e;return o.$$set=r=>{"$$scope"in r&&s(1,l=r.$$scope)},[t,l]}class re extends k{constructor(e){super(),C(this,e,ee,Z,S,{})}}export{re as component};