var app=function(){"use strict";function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function l(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(e,n,l){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const l=e.subscribe(...n);return l.unsubscribe?()=>l.unsubscribe():l}(n,l))}function c(t){return null==t?"":t}function u(t,e){t.appendChild(e)}function a(t,e,n){t.insertBefore(e,n||null)}function d(t){t.parentNode.removeChild(t)}function f(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function g(t){return document.createElement(t)}function h(t){return document.createTextNode(t)}function m(){return h(" ")}function p(t,e,n,l){return t.addEventListener(e,n,l),()=>t.removeEventListener(e,n,l)}function v(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function b(t,e){e=""+e,t.data!==e&&(t.data=e)}function $(t,e,n,l){t.style.setProperty(e,n,l?"important":"")}let w;function y(t){w=t}function L(){if(!w)throw new Error("Function called outside component initialization");return w}function _(t){L().$$.after_update.push(t)}const x=[],U=[],R=[],k=[],j=Promise.resolve();let C=!1;function I(t){R.push(t)}let E=!1;const B=new Set;function A(){if(!E){E=!0;do{for(let t=0;t<x.length;t+=1){const e=x[t];y(e),D(e.$$)}for(x.length=0;U.length;)U.pop()();for(let t=0;t<R.length;t+=1){const e=R[t];B.has(e)||(B.add(e),e())}R.length=0}while(x.length);for(;k.length;)k.pop()();C=!1,E=!1,B.clear()}}function D(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(I)}}const S=new Set;let T;function X(){T={r:0,c:[],p:T}}function Y(){T.r||o(T.c),T=T.p}function z(t,e){t&&t.i&&(S.delete(t),t.i(e))}function F(t,e,n,l){if(t&&t.o){if(S.has(t))return;S.add(t),T.c.push(()=>{S.delete(t),l&&(n&&t.d(1),l())}),t.o(e)}}function G(t,e){const n={},l={},o={$$scope:1};let r=t.length;for(;r--;){const s=t[r],i=e[r];if(i){for(const t in s)t in i||(l[t]=1);for(const t in i)o[t]||(n[t]=i[t],o[t]=1);t[r]=i}else for(const t in s)o[t]=1}for(const t in l)t in n||(n[t]=void 0);return n}function H(t){return"object"==typeof t&&null!==t?t:{}}function N(t){t&&t.c()}function O(t,e,l){const{fragment:s,on_mount:i,on_destroy:c,after_update:u}=t.$$;s&&s.m(e,l),I(()=>{const e=i.map(n).filter(r);c?c.push(...e):o(e),t.$$.on_mount=[]}),u.forEach(I)}function J(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function M(t,e){-1===t.$$.dirty[0]&&(x.push(t),C||(C=!0,j.then(A)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function P(e,n,r,s,i,c,u=[-1]){const a=w;y(e);const f=n.props||{},g=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:i,bound:l(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:[]),callbacks:l(),dirty:u};let h=!1;if(g.ctx=r?r(e,f,(t,n,...l)=>{const o=l.length?l[0]:n;return g.ctx&&i(g.ctx[t],g.ctx[t]=o)&&(g.bound[t]&&g.bound[t](o),h&&M(e,t)),n}):[],g.update(),h=!0,o(g.before_update),g.fragment=!!s&&s(g.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);g.fragment&&g.fragment.l(t),t.forEach(d)}else g.fragment&&g.fragment.c();n.intro&&z(e.$$.fragment),O(e,n.target,n.anchor),A()}y(a)}class W{$destroy(){J(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}var V=[{title:"GitHub",url:"https://github.com/tehdarthvid"},{title:"LinkedIn",url:"https://www.linkedin.com/in/darthvid/"},{title:"Twitter",url:"https://twitter.com/darthvid"},{title:"Letterboxd",url:"https://letterboxd.com/darthvid/films/"}],q=[{title:"influences",url:"https://dna.darthvid.com"},{title:"this site",url:"https://github.com/tehdarthvid/tehdarthvid.github.io/tree/dev"},{title:"log-wakatime.fish",url:"https://github.com/tehdarthvid/log-wakatime-fish"}],K=[{title:"JavaScript",url:"https://en.wikipedia.org/wiki/JavaScript",imgURL:"assets/images/javascript.svg"},{title:"Node.js",url:"https://nodejs.org/",imgURL:"assets/images/nodejs.svg"},{title:"Svelte",url:"https://svelte.dev/",imgURL:"assets/images/svelte.png"},{title:"Vue.js",url:"https://vuejs.org/",imgURL:"assets/images/vue.png"},{title:"Amazon Web Services",url:"https://aws.amazon.com/",imgURL:"assets/images/aws.png"},{title:"Google Cloud Platform",url:"https://cloud.google.com/",imgURL:"assets/images/gcp.png"},{title:"GitHub Actions",url:"https://github.com/features/actions",imgURL:"assets/images/gh-actions.svg"},{title:"C/C++",url:"http://csapp.cs.cmu.edu/3e/docs/chistory.html",imgURL:"assets/images/clang.jpg"},{title:"Go",url:"https://golang.org/",imgURL:"assets/images/go-gopher.png"},{title:"Flutter",url:"https://flutter.dev/",imgURL:"assets/images/flutter.svg"},{title:"fish",url:"https://fishshell.com/",imgURL:"assets/images/fish.png"},{title:"Visual Studio Code",url:"https://code.visualstudio.com/",imgURL:"assets/images/vscode.png"},{title:"kitty",url:"https://sw.kovidgoyal.net/kitty/",imgURL:"assets/images/kitty.png"},{title:"GitLab CI/CD",url:"https://docs.gitlab.com/ee/ci/introduction/",imgURL:"assets/images/gl-cicd.png"},{title:"Rust",url:"https://www.rust-lang.org/",imgURL:"assets/images/rust-ferris.svg"}],Q={name:"darthvid",welcome_msg:"サイトへようこそ!",links:V,projects:q,toybox:K},Z=Object.freeze({__proto__:null,name:"darthvid",welcome_msg:"サイトへようこそ!",links:V,projects:q,toybox:K,default:Q});function tt(t){let e,n;return{c(){e=g("img"),v(e,"class","icon svelte-rs3oun"),v(e,"alt",t[0]),e.src!==(n=t[2])&&v(e,"src",n)},m(t,n){a(t,e,n)},p(t,l){1&l&&v(e,"alt",t[0]),4&l&&e.src!==(n=t[2])&&v(e,"src",n)},d(t){t&&d(e)}}}function et(e){let n,l,o=e[3]&&tt(e);return{c(){n=g("div"),l=g("a"),o&&o.c(),v(l,"href",e[1]),v(l,"title",e[0]),v(l,"target","_blank"),v(n,"class","icon svelte-rs3oun")},m(t,e){a(t,n,e),u(n,l),o&&o.m(l,null)},p(t,[e]){t[3]?o?o.p(t,e):(o=tt(t),o.c(),o.m(l,null)):o&&(o.d(1),o=null),2&e&&v(l,"href",t[1]),1&e&&v(l,"title",t[0])},i:t,o:t,d(t){t&&d(n),o&&o.d()}}}function nt(t,e,n){let{title:l}=e,{url:o}=e,{imgURL:r}=e,s=!1,i=null;_(()=>{!s&&r&&(i=new Image,i.onload=c,i.src=r)});const c=()=>{n(3,s=!0)};return t.$set=t=>{"title"in t&&n(0,l=t.title),"url"in t&&n(1,o=t.url),"imgURL"in t&&n(2,r=t.imgURL)},[l,o,r,s]}class lt extends W{constructor(t){super(),P(this,t,nt,et,s,{title:0,url:1,imgURL:2})}}function ot(e){let n,l,o,r,s;return{c(){n=g("div"),l=h("【\n  "),o=g("a"),r=h(e[0]),s=h("\n  】"),v(o,"href",e[1]),v(n,"class","linkto")},m(t,e){a(t,n,e),u(n,l),u(n,o),u(o,r),u(n,s)},p(t,[e]){1&e&&b(r,t[0]),2&e&&v(o,"href",t[1])},i:t,o:t,d(t){t&&d(n)}}}function rt(t,e,n){let{title:l}=e,{url:o}=e;return t.$set=t=>{"title"in t&&n(0,l=t.title),"url"in t&&n(1,o=t.url)},[l,o]}class st extends W{constructor(t){super(),P(this,t,rt,ot,s,{title:0,url:1})}}function it(t){let e,n;return{c(){e=g("div"),v(e,"class",n=c(t[4]?"card-bg card-bg__fade-in":"card-bg")+" svelte-plub69"),$(e,"transform","translateX("+t[7]+"px) translateY("+t[8]+"px)"),$(e,"background-image","url("+t[1]+")")},m(t,n){a(t,e,n)},p(t,l){16&l&&n!==(n=c(t[4]?"card-bg card-bg__fade-in":"card-bg")+" svelte-plub69")&&v(e,"class",n),384&l&&$(e,"transform","translateX("+t[7]+"px) translateY("+t[8]+"px)"),2&l&&$(e,"background-image","url("+t[1]+")")},d(t){t&&d(e)}}}function ct(t){let e,n,l,o,r;return{c(){e=g("div"),n=g("video"),n.src!==(l=t[2])&&v(n,"src",l),n.autoplay="true",n.loop="true",n.muted="true",v(n,"class","svelte-plub69"),v(e,"class",o=c(t[4]?"card-bg card-bg__fade-in":"card-bg")+" svelte-plub69"),$(e,"transform","translateX("+t[7]+"px) translateY("+t[8]+"px)")},m(l,o,s){a(l,e,o),u(e,n),s&&r(),r=p(n,"playing",t[9])},p(t,r){4&r&&n.src!==(l=t[2])&&v(n,"src",l),16&r&&o!==(o=c(t[4]?"card-bg card-bg__fade-in":"card-bg")+" svelte-plub69")&&v(e,"class",o),384&r&&$(e,"transform","translateX("+t[7]+"px) translateY("+t[8]+"px)")},d(t){t&&d(e),r()}}}function ut(e){let n,l,r,s,i,c,f,w,y,L,_=(e[0]?e[0]:"")+"",x=(e[3]?e[3]:"")+"";function U(t,e){return null!=t[2]?ct:null!=t[1]?it:void 0}let R=U(e),k=R&&R(e);return{c(){n=g("div"),l=g("div"),k&&k.c(),r=m(),s=g("div"),i=g("h1"),c=h(_),f=m(),w=g("p"),y=h(x),v(i,"class","svelte-plub69"),v(w,"class","svelte-plub69"),v(s,"class","card-info svelte-plub69"),v(l,"class","card svelte-plub69"),$(l,"transform","rotateY("+e[5]+"deg) rotateX("+e[6]+"deg)"),v(n,"class","card-wrap svelte-plub69")},m(t,d,g){a(t,n,d),u(n,l),k&&k.m(l,null),u(l,r),u(l,s),u(s,i),u(i,c),u(s,f),u(s,w),u(w,y),g&&o(L),L=[p(n,"mousemove",e[10]),p(n,"mouseenter",e[11]),p(n,"mouseleave",e[12]),p(n,"dblclick",e[13])]},p(t,[e]){R===(R=U(t))&&k?k.p(t,e):(k&&k.d(1),k=R&&R(t),k&&(k.c(),k.m(l,r))),1&e&&_!==(_=(t[0]?t[0]:"")+"")&&b(c,_),8&e&&x!==(x=(t[3]?t[3]:"")+"")&&b(y,x),96&e&&$(l,"transform","rotateY("+t[5]+"deg) rotateX("+t[6]+"deg)")},i:t,o:t,d(t){t&&d(n),k&&k.d(),o(L)}}}function at(t,e,n){let{title:l}=e,{imgURL:o}=e,{vidURL:r}=e,{date:s}=e,{url:i}=e,c=0,u=0,a=!1,d=null,f=null;var g;_(()=>{r||a||!o||(d=new Image,d.onload=h,d.src=o)}),g=()=>{clearTimeout(f)},L().$$.on_destroy.push(g);const h=()=>{n(4,a=!0)};let m,p,v,b;return t.$set=t=>{"title"in t&&n(0,l=t.title),"imgURL"in t&&n(1,o=t.imgURL),"vidURL"in t&&n(2,r=t.vidURL),"date"in t&&n(3,s=t.date),"url"in t&&n(14,i=t.url)},t.$$.update=()=>{32768&t.$$.dirty&&n(5,m=30*c),65536&t.$$.dirty&&n(6,p=-30*u),32768&t.$$.dirty&&n(7,v=-40*c),65536&t.$$.dirty&&n(8,b=-40*u)},[l,o,r,s,a,m,p,v,b,h,function(t){n(15,c=(t.pageX-this.offsetLeft-this.clientWidth/2)/this.clientWidth),n(16,u=(t.pageY-this.offsetTop-this.clientHeight/2)/this.clientHeight)},function(t){clearTimeout(f)},function(t){f=setTimeout(()=>{n(5,m=n(6,p=n(7,v=n(8,b=0))))},1e3)},function(t){console.log(l+" dblclick"),window.open(i,"_blank")},i]}class dt extends W{constructor(t){super(),P(this,t,at,ut,s,{title:0,imgURL:1,vidURL:2,date:3,url:14})}}const ft=[];function gt(e,n=t){let l;const o=[];function r(t){if(s(e,t)&&(e=t,l)){const t=!ft.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),ft.push(n,e)}if(t){for(let t=0;t<ft.length;t+=2)ft[t][0](ft[t+1]);ft.length=0}}}return{set:r,update:function(t){r(t(e))},subscribe:function(s,i=t){const c=[s,i];return o.push(c),1===o.length&&(l=n(r)||t),s(e),()=>{const t=o.indexOf(c);-1!==t&&o.splice(t,1),0===o.length&&(l(),l=null)}}}}var ht=[{title:"Blender 2.8 Basics",url:"https://cgcookie.com/course/learn-blender-2-8-the-basics-tutorial",imgURL:"https://s3.amazonaws.com/cgcookie-rails/uploads%2F1567114319751-Fill.gif",date:"2019"},{title:"holedown",url:"https://holedown.com/",imgURL:"https://presskit.grapefrukt.com/data/holedown/images/holedown-animated-01.gif",vidURL:"https://holedown.com/video/teaser.mp4",date:"26 Jul 2018"},{title:"Flutter",url:"https://flutter.dev/",imgURL:"https://flutter.dev/assets/tools/android-studio/hot-reload-36252b9c05984443ea5cd1960bab0f4ca904a6dfbe71165af4ed7f1b1c037124.gif",vidURL:"https://flutter.dev/videos/BeautifulUI.mp4",date:"May 2017"}];const mt={subscribe:gt(null,(function(t){return function(t){t(ht)}(t),function(){}})).subscribe};function pt(t,e,n){const l=t.slice();return l[1]=e[n],l}function vt(t){let e,n,l,o,r=t[0],s=[];for(let e=0;e<r.length;e+=1)s[e]=bt(pt(t,r,e));const i=t=>F(s[t],1,1,()=>{s[t]=null});return{c(){e=g("h2"),e.textContent="ran into",n=m(),l=g("div");for(let t=0;t<s.length;t+=1)s[t].c();v(l,"class","container svelte-dcexkb")},m(t,r){a(t,e,r),a(t,n,r),a(t,l,r);for(let t=0;t<s.length;t+=1)s[t].m(l,null);o=!0},p(t,e){if(1&e){let n;for(r=t[0],n=0;n<r.length;n+=1){const o=pt(t,r,n);s[n]?(s[n].p(o,e),z(s[n],1)):(s[n]=bt(o),s[n].c(),z(s[n],1),s[n].m(l,null))}for(X(),n=r.length;n<s.length;n+=1)i(n);Y()}},i(t){if(!o){for(let t=0;t<r.length;t+=1)z(s[t]);o=!0}},o(t){s=s.filter(Boolean);for(let t=0;t<s.length;t+=1)F(s[t]);o=!1},d(t){t&&d(e),t&&d(n),t&&d(l),f(s,t)}}}function bt(t){let n;const l=[t[1]];let o={};for(let t=0;t<l.length;t+=1)o=e(o,l[t]);const r=new dt({props:o});return{c(){N(r.$$.fragment)},m(t,e){O(r,t,e),n=!0},p(t,e){const n=1&e?G(l,[H(t[1])]):{};r.$set(n)},i(t){n||(z(r.$$.fragment,t),n=!0)},o(t){F(r.$$.fragment,t),n=!1},d(t){J(r,t)}}}function $t(t){let e,n,l=null!=t[0]&&vt(t);return{c(){e=g("div"),l&&l.c()},m(t,o){a(t,e,o),l&&l.m(e,null),n=!0},p(t,[n]){null!=t[0]?l?(l.p(t,n),z(l,1)):(l=vt(t),l.c(),z(l,1),l.m(e,null)):l&&(X(),F(l,1,1,()=>{l=null}),Y())},i(t){n||(z(l),n=!0)},o(t){F(l),n=!1},d(t){t&&d(e),l&&l.d()}}}function wt(t,e,n){let l;return i(t,mt,t=>n(0,l=t)),[l]}class yt extends W{constructor(t){super(),P(this,t,wt,$t,s,{})}}function Lt(t,e,n){const l=t.slice();return l[4]=e[n],l}function _t(t,e,n){const l=t.slice();return l[4]=e[n],l}function xt(t,e,n){const l=t.slice();return l[4]=e[n],l}function Ut(t){let e,n,l=t[1].welcome_msg+"";return{c(){e=g("p"),n=h(l)},m(t,l){a(t,e,l),u(e,n)},p(t,e){2&e&&l!==(l=t[1].welcome_msg+"")&&b(n,l)},d(t){t&&d(e)}}}function Rt(t){let e,n,l,o=t[1].name+"";return{c(){e=g("h1"),n=g("a"),l=h(o),v(n,"href","/")},m(t,o){a(t,e,o),u(e,n),u(n,l)},p(t,e){2&e&&o!==(o=t[1].name+"")&&b(l,o)},d(t){t&&d(e)}}}function kt(t){let e,n,l,o,r=t[1].links,s=[];for(let e=0;e<r.length;e+=1)s[e]=jt(xt(t,r,e));const i=t=>F(s[t],1,1,()=>{s[t]=null});return{c(){e=g("h2"),e.textContent="is at",n=m(),l=g("div");for(let t=0;t<s.length;t+=1)s[t].c();v(l,"class","wrapus svelte-16a1dhg")},m(t,r){a(t,e,r),a(t,n,r),a(t,l,r);for(let t=0;t<s.length;t+=1)s[t].m(l,null);o=!0},p(t,e){if(2&e){let n;for(r=t[1].links,n=0;n<r.length;n+=1){const o=xt(t,r,n);s[n]?(s[n].p(o,e),z(s[n],1)):(s[n]=jt(o),s[n].c(),z(s[n],1),s[n].m(l,null))}for(X(),n=r.length;n<s.length;n+=1)i(n);Y()}},i(t){if(!o){for(let t=0;t<r.length;t+=1)z(s[t]);o=!0}},o(t){s=s.filter(Boolean);for(let t=0;t<s.length;t+=1)F(s[t]);o=!1},d(t){t&&d(e),t&&d(n),t&&d(l),f(s,t)}}}function jt(t){let n;const l=[t[4]];let o={};for(let t=0;t<l.length;t+=1)o=e(o,l[t]);const r=new st({props:o});return{c(){N(r.$$.fragment)},m(t,e){O(r,t,e),n=!0},p(t,e){const n=2&e?G(l,[H(t[4])]):{};r.$set(n)},i(t){n||(z(r.$$.fragment,t),n=!0)},o(t){F(r.$$.fragment,t),n=!1},d(t){J(r,t)}}}function Ct(t){let e,n,l,o,r=t[1].projects,s=[];for(let e=0;e<r.length;e+=1)s[e]=It(_t(t,r,e));const i=t=>F(s[t],1,1,()=>{s[t]=null});return{c(){e=g("h2"),e.textContent="dabbles in",n=m(),l=g("div");for(let t=0;t<s.length;t+=1)s[t].c();v(l,"class","wrapus svelte-16a1dhg")},m(t,r){a(t,e,r),a(t,n,r),a(t,l,r);for(let t=0;t<s.length;t+=1)s[t].m(l,null);o=!0},p(t,e){if(2&e){let n;for(r=t[1].projects,n=0;n<r.length;n+=1){const o=_t(t,r,n);s[n]?(s[n].p(o,e),z(s[n],1)):(s[n]=It(o),s[n].c(),z(s[n],1),s[n].m(l,null))}for(X(),n=r.length;n<s.length;n+=1)i(n);Y()}},i(t){if(!o){for(let t=0;t<r.length;t+=1)z(s[t]);o=!0}},o(t){s=s.filter(Boolean);for(let t=0;t<s.length;t+=1)F(s[t]);o=!1},d(t){t&&d(e),t&&d(n),t&&d(l),f(s,t)}}}function It(t){let n;const l=[t[4]];let o={};for(let t=0;t<l.length;t+=1)o=e(o,l[t]);const r=new st({props:o});return{c(){N(r.$$.fragment)},m(t,e){O(r,t,e),n=!0},p(t,e){const n=2&e?G(l,[H(t[4])]):{};r.$set(n)},i(t){n||(z(r.$$.fragment,t),n=!0)},o(t){F(r.$$.fragment,t),n=!1},d(t){J(r,t)}}}function Et(t){let e,n,l,o,r=t[1].toybox,s=[];for(let e=0;e<r.length;e+=1)s[e]=Bt(Lt(t,r,e));const i=t=>F(s[t],1,1,()=>{s[t]=null});return{c(){e=g("h2"),e.textContent="plays with",n=m(),l=g("div");for(let t=0;t<s.length;t+=1)s[t].c();v(l,"class","wrapus svelte-16a1dhg")},m(t,r){a(t,e,r),a(t,n,r),a(t,l,r);for(let t=0;t<s.length;t+=1)s[t].m(l,null);o=!0},p(t,e){if(2&e){let n;for(r=t[1].toybox,n=0;n<r.length;n+=1){const o=Lt(t,r,n);s[n]?(s[n].p(o,e),z(s[n],1)):(s[n]=Bt(o),s[n].c(),z(s[n],1),s[n].m(l,null))}for(X(),n=r.length;n<s.length;n+=1)i(n);Y()}},i(t){if(!o){for(let t=0;t<r.length;t+=1)z(s[t]);o=!0}},o(t){s=s.filter(Boolean);for(let t=0;t<s.length;t+=1)F(s[t]);o=!1},d(t){t&&d(e),t&&d(n),t&&d(l),f(s,t)}}}function Bt(t){let n;const l=[t[4]];let o={};for(let t=0;t<l.length;t+=1)o=e(o,l[t]);const r=new lt({props:o});return{c(){N(r.$$.fragment)},m(t,e){O(r,t,e),n=!0},p(t,e){const n=2&e?G(l,[H(t[4])]):{};r.$set(n)},i(t){n||(z(r.$$.fragment,t),n=!0)},o(t){F(r.$$.fragment,t),n=!1},d(t){J(r,t)}}}function At(t){let e,n,l,o,r,s,i,c,f,p,$,w,y,L,_,x,U,R,k=null!=t[1].welcome_msg&&Ut(t),j=null!=t[1].name&&Rt(t),C=null!=t[1].links&&kt(t);const I=new yt({});let E=null!=t[1].projects&&Ct(t),B=null!=t[1].toybox&&Et(t);return{c(){e=g("header"),k&&k.c(),n=m(),j&&j.c(),l=m(),o=g("main"),C&&C.c(),r=m(),N(I.$$.fragment),s=m(),E&&E.c(),i=m(),B&&B.c(),c=m(),f=g("footer"),p=g("div"),$=h(" \n    "),w=g("p"),w.innerHTML='<a href="https://github.com/tehdarthvid/tehdarthvid.github.io/tree/dev">\n        source\n      </a>',y=m(),L=g("a"),_=h("build "),x=h(t[2]),v(e,"class","svelte-16a1dhg"),v(o,"class","svelte-16a1dhg"),v(L,"href",U="https://github.com/tehdarthvid/tehdarthvid.github.io/commit/"+t[0]),v(p,"id","build"),v(p,"class","svelte-16a1dhg"),v(f,"class","svelte-16a1dhg")},m(t,d){a(t,e,d),k&&k.m(e,null),u(e,n),j&&j.m(e,null),a(t,l,d),a(t,o,d),C&&C.m(o,null),u(o,r),O(I,o,null),u(o,s),E&&E.m(o,null),u(o,i),B&&B.m(o,null),a(t,c,d),a(t,f,d),u(f,p),u(p,$),u(p,w),u(p,y),u(p,L),u(L,_),u(L,x),R=!0},p(t,[l]){null!=t[1].welcome_msg?k?k.p(t,l):(k=Ut(t),k.c(),k.m(e,n)):k&&(k.d(1),k=null),null!=t[1].name?j?j.p(t,l):(j=Rt(t),j.c(),j.m(e,null)):j&&(j.d(1),j=null),null!=t[1].links?C?(C.p(t,l),z(C,1)):(C=kt(t),C.c(),z(C,1),C.m(o,r)):C&&(X(),F(C,1,1,()=>{C=null}),Y()),null!=t[1].projects?E?(E.p(t,l),z(E,1)):(E=Ct(t),E.c(),z(E,1),E.m(o,i)):E&&(X(),F(E,1,1,()=>{E=null}),Y()),null!=t[1].toybox?B?(B.p(t,l),z(B,1)):(B=Et(t),B.c(),z(B,1),B.m(o,null)):B&&(X(),F(B,1,1,()=>{B=null}),Y()),(!R||4&l)&&b(x,t[2]),(!R||1&l&&U!==(U="https://github.com/tehdarthvid/tehdarthvid.github.io/commit/"+t[0]))&&v(L,"href",U)},i(t){R||(z(C),z(I.$$.fragment,t),z(E),z(B),R=!0)},o(t){F(C),F(I.$$.fragment,t),F(E),F(B),R=!1},d(t){t&&d(e),k&&k.d(),j&&j.d(),t&&d(l),t&&d(o),C&&C.d(),J(I),E&&E.d(),B&&B.d(),t&&d(c),t&&d(f)}}}function Dt(t,e,n){let{gaID:l}=e,{git_hash:o}=e;var r;try{null==(r=Z)&&(r={})}catch{r={}}l&&(t=>{function e(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],e("js",new Date),e("config",t);const n=document.createElement("script");n.src=`https://www.googletagmanager.com/gtag/js?id=${t}`,document.body.appendChild(n)})(l);var s=o;return s=s.slice(0,7),t.$set=t=>{"gaID"in t&&n(3,l=t.gaID),"git_hash"in t&&n(0,o=t.git_hash)},[o,r,s,l]}return new class extends W{constructor(t){super(),P(this,t,Dt,At,s,{gaID:3,git_hash:0})}}({target:document.body,props:{gaID:"UA-1020096-2",git_hash:"a771c574c086ebe70da341a5d0c08821269a4126"}})}();
//# sourceMappingURL=bundle.js.map
