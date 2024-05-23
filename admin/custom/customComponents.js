var ConfigCustomBackItUpSet;(()=>{"use strict";var z={23009:(n,l,_)=>{var u={"./Components":()=>Promise.all([_.e("vendors-node_modules_react-icons_fa_index_mjs"),_.e("vendors-src_AdapterExist_jsx-src_BackupNow_jsx-src_CheckConfigInvisible_jsx-src_DetectConfig_-7de9ab"),_.e("webpack_sharing_consume_default_react_react"),_.e("webpack_sharing_consume_default_prop-types_prop-types"),_.e("webpack_sharing_consume_default_iobroker_adapter-react-v5_iobroker_adapter-react-v5-webpack_s-344585"),_.e("src_Components_jsx")]).then(()=>()=>_(20507))},f=(d,g)=>(_.R=g,g=_.o(u,d)?u[d]():Promise.resolve().then(()=>{throw new Error('Module "'+d+'" does not exist in container.')}),_.R=void 0,g),v=(d,g)=>{if(_.S){var m="default",j=_.S[m];if(j&&j!==d)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return _.S[m]=d,_.I(m,g)}};_.d(l,{get:()=>f,init:()=>v})}},A={};function e(n){var l=A[n];if(l!==void 0)return l.exports;var _=A[n]={id:n,loaded:!1,exports:{}};return z[n].call(_.exports,_,_.exports,e),_.loaded=!0,_.exports}e.m=z,e.c=A,e.amdD=function(){throw new Error("define cannot be used indirect")},e.n=n=>{var l=n&&n.__esModule?()=>n.default:()=>n;return e.d(l,{a:l}),l},e.d=(n,l)=>{for(var _ in l)e.o(l,_)&&!e.o(n,_)&&Object.defineProperty(n,_,{enumerable:!0,get:l[_]})},e.f={},e.e=n=>Promise.all(Object.keys(e.f).reduce((l,_)=>(e.f[_](n,l),l),[])),e.u=n=>"static/js/"+n+"."+{"vendors-node_modules_mui_material_styles_styled_js-node_modules_mui_material_styles_useThemeP-5ae56a":"2decc6f8","vendors-node_modules_mui_material_colors_index_js-node_modules_mui_material_styles_index_js-n-119afd":"a0499c41","vendors-node_modules_mui_material_Button_Button_js-node_modules_mui_material_Checkbox_index_j-f7465f":"27ba5c92","vendors-node_modules_iobroker_adapter-react-v5_GenericApp_js":"21a840d4","vendors-node_modules_react-icons_fa_index_mjs":"8ca2b023","vendors-node_modules_iobroker_adapter-react-v5_assets_devices_parseNames_d_ts-node_modules_io-1d9f06":"5ceff8a2",webpack_sharing_consume_default_react_react:"9749d585","webpack_sharing_consume_default_prop-types_prop-types":"0e28b347","webpack_sharing_consume_default_react-dom_react-dom":"1f2f2a35","webpack_sharing_consume_default_iobroker_adapter-react-v5_iobroker_adapter-react-v5-webpack_s-344585":"12628b28","node_modules_iobroker_adapter-react-v5_assets_devices_sync_recursive_-node_modules_iobroker_a-b694110":"56f0526e","vendors-node_modules_mui_icons-material_esm_index_js":"baf6e6c7","vendors-node_modules_mui_material_index_js":"abe38e5c","vendors-node_modules_mui_styles_withStyles_withStyles_js":"a34a18ba","vendors-node_modules_mui_styles_index_js-node_modules_mui_utils_capitalize_capitalize_js-node-bfcaa8":"013ec20c","node_modules_prop-types_index_js":"7e14cd38","vendors-node_modules_react-dom_index_js":"fbaeb7bd",node_modules_react_index_js:"ca0c923d","vendors-src_AdapterExist_jsx-src_BackupNow_jsx-src_CheckConfigInvisible_jsx-src_DetectConfig_-7de9ab":"0d619b0c",src_Components_jsx:"95d4e33a","node_modules_iobroker_adapter-react-v5_assets_devices_sync_recursive_-node_modules_iobroker_a-b694111":"10cec9b6"}[n]+".chunk.js",e.miniCssF=n=>{},e.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch(n){if(typeof window=="object")return window}}(),e.o=(n,l)=>Object.prototype.hasOwnProperty.call(n,l),(()=>{var n={},l="iobroker-admin-component-backitup:";e.l=(_,u,f,v)=>{if(n[_]){n[_].push(u);return}var d,g;if(f!==void 0)for(var m=document.getElementsByTagName("script"),j=0;j<m.length;j++){var p=m[j];if(p.getAttribute("src")==_||p.getAttribute("data-webpack")==l+f){d=p;break}}d||(g=!0,d=document.createElement("script"),d.charset="utf-8",d.timeout=120,e.nc&&d.setAttribute("nonce",e.nc),d.setAttribute("data-webpack",l+f),d.src=_),n[_]=[u];var b=(C,w)=>{d.onerror=d.onload=null,clearTimeout(y);var x=n[_];if(delete n[_],d.parentNode&&d.parentNode.removeChild(d),x&&x.forEach(h=>h(w)),C)return C(w)},y=setTimeout(b.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=b.bind(null,d.onerror),d.onload=b.bind(null,d.onload),g&&document.head.appendChild(d)}})(),e.r=n=>{typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.nmd=n=>(n.paths=[],n.children||(n.children=[]),n),(()=>{e.S={};var n={},l={};e.I=(_,u)=>{u||(u=[]);var f=l[_];if(f||(f=l[_]={}),!(u.indexOf(f)>=0)){if(u.push(f),n[_])return n[_];e.o(e.S,_)||(e.S[_]={});var v=e.S[_],d=b=>{typeof console!="undefined"&&console.warn&&console.warn(b)},g="iobroker-admin-component-backitup",m=(b,y,C,w)=>{var x=v[b]=v[b]||{},h=x[y];(!h||!h.loaded&&(!w!=!h.eager?w:g>h.from))&&(x[y]={get:C,from:g,eager:!!w})},j=b=>{var y=h=>d("Initialization of sharing external failed: "+h);try{var C=e(b);if(!C)return;var w=h=>h&&h.init&&h.init(e.S[_],u);if(C.then)return p.push(C.then(w,y));var x=w(C);if(x&&x.then)return p.push(x.catch(y))}catch(h){y(h)}},p=[];switch(_){case"default":m("@iobroker/adapter-react-v5","4.13.14",()=>Promise.all([e.e("vendors-node_modules_mui_material_styles_styled_js-node_modules_mui_material_styles_useThemeP-5ae56a"),e.e("vendors-node_modules_mui_material_colors_index_js-node_modules_mui_material_styles_index_js-n-119afd"),e.e("vendors-node_modules_mui_material_Button_Button_js-node_modules_mui_material_Checkbox_index_j-f7465f"),e.e("vendors-node_modules_iobroker_adapter-react-v5_GenericApp_js"),e.e("vendors-node_modules_react-icons_fa_index_mjs"),e.e("vendors-node_modules_iobroker_adapter-react-v5_assets_devices_parseNames_d_ts-node_modules_io-1d9f06"),e.e("webpack_sharing_consume_default_react_react"),e.e("webpack_sharing_consume_default_prop-types_prop-types"),e.e("webpack_sharing_consume_default_react-dom_react-dom"),e.e("webpack_sharing_consume_default_iobroker_adapter-react-v5_iobroker_adapter-react-v5-webpack_s-344585"),e.e("node_modules_iobroker_adapter-react-v5_assets_devices_sync_recursive_-node_modules_iobroker_a-b694110")]).then(()=>()=>e(64620))),m("@mui/icons-material","5.15.18",()=>Promise.all([e.e("vendors-node_modules_mui_material_styles_styled_js-node_modules_mui_material_styles_useThemeP-5ae56a"),e.e("vendors-node_modules_mui_icons-material_esm_index_js"),e.e("webpack_sharing_consume_default_react_react"),e.e("webpack_sharing_consume_default_prop-types_prop-types")]).then(()=>()=>e(58597))),m("@mui/material","5.14.14",()=>Promise.all([e.e("vendors-node_modules_mui_material_styles_styled_js-node_modules_mui_material_styles_useThemeP-5ae56a"),e.e("vendors-node_modules_mui_material_colors_index_js-node_modules_mui_material_styles_index_js-n-119afd"),e.e("vendors-node_modules_mui_material_Button_Button_js-node_modules_mui_material_Checkbox_index_j-f7465f"),e.e("vendors-node_modules_mui_material_index_js"),e.e("webpack_sharing_consume_default_react_react"),e.e("webpack_sharing_consume_default_prop-types_prop-types"),e.e("webpack_sharing_consume_default_react-dom_react-dom")]).then(()=>()=>e(83709))),m("@mui/styles","5.14.14",()=>Promise.all([e.e("vendors-node_modules_mui_styles_withStyles_withStyles_js"),e.e("vendors-node_modules_mui_styles_index_js-node_modules_mui_utils_capitalize_capitalize_js-node-bfcaa8"),e.e("webpack_sharing_consume_default_react_react"),e.e("webpack_sharing_consume_default_prop-types_prop-types")]).then(()=>()=>e(92183))),m("prop-types","15.8.1",()=>e.e("node_modules_prop-types_index_js").then(()=>()=>e(75826))),m("react-dom","18.3.1",()=>Promise.all([e.e("vendors-node_modules_react-dom_index_js"),e.e("webpack_sharing_consume_default_react_react")]).then(()=>()=>e(22483))),m("react","18.3.1",()=>e.e("node_modules_react_index_js").then(()=>()=>e(77810)));break}return p.length?n[_]=Promise.all(p).then(()=>n[_]=1):n[_]=1}}})(),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var l=e.g.document;if(!n&&l&&(l.currentScript&&(n=l.currentScript.src),!n)){var _=l.getElementsByTagName("script");if(_.length)for(var u=_.length-1;u>-1&&(!n||!/^http(s?):/.test(n));)n=_[u--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),(()=>{var n=t=>{var a=s=>s.split(".").map(i=>+i==i?+i:i),r=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(t),o=r[1]?a(r[1]):[];return r[2]&&(o.length++,o.push.apply(o,a(r[2]))),r[3]&&(o.push([]),o.push.apply(o,a(r[3]))),o},l=(t,a)=>{t=n(t),a=n(a);for(var r=0;;){if(r>=t.length)return r<a.length&&(typeof a[r])[0]!="u";var o=t[r],s=(typeof o)[0];if(r>=a.length)return s=="u";var i=a[r],c=(typeof i)[0];if(s!=c)return s=="o"&&c=="n"||c=="s"||s=="u";if(s!="o"&&s!="u"&&o!=i)return o<i;r++}},_=t=>{var a=t[0],r="";if(t.length===1)return"*";if(a+.5){r+=a==0?">=":a==-1?"<":a==1?"^":a==2?"~":a>0?"=":"!=";for(var o=1,s=1;s<t.length;s++)o--,r+=(typeof(c=t[s]))[0]=="u"?"-":(o>0?".":"")+(o=2,c);return r}var i=[];for(s=1;s<t.length;s++){var c=t[s];i.push(c===0?"not("+k()+")":c===1?"("+k()+" || "+k()+")":c===2?i.pop()+" "+i.pop():_(c))}return k();function k(){return i.pop().replace(/^\((.+)\)$/,"$1")}},u=(t,a)=>{if(0 in t){a=n(a);var r=t[0],o=r<0;o&&(r=-r-1);for(var s=0,i=1,c=!0;;i++,s++){var k,B,P=i<t.length?(typeof t[i])[0]:"";if(s>=a.length||(B=(typeof(k=a[s]))[0])=="o")return!c||(P=="u"?i>r&&!o:P==""!=o);if(B=="u"){if(!c||P!="u")return!1}else if(c)if(P==B)if(i<=r){if(k!=t[i])return!1}else{if(o?k>t[i]:k<t[i])return!1;k!=t[i]&&(c=!1)}else if(P!="s"&&P!="n"){if(o||i<=r)return!1;c=!1,i--}else{if(i<=r||B<P!=o)return!1;c=!1}else P!="s"&&P!="n"&&(c=!1,i--)}}var O=[],V=O.pop.bind(O);for(s=1;s<t.length;s++){var M=t[s];O.push(M==1?V()|V():M==2?V()&V():M?u(M,a):!V())}return!!V()},f=(t,a)=>{var r=e.S[t];if(!r||!e.o(r,a))throw new Error("Shared module "+a+" doesn't exist in shared scope "+t);return r},v=(t,o)=>{var r=t[o],o=Object.keys(r).reduce((s,i)=>!s||l(s,i)?i:s,0);return o&&r[o]},d=(t,a)=>{var r=t[a];return Object.keys(r).reduce((o,s)=>!o||!r[o].loaded&&l(o,s)?s:o,0)},g=(t,a,r,o)=>"Unsatisfied version "+r+" from "+(r&&t[a][r].from)+" of shared singleton module "+a+" (required "+_(o)+")",m=(t,a,r,o)=>{var s=d(t,r);return h(t[r][s])},j=(t,a,r,o)=>{var s=d(t,r);return u(o,s)||w(g(t,r,s,o)),h(t[r][s])},p=(t,a,r,o)=>{var s=d(t,r);if(!u(o,s))throw new Error(g(t,r,s,o));return h(t[r][s])},b=(t,s,r)=>{var o=t[s],s=Object.keys(o).reduce((i,c)=>u(r,c)&&(!i||l(i,c))?c:i,0);return s&&o[s]},y=(t,a,r,o)=>{var s=t[r];return"No satisfying version ("+_(o)+") of shared module "+r+" found in shared scope "+a+`.
Available versions: `+Object.keys(s).map(i=>i+" from "+s[i].from).join(", ")},C=(t,a,r,o)=>{var s=b(t,r,o);if(s)return h(s);throw new Error(y(t,a,r,o))},w=t=>{typeof console!="undefined"&&console.warn&&console.warn(t)},x=(t,a,r,o)=>{w(y(t,a,r,o))},h=t=>(t.loaded=1,t.get()),S=t=>function(a,r,o,s){var i=e.I(a);return i&&i.then?i.then(t.bind(t,a,e.S[a],r,o,s)):t(a,e.S[a],r,o,s)},G=S((t,a,r)=>(f(t,r),h(v(a,r)))),U=S((t,a,r,o)=>a&&e.o(a,r)?h(v(a,r)):o()),L=S((t,a,r,o)=>(f(t,r),h(b(a,r,o)||x(a,t,r,o)||v(a,r)))),H=S((t,a,r)=>(f(t,r),m(a,t,r))),I=S((t,a,r,o)=>(f(t,r),j(a,t,r,o))),J=S((t,a,r,o)=>(f(t,r),C(a,t,r,o))),K=S((t,a,r,o)=>(f(t,r),p(a,t,r,o))),W=S((t,a,r,o,s)=>!a||!e.o(a,r)?s():h(b(a,r,o)||x(a,t,r,o)||v(a,r))),Q=S((t,a,r,o)=>!a||!e.o(a,r)?o():m(a,t,r)),E=S((t,a,r,o,s)=>!a||!e.o(a,r)?s():j(a,t,r,o)),R=S((t,a,r,o,s)=>{var i=a&&e.o(a,r)&&b(a,r,o);return i?h(i):s()}),X=S((t,a,r,o,s)=>!a||!e.o(a,r)?s():p(a,t,r,o)),T={},D={28437:()=>E("default","react",[0],()=>e.e("node_modules_react_index_js").then(()=>()=>e(77810))),95973:()=>E("default","prop-types",[0],()=>e.e("node_modules_prop-types_index_js").then(()=>()=>e(75826))),23479:()=>E("default","react-dom",[0],()=>e.e("vendors-node_modules_react-dom_index_js").then(()=>()=>e(22483))),67085:()=>E("default","@mui/material",[0],()=>Promise.all([e.e("vendors-node_modules_mui_material_styles_styled_js-node_modules_mui_material_styles_useThemeP-5ae56a"),e.e("vendors-node_modules_mui_material_colors_index_js-node_modules_mui_material_styles_index_js-n-119afd"),e.e("vendors-node_modules_mui_material_Button_Button_js-node_modules_mui_material_Checkbox_index_j-f7465f"),e.e("vendors-node_modules_mui_material_index_js"),e.e("webpack_sharing_consume_default_react-dom_react-dom")]).then(()=>()=>e(83709))),21839:()=>E("default","@mui/icons-material",[0],()=>Promise.all([e.e("vendors-node_modules_mui_material_styles_styled_js-node_modules_mui_material_styles_useThemeP-5ae56a"),e.e("vendors-node_modules_mui_icons-material_esm_index_js")]).then(()=>()=>e(58597))),70143:()=>E("default","@mui/styles",[0],()=>Promise.all([e.e("vendors-node_modules_mui_styles_withStyles_withStyles_js"),e.e("vendors-node_modules_mui_styles_index_js-node_modules_mui_utils_capitalize_capitalize_js-node-bfcaa8")]).then(()=>()=>e(92183))),37449:()=>E("default","@iobroker/adapter-react-v5",[0],()=>Promise.all([e.e("vendors-node_modules_mui_material_styles_styled_js-node_modules_mui_material_styles_useThemeP-5ae56a"),e.e("vendors-node_modules_mui_material_colors_index_js-node_modules_mui_material_styles_index_js-n-119afd"),e.e("vendors-node_modules_mui_material_Button_Button_js-node_modules_mui_material_Checkbox_index_j-f7465f"),e.e("vendors-node_modules_iobroker_adapter-react-v5_GenericApp_js"),e.e("vendors-node_modules_iobroker_adapter-react-v5_assets_devices_parseNames_d_ts-node_modules_io-1d9f06"),e.e("webpack_sharing_consume_default_react-dom_react-dom"),e.e("node_modules_iobroker_adapter-react-v5_assets_devices_sync_recursive_-node_modules_iobroker_a-b694111")]).then(()=>()=>e(64620)))},$={webpack_sharing_consume_default_react_react:[28437],"webpack_sharing_consume_default_prop-types_prop-types":[95973],"webpack_sharing_consume_default_react-dom_react-dom":[23479],"webpack_sharing_consume_default_iobroker_adapter-react-v5_iobroker_adapter-react-v5-webpack_s-344585":[67085,21839,70143,37449]},F={};e.f.consumes=(t,a)=>{e.o($,t)&&$[t].forEach(r=>{if(e.o(T,r))return a.push(T[r]);if(!F[r]){var o=c=>{T[r]=0,e.m[r]=k=>{delete e.c[r],k.exports=c()}};F[r]=!0;var s=c=>{delete T[r],e.m[r]=k=>{throw delete e.c[r],c}};try{var i=D[r]();i.then?a.push(T[r]=i.then(o).catch(s)):o(i)}catch(c){s(c)}}})}})(),(()=>{var n={ConfigCustomBackItUpSet:0};e.f.j=(u,f)=>{var v=e.o(n,u)?n[u]:void 0;if(v!==0)if(v)f.push(v[2]);else if(/^webpack_sharing_consume_default_(react(\-dom_react\-dom|_react)|iobroker_adapter\-react\-v5_iobroker_adapter\-react\-v5\-webpack_s\-344585|prop\-types_prop\-types)$/.test(u))n[u]=0;else{var d=new Promise((p,b)=>v=n[u]=[p,b]);f.push(v[2]=d);var g=e.p+e.u(u),m=new Error,j=p=>{if(e.o(n,u)&&(v=n[u],v!==0&&(n[u]=void 0),v)){var b=p&&(p.type==="load"?"missing":p.type),y=p&&p.target&&p.target.src;m.message="Loading chunk "+u+` failed.
(`+b+": "+y+")",m.name="ChunkLoadError",m.type=b,m.request=y,v[1](m)}};e.l(g,j,"chunk-"+u,u)}};var l=(u,f)=>{var v=f[0],d=f[1],g=f[2],m,j,p=0;if(v.some(y=>n[y]!==0)){for(m in d)e.o(d,m)&&(e.m[m]=d[m]);if(g)var b=g(e)}for(u&&u(f);p<v.length;p++)j=v[p],e.o(n,j)&&n[j]&&n[j][0](),n[j]=0},_=self.webpackChunkiobroker_admin_component_backitup=self.webpackChunkiobroker_admin_component_backitup||[];_.forEach(l.bind(null,0)),_.push=l.bind(null,_.push.bind(_))})(),e.nc=void 0;var N=e(23009);ConfigCustomBackItUpSet=N})();

//# sourceMappingURL=customComponents.js.map