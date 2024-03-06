import{s as W,n as F,a as we,q as T,r as De,y as $e,z,c as ye,A as x}from"../chunks/scheduler.BcnLQ0w1.js";import{S as G,i as J,e as b,c as k,a as D,d as g,m as _,g as V,h as w,t as B,b as H,j as Z,s as C,f as R,u as U,n as O,r as v,v as M,p as $,q as X,l as K,B as Q,x as S,y as q,z as P,A as N,k as Le}from"../chunks/index.CANWArs9.js";import{j as Ve}from"../chunks/content.DpJDf042.js";import{r as je}from"../chunks/index.Dm0HEMZk.js";function Y(i){return(i==null?void 0:i.length)!==void 0?i:Array.from(i)}function ee(i,e){const t={},l={},a={$$scope:1};let n=i.length;for(;n--;){const f=i[n],o=e[n];if(o){for(const r in f)r in o||(l[r]=1);for(const r in o)a[r]||(t[r]=o[r],a[r]=1);i[n]=o}else for(const r in f)a[r]=1}for(const f in l)f in t||(t[f]=void 0);return t}function te(i){return typeof i=="object"&&i!==null?i:{}}function re(i){let e,t;return{c(){e=b("img"),this.h()},l(l){e=k(l,"IMG",{class:!0,alt:!0,src:!0}),this.h()},h(){_(e,"class","icon svelte-l3etzh"),_(e,"alt",i[0]),T(e.src,t=i[2])||_(e,"src",t)},m(l,a){V(l,e,a)},p(l,a){a&1&&_(e,"alt",l[0]),a&4&&!T(e.src,t=l[2])&&_(e,"src",t)},d(l){l&&g(e)}}}function Ce(i){let e,t,l=i[3]&&re(i);return{c(){e=b("div"),t=b("a"),l&&l.c(),this.h()},l(a){e=k(a,"DIV",{class:!0});var n=D(e);t=k(n,"A",{href:!0,title:!0,target:!0});var f=D(t);l&&l.l(f),f.forEach(g),n.forEach(g),this.h()},h(){_(t,"href",i[1]),_(t,"title",i[0]),_(t,"target","noopener noreferrer"),_(e,"class","icon svelte-l3etzh")},m(a,n){V(a,e,n),w(e,t),l&&l.m(t,null)},p(a,[n]){a[3]?l?l.p(a,n):(l=re(a),l.c(),l.m(t,null)):l&&(l.d(1),l=null),n&2&&_(t,"href",a[1]),n&1&&_(t,"title",a[0])},i:F,o:F,d(a){a&&g(e),l&&l.d()}}}function Re(i,e,t){let{title:l}=e,{url:a}=e,{imgURL:n}=e,f=!1,o=null;we(()=>{!f&&n&&(o=new Image,o.onload=r,o.src=n)});const r=()=>{t(3,f=!0)};return i.$$set=d=>{"title"in d&&t(0,l=d.title),"url"in d&&t(1,a=d.url),"imgURL"in d&&t(2,n=d.imgURL)},[l,a,n,f]}class Ee extends G{constructor(e){super(),J(this,e,Re,Ce,W,{title:0,url:1,imgURL:2})}}function Ue(i){let e,t,l,a,n;return{c(){e=b("div"),t=B(`【
	`),l=b("a"),a=B(i[0]),n=B(`
	】`),this.h()},l(f){e=k(f,"DIV",{class:!0});var o=D(e);t=H(o,`【
	`),l=k(o,"A",{href:!0});var r=D(l);a=H(r,i[0]),r.forEach(g),n=H(o,`
	】`),o.forEach(g),this.h()},h(){_(l,"href",i[1]),_(e,"class","linkto")},m(f,o){V(f,e,o),w(e,t),w(e,l),w(l,a),w(e,n)},p(f,[o]){o&1&&Z(a,f[0]),o&2&&_(l,"href",f[1])},i:F,o:F,d(f){f&&g(e)}}}function Me(i,e,t){let{title:l}=e,{url:a}=e;return i.$$set=n=>{"title"in n&&t(0,l=n.title),"url"in n&&t(1,a=n.url)},[l,a]}class Ie extends G{constructor(e){super(),J(this,e,Me,Ue,W,{title:0,url:1})}}function Xe(i){let e,t;return{c(){e=b("div"),this.h()},l(l){e=k(l,"DIV",{class:!0,style:!0}),D(e).forEach(g),this.h()},h(){_(e,"class",t=z(i[1]?"card-bg card-bg__fade-in":"card-bg")+" svelte-px2h6u"),U(e,"transform","translateX("+i[3]+"px) translateY("+i[2]+"px)"),U(e,"background-image","url("+i[0].imgURL+")")},m(l,a){V(l,e,a)},p(l,a){a&2&&t!==(t=z(l[1]?"card-bg card-bg__fade-in":"card-bg")+" svelte-px2h6u")&&_(e,"class",t),a&12&&U(e,"transform","translateX("+l[3]+"px) translateY("+l[2]+"px)"),a&1&&U(e,"background-image","url("+l[0].imgURL+")")},d(l){l&&g(e)}}}function Ye(i){let e,t,l,a,n,f;return{c(){e=b("div"),t=b("video"),this.h()},l(o){e=k(o,"DIV",{class:!0,style:!0});var r=D(e);t=k(r,"VIDEO",{class:!0,src:!0}),D(t).forEach(g),r.forEach(g),this.h()},h(){_(t,"class","center_video svelte-px2h6u"),T(t.src,l=i[0].vidURL)||_(t,"src",l),t.autoplay="true",t.loop="true",t.muted="true",_(e,"class",a=z(i[1]?"card-bg card-bg__fade-in":"card-bg")+" svelte-px2h6u"),U(e,"transform","translateX("+i[3]+"px) translateY("+i[2]+"px)")},m(o,r){V(o,e,r),w(e,t),n||(f=O(t,"playing",i[6]),n=!0)},p(o,r){r&1&&!T(t.src,l=o[0].vidURL)&&_(t,"src",l),r&2&&a!==(a=z(o[1]?"card-bg card-bg__fade-in":"card-bg")+" svelte-px2h6u")&&_(e,"class",a),r&12&&U(e,"transform","translateX("+o[3]+"px) translateY("+o[2]+"px)")},d(o){o&&g(e),n=!1,f()}}}function Ae(i){let e,t,l,a,n;return{c(){e=b("div"),t=b("iframe"),this.h()},l(f){e=k(f,"DIV",{class:!0,style:!0});var o=D(e);t=k(o,"IFRAME",{title:!0,class:!0,width:!0,height:!0,src:!0,frameborder:!0,allow:!0,loop:!0,onstatechange:!0}),D(t).forEach(g),o.forEach(g),this.h()},h(){_(t,"title",l=i[0].title?i[0].title:""),_(t,"class","center_video svelte-px2h6u"),_(t,"width","560"),_(t,"height","315"),T(t.src,a="https://www.youtube.com/embed/"+i[0].ytVideoID+"?rel=0&controls=0&autoplay=1&mute=1&loop=1&playlist="+i[0].ytVideoID)||_(t,"src",a),_(t,"frameborder","0"),_(t,"allow",`accelerometer; autoplay; encrypted-media; gyroscope;
          picture-in-picture`),_(t,"loop","1"),t.allowFullscreen=!0,_(t,"onstatechange",i[6]),_(e,"class",n=z((i[1],"card-bg card-bg__fade-in"))+" svelte-px2h6u"),U(e,"transform","translateX("+i[3]+"px) translateY("+i[2]+"px)")},m(f,o){V(f,e,o),w(e,t)},p(f,o){o&1&&l!==(l=f[0].title?f[0].title:"")&&_(t,"title",l),o&1&&!T(t.src,a="https://www.youtube.com/embed/"+f[0].ytVideoID+"?rel=0&controls=0&autoplay=1&mute=1&loop=1&playlist="+f[0].ytVideoID)&&_(t,"src",a),o&2&&n!==(n=z((f[1],"card-bg card-bg__fade-in"))+" svelte-px2h6u")&&_(e,"class",n),o&12&&U(e,"transform","translateX("+f[3]+"px) translateY("+f[2]+"px)")},d(f){f&&g(e)}}}function Be(i){let e,t,l,a,n,f=(i[0].title?i[0].title:"")+"",o,r,d,s=(i[0].date?i[0].date:"")+"",u,c,m,y;function L(h,E){if(h[0].ytVideoID!=null)return Ae;if(h[0].vidURL!=null)return Ye;if(h[0].imgURL!=null)return Xe}let I=L(i),p=I&&I(i);return{c(){e=b("div"),t=b("div"),p&&p.c(),l=C(),a=b("div"),n=b("h1"),o=B(f),r=C(),d=b("p"),u=B(s),this.h()},l(h){e=k(h,"DIV",{role:!0,"aria-label":!0,class:!0});var E=D(e);t=k(E,"DIV",{class:!0,style:!0});var A=D(t);p&&p.l(A),l=R(A),a=k(A,"DIV",{class:!0});var j=D(a);n=k(j,"H1",{class:!0});var le=D(n);o=H(le,f),le.forEach(g),r=R(j),d=k(j,"P",{class:!0});var ne=D(d);u=H(ne,s),ne.forEach(g),j.forEach(g),A.forEach(g),E.forEach(g),this.h()},h(){_(n,"class","svelte-px2h6u"),_(d,"class","svelte-px2h6u"),_(a,"class","card-info svelte-px2h6u"),_(t,"class","card svelte-px2h6u"),U(t,"transform","rotateY("+i[5]+"deg) rotateX("+i[4]+"deg)"),_(e,"role","img"),_(e,"aria-label",c=i[0].title?i[0].title:""),_(e,"class","card-wrap svelte-px2h6u")},m(h,E){V(h,e,E),w(e,t),p&&p.m(t,null),w(t,l),w(t,a),w(a,n),w(n,o),w(a,r),w(a,d),w(d,u),m||(y=[O(e,"mousemove",i[7]),O(e,"mouseenter",i[8]),O(e,"mouseleave",i[9]),O(e,"dblclick",i[10])],m=!0)},p(h,[E]){I===(I=L(h))&&p?p.p(h,E):(p&&p.d(1),p=I&&I(h),p&&(p.c(),p.m(t,l))),E&1&&f!==(f=(h[0].title?h[0].title:"")+"")&&Z(o,f),E&1&&s!==(s=(h[0].date?h[0].date:"")+"")&&Z(u,s),E&48&&U(t,"transform","rotateY("+h[5]+"deg) rotateX("+h[4]+"deg)"),E&1&&c!==(c=h[0].title?h[0].title:"")&&_(e,"aria-label",c)},i:F,o:F,d(h){h&&g(e),p&&p.d(),m=!1,De(y)}}}function He(i,e,t){let l,a,n,f,{params:o}=e,r=0,d=0,s=!1,u=null,c=null;we(()=>{!o.vidURL&&!s&&o.imgURL&&(u=new Image,u.onload=m,u.src=o.imgURL)}),$e(()=>{clearTimeout(c)});const m=()=>{t(1,s=!0)};function y(h){t(11,r=(h.pageX-this.offsetLeft-this.clientWidth/2)/this.clientWidth),t(12,d=(h.pageY-this.offsetTop-this.clientHeight/2)/this.clientHeight)}function L(h){clearTimeout(c)}function I(h){c=setTimeout(()=>{t(5,l=t(4,a=t(3,n=t(2,f=0))))},1e3)}function p(h){console.log(o.title+" dblclick"),window.open(o.url,"_blank")}return i.$$set=h=>{"params"in h&&t(0,o=h.params)},i.$$.update=()=>{i.$$.dirty&2048&&t(5,l=r*30),i.$$.dirty&4096&&t(4,a=d*-30),i.$$.dirty&2048&&t(3,n=r*-40),i.$$.dirty&4096&&t(2,f=d*-40)},[o,s,f,n,a,l,m,y,L,I,p,r,d]}class Fe extends G{constructor(e){super(),J(this,e,He,Be,W,{params:0})}}const Te=[{title:"Dune Messiah",url:"https://en.wikipedia.org/wiki/Dune_Messiah",imgURL:"https://upload.wikimedia.org/wikipedia/en/4/46/Dune_Messiah-Frank_Herbert_%281969%29_First_edition.jpg",date:"1969",added:"4 Mar 2024"},{title:"Balatro",url:"https://www.playbalatro.com/",imgURL:"https://static0.hardcoregamerimages.com/wordpress/wp-content/uploads/2024/02/balatro-cover-art.jpg",date:"20 Feb 2024",added:"4 Mar 2024"},{title:"Blue Archive",url:"https://bluearchive.nexon.com/",imgURL:"https://static.wikia.nocookie.net/blue-archive/images/4/44/BA_Visual_1.png",date:"4 Feb 2021",added:"8 Mar 2022",ref:"https://www.siliconera.com/blue-archive-release-date-set-for-february-2021-in-japan/"}];function ze(i){i(Te)}const Se=je(null,function(e){return ze(e),function(){}});function ie(i,e,t){const l=i.slice();return l[1]=e[t],l}function ae(i){let e,t="currently into",l,a,n,f=Y(i[0]),o=[];for(let d=0;d<f.length;d+=1)o[d]=se(ie(i,f,d));const r=d=>$(o[d],1,1,()=>{o[d]=null});return{c(){e=b("h2"),e.textContent=t,l=C(),a=b("div");for(let d=0;d<o.length;d+=1)o[d].c();this.h()},l(d){e=k(d,"H2",{"data-svelte-h":!0}),K(e)!=="svelte-riutjy"&&(e.textContent=t),l=R(d),a=k(d,"DIV",{class:!0});var s=D(a);for(let u=0;u<o.length;u+=1)o[u].l(s);s.forEach(g),this.h()},h(){_(a,"class","container svelte-p3bha1")},m(d,s){V(d,e,s),V(d,l,s),V(d,a,s);for(let u=0;u<o.length;u+=1)o[u]&&o[u].m(a,null);n=!0},p(d,s){if(s&1){f=Y(d[0]);let u;for(u=0;u<f.length;u+=1){const c=ie(d,f,u);o[u]?(o[u].p(c,s),v(o[u],1)):(o[u]=se(c),o[u].c(),v(o[u],1),o[u].m(a,null))}for(M(),u=f.length;u<o.length;u+=1)r(u);X()}},i(d){if(!n){for(let s=0;s<f.length;s+=1)v(o[s]);n=!0}},o(d){o=o.filter(Boolean);for(let s=0;s<o.length;s+=1)$(o[s]);n=!1},d(d){d&&(g(e),g(l),g(a)),Q(o,d)}}}function se(i){let e,t;return e=new Fe({props:{params:{...i[1]}}}),{c(){S(e.$$.fragment)},l(l){q(e.$$.fragment,l)},m(l,a){P(e,l,a),t=!0},p(l,a){const n={};a&1&&(n.params={...l[1]}),e.$set(n)},i(l){t||(v(e.$$.fragment,l),t=!0)},o(l){$(e.$$.fragment,l),t=!1},d(l){N(e,l)}}}function qe(i){let e,t,l=i[0]!=null&&ae(i);return{c(){e=b("div"),l&&l.c(),this.h()},l(a){e=k(a,"DIV",{id:!0});var n=D(e);l&&l.l(n),n.forEach(g),this.h()},h(){_(e,"id","ran-into")},m(a,n){V(a,e,n),l&&l.m(e,null),t=!0},p(a,[n]){a[0]!=null?l?(l.p(a,n),n&1&&v(l,1)):(l=ae(a),l.c(),v(l,1),l.m(e,null)):l&&(M(),$(l,1,1,()=>{l=null}),X())},i(a){t||(v(l),t=!0)},o(a){$(l),t=!1},d(a){a&&g(e),l&&l.d()}}}function Pe(i,e,t){let l;return ye(i,Se,a=>t(0,l=a)),[l]}class Ne extends G{constructor(e){super(),J(this,e,Pe,qe,W,{})}}function oe(i,e,t){const l=i.slice();return l[1]=e[t],l}function fe(i,e,t){const l=i.slice();return l[1]=e[t],l}function ce(i,e,t){const l=i.slice();return l[1]=e[t],l}function ue(i,e,t){const l=i.slice();return l[1]=e[t],l}function he(i){let e,t,l=i[0].name+"",a;return{c(){e=b("h1"),t=b("a"),a=B(l),this.h()},l(n){e=k(n,"H1",{});var f=D(e);t=k(f,"A",{href:!0});var o=D(t);a=H(o,l),o.forEach(g),f.forEach(g),this.h()},h(){_(t,"href","/")},m(n,f){V(n,e,f),w(e,t),w(t,a)},p(n,f){f&1&&l!==(l=n[0].name+"")&&Z(a,l)},d(n){n&&g(e)}}}function de(i){let e,t,l="is at",a,n,f,o=Y(i[0].links),r=[];for(let s=0;s<o.length;s+=1)r[s]=_e(ue(i,o,s));const d=s=>$(r[s],1,1,()=>{r[s]=null});return{c(){e=b("div"),t=b("h2"),t.textContent=l,a=C(),n=b("div");for(let s=0;s<r.length;s+=1)r[s].c();this.h()},l(s){e=k(s,"DIV",{id:!0});var u=D(e);t=k(u,"H2",{"data-svelte-h":!0}),K(t)!=="svelte-1739n49"&&(t.textContent=l),a=R(u),n=k(u,"DIV",{class:!0});var c=D(n);for(let m=0;m<r.length;m+=1)r[m].l(c);c.forEach(g),u.forEach(g),this.h()},h(){_(n,"class","wrapus svelte-1frrjok"),_(e,"id","is-at")},m(s,u){V(s,e,u),w(e,t),w(e,a),w(e,n);for(let c=0;c<r.length;c+=1)r[c]&&r[c].m(n,null);f=!0},p(s,u){if(u&1){o=Y(s[0].links);let c;for(c=0;c<o.length;c+=1){const m=ue(s,o,c);r[c]?(r[c].p(m,u),v(r[c],1)):(r[c]=_e(m),r[c].c(),v(r[c],1),r[c].m(n,null))}for(M(),c=o.length;c<r.length;c+=1)d(c);X()}},i(s){if(!f){for(let u=0;u<o.length;u+=1)v(r[u]);f=!0}},o(s){r=r.filter(Boolean);for(let u=0;u<r.length;u+=1)$(r[u]);f=!1},d(s){s&&g(e),Q(r,s)}}}function _e(i){let e,t;const l=[i[1]];let a={};for(let n=0;n<l.length;n+=1)a=x(a,l[n]);return e=new Ie({props:a}),{c(){S(e.$$.fragment)},l(n){q(e.$$.fragment,n)},m(n,f){P(e,n,f),t=!0},p(n,f){const o=f&1?ee(l,[te(n[1])]):{};e.$set(o)},i(n){t||(v(e.$$.fragment,n),t=!0)},o(n){$(e.$$.fragment,n),t=!1},d(n){N(e,n)}}}function me(i){let e,t,l="dabbles in",a,n,f,o=Y(i[0].projects),r=[];for(let s=0;s<o.length;s+=1)r[s]=ge(ce(i,o,s));const d=s=>$(r[s],1,1,()=>{r[s]=null});return{c(){e=b("div"),t=b("h2"),t.textContent=l,a=C(),n=b("div");for(let s=0;s<r.length;s+=1)r[s].c();this.h()},l(s){e=k(s,"DIV",{id:!0});var u=D(e);t=k(u,"H2",{"data-svelte-h":!0}),K(t)!=="svelte-1poc7h2"&&(t.textContent=l),a=R(u),n=k(u,"DIV",{class:!0});var c=D(n);for(let m=0;m<r.length;m+=1)r[m].l(c);c.forEach(g),u.forEach(g),this.h()},h(){_(n,"class","wrapus svelte-1frrjok"),_(e,"id","dabbles-in")},m(s,u){V(s,e,u),w(e,t),w(e,a),w(e,n);for(let c=0;c<r.length;c+=1)r[c]&&r[c].m(n,null);f=!0},p(s,u){if(u&1){o=Y(s[0].projects);let c;for(c=0;c<o.length;c+=1){const m=ce(s,o,c);r[c]?(r[c].p(m,u),v(r[c],1)):(r[c]=ge(m),r[c].c(),v(r[c],1),r[c].m(n,null))}for(M(),c=o.length;c<r.length;c+=1)d(c);X()}},i(s){if(!f){for(let u=0;u<o.length;u+=1)v(r[u]);f=!0}},o(s){r=r.filter(Boolean);for(let u=0;u<r.length;u+=1)$(r[u]);f=!1},d(s){s&&g(e),Q(r,s)}}}function ge(i){let e,t;const l=[i[1]];let a={};for(let n=0;n<l.length;n+=1)a=x(a,l[n]);return e=new Ie({props:a}),{c(){S(e.$$.fragment)},l(n){q(e.$$.fragment,n)},m(n,f){P(e,n,f),t=!0},p(n,f){const o=f&1?ee(l,[te(n[1])]):{};e.$set(o)},i(n){t||(v(e.$$.fragment,n),t=!0)},o(n){$(e.$$.fragment,n),t=!1},d(n){N(e,n)}}}function pe(i){let e,t,l="plays with",a,n,f,o=Y(i[0].toybox),r=[];for(let s=0;s<o.length;s+=1)r[s]=ve(fe(i,o,s));const d=s=>$(r[s],1,1,()=>{r[s]=null});return{c(){e=b("div"),t=b("h2"),t.textContent=l,a=C(),n=b("div");for(let s=0;s<r.length;s+=1)r[s].c();this.h()},l(s){e=k(s,"DIV",{id:!0});var u=D(e);t=k(u,"H2",{"data-svelte-h":!0}),K(t)!=="svelte-ge4ssj"&&(t.textContent=l),a=R(u),n=k(u,"DIV",{class:!0});var c=D(n);for(let m=0;m<r.length;m+=1)r[m].l(c);c.forEach(g),u.forEach(g),this.h()},h(){_(n,"class","wrapus svelte-1frrjok"),_(e,"id","plays-with")},m(s,u){V(s,e,u),w(e,t),w(e,a),w(e,n);for(let c=0;c<r.length;c+=1)r[c]&&r[c].m(n,null);f=!0},p(s,u){if(u&1){o=Y(s[0].toybox);let c;for(c=0;c<o.length;c+=1){const m=fe(s,o,c);r[c]?(r[c].p(m,u),v(r[c],1)):(r[c]=ve(m),r[c].c(),v(r[c],1),r[c].m(n,null))}for(M(),c=o.length;c<r.length;c+=1)d(c);X()}},i(s){if(!f){for(let u=0;u<o.length;u+=1)v(r[u]);f=!0}},o(s){r=r.filter(Boolean);for(let u=0;u<r.length;u+=1)$(r[u]);f=!1},d(s){s&&g(e),Q(r,s)}}}function ve(i){let e,t;const l=[i[1]];let a={};for(let n=0;n<l.length;n+=1)a=x(a,l[n]);return e=new Ee({props:a}),{c(){S(e.$$.fragment)},l(n){q(e.$$.fragment,n)},m(n,f){P(e,n,f),t=!0},p(n,f){const o=f&1?ee(l,[te(n[1])]):{};e.$set(o)},i(n){t||(v(e.$$.fragment,n),t=!0)},o(n){$(e.$$.fragment,n),t=!1},d(n){N(e,n)}}}function be(i){let e,t,l="wants to play",a,n,f,o=Y(i[0].shelf),r=[];for(let s=0;s<o.length;s+=1)r[s]=ke(oe(i,o,s));const d=s=>$(r[s],1,1,()=>{r[s]=null});return{c(){e=b("div"),t=b("h2"),t.textContent=l,a=C(),n=b("div");for(let s=0;s<r.length;s+=1)r[s].c();this.h()},l(s){e=k(s,"DIV",{id:!0});var u=D(e);t=k(u,"H2",{"data-svelte-h":!0}),K(t)!=="svelte-1vzk40g"&&(t.textContent=l),a=R(u),n=k(u,"DIV",{class:!0});var c=D(n);for(let m=0;m<r.length;m+=1)r[m].l(c);c.forEach(g),u.forEach(g),this.h()},h(){_(n,"class","wrapus svelte-1frrjok"),_(e,"id","wants-to-play")},m(s,u){V(s,e,u),w(e,t),w(e,a),w(e,n);for(let c=0;c<r.length;c+=1)r[c]&&r[c].m(n,null);f=!0},p(s,u){if(u&1){o=Y(s[0].shelf);let c;for(c=0;c<o.length;c+=1){const m=oe(s,o,c);r[c]?(r[c].p(m,u),v(r[c],1)):(r[c]=ke(m),r[c].c(),v(r[c],1),r[c].m(n,null))}for(M(),c=o.length;c<r.length;c+=1)d(c);X()}},i(s){if(!f){for(let u=0;u<o.length;u+=1)v(r[u]);f=!0}},o(s){r=r.filter(Boolean);for(let u=0;u<r.length;u+=1)$(r[u]);f=!1},d(s){s&&g(e),Q(r,s)}}}function ke(i){let e,t;const l=[i[1]];let a={};for(let n=0;n<l.length;n+=1)a=x(a,l[n]);return e=new Ee({props:a}),{c(){S(e.$$.fragment)},l(n){q(e.$$.fragment,n)},m(n,f){P(e,n,f),t=!0},p(n,f){const o=f&1?ee(l,[te(n[1])]):{};e.$set(o)},i(n){t||(v(e.$$.fragment,n),t=!0)},o(n){$(e.$$.fragment,n),t=!1},d(n){N(e,n)}}}function Oe(i){let e,t,l,a,n,f,o,r,d,s,u,c,m=i[0].name!=null&&he(i),y=i[0].links!=null&&de(i);r=new Ne({});let L=i[0].projects!=null&&me(i),I=i[0].toybox!=null&&pe(i),p=i[0].shelf!=null&&be(i);return{c(){e=b("meta"),t=b("link"),l=C(),a=b("header"),m&&m.c(),n=C(),f=b("section"),y&&y.c(),o=C(),S(r.$$.fragment),d=C(),L&&L.c(),s=C(),I&&I.c(),u=C(),p&&p.c(),this.h()},l(h){const E=Le("svelte-1ou5f5j",document.head);e=k(E,"META",{name:!0,content:!0}),t=k(E,"LINK",{href:!0,rel:!0}),E.forEach(g),l=R(h),a=k(h,"HEADER",{});var A=D(a);m&&m.l(A),A.forEach(g),n=R(h),f=k(h,"SECTION",{});var j=D(f);y&&y.l(j),o=R(j),q(r.$$.fragment,j),d=R(j),L&&L.l(j),s=R(j),I&&I.l(j),u=R(j),p&&p.l(j),j.forEach(g),this.h()},h(){document.title="darthvid",_(e,"name","description"),_(e,"content","a personal homepage"),_(t,"href","https://fonts.googleapis.com/css?family=Source+Code+Pro|Noto+Sans+JP&display=swap"),_(t,"rel","stylesheet")},m(h,E){w(document.head,e),w(document.head,t),V(h,l,E),V(h,a,E),m&&m.m(a,null),V(h,n,E),V(h,f,E),y&&y.m(f,null),w(f,o),P(r,f,null),w(f,d),L&&L.m(f,null),w(f,s),I&&I.m(f,null),w(f,u),p&&p.m(f,null),c=!0},p(h,[E]){h[0].name!=null?m?m.p(h,E):(m=he(h),m.c(),m.m(a,null)):m&&(m.d(1),m=null),h[0].links!=null?y?(y.p(h,E),E&1&&v(y,1)):(y=de(h),y.c(),v(y,1),y.m(f,o)):y&&(M(),$(y,1,1,()=>{y=null}),X()),h[0].projects!=null?L?(L.p(h,E),E&1&&v(L,1)):(L=me(h),L.c(),v(L,1),L.m(f,s)):L&&(M(),$(L,1,1,()=>{L=null}),X()),h[0].toybox!=null?I?(I.p(h,E),E&1&&v(I,1)):(I=pe(h),I.c(),v(I,1),I.m(f,u)):I&&(M(),$(I,1,1,()=>{I=null}),X()),h[0].shelf!=null?p?(p.p(h,E),E&1&&v(p,1)):(p=be(h),p.c(),v(p,1),p.m(f,null)):p&&(M(),$(p,1,1,()=>{p=null}),X())},i(h){c||(v(y),v(r.$$.fragment,h),v(L),v(I),v(p),c=!0)},o(h){$(y),$(r.$$.fragment,h),$(L),$(I),$(p),c=!1},d(h){h&&(g(l),g(a),g(n),g(f)),g(e),g(t),m&&m.d(),y&&y.d(),N(r),L&&L.d(),I&&I.d(),p&&p.d()}}}function We(i,e,t){var l;try{l=Ve,l==null&&(l={})}catch{l={}}return[l]}class Ze extends G{constructor(e){super(),J(this,e,We,Oe,W,{})}}export{Ze as component};