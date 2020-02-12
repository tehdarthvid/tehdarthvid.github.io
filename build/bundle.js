var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function r(t){t.forEach(n)}function o(t){return"function"==typeof t}function a(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function c(t,n){t.appendChild(n)}function i(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function u(){return d(" ")}function f(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}let s;function l(t){s=t}const h=[],p=[],m=[],g=[],$=Promise.resolve();let b=!1;function v(t){m.push(t)}let y=!1;const w=new Set;function x(){if(!y){y=!0;do{for(let t=0;t<h.length;t+=1){const n=h[t];l(n),_(n.$$)}for(h.length=0;p.length;)p.pop()();for(let t=0;t<m.length;t+=1){const n=m[t];w.has(n)||(w.add(n),n())}m.length=0}while(h.length);for(;g.length;)g.pop()();b=!1,y=!1,w.clear()}}function _(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(v)}}const L=new Set;function T(t,n){-1===t.$$.dirty[0]&&(h.push(t),b||(b=!0,$.then(x)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function H(a,c,i,d,u,f,h=[-1]){const p=s;l(a);const m=c.props||{},g=a.$$={fragment:null,ctx:null,props:f,update:t,not_equal:u,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(p?p.$$.context:[]),callbacks:e(),dirty:h};let $=!1;var b,y;g.ctx=i?i(a,m,(t,n,...e)=>{const r=e.length?e[0]:n;return g.ctx&&u(g.ctx[t],g.ctx[t]=r)&&(g.bound[t]&&g.bound[t](r),$&&T(a,t)),n}):[],g.update(),$=!0,r(g.before_update),g.fragment=!!d&&d(g.ctx),c.target&&(c.hydrate?g.fragment&&g.fragment.l(function(t){return Array.from(t.childNodes)}(c.target)):g.fragment&&g.fragment.c(),c.intro&&((b=a.$$.fragment)&&b.i&&(L.delete(b),b.i(y))),function(t,e,a){const{fragment:c,on_mount:i,on_destroy:d,after_update:u}=t.$$;c&&c.m(e,a),v(()=>{const e=i.map(n).filter(o);d?d.push(...e):r(e),t.$$.on_mount=[]}),u.forEach(v)}(a,c.target,c.anchor),x()),l(p)}function M(n){let e,r,o,a,s,l,h,p,m,g,$,b,v,y,w,x,_,L,T,H,M,C,j,k,A;return{c(){e=i("main"),r=i("h1"),r.innerHTML='<a href="/">darthvid</a>',o=u(),a=i("p"),a.textContent="サイトへようこそ!",s=u(),l=i("h2"),l.textContent="social",h=u(),p=i("div"),p.innerHTML='\n    【\n    <a href="https://twitter.com/darthvid">Twitter</a>\n    】\n  ',m=u(),g=i("div"),g.innerHTML='\n    【\n    <a href="https://github.com/tehdarthvid">GitHub</a>\n    】\n  ',$=u(),b=i("div"),b.innerHTML='\n    【\n    <a href="https://www.linkedin.com/in/darthvid/">LinkedIn</a>\n    】\n  ',v=u(),y=i("h2"),y.textContent="projects",w=u(),x=i("div"),x.innerHTML='\n    【\n    <a href="https://dna.darthvid.com">influences</a>\n    】\n  ',_=u(),L=i("div"),T=d(" \n    "),H=i("p"),H.innerHTML='<a href="https://github.com/tehdarthvid/tehdarthvid.github.io/tree/dev">\n        source\n      </a>',M=u(),C=i("a"),j=d("build "),k=d(n[0]),f(C,"href",A="https://github.com/tehdarthvid/tehdarthvid.github.io/commit/21786e7ecb0f52fff3d342791f33c695a8c22d2c"),f(L,"id","build"),f(L,"class","svelte-1r4sffi"),f(e,"class","svelte-1r4sffi")},m(t,n){!function(t,n,e){t.insertBefore(n,e||null)}(t,e,n),c(e,r),c(e,o),c(e,a),c(e,s),c(e,l),c(e,h),c(e,p),c(e,m),c(e,g),c(e,$),c(e,b),c(e,v),c(e,y),c(e,w),c(e,x),c(e,_),c(e,L),c(L,T),c(L,H),c(L,M),c(L,C),c(C,j),c(C,k)},p(t,[n]){1&n&&function(t,n){n=""+n,t.data!==n&&(t.data=n)}(k,t[0])},i:t,o:t,d(t){var n;t&&(n=e).parentNode.removeChild(n)}}}function C(t,n,e){(t=>{function n(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],n("js",new Date),n("config",t);const e=document.createElement("script");e.src=`https://www.googletagmanager.com/gtag/js?id=${t}`,document.body.appendChild(e)})("UA-1020096-2");var r="21786e7ecb0f52fff3d342791f33c695a8c22d2c";return[r=r.slice(0,7)]}return new class extends class{$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}{constructor(t){super(),H(this,t,C,M,a,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
