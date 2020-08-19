var app=function(){"use strict";function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function l(){return Object.create(null)}function r(t){t.forEach(n)}function s(t){return"function"==typeof t}function o(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(e,n,l){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const l=e.subscribe(...n);return l.unsubscribe?()=>l.unsubscribe():l}(n,l))}function c(t){return null==t?"":t}function a(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function d(t){t.parentNode.removeChild(t)}function f(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function g(t){return document.createElement(t)}function m(t){return document.createTextNode(t)}function h(){return m(" ")}function p(t,e,n,l){return t.addEventListener(e,n,l),()=>t.removeEventListener(e,n,l)}function v(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function b(t,e,n,l){t.style.setProperty(e,n,l?"important":"")}let w;function y(t){w=t}function _(){if(!w)throw new Error("Function called outside component initialization");return w}function k(t){_().$$.after_update.push(t)}const x=[],L=[],R=[],U=[],j=Promise.resolve();let I=!1;function D(t){R.push(t)}let C=!1;const E=new Set;function T(){if(!C){C=!0;do{for(let t=0;t<x.length;t+=1){const e=x[t];y(e),X(e.$$)}for(x.length=0;L.length;)L.pop()();for(let t=0;t<R.length;t+=1){const e=R[t];E.has(e)||(E.add(e),e())}R.length=0}while(x.length);for(;U.length;)U.pop()();I=!1,C=!1,E.clear()}}function X(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(D)}}const q=new Set;let A;function V(){A={r:0,c:[],p:A}}function Y(){A.r||r(A.c),A=A.p}function B(t,e){t&&t.i&&(q.delete(t),t.i(e))}function S(t,e,n,l){if(t&&t.o){if(q.has(t))return;q.add(t),A.c.push(()=>{q.delete(t),l&&(n&&t.d(1),l())}),t.o(e)}}function G(t,e){const n={},l={},r={$$scope:1};let s=t.length;for(;s--;){const o=t[s],i=e[s];if(i){for(const t in o)t in i||(l[t]=1);for(const t in i)r[t]||(n[t]=i[t],r[t]=1);t[s]=i}else for(const t in o)r[t]=1}for(const t in l)t in n||(n[t]=void 0);return n}function H(t){return"object"==typeof t&&null!==t?t:{}}function O(t){t&&t.c()}function P(t,e,l){const{fragment:o,on_mount:i,on_destroy:c,after_update:a}=t.$$;o&&o.m(e,l),D(()=>{const e=i.map(n).filter(s);c?c.push(...e):r(e),t.$$.on_mount=[]}),a.forEach(D)}function z(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function F(t,e){-1===t.$$.dirty[0]&&(x.push(t),I||(I=!0,j.then(T)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function N(e,n,s,o,i,c,a=[-1]){const u=w;y(e);const f=n.props||{},g=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:i,bound:l(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:l(),dirty:a,skip_bound:!1};let m=!1;if(g.ctx=s?s(e,f,(t,n,...l)=>{const r=l.length?l[0]:n;return g.ctx&&i(g.ctx[t],g.ctx[t]=r)&&(!g.skip_bound&&g.bound[t]&&g.bound[t](r),m&&F(e,t)),n}):[],g.update(),m=!0,r(g.before_update),g.fragment=!!o&&o(g.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);g.fragment&&g.fragment.l(t),t.forEach(d)}else g.fragment&&g.fragment.c();n.intro&&B(e.$$.fragment),P(e,n.target,n.anchor),T()}y(u)}class J{$destroy(){z(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}var W=[{title:"GitHub",url:"https://github.com/tehdarthvid"},{title:"LinkedIn",url:"https://www.linkedin.com/in/darthvid/"},{title:"Letterboxd",url:"https://letterboxd.com/darthvid/films/"},{title:"Twitter",url:"https://twitter.com/darthvid"}],M=[{title:"influences",url:"https://dna.darthvid.com"},{title:"this site",url:"https://github.com/tehdarthvid/tehdarthvid.github.io/tree/dev"},{title:"log-wakatime.fish",url:"https://github.com/tehdarthvid/log-wakatime-fish"}],Q=[{title:"JavaScript",url:"https://en.wikipedia.org/wiki/JavaScript",imgURL:"assets/images/javascript.svg"},{title:"Node.js",url:"https://nodejs.org/",imgURL:"assets/images/nodejs.svg"},{title:"Svelte",url:"https://svelte.dev/",imgURL:"assets/images/svelte.png"},{title:"Vue.js",url:"https://vuejs.org/",imgURL:"assets/images/vue.png"},{title:"Amazon Web Services",url:"https://aws.amazon.com/",imgURL:"assets/images/aws.png"},{title:"Google Cloud Platform",url:"https://cloud.google.com/",imgURL:"assets/images/gcp.png"},{title:"GitHub Actions",url:"https://github.com/features/actions",imgURL:"assets/images/gh-actions.svg"},{title:"C/C++",url:"http://csapp.cs.cmu.edu/3e/docs/chistory.html",imgURL:"assets/images/clang.jpg"},{title:"fish",url:"https://fishshell.com/",imgURL:"assets/images/fish.png"},{title:"Visual Studio Code",url:"https://code.visualstudio.com/",imgURL:"assets/images/vscode.png"},{title:"kitty",url:"https://sw.kovidgoyal.net/kitty/",imgURL:"assets/images/kitty.png"}],K=[{title:"Go",url:"https://golang.org/",imgURL:"assets/images/go-gopher.png"},{title:"Deno",url:"https://deno.land/",imgURL:"assets/images/deno.png"},{title:"Blender",url:"https://www.blender.org/",imgURL:"assets/images/blender.png"},{title:"Flutter",url:"https://flutter.dev/",imgURL:"assets/images/flutter.svg"},{title:"Rust",url:"https://www.rust-lang.org/",imgURL:"assets/images/rust-ferris.svg"}],Z={name:"darthvid",welcome_msg:"サイトへようこそ!",links:W,projects:M,toybox:Q,shelf:K},tt=Object.freeze({__proto__:null,name:"darthvid",welcome_msg:"サイトへようこそ!",links:W,projects:M,toybox:Q,shelf:K,default:Z});function et(t){let e,n;return{c(){e=g("img"),v(e,"class","icon svelte-rs3oun"),v(e,"alt",t[0]),e.src!==(n=t[2])&&v(e,"src",n)},m(t,n){u(t,e,n)},p(t,l){1&l&&v(e,"alt",t[0]),4&l&&e.src!==(n=t[2])&&v(e,"src",n)},d(t){t&&d(e)}}}function nt(e){let n,l,r=e[3]&&et(e);return{c(){n=g("div"),l=g("a"),r&&r.c(),v(l,"href",e[1]),v(l,"title",e[0]),v(l,"target","_blank"),v(n,"class","icon svelte-rs3oun")},m(t,e){u(t,n,e),a(n,l),r&&r.m(l,null)},p(t,[e]){t[3]?r?r.p(t,e):(r=et(t),r.c(),r.m(l,null)):r&&(r.d(1),r=null),2&e&&v(l,"href",t[1]),1&e&&v(l,"title",t[0])},i:t,o:t,d(t){t&&d(n),r&&r.d()}}}function lt(t,e,n){let{title:l}=e,{url:r}=e,{imgURL:s}=e,o=!1,i=null;k(()=>{!o&&s&&(i=new Image,i.onload=c,i.src=s)});const c=()=>{n(3,o=!0)};return t.$$set=t=>{"title"in t&&n(0,l=t.title),"url"in t&&n(1,r=t.url),"imgURL"in t&&n(2,s=t.imgURL)},[l,r,s,o]}class rt extends J{constructor(t){super(),N(this,t,lt,nt,o,{title:0,url:1,imgURL:2})}}function st(e){let n,l,r,s,o;return{c(){n=g("div"),l=m("【\n  "),r=g("a"),s=m(e[0]),o=m("\n  】"),v(r,"href",e[1]),v(n,"class","linkto")},m(t,e){u(t,n,e),a(n,l),a(n,r),a(r,s),a(n,o)},p(t,[e]){1&e&&$(s,t[0]),2&e&&v(r,"href",t[1])},i:t,o:t,d(t){t&&d(n)}}}function ot(t,e,n){let{title:l}=e,{url:r}=e;return t.$$set=t=>{"title"in t&&n(0,l=t.title),"url"in t&&n(1,r=t.url)},[l,r]}class it extends J{constructor(t){super(),N(this,t,ot,st,o,{title:0,url:1})}}function ct(t){let e,n;return{c(){e=g("div"),v(e,"class",n=c(t[1]?"card-bg card-bg__fade-in":"card-bg")+" svelte-ka04s1"),b(e,"transform","translateX("+t[4]+"px) translateY("+t[5]+"px)"),b(e,"background-image","url("+t[0].imgURL+")")},m(t,n){u(t,e,n)},p(t,l){2&l&&n!==(n=c(t[1]?"card-bg card-bg__fade-in":"card-bg")+" svelte-ka04s1")&&v(e,"class",n),48&l&&b(e,"transform","translateX("+t[4]+"px) translateY("+t[5]+"px)"),1&l&&b(e,"background-image","url("+t[0].imgURL+")")},d(t){t&&d(e)}}}function at(t){let e,n,l,r,s,o;return{c(){e=g("div"),n=g("video"),v(n,"class","center_video svelte-ka04s1"),n.src!==(l=t[0].vidURL)&&v(n,"src",l),n.autoplay="true",n.loop="true",n.muted="true",v(e,"class",r=c(t[1]?"card-bg card-bg__fade-in":"card-bg")+" svelte-ka04s1"),b(e,"transform","translateX("+t[4]+"px) translateY("+t[5]+"px)")},m(l,r){u(l,e,r),a(e,n),s||(o=p(n,"playing",t[6]),s=!0)},p(t,s){1&s&&n.src!==(l=t[0].vidURL)&&v(n,"src",l),2&s&&r!==(r=c(t[1]?"card-bg card-bg__fade-in":"card-bg")+" svelte-ka04s1")&&v(e,"class",r),48&s&&b(e,"transform","translateX("+t[4]+"px) translateY("+t[5]+"px)")},d(t){t&&d(e),s=!1,o()}}}function ut(t){let e,n,l,r,s;return{c(){e=g("div"),n=g("iframe"),v(n,"title",l=t[0].title?t[0].title:""),v(n,"class","center_video svelte-ka04s1"),v(n,"width","560"),v(n,"height","315"),n.src!==(r="https://www.youtube.com/embed/"+t[0].ytVideoID+"?rel=0&controls=0&autoplay=1&mute=1&loop=1&playlist="+t[0].ytVideoID)&&v(n,"src",r),v(n,"frameborder","0"),v(n,"allow","accelerometer; autoplay; encrypted-media; gyroscope;\n          picture-in-picture"),v(n,"loop","1"),n.allowFullscreen=!0,v(n,"onstatechange",t[6]),v(e,"class",s=c((t[1],"card-bg card-bg__fade-in"))+" svelte-ka04s1"),b(e,"transform","translateX("+t[4]+"px) translateY("+t[5]+"px)")},m(t,l){u(t,e,l),a(e,n)},p(t,o){1&o&&l!==(l=t[0].title?t[0].title:"")&&v(n,"title",l),1&o&&n.src!==(r="https://www.youtube.com/embed/"+t[0].ytVideoID+"?rel=0&controls=0&autoplay=1&mute=1&loop=1&playlist="+t[0].ytVideoID)&&v(n,"src",r),2&o&&s!==(s=c((t[1],"card-bg card-bg__fade-in"))+" svelte-ka04s1")&&v(e,"class",s),48&o&&b(e,"transform","translateX("+t[4]+"px) translateY("+t[5]+"px)")},d(t){t&&d(e)}}}function dt(e){let n,l,s,o,i,c,f,w,y,_,k,x=(e[0].title?e[0].title:"")+"",L=(e[0].date?e[0].date:"")+"";function R(t,e){return null!=t[0].ytVideoID?ut:null!=t[0].vidURL?at:null!=t[0].imgURL?ct:void 0}let U=R(e),j=U&&U(e);return{c(){n=g("div"),l=g("div"),j&&j.c(),s=h(),o=g("div"),i=g("h1"),c=m(x),f=h(),w=g("p"),y=m(L),v(i,"class","svelte-ka04s1"),v(w,"class","svelte-ka04s1"),v(o,"class","card-info svelte-ka04s1"),v(l,"class","card svelte-ka04s1"),b(l,"transform","rotateY("+e[2]+"deg) rotateX("+e[3]+"deg)"),v(n,"class","card-wrap svelte-ka04s1")},m(t,r){u(t,n,r),a(n,l),j&&j.m(l,null),a(l,s),a(l,o),a(o,i),a(i,c),a(o,f),a(o,w),a(w,y),_||(k=[p(n,"mousemove",e[7]),p(n,"mouseenter",e[8]),p(n,"mouseleave",e[9]),p(n,"dblclick",e[10])],_=!0)},p(t,[e]){U===(U=R(t))&&j?j.p(t,e):(j&&j.d(1),j=U&&U(t),j&&(j.c(),j.m(l,s))),1&e&&x!==(x=(t[0].title?t[0].title:"")+"")&&$(c,x),1&e&&L!==(L=(t[0].date?t[0].date:"")+"")&&$(y,L),12&e&&b(l,"transform","rotateY("+t[2]+"deg) rotateX("+t[3]+"deg)")},i:t,o:t,d(t){t&&d(n),j&&j.d(),_=!1,r(k)}}}function ft(t,e,n){let{params:l}=e,r=0,s=0,o=!1,i=null,c=null;var a;k(()=>{l.vidURL||o||!l.imgURL||(i=new Image,i.onload=u,i.src=l.imgURL)}),a=()=>{clearTimeout(c)},_().$$.on_destroy.push(a);const u=()=>{n(1,o=!0)};let d,f,g,m;return t.$$set=t=>{"params"in t&&n(0,l=t.params)},t.$$.update=()=>{2048&t.$$.dirty&&n(2,d=30*r),4096&t.$$.dirty&&n(3,f=-30*s),2048&t.$$.dirty&&n(4,g=-40*r),4096&t.$$.dirty&&n(5,m=-40*s)},[l,o,d,f,g,m,u,function(t){n(11,r=(t.pageX-this.offsetLeft-this.clientWidth/2)/this.clientWidth),n(12,s=(t.pageY-this.offsetTop-this.clientHeight/2)/this.clientHeight)},function(t){clearTimeout(c)},function(t){c=setTimeout(()=>{n(2,d=n(3,f=n(4,g=n(5,m=0))))},1e3)},function(t){console.log(l.title+" dblclick"),window.open(l.url,"_blank")}]}class gt extends J{constructor(t){super(),N(this,t,ft,dt,o,{params:0})}}const mt=[];function ht(e,n=t){let l;const r=[];function s(t){if(o(e,t)&&(e=t,l)){const t=!mt.length;for(let t=0;t<r.length;t+=1){const n=r[t];n[1](),mt.push(n,e)}if(t){for(let t=0;t<mt.length;t+=2)mt[t][0](mt[t+1]);mt.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(o,i=t){const c=[o,i];return r.push(c),1===r.length&&(l=n(s)||t),o(e),()=>{const t=r.indexOf(c);-1!==t&&r.splice(t,1),0===r.length&&(l(),l=null)}}}}var pt=[{title:"Parkasaurus",url:"https://www.parkasaurusgame.com",ytVideoID:"1XhTG69PfE4",date:"13 Aug 2020"},{title:"Littlewood",url:"https://store.steampowered.com/app/894940/Littlewood/",ytVideoID:"_JxrF3QGBT8",date:"4 Aug 2020"}];const vt={subscribe:ht(null,(function(t){return function(t){t(pt)}(t),function(){}})).subscribe};function $t(t,e,n){const l=t.slice();return l[1]=e[n],l}function bt(t){let e,n,l,r,s=t[0],o=[];for(let e=0;e<s.length;e+=1)o[e]=wt($t(t,s,e));const i=t=>S(o[t],1,1,()=>{o[t]=null});return{c(){e=g("h2"),e.textContent="ran into",n=h(),l=g("div");for(let t=0;t<o.length;t+=1)o[t].c();v(l,"class","container svelte-dcexkb")},m(t,s){u(t,e,s),u(t,n,s),u(t,l,s);for(let t=0;t<o.length;t+=1)o[t].m(l,null);r=!0},p(t,e){if(1&e){let n;for(s=t[0],n=0;n<s.length;n+=1){const r=$t(t,s,n);o[n]?(o[n].p(r,e),B(o[n],1)):(o[n]=wt(r),o[n].c(),B(o[n],1),o[n].m(l,null))}for(V(),n=s.length;n<o.length;n+=1)i(n);Y()}},i(t){if(!r){for(let t=0;t<s.length;t+=1)B(o[t]);r=!0}},o(t){o=o.filter(Boolean);for(let t=0;t<o.length;t+=1)S(o[t]);r=!1},d(t){t&&d(e),t&&d(n),t&&d(l),f(o,t)}}}function wt(t){let e,n;return e=new gt({props:{params:{...t[1]}}}),{c(){O(e.$$.fragment)},m(t,l){P(e,t,l),n=!0},p(t,n){const l={};1&n&&(l.params={...t[1]}),e.$set(l)},i(t){n||(B(e.$$.fragment,t),n=!0)},o(t){S(e.$$.fragment,t),n=!1},d(t){z(e,t)}}}function yt(t){let e,n,l=null!=t[0]&&bt(t);return{c(){e=g("div"),l&&l.c(),v(e,"id","ran-into")},m(t,r){u(t,e,r),l&&l.m(e,null),n=!0},p(t,[n]){null!=t[0]?l?(l.p(t,n),1&n&&B(l,1)):(l=bt(t),l.c(),B(l,1),l.m(e,null)):l&&(V(),S(l,1,1,()=>{l=null}),Y())},i(t){n||(B(l),n=!0)},o(t){S(l),n=!1},d(t){t&&d(e),l&&l.d()}}}function _t(t,e,n){let l;return i(t,vt,t=>n(0,l=t)),[l]}class kt extends J{constructor(t){super(),N(this,t,_t,yt,o,{})}}function xt(t,e,n){const l=t.slice();return l[4]=e[n],l}function Lt(t,e,n){const l=t.slice();return l[4]=e[n],l}function Rt(t,e,n){const l=t.slice();return l[4]=e[n],l}function Ut(t,e,n){const l=t.slice();return l[4]=e[n],l}function jt(t){let e,n,l=t[1].welcome_msg+"";return{c(){e=g("p"),n=m(l)},m(t,l){u(t,e,l),a(e,n)},p(t,e){2&e&&l!==(l=t[1].welcome_msg+"")&&$(n,l)},d(t){t&&d(e)}}}function It(t){let e,n,l,r=t[1].name+"";return{c(){e=g("h1"),n=g("a"),l=m(r),v(n,"href","/")},m(t,r){u(t,e,r),a(e,n),a(n,l)},p(t,e){2&e&&r!==(r=t[1].name+"")&&$(l,r)},d(t){t&&d(e)}}}function Dt(t){let e,n,l,r,s,o=t[1].links,i=[];for(let e=0;e<o.length;e+=1)i[e]=Ct(Ut(t,o,e));const c=t=>S(i[t],1,1,()=>{i[t]=null});return{c(){e=g("div"),n=g("h2"),n.textContent="is at",l=h(),r=g("div");for(let t=0;t<i.length;t+=1)i[t].c();v(r,"class","wrapus svelte-1n2urqs"),v(e,"id","is-at")},m(t,o){u(t,e,o),a(e,n),a(e,l),a(e,r);for(let t=0;t<i.length;t+=1)i[t].m(r,null);s=!0},p(t,e){if(2&e){let n;for(o=t[1].links,n=0;n<o.length;n+=1){const l=Ut(t,o,n);i[n]?(i[n].p(l,e),B(i[n],1)):(i[n]=Ct(l),i[n].c(),B(i[n],1),i[n].m(r,null))}for(V(),n=o.length;n<i.length;n+=1)c(n);Y()}},i(t){if(!s){for(let t=0;t<o.length;t+=1)B(i[t]);s=!0}},o(t){i=i.filter(Boolean);for(let t=0;t<i.length;t+=1)S(i[t]);s=!1},d(t){t&&d(e),f(i,t)}}}function Ct(t){let n,l;const r=[t[4]];let s={};for(let t=0;t<r.length;t+=1)s=e(s,r[t]);return n=new it({props:s}),{c(){O(n.$$.fragment)},m(t,e){P(n,t,e),l=!0},p(t,e){const l=2&e?G(r,[H(t[4])]):{};n.$set(l)},i(t){l||(B(n.$$.fragment,t),l=!0)},o(t){S(n.$$.fragment,t),l=!1},d(t){z(n,t)}}}function Et(t){let e,n,l,r,s,o=t[1].projects,i=[];for(let e=0;e<o.length;e+=1)i[e]=Tt(Rt(t,o,e));const c=t=>S(i[t],1,1,()=>{i[t]=null});return{c(){e=g("div"),n=g("h2"),n.textContent="dabbles in",l=h(),r=g("div");for(let t=0;t<i.length;t+=1)i[t].c();v(r,"class","wrapus svelte-1n2urqs"),v(e,"id","dabbles-in")},m(t,o){u(t,e,o),a(e,n),a(e,l),a(e,r);for(let t=0;t<i.length;t+=1)i[t].m(r,null);s=!0},p(t,e){if(2&e){let n;for(o=t[1].projects,n=0;n<o.length;n+=1){const l=Rt(t,o,n);i[n]?(i[n].p(l,e),B(i[n],1)):(i[n]=Tt(l),i[n].c(),B(i[n],1),i[n].m(r,null))}for(V(),n=o.length;n<i.length;n+=1)c(n);Y()}},i(t){if(!s){for(let t=0;t<o.length;t+=1)B(i[t]);s=!0}},o(t){i=i.filter(Boolean);for(let t=0;t<i.length;t+=1)S(i[t]);s=!1},d(t){t&&d(e),f(i,t)}}}function Tt(t){let n,l;const r=[t[4]];let s={};for(let t=0;t<r.length;t+=1)s=e(s,r[t]);return n=new it({props:s}),{c(){O(n.$$.fragment)},m(t,e){P(n,t,e),l=!0},p(t,e){const l=2&e?G(r,[H(t[4])]):{};n.$set(l)},i(t){l||(B(n.$$.fragment,t),l=!0)},o(t){S(n.$$.fragment,t),l=!1},d(t){z(n,t)}}}function Xt(t){let e,n,l,r,s,o=t[1].toybox,i=[];for(let e=0;e<o.length;e+=1)i[e]=qt(Lt(t,o,e));const c=t=>S(i[t],1,1,()=>{i[t]=null});return{c(){e=g("div"),n=g("h2"),n.textContent="plays with",l=h(),r=g("div");for(let t=0;t<i.length;t+=1)i[t].c();v(r,"class","wrapus svelte-1n2urqs"),v(e,"id","plays-with")},m(t,o){u(t,e,o),a(e,n),a(e,l),a(e,r);for(let t=0;t<i.length;t+=1)i[t].m(r,null);s=!0},p(t,e){if(2&e){let n;for(o=t[1].toybox,n=0;n<o.length;n+=1){const l=Lt(t,o,n);i[n]?(i[n].p(l,e),B(i[n],1)):(i[n]=qt(l),i[n].c(),B(i[n],1),i[n].m(r,null))}for(V(),n=o.length;n<i.length;n+=1)c(n);Y()}},i(t){if(!s){for(let t=0;t<o.length;t+=1)B(i[t]);s=!0}},o(t){i=i.filter(Boolean);for(let t=0;t<i.length;t+=1)S(i[t]);s=!1},d(t){t&&d(e),f(i,t)}}}function qt(t){let n,l;const r=[t[4]];let s={};for(let t=0;t<r.length;t+=1)s=e(s,r[t]);return n=new rt({props:s}),{c(){O(n.$$.fragment)},m(t,e){P(n,t,e),l=!0},p(t,e){const l=2&e?G(r,[H(t[4])]):{};n.$set(l)},i(t){l||(B(n.$$.fragment,t),l=!0)},o(t){S(n.$$.fragment,t),l=!1},d(t){z(n,t)}}}function At(t){let e,n,l,r,s,o=t[1].shelf,i=[];for(let e=0;e<o.length;e+=1)i[e]=Vt(xt(t,o,e));const c=t=>S(i[t],1,1,()=>{i[t]=null});return{c(){e=g("div"),n=g("h2"),n.textContent="wants to play",l=h(),r=g("div");for(let t=0;t<i.length;t+=1)i[t].c();v(r,"class","wrapus svelte-1n2urqs"),v(e,"id","wants-to-play")},m(t,o){u(t,e,o),a(e,n),a(e,l),a(e,r);for(let t=0;t<i.length;t+=1)i[t].m(r,null);s=!0},p(t,e){if(2&e){let n;for(o=t[1].shelf,n=0;n<o.length;n+=1){const l=xt(t,o,n);i[n]?(i[n].p(l,e),B(i[n],1)):(i[n]=Vt(l),i[n].c(),B(i[n],1),i[n].m(r,null))}for(V(),n=o.length;n<i.length;n+=1)c(n);Y()}},i(t){if(!s){for(let t=0;t<o.length;t+=1)B(i[t]);s=!0}},o(t){i=i.filter(Boolean);for(let t=0;t<i.length;t+=1)S(i[t]);s=!1},d(t){t&&d(e),f(i,t)}}}function Vt(t){let n,l;const r=[t[4]];let s={};for(let t=0;t<r.length;t+=1)s=e(s,r[t]);return n=new rt({props:s}),{c(){O(n.$$.fragment)},m(t,e){P(n,t,e),l=!0},p(t,e){const l=2&e?G(r,[H(t[4])]):{};n.$set(l)},i(t){l||(B(n.$$.fragment,t),l=!0)},o(t){S(n.$$.fragment,t),l=!1},d(t){z(n,t)}}}function Yt(t){let e,n,l,r,s,o,i,c,f,p,b,w,y,_,k,x,L,R,U,j,I=null!=t[1].welcome_msg&&jt(t),D=null!=t[1].name&&It(t),C=null!=t[1].links&&Dt(t);o=new kt({});let E=null!=t[1].projects&&Et(t),T=null!=t[1].toybox&&Xt(t),X=null!=t[1].shelf&&At(t);return{c(){e=g("header"),I&&I.c(),n=h(),D&&D.c(),l=h(),r=g("main"),C&&C.c(),s=h(),O(o.$$.fragment),i=h(),E&&E.c(),c=h(),T&&T.c(),f=h(),X&&X.c(),p=h(),b=g("footer"),w=g("div"),y=m(" \n    "),_=g("p"),_.innerHTML='<a href="https://github.com/tehdarthvid/tehdarthvid.github.io/tree/dev">source</a>',k=h(),x=g("a"),L=m("build "),R=m(t[2]),v(e,"class","svelte-1n2urqs"),v(r,"class","svelte-1n2urqs"),v(x,"href",U="https://github.com/tehdarthvid/tehdarthvid.github.io/commit/"+t[0]),v(w,"id","build"),v(w,"class","svelte-1n2urqs"),v(b,"class","svelte-1n2urqs")},m(t,d){u(t,e,d),I&&I.m(e,null),a(e,n),D&&D.m(e,null),u(t,l,d),u(t,r,d),C&&C.m(r,null),a(r,s),P(o,r,null),a(r,i),E&&E.m(r,null),a(r,c),T&&T.m(r,null),a(r,f),X&&X.m(r,null),u(t,p,d),u(t,b,d),a(b,w),a(w,y),a(w,_),a(w,k),a(w,x),a(x,L),a(x,R),j=!0},p(t,[l]){null!=t[1].welcome_msg?I?I.p(t,l):(I=jt(t),I.c(),I.m(e,n)):I&&(I.d(1),I=null),null!=t[1].name?D?D.p(t,l):(D=It(t),D.c(),D.m(e,null)):D&&(D.d(1),D=null),null!=t[1].links?C?(C.p(t,l),2&l&&B(C,1)):(C=Dt(t),C.c(),B(C,1),C.m(r,s)):C&&(V(),S(C,1,1,()=>{C=null}),Y()),null!=t[1].projects?E?(E.p(t,l),2&l&&B(E,1)):(E=Et(t),E.c(),B(E,1),E.m(r,c)):E&&(V(),S(E,1,1,()=>{E=null}),Y()),null!=t[1].toybox?T?(T.p(t,l),2&l&&B(T,1)):(T=Xt(t),T.c(),B(T,1),T.m(r,f)):T&&(V(),S(T,1,1,()=>{T=null}),Y()),null!=t[1].shelf?X?(X.p(t,l),2&l&&B(X,1)):(X=At(t),X.c(),B(X,1),X.m(r,null)):X&&(V(),S(X,1,1,()=>{X=null}),Y()),(!j||4&l)&&$(R,t[2]),(!j||1&l&&U!==(U="https://github.com/tehdarthvid/tehdarthvid.github.io/commit/"+t[0]))&&v(x,"href",U)},i(t){j||(B(C),B(o.$$.fragment,t),B(E),B(T),B(X),j=!0)},o(t){S(C),S(o.$$.fragment,t),S(E),S(T),S(X),j=!1},d(t){t&&d(e),I&&I.d(),D&&D.d(),t&&d(l),t&&d(r),C&&C.d(),z(o),E&&E.d(),T&&T.d(),X&&X.d(),t&&d(p),t&&d(b)}}}function Bt(t,e,n){let{gaID:l}=e,{git_hash:r}=e;var s;try{null==(s=tt)&&(s={})}catch{s={}}l&&(t=>{function e(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],e("js",new Date),e("config",t);const n=document.createElement("script");n.src="https://www.googletagmanager.com/gtag/js?id="+t,document.body.appendChild(n)})(l);var o=r;return o=o.slice(0,7),t.$$set=t=>{"gaID"in t&&n(3,l=t.gaID),"git_hash"in t&&n(0,r=t.git_hash)},[r,s,o,l]}return new class extends J{constructor(t){super(),N(this,t,Bt,Yt,o,{gaID:3,git_hash:0})}}({target:document.body,props:{gaID:"UA-1020096-2",git_hash:"5ea0ae692e19951b786773d23d88bd86e2090d6a"}})}();
//# sourceMappingURL=bundle.js.map
