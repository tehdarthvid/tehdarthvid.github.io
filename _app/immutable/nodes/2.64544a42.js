import{s as S,n as X,a as be,c as A,r as De,h as ye,i as B,f as Ie,j as K}from"../chunks/scheduler.bfcbee06.js";import{S as F,i as N,g as k,h as w,j as E,f as m,k as _,a as $,x as b,m as z,n as P,o as ee,s as V,c as j,l as C,A as O,d as g,p as U,t as y,b as R,y as G,B as q,r as Y,u as T,v as H,w as J,z as Ee}from"../chunks/index.29550c1b.js";import{j as Le}from"../chunks/content.2787c05c.js";import{r as $e}from"../chunks/index.c62c1896.js";function M(a){return(a==null?void 0:a.length)!==void 0?a:Array.from(a)}function Z(a,e){const t={},l={},r={$$scope:1};let n=a.length;for(;n--;){const u=a[n],f=e[n];if(f){for(const i in u)i in f||(l[i]=1);for(const i in f)r[i]||(t[i]=f[i],r[i]=1);a[n]=f}else for(const i in u)r[i]=1}for(const u in l)u in t||(t[u]=void 0);return t}function x(a){return typeof a=="object"&&a!==null?a:{}}function ne(a){let e,t;return{c(){e=k("img"),this.h()},l(l){e=w(l,"IMG",{class:!0,alt:!0,src:!0}),this.h()},h(){_(e,"class","icon svelte-l3etzh"),_(e,"alt",a[0]),A(e.src,t=a[2])||_(e,"src",t)},m(l,r){$(l,e,r)},p(l,r){r&1&&_(e,"alt",l[0]),r&4&&!A(e.src,t=l[2])&&_(e,"src",t)},d(l){l&&m(e)}}}function Ve(a){let e,t,l=a[3]&&ne(a);return{c(){e=k("div"),t=k("a"),l&&l.c(),this.h()},l(r){e=w(r,"DIV",{class:!0});var n=E(e);t=w(n,"A",{href:!0,title:!0,target:!0});var u=E(t);l&&l.l(u),u.forEach(m),n.forEach(m),this.h()},h(){_(t,"href",a[1]),_(t,"title",a[0]),_(t,"target","noopener noreferrer"),_(e,"class","icon svelte-l3etzh")},m(r,n){$(r,e,n),b(e,t),l&&l.m(t,null)},p(r,[n]){r[3]?l?l.p(r,n):(l=ne(r),l.c(),l.m(t,null)):l&&(l.d(1),l=null),n&2&&_(t,"href",r[1]),n&1&&_(t,"title",r[0])},i:X,o:X,d(r){r&&m(e),l&&l.d()}}}function je(a,e,t){let{title:l}=e,{url:r}=e,{imgURL:n}=e,u=!1,f=null;be(()=>{!u&&n&&(f=new Image,f.onload=i,f.src=n)});const i=()=>{t(3,u=!0)};return a.$$set=d=>{"title"in d&&t(0,l=d.title),"url"in d&&t(1,r=d.url),"imgURL"in d&&t(2,n=d.imgURL)},[l,r,n,u]}class ke extends F{constructor(e){super(),N(this,e,je,Ve,S,{title:0,url:1,imgURL:2})}}function Ce(a){let e,t,l,r,n;return{c(){e=k("div"),t=z(`【
	`),l=k("a"),r=z(a[0]),n=z(`
	】`),this.h()},l(u){e=w(u,"DIV",{class:!0});var f=E(e);t=P(f,`【
	`),l=w(f,"A",{href:!0});var i=E(l);r=P(i,a[0]),i.forEach(m),n=P(f,`
	】`),f.forEach(m),this.h()},h(){_(l,"href",a[1]),_(e,"class","linkto")},m(u,f){$(u,e,f),b(e,t),b(e,l),b(l,r),b(e,n)},p(u,[f]){f&1&&ee(r,u[0]),f&2&&_(l,"href",u[1])},i:X,o:X,d(u){u&&m(e)}}}function Ue(a,e,t){let{title:l}=e,{url:r}=e;return a.$$set=n=>{"title"in n&&t(0,l=n.title),"url"in n&&t(1,r=n.url)},[l,r]}class we extends F{constructor(e){super(),N(this,e,Ue,Ce,S,{title:0,url:1})}}function Re(a){let e,t;return{c(){e=k("div"),this.h()},l(l){e=w(l,"DIV",{class:!0,style:!0}),E(e).forEach(m),this.h()},h(){_(e,"class",t=B(a[1]?"card-bg card-bg__fade-in":"card-bg")+" svelte-3x4tdu"),C(e,"transform","translateX("+a[3]+"px) translateY("+a[2]+"px)"),C(e,"background-image","url("+a[0].imgURL+")")},m(l,r){$(l,e,r)},p(l,r){r&2&&t!==(t=B(l[1]?"card-bg card-bg__fade-in":"card-bg")+" svelte-3x4tdu")&&_(e,"class",t),r&12&&C(e,"transform","translateX("+l[3]+"px) translateY("+l[2]+"px)"),r&1&&C(e,"background-image","url("+l[0].imgURL+")")},d(l){l&&m(e)}}}function Me(a){let e,t,l,r,n,u;return{c(){e=k("div"),t=k("video"),this.h()},l(f){e=w(f,"DIV",{class:!0,style:!0});var i=E(e);t=w(i,"VIDEO",{class:!0,src:!0}),E(t).forEach(m),i.forEach(m),this.h()},h(){_(t,"class","center_video svelte-3x4tdu"),A(t.src,l=a[0].vidURL)||_(t,"src",l),t.autoplay="true",t.loop="true",t.muted="true",_(e,"class",r=B(a[1]?"card-bg card-bg__fade-in":"card-bg")+" svelte-3x4tdu"),C(e,"transform","translateX("+a[3]+"px) translateY("+a[2]+"px)")},m(f,i){$(f,e,i),b(e,t),n||(u=O(t,"playing",a[6]),n=!0)},p(f,i){i&1&&!A(t.src,l=f[0].vidURL)&&_(t,"src",l),i&2&&r!==(r=B(f[1]?"card-bg card-bg__fade-in":"card-bg")+" svelte-3x4tdu")&&_(e,"class",r),i&12&&C(e,"transform","translateX("+f[3]+"px) translateY("+f[2]+"px)")},d(f){f&&m(e),n=!1,u()}}}function Xe(a){let e,t,l,r,n;return{c(){e=k("div"),t=k("iframe"),this.h()},l(u){e=w(u,"DIV",{class:!0,style:!0});var f=E(e);t=w(f,"IFRAME",{title:!0,class:!0,width:!0,height:!0,src:!0,frameborder:!0,allow:!0,loop:!0,onstatechange:!0}),E(t).forEach(m),f.forEach(m),this.h()},h(){_(t,"title",l=a[0].title?a[0].title:""),_(t,"class","center_video svelte-3x4tdu"),_(t,"width","560"),_(t,"height","315"),A(t.src,r="https://www.youtube.com/embed/"+a[0].ytVideoID+"?rel=0&controls=0&autoplay=1&mute=1&loop=1&playlist="+a[0].ytVideoID)||_(t,"src",r),_(t,"frameborder","0"),_(t,"allow",`accelerometer; autoplay; encrypted-media; gyroscope;
          picture-in-picture`),_(t,"loop","1"),t.allowFullscreen=!0,_(t,"onstatechange",a[6]),_(e,"class",n=B((a[1],"card-bg card-bg__fade-in"))+" svelte-3x4tdu"),C(e,"transform","translateX("+a[3]+"px) translateY("+a[2]+"px)")},m(u,f){$(u,e,f),b(e,t)},p(u,f){f&1&&l!==(l=u[0].title?u[0].title:"")&&_(t,"title",l),f&1&&!A(t.src,r="https://www.youtube.com/embed/"+u[0].ytVideoID+"?rel=0&controls=0&autoplay=1&mute=1&loop=1&playlist="+u[0].ytVideoID)&&_(t,"src",r),f&2&&n!==(n=B((u[1],"card-bg card-bg__fade-in"))+" svelte-3x4tdu")&&_(e,"class",n),f&12&&C(e,"transform","translateX("+u[3]+"px) translateY("+u[2]+"px)")},d(u){u&&m(e)}}}function Ae(a){let e,t,l,r,n,u=(a[0].title?a[0].title:"")+"",f,i,d,s=(a[0].date?a[0].date:"")+"",c,o,h;function I(D,L){if(D[0].ytVideoID!=null)return Xe;if(D[0].vidURL!=null)return Me;if(D[0].imgURL!=null)return Re}let v=I(a),p=v&&v(a);return{c(){e=k("div"),t=k("div"),p&&p.c(),l=V(),r=k("div"),n=k("h1"),f=z(u),i=V(),d=k("p"),c=z(s),this.h()},l(D){e=w(D,"DIV",{class:!0});var L=E(e);t=w(L,"DIV",{class:!0,style:!0});var Q=E(t);p&&p.l(Q),l=j(Q),r=w(Q,"DIV",{class:!0});var W=E(r);n=w(W,"H1",{class:!0});var te=E(n);f=P(te,u),te.forEach(m),i=j(W),d=w(W,"P",{class:!0});var le=E(d);c=P(le,s),le.forEach(m),W.forEach(m),Q.forEach(m),L.forEach(m),this.h()},h(){_(n,"class","svelte-3x4tdu"),_(d,"class","svelte-3x4tdu"),_(r,"class","card-info svelte-3x4tdu"),_(t,"class","card svelte-3x4tdu"),C(t,"transform","rotateY("+a[5]+"deg) rotateX("+a[4]+"deg)"),_(e,"class","card-wrap svelte-3x4tdu")},m(D,L){$(D,e,L),b(e,t),p&&p.m(t,null),b(t,l),b(t,r),b(r,n),b(n,f),b(r,i),b(r,d),b(d,c),o||(h=[O(e,"mousemove",a[7]),O(e,"mouseenter",a[8]),O(e,"mouseleave",a[9]),O(e,"dblclick",a[10])],o=!0)},p(D,[L]){v===(v=I(D))&&p?p.p(D,L):(p&&p.d(1),p=v&&v(D),p&&(p.c(),p.m(t,l))),L&1&&u!==(u=(D[0].title?D[0].title:"")+"")&&ee(f,u),L&1&&s!==(s=(D[0].date?D[0].date:"")+"")&&ee(c,s),L&48&&C(t,"transform","rotateY("+D[5]+"deg) rotateX("+D[4]+"deg)")},i:X,o:X,d(D){D&&m(e),p&&p.d(),o=!1,De(h)}}}function Be(a,e,t){let l,r,n,u,{params:f}=e,i=0,d=0,s=!1,c=null,o=null;be(()=>{!f.vidURL&&!s&&f.imgURL&&(c=new Image,c.onload=h,c.src=f.imgURL)}),ye(()=>{clearTimeout(o)});const h=()=>{t(1,s=!0)};function I(L){t(11,i=(L.pageX-this.offsetLeft-this.clientWidth/2)/this.clientWidth),t(12,d=(L.pageY-this.offsetTop-this.clientHeight/2)/this.clientHeight)}function v(L){clearTimeout(o)}function p(L){o=setTimeout(()=>{t(5,l=t(4,r=t(3,n=t(2,u=0))))},1e3)}function D(L){console.log(f.title+" dblclick"),window.open(f.url,"_blank")}return a.$$set=L=>{"params"in L&&t(0,f=L.params)},a.$$.update=()=>{a.$$.dirty&2048&&t(5,l=i*30),a.$$.dirty&4096&&t(4,r=d*-30),a.$$.dirty&2048&&t(3,n=i*-40),a.$$.dirty&4096&&t(2,u=d*-40)},[f,s,u,n,r,l,h,I,v,p,D,i,d]}class Ye extends F{constructor(e){super(),N(this,e,Be,Ae,S,{params:0})}}const Te=[{title:"Path of Exile",url:"https://www.pathofexile.com/",imgURL:"https://upload.wikimedia.org/wikipedia/en/0/08/Path_of_Exile_Logo.png",date:"23 Jan 2013 (v0.10.0 open beta)",added:"25 Jul 2023"},{title:"Last Epoch",url:"https://lastepoch.com/",imgURL:"https://cdn.cloudflare.steamstatic.com/steam/apps/899770/capsule_616x353.jpg",date:"30 Apr 2019 (beta)",added:"21 Jul 2023"},{title:"Grim Dawn",url:"https://www.grimdawn.com/",imgURL:"https://cdn.mos.cms.futurecdn.net/b709edc98732726016e77169e78c523c.jpg",date:"25 Feb 2016",added:"20 Jul 2023"},{title:"Aria: The Animation",url:"https://ariacompany.net/",imgURL:"https://m.media-amazon.com/images/M/MV5BNTVkMTE0MmYtOGQyYS00ODBiLTg0MDgtZDJiODQ2YmRhNzU5XkEyXkFqcGdeQXVyMTA3OTEyODI1._V1_FMjpg_UX640_.jpg",date:"5 October 2005 – 28 December 2005",added:"24 Jul 2023"},{title:"Diablo IV",url:"https://diablo4.blizzard.com/",imgURL:"https://upload.wikimedia.org/wikipedia/en/1/1c/Diablo_IV_cover_art.png",date:"5 Jun 2023",added:"11 Jul 2023",ref:["https://twitter.com/Diablo/status/1665418143798292480","https://twitter.com/Diablo/status/1665860062907179009"]},{title:"Hercule Poirot novels",url:"https://en.wikipedia.org/wiki/Hercule_Poirot_in_literature",imgURL:"https://upload.wikimedia.org/wikipedia/commons/1/1b/American_cover_of_%C2%ABThe_Mysterious_Affair_at_Styles%C2%BB.png",date:"Oct 1920",added:"11 Jul 2023"},{title:"Blue Archive",url:"https://bluearchive.nexon.com/",imgURL:"https://static.wikia.nocookie.net/blue-archive/images/4/44/BA_Visual_1.png",date:"4 Feb 2021",added:"8 Mar 2022",ref:"https://www.siliconera.com/blue-archive-release-date-set-for-february-2021-in-japan/"}];function He(a){a(Te)}const Je=$e(null,function(e){return He(e),function(){}});function ie(a,e,t){const l=a.slice();return l[1]=e[t],l}function re(a){let e,t="currently into",l,r,n,u=M(a[0]),f=[];for(let d=0;d<u.length;d+=1)f[d]=se(ie(a,u,d));const i=d=>y(f[d],1,1,()=>{f[d]=null});return{c(){e=k("h2"),e.textContent=t,l=V(),r=k("div");for(let d=0;d<f.length;d+=1)f[d].c();this.h()},l(d){e=w(d,"H2",{"data-svelte-h":!0}),G(e)!=="svelte-riutjy"&&(e.textContent=t),l=j(d),r=w(d,"DIV",{class:!0});var s=E(r);for(let c=0;c<f.length;c+=1)f[c].l(s);s.forEach(m),this.h()},h(){_(r,"class","container svelte-p3bha1")},m(d,s){$(d,e,s),$(d,l,s),$(d,r,s);for(let c=0;c<f.length;c+=1)f[c]&&f[c].m(r,null);n=!0},p(d,s){if(s&1){u=M(d[0]);let c;for(c=0;c<u.length;c+=1){const o=ie(d,u,c);f[c]?(f[c].p(o,s),g(f[c],1)):(f[c]=se(o),f[c].c(),g(f[c],1),f[c].m(r,null))}for(U(),c=u.length;c<f.length;c+=1)i(c);R()}},i(d){if(!n){for(let s=0;s<u.length;s+=1)g(f[s]);n=!0}},o(d){f=f.filter(Boolean);for(let s=0;s<f.length;s+=1)y(f[s]);n=!1},d(d){d&&(m(e),m(l),m(r)),q(f,d)}}}function se(a){let e,t;return e=new Ye({props:{params:{...a[1]}}}),{c(){Y(e.$$.fragment)},l(l){T(e.$$.fragment,l)},m(l,r){H(e,l,r),t=!0},p(l,r){const n={};r&1&&(n.params={...l[1]}),e.$set(n)},i(l){t||(g(e.$$.fragment,l),t=!0)},o(l){y(e.$$.fragment,l),t=!1},d(l){J(e,l)}}}function Oe(a){let e,t,l=a[0]!=null&&re(a);return{c(){e=k("div"),l&&l.c(),this.h()},l(r){e=w(r,"DIV",{id:!0});var n=E(e);l&&l.l(n),n.forEach(m),this.h()},h(){_(e,"id","ran-into")},m(r,n){$(r,e,n),l&&l.m(e,null),t=!0},p(r,[n]){r[0]!=null?l?(l.p(r,n),n&1&&g(l,1)):(l=re(r),l.c(),g(l,1),l.m(e,null)):l&&(U(),y(l,1,1,()=>{l=null}),R())},i(r){t||(g(l),t=!0)},o(r){y(l),t=!1},d(r){r&&m(e),l&&l.d()}}}function ze(a,e,t){let l;return Ie(a,Je,r=>t(0,l=r)),[l]}class Pe extends F{constructor(e){super(),N(this,e,ze,Oe,S,{})}}function ae(a,e,t){const l=a.slice();return l[1]=e[t],l}function oe(a,e,t){const l=a.slice();return l[1]=e[t],l}function ce(a,e,t){const l=a.slice();return l[1]=e[t],l}function fe(a,e,t){const l=a.slice();return l[1]=e[t],l}function ue(a){let e,t,l="is at",r,n,u,f=M(a[0].links),i=[];for(let s=0;s<f.length;s+=1)i[s]=de(fe(a,f,s));const d=s=>y(i[s],1,1,()=>{i[s]=null});return{c(){e=k("div"),t=k("h2"),t.textContent=l,r=V(),n=k("div");for(let s=0;s<i.length;s+=1)i[s].c();this.h()},l(s){e=w(s,"DIV",{id:!0});var c=E(e);t=w(c,"H2",{"data-svelte-h":!0}),G(t)!=="svelte-1739n49"&&(t.textContent=l),r=j(c),n=w(c,"DIV",{class:!0});var o=E(n);for(let h=0;h<i.length;h+=1)i[h].l(o);o.forEach(m),c.forEach(m),this.h()},h(){_(n,"class","wrapus svelte-1frrjok"),_(e,"id","is-at")},m(s,c){$(s,e,c),b(e,t),b(e,r),b(e,n);for(let o=0;o<i.length;o+=1)i[o]&&i[o].m(n,null);u=!0},p(s,c){if(c&1){f=M(s[0].links);let o;for(o=0;o<f.length;o+=1){const h=fe(s,f,o);i[o]?(i[o].p(h,c),g(i[o],1)):(i[o]=de(h),i[o].c(),g(i[o],1),i[o].m(n,null))}for(U(),o=f.length;o<i.length;o+=1)d(o);R()}},i(s){if(!u){for(let c=0;c<f.length;c+=1)g(i[c]);u=!0}},o(s){i=i.filter(Boolean);for(let c=0;c<i.length;c+=1)y(i[c]);u=!1},d(s){s&&m(e),q(i,s)}}}function de(a){let e,t;const l=[a[1]];let r={};for(let n=0;n<l.length;n+=1)r=K(r,l[n]);return e=new we({props:r}),{c(){Y(e.$$.fragment)},l(n){T(e.$$.fragment,n)},m(n,u){H(e,n,u),t=!0},p(n,u){const f=u&1?Z(l,[x(n[1])]):{};e.$set(f)},i(n){t||(g(e.$$.fragment,n),t=!0)},o(n){y(e.$$.fragment,n),t=!1},d(n){J(e,n)}}}function he(a){let e,t,l="dabbles in",r,n,u,f=M(a[0].projects),i=[];for(let s=0;s<f.length;s+=1)i[s]=_e(ce(a,f,s));const d=s=>y(i[s],1,1,()=>{i[s]=null});return{c(){e=k("div"),t=k("h2"),t.textContent=l,r=V(),n=k("div");for(let s=0;s<i.length;s+=1)i[s].c();this.h()},l(s){e=w(s,"DIV",{id:!0});var c=E(e);t=w(c,"H2",{"data-svelte-h":!0}),G(t)!=="svelte-1poc7h2"&&(t.textContent=l),r=j(c),n=w(c,"DIV",{class:!0});var o=E(n);for(let h=0;h<i.length;h+=1)i[h].l(o);o.forEach(m),c.forEach(m),this.h()},h(){_(n,"class","wrapus svelte-1frrjok"),_(e,"id","dabbles-in")},m(s,c){$(s,e,c),b(e,t),b(e,r),b(e,n);for(let o=0;o<i.length;o+=1)i[o]&&i[o].m(n,null);u=!0},p(s,c){if(c&1){f=M(s[0].projects);let o;for(o=0;o<f.length;o+=1){const h=ce(s,f,o);i[o]?(i[o].p(h,c),g(i[o],1)):(i[o]=_e(h),i[o].c(),g(i[o],1),i[o].m(n,null))}for(U(),o=f.length;o<i.length;o+=1)d(o);R()}},i(s){if(!u){for(let c=0;c<f.length;c+=1)g(i[c]);u=!0}},o(s){i=i.filter(Boolean);for(let c=0;c<i.length;c+=1)y(i[c]);u=!1},d(s){s&&m(e),q(i,s)}}}function _e(a){let e,t;const l=[a[1]];let r={};for(let n=0;n<l.length;n+=1)r=K(r,l[n]);return e=new we({props:r}),{c(){Y(e.$$.fragment)},l(n){T(e.$$.fragment,n)},m(n,u){H(e,n,u),t=!0},p(n,u){const f=u&1?Z(l,[x(n[1])]):{};e.$set(f)},i(n){t||(g(e.$$.fragment,n),t=!0)},o(n){y(e.$$.fragment,n),t=!1},d(n){J(e,n)}}}function me(a){let e,t,l="plays with",r,n,u,f=M(a[0].toybox),i=[];for(let s=0;s<f.length;s+=1)i[s]=ge(oe(a,f,s));const d=s=>y(i[s],1,1,()=>{i[s]=null});return{c(){e=k("div"),t=k("h2"),t.textContent=l,r=V(),n=k("div");for(let s=0;s<i.length;s+=1)i[s].c();this.h()},l(s){e=w(s,"DIV",{id:!0});var c=E(e);t=w(c,"H2",{"data-svelte-h":!0}),G(t)!=="svelte-ge4ssj"&&(t.textContent=l),r=j(c),n=w(c,"DIV",{class:!0});var o=E(n);for(let h=0;h<i.length;h+=1)i[h].l(o);o.forEach(m),c.forEach(m),this.h()},h(){_(n,"class","wrapus svelte-1frrjok"),_(e,"id","plays-with")},m(s,c){$(s,e,c),b(e,t),b(e,r),b(e,n);for(let o=0;o<i.length;o+=1)i[o]&&i[o].m(n,null);u=!0},p(s,c){if(c&1){f=M(s[0].toybox);let o;for(o=0;o<f.length;o+=1){const h=oe(s,f,o);i[o]?(i[o].p(h,c),g(i[o],1)):(i[o]=ge(h),i[o].c(),g(i[o],1),i[o].m(n,null))}for(U(),o=f.length;o<i.length;o+=1)d(o);R()}},i(s){if(!u){for(let c=0;c<f.length;c+=1)g(i[c]);u=!0}},o(s){i=i.filter(Boolean);for(let c=0;c<i.length;c+=1)y(i[c]);u=!1},d(s){s&&m(e),q(i,s)}}}function ge(a){let e,t;const l=[a[1]];let r={};for(let n=0;n<l.length;n+=1)r=K(r,l[n]);return e=new ke({props:r}),{c(){Y(e.$$.fragment)},l(n){T(e.$$.fragment,n)},m(n,u){H(e,n,u),t=!0},p(n,u){const f=u&1?Z(l,[x(n[1])]):{};e.$set(f)},i(n){t||(g(e.$$.fragment,n),t=!0)},o(n){y(e.$$.fragment,n),t=!1},d(n){J(e,n)}}}function pe(a){let e,t,l="wants to play",r,n,u,f=M(a[0].shelf),i=[];for(let s=0;s<f.length;s+=1)i[s]=ve(ae(a,f,s));const d=s=>y(i[s],1,1,()=>{i[s]=null});return{c(){e=k("div"),t=k("h2"),t.textContent=l,r=V(),n=k("div");for(let s=0;s<i.length;s+=1)i[s].c();this.h()},l(s){e=w(s,"DIV",{id:!0});var c=E(e);t=w(c,"H2",{"data-svelte-h":!0}),G(t)!=="svelte-1vzk40g"&&(t.textContent=l),r=j(c),n=w(c,"DIV",{class:!0});var o=E(n);for(let h=0;h<i.length;h+=1)i[h].l(o);o.forEach(m),c.forEach(m),this.h()},h(){_(n,"class","wrapus svelte-1frrjok"),_(e,"id","wants-to-play")},m(s,c){$(s,e,c),b(e,t),b(e,r),b(e,n);for(let o=0;o<i.length;o+=1)i[o]&&i[o].m(n,null);u=!0},p(s,c){if(c&1){f=M(s[0].shelf);let o;for(o=0;o<f.length;o+=1){const h=ae(s,f,o);i[o]?(i[o].p(h,c),g(i[o],1)):(i[o]=ve(h),i[o].c(),g(i[o],1),i[o].m(n,null))}for(U(),o=f.length;o<i.length;o+=1)d(o);R()}},i(s){if(!u){for(let c=0;c<f.length;c+=1)g(i[c]);u=!0}},o(s){i=i.filter(Boolean);for(let c=0;c<i.length;c+=1)y(i[c]);u=!1},d(s){s&&m(e),q(i,s)}}}function ve(a){let e,t;const l=[a[1]];let r={};for(let n=0;n<l.length;n+=1)r=K(r,l[n]);return e=new ke({props:r}),{c(){Y(e.$$.fragment)},l(n){T(e.$$.fragment,n)},m(n,u){H(e,n,u),t=!0},p(n,u){const f=u&1?Z(l,[x(n[1])]):{};e.$set(f)},i(n){t||(g(e.$$.fragment,n),t=!0)},o(n){y(e.$$.fragment,n),t=!1},d(n){J(e,n)}}}function Se(a){let e,t,l,r,n,u,f,i,d,s,c=a[0].links!=null&&ue(a);u=new Pe({});let o=a[0].projects!=null&&he(a),h=a[0].toybox!=null&&me(a),I=a[0].shelf!=null&&pe(a);return{c(){e=k("meta"),t=k("link"),l=V(),r=k("section"),c&&c.c(),n=V(),Y(u.$$.fragment),f=V(),o&&o.c(),i=V(),h&&h.c(),d=V(),I&&I.c(),this.h()},l(v){const p=Ee("svelte-1ou5f5j",document.head);e=w(p,"META",{name:!0,content:!0}),t=w(p,"LINK",{href:!0,rel:!0}),p.forEach(m),l=j(v),r=w(v,"SECTION",{});var D=E(r);c&&c.l(D),n=j(D),T(u.$$.fragment,D),f=j(D),o&&o.l(D),i=j(D),h&&h.l(D),d=j(D),I&&I.l(D),D.forEach(m),this.h()},h(){document.title="darthvid",_(e,"name","description"),_(e,"content","a personal homepage"),_(t,"href","https://fonts.googleapis.com/css?family=Source+Code+Pro|Noto+Sans+JP&display=swap"),_(t,"rel","stylesheet")},m(v,p){b(document.head,e),b(document.head,t),$(v,l,p),$(v,r,p),c&&c.m(r,null),b(r,n),H(u,r,null),b(r,f),o&&o.m(r,null),b(r,i),h&&h.m(r,null),b(r,d),I&&I.m(r,null),s=!0},p(v,[p]){v[0].links!=null?c?(c.p(v,p),p&1&&g(c,1)):(c=ue(v),c.c(),g(c,1),c.m(r,n)):c&&(U(),y(c,1,1,()=>{c=null}),R()),v[0].projects!=null?o?(o.p(v,p),p&1&&g(o,1)):(o=he(v),o.c(),g(o,1),o.m(r,i)):o&&(U(),y(o,1,1,()=>{o=null}),R()),v[0].toybox!=null?h?(h.p(v,p),p&1&&g(h,1)):(h=me(v),h.c(),g(h,1),h.m(r,d)):h&&(U(),y(h,1,1,()=>{h=null}),R()),v[0].shelf!=null?I?(I.p(v,p),p&1&&g(I,1)):(I=pe(v),I.c(),g(I,1),I.m(r,null)):I&&(U(),y(I,1,1,()=>{I=null}),R())},i(v){s||(g(c),g(u.$$.fragment,v),g(o),g(h),g(I),s=!0)},o(v){y(c),y(u.$$.fragment,v),y(o),y(h),y(I),s=!1},d(v){v&&(m(l),m(r)),m(e),m(t),c&&c.d(),J(u),o&&o.d(),h&&h.d(),I&&I.d()}}}function Fe(a,e,t){var l;try{l=Le,l==null&&(l={})}catch{l={}}return[l]}class We extends F{constructor(e){super(),N(this,e,Fe,Se,S,{})}}export{We as component};
