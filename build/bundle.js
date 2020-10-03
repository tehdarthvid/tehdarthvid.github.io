var app=function(){"use strict";function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function l(){return Object.create(null)}function r(t){t.forEach(n)}function s(t){return"function"==typeof t}function o(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(e,n,l){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const l=e.subscribe(...n);return l.unsubscribe?()=>l.unsubscribe():l}(n,l))}function c(t){return null==t?"":t}function a(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function d(t){t.parentNode.removeChild(t)}function f(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function g(t){return document.createElement(t)}function m(t){return document.createTextNode(t)}function h(){return m(" ")}function p(t,e,n,l){return t.addEventListener(e,n,l),()=>t.removeEventListener(e,n,l)}function v(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function b(t,e,n,l){t.style.setProperty(e,n,l?"important":"")}let y;function w(t){y=t}function _(){if(!y)throw new Error("Function called outside component initialization");return y}function x(t){_().$$.after_update.push(t)}const L=[],R=[],U=[],k=[],j=Promise.resolve();let D=!1;function I(t){U.push(t)}let C=!1;const S=new Set;function E(){if(!C){C=!0;do{for(let t=0;t<L.length;t+=1){const e=L[t];w(e),V(e.$$)}for(w(null),L.length=0;R.length;)R.pop()();for(let t=0;t<U.length;t+=1){const e=U[t];S.has(e)||(S.add(e),e())}U.length=0}while(L.length);for(;k.length;)k.pop()();D=!1,C=!1,S.clear()}}function V(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(I)}}const q=new Set;let Y;function A(){Y={r:0,c:[],p:Y}}function B(){Y.r||r(Y.c),Y=Y.p}function T(t,e){t&&t.i&&(q.delete(t),t.i(e))}function X(t,e,n,l){if(t&&t.o){if(q.has(t))return;q.add(t),Y.c.push(()=>{q.delete(t),l&&(n&&t.d(1),l())}),t.o(e)}}function H(t,e){const n={},l={},r={$$scope:1};let s=t.length;for(;s--;){const o=t[s],i=e[s];if(i){for(const t in o)t in i||(l[t]=1);for(const t in i)r[t]||(n[t]=i[t],r[t]=1);t[s]=i}else for(const t in o)r[t]=1}for(const t in l)t in n||(n[t]=void 0);return n}function z(t){return"object"==typeof t&&null!==t?t:{}}function F(t){t&&t.c()}function G(t,e,l){const{fragment:o,on_mount:i,on_destroy:c,after_update:a}=t.$$;o&&o.m(e,l),I(()=>{const e=i.map(n).filter(s);c?c.push(...e):r(e),t.$$.on_mount=[]}),a.forEach(I)}function M(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function N(t,e){-1===t.$$.dirty[0]&&(L.push(t),D||(D=!0,j.then(E)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function O(e,n,s,o,i,c,a=[-1]){const u=y;w(e);const f=n.props||{},g=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:i,bound:l(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:l(),dirty:a,skip_bound:!1};let m=!1;if(g.ctx=s?s(e,f,(t,n,...l)=>{const r=l.length?l[0]:n;return g.ctx&&i(g.ctx[t],g.ctx[t]=r)&&(!g.skip_bound&&g.bound[t]&&g.bound[t](r),m&&N(e,t)),n}):[],g.update(),m=!0,r(g.before_update),g.fragment=!!o&&o(g.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);g.fragment&&g.fragment.l(t),t.forEach(d)}else g.fragment&&g.fragment.c();n.intro&&T(e.$$.fragment),G(e,n.target,n.anchor),E()}w(u)}class W{$destroy(){M(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}var J="darthvid",P="サイトへようこそ!",Z=[{title:"GitHub",url:"https://github.com/tehdarthvid"},{title:"LinkedIn",url:"https://www.linkedin.com/in/darthvid/"},{title:"Letterboxd",url:"https://letterboxd.com/darthvid/films/"},{title:"Twitter",url:"https://twitter.com/darthvid"}],K=[{title:"influences",url:"https://dna.darthvid.com"},{title:"this site",url:"https://github.com/tehdarthvid/tehdarthvid.github.io/tree/dev"},{title:"log-wakatime.fish",url:"https://github.com/tehdarthvid/log-wakatime-fish"}],Q=[{title:"JavaScript",url:"https://en.wikipedia.org/wiki/JavaScript",imgURL:"assets/images/javascript.svg"},{title:"Node.js",url:"https://nodejs.org/",imgURL:"assets/images/nodejs.svg"},{title:"Svelte",url:"https://svelte.dev/",imgURL:"assets/images/svelte.png"},{title:"Vue.js",url:"https://vuejs.org/",imgURL:"assets/images/vue.png"},{title:"Amazon Web Services",url:"https://aws.amazon.com/",imgURL:"assets/images/aws.png"},{title:"Google Cloud Platform",url:"https://cloud.google.com/",imgURL:"assets/images/gcp.png"},{title:"GitHub Actions",url:"https://github.com/features/actions",imgURL:"assets/images/gh-actions.svg"},{title:"C/C++",url:"http://csapp.cs.cmu.edu/3e/docs/chistory.html",imgURL:"assets/images/clang.jpg"},{title:"fish",url:"https://fishshell.com/",imgURL:"assets/images/fish.png"},{title:"Visual Studio Code",url:"https://code.visualstudio.com/",imgURL:"assets/images/vscode.png"},{title:"kitty",url:"https://sw.kovidgoyal.net/kitty/",imgURL:"assets/images/kitty.png"}],tt=[{title:"Go",url:"https://golang.org/",imgURL:"assets/images/go-gopher.png"},{title:"Deno",url:"https://deno.land/",imgURL:"assets/images/deno.png"},{title:"Blender",url:"https://www.blender.org/",imgURL:"assets/images/blender.png"},{title:"Rust",url:"https://www.rust-lang.org/",imgURL:"assets/images/rust-ferris.svg"},{title:"Flutter",url:"https://flutter.dev/",imgURL:"assets/images/flutter.svg"}],et={name:J,welcome_msg:P,links:Z,projects:K,toybox:Q,shelf:tt},nt=Object.freeze({__proto__:null,name:J,welcome_msg:P,links:Z,projects:K,toybox:Q,shelf:tt,default:et});function lt(t){let e,n;return{c(){e=g("img"),v(e,"class","icon svelte-rs3oun"),v(e,"alt",t[0]),e.src!==(n=t[2])&&v(e,"src",n)},m(t,n){u(t,e,n)},p(t,l){1&l&&v(e,"alt",t[0]),4&l&&e.src!==(n=t[2])&&v(e,"src",n)},d(t){t&&d(e)}}}function rt(e){let n,l,r=e[3]&&lt(e);return{c(){n=g("div"),l=g("a"),r&&r.c(),v(l,"href",e[1]),v(l,"title",e[0]),v(l,"target","_blank"),v(n,"class","icon svelte-rs3oun")},m(t,e){u(t,n,e),a(n,l),r&&r.m(l,null)},p(t,[e]){t[3]?r?r.p(t,e):(r=lt(t),r.c(),r.m(l,null)):r&&(r.d(1),r=null),2&e&&v(l,"href",t[1]),1&e&&v(l,"title",t[0])},i:t,o:t,d(t){t&&d(n),r&&r.d()}}}function st(t,e,n){let{title:l}=e,{url:r}=e,{imgURL:s}=e,o=!1,i=null;x(()=>{!o&&s&&(i=new Image,i.onload=c,i.src=s)});const c=()=>{n(3,o=!0)};return t.$$set=t=>{"title"in t&&n(0,l=t.title),"url"in t&&n(1,r=t.url),"imgURL"in t&&n(2,s=t.imgURL)},[l,r,s,o]}class ot extends W{constructor(t){super(),O(this,t,st,rt,o,{title:0,url:1,imgURL:2})}}function it(e){let n,l,r,s,o;return{c(){n=g("div"),l=m("【\n  "),r=g("a"),s=m(e[0]),o=m("\n  】"),v(r,"href",e[1]),v(n,"class","linkto")},m(t,e){u(t,n,e),a(n,l),a(n,r),a(r,s),a(n,o)},p(t,[e]){1&e&&$(s,t[0]),2&e&&v(r,"href",t[1])},i:t,o:t,d(t){t&&d(n)}}}function ct(t,e,n){let{title:l}=e,{url:r}=e;return t.$$set=t=>{"title"in t&&n(0,l=t.title),"url"in t&&n(1,r=t.url)},[l,r]}class at extends W{constructor(t){super(),O(this,t,ct,it,o,{title:0,url:1})}}function ut(t){let e,n;return{c(){e=g("div"),v(e,"class",n=c(t[1]?"card-bg card-bg__fade-in":"card-bg")+" svelte-my5sl4"),b(e,"transform","translateX("+t[4]+"px) translateY("+t[5]+"px)"),b(e,"background-image","url("+t[0].imgURL+")")},m(t,n){u(t,e,n)},p(t,l){2&l&&n!==(n=c(t[1]?"card-bg card-bg__fade-in":"card-bg")+" svelte-my5sl4")&&v(e,"class",n),48&l&&b(e,"transform","translateX("+t[4]+"px) translateY("+t[5]+"px)"),1&l&&b(e,"background-image","url("+t[0].imgURL+")")},d(t){t&&d(e)}}}function dt(t){let e,n,l,r,s,o;return{c(){e=g("div"),n=g("video"),v(n,"class","center_video svelte-my5sl4"),n.src!==(l=t[0].vidURL)&&v(n,"src",l),n.autoplay="true",n.loop="true",n.muted="true",v(e,"class",r=c(t[1]?"card-bg card-bg__fade-in":"card-bg")+" svelte-my5sl4"),b(e,"transform","translateX("+t[4]+"px) translateY("+t[5]+"px)")},m(l,r){u(l,e,r),a(e,n),s||(o=p(n,"playing",t[6]),s=!0)},p(t,s){1&s&&n.src!==(l=t[0].vidURL)&&v(n,"src",l),2&s&&r!==(r=c(t[1]?"card-bg card-bg__fade-in":"card-bg")+" svelte-my5sl4")&&v(e,"class",r),48&s&&b(e,"transform","translateX("+t[4]+"px) translateY("+t[5]+"px)")},d(t){t&&d(e),s=!1,o()}}}function ft(t){let e,n,l,r,s;return{c(){e=g("div"),n=g("iframe"),v(n,"title",l=t[0].title?t[0].title:""),v(n,"class","center_video svelte-my5sl4"),v(n,"width","560"),v(n,"height","315"),n.src!==(r="https://www.youtube.com/embed/"+t[0].ytVideoID+"?rel=0&controls=0&autoplay=1&mute=1&loop=1&playlist="+t[0].ytVideoID)&&v(n,"src",r),v(n,"frameborder","0"),v(n,"allow","accelerometer; autoplay; encrypted-media; gyroscope;\n          picture-in-picture"),v(n,"loop","1"),n.allowFullscreen=!0,v(n,"onstatechange",t[6]),v(e,"class",s=c((t[1],"card-bg card-bg__fade-in"))+" svelte-my5sl4"),b(e,"transform","translateX("+t[4]+"px) translateY("+t[5]+"px)")},m(t,l){u(t,e,l),a(e,n)},p(t,o){1&o&&l!==(l=t[0].title?t[0].title:"")&&v(n,"title",l),1&o&&n.src!==(r="https://www.youtube.com/embed/"+t[0].ytVideoID+"?rel=0&controls=0&autoplay=1&mute=1&loop=1&playlist="+t[0].ytVideoID)&&v(n,"src",r),2&o&&s!==(s=c((t[1],"card-bg card-bg__fade-in"))+" svelte-my5sl4")&&v(e,"class",s),48&o&&b(e,"transform","translateX("+t[4]+"px) translateY("+t[5]+"px)")},d(t){t&&d(e)}}}function gt(e){let n,l,s,o,i,c,f,y,w,_,x,L=(e[0].title?e[0].title:"")+"",R=(e[0].date?e[0].date:"")+"";function U(t,e){return null!=t[0].ytVideoID?ft:null!=t[0].vidURL?dt:null!=t[0].imgURL?ut:void 0}let k=U(e),j=k&&k(e);return{c(){n=g("div"),l=g("div"),j&&j.c(),s=h(),o=g("div"),i=g("h1"),c=m(L),f=h(),y=g("p"),w=m(R),v(i,"class","svelte-my5sl4"),v(y,"class","svelte-my5sl4"),v(o,"class","card-info svelte-my5sl4"),v(l,"class","card svelte-my5sl4"),b(l,"transform","rotateY("+e[2]+"deg) rotateX("+e[3]+"deg)"),v(n,"class","card-wrap svelte-my5sl4")},m(t,r){u(t,n,r),a(n,l),j&&j.m(l,null),a(l,s),a(l,o),a(o,i),a(i,c),a(o,f),a(o,y),a(y,w),_||(x=[p(n,"mousemove",e[7]),p(n,"mouseenter",e[8]),p(n,"mouseleave",e[9]),p(n,"dblclick",e[10])],_=!0)},p(t,[e]){k===(k=U(t))&&j?j.p(t,e):(j&&j.d(1),j=k&&k(t),j&&(j.c(),j.m(l,s))),1&e&&L!==(L=(t[0].title?t[0].title:"")+"")&&$(c,L),1&e&&R!==(R=(t[0].date?t[0].date:"")+"")&&$(w,R),12&e&&b(l,"transform","rotateY("+t[2]+"deg) rotateX("+t[3]+"deg)")},i:t,o:t,d(t){t&&d(n),j&&j.d(),_=!1,r(x)}}}function mt(t,e,n){let{params:l}=e,r=0,s=0,o=!1,i=null,c=null;var a;x(()=>{l.vidURL||o||!l.imgURL||(i=new Image,i.onload=u,i.src=l.imgURL)}),a=()=>{clearTimeout(c)},_().$$.on_destroy.push(a);const u=()=>{n(1,o=!0)};let d,f,g,m;return t.$$set=t=>{"params"in t&&n(0,l=t.params)},t.$$.update=()=>{2048&t.$$.dirty&&n(2,d=30*r),4096&t.$$.dirty&&n(3,f=-30*s),2048&t.$$.dirty&&n(4,g=-40*r),4096&t.$$.dirty&&n(5,m=-40*s)},[l,o,d,f,g,m,u,function(t){n(11,r=(t.pageX-this.offsetLeft-this.clientWidth/2)/this.clientWidth),n(12,s=(t.pageY-this.offsetTop-this.clientHeight/2)/this.clientHeight)},function(t){clearTimeout(c)},function(t){c=setTimeout(()=>{n(2,d=n(3,f=n(4,g=n(5,m=0))))},1e3)},function(t){console.log(l.title+" dblclick"),window.open(l.url,"_blank")}]}class ht extends W{constructor(t){super(),O(this,t,mt,gt,o,{params:0})}}const pt=[];function vt(e,n=t){let l;const r=[];function s(t){if(o(e,t)&&(e=t,l)){const t=!pt.length;for(let t=0;t<r.length;t+=1){const n=r[t];n[1](),pt.push(n,e)}if(t){for(let t=0;t<pt.length;t+=2)pt[t][0](pt[t+1]);pt.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(o,i=t){const c=[o,i];return r.push(c),1===r.length&&(l=n(s)||t),o(e),()=>{const t=r.indexOf(c);-1!==t&&r.splice(t,1),0===r.length&&(l(),l=null)}}}}var $t=[{title:"Hades",url:"https://www.supergiantgames.com/games/hades/",imgURL:"https://images.ctfassets.net/5owu3y35gz1g/3m6R8B2VKMGauiMAUcMSCu/76b7cc05349b20feb08798d2742e8fe9/Hades_Wallpaper_01.jpg",aytVideoID:"YZZFlcE0fWE",date:"17 Sep 2020",added:"26 Sep 2020"},{title:"Aria Chronicle",url:"https://www.aria-chronicle.com/",imgURL:"https://www.aria-chronicle.com/images/product/aria-chronicle.png",ytVideoID:"dV8q6zEDvp8",date:"12 Jul 2020"},{title:"Star Renegades",url:"http://starrenegades.com/",imgURL:"http://starrenegades.com/img/SR-New-Header.jpg",aytVideoID:"3Fe0gqTU3Bg",date:"8 Sep 2020"}];const bt={subscribe:vt(null,(function(t){return function(t){t($t)}(t),function(){}})).subscribe};function yt(t,e,n){const l=t.slice();return l[1]=e[n],l}function wt(t){let e,n,l,r,s=t[0],o=[];for(let e=0;e<s.length;e+=1)o[e]=_t(yt(t,s,e));const i=t=>X(o[t],1,1,()=>{o[t]=null});return{c(){e=g("h2"),e.textContent="ran into",n=h(),l=g("div");for(let t=0;t<o.length;t+=1)o[t].c();v(l,"class","container svelte-dcexkb")},m(t,s){u(t,e,s),u(t,n,s),u(t,l,s);for(let t=0;t<o.length;t+=1)o[t].m(l,null);r=!0},p(t,e){if(1&e){let n;for(s=t[0],n=0;n<s.length;n+=1){const r=yt(t,s,n);o[n]?(o[n].p(r,e),T(o[n],1)):(o[n]=_t(r),o[n].c(),T(o[n],1),o[n].m(l,null))}for(A(),n=s.length;n<o.length;n+=1)i(n);B()}},i(t){if(!r){for(let t=0;t<s.length;t+=1)T(o[t]);r=!0}},o(t){o=o.filter(Boolean);for(let t=0;t<o.length;t+=1)X(o[t]);r=!1},d(t){t&&d(e),t&&d(n),t&&d(l),f(o,t)}}}function _t(t){let e,n;return e=new ht({props:{params:{...t[1]}}}),{c(){F(e.$$.fragment)},m(t,l){G(e,t,l),n=!0},p(t,n){const l={};1&n&&(l.params={...t[1]}),e.$set(l)},i(t){n||(T(e.$$.fragment,t),n=!0)},o(t){X(e.$$.fragment,t),n=!1},d(t){M(e,t)}}}function xt(t){let e,n,l=null!=t[0]&&wt(t);return{c(){e=g("div"),l&&l.c(),v(e,"id","ran-into")},m(t,r){u(t,e,r),l&&l.m(e,null),n=!0},p(t,[n]){null!=t[0]?l?(l.p(t,n),1&n&&T(l,1)):(l=wt(t),l.c(),T(l,1),l.m(e,null)):l&&(A(),X(l,1,1,()=>{l=null}),B())},i(t){n||(T(l),n=!0)},o(t){X(l),n=!1},d(t){t&&d(e),l&&l.d()}}}function Lt(t,e,n){let l;return i(t,bt,t=>n(0,l=t)),[l]}class Rt extends W{constructor(t){super(),O(this,t,Lt,xt,o,{})}}function Ut(t,e,n){const l=t.slice();return l[4]=e[n],l}function kt(t,e,n){const l=t.slice();return l[4]=e[n],l}function jt(t,e,n){const l=t.slice();return l[4]=e[n],l}function Dt(t,e,n){const l=t.slice();return l[4]=e[n],l}function It(t){let e,n,l=t[1].welcome_msg+"";return{c(){e=g("p"),n=m(l)},m(t,l){u(t,e,l),a(e,n)},p(t,e){2&e&&l!==(l=t[1].welcome_msg+"")&&$(n,l)},d(t){t&&d(e)}}}function Ct(t){let e,n,l,r=t[1].name+"";return{c(){e=g("h1"),n=g("a"),l=m(r),v(n,"href","/")},m(t,r){u(t,e,r),a(e,n),a(n,l)},p(t,e){2&e&&r!==(r=t[1].name+"")&&$(l,r)},d(t){t&&d(e)}}}function St(t){let e,n,l,r,s,o=t[1].links,i=[];for(let e=0;e<o.length;e+=1)i[e]=Et(Dt(t,o,e));const c=t=>X(i[t],1,1,()=>{i[t]=null});return{c(){e=g("div"),n=g("h2"),n.textContent="is at",l=h(),r=g("div");for(let t=0;t<i.length;t+=1)i[t].c();v(r,"class","wrapus svelte-1n2urqs"),v(e,"id","is-at")},m(t,o){u(t,e,o),a(e,n),a(e,l),a(e,r);for(let t=0;t<i.length;t+=1)i[t].m(r,null);s=!0},p(t,e){if(2&e){let n;for(o=t[1].links,n=0;n<o.length;n+=1){const l=Dt(t,o,n);i[n]?(i[n].p(l,e),T(i[n],1)):(i[n]=Et(l),i[n].c(),T(i[n],1),i[n].m(r,null))}for(A(),n=o.length;n<i.length;n+=1)c(n);B()}},i(t){if(!s){for(let t=0;t<o.length;t+=1)T(i[t]);s=!0}},o(t){i=i.filter(Boolean);for(let t=0;t<i.length;t+=1)X(i[t]);s=!1},d(t){t&&d(e),f(i,t)}}}function Et(t){let n,l;const r=[t[4]];let s={};for(let t=0;t<r.length;t+=1)s=e(s,r[t]);return n=new at({props:s}),{c(){F(n.$$.fragment)},m(t,e){G(n,t,e),l=!0},p(t,e){const l=2&e?H(r,[z(t[4])]):{};n.$set(l)},i(t){l||(T(n.$$.fragment,t),l=!0)},o(t){X(n.$$.fragment,t),l=!1},d(t){M(n,t)}}}function Vt(t){let e,n,l,r,s,o=t[1].projects,i=[];for(let e=0;e<o.length;e+=1)i[e]=qt(jt(t,o,e));const c=t=>X(i[t],1,1,()=>{i[t]=null});return{c(){e=g("div"),n=g("h2"),n.textContent="dabbles in",l=h(),r=g("div");for(let t=0;t<i.length;t+=1)i[t].c();v(r,"class","wrapus svelte-1n2urqs"),v(e,"id","dabbles-in")},m(t,o){u(t,e,o),a(e,n),a(e,l),a(e,r);for(let t=0;t<i.length;t+=1)i[t].m(r,null);s=!0},p(t,e){if(2&e){let n;for(o=t[1].projects,n=0;n<o.length;n+=1){const l=jt(t,o,n);i[n]?(i[n].p(l,e),T(i[n],1)):(i[n]=qt(l),i[n].c(),T(i[n],1),i[n].m(r,null))}for(A(),n=o.length;n<i.length;n+=1)c(n);B()}},i(t){if(!s){for(let t=0;t<o.length;t+=1)T(i[t]);s=!0}},o(t){i=i.filter(Boolean);for(let t=0;t<i.length;t+=1)X(i[t]);s=!1},d(t){t&&d(e),f(i,t)}}}function qt(t){let n,l;const r=[t[4]];let s={};for(let t=0;t<r.length;t+=1)s=e(s,r[t]);return n=new at({props:s}),{c(){F(n.$$.fragment)},m(t,e){G(n,t,e),l=!0},p(t,e){const l=2&e?H(r,[z(t[4])]):{};n.$set(l)},i(t){l||(T(n.$$.fragment,t),l=!0)},o(t){X(n.$$.fragment,t),l=!1},d(t){M(n,t)}}}function Yt(t){let e,n,l,r,s,o=t[1].toybox,i=[];for(let e=0;e<o.length;e+=1)i[e]=At(kt(t,o,e));const c=t=>X(i[t],1,1,()=>{i[t]=null});return{c(){e=g("div"),n=g("h2"),n.textContent="plays with",l=h(),r=g("div");for(let t=0;t<i.length;t+=1)i[t].c();v(r,"class","wrapus svelte-1n2urqs"),v(e,"id","plays-with")},m(t,o){u(t,e,o),a(e,n),a(e,l),a(e,r);for(let t=0;t<i.length;t+=1)i[t].m(r,null);s=!0},p(t,e){if(2&e){let n;for(o=t[1].toybox,n=0;n<o.length;n+=1){const l=kt(t,o,n);i[n]?(i[n].p(l,e),T(i[n],1)):(i[n]=At(l),i[n].c(),T(i[n],1),i[n].m(r,null))}for(A(),n=o.length;n<i.length;n+=1)c(n);B()}},i(t){if(!s){for(let t=0;t<o.length;t+=1)T(i[t]);s=!0}},o(t){i=i.filter(Boolean);for(let t=0;t<i.length;t+=1)X(i[t]);s=!1},d(t){t&&d(e),f(i,t)}}}function At(t){let n,l;const r=[t[4]];let s={};for(let t=0;t<r.length;t+=1)s=e(s,r[t]);return n=new ot({props:s}),{c(){F(n.$$.fragment)},m(t,e){G(n,t,e),l=!0},p(t,e){const l=2&e?H(r,[z(t[4])]):{};n.$set(l)},i(t){l||(T(n.$$.fragment,t),l=!0)},o(t){X(n.$$.fragment,t),l=!1},d(t){M(n,t)}}}function Bt(t){let e,n,l,r,s,o=t[1].shelf,i=[];for(let e=0;e<o.length;e+=1)i[e]=Tt(Ut(t,o,e));const c=t=>X(i[t],1,1,()=>{i[t]=null});return{c(){e=g("div"),n=g("h2"),n.textContent="wants to play",l=h(),r=g("div");for(let t=0;t<i.length;t+=1)i[t].c();v(r,"class","wrapus svelte-1n2urqs"),v(e,"id","wants-to-play")},m(t,o){u(t,e,o),a(e,n),a(e,l),a(e,r);for(let t=0;t<i.length;t+=1)i[t].m(r,null);s=!0},p(t,e){if(2&e){let n;for(o=t[1].shelf,n=0;n<o.length;n+=1){const l=Ut(t,o,n);i[n]?(i[n].p(l,e),T(i[n],1)):(i[n]=Tt(l),i[n].c(),T(i[n],1),i[n].m(r,null))}for(A(),n=o.length;n<i.length;n+=1)c(n);B()}},i(t){if(!s){for(let t=0;t<o.length;t+=1)T(i[t]);s=!0}},o(t){i=i.filter(Boolean);for(let t=0;t<i.length;t+=1)X(i[t]);s=!1},d(t){t&&d(e),f(i,t)}}}function Tt(t){let n,l;const r=[t[4]];let s={};for(let t=0;t<r.length;t+=1)s=e(s,r[t]);return n=new ot({props:s}),{c(){F(n.$$.fragment)},m(t,e){G(n,t,e),l=!0},p(t,e){const l=2&e?H(r,[z(t[4])]):{};n.$set(l)},i(t){l||(T(n.$$.fragment,t),l=!0)},o(t){X(n.$$.fragment,t),l=!1},d(t){M(n,t)}}}function Xt(t){let e,n,l,r,s,o,i,c,f,p,b,y,w,_,x,L,R,U,k,j,D=null!=t[1].welcome_msg&&It(t),I=null!=t[1].name&&Ct(t),C=null!=t[1].links&&St(t);o=new Rt({});let S=null!=t[1].projects&&Vt(t),E=null!=t[1].toybox&&Yt(t),V=null!=t[1].shelf&&Bt(t);return{c(){e=g("header"),D&&D.c(),n=h(),I&&I.c(),l=h(),r=g("main"),C&&C.c(),s=h(),F(o.$$.fragment),i=h(),S&&S.c(),c=h(),E&&E.c(),f=h(),V&&V.c(),p=h(),b=g("footer"),y=g("div"),w=m(" \n    "),_=g("p"),_.innerHTML='<a href="https://github.com/tehdarthvid/tehdarthvid.github.io/tree/dev">source</a>',x=h(),L=g("a"),R=m("build "),U=m(t[2]),v(e,"class","svelte-1n2urqs"),v(r,"class","svelte-1n2urqs"),v(L,"href",k="https://github.com/tehdarthvid/tehdarthvid.github.io/commit/"+t[0]),v(y,"id","build"),v(y,"class","svelte-1n2urqs"),v(b,"class","svelte-1n2urqs")},m(t,d){u(t,e,d),D&&D.m(e,null),a(e,n),I&&I.m(e,null),u(t,l,d),u(t,r,d),C&&C.m(r,null),a(r,s),G(o,r,null),a(r,i),S&&S.m(r,null),a(r,c),E&&E.m(r,null),a(r,f),V&&V.m(r,null),u(t,p,d),u(t,b,d),a(b,y),a(y,w),a(y,_),a(y,x),a(y,L),a(L,R),a(L,U),j=!0},p(t,[l]){null!=t[1].welcome_msg?D?D.p(t,l):(D=It(t),D.c(),D.m(e,n)):D&&(D.d(1),D=null),null!=t[1].name?I?I.p(t,l):(I=Ct(t),I.c(),I.m(e,null)):I&&(I.d(1),I=null),null!=t[1].links?C?(C.p(t,l),2&l&&T(C,1)):(C=St(t),C.c(),T(C,1),C.m(r,s)):C&&(A(),X(C,1,1,()=>{C=null}),B()),null!=t[1].projects?S?(S.p(t,l),2&l&&T(S,1)):(S=Vt(t),S.c(),T(S,1),S.m(r,c)):S&&(A(),X(S,1,1,()=>{S=null}),B()),null!=t[1].toybox?E?(E.p(t,l),2&l&&T(E,1)):(E=Yt(t),E.c(),T(E,1),E.m(r,f)):E&&(A(),X(E,1,1,()=>{E=null}),B()),null!=t[1].shelf?V?(V.p(t,l),2&l&&T(V,1)):(V=Bt(t),V.c(),T(V,1),V.m(r,null)):V&&(A(),X(V,1,1,()=>{V=null}),B()),(!j||4&l)&&$(U,t[2]),(!j||1&l&&k!==(k="https://github.com/tehdarthvid/tehdarthvid.github.io/commit/"+t[0]))&&v(L,"href",k)},i(t){j||(T(C),T(o.$$.fragment,t),T(S),T(E),T(V),j=!0)},o(t){X(C),X(o.$$.fragment,t),X(S),X(E),X(V),j=!1},d(t){t&&d(e),D&&D.d(),I&&I.d(),t&&d(l),t&&d(r),C&&C.d(),M(o),S&&S.d(),E&&E.d(),V&&V.d(),t&&d(p),t&&d(b)}}}function Ht(t,e,n){let{gaID:l}=e,{git_hash:r}=e;var s;try{null==(s=nt)&&(s={})}catch{s={}}l&&(t=>{function e(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],e("js",new Date),e("config",t);const n=document.createElement("script");n.src="https://www.googletagmanager.com/gtag/js?id="+t,document.body.appendChild(n)})(l);var o=r;return o=o.slice(0,7),t.$$set=t=>{"gaID"in t&&n(3,l=t.gaID),"git_hash"in t&&n(0,r=t.git_hash)},[r,s,o,l]}return new class extends W{constructor(t){super(),O(this,t,Ht,Xt,o,{gaID:3,git_hash:0})}}({target:document.body,props:{gaID:"UA-1020096-2",git_hash:"28e664ecdf01c847adfcb852533a6b9d580c9a93"}})}();
//# sourceMappingURL=bundle.js.map
