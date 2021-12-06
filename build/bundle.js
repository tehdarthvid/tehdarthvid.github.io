var app=function(){"use strict";function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function l(){return Object.create(null)}function r(t){t.forEach(n)}function s(t){return"function"==typeof t}function o(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let i,c;function a(t,e){return i||(i=document.createElement("a")),i.href=e,t===i.href}function u(e,n,l){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const l=e.subscribe(...n);return l.unsubscribe?()=>l.unsubscribe():l}(n,l))}function d(t){return null==t?"":t}function f(t,e){t.appendChild(e)}function m(t,e,n){t.insertBefore(e,n||null)}function g(t){t.parentNode.removeChild(t)}function h(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function p(t){return document.createElement(t)}function $(t){return document.createTextNode(t)}function v(){return $(" ")}function b(t,e,n,l){return t.addEventListener(e,n,l),()=>t.removeEventListener(e,n,l)}function y(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function w(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function _(t,e,n,l){t.style.setProperty(e,n,l?"important":"")}function x(t){c=t}function L(){if(!c)throw new Error("Function called outside component initialization");return c}function R(t){L().$$.after_update.push(t)}const k=[],U=[],j=[],D=[],I=Promise.resolve();let C=!1;function E(t){j.push(t)}let S=!1;const z=new Set;function A(){if(!S){S=!0;do{for(let t=0;t<k.length;t+=1){const e=k[t];x(e),q(e.$$)}for(x(null),k.length=0;U.length;)U.pop()();for(let t=0;t<j.length;t+=1){const e=j[t];z.has(e)||(z.add(e),e())}j.length=0}while(k.length);for(;D.length;)D.pop()();C=!1,S=!1,z.clear()}}function q(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(E)}}const B=new Set;let X;function Y(){X={r:0,c:[],p:X}}function T(){X.r||r(X.c),X=X.p}function O(t,e){t&&t.i&&(B.delete(t),t.i(e))}function V(t,e,n,l){if(t&&t.o){if(B.has(t))return;B.add(t),X.c.push((()=>{B.delete(t),l&&(n&&t.d(1),l())})),t.o(e)}}function G(t,e){const n={},l={},r={$$scope:1};let s=t.length;for(;s--;){const o=t[s],i=e[s];if(i){for(const t in o)t in i||(l[t]=1);for(const t in i)r[t]||(n[t]=i[t],r[t]=1);t[s]=i}else for(const t in o)r[t]=1}for(const t in l)t in n||(n[t]=void 0);return n}function H(t){return"object"==typeof t&&null!==t?t:{}}function N(t){t&&t.c()}function P(t,e,l,o){const{fragment:i,on_mount:c,on_destroy:a,after_update:u}=t.$$;i&&i.m(e,l),o||E((()=>{const e=c.map(n).filter(s);a?a.push(...e):r(e),t.$$.on_mount=[]})),u.forEach(E)}function F(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function M(t,e){-1===t.$$.dirty[0]&&(k.push(t),C||(C=!0,I.then(A)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function W(e,n,s,o,i,a,u,d=[-1]){const f=c;x(e);const m=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:i,bound:l(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:n.context||[]),callbacks:l(),dirty:d,skip_bound:!1,root:n.target||f.$$.root};u&&u(m.root);let h=!1;if(m.ctx=s?s(e,n.props||{},((t,n,...l)=>{const r=l.length?l[0]:n;return m.ctx&&i(m.ctx[t],m.ctx[t]=r)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](r),h&&M(e,t)),n})):[],m.update(),h=!0,r(m.before_update),m.fragment=!!o&&o(m.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);m.fragment&&m.fragment.l(t),t.forEach(g)}else m.fragment&&m.fragment.c();n.intro&&O(e.$$.fragment),P(e,n.target,n.anchor,n.customElement),A()}x(f)}class J{$destroy(){F(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}var K="darthvid",Q="サイトへようこそ!",Z=[{title:"GitHub",url:"https://github.com/tehdarthvid"},{title:"LinkedIn",url:"https://www.linkedin.com/in/darthvid/"},{title:"Letterboxd",url:"https://letterboxd.com/darthvid/films/"},{title:"Twitter",url:"https://twitter.com/darthvid"}],tt=[{title:"influences",url:"https://dna.darthvid.com"},{title:"this site",url:"https://github.com/tehdarthvid/tehdarthvid.github.io/tree/dev"},{title:"log-wakatime.fish",url:"https://github.com/tehdarthvid/log-wakatime-fish"}],et=[{title:"JavaScript",url:"https://en.wikipedia.org/wiki/JavaScript",imgURL:"assets/images/javascript.svg"},{title:"Node.js",url:"https://nodejs.org/",imgURL:"assets/images/nodejs.svg"},{title:"Svelte",url:"https://svelte.dev/",imgURL:"assets/images/svelte.png"},{title:"Vue.js",url:"https://vuejs.org/",imgURL:"assets/images/vue.png"},{title:"Amazon Web Services",url:"https://aws.amazon.com/",imgURL:"assets/images/aws.png"},{title:"Google Cloud Platform",url:"https://cloud.google.com/",imgURL:"assets/images/gcp.png"},{title:"GitHub Actions",url:"https://github.com/features/actions",imgURL:"assets/images/gh-actions.svg"},{title:"C/C++",url:"http://csapp.cs.cmu.edu/3e/docs/chistory.html",imgURL:"assets/images/clang.jpg"},{title:"fish",url:"https://fishshell.com/",imgURL:"assets/images/fish.png"},{title:"Visual Studio Code",url:"https://code.visualstudio.com/",imgURL:"assets/images/vscode.png"},{title:"kitty",url:"https://sw.kovidgoyal.net/kitty/",imgURL:"assets/images/kitty.png"}],nt=[{title:"Go",url:"https://golang.org/",imgURL:"assets/images/go-gopher.png"},{title:"Deno",url:"https://deno.land/",imgURL:"assets/images/deno.png"},{title:"Blender",url:"https://www.blender.org/",imgURL:"assets/images/blender.png"},{title:"Rust",url:"https://www.rust-lang.org/",imgURL:"assets/images/rust-ferris.svg"},{title:"Flutter",url:"https://flutter.dev/",imgURL:"assets/images/flutter.svg"}],lt={name:K,welcome_msg:Q,links:Z,projects:tt,toybox:et,shelf:nt},rt=Object.freeze({__proto__:null,name:K,welcome_msg:Q,links:Z,projects:tt,toybox:et,shelf:nt,default:lt});function st(t){let e,n;return{c(){e=p("img"),y(e,"class","icon svelte-rs3oun"),y(e,"alt",t[0]),a(e.src,n=t[2])||y(e,"src",n)},m(t,n){m(t,e,n)},p(t,l){1&l&&y(e,"alt",t[0]),4&l&&!a(e.src,n=t[2])&&y(e,"src",n)},d(t){t&&g(e)}}}function ot(e){let n,l,r=e[3]&&st(e);return{c(){n=p("div"),l=p("a"),r&&r.c(),y(l,"href",e[1]),y(l,"title",e[0]),y(l,"target","_blank"),y(n,"class","icon svelte-rs3oun")},m(t,e){m(t,n,e),f(n,l),r&&r.m(l,null)},p(t,[e]){t[3]?r?r.p(t,e):(r=st(t),r.c(),r.m(l,null)):r&&(r.d(1),r=null),2&e&&y(l,"href",t[1]),1&e&&y(l,"title",t[0])},i:t,o:t,d(t){t&&g(n),r&&r.d()}}}function it(t,e,n){let{title:l}=e,{url:r}=e,{imgURL:s}=e,o=!1,i=null;R((()=>{!o&&s&&(i=new Image,i.onload=c,i.src=s)}));const c=()=>{n(3,o=!0)};return t.$$set=t=>{"title"in t&&n(0,l=t.title),"url"in t&&n(1,r=t.url),"imgURL"in t&&n(2,s=t.imgURL)},[l,r,s,o]}class ct extends J{constructor(t){super(),W(this,t,it,ot,o,{title:0,url:1,imgURL:2})}}function at(e){let n,l,r,s,o;return{c(){n=p("div"),l=$("【\n  "),r=p("a"),s=$(e[0]),o=$("\n  】"),y(r,"href",e[1]),y(n,"class","linkto")},m(t,e){m(t,n,e),f(n,l),f(n,r),f(r,s),f(n,o)},p(t,[e]){1&e&&w(s,t[0]),2&e&&y(r,"href",t[1])},i:t,o:t,d(t){t&&g(n)}}}function ut(t,e,n){let{title:l}=e,{url:r}=e;return t.$$set=t=>{"title"in t&&n(0,l=t.title),"url"in t&&n(1,r=t.url)},[l,r]}class dt extends J{constructor(t){super(),W(this,t,ut,at,o,{title:0,url:1})}}function ft(t){let e,n;return{c(){e=p("div"),y(e,"class",n=d(t[1]?"card-bg card-bg__fade-in":"card-bg")+" svelte-my5sl4"),_(e,"transform","translateX("+t[3]+"px) translateY("+t[2]+"px)"),_(e,"background-image","url("+t[0].imgURL+")")},m(t,n){m(t,e,n)},p(t,l){2&l&&n!==(n=d(t[1]?"card-bg card-bg__fade-in":"card-bg")+" svelte-my5sl4")&&y(e,"class",n),12&l&&_(e,"transform","translateX("+t[3]+"px) translateY("+t[2]+"px)"),1&l&&_(e,"background-image","url("+t[0].imgURL+")")},d(t){t&&g(e)}}}function mt(t){let e,n,l,r,s,o;return{c(){e=p("div"),n=p("video"),y(n,"class","center_video svelte-my5sl4"),a(n.src,l=t[0].vidURL)||y(n,"src",l),n.autoplay="true",n.loop="true",n.muted="true",y(e,"class",r=d(t[1]?"card-bg card-bg__fade-in":"card-bg")+" svelte-my5sl4"),_(e,"transform","translateX("+t[3]+"px) translateY("+t[2]+"px)")},m(l,r){m(l,e,r),f(e,n),s||(o=b(n,"playing",t[6]),s=!0)},p(t,s){1&s&&!a(n.src,l=t[0].vidURL)&&y(n,"src",l),2&s&&r!==(r=d(t[1]?"card-bg card-bg__fade-in":"card-bg")+" svelte-my5sl4")&&y(e,"class",r),12&s&&_(e,"transform","translateX("+t[3]+"px) translateY("+t[2]+"px)")},d(t){t&&g(e),s=!1,o()}}}function gt(t){let e,n,l,r,s;return{c(){e=p("div"),n=p("iframe"),y(n,"title",l=t[0].title?t[0].title:""),y(n,"class","center_video svelte-my5sl4"),y(n,"width","560"),y(n,"height","315"),a(n.src,r="https://www.youtube.com/embed/"+t[0].ytVideoID+"?rel=0&controls=0&autoplay=1&mute=1&loop=1&playlist="+t[0].ytVideoID)||y(n,"src",r),y(n,"frameborder","0"),y(n,"allow","accelerometer; autoplay; encrypted-media; gyroscope;\n          picture-in-picture"),y(n,"loop","1"),n.allowFullscreen=!0,y(n,"onstatechange",t[6]),y(e,"class",s=d((t[1],"card-bg card-bg__fade-in"))+" svelte-my5sl4"),_(e,"transform","translateX("+t[3]+"px) translateY("+t[2]+"px)")},m(t,l){m(t,e,l),f(e,n)},p(t,o){1&o&&l!==(l=t[0].title?t[0].title:"")&&y(n,"title",l),1&o&&!a(n.src,r="https://www.youtube.com/embed/"+t[0].ytVideoID+"?rel=0&controls=0&autoplay=1&mute=1&loop=1&playlist="+t[0].ytVideoID)&&y(n,"src",r),2&o&&s!==(s=d((t[1],"card-bg card-bg__fade-in"))+" svelte-my5sl4")&&y(e,"class",s),12&o&&_(e,"transform","translateX("+t[3]+"px) translateY("+t[2]+"px)")},d(t){t&&g(e)}}}function ht(e){let n,l,s,o,i,c,a,u,d,h,x,L=(e[0].title?e[0].title:"")+"",R=(e[0].date?e[0].date:"")+"";function k(t,e){return null!=t[0].ytVideoID?gt:null!=t[0].vidURL?mt:null!=t[0].imgURL?ft:void 0}let U=k(e),j=U&&U(e);return{c(){n=p("div"),l=p("div"),j&&j.c(),s=v(),o=p("div"),i=p("h1"),c=$(L),a=v(),u=p("p"),d=$(R),y(i,"class","svelte-my5sl4"),y(u,"class","svelte-my5sl4"),y(o,"class","card-info svelte-my5sl4"),y(l,"class","card svelte-my5sl4"),_(l,"transform","rotateY("+e[5]+"deg) rotateX("+e[4]+"deg)"),y(n,"class","card-wrap svelte-my5sl4")},m(t,r){m(t,n,r),f(n,l),j&&j.m(l,null),f(l,s),f(l,o),f(o,i),f(i,c),f(o,a),f(o,u),f(u,d),h||(x=[b(n,"mousemove",e[7]),b(n,"mouseenter",e[8]),b(n,"mouseleave",e[9]),b(n,"dblclick",e[10])],h=!0)},p(t,[e]){U===(U=k(t))&&j?j.p(t,e):(j&&j.d(1),j=U&&U(t),j&&(j.c(),j.m(l,s))),1&e&&L!==(L=(t[0].title?t[0].title:"")+"")&&w(c,L),1&e&&R!==(R=(t[0].date?t[0].date:"")+"")&&w(d,R),48&e&&_(l,"transform","rotateY("+t[5]+"deg) rotateX("+t[4]+"deg)")},i:t,o:t,d(t){t&&g(n),j&&j.d(),h=!1,r(x)}}}function pt(t,e,n){let l,r,s,o,{params:i}=e,c=0,a=0,u=!1,d=null,f=null;var m;R((()=>{i.vidURL||u||!i.imgURL||(d=new Image,d.onload=g,d.src=i.imgURL)})),m=()=>{clearTimeout(f)},L().$$.on_destroy.push(m);const g=()=>{n(1,u=!0)};return t.$$set=t=>{"params"in t&&n(0,i=t.params)},t.$$.update=()=>{2048&t.$$.dirty&&n(5,l=30*c),4096&t.$$.dirty&&n(4,r=-30*a),2048&t.$$.dirty&&n(3,s=-40*c),4096&t.$$.dirty&&n(2,o=-40*a)},[i,u,o,s,r,l,g,function(t){n(11,c=(t.pageX-this.offsetLeft-this.clientWidth/2)/this.clientWidth),n(12,a=(t.pageY-this.offsetTop-this.clientHeight/2)/this.clientHeight)},function(t){clearTimeout(f)},function(t){f=setTimeout((()=>{n(5,l=n(4,r=n(3,s=n(2,o=0))))}),1e3)},function(t){console.log(i.title+" dblclick"),window.open(i.url,"_blank")},c,a]}class $t extends J{constructor(t){super(),W(this,t,pt,ht,o,{params:0})}}const vt=[];function bt(e,n=t){let l;const r=new Set;function s(t){if(o(e,t)&&(e=t,l)){const t=!vt.length;for(const t of r)t[1](),vt.push(t,e);if(t){for(let t=0;t<vt.length;t+=2)vt[t][0](vt[t+1]);vt.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(o,i=t){const c=[o,i];return r.add(c),1===r.size&&(l=n(s)||t),o(e),()=>{r.delete(c),0===r.size&&(l(),l=null)}}}}var yt=[{title:"Blue Reflection: Second Light",url:"https://blue-reflection.com/",imgURL:"https://blue-reflection.com/img/02.png",date:"21 Oct 2021",added:"6 Dec 2021",ref:"https://twitter.com/BR_general_info/status/1450839399374065665"},{title:"Atelier Ryza 2",url:"http://www.gamecity.ne.jp/atelier/ryza2/",imgURL:"https://www.koeitecmoamerica.com/ryza2/img/top/about_img010_zoom.jpg",date:"3 Dec 2020",added:"6 Dec 2021",ref:"https://twitter.com/GustAtelierPR/status/1334150474266644482"},{title:"Mary Skelter: Nightmares",url:"https://www.compileheart.com/mary-skelter/",imgURL:"https://www.compileheart.com/mary-skelter/gallery/img/cg/1.jpg",date:"13 Oct 2016",added:"6 Dec 2021"},{title:"Selection Project",url:"http://pjselection.com/",imgURL:"http://pjselection.com/assets/top/v2/vis.jpg",date:"1 Oct 2021",added:"6 Dec 2021",ref:"http://pjselection.com/news.html#news-211001-1"}];const wt={subscribe:bt(null,(function(t){return function(t){t(yt)}(t),function(){}})).subscribe};function _t(t,e,n){const l=t.slice();return l[1]=e[n],l}function xt(t){let e,n,l,r,s=t[0],o=[];for(let e=0;e<s.length;e+=1)o[e]=Lt(_t(t,s,e));const i=t=>V(o[t],1,1,(()=>{o[t]=null}));return{c(){e=p("h2"),e.textContent="currently into",n=v(),l=p("div");for(let t=0;t<o.length;t+=1)o[t].c();y(l,"class","container svelte-dcexkb")},m(t,s){m(t,e,s),m(t,n,s),m(t,l,s);for(let t=0;t<o.length;t+=1)o[t].m(l,null);r=!0},p(t,e){if(1&e){let n;for(s=t[0],n=0;n<s.length;n+=1){const r=_t(t,s,n);o[n]?(o[n].p(r,e),O(o[n],1)):(o[n]=Lt(r),o[n].c(),O(o[n],1),o[n].m(l,null))}for(Y(),n=s.length;n<o.length;n+=1)i(n);T()}},i(t){if(!r){for(let t=0;t<s.length;t+=1)O(o[t]);r=!0}},o(t){o=o.filter(Boolean);for(let t=0;t<o.length;t+=1)V(o[t]);r=!1},d(t){t&&g(e),t&&g(n),t&&g(l),h(o,t)}}}function Lt(t){let e,n;return e=new $t({props:{params:{...t[1]}}}),{c(){N(e.$$.fragment)},m(t,l){P(e,t,l),n=!0},p(t,n){const l={};1&n&&(l.params={...t[1]}),e.$set(l)},i(t){n||(O(e.$$.fragment,t),n=!0)},o(t){V(e.$$.fragment,t),n=!1},d(t){F(e,t)}}}function Rt(t){let e,n,l=null!=t[0]&&xt(t);return{c(){e=p("div"),l&&l.c(),y(e,"id","ran-into")},m(t,r){m(t,e,r),l&&l.m(e,null),n=!0},p(t,[n]){null!=t[0]?l?(l.p(t,n),1&n&&O(l,1)):(l=xt(t),l.c(),O(l,1),l.m(e,null)):l&&(Y(),V(l,1,1,(()=>{l=null})),T())},i(t){n||(O(l),n=!0)},o(t){V(l),n=!1},d(t){t&&g(e),l&&l.d()}}}function kt(t,e,n){let l;return u(t,wt,(t=>n(0,l=t))),[l]}class Ut extends J{constructor(t){super(),W(this,t,kt,Rt,o,{})}}function jt(t,e,n){const l=t.slice();return l[4]=e[n],l}function Dt(t,e,n){const l=t.slice();return l[4]=e[n],l}function It(t,e,n){const l=t.slice();return l[4]=e[n],l}function Ct(t,e,n){const l=t.slice();return l[4]=e[n],l}function Et(t){let e,n,l=t[1].welcome_msg+"";return{c(){e=p("p"),n=$(l)},m(t,l){m(t,e,l),f(e,n)},p(t,e){2&e&&l!==(l=t[1].welcome_msg+"")&&w(n,l)},d(t){t&&g(e)}}}function St(t){let e,n,l,r=t[1].name+"";return{c(){e=p("h1"),n=p("a"),l=$(r),y(n,"href","/")},m(t,r){m(t,e,r),f(e,n),f(n,l)},p(t,e){2&e&&r!==(r=t[1].name+"")&&w(l,r)},d(t){t&&g(e)}}}function zt(t){let e,n,l,r,s,o=t[1].links,i=[];for(let e=0;e<o.length;e+=1)i[e]=At(Ct(t,o,e));const c=t=>V(i[t],1,1,(()=>{i[t]=null}));return{c(){e=p("div"),n=p("h2"),n.textContent="is at",l=v(),r=p("div");for(let t=0;t<i.length;t+=1)i[t].c();y(r,"class","wrapus svelte-1n2urqs"),y(e,"id","is-at")},m(t,o){m(t,e,o),f(e,n),f(e,l),f(e,r);for(let t=0;t<i.length;t+=1)i[t].m(r,null);s=!0},p(t,e){if(2&e){let n;for(o=t[1].links,n=0;n<o.length;n+=1){const l=Ct(t,o,n);i[n]?(i[n].p(l,e),O(i[n],1)):(i[n]=At(l),i[n].c(),O(i[n],1),i[n].m(r,null))}for(Y(),n=o.length;n<i.length;n+=1)c(n);T()}},i(t){if(!s){for(let t=0;t<o.length;t+=1)O(i[t]);s=!0}},o(t){i=i.filter(Boolean);for(let t=0;t<i.length;t+=1)V(i[t]);s=!1},d(t){t&&g(e),h(i,t)}}}function At(t){let n,l;const r=[t[4]];let s={};for(let t=0;t<r.length;t+=1)s=e(s,r[t]);return n=new dt({props:s}),{c(){N(n.$$.fragment)},m(t,e){P(n,t,e),l=!0},p(t,e){const l=2&e?G(r,[H(t[4])]):{};n.$set(l)},i(t){l||(O(n.$$.fragment,t),l=!0)},o(t){V(n.$$.fragment,t),l=!1},d(t){F(n,t)}}}function qt(t){let e,n,l,r,s,o=t[1].projects,i=[];for(let e=0;e<o.length;e+=1)i[e]=Bt(It(t,o,e));const c=t=>V(i[t],1,1,(()=>{i[t]=null}));return{c(){e=p("div"),n=p("h2"),n.textContent="dabbles in",l=v(),r=p("div");for(let t=0;t<i.length;t+=1)i[t].c();y(r,"class","wrapus svelte-1n2urqs"),y(e,"id","dabbles-in")},m(t,o){m(t,e,o),f(e,n),f(e,l),f(e,r);for(let t=0;t<i.length;t+=1)i[t].m(r,null);s=!0},p(t,e){if(2&e){let n;for(o=t[1].projects,n=0;n<o.length;n+=1){const l=It(t,o,n);i[n]?(i[n].p(l,e),O(i[n],1)):(i[n]=Bt(l),i[n].c(),O(i[n],1),i[n].m(r,null))}for(Y(),n=o.length;n<i.length;n+=1)c(n);T()}},i(t){if(!s){for(let t=0;t<o.length;t+=1)O(i[t]);s=!0}},o(t){i=i.filter(Boolean);for(let t=0;t<i.length;t+=1)V(i[t]);s=!1},d(t){t&&g(e),h(i,t)}}}function Bt(t){let n,l;const r=[t[4]];let s={};for(let t=0;t<r.length;t+=1)s=e(s,r[t]);return n=new dt({props:s}),{c(){N(n.$$.fragment)},m(t,e){P(n,t,e),l=!0},p(t,e){const l=2&e?G(r,[H(t[4])]):{};n.$set(l)},i(t){l||(O(n.$$.fragment,t),l=!0)},o(t){V(n.$$.fragment,t),l=!1},d(t){F(n,t)}}}function Xt(t){let e,n,l,r,s,o=t[1].toybox,i=[];for(let e=0;e<o.length;e+=1)i[e]=Yt(Dt(t,o,e));const c=t=>V(i[t],1,1,(()=>{i[t]=null}));return{c(){e=p("div"),n=p("h2"),n.textContent="plays with",l=v(),r=p("div");for(let t=0;t<i.length;t+=1)i[t].c();y(r,"class","wrapus svelte-1n2urqs"),y(e,"id","plays-with")},m(t,o){m(t,e,o),f(e,n),f(e,l),f(e,r);for(let t=0;t<i.length;t+=1)i[t].m(r,null);s=!0},p(t,e){if(2&e){let n;for(o=t[1].toybox,n=0;n<o.length;n+=1){const l=Dt(t,o,n);i[n]?(i[n].p(l,e),O(i[n],1)):(i[n]=Yt(l),i[n].c(),O(i[n],1),i[n].m(r,null))}for(Y(),n=o.length;n<i.length;n+=1)c(n);T()}},i(t){if(!s){for(let t=0;t<o.length;t+=1)O(i[t]);s=!0}},o(t){i=i.filter(Boolean);for(let t=0;t<i.length;t+=1)V(i[t]);s=!1},d(t){t&&g(e),h(i,t)}}}function Yt(t){let n,l;const r=[t[4]];let s={};for(let t=0;t<r.length;t+=1)s=e(s,r[t]);return n=new ct({props:s}),{c(){N(n.$$.fragment)},m(t,e){P(n,t,e),l=!0},p(t,e){const l=2&e?G(r,[H(t[4])]):{};n.$set(l)},i(t){l||(O(n.$$.fragment,t),l=!0)},o(t){V(n.$$.fragment,t),l=!1},d(t){F(n,t)}}}function Tt(t){let e,n,l,r,s,o=t[1].shelf,i=[];for(let e=0;e<o.length;e+=1)i[e]=Ot(jt(t,o,e));const c=t=>V(i[t],1,1,(()=>{i[t]=null}));return{c(){e=p("div"),n=p("h2"),n.textContent="wants to play",l=v(),r=p("div");for(let t=0;t<i.length;t+=1)i[t].c();y(r,"class","wrapus svelte-1n2urqs"),y(e,"id","wants-to-play")},m(t,o){m(t,e,o),f(e,n),f(e,l),f(e,r);for(let t=0;t<i.length;t+=1)i[t].m(r,null);s=!0},p(t,e){if(2&e){let n;for(o=t[1].shelf,n=0;n<o.length;n+=1){const l=jt(t,o,n);i[n]?(i[n].p(l,e),O(i[n],1)):(i[n]=Ot(l),i[n].c(),O(i[n],1),i[n].m(r,null))}for(Y(),n=o.length;n<i.length;n+=1)c(n);T()}},i(t){if(!s){for(let t=0;t<o.length;t+=1)O(i[t]);s=!0}},o(t){i=i.filter(Boolean);for(let t=0;t<i.length;t+=1)V(i[t]);s=!1},d(t){t&&g(e),h(i,t)}}}function Ot(t){let n,l;const r=[t[4]];let s={};for(let t=0;t<r.length;t+=1)s=e(s,r[t]);return n=new ct({props:s}),{c(){N(n.$$.fragment)},m(t,e){P(n,t,e),l=!0},p(t,e){const l=2&e?G(r,[H(t[4])]):{};n.$set(l)},i(t){l||(O(n.$$.fragment,t),l=!0)},o(t){V(n.$$.fragment,t),l=!1},d(t){F(n,t)}}}function Vt(t){let e,n,l,r,s,o,i,c,a,u,d,h,b,_,x,L,R,k,U,j,D=null!=t[1].welcome_msg&&Et(t),I=null!=t[1].name&&St(t),C=null!=t[1].links&&zt(t);o=new Ut({});let E=null!=t[1].projects&&qt(t),S=null!=t[1].toybox&&Xt(t),z=null!=t[1].shelf&&Tt(t);return{c(){e=p("header"),D&&D.c(),n=v(),I&&I.c(),l=v(),r=p("main"),C&&C.c(),s=v(),N(o.$$.fragment),i=v(),E&&E.c(),c=v(),S&&S.c(),a=v(),z&&z.c(),u=v(),d=p("footer"),h=p("div"),b=$(" \n    "),_=p("p"),_.innerHTML='<a href="https://github.com/tehdarthvid/tehdarthvid.github.io/tree/dev">source</a>',x=v(),L=p("a"),R=$("build "),k=$(t[2]),y(e,"class","svelte-1n2urqs"),y(r,"class","svelte-1n2urqs"),y(L,"href",U="https://github.com/tehdarthvid/tehdarthvid.github.io/commit/"+t[0]),y(h,"id","build"),y(h,"class","svelte-1n2urqs"),y(d,"class","svelte-1n2urqs")},m(t,g){m(t,e,g),D&&D.m(e,null),f(e,n),I&&I.m(e,null),m(t,l,g),m(t,r,g),C&&C.m(r,null),f(r,s),P(o,r,null),f(r,i),E&&E.m(r,null),f(r,c),S&&S.m(r,null),f(r,a),z&&z.m(r,null),m(t,u,g),m(t,d,g),f(d,h),f(h,b),f(h,_),f(h,x),f(h,L),f(L,R),f(L,k),j=!0},p(t,[l]){null!=t[1].welcome_msg?D?D.p(t,l):(D=Et(t),D.c(),D.m(e,n)):D&&(D.d(1),D=null),null!=t[1].name?I?I.p(t,l):(I=St(t),I.c(),I.m(e,null)):I&&(I.d(1),I=null),null!=t[1].links?C?(C.p(t,l),2&l&&O(C,1)):(C=zt(t),C.c(),O(C,1),C.m(r,s)):C&&(Y(),V(C,1,1,(()=>{C=null})),T()),null!=t[1].projects?E?(E.p(t,l),2&l&&O(E,1)):(E=qt(t),E.c(),O(E,1),E.m(r,c)):E&&(Y(),V(E,1,1,(()=>{E=null})),T()),null!=t[1].toybox?S?(S.p(t,l),2&l&&O(S,1)):(S=Xt(t),S.c(),O(S,1),S.m(r,a)):S&&(Y(),V(S,1,1,(()=>{S=null})),T()),null!=t[1].shelf?z?(z.p(t,l),2&l&&O(z,1)):(z=Tt(t),z.c(),O(z,1),z.m(r,null)):z&&(Y(),V(z,1,1,(()=>{z=null})),T()),(!j||4&l)&&w(k,t[2]),(!j||1&l&&U!==(U="https://github.com/tehdarthvid/tehdarthvid.github.io/commit/"+t[0]))&&y(L,"href",U)},i(t){j||(O(C),O(o.$$.fragment,t),O(E),O(S),O(z),j=!0)},o(t){V(C),V(o.$$.fragment,t),V(E),V(S),V(z),j=!1},d(t){t&&g(e),D&&D.d(),I&&I.d(),t&&g(l),t&&g(r),C&&C.d(),F(o),E&&E.d(),S&&S.d(),z&&z.d(),t&&g(u),t&&g(d)}}}function Gt(t,e,n){let{gaID:l}=e,{git_hash:r}=e;var s;try{null==(s=rt)&&(s={})}catch{s={}}l&&(t=>{function e(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],e("js",new Date),e("config",t);const n=document.createElement("script");n.src=`https://www.googletagmanager.com/gtag/js?id=${t}`,document.body.appendChild(n)})(l);var o=r;return o=o.slice(0,7),t.$$set=t=>{"gaID"in t&&n(3,l=t.gaID),"git_hash"in t&&n(0,r=t.git_hash)},[r,s,o,l]}let Ht="err1";Ht="UA-1020096-2";let Nt="err2";Nt="74598181e8a09b07d129be9e32a9fd91e82adab4";return new class extends J{constructor(t){super(),W(this,t,Gt,Vt,o,{gaID:3,git_hash:0})}}({target:document.body,props:{gaID:"UA-1020096-2",git_hash:"74598181e8a09b07d129be9e32a9fd91e82adab4"}})}();
//# sourceMappingURL=bundle.js.map
