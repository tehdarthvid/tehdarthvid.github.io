import{S as N,i as O,s as P,k as w,l as y,m as I,h as m,n as d,b as $,C as p,B,j as pe,E as M,q as Y,r as A,u as Z,a as V,c as R,p as U,K as F,L as ke,M as we,N as S,f as v,g as j,t as E,d as X,J as ye,O as K,w as C,x as H,y as T,z,D as De,P as J,Q as W,R as Q}from"../../chunks/index-f5dc60c2.js";import{j as Ie}from"../../chunks/content-79abb6f4.js";import{r as Ee}from"../../chunks/index-07f76fe9.js";function te(f){let e,t;return{c(){e=w("img"),this.h()},l(l){e=y(l,"IMG",{class:!0,alt:!0,src:!0}),this.h()},h(){d(e,"class","icon svelte-l3etzh"),d(e,"alt",f[0]),M(e.src,t=f[2])||d(e,"src",t)},m(l,s){$(l,e,s)},p(l,s){s&1&&d(e,"alt",l[0]),s&4&&!M(e.src,t=l[2])&&d(e,"src",t)},d(l){l&&m(e)}}}function Le(f){let e,t,l=f[3]&&te(f);return{c(){e=w("div"),t=w("a"),l&&l.c(),this.h()},l(s){e=y(s,"DIV",{class:!0});var r=I(e);t=y(r,"A",{href:!0,title:!0,target:!0});var u=I(t);l&&l.l(u),u.forEach(m),r.forEach(m),this.h()},h(){d(t,"href",f[1]),d(t,"title",f[0]),d(t,"target","noopener noreferrer"),d(e,"class","icon svelte-l3etzh")},m(s,r){$(s,e,r),p(e,t),l&&l.m(t,null)},p(s,[r]){s[3]?l?l.p(s,r):(l=te(s),l.c(),l.m(t,null)):l&&(l.d(1),l=null),r&2&&d(t,"href",s[1]),r&1&&d(t,"title",s[0])},i:B,o:B,d(s){s&&m(e),l&&l.d()}}}function $e(f,e,t){let{title:l}=e,{url:s}=e,{imgURL:r}=e,u=!1,c=null;pe(()=>{!u&&r&&(c=new Image,c.onload=n,c.src=r)});const n=()=>{t(3,u=!0)};return f.$$set=h=>{"title"in h&&t(0,l=h.title),"url"in h&&t(1,s=h.url),"imgURL"in h&&t(2,r=h.imgURL)},[l,s,r,u]}class ve extends N{constructor(e){super(),O(this,e,$e,Le,P,{title:0,url:1,imgURL:2})}}function Ve(f){let e,t,l,s,r;return{c(){e=w("div"),t=Y(`【
	`),l=w("a"),s=Y(f[0]),r=Y(`
	】`),this.h()},l(u){e=y(u,"DIV",{class:!0});var c=I(e);t=A(c,`【
	`),l=y(c,"A",{href:!0});var n=I(l);s=A(n,f[0]),n.forEach(m),r=A(c,`
	】`),c.forEach(m),this.h()},h(){d(l,"href",f[1]),d(e,"class","linkto")},m(u,c){$(u,e,c),p(e,t),p(e,l),p(l,s),p(e,r)},p(u,[c]){c&1&&Z(s,u[0]),c&2&&d(l,"href",u[1])},i:B,o:B,d(u){u&&m(e)}}}function Re(f,e,t){let{title:l}=e,{url:s}=e;return f.$$set=r=>{"title"in r&&t(0,l=r.title),"url"in r&&t(1,s=r.url)},[l,s]}class be extends N{constructor(e){super(),O(this,e,Re,Ve,P,{title:0,url:1})}}function Ue(f){let e,t;return{c(){e=w("div"),this.h()},l(l){e=y(l,"DIV",{class:!0,style:!0}),I(e).forEach(m),this.h()},h(){d(e,"class",t=S(f[1]?"card-bg card-bg__fade-in":"card-bg")+" svelte-3x4tdu"),U(e,"transform","translateX("+f[3]+"px) translateY("+f[2]+"px)"),U(e,"background-image","url("+f[0].imgURL+")")},m(l,s){$(l,e,s)},p(l,s){s&2&&t!==(t=S(l[1]?"card-bg card-bg__fade-in":"card-bg")+" svelte-3x4tdu")&&d(e,"class",t),s&12&&U(e,"transform","translateX("+l[3]+"px) translateY("+l[2]+"px)"),s&1&&U(e,"background-image","url("+l[0].imgURL+")")},d(l){l&&m(e)}}}function je(f){let e,t,l,s,r,u;return{c(){e=w("div"),t=w("video"),this.h()},l(c){e=y(c,"DIV",{class:!0,style:!0});var n=I(e);t=y(n,"VIDEO",{class:!0,src:!0}),I(t).forEach(m),n.forEach(m),this.h()},h(){d(t,"class","center_video svelte-3x4tdu"),M(t.src,l=f[0].vidURL)||d(t,"src",l),t.autoplay="true",t.loop="true",t.muted="true",d(e,"class",s=S(f[1]?"card-bg card-bg__fade-in":"card-bg")+" svelte-3x4tdu"),U(e,"transform","translateX("+f[3]+"px) translateY("+f[2]+"px)")},m(c,n){$(c,e,n),p(e,t),r||(u=F(t,"playing",f[6]),r=!0)},p(c,n){n&1&&!M(t.src,l=c[0].vidURL)&&d(t,"src",l),n&2&&s!==(s=S(c[1]?"card-bg card-bg__fade-in":"card-bg")+" svelte-3x4tdu")&&d(e,"class",s),n&12&&U(e,"transform","translateX("+c[3]+"px) translateY("+c[2]+"px)")},d(c){c&&m(e),r=!1,u()}}}function Xe(f){let e,t,l,s,r;return{c(){e=w("div"),t=w("iframe"),this.h()},l(u){e=y(u,"DIV",{class:!0,style:!0});var c=I(e);t=y(c,"IFRAME",{title:!0,class:!0,width:!0,height:!0,src:!0,frameborder:!0,allow:!0,loop:!0,onstatechange:!0}),I(t).forEach(m),c.forEach(m),this.h()},h(){d(t,"title",l=f[0].title?f[0].title:""),d(t,"class","center_video svelte-3x4tdu"),d(t,"width","560"),d(t,"height","315"),M(t.src,s="https://www.youtube.com/embed/"+f[0].ytVideoID+"?rel=0&controls=0&autoplay=1&mute=1&loop=1&playlist="+f[0].ytVideoID)||d(t,"src",s),d(t,"frameborder","0"),d(t,"allow",`accelerometer; autoplay; encrypted-media; gyroscope;
          picture-in-picture`),d(t,"loop","1"),t.allowFullscreen=!0,d(t,"onstatechange",f[6]),d(e,"class",r=S((f[1],"card-bg card-bg__fade-in"))+" svelte-3x4tdu"),U(e,"transform","translateX("+f[3]+"px) translateY("+f[2]+"px)")},m(u,c){$(u,e,c),p(e,t)},p(u,c){c&1&&l!==(l=u[0].title?u[0].title:"")&&d(t,"title",l),c&1&&!M(t.src,s="https://www.youtube.com/embed/"+u[0].ytVideoID+"?rel=0&controls=0&autoplay=1&mute=1&loop=1&playlist="+u[0].ytVideoID)&&d(t,"src",s),c&2&&r!==(r=S((u[1],"card-bg card-bg__fade-in"))+" svelte-3x4tdu")&&d(e,"class",r),c&12&&U(e,"transform","translateX("+u[3]+"px) translateY("+u[2]+"px)")},d(u){u&&m(e)}}}function Ye(f){let e,t,l,s,r,u=(f[0].title?f[0].title:"")+"",c,n,h,i=(f[0].date?f[0].date:"")+"",o,a,_;function g(D,L){if(D[0].ytVideoID!=null)return Xe;if(D[0].vidURL!=null)return je;if(D[0].imgURL!=null)return Ue}let b=g(f),k=b&&b(f);return{c(){e=w("div"),t=w("div"),k&&k.c(),l=V(),s=w("div"),r=w("h1"),c=Y(u),n=V(),h=w("p"),o=Y(i),this.h()},l(D){e=y(D,"DIV",{class:!0});var L=I(e);t=y(L,"DIV",{class:!0,style:!0});var q=I(t);k&&k.l(q),l=R(q),s=y(q,"DIV",{class:!0});var G=I(s);r=y(G,"H1",{class:!0});var x=I(r);c=A(x,u),x.forEach(m),n=R(G),h=y(G,"P",{class:!0});var ee=I(h);o=A(ee,i),ee.forEach(m),G.forEach(m),q.forEach(m),L.forEach(m),this.h()},h(){d(r,"class","svelte-3x4tdu"),d(h,"class","svelte-3x4tdu"),d(s,"class","card-info svelte-3x4tdu"),d(t,"class","card svelte-3x4tdu"),U(t,"transform","rotateY("+f[5]+"deg) rotateX("+f[4]+"deg)"),d(e,"class","card-wrap svelte-3x4tdu")},m(D,L){$(D,e,L),p(e,t),k&&k.m(t,null),p(t,l),p(t,s),p(s,r),p(r,c),p(s,n),p(s,h),p(h,o),a||(_=[F(e,"mousemove",f[7]),F(e,"mouseenter",f[8]),F(e,"mouseleave",f[9]),F(e,"dblclick",f[10])],a=!0)},p(D,[L]){b===(b=g(D))&&k?k.p(D,L):(k&&k.d(1),k=b&&b(D),k&&(k.c(),k.m(t,l))),L&1&&u!==(u=(D[0].title?D[0].title:"")+"")&&Z(c,u),L&1&&i!==(i=(D[0].date?D[0].date:"")+"")&&Z(o,i),L&48&&U(t,"transform","rotateY("+D[5]+"deg) rotateX("+D[4]+"deg)")},i:B,o:B,d(D){D&&m(e),k&&k.d(),a=!1,ke(_)}}}function Ae(f,e,t){let l,s,r,u,{params:c}=e,n=0,h=0,i=!1,o=null,a=null;pe(()=>{!c.vidURL&&!i&&c.imgURL&&(o=new Image,o.onload=_,o.src=c.imgURL)}),we(()=>{clearTimeout(a)});const _=()=>{t(1,i=!0)};function g(L){t(11,n=(L.pageX-this.offsetLeft-this.clientWidth/2)/this.clientWidth),t(12,h=(L.pageY-this.offsetTop-this.clientHeight/2)/this.clientHeight)}function b(L){clearTimeout(a)}function k(L){a=setTimeout(()=>{t(5,l=t(4,s=t(3,r=t(2,u=0))))},1e3)}function D(L){console.log(c.title+" dblclick"),window.open(c.url,"_blank")}return f.$$set=L=>{"params"in L&&t(0,c=L.params)},f.$$.update=()=>{f.$$.dirty&2048&&t(5,l=n*30),f.$$.dirty&4096&&t(4,s=h*-30),f.$$.dirty&2048&&t(3,r=n*-40),f.$$.dirty&4096&&t(2,u=h*-40)},[c,i,u,r,s,l,_,g,b,k,D,n,h]}class Be extends N{constructor(e){super(),O(this,e,Ae,Ye,P,{params:0})}}const Me=[{title:"ぼっち・ざ・ろっく!",url:"https://bocchi.rocks/",imgURL:"https://wannasin.s3.ap-southeast-1.amazonaws.com/news/attach/WePwFyCiA9Q2IXMi.jpg",date:"8 Oct 2022",added:"6 Nov 2022",ref:"https://twitter.com/BTR_anime/status/1578759621124161538",hastag:"#ぼっち・ざ・ろっく"},{title:"Dwarf Fortress (Steam)",url:"https://twitter.com/KitfoxGames/status/1600146060357341184",ytVideoID:"xawsp16oxb0",imgURL:"https://www.kitfoxgames.com/press/dwarf_fortress/images/DFKeyArt_1920Horizontalnologo.png",date:"8 Aug 2006, 6 Dec 2022 (Steam)",added:"19 Dec 2022"},{title:"英雄伝説零の軌跡",url:"https://www.falcom.co.jp/zero_psp/",imgURL:"https://m.media-amazon.com/images/I/81gXJmATGDL._AC_SY679_.jpg",date:"30 Sep 2010",added:"24 Dec 2022"},{title:"サマータイムレンダ",url:"https://shonenjumpplus.com/episode/13932016480029133982",imgURL:"https://upload.wikimedia.org/wikipedia/en/7/79/Summer_Time_Rendering_volume_1_cover.jpg",date:"23 Oct 2017 - 1 Feb 2021",added:"3 Dec 2022",hastag:"#サマータイムレンダ"},{title:"Do It Yourself!! -どぅー・いっと・ゆあせるふ-",url:"https://diy-anime.com/",imgURL:"https://diy-anime.com/assets/images/pc/index/img_kv-8.png",date:"6 Oct 2022",added:"18 Dec 2022",ref:"https://twitter.com/diy_anime/status/1577682526625181698",hastag:"#diyアニメ"},{title:"艦これ いつかあの海で",url:"https://kancolle-itsuumi.com/",imgURL:"https://kancolle-itsuumi.com/core_sys/images/main/tz/kv2.webp",date:"4 Nov 2022",added:"3 Dec 2022",ref:"",hastag:"#艦これ"},{title:"Blue Archive",url:"https://bluearchive.nexon.com/",imgURL:"https://static.wikia.nocookie.net/blue-archive/images/4/44/BA_Visual_1.png",date:"4 Feb 2021",added:"8 Mar 2022",ref:"https://www.siliconera.com/blue-archive-release-date-set-for-february-2021-in-japan/"}];function Se(f){f(Me)}const Ce=Ee(null,function(e){return Se(e),function(){}});function le(f,e,t){const l=f.slice();return l[1]=e[t],l}function re(f){let e,t,l,s,r,u=f[0],c=[];for(let h=0;h<u.length;h+=1)c[h]=se(le(f,u,h));const n=h=>E(c[h],1,1,()=>{c[h]=null});return{c(){e=w("h2"),t=Y("currently into"),l=V(),s=w("div");for(let h=0;h<c.length;h+=1)c[h].c();this.h()},l(h){e=y(h,"H2",{});var i=I(e);t=A(i,"currently into"),i.forEach(m),l=R(h),s=y(h,"DIV",{class:!0});var o=I(s);for(let a=0;a<c.length;a+=1)c[a].l(o);o.forEach(m),this.h()},h(){d(s,"class","container svelte-p3bha1")},m(h,i){$(h,e,i),p(e,t),$(h,l,i),$(h,s,i);for(let o=0;o<c.length;o+=1)c[o].m(s,null);r=!0},p(h,i){if(i&1){u=h[0];let o;for(o=0;o<u.length;o+=1){const a=le(h,u,o);c[o]?(c[o].p(a,i),v(c[o],1)):(c[o]=se(a),c[o].c(),v(c[o],1),c[o].m(s,null))}for(j(),o=u.length;o<c.length;o+=1)n(o);X()}},i(h){if(!r){for(let i=0;i<u.length;i+=1)v(c[i]);r=!0}},o(h){c=c.filter(Boolean);for(let i=0;i<c.length;i+=1)E(c[i]);r=!1},d(h){h&&m(e),h&&m(l),h&&m(s),K(c,h)}}}function se(f){let e,t;return e=new Be({props:{params:{...f[1]}}}),{c(){C(e.$$.fragment)},l(l){H(e.$$.fragment,l)},m(l,s){T(e,l,s),t=!0},p(l,s){const r={};s&1&&(r.params={...l[1]}),e.$set(r)},i(l){t||(v(e.$$.fragment,l),t=!0)},o(l){E(e.$$.fragment,l),t=!1},d(l){z(e,l)}}}function He(f){let e,t,l=f[0]!=null&&re(f);return{c(){e=w("div"),l&&l.c(),this.h()},l(s){e=y(s,"DIV",{id:!0});var r=I(e);l&&l.l(r),r.forEach(m),this.h()},h(){d(e,"id","ran-into")},m(s,r){$(s,e,r),l&&l.m(e,null),t=!0},p(s,[r]){s[0]!=null?l?(l.p(s,r),r&1&&v(l,1)):(l=re(s),l.c(),v(l,1),l.m(e,null)):l&&(j(),E(l,1,1,()=>{l=null}),X())},i(s){t||(v(l),t=!0)},o(s){E(l),t=!1},d(s){s&&m(e),l&&l.d()}}}function Te(f,e,t){let l;return ye(f,Ce,s=>t(0,l=s)),[l]}class ze extends N{constructor(e){super(),O(this,e,Te,He,P,{})}}function ie(f,e,t){const l=f.slice();return l[1]=e[t],l}function ae(f,e,t){const l=f.slice();return l[1]=e[t],l}function ne(f,e,t){const l=f.slice();return l[1]=e[t],l}function oe(f,e,t){const l=f.slice();return l[1]=e[t],l}function ce(f){let e,t,l,s,r,u,c=f[0].links,n=[];for(let i=0;i<c.length;i+=1)n[i]=fe(oe(f,c,i));const h=i=>E(n[i],1,1,()=>{n[i]=null});return{c(){e=w("div"),t=w("h2"),l=Y("is at"),s=V(),r=w("div");for(let i=0;i<n.length;i+=1)n[i].c();this.h()},l(i){e=y(i,"DIV",{id:!0});var o=I(e);t=y(o,"H2",{});var a=I(t);l=A(a,"is at"),a.forEach(m),s=R(o),r=y(o,"DIV",{class:!0});var _=I(r);for(let g=0;g<n.length;g+=1)n[g].l(_);_.forEach(m),o.forEach(m),this.h()},h(){d(r,"class","wrapus svelte-1frrjok"),d(e,"id","is-at")},m(i,o){$(i,e,o),p(e,t),p(t,l),p(e,s),p(e,r);for(let a=0;a<n.length;a+=1)n[a].m(r,null);u=!0},p(i,o){if(o&1){c=i[0].links;let a;for(a=0;a<c.length;a+=1){const _=oe(i,c,a);n[a]?(n[a].p(_,o),v(n[a],1)):(n[a]=fe(_),n[a].c(),v(n[a],1),n[a].m(r,null))}for(j(),a=c.length;a<n.length;a+=1)h(a);X()}},i(i){if(!u){for(let o=0;o<c.length;o+=1)v(n[o]);u=!0}},o(i){n=n.filter(Boolean);for(let o=0;o<n.length;o+=1)E(n[o]);u=!1},d(i){i&&m(e),K(n,i)}}}function fe(f){let e,t;const l=[f[1]];let s={};for(let r=0;r<l.length;r+=1)s=J(s,l[r]);return e=new be({props:s}),{c(){C(e.$$.fragment)},l(r){H(e.$$.fragment,r)},m(r,u){T(e,r,u),t=!0},p(r,u){const c=u&1?W(l,[Q(r[1])]):{};e.$set(c)},i(r){t||(v(e.$$.fragment,r),t=!0)},o(r){E(e.$$.fragment,r),t=!1},d(r){z(e,r)}}}function ue(f){let e,t,l,s,r,u,c=f[0].projects,n=[];for(let i=0;i<c.length;i+=1)n[i]=he(ne(f,c,i));const h=i=>E(n[i],1,1,()=>{n[i]=null});return{c(){e=w("div"),t=w("h2"),l=Y("dabbles in"),s=V(),r=w("div");for(let i=0;i<n.length;i+=1)n[i].c();this.h()},l(i){e=y(i,"DIV",{id:!0});var o=I(e);t=y(o,"H2",{});var a=I(t);l=A(a,"dabbles in"),a.forEach(m),s=R(o),r=y(o,"DIV",{class:!0});var _=I(r);for(let g=0;g<n.length;g+=1)n[g].l(_);_.forEach(m),o.forEach(m),this.h()},h(){d(r,"class","wrapus svelte-1frrjok"),d(e,"id","dabbles-in")},m(i,o){$(i,e,o),p(e,t),p(t,l),p(e,s),p(e,r);for(let a=0;a<n.length;a+=1)n[a].m(r,null);u=!0},p(i,o){if(o&1){c=i[0].projects;let a;for(a=0;a<c.length;a+=1){const _=ne(i,c,a);n[a]?(n[a].p(_,o),v(n[a],1)):(n[a]=he(_),n[a].c(),v(n[a],1),n[a].m(r,null))}for(j(),a=c.length;a<n.length;a+=1)h(a);X()}},i(i){if(!u){for(let o=0;o<c.length;o+=1)v(n[o]);u=!0}},o(i){n=n.filter(Boolean);for(let o=0;o<n.length;o+=1)E(n[o]);u=!1},d(i){i&&m(e),K(n,i)}}}function he(f){let e,t;const l=[f[1]];let s={};for(let r=0;r<l.length;r+=1)s=J(s,l[r]);return e=new be({props:s}),{c(){C(e.$$.fragment)},l(r){H(e.$$.fragment,r)},m(r,u){T(e,r,u),t=!0},p(r,u){const c=u&1?W(l,[Q(r[1])]):{};e.$set(c)},i(r){t||(v(e.$$.fragment,r),t=!0)},o(r){E(e.$$.fragment,r),t=!1},d(r){z(e,r)}}}function de(f){let e,t,l,s,r,u,c=f[0].toybox,n=[];for(let i=0;i<c.length;i+=1)n[i]=_e(ae(f,c,i));const h=i=>E(n[i],1,1,()=>{n[i]=null});return{c(){e=w("div"),t=w("h2"),l=Y("plays with"),s=V(),r=w("div");for(let i=0;i<n.length;i+=1)n[i].c();this.h()},l(i){e=y(i,"DIV",{id:!0});var o=I(e);t=y(o,"H2",{});var a=I(t);l=A(a,"plays with"),a.forEach(m),s=R(o),r=y(o,"DIV",{class:!0});var _=I(r);for(let g=0;g<n.length;g+=1)n[g].l(_);_.forEach(m),o.forEach(m),this.h()},h(){d(r,"class","wrapus svelte-1frrjok"),d(e,"id","plays-with")},m(i,o){$(i,e,o),p(e,t),p(t,l),p(e,s),p(e,r);for(let a=0;a<n.length;a+=1)n[a].m(r,null);u=!0},p(i,o){if(o&1){c=i[0].toybox;let a;for(a=0;a<c.length;a+=1){const _=ae(i,c,a);n[a]?(n[a].p(_,o),v(n[a],1)):(n[a]=_e(_),n[a].c(),v(n[a],1),n[a].m(r,null))}for(j(),a=c.length;a<n.length;a+=1)h(a);X()}},i(i){if(!u){for(let o=0;o<c.length;o+=1)v(n[o]);u=!0}},o(i){n=n.filter(Boolean);for(let o=0;o<n.length;o+=1)E(n[o]);u=!1},d(i){i&&m(e),K(n,i)}}}function _e(f){let e,t;const l=[f[1]];let s={};for(let r=0;r<l.length;r+=1)s=J(s,l[r]);return e=new ve({props:s}),{c(){C(e.$$.fragment)},l(r){H(e.$$.fragment,r)},m(r,u){T(e,r,u),t=!0},p(r,u){const c=u&1?W(l,[Q(r[1])]):{};e.$set(c)},i(r){t||(v(e.$$.fragment,r),t=!0)},o(r){E(e.$$.fragment,r),t=!1},d(r){z(e,r)}}}function me(f){let e,t,l,s,r,u,c=f[0].shelf,n=[];for(let i=0;i<c.length;i+=1)n[i]=ge(ie(f,c,i));const h=i=>E(n[i],1,1,()=>{n[i]=null});return{c(){e=w("div"),t=w("h2"),l=Y("wants to play"),s=V(),r=w("div");for(let i=0;i<n.length;i+=1)n[i].c();this.h()},l(i){e=y(i,"DIV",{id:!0});var o=I(e);t=y(o,"H2",{});var a=I(t);l=A(a,"wants to play"),a.forEach(m),s=R(o),r=y(o,"DIV",{class:!0});var _=I(r);for(let g=0;g<n.length;g+=1)n[g].l(_);_.forEach(m),o.forEach(m),this.h()},h(){d(r,"class","wrapus svelte-1frrjok"),d(e,"id","wants-to-play")},m(i,o){$(i,e,o),p(e,t),p(t,l),p(e,s),p(e,r);for(let a=0;a<n.length;a+=1)n[a].m(r,null);u=!0},p(i,o){if(o&1){c=i[0].shelf;let a;for(a=0;a<c.length;a+=1){const _=ie(i,c,a);n[a]?(n[a].p(_,o),v(n[a],1)):(n[a]=ge(_),n[a].c(),v(n[a],1),n[a].m(r,null))}for(j(),a=c.length;a<n.length;a+=1)h(a);X()}},i(i){if(!u){for(let o=0;o<c.length;o+=1)v(n[o]);u=!0}},o(i){n=n.filter(Boolean);for(let o=0;o<n.length;o+=1)E(n[o]);u=!1},d(i){i&&m(e),K(n,i)}}}function ge(f){let e,t;const l=[f[1]];let s={};for(let r=0;r<l.length;r+=1)s=J(s,l[r]);return e=new ve({props:s}),{c(){C(e.$$.fragment)},l(r){H(e.$$.fragment,r)},m(r,u){T(e,r,u),t=!0},p(r,u){const c=u&1?W(l,[Q(r[1])]):{};e.$set(c)},i(r){t||(v(e.$$.fragment,r),t=!0)},o(r){E(e.$$.fragment,r),t=!1},d(r){z(e,r)}}}function Fe(f){let e,t,l,s,r,u,c,n,h,i,o=f[0].links!=null&&ce(f);u=new ze({});let a=f[0].projects!=null&&ue(f),_=f[0].toybox!=null&&de(f),g=f[0].shelf!=null&&me(f);return{c(){e=w("meta"),t=w("link"),l=V(),s=w("section"),o&&o.c(),r=V(),C(u.$$.fragment),c=V(),a&&a.c(),n=V(),_&&_.c(),h=V(),g&&g.c(),this.h()},l(b){const k=De("svelte-1ou5f5j",document.head);e=y(k,"META",{name:!0,content:!0}),t=y(k,"LINK",{href:!0,rel:!0}),k.forEach(m),l=R(b),s=y(b,"SECTION",{});var D=I(s);o&&o.l(D),r=R(D),H(u.$$.fragment,D),c=R(D),a&&a.l(D),n=R(D),_&&_.l(D),h=R(D),g&&g.l(D),D.forEach(m),this.h()},h(){document.title="darthvid",d(e,"name","description"),d(e,"content","a personal homepage"),d(t,"href","https://fonts.googleapis.com/css?family=Source+Code+Pro|Noto+Sans+JP&display=swap"),d(t,"rel","stylesheet")},m(b,k){p(document.head,e),p(document.head,t),$(b,l,k),$(b,s,k),o&&o.m(s,null),p(s,r),T(u,s,null),p(s,c),a&&a.m(s,null),p(s,n),_&&_.m(s,null),p(s,h),g&&g.m(s,null),i=!0},p(b,[k]){b[0].links!=null?o?(o.p(b,k),k&1&&v(o,1)):(o=ce(b),o.c(),v(o,1),o.m(s,r)):o&&(j(),E(o,1,1,()=>{o=null}),X()),b[0].projects!=null?a?(a.p(b,k),k&1&&v(a,1)):(a=ue(b),a.c(),v(a,1),a.m(s,n)):a&&(j(),E(a,1,1,()=>{a=null}),X()),b[0].toybox!=null?_?(_.p(b,k),k&1&&v(_,1)):(_=de(b),_.c(),v(_,1),_.m(s,h)):_&&(j(),E(_,1,1,()=>{_=null}),X()),b[0].shelf!=null?g?(g.p(b,k),k&1&&v(g,1)):(g=me(b),g.c(),v(g,1),g.m(s,null)):g&&(j(),E(g,1,1,()=>{g=null}),X())},i(b){i||(v(o),v(u.$$.fragment,b),v(a),v(_),v(g),i=!0)},o(b){E(o),E(u.$$.fragment,b),E(a),E(_),E(g),i=!1},d(b){m(e),m(t),b&&m(l),b&&m(s),o&&o.d(),z(u),a&&a.d(),_&&_.d(),g&&g.d()}}}function Ne(f,e,t){var l;try{l=Ie,l==null&&(l={})}catch{l={}}return[l]}class qe extends N{constructor(e){super(),O(this,e,Ne,Fe,P,{})}}export{qe as default};