var app=function(){"use strict";function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function l(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(e,n,l){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const l=e.subscribe(...n);return l.unsubscribe?()=>l.unsubscribe():l}(n,l))}function c(t){return null==t?"":t}function u(t,e){t.appendChild(e)}function a(t,e,n){t.insertBefore(e,n||null)}function d(t){t.parentNode.removeChild(t)}function f(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function g(t){return document.createElement(t)}function h(t){return document.createTextNode(t)}function m(){return h(" ")}function p(t,e,n,l){return t.addEventListener(e,n,l),()=>t.removeEventListener(e,n,l)}function b(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function v(t,e){e=""+e,t.data!==e&&(t.data=e)}function $(t,e,n,l){t.style.setProperty(e,n,l?"important":"")}let w;function y(t){w=t}function _(){if(!w)throw new Error("Function called outside component initialization");return w}function L(t){_().$$.after_update.push(t)}const x=[],k=[],R=[],U=[],j=Promise.resolve();let C=!1;function S(t){R.push(t)}let B=!1;const E=new Set;function I(){if(!B){B=!0;do{for(let t=0;t<x.length;t+=1){const e=x[t];y(e),A(e.$$)}for(x.length=0;k.length;)k.pop()();for(let t=0;t<R.length;t+=1){const e=R[t];E.has(e)||(E.add(e),e())}R.length=0}while(x.length);for(;U.length;)U.pop()();C=!1,B=!1,E.clear()}}function A(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(S)}}const D=new Set;let X;function Y(){X={r:0,c:[],p:X}}function T(){X.r||o(X.c),X=X.p}function F(t,e){t&&t.i&&(D.delete(t),t.i(e))}function z(t,e,n,l){if(t&&t.o){if(D.has(t))return;D.add(t),X.c.push(()=>{D.delete(t),l&&(n&&t.d(1),l())}),t.o(e)}}function G(t,e){const n={},l={},o={$$scope:1};let s=t.length;for(;s--;){const r=t[s],i=e[s];if(i){for(const t in r)t in i||(l[t]=1);for(const t in i)o[t]||(n[t]=i[t],o[t]=1);t[s]=i}else for(const t in r)o[t]=1}for(const t in l)t in n||(n[t]=void 0);return n}function H(t){return"object"==typeof t&&null!==t?t:{}}function N(t){t&&t.c()}function O(t,e,l){const{fragment:r,on_mount:i,on_destroy:c,after_update:u}=t.$$;r&&r.m(e,l),S(()=>{const e=i.map(n).filter(s);c?c.push(...e):o(e),t.$$.on_mount=[]}),u.forEach(S)}function J(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function M(t,e){-1===t.$$.dirty[0]&&(x.push(t),C||(C=!0,j.then(I)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function P(e,n,s,r,i,c,u=[-1]){const a=w;y(e);const f=n.props||{},g=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:i,bound:l(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:[]),callbacks:l(),dirty:u};let h=!1;if(g.ctx=s?s(e,f,(t,n,...l)=>{const o=l.length?l[0]:n;return g.ctx&&i(g.ctx[t],g.ctx[t]=o)&&(g.bound[t]&&g.bound[t](o),h&&M(e,t)),n}):[],g.update(),h=!0,o(g.before_update),g.fragment=!!r&&r(g.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);g.fragment&&g.fragment.l(t),t.forEach(d)}else g.fragment&&g.fragment.c();n.intro&&F(e.$$.fragment),O(e,n.target,n.anchor),I()}y(a)}class W{$destroy(){J(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}var V=[{title:"GitHub",url:"https://github.com/tehdarthvid"},{title:"LinkedIn",url:"https://www.linkedin.com/in/darthvid/"},{title:"Letterboxd",url:"https://letterboxd.com/darthvid/films/"},{title:"Twitter",url:"https://twitter.com/darthvid"}],q=[{title:"influences",url:"https://dna.darthvid.com"},{title:"this site",url:"https://github.com/tehdarthvid/tehdarthvid.github.io/tree/dev"},{title:"log-wakatime.fish",url:"https://github.com/tehdarthvid/log-wakatime-fish"}],K=[{title:"JavaScript",url:"https://en.wikipedia.org/wiki/JavaScript",imgURL:"assets/images/javascript.svg"},{title:"Node.js",url:"https://nodejs.org/",imgURL:"assets/images/nodejs.svg"},{title:"Svelte",url:"https://svelte.dev/",imgURL:"assets/images/svelte.png"},{title:"Vue.js",url:"https://vuejs.org/",imgURL:"assets/images/vue.png"},{title:"Amazon Web Services",url:"https://aws.amazon.com/",imgURL:"assets/images/aws.png"},{title:"Google Cloud Platform",url:"https://cloud.google.com/",imgURL:"assets/images/gcp.png"},{title:"GitHub Actions",url:"https://github.com/features/actions",imgURL:"assets/images/gh-actions.svg"},{title:"C/C++",url:"http://csapp.cs.cmu.edu/3e/docs/chistory.html",imgURL:"assets/images/clang.jpg"},{title:"fish",url:"https://fishshell.com/",imgURL:"assets/images/fish.png"},{title:"Visual Studio Code",url:"https://code.visualstudio.com/",imgURL:"assets/images/vscode.png"},{title:"kitty",url:"https://sw.kovidgoyal.net/kitty/",imgURL:"assets/images/kitty.png"}],Q=[{title:"Go",url:"https://golang.org/",imgURL:"assets/images/go-gopher.png"},{title:"Deno",url:"https://deno.land/",imgURL:"assets/images/deno.svg"},{title:"Blender",url:"https://www.blender.org/",imgURL:"assets/images/blender.png"},{title:"Flutter",url:"https://flutter.dev/",imgURL:"assets/images/flutter.svg"},{title:"GitLab CI/CD",url:"https://docs.gitlab.com/ee/ci/introduction/",imgURL:"assets/images/gl-cicd.png"},{title:"Rust",url:"https://www.rust-lang.org/",imgURL:"assets/images/rust-ferris.svg"}],Z={name:"darthvid",welcome_msg:"サイトへようこそ!",links:V,projects:q,toybox:K,shelf:Q},tt=Object.freeze({__proto__:null,name:"darthvid",welcome_msg:"サイトへようこそ!",links:V,projects:q,toybox:K,shelf:Q,default:Z});function et(t){let e,n;return{c(){e=g("img"),b(e,"class","icon svelte-rs3oun"),b(e,"alt",t[0]),e.src!==(n=t[2])&&b(e,"src",n)},m(t,n){a(t,e,n)},p(t,l){1&l&&b(e,"alt",t[0]),4&l&&e.src!==(n=t[2])&&b(e,"src",n)},d(t){t&&d(e)}}}function nt(e){let n,l,o=e[3]&&et(e);return{c(){n=g("div"),l=g("a"),o&&o.c(),b(l,"href",e[1]),b(l,"title",e[0]),b(l,"target","_blank"),b(n,"class","icon svelte-rs3oun")},m(t,e){a(t,n,e),u(n,l),o&&o.m(l,null)},p(t,[e]){t[3]?o?o.p(t,e):(o=et(t),o.c(),o.m(l,null)):o&&(o.d(1),o=null),2&e&&b(l,"href",t[1]),1&e&&b(l,"title",t[0])},i:t,o:t,d(t){t&&d(n),o&&o.d()}}}function lt(t,e,n){let{title:l}=e,{url:o}=e,{imgURL:s}=e,r=!1,i=null;L(()=>{!r&&s&&(i=new Image,i.onload=c,i.src=s)});const c=()=>{n(3,r=!0)};return t.$set=t=>{"title"in t&&n(0,l=t.title),"url"in t&&n(1,o=t.url),"imgURL"in t&&n(2,s=t.imgURL)},[l,o,s,r]}class ot extends W{constructor(t){super(),P(this,t,lt,nt,r,{title:0,url:1,imgURL:2})}}function st(e){let n,l,o,s,r;return{c(){n=g("div"),l=h("【\n  "),o=g("a"),s=h(e[0]),r=h("\n  】"),b(o,"href",e[1]),b(n,"class","linkto")},m(t,e){a(t,n,e),u(n,l),u(n,o),u(o,s),u(n,r)},p(t,[e]){1&e&&v(s,t[0]),2&e&&b(o,"href",t[1])},i:t,o:t,d(t){t&&d(n)}}}function rt(t,e,n){let{title:l}=e,{url:o}=e;return t.$set=t=>{"title"in t&&n(0,l=t.title),"url"in t&&n(1,o=t.url)},[l,o]}class it extends W{constructor(t){super(),P(this,t,rt,st,r,{title:0,url:1})}}function ct(t){let e,n;return{c(){e=g("div"),b(e,"class",n=c(t[4]?"card-bg card-bg__fade-in":"card-bg")+" svelte-plub69"),$(e,"transform","translateX("+t[7]+"px) translateY("+t[8]+"px)"),$(e,"background-image","url("+t[1]+")")},m(t,n){a(t,e,n)},p(t,l){16&l&&n!==(n=c(t[4]?"card-bg card-bg__fade-in":"card-bg")+" svelte-plub69")&&b(e,"class",n),384&l&&$(e,"transform","translateX("+t[7]+"px) translateY("+t[8]+"px)"),2&l&&$(e,"background-image","url("+t[1]+")")},d(t){t&&d(e)}}}function ut(t){let e,n,l,o,s;return{c(){e=g("div"),n=g("video"),n.src!==(l=t[2])&&b(n,"src",l),n.autoplay="true",n.loop="true",n.muted="true",b(n,"class","svelte-plub69"),b(e,"class",o=c(t[4]?"card-bg card-bg__fade-in":"card-bg")+" svelte-plub69"),$(e,"transform","translateX("+t[7]+"px) translateY("+t[8]+"px)")},m(l,o,r){a(l,e,o),u(e,n),r&&s(),s=p(n,"playing",t[9])},p(t,s){4&s&&n.src!==(l=t[2])&&b(n,"src",l),16&s&&o!==(o=c(t[4]?"card-bg card-bg__fade-in":"card-bg")+" svelte-plub69")&&b(e,"class",o),384&s&&$(e,"transform","translateX("+t[7]+"px) translateY("+t[8]+"px)")},d(t){t&&d(e),s()}}}function at(e){let n,l,s,r,i,c,f,w,y,_,L=(e[0]?e[0]:"")+"",x=(e[3]?e[3]:"")+"";function k(t,e){return null!=t[2]?ut:null!=t[1]?ct:void 0}let R=k(e),U=R&&R(e);return{c(){n=g("div"),l=g("div"),U&&U.c(),s=m(),r=g("div"),i=g("h1"),c=h(L),f=m(),w=g("p"),y=h(x),b(i,"class","svelte-plub69"),b(w,"class","svelte-plub69"),b(r,"class","card-info svelte-plub69"),b(l,"class","card svelte-plub69"),$(l,"transform","rotateY("+e[5]+"deg) rotateX("+e[6]+"deg)"),b(n,"class","card-wrap svelte-plub69")},m(t,d,g){a(t,n,d),u(n,l),U&&U.m(l,null),u(l,s),u(l,r),u(r,i),u(i,c),u(r,f),u(r,w),u(w,y),g&&o(_),_=[p(n,"mousemove",e[10]),p(n,"mouseenter",e[11]),p(n,"mouseleave",e[12]),p(n,"dblclick",e[13])]},p(t,[e]){R===(R=k(t))&&U?U.p(t,e):(U&&U.d(1),U=R&&R(t),U&&(U.c(),U.m(l,s))),1&e&&L!==(L=(t[0]?t[0]:"")+"")&&v(c,L),8&e&&x!==(x=(t[3]?t[3]:"")+"")&&v(y,x),96&e&&$(l,"transform","rotateY("+t[5]+"deg) rotateX("+t[6]+"deg)")},i:t,o:t,d(t){t&&d(n),U&&U.d(),o(_)}}}function dt(t,e,n){let{title:l}=e,{imgURL:o}=e,{vidURL:s}=e,{date:r}=e,{url:i}=e,c=0,u=0,a=!1,d=null,f=null;var g;L(()=>{s||a||!o||(d=new Image,d.onload=h,d.src=o)}),g=()=>{clearTimeout(f)},_().$$.on_destroy.push(g);const h=()=>{n(4,a=!0)};let m,p,b,v;return t.$set=t=>{"title"in t&&n(0,l=t.title),"imgURL"in t&&n(1,o=t.imgURL),"vidURL"in t&&n(2,s=t.vidURL),"date"in t&&n(3,r=t.date),"url"in t&&n(14,i=t.url)},t.$$.update=()=>{32768&t.$$.dirty&&n(5,m=30*c),65536&t.$$.dirty&&n(6,p=-30*u),32768&t.$$.dirty&&n(7,b=-40*c),65536&t.$$.dirty&&n(8,v=-40*u)},[l,o,s,r,a,m,p,b,v,h,function(t){n(15,c=(t.pageX-this.offsetLeft-this.clientWidth/2)/this.clientWidth),n(16,u=(t.pageY-this.offsetTop-this.clientHeight/2)/this.clientHeight)},function(t){clearTimeout(f)},function(t){f=setTimeout(()=>{n(5,m=n(6,p=n(7,b=n(8,v=0))))},1e3)},function(t){console.log(l+" dblclick"),window.open(i,"_blank")},i]}class ft extends W{constructor(t){super(),P(this,t,dt,at,r,{title:0,imgURL:1,vidURL:2,date:3,url:14})}}const gt=[];function ht(e,n=t){let l;const o=[];function s(t){if(r(e,t)&&(e=t,l)){const t=!gt.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),gt.push(n,e)}if(t){for(let t=0;t<gt.length;t+=2)gt[t][0](gt[t+1]);gt.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(r,i=t){const c=[r,i];return o.push(c),1===o.length&&(l=n(s)||t),r(e),()=>{const t=o.indexOf(c);-1!==t&&o.splice(t,1),0===o.length&&(l(),l=null)}}}}var mt=[{title:"Fool Moon",url:"https://www.jim-butcher.com/books/dresden/fool-moon",imgURL:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1506892110l/1111757._SX318_.jpg",date:"1 Jan 2001"},{title:"CrossCode",url:"https://www.cross-code.com/",imgURL:"http://www.radicalfishgames.com/presskit/crosscode/images/0-01-boss-laser.gif",date:"21 Sep 2018"},{title:"Storm Front",url:"https://www.jim-butcher.com/books/dresden/storm-front",imgURL:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1579185054l/6219313._SY475_.jpg",date:"1 Apr 2000"},{title:"Blender 2.8 Basics",url:"https://cgcookie.com/course/learn-blender-2-8-the-basics-tutorial",imgURL:"https://s3.amazonaws.com/cgcookie-rails/uploads%2F1567114319751-Fill.gif",date:"2019"}];const pt={subscribe:ht(null,(function(t){return function(t){t(mt)}(t),function(){}})).subscribe};function bt(t,e,n){const l=t.slice();return l[1]=e[n],l}function vt(t){let e,n,l,o,s=t[0],r=[];for(let e=0;e<s.length;e+=1)r[e]=$t(bt(t,s,e));const i=t=>z(r[t],1,1,()=>{r[t]=null});return{c(){e=g("h2"),e.textContent="ran into",n=m(),l=g("div");for(let t=0;t<r.length;t+=1)r[t].c();b(l,"class","container svelte-dcexkb")},m(t,s){a(t,e,s),a(t,n,s),a(t,l,s);for(let t=0;t<r.length;t+=1)r[t].m(l,null);o=!0},p(t,e){if(1&e){let n;for(s=t[0],n=0;n<s.length;n+=1){const o=bt(t,s,n);r[n]?(r[n].p(o,e),F(r[n],1)):(r[n]=$t(o),r[n].c(),F(r[n],1),r[n].m(l,null))}for(Y(),n=s.length;n<r.length;n+=1)i(n);T()}},i(t){if(!o){for(let t=0;t<s.length;t+=1)F(r[t]);o=!0}},o(t){r=r.filter(Boolean);for(let t=0;t<r.length;t+=1)z(r[t]);o=!1},d(t){t&&d(e),t&&d(n),t&&d(l),f(r,t)}}}function $t(t){let n;const l=[t[1]];let o={};for(let t=0;t<l.length;t+=1)o=e(o,l[t]);const s=new ft({props:o});return{c(){N(s.$$.fragment)},m(t,e){O(s,t,e),n=!0},p(t,e){const n=1&e?G(l,[H(t[1])]):{};s.$set(n)},i(t){n||(F(s.$$.fragment,t),n=!0)},o(t){z(s.$$.fragment,t),n=!1},d(t){J(s,t)}}}function wt(t){let e,n,l=null!=t[0]&&vt(t);return{c(){e=g("div"),l&&l.c()},m(t,o){a(t,e,o),l&&l.m(e,null),n=!0},p(t,[n]){null!=t[0]?l?(l.p(t,n),1&n&&F(l,1)):(l=vt(t),l.c(),F(l,1),l.m(e,null)):l&&(Y(),z(l,1,1,()=>{l=null}),T())},i(t){n||(F(l),n=!0)},o(t){z(l),n=!1},d(t){t&&d(e),l&&l.d()}}}function yt(t,e,n){let l;return i(t,pt,t=>n(0,l=t)),[l]}class _t extends W{constructor(t){super(),P(this,t,yt,wt,r,{})}}function Lt(t,e,n){const l=t.slice();return l[4]=e[n],l}function xt(t,e,n){const l=t.slice();return l[4]=e[n],l}function kt(t,e,n){const l=t.slice();return l[4]=e[n],l}function Rt(t,e,n){const l=t.slice();return l[4]=e[n],l}function Ut(t){let e,n,l=t[1].welcome_msg+"";return{c(){e=g("p"),n=h(l)},m(t,l){a(t,e,l),u(e,n)},p(t,e){2&e&&l!==(l=t[1].welcome_msg+"")&&v(n,l)},d(t){t&&d(e)}}}function jt(t){let e,n,l,o=t[1].name+"";return{c(){e=g("h1"),n=g("a"),l=h(o),b(n,"href","/")},m(t,o){a(t,e,o),u(e,n),u(n,l)},p(t,e){2&e&&o!==(o=t[1].name+"")&&v(l,o)},d(t){t&&d(e)}}}function Ct(t){let e,n,l,o,s=t[1].links,r=[];for(let e=0;e<s.length;e+=1)r[e]=St(Rt(t,s,e));const i=t=>z(r[t],1,1,()=>{r[t]=null});return{c(){e=g("h2"),e.textContent="is at",n=m(),l=g("div");for(let t=0;t<r.length;t+=1)r[t].c();b(l,"class","wrapus svelte-16a1dhg")},m(t,s){a(t,e,s),a(t,n,s),a(t,l,s);for(let t=0;t<r.length;t+=1)r[t].m(l,null);o=!0},p(t,e){if(2&e){let n;for(s=t[1].links,n=0;n<s.length;n+=1){const o=Rt(t,s,n);r[n]?(r[n].p(o,e),F(r[n],1)):(r[n]=St(o),r[n].c(),F(r[n],1),r[n].m(l,null))}for(Y(),n=s.length;n<r.length;n+=1)i(n);T()}},i(t){if(!o){for(let t=0;t<s.length;t+=1)F(r[t]);o=!0}},o(t){r=r.filter(Boolean);for(let t=0;t<r.length;t+=1)z(r[t]);o=!1},d(t){t&&d(e),t&&d(n),t&&d(l),f(r,t)}}}function St(t){let n;const l=[t[4]];let o={};for(let t=0;t<l.length;t+=1)o=e(o,l[t]);const s=new it({props:o});return{c(){N(s.$$.fragment)},m(t,e){O(s,t,e),n=!0},p(t,e){const n=2&e?G(l,[H(t[4])]):{};s.$set(n)},i(t){n||(F(s.$$.fragment,t),n=!0)},o(t){z(s.$$.fragment,t),n=!1},d(t){J(s,t)}}}function Bt(t){let e,n,l,o,s=t[1].projects,r=[];for(let e=0;e<s.length;e+=1)r[e]=Et(kt(t,s,e));const i=t=>z(r[t],1,1,()=>{r[t]=null});return{c(){e=g("h2"),e.textContent="dabbles in",n=m(),l=g("div");for(let t=0;t<r.length;t+=1)r[t].c();b(l,"class","wrapus svelte-16a1dhg")},m(t,s){a(t,e,s),a(t,n,s),a(t,l,s);for(let t=0;t<r.length;t+=1)r[t].m(l,null);o=!0},p(t,e){if(2&e){let n;for(s=t[1].projects,n=0;n<s.length;n+=1){const o=kt(t,s,n);r[n]?(r[n].p(o,e),F(r[n],1)):(r[n]=Et(o),r[n].c(),F(r[n],1),r[n].m(l,null))}for(Y(),n=s.length;n<r.length;n+=1)i(n);T()}},i(t){if(!o){for(let t=0;t<s.length;t+=1)F(r[t]);o=!0}},o(t){r=r.filter(Boolean);for(let t=0;t<r.length;t+=1)z(r[t]);o=!1},d(t){t&&d(e),t&&d(n),t&&d(l),f(r,t)}}}function Et(t){let n;const l=[t[4]];let o={};for(let t=0;t<l.length;t+=1)o=e(o,l[t]);const s=new it({props:o});return{c(){N(s.$$.fragment)},m(t,e){O(s,t,e),n=!0},p(t,e){const n=2&e?G(l,[H(t[4])]):{};s.$set(n)},i(t){n||(F(s.$$.fragment,t),n=!0)},o(t){z(s.$$.fragment,t),n=!1},d(t){J(s,t)}}}function It(t){let e,n,l,o,s=t[1].toybox,r=[];for(let e=0;e<s.length;e+=1)r[e]=At(xt(t,s,e));const i=t=>z(r[t],1,1,()=>{r[t]=null});return{c(){e=g("h2"),e.textContent="plays with",n=m(),l=g("div");for(let t=0;t<r.length;t+=1)r[t].c();b(l,"class","wrapus svelte-16a1dhg")},m(t,s){a(t,e,s),a(t,n,s),a(t,l,s);for(let t=0;t<r.length;t+=1)r[t].m(l,null);o=!0},p(t,e){if(2&e){let n;for(s=t[1].toybox,n=0;n<s.length;n+=1){const o=xt(t,s,n);r[n]?(r[n].p(o,e),F(r[n],1)):(r[n]=At(o),r[n].c(),F(r[n],1),r[n].m(l,null))}for(Y(),n=s.length;n<r.length;n+=1)i(n);T()}},i(t){if(!o){for(let t=0;t<s.length;t+=1)F(r[t]);o=!0}},o(t){r=r.filter(Boolean);for(let t=0;t<r.length;t+=1)z(r[t]);o=!1},d(t){t&&d(e),t&&d(n),t&&d(l),f(r,t)}}}function At(t){let n;const l=[t[4]];let o={};for(let t=0;t<l.length;t+=1)o=e(o,l[t]);const s=new ot({props:o});return{c(){N(s.$$.fragment)},m(t,e){O(s,t,e),n=!0},p(t,e){const n=2&e?G(l,[H(t[4])]):{};s.$set(n)},i(t){n||(F(s.$$.fragment,t),n=!0)},o(t){z(s.$$.fragment,t),n=!1},d(t){J(s,t)}}}function Dt(t){let e,n,l,o,s=t[1].shelf,r=[];for(let e=0;e<s.length;e+=1)r[e]=Xt(Lt(t,s,e));const i=t=>z(r[t],1,1,()=>{r[t]=null});return{c(){e=g("h2"),e.textContent="wants to play",n=m(),l=g("div");for(let t=0;t<r.length;t+=1)r[t].c();b(l,"class","wrapus svelte-16a1dhg")},m(t,s){a(t,e,s),a(t,n,s),a(t,l,s);for(let t=0;t<r.length;t+=1)r[t].m(l,null);o=!0},p(t,e){if(2&e){let n;for(s=t[1].shelf,n=0;n<s.length;n+=1){const o=Lt(t,s,n);r[n]?(r[n].p(o,e),F(r[n],1)):(r[n]=Xt(o),r[n].c(),F(r[n],1),r[n].m(l,null))}for(Y(),n=s.length;n<r.length;n+=1)i(n);T()}},i(t){if(!o){for(let t=0;t<s.length;t+=1)F(r[t]);o=!0}},o(t){r=r.filter(Boolean);for(let t=0;t<r.length;t+=1)z(r[t]);o=!1},d(t){t&&d(e),t&&d(n),t&&d(l),f(r,t)}}}function Xt(t){let n;const l=[t[4]];let o={};for(let t=0;t<l.length;t+=1)o=e(o,l[t]);const s=new ot({props:o});return{c(){N(s.$$.fragment)},m(t,e){O(s,t,e),n=!0},p(t,e){const n=2&e?G(l,[H(t[4])]):{};s.$set(n)},i(t){n||(F(s.$$.fragment,t),n=!0)},o(t){z(s.$$.fragment,t),n=!1},d(t){J(s,t)}}}function Yt(t){let e,n,l,o,s,r,i,c,f,p,$,w,y,_,L,x,k,R,U,j=null!=t[1].welcome_msg&&Ut(t),C=null!=t[1].name&&jt(t),S=null!=t[1].links&&Ct(t);const B=new _t({});let E=null!=t[1].projects&&Bt(t),I=null!=t[1].toybox&&It(t),A=null!=t[1].shelf&&Dt(t);return{c(){e=g("header"),j&&j.c(),n=m(),C&&C.c(),l=m(),o=g("main"),S&&S.c(),s=m(),N(B.$$.fragment),r=m(),E&&E.c(),i=m(),I&&I.c(),c=m(),A&&A.c(),f=m(),p=g("footer"),$=g("div"),w=h(" \n    "),y=g("p"),y.innerHTML='<a href="https://github.com/tehdarthvid/tehdarthvid.github.io/tree/dev">\n        source\n      </a>',_=m(),L=g("a"),x=h("build "),k=h(t[2]),b(e,"class","svelte-16a1dhg"),b(o,"class","svelte-16a1dhg"),b(L,"href",R="https://github.com/tehdarthvid/tehdarthvid.github.io/commit/"+t[0]),b($,"id","build"),b($,"class","svelte-16a1dhg"),b(p,"class","svelte-16a1dhg")},m(t,d){a(t,e,d),j&&j.m(e,null),u(e,n),C&&C.m(e,null),a(t,l,d),a(t,o,d),S&&S.m(o,null),u(o,s),O(B,o,null),u(o,r),E&&E.m(o,null),u(o,i),I&&I.m(o,null),u(o,c),A&&A.m(o,null),a(t,f,d),a(t,p,d),u(p,$),u($,w),u($,y),u($,_),u($,L),u(L,x),u(L,k),U=!0},p(t,[l]){null!=t[1].welcome_msg?j?j.p(t,l):(j=Ut(t),j.c(),j.m(e,n)):j&&(j.d(1),j=null),null!=t[1].name?C?C.p(t,l):(C=jt(t),C.c(),C.m(e,null)):C&&(C.d(1),C=null),null!=t[1].links?S?(S.p(t,l),2&l&&F(S,1)):(S=Ct(t),S.c(),F(S,1),S.m(o,s)):S&&(Y(),z(S,1,1,()=>{S=null}),T()),null!=t[1].projects?E?(E.p(t,l),2&l&&F(E,1)):(E=Bt(t),E.c(),F(E,1),E.m(o,i)):E&&(Y(),z(E,1,1,()=>{E=null}),T()),null!=t[1].toybox?I?(I.p(t,l),2&l&&F(I,1)):(I=It(t),I.c(),F(I,1),I.m(o,c)):I&&(Y(),z(I,1,1,()=>{I=null}),T()),null!=t[1].shelf?A?(A.p(t,l),2&l&&F(A,1)):(A=Dt(t),A.c(),F(A,1),A.m(o,null)):A&&(Y(),z(A,1,1,()=>{A=null}),T()),(!U||4&l)&&v(k,t[2]),(!U||1&l&&R!==(R="https://github.com/tehdarthvid/tehdarthvid.github.io/commit/"+t[0]))&&b(L,"href",R)},i(t){U||(F(S),F(B.$$.fragment,t),F(E),F(I),F(A),U=!0)},o(t){z(S),z(B.$$.fragment,t),z(E),z(I),z(A),U=!1},d(t){t&&d(e),j&&j.d(),C&&C.d(),t&&d(l),t&&d(o),S&&S.d(),J(B),E&&E.d(),I&&I.d(),A&&A.d(),t&&d(f),t&&d(p)}}}function Tt(t,e,n){let{gaID:l}=e,{git_hash:o}=e;var s;try{null==(s=tt)&&(s={})}catch{s={}}l&&(t=>{function e(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],e("js",new Date),e("config",t);const n=document.createElement("script");n.src=`https://www.googletagmanager.com/gtag/js?id=${t}`,document.body.appendChild(n)})(l);var r=o;return r=r.slice(0,7),t.$set=t=>{"gaID"in t&&n(3,l=t.gaID),"git_hash"in t&&n(0,o=t.git_hash)},[o,s,r,l]}return new class extends W{constructor(t){super(),P(this,t,Tt,Yt,r,{gaID:3,git_hash:0})}}({target:document.body,props:{gaID:"UA-1020096-2",git_hash:"36a186213c6284cc04bef5b9da8bd850a7f9721f"}})}();
//# sourceMappingURL=bundle.js.map
