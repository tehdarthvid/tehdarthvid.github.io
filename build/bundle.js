var app=function(){"use strict";function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function l(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(e,n,l){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const l=e.subscribe(...n);return l.unsubscribe?()=>l.unsubscribe():l}(n,l))}function c(t){return null==t?"":t}function u(t,e){t.appendChild(e)}function a(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function d(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function g(t){return document.createElement(t)}function h(t){return document.createTextNode(t)}function m(){return h(" ")}function p(t,e,n,l){return t.addEventListener(e,n,l),()=>t.removeEventListener(e,n,l)}function $(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function b(t,e){e=""+e,t.data!==e&&(t.data=e)}function v(t,e,n,l){t.style.setProperty(e,n,l?"important":"")}let w;function x(t){w=t}function _(){if(!w)throw new Error("Function called outside component initialization");return w}const y=[],L=[],j=[],k=[],R=Promise.resolve();let U=!1;function C(t){j.push(t)}let A=!1;const E=new Set;function I(){if(!A){A=!0;do{for(let t=0;t<y.length;t+=1){const e=y[t];x(e),D(e.$$)}for(y.length=0;L.length;)L.pop()();for(let t=0;t<j.length;t+=1){const e=j[t];E.has(e)||(E.add(e),e())}j.length=0}while(y.length);for(;k.length;)k.pop()();U=!1,A=!1,E.clear()}}function D(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(C)}}const S=new Set;let T;function H(){T={r:0,c:[],p:T}}function B(){T.r||o(T.c),T=T.p}function G(t,e){t&&t.i&&(S.delete(t),t.i(e))}function X(t,e,n,l){if(t&&t.o){if(S.has(t))return;S.add(t),T.c.push(()=>{S.delete(t),l&&(n&&t.d(1),l())}),t.o(e)}}function Y(t,e){const n={},l={},o={$$scope:1};let r=t.length;for(;r--;){const i=t[r],s=e[r];if(s){for(const t in i)t in s||(l[t]=1);for(const t in s)o[t]||(n[t]=s[t],o[t]=1);t[r]=s}else for(const t in i)o[t]=1}for(const t in l)t in n||(n[t]=void 0);return n}function z(t){return"object"==typeof t&&null!==t?t:{}}function N(t){t&&t.c()}function O(t,e,l){const{fragment:i,on_mount:s,on_destroy:c,after_update:u}=t.$$;i&&i.m(e,l),C(()=>{const e=s.map(n).filter(r);c?c.push(...e):o(e),t.$$.on_mount=[]}),u.forEach(C)}function M(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function P(t,e){-1===t.$$.dirty[0]&&(y.push(t),U||(U=!0,R.then(I)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function W(e,n,r,i,s,c,u=[-1]){const a=w;x(e);const d=n.props||{},g=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:s,bound:l(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:[]),callbacks:l(),dirty:u};let h=!1;if(g.ctx=r?r(e,d,(t,n,...l)=>{const o=l.length?l[0]:n;return g.ctx&&s(g.ctx[t],g.ctx[t]=o)&&(g.bound[t]&&g.bound[t](o),h&&P(e,t)),n}):[],g.update(),h=!0,o(g.before_update),g.fragment=!!i&&i(g.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);g.fragment&&g.fragment.l(t),t.forEach(f)}else g.fragment&&g.fragment.c();n.intro&&G(e.$$.fragment),O(e,n.target,n.anchor),I()}x(a)}class F{$destroy(){M(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}var V=[{title:"GitHub",url:"https://github.com/tehdarthvid"},{title:"LinkedIn",url:"https://www.linkedin.com/in/darthvid/"},{title:"Twitter",url:"https://twitter.com/darthvid"},{title:"Letterboxd",url:"https://letterboxd.com/darthvid/films/"}],q=[{title:"influences",url:"https://dna.darthvid.com"},{title:"this site",url:"https://github.com/tehdarthvid/tehdarthvid.github.io/tree/dev"}],J=[{title:"Node.js",url:"https://nodejs.org/",imgURL:"assets/images/nodejs.svg"},{title:"Amazon Web Services",url:"https://aws.amazon.com/",imgURL:"assets/images/aws.png"},{title:"C",url:"http://csapp.cs.cmu.edu/3e/docs/chistory.html",imgURL:"assets/images/clang.jpg"},{title:"Google Cloud Platform",url:"https://cloud.google.com/",imgURL:"assets/images/gcp.png"},{title:"Svelte",url:"https://svelte.dev/",imgURL:"assets/images/svelte.png"},{title:"Vue.js",url:"https://vuejs.org/",imgURL:"assets/images/vue.png"},{title:"fish",url:"https://fishshell.com/",imgURL:"assets/images/fish.png"},{title:"kitty",url:"https://sw.kovidgoyal.net/kitty/",imgURL:"assets/images/kitty.png"},{title:"Visual Studio Code",url:"https://code.visualstudio.com/",imgURL:"assets/images/vscode.png"},{title:"GitHub Actions",url:"https://github.com/features/actions",imgURL:"assets/images/gh-actions.svg"},{title:"GitLab CI/CD",url:"https://docs.gitlab.com/ee/ci/introduction/",imgURL:"assets/images/gl-cicd.png"},{title:"Go",url:"https://golang.org/",imgURL:"assets/images/go-gopher.png"},{title:"Rust",url:"https://www.rust-lang.org/",imgURL:"assets/images/rust-ferris.svg"}],K={name:"darthvid",welcome_msg:"サイトへようこそ!",links:V,projects:q,dabbles:J},Q=Object.freeze({__proto__:null,name:"darthvid",welcome_msg:"サイトへようこそ!",links:V,projects:q,dabbles:J,default:K});function Z(e){let n,l,o,r;return{c(){n=g("div"),l=g("a"),o=g("img"),$(o,"class","icon svelte-1nln651"),$(o,"alt",e[0]),o.src!==(r=e[2])&&$(o,"src",r),$(l,"href",e[1]),$(l,"title",e[0]),$(l,"target","_blank"),$(n,"class","icon svelte-1nln651")},m(t,e){a(t,n,e),u(n,l),u(l,o)},p(t,[e]){1&e&&$(o,"alt",t[0]),4&e&&o.src!==(r=t[2])&&$(o,"src",r),2&e&&$(l,"href",t[1]),1&e&&$(l,"title",t[0])},i:t,o:t,d(t){t&&f(n)}}}function tt(t,e,n){let{title:l}=e,{url:o}=e,{imgURL:r}=e;return t.$set=t=>{"title"in t&&n(0,l=t.title),"url"in t&&n(1,o=t.url),"imgURL"in t&&n(2,r=t.imgURL)},[l,o,r]}class et extends F{constructor(t){super(),W(this,t,tt,Z,i,{title:0,url:1,imgURL:2})}}function nt(e){let n,l,o,r,i;return{c(){n=g("div"),l=h("【\n  "),o=g("a"),r=h(e[0]),i=h("\n  】"),$(o,"href",e[1]),$(n,"class","linkto")},m(t,e){a(t,n,e),u(n,l),u(n,o),u(o,r),u(n,i)},p(t,[e]){1&e&&b(r,t[0]),2&e&&$(o,"href",t[1])},i:t,o:t,d(t){t&&f(n)}}}function lt(t,e,n){let{title:l}=e,{url:o}=e;return t.$set=t=>{"title"in t&&n(0,l=t.title),"url"in t&&n(1,o=t.url)},[l,o]}class ot extends F{constructor(t){super(),W(this,t,lt,nt,i,{title:0,url:1})}}function rt(e){let n,l,r,i,s,d,w,x,_,y,L,j,k=(e[0]?e[0]:"")+"",R=(e[2]?e[2]:"")+"";return{c(){n=g("div"),l=g("div"),r=g("div"),s=m(),d=g("div"),w=g("h1"),x=h(k),_=m(),y=g("p"),L=h(R),$(r,"class",i=c(e[3]?"card-bg card-bg__fade-in":"card-bg")+" svelte-iju49x"),v(r,"transform","translateX("+e[6]+"px) translateY("+e[7]+"px)"),v(r,"background-image","url("+e[1]+")"),$(w,"class","svelte-iju49x"),$(y,"class","svelte-iju49x"),$(d,"class","card-info svelte-iju49x"),$(l,"class","card svelte-iju49x"),v(l,"transform","rotateY("+e[4]+"deg) rotateX("+e[5]+"deg)"),$(n,"class","card-wrap svelte-iju49x")},m(t,i,c){a(t,n,i),u(n,l),u(l,r),u(l,s),u(l,d),u(d,w),u(w,x),u(d,_),u(d,y),u(y,L),c&&o(j),j=[p(n,"mousemove",e[8]),p(n,"mouseenter",e[9]),p(n,"mouseleave",e[10]),p(n,"dblclick",e[11])]},p(t,[e]){8&e&&i!==(i=c(t[3]?"card-bg card-bg__fade-in":"card-bg")+" svelte-iju49x")&&$(r,"class",i),192&e&&v(r,"transform","translateX("+t[6]+"px) translateY("+t[7]+"px)"),2&e&&v(r,"background-image","url("+t[1]+")"),1&e&&k!==(k=(t[0]?t[0]:"")+"")&&b(x,k),4&e&&R!==(R=(t[2]?t[2]:"")+"")&&b(L,R),48&e&&v(l,"transform","rotateY("+t[4]+"deg) rotateX("+t[5]+"deg)")},i:t,o:t,d(t){t&&f(n),o(j)}}}function it(t,e,n){let{title:l}=e,{imgURL:o}=e,{date:r}=e,{url:i}=e,s=0,c=0,u=!1,a=new Image,f=null;var d;let g,h,m,p;return d=()=>{o&&(a.onload=function(){n(3,u=!0)},a.src=o)},_().$$.after_update.push(d),function(t){_().$$.on_destroy.push(t)}(()=>{clearTimeout(f)}),t.$set=t=>{"title"in t&&n(0,l=t.title),"imgURL"in t&&n(1,o=t.imgURL),"date"in t&&n(2,r=t.date),"url"in t&&n(12,i=t.url)},t.$$.update=()=>{8192&t.$$.dirty&&n(4,g=30*s),16384&t.$$.dirty&&n(5,h=-30*c),8192&t.$$.dirty&&n(6,m=-40*s),16384&t.$$.dirty&&n(7,p=-40*c)},[l,o,r,u,g,h,m,p,function(t){n(13,s=(t.pageX-this.offsetLeft-this.clientWidth/2)/this.clientWidth),n(14,c=(t.pageY-this.offsetTop-this.clientHeight/2)/this.clientHeight)},function(t){clearTimeout(f)},function(t){f=setTimeout(()=>{n(4,g=n(5,h=n(6,m=n(7,p=0))))},1e3)},function(t){console.log(l+" dblclick"),window.open(i,"_blank")},i]}class st extends F{constructor(t){super(),W(this,t,it,rt,i,{title:0,imgURL:1,date:2,url:12})}}const ct=[];function ut(e,n=t){let l;const o=[];function r(t){if(i(e,t)&&(e=t,l)){const t=!ct.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),ct.push(n,e)}if(t){for(let t=0;t<ct.length;t+=2)ct[t][0](ct[t+1]);ct.length=0}}}return{set:r,update:function(t){r(t(e))},subscribe:function(i,s=t){const c=[i,s];return o.push(c),1===o.length&&(l=n(r)||t),i(e),()=>{const t=o.indexOf(c);-1!==t&&o.splice(t,1),0===o.length&&(l(),l=null)}}}}var at=[{title:"Flutter",url:"https://flutter.dev/",imgURL:"https://flutter.dev/assets/tools/android-studio/hot-reload-36252b9c05984443ea5cd1960bab0f4ca904a6dfbe71165af4ed7f1b1c037124.gif",date:"May 2017",added:"5 Apr 2020"},{title:"Curious Expedition",url:"https://curious-expedition.com",imgURL:"https://curious-expedition.com/img/pic_19.gif",date:"2 Sep 2016"},{title:"A Short Hike",url:"http://ashorthike.com/",imgURL:"http://ashorthike.com/press/images/gif1.gif",date:"5 Apr 2019"}];const ft={subscribe:ut(null,(function(t){return function(t){t(at)}(t),function(){}})).subscribe};function dt(t,e,n){const l=t.slice();return l[1]=e[n],l}function gt(t){let e,n,l,o,r=t[0],i=[];for(let e=0;e<r.length;e+=1)i[e]=ht(dt(t,r,e));const s=t=>X(i[t],1,1,()=>{i[t]=null});return{c(){e=g("h2"),e.textContent="cache of interests",n=m(),l=g("div");for(let t=0;t<i.length;t+=1)i[t].c();$(l,"class","container svelte-dcexkb")},m(t,r){a(t,e,r),a(t,n,r),a(t,l,r);for(let t=0;t<i.length;t+=1)i[t].m(l,null);o=!0},p(t,e){if(1&e){let n;for(r=t[0],n=0;n<r.length;n+=1){const o=dt(t,r,n);i[n]?(i[n].p(o,e),G(i[n],1)):(i[n]=ht(o),i[n].c(),G(i[n],1),i[n].m(l,null))}for(H(),n=r.length;n<i.length;n+=1)s(n);B()}},i(t){if(!o){for(let t=0;t<r.length;t+=1)G(i[t]);o=!0}},o(t){i=i.filter(Boolean);for(let t=0;t<i.length;t+=1)X(i[t]);o=!1},d(t){t&&f(e),t&&f(n),t&&f(l),d(i,t)}}}function ht(t){let n;const l=[t[1]];let o={};for(let t=0;t<l.length;t+=1)o=e(o,l[t]);const r=new st({props:o});return{c(){N(r.$$.fragment)},m(t,e){O(r,t,e),n=!0},p(t,e){const n=1&e?Y(l,[z(t[1])]):{};r.$set(n)},i(t){n||(G(r.$$.fragment,t),n=!0)},o(t){X(r.$$.fragment,t),n=!1},d(t){M(r,t)}}}function mt(t){let e,n,l=null!=t[0]&&gt(t);return{c(){e=g("div"),l&&l.c()},m(t,o){a(t,e,o),l&&l.m(e,null),n=!0},p(t,[n]){null!=t[0]?l?(l.p(t,n),G(l,1)):(l=gt(t),l.c(),G(l,1),l.m(e,null)):l&&(H(),X(l,1,1,()=>{l=null}),B())},i(t){n||(G(l),n=!0)},o(t){X(l),n=!1},d(t){t&&f(e),l&&l.d()}}}function pt(t,e,n){let l;return s(t,ft,t=>n(0,l=t)),[l]}class $t extends F{constructor(t){super(),W(this,t,pt,mt,i,{})}}function bt(t,e,n){const l=t.slice();return l[4]=e[n],l}function vt(t,e,n){const l=t.slice();return l[4]=e[n],l}function wt(t,e,n){const l=t.slice();return l[4]=e[n],l}function xt(t){let e,n,l,o=t[1].name+"";return{c(){e=g("h1"),n=g("a"),l=h(o),$(n,"href","/")},m(t,o){a(t,e,o),u(e,n),u(n,l)},p(t,e){2&e&&o!==(o=t[1].name+"")&&b(l,o)},d(t){t&&f(e)}}}function _t(t){let e,n,l=t[1].welcome_msg+"";return{c(){e=g("p"),n=h(l)},m(t,l){a(t,e,l),u(e,n)},p(t,e){2&e&&l!==(l=t[1].welcome_msg+"")&&b(n,l)},d(t){t&&f(e)}}}function yt(t){let e,n,l,o,r=t[1].links,i=[];for(let e=0;e<r.length;e+=1)i[e]=Lt(wt(t,r,e));const s=t=>X(i[t],1,1,()=>{i[t]=null});return{c(){e=g("h2"),e.textContent="is at",n=m(),l=g("div");for(let t=0;t<i.length;t+=1)i[t].c();$(l,"class","wrapus svelte-16a1dhg")},m(t,r){a(t,e,r),a(t,n,r),a(t,l,r);for(let t=0;t<i.length;t+=1)i[t].m(l,null);o=!0},p(t,e){if(2&e){let n;for(r=t[1].links,n=0;n<r.length;n+=1){const o=wt(t,r,n);i[n]?(i[n].p(o,e),G(i[n],1)):(i[n]=Lt(o),i[n].c(),G(i[n],1),i[n].m(l,null))}for(H(),n=r.length;n<i.length;n+=1)s(n);B()}},i(t){if(!o){for(let t=0;t<r.length;t+=1)G(i[t]);o=!0}},o(t){i=i.filter(Boolean);for(let t=0;t<i.length;t+=1)X(i[t]);o=!1},d(t){t&&f(e),t&&f(n),t&&f(l),d(i,t)}}}function Lt(t){let n;const l=[t[4]];let o={};for(let t=0;t<l.length;t+=1)o=e(o,l[t]);const r=new ot({props:o});return{c(){N(r.$$.fragment)},m(t,e){O(r,t,e),n=!0},p(t,e){const n=2&e?Y(l,[z(t[4])]):{};r.$set(n)},i(t){n||(G(r.$$.fragment,t),n=!0)},o(t){X(r.$$.fragment,t),n=!1},d(t){M(r,t)}}}function jt(t){let e,n,l,o,r=t[1].projects,i=[];for(let e=0;e<r.length;e+=1)i[e]=kt(vt(t,r,e));const s=t=>X(i[t],1,1,()=>{i[t]=null});return{c(){e=g("h2"),e.textContent="pet projects",n=m(),l=g("div");for(let t=0;t<i.length;t+=1)i[t].c();$(l,"class","wrapus svelte-16a1dhg")},m(t,r){a(t,e,r),a(t,n,r),a(t,l,r);for(let t=0;t<i.length;t+=1)i[t].m(l,null);o=!0},p(t,e){if(2&e){let n;for(r=t[1].projects,n=0;n<r.length;n+=1){const o=vt(t,r,n);i[n]?(i[n].p(o,e),G(i[n],1)):(i[n]=kt(o),i[n].c(),G(i[n],1),i[n].m(l,null))}for(H(),n=r.length;n<i.length;n+=1)s(n);B()}},i(t){if(!o){for(let t=0;t<r.length;t+=1)G(i[t]);o=!0}},o(t){i=i.filter(Boolean);for(let t=0;t<i.length;t+=1)X(i[t]);o=!1},d(t){t&&f(e),t&&f(n),t&&f(l),d(i,t)}}}function kt(t){let n;const l=[t[4]];let o={};for(let t=0;t<l.length;t+=1)o=e(o,l[t]);const r=new ot({props:o});return{c(){N(r.$$.fragment)},m(t,e){O(r,t,e),n=!0},p(t,e){const n=2&e?Y(l,[z(t[4])]):{};r.$set(n)},i(t){n||(G(r.$$.fragment,t),n=!0)},o(t){X(r.$$.fragment,t),n=!1},d(t){M(r,t)}}}function Rt(t){let e,n,l,o,r=t[1].dabbles,i=[];for(let e=0;e<r.length;e+=1)i[e]=Ut(bt(t,r,e));const s=t=>X(i[t],1,1,()=>{i[t]=null});return{c(){e=g("h2"),e.textContent="dabbles in",n=m(),l=g("div");for(let t=0;t<i.length;t+=1)i[t].c();$(l,"class","wrapus svelte-16a1dhg")},m(t,r){a(t,e,r),a(t,n,r),a(t,l,r);for(let t=0;t<i.length;t+=1)i[t].m(l,null);o=!0},p(t,e){if(2&e){let n;for(r=t[1].dabbles,n=0;n<r.length;n+=1){const o=bt(t,r,n);i[n]?(i[n].p(o,e),G(i[n],1)):(i[n]=Ut(o),i[n].c(),G(i[n],1),i[n].m(l,null))}for(H(),n=r.length;n<i.length;n+=1)s(n);B()}},i(t){if(!o){for(let t=0;t<r.length;t+=1)G(i[t]);o=!0}},o(t){i=i.filter(Boolean);for(let t=0;t<i.length;t+=1)X(i[t]);o=!1},d(t){t&&f(e),t&&f(n),t&&f(l),d(i,t)}}}function Ut(t){let n;const l=[t[4]];let o={};for(let t=0;t<l.length;t+=1)o=e(o,l[t]);const r=new et({props:o});return{c(){N(r.$$.fragment)},m(t,e){O(r,t,e),n=!0},p(t,e){const n=2&e?Y(l,[z(t[4])]):{};r.$set(n)},i(t){n||(G(r.$$.fragment,t),n=!0)},o(t){X(r.$$.fragment,t),n=!1},d(t){M(r,t)}}}function Ct(t){let e,n,l,o,r,i,s,c,d,p,v,w,x,_,y,L,j,k,R=null!=t[1].name&&xt(t),U=null!=t[1].welcome_msg&&_t(t),C=null!=t[1].links&&yt(t);const A=new $t({});let E=null!=t[1].projects&&jt(t),I=null!=t[1].dabbles&&Rt(t);return{c(){e=g("header"),R&&R.c(),n=m(),U&&U.c(),l=m(),o=g("main"),C&&C.c(),r=m(),N(A.$$.fragment),i=m(),E&&E.c(),s=m(),I&&I.c(),c=m(),d=g("footer"),p=g("div"),v=h(" \n    "),w=g("p"),w.innerHTML='<a href="https://github.com/tehdarthvid/tehdarthvid.github.io/tree/dev">\n        source\n      </a>',x=m(),_=g("a"),y=h("build "),L=h(t[2]),$(e,"class","svelte-16a1dhg"),$(o,"class","svelte-16a1dhg"),$(_,"href",j="https://github.com/tehdarthvid/tehdarthvid.github.io/commit/"+t[0]),$(p,"id","build"),$(p,"class","svelte-16a1dhg"),$(d,"class","svelte-16a1dhg")},m(t,f){a(t,e,f),R&&R.m(e,null),u(e,n),U&&U.m(e,null),a(t,l,f),a(t,o,f),C&&C.m(o,null),u(o,r),O(A,o,null),u(o,i),E&&E.m(o,null),u(o,s),I&&I.m(o,null),a(t,c,f),a(t,d,f),u(d,p),u(p,v),u(p,w),u(p,x),u(p,_),u(_,y),u(_,L),k=!0},p(t,[l]){null!=t[1].name?R?R.p(t,l):(R=xt(t),R.c(),R.m(e,n)):R&&(R.d(1),R=null),null!=t[1].welcome_msg?U?U.p(t,l):(U=_t(t),U.c(),U.m(e,null)):U&&(U.d(1),U=null),null!=t[1].links?C?(C.p(t,l),G(C,1)):(C=yt(t),C.c(),G(C,1),C.m(o,r)):C&&(H(),X(C,1,1,()=>{C=null}),B()),null!=t[1].projects?E?(E.p(t,l),G(E,1)):(E=jt(t),E.c(),G(E,1),E.m(o,s)):E&&(H(),X(E,1,1,()=>{E=null}),B()),null!=t[1].dabbles?I?(I.p(t,l),G(I,1)):(I=Rt(t),I.c(),G(I,1),I.m(o,null)):I&&(H(),X(I,1,1,()=>{I=null}),B()),(!k||4&l)&&b(L,t[2]),(!k||1&l&&j!==(j="https://github.com/tehdarthvid/tehdarthvid.github.io/commit/"+t[0]))&&$(_,"href",j)},i(t){k||(G(C),G(A.$$.fragment,t),G(E),G(I),k=!0)},o(t){X(C),X(A.$$.fragment,t),X(E),X(I),k=!1},d(t){t&&f(e),R&&R.d(),U&&U.d(),t&&f(l),t&&f(o),C&&C.d(),M(A),E&&E.d(),I&&I.d(),t&&f(c),t&&f(d)}}}function At(t,e,n){let{gaID:l}=e,{git_hash:o}=e;var r;try{null==(r=Q)&&(r={})}catch{r={}}l&&(t=>{function e(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],e("js",new Date),e("config",t);const n=document.createElement("script");n.src=`https://www.googletagmanager.com/gtag/js?id=${t}`,document.body.appendChild(n)})(l);var i=o;return i=i.slice(0,7),t.$set=t=>{"gaID"in t&&n(3,l=t.gaID),"git_hash"in t&&n(0,o=t.git_hash)},[o,r,i,l]}return new class extends F{constructor(t){super(),W(this,t,At,Ct,i,{gaID:3,git_hash:0})}}({target:document.body,props:{gaID:"UA-1020096-2",git_hash:"fdbf7d7c478e7e238df459b4273246ea26bd54f7"}})}();
//# sourceMappingURL=bundle.js.map
