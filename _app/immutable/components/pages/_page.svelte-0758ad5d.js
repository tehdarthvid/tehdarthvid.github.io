import{S as z,i as F,s as O,k as y,l as w,m as I,h as m,n as d,b as L,C as p,B as M,j as pe,E as C,q as Y,r as B,u as Z,a as V,c as R,p as j,K as S,L as ke,M as ye,N as H,f as v,g as U,t as D,d as X,J as we,O as q,w as T,x as A,y as N,z as P,D as Ee,P as K,Q,R as G}from"../../chunks/index-f5dc60c2.js";import{j as Ie}from"../../chunks/content-9046c87c.js";import{r as De}from"../../chunks/index-07f76fe9.js";function te(f){let e,t;return{c(){e=y("img"),this.h()},l(l){e=w(l,"IMG",{class:!0,alt:!0,src:!0}),this.h()},h(){d(e,"class","icon svelte-l3etzh"),d(e,"alt",f[0]),C(e.src,t=f[2])||d(e,"src",t)},m(l,s){L(l,e,s)},p(l,s){s&1&&d(e,"alt",l[0]),s&4&&!C(e.src,t=l[2])&&d(e,"src",t)},d(l){l&&m(e)}}}function $e(f){let e,t,l=f[3]&&te(f);return{c(){e=y("div"),t=y("a"),l&&l.c(),this.h()},l(s){e=w(s,"DIV",{class:!0});var r=I(e);t=w(r,"A",{href:!0,title:!0,target:!0});var u=I(t);l&&l.l(u),u.forEach(m),r.forEach(m),this.h()},h(){d(t,"href",f[1]),d(t,"title",f[0]),d(t,"target","noopener noreferrer"),d(e,"class","icon svelte-l3etzh")},m(s,r){L(s,e,r),p(e,t),l&&l.m(t,null)},p(s,[r]){s[3]?l?l.p(s,r):(l=te(s),l.c(),l.m(t,null)):l&&(l.d(1),l=null),r&2&&d(t,"href",s[1]),r&1&&d(t,"title",s[0])},i:M,o:M,d(s){s&&m(e),l&&l.d()}}}function Le(f,e,t){let{title:l}=e,{url:s}=e,{imgURL:r}=e,u=!1,c=null;pe(()=>{!u&&r&&(c=new Image,c.onload=a,c.src=r)});const a=()=>{t(3,u=!0)};return f.$$set=h=>{"title"in h&&t(0,l=h.title),"url"in h&&t(1,s=h.url),"imgURL"in h&&t(2,r=h.imgURL)},[l,s,r,u]}class ve extends z{constructor(e){super(),F(this,e,Le,$e,O,{title:0,url:1,imgURL:2})}}function Ve(f){let e,t,l,s,r;return{c(){e=y("div"),t=Y(`【
  `),l=y("a"),s=Y(f[0]),r=Y(`
  】`),this.h()},l(u){e=w(u,"DIV",{class:!0});var c=I(e);t=B(c,`【
  `),l=w(c,"A",{href:!0});var a=I(l);s=B(a,f[0]),a.forEach(m),r=B(c,`
  】`),c.forEach(m),this.h()},h(){d(l,"href",f[1]),d(e,"class","linkto")},m(u,c){L(u,e,c),p(e,t),p(e,l),p(l,s),p(e,r)},p(u,[c]){c&1&&Z(s,u[0]),c&2&&d(l,"href",u[1])},i:M,o:M,d(u){u&&m(e)}}}function Re(f,e,t){let{title:l}=e,{url:s}=e;return f.$$set=r=>{"title"in r&&t(0,l=r.title),"url"in r&&t(1,s=r.url)},[l,s]}class be extends z{constructor(e){super(),F(this,e,Re,Ve,O,{title:0,url:1})}}function je(f){let e,t;return{c(){e=y("div"),this.h()},l(l){e=w(l,"DIV",{class:!0,style:!0}),I(e).forEach(m),this.h()},h(){d(e,"class",t=H(f[1]?"card-bg card-bg__fade-in":"card-bg")+" svelte-my5sl4"),j(e,"transform","translateX("+f[3]+"px) translateY("+f[2]+"px)"),j(e,"background-image","url("+f[0].imgURL+")")},m(l,s){L(l,e,s)},p(l,s){s&2&&t!==(t=H(l[1]?"card-bg card-bg__fade-in":"card-bg")+" svelte-my5sl4")&&d(e,"class",t),s&12&&j(e,"transform","translateX("+l[3]+"px) translateY("+l[2]+"px)"),s&1&&j(e,"background-image","url("+l[0].imgURL+")")},d(l){l&&m(e)}}}function Ue(f){let e,t,l,s,r,u;return{c(){e=y("div"),t=y("video"),this.h()},l(c){e=w(c,"DIV",{class:!0,style:!0});var a=I(e);t=w(a,"VIDEO",{class:!0,src:!0}),I(t).forEach(m),a.forEach(m),this.h()},h(){d(t,"class","center_video svelte-my5sl4"),C(t.src,l=f[0].vidURL)||d(t,"src",l),t.autoplay="true",t.loop="true",t.muted="true",d(e,"class",s=H(f[1]?"card-bg card-bg__fade-in":"card-bg")+" svelte-my5sl4"),j(e,"transform","translateX("+f[3]+"px) translateY("+f[2]+"px)")},m(c,a){L(c,e,a),p(e,t),r||(u=S(t,"playing",f[6]),r=!0)},p(c,a){a&1&&!C(t.src,l=c[0].vidURL)&&d(t,"src",l),a&2&&s!==(s=H(c[1]?"card-bg card-bg__fade-in":"card-bg")+" svelte-my5sl4")&&d(e,"class",s),a&12&&j(e,"transform","translateX("+c[3]+"px) translateY("+c[2]+"px)")},d(c){c&&m(e),r=!1,u()}}}function Xe(f){let e,t,l,s,r;return{c(){e=y("div"),t=y("iframe"),this.h()},l(u){e=w(u,"DIV",{class:!0,style:!0});var c=I(e);t=w(c,"IFRAME",{title:!0,class:!0,width:!0,height:!0,src:!0,frameborder:!0,allow:!0,loop:!0,onstatechange:!0}),I(t).forEach(m),c.forEach(m),this.h()},h(){d(t,"title",l=f[0].title?f[0].title:""),d(t,"class","center_video svelte-my5sl4"),d(t,"width","560"),d(t,"height","315"),C(t.src,s="https://www.youtube.com/embed/"+f[0].ytVideoID+"?rel=0&controls=0&autoplay=1&mute=1&loop=1&playlist="+f[0].ytVideoID)||d(t,"src",s),d(t,"frameborder","0"),d(t,"allow",`accelerometer; autoplay; encrypted-media; gyroscope;
          picture-in-picture`),d(t,"loop","1"),t.allowFullscreen=!0,d(t,"onstatechange",f[6]),d(e,"class",r=H((f[1],"card-bg card-bg__fade-in"))+" svelte-my5sl4"),j(e,"transform","translateX("+f[3]+"px) translateY("+f[2]+"px)")},m(u,c){L(u,e,c),p(e,t)},p(u,c){c&1&&l!==(l=u[0].title?u[0].title:"")&&d(t,"title",l),c&1&&!C(t.src,s="https://www.youtube.com/embed/"+u[0].ytVideoID+"?rel=0&controls=0&autoplay=1&mute=1&loop=1&playlist="+u[0].ytVideoID)&&d(t,"src",s),c&2&&r!==(r=H((u[1],"card-bg card-bg__fade-in"))+" svelte-my5sl4")&&d(e,"class",r),c&12&&j(e,"transform","translateX("+u[3]+"px) translateY("+u[2]+"px)")},d(u){u&&m(e)}}}function Ye(f){let e,t,l,s,r,u=(f[0].title?f[0].title:"")+"",c,a,h,n=(f[0].date?f[0].date:"")+"",o,i,_;function g(E,$){if(E[0].ytVideoID!=null)return Xe;if(E[0].vidURL!=null)return Ue;if(E[0].imgURL!=null)return je}let b=g(f),k=b&&b(f);return{c(){e=y("div"),t=y("div"),k&&k.c(),l=V(),s=y("div"),r=y("h1"),c=Y(u),a=V(),h=y("p"),o=Y(n),this.h()},l(E){e=w(E,"DIV",{class:!0});var $=I(e);t=w($,"DIV",{class:!0,style:!0});var W=I(t);k&&k.l(W),l=R(W),s=w(W,"DIV",{class:!0});var J=I(s);r=w(J,"H1",{class:!0});var x=I(r);c=B(x,u),x.forEach(m),a=R(J),h=w(J,"P",{class:!0});var ee=I(h);o=B(ee,n),ee.forEach(m),J.forEach(m),W.forEach(m),$.forEach(m),this.h()},h(){d(r,"class","svelte-my5sl4"),d(h,"class","svelte-my5sl4"),d(s,"class","card-info svelte-my5sl4"),d(t,"class","card svelte-my5sl4"),j(t,"transform","rotateY("+f[5]+"deg) rotateX("+f[4]+"deg)"),d(e,"class","card-wrap svelte-my5sl4")},m(E,$){L(E,e,$),p(e,t),k&&k.m(t,null),p(t,l),p(t,s),p(s,r),p(r,c),p(s,a),p(s,h),p(h,o),i||(_=[S(e,"mousemove",f[7]),S(e,"mouseenter",f[8]),S(e,"mouseleave",f[9]),S(e,"dblclick",f[10])],i=!0)},p(E,[$]){b===(b=g(E))&&k?k.p(E,$):(k&&k.d(1),k=b&&b(E),k&&(k.c(),k.m(t,l))),$&1&&u!==(u=(E[0].title?E[0].title:"")+"")&&Z(c,u),$&1&&n!==(n=(E[0].date?E[0].date:"")+"")&&Z(o,n),$&48&&j(t,"transform","rotateY("+E[5]+"deg) rotateX("+E[4]+"deg)")},i:M,o:M,d(E){E&&m(e),k&&k.d(),i=!1,ke(_)}}}function Be(f,e,t){let l,s,r,u,{params:c}=e,a=0,h=0,n=!1,o=null,i=null;pe(()=>{!c.vidURL&&!n&&c.imgURL&&(o=new Image,o.onload=_,o.src=c.imgURL)}),ye(()=>{clearTimeout(i)});const _=()=>{t(1,n=!0)};function g($){t(11,a=($.pageX-this.offsetLeft-this.clientWidth/2)/this.clientWidth),t(12,h=($.pageY-this.offsetTop-this.clientHeight/2)/this.clientHeight)}function b($){clearTimeout(i)}function k($){i=setTimeout(()=>{t(5,l=t(4,s=t(3,r=t(2,u=0))))},1e3)}function E($){console.log(c.title+" dblclick"),window.open(c.url,"_blank")}return f.$$set=$=>{"params"in $&&t(0,c=$.params)},f.$$.update=()=>{f.$$.dirty&2048&&t(5,l=a*30),f.$$.dirty&4096&&t(4,s=h*-30),f.$$.dirty&2048&&t(3,r=a*-40),f.$$.dirty&4096&&t(2,u=h*-40)},[c,n,u,r,s,l,_,g,b,k,E,a,h]}class Me extends z{constructor(e){super(),F(this,e,Be,Ye,O,{params:0})}}const Ce=[{title:"ぼっち・ざ・ろっく!",url:"https://bocchi.rocks/",imgURL:"https://wannasin.s3.ap-southeast-1.amazonaws.com/news/attach/WePwFyCiA9Q2IXMi.jpg",date:"8 Oct 2022",added:"6 Nov 2022",ref:"https://twitter.com/BTR_anime/status/1578759621124161538",hastag:"#ぼっち・ざ・ろっく"},{title:"サマータイムレンダ",url:"https://shonenjumpplus.com/episode/13932016480029133982",imgURL:"https://upload.wikimedia.org/wikipedia/en/7/79/Summer_Time_Rendering_volume_1_cover.jpg",date:"23 Oct 2017 - 1 Feb 2021",added:"3 Dec 2022",hastag:"#サマータイムレンダ"},{title:"艦これ いつかあの海で",url:"https://kancolle-itsuumi.com/",imgURL:"https://kancolle-itsuumi.com/core_sys/images/main/tz/kv2.webp",date:"4 Nov 2022",added:"3 Dec 2022",ref:"",hastag:"#艦これ"},{title:"Blue Archive",url:"https://bluearchive.nexon.com/",imgURL:"https://static.wikia.nocookie.net/blue-archive/images/4/44/BA_Visual_1.png",date:"4 Feb 2021",added:"8 Mar 2022",ref:"https://www.siliconera.com/blue-archive-release-date-set-for-february-2021-in-japan/"}];function He(f){f(Ce)}const Te=De(null,function(e){return He(e),function(){}});function le(f,e,t){const l=f.slice();return l[1]=e[t],l}function re(f){let e,t,l,s,r,u=f[0],c=[];for(let h=0;h<u.length;h+=1)c[h]=se(le(f,u,h));const a=h=>D(c[h],1,1,()=>{c[h]=null});return{c(){e=y("h2"),t=Y("currently into"),l=V(),s=y("div");for(let h=0;h<c.length;h+=1)c[h].c();this.h()},l(h){e=w(h,"H2",{});var n=I(e);t=B(n,"currently into"),n.forEach(m),l=R(h),s=w(h,"DIV",{class:!0});var o=I(s);for(let i=0;i<c.length;i+=1)c[i].l(o);o.forEach(m),this.h()},h(){d(s,"class","container svelte-dcexkb")},m(h,n){L(h,e,n),p(e,t),L(h,l,n),L(h,s,n);for(let o=0;o<c.length;o+=1)c[o].m(s,null);r=!0},p(h,n){if(n&1){u=h[0];let o;for(o=0;o<u.length;o+=1){const i=le(h,u,o);c[o]?(c[o].p(i,n),v(c[o],1)):(c[o]=se(i),c[o].c(),v(c[o],1),c[o].m(s,null))}for(U(),o=u.length;o<c.length;o+=1)a(o);X()}},i(h){if(!r){for(let n=0;n<u.length;n+=1)v(c[n]);r=!0}},o(h){c=c.filter(Boolean);for(let n=0;n<c.length;n+=1)D(c[n]);r=!1},d(h){h&&m(e),h&&m(l),h&&m(s),q(c,h)}}}function se(f){let e,t;return e=new Me({props:{params:{...f[1]}}}),{c(){T(e.$$.fragment)},l(l){A(e.$$.fragment,l)},m(l,s){N(e,l,s),t=!0},p(l,s){const r={};s&1&&(r.params={...l[1]}),e.$set(r)},i(l){t||(v(e.$$.fragment,l),t=!0)},o(l){D(e.$$.fragment,l),t=!1},d(l){P(e,l)}}}function Ae(f){let e,t,l=f[0]!=null&&re(f);return{c(){e=y("div"),l&&l.c(),this.h()},l(s){e=w(s,"DIV",{id:!0});var r=I(e);l&&l.l(r),r.forEach(m),this.h()},h(){d(e,"id","ran-into")},m(s,r){L(s,e,r),l&&l.m(e,null),t=!0},p(s,[r]){s[0]!=null?l?(l.p(s,r),r&1&&v(l,1)):(l=re(s),l.c(),v(l,1),l.m(e,null)):l&&(U(),D(l,1,1,()=>{l=null}),X())},i(s){t||(v(l),t=!0)},o(s){D(l),t=!1},d(s){s&&m(e),l&&l.d()}}}function Ne(f,e,t){let l;return we(f,Te,s=>t(0,l=s)),[l]}class Pe extends z{constructor(e){super(),F(this,e,Ne,Ae,O,{})}}function ne(f,e,t){const l=f.slice();return l[1]=e[t],l}function ie(f,e,t){const l=f.slice();return l[1]=e[t],l}function ae(f,e,t){const l=f.slice();return l[1]=e[t],l}function oe(f,e,t){const l=f.slice();return l[1]=e[t],l}function ce(f){let e,t,l,s,r,u,c=f[0].links,a=[];for(let n=0;n<c.length;n+=1)a[n]=fe(oe(f,c,n));const h=n=>D(a[n],1,1,()=>{a[n]=null});return{c(){e=y("div"),t=y("h2"),l=Y("is at"),s=V(),r=y("div");for(let n=0;n<a.length;n+=1)a[n].c();this.h()},l(n){e=w(n,"DIV",{id:!0});var o=I(e);t=w(o,"H2",{});var i=I(t);l=B(i,"is at"),i.forEach(m),s=R(o),r=w(o,"DIV",{class:!0});var _=I(r);for(let g=0;g<a.length;g+=1)a[g].l(_);_.forEach(m),o.forEach(m),this.h()},h(){d(r,"class","wrapus svelte-1frrjok"),d(e,"id","is-at")},m(n,o){L(n,e,o),p(e,t),p(t,l),p(e,s),p(e,r);for(let i=0;i<a.length;i+=1)a[i].m(r,null);u=!0},p(n,o){if(o&1){c=n[0].links;let i;for(i=0;i<c.length;i+=1){const _=oe(n,c,i);a[i]?(a[i].p(_,o),v(a[i],1)):(a[i]=fe(_),a[i].c(),v(a[i],1),a[i].m(r,null))}for(U(),i=c.length;i<a.length;i+=1)h(i);X()}},i(n){if(!u){for(let o=0;o<c.length;o+=1)v(a[o]);u=!0}},o(n){a=a.filter(Boolean);for(let o=0;o<a.length;o+=1)D(a[o]);u=!1},d(n){n&&m(e),q(a,n)}}}function fe(f){let e,t;const l=[f[1]];let s={};for(let r=0;r<l.length;r+=1)s=K(s,l[r]);return e=new be({props:s}),{c(){T(e.$$.fragment)},l(r){A(e.$$.fragment,r)},m(r,u){N(e,r,u),t=!0},p(r,u){const c=u&1?Q(l,[G(r[1])]):{};e.$set(c)},i(r){t||(v(e.$$.fragment,r),t=!0)},o(r){D(e.$$.fragment,r),t=!1},d(r){P(e,r)}}}function ue(f){let e,t,l,s,r,u,c=f[0].projects,a=[];for(let n=0;n<c.length;n+=1)a[n]=he(ae(f,c,n));const h=n=>D(a[n],1,1,()=>{a[n]=null});return{c(){e=y("div"),t=y("h2"),l=Y("dabbles in"),s=V(),r=y("div");for(let n=0;n<a.length;n+=1)a[n].c();this.h()},l(n){e=w(n,"DIV",{id:!0});var o=I(e);t=w(o,"H2",{});var i=I(t);l=B(i,"dabbles in"),i.forEach(m),s=R(o),r=w(o,"DIV",{class:!0});var _=I(r);for(let g=0;g<a.length;g+=1)a[g].l(_);_.forEach(m),o.forEach(m),this.h()},h(){d(r,"class","wrapus svelte-1frrjok"),d(e,"id","dabbles-in")},m(n,o){L(n,e,o),p(e,t),p(t,l),p(e,s),p(e,r);for(let i=0;i<a.length;i+=1)a[i].m(r,null);u=!0},p(n,o){if(o&1){c=n[0].projects;let i;for(i=0;i<c.length;i+=1){const _=ae(n,c,i);a[i]?(a[i].p(_,o),v(a[i],1)):(a[i]=he(_),a[i].c(),v(a[i],1),a[i].m(r,null))}for(U(),i=c.length;i<a.length;i+=1)h(i);X()}},i(n){if(!u){for(let o=0;o<c.length;o+=1)v(a[o]);u=!0}},o(n){a=a.filter(Boolean);for(let o=0;o<a.length;o+=1)D(a[o]);u=!1},d(n){n&&m(e),q(a,n)}}}function he(f){let e,t;const l=[f[1]];let s={};for(let r=0;r<l.length;r+=1)s=K(s,l[r]);return e=new be({props:s}),{c(){T(e.$$.fragment)},l(r){A(e.$$.fragment,r)},m(r,u){N(e,r,u),t=!0},p(r,u){const c=u&1?Q(l,[G(r[1])]):{};e.$set(c)},i(r){t||(v(e.$$.fragment,r),t=!0)},o(r){D(e.$$.fragment,r),t=!1},d(r){P(e,r)}}}function de(f){let e,t,l,s,r,u,c=f[0].toybox,a=[];for(let n=0;n<c.length;n+=1)a[n]=_e(ie(f,c,n));const h=n=>D(a[n],1,1,()=>{a[n]=null});return{c(){e=y("div"),t=y("h2"),l=Y("plays with"),s=V(),r=y("div");for(let n=0;n<a.length;n+=1)a[n].c();this.h()},l(n){e=w(n,"DIV",{id:!0});var o=I(e);t=w(o,"H2",{});var i=I(t);l=B(i,"plays with"),i.forEach(m),s=R(o),r=w(o,"DIV",{class:!0});var _=I(r);for(let g=0;g<a.length;g+=1)a[g].l(_);_.forEach(m),o.forEach(m),this.h()},h(){d(r,"class","wrapus svelte-1frrjok"),d(e,"id","plays-with")},m(n,o){L(n,e,o),p(e,t),p(t,l),p(e,s),p(e,r);for(let i=0;i<a.length;i+=1)a[i].m(r,null);u=!0},p(n,o){if(o&1){c=n[0].toybox;let i;for(i=0;i<c.length;i+=1){const _=ie(n,c,i);a[i]?(a[i].p(_,o),v(a[i],1)):(a[i]=_e(_),a[i].c(),v(a[i],1),a[i].m(r,null))}for(U(),i=c.length;i<a.length;i+=1)h(i);X()}},i(n){if(!u){for(let o=0;o<c.length;o+=1)v(a[o]);u=!0}},o(n){a=a.filter(Boolean);for(let o=0;o<a.length;o+=1)D(a[o]);u=!1},d(n){n&&m(e),q(a,n)}}}function _e(f){let e,t;const l=[f[1]];let s={};for(let r=0;r<l.length;r+=1)s=K(s,l[r]);return e=new ve({props:s}),{c(){T(e.$$.fragment)},l(r){A(e.$$.fragment,r)},m(r,u){N(e,r,u),t=!0},p(r,u){const c=u&1?Q(l,[G(r[1])]):{};e.$set(c)},i(r){t||(v(e.$$.fragment,r),t=!0)},o(r){D(e.$$.fragment,r),t=!1},d(r){P(e,r)}}}function me(f){let e,t,l,s,r,u,c=f[0].shelf,a=[];for(let n=0;n<c.length;n+=1)a[n]=ge(ne(f,c,n));const h=n=>D(a[n],1,1,()=>{a[n]=null});return{c(){e=y("div"),t=y("h2"),l=Y("wants to play"),s=V(),r=y("div");for(let n=0;n<a.length;n+=1)a[n].c();this.h()},l(n){e=w(n,"DIV",{id:!0});var o=I(e);t=w(o,"H2",{});var i=I(t);l=B(i,"wants to play"),i.forEach(m),s=R(o),r=w(o,"DIV",{class:!0});var _=I(r);for(let g=0;g<a.length;g+=1)a[g].l(_);_.forEach(m),o.forEach(m),this.h()},h(){d(r,"class","wrapus svelte-1frrjok"),d(e,"id","wants-to-play")},m(n,o){L(n,e,o),p(e,t),p(t,l),p(e,s),p(e,r);for(let i=0;i<a.length;i+=1)a[i].m(r,null);u=!0},p(n,o){if(o&1){c=n[0].shelf;let i;for(i=0;i<c.length;i+=1){const _=ne(n,c,i);a[i]?(a[i].p(_,o),v(a[i],1)):(a[i]=ge(_),a[i].c(),v(a[i],1),a[i].m(r,null))}for(U(),i=c.length;i<a.length;i+=1)h(i);X()}},i(n){if(!u){for(let o=0;o<c.length;o+=1)v(a[o]);u=!0}},o(n){a=a.filter(Boolean);for(let o=0;o<a.length;o+=1)D(a[o]);u=!1},d(n){n&&m(e),q(a,n)}}}function ge(f){let e,t;const l=[f[1]];let s={};for(let r=0;r<l.length;r+=1)s=K(s,l[r]);return e=new ve({props:s}),{c(){T(e.$$.fragment)},l(r){A(e.$$.fragment,r)},m(r,u){N(e,r,u),t=!0},p(r,u){const c=u&1?Q(l,[G(r[1])]):{};e.$set(c)},i(r){t||(v(e.$$.fragment,r),t=!0)},o(r){D(e.$$.fragment,r),t=!1},d(r){P(e,r)}}}function Se(f){let e,t,l,s,r,u,c,a,h,n,o=f[0].links!=null&&ce(f);u=new Pe({});let i=f[0].projects!=null&&ue(f),_=f[0].toybox!=null&&de(f),g=f[0].shelf!=null&&me(f);return{c(){e=y("meta"),t=y("link"),l=V(),s=y("section"),o&&o.c(),r=V(),T(u.$$.fragment),c=V(),i&&i.c(),a=V(),_&&_.c(),h=V(),g&&g.c(),this.h()},l(b){const k=Ee("svelte-1ou5f5j",document.head);e=w(k,"META",{name:!0,content:!0}),t=w(k,"LINK",{href:!0,rel:!0}),k.forEach(m),l=R(b),s=w(b,"SECTION",{});var E=I(s);o&&o.l(E),r=R(E),A(u.$$.fragment,E),c=R(E),i&&i.l(E),a=R(E),_&&_.l(E),h=R(E),g&&g.l(E),E.forEach(m),this.h()},h(){document.title="darthvid",d(e,"name","description"),d(e,"content","a personal homepage"),d(t,"href","https://fonts.googleapis.com/css?family=Source+Code+Pro|Noto+Sans+JP&display=swap"),d(t,"rel","stylesheet")},m(b,k){p(document.head,e),p(document.head,t),L(b,l,k),L(b,s,k),o&&o.m(s,null),p(s,r),N(u,s,null),p(s,c),i&&i.m(s,null),p(s,a),_&&_.m(s,null),p(s,h),g&&g.m(s,null),n=!0},p(b,[k]){b[0].links!=null?o?(o.p(b,k),k&1&&v(o,1)):(o=ce(b),o.c(),v(o,1),o.m(s,r)):o&&(U(),D(o,1,1,()=>{o=null}),X()),b[0].projects!=null?i?(i.p(b,k),k&1&&v(i,1)):(i=ue(b),i.c(),v(i,1),i.m(s,a)):i&&(U(),D(i,1,1,()=>{i=null}),X()),b[0].toybox!=null?_?(_.p(b,k),k&1&&v(_,1)):(_=de(b),_.c(),v(_,1),_.m(s,h)):_&&(U(),D(_,1,1,()=>{_=null}),X()),b[0].shelf!=null?g?(g.p(b,k),k&1&&v(g,1)):(g=me(b),g.c(),v(g,1),g.m(s,null)):g&&(U(),D(g,1,1,()=>{g=null}),X())},i(b){n||(v(o),v(u.$$.fragment,b),v(i),v(_),v(g),n=!0)},o(b){D(o),D(u.$$.fragment,b),D(i),D(_),D(g),n=!1},d(b){m(e),m(t),b&&m(l),b&&m(s),o&&o.d(),P(u),i&&i.d(),_&&_.d(),g&&g.d()}}}function ze(f,e,t){var l;try{l=Ie,l==null&&(l={})}catch{l={}}return[l]}class We extends z{constructor(e){super(),F(this,e,ze,Se,O,{})}}export{We as default};
