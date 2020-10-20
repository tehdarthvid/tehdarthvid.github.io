var app=function(){"use strict";function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function l(){return Object.create(null)}function s(t){t.forEach(n)}function r(t){return"function"==typeof t}function o(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(e,n,l){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const l=e.subscribe(...n);return l.unsubscribe?()=>l.unsubscribe():l}(n,l))}function c(t){return null==t?"":t}function a(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function d(t){t.parentNode.removeChild(t)}function f(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function m(t){return document.createElement(t)}function g(t){return document.createTextNode(t)}function h(){return g(" ")}function p(t,e,n,l){return t.addEventListener(e,n,l),()=>t.removeEventListener(e,n,l)}function v(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function b(t,e,n,l){t.style.setProperty(e,n,l?"important":"")}let w;function y(t){w=t}function _(){if(!w)throw new Error("Function called outside component initialization");return w}function x(t){_().$$.after_update.push(t)}const L=[],k=[],R=[],U=[],j=Promise.resolve();let I=!1;function C(t){R.push(t)}let D=!1;const E=new Set;function S(){if(!D){D=!0;do{for(let t=0;t<L.length;t+=1){const e=L[t];y(e),T(e.$$)}for(y(null),L.length=0;k.length;)k.pop()();for(let t=0;t<R.length;t+=1){const e=R[t];E.has(e)||(E.add(e),e())}R.length=0}while(L.length);for(;U.length;)U.pop()();I=!1,D=!1,E.clear()}}function T(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(C)}}const Y=new Set;let q;function V(){q={r:0,c:[],p:q}}function X(){q.r||s(q.c),q=q.p}function A(t,e){t&&t.i&&(Y.delete(t),t.i(e))}function B(t,e,n,l){if(t&&t.o){if(Y.has(t))return;Y.add(t),q.c.push(()=>{Y.delete(t),l&&(n&&t.d(1),l())}),t.o(e)}}function G(t,e){const n={},l={},s={$$scope:1};let r=t.length;for(;r--;){const o=t[r],i=e[r];if(i){for(const t in o)t in i||(l[t]=1);for(const t in i)s[t]||(n[t]=i[t],s[t]=1);t[r]=i}else for(const t in o)s[t]=1}for(const t in l)t in n||(n[t]=void 0);return n}function O(t){return"object"==typeof t&&null!==t?t:{}}function H(t){t&&t.c()}function z(t,e,l){const{fragment:o,on_mount:i,on_destroy:c,after_update:a}=t.$$;o&&o.m(e,l),C(()=>{const e=i.map(n).filter(r);c?c.push(...e):s(e),t.$$.on_mount=[]}),a.forEach(C)}function M(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function W(t,e){-1===t.$$.dirty[0]&&(L.push(t),I||(I=!0,j.then(S)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function F(e,n,r,o,i,c,a=[-1]){const u=w;y(e);const f=n.props||{},m=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:i,bound:l(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:l(),dirty:a,skip_bound:!1};let g=!1;if(m.ctx=r?r(e,f,(t,n,...l)=>{const s=l.length?l[0]:n;return m.ctx&&i(m.ctx[t],m.ctx[t]=s)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](s),g&&W(e,t)),n}):[],m.update(),g=!0,s(m.before_update),m.fragment=!!o&&o(m.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);m.fragment&&m.fragment.l(t),t.forEach(d)}else m.fragment&&m.fragment.c();n.intro&&A(e.$$.fragment),z(e,n.target,n.anchor),S()}y(u)}class N{$destroy(){M(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}var P="darthvid",J="サイトへようこそ!",Z=[{title:"GitHub",url:"https://github.com/tehdarthvid"},{title:"LinkedIn",url:"https://www.linkedin.com/in/darthvid/"},{title:"Letterboxd",url:"https://letterboxd.com/darthvid/films/"},{title:"Twitter",url:"https://twitter.com/darthvid"}],K=[{title:"influences",url:"https://dna.darthvid.com"},{title:"this site",url:"https://github.com/tehdarthvid/tehdarthvid.github.io/tree/dev"},{title:"log-wakatime.fish",url:"https://github.com/tehdarthvid/log-wakatime-fish"}],Q=[{title:"JavaScript",url:"https://en.wikipedia.org/wiki/JavaScript",imgURL:"assets/images/javascript.svg"},{title:"Node.js",url:"https://nodejs.org/",imgURL:"assets/images/nodejs.svg"},{title:"Svelte",url:"https://svelte.dev/",imgURL:"assets/images/svelte.png"},{title:"Vue.js",url:"https://vuejs.org/",imgURL:"assets/images/vue.png"},{title:"Amazon Web Services",url:"https://aws.amazon.com/",imgURL:"assets/images/aws.png"},{title:"Google Cloud Platform",url:"https://cloud.google.com/",imgURL:"assets/images/gcp.png"},{title:"GitHub Actions",url:"https://github.com/features/actions",imgURL:"assets/images/gh-actions.svg"},{title:"C/C++",url:"http://csapp.cs.cmu.edu/3e/docs/chistory.html",imgURL:"assets/images/clang.jpg"},{title:"fish",url:"https://fishshell.com/",imgURL:"assets/images/fish.png"},{title:"Visual Studio Code",url:"https://code.visualstudio.com/",imgURL:"assets/images/vscode.png"},{title:"kitty",url:"https://sw.kovidgoyal.net/kitty/",imgURL:"assets/images/kitty.png"}],tt=[{title:"Go",url:"https://golang.org/",imgURL:"assets/images/go-gopher.png"},{title:"Deno",url:"https://deno.land/",imgURL:"assets/images/deno.png"},{title:"Blender",url:"https://www.blender.org/",imgURL:"assets/images/blender.png"},{title:"Rust",url:"https://www.rust-lang.org/",imgURL:"assets/images/rust-ferris.svg"},{title:"Flutter",url:"https://flutter.dev/",imgURL:"assets/images/flutter.svg"}],et={name:P,welcome_msg:J,links:Z,projects:K,toybox:Q,shelf:tt},nt=Object.freeze({__proto__:null,name:P,welcome_msg:J,links:Z,projects:K,toybox:Q,shelf:tt,default:et});function lt(t){let e,n;return{c(){e=m("img"),v(e,"class","icon svelte-rs3oun"),v(e,"alt",t[0]),e.src!==(n=t[2])&&v(e,"src",n)},m(t,n){u(t,e,n)},p(t,l){1&l&&v(e,"alt",t[0]),4&l&&e.src!==(n=t[2])&&v(e,"src",n)},d(t){t&&d(e)}}}function st(e){let n,l,s=e[3]&&lt(e);return{c(){n=m("div"),l=m("a"),s&&s.c(),v(l,"href",e[1]),v(l,"title",e[0]),v(l,"target","_blank"),v(n,"class","icon svelte-rs3oun")},m(t,e){u(t,n,e),a(n,l),s&&s.m(l,null)},p(t,[e]){t[3]?s?s.p(t,e):(s=lt(t),s.c(),s.m(l,null)):s&&(s.d(1),s=null),2&e&&v(l,"href",t[1]),1&e&&v(l,"title",t[0])},i:t,o:t,d(t){t&&d(n),s&&s.d()}}}function rt(t,e,n){let{title:l}=e,{url:s}=e,{imgURL:r}=e,o=!1,i=null;x(()=>{!o&&r&&(i=new Image,i.onload=c,i.src=r)});const c=()=>{n(3,o=!0)};return t.$$set=t=>{"title"in t&&n(0,l=t.title),"url"in t&&n(1,s=t.url),"imgURL"in t&&n(2,r=t.imgURL)},[l,s,r,o]}class ot extends N{constructor(t){super(),F(this,t,rt,st,o,{title:0,url:1,imgURL:2})}}function it(e){let n,l,s,r,o;return{c(){n=m("div"),l=g("【\n  "),s=m("a"),r=g(e[0]),o=g("\n  】"),v(s,"href",e[1]),v(n,"class","linkto")},m(t,e){u(t,n,e),a(n,l),a(n,s),a(s,r),a(n,o)},p(t,[e]){1&e&&$(r,t[0]),2&e&&v(s,"href",t[1])},i:t,o:t,d(t){t&&d(n)}}}function ct(t,e,n){let{title:l}=e,{url:s}=e;return t.$$set=t=>{"title"in t&&n(0,l=t.title),"url"in t&&n(1,s=t.url)},[l,s]}class at extends N{constructor(t){super(),F(this,t,ct,it,o,{title:0,url:1})}}function ut(t){let e,n;return{c(){e=m("div"),v(e,"class",n=c(t[1]?"card-bg card-bg__fade-in":"card-bg")+" svelte-my5sl4"),b(e,"transform","translateX("+t[4]+"px) translateY("+t[5]+"px)"),b(e,"background-image","url("+t[0].imgURL+")")},m(t,n){u(t,e,n)},p(t,l){2&l&&n!==(n=c(t[1]?"card-bg card-bg__fade-in":"card-bg")+" svelte-my5sl4")&&v(e,"class",n),48&l&&b(e,"transform","translateX("+t[4]+"px) translateY("+t[5]+"px)"),1&l&&b(e,"background-image","url("+t[0].imgURL+")")},d(t){t&&d(e)}}}function dt(t){let e,n,l,s,r,o;return{c(){e=m("div"),n=m("video"),v(n,"class","center_video svelte-my5sl4"),n.src!==(l=t[0].vidURL)&&v(n,"src",l),n.autoplay="true",n.loop="true",n.muted="true",v(e,"class",s=c(t[1]?"card-bg card-bg__fade-in":"card-bg")+" svelte-my5sl4"),b(e,"transform","translateX("+t[4]+"px) translateY("+t[5]+"px)")},m(l,s){u(l,e,s),a(e,n),r||(o=p(n,"playing",t[6]),r=!0)},p(t,r){1&r&&n.src!==(l=t[0].vidURL)&&v(n,"src",l),2&r&&s!==(s=c(t[1]?"card-bg card-bg__fade-in":"card-bg")+" svelte-my5sl4")&&v(e,"class",s),48&r&&b(e,"transform","translateX("+t[4]+"px) translateY("+t[5]+"px)")},d(t){t&&d(e),r=!1,o()}}}function ft(t){let e,n,l,s,r;return{c(){e=m("div"),n=m("iframe"),v(n,"title",l=t[0].title?t[0].title:""),v(n,"class","center_video svelte-my5sl4"),v(n,"width","560"),v(n,"height","315"),n.src!==(s="https://www.youtube.com/embed/"+t[0].ytVideoID+"?rel=0&controls=0&autoplay=1&mute=1&loop=1&playlist="+t[0].ytVideoID)&&v(n,"src",s),v(n,"frameborder","0"),v(n,"allow","accelerometer; autoplay; encrypted-media; gyroscope;\n          picture-in-picture"),v(n,"loop","1"),n.allowFullscreen=!0,v(n,"onstatechange",t[6]),v(e,"class",r=c((t[1],"card-bg card-bg__fade-in"))+" svelte-my5sl4"),b(e,"transform","translateX("+t[4]+"px) translateY("+t[5]+"px)")},m(t,l){u(t,e,l),a(e,n)},p(t,o){1&o&&l!==(l=t[0].title?t[0].title:"")&&v(n,"title",l),1&o&&n.src!==(s="https://www.youtube.com/embed/"+t[0].ytVideoID+"?rel=0&controls=0&autoplay=1&mute=1&loop=1&playlist="+t[0].ytVideoID)&&v(n,"src",s),2&o&&r!==(r=c((t[1],"card-bg card-bg__fade-in"))+" svelte-my5sl4")&&v(e,"class",r),48&o&&b(e,"transform","translateX("+t[4]+"px) translateY("+t[5]+"px)")},d(t){t&&d(e)}}}function mt(e){let n,l,r,o,i,c,f,w,y,_,x,L=(e[0].title?e[0].title:"")+"",k=(e[0].date?e[0].date:"")+"";function R(t,e){return null!=t[0].ytVideoID?ft:null!=t[0].vidURL?dt:null!=t[0].imgURL?ut:void 0}let U=R(e),j=U&&U(e);return{c(){n=m("div"),l=m("div"),j&&j.c(),r=h(),o=m("div"),i=m("h1"),c=g(L),f=h(),w=m("p"),y=g(k),v(i,"class","svelte-my5sl4"),v(w,"class","svelte-my5sl4"),v(o,"class","card-info svelte-my5sl4"),v(l,"class","card svelte-my5sl4"),b(l,"transform","rotateY("+e[2]+"deg) rotateX("+e[3]+"deg)"),v(n,"class","card-wrap svelte-my5sl4")},m(t,s){u(t,n,s),a(n,l),j&&j.m(l,null),a(l,r),a(l,o),a(o,i),a(i,c),a(o,f),a(o,w),a(w,y),_||(x=[p(n,"mousemove",e[7]),p(n,"mouseenter",e[8]),p(n,"mouseleave",e[9]),p(n,"dblclick",e[10])],_=!0)},p(t,[e]){U===(U=R(t))&&j?j.p(t,e):(j&&j.d(1),j=U&&U(t),j&&(j.c(),j.m(l,r))),1&e&&L!==(L=(t[0].title?t[0].title:"")+"")&&$(c,L),1&e&&k!==(k=(t[0].date?t[0].date:"")+"")&&$(y,k),12&e&&b(l,"transform","rotateY("+t[2]+"deg) rotateX("+t[3]+"deg)")},i:t,o:t,d(t){t&&d(n),j&&j.d(),_=!1,s(x)}}}function gt(t,e,n){let{params:l}=e,s=0,r=0,o=!1,i=null,c=null;var a;x(()=>{l.vidURL||o||!l.imgURL||(i=new Image,i.onload=u,i.src=l.imgURL)}),a=()=>{clearTimeout(c)},_().$$.on_destroy.push(a);const u=()=>{n(1,o=!0)};let d,f,m,g;return t.$$set=t=>{"params"in t&&n(0,l=t.params)},t.$$.update=()=>{2048&t.$$.dirty&&n(2,d=30*s),4096&t.$$.dirty&&n(3,f=-30*r),2048&t.$$.dirty&&n(4,m=-40*s),4096&t.$$.dirty&&n(5,g=-40*r)},[l,o,d,f,m,g,u,function(t){n(11,s=(t.pageX-this.offsetLeft-this.clientWidth/2)/this.clientWidth),n(12,r=(t.pageY-this.offsetTop-this.clientHeight/2)/this.clientHeight)},function(t){clearTimeout(c)},function(t){c=setTimeout(()=>{n(2,d=n(3,f=n(4,m=n(5,g=0))))},1e3)},function(t){console.log(l.title+" dblclick"),window.open(l.url,"_blank")}]}class ht extends N{constructor(t){super(),F(this,t,gt,mt,o,{params:0})}}const pt=[];function vt(e,n=t){let l;const s=[];function r(t){if(o(e,t)&&(e=t,l)){const t=!pt.length;for(let t=0;t<s.length;t+=1){const n=s[t];n[1](),pt.push(n,e)}if(t){for(let t=0;t<pt.length;t+=2)pt[t][0](pt[t+1]);pt.length=0}}}return{set:r,update:function(t){r(t(e))},subscribe:function(o,i=t){const c=[o,i];return s.push(c),1===s.length&&(l=n(r)||t),o(e),()=>{const t=s.indexOf(c);-1!==t&&s.splice(t,1),0===s.length&&(l(),l=null)}}}}var $t=[{title:"Crown Trick",url:"https://www.nextstudios.com/crowntrick/",ref:"https://twitter.com/CrownTrickGame/status/1317012403188543488",imgURL:"https://www.team17.com/wp-content/uploads/2020/07/009.png",date:"16 Oct 2020",added:"20 Oct 2020"},{title:"Genshin Impact",url:"https://genshin.mihoyo.com/",imgURL:"https://webstatic-sea.mihoyo.com/hk4e/upload/fb/common.jpg",date:"28 Sep 2020: v1.0",added:"20 Oct 2020",ref:"https://twitter.com/GenshinImpact/status/1310398825039765505"},{title:"Hades",url:"https://www.supergiantgames.com/games/hades/",imgURL:"https://images.ctfassets.net/5owu3y35gz1g/3m6R8B2VKMGauiMAUcMSCu/76b7cc05349b20feb08798d2742e8fe9/Hades_Wallpaper_01.jpg",aytVideoID:"YZZFlcE0fWE",date:"17 Sep 2020",added:"26 Sep 2020"}];const bt={subscribe:vt(null,(function(t){return function(t){t($t)}(t),function(){}})).subscribe};function wt(t,e,n){const l=t.slice();return l[1]=e[n],l}function yt(t){let e,n,l,s,r=t[0],o=[];for(let e=0;e<r.length;e+=1)o[e]=_t(wt(t,r,e));const i=t=>B(o[t],1,1,()=>{o[t]=null});return{c(){e=m("h2"),e.textContent="ran into",n=h(),l=m("div");for(let t=0;t<o.length;t+=1)o[t].c();v(l,"class","container svelte-dcexkb")},m(t,r){u(t,e,r),u(t,n,r),u(t,l,r);for(let t=0;t<o.length;t+=1)o[t].m(l,null);s=!0},p(t,e){if(1&e){let n;for(r=t[0],n=0;n<r.length;n+=1){const s=wt(t,r,n);o[n]?(o[n].p(s,e),A(o[n],1)):(o[n]=_t(s),o[n].c(),A(o[n],1),o[n].m(l,null))}for(V(),n=r.length;n<o.length;n+=1)i(n);X()}},i(t){if(!s){for(let t=0;t<r.length;t+=1)A(o[t]);s=!0}},o(t){o=o.filter(Boolean);for(let t=0;t<o.length;t+=1)B(o[t]);s=!1},d(t){t&&d(e),t&&d(n),t&&d(l),f(o,t)}}}function _t(t){let e,n;return e=new ht({props:{params:{...t[1]}}}),{c(){H(e.$$.fragment)},m(t,l){z(e,t,l),n=!0},p(t,n){const l={};1&n&&(l.params={...t[1]}),e.$set(l)},i(t){n||(A(e.$$.fragment,t),n=!0)},o(t){B(e.$$.fragment,t),n=!1},d(t){M(e,t)}}}function xt(t){let e,n,l=null!=t[0]&&yt(t);return{c(){e=m("div"),l&&l.c(),v(e,"id","ran-into")},m(t,s){u(t,e,s),l&&l.m(e,null),n=!0},p(t,[n]){null!=t[0]?l?(l.p(t,n),1&n&&A(l,1)):(l=yt(t),l.c(),A(l,1),l.m(e,null)):l&&(V(),B(l,1,1,()=>{l=null}),X())},i(t){n||(A(l),n=!0)},o(t){B(l),n=!1},d(t){t&&d(e),l&&l.d()}}}function Lt(t,e,n){let l;return i(t,bt,t=>n(0,l=t)),[l]}class kt extends N{constructor(t){super(),F(this,t,Lt,xt,o,{})}}function Rt(t,e,n){const l=t.slice();return l[4]=e[n],l}function Ut(t,e,n){const l=t.slice();return l[4]=e[n],l}function jt(t,e,n){const l=t.slice();return l[4]=e[n],l}function It(t,e,n){const l=t.slice();return l[4]=e[n],l}function Ct(t){let e,n,l=t[1].welcome_msg+"";return{c(){e=m("p"),n=g(l)},m(t,l){u(t,e,l),a(e,n)},p(t,e){2&e&&l!==(l=t[1].welcome_msg+"")&&$(n,l)},d(t){t&&d(e)}}}function Dt(t){let e,n,l,s=t[1].name+"";return{c(){e=m("h1"),n=m("a"),l=g(s),v(n,"href","/")},m(t,s){u(t,e,s),a(e,n),a(n,l)},p(t,e){2&e&&s!==(s=t[1].name+"")&&$(l,s)},d(t){t&&d(e)}}}function Et(t){let e,n,l,s,r,o=t[1].links,i=[];for(let e=0;e<o.length;e+=1)i[e]=St(It(t,o,e));const c=t=>B(i[t],1,1,()=>{i[t]=null});return{c(){e=m("div"),n=m("h2"),n.textContent="is at",l=h(),s=m("div");for(let t=0;t<i.length;t+=1)i[t].c();v(s,"class","wrapus svelte-1n2urqs"),v(e,"id","is-at")},m(t,o){u(t,e,o),a(e,n),a(e,l),a(e,s);for(let t=0;t<i.length;t+=1)i[t].m(s,null);r=!0},p(t,e){if(2&e){let n;for(o=t[1].links,n=0;n<o.length;n+=1){const l=It(t,o,n);i[n]?(i[n].p(l,e),A(i[n],1)):(i[n]=St(l),i[n].c(),A(i[n],1),i[n].m(s,null))}for(V(),n=o.length;n<i.length;n+=1)c(n);X()}},i(t){if(!r){for(let t=0;t<o.length;t+=1)A(i[t]);r=!0}},o(t){i=i.filter(Boolean);for(let t=0;t<i.length;t+=1)B(i[t]);r=!1},d(t){t&&d(e),f(i,t)}}}function St(t){let n,l;const s=[t[4]];let r={};for(let t=0;t<s.length;t+=1)r=e(r,s[t]);return n=new at({props:r}),{c(){H(n.$$.fragment)},m(t,e){z(n,t,e),l=!0},p(t,e){const l=2&e?G(s,[O(t[4])]):{};n.$set(l)},i(t){l||(A(n.$$.fragment,t),l=!0)},o(t){B(n.$$.fragment,t),l=!1},d(t){M(n,t)}}}function Tt(t){let e,n,l,s,r,o=t[1].projects,i=[];for(let e=0;e<o.length;e+=1)i[e]=Yt(jt(t,o,e));const c=t=>B(i[t],1,1,()=>{i[t]=null});return{c(){e=m("div"),n=m("h2"),n.textContent="dabbles in",l=h(),s=m("div");for(let t=0;t<i.length;t+=1)i[t].c();v(s,"class","wrapus svelte-1n2urqs"),v(e,"id","dabbles-in")},m(t,o){u(t,e,o),a(e,n),a(e,l),a(e,s);for(let t=0;t<i.length;t+=1)i[t].m(s,null);r=!0},p(t,e){if(2&e){let n;for(o=t[1].projects,n=0;n<o.length;n+=1){const l=jt(t,o,n);i[n]?(i[n].p(l,e),A(i[n],1)):(i[n]=Yt(l),i[n].c(),A(i[n],1),i[n].m(s,null))}for(V(),n=o.length;n<i.length;n+=1)c(n);X()}},i(t){if(!r){for(let t=0;t<o.length;t+=1)A(i[t]);r=!0}},o(t){i=i.filter(Boolean);for(let t=0;t<i.length;t+=1)B(i[t]);r=!1},d(t){t&&d(e),f(i,t)}}}function Yt(t){let n,l;const s=[t[4]];let r={};for(let t=0;t<s.length;t+=1)r=e(r,s[t]);return n=new at({props:r}),{c(){H(n.$$.fragment)},m(t,e){z(n,t,e),l=!0},p(t,e){const l=2&e?G(s,[O(t[4])]):{};n.$set(l)},i(t){l||(A(n.$$.fragment,t),l=!0)},o(t){B(n.$$.fragment,t),l=!1},d(t){M(n,t)}}}function qt(t){let e,n,l,s,r,o=t[1].toybox,i=[];for(let e=0;e<o.length;e+=1)i[e]=Vt(Ut(t,o,e));const c=t=>B(i[t],1,1,()=>{i[t]=null});return{c(){e=m("div"),n=m("h2"),n.textContent="plays with",l=h(),s=m("div");for(let t=0;t<i.length;t+=1)i[t].c();v(s,"class","wrapus svelte-1n2urqs"),v(e,"id","plays-with")},m(t,o){u(t,e,o),a(e,n),a(e,l),a(e,s);for(let t=0;t<i.length;t+=1)i[t].m(s,null);r=!0},p(t,e){if(2&e){let n;for(o=t[1].toybox,n=0;n<o.length;n+=1){const l=Ut(t,o,n);i[n]?(i[n].p(l,e),A(i[n],1)):(i[n]=Vt(l),i[n].c(),A(i[n],1),i[n].m(s,null))}for(V(),n=o.length;n<i.length;n+=1)c(n);X()}},i(t){if(!r){for(let t=0;t<o.length;t+=1)A(i[t]);r=!0}},o(t){i=i.filter(Boolean);for(let t=0;t<i.length;t+=1)B(i[t]);r=!1},d(t){t&&d(e),f(i,t)}}}function Vt(t){let n,l;const s=[t[4]];let r={};for(let t=0;t<s.length;t+=1)r=e(r,s[t]);return n=new ot({props:r}),{c(){H(n.$$.fragment)},m(t,e){z(n,t,e),l=!0},p(t,e){const l=2&e?G(s,[O(t[4])]):{};n.$set(l)},i(t){l||(A(n.$$.fragment,t),l=!0)},o(t){B(n.$$.fragment,t),l=!1},d(t){M(n,t)}}}function Xt(t){let e,n,l,s,r,o=t[1].shelf,i=[];for(let e=0;e<o.length;e+=1)i[e]=At(Rt(t,o,e));const c=t=>B(i[t],1,1,()=>{i[t]=null});return{c(){e=m("div"),n=m("h2"),n.textContent="wants to play",l=h(),s=m("div");for(let t=0;t<i.length;t+=1)i[t].c();v(s,"class","wrapus svelte-1n2urqs"),v(e,"id","wants-to-play")},m(t,o){u(t,e,o),a(e,n),a(e,l),a(e,s);for(let t=0;t<i.length;t+=1)i[t].m(s,null);r=!0},p(t,e){if(2&e){let n;for(o=t[1].shelf,n=0;n<o.length;n+=1){const l=Rt(t,o,n);i[n]?(i[n].p(l,e),A(i[n],1)):(i[n]=At(l),i[n].c(),A(i[n],1),i[n].m(s,null))}for(V(),n=o.length;n<i.length;n+=1)c(n);X()}},i(t){if(!r){for(let t=0;t<o.length;t+=1)A(i[t]);r=!0}},o(t){i=i.filter(Boolean);for(let t=0;t<i.length;t+=1)B(i[t]);r=!1},d(t){t&&d(e),f(i,t)}}}function At(t){let n,l;const s=[t[4]];let r={};for(let t=0;t<s.length;t+=1)r=e(r,s[t]);return n=new ot({props:r}),{c(){H(n.$$.fragment)},m(t,e){z(n,t,e),l=!0},p(t,e){const l=2&e?G(s,[O(t[4])]):{};n.$set(l)},i(t){l||(A(n.$$.fragment,t),l=!0)},o(t){B(n.$$.fragment,t),l=!1},d(t){M(n,t)}}}function Bt(t){let e,n,l,s,r,o,i,c,f,p,b,w,y,_,x,L,k,R,U,j,I=null!=t[1].welcome_msg&&Ct(t),C=null!=t[1].name&&Dt(t),D=null!=t[1].links&&Et(t);o=new kt({});let E=null!=t[1].projects&&Tt(t),S=null!=t[1].toybox&&qt(t),T=null!=t[1].shelf&&Xt(t);return{c(){e=m("header"),I&&I.c(),n=h(),C&&C.c(),l=h(),s=m("main"),D&&D.c(),r=h(),H(o.$$.fragment),i=h(),E&&E.c(),c=h(),S&&S.c(),f=h(),T&&T.c(),p=h(),b=m("footer"),w=m("div"),y=g(" \n    "),_=m("p"),_.innerHTML='<a href="https://github.com/tehdarthvid/tehdarthvid.github.io/tree/dev">source</a>',x=h(),L=m("a"),k=g("build "),R=g(t[2]),v(e,"class","svelte-1n2urqs"),v(s,"class","svelte-1n2urqs"),v(L,"href",U="https://github.com/tehdarthvid/tehdarthvid.github.io/commit/"+t[0]),v(w,"id","build"),v(w,"class","svelte-1n2urqs"),v(b,"class","svelte-1n2urqs")},m(t,d){u(t,e,d),I&&I.m(e,null),a(e,n),C&&C.m(e,null),u(t,l,d),u(t,s,d),D&&D.m(s,null),a(s,r),z(o,s,null),a(s,i),E&&E.m(s,null),a(s,c),S&&S.m(s,null),a(s,f),T&&T.m(s,null),u(t,p,d),u(t,b,d),a(b,w),a(w,y),a(w,_),a(w,x),a(w,L),a(L,k),a(L,R),j=!0},p(t,[l]){null!=t[1].welcome_msg?I?I.p(t,l):(I=Ct(t),I.c(),I.m(e,n)):I&&(I.d(1),I=null),null!=t[1].name?C?C.p(t,l):(C=Dt(t),C.c(),C.m(e,null)):C&&(C.d(1),C=null),null!=t[1].links?D?(D.p(t,l),2&l&&A(D,1)):(D=Et(t),D.c(),A(D,1),D.m(s,r)):D&&(V(),B(D,1,1,()=>{D=null}),X()),null!=t[1].projects?E?(E.p(t,l),2&l&&A(E,1)):(E=Tt(t),E.c(),A(E,1),E.m(s,c)):E&&(V(),B(E,1,1,()=>{E=null}),X()),null!=t[1].toybox?S?(S.p(t,l),2&l&&A(S,1)):(S=qt(t),S.c(),A(S,1),S.m(s,f)):S&&(V(),B(S,1,1,()=>{S=null}),X()),null!=t[1].shelf?T?(T.p(t,l),2&l&&A(T,1)):(T=Xt(t),T.c(),A(T,1),T.m(s,null)):T&&(V(),B(T,1,1,()=>{T=null}),X()),(!j||4&l)&&$(R,t[2]),(!j||1&l&&U!==(U="https://github.com/tehdarthvid/tehdarthvid.github.io/commit/"+t[0]))&&v(L,"href",U)},i(t){j||(A(D),A(o.$$.fragment,t),A(E),A(S),A(T),j=!0)},o(t){B(D),B(o.$$.fragment,t),B(E),B(S),B(T),j=!1},d(t){t&&d(e),I&&I.d(),C&&C.d(),t&&d(l),t&&d(s),D&&D.d(),M(o),E&&E.d(),S&&S.d(),T&&T.d(),t&&d(p),t&&d(b)}}}function Gt(t,e,n){let{gaID:l}=e,{git_hash:s}=e;var r;try{null==(r=nt)&&(r={})}catch{r={}}l&&(t=>{function e(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],e("js",new Date),e("config",t);const n=document.createElement("script");n.src="https://www.googletagmanager.com/gtag/js?id="+t,document.body.appendChild(n)})(l);var o=s;return o=o.slice(0,7),t.$$set=t=>{"gaID"in t&&n(3,l=t.gaID),"git_hash"in t&&n(0,s=t.git_hash)},[s,r,o,l]}return new class extends N{constructor(t){super(),F(this,t,Gt,Bt,o,{gaID:3,git_hash:0})}}({target:document.body,props:{gaID:"UA-1020096-2",git_hash:"72c6adbb0018c7607444a8eae926a0a3d9fb9dc2"}})}();
//# sourceMappingURL=bundle.js.map
