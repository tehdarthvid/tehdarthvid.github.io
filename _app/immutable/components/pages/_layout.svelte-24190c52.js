import{S as G,i as k,s as R,k as h,a as H,l as _,m,c as L,h as c,b as j,C as i,B as A,q as E,r as b,u as N,n as I,D as K,E as O,F as J,w as S,x as T,y as B,G as M,H as Q,I as W,f as D,t as F,z as q}from"../../chunks/index-f5dc60c2.js";import{j as X}from"../../chunks/content-9046c87c.js";function U(l){let e,s=l[0].welcome_msg+"",t;return{c(){e=h("p"),t=E(s)},l(a){e=_(a,"P",{});var n=m(e);t=b(n,s),n.forEach(c)},m(a,n){j(a,e,n),i(e,t)},p(a,n){n&1&&s!==(s=a[0].welcome_msg+"")&&N(t,s)},d(a){a&&c(e)}}}function V(l){let e,s,t=l[0].name+"",a;return{c(){e=h("h1"),s=h("a"),a=E(t),this.h()},l(n){e=_(n,"H1",{});var r=m(e);s=_(r,"A",{href:!0});var g=m(s);a=b(g,t),g.forEach(c),r.forEach(c),this.h()},h(){I(s,"href","/")},m(n,r){j(n,e,r),i(e,s),i(s,a)},p(n,r){r&1&&t!==(t=n[0].name+"")&&N(a,t)},d(n){n&&c(e)}}}function Y(l){let e,s,t=l[0].welcome_msg!=null&&U(l),a=l[0].name!=null&&V(l);return{c(){e=h("header"),t&&t.c(),s=H(),a&&a.c()},l(n){e=_(n,"HEADER",{});var r=m(e);t&&t.l(r),s=L(r),a&&a.l(r),r.forEach(c)},m(n,r){j(n,e,r),t&&t.m(e,null),i(e,s),a&&a.m(e,null)},p(n,[r]){n[0].welcome_msg!=null?t?t.p(n,r):(t=U(n),t.c(),t.m(e,s)):t&&(t.d(1),t=null),n[0].name!=null?a?a.p(n,r):(a=V(n),a.c(),a.m(e,null)):a&&(a.d(1),a=null)},i:A,o:A,d(n){n&&c(e),t&&t.d(),a&&a.d()}}}function Z(l,e,s){var t;try{t=X,t==null&&(t={})}catch{t={}}return[t]}class x extends G{constructor(e){super(),k(this,e,Z,Y,R,{})}}const z="0e344f9d2a539a43b7dd688d56e4f6c04009ccfe",ee="G-FLK4N45VJQ";function te(l){let e,s,t,a,n,r,g,p,$,w,y;return{c(){e=h("footer"),s=h("div"),t=E(` 
		`),a=h("p"),n=h("a"),r=E("source"),g=H(),p=h("p"),$=h("a"),w=E("build "),y=E(l[0]),this.h()},l(u){e=_(u,"FOOTER",{});var v=m(e);s=_(v,"DIV",{id:!0,class:!0});var f=m(s);t=b(f,` 
		`),a=_(f,"P",{});var o=m(a);n=_(o,"A",{href:!0});var d=m(n);r=b(d,"source"),d.forEach(c),o.forEach(c),g=L(f),p=_(f,"P",{});var P=m(p);$=_(P,"A",{href:!0});var C=m($);w=b(C,"build "),y=b(C,l[0]),C.forEach(c),P.forEach(c),f.forEach(c),v.forEach(c),this.h()},h(){I(n,"href","https://github.com/tehdarthvid/tehdarthvid.github.io/"),I($,"href","https://github.com/tehdarthvid/tehdarthvid.github.io/commit/"+z),I(s,"id","build"),I(s,"class","svelte-1w3afru")},m(u,v){j(u,e,v),i(e,s),i(s,t),i(s,a),i(a,n),i(n,r),i(s,g),i(s,p),i(p,$),i($,w),i($,y)},p(u,[v]){v&1&&N(y,u[0])},i:A,o:A,d(u){u&&c(e)}}}function ae(l,e,s){let t=z;return t=t.slice(0,7),[t]}class se extends G{constructor(e){super(),k(this,e,ae,te,R,{})}}function ne(l){let e,s;return{c(){e=h("script"),this.h()},l(t){const a=K("svelte-w42jjy",document.head);e=_(a,"SCRIPT",{src:!0});var n=m(e);n.forEach(c),a.forEach(c),this.h()},h(){e.async=!0,O(e.src,s="https://www.googletagmanager.com/gtag/js")||I(e,"src",s)},m(t,a){i(document.head,e)},p:A,i:A,o:A,d(t){c(e)}}}function re(l){try{if(typeof window<"u"&&window){let s=function(){window.dataLayer.push(arguments)};const e=ee;window.dataLayer=window.dataLayer||[],s("js",new Date),s("config",e)}}catch{console.error("Failed to initialize Analytics")}return[]}class le extends G{constructor(e){super(),k(this,e,re,ne,R,{})}}function oe(l){let e,s,t,a,n,r,g,p,$,w,y,u;s=new x({}),a=new le({});const v=l[1].default,f=J(v,l,l[0],null);return p=new se({}),{c(){e=h("div"),S(s.$$.fragment),t=H(),S(a.$$.fragment),n=H(),r=h("main"),f&&f.c(),g=H(),S(p.$$.fragment),$=H(),w=h("script"),y=E("0;"),this.h()},l(o){e=_(o,"DIV",{class:!0});var d=m(e);T(s.$$.fragment,d),t=L(d),T(a.$$.fragment,d),n=L(d),r=_(d,"MAIN",{});var P=m(r);f&&f.l(P),P.forEach(c),g=L(d),T(p.$$.fragment,d),$=L(d),w=_(d,"SCRIPT",{});var C=m(w);y=b(C,"0;"),C.forEach(c),d.forEach(c),this.h()},h(){I(e,"class","app")},m(o,d){j(o,e,d),B(s,e,null),i(e,t),B(a,e,null),i(e,n),i(e,r),f&&f.m(r,null),i(e,g),B(p,e,null),i(e,$),i(e,w),i(w,y),u=!0},p(o,[d]){f&&f.p&&(!u||d&1)&&M(f,v,o,o[0],u?W(v,o[0],d,null):Q(o[0]),null)},i(o){u||(D(s.$$.fragment,o),D(a.$$.fragment,o),D(f,o),D(p.$$.fragment,o),u=!0)},o(o){F(s.$$.fragment,o),F(a.$$.fragment,o),F(f,o),F(p.$$.fragment,o),u=!1},d(o){o&&c(e),q(s),q(a),f&&f.d(o),q(p)}}}function ie(l,e,s){let{$$slots:t={},$$scope:a}=e;return l.$$set=n=>{"$$scope"in n&&s(0,a=n.$$scope)},[a,t]}class de extends G{constructor(e){super(),k(this,e,ie,oe,R,{})}}export{de as default};
