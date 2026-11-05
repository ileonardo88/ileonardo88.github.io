const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/full-7ZJV44EE-C2gQC6Td.js","assets/rolldown-runtime-pP25SEvz.js","assets/index-D3cwJP-k.js","assets/index-lWv88M4F.css","assets/chunk-Y2EFNT5P-Njv6sRCL.js","assets/chunk-K2LNXU54-Cc8_L21G.js","assets/chunk-67Y7M4OJ-NURCM9tJ.js","assets/chunk-4P4VZS4P-DSDRWk2-.js","assets/chunk-NJTGWYYH-rFQ9QLGr.js","assets/chunk-GNR2HNTB-3ZRlK4j8.js","assets/dist-CKU5q6AG.js","assets/dist-DHVD3i_m.js","assets/Render-DQXAYUBI-9djuNlbs.js","assets/chunk-2CNEFIQP-BGfexIcd.js","assets/chunk-H635BA2V-BYU0WQcr.js","assets/Editor-44C53YAG-Bid-7w8j.js","assets/leaflet-src-DoC2Zuse.js"])))=>i.map(i=>d[i]);
import{n as e,r as t,t as n}from"./rolldown-runtime-pP25SEvz.js";import{S as r,a as i,l as a,s as o,x as s}from"./index-D3cwJP-k.js";import{a as c,i as l,n as u,o as d,r as f,t as p}from"./chunk-Y2EFNT5P-Njv6sRCL.js";import{t as m}from"./chunk-H635BA2V-BYU0WQcr.js";import{At as h,B as g,Bt as _,Ct as v,Dt as y,Et as b,Ft as x,G as S,Gt as C,H as w,Ht as T,I as E,It as D,J as O,Kt as k,L as A,Lt as j,M as ee,Mt as te,N as M,Nt as N,Ot as P,P as F,Pt as I,Q as ne,R as L,Rt as re,St as R,Tt as ie,U as ae,Ut as oe,Vt as se,W as ce,Wt as le,Y as ue,Z as de,_ as fe,_t as z,b as pe,bt as B,c as me,ct as he,d as ge,dt as _e,f as ve,ft as ye,g as be,gt as V,h as xe,ht as Se,it as Ce,j as we,jt as Te,k as Ee,kt as De,l as Oe,lt as ke,mt as Ae,n as je,nt as Me,ot as Ne,pt as Pe,q as Fe,qt as Ie,rt as Le,st as Re,tt as ze,u as Be,ut as Ve,v as He,wt as Ue,x as We,xt as Ge,y as Ke,yt as qe,z as Je,zt as Ye}from"./chunk-K2LNXU54-Cc8_L21G.js";import"./chunk-67Y7M4OJ-NURCM9tJ.js";import"./chunk-4P4VZS4P-DSDRWk2-.js";import"./chunk-NJTGWYYH-rFQ9QLGr.js";import{t as Xe}from"./chunk-GNR2HNTB-3ZRlK4j8.js";import{n as Ze}from"./commerce-DqH91hgU.js";import{n as Qe,r as $e,t as et}from"./RentalCaribe-BT1MSb3G.js";import{a as tt,c as nt,i as rt,n as it,o as at,r as ot,s as st,t as ct}from"./HaircareTheme-DUzLXFIJ.js";import{a as lt,n as ut,t as dt}from"./transfers-CLN6erya.js";/* empty css                  */import{t as ft}from"./WebsiteImagePicker-Bdroj7YP.js";var H=t(r(),1),U=o();d();var pt=p(`RichTextEditor`,m),mt=(0,H.memo)(({children:e,menu:t,readOnly:n=!1,field:r,inline:i=!1,editor:a,id:o})=>{let{initialHeight:s}=r,c=V(e=>e.currentRichText?.id===o&&i===e.currentRichText.inline),l=z(),u=(0,H.useCallback)(e=>{var t,n;(e.metaKey||e.ctrlKey)&&e.key.toLowerCase()===`i`&&(e.stopPropagation(),e.preventDefault(),(n=a==null?void 0:(t=a.commands).toggleItalic)==null||n.call(t)),e.key.toLowerCase()===`backspace`&&e.stopPropagation()},[a]),d=(0,H.useCallback)(e=>{var t;let n=!!((t=e.relatedTarget)?.closest)?.call(t,`[data-puck-rte-menu]`);e.relatedTarget&&!n?l.setState({currentRichText:null}):e.stopPropagation()},[l]);return(0,U.jsxs)(`div`,{className:pt({editor:!i,inline:i,isActive:c,disabled:n}),style:i?{}:{height:s??192,overflowY:`auto`},onKeyDownCapture:u,onBlur:d,children:[!i&&(0,U.jsx)(`div`,{className:pt(`menu`),children:t}),e]})});mt.displayName=`EditorInner`,d();var ht=(0,H.lazy)(()=>i(()=>import(`./full-7ZJV44EE-C2gQC6Td.js`).then(e=>({default:e.LoadedRichTextMenuFull})),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]))),gt=e=>(0,U.jsx)(H.Suspense,{fallback:(0,U.jsx)(Xe,c({},e)),children:(0,U.jsx)(ht,c({},e))}),_t=t(s(),1);function vt(e,t,n){var r=this,i=(0,H.useRef)(null),a=(0,H.useRef)(0),o=(0,H.useRef)(null),s=(0,H.useRef)([]),c=(0,H.useRef)(),l=(0,H.useRef)(),u=(0,H.useRef)(e),d=(0,H.useRef)(!0);(0,H.useEffect)(function(){u.current=e},[e]);var f=!t&&t!==0&&typeof window<`u`;if(typeof e!=`function`)throw TypeError(`Expected a function`);t=+t||0;var p=!!(n||={}).leading,m=!(`trailing`in n)||!!n.trailing,h=`maxWait`in n,g=h?Math.max(+n.maxWait||0,t):null;return(0,H.useEffect)(function(){return d.current=!0,function(){d.current=!1}},[]),(0,H.useMemo)(function(){var e=function(e){var t=s.current,n=c.current;return s.current=c.current=null,a.current=e,l.current=u.current.apply(n,t)},n=function(e,t){f&&cancelAnimationFrame(o.current),o.current=f?requestAnimationFrame(e):setTimeout(e,t)},_=function(e){if(!d.current)return!1;var n=e-i.current;return!i.current||n>=t||n<0||h&&e-a.current>=g},v=function(t){return o.current=null,m&&s.current?e(t):(s.current=c.current=null,l.current)},y=function e(){var r=Date.now();if(_(r))return v(r);if(d.current){var o=t-(r-i.current);n(e,h?Math.min(o,g-(r-a.current)):o)}},b=function(){var u=Date.now(),f=_(u);if(s.current=[].slice.call(arguments),c.current=r,i.current=u,f){if(!o.current&&d.current)return a.current=i.current,n(y,t),p?e(i.current):l.current;if(h)return n(y,t),e(i.current)}return o.current||n(y,t),l.current};return b.cancel=function(){o.current&&(f?cancelAnimationFrame(o.current):clearTimeout(o.current)),a.current=0,s.current=i.current=c.current=o.current=null},b.isPending=function(){return!!o.current},b.flush=function(){return o.current?v(Date.now()):l.current},b},[p,h,t,g,m,f])}function yt(e,t){return e===t}function bt(e){return typeof e==`function`?function(){return e}:e}function xt(e,t,n){var r,i,a=n&&n.equalityFn||yt,o=(r=(0,H.useState)(bt(e)),i=r[1],[r[0],(0,H.useCallback)(function(e){return i(bt(e))},[])]),s=o[0],c=o[1],l=vt((0,H.useCallback)(function(e){return c(e)},[c]),t,n),u=(0,H.useRef)(e);return a(u.current,e)||(l(e),u.current=e),[s,l]}d(),d(),d(),d(),d(),d();var St=(e,t=e)=>({slot:({value:n,propName:r,field:i,isReadOnly:a})=>{let o=a?t:e;return e=>o(l(c({allow:i?.type===`slot`?i.allow:[],disallow:i?.type===`slot`?i.disallow:[]},e),{zone:r,content:n}))}});d(),d(),d();function Ct(e,t,n){let r={};return Object.keys(e).forEach(i=>{let a=i;r[a]=r=>{var i=r,{parentId:o}=i,s=f(i,[`parentId`]);let u=s.propPath.replace(/\[\d+\]/g,`[*]`),d=t?.[s.propPath]||t?.[u]||n||!1,p=e[a];return p?.(l(c({},s),{field:s.field,isReadOnly:d,componentId:o}))}}),r}function wt(e,t,n,r,i){let a=(0,H.useMemo)(()=>Ct(n,r,i),[n,r,i]),o=(0,H.useMemo)(()=>_(t,a,e).props,[e,t,a]);return(0,H.useMemo)(()=>c(c({},t.props),o),[t.props,o])}function Tt(e,t,n,r=n,i,a){return wt(e,t,St(n,r),i,a)}d(),d();var Et=p(`RichTextEditor`,m);function Dt({content:e}){return(0,U.jsx)(`div`,{className:Et(),children:(0,U.jsx)(`div`,{className:`rich-text`,dangerouslySetInnerHTML:{__html:e}})})}d();var Ot=(e,t,n)=>{if(!e)return null;if(t.length===0)return n(e);let[r,...i]=t;return Array.isArray(e)?e.map(e=>Ot(e,t,n)):l(c({},e),{[r]:Ot(e[r],i,n)})},kt=(0,H.lazy)(()=>i(()=>import(`./Render-DQXAYUBI-9djuNlbs.js`).then(e=>({default:e.RichTextRender})),__vite__mapDeps([12,1,2,3,4,11,13,14])));function At(e,t){let n=(e,t=[])=>{if(!e)return[];let r=[];for(let[i,a]of Object.entries(e)){let e=[...t,i];a.type===`richtext`&&r.push({path:e,field:a}),a.type===`array`&&`arrayFields`in a&&r.push(...n(a.arrayFields,e)),a.type===`object`&&`objectFields`in a&&r.push(...n(a.objectFields,e))}return r},r=(0,H.useMemo)(()=>n(e),[e]);return(0,H.useMemo)(()=>{if(!r?.length)return{};let e=c({},t);for(let{path:t,field:n}of r)e=Ot(e,t,e=>(0,U.jsx)(H.Suspense,{fallback:(0,U.jsx)(Dt,{content:e}),children:(0,U.jsx)(kt,{content:e,field:n})},t.join(`.`)));return e},[r,t,e])}d();var jt=e=>(0,U.jsx)(Nt,c({},e)),Mt=({config:e,item:t,metadata:n})=>{let r=e.components[t.type],i=Tt(e,t,t=>(0,U.jsx)(jt,l(c({},t),{config:e,metadata:n}))),a=At(r.fields,i);return(0,U.jsx)(r.render,l(c(c({},i),a),{puck:l(c({},i.puck),{metadata:n||{}})}))},Nt=(0,H.forwardRef)(function({className:e,style:t,content:n,config:r,metadata:i,as:a},o){return(0,U.jsx)(a??`div`,{className:e,style:t,ref:o,children:n.map(e=>r.components[e.type]?(0,U.jsx)(Mt,{config:r,item:e,metadata:i},e.props.id):null)})}),Pt=e=>Symbol.iterator in e,Ft=e=>`entries`in e,It=(e,t)=>{let n=e instanceof Map?e:new Map(e.entries()),r=t instanceof Map?t:new Map(t.entries());if(n.size!==r.size)return!1;for(let[e,t]of n)if(!r.has(e)||!Object.is(t,r.get(e)))return!1;return!0},Lt=(e,t)=>{let n=e[Symbol.iterator](),r=t[Symbol.iterator](),i=n.next(),a=r.next();for(;!i.done&&!a.done;){if(!Object.is(i.value,a.value))return!1;i=n.next(),a=r.next()}return!!i.done&&!!a.done};function Rt(e,t){return Object.is(e,t)?!0:typeof e!=`object`||!e||typeof t!=`object`||!t||Object.getPrototypeOf(e)!==Object.getPrototypeOf(t)?!1:Pt(e)&&Pt(t)?Ft(e)&&Ft(t)?It(e,t):Lt(e,t):It({entries:()=>Object.entries(e)},{entries:()=>Object.entries(t)})}function zt(e){let t=H.useRef(void 0);return n=>{let r=e(n);return Rt(t.current,r)?t.current:t.current=r}}var Bt=Symbol.for(`preact-signals`);function Vt(){if(Gt>1)Gt--;else{var e,t=!1;for((function(){var e=Yt;for(Yt=void 0;e!==void 0;){var t=e.S;if(t.v===e.v)for(var n=t.t;n!==void 0;n=n.x)n.i===e.i&&(n.i=t.i);e=e.o}})();Wt!==void 0;){var n=Wt;for(Wt=void 0,Kt++;n!==void 0;){var r=n.u;if(n.u=void 0,n.f&=-3,!(8&n.f)&&en(n))try{n.c()}catch(n){t||=(e=n,!0)}n=r}}if(Kt=0,Gt--,t)throw e}}function Ht(e){if(Gt>0)return e();Jt=++qt,Gt++;try{return e()}finally{Vt()}}var Ut,W=void 0;function G(e){var t=W,n=Ut;W=void 0,Ut=void 0;try{return e()}finally{W=t,Ut=n}}var Wt=void 0,Gt=0,Kt=0,qt=0,Jt=0,Yt=void 0,Xt=0;function Zt(e){if(W!==void 0){var t=e.n;if(t===void 0||t.t!==W)return t={i:0,S:e,p:W.s,n:void 0,t:W,e:void 0,x:void 0,r:t},W.s!==void 0&&(W.s.n=t),W.s=t,e.n=t,32&W.f&&e.S(t),t;if(t.i===-1)return t.i=0,t.n!==void 0&&(t.n.p=t.p,t.p!==void 0&&(t.p.n=t.n),t.p=W.s,t.n=void 0,W.s.n=t,W.s=t),t}}function Qt(e,t){this.v=e,this.i=0,this.n=void 0,this.t=void 0,this.l=0,this.W=t?.watched,this.Z=t?.unwatched,this.name=t?.name}Qt.prototype.brand=Bt,Qt.prototype.h=function(){return!0},Qt.prototype.S=function(e){var t=this,n=this.t;n!==e&&e.e===void 0&&(e.x=n,this.t=e,n===void 0?G(function(){var e;(e=t.W)==null||e.call(t)}):n.e=e)},Qt.prototype.U=function(e){var t=this;if(this.t!==void 0){var n=e.e,r=e.x;n!==void 0&&(n.x=r,e.e=void 0),r!==void 0&&(r.e=n,e.x=void 0),e===this.t&&(this.t=r,r===void 0&&G(function(){var e;(e=t.Z)==null||e.call(t)}))}},Qt.prototype.subscribe=function(e){var t=this;return un(function(){var n=t.value;G(function(){return e(n)})},{name:`sub`})},Qt.prototype.valueOf=function(){return this.value},Qt.prototype.toString=function(){return this.value+``},Qt.prototype.toJSON=function(){return this.value},Qt.prototype.peek=function(){var e=this;return G(function(){return e.value})},Object.defineProperty(Qt.prototype,"value",{get:function(){var e=Zt(this);return e!==void 0&&(e.i=this.i),this.v},set:function(e){if(e!==this.v){if(Kt>100)throw Error(`Cycle detected`);(function(e){Gt!==0&&Kt===0&&e.l!==Jt&&(e.l=Jt,Yt={S:e,v:e.v,i:e.i,o:Yt})})(this),this.v=e,this.i++,Xt++,Gt++;try{for(var t=this.t;t!==void 0;t=t.x)t.t.N()}finally{Vt()}}}});function $t(e,t){return new Qt(e,t)}function en(e){for(var t=e.s;t!==void 0;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return!0;return!1}function tn(e){for(var t=e.s;t!==void 0;t=t.n){var n=t.S.n;if(n!==void 0&&(t.r=n),t.S.n=t,t.i=-1,t.n===void 0){e.s=t;break}}}function nn(e){for(var t=e.s,n=void 0;t!==void 0;){var r=t.p;t.i===-1?(t.S.U(t),r!==void 0&&(r.n=t.n),t.n!==void 0&&(t.n.p=r)):n=t,t.S.n=t.r,t.r!==void 0&&(t.r=void 0),t=r}e.s=n}function rn(e,t){Qt.call(this,void 0,t),this.x=e,this.s=void 0,this.g=Xt-1,this.f=4}rn.prototype=new Qt,rn.prototype.h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===Xt))return!0;if(this.g=Xt,this.f|=1,this.i>0&&!en(this))return this.f&=-2,!0;var e=W;try{tn(this),W=this;var t=this.x();(16&this.f||this.v!==t||this.i===0)&&(this.v=t,this.f&=-17,this.i++)}catch(e){this.v=e,this.f|=16,this.i++}return W=e,nn(this),this.f&=-2,!0},rn.prototype.S=function(e){if(this.t===void 0){this.f|=36;for(var t=this.s;t!==void 0;t=t.n)t.S.S(t)}Qt.prototype.S.call(this,e)},rn.prototype.U=function(e){if(this.t!==void 0&&(Qt.prototype.U.call(this,e),this.t===void 0)){this.f&=-33;for(var t=this.s;t!==void 0;t=t.n)t.S.U(t)}},rn.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var e=this.t;e!==void 0;e=e.x)e.t.N()}},Object.defineProperty(rn.prototype,"value",{get:function(){if(1&this.f)throw Error(`Cycle detected`);var e=Zt(this);if(this.h(),e!==void 0&&(e.i=this.i),16&this.f)throw this.v;return this.v}});function an(e,t){return new rn(e,t)}function on(e){var t=e.m;if(e.m=void 0,typeof t==`function`){Gt++;var n=W;W=void 0;try{t()}catch(t){throw e.f&=-2,e.f|=8,sn(e),t}finally{W=n,Vt()}}}function sn(e){for(var t=e.s;t!==void 0;t=t.n)t.S.U(t);e.x=void 0,e.s=void 0,on(e)}function cn(e){if(W!==this)throw Error(`Out-of-order effect`);nn(this),W=e,this.f&=-2,8&this.f&&sn(this),Vt()}function ln(e,t){this.x=e,this.m=void 0,this.s=void 0,this.u=void 0,this.f=32,this.name=t?.name,Ut&&Ut.push(this)}ln.prototype.c=function(){var e=this.S();try{if(8&this.f||this.x===void 0)return;var t=this.x();typeof t==`function`&&(this.m=t)}finally{e()}},ln.prototype.S=function(){if(1&this.f)throw Error(`Cycle detected`);this.f|=1,this.f&=-9,on(this),tn(this),Gt++;var e=W;return W=this,cn.bind(this,e)},ln.prototype.N=function(){2&this.f||(this.f|=2,this.u=Wt,Wt=this)},ln.prototype.d=function(){this.f|=8,1&this.f||sn(this)},ln.prototype.dispose=function(){this.d()};function un(e,t){var n=new ln(e,t);try{n.c()}catch(e){throw n.d(),e}var r=n.d.bind(n);return r[Symbol.dispose]=r,r}var dn=Object.create,fn=Object.defineProperty,pn=Object.defineProperties,mn=Object.getOwnPropertyDescriptor,hn=Object.getOwnPropertyDescriptors,gn=Object.getOwnPropertySymbols,_n=Object.prototype.hasOwnProperty,vn=Object.prototype.propertyIsEnumerable,yn=(e,t)=>(t=Symbol[e])?t:Symbol.for(`Symbol.`+e),bn=e=>{throw TypeError(e)},xn=(e,t,n)=>t in e?fn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Sn=(e,t)=>{for(var n in t||={})_n.call(t,n)&&xn(e,n,t[n]);if(gn)for(var n of gn(t))vn.call(t,n)&&xn(e,n,t[n]);return e},Cn=(e,t)=>pn(e,hn(t)),wn=(e,t)=>fn(e,`name`,{value:t,configurable:!0}),Tn=e=>[,,,dn(e?.[yn(`metadata`)]??null)],En=[`class`,`method`,`getter`,`setter`,`accessor`,`field`,`value`,`get`,`set`],Dn=e=>e!==void 0&&typeof e!=`function`?bn(`Function expected`):e,On=(e,t,n,r,i)=>({kind:En[e],name:t,metadata:r,addInitializer:e=>n._?bn(`Already initialized`):i.push(Dn(e||null))}),kn=(e,t)=>xn(t,yn(`metadata`),e[3]),An=(e,t,n,r)=>{for(var i=0,a=e[t>>1],o=a&&a.length;i<o;i++)t&1?a[i].call(n):r=a[i].call(n,r);return r},jn=(e,t,n,r,i,a)=>{var o,s,c,l,u,d=t&7,f=!!(t&8),p=!!(t&16),m=d>3?e.length+1:d?f?1:2:0,h=En[d+5],g=d>3&&(e[m-1]=[]),_=e[m]||(e[m]=[]),v=d&&(!p&&!f&&(i=i.prototype),d<5&&(d>3||!p)&&mn(d<4?i:{get[n](){return Pn(this,a)},set[n](e){return In(this,a,e)}},n));d?p&&d<4&&wn(a,(d>2?`set `:d>1?`get `:``)+n):wn(i,n);for(var y=r.length-1;y>=0;y--)l=On(d,n,c={},e[3],_),d&&(l.static=f,l.private=p,u=l.access={has:p?e=>Nn(i,e):e=>n in e},d^3&&(u.get=p?e=>(d^1?Pn:Ln)(e,i,d^4?a:v.get):e=>e[n]),d>2&&(u.set=p?(e,t)=>In(e,i,t,d^4?a:v.set):(e,t)=>e[n]=t)),s=(0,r[y])(d?d<4?p?a:v[h]:d>4?void 0:{get:v.get,set:v.set}:i,l),c._=1,d^4||s===void 0?Dn(s)&&(d>4?g.unshift(s):d?p?a=s:v[h]=s:i=s):typeof s!=`object`||!s?bn(`Object expected`):(Dn(o=s.get)&&(v.get=o),Dn(o=s.set)&&(v.set=o),Dn(o=s.init)&&g.unshift(o));return d||kn(e,i),v&&fn(i,n,v),p?d^4?a:v:i},Mn=(e,t,n)=>t.has(e)||bn(`Cannot `+n),Nn=(e,t)=>Object(t)===t?e.has(t):bn(`Cannot use the "in" operator on this value`),Pn=(e,t,n)=>(Mn(e,t,`read from private field`),n?n.call(e):t.get(e)),Fn=(e,t,n)=>t.has(e)?bn(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),In=(e,t,n,r)=>(Mn(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),Ln=(e,t,n)=>(Mn(e,t,`access private method`),n);function Rn(e,t){if(t){let n;return an(()=>{let r=e();return r&&n&&t(n,r)?n:(n=r,r)})}return an(e)}function zn(e,t){if(Object.is(e,t))return!0;if(e===null||t===null)return!1;if(typeof e==`function`&&typeof t==`function`)return e===t;if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(let n of e)if(!t.has(n))return!1;return!0}if(Array.isArray(e))return!Array.isArray(t)||e.length!==t.length?!1:!e.some((e,n)=>!zn(e,t[n]));if(typeof e==`object`&&typeof t==`object`){let n=Object.keys(e),r=Object.keys(t);return n.length===r.length&&!n.some(n=>!zn(e[n],t[n]))}return!1}function K({get:e},t){return{init(e){return $t(e)},get(){return e.call(this).value},set(t){let n=e.call(this);n.peek()!==t&&(n.value=t)}}}function Bn(e,t){let n=new WeakMap;return function(){let t=n.get(this);return t||(t=Rn(e.bind(this)),n.set(this,t)),t.value}}function Vn(e=!0){return function(t,n){n.addInitializer(function(){let t=n.kind===`field`||n.static?this:Object.getPrototypeOf(this),r=Object.getOwnPropertyDescriptor(t,n.name);r&&Object.defineProperty(t,n.name,Cn(Sn({},r),{enumerable:e}))})}}function Hn(...e){let t=e.map(e=>un(e));return()=>t.forEach(e=>e())}var Un,Wn,Gn,Kn,qn,Jn=[K],Yn,Xn,Zn,Qn,$n,er,tr,nr,rr,ir,ar,or,sr,cr;qn=[K],Kn=[K],Gn=[Vn()],Wn=[Vn()],Un=[Vn()];var lr=class{constructor(e,t=Object.is){this.defaultValue=e,this.equals=t,An(Yn,5,this),Fn(this,er),Fn(this,Xn,An(Yn,8,this)),An(Yn,11,this),Fn(this,tr,An(Yn,12,this)),An(Yn,15,this),Fn(this,ar,An(Yn,16,this)),An(Yn,19,this),this.reset=this.reset.bind(this),this.reset()}get current(){return Pn(this,er,sr)}get initial(){return Pn(this,er,Qn)}get previous(){return Pn(this,er,rr)}set current(e){let t=G(()=>Pn(this,er,sr));e&&t&&this.equals(t,e)||Ht(()=>{Pn(this,er,Qn)||In(this,er,e,$n),In(this,er,t,ir),In(this,er,e,cr)})}reset(e=this.defaultValue){Ht(()=>{In(this,er,void 0,ir),In(this,er,e,$n),In(this,er,e,cr)})}};Yn=Tn(null),Xn=new WeakMap,er=new WeakSet,tr=new WeakMap,ar=new WeakMap,Zn=jn(Yn,20,`#initial`,Jn,er,Xn),Qn=Zn.get,$n=Zn.set,nr=jn(Yn,20,`#previous`,qn,er,tr),rr=nr.get,ir=nr.set,or=jn(Yn,20,`#current`,Kn,er,ar),sr=or.get,cr=or.set,jn(Yn,2,`current`,Gn,lr),jn(Yn,2,`initial`,Wn,lr),jn(Yn,2,`previous`,Un,lr),kn(Yn,lr);function ur(e){return G(()=>{let t={};for(let n in e)t[n]=e[n];return t})}var dr,fr=class{constructor(){Fn(this,dr,new WeakMap)}get(e,t){return e?Pn(this,dr).get(e)?.get(t):void 0}set(e,t,n){if(e)return Pn(this,dr).has(e)||Pn(this,dr).set(e,new Map),Pn(this,dr).get(e)?.set(t,n)}clear(e){return e?Pn(this,dr).get(e)?.clear():void 0}};dr=new WeakMap;var pr=Object.create,mr=Object.defineProperty,hr=Object.getOwnPropertyDescriptor,gr=Object.getOwnPropertySymbols,_r=Object.prototype.hasOwnProperty,vr=Object.prototype.propertyIsEnumerable,yr=(e,t)=>(t=Symbol[e])?t:Symbol.for(`Symbol.`+e),br=e=>{throw TypeError(e)},xr=Math.pow,Sr=(e,t,n)=>t in e?mr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Cr=(e,t)=>{for(var n in t||={})_r.call(t,n)&&Sr(e,n,t[n]);if(gr)for(var n of gr(t))vr.call(t,n)&&Sr(e,n,t[n]);return e},wr=(e,t)=>mr(e,`name`,{value:t,configurable:!0}),Tr=e=>[,,,pr(e?.[yr(`metadata`)]??null)],Er=[`class`,`method`,`getter`,`setter`,`accessor`,`field`,`value`,`get`,`set`],Dr=e=>e!==void 0&&typeof e!=`function`?br(`Function expected`):e,Or=(e,t,n,r,i)=>({kind:Er[e],name:t,metadata:r,addInitializer:e=>n._?br(`Already initialized`):i.push(Dr(e||null))}),kr=(e,t)=>Sr(t,yr(`metadata`),e[3]),Ar=(e,t,n,r)=>{for(var i=0,a=e[t>>1],o=a&&a.length;i<o;i++)t&1?a[i].call(n):r=a[i].call(n,r);return r},jr=(e,t,n,r,i,a)=>{var o,s,c,l,u,d=t&7,f=!!(t&8),p=!!(t&16),m=d>3?e.length+1:d?f?1:2:0,h=Er[d+5],g=d>3&&(e[m-1]=[]),_=e[m]||(e[m]=[]),v=d&&(!p&&!f&&(i=i.prototype),d<5&&(d>3||!p)&&hr(d<4?i:{get[n](){return Pr(this,a)},set[n](e){return Ir(this,a,e)}},n));d?p&&d<4&&wr(a,(d>2?`set `:d>1?`get `:``)+n):wr(i,n);for(var y=r.length-1;y>=0;y--)l=Or(d,n,c={},e[3],_),d&&(l.static=f,l.private=p,u=l.access={has:p?e=>Nr(i,e):e=>n in e},d^3&&(u.get=p?e=>(d^1?Pr:Lr)(e,i,d^4?a:v.get):e=>e[n]),d>2&&(u.set=p?(e,t)=>Ir(e,i,t,d^4?a:v.set):(e,t)=>e[n]=t)),s=(0,r[y])(d?d<4?p?a:v[h]:d>4?void 0:{get:v.get,set:v.set}:i,l),c._=1,d^4||s===void 0?Dr(s)&&(d>4?g.unshift(s):d?p?a=s:v[h]=s:i=s):typeof s!=`object`||!s?br(`Object expected`):(Dr(o=s.get)&&(v.get=o),Dr(o=s.set)&&(v.set=o),Dr(o=s.init)&&g.unshift(o));return d||kr(e,i),v&&mr(i,n,v),p?d^4?a:v:i},Mr=(e,t,n)=>t.has(e)||br(`Cannot `+n),Nr=(e,t)=>Object(t)===t?e.has(t):br(`Cannot use the "in" operator on this value`),Pr=(e,t,n)=>(Mr(e,t,`read from private field`),n?n.call(e):t.get(e)),Fr=(e,t,n)=>t.has(e)?br(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),Ir=(e,t,n,r)=>(Mr(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),Lr=(e,t,n)=>(Mr(e,t,`access private method`),n),Rr=class e{constructor(e,t){this.x=e,this.y=t}static delta(t,n){return new e(t.x-n.x,t.y-n.y)}static distance(e,t){return Math.hypot(e.x-t.x,e.y-t.y)}static equals(e,t){return e.x===t.x&&e.y===t.y}static from({x:t,y:n}){return new e(t,n)}},zr=class e{constructor(e,t,n,r){this.left=e,this.top=t,this.width=n,this.height=r,this.scale={x:1,y:1}}get inverseScale(){return{x:1/this.scale.x,y:1/this.scale.y}}translate(t,n){let{top:r,left:i,width:a,height:o,scale:s}=this,c=new e(i+t,r+n,a,o);return c.scale=Cr({},s),c}get boundingRectangle(){let{width:e,height:t,left:n,top:r,right:i,bottom:a}=this;return{width:e,height:t,left:n,top:r,right:i,bottom:a}}get center(){let{left:e,top:t,right:n,bottom:r}=this;return new Rr((e+n)/2,(t+r)/2)}get area(){let{width:e,height:t}=this;return e*t}equals(t){if(!(t instanceof e))return!1;let{left:n,top:r,width:i,height:a}=this;return n===t.left&&r===t.top&&i===t.width&&a===t.height}containsPoint(e){let{top:t,left:n,bottom:r,right:i}=this;return t<=e.y&&e.y<=r&&n<=e.x&&e.x<=i}intersectionArea(t){return t instanceof e?Br(this,t):0}intersectionRatio(e){let{area:t}=this,n=this.intersectionArea(e);return n/(e.area+t-n)}get bottom(){let{top:e,height:t}=this;return e+t}get right(){let{left:e,width:t}=this;return e+t}get aspectRatio(){let{width:e,height:t}=this;return e/t}get corners(){return[{x:this.left,y:this.top},{x:this.right,y:this.top},{x:this.left,y:this.bottom},{x:this.right,y:this.bottom}]}static from({top:t,left:n,width:r,height:i}){return new e(n,t,r,i)}static delta(e,t,n={x:`center`,y:`center`}){let r=(e,t)=>{let r=n[t],i=t===`x`?e.left:e.top,a=t===`x`?e.width:e.height;return r==`start`?i:r==`end`?i+a:i+a/2};return Rr.delta({x:r(e,`x`),y:r(e,`y`)},{x:r(t,`x`),y:r(t,`y`)})}static intersectionRatio(t,n){return e.from(t).intersectionRatio(e.from(n))}};function Br(e,t){let n=Math.max(t.top,e.top),r=Math.max(t.left,e.left),i=Math.min(t.left+t.width,e.left+e.width),a=Math.min(t.top+t.height,e.top+e.height),o=i-r,s=a-n;return r<i&&n<a?o*s:0}var Vr,Hr,Ur,Wr,Gr,Kr=class extends (Ur=lr,Hr=[Bn],Vr=[Bn],Ur){constructor(e){let t=Rr.from(e);super(t,(e,t)=>Rr.equals(e,t)),Ar(Gr,5,this),Fr(this,Wr,0),this.velocity={x:0,y:0}}get delta(){return Rr.delta(this.current,this.initial)}get direction(){let{current:e,previous:t}=this;if(!t)return null;let n={x:e.x-t.x,y:e.y-t.y};return!n.x&&!n.y?null:Math.abs(n.x)>Math.abs(n.y)?n.x>0?`right`:`left`:n.y>0?`down`:`up`}get current(){return super.current}set current(e){let{current:t}=this,n=Rr.from(e),r={x:n.x-t.x,y:n.y-t.y},i=Date.now(),a=i-Pr(this,Wr),o=e=>Math.round(e/a*100);Ht(()=>{Ir(this,Wr,i),this.velocity={x:o(r.x),y:o(r.y)},super.current=n})}reset(e=this.defaultValue){super.reset(Rr.from(e)),this.velocity={x:0,y:0}}};Gr=Tr(Ur),Wr=new WeakMap,jr(Gr,2,`delta`,Hr,Kr),jr(Gr,2,`direction`,Vr,Kr),kr(Gr,Kr);function qr({x:e,y:t},n){let r=Math.abs(e),i=Math.abs(t);return typeof n==`number`?Math.sqrt(xr(r,2)+xr(i,2))>n:`x`in n&&`y`in n?r>n.x&&i>n.y:`x`in n?r>n.x:`y`in n&&i>n.y}var Jr=(e=>(e.Horizontal=`x`,e.Vertical=`y`,e))(Jr||{}),Yr=Object.values(Jr),Xr=Object.create,Zr=Object.defineProperty,Qr=Object.defineProperties,$r=Object.getOwnPropertyDescriptor,ei=Object.getOwnPropertyDescriptors,ti=Object.getOwnPropertySymbols,ni=Object.prototype.hasOwnProperty,ri=Object.prototype.propertyIsEnumerable,ii=(e,t)=>(t=Symbol[e])?t:Symbol.for(`Symbol.`+e),ai=e=>{throw TypeError(e)},oi=(e,t,n)=>t in e?Zr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,si=(e,t)=>{for(var n in t||={})ni.call(t,n)&&oi(e,n,t[n]);if(ti)for(var n of ti(t))ri.call(t,n)&&oi(e,n,t[n]);return e},ci=(e,t)=>Qr(e,ei(t)),li=(e,t)=>Zr(e,`name`,{value:t,configurable:!0}),ui=(e,t)=>{var n={};for(var r in e)ni.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&ti)for(var r of ti(e))t.indexOf(r)<0&&ri.call(e,r)&&(n[r]=e[r]);return n},di=e=>[,,,Xr(e?.[ii(`metadata`)]??null)],fi=[`class`,`method`,`getter`,`setter`,`accessor`,`field`,`value`,`get`,`set`],pi=e=>e!==void 0&&typeof e!=`function`?ai(`Function expected`):e,mi=(e,t,n,r,i)=>({kind:fi[e],name:t,metadata:r,addInitializer:e=>n._?ai(`Already initialized`):i.push(pi(e||null))}),hi=(e,t)=>oi(t,ii(`metadata`),e[3]),q=(e,t,n,r)=>{for(var i=0,a=e[t>>1],o=a&&a.length;i<o;i++)t&1?a[i].call(n):r=a[i].call(n,r);return r},J=(e,t,n,r,i,a)=>{var o,s,c,l,u,d=t&7,f=!!(t&8),p=!!(t&16),m=d>3?e.length+1:d?f?1:2:0,h=fi[d+5],g=d>3&&(e[m-1]=[]),_=e[m]||(e[m]=[]),v=d&&(!p&&!f&&(i=i.prototype),d<5&&(d>3||!p)&&$r(d<4?i:{get[n](){return vi(this,a)},set[n](e){return yi(this,a,e)}},n));d?p&&d<4&&li(a,(d>2?`set `:d>1?`get `:``)+n):li(i,n);for(var y=r.length-1;y>=0;y--)l=mi(d,n,c={},e[3],_),d&&(l.static=f,l.private=p,u=l.access={has:p?e=>_i(i,e):e=>n in e},d^3&&(u.get=p?e=>(d^1?vi:bi)(e,i,d^4?a:v.get):e=>e[n]),d>2&&(u.set=p?(e,t)=>yi(e,i,t,d^4?a:v.set):(e,t)=>e[n]=t)),s=(0,r[y])(d?d<4?p?a:v[h]:d>4?void 0:{get:v.get,set:v.set}:i,l),c._=1,d^4||s===void 0?pi(s)&&(d>4?g.unshift(s):d?p?a=s:v[h]=s:i=s):typeof s!=`object`||!s?ai(`Object expected`):(pi(o=s.get)&&(v.get=o),pi(o=s.set)&&(v.set=o),pi(o=s.init)&&g.unshift(o));return d||hi(e,i),v&&Zr(i,n,v),p?d^4?a:v:i},gi=(e,t,n)=>t.has(e)||ai(`Cannot `+n),_i=(e,t)=>Object(t)===t?e.has(t):ai(`Cannot use the "in" operator on this value`),vi=(e,t,n)=>(gi(e,t,`read from private field`),n?n.call(e):t.get(e)),Y=(e,t,n)=>t.has(e)?ai(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),yi=(e,t,n,r)=>(gi(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),bi=(e,t,n)=>(gi(e,t,`access private method`),n);function xi(e,t){return{plugin:e,options:t}}function Si(e){return t=>xi(e,t)}function Ci(e){return typeof e==`function`?{plugin:e,options:void 0}:e}var wi=[K],Ti,Ei,Di,Oi=class{constructor(e,t){this.manager=e,this.options=t,Y(this,Ei,q(Ti,8,this,!1)),q(Ti,11,this),Y(this,Di,new Set)}enable(){this.disabled=!1}disable(){this.disabled=!0}isDisabled(){return G(()=>this.disabled)}configure(e){this.options=e}registerEffect(e){let t=un(e.bind(this));return vi(this,Di).add(t),t}destroy(){vi(this,Di).forEach(e=>e())}static configure(e){return xi(this,e)}};Ti=di(null),Ei=new WeakMap,Di=new WeakMap,J(Ti,4,`disabled`,wi,Oi,Ei),hi(Ti,Oi);var ki=class extends Oi{},Ai,ji=class{constructor(e){this.manager=e,this.instances=new Map,Y(this,Ai,[])}get values(){return Array.from(this.instances.values())}set values(e){let t=e.map(Ci).reduce((e,t)=>{let n=e.find(({plugin:e})=>e===t.plugin);return n?(n.options=t.options,e):[...e,t]},[]),n=t.map(({plugin:e})=>e);for(let e of vi(this,Ai))if(!n.includes(e)){if(e.prototype instanceof ki)continue;this.unregister(e)}for(let{plugin:e,options:n}of t)this.register(e,n);yi(this,Ai,n)}get(e){return this.instances.get(e)}register(e,t){let n=this.instances.get(e);if(n)return n.options!==t&&(n.options=t),n;let r=new e(this.manager,t);return this.instances.set(e,r),r}unregister(e){let t=this.instances.get(e);t&&(t.destroy(),this.instances.delete(e))}destroy(){for(let e of this.instances.values())e.destroy();this.instances.clear()}};Ai=new WeakMap;function Mi(e,t){return e.priority===t.priority?e.type===t.type?t.value-e.value:t.type-e.type:t.priority-e.priority}var Ni=[],Pi,Fi,Ii=class extends Oi{constructor(e){super(e),Y(this,Pi),Y(this,Fi),this.computeCollisions=this.computeCollisions.bind(this),yi(this,Fi,$t(Ni)),this.destroy=Hn(()=>{let e=this.computeCollisions(),t=G(()=>this.manager.dragOperation.position.current);if(e!==Ni){let e=vi(this,Pi);if(yi(this,Pi,t),e&&t.x==e.x&&t.y==e.y)return}else yi(this,Pi,void 0);vi(this,Fi).value=e},()=>{let{dragOperation:e}=this.manager;e.status.initialized&&this.forceUpdate()})}forceUpdate(e=!0){G(()=>{e?vi(this,Fi).value=this.computeCollisions():yi(this,Pi,void 0)})}computeCollisions(e,t){let{registry:n,dragOperation:r}=this.manager,{source:i,shape:a,status:o}=r;if(!o.initialized||!a)return Ni;let s=[],c=[];for(let a of e??n.droppables){if(a.disabled||i&&!a.accepts(i))continue;let e=t??a.collisionDetector;if(!e)continue;c.push(a),a.shape;let n=G(()=>e({droppable:a,dragOperation:r}));n&&(a.collisionPriority!=null&&(n.priority=a.collisionPriority),s.push(n))}return c.length===0?Ni:(s.sort(Mi),s)}get collisions(){return vi(this,Fi).value}};Pi=new WeakMap,Fi=new WeakMap;var Li,Ri,zi=[K],Bi,Vi,Hi,Ui,Wi,Gi,Ki;Ri=[K],Li=[K];var qi=class e{constructor(e,t){Y(this,Ui,q(Hi,8,this)),q(Hi,11,this),Y(this,Wi),Y(this,Gi,q(Hi,12,this)),q(Hi,15,this),Y(this,Ki,q(Hi,16,this)),q(Hi,19,this);let{effects:n,id:r,data:i={},disabled:a=!1,register:o=!0}=e,s=r;yi(this,Wi,$t(r)),this.manager=t,this.data=i,this.disabled=a,this.effects=()=>[()=>{let{id:e,manager:t}=this;if(e!==s)return s=e,t?.registry.register(this),()=>t?.registry.unregister(this)},...n?.()??[]],this.register=this.register.bind(this),this.unregister=this.unregister.bind(this),this.destroy=this.destroy.bind(this),t&&o&&queueMicrotask(this.register)}get id(){let t=vi(this,Wi).value;return e.pendingIdChanges?.get(this)??t}set id(t){t!==(e.pendingIdChanges?.get(this)??vi(this,Wi).peek())&&(e.pendingIdChanges||(e.pendingIdChanges=new Map,queueMicrotask(()=>{var t;return bi(t=e,Bi,Vi).call(t)})),e.pendingIdChanges.set(this,t))}register(){return this.manager?.registry.register(this)}unregister(){var e;(e=this.manager)==null||e.registry.unregister(this)}destroy(){var e;(e=this.manager)==null||e.registry.unregister(this)}};Hi=di(null),Bi=new WeakSet,Vi=function(){let e=qi.pendingIdChanges;qi.pendingIdChanges=null,e&&Ht(()=>{for(let[t,n]of e)vi(t,Wi).value=n})},Ui=new WeakMap,Wi=new WeakMap,Gi=new WeakMap,Ki=new WeakMap,J(Hi,4,`manager`,zi,qi,Ui),J(Hi,4,`data`,Ri,qi,Gi),J(Hi,4,`disabled`,Li,qi,Ki),Y(qi,Bi),hi(Hi,qi),qi.pendingIdChanges=null;var Ji=qi,Yi=class{constructor(){this.map=$t(new Map),this.cleanupFunctions=new WeakMap,this.register=(e,t)=>{let n=this.map.peek(),r=n.get(e),i=()=>this.unregister(e,t);if(r===t)return i;r&&r.id===e&&(this.cleanupFunctions.get(r)?.(),this.cleanupFunctions.delete(r));let a=new Map(n);for(let[r,i]of n)if(i===t&&r!==e){a.delete(r);break}a.set(e,t),this.map.value=a;let o=Hn(...t.effects());return this.cleanupFunctions.set(t,o),i},this.unregister=(e,t)=>{let n=this.map.peek();if(n.get(e)!==t)return;this.cleanupFunctions.get(t)?.(),this.cleanupFunctions.delete(t);let r=new Map(n);r.delete(e),this.map.value=r}}[Symbol.iterator](){return this.map.peek().values()}get value(){return this.map.value.values()}has(e){return this.map.value.has(e)}get(e){return this.map.value.get(e)}destroy(){for(let e of this)this.cleanupFunctions.get(e)?.(),e.destroy();this.map.value=new Map}},Xi,Zi,Qi,$i,ea,ta,na,ra,ia,aa,oa,sa=class extends (na=Ji,ta=[K],ea=[K],$i=[K],Qi=[Bn],Zi=[Bn],Xi=[Bn],na){constructor(e,t){var n=e,{modifiers:r,type:i,sensors:a,plugins:o,effects:s}=n,c=ui(n,[`modifiers`,`type`,`sensors`,`plugins`,`effects`]);super(ci(si({},c),{effects:()=>[...s?.()??[],()=>{let{manager:e,plugins:t}=this;if(e&&t)for(let n of t){let{plugin:t}=Ci(n);e.registry.plugins.register(t)}}]}),t),q(ra,5,this),Y(this,ia,q(ra,8,this)),q(ra,11,this),Y(this,aa,q(ra,12,this)),q(ra,15,this),Y(this,oa,q(ra,16,this,this.isDragSource?`dragging`:`idle`)),q(ra,19,this),this.type=i,this.sensors=a,this.modifiers=r,this.alignment=c.alignment,this.plugins=o}pluginConfig(e){if(this.plugins)for(let t of this.plugins){let n=Ci(t);if(n.plugin===e)return n.options}}get isDropping(){return this.status===`dropping`&&this.isDragSource}get isDragging(){return this.status===`dragging`&&this.isDragSource}get isDragSource(){return this.manager?.dragOperation.source?.id===this.id}};ra=di(na),ia=new WeakMap,aa=new WeakMap,oa=new WeakMap,J(ra,4,`type`,ta,sa,ia),J(ra,4,`modifiers`,ea,sa,aa),J(ra,4,`status`,$i,sa,oa),J(ra,2,`isDropping`,Qi,sa),J(ra,2,`isDragging`,Zi,sa),J(ra,2,`isDragSource`,Xi,sa),hi(ra,sa);var ca,la,ua,da,fa,pa,ma,ha,ga,_a,va,ya,ba,xa=class extends (ma=Ji,pa=[K],fa=[K],da=[K],ua=[K],la=[K],ca=[Bn],ma){constructor(e,t){var n=e,{accept:r,collisionDetector:i,collisionPriority:a,type:o}=n,s=ui(n,[`accept`,`collisionDetector`,`collisionPriority`,`type`]);super(s,t),q(ha,5,this),Y(this,ga,q(ha,8,this)),q(ha,11,this),Y(this,_a,q(ha,12,this)),q(ha,15,this),Y(this,va,q(ha,16,this)),q(ha,19,this),Y(this,ya,q(ha,20,this)),q(ha,23,this),Y(this,ba,q(ha,24,this)),q(ha,27,this),this.accept=r,this.collisionDetector=i,this.collisionPriority=a,this.type=o}accepts(e){let{accept:t}=this;return t?typeof t==`function`?t(e):e.type?Array.isArray(t)?t.includes(e.type):e.type===t:!1:!0}get isDropTarget(){return this.manager?.dragOperation.target?.id===this.id}};ha=di(ma),ga=new WeakMap,_a=new WeakMap,va=new WeakMap,ya=new WeakMap,ba=new WeakMap,J(ha,4,`accept`,pa,xa,ga),J(ha,4,`type`,fa,xa,_a),J(ha,4,`collisionDetector`,da,xa,va),J(ha,4,`collisionPriority`,ua,xa,ya),J(ha,4,`shape`,la,xa,ba),J(ha,2,`isDropTarget`,ca,xa),hi(ha,xa);var Sa=class{constructor(){this.registry=new Map}addEventListener(e,t){let{registry:n}=this,r=new Set(n.get(e));return r.add(t),n.set(e,r),()=>this.removeEventListener(e,t)}removeEventListener(e,t){let{registry:n}=this,r=new Set(n.get(e));r.delete(t),n.set(e,r)}dispatch(e,...t){let{registry:n}=this,r=n.get(e);if(r)for(let e of r)e(...t)}},Ca=class extends Sa{constructor(e){super(),this.manager=e}dispatch(e,t){let n=[t,this.manager];super.dispatch(e,...n)}};function wa(e,t=!0){let n=!1;return ci(si({},e),{cancelable:t,get defaultPrevented(){return n},preventDefault(){t&&(n=!0)}})}var Ta=class extends ki{constructor(e){super(e);let t=(e,t)=>e.map(({id:e})=>e).join(``)===t.map(({id:e})=>e).join(``),n=[];this.destroy=Hn(()=>{let{dragOperation:t,collisionObserver:r}=e;t.status.initializing&&(n=[],r.enable())},()=>{let{collisionObserver:r,monitor:i}=e,{collisions:a}=r;if(r.isDisabled()||Ji.pendingIdChanges)return;let o=wa({collisions:a});if(i.dispatch(`collision`,o),o.defaultPrevented||t(a,n))return;n=a;let[s]=a;G(()=>{s?.id!==e.dragOperation.target?.id&&(r.disable(),e.actions.setDropTarget(s?.id).then(()=>{r.enable()}))})})}},Ea=(e=>(e[e.Lowest=0]=`Lowest`,e[e.Low=1]=`Low`,e[e.Normal=2]=`Normal`,e[e.High=3]=`High`,e[e.Highest=4]=`Highest`,e))(Ea||{}),Da=(e=>(e[e.Collision=0]=`Collision`,e[e.ShapeIntersection=1]=`ShapeIntersection`,e[e.PointerIntersection=2]=`PointerIntersection`,e))(Da||{}),Oa,ka,Aa,ja,Ma,Na,Pa=[K],Fa,Ia;Na=[Bn],Ma=[Bn],ja=[Bn],Aa=[Bn],ka=[Bn],Oa=[Bn];var La=class{constructor(){q(Fa,5,this),Y(this,Ia,q(Fa,8,this,`idle`)),q(Fa,11,this)}get current(){return this.value}get idle(){return this.value===`idle`}get initializing(){return this.value===`initializing`}get initialized(){let{value:e}=this;return e!==`idle`&&e!==`initialization-pending`}get dragging(){return this.value===`dragging`}get dropped(){return this.value===`dropped`}set(e){this.value=e}};Fa=di(null),Ia=new WeakMap,J(Fa,4,`value`,Pa,La,Ia),J(Fa,2,`current`,Na,La),J(Fa,2,`idle`,Ma,La),J(Fa,2,`initializing`,ja,La),J(Fa,2,`initialized`,Aa,La),J(Fa,2,`dragging`,ka,La),J(Fa,2,`dropped`,Oa,La),hi(Fa,La);var Ra=class{constructor(e){this.manager=e}setDragSource(e){let{dragOperation:t}=this.manager;t.sourceIdentifier=typeof e==`string`||typeof e==`number`?e:e.id}setDropTarget(e){return G(()=>{let{dragOperation:t}=this.manager,n=e??null;if(t.targetIdentifier===n)return Promise.resolve(!1);t.targetIdentifier=n;let r=wa({operation:t.snapshot()});return t.status.dragging&&this.manager.monitor.dispatch(`dragover`,r),this.manager.renderer.rendering.then(()=>r.defaultPrevented)})}start(e){return G(()=>{let{dragOperation:t}=this.manager;if(e.source!=null&&this.setDragSource(e.source),!t.source)throw Error(`Cannot start a drag operation without a drag source`);if(!t.status.idle)throw Error(`Cannot start a drag operation while another is active`);let n=new AbortController,{event:r,coordinates:i}=e;Ht(()=>{t.status.set(`initialization-pending`),t.shape=null,t.canceled=!1,t.activatorEvent=r??null,t.position.reset(i)});let a=wa({operation:t.snapshot()});return this.manager.monitor.dispatch(`beforedragstart`,a),a.defaultPrevented?(t.reset(),n.abort(),n):(t.status.set(`initializing`),t.controller=n,this.manager.renderer.rendering.then(()=>{if(n.signal.aborted)return;let{status:e}=t;e.current===`initializing`&&Ht(()=>{t.status.set(`dragging`),this.manager.monitor.dispatch(`dragstart`,{nativeEvent:r,operation:t.snapshot(),cancelable:!1})})}),n)})}move(e){return G(()=>{let{dragOperation:t}=this.manager,{status:n,controller:r}=t;if(!n.dragging||!r||r.signal.aborted)return;let i=wa({nativeEvent:e.event,operation:t.snapshot(),by:e.by,to:e.to},e.cancelable??!0);(e.propagate??!0)&&this.manager.monitor.dispatch(`dragmove`,i),queueMicrotask(()=>{if(i.defaultPrevented)return;let n=e.to??{x:t.position.current.x+(e.by?.x??0),y:t.position.current.y+(e.by?.y??0)};t.position.current=n})})}stop(e={}){return G(()=>{let{dragOperation:t}=this.manager,{controller:n}=t;if(!n||n.signal.aborted)return;let r,i=()=>{let e={resume:()=>{},abort:()=>{}};return r=new Promise((t,n)=>{e.resume=t,e.abort=n}),e};n.abort();let a=()=>{this.manager.renderer.rendering.then(()=>{t.status.set(`dropped`);let e=G(()=>t.source?.status===`dropping`),r=()=>{t.controller===n&&(t.controller=void 0),t.reset()};if(e){let{source:e}=t,n=un(()=>{e?.status===`idle`&&(n(),r())})}else this.manager.renderer.rendering.then(r)})};t.canceled=e.canceled??!1,this.manager.monitor.dispatch(`dragend`,{nativeEvent:e.event,operation:t.snapshot(),canceled:e.canceled??!1,suspend:i}),r?r.then(a).catch(()=>t.reset()):a()})}},za=class extends Oi{constructor(e,t){super(e,t),this.manager=e,this.options=t}},Ba=class extends AbortController{constructor(e,t){super(),this.constraints=e,this.onActivate=t,this.activated=!1;for(let t of e??[])t.controller=this}onEvent(e){if(!this.activated){if(this.constraints?.length)for(let t of this.constraints)t.onEvent(e);else this.activate(e)}}activate(e){this.activated||(this.activated=!0,this.onActivate(e))}abort(e){this.activated=!1,super.abort(e)}},Va,Ha=class{constructor(e){this.options=e,Y(this,Va)}set controller(e){yi(this,Va,e),e.signal.addEventListener(`abort`,()=>this.abort())}activate(e){var t;(t=vi(this,Va))==null||t.activate(e)}};Va=new WeakMap;var Ua=class extends Oi{constructor(e,t){super(e,t),this.manager=e,this.options=t}apply(e){return e.transform}},Wa=class{constructor(e){this.draggables=new Yi,this.droppables=new Yi,this.plugins=new ji(e),this.sensors=new ji(e),this.modifiers=new ji(e)}register(e,t){if(e instanceof sa)return this.draggables.register(e.id,e);if(e instanceof xa)return this.droppables.register(e.id,e);if(e.prototype instanceof Ua)return this.modifiers.register(e,t);if(e.prototype instanceof za)return this.sensors.register(e,t);if(e.prototype instanceof Oi)return this.plugins.register(e,t);throw Error(`Invalid instance type`)}unregister(e){if(e instanceof Ji)return e instanceof sa?this.draggables.unregister(e.id,e):e instanceof xa?this.droppables.unregister(e.id,e):()=>{};if(e.prototype instanceof Ua)return this.modifiers.unregister(e);if(e.prototype instanceof za)return this.sensors.unregister(e);if(e.prototype instanceof Oi)return this.plugins.unregister(e);throw Error(`Invalid instance type`)}destroy(){this.draggables.destroy(),this.droppables.destroy(),this.plugins.destroy(),this.sensors.destroy(),this.modifiers.destroy()}},Ga,Ka,qa,Ja,Ya,Xa,Za,Qa,$a=[Bn],eo,to,no,ro,io,ao,oo,so,co,lo;Qa=[K],Za=[K],Xa=[K],Ya=[K],Ja=[K],qa=[Bn],Ka=[Bn],Ga=[Bn];var uo=class{constructor(e){q(ro,5,this),Y(this,eo),Y(this,to),Y(this,no,new lr(void 0,(e,t)=>e&&t?e.equals(t):e===t)),this.status=new La,Y(this,io,q(ro,8,this,!1)),q(ro,11,this),Y(this,ao,q(ro,12,this,null)),q(ro,15,this),Y(this,oo,q(ro,16,this,null)),q(ro,19,this),Y(this,so,q(ro,20,this,null)),q(ro,23,this),Y(this,co,q(ro,24,this,[])),q(ro,27,this),this.position=new Kr({x:0,y:0}),Y(this,lo,{x:0,y:0}),yi(this,eo,e)}get shape(){let{current:e,initial:t,previous:n}=vi(this,no);return!e||!t?null:{current:e,initial:t,previous:n}}set shape(e){e?vi(this,no).current=e:vi(this,no).reset()}get source(){let e=this.sourceIdentifier;if(e==null)return null;let t=vi(this,eo).registry.draggables.get(e);return t&&yi(this,to,t),t??vi(this,to)??null}get target(){let e=this.targetIdentifier;return e==null?null:vi(this,eo).registry.droppables.get(e)??null}get transform(){let{x:e,y:t}=this.position.delta,n={x:e,y:t};for(let e of this.modifiers)n=e.apply(ci(si({},this.snapshot()),{transform:n}));return yi(this,lo,n),n}snapshot(){return G(()=>({source:this.source,target:this.target,activatorEvent:this.activatorEvent,transform:vi(this,lo),shape:this.shape?ur(this.shape):null,position:ur(this.position),status:ur(this.status),canceled:this.canceled}))}reset(){Ht(()=>{this.status.set(`idle`),this.sourceIdentifier=null,this.targetIdentifier=null,vi(this,no).reset(),this.position.reset({x:0,y:0}),yi(this,lo,{x:0,y:0}),this.modifiers=[]})}};ro=di(null),eo=new WeakMap,to=new WeakMap,no=new WeakMap,io=new WeakMap,ao=new WeakMap,oo=new WeakMap,so=new WeakMap,co=new WeakMap,lo=new WeakMap,J(ro,2,`shape`,$a,uo),J(ro,4,`canceled`,Qa,uo,io),J(ro,4,`activatorEvent`,Za,uo,ao),J(ro,4,`sourceIdentifier`,Xa,uo,oo),J(ro,4,`targetIdentifier`,Ya,uo,so),J(ro,4,`modifiers`,Ja,uo,co),J(ro,2,`source`,qa,uo),J(ro,2,`target`,Ka,uo),J(ro,2,`transform`,Ga,uo),hi(ro,uo);var fo={get rendering(){return Promise.resolve()}};function po(e,t){return typeof e==`function`?e(t):e??t}var mo=class{constructor(e){this.destroy=()=>{this.dragOperation.status.idle||this.actions.stop({canceled:!0}),this.dragOperation.modifiers.forEach(e=>e.destroy()),this.registry.destroy(),this.collisionObserver.destroy()};let t=e??{},n=po(t.plugins,[]),r=po(t.sensors,[]),i=po(t.modifiers,[]),a=t.renderer??fo,o=new Ca(this),s=new Wa(this);this.registry=s,this.monitor=o,this.renderer=a,this.actions=new Ra(this),this.dragOperation=new uo(this),this.collisionObserver=new Ii(this),this.plugins=[Ta,...n],this.modifiers=i,this.sensors=r;let{destroy:c}=this,l=Hn(()=>{let e=G(()=>this.dragOperation.modifiers),t=this.modifiers;for(let n of e)t.includes(n)||n.destroy();this.dragOperation.modifiers=(this.dragOperation.source?.modifiers)?.map(e=>{let{plugin:t,options:n}=Ci(e);return new t(this,n)})??t});this.destroy=()=>{l(),c()}}get plugins(){return this.registry.plugins.values}set plugins(e){this.registry.plugins.values=e}get modifiers(){return this.registry.modifiers.values}set modifiers(e){this.registry.modifiers.values=e}get sensors(){return this.registry.sensors.values}set sensors(e){this.registry.sensors.values=e}},ho=e=>{throw TypeError(e)},go=(e,t,n)=>t.has(e)||ho(`Cannot `+n),X=(e,t,n)=>(go(e,t,`read from private field`),t.get(e)),_o=(e,t,n)=>t.has(e)?ho(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),vo=(e,t,n,r)=>(go(e,t,`write to private field`),t.set(e,n),n),yo=(e,t,n)=>(go(e,t,`access private method`),n);function bo(e){return e?e instanceof KeyframeEffect||`getKeyframes`in e&&typeof e.getKeyframes==`function`:!1}function xo(e,t){let n=e.getAnimations(),r=null;for(let e of n){if(e.playState!==`running`)continue;let{effect:n}=e,i=(bo(n)?n.getKeyframes():[]).filter(t);i.length>0&&(r=[i[i.length-1],e])}return r}function So(e){let{width:t,height:n,top:r,left:i,bottom:a,right:o}=e.getBoundingClientRect();return{width:t,height:n,top:r,left:i,bottom:a,right:o}}function Co(e){let t=Object.prototype.toString.call(e);return t===`[object Window]`||t===`[object global]`}function wo(e){return`nodeType`in e}function To(e){return e?Co(e)?e:wo(e)?`defaultView`in e?e.defaultView??window:e.ownerDocument?.defaultView??window:window:window}function Eo(e){let{Document:t}=To(e);return e instanceof t||`nodeType`in e&&e.nodeType===Node.DOCUMENT_NODE}function Do(e){return!e||Co(e)?!1:e instanceof To(e).HTMLElement||`namespaceURI`in e&&typeof e.namespaceURI==`string`&&e.namespaceURI.endsWith(`html`)}function Oo(e){return e instanceof To(e).SVGElement||`namespaceURI`in e&&typeof e.namespaceURI==`string`&&e.namespaceURI.endsWith(`svg`)}function ko(e){return e?Co(e)?e.document:wo(e)?Eo(e)?e:Do(e)||Oo(e)?e.ownerDocument:document:document:document}function Ao(e){let{documentElement:t}=ko(e),n=To(e).visualViewport,r=n?.width??t.clientWidth,i=n?.height??t.clientHeight,a=n?.offsetTop??0,o=n?.offsetLeft??0;return{top:a,left:o,right:o+r,bottom:a+i,width:r,height:i}}function jo(e,t){if(Mo(e)&&e.open===!1)return!1;let{overflow:n,overflowX:r,overflowY:i}=getComputedStyle(e);return n===`visible`&&r===`visible`&&i===`visible`}function Mo(e){return e.tagName===`DETAILS`}function No(e,t=e.getBoundingClientRect(),n=0){let r=t,{ownerDocument:i}=e,a=i.defaultView??window,o=e.parentElement;for(;o&&o!==i.documentElement;){if(!jo(o)){let e=o.getBoundingClientRect(),t=n*(e.bottom-e.top),i=n*(e.right-e.left),a=n*(e.bottom-e.top),s=n*(e.right-e.left);r={top:Math.max(r.top,e.top-t),right:Math.min(r.right,e.right+i),bottom:Math.min(r.bottom,e.bottom+a),left:Math.max(r.left,e.left-s),width:0,height:0},r.width=r.right-r.left,r.height=r.bottom-r.top}o=o.parentElement}let s=a.visualViewport,c=s?.offsetTop??0,l=s?.offsetLeft??0,u=s?.width??a.innerWidth,d=s?.height??a.innerHeight,f=n*d,p=n*u;return r={top:Math.max(r.top,c-f),right:Math.min(r.right,l+u+p),bottom:Math.min(r.bottom,c+d+f),left:Math.max(r.left,l-p),width:0,height:0},r.width=r.right-r.left,r.height=r.bottom-r.top,r.width<0&&(r.width=0),r.height<0&&(r.height=0),r}function Po(e){return{x:e.clientX,y:e.clientY}}var Fo=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function Io(e=document,t=new Set){if(t.has(e))return[];t.add(e);let n=[e];for(let r of Array.from(e.querySelectorAll(`iframe, frame`)))try{let e=r.contentDocument;e&&!t.has(e)&&n.push(...Io(e,t))}catch{}try{let r=e.defaultView;if(r&&r!==window.top){let i=r.parent;i&&i.document&&i.document!==e&&n.push(...Io(i.document,t))}}catch{}return n}function Lo(){return/^((?!chrome|android).)*safari/i.test(navigator.userAgent)}function Ro(){let e=Lo()?window.visualViewport:null;return{x:e?.offsetLeft??0,y:e?.offsetTop??0}}function zo(e){return!e||!wo(e)?!1:e instanceof To(e).ShadowRoot}function Bo(e){if(e&&wo(e)){let t=e.getRootNode();if(zo(t)||t instanceof Document)return t}return ko(e)}function Vo(e){return e.matchMedia(`(prefers-reduced-motion: reduce)`).matches}function Ho(e){let t=`input, textarea, select, canvas, [contenteditable]`,n=e.cloneNode(!0),r=Array.from(e.querySelectorAll(t));return Array.from(n.querySelectorAll(t)).forEach((e,t)=>{let n=r[t];Uo(e)&&Uo(n)&&(e.type!==`file`&&(e.value=n.value),e.type===`radio`&&e.name&&(e.name=`Cloned__${e.name}`)),Wo(e)&&Wo(n)&&n.width>0&&n.height>0&&e.getContext(`2d`)?.drawImage(n,0,0)}),n}function Uo(e){return`value`in e}function Wo(e){return e.tagName===`CANVAS`}function Go(e,{x:t,y:n}){let r=e.elementFromPoint(t,n);if(Ko(r)){let{contentDocument:e}=r;if(e){let{left:i,top:a}=r.getBoundingClientRect();return Go(e,{x:t-i,y:n-a})}}return r}function Ko(e){return e?.tagName===`IFRAME`}var qo=new WeakMap;function Jo(e){return!!e.closest(`
      input:not([disabled]),
      select:not([disabled]),
      textarea:not([disabled]),
      button:not([disabled]),
      a[href],
      [contenteditable]:not([contenteditable="false"])
    `)}var Yo=class{constructor(){this.entries=new Set,this.clear=()=>{for(let e of this.entries){let[t,{type:n,listener:r,options:i}]=e;t.removeEventListener(n,r,i)}this.entries.clear()}}bind(e,t){let n=Array.isArray(e)?e:[e],r=Array.isArray(t)?t:[t],i=[];for(let e of n)for(let t of r){let{type:n,listener:r,options:a}=t,o=[e,t];e.addEventListener(n,r,a),this.entries.add(o),i.push(o)}let a=this.entries;return function(){for(let e of i){let[t,{type:n,listener:r,options:i}]=e;t.removeEventListener(n,r,i),a.delete(e)}}}};function Xo(e){let t=e?.ownerDocument.defaultView;if(t&&t.self!==t.parent)return t.frameElement}function Zo(e){let t=new Set,n=Xo(e);for(;n;)t.add(n),n=Xo(n);return t}function Qo(e,t){let n=setTimeout(e,t);return()=>clearTimeout(n)}function $o(e,t){let n=()=>performance.now(),r,i;return function(...a){let o=this;i?(r?.(),r=Qo(()=>{e.apply(o,a),i=n()},t-(n()-i))):(e.apply(o,a),i=n())}}function es(e,t){return e===t?!0:!e||!t?!1:e.top==t.top&&e.left==t.left&&e.right==t.right&&e.bottom==t.bottom}function ts(e,t=e.getBoundingClientRect()){let{width:n,height:r}=No(e,t);return n>0&&r>0}var ns=Fo?ResizeObserver:class{observe(){}unobserve(){}disconnect(){}},rs,is=class extends ns{constructor(e){super(t=>{X(this,rs)?e(t,this):vo(this,rs,!0)}),_o(this,rs,!1)}};rs=new WeakMap;var as=Array.from({length:100},(e,t)=>t/100),os=75,ss,cs,ls,us,ds,fs,ps,ms,hs,gs,_s,vs=class{constructor(e,t,n={debug:!1,skipInitial:!1}){this.element=e,this.callback=t,_o(this,hs),this.disconnect=()=>{var e,t,n;vo(this,ps,!0),(e=X(this,ls))==null||e.disconnect(),(t=X(this,us))==null||t.disconnect(),X(this,ds).disconnect(),(n=X(this,fs))==null||n.remove()},_o(this,ss,!0),_o(this,cs),_o(this,ls),_o(this,us),_o(this,ds),_o(this,fs),_o(this,ps,!1),_o(this,ms,$o(()=>{var e;let{element:t}=this;if((e=X(this,us))==null||e.disconnect(),X(this,ps)||!X(this,ss)||!t.isConnected)return;let n=t.ownerDocument??document,{innerHeight:r,innerWidth:i}=n.defaultView??window,a=t.getBoundingClientRect(),{top:o,left:s,bottom:c,right:l}=No(t,a),u=-Math.floor(o),d=-Math.floor(s),f=`${u}px ${-Math.floor(i-l)}px ${-Math.floor(r-c)}px ${d}px`;this.boundingClientRect=a,vo(this,us,new IntersectionObserver(e=>{let[n]=e,{intersectionRect:r}=n;(n.intersectionRatio===1?zr.intersectionRatio(r,No(t)):n.intersectionRatio)!==1&&X(this,ms).call(this)},{threshold:as,rootMargin:f,root:n})),X(this,us).observe(t),yo(this,hs,gs).call(this)},os)),this.boundingClientRect=e.getBoundingClientRect(),vo(this,ss,ts(e,this.boundingClientRect));let r=!0;this.callback=e=>{r&&(r=!1,n.skipInitial)||t(e)};let i=e.ownerDocument;n?.debug&&(vo(this,fs,document.createElement(`div`)),X(this,fs).style.background=`rgba(0,0,0,0.15)`,X(this,fs).style.position=`fixed`,X(this,fs).style.pointerEvents=`none`,i.body.appendChild(X(this,fs))),vo(this,ds,new IntersectionObserver(t=>{var n,r;let{boundingClientRect:i,isIntersecting:a}=t[t.length-1],{width:o,height:s}=i,c=X(this,ss);vo(this,ss,a),(o||s)&&(c&&!a?((n=X(this,us))==null||n.disconnect(),this.callback(null),(r=X(this,ls))==null||r.disconnect(),vo(this,ls,void 0),X(this,fs)&&(X(this,fs).style.visibility=`hidden`)):X(this,ms).call(this),a&&!X(this,ls)&&(vo(this,ls,new is(X(this,ms))),X(this,ls).observe(e)))},{threshold:as,root:i})),X(this,ss)&&!n.skipInitial&&this.callback(this.boundingClientRect),X(this,ds).observe(e)}};ss=new WeakMap,cs=new WeakMap,ls=new WeakMap,us=new WeakMap,ds=new WeakMap,fs=new WeakMap,ps=new WeakMap,ms=new WeakMap,hs=new WeakSet,gs=function(){X(this,ps)||(yo(this,hs,_s).call(this),!es(this.boundingClientRect,X(this,cs))&&(this.callback(this.boundingClientRect),vo(this,cs,this.boundingClientRect)))},_s=function(){if(X(this,fs)){let{top:e,left:t,width:n,height:r}=No(this.element);X(this,fs).style.overflow=`hidden`,X(this,fs).style.visibility=`visible`,X(this,fs).style.top=`${Math.floor(e)}px`,X(this,fs).style.left=`${Math.floor(t)}px`,X(this,fs).style.width=`${Math.floor(n)}px`,X(this,fs).style.height=`${Math.floor(r)}px`}};var ys=new WeakMap,bs=new WeakMap;function xs(e,t){let n=ys.get(e);return n||={disconnect:new vs(e,t=>{let n=ys.get(e);n&&n.callbacks.forEach(e=>e(t))},{skipInitial:!0}).disconnect,callbacks:new Set},n.callbacks.add(t),ys.set(e,n),()=>{n.callbacks.delete(t),n.callbacks.size===0&&(ys.delete(e),n.disconnect())}}function Ss(e,t){let n=new Set;for(let r of e){let e=xs(r,t);n.add(e)}return()=>n.forEach(e=>e())}function Cs(e,t){let n=e.ownerDocument;if(!bs.has(n)){let e=new AbortController,t=new Set;document.addEventListener(`scroll`,e=>t.forEach(t=>t(e)),{capture:!0,passive:!0,signal:e.signal}),bs.set(n,{disconnect:()=>e.abort(),listeners:t})}let{listeners:r,disconnect:i}=bs.get(n)??{};return!r||!i?()=>{}:(r.add(t),()=>{r.delete(t),r.size===0&&(i(),bs.delete(n))})}var ws,Ts,Es,Ds,Os=class{constructor(e,t,n){this.callback=t,_o(this,ws),_o(this,Ts,!1),_o(this,Es),_o(this,Ds,$o(e=>{if(!X(this,Ts)&&e.target&&`contains`in e.target&&typeof e.target.contains==`function`){for(let t of X(this,Es))if(e.target.contains(t)){this.callback(X(this,ws).boundingClientRect);break}}},os));let r=Zo(e),i=Ss(r,t),a=Cs(e,X(this,Ds));vo(this,Es,r),vo(this,ws,new vs(e,t,n)),this.disconnect=()=>{X(this,Ts)||(vo(this,Ts,!0),i(),a(),X(this,ws).disconnect())}}};ws=new WeakMap,Ts=new WeakMap,Es=new WeakMap,Ds=new WeakMap;function ks(e){return`showPopover`in e&&`hidePopover`in e&&typeof e.showPopover==`function`&&typeof e.hidePopover==`function`}function As(e){try{ks(e)&&e.isConnected&&e.hasAttribute(`popover`)&&!e.matches(`:popover-open`)&&e.showPopover()}catch{}}function js(e){return!Fo||!e?!1:e===ko(e).scrollingElement}function Ms(e){let t=To(e),n=js(e)?Ao(e):So(e),r=t.visualViewport,i=js(e)?{height:r?.height??t.innerHeight,width:r?.width??t.innerWidth}:{height:e.clientHeight,width:e.clientWidth},a={current:{x:e.scrollLeft,y:e.scrollTop},max:{x:e.scrollWidth-i.width,y:e.scrollHeight-i.height}};return{rect:n,position:a,isTop:a.current.y<=0,isLeft:a.current.x<=0,isBottom:a.current.y>=a.max.y,isRight:a.current.x>=a.max.x}}function Ns(e,t){let{isTop:n,isBottom:r,isLeft:i,isRight:a,position:o}=Ms(e),{x:s,y:c}=t??{x:0,y:0},l=!n&&o.current.y+c>0,u=!r&&o.current.y+c<o.max.y,d=!i&&o.current.x+s>0,f=!a&&o.current.x+s<o.max.x;return{top:l,bottom:u,left:d,right:f,x:d||f,y:l||u}}var Ps=class{constructor(e){this.scheduler=e,this.pending=!1,this.tasks=new Set,this.resolvers=new Set,this.flush=()=>{let{tasks:e,resolvers:t}=this;this.pending=!1,this.tasks=new Set,this.resolvers=new Set;for(let t of e)t();for(let e of t)e()}}schedule(e){return this.tasks.add(e),this.pending||(this.pending=!0,this.scheduler(this.flush)),new Promise(e=>this.resolvers.add(e))}},Fs=new Ps(e=>{typeof requestAnimationFrame==`function`?requestAnimationFrame(e):e()}),Is=new Ps(e=>setTimeout(e,50)),Ls=new Map,Rs=Ls.clear.bind(Ls);function zs(e,t=!1){if(!t)return Bs(e);let n=Ls.get(e);return n||(n=Bs(e),Ls.set(e,n),Is.schedule(Rs),n)}function Bs(e){return To(e).getComputedStyle(e)}function Vs(e,t=zs(e,!0)){return t.position===`fixed`||t.position===`sticky`}function Hs(e,t=zs(e,!0)){let n=/(auto|scroll|overlay)/;return[`overflow`,`overflowX`,`overflowY`].some(e=>{let r=t[e];return typeof r==`string`&&n.test(r)})}var Us={excludeElement:!0,escapeShadowDOM:!0};function Ws(e,t=Us){let{limit:n,excludeElement:r,escapeShadowDOM:i}=t,a=new Set;function o(t){if(n!=null&&a.size>=n||!t)return a;if(Eo(t)&&t.scrollingElement!=null&&!a.has(t.scrollingElement))return a.add(t.scrollingElement),a;if(i&&zo(t))return o(t.host);if(!Do(t))return Oo(t)?o(t.parentElement):a;if(a.has(t))return a;let s=zs(t,!0);if(r&&t===e||Hs(t,s)&&a.add(t),Vs(t,s)){let{scrollingElement:e}=t.ownerDocument;return e&&a.add(e),a}return o(t.parentNode)}return e?o(e):a}function Gs(e,t=window.frameElement){let n={x:0,y:0,scaleX:1,scaleY:1};if(!e)return n;let r=Xo(e);for(;r;){if(r===t)return n;let e=So(r),{x:i,y:a}=Ks(r,e);n.x+=e.left,n.y+=e.top,n.scaleX*=i,n.scaleY*=a,r=Xo(r)}return n}function Ks(e,t=So(e)){let n=Math.round(t.width),r=Math.round(t.height);if(Do(e))return{x:n/e.offsetWidth,y:r/e.offsetHeight};let i=zs(e,!0);return{x:(parseFloat(i.width)||n)/n,y:(parseFloat(i.height)||r)/r}}function qs(e){if(e===`none`)return null;let t=e.split(` `),n=parseFloat(t[0]),r=parseFloat(t[1]);return isNaN(n)&&isNaN(r)?null:{x:isNaN(n)?r:n,y:isNaN(r)?n:r}}function Js(e){if(e===`none`)return null;let[t,n,r=`0`]=e.split(` `),i={x:parseFloat(t),y:parseFloat(n),z:parseInt(r,10)};return isNaN(i.x)&&isNaN(i.y)?null:{x:isNaN(i.x)?0:i.x,y:isNaN(i.y)?0:i.y,z:isNaN(i.z)?0:i.z}}function Ys(e){let{scale:t,transform:n,translate:r}=e,i=qs(t),a=Js(r),o=Xs(n);if(!o&&!i&&!a)return null;let s={x:i?.x??1,y:i?.y??1},c={x:a?.x??0,y:a?.y??0},l={x:o?.x??0,y:o?.y??0,scaleX:o?.scaleX??1,scaleY:o?.scaleY??1};return{x:c.x+l.x,y:c.y+l.y,z:a?.z??0,scaleX:s.x*l.scaleX,scaleY:s.y*l.scaleY}}function Xs(e){if(e.startsWith(`matrix3d(`)){let t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}if(e.startsWith(`matrix(`)){let t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}var Zs=(e=>(e[e.Idle=0]=`Idle`,e[e.Forward=1]=`Forward`,e[e.Reverse=-1]=`Reverse`,e))(Zs||{}),Qs={x:.2,y:.2},$s={x:10,y:10};function ec(e,t,n,r=25,i=Qs,a=$s){let{x:o,y:s}=t,{rect:c,isTop:l,isBottom:u,isLeft:d,isRight:f}=Ms(e),p=Gs(e),m=Ys(zs(e,!0)),h=m!==null&&m?.scaleX<0,g=m!==null&&m?.scaleY<0,_=new zr(c.left*p.scaleX+p.x,c.top*p.scaleY+p.y,c.width*p.scaleX,c.height*p.scaleY),v={x:0,y:0},y={x:0,y:0},b={height:_.height*i.y,width:_.width*i.x};return b.height>0&&(!l||g&&!u)&&s<=_.top+b.height&&n?.y!==1&&o>=_.left-a.x&&o<=_.right+a.x?(v.y=g?1:-1,y.y=r*Math.abs((_.top+b.height-s)/b.height)):b.height>0&&(!u||g&&!l)&&s>=_.bottom-b.height&&n?.y!==-1&&o>=_.left-a.x&&o<=_.right+a.x&&(v.y=g?-1:1,y.y=r*Math.abs((_.bottom-b.height-s)/b.height)),b.width>0&&(!f||h&&!d)&&o>=_.right-b.width&&n?.x!==-1&&s>=_.top-a.y&&s<=_.bottom+a.y?(v.x=h?-1:1,y.x=r*Math.abs((_.right-b.width-o)/b.width)):b.width>0&&(!d||h&&!f)&&o<=_.left+b.width&&n?.x!==1&&s>=_.top-a.y&&s<=_.bottom+a.y&&(v.x=h?1:-1,y.x=r*Math.abs((_.left+b.width-o)/b.width)),{direction:v,speed:y}}function tc(e,{block:t=`nearest`,inline:n=`nearest`}={}){if(!Do(e))return;let r=Ws(e),i=[];for(let a of r){if(!Do(a))continue;let{top:r,left:o}=rc(e,a),s=r,c=o;for(let e of i)s-=e.scrollTop,c-=e.scrollLeft;if(t!==`none`){let n=s<a.scrollTop;n!==s+e.offsetHeight>a.scrollTop+a.clientHeight&&(a.scrollTop=t===`center`?s-a.clientHeight/2+e.offsetHeight/2:n?s:s+e.offsetHeight-a.clientHeight)}if(n!==`none`){let t=c<a.scrollLeft;t!==c+e.offsetWidth>a.scrollLeft+a.clientWidth&&(a.scrollLeft=n===`center`?c-a.clientWidth/2+e.offsetWidth/2:t?c:c+e.offsetWidth-a.clientWidth)}i.push(a)}}function nc(e){let t=0,n=0,r=e;for(;r;){t+=r.offsetTop,n+=r.offsetLeft;let e=r.offsetParent;if(!Do(e))break;t+=e.clientTop,n+=e.clientLeft,r=e}return{top:t,left:n}}function rc(e,t){let n=nc(e),r=nc(t);return{top:n.top-r.top-t.clientTop,left:n.left-r.left-t.clientLeft}}function ic(e,t,n){let{scaleX:r,scaleY:i,x:a,y:o}=t,s=e.left+a+(1-r)*parseFloat(n),c=e.top+o+(1-i)*parseFloat(n.slice(n.indexOf(` `)+1)),l=r?e.width*r:e.width,u=i?e.height*i:e.height;return{width:l,height:u,top:c,right:s+l,bottom:c+u,left:s}}function ac(e,t,n){let{scaleX:r,scaleY:i,x:a,y:o}=t,s=e.left-a-(1-r)*parseFloat(n),c=e.top-o-(1-i)*parseFloat(n.slice(n.indexOf(` `)+1)),l=r?e.width/r:e.width,u=i?e.height/i:e.height;return{width:l,height:u,top:c,right:s+l,bottom:c+u,left:s}}function oc({element:e,keyframes:t,options:n}){return e.animate(t,n).finished}function sc(e,t=zs(e).translate,n=!0){if(n){let t=xo(e,e=>`translate`in e);if(t){let{translate:e=``}=t[0];if(typeof e==`string`){let t=Js(e);if(t)return t}}}if(t){let e=Js(t);if(e)return e}return{x:0,y:0,z:0}}var cc=new Ps(e=>setTimeout(e,0)),lc=new Map,uc=lc.clear.bind(lc);function dc(e){let t=e.ownerDocument,n=lc.get(t);if(n)return n;n=t.getAnimations(),lc.set(t,n),cc.schedule(uc);let r=n.filter(t=>bo(t.effect)&&t.effect.target===e);return lc.set(e,r),n}function fc(e,t){let n=dc(e).filter(e=>{if(bo(e.effect)){let{target:n}=e.effect;if((n&&t.isValidTarget?.call(t,n))??!0)return e.effect.getKeyframes().some(e=>{for(let n of t.properties)if(e[n])return!0})}}).map(e=>{let{effect:t,currentTime:n}=e,r=t?.getComputedTiming().duration;if(!(e.pending||e.playState===`finished`)&&typeof r==`number`&&typeof n==`number`&&n<r)return e.currentTime=r,()=>{e.currentTime=n}});if(n.length>0)return()=>n.forEach(e=>e?.())}var pc=class extends zr{constructor(e,t={}){let{frameTransform:n=Gs(e),ignoreTransforms:r,getBoundingClientRect:i=So}=t,a=fc(e,{properties:[`transform`,`translate`,`scale`,`width`,`height`],isValidTarget:t=>(t!==e||Lo())&&t.contains(e)}),o=i(e),{top:s,left:c,width:l,height:u}=o,d,f=zs(e),p=Ys(f),m={x:p?.scaleX??1,y:p?.scaleY??1},h=mc(e,f);a?.(),p&&(d=ac(o,p,f.transformOrigin),(r||h)&&(s=d.top,c=d.left,l=d.width,u=d.height));let g={width:d?.width??l,height:d?.height??u};if(h&&!r&&d){let e=ic(d,h,f.transformOrigin);s=e.top,c=e.left,l=e.width,u=e.height,m.x=h.scaleX,m.y=h.scaleY}n&&(r||(c*=n.scaleX,l*=n.scaleX,s*=n.scaleY,u*=n.scaleY),c+=n.x,s+=n.y),super(c,s,l,u),this.scale=m,this.intrinsicWidth=g.width,this.intrinsicHeight=g.height}};function mc(e,t){let n=e.getAnimations();if(!n.length)return null;let r,i,a,o=!1;for(let e of n){if(e.playState!==`running`)continue;let t=bo(e.effect)?e.effect.getKeyframes():[],n=t[t.length-1];if(!n)continue;let{transform:s,translate:c,scale:l}=n;typeof s==`string`&&s&&(r=s,o=!0),typeof c==`string`&&c&&(i=c,o=!0),typeof l==`string`&&l&&(a=l,o=!0)}return o?Ys({transform:r??t.transform,translate:i??t.translate,scale:a??t.scale}):null}function hc(e){return`style`in e&&typeof e.style==`object`&&e.style!==null&&`setProperty`in e.style&&`removeProperty`in e.style&&typeof e.style.setProperty==`function`&&typeof e.style.removeProperty==`function`}var gc=class{constructor(e){this.element=e,this.initial=new Map}set(e,t=``){let{element:n}=this;if(hc(n))for(let[r,i]of Object.entries(e)){let e=`${t}${r}`;this.initial.has(e)||this.initial.set(e,n.style.getPropertyValue(e)),n.style.setProperty(e,typeof i==`string`?i:`${i}px`)}}remove(e,t=``){let{element:n}=this;if(hc(n))for(let r of e){let e=`${t}${r}`;n.style.removeProperty(e)}}reset(){let{element:e}=this;if(hc(e)){for(let[t,n]of this.initial)e.style.setProperty(t,n);e.getAttribute(`style`)===``&&e.removeAttribute(`style`)}}};function _c(e){return e?e instanceof To(e).Element||wo(e)&&e.nodeType===Node.ELEMENT_NODE:!1}function vc(e){if(!e)return!1;let{KeyboardEvent:t}=To(e.target);return e instanceof t}function yc(e){if(!e)return!1;let{PointerEvent:t}=To(e.target);return e instanceof t}function bc(e){if(!_c(e))return!1;let{tagName:t}=e;return t===`INPUT`||t===`TEXTAREA`||xc(e)}function xc(e){return e.hasAttribute(`contenteditable`)&&e.getAttribute(`contenteditable`)!==`false`}var Sc={};function Cc(e){let t=Sc[e]==null?0:Sc[e]+1;return Sc[e]=t,`${e}-${t}`}var wc=({dragOperation:e,droppable:t})=>{let n=e.position.current;if(!n)return null;let{id:r}=t;return t.shape&&t.shape.containsPoint(n)?{id:r,value:1/Rr.distance(t.shape.center,n),type:Da.PointerIntersection,priority:Ea.High}:null},Tc=({dragOperation:e,droppable:t})=>{let{shape:n}=e;if(!t.shape||!n?.current)return null;let r=n.current.intersectionArea(t.shape);if(r){let{position:i}=e,a=Rr.distance(t.shape.center,i.current),o=r/(n.current.area+t.shape.area-r)/a;return{id:t.id,value:o,type:Da.ShapeIntersection,priority:Ea.Normal}}return null},Ec=e=>wc(e)??Tc(e),Dc=e=>{let{dragOperation:t,droppable:n}=e,{shape:r,position:i}=t;if(!n.shape)return null;let a=r?zr.from(r.current.boundingRectangle).corners:void 0,o=zr.from(n.shape.boundingRectangle).corners.reduce((e,t,n)=>e+Rr.distance(Rr.from(t),a?.[n]??i.current),0)/4;return{id:n.id,value:1/o,type:Da.Collision,priority:Ea.Normal}},Oc=Object.create,kc=Object.defineProperty,Ac=Object.defineProperties,jc=Object.getOwnPropertyDescriptor,Mc=Object.getOwnPropertyDescriptors,Nc=Object.getOwnPropertySymbols,Pc=Object.prototype.hasOwnProperty,Fc=Object.prototype.propertyIsEnumerable,Ic=(e,t)=>(t=Symbol[e])?t:Symbol.for(`Symbol.`+e),Lc=e=>{throw TypeError(e)},Rc=(e,t,n)=>t in e?kc(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,zc=(e,t)=>{for(var n in t||={})Pc.call(t,n)&&Rc(e,n,t[n]);if(Nc)for(var n of Nc(t))Fc.call(t,n)&&Rc(e,n,t[n]);return e},Bc=(e,t)=>Ac(e,Mc(t)),Vc=(e,t)=>kc(e,`name`,{value:t,configurable:!0}),Hc=(e,t)=>{var n={};for(var r in e)Pc.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&Nc)for(var r of Nc(e))t.indexOf(r)<0&&Fc.call(e,r)&&(n[r]=e[r]);return n},Uc=e=>[,,,Oc(e?.[Ic(`metadata`)]??null)],Wc=[`class`,`method`,`getter`,`setter`,`accessor`,`field`,`value`,`get`,`set`],Gc=e=>e!==void 0&&typeof e!=`function`?Lc(`Function expected`):e,Kc=(e,t,n,r,i)=>({kind:Wc[e],name:t,metadata:r,addInitializer:e=>n._?Lc(`Already initialized`):i.push(Gc(e||null))}),qc=(e,t)=>Rc(t,Ic(`metadata`),e[3]),Jc=(e,t,n,r)=>{for(var i=0,a=e[t>>1],o=a&&a.length;i<o;i++)t&1?a[i].call(n):r=a[i].call(n,r);return r},Yc=(e,t,n,r,i,a)=>{var o,s,c,l,u,d=t&7,f=!!(t&8),p=!!(t&16),m=d>3?e.length+1:d?f?1:2:0,h=Wc[d+5],g=d>3&&(e[m-1]=[]),_=e[m]||(e[m]=[]),v=d&&(!p&&!f&&(i=i.prototype),d<5&&(d>3||!p)&&jc(d<4?i:{get[n](){return Z(this,a)},set[n](e){return $c(this,a,e)}},n));d?p&&d<4&&Vc(a,(d>2?`set `:d>1?`get `:``)+n):Vc(i,n);for(var y=r.length-1;y>=0;y--)l=Kc(d,n,c={},e[3],_),d&&(l.static=f,l.private=p,u=l.access={has:p?e=>Zc(i,e):e=>n in e},d^3&&(u.get=p?e=>(d^1?Z:el)(e,i,d^4?a:v.get):e=>e[n]),d>2&&(u.set=p?(e,t)=>$c(e,i,t,d^4?a:v.set):(e,t)=>e[n]=t)),s=(0,r[y])(d?d<4?p?a:v[h]:d>4?void 0:{get:v.get,set:v.set}:i,l),c._=1,d^4||s===void 0?Gc(s)&&(d>4?g.unshift(s):d?p?a=s:v[h]=s:i=s):typeof s!=`object`||!s?Lc(`Object expected`):(Gc(o=s.get)&&(v.get=o),Gc(o=s.set)&&(v.set=o),Gc(o=s.init)&&g.unshift(o));return d||qc(e,i),v&&kc(i,n,v),p?d^4?a:v:i},Xc=(e,t,n)=>t.has(e)||Lc(`Cannot `+n),Zc=(e,t)=>Object(t)===t?e.has(t):Lc(`Cannot use the "in" operator on this value`),Z=(e,t,n)=>(Xc(e,t,`read from private field`),n?n.call(e):t.get(e)),Qc=(e,t,n)=>t.has(e)?Lc(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),$c=(e,t,n,r)=>(Xc(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),el=(e,t,n)=>(Xc(e,t,`access private method`),n),tl={role:`button`,roleDescription:`draggable`},nl=`dnd-kit-description`,rl=`dnd-kit-announcement`,il={draggable:`To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item in a given direction. Press space again to drop the item in its new position, or press escape to cancel.`},al={dragstart({operation:{source:e}}){if(e)return`Picked up draggable item ${e.id}.`},dragover({operation:{source:e,target:t}}){if(e&&e.id!==t?.id)return t?`Draggable item ${e.id} was moved over droppable target ${t.id}.`:`Draggable item ${e.id} is no longer over a droppable target.`},dragend({operation:{source:e,target:t},canceled:n}){if(e)return n?`Dragging was cancelled. Draggable item ${e.id} was dropped.`:t?`Draggable item ${e.id} was dropped over droppable target ${t.id}`:`Draggable item ${e.id} was dropped.`}};function ol(e){let t=e.tagName.toLowerCase();return[`input`,`select`,`textarea`,`a`,`button`].includes(t)}function sl(e,t){let n=document.createElement(`div`);return n.id=e,n.style.setProperty(`display`,`none`),n.textContent=t,n}function cl(e){let t=document.createElement(`div`);return t.id=e,t.setAttribute(`role`,`status`),t.setAttribute(`aria-live`,`polite`),t.setAttribute(`aria-atomic`,`true`),t.style.setProperty(`position`,`fixed`),t.style.setProperty(`width`,`1px`),t.style.setProperty(`height`,`1px`),t.style.setProperty(`margin`,`-1px`),t.style.setProperty(`border`,`0`),t.style.setProperty(`padding`,`0`),t.style.setProperty(`overflow`,`hidden`),t.style.setProperty(`clip`,`rect(0 0 0 0)`),t.style.setProperty(`clip-path`,`inset(100%)`),t.style.setProperty(`white-space`,`nowrap`),t}var ll=[`dragover`,`dragmove`],ul=class extends Oi{constructor(e,t){super(e);let{id:n,idPrefix:{description:r=nl,announcement:i=rl}={},announcements:a=al,screenReaderInstructions:o=il,debounce:s=500}=t??{},c=n?`${r}-${n}`:Cc(r),l=n?`${i}-${n}`:Cc(i),u,d,f,p,m=(e=p)=>{f&&e&&f?.nodeValue!==e&&(f.nodeValue=e)},h=()=>Fs.schedule(m),g=dl(h,s),_=Object.entries(a).map(([e,t])=>this.manager.monitor.addEventListener(e,(n,r)=>{let i=f;if(!i)return;let a=t?.(n,r);a&&i.nodeValue!==a&&(p=a,ll.includes(e)?g():(h(),g.cancel()))})),v=()=>{let e=[];u?.isConnected||(u=sl(c,o.draggable),e.push(u)),d?.isConnected||(d=cl(l),f=document.createTextNode(``),d.appendChild(f),e.push(d)),e.length>0&&document.body.append(...e)},y=new Set;function b(){for(let e of y)e()}this.registerEffect(()=>{y.clear();for(let e of this.manager.registry.draggables.value){let t=e.handle??e.element;if(t){u&&d||y.add(v),ol(t)&&!Lo()||t.hasAttribute(`tabindex`)||y.add(()=>t.setAttribute(`tabindex`,`0`)),!t.hasAttribute(`role`)&&t.tagName.toLowerCase()!==`button`&&y.add(()=>t.setAttribute(`role`,tl.role)),t.hasAttribute(`aria-roledescription`)||y.add(()=>t.setAttribute(`aria-roledescription`,tl.roleDescription)),t.hasAttribute(`aria-describedby`)||y.add(()=>t.setAttribute(`aria-describedby`,c));for(let n of[`aria-pressed`,`aria-grabbed`]){let r=String(e.isDragging);t.getAttribute(n)!==r&&y.add(()=>t.setAttribute(n,r))}let n=String(e.disabled);t.getAttribute(`aria-disabled`)!==n&&y.add(()=>t.setAttribute(`aria-disabled`,n))}}y.size>0&&Fs.schedule(b)}),this.destroy=()=>{super.destroy(),u?.remove(),d?.remove(),_.forEach(e=>e())}}};function dl(e,t){let n,r=()=>{clearTimeout(n),n=setTimeout(e,t)};return r.cancel=()=>clearTimeout(n),r}var fl=new Map,pl,ml,hl,gl,_l,vl,yl,bl,xl,Sl,Cl,wl,Tl,El=class extends (_l=ki,gl=[K],hl=[Bn],ml=[Bn],pl=[Bn],_l){constructor(e,t){super(e,t),Jc(yl,5,this),Qc(this,xl),Qc(this,vl,new Set),Qc(this,bl,Jc(yl,8,this,new Set)),Jc(yl,11,this),this.registerEffect(el(this,xl,Sl))}register(e){return Z(this,vl).add(e),()=>{Z(this,vl).delete(e)}}addRoot(e){return G(()=>{let t=new Set(this.additionalRoots);t.add(e),this.additionalRoots=t}),()=>{G(()=>{let t=new Set(this.additionalRoots);t.delete(e),this.additionalRoots=t})}}get sourceRoot(){let{source:e}=this.manager.dragOperation;return Bo(e?.element??null)}get targetRoot(){let{target:e}=this.manager.dragOperation;return Bo(e?.element??null)}get roots(){let{status:e}=this.manager.dragOperation;if(e.initializing||e.initialized){let e=[this.sourceRoot,this.targetRoot].filter(e=>e!=null);return new Set([...e,...this.additionalRoots])}return new Set}};yl=Uc(_l),vl=new WeakMap,bl=new WeakMap,xl=new WeakSet,Sl=function(){let{roots:e}=this,t=[];for(let n of e)for(let e of Z(this,vl))t.push(el(this,xl,Cl).call(this,n,e));return()=>{for(let e of t)e()}},Cl=function(e,t){let n=fl.get(e);n||(n=new Map,fl.set(e,n));let r=n.get(t);if(!r){let i=Eo(e)?el(this,xl,wl).call(this,e,n,t):el(this,xl,Tl).call(this,e,n,t);if(!i)return()=>{};r=i,n.set(t,r)}r.refCount++;let i=!1;return()=>{i||(i=!0,r.refCount--,r.refCount===0&&r.cleanup())}},wl=function(e,t,n){let r=e.createElement(`style`),{nonce:i}=this.options??{};i&&r.setAttribute(`nonce`,i),r.textContent=n,e.head.prepend(r);let a=new MutationObserver(t=>{for(let n of t)for(let t of Array.from(n.removedNodes))if(t===r){e.head.prepend(r);return}});return a.observe(e.head,{childList:!0}),{refCount:0,cleanup:()=>{a.disconnect(),r.remove(),t.delete(n),t.size===0&&fl.delete(e)}}},Tl=function(e,t,n){`adoptedStyleSheets`in e&&Array.isArray(e.adoptedStyleSheets);let{CSSStyleSheet:r}=e.ownerDocument.defaultView??{};if(!r)return null;let i=new r;return i.replaceSync(n),e.adoptedStyleSheets.push(i),{refCount:0,cleanup:()=>{if(zo(e)&&e.host?.isConnected){let t=e.adoptedStyleSheets.indexOf(i);t!==-1&&e.adoptedStyleSheets.splice(t,1)}t.delete(n),t.size===0&&fl.delete(e)}}},Yc(yl,4,`additionalRoots`,gl,El,bl),Yc(yl,2,`sourceRoot`,hl,El),Yc(yl,2,`targetRoot`,ml,El),Yc(yl,2,`roots`,pl,El),qc(yl,El),El.configure=Si(El);var Dl=El,Ol=class extends Oi{constructor(e,t){super(e,t),this.manager=e;let{cursor:n=`grabbing`}=t??{},r=e.registry.plugins.get(Dl)?.register(`* { cursor: ${n} !important; }`);if(r){let e=this.destroy.bind(this);this.destroy=()=>{r(),e()}}}},kl=`data-dnd-`,Al=`${kl}dropping`,jl=`--dnd-`,Ml=`${kl}dragging`,Nl=`${kl}placeholder`,Pl=[Ml,Nl,`popover`,`aria-pressed`,`aria-grabbing`],Fl=[`view-transition-name`],Il=`
  :is(:root,:host) [${Ml}] {
    position: fixed !important;
    pointer-events: none !important;
    touch-action: none;
    z-index: calc(infinity);
    will-change: translate;
    top: var(${jl}top, 0px) !important;
    left: var(${jl}left, 0px) !important;
    right: unset !important;
    bottom: unset !important;
    width: var(${jl}width, auto);
    max-width: var(${jl}width, auto);
    height: var(${jl}height, auto);
    max-height: var(${jl}height, auto);
    transform: var(${jl}transform, none) !important;
    transition: var(${jl}transition) !important;
  }

  :is(:root,:host) [${Nl}] {
    transition: none;
  }

  :is(:root,:host) [${Nl}='hidden'] {
    visibility: hidden;
  }

  [${Ml}] * {
    pointer-events: none !important;
  }

  [${Ml}]:not([${Al}]) {
    translate: var(${jl}translate) !important;
  }

  [${Ml}][style*='${jl}scale'] {
    scale: var(${jl}scale) !important;
    transform-origin: var(${jl}transform-origin) !important;
  }

  @layer dnd-kit {
    :where([${Ml}][popover]) {
      overflow: visible;
      background: unset;
      border: unset;
      margin: unset;
      padding: unset;
      color: inherit;

      &:is(input, button) {
        border: revert;
        background: revert;
      }
    }
  }
  [${Ml}]::backdrop, [${kl}overlay]:not([${Ml}]) {
    display: none;
    visibility: hidden;
  }
`.replace(/\n+/g,` `).replace(/\s+/g,` `).trim();function Ll(e,t=`hidden`){return G(()=>{let{element:n,manager:r}=e;if(!n||!r)return;let i=Rl(n,r.registry.droppables),a=[],o=Ho(n),{remove:s}=o;return zl(i,o,a),Bl(o,t),o.remove=()=>{a.forEach(e=>e()),s.call(o)},o})}function Rl(e,t){let n=new Map;for(let r of t)if(r.element&&(e===r.element||e.contains(r.element))){let e=`${kl}${Cc(`dom-id`)}`;r.element.setAttribute(e,``),n.set(r,e)}return n}function zl(e,t,n){for(let[r,i]of e){if(!r.element)continue;let e=`[${i}]`,a=t.matches(e)?t:t.querySelector(e);if(r.element.removeAttribute(i),!a)continue;let o=r.element;r.proxy=a,a.removeAttribute(i),qo.set(o,a),n.push(()=>{qo.delete(o),r.proxy=void 0})}}function Bl(e,t=`hidden`){e.setAttribute(`inert`,`true`),e.setAttribute(`tab-index`,`-1`),e.setAttribute(`aria-hidden`,`true`),e.setAttribute(Nl,t)}function Vl(e,t){return e===t||Xo(e)===Xo(t)}function Hl(e){let{target:t}=e;`newState`in e&&e.newState===`closed`&&_c(t)&&t.hasAttribute(`popover`)&&requestAnimationFrame(()=>As(t))}function Ul(e){return e.tagName===`TR`}function Wl(e,t,n){let r=new MutationObserver(r=>{let i=!1;for(let n of r){if(n.target!==e){i=!0;continue}if(n.type!==`attributes`)continue;let r=n.attributeName;if(r.startsWith(`aria-`)||Pl.includes(r))continue;let a=e.getAttribute(r);if(r===`style`){if(hc(e)&&hc(t)){let n=e.style;for(let e of Array.from(t.style))n.getPropertyValue(e)===``&&t.style.removeProperty(e);for(let e of Array.from(n)){if(Fl.includes(e)||e.startsWith(jl))continue;let r=n.getPropertyValue(e);t.style.setProperty(e,r)}}}else a===null?t.removeAttribute(r):t.setAttribute(r,a)}i&&n&&t.replaceChildren(...e.cloneNode(!0).childNodes)});return r.observe(e,{attributes:!0,subtree:!0,childList:!0}),r}function Gl(e,t,n){let r=new MutationObserver(r=>{for(let i of r)if(i.addedNodes.length!==0)for(let r of Array.from(i.addedNodes)){if(r.contains(e)&&e.nextElementSibling!==t){e.insertAdjacentElement(`afterend`,t),As(n);return}if(r.contains(t)&&t.previousElementSibling!==e){t.insertAdjacentElement(`beforebegin`,e),As(n);return}}e.isConnected&&t.isConnected&&e.nextElementSibling!==t&&(e.insertAdjacentElement(`afterend`,t),As(n))});return r.observe(e.ownerDocument.body,{childList:!0,subtree:!0}),r}function Kl(e){return new ResizeObserver(()=>{var t;let n=new pc(e.placeholder,{frameTransform:e.frameTransform,ignoreTransforms:!0}),r=e.transformOrigin??{x:1,y:1},i=(e.width-n.width)*r.x+e.delta.x,a=(e.height-n.height)*r.y+e.delta.y,o=Ro();if(e.styles.set({width:n.width-e.widthOffset,height:n.height-e.heightOffset,top:e.top+a+o.y,left:e.left+i+o.x},jl),(t=e.getElementMutationObserver())==null||t.takeRecords(),Ul(e.element)&&Ul(e.placeholder)){let t=Array.from(e.element.cells),n=Array.from(e.placeholder.cells);e.getSavedCellWidths()||e.setSavedCellWidths(t.map(e=>e.style.width));for(let[e,r]of t.entries()){let t=n[e];r.style.width=`${t.getBoundingClientRect().width}px`}}let s=e.getTranslate()??{x:0,y:0},c=e.left+i+o.x+s.x,l=e.top+a+o.y+s.y,u=n.width-e.widthOffset,d=n.height-e.heightOffset,f=e.frameTransform;e.dragOperation.shape=new zr(c*f.scaleX+f.x,l*f.scaleY+f.y,u*f.scaleX,d*f.scaleY)})}var ql=250,Jl=`ease`;function Yl(e){var t;let{animation:n}=e;if(typeof n==`function`){let t=n({source:e.source,element:e.element,feedbackElement:e.feedbackElement,placeholder:e.placeholder,translate:e.translate,moved:e.moved});Promise.resolve(t).then(()=>{e.cleanup(),requestAnimationFrame(e.restoreFocus)});return}let{duration:r=ql,easing:i=Jl}=n??{};As(e.feedbackElement);let[,a]=xo(e.feedbackElement,e=>`translate`in e)??[];a?.pause();let o=e.placeholder??e.element,s={frameTransform:Vl(e.feedbackElement,o)?null:void 0},c=new pc(e.feedbackElement,s),l=Js(zs(e.feedbackElement).translate)??e.translate,u=new pc(o,s),d=zr.delta(c,u,e.alignment),f={x:l.x-d.x,y:l.y-d.y},p=Math.round(c.intrinsicHeight)===Math.round(u.intrinsicHeight)?{}:{minHeight:[`${c.intrinsicHeight}px`,`${u.intrinsicHeight}px`],maxHeight:[`${c.intrinsicHeight}px`,`${u.intrinsicHeight}px`]},m=Math.round(c.intrinsicWidth)===Math.round(u.intrinsicWidth)?{}:{minWidth:[`${c.intrinsicWidth}px`,`${u.intrinsicWidth}px`],maxWidth:[`${c.intrinsicWidth}px`,`${u.intrinsicWidth}px`]};e.styles.set({transition:e.transition},jl),e.feedbackElement.setAttribute(Al,``),(t=e.getElementMutationObserver())==null||t.takeRecords(),oc({element:e.feedbackElement,keyframes:Bc(zc(zc({},p),m),{translate:[`${l.x}px ${l.y}px 0`,`${f.x}px ${f.y}px 0`]}),options:{duration:Vo(To(e.feedbackElement))?0:e.moved||e.feedbackElement!==e.element?r:0,easing:i}}).then(()=>{e.feedbackElement.removeAttribute(Al),a?.finish(),e.cleanup(),requestAnimationFrame(e.restoreFocus)})}var Xl,Zl,Ql,$l,eu,tu,nu,ru=class extends (Zl=Oi,Xl=[K],Zl){constructor(e,t){super(e,t),Qc(this,eu),Qc(this,$l,Jc(Ql,8,this)),Jc(Ql,11,this),this.state={initial:{},current:{}};let n=e.registry.plugins.get(Dl),r=n?.register(Il);if(r){let e=this.destroy.bind(this);this.destroy=()=>{r(),e()}}this.registerEffect(el(this,eu,tu).bind(this,n)),this.registerEffect(el(this,eu,nu))}};Ql=Uc(Zl),$l=new WeakMap,eu=new WeakSet,tu=function(e){let{overlay:t}=this;if(!t||!e)return;let n=Bo(t);if(n)return e.addRoot(n)},nu=function(){let{state:e,manager:t,options:n}=this,{dragOperation:r}=t,{position:i,source:a,status:o}=r;if(o.idle){e.current={},e.initial={};return}if(!a)return;let{element:s}=a,c=a.pluginConfig(ru),l=c?.feedback??n?.feedback??`default`,u=typeof l==`function`?l(a,t):l;if(!s||u===`none`||!o.initialized||o.initializing)return;let{initial:d}=e,f=this.overlay??s,p=Gs(f),m=Gs(s),h=!Vl(s,f),g=new pc(s,{frameTransform:h?m:null,ignoreTransforms:!h}),_={x:m.scaleX/p.scaleX,y:m.scaleY/p.scaleY},{width:v,height:y,top:b,left:x}=g;h&&(v/=_.x,y/=_.y);let S=new gc(f),C=zs(s),{transition:w,translate:T,boxSizing:E,paddingBlockStart:D,paddingBlockEnd:O,paddingInlineStart:k,paddingInlineEnd:A,borderInlineStartWidth:j,borderInlineEndWidth:ee,borderBlockStartWidth:te,borderBlockEndWidth:M}=C,N=w.split(`,`).filter(e=>!/^\s*(transform|translate|scale)\b/.test(e)).join(`,`),P=Ys(C),F=C.transform,I=u===`clone`,ne=E===`content-box`,L=ne?parseInt(k)+parseInt(A)+parseInt(j)+parseInt(ee):0,re=ne?parseInt(D)+parseInt(O)+parseInt(te)+parseInt(M):0,R=u!==`move`&&!this.overlay?Ll(a,I?`clone`:`hidden`):null,ie=G(()=>vc(t.dragOperation.activatorEvent));if(!d.translate){if(this.overlay&&P)d.translate={x:P.x,y:P.y};else if(T!==`none`){let e=Js(T);e&&(d.translate=e)}}if(!d.transformOrigin){let e=G(()=>i.current),t=x+(P?.x??0),n=b+(P?.y??0);d.transformOrigin={x:(e.x-t*p.scaleX-p.x)/(v*p.scaleX),y:(e.y-n*p.scaleY-p.y)/(y*p.scaleY)}}let{transformOrigin:ae}=d,oe=b*p.scaleY+p.y,se=x*p.scaleX+p.x;if(!d.coordinates&&(d.coordinates={x:se,y:oe},_.x!==1||_.y!==1)){let{scaleX:e,scaleY:t}=m,{x:n,y:r}=ae;d.coordinates.x+=(v*e-v)*n,d.coordinates.y+=(y*t-y)*r}d.dimensions||={width:v,height:y},d.frameTransform||=p;let ce={x:d.coordinates.x-se,y:d.coordinates.y-oe},le={width:(d.dimensions.width*d.frameTransform.scaleX-v*p.scaleX)*ae.x,height:(d.dimensions.height*d.frameTransform.scaleY-y*p.scaleY)*ae.y},ue={x:ce.x/p.scaleX+le.width,y:ce.y/p.scaleY+le.height},de={left:x+ue.x,top:b+ue.y};f.setAttribute(Ml,`true`);let fe=G(()=>r.transform),z=d.translate??{x:0,y:0},pe=fe.x*p.scaleX+z.x,B=fe.y*p.scaleY+z.y,me=Ro();S.set({width:v-L,height:y-re,top:de.top+me.y,left:de.left+me.x,translate:`${pe}px ${B}px 0`,transform:this.overlay?`none`:F,transition:N?`${N}, translate 0ms linear`:`translate 0ms linear`,scale:h?`${_.x} ${_.y}`:``,"transform-origin":`${ae.x*100}% ${ae.y*100}%`},jl),R&&(s.insertAdjacentElement(`afterend`,R),n?.rootElement&&(typeof n.rootElement==`function`?n.rootElement(a):n.rootElement).appendChild(s)),ks(f)&&(f.hasAttribute(`popover`)||f.setAttribute(`popover`,`manual`),As(f),f.addEventListener(`beforetoggle`,Hl));let he,ge,_e,ve=Kl({placeholder:R,element:s,feedbackElement:f,frameTransform:p,transformOrigin:ae,width:v,height:y,top:b,left:x,widthOffset:L,heightOffset:re,delta:ue,styles:S,dragOperation:r,getTranslate:()=>e.current.translate,getElementMutationObserver:()=>he,getSavedCellWidths:()=>_e,setSavedCellWidths:e=>{_e=e}}),ye=new pc(f);G(()=>r.shape=ye);let be=To(f),V=e=>{this.manager.actions.stop({event:e})},xe=Vo(be);ie&&be.addEventListener(`resize`,V),G(()=>a.status)===`idle`&&requestAnimationFrame(()=>a.status=`dragging`),R&&(ve.observe(R),he=Wl(s,R,I),ge=Gl(s,R,f));let Se=t.dragOperation.source?.id,Ce=()=>{if(!ie||Se==null)return;let e=t.registry.draggables.get(Se),n=e?.handle??e?.element;Do(n)&&n.focus()},we=()=>{if(he?.disconnect(),ge?.disconnect(),ve.disconnect(),be.removeEventListener(`resize`,V),ks(f)&&(f.removeEventListener(`beforetoggle`,Hl),f.removeAttribute(`popover`)),f.removeAttribute(Ml),S.reset(),_e&&Ul(s)){let e=Array.from(s.cells);for(let[t,n]of e.entries())n.style.width=_e[t]??``}a.status=`idle`;let t=e.current.translate!=null,n=r.status.dragging;R&&(!n&&t||R.parentElement!==f.parentElement)&&f.isConnected&&R.replaceWith(f),R?.remove()},Te=n?.dropAnimation,Ee=this,De=Hn(()=>{let{transform:t,status:i}=r;if((t.x||t.y||e.current.translate)&&i.dragging){let i=d.translate??{x:0,y:0},a={x:t.x/p.scaleX+i.x,y:t.y/p.scaleY+i.y},o=e.current.translate,s=G(()=>r.modifiers),c=G(()=>r.shape?.current),l=n?.keyboardTransition,u=ie&&!xe&&l!==null?`${l?.duration??250}ms ${l?.easing??`cubic-bezier(0.25, 1, 0.5, 1)`}`:`0ms linear`;if(S.set({transition:N?`${N}, translate ${u}`:`translate ${u}`,translate:`${a.x}px ${a.y}px 0`},jl),he?.takeRecords(),c&&c!==ye&&o&&!s.length){let e=Rr.delta(a,o);r.shape=zr.from(c.boundingRectangle).translate(e.x*p.scaleX,e.y*p.scaleY)}else r.shape=new pc(f);e.current.translate=a}},function(){if(r.status.dropped){this.dispose(),a.status=`dropping`;let n=c?.dropAnimation===void 0?Ee.dropAnimation===void 0?Te:Ee.dropAnimation:c.dropAnimation,r=e.current.translate,i=r!=null;if(!r&&s!==f&&(r={x:0,y:0}),!r||n===null){we();return}t.renderer.rendering.then(()=>{Yl({source:a,element:s,feedbackElement:f,placeholder:R,translate:r,moved:i,transition:w,alignment:a.alignment,styles:S,animation:n??void 0,getElementMutationObserver:()=>he,cleanup:we,restoreFocus:Ce})})}});return()=>{we(),De()}},Yc(Ql,4,`overlay`,Xl,ru,$l),qc(Ql,ru),ru.configure=Si(ru);var iu=ru,au=!0,ou=!1,su,cu,lu=[K],uu=Zs.Forward,du,fu,pu;cu=(su=[K],Zs.Reverse);var mu=class{constructor(){Qc(this,fu,Jc(du,8,this,au)),Jc(du,11,this),Qc(this,pu,Jc(du,12,this,au)),Jc(du,15,this)}isLocked(e){return e===Zs.Idle?!1:e==null?this[Zs.Forward]===au&&this[Zs.Reverse]===au:this[e]===au}unlock(e){e!==Zs.Idle&&(this[e]=ou)}};du=Uc(null),fu=new WeakMap,pu=new WeakMap,Yc(du,4,uu,lu,mu,fu),Yc(du,4,cu,su,mu,pu),qc(du,mu);var hu=[Zs.Forward,Zs.Reverse],gu=class{constructor(){this.x=new mu,this.y=new mu}isLocked(){return this.x.isLocked()&&this.y.isLocked()}},_u=class extends Oi{constructor(e){super(e);let t=$t(new gu),n=null;this.signal=t,un(()=>{let{status:r}=e.dragOperation;if(!r.initialized){n=null,t.value=new gu;return}let{delta:i}=e.dragOperation.position;if(n){let e={x:vu(i.x,n.x),y:vu(i.y,n.y)},r=t.peek();Ht(()=>{for(let t of Yr)for(let n of hu)e[t]===n&&r[t].unlock(n);t.value=r})}n=i})}get current(){return this.signal.peek()}};function vu(e,t){return Math.sign(e-t)}var yu,bu,xu,Su,Cu,wu,Tu=class extends (bu=ki,yu=[K],bu){constructor(e){super(e),Qc(this,Su,Jc(xu,8,this,!1)),Jc(xu,11,this),Qc(this,Cu),Qc(this,wu,()=>{if(!Z(this,Cu))return;let{element:e,by:t}=Z(this,Cu);t.y&&(e.scrollTop+=t.y),t.x&&(e.scrollLeft+=t.x)}),this.scroll=(e,t)=>{if(this.disabled)return!1;let n=this.getScrollableElements();if(!n)return $c(this,Cu,void 0),!1;let{position:r}=this.manager.dragOperation,i=r?.current;if(i){let{by:r}=e??{},a=r?{x:Eu(r.x),y:Eu(r.y)}:void 0,o=a?void 0:this.scrollIntentTracker.current;if(o?.isLocked())return!1;for(let e of n){let n=Ns(e,r);if(n.x||n.y){let{speed:n,direction:s}=ec(e,i,a,t?.acceleration,t?.threshold);if(o)for(let e of Yr)o[e].isLocked(s[e])&&(n[e]=0,s[e]=0);if(s.x||s.y){let{x:t,y:i}=r??s,a=t*n.x,o=i*n.y;if(a||o){let t=Z(this,Cu)?.by;if(this.autoScrolling&&t&&(t.x&&!a||t.y&&!o))continue;return $c(this,Cu,{element:e,by:{x:a,y:o}}),Fs.schedule(Z(this,wu)),!0}}}}}return $c(this,Cu,void 0),!1};let t=null,n=null,r=Rn(()=>{let{position:n,source:r}=e.dragOperation;if(!n)return null;let i=Go(Bo(r?.element),n.current);return i&&(t=i),i??t}),i=Rn(()=>{let t=r.value,{documentElement:i}=ko(t);if(!t||t===i){let{target:t}=e.dragOperation,r=t?.element;if(r){let e=Ws(r,{excludeElement:!1});return n=e,e}}if(t){let e=Ws(t,{excludeElement:!1});return this.autoScrolling&&n&&e.size<n?.size?n:(n=e,e)}return n=null,null},zn);this.getScrollableElements=()=>i.value,this.scrollIntentTracker=new _u(e),this.destroy=e.monitor.addEventListener(`dragmove`,t=>{!this.disabled&&!t.defaultPrevented&&vc(e.dragOperation.activatorEvent)&&t.by&&this.scroll({by:t.by})&&t.preventDefault()})}};xu=Uc(bu),Su=new WeakMap,Cu=new WeakMap,wu=new WeakMap,Yc(xu,4,`autoScrolling`,yu,Tu,Su),qc(xu,Tu);function Eu(e){return e>0?Zs.Forward:e<0?Zs.Reverse:Zs.Idle}var Du=new class{constructor(e){this.scheduler=e,this.pending=!1,this.tasks=new Set,this.resolvers=new Set,this.flush=()=>{let{tasks:e,resolvers:t}=this;this.pending=!1,this.tasks=new Set,this.resolvers=new Set;for(let t of e)t();for(let e of t)e()}}schedule(e){return this.tasks.add(e),this.pending||(this.pending=!0,this.scheduler(this.flush)),new Promise(e=>this.resolvers.add(e))}}(e=>{typeof requestAnimationFrame==`function`?requestAnimationFrame(e):e()}),Ou=10,ku=class extends Oi{constructor(e,t){super(e,t);let n=e.registry.plugins.get(Tu);if(!n)throw Error(`AutoScroller plugin depends on Scroller plugin`);this.destroy=un(()=>{if(this.disabled)return;let{position:t,status:r}=e.dragOperation;if(r.dragging){let e={acceleration:this.options?.acceleration,threshold:typeof this.options?.threshold==`number`?{x:this.options.threshold,y:this.options.threshold}:this.options?.threshold};if(n.scroll(void 0,e)){n.autoScrolling=!0;let t=setInterval(()=>Du.schedule(()=>n.scroll(void 0,e)),Ou);return()=>{clearInterval(t)}}n.autoScrolling=!1}})}};ku.configure=Si(ku);var Au=ku,ju={capture:!0,passive:!0},Mu,Nu=class extends ki{constructor(e){super(e),Qc(this,Mu),this.handleScroll=()=>{Z(this,Mu)??$c(this,Mu,setTimeout(()=>{this.manager.collisionObserver.forceUpdate(!1),$c(this,Mu,void 0)},50))};let{dragOperation:t}=this.manager;this.destroy=un(()=>{if(t.status.dragging){let e=t.source?.element?.ownerDocument??document;return e.addEventListener(`scroll`,this.handleScroll,ju),()=>{e.removeEventListener(`scroll`,this.handleScroll,ju)}}})}};Mu=new WeakMap;var Pu=`* { user-select: none !important; -webkit-user-select: none !important; }`,Fu=class extends Oi{constructor(e){super(e),this.manager=e;let t=e.registry.plugins.get(Dl)?.register(Pu);if(this.destroy=un(()=>{let{dragOperation:e}=this.manager;if(e.status.initialized)return Iu(),document.addEventListener(`selectionchange`,Iu,{capture:!0}),()=>{document.removeEventListener(`selectionchange`,Iu,{capture:!0})}}),t){let e=this.destroy.bind(this);this.destroy=()=>{t(),e()}}}};function Iu(){var e;(e=document.getSelection())==null||e.removeAllRanges()}var Lu=Object.freeze({offset:10,keyboardCodes:{start:[`Space`,`Enter`],cancel:[`Escape`],end:[`Space`,`Enter`,`Tab`],up:[`ArrowUp`],down:[`ArrowDown`],left:[`ArrowLeft`],right:[`ArrowRight`]},preventActivation(e,t){let n=t.handle??t.element;return e.target!==n}}),Ru,zu=class extends za{constructor(e,t){super(e),this.manager=e,this.options=t,Qc(this,Ru,[]),this.listeners=new Yo,this.handleSourceKeyDown=(e,t,n)=>{if(this.disabled||e.defaultPrevented||!_c(e.target)||t.disabled)return;let{keyboardCodes:r=Lu.keyboardCodes,preventActivation:i=Lu.preventActivation}=n??{};r.start.includes(e.code)&&this.manager.dragOperation.status.idle&&(i?.(e,t)||this.handleStart(e,t,n))}}bind(e,t=this.options){return un(()=>{let n=e.handle??e.element,r=n=>{vc(n)&&this.handleSourceKeyDown(n,e,t)};if(n)return n.addEventListener(`keydown`,r),()=>{n.removeEventListener(`keydown`,r)}})}handleStart(e,t,n){let{element:r}=t;if(!r)throw Error(`Source draggable does not have an associated element`);e.preventDefault(),e.stopImmediatePropagation(),tc(r);let{center:i}=new pc(r);if(this.manager.actions.start({event:e,coordinates:{x:i.x,y:i.y},source:t}).signal.aborted)return this.cleanup();this.sideEffects();let a=ko(r),o=[this.listeners.bind(a,[{type:`keydown`,listener:e=>this.handleKeyDown(e,t,n),options:{capture:!0}}])];Z(this,Ru).push(...o)}handleKeyDown(e,t,n){let{keyboardCodes:r=Lu.keyboardCodes}=n??{};if(Vu(e,[...r.end,...r.cancel])){e.preventDefault();let t=Vu(e,r.cancel);this.handleEnd(e,t)}else Vu(e,r.up)?this.handleMove(`up`,e):Vu(e,r.down)&&this.handleMove(`down`,e),Vu(e,r.left)?this.handleMove(`left`,e):Vu(e,r.right)&&this.handleMove(`right`,e)}handleEnd(e,t){this.manager.actions.stop({event:e,canceled:t}),this.cleanup()}handleMove(e,t){let{shape:n}=this.manager.dragOperation,r=t.shiftKey?5:1,i={x:0,y:0},a=this.options?.offset??Lu.offset;if(typeof a==`number`&&(a={x:a,y:a}),n){switch(e){case`up`:i={x:0,y:-a.y*r};break;case`down`:i={x:0,y:a.y*r};break;case`left`:i={x:-a.x*r,y:0};break;case`right`:i={x:a.x*r,y:0}}(i.x||i.y)&&(t.preventDefault(),this.manager.actions.move({event:t,by:i}))}}sideEffects(){let e=this.manager.registry.plugins.get(Au);e?.disabled===!1&&(e.disable(),Z(this,Ru).push(()=>{e.enable()}))}cleanup(){Z(this,Ru).forEach(e=>e()),$c(this,Ru,[])}destroy(){this.cleanup(),this.listeners.clear()}};Ru=new WeakMap,zu.configure=Si(zu),zu.defaults=Lu;var Bu=zu;function Vu(e,t){return t.includes(e.code)}var Hu,Uu=class extends Ha{constructor(){super(...arguments),Qc(this,Hu)}onEvent(e){switch(e.type){case`pointerdown`:$c(this,Hu,Po(e));break;case`pointermove`:if(!Z(this,Hu))return;let{x:t,y:n}=Po(e),r={x:t-Z(this,Hu).x,y:n-Z(this,Hu).y},{tolerance:i}=this.options;if(i&&qr(r,i)){this.abort();return}qr(r,this.options.value)&&this.activate(e);break;case`pointerup`:this.abort()}}abort(){$c(this,Hu,void 0)}};Hu=new WeakMap;var Wu,Gu,Ku=class extends Ha{constructor(){super(...arguments),Qc(this,Wu),Qc(this,Gu)}onEvent(e){switch(e.type){case`pointerdown`:$c(this,Gu,Po(e)),$c(this,Wu,setTimeout(()=>this.activate(e),this.options.value));break;case`pointermove`:if(!Z(this,Gu))return;let{x:t,y:n}=Po(e);qr({x:t-Z(this,Gu).x,y:n-Z(this,Gu).y},this.options.tolerance)&&this.abort();break;case`pointerup`:this.abort()}}abort(){Z(this,Wu)&&(clearTimeout(Z(this,Wu)),$c(this,Gu,void 0),$c(this,Wu,void 0))}};Wu=new WeakMap,Gu=new WeakMap;var qu=class{};qu.Delay=Ku,qu.Distance=Uu;var Ju=Object.freeze({activationConstraints(e,t){let{pointerType:n,target:r}=e;if(n!==`mouse`||!_c(r)||t.handle!==r&&!t.handle?.contains(r))return n===`touch`?[new qu.Delay({value:250,tolerance:5})]:bc(r)&&!e.defaultPrevented?[new qu.Delay({value:200,tolerance:0})]:[new qu.Delay({value:200,tolerance:10}),new qu.Distance({value:5})]},preventActivation(e,t){let{target:n}=e;return n===t.element||n===t.handle||!_c(n)||t.handle?.contains(n)?!1:Jo(n)}}),Yu,Xu=class extends za{constructor(e,t){super(e),this.manager=e,this.options=t,Qc(this,Yu,new Set),this.listeners=new Yo,this.latest={event:void 0,coordinates:void 0},this.handleMove=()=>{let{event:e,coordinates:t}=this.latest;e&&t&&this.manager.actions.move({event:e,to:t})},this.handleCancel=this.handleCancel.bind(this),this.handlePointerUp=this.handlePointerUp.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this)}activationConstraints(e,t,n=this.options){let{activationConstraints:r=Ju.activationConstraints}=n??{};return typeof r==`function`?r(e,t):r}bind(e,t=this.options){return un(()=>{let n=new AbortController,{signal:r}=n,i=n=>{yc(n)&&this.handlePointerDown(n,e,t)},a=[e.handle??e.element];t?.activatorElements&&(a=Array.isArray(t.activatorElements)?t.activatorElements:t.activatorElements(e));for(let e of a)e&&(nd(e.ownerDocument.defaultView),e.addEventListener(`pointerdown`,i,{signal:r}));return()=>n.abort()})}handlePointerDown(e,t,n){if(this.disabled||!e.isPrimary||e.button!==0||!_c(e.target)||t.disabled||Qu(e)||!this.manager.dragOperation.status.idle)return;let{preventActivation:r=Ju.preventActivation}=n??{};if(r?.(e,t))return;let{target:i}=e,a=Do(i)&&i.draggable&&i.getAttribute(`draggable`)===`true`,o=Gs(t.element),{x:s,y:c}=Po(e);this.initialCoordinates={x:s*o.scaleX+o.x,y:c*o.scaleY+o.y};let l=this.activationConstraints(e,t,n);e.sensor=this;let u=new Ba(l,e=>this.handleStart(t,e));u.signal.onabort=()=>this.handleCancel(e),u.onEvent(e),this.controller=u;let d=Io(),f=this.listeners.bind(d,[{type:`pointermove`,listener:e=>this.handlePointerMove(e,t)},{type:`pointerup`,listener:this.handlePointerUp,options:{capture:!0}},{type:`pointercancel`,listener:this.handleCancel},{type:`dragstart`,listener:a?this.handleCancel:$u,options:{capture:!0}}]);Z(this,Yu).add(()=>{f(),this.initialCoordinates=void 0})}handlePointerMove(e,t){var n;if(this.controller?.activated===!1)(n=this.controller)==null||n.onEvent(e);else if(this.manager.dragOperation.status.dragging){let n=Po(e),r=Gs(t.element);n.x=n.x*r.scaleX+r.x,n.y=n.y*r.scaleY+r.y,e.preventDefault(),e.stopPropagation(),this.latest.event=e,this.latest.coordinates=n,Fs.schedule(this.handleMove)}}handlePointerUp(e){let{status:t}=this.manager.dragOperation;if(!t.idle){e.preventDefault(),e.stopPropagation();let n=!t.initialized;this.manager.actions.stop({event:e,canceled:n})}this.cleanup()}handleKeyDown(e){e.key===`Escape`&&(e.preventDefault(),this.handleCancel(e))}handleStart(e,t){let{manager:n,initialCoordinates:r}=this;if(!r||!n.dragOperation.status.idle||t.defaultPrevented)return;if(n.actions.start({coordinates:r,event:t,source:e}).signal.aborted)return this.cleanup();t.preventDefault();let i=ko(t.target).body;try{i.setPointerCapture(t.pointerId)}catch{this.handleCancel(t);return}let a=_c(t.target)?[t.target,i]:i,o=this.listeners.bind(a,[{type:`touchmove`,listener:$u,options:{passive:!1}},{type:`click`,listener:$u},{type:`contextmenu`,listener:$u},{type:`keydown`,listener:this.handleKeyDown}]);Z(this,Yu).add(o)}handleCancel(e){let{dragOperation:t}=this.manager;t.status.initialized&&this.manager.actions.stop({event:e,canceled:!0}),this.cleanup()}cleanup(){let{controller:e}=this;this.controller=void 0,e&&!e.signal.aborted&&e.abort(),this.latest={event:void 0,coordinates:void 0},Z(this,Yu).forEach(e=>e()),Z(this,Yu).clear()}destroy(){this.cleanup(),this.listeners.clear()}};Yu=new WeakMap,Xu.configure=Si(Xu),Xu.defaults=Ju;var Zu=Xu;function Qu(e){return`sensor`in e}function $u(e){e.preventDefault()}function ed(){}var td=new WeakSet;function nd(e){e&&!td.has(e)&&(e.addEventListener(`touchmove`,ed,{capture:!1,passive:!1}),td.add(e))}var rd={modifiers:[],plugins:[ul,Au,Ol,iu,Fu],sensors:[Zu,Bu]},id=class extends mo{constructor(e={}){let t=po(e.plugins,rd.plugins),n=po(e.sensors,rd.sensors),r=po(e.modifiers,rd.modifiers);super(Bc(zc({},e),{plugins:[Nu,Tu,Dl,...t],sensors:n,modifiers:r}))}},ad,od,sd,cd,ld,ud,dd=class extends (sd=sa,od=[K],ad=[K],sd){constructor(e,t){var n=e,{element:r,effects:i=()=>[],handle:a}=n,o=Hc(n,[`element`,`effects`,`handle`]);super(zc({effects:()=>[...i(),()=>{let{manager:e}=this;if(!e)return;let t=(this.sensors?.map(Ci)??[...e.sensors]).map(t=>{let n=t instanceof za?t:e.registry.register(t.plugin),r=t instanceof za?void 0:t.options;return n.bind(this,r)});return function(){t.forEach(e=>e())}}]},o),t),Qc(this,ld,Jc(cd,8,this)),Jc(cd,11,this),Qc(this,ud,Jc(cd,12,this)),Jc(cd,15,this),this.element=r,this.handle=a}};cd=Uc(sd),ld=new WeakMap,ud=new WeakMap,Yc(cd,4,`handle`,od,dd,ld),Yc(cd,4,`element`,ad,dd,ud),qc(cd,dd);var fd,pd,md,hd,gd,_d,vd,yd,bd,xd,Sd=class extends (md=xa,pd=[K],fd=[K],md){constructor(e,t){var n=e,{element:r,effects:i=()=>[]}=n,a=Hc(n,[`element`,`effects`]);let{collisionDetector:o=Ec}=a,s=e=>{let{manager:t,element:n}=this;if(!n||e===null){this.shape=void 0;return}if(!t)return;let r=new pc(n),i=G(()=>this.shape);return r&&i?.equals(r)?i:(this.shape=r,r)},c=$t(!1);super(Bc(zc({},a),{collisionDetector:o,effects:()=>[...i(),()=>{let{element:e,manager:t}=this;if(!t)return;let{dragOperation:n}=t,{source:r}=n;c.value=!!(r&&n.status.initialized&&e&&!this.disabled&&this.accepts(r))},()=>{let{element:e}=this;if(c.value&&e){let t=new Os(e,s);return()=>{t.disconnect(),this.shape=void 0}}},()=>{if(this.manager?.dragOperation.status.initialized)return()=>{this.shape=void 0}}]}),t),Qc(this,bd),Qc(this,gd,Jc(hd,8,this)),Jc(hd,11,this),Qc(this,xd,Jc(hd,12,this)),Jc(hd,15,this),this.element=r,this.refreshShape=()=>s()}set element(e){$c(this,bd,e,yd)}get element(){return this.proxy??Z(this,bd,vd)}};hd=Uc(md),gd=new WeakMap,bd=new WeakSet,xd=new WeakMap,_d=Yc(hd,20,`#element`,pd,bd,gd),vd=_d.get,yd=_d.set,Yc(hd,4,`proxy`,fd,Sd,xd),qc(hd,Sd);function Cd(e){return typeof e==`object`&&!!e&&`current`in e}function wd(e){if(e!=null)return Cd(e)?e.current??void 0:e}var Td=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0?H.useLayoutEffect:H.useEffect;function Ed(){let e=(0,H.useState)(0)[1];return(0,H.useCallback)(()=>{e(e=>e+1)},[e])}function Dd(e,t){let n=(0,H.useRef)(new Map),r=Ed();return Td(()=>{if(!e)n.current.clear();else return un(()=>{let i=!1,a=!1;for(let r of n.current){let[o]=r,s=G(()=>r[1]),c=e[o];s!==c&&(i=!0,n.current.set(o,c),a=t?.(o,s,c)??!1)}i&&(a?queueMicrotask(()=>(0,_t.flushSync)(r)):r())})},[e]),(0,H.useMemo)(()=>e&&new Proxy(e,{get(e,t){let r=e[t];return n.current.set(t,r),r}}),[e])}function Od(e,t){e()}function kd(e){let t=(0,H.useRef)(e);return Td(()=>{t.current=e},[e]),t}function Q(e,t,n=H.useEffect,r=Object.is){let i=(0,H.useRef)(e);n(()=>{let n=i.current;r(e,n)||(i.current=e,t(e,n))},[t,e])}function Ad(e,t){let n=(0,H.useRef)(wd(e));Td(()=>{let r=wd(e);r!==n.current&&(n.current=r,t(r))})}var jd=Object.defineProperty,Md=Object.defineProperties,Nd=Object.getOwnPropertyDescriptors,Pd=Object.getOwnPropertySymbols,Fd=Object.prototype.hasOwnProperty,Id=Object.prototype.propertyIsEnumerable,Ld=(e,t,n)=>t in e?jd(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Rd=(e,t)=>{for(var n in t||={})Fd.call(t,n)&&Ld(e,n,t[n]);if(Pd)for(var n of Pd(t))Id.call(t,n)&&Ld(e,n,t[n]);return e},zd=(e,t)=>Md(e,Nd(t)),Bd=(e,t)=>{var n={};for(var r in e)Fd.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&Pd)for(var r of Pd(e))t.indexOf(r)<0&&Id.call(e,r)&&(n[r]=e[r]);return n},Vd=new id,Hd=(0,H.createContext)(Vd),Ud=(0,H.memo)((0,H.forwardRef)(({children:e},t)=>{let[n,r]=(0,H.useState)(0),i=(0,H.useRef)(null),a=(0,H.useRef)(null),o=(0,H.useMemo)(()=>({renderer:{get rendering(){return i.current??Promise.resolve()}},trackRendering(e){i.current||=new Promise(e=>{a.current=e}),(0,H.startTransition)(()=>{e(),r(e=>e+1)})}}),[]);return Td(()=>{var e;(e=a.current)==null||e.call(a),i.current=null},[e,n]),(0,H.useImperativeHandle)(t,()=>o),null})),Wd=[void 0,zn];function Gd(e){var t=e,{children:n,onCollision:r,onBeforeDragStart:i,onDragStart:a,onDragMove:o,onDragOver:s,onDragEnd:c}=t,l=Bd(t,[`children`,`onCollision`,`onBeforeDragStart`,`onDragStart`,`onDragMove`,`onDragOver`,`onDragEnd`]);let u=(0,H.useRef)(null),{plugins:d,modifiers:f,sensors:p}=l,m=po(d,rd.plugins),h=po(p,rd.sensors),g=po(f,rd.modifiers),_=kd(i),v=kd(a),y=kd(s),b=kd(o),x=kd(c),S=kd(r),C=Kd(()=>l.manager??new id(l));return(0,H.useEffect)(()=>{if(!u.current)throw Error(`Renderer not found`);let{renderer:e,trackRendering:t}=u.current,{monitor:n}=C;C.renderer=e;let r=[n.addEventListener(`beforedragstart`,e=>{let n=_.current;n&&t(()=>n(e,C))}),n.addEventListener(`dragstart`,e=>v.current?.call(v,e,C)),n.addEventListener(`dragover`,e=>{let n=y.current;n&&t(()=>n(e,C))}),n.addEventListener(`dragmove`,e=>{let n=b.current;n&&t(()=>n(e,C))}),n.addEventListener(`dragend`,e=>{let n=x.current;n&&t(()=>n(e,C))}),n.addEventListener(`collision`,e=>S.current?.call(S,e,C))];return()=>r.forEach(e=>e())},[C]),Q(m,()=>C&&(C.plugins=m),...Wd),Q(h,()=>C&&(C.sensors=h),...Wd),Q(g,()=>C&&(C.modifiers=g),...Wd),(0,U.jsxs)(Hd.Provider,{value:C,children:[(0,U.jsx)(Ud,{ref:u,children:n}),n]})}function Kd(e){let t=(0,H.useRef)(null);return t.current||=e(),(0,H.useInsertionEffect)(()=>()=>t.current?.destroy(),[]),t.current}function qd(){return(0,H.useContext)(Hd)}function Jd(e){let t=qd()??void 0,[n]=(0,H.useState)(()=>e(t));return n.manager!==t&&(n.manager=t),Td(n.register,[t,n]),n}function Yd(e){let{disabled:t,data:n,element:r,handle:i,id:a,modifiers:o,sensors:s,plugins:c}=e,l=Jd(t=>new dd(zd(Rd({},e),{register:!1,handle:wd(i),element:wd(r)}),t)),u=Dd(l,Xd);return Q(a,()=>l.id=a),Ad(i,e=>l.handle=e),Ad(r,e=>l.element=e),Q(n,()=>n&&(l.data=n)),Q(t,()=>l.disabled=t===!0),Q(s,()=>l.sensors=s),Q(o,()=>l.modifiers=o,void 0,zn),Q(c,()=>l.plugins=c,void 0,zn),Q(e.alignment,()=>l.alignment=e.alignment),{draggable:u,get isDragging(){return u.isDragging},get isDropping(){return u.isDropping},get isDragSource(){return u.isDragSource},handleRef:(0,H.useCallback)(e=>{l.handle=e??void 0},[l]),ref:(0,H.useCallback)(e=>{(e||!l.element?.isConnected||l.manager?.dragOperation.status.idle)&&(l.element=e??void 0)},[l])}}function Xd(e,t,n){return!(e!==`isDragSource`||n||!t)}var Zd=Object.create,Qd=Object.defineProperty,$d=Object.getOwnPropertyDescriptor,ef=(e,t)=>(t=Symbol[e])?t:Symbol.for(`Symbol.`+e),tf=e=>{throw TypeError(e)},nf=(e,t,n)=>t in e?Qd(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,rf=e=>[,,,Zd(e?.[ef(`metadata`)]??null)],af=[`class`,`method`,`getter`,`setter`,`accessor`,`field`,`value`,`get`,`set`],of=e=>e!==void 0&&typeof e!=`function`?tf(`Function expected`):e,sf=(e,t,n,r,i)=>({kind:af[e],name:t,metadata:r,addInitializer:e=>n._?tf(`Already initialized`):i.push(of(e||null))}),cf=(e,t)=>nf(t,ef(`metadata`),e[3]),lf=(e,t,n,r)=>{for(var i=0,a=e[t>>1],o=a&&a.length;i<o;i++)a[i].call(n);return r},uf=(e,t,n,r,i,a)=>{for(var o,s,c,l,u=t&7,d=!1,f=!1,p=2,m=af[u+5],h=e[p]||(e[p]=[]),g=(i=i.prototype,$d(i,n)),_=r.length-1;_>=0;_--)c=sf(u,n,s={},e[3],h),c.static=d,c.private=f,l=c.access={has:e=>n in e},l.get=e=>e[n],o=(0,r[_])(g[m],c),s._=1,of(o)&&(g[m]=o);return g&&Qd(i,n,g),i},df=(e,t,n)=>t.has(e)||tf(`Cannot `+n),ff=(e,t,n)=>(df(e,t,`read from private field`),t.get(e)),pf=(e,t,n)=>t.has(e)?tf(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),mf=(e,t,n,r)=>(df(e,t,`write to private field`),t.set(e,n),n),hf=class e{constructor(e,t){this.x=e,this.y=t}static delta(t,n){return new e(t.x-n.x,t.y-n.y)}static distance(e,t){return Math.hypot(e.x-t.x,e.y-t.y)}static equals(e,t){return e.x===t.x&&e.y===t.y}static from({x:t,y:n}){return new e(t,n)}},gf,_f,vf,yf,bf,xf=class extends (vf=lr,_f=[Bn],gf=[Bn],vf){constructor(e){let t=hf.from(e);super(t,(e,t)=>hf.equals(e,t)),lf(bf,5,this),pf(this,yf,0),this.velocity={x:0,y:0}}get delta(){return hf.delta(this.current,this.initial)}get direction(){let{current:e,previous:t}=this;if(!t)return null;let n={x:e.x-t.x,y:e.y-t.y};return!n.x&&!n.y?null:Math.abs(n.x)>Math.abs(n.y)?n.x>0?`right`:`left`:n.y>0?`down`:`up`}get current(){return super.current}set current(e){let{current:t}=this,n=hf.from(e),r={x:n.x-t.x,y:n.y-t.y},i=Date.now(),a=i-ff(this,yf),o=e=>Math.round(e/a*100);Ht(()=>{mf(this,yf,i),this.velocity={x:o(r.x),y:o(r.y)},super.current=n})}reset(e=this.defaultValue){super.reset(hf.from(e)),this.velocity={x:0,y:0}}};bf=rf(vf),yf=new WeakMap,uf(bf,2,`delta`,_f,xf),uf(bf,2,`direction`,gf,xf),cf(bf,xf);var Sf=(e=>(e.Horizontal=`x`,e.Vertical=`y`,e))(Sf||{});Object.values(Sf);var Cf=({dragOperation:e,droppable:t})=>{let n=e.position.current;if(!n)return null;let{id:r}=t;return t.shape&&t.shape.containsPoint(n)?{id:r,value:1/hf.distance(t.shape.center,n),type:Da.PointerIntersection,priority:Ea.High}:null},wf=({dragOperation:e,droppable:t})=>{let{shape:n}=e;if(!t.shape||!n?.current)return null;let r=n.current.intersectionArea(t.shape);if(r){let{position:i}=e,a=hf.distance(t.shape.center,i.current),o=r/(n.current.area+t.shape.area-r)/a;return{id:t.id,value:o,type:Da.ShapeIntersection,priority:Ea.Normal}}return null},Tf=e=>Cf(e)??wf(e);function Ef(e){let{collisionDetector:t,data:n,disabled:r,element:i,id:a,accept:o,type:s}=e,c=Jd(t=>new Sd(zd(Rd({},e),{register:!1,element:wd(i)}),t)),l=Dd(c);return Q(a,()=>c.id=a),Ad(i,e=>c.element=e),Q(o,()=>c.accept=o,void 0,zn),Q(t,()=>c.collisionDetector=t??Tf),Q(n,()=>n&&(c.data=n)),Q(r,()=>c.disabled=r===!0),Q(s,()=>c.type=s),{droppable:l,get isDropTarget(){return l.isDropTarget},ref:(0,H.useCallback)(e=>{(e||!c.element?.isConnected||c.manager?.dragOperation.status.idle)&&(c.element=e??void 0)},[c])}}var Df=Object.create,Of=Object.defineProperty,kf=Object.defineProperties,Af=Object.getOwnPropertyDescriptor,jf=Object.getOwnPropertyDescriptors,Mf=Object.getOwnPropertySymbols,Nf=Object.prototype.hasOwnProperty,Pf=Object.prototype.propertyIsEnumerable,Ff=(e,t)=>(t=Symbol[e])?t:Symbol.for(`Symbol.`+e),If=e=>{throw TypeError(e)},Lf=(e,t,n)=>t in e?Of(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Rf=(e,t)=>{for(var n in t||={})Nf.call(t,n)&&Lf(e,n,t[n]);if(Mf)for(var n of Mf(t))Pf.call(t,n)&&Lf(e,n,t[n]);return e},zf=(e,t)=>kf(e,jf(t)),Bf=(e,t)=>{var n={};for(var r in e)Nf.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&Mf)for(var r of Mf(e))t.indexOf(r)<0&&Pf.call(e,r)&&(n[r]=e[r]);return n},Vf=e=>[,,,Df(null)],Hf=[`class`,`method`,`getter`,`setter`,`accessor`,`field`,`value`,`get`,`set`],Uf=e=>e!==void 0&&typeof e!=`function`?If(`Function expected`):e,Wf=(e,t,n,r,i)=>({kind:Hf[e],name:t,metadata:r,addInitializer:e=>n._?If(`Already initialized`):i.push(Uf(e||null))}),Gf=(e,t)=>Lf(t,Ff(`metadata`),e[3]),Kf=(e,t,n,r)=>{for(var i=0,a=e[t>>1],o=a&&a.length;i<o;i++)t&1?a[i].call(n):r=a[i].call(n,r);return r},qf=(e,t,n,r,i,a)=>{for(var o,s,c,l,u,d=t&7,f=!1,p=!1,m=e.length+1,h=Hf[d+5],g=e[m-1]=[],_=e[m]||(e[m]=[]),v=(i=i.prototype,Af({get[n](){return Yf(this,a)},set[n](e){return Zf(this,a,e)}},n)),y=r.length-1;y>=0;y--)l=Wf(d,n,c={},e[3],_),l.static=f,l.private=p,u=l.access={has:e=>n in e},u.get=e=>e[n],u.set=(e,t)=>e[n]=t,s=(0,r[y])({get:v.get,set:v.set},l),c._=1,s===void 0?Uf(s)&&(v[h]=s):typeof s!=`object`||!s?If(`Object expected`):(Uf(o=s.get)&&(v.get=o),Uf(o=s.set)&&(v.set=o),Uf(o=s.init)&&g.unshift(o));return v&&Of(i,n,v),i},Jf=(e,t,n)=>t.has(e)||If(`Cannot `+n),Yf=(e,t,n)=>(Jf(e,t,`read from private field`),t.get(e)),Xf=(e,t,n)=>t.has(e)?If(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),Zf=(e,t,n,r)=>(Jf(e,t,`write to private field`),t.set(e,n),n);function Qf(e){return e instanceof Np||e instanceof Mp}var $f=10,ep=class extends Oi{constructor(e){super(e);let t=un(()=>{let{dragOperation:t}=e;if(vc(t.activatorEvent)&&Qf(t.source)&&t.status.initialized){let t=e.registry.plugins.get(Tu);if(t)return t.disable(),()=>t.enable()}}),n=e.monitor.addEventListener(`dragmove`,(e,t)=>{queueMicrotask(()=>{if(this.disabled||e.defaultPrevented||!e.nativeEvent)return;let{dragOperation:n}=t;if(!vc(e.nativeEvent)||!Qf(n.source)||!n.shape)return;let{actions:r,collisionObserver:i,registry:a}=t,{by:o}=e;if(!o)return;let s=tp(o),{source:c,target:l}=n,{center:u}=n.shape.current,d=[],f=[];Ht(()=>{for(let e of a.droppables){let{id:t}=e;if(!e.accepts(c)||t===l?.id&&Qf(e)||!e.element)continue;let n=e.shape,r=new pc(e.element,{getBoundingClientRect:e=>No(e,void 0,.2)});r.height&&r.width&&(s==`down`&&u.y+$f<r.center.y||s==`up`&&u.y-$f>r.center.y||s==`left`&&u.x-$f>r.center.x||s==`right`&&u.x+$f<r.center.x)&&(d.push(e),e.shape=r,f.push(()=>e.shape=n))}}),e.preventDefault(),i.disable();let p=i.computeCollisions(d,Dc);Ht(()=>f.forEach(e=>e()));let[m]=p;if(!m)return;let{id:h}=m,{index:g,group:_}=c.sortable;r.setDropTarget(h).then(()=>{let{source:e,target:t,shape:a}=n;if(!e||!Qf(e)||!a)return;let{index:o,group:s,target:c}=e.sortable,l=g!==o||_!==s,u=l?c:t?.element;if(!u)return;tc(u);let d=new pc(u);if(!d)return;let f=zr.delta(d,zr.from(a.current.boundingRectangle),e.alignment);r.move({by:f}),l?r.setDropTarget(e.id).then(()=>i.enable()):i.enable()})})});this.destroy=()=>{n(),t()}}};function tp(e){let{x:t,y:n}=e;if(t>0)return`right`;if(t<0)return`left`;if(n>0)return`down`;if(n<0)return`up`}var np=Object.defineProperty,rp=Object.defineProperties,ip=Object.getOwnPropertyDescriptors,ap=Object.getOwnPropertySymbols,op=Object.prototype.hasOwnProperty,sp=Object.prototype.propertyIsEnumerable,cp=(e,t,n)=>t in e?np(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,lp=(e,t)=>{for(var n in t||={})op.call(t,n)&&cp(e,n,t[n]);if(ap)for(var n of ap(t))sp.call(t,n)&&cp(e,n,t[n]);return e},up=(e,t)=>rp(e,ip(t));function dp(e,t,n){if(t===n)return e;let r=e.slice();return r.splice(n,0,r.splice(t,1)[0]),r}function fp(e){return`initialIndex`in e&&typeof e.initialIndex==`number`&&`index`in e&&typeof e.index==`number`}function pp(e,t,n){let{source:r,target:i,canceled:a}=t.operation;if(!r||!i||a)return`preventDefault`in t&&t.preventDefault(),e;let o=(e,t)=>e===t||typeof e==`object`&&`id`in e&&e.id===t;if(Array.isArray(e)){let s=e.findIndex(e=>o(e,r.id)),c=e.findIndex(e=>o(e,i.id));if(s===-1||c===-1){if(fp(r)){let i=r.initialIndex,a=r.index;return i===a||i<0||i>=e.length?(`preventDefault`in t&&t.preventDefault(),e):n(e,i,a)}return e}if(!a&&`index`in r&&typeof r.index==`number`){let t=r.index;if(t!==s)return n(e,s,t)}return n(e,s,c)}let s=Object.entries(e),c=-1,l,u=-1,d;for(let[e,t]of s)if(c===-1&&(c=t.findIndex(e=>o(e,r.id)),c!==-1&&(l=e)),u===-1&&(u=t.findIndex(e=>o(e,i.id)),u!==-1&&(d=e)),c!==-1&&u!==-1)break;if(c===-1&&fp(r)){let i=r.initialGroup,a=r.initialIndex,o=r.group,s=r.index;if(i==null||o==null||!(i in e)||!(o in e)||i===o&&a===s)return`preventDefault`in t&&t.preventDefault(),e;if(i===o)return up(lp({},e),{[i]:n(e[i],a,s)});let c=e[i][a];return up(lp({},e),{[i]:[...e[i].slice(0,a),...e[i].slice(a+1)],[o]:[...e[o].slice(0,s),c,...e[o].slice(s)]})}if(!r.manager)return e;let{dragOperation:f}=r.manager,p=f.shape?.current.center??f.position.current;if(d==null&&i.id in e){let t=i.shape&&p.y>i.shape.center.y?e[i.id].length:0;d=i.id,u=t}if(l==null||d==null||l===d&&c===u){if(l!=null&&l===d&&c===u&&fp(r)){let t=r.group!=null&&r.group!==l,i=r.index!==c;if(t||i){let t=r.group??l;if(t in e){if(l===t)return up(lp({},e),{[l]:n(e[l],c,r.index)});let i=e[l][c];return up(lp({},e),{[l]:[...e[l].slice(0,c),...e[l].slice(c+1)],[t]:[...e[t].slice(0,r.index),i,...e[t].slice(r.index)]})}}}return`preventDefault`in t&&t.preventDefault(),e}if(l===d)return up(lp({},e),{[l]:n(e[l],c,u)});let m=i.shape&&Math.round(p.y)>Math.round(i.shape.center.y)?1:0,h=e[l][c];return up(lp({},e),{[l]:[...e[l].slice(0,c),...e[l].slice(c+1)],[d]:[...e[d].slice(0,u+m),h,...e[d].slice(u+m)]})}function mp(e,t){return pp(e,t,dp)}var hp=`__default__`,gp=class extends Oi{constructor(e){super(e);let t=()=>{let t=new Map;for(let n of e.registry.droppables)if(n instanceof Np){let{sortable:e}=n,{group:r}=e,i=t.get(r);i||(i=new Set,t.set(r,i)),i.add(e)}for(let[e,n]of t)t.set(e,new Set(yp(n)));return t},n=[e.monitor.addEventListener(`dragover`,(e,n)=>{if(this.disabled)return;let{dragOperation:r}=n,{source:i,target:a}=r;if(!Qf(i)||!Qf(a)||i.sortable===a.sortable)return;let o=t(),s=i.sortable.group===a.sortable.group,c=o.get(i.sortable.group),l=s?c:o.get(a.sortable.group);c&&l&&queueMicrotask(()=>{e.defaultPrevented||n.renderer.rendering.then(()=>{let r=t();for(let[e,t]of o.entries()){let n=Array.from(t).entries();for(let[t,i]of n)if(i.index!==t||i.group!==e||!r.get(e)?.has(i))return}let u=i.sortable.element,d=a.sortable.element;if(!d||!u||!s&&a.id===i.sortable.group)return;let f=yp(c),p=s?f:yp(l),m=i.sortable.group??hp,h=a.sortable.group??hp,g={[m]:f,[h]:p},_=mp(g,e);if(g===_)return;let v=_[h].indexOf(i.sortable),y=_[h].indexOf(a.sortable);n.collisionObserver.disable(),_p(u,v,d,y),Ht(()=>{for(let[e,t]of _[m].entries())t.index=e;if(!s)for(let[e,t]of _[h].entries())t.group=a.sortable.group,t.index=e}),n.actions.setDropTarget(i.id).then(()=>n.collisionObserver.enable())})})}),e.monitor.addEventListener(`dragend`,(e,n)=>{if(!e.canceled)return;let{dragOperation:r}=n,{source:i}=r;Qf(i)&&(i.sortable.initialIndex!==i.sortable.index||i.sortable.initialGroup!==i.sortable.group)&&queueMicrotask(()=>{let e=t(),r=e.get(i.sortable.initialGroup);r&&n.renderer.rendering.then(()=>{for(let[t,n]of e.entries()){let e=Array.from(n).entries();for(let[n,r]of e)if(r.index!==n||r.group!==t)return}let t=yp(r),n=i.sortable.element,a=t[i.sortable.initialIndex],o=a?.element;a&&o&&n&&(_p(n,a.index,o,i.index),Ht(()=>{for(let[t,n]of e.entries()){let e=Array.from(n).values();for(let t of e)t.index=t.initialIndex,t.group=t.initialGroup}}))})})})];this.destroy=()=>{for(let e of n)e()}}};function _p(e,t,n,r){let i=r<t?`afterend`:`beforebegin`;n.insertAdjacentElement(i,e)}function vp(e,t){return e.index-t.index}function yp(e){return Array.from(e).sort(vp)}var bp=[ep,gp],xp={duration:250,easing:`cubic-bezier(0.25, 1, 0.5, 1)`,idle:!1},Sp=new fr,Cp,wp=[K],Tp,Ep,Dp,Op,kp,Ap;Cp=[K];var jp=class{constructor(e,t){Xf(this,Ep,Kf(Tp,8,this)),Kf(Tp,11,this),Xf(this,Dp),Xf(this,Op),Xf(this,kp,Kf(Tp,12,this)),Kf(Tp,15,this),Xf(this,Ap),this.register=()=>(Ht(()=>{var e,t;(e=this.manager)==null||e.registry.register(this.droppable),(t=this.manager)==null||t.registry.register(this.draggable)}),()=>this.unregister()),this.unregister=()=>{Ht(()=>{var e,t;(e=this.manager)==null||e.registry.unregister(this.droppable),(t=this.manager)==null||t.registry.unregister(this.draggable)})},this.destroy=()=>{Ht(()=>{this.droppable.destroy(),this.draggable.destroy()})};var n=e,{effects:r=()=>[],group:i,index:a,sensors:o,type:s,transition:c=xp,plugins:l}=n,u=Bf(n,[`effects`,`group`,`index`,`sensors`,`type`,`transition`,`plugins`]);let d=po(l,bp);this.droppable=new Np(u,t,this),this.draggable=new Mp(zf(Rf({},u),{plugins:d,effects:()=>[()=>{let e=this.manager?.dragOperation.status;e?.initializing&&this.id===this.manager?.dragOperation.source?.id&&Sp.clear(this.manager),e?.dragging&&Sp.set(this.manager,this.id,G(()=>({initialIndex:this.index,initialGroup:this.group})))},()=>{let{index:e,group:t,manager:n}=this,r=Yf(this,Op),i=Yf(this,Dp);(e!==r||t!==i)&&(Zf(this,Op,e),Zf(this,Dp,t),this.animate())},()=>{let{target:e}=this,{isDragSource:t}=this.draggable;(this.draggable.pluginConfig(iu)?.feedback??`default`)===`move`&&t&&(this.droppable.disabled=!e)},...r()],type:s,sensors:o}),t,this),Zf(this,Ap,u.element),this.manager=t,this.index=a,Zf(this,Op,a),this.group=i,Zf(this,Dp,i),this.type=s,this.transition=c}get initialIndex(){return Sp.get(this.manager,this.id)?.initialIndex??this.index}get initialGroup(){return Sp.get(this.manager,this.id)?.initialGroup??this.group}animate(){G(()=>{let{manager:e,transition:t}=this,{shape:n}=this.droppable;if(!e)return;let{idle:r}=e.dragOperation.status;n&&t&&(!r||t.idle)&&e.renderer.rendering.then(()=>{let{element:r}=this;if(!r)return;for(let e of r.getAnimations())`transitionProperty`in e&&(e.transitionProperty===`transform`||e.transitionProperty===`translate`||e.transitionProperty===`scale`)&&e.cancel();let i=this.refreshShape();if(!i)return;let a={x:n.boundingRectangle.left-i.boundingRectangle.left,y:n.boundingRectangle.top-i.boundingRectangle.top},{translate:o}=zs(r),s=sc(r,o,!1),c=sc(r,o);if(a.x||a.y){let n=Vo(To(r))?zf(Rf({},t),{duration:0}):t;oc({element:r,keyframes:{translate:[`${s.x+a.x}px ${s.y+a.y}px ${s.z}`,`${c.x}px ${c.y}px ${c.z}`]},options:n}).then(()=>{e.dragOperation.status.dragging||(this.droppable.shape=void 0)})}})})}get manager(){return this.draggable.manager}set manager(e){Ht(()=>{this.draggable.manager=e,this.droppable.manager=e})}set element(e){Ht(()=>{let t=Yf(this,Ap),n=this.droppable.element,r=this.draggable.element;n&&n!==t||(this.droppable.element=e),r&&r!==t||(this.draggable.element=e),Zf(this,Ap,e)})}get element(){let e=Yf(this,Ap);if(e)return qo.get(e)??e??this.droppable.element}set target(e){this.droppable.element=e}get target(){return this.droppable.element}set source(e){this.draggable.element=e}get source(){return this.draggable.element}get disabled(){return this.draggable.disabled&&this.droppable.disabled}set plugins(e){this.draggable.plugins=po(e,bp)}set disabled(e){Ht(()=>{this.droppable.disabled=e,this.draggable.disabled=e})}set data(e){Ht(()=>{this.droppable.data=e,this.draggable.data=e})}set handle(e){this.draggable.handle=e}set id(e){this.droppable.id=e,this.draggable.id=e}get id(){return this.droppable.id}set sensors(e){this.draggable.sensors=e}set modifiers(e){this.draggable.modifiers=e}set collisionPriority(e){this.droppable.collisionPriority=e}set collisionDetector(e){this.droppable.collisionDetector=e??Ec}set alignment(e){this.draggable.alignment=e}get alignment(){return this.draggable.alignment}set type(e){Ht(()=>{this.droppable.type=e,this.draggable.type=e})}get type(){return this.draggable.type}set accept(e){this.droppable.accept=e}get accept(){return this.droppable.accept}get isDropTarget(){return this.droppable.isDropTarget}get isDragSource(){return this.draggable.isDragSource}get isDragging(){return this.draggable.isDragging}get isDropping(){return this.draggable.isDropping}get status(){return this.draggable.status}refreshShape(){return this.droppable.refreshShape()}accepts(e){return this.droppable.accepts(e)}};Tp=Vf(),Ep=new WeakMap,Dp=new WeakMap,Op=new WeakMap,kp=new WeakMap,Ap=new WeakMap,qf(Tp,4,`index`,wp,jp,Ep),qf(Tp,4,`group`,Cp,jp,kp),Gf(Tp,jp);var Mp=class extends dd{constructor(e,t,n){super(e,t),this.sortable=n}get index(){return this.sortable.index}get initialIndex(){return this.sortable.initialIndex}get group(){return this.sortable.group}get initialGroup(){return this.sortable.initialGroup}},Np=class extends Sd{constructor(e,t,n){super(e,t),this.sortable=n}get index(){return this.sortable.index}get group(){return this.sortable.group}},Pp=Object.defineProperty,Fp=Object.defineProperties,Ip=Object.getOwnPropertyDescriptors,Lp=Object.getOwnPropertySymbols,Rp=Object.prototype.hasOwnProperty,zp=Object.prototype.propertyIsEnumerable,Bp=(e,t,n)=>t in e?Pp(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Vp=(e,t)=>{for(var n in t||={})Rp.call(t,n)&&Bp(e,n,t[n]);if(Lp)for(var n of Lp(t))zp.call(t,n)&&Bp(e,n,t[n]);return e},Hp=(e,t)=>Fp(e,Ip(t));function Up(e){let{accept:t,collisionDetector:n,collisionPriority:r,id:i,data:a,element:o,handle:s,index:c,group:l,disabled:u,modifiers:d,sensors:f,target:p,type:m,plugins:h}=e,g=Vp(Vp({},xp),e.transition),_=Jd(t=>new jp(Hp(Vp({},e),{transition:g,register:!1,handle:wd(s),element:wd(o),target:wd(p)}),t)),v=Dd(_,Wp);return Q(i,()=>_.id=i),Td(()=>{Ht(()=>{_.group=l,_.index=c})},[_,l,c]),Q(m,()=>_.type=m),Q(t,()=>_.accept=t,void 0,zn),Q(a,()=>a&&(_.data=a)),Q(c,()=>{_.manager?.dragOperation.status.idle&&g?.idle&&_.refreshShape()},Od),Ad(s,e=>_.handle=e),Ad(o,e=>_.element=e),Ad(p,e=>_.target=e),Q(u,()=>_.disabled=u===!0),Q(f,()=>_.sensors=f),Q(n,()=>_.collisionDetector=n),Q(r,()=>_.collisionPriority=r),Q(h,()=>_.plugins=h,void 0,zn),Q(g,()=>_.transition=g,void 0,zn),Q(d,()=>_.modifiers=d,void 0,zn),Q(e.alignment,()=>_.alignment=e.alignment),{sortable:v,get isDragging(){return v.isDragging},get isDropping(){return v.isDropping},get isDragSource(){return v.isDragSource},get isDropTarget(){return v.isDropTarget},handleRef:(0,H.useCallback)(e=>{_.handle=e??void 0},[_]),ref:(0,H.useCallback)(e=>{(e||!_.element?.isConnected||_.manager?.dragOperation.status.idle)&&(_.element=e??void 0)},[_]),sourceRef:(0,H.useCallback)(e=>{(e||!_.source?.isConnected||_.manager?.dragOperation.status.idle)&&(_.source=e??void 0)},[_]),targetRef:(0,H.useCallback)(e=>{(e||!_.target?.isConnected||_.manager?.dragOperation.status.idle)&&(_.target=e??void 0)},[_])}}function Wp(e,t,n){return!(e!==`isDragSource`||n||!t)}function Gp(e){return typeof e==`object`?e.key:e}function Kp(e,t){let n=e.length;return new Proxy(e,{get(e,r,i){if(typeof r==`string`){let i=r.charCodeAt(0);if(i>=48&&i<=57){let i=+r;if(Number.isInteger(i)&&i>=0&&i<n){let n=e[i];if(typeof n!=`object`){let r=t[i*2];n=e[i]={index:i,key:n,start:r,size:t[i*2+1],end:r+t[i*2+1],lane:0}}return n}}if(r===`length`)return n}return Reflect.get(e,r,i)}})}function qp(e,t,n){let r=n.initialDeps??[],i,a=!0;function o(){let o=e();return(o.length!==r.length||o.some((e,t)=>r[t]!==e))&&(r=o,i=t(...o),n?.onChange&&!(a&&n.skipInitialOnChange)&&n.onChange(i),a=!1),i}return o.updateDeps=e=>{r=e},o}function Jp(e,t){if(e===void 0)throw Error(`Unexpected undefined${t?`: ${t}`:``}`);return e}var Yp=(e,t)=>Math.abs(e-t)<1.01,Xp=(e,t,n)=>{let r;return Object.assign(function(...i){e.clearTimeout(r),r=e.setTimeout(()=>t.apply(this,i),n)},{cancel:()=>{e.clearTimeout(r)}})},Zp,Qp=()=>{if(Zp!==void 0)return Zp;if(typeof navigator>`u`)return Zp=!1;if(/iP(hone|od|ad)/.test(navigator.userAgent))return Zp=!0;let e=navigator.maxTouchPoints;return Zp=navigator.platform===`MacIntel`&&e!==void 0&&e>0},$p=e=>{let{offsetWidth:t,offsetHeight:n}=e;return{width:t,height:n}},em=e=>e,tm=e=>{let t=Math.max(e.startIndex-e.overscan,0),n=Math.min(e.endIndex+e.overscan,e.count-1)-t+1,r=Array(n);for(let e=0;e<n;e++)r[e]=t+e;return r},nm=(e,t)=>{let n=e.scrollElement;if(!n)return;let r=e.targetWindow;if(!r)return;let i=e=>{let{width:n,height:r}=e;t({width:Math.round(n),height:Math.round(r)})};if(i($p(n)),!r.ResizeObserver)return()=>{};let a=new r.ResizeObserver(t=>{let r=()=>{let e=t[0];if(e?.borderBoxSize){let t=e.borderBoxSize[0];if(t){i({width:t.inlineSize,height:t.blockSize});return}}i($p(n))};e.options.useAnimationFrameWithResizeObserver?requestAnimationFrame(r):r()});return a.observe(n,{box:`border-box`}),()=>{a.unobserve(n)}},rm={passive:!0},im=(e,t)=>{let n=e.scrollElement;if(!n)return;let r=()=>{t({width:n.innerWidth,height:n.innerHeight})};return r(),n.addEventListener(`resize`,r,rm),()=>{n.removeEventListener(`resize`,r)}},am=typeof window>`u`||`onscrollend`in window,om=(e,t,n)=>{let r=e.scrollElement;if(!r)return;let i=e.targetWindow;if(!i)return;let a=e.options.useScrollendEvent&&am,o=0,s=a?null:Xp(i,()=>t(n(r),!1),e.options.isScrollingResetDelay),c=e=>()=>{o=n(r),s?.(),t(o,e)},l=c(!0),u=c(!1);return r.addEventListener(`scroll`,l,rm),a&&r.addEventListener(`scrollend`,u,rm),()=>{r.removeEventListener(`scroll`,l),a&&r.removeEventListener(`scrollend`,u),s?.cancel()}},sm=(e,t)=>om(e,t,t=>{let{horizontal:n,isRtl:r}=e.options;return n?t.scrollLeft*(r&&-1||1):t.scrollTop}),cm=(e,t)=>om(e,t,t=>e.options.horizontal?t.scrollX:t.scrollY),lm=(e,t,n)=>{if(n.options.useCachedMeasurements){let t=n.indexFromElement(e),r=n.options.getItemKey(t);return n.itemSizeCache.get(r)??n.options.estimateSize(t)}if(t?.borderBoxSize){let e=t.borderBoxSize[0];if(e)return Math.round(e[n.options.horizontal?`inlineSize`:`blockSize`])}if(!t){let t=n.indexFromElement(e),r=n.options.getItemKey(t),i=n.itemSizeCache.get(r);if(i!==void 0)return i}return e[n.options.horizontal?`offsetWidth`:`offsetHeight`]},um=(e,{adjustments:t=0,behavior:n},r)=>{var i,a;(a=(i=r.scrollElement)?.scrollTo)==null||a.call(i,{[r.options.horizontal?`left`:`top`]:e+t,behavior:n})},dm=um,fm=um;function pm(e,t,n,r){if(t===0)return!1;let i=r(0),a=new Set,o=0;for(;o<e;){let e=n(o);if(e===i)break;a.add(e),o++}let s=e-o;if(s===0||s>=t)return!1;for(let e=0;e<s;e++)if(r(e)!==n(o+e))return!1;for(let e=s;e<t;e++)if(a.has(r(e)))return!1;return!0}var mm=class{constructor(e){this.unsubs=[],this.scrollElement=null,this.targetWindow=null,this.isScrolling=!1,this.scrollState=null,this.measurementsCache=[],this._singleLaneMeasurements=null,this.itemSizeCache=new Map,this.itemSizeCacheVersion=0,this.laneAssignments=new Map,this.pendingMin=null,this.prevLanes=void 0,this.lanesChangedFlag=!1,this.lanesSettling=!1,this.pendingScrollAnchor=null,this.scrollRect=null,this.scrollOffset=null,this.scrollDirection=null,this.scrollAdjustments=0,this._iosDeferredAdjustment=0,this._iosTouching=!1,this._iosJustTouchEnded=!1,this._iosTouchEndTimerId=null,this._intendedScrollOffset=null,this._clampedAdjustment=null,this.elementsCache=new Map,this.now=()=>{var e;return((e=this.targetWindow?.performance)?.now)?.call(e)??Date.now()},this.observer=(()=>{let e=null,t=()=>e||(!this.targetWindow||!this.targetWindow.ResizeObserver?null:e=new this.targetWindow.ResizeObserver(e=>{e.forEach(e=>{let t=()=>{let t=e.target,n=this.indexFromElement(t);if(t.isConnected)this.isIndexInRange(n)&&this.shouldMeasureDuringScroll(n)&&this.resizeItem(n,this.options.measureElement(t,e,this));else{this.observer.unobserve(t);for(let[e,n]of this.elementsCache)if(n===t){this.elementsCache.delete(e);break}}};this.options.useAnimationFrameWithResizeObserver?requestAnimationFrame(t):t()})}));return{disconnect:()=>{var n;(n=t())==null||n.disconnect(),e=null},observe:e=>t()?.observe(e,{box:`border-box`}),unobserve:e=>t()?.unobserve(e)}})(),this.range=null,this.setOptions=e=>{let t={debug:!1,initialOffset:0,overscan:1,paddingStart:0,paddingEnd:0,scrollPaddingStart:0,scrollPaddingEnd:0,horizontal:!1,getItemKey:em,rangeExtractor:tm,onChange:()=>{},measureElement:lm,initialRect:{width:0,height:0},scrollMargin:0,gap:0,indexAttribute:`data-index`,initialMeasurementsCache:[],lanes:1,anchorTo:`start`,followOnAppend:!1,scrollEndThreshold:1,isScrollingResetDelay:150,enabled:!0,isRtl:!1,useScrollendEvent:!1,useAnimationFrameWithResizeObserver:!1,laneAssignmentMode:`estimate`,useCachedMeasurements:!1};for(let n in e){let r=e[n];r!==void 0&&(t[n]=r)}let n=this.options,r=null,i=null,a=!1;if(n!==void 0&&n.enabled&&t.enabled&&t.anchorTo===`end`&&this.scrollElement!==null){let e=n.count,o=t.count,s=this.getMeasurements(),c=this._singleLaneMeasurements?.items??s,l=e=>Gp(c[e]),u=e>0?l(0):null,d=e>0?l(e-1):null;if(o!==e||e>0&&o>0&&(t.getItemKey(0)!==u||t.getItemKey(o-1)!==d)){a=!0;let c=e>0?this.getVirtualItemForOffset(this.getScrollOffset())??s[0]:null;c&&(r=[c.key,this.getScrollOffset()-c.start]);let u=t.followOnAppend===!0?`auto`:t.followOnAppend||null;u&&o>0&&this.isAtEnd(n.scrollEndThreshold)&&(e===0||t.getItemKey(o-1)!==d)&&(o>e||pm(e,o,l,t.getItemKey))&&(i=u)}}this.options=t,a&&(this.pendingMin=0,this.itemSizeCacheVersion++);let o=!1,s=0;if(r&&this.scrollOffset!==null){let[e,t]=r,n=this.getMeasurements(),{count:a,getItemKey:c}=this.options,l=0;for(;l<a&&c(l)!==e;)l++;if(l<a){let e=n[l];if(e){let n=Math.max(0,e.start+t);!i&&n!==this.scrollOffset&&(s=n-this.scrollOffset,this.scrollOffset=n,o=!0)}}}(o||i)&&(this.pendingScrollAnchor=[o?r[0]:null,o?r[1]:0,i,s])},this.notify=e=>{var t,n;(n=(t=this.options).onChange)==null||n.call(t,this,e)},this.maybeNotify=qp(()=>(this.calculateRange(),[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]),e=>{this.notify(e)},{key:!1,debug:()=>this.options.debug,initialDeps:[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]}),this.cleanup=()=>{this.unsubs.filter(Boolean).forEach(e=>e()),this.unsubs=[],this.observer.disconnect(),this.rafId!=null&&this.targetWindow&&(this.targetWindow.cancelAnimationFrame(this.rafId),this.rafId=null),this.scrollState=null,this.isScrolling=!1,this.scrollDirection=null,this._iosDeferredAdjustment=0,this._iosTouching=!1,this._iosJustTouchEnded=!1,this._clampedAdjustment=null,this.scrollElement=null,this.targetWindow=null},this._didMount=()=>()=>{this.cleanup()},this._willUpdate=()=>{let e=this.options.enabled?this.options.getScrollElement():null;if(this.scrollElement!==e){if(this.cleanup(),!e){this.maybeNotify();return}if(this.scrollElement=e,this.targetWindow=this.scrollElement&&`ownerDocument`in this.scrollElement?this.scrollElement.ownerDocument.defaultView:this.scrollElement?.window??null,this.elementsCache.forEach(e=>{this.observer.observe(e)}),this.unsubs.push(this.options.observeElementRect(this,e=>{this.scrollRect=e,this.maybeNotify()})),this.unsubs.push(this.options.observeElementOffset(this,(e,t)=>{if(t&&this._intendedScrollOffset===null&&e===this.scrollOffset)return;this._intendedScrollOffset!==null&&Math.abs(e-this._intendedScrollOffset)<1.5?e=this._intendedScrollOffset:this.scrollState?.index!=null&&this.scrollState.hasReachedTarget&&!Yp(e,this.scrollState.lastTargetOffset)&&!Yp(e,this.getScrollStateTarget(this.scrollState))&&(this._clampedAdjustment===null||Math.abs(e-this._clampedAdjustment.maxAtWrite)>=1.5)&&(this.scrollState=null),this._intendedScrollOffset=null,this._clampedAdjustment!==null&&Math.abs(e-this._clampedAdjustment.maxAtWrite)>=1.5&&(this._clampedAdjustment=null),this.scrollAdjustments=0;let n=this.getScrollOffset();this.scrollDirection=t?n===e?this.scrollDirection:n<e?`forward`:`backward`:null,this.scrollOffset=e,this.isScrolling=t,this._flushIosDeferredIfReady(),this.scrollState&&this.scheduleScrollReconcile(),this.maybeNotify()})),`addEventListener`in this.scrollElement){let e=this.scrollElement,t=()=>{this._iosTouching=!0,this._iosJustTouchEnded=!1,this._iosTouchEndTimerId!==null&&this.targetWindow!=null&&(this.targetWindow.clearTimeout(this._iosTouchEndTimerId),this._iosTouchEndTimerId=null)},n=()=>{this._iosTouching=!1,Qp()&&this.targetWindow!=null&&(this._iosJustTouchEnded=!0,this._iosTouchEndTimerId=this.targetWindow.setTimeout(()=>{this._iosJustTouchEnded=!1,this._iosTouchEndTimerId=null,this._flushIosDeferredIfReady()},150))};e.addEventListener(`touchstart`,t,rm),e.addEventListener(`touchend`,n,rm),this.unsubs.push(()=>{e.removeEventListener(`touchstart`,t),e.removeEventListener(`touchend`,n),this._iosTouchEndTimerId!==null&&this.targetWindow!=null&&(this.targetWindow.clearTimeout(this._iosTouchEndTimerId),this._iosTouchEndTimerId=null)})}this._scrollToOffset(this.getScrollOffset(),{adjustments:void 0,behavior:void 0})}let t=this.pendingScrollAnchor;if(this.pendingScrollAnchor=null,t&&this.scrollElement&&this.options.enabled){let[e,n,r,i]=t;e!==null&&!r&&(Qp()&&(this.isScrolling||this._iosTouching||this._iosJustTouchEnded)?i!==0&&(this._iosDeferredAdjustment+=i):this.scrollState?.behavior===`smooth`&&!Yp(this.getScrollOffset()-i,this.scrollState.lastTargetOffset)||this._scrollToOffset(this.getScrollOffset(),{adjustments:void 0,behavior:void 0})),r&&this.scrollToEnd({behavior:r})}this._retryClampedAdjustment()},this._retryClampedAdjustment=()=>{if(this._clampedAdjustment===null||!this.scrollElement||!this.options.enabled)return;let{target:e,maxAtWrite:t}=this._clampedAdjustment,n=this.getMaxScrollOffset();n>t+.5&&(this._clampedAdjustment=e>n+.5?{target:e,maxAtWrite:n}:null,this._scrollToOffset(e,{adjustments:void 0,behavior:void 0}))},this._flushIosDeferredIfReady=()=>{if(this._iosDeferredAdjustment===0||this.isScrolling||this._iosTouching||this._iosJustTouchEnded)return;let e=this.getScrollOffset(),t=this.getMaxScrollOffset();if(e<0||e>t)return;if(this._iosDeferredAdjustment<0&&e>=t-1){this._iosDeferredAdjustment=0;return}let n=this._iosDeferredAdjustment;this._iosDeferredAdjustment=0,this._scrollToOffset(e,{adjustments:this.scrollAdjustments+=n,behavior:void 0})},this.rafId=null,this.getSize=()=>this.options.enabled?(this.scrollRect=this.scrollRect??this.options.initialRect,this.scrollRect[this.options.horizontal?`width`:`height`]):(this.scrollRect=null,0),this.getScrollOffset=()=>this.options.enabled?(this.scrollOffset=this.scrollOffset??(typeof this.options.initialOffset==`function`?this.options.initialOffset():this.options.initialOffset),this.scrollOffset):(this.scrollOffset=null,0),this.getMeasurementOptions=qp(()=>[this.options.count,this.options.paddingStart,this.options.scrollMargin,this.options.getItemKey,this.options.enabled,this.options.lanes,this.options.laneAssignmentMode,this.options.gap],(e,t,n,r,i,a,o,s)=>(this.prevLanes!==void 0&&this.prevLanes!==a&&(this.lanesChangedFlag=!0),this.prevLanes=a,this.pendingMin=null,{count:e,paddingStart:t,scrollMargin:n,getItemKey:r,enabled:i,lanes:a,laneAssignmentMode:o,gap:s}),{key:!1}),this.isIndexInRange=e=>e>=0&&e<this.options.count,this.getMeasurements=qp(()=>[this.getMeasurementOptions(),this.itemSizeCacheVersion],({count:e,paddingStart:t,scrollMargin:n,getItemKey:r,enabled:i,lanes:a,laneAssignmentMode:o,gap:s},c)=>{let l=this.itemSizeCache;if(!i)return this.measurementsCache=[],this._singleLaneMeasurements=null,this.itemSizeCache.clear(),this.laneAssignments.clear(),[];if(this.laneAssignments.size>e)for(let t of this.laneAssignments.keys())t>=e&&this.laneAssignments.delete(t);this.lanesChangedFlag&&(this.lanesChangedFlag=!1,this.lanesSettling=!0,this.measurementsCache=[],this._singleLaneMeasurements=null,this.itemSizeCache.clear(),this.laneAssignments.clear(),this.pendingMin=null),this.measurementsCache.length===0&&!this.lanesSettling&&(this.measurementsCache=this.options.initialMeasurementsCache,this.measurementsCache.forEach(e=>{this.itemSizeCache.set(e.key,e.size)}));let u=this.lanesSettling?0:this.pendingMin??0;if(this.pendingMin=null,this.lanesSettling&&this.measurementsCache.length===e&&(this.lanesSettling=!1),a===1){let i=e*2,a=this._singleLaneMeasurements?.flat;if(!a||a.length<i){let e=new Float64Array(i);a&&u>0&&e.set(a.subarray(0,u*2)),a=e}let o=u===0?Array(e):this._singleLaneMeasurements.items.slice(),c;if(u===0)c=t+n;else{let e=u-1;c=a[e*2]+a[e*2+1]+s}for(let t=u;t<e;t++){let e=r(t);o[t]=e;let n=l.get(e),i=typeof n==`number`?n:this.options.estimateSize(t);a[t*2]=c,a[t*2+1]=i,c+=i+s}this._singleLaneMeasurements={flat:a,items:o};let d=Kp(o,a);return this.measurementsCache=d,d}let d=this.measurementsCache.slice(0,u),f=Array(a).fill(void 0),p=new Float64Array(a),m=0;for(let e=0;e<u;e++){let t=d[e];t&&(f[t.lane]===void 0&&m++,f[t.lane]=e,p[t.lane]=t.end)}for(let i=u;i<e;i++){let e=r(i),c=this.laneAssignments.get(i),u,h,g=o===`estimate`||l.has(e);if(c!==void 0&&this.options.lanes>1){u=c;let e=f[u],r=e===void 0?void 0:d[e];h=r?r.end+s:t+n}else if(m===a){let e=0,t=p[0],n=f[0];for(let r=1;r<a;r++){let i=p[r];(i<t||i===t&&f[r]<n)&&(e=r,t=i,n=f[r])}u=e,h=t+s,g&&this.laneAssignments.set(i,u)}else u=i%this.options.lanes,h=t+n,g&&this.laneAssignments.set(i,u);let _=l.get(e),v=typeof _==`number`?_:this.options.estimateSize(i),y=h+v;d[i]={index:i,start:h,size:v,end:y,key:e,lane:u},f[u]===void 0&&m++,f[u]=i,p[u]=y}return this.measurementsCache=d,d},{key:!1,debug:()=>this.options.debug}),this.calculateRange=qp(()=>[this.getMeasurements(),this.getSize(),this.getScrollOffset(),this.options.lanes],(e,t,n,r)=>e.length===0||t===0?(this.range=null,null):(this.range=_m(e,t,n,r,r===1&&this._singleLaneMeasurements!==null?this._singleLaneMeasurements.flat:null),this.range),{key:!1,debug:()=>this.options.debug}),this.getVirtualIndexes=qp(()=>{let e=null,t=null,n=this.calculateRange();return n&&(e=n.startIndex,t=n.endIndex),this.maybeNotify.updateDeps([this.isScrolling,e,t]),[this.options.rangeExtractor,this.options.overscan,this.options.count,e,t]},(e,t,n,r,i)=>r===null||i===null?[]:e({startIndex:r,endIndex:i,overscan:t,count:n}),{key:!1,debug:()=>this.options.debug}),this.indexFromElement=e=>{let t=this.options.indexAttribute,n=e.getAttribute(t);return n?parseInt(n,10):(console.warn(`Missing attribute name '${t}={index}' on measured element.`),-1)},this.shouldMeasureDuringScroll=e=>{if(!this.scrollState||this.scrollState.behavior!==`smooth`)return!0;let t=this.scrollState.index??this.getVirtualItemForOffset(this.scrollState.lastTargetOffset)?.index;if(t!==void 0&&this.range){let n=Math.max(this.options.overscan,Math.ceil((this.range.endIndex-this.range.startIndex)/2)),r=Math.max(0,t-n),i=Math.min(this.options.count-1,t+n);return e>=r&&e<=i}return!0},this.measureElement=e=>{if(!e){this.elementsCache.forEach((e,t)=>{e.isConnected||(this.observer.unobserve(e),this.elementsCache.delete(t))});return}let t=this.indexFromElement(e);if(!this.isIndexInRange(t))return;let n=this.options.getItemKey(t),r=this.elementsCache.get(n);r!==e&&(r&&this.observer.unobserve(r),this.observer.observe(e),this.elementsCache.set(n,e)),e.isConnected&&(!this.isScrolling||this.scrollState)&&this.shouldMeasureDuringScroll(t)&&this.resizeItem(t,this.options.measureElement(e,void 0,this))},this.resizeItem=(e,t)=>{if(!this.isIndexInRange(e))return;let n,r,i,a=this._singleLaneMeasurements?.flat;if(this.options.lanes===1&&a!=null)i=this.options.getItemKey(e),r=a[e*2],n=a[e*2+1];else{let t=this.measurementsCache[e];if(!t)return;i=t.key,r=t.start,n=t.size}let o=this.itemSizeCache.get(i)??n,s=t-o;if(s!==0){let a=this.options.anchorTo===`end`&&this.scrollState?.behavior!==`smooth`&&this.getVirtualDistanceFromEnd()<=this.options.scrollEndThreshold,c=a?this.getTotalSize():0,l=this.getScrollOffset()+this.scrollAdjustments,u=this.itemSizeCache.has(i)?r+o<=l&&this.scrollDirection!==`backward`:r<l,d=this.scrollState?.behavior!==`smooth`&&(this.shouldAdjustScrollPositionOnItemSizeChange===void 0?u:this.shouldAdjustScrollPositionOnItemSizeChange(this.measurementsCache[e]??{index:e,key:i,start:r,size:n,end:r+n,lane:0},s,this));(this.pendingMin===null||e<this.pendingMin)&&(this.pendingMin=e),this.itemSizeCache.set(i,t),this.itemSizeCacheVersion++;let f=!1;a?f=this.applyScrollAdjustment(this.getTotalSize()-c):d&&(f=this.applyScrollAdjustment(s)),this.notify(f),this._retryClampedAdjustment()}},this.getVirtualItems=qp(()=>[this.getVirtualIndexes(),this.getMeasurements()],(e,t)=>{let n=[];for(let r=0,i=e.length;r<i;r++){let i=t[e[r]];n.push(i)}return n},{key:!1,debug:()=>this.options.debug}),this.getVirtualItemForOffset=e=>{let t=this.getMeasurements();if(t.length===0)return;let n=this._singleLaneMeasurements?.flat,r=this.options.lanes===1&&n!=null;return Jp(t[hm(0,t.length-1,r?e=>n[e*2]:e=>Jp(t[e]).start,e)])},this.getMaxScrollOffset=()=>{if(!this.scrollElement)return 0;if(`scrollHeight`in this.scrollElement)return this.options.horizontal?this.scrollElement.scrollWidth-this.scrollElement.clientWidth:this.scrollElement.scrollHeight-this.scrollElement.clientHeight;{let e=this.scrollElement.document.documentElement;return this.options.horizontal?e.scrollWidth-this.scrollElement.innerWidth:e.scrollHeight-this.scrollElement.innerHeight}},this.getVirtualDistanceFromEnd=()=>Math.max(this.getTotalSize()-this.getSize()-this.getScrollOffset(),0),this.getDistanceFromEnd=()=>Math.max(this.getMaxScrollOffset()-this.getScrollOffset(),0),this.isAtEnd=(e=this.options.scrollEndThreshold)=>this.getDistanceFromEnd()<=e,this.getOffsetForAlignment=(e,t,n=0)=>{if(!this.scrollElement)return 0;let r=this.getSize(),i=this.getScrollOffset();t===`auto`&&(t=e>=i+r?`end`:`start`),t===`center`?e+=(n-r)/2:t===`end`&&(e-=r);let a=this.getMaxScrollOffset();return Math.max(Math.min(a,e),0)},this.getOffsetForIndex=(e,t=`auto`)=>{e=Math.max(0,Math.min(e,this.options.count-1));let n=this.getSize(),r=this.getScrollOffset(),i=this.measurementsCache[e];if(!i)return;if(t===`auto`){if(i.end>=r+n-this.options.scrollPaddingEnd)t=`end`;else if(i.start<=r+this.options.scrollPaddingStart)t=`start`;else return[r,t]}if(t===`end`&&e===this.options.count-1){let e=this.getMaxScrollOffset(),n=e-this.options.paddingEnd+this.options.scrollPaddingEnd;return[Math.max(Math.min(n,e),0),t]}let a=t===`end`?i.end+this.options.scrollPaddingEnd:i.start-this.options.scrollPaddingStart;return[this.getOffsetForAlignment(a,t,i.size),t]},this.scrollToOffset=(e,{align:t=`start`,behavior:n=`auto`}={})=>{this._iosDeferredAdjustment=0;let r=this.getOffsetForAlignment(e,t),i=this.now();this.scrollState={index:null,align:t,behavior:n,startedAt:i,lastTargetOffset:r,stableFrames:0,hasReachedTarget:!1},this._scrollToOffset(r,{adjustments:void 0,behavior:n}),this.scheduleScrollReconcile()},this.scrollToIndex=(e,{align:t=`auto`,behavior:n=`auto`}={})=>{this._iosDeferredAdjustment=0,e=Math.max(0,Math.min(e,this.options.count-1));let r=this.getOffsetForIndex(e,t);if(!r)return;let[i,a]=r,o=this.now();this.scrollState={index:e,align:a,behavior:n,startedAt:o,lastTargetOffset:i,stableFrames:0,hasReachedTarget:Yp(i,this.getScrollOffset())},this._scrollToOffset(i,{adjustments:void 0,behavior:n}),this.scheduleScrollReconcile()},this.scrollBy=(e,{behavior:t=`auto`}={})=>{let n=this.getScrollOffset()+e,r=this.now();this.scrollState={index:null,align:`start`,behavior:t,startedAt:r,lastTargetOffset:n,stableFrames:0,hasReachedTarget:!1},this._scrollToOffset(n,{adjustments:void 0,behavior:t}),this.scheduleScrollReconcile()},this.scrollToEnd=({behavior:e=`auto`}={})=>{if(this.options.count>0){this._iosDeferredAdjustment=0;let t=Math.max(this.getMaxScrollOffset(),0);this.scrollState={index:this.options.count-1,align:`end`,behavior:e,toEnd:!0,startedAt:this.now(),lastTargetOffset:t,stableFrames:0,hasReachedTarget:Yp(t,this.getScrollOffset())},this._scrollToOffset(t,{adjustments:void 0,behavior:e}),this.scheduleScrollReconcile()}else this.scrollToOffset(Math.max(this.getTotalSize()-this.getSize(),0),{behavior:e})},this.cancelScroll=()=>{this.rafId!=null&&this.targetWindow&&(this.targetWindow.cancelAnimationFrame(this.rafId),this.rafId=null),this.scrollState=null},this.getTotalSize=()=>{let e=this.getMeasurements(),t;if(e.length===0)t=this.options.paddingStart;else if(this.options.lanes===1){let n=e.length-1,r=this._singleLaneMeasurements?.flat;t=r==null?e[n]?.end??0:r[n*2]+r[n*2+1]}else{let n=Array(this.options.lanes).fill(null),r=e.length-1;for(;r>=0&&n.some(e=>e===null);){let t=e[r];n[t.lane]===null&&(n[t.lane]=t.end),r--}t=Math.max(...n.filter(e=>e!==null))}return Math.max(t-this.options.scrollMargin+this.options.paddingEnd,0)},this.takeSnapshot=()=>{let e=[];if(this.itemSizeCache.size===0)return e;let t=this.getMeasurements();for(let n of t)n&&this.itemSizeCache.has(n.key)&&e.push({index:n.index,key:n.key,start:n.start,size:n.size,end:n.end,lane:n.lane});return e},this._scrollToOffset=(e,{adjustments:t,behavior:n})=>{this._intendedScrollOffset=e+(t??0),this.options.scrollToFn(e,{behavior:n,adjustments:t},this)},this.measure=()=>{this.pendingMin=null,this.itemSizeCache.clear(),this.laneAssignments.clear(),this.itemSizeCacheVersion++,this.notify(!1)},this.setOptions(e)}applyScrollAdjustment(e,t){if(e===0)return!1;if(Qp()&&(this.isScrolling||this._iosTouching||this._iosJustTouchEnded))return this._iosDeferredAdjustment+=e,!1;{let n=this.getScrollOffset()+this.scrollAdjustments+e,r=this.scrollElement,i=r!==null&&(`scrollHeight`in r||`document`in r)?this.getMaxScrollOffset():null;return this._clampedAdjustment=i!==null&&n>i+.5?{target:n,maxAtWrite:i}:null,this._scrollToOffset(this.getScrollOffset(),{adjustments:this.scrollAdjustments+=e,behavior:t}),this.scrollOffset!==null&&(this.scrollOffset+=this.scrollAdjustments,this.scrollOffset<0&&(this.scrollOffset=0),this.scrollAdjustments=0),!0}}scheduleScrollReconcile(){this.targetWindow?this.rafId??=this.targetWindow.requestAnimationFrame(()=>{this.rafId=null,this.reconcileScroll()}):this.scrollState=null}getScrollStateTarget(e){let t=e.toEnd?[Math.max(this.getMaxScrollOffset(),0)]:e.index==null?void 0:this.getOffsetForIndex(e.index,e.align);return t?t[0]:e.lastTargetOffset}reconcileScroll(){if(!this.scrollState||!this.scrollElement)return;if(this.now()-this.scrollState.startedAt>5e3){this.scrollState=null;return}let e=this.getScrollStateTarget(this.scrollState),t=this.scrollState.index==null?1:this.options.useAnimationFrameWithResizeObserver?3:2,n=e!==this.scrollState.lastTargetOffset;if(!n&&Yp(e,this.getScrollOffset())){if(this.scrollState.hasReachedTarget=!0,this.scrollState.stableFrames++,this.scrollState.stableFrames>=t){this.getScrollOffset()!==e&&this._scrollToOffset(e,{adjustments:void 0,behavior:`auto`}),this.scrollState=null;return}}else if(this.scrollState.stableFrames=0,n){let t=this.getSize()||600,n=Math.abs(e-this.getScrollOffset()),r=this.scrollState.behavior===`smooth`&&n>t;this.scrollState.lastTargetOffset=e,r?this.scrollState.hasReachedTarget=!1:this.scrollState.behavior=`auto`,this._scrollToOffset(e,{adjustments:void 0,behavior:r?`smooth`:`auto`})}this.scheduleScrollReconcile()}},hm=(e,t,n,r)=>{for(;e<=t;){let i=(e+t)/2|0,a=n(i);if(a<r)e=i+1;else if(a>r)t=i-1;else return i}return e>0?e-1:0};function gm(e,t,n){let r=0;for(;r<=t;){let i=(r+t)/2|0,a=e[i*2];if(a<n)r=i+1;else if(a>n)t=i-1;else return i}return r>0?r-1:0}function _m(e,t,n,r,i){let a=e.length-1;if(e.length<=r)return{startIndex:0,endIndex:a};if(r===1&&i!==null){let e=gm(i,a,n),r=e,o=n+t;for(;r<a&&i[r*2]+i[r*2+1]<o;)r++;return{startIndex:e,endIndex:r}}let o=hm(0,a,t=>e[t].start,n),s=o;if(r===1)for(;s<a&&e[s].end<n+t;)s++;else if(r>1){let i=Array(r).fill(0);for(;s<a&&i.some(e=>e<n+t);){let t=e[s];i[t.lane]=t.end,s++}let c=Array(r).fill(n+t);for(;o>=0&&c.some(e=>e>=n);){let t=e[o];c[t.lane]=t.start,o--}o=Math.max(0,o-o%r),s=Math.min(a,s+(r-1-s%r))}return{startIndex:o,endIndex:s}}var vm=typeof document<`u`?H.useLayoutEffect:H.useEffect;function ym({useFlushSync:e=!0,directDomUpdates:t=!1,directDomUpdatesMode:n=`transform`,...r}){let i=H.useReducer(e=>e+1,0)[1],a=H.useRef({enabled:t,mode:n,container:null,lastSize:null,lastPositions:new WeakMap,prevRange:null});a.current.enabled=t,a.current.mode=n;let o=H.useRef(!1),s=e=>{let t=a.current;if(!t.enabled||!t.container)return;let n=e.getTotalSize();if(n!==t.lastSize){t.lastSize=n;let r=e.options.horizontal?`width`:`height`;t.container.style[r]=`${n}px`}},c=(e,t,n)=>{let r=a.current,i=!!e.options.horizontal,o=t.start-e.options.scrollMargin;r.lastPositions.get(n)!==o&&(r.lastPositions.set(n,o),r.mode===`transform`?n.style.transform=i?`translate3d(${o}px, 0, 0)`:`translate3d(0, ${o}px, 0)`:n.style[i?`left`:`top`]=`${o}px`)},l=e=>{let t=a.current;if(t.enabled&&t.container){s(e);for(let t of e.getVirtualItems()){let n=e.elementsCache.get(t.key);n&&c(e,t,n)}}},u={...r,onChange:(t,n)=>{var s;let c=a.current,u=!0;if(c.enabled){l(t);let e=t.range,n=c.prevRange;u=!n||n.isScrolling!==t.isScrolling||n.startIndex!==e?.startIndex||n.endIndex!==e?.endIndex,u&&(c.prevRange=e?{startIndex:e.startIndex,endIndex:e.endIndex,isScrolling:t.isScrolling}:null)}u&&(e&&n&&!o.current?(0,_t.flushSync)(i):i()),(s=r.onChange)==null||s.call(r,t,n)}},[d]=H.useState(()=>{let e=new mm(u),t=e.measureElement;return e.measureElement=n=>{o.current=!0;try{t(n)}finally{o.current=!1}let r=a.current;if(n!==null&&r.enabled&&r.container){let t=e.measurementsCache[e.indexFromElement(n)];t&&c(e,t,n)}},Object.assign(e,{containerRef:t=>{let n=a.current;n.container=t,n.lastSize=null,t!==null&&l(e)}})});return d.setOptions(u),vm(()=>d._didMount(),[]),vm(()=>(s(d),d._willUpdate())),vm(()=>{l(d)}),d}function bm(e){return ym({observeElementRect:nm,observeElementOffset:sm,scrollToFn:fm,...e})}var xm=t(n(((t,n)=>{(function(e){var r;typeof t==`object`?n.exports=e():typeof define==`function`&&define.amd?define(e):(typeof window<`u`?r=window:typeof global<`u`?r=global:typeof self<`u`&&(r=self),r.objectHash=e())})(function(){return function t(n,r,i){function a(s,c){if(!r[s]){if(!n[s]){var l=typeof e==`function`&&e;if(!c&&l)return l(s,!0);if(o)return o(s,!0);throw Error(`Cannot find module '`+s+`'`)}c=r[s]={exports:{}},n[s][0].call(c.exports,function(e){var t=n[s][1][e];return a(t||e)},c,c.exports,t,n,r,i)}return r[s].exports}for(var o=typeof e==`function`&&e,s=0;s<i.length;s++)a(i[s]);return a}({1:[function(e,t,n){(function(r,i,a,o,s,c,l,u,d){var f=e(`crypto`);function p(e,t){t=g(e,t);var n;return(n=t.algorithm===`passthrough`?new y:f.createHash(t.algorithm)).write===void 0&&(n.write=n.update,n.end=n.update),v(t,n).dispatch(e),n.update||n.end(``),n.digest?n.digest(t.encoding===`buffer`?void 0:t.encoding):(e=n.read(),t.encoding===`buffer`?e:e.toString(t.encoding))}(n=t.exports=p).sha1=function(e){return p(e)},n.keys=function(e){return p(e,{excludeValues:!0,algorithm:`sha1`,encoding:`hex`})},n.MD5=function(e){return p(e,{algorithm:`md5`,encoding:`hex`})},n.keysMD5=function(e){return p(e,{algorithm:`md5`,encoding:`hex`,excludeValues:!0})};var m=f.getHashes?f.getHashes().slice():[`sha1`,`md5`],h=(m.push(`passthrough`),[`buffer`,`hex`,`binary`,`base64`]);function g(e,t){var n={};if(n.algorithm=(t||={}).algorithm||`sha1`,n.encoding=t.encoding||`hex`,n.excludeValues=!!t.excludeValues,n.algorithm=n.algorithm.toLowerCase(),n.encoding=n.encoding.toLowerCase(),n.ignoreUnknown=!0===t.ignoreUnknown,n.respectType=!1!==t.respectType,n.respectFunctionNames=!1!==t.respectFunctionNames,n.respectFunctionProperties=!1!==t.respectFunctionProperties,n.unorderedArrays=!0===t.unorderedArrays,n.unorderedSets=!1!==t.unorderedSets,n.unorderedObjects=!1!==t.unorderedObjects,n.replacer=t.replacer||void 0,n.excludeKeys=t.excludeKeys||void 0,e===void 0)throw Error(`Object argument required.`);for(var r=0;r<m.length;++r)m[r].toLowerCase()===n.algorithm.toLowerCase()&&(n.algorithm=m[r]);if(m.indexOf(n.algorithm)===-1)throw Error(`Algorithm "`+n.algorithm+`"  not supported. supported values: `+m.join(`, `));if(h.indexOf(n.encoding)===-1&&n.algorithm!==`passthrough`)throw Error(`Encoding "`+n.encoding+`"  not supported. supported values: `+h.join(`, `));return n}function _(e){if(typeof e==`function`)return/^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i.exec(Function.prototype.toString.call(e))!=null}function v(e,t,n){n||=[];function r(e){return t.update?t.update(e,`utf8`):t.write(e,`utf8`)}return{dispatch:function(t){return this[`_`+((t=e.replacer?e.replacer(t):t)===null?`null`:typeof t)](t)},_object:function(t){var i,o=Object.prototype.toString.call(t),s=/\[object (.*)\]/i.exec(o);if(s=(s=s?s[1]:`unknown:[`+o+`]`).toLowerCase(),0<=(o=n.indexOf(t)))return this.dispatch(`[CIRCULAR:`+o+`]`);if(n.push(t),a!==void 0&&a.isBuffer&&a.isBuffer(t))return r(`buffer:`),r(t);if(s===`object`||s===`function`||s===`asyncfunction`)return o=Object.keys(t),e.unorderedObjects&&(o=o.sort()),!1===e.respectType||_(t)||o.splice(0,0,`prototype`,`__proto__`,`constructor`),e.excludeKeys&&(o=o.filter(function(t){return!e.excludeKeys(t)})),r(`object:`+o.length+`:`),i=this,o.forEach(function(n){i.dispatch(n),r(`:`),e.excludeValues||i.dispatch(t[n]),r(`,`)});if(!this[`_`+s]){if(e.ignoreUnknown)return r(`[`+s+`]`);throw Error(`Unknown object type "`+s+`"`)}this[`_`+s](t)},_array:function(t,i){i=i===void 0?!1!==e.unorderedArrays:i;var a=this;if(r(`array:`+t.length+`:`),!i||t.length<=1)return t.forEach(function(e){return a.dispatch(e)});var o=[],i=t.map(function(t){var r=new y,i=n.slice();return v(e,r,i).dispatch(t),o=o.concat(i.slice(n.length)),r.read().toString()});return n=n.concat(o),i.sort(),this._array(i,!1)},_date:function(e){return r(`date:`+e.toJSON())},_symbol:function(e){return r(`symbol:`+e.toString())},_error:function(e){return r(`error:`+e.toString())},_boolean:function(e){return r(`bool:`+e.toString())},_string:function(e){r(`string:`+e.length+`:`),r(e.toString())},_function:function(t){r(`fn:`),_(t)?this.dispatch(`[native]`):this.dispatch(t.toString()),!1!==e.respectFunctionNames&&this.dispatch(`function-name:`+String(t.name)),e.respectFunctionProperties&&this._object(t)},_number:function(e){return r(`number:`+e.toString())},_xml:function(e){return r(`xml:`+e.toString())},_null:function(){return r(`Null`)},_undefined:function(){return r(`Undefined`)},_regexp:function(e){return r(`regex:`+e.toString())},_uint8array:function(e){return r(`uint8array:`),this.dispatch(Array.prototype.slice.call(e))},_uint8clampedarray:function(e){return r(`uint8clampedarray:`),this.dispatch(Array.prototype.slice.call(e))},_int8array:function(e){return r(`int8array:`),this.dispatch(Array.prototype.slice.call(e))},_uint16array:function(e){return r(`uint16array:`),this.dispatch(Array.prototype.slice.call(e))},_int16array:function(e){return r(`int16array:`),this.dispatch(Array.prototype.slice.call(e))},_uint32array:function(e){return r(`uint32array:`),this.dispatch(Array.prototype.slice.call(e))},_int32array:function(e){return r(`int32array:`),this.dispatch(Array.prototype.slice.call(e))},_float32array:function(e){return r(`float32array:`),this.dispatch(Array.prototype.slice.call(e))},_float64array:function(e){return r(`float64array:`),this.dispatch(Array.prototype.slice.call(e))},_arraybuffer:function(e){return r(`arraybuffer:`),this.dispatch(new Uint8Array(e))},_url:function(e){return r(`url:`+e.toString())},_map:function(t){return r(`map:`),t=Array.from(t),this._array(t,!1!==e.unorderedSets)},_set:function(t){return r(`set:`),t=Array.from(t),this._array(t,!1!==e.unorderedSets)},_file:function(e){return r(`file:`),this.dispatch([e.name,e.size,e.type,e.lastModfied])},_blob:function(){if(e.ignoreUnknown)return r(`[blob]`);throw Error(`Hashing Blob objects is currently not supported
(see https://github.com/puleos/object-hash/issues/26)
Use "options.replacer" or "options.ignoreUnknown"
`)},_domwindow:function(){return r(`domwindow`)},_bigint:function(e){return r(`bigint:`+e.toString())},_process:function(){return r(`process`)},_timer:function(){return r(`timer`)},_pipe:function(){return r(`pipe`)},_tcp:function(){return r(`tcp`)},_udp:function(){return r(`udp`)},_tty:function(){return r(`tty`)},_statwatcher:function(){return r(`statwatcher`)},_securecontext:function(){return r(`securecontext`)},_connection:function(){return r(`connection`)},_zlib:function(){return r(`zlib`)},_context:function(){return r(`context`)},_nodescript:function(){return r(`nodescript`)},_httpparser:function(){return r(`httpparser`)},_dataview:function(){return r(`dataview`)},_signal:function(){return r(`signal`)},_fsevent:function(){return r(`fsevent`)},_tlswrap:function(){return r(`tlswrap`)}}}function y(){return{buf:``,write:function(e){this.buf+=e},end:function(e){this.buf+=e},read:function(){return this.buf}}}n.writeToStream=function(e,t,n){return n===void 0&&(n=t,t={}),v(t=g(e,t),n).dispatch(e)}}).call(this,e(`lYpoI2`),typeof self<`u`?self:typeof window<`u`?window:{},e(`buffer`).Buffer,arguments[3],arguments[4],arguments[5],arguments[6],`/fake_9a5aa49d.js`,`/`)},{buffer:3,crypto:5,lYpoI2:11}],2:[function(e,t,n){(function(e,t,r,i,a,o,s,c,l){(function(e){var t=typeof Uint8Array<`u`?Uint8Array:Array,n=43,r=47,i=48,a=97,o=65,s=45,c=95;function l(e){return e=e.charCodeAt(0),e===n||e===s?62:e===r||e===c?63:e<i?-1:e<i+10?e-i+26+26:e<o+26?e-o:e<a+26?e-a+26:void 0}e.toByteArray=function(e){var n,r;if(0<e.length%4)throw Error(`Invalid string. Length must be a multiple of 4`);var i=e.length,i=e.charAt(i-2)===`=`?2:+(e.charAt(i-1)===`=`),a=new t(3*e.length/4-i),o=0<i?e.length-4:e.length,s=0;function c(e){a[s++]=e}for(n=0;n<o;n+=4)c((16711680&(r=l(e.charAt(n))<<18|l(e.charAt(n+1))<<12|l(e.charAt(n+2))<<6|l(e.charAt(n+3))))>>16),c((65280&r)>>8),c(255&r);return i==2?c(255&(r=l(e.charAt(n))<<2|l(e.charAt(n+1))>>4)):i==1&&(c((r=l(e.charAt(n))<<10|l(e.charAt(n+1))<<4|l(e.charAt(n+2))>>2)>>8&255),c(255&r)),a},e.fromByteArray=function(e){var t,n,r,i,a=e.length%3,o=``;function s(e){return`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`.charAt(e)}for(t=0,r=e.length-a;t<r;t+=3)n=(e[t]<<16)+(e[t+1]<<8)+e[t+2],o+=s((i=n)>>18&63)+s(i>>12&63)+s(i>>6&63)+s(63&i);switch(a){case 1:o=(o+=s((n=e[e.length-1])>>2))+s(n<<4&63)+`==`;break;case 2:o=(o=(o+=s((n=(e[e.length-2]<<8)+e[e.length-1])>>10))+s(n>>4&63))+s(n<<2&63)+`=`}return o}})(n===void 0?this.base64js={}:n)}).call(this,e(`lYpoI2`),typeof self<`u`?self:typeof window<`u`?window:{},e(`buffer`).Buffer,arguments[3],arguments[4],arguments[5],arguments[6],`/node_modules/gulp-browserify/node_modules/base64-js/lib/b64.js`,`/node_modules/gulp-browserify/node_modules/base64-js/lib`)},{buffer:3,lYpoI2:11}],3:[function(e,t,n){(function(t,r,i,a,o,s,c,l,u){var d=e(`base64-js`),f=e(`ieee754`);function i(e,t,n){if(!(this instanceof i))return new i(e,t,n);var r,a,o,s,c=typeof e;if(t===`base64`&&c==`string`)for(e=(s=e).trim?s.trim():s.replace(/^\s+|\s+$/g,``);e.length%4!=0;)e+=`=`;if(c==`number`)r=A(e);else if(c==`string`)r=i.byteLength(e,t);else{if(c!=`object`)throw Error(`First argument needs to be a number, array or string.`);r=A(e.length)}if(i._useTypedArrays?a=i._augment(new Uint8Array(r)):((a=this).length=r,a._isBuffer=!0),i._useTypedArrays&&typeof e.byteLength==`number`)a._set(e);else if(j(s=e)||i.isBuffer(s)||s&&typeof s==`object`&&typeof s.length==`number`)for(o=0;o<r;o++)i.isBuffer(e)?a[o]=e.readUInt8(o):a[o]=e[o];else if(c==`string`)a.write(e,0,t);else if(c==`number`&&!i._useTypedArrays&&!n)for(o=0;o<r;o++)a[o]=0;return a}function p(e,t,n,r){return i._charsWritten=N(function(e){for(var t=[],n=0;n<e.length;n++)t.push(255&e.charCodeAt(n));return t}(t),e,n,r)}function m(e,t,n,r){return i._charsWritten=N(function(e){for(var t,n,r=[],i=0;i<e.length;i++)n=e.charCodeAt(i),t=n>>8,n%=256,r.push(n),r.push(t);return r}(t),e,n,r)}function h(e,t,n){var r=``;n=Math.min(e.length,n);for(var i=t;i<n;i++)r+=String.fromCharCode(e[i]);return r}function g(e,t,n,r){r||(L(typeof n==`boolean`,`missing or invalid endian`),L(t!=null,`missing offset`),L(t+1<e.length,`Trying to read beyond buffer length`));var i,r=e.length;if(!(r<=t))return n?(i=e[t],t+1<r&&(i|=e[t+1]<<8)):(i=e[t]<<8,t+1<r&&(i|=e[t+1])),i}function _(e,t,n,r){r||(L(typeof n==`boolean`,`missing or invalid endian`),L(t!=null,`missing offset`),L(t+3<e.length,`Trying to read beyond buffer length`));var i,r=e.length;if(!(r<=t))return n?(t+2<r&&(i=e[t+2]<<16),t+1<r&&(i|=e[t+1]<<8),i|=e[t],t+3<r&&(i+=e[t+3]<<24>>>0)):(t+1<r&&(i=e[t+1]<<16),t+2<r&&(i|=e[t+2]<<8),t+3<r&&(i|=e[t+3]),i+=e[t]<<24>>>0),i}function v(e,t,n,r){if(r||(L(typeof n==`boolean`,`missing or invalid endian`),L(t!=null,`missing offset`),L(t+1<e.length,`Trying to read beyond buffer length`)),!(e.length<=t))return r=g(e,t,n,!0),32768&r?-1*(65535-r+1):r}function y(e,t,n,r){if(r||(L(typeof n==`boolean`,`missing or invalid endian`),L(t!=null,`missing offset`),L(t+3<e.length,`Trying to read beyond buffer length`)),!(e.length<=t))return r=_(e,t,n,!0),2147483648&r?-1*(4294967295-r+1):r}function b(e,t,n,r){return r||(L(typeof n==`boolean`,`missing or invalid endian`),L(t+3<e.length,`Trying to read beyond buffer length`)),f.read(e,t,n,23,4)}function x(e,t,n,r){return r||(L(typeof n==`boolean`,`missing or invalid endian`),L(t+7<e.length,`Trying to read beyond buffer length`)),f.read(e,t,n,52,8)}function S(e,t,n,r,i){if(i||(L(t!=null,`missing value`),L(typeof r==`boolean`,`missing or invalid endian`),L(n!=null,`missing offset`),L(n+1<e.length,`trying to write beyond buffer length`),F(t,65535)),i=e.length,!(i<=n))for(var a=0,o=Math.min(i-n,2);a<o;a++)e[n+a]=(t&255<<8*(r?a:1-a))>>>8*(r?a:1-a)}function C(e,t,n,r,i){if(i||(L(t!=null,`missing value`),L(typeof r==`boolean`,`missing or invalid endian`),L(n!=null,`missing offset`),L(n+3<e.length,`trying to write beyond buffer length`),F(t,4294967295)),i=e.length,!(i<=n))for(var a=0,o=Math.min(i-n,4);a<o;a++)e[n+a]=t>>>8*(r?a:3-a)&255}function w(e,t,n,r,i){i||(L(t!=null,`missing value`),L(typeof r==`boolean`,`missing or invalid endian`),L(n!=null,`missing offset`),L(n+1<e.length,`Trying to write beyond buffer length`),I(t,32767,-32768)),e.length<=n||S(e,0<=t?t:65535+t+1,n,r,i)}function T(e,t,n,r,i){i||(L(t!=null,`missing value`),L(typeof r==`boolean`,`missing or invalid endian`),L(n!=null,`missing offset`),L(n+3<e.length,`Trying to write beyond buffer length`),I(t,2147483647,-2147483648)),e.length<=n||C(e,0<=t?t:4294967295+t+1,n,r,i)}function E(e,t,n,r,i){i||(L(t!=null,`missing value`),L(typeof r==`boolean`,`missing or invalid endian`),L(n!=null,`missing offset`),L(n+3<e.length,`Trying to write beyond buffer length`),ne(t,34028234663852886e22,-34028234663852886e22)),e.length<=n||f.write(e,t,n,r,23,4)}function D(e,t,n,r,i){i||(L(t!=null,`missing value`),L(typeof r==`boolean`,`missing or invalid endian`),L(n!=null,`missing offset`),L(n+7<e.length,`Trying to write beyond buffer length`),ne(t,17976931348623157e292,-17976931348623157e292)),e.length<=n||f.write(e,t,n,r,52,8)}n.Buffer=i,n.SlowBuffer=i,n.INSPECT_MAX_BYTES=50,i.poolSize=8192,i._useTypedArrays=function(){try{var e=new Uint8Array(new ArrayBuffer(0));return e.foo=function(){return 42},e.foo()===42&&typeof e.subarray==`function`}catch{return!1}}(),i.isEncoding=function(e){switch(String(e).toLowerCase()){case`hex`:case`utf8`:case`utf-8`:case`ascii`:case`binary`:case`base64`:case`raw`:case`ucs2`:case`ucs-2`:case`utf16le`:case`utf-16le`:return!0;default:return!1}},i.isBuffer=function(e){return!(e==null||!e._isBuffer)},i.byteLength=function(e,t){var n;switch(e+=``,t||`utf8`){case`hex`:n=e.length/2;break;case`utf8`:case`utf-8`:n=te(e).length;break;case`ascii`:case`binary`:case`raw`:n=e.length;break;case`base64`:n=M(e).length;break;case`ucs2`:case`ucs-2`:case`utf16le`:case`utf-16le`:n=2*e.length;break;default:throw Error(`Unknown encoding`)}return n},i.concat=function(e,t){if(L(j(e),`Usage: Buffer.concat(list, [totalLength])
list should be an Array.`),e.length===0)return new i(0);if(e.length===1)return e[0];if(typeof t!=`number`)for(a=t=0;a<e.length;a++)t+=e[a].length;for(var n=new i(t),r=0,a=0;a<e.length;a++){var o=e[a];o.copy(n,r),r+=o.length}return n},i.prototype.write=function(e,t,n,r){isFinite(t)?isFinite(n)||(r=n,n=void 0):(l=r,r=t,t=n,n=l),t=Number(t)||0;var a,o,s,c,l=this.length-t;switch((!n||l<(n=Number(n)))&&(n=l),r=String(r||`utf8`).toLowerCase()){case`hex`:a=function(e,t,n,r){n=Number(n)||0;var a=e.length-n;(!r||a<(r=Number(r)))&&(r=a),L((a=t.length)%2==0,`Invalid hex string`),a/2<r&&(r=a/2);for(var o=0;o<r;o++){var s=parseInt(t.substr(2*o,2),16);L(!isNaN(s),`Invalid hex string`),e[n+o]=s}return i._charsWritten=2*o,o}(this,e,t,n);break;case`utf8`:case`utf-8`:o=this,s=t,c=n,a=i._charsWritten=N(te(e),o,s,c);break;case`ascii`:case`binary`:a=p(this,e,t,n);break;case`base64`:o=this,s=t,c=n,a=i._charsWritten=N(M(e),o,s,c);break;case`ucs2`:case`ucs-2`:case`utf16le`:case`utf-16le`:a=m(this,e,t,n);break;default:throw Error(`Unknown encoding`)}return a},i.prototype.toString=function(e,t,n){var r,i,a,o,s=this;if(e=String(e||`utf8`).toLowerCase(),t=Number(t)||0,(n=n===void 0?s.length:Number(n))===t)return``;switch(e){case`hex`:r=function(e,t,n){var r=e.length;(!t||t<0)&&(t=0),(!n||n<0||r<n)&&(n=r);for(var i=``,a=t;a<n;a++)i+=ee(e[a]);return i}(s,t,n);break;case`utf8`:case`utf-8`:r=function(e,t,n){var r=``,i=``;n=Math.min(e.length,n);for(var a=t;a<n;a++)e[a]<=127?(r+=P(i)+String.fromCharCode(e[a]),i=``):i+=`%`+e[a].toString(16);return r+P(i)}(s,t,n);break;case`ascii`:case`binary`:r=h(s,t,n);break;case`base64`:i=s,o=n,r=(a=t)===0&&o===i.length?d.fromByteArray(i):d.fromByteArray(i.slice(a,o));break;case`ucs2`:case`ucs-2`:case`utf16le`:case`utf-16le`:r=function(e,t,n){for(var r=e.slice(t,n),i=``,a=0;a<r.length;a+=2)i+=String.fromCharCode(r[a]+256*r[a+1]);return i}(s,t,n);break;default:throw Error(`Unknown encoding`)}return r},i.prototype.toJSON=function(){return{type:`Buffer`,data:Array.prototype.slice.call(this._arr||this,0)}},i.prototype.copy=function(e,t,n,r){if(t||=0,(r=r||r===0?r:this.length)!==(n||=0)&&e.length!==0&&this.length!==0){L(n<=r,`sourceEnd < sourceStart`),L(0<=t&&t<e.length,`targetStart out of bounds`),L(0<=n&&n<this.length,`sourceStart out of bounds`),L(0<=r&&r<=this.length,`sourceEnd out of bounds`),r>this.length&&(r=this.length);var a=(r=e.length-t<r-n?e.length-t+n:r)-n;if(a<100||!i._useTypedArrays)for(var o=0;o<a;o++)e[o+t]=this[o+n];else e._set(this.subarray(n,n+a),t)}},i.prototype.slice=function(e,t){var n=this.length;if(e=k(e,n,0),t=k(t,n,n),i._useTypedArrays)return i._augment(this.subarray(e,t));for(var r=t-e,a=new i(r,void 0,!0),o=0;o<r;o++)a[o]=this[o+e];return a},i.prototype.get=function(e){return console.log(`.get() is deprecated. Access using array indexes instead.`),this.readUInt8(e)},i.prototype.set=function(e,t){return console.log(`.set() is deprecated. Access using array indexes instead.`),this.writeUInt8(e,t)},i.prototype.readUInt8=function(e,t){if(t||(L(e!=null,`missing offset`),L(e<this.length,`Trying to read beyond buffer length`)),!(e>=this.length))return this[e]},i.prototype.readUInt16LE=function(e,t){return g(this,e,!0,t)},i.prototype.readUInt16BE=function(e,t){return g(this,e,!1,t)},i.prototype.readUInt32LE=function(e,t){return _(this,e,!0,t)},i.prototype.readUInt32BE=function(e,t){return _(this,e,!1,t)},i.prototype.readInt8=function(e,t){if(t||(L(e!=null,`missing offset`),L(e<this.length,`Trying to read beyond buffer length`)),!(e>=this.length))return 128&this[e]?-1*(255-this[e]+1):this[e]},i.prototype.readInt16LE=function(e,t){return v(this,e,!0,t)},i.prototype.readInt16BE=function(e,t){return v(this,e,!1,t)},i.prototype.readInt32LE=function(e,t){return y(this,e,!0,t)},i.prototype.readInt32BE=function(e,t){return y(this,e,!1,t)},i.prototype.readFloatLE=function(e,t){return b(this,e,!0,t)},i.prototype.readFloatBE=function(e,t){return b(this,e,!1,t)},i.prototype.readDoubleLE=function(e,t){return x(this,e,!0,t)},i.prototype.readDoubleBE=function(e,t){return x(this,e,!1,t)},i.prototype.writeUInt8=function(e,t,n){n||(L(e!=null,`missing value`),L(t!=null,`missing offset`),L(t<this.length,`trying to write beyond buffer length`),F(e,255)),t>=this.length||(this[t]=e)},i.prototype.writeUInt16LE=function(e,t,n){S(this,e,t,!0,n)},i.prototype.writeUInt16BE=function(e,t,n){S(this,e,t,!1,n)},i.prototype.writeUInt32LE=function(e,t,n){C(this,e,t,!0,n)},i.prototype.writeUInt32BE=function(e,t,n){C(this,e,t,!1,n)},i.prototype.writeInt8=function(e,t,n){n||(L(e!=null,`missing value`),L(t!=null,`missing offset`),L(t<this.length,`Trying to write beyond buffer length`),I(e,127,-128)),t>=this.length||(0<=e?this.writeUInt8(e,t,n):this.writeUInt8(255+e+1,t,n))},i.prototype.writeInt16LE=function(e,t,n){w(this,e,t,!0,n)},i.prototype.writeInt16BE=function(e,t,n){w(this,e,t,!1,n)},i.prototype.writeInt32LE=function(e,t,n){T(this,e,t,!0,n)},i.prototype.writeInt32BE=function(e,t,n){T(this,e,t,!1,n)},i.prototype.writeFloatLE=function(e,t,n){E(this,e,t,!0,n)},i.prototype.writeFloatBE=function(e,t,n){E(this,e,t,!1,n)},i.prototype.writeDoubleLE=function(e,t,n){D(this,e,t,!0,n)},i.prototype.writeDoubleBE=function(e,t,n){D(this,e,t,!1,n)},i.prototype.fill=function(e,t,n){if(t||=0,n||=this.length,L(typeof(e=typeof(e||=0)==`string`?e.charCodeAt(0):e)==`number`&&!isNaN(e),`value is not a number`),L(t<=n,`end < start`),n!==t&&this.length!==0){L(0<=t&&t<this.length,`start out of bounds`),L(0<=n&&n<=this.length,`end out of bounds`);for(var r=t;r<n;r++)this[r]=e}},i.prototype.inspect=function(){for(var e=[],t=this.length,r=0;r<t;r++)if(e[r]=ee(this[r]),r===n.INSPECT_MAX_BYTES){e[r+1]=`...`;break}return`<Buffer `+e.join(` `)+`>`},i.prototype.toArrayBuffer=function(){if(typeof Uint8Array>`u`)throw Error(`Buffer.toArrayBuffer not supported in this browser`);if(i._useTypedArrays)return new i(this).buffer;for(var e=new Uint8Array(this.length),t=0,n=e.length;t<n;t+=1)e[t]=this[t];return e.buffer};var O=i.prototype;function k(e,t,n){return typeof e==`number`?t<=(e=~~e)?t:0<=e||0<=(e+=t)?e:0:n}function A(e){return(e=~~Math.ceil(+e))<0?0:e}function j(e){return(Array.isArray||function(e){return Object.prototype.toString.call(e)===`[object Array]`})(e)}function ee(e){return e<16?`0`+e.toString(16):e.toString(16)}function te(e){for(var t=[],n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<=127)t.push(e.charCodeAt(n));else for(var i=n,a=(55296<=r&&r<=57343&&n++,encodeURIComponent(e.slice(i,n+1)).substr(1).split(`%`)),o=0;o<a.length;o++)t.push(parseInt(a[o],16))}return t}function M(e){return d.toByteArray(e)}function N(e,t,n,r){for(var i=0;i<r&&!(i+n>=t.length||i>=e.length);i++)t[i+n]=e[i];return i}function P(e){try{return decodeURIComponent(e)}catch{return`�`}}function F(e,t){L(typeof e==`number`,`cannot write a non-number as a number`),L(0<=e,`specified a negative value for writing an unsigned value`),L(e<=t,`value is larger than maximum value for type`),L(Math.floor(e)===e,`value has a fractional component`)}function I(e,t,n){L(typeof e==`number`,`cannot write a non-number as a number`),L(e<=t,`value larger than maximum allowed value`),L(n<=e,`value smaller than minimum allowed value`),L(Math.floor(e)===e,`value has a fractional component`)}function ne(e,t,n){L(typeof e==`number`,`cannot write a non-number as a number`),L(e<=t,`value larger than maximum allowed value`),L(n<=e,`value smaller than minimum allowed value`)}function L(e,t){if(!e)throw Error(t||`Failed assertion`)}i._augment=function(e){return e._isBuffer=!0,e._get=e.get,e._set=e.set,e.get=O.get,e.set=O.set,e.write=O.write,e.toString=O.toString,e.toLocaleString=O.toString,e.toJSON=O.toJSON,e.copy=O.copy,e.slice=O.slice,e.readUInt8=O.readUInt8,e.readUInt16LE=O.readUInt16LE,e.readUInt16BE=O.readUInt16BE,e.readUInt32LE=O.readUInt32LE,e.readUInt32BE=O.readUInt32BE,e.readInt8=O.readInt8,e.readInt16LE=O.readInt16LE,e.readInt16BE=O.readInt16BE,e.readInt32LE=O.readInt32LE,e.readInt32BE=O.readInt32BE,e.readFloatLE=O.readFloatLE,e.readFloatBE=O.readFloatBE,e.readDoubleLE=O.readDoubleLE,e.readDoubleBE=O.readDoubleBE,e.writeUInt8=O.writeUInt8,e.writeUInt16LE=O.writeUInt16LE,e.writeUInt16BE=O.writeUInt16BE,e.writeUInt32LE=O.writeUInt32LE,e.writeUInt32BE=O.writeUInt32BE,e.writeInt8=O.writeInt8,e.writeInt16LE=O.writeInt16LE,e.writeInt16BE=O.writeInt16BE,e.writeInt32LE=O.writeInt32LE,e.writeInt32BE=O.writeInt32BE,e.writeFloatLE=O.writeFloatLE,e.writeFloatBE=O.writeFloatBE,e.writeDoubleLE=O.writeDoubleLE,e.writeDoubleBE=O.writeDoubleBE,e.fill=O.fill,e.inspect=O.inspect,e.toArrayBuffer=O.toArrayBuffer,e}}).call(this,e(`lYpoI2`),typeof self<`u`?self:typeof window<`u`?window:{},e(`buffer`).Buffer,arguments[3],arguments[4],arguments[5],arguments[6],`/node_modules/gulp-browserify/node_modules/buffer/index.js`,`/node_modules/gulp-browserify/node_modules/buffer`)},{"base64-js":2,buffer:3,ieee754:10,lYpoI2:11}],4:[function(e,t,n){(function(n,r,i,a,o,s,c,l,u){var i=e(`buffer`).Buffer,d=4,f=new i(d);f.fill(0),t.exports={hash:function(e,t,n,r){for(var a=t(function(e,t){e.length%d!=0&&(n=e.length+(d-e.length%d),e=i.concat([e,f],n));for(var n,r=[],a=t?e.readInt32BE:e.readInt32LE,o=0;o<e.length;o+=d)r.push(a.call(e,o));return r}(e=i.isBuffer(e)?e:new i(e),r),8*e.length),t=r,o=new i(n),s=t?o.writeInt32BE:o.writeInt32LE,c=0;c<a.length;c++)s.call(o,a[c],4*c,!0);return o}}}).call(this,e(`lYpoI2`),typeof self<`u`?self:typeof window<`u`?window:{},e(`buffer`).Buffer,arguments[3],arguments[4],arguments[5],arguments[6],`/node_modules/gulp-browserify/node_modules/crypto-browserify/helpers.js`,`/node_modules/gulp-browserify/node_modules/crypto-browserify`)},{buffer:3,lYpoI2:11}],5:[function(e,t,n){(function(t,r,i,a,o,s,c,l,u){var i=e(`buffer`).Buffer,d=e(`./sha`),f=e(`./sha256`),p=e(`./rng`),m={sha1:d,sha256:f,md5:e(`./md5`)},h=64,g=new i(h);function _(e,t){var n=m[e||=`sha1`],r=[];return n||v(`algorithm:`,e,`is not yet supported`),{update:function(e){return i.isBuffer(e)||(e=new i(e)),r.push(e),e.length,this},digest:function(e){var a=i.concat(r),a=t?function(e,t,n){i.isBuffer(t)||(t=new i(t)),i.isBuffer(n)||(n=new i(n)),t.length>h?t=e(t):t.length<h&&(t=i.concat([t,g],h));for(var r=new i(h),a=new i(h),o=0;o<h;o++)r[o]=54^t[o],a[o]=92^t[o];return n=e(i.concat([r,n])),e(i.concat([a,n]))}(n,t,a):n(a);return r=null,e?a.toString(e):a}}}function v(){var e=[].slice.call(arguments).join(` `);throw Error([e,`we accept pull requests`,`http://github.com/dominictarr/crypto-browserify`].join(`
`))}g.fill(0),n.createHash=function(e){return _(e)},n.createHmac=_,n.randomBytes=function(e,t){if(!t||!t.call)return new i(p(e));try{t.call(this,void 0,new i(p(e)))}catch(e){t(e)}};var y,b=[`createCredentials`,`createCipher`,`createCipheriv`,`createDecipher`,`createDecipheriv`,`createSign`,`createVerify`,`createDiffieHellman`,`pbkdf2`],x=function(e){n[e]=function(){v(`sorry,`,e,`is not implemented yet`)}};for(y in b)x(b[y],y)}).call(this,e(`lYpoI2`),typeof self<`u`?self:typeof window<`u`?window:{},e(`buffer`).Buffer,arguments[3],arguments[4],arguments[5],arguments[6],`/node_modules/gulp-browserify/node_modules/crypto-browserify/index.js`,`/node_modules/gulp-browserify/node_modules/crypto-browserify`)},{"./md5":6,"./rng":7,"./sha":8,"./sha256":9,buffer:3,lYpoI2:11}],6:[function(e,t,n){(function(n,r,i,a,o,s,c,l,u){var d=e(`./helpers`);function f(e,t){e[t>>5]|=128<<t%32,e[14+(t+64>>>9<<4)]=t;for(var n=1732584193,r=-271733879,i=-1732584194,a=271733878,o=0;o<e.length;o+=16){var s=n,c=r,l=i,u=a,n=m(n,r,i,a,e[o+0],7,-680876936),a=m(a,n,r,i,e[o+1],12,-389564586),i=m(i,a,n,r,e[o+2],17,606105819),r=m(r,i,a,n,e[o+3],22,-1044525330);n=m(n,r,i,a,e[o+4],7,-176418897),a=m(a,n,r,i,e[o+5],12,1200080426),i=m(i,a,n,r,e[o+6],17,-1473231341),r=m(r,i,a,n,e[o+7],22,-45705983),n=m(n,r,i,a,e[o+8],7,1770035416),a=m(a,n,r,i,e[o+9],12,-1958414417),i=m(i,a,n,r,e[o+10],17,-42063),r=m(r,i,a,n,e[o+11],22,-1990404162),n=m(n,r,i,a,e[o+12],7,1804603682),a=m(a,n,r,i,e[o+13],12,-40341101),i=m(i,a,n,r,e[o+14],17,-1502002290),n=h(n,r=m(r,i,a,n,e[o+15],22,1236535329),i,a,e[o+1],5,-165796510),a=h(a,n,r,i,e[o+6],9,-1069501632),i=h(i,a,n,r,e[o+11],14,643717713),r=h(r,i,a,n,e[o+0],20,-373897302),n=h(n,r,i,a,e[o+5],5,-701558691),a=h(a,n,r,i,e[o+10],9,38016083),i=h(i,a,n,r,e[o+15],14,-660478335),r=h(r,i,a,n,e[o+4],20,-405537848),n=h(n,r,i,a,e[o+9],5,568446438),a=h(a,n,r,i,e[o+14],9,-1019803690),i=h(i,a,n,r,e[o+3],14,-187363961),r=h(r,i,a,n,e[o+8],20,1163531501),n=h(n,r,i,a,e[o+13],5,-1444681467),a=h(a,n,r,i,e[o+2],9,-51403784),i=h(i,a,n,r,e[o+7],14,1735328473),n=g(n,r=h(r,i,a,n,e[o+12],20,-1926607734),i,a,e[o+5],4,-378558),a=g(a,n,r,i,e[o+8],11,-2022574463),i=g(i,a,n,r,e[o+11],16,1839030562),r=g(r,i,a,n,e[o+14],23,-35309556),n=g(n,r,i,a,e[o+1],4,-1530992060),a=g(a,n,r,i,e[o+4],11,1272893353),i=g(i,a,n,r,e[o+7],16,-155497632),r=g(r,i,a,n,e[o+10],23,-1094730640),n=g(n,r,i,a,e[o+13],4,681279174),a=g(a,n,r,i,e[o+0],11,-358537222),i=g(i,a,n,r,e[o+3],16,-722521979),r=g(r,i,a,n,e[o+6],23,76029189),n=g(n,r,i,a,e[o+9],4,-640364487),a=g(a,n,r,i,e[o+12],11,-421815835),i=g(i,a,n,r,e[o+15],16,530742520),n=_(n,r=g(r,i,a,n,e[o+2],23,-995338651),i,a,e[o+0],6,-198630844),a=_(a,n,r,i,e[o+7],10,1126891415),i=_(i,a,n,r,e[o+14],15,-1416354905),r=_(r,i,a,n,e[o+5],21,-57434055),n=_(n,r,i,a,e[o+12],6,1700485571),a=_(a,n,r,i,e[o+3],10,-1894986606),i=_(i,a,n,r,e[o+10],15,-1051523),r=_(r,i,a,n,e[o+1],21,-2054922799),n=_(n,r,i,a,e[o+8],6,1873313359),a=_(a,n,r,i,e[o+15],10,-30611744),i=_(i,a,n,r,e[o+6],15,-1560198380),r=_(r,i,a,n,e[o+13],21,1309151649),n=_(n,r,i,a,e[o+4],6,-145523070),a=_(a,n,r,i,e[o+11],10,-1120210379),i=_(i,a,n,r,e[o+2],15,718787259),r=_(r,i,a,n,e[o+9],21,-343485551),n=v(n,s),r=v(r,c),i=v(i,l),a=v(a,u)}return[n,r,i,a]}function p(e,t,n,r,i,a){return v((t=v(v(t,e),v(r,a)))<<i|t>>>32-i,n)}function m(e,t,n,r,i,a,o){return p(t&n|~t&r,e,t,i,a,o)}function h(e,t,n,r,i,a,o){return p(t&r|n&~r,e,t,i,a,o)}function g(e,t,n,r,i,a,o){return p(t^n^r,e,t,i,a,o)}function _(e,t,n,r,i,a,o){return p(n^(t|~r),e,t,i,a,o)}function v(e,t){var n=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(n>>16)<<16|65535&n}t.exports=function(e){return d.hash(e,f,16)}}).call(this,e(`lYpoI2`),typeof self<`u`?self:typeof window<`u`?window:{},e(`buffer`).Buffer,arguments[3],arguments[4],arguments[5],arguments[6],`/node_modules/gulp-browserify/node_modules/crypto-browserify/md5.js`,`/node_modules/gulp-browserify/node_modules/crypto-browserify`)},{"./helpers":4,buffer:3,lYpoI2:11}],7:[function(e,t,n){(function(e,n,r,i,a,o,s,c,l){var u;t.exports=u||function(e){for(var t,n=Array(e),r=0;r<e;r++)!(3&r)&&(t=4294967296*Math.random()),n[r]=t>>>((3&r)<<3)&255;return n}}).call(this,e(`lYpoI2`),typeof self<`u`?self:typeof window<`u`?window:{},e(`buffer`).Buffer,arguments[3],arguments[4],arguments[5],arguments[6],`/node_modules/gulp-browserify/node_modules/crypto-browserify/rng.js`,`/node_modules/gulp-browserify/node_modules/crypto-browserify`)},{buffer:3,lYpoI2:11}],8:[function(e,t,n){(function(n,r,i,a,o,s,c,l,u){var d=e(`./helpers`);function f(e,t){e[t>>5]|=128<<24-t%32,e[15+(t+64>>9<<4)]=t;for(var n,r,i,a=Array(80),o=1732584193,s=-271733879,c=-1732584194,l=271733878,u=-1009589776,d=0;d<e.length;d+=16){for(var f=o,h=s,g=c,_=l,v=u,y=0;y<80;y++){a[y]=y<16?e[d+y]:m(a[y-3]^a[y-8]^a[y-14]^a[y-16],1);var b=p(p(m(o,5),(b=s,r=c,i=l,(n=y)<20?b&r|~b&i:!(n<40)&&n<60?b&r|b&i|r&i:b^r^i)),p(p(u,a[y]),(n=y)<20?1518500249:n<40?1859775393:n<60?-1894007588:-899497514)),u=l,l=c,c=m(s,30),s=o,o=b}o=p(o,f),s=p(s,h),c=p(c,g),l=p(l,_),u=p(u,v)}return[o,s,c,l,u]}function p(e,t){var n=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(n>>16)<<16|65535&n}function m(e,t){return e<<t|e>>>32-t}t.exports=function(e){return d.hash(e,f,20,!0)}}).call(this,e(`lYpoI2`),typeof self<`u`?self:typeof window<`u`?window:{},e(`buffer`).Buffer,arguments[3],arguments[4],arguments[5],arguments[6],`/node_modules/gulp-browserify/node_modules/crypto-browserify/sha.js`,`/node_modules/gulp-browserify/node_modules/crypto-browserify`)},{"./helpers":4,buffer:3,lYpoI2:11}],9:[function(e,t,n){(function(n,r,i,a,o,s,c,l,u){function d(e,t){var n=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(n>>16)<<16|65535&n}function f(e,t){var n,r=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],i=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],a=Array(64);e[t>>5]|=128<<24-t%32,e[15+(t+64>>9<<4)]=t;for(var o,s,c=0;c<e.length;c+=16){for(var l=i[0],u=i[1],f=i[2],p=i[3],g=i[4],_=i[5],v=i[6],y=i[7],b=0;b<64;b++)a[b]=b<16?e[b+c]:d(d(d((s=a[b-2],m(s,17)^m(s,19)^h(s,10)),a[b-7]),(s=a[b-15],m(s,7)^m(s,18)^h(s,3))),a[b-16]),n=d(d(d(d(y,m(s=g,6)^m(s,11)^m(s,25)),g&_^~g&v),r[b]),a[b]),o=d(m(o=l,2)^m(o,13)^m(o,22),l&u^l&f^u&f),y=v,v=_,_=g,g=d(p,n),p=f,f=u,u=l,l=d(n,o);i[0]=d(l,i[0]),i[1]=d(u,i[1]),i[2]=d(f,i[2]),i[3]=d(p,i[3]),i[4]=d(g,i[4]),i[5]=d(_,i[5]),i[6]=d(v,i[6]),i[7]=d(y,i[7])}return i}var p=e(`./helpers`),m=function(e,t){return e>>>t|e<<32-t},h=function(e,t){return e>>>t};t.exports=function(e){return p.hash(e,f,32,!0)}}).call(this,e(`lYpoI2`),typeof self<`u`?self:typeof window<`u`?window:{},e(`buffer`).Buffer,arguments[3],arguments[4],arguments[5],arguments[6],`/node_modules/gulp-browserify/node_modules/crypto-browserify/sha256.js`,`/node_modules/gulp-browserify/node_modules/crypto-browserify`)},{"./helpers":4,buffer:3,lYpoI2:11}],10:[function(e,t,n){(function(e,t,r,i,a,o,s,c,l){n.read=function(e,t,n,r,i){var a,o,s=8*i-r-1,c=(1<<s)-1,l=c>>1,u=-7,d=n?i-1:0,f=n?-1:1,i=e[t+d];for(d+=f,a=i&(1<<-u)-1,i>>=-u,u+=s;0<u;a=256*a+e[t+d],d+=f,u-=8);for(o=a&(1<<-u)-1,a>>=-u,u+=r;0<u;o=256*o+e[t+d],d+=f,u-=8);if(a===0)a=1-l;else{if(a===c)return o?NaN:1/0*(i?-1:1);o+=2**r,a-=l}return(i?-1:1)*o*2**(a-r)},n.write=function(e,t,n,r,i,a){var o,s,c=8*a-i-1,l=(1<<c)-1,u=l>>1,d=i===23?2**-24-2**-77:0,f=r?0:a-1,p=r?1:-1,a=+(t<0||t===0&&1/t<0);for(t=Math.abs(t),isNaN(t)||t===1/0?(s=+!!isNaN(t),o=l):(o=Math.floor(Math.log(t)/Math.LN2),t*(r=2**-o)<1&&(o--,r*=2),2<=(t+=1<=o+u?d/r:d*2**(1-u))*r&&(o++,r/=2),l<=o+u?(s=0,o=l):1<=o+u?(s=(t*r-1)*2**i,o+=u):(s=t*2**(u-1)*2**i,o=0));8<=i;e[n+f]=255&s,f+=p,s/=256,i-=8);for(o=o<<i|s,c+=i;0<c;e[n+f]=255&o,f+=p,o/=256,c-=8);e[n+f-p]|=128*a}}).call(this,e(`lYpoI2`),typeof self<`u`?self:typeof window<`u`?window:{},e(`buffer`).Buffer,arguments[3],arguments[4],arguments[5],arguments[6],`/node_modules/gulp-browserify/node_modules/ieee754/index.js`,`/node_modules/gulp-browserify/node_modules/ieee754`)},{buffer:3,lYpoI2:11}],11:[function(e,t,n){(function(e,n,r,i,a,o,s,c,l){var u,d,f;function p(){}(e=t.exports={}).nextTick=(d=typeof window<`u`&&window.setImmediate,f=typeof window<`u`&&window.postMessage&&window.addEventListener,d?function(e){return window.setImmediate(e)}:f?(u=[],window.addEventListener(`message`,function(e){var t=e.source;t!==window&&t!==null||e.data!==`process-tick`||(e.stopPropagation(),0<u.length&&u.shift()())},!0),function(e){u.push(e),window.postMessage(`process-tick`,`*`)}):function(e){setTimeout(e,0)}),e.title=`browser`,e.browser=!0,e.env={},e.argv=[],e.on=p,e.addListener=p,e.once=p,e.off=p,e.removeListener=p,e.removeAllListeners=p,e.emit=p,e.binding=function(e){throw Error(`process.binding is not supported`)},e.cwd=function(){return`/`},e.chdir=function(e){throw Error(`process.chdir is not supported`)}}).call(this,e(`lYpoI2`),typeof self<`u`?self:typeof window<`u`?window:{},e(`buffer`).Buffer,arguments[3],arguments[4],arguments[5],arguments[6],`/node_modules/gulp-browserify/node_modules/process/browser.js`,`/node_modules/gulp-browserify/node_modules/process`)},{buffer:3,lYpoI2:11}]},{},[1])(1)})}))(),1);d(),d(),d();var Sm=e=>{if(typeof e!=`object`||!e)return!1;let t=Object.getPrototypeOf(e);return t===Object.prototype||t===null},Cm=e=>Array.isArray(e)?[...e]:Sm(e)?c({},e):{};function wm(e,t,n){let r=t.split(`.`),i=c({},e),a=i;for(let e=0;e<r.length;e++){let[t,i]=r[e].replace(`]`,``).split(`[`),o=e===r.length-1;if(i!==void 0){a[t]=Array.isArray(a[t])?[...a[t]]:[];let e=Number(i);if(o){a[t][e]=n;continue}a[t][e]=Cm(a[t][e]),a=a[t][e]}else o?a[t]=n:(a[t]=Cm(a[t]),a=a[t])}return i}d(),d();var Tm={Button:`_Button_oe4qj_1`,"Button--medium":`_Button--medium_oe4qj_34`,"Button--large":`_Button--large_oe4qj_62`,"Button-icon":`_Button-icon_oe4qj_89`,"Button--primary":`_Button--primary_oe4qj_93`,"Button--disabled":`_Button--disabled_oe4qj_123`,"Button--secondary":`_Button--secondary_oe4qj_135`,"Button--flush":`_Button--flush_oe4qj_171`,"Button--fullWidth":`_Button--fullWidth_oe4qj_179`,"Button-spinner":`_Button-spinner_oe4qj_184`};d();var Em=/^(data-.*)$/,Dm=e=>{let t={};for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&Em.test(n)&&(t[n]=e[n]);return t},Om=p(`Button`,Tm),km=e=>{var t=e,{children:n,href:r,onClick:i,variant:a=`primary`,type:o,disabled:s,tabIndex:u,newTab:d,fullWidth:p,icon:m,size:h=`medium`,loading:g=!1}=t,_=f(t,[`children`,`href`,`onClick`,`variant`,`type`,`disabled`,`tabIndex`,`newTab`,`fullWidth`,`icon`,`size`,`loading`]);let[v,y]=(0,H.useState)(g);(0,H.useEffect)(()=>y(g),[g]);let b=r?`a`:o?`button`:`span`,x=Dm(_);return(0,U.jsxs)(b,l(c({className:Om({primary:a===`primary`,secondary:a===`secondary`,disabled:s,fullWidth:p,[h]:!0}),onClick:e=>{i&&(y(!0),Promise.resolve(i(e)).then(()=>{y(!1)}))},type:o,disabled:s||v,tabIndex:u,target:d?`_blank`:void 0,rel:d?`noreferrer`:void 0,href:r},x),{children:[m&&(0,U.jsx)(`div`,{className:Om(`icon`),children:m}),n,v&&(0,U.jsx)(`div`,{className:Om(`spinner`),children:(0,U.jsx)(E,{size:14})})]}))};d(),d();var Am={InputWrapper:`_InputWrapper_qyenz_1`,"Input-label":`_Input-label_qyenz_5`,"Input-labelIcon":`_Input-labelIcon_qyenz_17`,"Input-disabledIcon":`_Input-disabledIcon_qyenz_24`,"Input-input":`_Input-input_qyenz_29`,"Input-select":`_Input-select_qyenz_61`,"Input-selectIcon":`_Input-selectIcon_qyenz_71`,Input:`_Input_qyenz_1`,"Input--readOnly":`_Input--readOnly_qyenz_111`,"Input-radioGroupItems":`_Input-radioGroupItems_qyenz_150`,"Input-radio":`_Input-radio_qyenz_150`,"Input-radioInner":`_Input-radioInner_qyenz_179`,"Input-radioInput":`_Input-radioInput_qyenz_261`},jm=p(`Input`,Am),Mm=({children:e,icon:t,label:n,el:r=`label`,readOnly:i,className:a})=>{let o=r,s=B(`field-readonly`);return(0,U.jsxs)(o,{className:a,children:[(0,U.jsxs)(`div`,{className:jm(`label`),children:[t?(0,U.jsx)(`div`,{className:jm(`labelIcon`),children:t}):(0,U.jsx)(U.Fragment,{}),n,i&&(0,U.jsx)(`div`,{className:jm(`disabledIcon`),title:s,children:(0,U.jsx)(A,{size:`12`})})]}),e]})},Nm=({children:e,icon:t,label:n,el:r=`label`,readOnly:i})=>{let a=V(e=>e.overrides),o=(0,H.useMemo)(()=>a.fieldLabel||Mm,[a]);return n?(0,U.jsx)(o,{label:n,icon:t,className:jm({readOnly:i}),readOnly:i,el:r,children:e}):(0,U.jsx)(U.Fragment,{children:e})};d(),d(),d(),d();var Pm={ArrayField:`_ArrayField_62huh_5`,"ArrayField--isDraggingFrom":`_ArrayField--isDraggingFrom_62huh_30`,"ArrayField-addButton":`_ArrayField-addButton_62huh_38`,"ArrayField--hasItems":`_ArrayField--hasItems_62huh_58`,"ArrayField-inner":`_ArrayField-inner_62huh_93`,ArrayFieldItem:`_ArrayFieldItem_62huh_101`,"ArrayFieldItem--isDragging":`_ArrayFieldItem--isDragging_62huh_110`,"ArrayFieldItem--isExpanded":`_ArrayFieldItem--isExpanded_62huh_114`,"ArrayFieldItem-summary":`_ArrayFieldItem-summary_62huh_132`,"ArrayFieldItem--noFields":`_ArrayFieldItem--noFields_62huh_167`,"ArrayField--addDisabled":`_ArrayField--addDisabled_62huh_176`,"ArrayFieldItem-body":`_ArrayFieldItem-body_62huh_228`,"ArrayFieldItem-fieldset":`_ArrayFieldItem-fieldset_62huh_237`,"ArrayFieldItem-rhs":`_ArrayFieldItem-rhs_62huh_250`,"ArrayFieldItem-actions":`_ArrayFieldItem-actions_62huh_256`};d(),d();function Fm(e,t){let n=(0,H.useContext)(e);if(!n)throw Error(`useContextStore must be used inside context`);return y(n,zt(t))}function Im(e){return({children:t,value:n})=>{let[r]=(0,H.useState)(()=>P(()=>n));return(0,U.jsx)(e.Provider,{value:r,children:t})}}function Lm(e){let t=(0,H.createContext)(P(b(()=>e)));return{ctx:t,Provider:Im(t)}}var Rm=Lm({}),zm=()=>(0,H.useContext)(Rm.ctx);function Bm(e){let t=(0,H.useContext)(Rm.ctx);if(!t)throw Error(`useContextStore must be used inside context`);return y(t,zt(e))}d(),d();var Vm=p(`DragIcon`,{DragIcon:`_DragIcon_5e515_1`,"DragIcon--disabled":`_DragIcon--disabled_5e515_10`}),Hm=({isDragDisabled:e})=>(0,U.jsx)(`div`,{className:Vm({disabled:e}),children:(0,U.jsx)(`svg`,{viewBox:`0 0 20 20`,width:`12`,fill:`currentColor`,children:(0,U.jsx)(`path`,{d:`M7 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 2zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 14zm6-8a2 2 0 1 0-.001-4.001A2 2 0 0 0 13 6zm0 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 14z`})})});d(),d();var{Delay:Um,Distance:Wm}=qu,Gm=[new Um({value:200,tolerance:10})],Km=[new Um({value:200,tolerance:10}),new Wm({value:5})],qm=({other:e=Km,mouse:t,touch:n=Gm}={touch:Gm,other:Km})=>{let[r]=(0,H.useState)(()=>[Zu.configure({activationConstraints(r,i){let{pointerType:a,target:o}=r;return a===`mouse`&&_c(o)&&(i.handle===o||i.handle?.contains(o))?t:a===`touch`?n:e}})]);return r};d(),d(),d();var Jm=`increasing`,Ym=(e,t)=>{let{dragOperation:n,droppable:r}=e,{shape:i}=r,{position:a}=n,o=n.shape?.current;if(!o||!i)return null;let s=i.center,c=Math.sqrt((s.x-t.x)**2+(s.y-t.y)**2),l=Math.sqrt((s.x-a.current.x)**2+(s.y-a.current.y)**2);return Jm=l===c?Jm:l<c?`decreasing`:`increasing`,o.center,r.id.toString(),Jm===`decreasing`?{id:r.id,value:1,type:Da.Collision}:null};d();var Xm=(e,t)=>e===`dynamic`?Math.abs(t.y)>Math.abs(t.x)?t.y===0?null:t.y>0?`down`:`up`:t.x===0?null:t.x>0?`right`:`left`:e===`x`?t.x===0?null:t.x>0?`right`:`left`:t.y===0?null:t.y>0?`down`:`up`;d();var Zm=(e,t,n,r=0)=>{let i=e.boundingRectangle,a=t.center;if(n===`down`){let e=r*t.boundingRectangle.height;return i.bottom>=a.y+e}if(n===`up`){let e=r*t.boundingRectangle.height;return i.top<a.y-e}if(n===`left`){let e=r*t.boundingRectangle.width;return a.x-e>=i.left}let o=r*t.boundingRectangle.width;return i.right-o>=a.x};d();var Qm=10,$m={current:{x:0,y:0},delta:{x:0,y:0},previous:{x:0,y:0},direction:null},eh=(e,t=`dynamic`)=>($m.current=e,$m.delta={x:e.x-$m.previous.x,y:e.y-$m.previous.y},$m.direction=Xm(t,$m.delta)||$m.direction,(Math.abs($m.delta.x)>Qm||Math.abs($m.delta.y)>Qm)&&($m.previous=Rr.from(e)),$m);d();var th=({dragOperation:e,droppable:t})=>{let n=e.position.current;if(!n)return null;let{id:r}=t;return t.shape&&t.shape.containsPoint(n)?{id:r,value:1/Rr.distance(t.shape.center,n),type:Da.PointerIntersection,priority:Ea.High}:null},nh=e=>{let{dragOperation:t,droppable:n}=e,{shape:r,position:i}=t;if(!n.shape)return null;let a=r?zr.from(r.current.boundingRectangle).corners:void 0,o=zr.from(n.shape.boundingRectangle).corners.reduce((e,t,n)=>e+Rr.distance(Rr.from(t),a?.[n]??i.current),0)/4;return{id:n.id,value:1/o,type:Da.Collision,priority:Ea.Normal}};d();var rh=P(()=>({fallbackEnabled:!1})),ih=``,ah=(e,t=.05)=>(n=>{let{dragOperation:r,droppable:i}=n,{position:a}=r,o=r.shape?.current,{shape:s}=i;if(!o||!s)return null;let{center:u}=o,{fallbackEnabled:d}=rh.getState(),f=eh(a.current,e),p={direction:f.direction},{center:m}=s,h=Zm(o,s,f.direction,t);if(r.source?.id===i.id){let e=Ym(n,f.previous);if(i.id.toString(),e)return l(c({},e),{priority:Ea.Highest,data:p})}let g=o.intersectionArea(s),_=g/s.area;if(g&&h){i.id.toString(),f.direction;let e={id:i.id,value:_,priority:Ea.High,type:Da.Collision},t=ih===i.id;return ih=``,l(c({},e),{id:t?`flush`:e.id,data:p})}if(d&&r.source?.id!==i.id){let t=s.boundingRectangle.right>o.boundingRectangle.left&&s.boundingRectangle.left<o.boundingRectangle.right,r=s.boundingRectangle.bottom>o.boundingRectangle.top&&s.boundingRectangle.top<o.boundingRectangle.bottom;if(e===`y`&&t||r){let t=nh(n);if(t)return p.direction=Xm(e,{x:o.center.x-(i.shape?.center.x||0),y:o.center.y-(i.shape?.center.y||0)}),g?(i.id.toString(),ih=i.id,l(c({},t),{priority:Ea.Low,data:p})):(i.id.toString(),l(c({},t),{priority:Ea.Lowest,data:p}))}}return i.id.toString(),null});d();var oh=(e,t=`ltr`)=>e===`up`||t===`ltr`&&e===`left`||t===`rtl`&&e===`right`?`before`:`after`,sh=({position:e,sourceIndex:t,targetIndex:n,isSameZone:r})=>{let i=n;return r&&i>=t&&--i,e===`after`&&(i+=1),i},ch=({children:e,onDragStart:t,onDragEnd:n,onMove:r})=>{let i=qm({mouse:[new qu.Distance({value:5})]});return(0,U.jsx)(Gd,{sensors:i,onDragStart:e=>t(e.operation.source?.id.toString()??``),onDragOver:(e,t)=>{e.preventDefault();let{operation:n}=e,{source:i,target:a}=n;if(!i||!a)return;let o=i.data.index,s=a.data.index,c=t.collisionObserver.collisions[0]?.data;o!==s&&i.id!==a.id&&r({source:o,target:sh({position:oh(c?.direction),sourceIndex:o,targetIndex:s,isSameZone:!0})})},onDragEnd:()=>{setTimeout(()=>{n()},250)},children:e})},lh=({id:e,index:t,disabled:n,children:r,type:i=`item`})=>{let{ref:a,isDragging:o,isDropping:s,handleRef:c}=Up({id:e,type:i,index:t,disabled:n,data:{index:t},collisionDetector:ah(`y`)});return r({isDragging:o,isDropping:s,ref:a,handleRef:c})};d();var uh=(0,H.createContext)({}),dh=()=>{let e=(0,H.useContext)(uh);return l(c({},e),{readOnlyFields:e.readOnlyFields||{}})},fh=({children:e,name:t,subName:n,wildcardName:r=t,readOnlyFields:i})=>{let a=`${t}.${n}`,o=`${r}.${n}`,s=(0,H.useMemo)(()=>Object.keys(i).reduce((e,n)=>{if(n.indexOf(a)>-1||n.indexOf(o)>-1){let a=new RegExp(`^(${t}|${r}).`.replace(/\[/g,`\\[`).replace(/\]/g,`\\]`).replace(/\./g,`\\.`).replace(/\*/g,`\\*`)),o=n.replace(a,``);return l(c({},e),{[o]:i[n]})}return e},{}),[t,n,r,i]);return(0,U.jsx)(uh.Provider,{value:{readOnlyFields:s,localName:n},children:e})};d();var ph=(e,t)=>t.split(`.`).reduce((e,t)=>{if(!e)return;let[n,r]=t.replace(`]`,``).split(`[`),i=e[n];return r&&i?i[parseInt(r)]:i},e);d();var mh=(0,H.memo)(({field:e,id:t,index:n,name:r,subName:i,localName:a,onChange:o,forceReadOnly:s})=>{let u=n===void 0?r:`${r}[${n}]`,d=r?`${u}.${i}`:i,f=n===void 0?a??i:`${a}[${n}]`,p=n===void 0?a:`${a}[*]`,m=`${f}.${i}`,h=`${p}.${i}`,{readOnlyFields:g}=dh(),_=s||(g[d]===void 0?g[h]:g[m]),v=e.label||i;return(0,U.jsx)(fh,{name:f,wildcardName:p,subName:i,readOnlyFields:g,children:(0,U.jsx)(Zh,{name:d,label:v,id:t,readOnly:_,field:l(c({},e),{label:v}),onChange:(e,t)=>{o(e,t,i)}})})}),hh=p(`ArrayField`,Pm),gh=p(`ArrayFieldItem`,Pm),_h=(0,H.memo)(({index:e,originalIndex:t,field:n,name:r})=>{let i=Bm(t=>ph(t,`${[r]}[${e}]`)),a=B(`field-arrayitem-summary`,{index:t});return(0,H.useMemo)(()=>i&&n.getItemSummary?n.getItemSummary(i,e):a,[i,n,t,e,a])}),vh=(0,H.memo)(({id:e,arrayId:t,index:n,dragIndex:r,originalIndex:i,field:a,onChange:o,onToggleExpand:s,readOnly:c,actions:l,name:u,localName:d})=>{let f=V(n=>n.state.ui.arrayState[t]?.openId===e),p=V(e=>e.permissions.getPermissions({item:e.selectedItem}).edit),m=(0,H.useMemo)(()=>a.arrayFields?Object.values(a.arrayFields).some(e=>e.type!==`slot`&&e.visible!==!1):!1,[a.arrayFields]);return(0,U.jsx)(lh,{id:e,index:r,disabled:c,children:({isDragging:t,ref:r,handleRef:h})=>(0,U.jsxs)(`div`,{ref:r,className:gh({isExpanded:f&&m,isDragging:t,noFields:!m}),children:[(0,U.jsxs)(`div`,{ref:h,onClick:n=>{t||(n.preventDefault(),n.stopPropagation(),m&&s(e,f))},className:gh(`summary`),children:[(0,U.jsx)(_h,{index:n,originalIndex:i,field:a,name:u}),(0,U.jsxs)(`div`,{className:gh(`rhs`),children:[!c&&(0,U.jsx)(`div`,{className:gh(`actions`),children:l}),(0,U.jsx)(`div`,{children:(0,U.jsx)(Hm,{})})]})]}),(0,U.jsx)(`div`,{className:gh(`body`),children:f&&m&&(0,U.jsx)(`fieldset`,{className:gh(`fieldset`),children:Object.keys(a.arrayFields).map(t=>{let r=a.arrayFields[t];return(0,U.jsx)(mh,{id:`${e}_${t}`,name:u,index:n,subName:t,localName:d,field:r,onChange:o,forceReadOnly:!p},`${e}_${t}_${n}`)})})})]})})}),yh=({field:e,onChange:t,id:n,name:r=n,label:i,labelIcon:a,readOnly:o,Label:s=e=>(0,U.jsx)(`div`,c({},e))})=>{let u=V(e=>e.setUi),d=z(),f=zm(),{localName:p=r}=dh(),m=()=>ph(f.getState(),r)??[],h=(0,H.useCallback)(()=>{let{state:e}=d.getState(),t=e.ui.arrayState[n];if(t?.items?.length)return t;let r=m();return{items:Array.from(r||[]).map((e,t)=>({_originalIndex:t,_currentIndex:t,_arrayId:`${n}-${t}`})),openId:``}},[d,n,m,r]),g=Bm(()=>m().length),_=(0,H.useMemo)(h,[h]),v=V(e=>e.state.ui.arrayState[n]??_),y=z(),b=(0,H.useCallback)(e=>{let t=y.getState().state;return{arrayState:l(c({},t.ui.arrayState),{[n]:c(c({},h()),e)})}},[y]),x=(0,H.useCallback)(()=>h().items.reduce((e,t)=>t._originalIndex>e?t._originalIndex:e,-1),[]),C=(0,H.useCallback)(e=>{let t=x(),r=h(),i=Array.from(e||[]).map((e,i)=>{let a=r.items[i],o={_originalIndex:a?._originalIndex??t+1,_currentIndex:a?._currentIndex??i,_arrayId:r.items[i]?._arrayId||`${n}-${t+1}`};return o._originalIndex>t&&(t=o._originalIndex),o});return l(c({},r),{items:i})},[]),[w,T]=(0,H.useState)(``),E=!!w,D=(0,H.useRef)([]);(0,H.useEffect)(()=>{D.current=m()},[]);let O=(0,H.useCallback)(t=>{if(e.type!==`array`||!e.arrayFields)return;let n=y.getState().config;return Ie({value:t,fields:e.arrayFields,mappers:{slot:({value:e})=>e.map(e=>j(e,n,!0))},config:n})},[y,e]),k=(0,H.useCallback)(()=>{let e=h(),t=e.items.map((e,t)=>l(c({},e),{_currentIndex:t})),r=y.getState().state,i={arrayState:l(c({},r.ui.arrayState),{[n]:l(c({},e),{items:t})})};u(i,!1)},[]),A=(0,H.useCallback)(e=>{let n=C(e);u(b(n),!1),t(e)},[C,u,b,t]);(0,H.useEffect)(()=>{let e=C(m());u(b(e),!1)},[g]);let ee=B(`field-arrayitem-duplicate`),te=B(`field-arrayitem-delete`);if(e.type!==`array`||!e.arrayFields)return null;let M=e.max!==void 0&&v?.items.length>=e.max||o;return(0,U.jsx)(s,{label:i||r,icon:a||(0,U.jsx)(F,{size:16}),el:`div`,readOnly:o,children:(0,U.jsx)(ch,{onDragStart:e=>{D.current=m(),T(e),k()},onDragEnd:()=>{T(``),t(D.current);let e=f.getState();f.setState(wm(e,r,D.current)),k()},onMove:e=>{let t=h();if(t.items[e.source]._arrayId!==w)return;let r=Ae(D.current,e.source,e.target),i=Ae(t.items,e.source,e.target),a=y.getState().state,o={arrayState:l(c({},a.ui.arrayState),{[n]:l(c({},t),{items:i})})};u(o,!1),D.current=r},children:(0,U.jsxs)(`div`,{className:hh({hasItems:g>0,addDisabled:M}),children:[v.items.length>0&&(0,U.jsx)(`div`,{className:hh(`inner`),"data-dnd-container":!0,children:v.items.map((i,a)=>{let{_arrayId:s=`${n}-${a}`,_originalIndex:d=a,_currentIndex:f=a}=i;return(0,U.jsx)(vh,{index:f,dragIndex:a,originalIndex:d,arrayId:n,id:s,readOnly:o,field:e,name:r,localName:p,onChange:(e,n,r)=>{let i=m(),o=Array.from(i||[])[a]||{};t(Se(i,a,l(c({},o),{[r]:e})),n)},onToggleExpand:(e,t)=>{u(b(t?{openId:``}:{openId:e}))},actions:(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(`div`,{className:gh(`action`),children:(0,U.jsx)(Ee,{type:`button`,disabled:!!M,onClick:e=>{e.stopPropagation();let t=[...m()||[]],n=O(t[a]);t.splice(a,0,n),A(t)},title:ee,children:(0,U.jsx)(xe,{size:16})})}),(0,U.jsx)(`div`,{className:gh(`action`),children:(0,U.jsx)(Ee,{type:`button`,disabled:e.min!==void 0&&e.min>=v.items.length,onClick:e=>{e.stopPropagation();let t=[...m()||[]];t.splice(a,1),A(t)},title:te,children:(0,U.jsx)(Le,{size:16})})})]})},s)})}),!M&&(0,U.jsx)(`button`,{type:`button`,className:hh(`addButton`),onClick:()=>{if(E)return;let t=m()||[],n=typeof e.defaultItemProps==`function`?e.defaultItemProps(t.length):e.defaultItemProps??{},r=re(O(n),e.arrayFields),i=[...t,r];A(i)},children:(0,U.jsx)(S,{size:21})})]})})})};d(),d(),d();var bh=(e,t=!0)=>Bm(n=>t?ph(n,e):void 0);d();var xh=e=>V(t=>t.state.ui.field.focus===e),Sh=(e,t,{tracked:n=!0,fallback:r}={})=>{let i=bh(e,n),a=xh(e),[o,s]=(0,H.useState)(i),c=(0,H.useCallback)((e,...n)=>{s(e),t(e,...n)},[t]);return(0,H.useEffect)(()=>{n&&(a||s(i))},[n,a,i]),n?[r!==void 0&&o==null?r:o,c]:[void 0,t]},Ch=p(`Input`,Am),wh=({field:e,onChange:t,readOnly:n,id:r,name:i=r,label:a,labelIcon:o,Label:s})=>{let[c,l]=Sh(i,t,{fallback:``});return(0,U.jsx)(s,{label:a||i,icon:o||(0,U.jsxs)(U.Fragment,{children:[e.type===`text`&&(0,U.jsx)(Ce,{size:16}),e.type===`number`&&(0,U.jsx)(We,{size:16})]}),readOnly:n,children:(0,U.jsx)(`input`,{className:Ch(`input`),autoComplete:`off`,type:e.type,title:a||i,name:i,value:c,onChange:t=>{if(e.type===`number`){let n=Number(t.currentTarget.value);if(e.min!==void 0&&n<e.min||e.max!==void 0&&n>e.max)return;l(n)}else l(t.currentTarget.value)},readOnly:n,tabIndex:n?-1:void 0,id:r,min:e.type===`number`?e.min:void 0,max:e.type===`number`?e.max:void 0,placeholder:e.type===`text`||e.type===`number`?e.placeholder:void 0,step:e.type===`number`?e.step:void 0})})};d(),d(),d();var Th={"ExternalInput-actions":`_ExternalInput-actions_143vl_1`,"ExternalInput-button":`_ExternalInput-button_143vl_5`,"ExternalInput--dataSelected":`_ExternalInput--dataSelected_143vl_34`,"ExternalInput--readOnly":`_ExternalInput--readOnly_143vl_41`,"ExternalInput-detachButton":`_ExternalInput-detachButton_143vl_48`,ExternalInput:`_ExternalInput_143vl_1`,ExternalInputModal:`_ExternalInputModal_143vl_118`,"ExternalInputModal-grid":`_ExternalInputModal-grid_143vl_128`,"ExternalInputModal--filtersToggled":`_ExternalInputModal--filtersToggled_143vl_139`,"ExternalInputModal-filters":`_ExternalInputModal-filters_143vl_144`,"ExternalInputModal-masthead":`_ExternalInputModal-masthead_143vl_164`,"ExternalInputModal-tableWrapper":`_ExternalInputModal-tableWrapper_143vl_173`,"ExternalInputModal-table":`_ExternalInputModal-table_143vl_173`,"ExternalInputModal-thead":`_ExternalInputModal-thead_143vl_189`,"ExternalInputModal-th":`_ExternalInputModal-th_143vl_189`,"ExternalInputModal-td":`_ExternalInputModal-td_143vl_204`,"ExternalInputModal-tr":`_ExternalInputModal-tr_143vl_210`,"ExternalInputModal-tbody":`_ExternalInputModal-tbody_143vl_217`,"ExternalInputModal--hasData":`_ExternalInputModal--hasData_143vl_244`,"ExternalInputModal-loadingBanner":`_ExternalInputModal-loadingBanner_143vl_248`,"ExternalInputModal--isLoading":`_ExternalInputModal--isLoading_143vl_265`,"ExternalInputModal-searchForm":`_ExternalInputModal-searchForm_143vl_269`,"ExternalInputModal-search":`_ExternalInputModal-search_143vl_269`,"ExternalInputModal-searchIcon":`_ExternalInputModal-searchIcon_143vl_306`,"ExternalInputModal-searchIconText":`_ExternalInputModal-searchIconText_143vl_333`,"ExternalInputModal-searchInput":`_ExternalInputModal-searchInput_143vl_343`,"ExternalInputModal-searchActions":`_ExternalInputModal-searchActions_143vl_358`,"ExternalInputModal-searchActionIcon":`_ExternalInputModal-searchActionIcon_143vl_371`,"ExternalInputModal-footerContainer":`_ExternalInputModal-footerContainer_143vl_375`,"ExternalInputModal-footer":`_ExternalInputModal-footer_143vl_375`,"ExternalInputModal-field":`_ExternalInputModal-field_143vl_388`};d(),d();var Eh=p(`Modal`,{Modal:`_Modal_g5xob_1`,"Modal--isOpen":`_Modal--isOpen_g5xob_15`,"Modal-inner":`_Modal-inner_g5xob_19`}),Dh=({children:e,onClose:t,isOpen:n})=>{let[r,i]=(0,H.useState)(null);return(0,H.useEffect)(()=>{i(document.getElementById(`puck-portal-root`))},[]),r?(0,_t.createPortal)((0,U.jsx)(`div`,{className:Eh({isOpen:n}),onClick:t,children:(0,U.jsx)(`div`,{className:Eh(`inner`),onClick:e=>e.stopPropagation(),children:e})}),r):(0,U.jsx)(`div`,{})};d(),d();var Oh=p(`Heading`,{Heading:`_Heading_97eh4_1`,"Heading--xxxxl":`_Heading--xxxxl_97eh4_12`,"Heading--xxxl":`_Heading--xxxl_97eh4_18`,"Heading--xxl":`_Heading--xxl_97eh4_22`,"Heading--xl":`_Heading--xl_97eh4_26`,"Heading--l":`_Heading--l_97eh4_30`,"Heading--m":`_Heading--m_97eh4_34`,"Heading--s":`_Heading--s_97eh4_38`,"Heading--xs":`_Heading--xs_97eh4_42`}),kh=({children:e,rank:t,size:n=`m`})=>{let r=t?`h${t}`:`span`;return(0,U.jsx)(r,{className:Oh({[n]:!0}),children:e})};d();var Ah=p(`ExternalInput`,Th),$=p(`ExternalInputModal`,Th),jh=({count:e})=>{let t=B(`field-external-result-singular`,{count:e}),n=B(`field-external-result-plural`,{count:e});return(0,U.jsx)(`span`,{className:$(`footer`),children:e===1?t:n})},Mh={},Nh=({field:e,onChange:t,value:n=null,name:r,id:i,readOnly:a})=>{let{mapProp:o=e=>e,mapRow:s=e=>e,filterFields:d}=e||{},{enabled:f}=e.cache??{enabled:!0},[p,m]=(0,H.useState)([]),[h,g]=(0,H.useState)(!1),[_,v]=(0,H.useState)(!0),y=!!d,[b,x]=(0,H.useState)(e.initialFilters||{}),[S,C]=(0,H.useState)(y),w=(0,H.useMemo)(()=>p.map(s),[p]),T=(0,H.useMemo)(()=>{let e=new Set;for(let t of w)for(let n of Object.keys(t))(typeof t[n]==`string`||typeof t[n]==`number`||(0,H.isValidElement)(t[n]))&&e.add(n);return Array.from(e)},[w]),[D,O]=(0,H.useState)(e.initialQuery||``),k=(0,H.useCallback)((t,n)=>u(null,null,function*(){v(!0);let r=`${i}-${t}-${JSON.stringify(n)}`,a;a=f&&Mh[r]?Mh[r]:yield e.fetchList({query:t,filters:n}),a&&(m(a),v(!1),f&&(Mh[r]=a))}),[i,e]),A=(0,H.useCallback)(t=>e.renderFooter?e.renderFooter(t):(0,U.jsx)(jh,{count:t.items.length}),[e.renderFooter]);(0,H.useEffect)(()=>{k(D,b)},[]);let j=B(`field-external-item`),ee=B(`field-external-search`),te=B(`field-external-togglefilters`),N=B(`field-external-selectdata`);return(0,U.jsxs)(`div`,{className:Ah({dataSelected:!!n,modalVisible:h,readOnly:a}),id:i,children:[(0,U.jsxs)(`div`,{className:Ah(`actions`),children:[(0,U.jsx)(`button`,{type:`button`,onClick:()=>g(!0),className:Ah(`button`),disabled:a,children:n?e.getItemSummary?e.getItemSummary(n):j:(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(M,{size:`16`}),(0,U.jsx)(`span`,{children:e.placeholder})]})}),n&&(0,U.jsx)(`button`,{type:`button`,className:Ah(`detachButton`),onClick:()=>{t(null)},disabled:a,children:(0,U.jsx)(L,{size:16})})]}),(0,U.jsx)(Dh,{onClose:()=>g(!1),isOpen:h,children:(0,U.jsxs)(`form`,{className:$({isLoading:_,loaded:!_,hasData:w.length>0,filtersToggled:S}),onSubmit:e=>{e.preventDefault(),e.stopPropagation(),k(D,b)},children:[(0,U.jsx)(`div`,{className:$(`masthead`),children:e.showSearch?(0,U.jsxs)(`div`,{className:$(`searchForm`),children:[(0,U.jsxs)(`label`,{className:$(`search`),children:[(0,U.jsx)(`span`,{className:$(`searchIconText`),children:ee}),(0,U.jsx)(`div`,{className:$(`searchIcon`),children:(0,U.jsx)(ue,{size:`18`})}),(0,U.jsx)(`input`,{className:$(`searchInput`),name:`q`,type:`search`,placeholder:e.placeholder,onChange:e=>{O(e.currentTarget.value)},autoComplete:`off`,value:D})]}),(0,U.jsxs)(`div`,{className:$(`searchActions`),children:[(0,U.jsx)(km,{type:`submit`,loading:_,fullWidth:!0,children:ee}),y&&(0,U.jsx)(`div`,{className:$(`searchActionIcon`),children:(0,U.jsx)(Ee,{type:`button`,title:te,onClick:e=>{e.preventDefault(),e.stopPropagation(),C(!S)},children:(0,U.jsx)(de,{size:20})})})]})]}):(0,U.jsx)(kh,{rank:`2`,size:`xs`,children:e.placeholder||N})}),(0,U.jsxs)(`div`,{className:$(`grid`),children:[y&&(0,U.jsx)(`div`,{className:$(`filters`),children:y&&Object.keys(d).map(e=>{let t=d[e];return(0,U.jsx)(`div`,{className:$(`field`),children:(0,U.jsx)(Mm,{label:t.label||e,children:(0,U.jsx)($h,{field:t,id:`external_field_${e}_filter`,value:b[e],onChange:t=>{x(n=>{let r=l(c({},n),{[e]:t});return k(D,r),r})}})})},e)})}),(0,U.jsxs)(`div`,{className:$(`tableWrapper`),children:[(0,U.jsxs)(`table`,{className:$(`table`),children:[(0,U.jsx)(`thead`,{className:$(`thead`),children:(0,U.jsx)(`tr`,{className:$(`tr`),children:T.map(e=>(0,U.jsx)(`th`,{className:$(`th`),style:{textAlign:`left`},children:e},e))})}),(0,U.jsx)(`tbody`,{className:$(`tbody`),children:w.map((e,n)=>(0,U.jsx)(`tr`,{style:{whiteSpace:`nowrap`},className:$(`tr`),onClick:()=>{t(o(p[n])),g(!1)},children:T.map(t=>(0,U.jsx)(`td`,{className:$(`td`),children:e[t]},t))},n))})]}),(0,U.jsx)(`div`,{className:$(`loadingBanner`),children:(0,U.jsx)(E,{size:24})})]})]}),(0,U.jsx)(`div`,{className:$(`footerContainer`),children:(0,U.jsx)(A,{items:w})})]})})]})},Ph=({field:e,onChange:t,id:n,name:r=n,label:i,labelIcon:a,Label:o,readOnly:s})=>{let d=bh(r),f=e,p=e,m=B(`field-external-selectdata`);return(0,H.useEffect)(()=>{p.adaptor&&console.error("Warning: The `adaptor` API is deprecated. Please use updated APIs on the `external` field instead. This will be a breaking change in a future release.")},[]),e.type===`external`?(0,U.jsx)(o,{label:i||r,icon:a||(0,U.jsx)(M,{size:16}),el:`div`,children:(0,U.jsx)(Nh,{name:r,field:l(c({},f),{placeholder:p.adaptor?.name?`Select from ${p.adaptor.name}`:f.placeholder||m,mapProp:p.adaptor?.mapProp||f.mapProp,mapRow:f.mapRow,fetchList:p.adaptor?.fetchList?()=>u(null,null,function*(){return yield p.adaptor.fetchList(p.adaptorParams)}):f.fetchList}),onChange:t,value:d,id:n,readOnly:s})}):null};d();var Fh=p(`Input`,Am),Ih=({field:e,onChange:t,readOnly:n,id:r,name:i=r,label:a,labelIcon:o,Label:s})=>{let c=bh(i);return e.type!==`radio`||!e.options?null:(0,U.jsx)(s,{icon:o||(0,U.jsx)(ve,{size:16}),label:a||i,readOnly:n,el:`div`,children:(0,U.jsx)(`div`,{className:Fh(`radioGroupItems`),id:r,children:e.options.map(e=>(0,U.jsxs)(`label`,{className:Fh(`radio`),children:[(0,U.jsx)(`input`,{type:`radio`,className:Fh(`radioInput`),value:JSON.stringify({value:e.value}),name:i,onChange:e=>{t(JSON.parse(e.target.value).value)},disabled:n,checked:c===e.value}),(0,U.jsx)(`div`,{className:Fh(`radioInner`),children:e.label||e.value?.toString()})]},e.label+e.value))})})};d();var Lh=p(`Input`,Am),Rh=({field:e,onChange:t,label:n,labelIcon:r,Label:i,id:a,name:o=a,readOnly:s})=>{let c=bh(o);return e.type!==`select`||!e.options?null:(0,U.jsx)(i,{label:n||o,icon:r||(0,U.jsx)(me,{size:16}),readOnly:s,children:(0,U.jsxs)(`div`,{className:Lh(`select`),children:[(0,U.jsx)(`select`,{id:a,title:n||o,className:Lh(`input`),disabled:s,onChange:e=>{t(JSON.parse(e.target.value).value)},value:JSON.stringify({value:c}),children:e.options.map(e=>(0,U.jsx)(`option`,{label:e.label,value:JSON.stringify({value:e.value})},e.label+JSON.stringify(e.value)))}),(0,U.jsx)(me,{size:18,className:Lh(`selectIcon`)})]})})};d();var zh=p(`Input`,Am),Bh=({field:e,onChange:t,readOnly:n,id:r,name:i=r,label:a,labelIcon:o,Label:s})=>{let[c,l]=Sh(i,t,{fallback:``});return(0,U.jsx)(s,{label:a||i,icon:o||(0,U.jsx)(Ce,{size:16}),readOnly:n,children:(0,U.jsx)(`textarea`,{id:r,className:zh(`input`),autoComplete:`off`,name:i,value:c,onChange:e=>l(e.currentTarget.value),readOnly:n,tabIndex:n?-1:void 0,rows:5,placeholder:e.type===`textarea`?e.placeholder:void 0})})};d(),d();var Vh=(0,H.memo)(e=>(0,U.jsx)(mt,l(c({},e),{editor:null,menu:(0,U.jsx)(Xe,{field:e.field,editor:null,editorState:null,readOnly:e.readOnly??!1}),children:(0,U.jsx)(`div`,{className:`rich-text`,dangerouslySetInnerHTML:{__html:e.content},contentEditable:!0})})));Vh.displayName=`EditorFallback`;var Hh=(0,H.lazy)(()=>i(()=>import(`./Editor-44C53YAG-Bid-7w8j.js`).then(e=>({default:e.Editor})),__vite__mapDeps([15,1,2,3,4,13,11,14,5,6,7,8,9,10]))),Uh=({onChange:e,readOnly:t=!1,id:n,name:r=n,label:i,labelIcon:a,Label:o,field:s})=>{let l={onChange:e,content:bh(r),readOnly:t,field:s,id:n,name:r};return(0,U.jsx)(U.Fragment,{children:(0,U.jsx)(o,{label:i||r,icon:a||(0,U.jsx)(Ce,{size:16}),readOnly:t,el:`div`,children:(0,U.jsx)(H.Suspense,{fallback:(0,U.jsx)(Vh,c({},l)),children:(0,U.jsx)(Hh,c({},l))})})})};d(),d();var Wh=p(`ObjectField`,{ObjectField:`_ObjectField_c5reb_1`,"ObjectField-fieldset":`_ObjectField-fieldset_c5reb_10`}),Gh=({field:e,onChange:t,id:n,name:r=n,label:i,labelIcon:a,Label:o,readOnly:s})=>{let{localName:u=r}=dh(),d=zm(),f=V(e=>e.permissions.getPermissions({item:e.selectedItem}).edit),p=()=>ph(d.getState(),r)??{};return e.type!==`object`||!e.objectFields?null:(0,U.jsx)(o,{label:i||r,icon:a||(0,U.jsx)(fe,{size:16}),el:`div`,readOnly:s,children:(0,U.jsx)(`div`,{className:Wh(),children:(0,U.jsx)(`fieldset`,{className:Wh(`fieldset`),children:Object.keys(e.objectFields).map(i=>{let a=e.objectFields[i],o=`${u}.${i}`;return(0,U.jsx)(mh,{id:`${n}_${i}`,name:r,subName:i,localName:u,field:a,forceReadOnly:!f,onChange:(e,n,r)=>{let i=p();i[r]!==e&&t(l(c({},i),{[r]:e}),n)}},o)})})})})};d();var Kh=()=>{if(H.useId!==void 0)return H.useId();let[e]=(0,H.useState)(te());return e},qh=p(`Input`,Am),Jh=p(`InputWrapper`,Am),Yh={array:yh,external:Ph,object:Gh,select:Rh,textarea:Bh,radio:Ih,text:wh,number:wh,richtext:Uh};function Xh(e){let t=V(e=>e.dispatch),n=V(e=>e.overrides),r=V(zt(e=>e.selectedItem?.readOnly)),i=(0,H.useContext)(uh),{id:a,Label:o=Nm}=e,s=e.field,u=s.label,d=s.labelIcon,f=Kh(),p=a||f,m=(0,H.useMemo)(()=>l(c({},n.fieldTypes),{custom:n.fieldTypes?.custom,array:n.fieldTypes?.array||Yh.array,external:n.fieldTypes?.external||Yh.external,object:n.fieldTypes?.object||Yh.object,select:n.fieldTypes?.select||Yh.select,textarea:n.fieldTypes?.textarea||Yh.textarea,radio:n.fieldTypes?.radio||Yh.radio,text:n.fieldTypes?.text||Yh.text,number:n.fieldTypes?.number||Yh.number,richtext:n.fieldTypes?.richtext||Yh.richtext}),[n]),h=s.type===`custom`||!!n.fieldTypes?.[s.type],g=e.name??p,_=zm(),[v,y]=Sh(g,(0,H.useMemo)(()=>h?(t,n)=>{var r;(r=e.onChange)==null||r.call(e,t,n),_.setState(wm(_.getState(),g,t))}:e.onChange,[h,e.onChange,g,_]),{tracked:h}),b=(0,H.useMemo)(()=>l(c({},e),{field:s,label:u,labelIcon:d,Label:o,id:p,value:v,onChange:y}),[e,s,u,d,o,p,v,y]),x=(0,H.useCallback)(e=>{b.name&&(e.target.nodeName===`INPUT`||e.target.nodeName===`TEXTAREA`)&&(e.stopPropagation(),t({type:`setUi`,ui:{field:{focus:b.name}}}))},[b.name]),S=(0,H.useCallback)(e=>{`name`in e.target&&t({type:`setUi`,ui:{field:{focus:null}}})},[]),C=(0,H.useMemo)(()=>s.type!==`custom`&&s.type!==`slot`?Yh[s.type]:e=>null,[s.type]),w=s.type===`custom`?s.key:void 0,T=(0,H.useMemo)(()=>{if(s.type===`custom`&&!m[s.type])return s.render?s.render:null;if(s.type!==`slot`)return m[s.type]},[s.type,w,m]),{visible:E=!0}=e.field;if(!E||s.type===`slot`)return null;if(!T)throw Error(`Field type for ${s.type} did not exist.`);return(0,U.jsx)(uh.Provider,{value:{readOnlyFields:i.readOnlyFields||r||{},localName:i.localName??b.name},children:(0,U.jsx)(`div`,{className:Jh(),onFocus:x,onBlur:S,onClick:e=>{e.stopPropagation()},children:(0,U.jsx)(T,l(c({},b),{children:(0,U.jsx)(C,c({},b))}))})})}function Zh(e){return(0,U.jsx)(Xh,c({},e))}function Qh(e){var t=e,{value:n}=t,r=f(t,[`value`]);let i=(0,H.useMemo)(()=>e=>(0,U.jsx)(`div`,l(c({},e),{className:qh({readOnly:r.readOnly})})),[r.readOnly]),a=zm(),o=(0,H.useCallback)(e=>{r.id&&(a.setState({[r.id]:e}),r.onChange(e))},[a,r.onChange,r.id]);return(0,H.useEffect)(()=>{r.id&&a.setState({[r.id]:n})},[r.id,n,a]),(0,U.jsx)(Xh,l(c({},r),{onChange:o,Label:i}))}function $h(e){let t=Kh();return e.field.type===`slot`?null:(0,U.jsx)(Rm.Provider,{value:{[t]:e.value},children:(0,U.jsx)(Qh,l(c({},e),{id:t}))})}d(),d(),d(),d();var eg={DraggableComponent:`_DraggableComponent_1627v_1`,"DraggableComponent-overlayWrapper":`_DraggableComponent-overlayWrapper_1627v_6`,"DraggableComponent-overlay":`_DraggableComponent-overlay_1627v_6`,"DraggableComponent-loadingOverlay":`_DraggableComponent-loadingOverlay_1627v_38`,"DraggableComponent--hover":`_DraggableComponent--hover_1627v_54`,"DraggableComponent--isSelected":`_DraggableComponent--isSelected_1627v_72`,"DraggableComponent-actionsOverlay":`_DraggableComponent-actionsOverlay_1627v_89`,"DraggableComponent-actions":`_DraggableComponent-actions_1627v_89`,"DraggableComponent-actionsAction":`_DraggableComponent-actionsAction_1627v_111`};d();function tg(e){let t={x:0,y:0},n=e;for(;n&&n!==document.documentElement;){let e=n.parentElement;e&&(t.x+=e.scrollLeft,t.y+=e.scrollTop),n=e}return t}d();var ng=(0,H.createContext)(null),rg=(0,H.createContext)(P(()=>({zoneDepthIndex:{},nextZoneDepthIndex:{},areaDepthIndex:{},nextAreaDepthIndex:{},draggedItem:null,previewIndex:{},enabledIndex:{},hoveringComponent:null,registerRootVirtualizer:()=>{},unregisterRootVirtualizer:()=>{},scrollToComponent:()=>!1}))),ig=({children:e,store:t})=>(0,U.jsx)(rg.Provider,{value:t,children:e}),ag=({children:e,value:t})=>{let n=V(e=>e.dispatch),r=(0,H.useCallback)(e=>{n({type:`registerZone`,zone:e})},[n]),i=(0,H.useMemo)(()=>c({registerZone:r},t),[t]);return(0,U.jsx)(U.Fragment,{children:i&&(0,U.jsx)(ng.Provider,{value:i,children:e})})};d();var og=(e,t=[])=>{let n=z();return(0,H.useCallback)(()=>{let t=()=>{},r=n=>{n?e(!1):(setTimeout(()=>{e(!0)},0),t&&t())},i=n.getState().state.ui.isDragging;return r(i),i&&(t=n.subscribe(e=>e.state.ui.isDragging,e=>{r(e)})),t},[n,...t])};d(),d(),d();var sg=()=>{if(typeof window>`u`)return;let e=document.querySelector(`#preview-frame`);return e?.tagName===`IFRAME`?e.contentDocument||document:e?.ownerDocument||document};d(),d();var cg=e=>typeof CSS<`u`&&typeof CSS.escape==`function`?CSS.escape(e):e,lg=e=>`[data-puck-component="${cg(e)}"]`,ug=e=>`[data-puck-dropzone="${cg(e)}"]`,dg={duration:250,easing:`ease`},fg=10,pg=e=>e.defaultView?.matchMedia(`(prefers-reduced-motion: reduce)`).matches??!1,mg=(e,{zones:t,itemId:n,targetZone:r,getExpectedOrder:i,initialExpectedOrder:a=[]},o)=>{let s=new Set(a),c=0,l=()=>{let a=e.querySelector(ug(r)),u=i(),d=n??u.find(e=>!s.has(e)),f=d?a?.querySelector(`:scope > ${lg(d)}:not([data-dnd-dragging]):not([data-dnd-placeholder])`)??null:null,p=a?Array.from(a.querySelectorAll(`:scope > [data-puck-component]:not([data-dnd-dragging]):not([data-dnd-placeholder])`)).map(e=>e.getAttribute(`data-puck-component`)):[],m=new Set(p),h=u.filter(e=>m.has(e)),g=p.length===h.length&&p.every((e,t)=>e===h[t]),_=t.every(t=>t===r||!d||!e.querySelector(`${ug(t)} > ${lg(d)}`));(!f||!g||!_)&&c<fg?(c++,requestAnimationFrame(l)):o(f)};requestAnimationFrame(l)},hg=(e,t)=>{let n={x:0,y:0,scaleX:1,scaleY:1},r=e.ownerDocument.defaultView?.frameElement;for(;r&&r!==t;){let e=r.getBoundingClientRect(),t=r.offsetWidth?e.width/r.offsetWidth:1,i=r.offsetHeight?e.height/r.offsetHeight:1;n.x+=e.left,n.y+=e.top,n.scaleX*=t,n.scaleY*=i,r=r.ownerDocument.defaultView?.frameElement}return n},gg=(e,t)=>{let n=e.getBoundingClientRect();if(e.ownerDocument===t)return n;let r=hg(e,t.defaultView?.frameElement??null);return{left:n.left*r.scaleX+r.x,top:n.top*r.scaleY+r.y,width:n.width*r.scaleX,height:n.height*r.scaleY}},_g=({element:e,feedbackElement:t,placeholder:n,translate:r})=>{if(pg(t.ownerDocument))return;let i=n??e,a={frameTransform:t.ownerDocument===i.ownerDocument?null:void 0},o=new pc(t,a),s=new pc(i,a),c=Js(zs(t).translate)??r,l={x:c.x-(o.center.x-s.center.x),y:c.y-(o.center.y-s.center.y)};return t.setAttribute(`data-dnd-dropping`,``),t.animate({translate:[`${c.x}px ${c.y}px 0`,`${l.x}px ${l.y}px 0`]},dg).finished.catch(()=>void 0).then(()=>{t.removeAttribute(`data-dnd-dropping`)})},vg=({feedbackElement:e,itemId:t,targetZone:n,getExpectedOrder:r})=>{let i=e.ownerDocument,a=sg()??i;if(pg(i))return;let o=e.getBoundingClientRect(),s=r(),u=e.cloneNode(!0);u.removeAttribute(`id`),u.removeAttribute(`popover`),u.removeAttribute(`data-puck-component`),u.removeAttribute(`data-puck-dnd`),u.removeAttribute(`data-dnd-dragging`),u.setAttribute(`inert`,`true`),Object.assign(u.style,{position:`fixed`,left:`${o.left}px`,top:`${o.top}px`,width:`${o.width}px`,height:`${o.height}px`,margin:`0`,overflow:`hidden`,pointerEvents:`none`,transform:`none`,transition:`none`,translate:`none`,zIndex:`2147483647`});let d=a.createElement(`style`);d.textContent=`
    ${t?`${lg(t)} { visibility: hidden !important; }`:``}
    [data-puck-overlay] { opacity: 0 !important; }
  `,a.head.appendChild(d),i.body.appendChild(u);let f=()=>{u.remove(),d.remove()};mg(a,{zones:[n],itemId:t,targetZone:n,getExpectedOrder:r,initialExpectedOrder:s},e=>{if(!e){f();return}let n=e.getAttribute(`data-puck-component`);!t&&n&&(d.textContent+=`
          ${lg(n)} { visibility: hidden !important; }
        `);let r=gg(e,i);u.animate({left:[`${o.left}px`,`${r.left}px`],top:[`${o.top}px`,`${r.top}px`],width:[`${o.width}px`,`${r.width}px`],height:[`${o.height}px`,`${r.height}px`]},l(c({},dg),{fill:`forwards`})).finished.catch(()=>void 0).then(f)})},yg=(e,t)=>{let n=e.source.manager?.dragOperation;if(!((n?.canceled??!1)||n?.target?.type===`void`)&&t)vg(l(c({},t),{feedbackElement:e.feedbackElement}));else return _g(e)};d();var bg=(e,t)=>e.indexes.zones[t]?.contentIds??[],xg=(e,t)=>{let n=z();return(0,H.useCallback)(r=>{let i=Object.values(e.getState().previewIndex??{}),a=t?i.find(e=>e?.props.id===t&&!e.ghost):i.find(e=>e?.type===`insert`),o=t?a?.linePlaceholder||a?.type===`insert`:!!a;return yg(r,a&&o?{itemId:a.type===`move`?t:void 0,targetZone:a.zone,getExpectedOrder:()=>bg(n.getState().state,a.zone)}:void 0)},[n,e,t])};d();function Sg(e,t){typeof e==`function`?e(t):e&&typeof e==`object`&&`current`in e&&(e.current=t)}function Cg(e,t){e.forEach(e=>{Sg(e,t)})}var wg=p(`DraggableComponent`,eg),Tg=100,Eg=8,Dg=Eg*6.5,Og=-(Dg-8),kg=Eg,Ag=({label:e,children:t,parentAction:n})=>(0,U.jsxs)(je,{children:[(0,U.jsxs)(je.Group,{children:[n,e&&(0,U.jsx)(je.Label,{label:e})]}),(0,U.jsx)(je.Group,{children:t})]}),jg=({children:e})=>(0,U.jsx)(U.Fragment,{children:e}),Mg=({children:e,depth:t,componentType:n,id:r,index:i,zoneCompound:a,isLoading:o=!1,isSelected:s=!1,debug:u,label:d,autoDragAxis:f,userDragAxis:p,inDroppableZone:m=!0,itemRef:h})=>{let g=V(e=>e.selectedItem?.props.id===r?e.zoomConfig.zoom:1),_=V(e=>e._experimentalFullScreenCanvas),v=V(e=>e.overrides),y=V(e=>e.dispatch),b=V(e=>e.iframe),x=(0,H.useRef)(0),S=(0,H.useContext)(ng),[C,w]=(0,H.useState)({}),T=(0,H.useCallback)((e,t)=>{var n;(n=S?.registerLocalZone)==null||n.call(S,e,t),w(n=>l(c({},n),{[e]:t}))},[w]),D=(0,H.useCallback)(e=>{var t;(t=S?.unregisterLocalZone)==null||t.call(S,e),w(t=>{let n=c({},t);return delete n[e],n})},[w]),O=Object.values(C).filter(Boolean).length>0,k=V(zt(e=>e.state.indexes.nodes[r]?.path)),A=V(zt(e=>{let t=N({index:i,zone:a},e.state);return e.permissions.getPermissions({item:t})})),j=(0,H.useContext)(rg),ee=z(),[te,M]=(0,H.useState)(p||f),P=(0,H.useMemo)(()=>ah(te),[te]),F=xg(j,r),{ref:I,isDragging:ne,sortable:L}=Up({id:r,index:i,group:a,type:`component`,data:{areaId:S?.areaId,zone:a,index:i,componentType:n,containsActiveZone:O,depth:t,path:k||[],inDroppableZone:m},collisionPriority:t,collisionDetector:P,transition:{duration:200,easing:`cubic-bezier(0.2, 0, 0, 1)`},plugins:e=>[...e,iu.configure({feedback:`clone`,dropAnimation:F})]});(0,H.useEffect)(()=>{let e=j.getState().enabledIndex[a];L.droppable.disabled=!e,L.draggable.disabled=!A.drag;let t=j.subscribe(e=>{L.droppable.disabled=!e.enabledIndex[a]});return R.current&&!A.drag?(R.current.setAttribute(`data-puck-disabled`,``),()=>{var e;(e=R.current)==null||e.removeAttribute(`data-puck-disabled`),t()}):t},[A.drag,a]);let[,re]=(0,H.useState)(0),R=(0,H.useRef)(null),ie=(0,H.useCallback)(e=>{I(e),R.current!==e&&(R.current=e,re(e=>e+1),h&&Cg([h],e))},[h,I]),[ae,oe]=(0,H.useState)();(0,H.useEffect)(()=>{oe(b.enabled?R.current?.ownerDocument.body:R.current?.closest(`[data-puck-preview]`)??document.body)},[b.enabled]);let se=(0,H.useCallback)(()=>{if(!R.current)return;let e=R.current,t=e.getBoundingClientRect(),n=b.enabled?null:e.closest(`[data-puck-preview]`),r=(()=>{let t=e;for(;t&&t!==document.documentElement;){if(getComputedStyle(t).position===`fixed`)return!0;t=t.parentElement}return!1})(),i=n?.getBoundingClientRect(),a=n?tg(n):{x:0,y:0},o=r?{x:0,y:0}:tg(e),s=r?{x:0,y:0}:{x:o.x-a.x-(i?.left??0),y:o.y-a.y-(i?.top??0)};return{left:`${t.left+s.x}px`,top:`${t.top+s.y}px`,height:`${t.height}px`,width:`${t.width}px`,position:r?`fixed`:void 0}},[b.enabled]),[ce,le]=(0,H.useState)(),ue=(0,H.useRef)(null),de=(0,H.useRef)(null),fe=(0,H.useCallback)(()=>{le(se()),h&&Cg([h],R.current)},[se,h]),pe=(0,H.useCallback)(()=>{de.current??=requestAnimationFrame(()=>{de.current=null,fe()})},[fe]);(0,H.useEffect)(()=>()=>{de.current!=null&&(cancelAnimationFrame(de.current),de.current=null)},[]),(0,H.useEffect)(()=>{if(R.current){let e=new ResizeObserver(()=>{pe()});return e.observe(R.current),()=>{e.disconnect()}}},[pe,h]);let me=V(e=>e.nodes.registerNode),he=V(e=>e.nodes.unregisterNode),ge=(0,H.useCallback)(()=>{Me(!1)},[]),_e=(0,H.useCallback)(()=>{Me(!0)},[]),ve=(0,H.useRef)({sync:()=>null,hideOverlay:()=>null,showOverlay:()=>null});(0,H.useLayoutEffect)(()=>{ve.current.sync=fe,ve.current.hideOverlay=ge,ve.current.showOverlay=_e},[ge,_e,fe]),(0,H.useEffect)(()=>(me(r,ve.current),()=>{he(r)}),[r,me,he]);let ye=(0,H.useMemo)(()=>v.actionBar||Ag,[v.actionBar]),Se=(0,H.useMemo)(()=>v.componentOverlay||jg,[v.componentOverlay]),Ce=(0,H.useCallback)(e=>{j.getState().draggedItem||(e.target.closest(`[data-puck-overlay-portal]`)||e.stopPropagation(),y(_?{type:`setUi`,ui:{itemSelector:s?null:{index:i,zone:a}}}:{type:`setUi`,ui:{itemSelector:{index:i,zone:a}}}))},[i,a,r,s,_]),we=(0,H.useCallback)(()=>{let{nodes:e,zones:t}=ee.getState().state.indexes,n=e[r],i=n?.parentId?e[n?.parentId]:null;if(!i||!n.parentId)return;let a=`${i.parentId}:${i.zone}`,o=t[a].contentIds.indexOf(n.parentId);y({type:`setUi`,ui:{itemSelector:{zone:a,index:o}}})},[S,k]),Te=(0,H.useCallback)(()=>{y({type:`duplicate`,sourceIndex:i,sourceZone:a})},[i,a]),Ee=(0,H.useCallback)(()=>{y({type:`remove`,index:i,zone:a})},[i,a]),[De,Oe]=(0,H.useState)(!1),ke=Fm(rg,e=>e.hoveringComponent===r);(0,H.useEffect)(()=>{if(!R.current)return;let e=R.current,t=e=>{j.getState().draggedItem?Oe(!!ne):Oe(!0),e.stopPropagation()},n=e=>{e.stopPropagation(),Oe(!1)};return e.setAttribute(`data-puck-component`,r),e.setAttribute(`data-puck-dnd`,r),e.style.position=`relative`,e.addEventListener(`click`,Ce),e.addEventListener(`mouseover`,t),e.addEventListener(`mouseout`,n),()=>{e.removeAttribute(`data-puck-component`),e.removeAttribute(`data-puck-dnd`),e.removeEventListener(`click`,Ce),e.removeEventListener(`mouseover`,t),e.removeEventListener(`mouseout`,n)}},[R.current,Ce,O,a,r,ne,m]);let[Ae,Me]=(0,H.useState)(!1),[Ne,Pe]=(0,H.useState)(!0),[Fe,Ie]=(0,H.useTransition)();(0,H.useEffect)(()=>{Ie(()=>{De||ke||s?(pe(),Me(!0),ze(!1)):Me(!1)})},[De,ke,s,b]);let[Re,ze]=(0,H.useState)(!1),Be=og(e=>{e?Ie(()=>{fe(),Pe(!0)}):Pe(!1)});(0,H.useEffect)(()=>{ne&&ze(!0)},[ne]),(0,H.useEffect)(()=>{if(Re)return Be()},[Re,Be]),(0,H.useEffect)(()=>{if(!Ne||!(s||ne))return;let e=R.current;if(!e)return;let t=e.ownerDocument,n=t.defaultView;if(!n)return;x.current=0,pe();let r=()=>pe(),i=()=>pe();t.addEventListener(`scroll`,r,!0),n.addEventListener(`resize`,i);let a=0,o=e=>{if(e-x.current>=Tg){x.current=e;let t=R.current;if(t){let e=t.getBoundingClientRect(),n=ue.current;(!n||Math.abs(e.x-n.x)>.5||Math.abs(e.y-n.y)>.5||Math.abs(e.width-n.width)>.5||Math.abs(e.height-n.height)>.5)&&(ue.current=e,pe())}}a=requestAnimationFrame(o)};return a=requestAnimationFrame(o),()=>{t.removeEventListener(`scroll`,r,!0),n.removeEventListener(`resize`,i),cancelAnimationFrame(a)}},[Ne,s,ne,pe]);let Ve=(0,H.useCallback)(e=>{if(e&&e.ownerDocument.defaultView){let t=e.getBoundingClientRect(),n=t.x<0,r=t.y<0;n&&(e.style.transformOrigin=`left top`,e.style.left=`0px`),r&&(e.style.top=`12px`,n||(e.style.transformOrigin=`right top`))}},[g]),He=(0,H.useRef)(null);(0,H.useEffect)(()=>{Ve(He.current)},[He.current,Ve]),(0,H.useEffect)(()=>{if(p)M(p);else{if(R.current){let e=window.getComputedStyle(R.current);if(e.display===`inline`||e.display===`inline-block`){M(`x`);return}}M(f)}},[R,p,f]);let Ue=B(`action-selectparent`),We=B(`action-duplicate`),Ge=B(`action-delete`),Ke=(0,H.useMemo)(()=>S?.areaId&&S?.areaId!==`root`&&(0,U.jsx)(je.Action,{onClick:we,label:Ue,children:(0,U.jsx)(be,{size:16})}),[S?.areaId,Ue]),qe=(0,H.useMemo)(()=>l(c({},S),{areaId:r,zoneCompound:a,index:i,depth:t+1,registerLocalZone:T,unregisterLocalZone:D}),[S,r,a,i,t,T,D]),Je=V(e=>e.currentRichText?.inlineComponentId===r?e.currentRichText:null),Ye=A.duplicate||A.delete;return(0,U.jsxs)(ag,{value:qe,children:[Ne&&Ae&&(0,_t.createPortal)((0,U.jsxs)(`div`,{className:wg({isSelected:s,isDragging:ne,hover:De||ke}),style:c({},ce),"data-puck-overlay":!0,children:[u,o&&(0,U.jsx)(`div`,{className:wg(`loadingOverlay`),children:(0,U.jsx)(E,{})}),(0,U.jsx)(`div`,{className:wg(`actionsOverlay`),style:{top:Dg/g},children:(0,U.jsx)(`div`,{className:wg(`actions`),style:{transform:`scale(${1/g}`,top:Og/g,right:0,paddingLeft:kg,paddingRight:kg},ref:He,children:(0,U.jsxs)(ye,{parentAction:Ke,label:d,children:[Je&&(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(gt,{editor:Je.editor,field:Je.field,inline:!0,readOnly:!1}),Ye&&(0,U.jsx)(je.Separator,{})]}),A.duplicate&&(0,U.jsx)(je.Action,{onClick:Te,label:We,children:(0,U.jsx)(xe,{className:wg(`actionsAction`)})}),A.delete&&(0,U.jsx)(je.Action,{onClick:Ee,label:Ge,children:(0,U.jsx)(Le,{className:wg(`actionsAction`)})})]})})}),(0,U.jsx)(`div`,{className:wg(`overlayWrapper`),children:(0,U.jsx)(Se,{componentId:r,componentType:n,hover:De,isSelected:s,children:(0,U.jsx)(`div`,{className:wg(`overlay`)})})})]}),ae||document.body),e(ie)]})};d();var Ng={DropZone:`_DropZone_wc2ks_1`,"DropZone--hasChildren":`_DropZone--hasChildren_wc2ks_11`,"DropZone--isAreaSelected":`_DropZone--isAreaSelected_wc2ks_24`,"DropZone--hoveringOverArea":`_DropZone--hoveringOverArea_wc2ks_25`,"DropZone--isRootZone":`_DropZone--isRootZone_wc2ks_25`,"DropZone-item":`_DropZone-item_wc2ks_39`,"DropZone-linePlaceholder":`_DropZone-linePlaceholder_wc2ks_43`,"DropZone-hitbox":`_DropZone-hitbox_wc2ks_55`,"DropZone--isEnabled":`_DropZone--isEnabled_wc2ks_63`,"DropZone--isAnimating":`_DropZone--isAnimating_wc2ks_74`};d();var Pg=(e,{allow:t,disallow:n})=>{if(!e)return!0;let r=new Set(t),i=new Set(n);return n?(i.has(e)&&r.has(e)&&i.delete(e),!i.has(e)):!t||r.has(e)};d(),d();var Fg={Drawer:`_Drawer_1n90m_1`,"Drawer-draggable":`_Drawer-draggable_1n90m_8`,"Drawer-draggableBg":`_Drawer-draggableBg_1n90m_12`,"DrawerItem-draggable":`_DrawerItem-draggable_1n90m_22`,"DrawerItem--disabled":`_DrawerItem--disabled_1n90m_38`,DrawerItem:`_DrawerItem_1n90m_22`,"Drawer--isDraggingFrom":`_Drawer--isDraggingFrom_1n90m_48`,"DrawerItem-name":`_DrawerItem-name_1n90m_72`};d(),d(),d();function Ig(e,t){let n=setTimeout(e,t);return()=>clearTimeout(n)}function Lg(e,t){let n=()=>performance.now(),r,i=0;return function(...a){let o=n(),s=this;o-i>=t?(e.apply(s,a),i=o):(r?.(),r=Ig(()=>{e.apply(s,a),i=n()},t-(o-i)))}}d();var Rg=class{constructor(e,t){this.scaleFactor=1,this.frameEl=null,this.frameRect=null,this.target=e,this.original=t,this.frameEl=document.querySelector(`iframe#preview-frame`),this.frameEl&&(this.frameRect=this.frameEl.getBoundingClientRect(),this.scaleFactor=this.frameRect.width/(this.frameEl.contentWindow?.innerWidth||1))}get x(){return this.original.x}get y(){return this.original.y}get global(){return document!==this.target.ownerDocument&&this.frameRect?{x:this.x*this.scaleFactor+this.frameRect.left,y:this.y*this.scaleFactor+this.frameRect.top}:this.original}get frame(){return document===this.target.ownerDocument&&this.frameRect?{x:(this.x-this.frameRect.left)/this.scaleFactor,y:(this.y-this.frameRect.top)/this.scaleFactor}:this.original}};d();var zg=typeof PointerEvent<`u`?PointerEvent:Event,Bg=class extends zg{constructor(e,t){super(e,t),this._originalTarget=null,this.originalTarget=t.originalTarget}set originalTarget(e){this._originalTarget=e}get originalTarget(){return this._originalTarget}},Vg=e=>e.sort((e,t)=>{let n=e.data,r=t.data;return n.depth>r.depth?1:r.depth>n.depth?-1:0}),Hg=e=>{let t=e?.id;if(!e)return null;if(e.type===`component`){let n=e.data;t=n.containsActiveZone?null:n.zone}else if(e.type===`void`)return`void`;return t},Ug=6,Wg=(e,t)=>{let n=[],r=e.target.ownerDocument.elementsFromPoint(e.x,e.y),i=r.find(e=>e.getAttribute(`data-puck-preview`)),a=r.find(e=>e.getAttribute(`data-puck-drawer`));if(a&&(r=[a]),i){let t=sg();t&&(r=t.elementsFromPoint(e.frame.x,e.frame.y))}if(r)for(let i=0;i<r.length;i++){let a=r[i],o=a.getAttribute(`data-puck-dropzone`),s=a.getAttribute(`data-puck-dnd`),c=a.hasAttribute(`data-puck-dnd-void`);if(Ug&&(o||s)&&!c){let t=a.getBoundingClientRect(),n={left:t.left+Ug,right:t.right-Ug,top:t.top+Ug,bottom:t.bottom-Ug};if(e.frame.x<n.left||e.frame.x>n.right||e.frame.y>n.bottom||e.frame.y<n.top)continue}if(o){let e=t.registry.droppables.get(o);e&&n.push(e)}if(s){let e=t.registry.droppables.get(s);e&&n.push(e)}}return n},Gg=(e,t)=>{let n=Wg(e,t);if(n.length>0){let e=Vg(n),r=t.dragOperation.source,i=e.findIndex(e=>e.id===r?.id),a=r?.id,o=[...e];a&&i>-1&&o.splice(i,1),o=o.filter(e=>{let t=e.data;if(a&&i>-1&&t.path.indexOf(a)>-1)return!1;if(e.type===`dropzone`){let t=e.data;if(!t.isDroppableTarget||t.areaId===a)return!1}else if(e.type===`component`&&!e.data.inDroppableZone)return!1;return!0}),o.reverse();let s=o[0];if(!s)return{zone:null,area:null};let c=s.data,l=`containsActiveZone`in c;return{zone:Hg(s),area:l&&c.containsActiveZone?o[0].id:o[0]?.data.areaId}}return{zone:T,area:se}},Kg=({onChange:e},t)=>class extends Oi{constructor(n,r){super(n),typeof window<`u`&&this.registerEffect(()=>{let r=Lg(r=>{let i=new Rg(r instanceof Bg&&r.originalTarget||r.target,{x:r.clientX,y:r.clientY});document.elementsFromPoint(i.global.x,i.global.y).some(e=>e.id===t)&&e(Gg(i,n),n)},50),i=e=>{r(e)};return document.body.addEventListener(`pointermove`,i,{capture:!0}),()=>{document.body.removeEventListener(`pointermove`,i,{capture:!0})}})}};d();var qg=({zones:e,itemId:t,targetZone:n,getExpectedOrder:r})=>{let i=sg();if(!i||pg(i))return()=>{};let a=Array.from(new Set(e)).map(e=>`${ug(e)} > [data-puck-component]:not([data-dnd-dragging]):not([data-dnd-placeholder])`).join(`, `),o=()=>{let e=new Map;return i.querySelectorAll(a).forEach(n=>{let r=n.getAttribute(`data-puck-component`);r&&r!==t&&e.set(r,{el:n,rect:n.getBoundingClientRect()})}),e},s=o(),c=r();return()=>{mg(i,{zones:e,itemId:t,targetZone:n,getExpectedOrder:r,initialExpectedOrder:c},()=>{o().forEach(({el:e,rect:t},n)=>{let r=s.get(n)?.rect;if(!r)return;let i=r.x-t.x,a=r.y-t.y;Math.abs(i)<1&&Math.abs(a)<1||e.animate({translate:[`${i}px ${a}px 0`,`0px 0px 0`]},dg)})})}};d();var Jg=(e,{isDraggingBetweenSlots:t=!1,isNewComponent:n=!1}={})=>e===`auto`?t||n?`static`:`fluid`:e;d(),d(),d();var Yg=(e,t)=>{let n=e.indexes.nodes[t];if(!n)return;let r=`${n.parentId}:${n.zone}`;return{zone:r,index:e.indexes.zones[r].contentIds.indexOf(t)}};function Xg(e,t,n=`force`,r=!1,i){return u(this,null,function*(){let a=yield t().resolveComponentData(e,n);if(!a.didChange&&!r)return;let o=Yg(t().state,a.node.props.id);o?t().dispatch({type:`replace`,data:C(a.node),destinationIndex:o.index,destinationZone:o.zone,ui:i}):console.warn(`Warning: Could not find component with id "${e.props.id}" to resolve its data. Component may have been removed or the id is invalid.`)})}var Zg=(e,t,n,r)=>u(null,null,function*(){let{getState:i}=r,a={type:`insert`,componentType:e,destinationIndex:n,destinationZone:t,id:te(e)},o=i().state,s=x(o,a,i()),u=i().dispatch;u(l(c({},a),{recordHistory:!0}));let d={index:n,zone:t};u({type:`setUi`,ui:{itemSelector:d}});let f=N(d,s);f&&(yield Xg(f,i,`insert`))});d();var Qg=(e,t,n,r)=>u(null,null,function*(){let i=r.getState().dispatch;i({type:`move`,sourceIndex:t.index,sourceZone:t.zone??T,destinationIndex:n.index,destinationZone:n.zone??T,recordHistory:!1});let a=r.getState().state.indexes.nodes[e]?.data;a&&(yield Xg(a,r.getState,`move`))});d();function $g(e){function t(e){return e?e.getAttribute(`dir`)||t(e.parentElement):`ltr`}return e?t(e):`ltr`}d(),d(),d();var e_=(e,t,n)=>Math.max(t,Math.min(n,e)),t_=(e,t)=>{let n=e_(e.x,Math.min(t.x1,t.x2),Math.max(t.x1,t.x2)),r=e_(e.y,Math.min(t.y1,t.y2),Math.max(t.y1,t.y2));return Math.hypot(e.x-n,e.y-r)};d();var n_=e=>{let t=e.replace(/\[[^\]]*\]/g,` `).trim();return t&&t!==`none`?t.split(/\s+/).length:0},r_=(e,t,n=t.getComputedStyle(e))=>{let r=n.display,i=$g(e)===`rtl`;if(r===`flex`||r===`inline-flex`){let e=n.flexDirection;if(e.startsWith(`row`)){let t=e===`row-reverse`;return{axis:`x`,reversed:i?!t:t}}return{axis:`y`,reversed:e===`column-reverse`}}return(r===`grid`||r===`inline-grid`)&&(n.gridAutoFlow.startsWith(`column`)||n_(n.gridTemplateColumns)>1)?{axis:`x`,reversed:i}:{axis:`y`,reversed:!1}},i_=({axis:e,reversed:t})=>{let n=e===`x`,r=t?-1:1;return{horizontal:n,reversed:t,forward:r,start:e=>n?t?e.right:e.left:t?e.bottom:e.top,end:e=>n?t?e.left:e.right:t?e.top:e.bottom,isBefore:(e,t)=>r>0?e<=t:e>=t}},a_=(e,t,n)=>{let r=e.ownerDocument.defaultView;if(!r)return null;let i=new Map(n.map((e,t)=>[e,t])),a=Array.from(e.querySelectorAll(`:scope > [data-puck-component]:not([data-dnd-dragging]):not([data-dnd-placeholder])`)).map(e=>({index:i.get(e.getAttribute(`data-puck-component`)??``)??-1,el:e})).filter(e=>e.index!==-1).sort((e,t)=>e.index-t.index).map(({index:e,el:t})=>({index:e,rect:t.getBoundingClientRect()}));if(a.length===0)return 0;let{horizontal:o,reversed:s,start:c,end:l}=i_(r_(e,r)),u=(e,t,n,r=[n])=>{let i=1/0,a=-1/0;for(let e of r)i=Math.min(i,o?e.top:e.left),a=Math.max(a,o?e.bottom:e.right);return o?{index:e,x1:t,x2:t,y1:n.top,y2:n.bottom,laneStart:i,laneEnd:a}:{index:e,x1:n.left,x2:n.right,y1:t,y2:t,laneStart:i,laneEnd:a}},d=[],f=(e,t,n)=>{let r=n===`before`?c(t):l(t);return u(e,r,t)};for(let e=0;e<=a.length;e++){let t=a[e-1],n=a[e];if(!n)d.push(f(t.index+1,t.rect,`after`));else if(!t)d.push(f(n.index,n.rect,`before`));else if(n.index-t.index>1)d.push(f(t.index+1,t.rect,`after`)),d.push(f(n.index,n.rect,`before`));else if(s?l(t.rect)<c(n.rect):l(t.rect)>c(n.rect))d.push(f(n.index,n.rect,`before`)),d.push(f(n.index,t.rect,`after`));else{let e=(l(t.rect)+c(n.rect))/2;d.push(u(n.index,e,n.rect,[t.rect,n.rect]))}}let p=o?t.y:t.x,m=null,h=1/0,g=null,_=1/0;for(let e of d){let n=t_(t,e);n<h&&(h=n,m=e),p>=e.laneStart&&p<=e.laneEnd&&n<_&&(_=n,g=e)}return(g??m)?.index??null};d();var o_=(e,t)=>{let n=document.querySelector(`iframe#preview-frame`);if(!n||e.ownerDocument!==n.contentDocument)return t;let r=n.getBoundingClientRect(),i=r.width/(n.contentWindow?.innerWidth||1);return i>0?{x:(t.x-r.left)/i,y:(t.y-r.top)/i}:t},s_=e=>{let t=z(),n=(0,H.useRef)(null),r=(0,H.useCallback)(e=>{let t=sg()?.querySelector(`[data-puck-entry]`);e?t?.setAttribute(`data-puck-line-drag`,`true`):t?.removeAttribute(`data-puck-line-drag`)},[]),i=(0,H.useCallback)((e,n)=>{let r=sg()?.querySelector(ug(e));return r?a_(r,o_(r,n.dragOperation.position.current),bg(t.getState().state,e)):null},[t]),a=(0,H.useCallback)(n=>{let{previewIndex:r={}}=e.getState(),i=Object.values(r).find(e=>e?.linePlaceholder);if(!i)return;let a=sg()?.querySelector(ug(i.zone));if(!a)return;let o=o_(a,n.dragOperation.position.current),s=a.getBoundingClientRect();if(!(o.x>=s.left&&o.x<=s.right&&o.y>=s.top&&o.y<=s.bottom))return;let u=a_(a,o,bg(t.getState().state,i.zone));u!==null&&u!==i.index&&e.setState({previewIndex:l(c({},r),{[i.zone]:l(c({},i),{index:u})})})},[t,e]),o=(0,H.useCallback)(()=>{var e;(e=n.current)==null||e.call(n),n.current=null},[]),s=(0,H.useCallback)(e=>{o();let t=sg();if(!t)return;let r=null,i=()=>{r===null&&(r=requestAnimationFrame(()=>{r=null,a(e)}))};t.addEventListener(`scroll`,i,{capture:!0,passive:!0}),n.current=()=>{r!==null&&cancelAnimationFrame(r),t.removeEventListener(`scroll`,i,{capture:!0})}},[o,a]);return(0,H.useEffect)(()=>o,[o]),{getTargetIndex:i,setActive:r,startScrollTracking:s,stopScrollTracking:o,update:a}},c_=(0,H.createContext)({dragListeners:{}});function l_(e,t,n=[]){let{setDragListeners:r}=(0,H.useContext)(c_);(0,H.useEffect)(()=>{r&&r(n=>l(c({},n),{[e]:[...n[e]||[],t]}))},n)}var u_=100,d_=e=>{let t=(0,H.useRef)(null);return(0,H.useCallback)(n=>{rh.setState({fallbackEnabled:!1});let r=te();t.current=r,setTimeout(()=>{t.current===r&&(rh.setState({fallbackEnabled:!0}),n.collisionObserver.forceUpdate(!0))},e)},[])},f_=({children:e,disableAutoScroll:t,behavior:n=`auto`})=>{let r=V(e=>e.dispatch),i=V(e=>e.instanceId),a=z(),o=(0,H.useRef)(null),s=d_(100),[u]=(0,H.useState)(()=>{let e=new Map;return P(()=>({zoneDepthIndex:{},nextZoneDepthIndex:{},areaDepthIndex:{},nextAreaDepthIndex:{},draggedItem:null,previewIndex:{},enabledIndex:{},hoveringComponent:null,registerRootVirtualizer:(t,n)=>{e.set(t,n)},unregisterRootVirtualizer:t=>{e.delete(t)},scrollToComponent:t=>{let n=Array.from(e.values());if(n.length>0)for(let e of n){let n=e.resolveIndex(t);n<0||e.virtualizer.scrollToIndex(n,{behavior:`auto`,align:`auto`})}else(sg()?.querySelector(lg(t)))?.scrollIntoView({behavior:`smooth`})}}))}),d=(0,H.useCallback)(e=>{let{zoneDepthIndex:t={},areaDepthIndex:n={}}=u.getState()||{},r=Object.keys(t).length>0,i=Object.keys(n).length>0,a=!1,o=!1;return(e.zone&&!t[e.zone]||!e.zone&&r)&&(a=!0),(e.area&&!n[e.area]||!e.area&&i)&&(o=!0),{zoneChanged:a,areaChanged:o}},[u]),f=(0,H.useCallback)((e,t)=>{let{zoneChanged:n,areaChanged:r}=d(e);(n||r)&&(u.setState({zoneDepthIndex:e.zone?{[e.zone]:!0}:{},areaDepthIndex:e.area?{[e.area]:!0}:{}}),s(t),setTimeout(()=>{t.collisionObserver.forceUpdate(!0)},50),o.current=null)},[u]),p=vt(f,u_),m=()=>{p.cancel(),o.current=null};(0,H.useEffect)(()=>{},[]);let[h]=(0,H.useState)(()=>[...t?rd.plugins.filter(e=>e!==Au):rd.plugins,Kg({onChange:(e,t)=>{let n=u.getState(),{zoneChanged:r,areaChanged:i}=d(e),a=t.dragOperation.status.dragging;if(i||r){let t={},n={};e.zone&&(t={[e.zone]:!0}),e.area&&(n={[e.area]:!0}),u.setState({nextZoneDepthIndex:t,nextAreaDepthIndex:n})}if(e.zone!==`void`&&n?.zoneDepthIndex.void)f(e,t);else if(i){if(a){let n=o.current;n&&n.area===e.area&&n.zone===e.zone||(m(),p(e,t),o.current=e)}else m(),f(e,t)}else r&&f(e,t),m()}},i)]),g=qm(),[_,v]=(0,H.useState)({}),y=(0,H.useRef)(null),b=(0,H.useRef)(void 0),{getTargetIndex:x,setActive:S,startScrollTracking:C,stopScrollTracking:w,update:T}=s_(u),E=(0,H.useMemo)(()=>({mode:`edit`,areaId:`root`,depth:0}),[]);return(0,U.jsx)(c_.Provider,{value:{dragListeners:_,setDragListeners:v},children:(0,U.jsx)(Gd,{plugins:h,sensors:g,onDragEnd:(e,t)=>{w(),(sg()?.querySelector(`[data-puck-entry]`))?.removeAttribute(`data-puck-dragging`);let{source:n,target:i}=e.operation;if(!n){S(!1),u.setState({draggedItem:null});return}let{zone:o,index:s}=n.data,{previewIndex:d={}}=u.getState()||{},f=Object.values(d).find(e=>e?.props.id===n.id&&!e.ghost)??null,p=!e.canceled&&i?.type!==`void`&&f?.linePlaceholder?qg({zones:b.current?[b.current.zone,f.zone]:[f.zone],itemId:f.type===`move`?f.props.id:void 0,targetZone:f.zone,getExpectedOrder:()=>bg(a.getState().state,f.zone)}):null,m=()=>{var n,d;if(S(!1),u.setState({draggedItem:null}),e.canceled||i?.type===`void`){u.setState({previewIndex:{}}),(n=_.dragend)==null||n.forEach(n=>{n(e,t)}),r({type:`setUi`,ui:{itemSelector:null,isDragging:!1}});return}let m=f&&f.linePlaceholder&&b.current&&f.zone===b.current.zone&&f.index>b.current.index?f.index-1:f?.index??s;f&&(u.setState({previewIndex:{}}),f.type===`insert`?Zg(f.componentType,f.zone,f.index,a):b.current&&Qg(f.props.id,b.current,l(c({},f),{index:m}),a),p?.());let h=b.current?.zone!==f?.zone||b.current?.index!==m;r({type:`setUi`,ui:{itemSelector:f?{index:m,zone:f.zone}:{index:s,zone:o},isDragging:!1},recordHistory:h}),(d=_.dragend)==null||d.forEach(n=>{n(e,t)})},h;h=un(()=>{n.status===`idle`&&(m(),h?.())})},onDragMove:(e,t)=>{var n;T(t),(n=_.dragmove)==null||n.forEach(n=>{n(e,t)})},onDragOver:(e,t)=>{var r;if(e.preventDefault(),!u.getState()?.draggedItem)return;m();let{source:i,target:o}=e.operation;if(!o||!i||o.type===`void`)return;let[s]=i.id.split(`:`),[c]=o.id.split(`:`),l=i.data,d=l.zone,f=l.index,p=``,h=0;if(o.type===`component`){let e=o.data;p=e.zone;let n=t.collisionObserver.collisions[0]?.data;h=sh({position:oh(n?.direction,$g(o.element)),sourceIndex:f,targetIndex:e.index,isSameZone:d===p})}else p=o.id.toString(),h=0;let g=a.getState().state.indexes.nodes[o.id]?.path||[];if(!(c===s||g.find(e=>{let[t]=e.split(`:`);return t===s}))){if(y.current===`new`){let e=Jg(n,{isNewComponent:!0})===`static`;e&&(h=x(p,t)??h),S(e),u.setState({previewIndex:{[p]:{componentType:l.componentType,type:`insert`,index:h,zone:p,element:i.element,props:{id:i.id.toString()},linePlaceholder:e}}})}else{b.current||={zone:l.zone,index:l.index};let e=N(b.current,a.getState().state);if(e){let r=b.current.zone,a=r!==p,o=Jg(n,{isDraggingBetweenSlots:a})===`static`;o&&(h=x(p,t)??h),S(o);let s={[p]:{componentType:l.componentType,type:`move`,index:h,zone:p,props:e.props,element:i.element,linePlaceholder:o}};if(o&&a){let t=u.getState().previewIndex[r],n=b.current.index;t&&!t.linePlaceholder&&(n=t.index),s[r]={componentType:l.componentType,type:`move`,index:n,zone:r,props:e.props,element:i.element,ghost:!0}}u.setState({previewIndex:s})}}(r=_.dragover)==null||r.forEach(n=>{n(e,t)})}},onDragStart:(e,t)=>{var r;n!==`fluid`&&C(t);let{source:i}=e.operation;if(i?.type===`component`){let e=i.data,t={zone:e.zone,index:e.index};b.current=t;let r=N(t,a.getState().state);if(r){let t=Jg(n)===`static`;S(t),u.setState({previewIndex:{[e.zone]:{componentType:e.componentType,type:`move`,index:e.index,zone:e.zone,props:r.props,element:i.element,linePlaceholder:t}}})}}(r=_.dragstart)==null||r.forEach(n=>{n(e,t)})},onBeforeDragStart:e=>{let t=e.operation.source?.type===`drawer`;y.current=t?`new`:`existing`,b.current=void 0,u.setState({draggedItem:e.operation.source}),a.getState().selectedItem?.props.id===e.operation.source?.id?r({type:`setUi`,ui:{isDragging:!0},recordHistory:!1}):r({type:`setUi`,ui:{itemSelector:null,isDragging:!0},recordHistory:!1}),(sg()?.querySelector(`[data-puck-entry]`))?.setAttribute(`data-puck-dragging`,`true`),S(!1)},children:(0,U.jsx)(ig,{store:u,children:(0,U.jsx)(ag,{value:E,children:e})})})})},p_=({children:e,disableAutoScroll:t,behavior:n})=>V(e=>e.status)===`LOADING`?e:(0,U.jsx)(f_,{disableAutoScroll:t,behavior:n,children:e}),m_=p(`Drawer`,Fg),h_=p(`DrawerItem`,Fg),g_=({children:e,name:t,label:n,dragRef:r,isDragDisabled:i})=>{let a=(0,H.useMemo)(()=>e||(({children:e})=>(0,U.jsx)(`div`,{className:h_(`default`),children:e})),[e]);return(0,U.jsx)(`div`,{className:h_({disabled:i}),ref:r,onMouseDown:e=>e.preventDefault(),"data-testid":r?`drawer-item:${t}`:``,"data-puck-drawer-item":!0,children:(0,U.jsx)(a,{name:t,children:(0,U.jsx)(`div`,{className:h_(`draggableWrapper`),children:(0,U.jsxs)(`div`,{className:h_(`draggable`),children:[(0,U.jsx)(`div`,{className:h_(`name`),children:n??t}),(0,U.jsx)(`div`,{className:h_(`icon`),children:(0,U.jsx)(Hm,{})})]})})})})},__=({children:e,name:t,label:n,id:r,isDragDisabled:i})=>{let a=xg((0,H.useContext)(rg)),{ref:o}=Yd({id:r,data:{componentType:t},disabled:i,type:`drawer`,plugins:[iu.configure({dropAnimation:a})]});return(0,U.jsxs)(`div`,{className:m_(`draggable`),children:[(0,U.jsx)(`div`,{className:m_(`draggableBg`),children:(0,U.jsx)(g_,{name:t,label:n,children:e})}),(0,U.jsx)(`div`,{className:m_(`draggableFg`),children:(0,U.jsx)(g_,{name:t,label:n,dragRef:o,isDragDisabled:i,children:e})})]})},v_=({name:e,children:t,id:n,label:r,index:i,isDragDisabled:a})=>{let o=n||e,[s,c]=(0,H.useState)(te(o));return i!==void 0&&console.error("Warning: The `index` prop on Drawer.Item is deprecated and no longer required."),l_(`dragend`,()=>{c(te(o))},[o]),(0,U.jsx)(`div`,{children:(0,U.jsx)(__,{name:e,label:r,id:s,isDragDisabled:a,children:t})},s)},y_=({children:e,droppableId:t,direction:n})=>{t&&console.error("Warning: The `droppableId` prop on Drawer is deprecated and no longer required."),n&&console.error("Warning: The `direction` prop on Drawer is deprecated and no longer required to achieve multi-directional dragging.");let r=Kh(),{ref:i}=Ef({id:r,type:`void`,collisionPriority:0});return(0,U.jsx)(`div`,{className:m_(),ref:i,"data-puck-dnd":r,"data-puck-drawer":!0,"data-puck-dnd-void":!0,children:e})};y_.Item=v_,d();var b_=(e,t)=>e.getState().state.indexes.zones[t].contentIds.length,x_=({zoneCompound:e,userMinEmptyHeight:t,ref:n})=>{let r=z(),[i,a]=(0,H.useState)(0),[o,s]=(0,H.useState)(!1),{draggedItem:c,isZone:l}=Fm(rg,t=>({draggedItem:t.draggedItem?.data.zone===e?t.draggedItem:null,isZone:t.draggedItem?.data.zone===e})),u=(0,H.useRef)(0),d=og(t=>{if(t){let t=b_(r,e);if(a(0),t||u.current===0){s(!1);return}let n=r.getState().selectedItem,i=r.getState().state.indexes.zones,o=r.getState().nodes;o.setOverlayVisible(n?.props.id,!1),setTimeout(()=>{let t=i[e]?.contentIds||[];o.syncNodes(t),n&&setTimeout(()=>{o.syncNode(n.props.id),o.setOverlayVisible(n.props.id,!0)},200),s(!1)},100)}},[r,i,e]);(0,H.useEffect)(()=>{if(c&&n.current&&l){let t=n.current.getBoundingClientRect();return u.current=b_(r,e),a(t.height),s(!0),d()}},[n.current,c,d]);let f=isNaN(Number(t))?t:`${t}px`;return[i?`${i}px`:f,o]};d(),d();function S_(e,t){let n=qd();return(0,H.useCallback)((...t)=>u(null,null,function*(){return yield n?.renderer.rendering,e(...t)}),[...t,n])}var C_=(e,t)=>{let n=(0,H.useContext)(rg),r=Fm(rg,e=>e.previewIndex[t]),i=V(e=>e.state.ui.isDragging),[a,o]=(0,H.useState)(e),[s,c]=(0,H.useState)(r),l=S_((e,t,n,r,i,a)=>{(!n||i)&&(t&&!t.linePlaceholder?o(I(e.filter(e=>e!==t.props.id),t.index,t.props.id)):o(i&&!a?e.filter(e=>e!==r):e),c(t))},[]);return(0,H.useEffect)(()=>{let t=n.getState(),a=t.draggedItem?.id,o=Object.values(t.previewIndex||{}),s=o.length>0,c=o.some(e=>e?.linePlaceholder);l(e,r,i,a,s,c)},[e,r,i]),[a,s]};d();var w_=`dynamic`,T_=`x`,E_=`y`,D_=(e,t)=>{let n=V(e=>e.status),[r,i]=(0,H.useState)(t||E_),a=(0,H.useCallback)(()=>{if(e.current){let t=window.getComputedStyle(e.current);t.display===`grid`?i(w_):t.display===`flex`&&t.flexDirection===`row`?i(T_):i(E_)}},[e.current]);return(0,H.useEffect)(()=>{let e=()=>{a()};return window.addEventListener(`viewportchange`,e),()=>{window.removeEventListener(`viewportchange`,e)}},[]),(0,H.useEffect)(a,[n,t]),[r,a]};d();var O_=({componentId:e,zone:t})=>{let n=V(e=>e.config),r=V(e=>e.metadata),i=V(zt(n=>{let r=n.state.indexes;return(r.zones[`${e}:${t}`]?.contentIds??[]).map(e=>r.nodes[e].flatData)}));return(0,U.jsx)(jt,{content:i,zone:t,config:n,metadata:r})};d();function k_(e,t,n,r,i){let a=(0,H.useRef)(null),o=(0,H.useRef)(null),s=(0,H.useRef)(t.props),l=(0,H.useMemo)(()=>Ct(n,r,i),[n,r,i]),u=(0,H.useMemo)(()=>{let n=(t.type===`root`?e.root:e.components?.[t.type])?.fields??{},r=a.current!==l,i,u=!1;if(!o.current||r)for(let e in t.props)n[e]?.type===`slot`&&(u=!0);else{i=[`id`];let e=new Set([...Object.keys(t.props),...Object.keys(o.current)]);for(let r of e)t.props[r]!==o.current[r]&&(i.push(r),n[r]?.type===`slot`&&(u=!0))}let d=_(t,l,e,!1,u,i).props;return o.current=t.props,a.current=l,s.current=i?c(c({},s.current),d):d,s.current},[e,t,l]);return(0,H.useMemo)(()=>c(c({},t.props),u),[t.props,u])}d(),d(),d();var A_=(e,t={})=>{if(!e)return;let{disableDrag:n=!1,disableDragOnFocus:r=!0}=t,i=e=>{e.stopPropagation()};e.addEventListener(`mouseover`,i,{capture:!0});let a=()=>{setTimeout(()=>{e.addEventListener(`pointerdown`,i,{capture:!0})},200)},o=()=>{e.removeEventListener(`pointerdown`,i,{capture:!0})};return n?e.addEventListener(`pointerdown`,i,{capture:!0}):r&&(e.addEventListener(`focus`,a,{capture:!0}),e.addEventListener(`blur`,o,{capture:!0})),e.setAttribute(`data-puck-overlay-portal`,`true`),()=>{e.removeEventListener(`mouseover`,i,{capture:!0}),n?e.removeEventListener(`pointerdown`,i,{capture:!0}):r&&(e.removeEventListener(`focus`,a,{capture:!0}),e.removeEventListener(`blur`,o,{capture:!0})),e.removeAttribute(`data-puck-overlay-portal`)}};d();var j_=p(`InlineTextField`,{InlineTextField:`_InlineTextField_104qp_1`}),M_=(0,H.memo)(({propPath:e,componentId:t,value:n,isReadOnly:r,opts:i={}})=>{let a=(0,H.useRef)(null),o=z(),s=i.disableLineBreaks??!1;(0,H.useEffect)(()=>{let r=o.getState(),i=r.state.indexes.nodes[t].data;if(!r.getComponentConfig(i.type))throw Error(`InlineTextField Error: No config defined for ${i.type}`);if(a.current){let r=n??``;r!==a.current.innerText&&a.current.replaceChildren(r);let i=A_(a.current),d=n=>u(null,null,function*(){let r=o.getState().state.indexes.nodes[t],i=n.target.innerText;s&&(i=i.replaceAll(/\n/gm,``));let a=wm(r.data.props,e,i);yield Xg(l(c({},r.data),{props:a}),o.getState,`replace`,!0)});return a.current.addEventListener(`input`,d),()=>{var e;(e=a.current)==null||e.removeEventListener(`input`,d),i?.()}}},[o,a.current,n,s]);let[d,f]=(0,H.useState)(!1),[p,m]=(0,H.useState)(!1);return(0,U.jsx)(`span`,{className:j_(),ref:a,contentEditable:d||p?`plaintext-only`:`false`,onClick:e=>{e.preventDefault(),e.stopPropagation()},onClickCapture:e=>{e.preventDefault(),e.stopPropagation();let n=Yg(o.getState().state,t);o.getState().setUi({itemSelector:n})},onKeyDown:e=>{e.stopPropagation(),(s&&e.key===`Enter`||r)&&e.preventDefault()},onKeyUp:e=>{e.stopPropagation(),e.preventDefault()},onMouseOverCapture:()=>f(!0),onMouseOutCapture:()=>f(!1),onFocus:()=>m(!0),onBlur:()=>m(!1)})}),N_=()=>({text:({value:e,componentId:t,field:n,propPath:r,isReadOnly:i})=>n.contentEditable?(0,U.jsx)(M_,{propPath:r,componentId:t,value:e,opts:{disableLineBreaks:!0},isReadOnly:i}):e,textarea:({value:e,componentId:t,field:n,propPath:r,isReadOnly:i})=>n.contentEditable?(0,U.jsx)(M_,{propPath:r,componentId:t,value:e,isReadOnly:i}):e,custom:({value:e,componentId:t,field:n,propPath:r,isReadOnly:i})=>n.contentEditable&&typeof e==`string`?(0,U.jsx)(M_,{propPath:r,componentId:t,value:e,isReadOnly:i}):e});d();var P_=(0,H.lazy)(()=>i(()=>import(`./Editor-44C53YAG-Bid-7w8j.js`).then(e=>({default:e.Editor})),__vite__mapDeps([15,1,2,3,4,13,11,14,5,6,7,8,9,10]))),F_=(0,H.lazy)(()=>i(()=>import(`./Render-DQXAYUBI-9djuNlbs.js`).then(e=>({default:e.RichTextRender})),__vite__mapDeps([12,1,2,3,4,11,13,14]))),I_=(0,H.memo)(({value:e,componentId:t,propPath:n,field:r,id:i})=>{let a=(0,H.useRef)(null),o=z(),s=e=>{e.preventDefault(),e.stopPropagation()},d=e=>{e.preventDefault(),e.stopPropagation();let n=Yg(o.getState().state,t);o.getState().setUi({itemSelector:n})};(0,H.useEffect)(()=>{if(!a.current)return;let e=A_(a.current,{disableDragOnFocus:!0});return()=>e?.()},[a.current]);let f=(0,H.useCallback)((e,r)=>u(null,null,function*(){let i=o.getState().state.indexes.nodes[t],a=wm(i.data.props,n,e);yield Xg(l(c({},i.data),{props:a}),o.getState,`replace`,!0,r)}),[o,t,n]),p=(0,H.useCallback)(e=>{o.setState({currentRichText:{inlineComponentId:t,inline:!0,field:r,editor:e,id:i}})},[r,t]);if(!r.contentEditable)return(0,U.jsx)(H.Suspense,{fallback:(0,U.jsx)(Dt,{content:e}),children:(0,U.jsx)(F_,{content:e,field:r})});let m={content:e,onChange:f,field:r,inline:!0,onFocus:p,id:i,name:n};return(0,U.jsx)(`div`,{ref:a,onClick:s,onClickCapture:d,children:(0,U.jsx)(H.Suspense,{fallback:(0,U.jsx)(Vh,c({},m)),children:(0,U.jsx)(P_,c({},m))})})});I_.displayName=`InlineEditorWrapper`;var L_=()=>({richtext:({value:e,componentId:t,field:n,propPath:r,isReadOnly:i})=>{let{contentEditable:a=!0,tiptap:o}=n;if(a===!1||i)return(0,U.jsx)(F_,{content:e,field:n});let s=`${t}_${n.type}_${r}`;return(0,U.jsx)(I_,{value:e,componentId:t,propPath:r,field:n,id:s},s)}});d(),d();function R_(e,t,n=[]){if(Object.is(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t||Object.getPrototypeOf(e)!==Object.getPrototypeOf(t))return!1;let r=new Set(n),i=Object.keys(e).filter(e=>!r.has(e)),a=Object.keys(t).filter(e=>!r.has(e));if(i.length!==a.length)return!1;for(let n=0;n<i.length;n++){let r=i[n];if(!Object.prototype.hasOwnProperty.call(t,r))return!1;let a=e[r],o=t[r];if(!Object.is(a,o))return!1}return!0}var z_=(0,H.memo)(({Component:e,componentProps:t})=>(0,U.jsx)(e,c({},t)),(e,t)=>{let n=!0;return`puck`in e.componentProps&&`puck`in t.componentProps&&(n=Te(e.componentProps.puck,t.componentProps.puck)),e.Component===t.Component&&R_(e.componentProps,t.componentProps,[`puck`])&&n});d();var B_=5,V_=320,H_=new Map,U_=e=>H_.get(e)??V_,W_=(e,t)=>{t<=0||H_.set(e,t)},G_=({contentIds:e,zoneCompound:t,renderItem:n})=>{let r=V(e=>e.selectedItem?.props.id??null),i=sg(),a=(0,H.useContext)(rg),o=Fm(rg,e=>{let t=e.draggedItem?.id;return t?String(t):null}),s=Fm(rg,e=>{if(e.draggedItem?.id){let[t]=Object.entries(e.previewIndex??{}).find(([,e])=>!e?.ghost)??[];return t?.split(`:`)[0]}return null}),c=i?.defaultView,l=(0,H.useRef)(new Map),u=z(),d=(0,H.useCallback)(t=>{if(!t||t===`root`)return-1;let n=e.indexOf(t);if(n>-1)return n;let r=u.getState().state.indexes.nodes?.[t]?.path??[];for(let t=r.length-1;t>=0;--t){let n=r[t]?.split(`:`)[0];if(!n||n===`root`)continue;let i=e.indexOf(n);if(i>-1)return i}return-1},[u,e]),f=(0,H.useMemo)(()=>{let e=new Set;return[r,o,s].forEach(t=>{let n=d(t);n>-1&&e.add(n)}),Array.from(e).sort((e,t)=>e-t)},[s,o,d,r]),p=(0,H.useCallback)(e=>{let t=tm(e);return f.forEach(e=>{t.includes(e)||t.push(e)}),t.sort((e,t)=>e-t),t},[f]),m=bm({count:e.length,getItemKey:t=>e[t],estimateSize:t=>U_(e[t]),getScrollElement:()=>c??null,overscan:B_,observeElementRect:(e,t)=>c?im(e,t):nm(e,t),observeElementOffset:(e,t)=>c?cm(e,t):sm(e,t),scrollToFn:(e,t,n)=>c?dm(e,t,n):fm(e,t,n),rangeExtractor:p,initialOffset:()=>c?c.scrollY:0});(0,H.useEffect)(()=>(a.getState().registerRootVirtualizer(t,{resolveIndex:e=>d(e),virtualizer:m}),()=>{a.getState().unregisterRootVirtualizer(t)}),[d,m,t,a]);let h=(0,H.useCallback)(e=>{let t=l.current.get(e);if(t)return t;let n=t=>{if(!t)return;let n=Math.ceil(t.getBoundingClientRect().height)||V_;typeof n==`number`&&n>0&&W_(e,n)};return l.current.set(e,n),n},[]);(0,H.useEffect)(()=>{let t=new Set(e);Array.from(l.current.keys()).forEach(e=>{t.has(e)||l.current.delete(e)})},[e]);let g=m.getVirtualItems(),_=m.getTotalSize(),v=(0,H.useMemo)(()=>{let t=[],r=0,i=-1;g.forEach(a=>{if(!a)return;let o=e[a.index],s=Math.max(a.start-r,0);s>0&&t.push((0,U.jsx)(`div`,{style:{height:`${s}px`}},`gap:${i}:${a.index}`)),t.push(n({componentId:o,index:a.index,measureRef:h(o)})),r=a.end,i=a.index});let a=Math.max(_-r,0);return a>0&&t.push((0,U.jsx)(`div`,{style:{height:`${a}px`}},`gap:${i}:end`)),t},[_,g,h]);return(0,U.jsx)(U.Fragment,{children:v})};d();var K_=p(`DropZone`,Ng),q_=`var(--puck-line-placeholder-width, 2px)`,J_=({zoneRef:e,contentIds:t,index:n})=>{let[r,i]=(0,H.useState)();return(0,H.useLayoutEffect)(()=>{let r=e.current,a=r?.ownerDocument.defaultView;if(!r||!a)return;let o=e=>e?a.getComputedStyle(e):void 0,s=e=>parseFloat(e??``)||0,c=e=>{let n=t[e];if(n===void 0)return;let i=r.querySelector(`:scope > ${lg(n)}:not([data-dnd-dragging])`);if(i)return{el:i,rect:i.getBoundingClientRect()}},l=r.getBoundingClientRect(),u=a.getComputedStyle(r),d=c(n-1),f=c(n),p=f??d,{horizontal:m,reversed:h,forward:g,start:_,end:v,isBefore:y}=i_(r_(r,a,u)),b=s(m?u.columnGap:u.rowGap),x=(e,t)=>{let n=t===`start`==!h?m?`marginLeft`:`marginTop`:m?`marginRight`:`marginBottom`;return s(o(e)?.[n])},S=s(u.borderLeftWidth),C=s(u.borderTopWidth),w=s(u.borderRightWidth),T=s(u.borderBottomWidth),E;E=f?d&&y(v(d.rect),_(f.rect))?(v(d.rect)+_(f.rect))/2:_(f.rect)-g*(Math.max(x(f.el,`start`),b)/2):d?v(d.rect)+g*(Math.max(x(d.el,`end`),b)/2):m?h?l.right-w-s(u.paddingRight):l.left+S+s(u.paddingLeft):h?l.bottom-T-s(u.paddingBottom):l.top+C+s(u.paddingTop),i(m?{top:(p?.rect.top??l.top+C+s(u.paddingTop))-l.top+r.scrollTop-C,height:p?.rect.height??l.height-C-T-s(u.paddingTop)-s(u.paddingBottom),left:e_(E-l.left+r.scrollLeft-S,0,r.scrollWidth),width:q_,transform:`translateX(-50%)`}:{left:(p?.rect.left??l.left+S+s(u.paddingLeft))-l.left+r.scrollLeft-S,width:p?.rect.width??l.width-S-w-s(u.paddingLeft)-s(u.paddingRight),top:e_(E-l.top+r.scrollTop-C,0,r.scrollHeight),height:q_,transform:`translateY(-50%)`})},[e,t,n]),r?(0,U.jsx)(`div`,{className:K_(`linePlaceholder`),style:r,"data-puck-line-placeholder":!0}):null},Y_=p(`DropZone`,Ng),X_=({element:e,label:t,override:n})=>e?(0,U.jsx)(`div`,{dangerouslySetInnerHTML:{__html:e.outerHTML}}):(0,U.jsx)(g_,{name:t,children:n}),Z_=e=>(0,U.jsx)($_,c({},e)),Q_=(0,H.memo)(({zoneCompound:e,componentId:t,index:n,dragAxis:r,collisionAxis:i,inDroppableZone:a,itemRef:o})=>{let s=V(e=>e.metadata),{depth:u=1}=(0,H.useContext)(ng)??{},d=(0,H.useContext)(rg),f=V(zt(e=>e.state.indexes.nodes[t]?.flatData.props)),p=V(e=>e.state.indexes.nodes[t]?.data.type),m=V(zt(e=>e.state.indexes.nodes[t]?.data.readOnly)),h=z(),g=(0,H.useMemo)(()=>{if(f)return Ye({type:p,props:f});let n=d.getState().previewIndex[e];return t===n?.props.id?{type:n.componentType,props:n.props,previewType:n.type,element:n.element}:null},[h,t,e,p,f]),_=V(e=>g?.type?e.config.components[g.type]:null),v=(0,H.useMemo)(()=>({renderDropZone:Z_,isEditing:!0,dragRef:null,metadata:c(c({},s),_?.metadata)}),[s,_?.metadata]),y=V(e=>e.overrides),b=V(e=>e.componentState[t]?.loadingCount>0),x=V(e=>e.selectedItem?.props.id===t||!1),S=B(`label-component`),C=B(`canvas-noconfig`,{type:(g?.type)?.toString()??``}),w=_?.label??g?.type.toString()??S,T=(0,H.useMemo)(()=>l(c(c({},_?.defaultProps),g?.props),{puck:v,editMode:!0}),[_?.defaultProps,g?.props,v]),E=(0,H.useMemo)(()=>({type:g?.type??p,props:T}),[g?.type,p,T]),D=V(e=>e.config),O=V(e=>e.plugins),k=V(e=>e.fieldTransforms),A=k_(D,E,(0,H.useMemo)(()=>c(c(c(c(c({},St(Z_,e=>(0,U.jsx)(O_,{componentId:t,zone:e.zone}))),N_()),L_()),O.reduce((e,t)=>c(c({},e),t.fieldTransforms),{})),k),[O,k]),m,b);if(!g)return;let j=_?_.render:()=>(0,U.jsx)(`div`,{style:{padding:48,textAlign:`center`},children:C}),ee=g.type,te=`previewType`in g&&g.previewType===`insert`;return(0,U.jsx)(Mg,{id:t,componentType:ee,zoneCompound:e,depth:u+1,index:n,isLoading:b,isSelected:x,label:w,autoDragAxis:r,userDragAxis:i,inDroppableZone:a,itemRef:o,children:e=>_?.inline&&!te?(0,U.jsx)(z_,{Component:j,componentProps:l(c({},A),{puck:l(c({},A.puck),{dragRef:e})})}):(0,U.jsx)(`div`,{ref:e,children:te?(0,U.jsx)(X_,{label:w,override:y.componentItem??y.drawerItem,element:`element`in g&&g.element?g.element:void 0}):(0,U.jsx)(z_,{Component:j,componentProps:A})})})}),$_=(0,H.forwardRef)(function({zone:e,allow:t,disallow:n,style:r,className:i,minEmptyHeight:a=`128px`,collisionAxis:o,as:s},u){let d=(0,H.useContext)(ng),f=z(),{areaId:p,depth:m=0,registerLocalZone:h,unregisterLocalZone:g}=d??{},_=V(zt(e=>p?e.state.indexes.nodes[p]?.path:null)),v=T;p&&e!==`root:default-zone`&&(v=`${p}:${e}`);let y=v===`root:default-zone`||e===`root:default-zone`||p===`root`,b=Fm(rg,e=>e.nextAreaDepthIndex[p||``]),x=V(zt(e=>e.state.indexes.zones[v]?.contentIds)),S=V(zt(e=>e.state.indexes.zones[v]?.type));(0,H.useEffect)(()=>{(!S||S===`dropzone`)&&d?.registerZone&&d?.registerZone(v)},[S,f]),(0,H.useEffect)(()=>{S===`dropzone`&&v!==`root:default-zone`&&console.warn(`DropZones have been deprecated in favor of slot fields and will be removed in a future version of Puck. Please see the migration guide: https://www.puckeditor.com/docs/guides/migrations/dropzones-to-slots`)},[S]);let C=(0,H.useMemo)(()=>x||[],[x]),w=(0,H.useRef)(null),E=(0,H.useCallback)(e=>Pg(e,{allow:t,disallow:n}),[t,n]),D=Fm(rg,e=>{let t=e.draggedItem?.data.componentType;return E(t)}),O=b||y,k=Fm(rg,e=>{let t=!0;return t=e.zoneDepthIndex[v]??!1,t&&=D,t});(0,H.useEffect)(()=>(h&&h(v,D||k),()=>{g&&g(v)}),[D,k,v]);let[A,j]=C_(C,v),ee=j&&!j.linePlaceholder?1:0,te=A.length===ee,M=k&&te,N=(0,H.useContext)(rg);(0,H.useEffect)(()=>{let{enabledIndex:e}=N.getState();N.setState({enabledIndex:l(c({},e),{[v]:k})})},[k,N,v]);let{ref:P}=Ef({id:v,collisionPriority:k?m:0,disabled:!M,collisionDetector:th,type:`dropzone`,data:{areaId:p,depth:m,isDroppableTarget:D,path:_||[]}}),F=V(e=>e?.selectedItem&&p===e?.selectedItem.props.id),[I]=D_(w,o),[ne,L]=x_({zoneCompound:v,userMinEmptyHeight:a,ref:w}),re=(0,H.useCallback)(e=>{Cg([w,P,u],e)},[P]),R=V(e=>e._experimentalVirtualization),ie=s??`div`,ae=R&&(p??`root`)===`root`&&m===0;return(0,U.jsxs)(ie,{className:`${Y_({isRootZone:y,hoveringOverArea:O,isEnabled:k,isAreaSelected:F,hasChildren:C.length>0,isAnimating:L})}${i?` ${i}`:``}`,ref:re,"data-testid":`dropzone:${v}`,"data-puck-dropzone":v,style:l(c({},r),{"--puck-slot-min-empty-height":ne,backgroundColor:r?.backgroundColor}),children:[ae?(0,U.jsx)(G_,{contentIds:A,zoneCompound:v,renderItem:e=>(0,U.jsx)(Q_,{zoneCompound:v,componentId:e.componentId,dragAxis:I,index:e.index,collisionAxis:o,inDroppableZone:D,itemRef:e.measureRef},e.componentId)}):A.map((e,t)=>(0,U.jsx)(Q_,{zoneCompound:v,componentId:e,dragAxis:I,index:t,collisionAxis:o,inDroppableZone:D},e)),j?.linePlaceholder&&(0,U.jsx)(J_,{zoneRef:w,contentIds:C,index:j.index})]})}),ev=({config:e,item:t,metadata:n})=>{let r=e.components[t.type],i=Tt(e,t,t=>(0,U.jsx)(jt,l(c({},t),{config:e,metadata:n}))),a=(0,H.useMemo)(()=>({areaId:i.id,depth:1}),[i]),o=At(r.fields,i);return(0,U.jsx)(ag,{value:a,children:(0,U.jsx)(r.render,l(c(c({},i),o),{puck:l(c({},i.puck),{renderDropZone:tv,metadata:c(c({},n),r.metadata)})}))},i.id)},tv=e=>(0,U.jsx)(nv,c({},e)),nv=(0,H.forwardRef)(function({className:e,style:t,zone:n,as:r},i){let a=(0,H.useContext)(ng),{areaId:o=`root`}=a||{},{config:s,data:c,metadata:l}=(0,H.useContext)(av),u=`${o}:${n}`,d=c?.content||[];(0,H.useEffect)(()=>{d||a?.registerZone&&a?.registerZone(u)},[d]);let f=r??`div`;return!c||!s?null:(u!==`root:default-zone`&&(d=le(c,u).zones[u]),(0,U.jsx)(f,{className:e,style:t,ref:i,children:d.map(e=>s.components[e.type]?(0,U.jsx)(ev,{config:s,item:e,metadata:l},e.props.id):null)}))}),rv=e=>(0,U.jsx)(iv,c({},e)),iv=(0,H.forwardRef)(function(e,t){return(0,H.useContext)(ng)?.mode===`edit`?(0,U.jsx)(U.Fragment,{children:(0,U.jsx)($_,l(c({},e),{ref:t}))}):(0,U.jsx)(U.Fragment,{children:(0,U.jsx)(nv,l(c({},e),{ref:t}))})}),av=H.createContext({config:{components:{}},data:{root:{},content:[]},metadata:{}});function ov({config:e,data:t,metadata:n={}}){let r=l(c({},t),{root:t.root||{},content:t.content||[]}),i=`props`in r.root?r.root.props:r.root,a=i?.title||``,o=l(c({},i),{puck:{renderDropZone:rv,isEditing:!1,dragRef:null,metadata:n},title:a,editMode:!1,id:`puck-root`}),s=Tt(e,{type:`root`,props:o},t=>(0,U.jsx)(Nt,l(c({},t),{config:e,metadata:n}))),u=At(e.root?.fields,o),d=(0,H.useMemo)(()=>({mode:`render`,depth:0}),[]);return e.root?.render?(0,U.jsx)(av.Provider,{value:{config:e,data:r,metadata:n},children:(0,U.jsx)(ag,{value:d,children:(0,U.jsx)(e.root.render,l(c(c({},s),u),{children:(0,U.jsx)(tv,{zone:oe})}))})}):(0,U.jsx)(av.Provider,{value:{config:e,data:r,metadata:n},children:(0,U.jsx)(ag,{value:d,children:(0,U.jsx)(tv,{zone:oe})})})}d(),d();function sv(e,t,n){return u(this,null,function*(){let r=t().state.indexes.nodes[e];r?yield Xg(r.data,t,n):console.warn(`Warning: Could not find component with id "${e}" to resolve its data. Component may have been removed or the id is invalid.`)})}d();function cv(e,t,n){return u(this,null,function*(){let r=N(e,t().state);r?yield Xg(C(r),t,n):console.warn(`Warning: Could not find component for selector "${JSON.stringify(e)}" to resolve its data. Component may have been removed or the selector is invalid.`)})}var lv=(e,t)=>{let n={back:e.history.back,forward:e.history.forward,setHistories:e.history.setHistories,setHistoryIndex:e.history.setHistoryIndex,hasPast:e.history.hasPast(),hasFuture:e.history.hasFuture(),histories:e.history.histories,index:e.history.index},r={appState:D(e.state),config:e.config,dispatch:e.dispatch,getPermissions:e.permissions.getPermissions,refreshPermissions:e.permissions.refreshPermissions,resolveDataById:(e,n)=>sv(e,t,n),resolveDataBySelector:(e,n)=>cv(e,t,n),history:n,selectedItem:e.selectedItem||null,getItemBySelector:t=>N(t,e.state),getItemById:t=>e.state.indexes.nodes[t].data,getSelectorForId:t=>Yg(e.state,t),getParentById:t=>{let n=e.state.indexes.nodes[t].parentId;if(n===null)return;let r=e.state.indexes.nodes[n];if(r)return r.data},dictionary:e.dictionary};return r.__private={appState:e.state},r},uv=(0,H.createContext)(null),dv=e=>({state:e.state,config:e.config,dispatch:e.dispatch,permissions:e.permissions,history:e.history,selectedItem:e.selectedItem,dictionary:e.dictionary}),fv=e=>{let[t]=(0,H.useState)(()=>P(()=>lv(dv(e.getState()),e.getState)));return(0,H.useEffect)(()=>e.subscribe(e=>dv(e),n=>{t.setState(lv(n,e.getState))}),[]),t};d(),d(),d(),d(),d();var pv=p(`ComponentList`,{ComponentList:`_ComponentList_htktj_1`,"ComponentList--isExpanded":`_ComponentList--isExpanded_htktj_5`,"ComponentList-content":`_ComponentList-content_htktj_9`,"ComponentList-title":`_ComponentList-title_htktj_17`,"ComponentList-titleIcon":`_ComponentList-titleIcon_htktj_63`}),mv=({name:e,label:t})=>{let n=V(e=>e.overrides),r=V(t=>t.permissions.getPermissions({type:e}).insert);return(0,H.useEffect)(()=>{n.componentItem&&console.warn("The `componentItem` override has been deprecated and renamed to `drawerItem`")},[n]),(0,U.jsx)(y_.Item,{label:t,name:e,isDragDisabled:!r,children:n.componentItem??n.drawerItem})},hv=({children:e,title:t,id:n})=>{let r=V(e=>e.config),i=V(e=>e.setUi),a=V(e=>e.state.ui.componentList),{expanded:o=!0}=a[n]||{},s=`puck-drawer-category-${n}`,u=B(`drawer-category-collapse`,{title:t??``}),d=B(`drawer-category-expand`,{title:t??``});return(0,U.jsxs)(`div`,{className:pv({isExpanded:o}),children:[t&&(0,U.jsxs)(`button`,{type:`button`,className:pv(`title`),"aria-expanded":o,"aria-controls":s,onClick:()=>i({componentList:l(c({},a),{[n]:l(c({},a[n]),{expanded:!o})})}),title:o?u:d,children:[(0,U.jsx)(`div`,{children:t}),(0,U.jsx)(`div`,{className:pv(`titleIcon`),children:o?(0,U.jsx)(Be,{size:12}):(0,U.jsx)(me,{size:12})})]}),(0,U.jsx)(`div`,{className:pv(`content`),id:s,children:(0,U.jsx)(y_,{children:e||Object.keys(r.components).map(e=>(0,U.jsx)(mv,{label:r.components[e].label??e,name:e},e))})})]})};hv.Item=mv;var gv=()=>{let[e,t]=(0,H.useState)(),n=V(e=>e.config),r=V(e=>e.state.ui.componentList),i=B(`drawer-category-other`);return(0,H.useEffect)(()=>{if(Object.keys(r).length>0){let e=[],a;a=Object.entries(r).map(([t,r])=>!r.components||(r.components.forEach(t=>{e.push(t)}),r.visible===!1)?null:(0,U.jsx)(hv,{id:t,title:n.categories?.[t]?.title||r.title||t,children:r.components.map((e,t)=>{let r=n.components[e]||{};return(0,U.jsx)(hv.Item,{label:r.label??e,name:e,index:t},e)})},t));let o=Object.keys(n.components).filter(t=>e.indexOf(t)===-1);o.length>0&&!r.other?.components&&r.other?.visible!==!1&&a.push((0,U.jsx)(hv,{id:`other`,title:r.other?.title||i,children:o.map((e,t)=>{let r=n.components[e]||{};return(0,U.jsx)(hv.Item,{name:e,label:r.label??e,index:t},e)})},`other`)),t(a)}},[n.categories,n.components,r,i]),e},_v=()=>{let e=V(e=>e.overrides),t=gv(),n=(0,H.useMemo)(()=>(e.components&&console.warn("The `components` override has been deprecated and renamed to `drawer`"),e.components||e.drawer||`div`),[e]);return(0,U.jsx)(n,{children:t||(0,U.jsx)(hv,{id:`all`})})};d();var vv=p(`BlocksPlugin`,{BlocksPlugin:`_BlocksPlugin_9af19_1`}),yv=(e={})=>({name:`blocks`,label:e.label??`Blocks`,render:()=>(0,U.jsx)(`div`,{className:vv(),children:(0,U.jsx)(_v,{})}),icon:e.icon??(0,U.jsx)(pe,{})});d(),d(),d();var bv=(e,t)=>Object.keys(e.indexes.zones).filter(e=>e.split(`:`)[0]===t);d(),d(),d(),d(),d(),d(),d();function xv(e,t){if(typeof e!=`string`)throw Error(`Can't get field definition for path (${e}): Path should be a string`);if(!t||typeof t!=`object`)return;let n=e.split(/\.|\[\d+\]/).filter(Boolean),r=t,i;for(let e=0;e<n.length;e++){let t=n[e];if(i=r[t],e===n.length-1)return i;if(!i||(i.type!==`object`||!i.objectFields)&&(i.type!==`array`||!i.arrayFields))return;i.type===`object`&&(r=i.objectFields),i.type===`array`&&(r=i.arrayFields)}}var Sv=(e,t,n)=>{let[r,i]=e.split(`:`);if(!i)return;let a=n[r]?.data.type;return xv(i,(a&&a!==`root`?t.components[a]:t.root)?.fields)},Cv={},wv=(e,t,n)=>{if(n.zones[e]?.type!==`slot`)return Cv;let r=Sv(e,t,n.nodes);return r?.type===`slot`?{allow:r.allow,disallow:r.disallow}:Cv},Tv=`outline-item`,Ev=`outline-zone`,Dv=(e,t,n)=>{let r=e.get(t);if(r!==void 0)return r;let i=n();return e.set(t,i),i},Ov=(e,t,n,r,i)=>Dv(e,`zone:${t}`,()=>Pg(n,wv(t,r,i))),kv=(e,t,n,r,i)=>Dv(e,`childZones:${t}`,()=>Object.keys(i.zones).some(a=>a.startsWith(`${t}:`)&&Ov(e,a,n,r,i))),Av=(e,t,n,r)=>Dv(e,`subtree:${t}`,()=>t===n||(r[t]?.path||[]).some(e=>e.split(`:`)[0]===n)),jv=(e,t)=>n=>{if(n.type!==Tv)return!1;let r=n.data,i=e.outlineStore.getState().acceptCache,{config:a,state:o}=e.appStore.getState(),s=o.indexes;return Av(i,t.kind===`row`?t.itemId:t.zoneCompound.split(`:`)[0],r.itemId,s.nodes)?!1:t.kind===`zone`?Ov(i,t.zoneCompound,r.componentType,a,s):Ov(i,t.zoneCompound,r.componentType,a,s)||kv(i,t.itemId,r.componentType,a,s)};d();var Mv=600,Nv=()=>{let e=null,t=null,n=()=>{e!==null&&(clearTimeout(e),e=null),t=null};return P((r,i)=>({status:`idle`,draggedRow:null,tempExpandedIds:new Set,expandCandidateId:null,indicator:null,drop:null,acceptCache:new Map,startDrag:e=>r({status:`dragging`,draggedRow:e,acceptCache:new Map}),setTarget:(e,t)=>{let n=i();(n.indicator?.targetId!==e.targetId||n.indicator?.position!==e.position||n.drop?.zone!==t.zone||n.drop?.index!==t.index)&&r({indicator:e,drop:t})},clearTarget:()=>{(i().indicator!==null||i().drop!==null)&&r({indicator:null,drop:null})},scheduleExpand:(a,o)=>{t===a||i().tempExpandedIds.has(a)||(n(),t=a,r({expandCandidateId:a}),e=setTimeout(()=>{e=null,t=null,r(e=>({tempExpandedIds:new Set(e.tempExpandedIds).add(a),expandCandidateId:null})),o()},Mv))},cancelPendingExpand:()=>{n(),i().expandCandidateId!==null&&r({expandCandidateId:null})},endDrag:()=>{n(),r({status:`dropping`,indicator:null,drop:null,expandCandidateId:null})},reset:()=>{n(),r({status:`idle`,draggedRow:null,tempExpandedIds:new Set,expandCandidateId:null,indicator:null,drop:null,acceptCache:new Map})}}))},Pv=(0,H.createContext)(Nv()),Fv=()=>(0,H.useContext)(Pv),Iv=e=>Fm(Pv,e),Lv=({kind:e,zoneCompound:t})=>{let n=z(),r=Fv(),i=`${e}:${t}`,{ref:a}=Ef({id:i,type:Ev,accept:(0,H.useMemo)(()=>jv({appStore:n,outlineStore:r},{kind:`zone`,zoneCompound:t}),[n,r,t]),collisionDetector:th,data:{kind:`zone`,zoneCompound:t}}),o=Iv(e=>e.indicator?.targetId===i);return(0,H.useMemo)(()=>({isDropTarget:o,ref:a}),[o,a])};d(),d();var Rv=p(`DropLine`,{DropLine:`_DropLine_eyz3q_2`,"DropLine--top":`_DropLine--top_eyz3q_12`,"DropLine--bottom":`_DropLine--bottom_eyz3q_16`,"DropLine--outset":`_DropLine--outset_eyz3q_20`}),zv=({edge:e,outset:t})=>(0,U.jsx)(`div`,{className:Rv({top:e===`top`,bottom:e===`bottom`,outset:!!t})});d(),d(),d(),d();var Bv=(...e)=>[...e].filter(Boolean).join(` `);d();var Vv=p(`LayerTree`,{"LayerTree-helper":`_LayerTree-helper_1m7e4_2`,"LayerTree-helperRoot":`_LayerTree-helperRoot_1m7e4_11`}),Hv=({zoneCompound:e})=>{let{ref:t,isDropTarget:n}=Lv({kind:`empty`,zoneCompound:e}),r=B(`outline-empty`),[i]=e.split(`:`),a=i===se;return(0,U.jsxs)(`li`,{className:Bv(Vv(`helper`),a?Vv(`helperRoot`):void 0),"data-puck-drop-target":n||void 0,ref:t,children:[r,n&&(0,U.jsx)(zv,{edge:`top`})]})};d(),d();var Uv=({componentType:e,index:t,itemId:n,zoneCompound:r})=>{let i=z(),a=Fv(),o=(0,H.useMemo)(()=>jv({appStore:i,outlineStore:a},{kind:`row`,itemId:n,zoneCompound:r}),[i,a,n,r]),s=(0,H.useMemo)(()=>ah(`y`),[]),{handleRef:c,ref:l,isDragSource:u}=Up({id:n,index:t,group:r,type:Tv,accept:o,data:{kind:`row`,itemId:n,zoneCompound:r,index:t,componentType:e},collisionPriority:1,collisionDetector:s,transition:{duration:0},plugins:e=>[...e,iu.configure({feedback:`clone`,dropAnimation:null})]}),{indicatorPosition:d,isExpandCandidate:f,isTempExpanded:p}=Iv(e=>({indicatorPosition:e.indicator?.targetId===n?e.indicator.position:null,isExpandCandidate:e.expandCandidateId===n,isTempExpanded:e.tempExpandedIds.has(n)}));return{rowRef:(0,H.useCallback)(e=>{l(e),c(e)},[l,c]),isDragSource:u,indicatorPosition:d,isExpandCandidate:f,isTempExpanded:p}};d();var Wv={Layer:`_Layer_onfgu_1`,"Layer-inner":`_Layer-inner_onfgu_8`,"Layer--isSortable":`_Layer--isSortable_onfgu_18`,"Layer-content":`_Layer-content_onfgu_22`,"Layer-clickable":`_Layer-clickable_onfgu_29`,"Layer-caret":`_Layer-caret_onfgu_57`,"Layer--containsZone":`_Layer--containsZone_onfgu_68`,"Layer-title":`_Layer-title_onfgu_76`,"Layer-name":`_Layer-name_onfgu_85`,"Layer-icon":`_Layer-icon_onfgu_91`,"Layer-zones":`_Layer-zones_onfgu_101`,"Layer--isExpanded":`_Layer--isExpanded_onfgu_106`,"Layer--isSelected":`_Layer--isSelected_onfgu_115`,"Layer--isExpandCandidate":`_Layer--isExpandCandidate_onfgu_138`,"Layer--isDragSource":`_Layer--isDragSource_onfgu_143`};d(),d();var Gv=p(`LayerActions`,{LayerActions:`_LayerActions_d90t9_2`,"LayerActions--visible":`_LayerActions--visible_d90t9_18`}),Kv=({node:e,visible:t})=>{let n=V(e=>e.dispatch),r=Fv(),i=V(zt(t=>{let n=N({index:e.index,zone:e.zoneCompound},t.state),r=t.permissions.getPermissions({item:n});return{delete:r.delete,duplicate:r.duplicate}})),a=B(`outline-item-duplicate`),o=B(`outline-item-delete`),s=(0,H.useCallback)(t=>{t.stopPropagation(),r.getState().status===`idle`&&n({type:`remove`,index:e.index,zone:e.zoneCompound})},[n,r,e]),c=(0,H.useCallback)(t=>{t.stopPropagation(),r.getState().status===`idle`&&n({type:`duplicate`,sourceIndex:e.index,sourceZone:e.zoneCompound})},[n,r,e.index,e.zoneCompound]);return!i.delete&&!i.duplicate?null:(0,U.jsxs)(`div`,{className:Gv({visible:t}),children:[i.duplicate&&(0,U.jsx)(Ee,{onClick:c,title:a,type:`button`,children:(0,U.jsx)(xe,{})}),i.delete&&(0,U.jsx)(Ee,{onClick:s,title:o,type:`button`,children:(0,U.jsx)(Le,{})})]})},qv=p(`Layer`,Wv),Jv=(0,H.forwardRef)(function({dataIndex:e,depth:t,isSelected:n,node:r,selectedId:i},a){let o=V(e=>e.dispatch),s=V(e=>e.state.ui.itemExpanded?.[r.itemId]??!1),u=Fm(rg,e=>e.hoveringComponent===r.itemId),d=V(e=>{let t=N({index:r.index,zone:r.zoneCompound},e.state);return e.permissions.getPermissions({item:t})?.drag}),{indicatorPosition:f,isDragSource:p,isExpandCandidate:m,isTempExpanded:h,rowRef:g}=Uv({componentType:r.componentType,index:r.index,itemId:r.itemId,zoneCompound:r.zoneCompound}),_=(0,H.useContext)(rg),v=Fv(),y=B(`outline-item-collapse`),b=B(`outline-item-expand`),x=r.childZones.length>0,S=(0,H.useCallback)(e=>{o({type:`setUi`,ui:{itemSelector:e}})},[o]),C=s||h,w=f!==null,T=r.childZones.length!==1;return(0,U.jsxs)(`li`,{ref:a,className:qv({containsZone:x,isDragSource:p,isExpandCandidate:m,isExpanded:C,isHovering:u,isSelected:n,isSortable:d}),"data-index":e,"data-puck-layer-tree-id":r.itemId,children:[w&&(0,U.jsx)(zv,{edge:f===`before`?`top`:`bottom`,outset:!0}),(0,U.jsxs)(`div`,{className:qv(`inner`),ref:g,onMouseEnter:e=>{e.stopPropagation(),v.getState().status===`idle`&&_.setState({hoveringComponent:r.itemId})},onMouseLeave:e=>{e.stopPropagation(),_.setState({hoveringComponent:null})},children:[(0,U.jsx)(`div`,{className:qv(`caret`),children:(0,U.jsx)(Ee,{onClick:e=>{e.stopPropagation(),v.getState().status===`idle`&&o({type:`setUi`,ui:e=>{let t=c({},e.itemExpanded);return e.itemExpanded?.[r.itemId]?delete t[r.itemId]:t[r.itemId]=!0,{itemExpanded:t}},recordHistory:!1})},title:s?y:b,type:`button`,children:(0,U.jsx)(Oe,{})})}),(0,U.jsxs)(`div`,{className:qv(`content`),children:[(0,U.jsx)(`button`,{type:`button`,className:qv(`clickable`),onClick:()=>{v.getState().status===`idle`&&(S({index:r.index,zone:r.zoneCompound}),_.getState().scrollToComponent(r.itemId))},children:(0,U.jsxs)(`div`,{className:qv(`title`),children:[(0,U.jsx)(`div`,{className:qv(`icon`),children:r.componentType===`Text`||r.componentType===`Heading`?(0,U.jsx)(Ce,{}):(0,U.jsx)(ee,{})}),(0,U.jsx)(`div`,{className:qv(`name`),children:r.label})]})}),(0,U.jsx)(Kv,{node:r,visible:u&&!p})]})]}),x&&C&&r.childZones.map(e=>(0,U.jsx)(`div`,{className:qv(`zones`),children:(0,U.jsx)(ly,{depth:T?t+1:t,selectedId:i,tree:T?e:l(c({},e),{label:void 0})})},e.zoneCompound))]})});d();var Yv={LayerTree:`_LayerTree_o5tyt_1`,"LayerTree--nested":`_LayerTree--nested_o5tyt_12`},Xv=p(`LayerTree`,Yv),Zv=({depth:e,selectedId:t,tree:n})=>(0,U.jsxs)(`ul`,{className:Xv({nested:e>0}),children:[n.items.length===0&&(0,U.jsx)(Hv,{zoneCompound:n.zoneCompound}),n.items.map(n=>(0,U.jsx)(Jv,{depth:e,isSelected:t===n.itemId,node:n,selectedId:t},n.itemId))]});d();var Qv=p(`LayerTree`,Yv),$v=32,ey=8,ty=new Map,ny=e=>ty.get(e)??$v,ry=(e,t)=>{t<=0||ty.set(e,t)},iy=e=>{let t=e?.parentElement??null;for(;t;){let{overflow:e,overflowY:n}=getComputedStyle(t);if([e,n].some(e=>/auto|scroll/.test(e)))return t;t=t.parentElement}return null},ay=({depth:e,selectedId:t,tree:n})=>{let r=(0,H.useRef)(null),i=Iv(e=>e.draggedRow?.zoneCompound===n.zoneCompound?e.draggedRow.index:null),a=(0,H.useCallback)(e=>{let t=tm(e);return i!==null&&!t.includes(i)&&(t.push(i),t.sort((e,t)=>e-t)),t},[i]),o=bm({count:n.items.length,estimateSize:e=>ny(n.items[e].itemId),getItemKey:e=>n.items[e].itemId,getScrollElement:()=>iy(r.current),overscan:ey,rangeExtractor:a,measureElement:e=>{let t=Math.ceil(e.getBoundingClientRect().height),n=e.dataset.puckLayerTreeId;return n&&ry(n,t),t||$v}}),s=o.getVirtualItems(),c=o.getTotalSize(),l=[],u=0,d=-1;s.forEach(r=>{let i=n.items[r.index],a=Math.max(r.start-u,0);a>0&&l.push((0,U.jsx)(`li`,{"aria-hidden":`true`,style:{height:`${a}px`}},`gap:${n.zoneCompound}:${d}:${r.index}`)),l.push((0,U.jsx)(Jv,{dataIndex:r.index,depth:e,isSelected:t===i.itemId,node:i,ref:o.measureElement,selectedId:t},i.itemId)),u=r.end,d=r.index});let f=Math.max(c-u,0);return f>0&&l.push((0,U.jsx)(`li`,{"aria-hidden":`true`,style:{height:`${f}px`}},`gap:${n.zoneCompound}:${d}:end`)),(0,U.jsxs)(`ul`,{className:Qv({nested:e>0}),ref:r,children:[n.items.length===0&&(0,U.jsx)(Hv,{zoneCompound:n.zoneCompound}),l]})};d();var oy=p(`LayerTree`,{"LayerTree-zoneTitle":`_LayerTree-zoneTitle_fvhlh_2`,"LayerTree-zoneIcon":`_LayerTree-zoneIcon_fvhlh_19`}),sy=25,cy=({label:e,zoneCompound:t})=>{let{ref:n,isDropTarget:r}=Lv({kind:`label`,zoneCompound:t});return(0,U.jsxs)(`div`,{className:oy(`zoneTitle`),"data-puck-drop-target":r||void 0,ref:n,children:[(0,U.jsx)(`div`,{className:oy(`zoneIcon`),children:(0,U.jsx)(we,{})}),e,r&&(0,U.jsx)(zv,{edge:`bottom`})]})},ly=({depth:e,selectedId:t,tree:n})=>{let r=e===0&&n.items.length>=sy;return(0,U.jsxs)(U.Fragment,{children:[n.label&&(0,U.jsx)(cy,{label:n.label,zoneCompound:n.zoneCompound}),r?(0,U.jsx)(ay,{depth:e,selectedId:t,tree:n}):(0,U.jsx)(Zv,{depth:e,selectedId:t,tree:n})]})};d(),d(),d();function uy(e,t){return Object.keys(t).some(t=>t.startsWith(`${e}:`))}var dy=2,fy=60,py=(e,t)=>{let n,r=0,i=0,a=()=>{let o=sg()?.querySelector(`[data-puck-component="${e}"]`),s=o?o.getBoundingClientRect().top:null;r=s===n?r+1:0,n=s,i+=1,r>=dy||i>=fy?t(e):requestAnimationFrame(a)};requestAnimationFrame(a)},my=e=>{if(typeof document>`u`)return;let t=document.getElementById(`preview-frame`);e?t?.setAttribute(`data-puck-outline-dragging`,`true`):t?.removeAttribute(`data-puck-outline-dragging`)},hy=(e,t)=>{let n=e.operation.source,r=n?.data;if(!n||!r)return;let i=t.appStore.getState(),a=N({zone:r.zoneCompound,index:r.index},i.state);!a||!i.permissions.getPermissions({item:a}).drag?e.preventDefault():(t.outlineDndStore.getState().startDrag({itemId:r.itemId,zoneCompound:r.zoneCompound,index:r.index,componentType:r.componentType}),my(!0),i.dispatch({type:`setUi`,ui:{isDragging:!0},recordHistory:!1}))},gy=(e,t,n)=>{let r=n.outlineDndStore.getState(),i=r.draggedRow;if(!i)return;let a=e.operation.target;if(!a){r.cancelPendingExpand(),r.clearTarget();return}let o=a.data;if(o.kind===`zone`){r.cancelPendingExpand(),r.setTarget({targetId:a.id.toString(),position:`inside`},{zone:o.zoneCompound,index:0});return}let{config:s,state:c}=n.appStore.getState(),l=c.indexes,u=r.acceptCache;if(Ov(u,o.zoneCompound,i.componentType,s,l)){let e=t.collisionObserver.collisions[0]?.data,n=oh(e?.direction);r.setTarget({targetId:a.id.toString(),position:n},{zone:o.zoneCompound,index:sh({position:n,sourceIndex:i.index,targetIndex:o.index,isSameZone:o.zoneCompound===i.zoneCompound})})}else r.clearTarget();let d=!!c.ui.itemExpanded?.[o.itemId]||r.tempExpandedIds.has(o.itemId),f=uy(o.itemId,l.zones);!d&&f?r.scheduleExpand(o.itemId,()=>{requestAnimationFrame(()=>t.collisionObserver.forceUpdate(!0))}):r.cancelPendingExpand()},_y=(e,t)=>{let{source:n}=e.operation,r=t.outlineDndStore.getState(),i=r.draggedRow,a=e.canceled?null:r.drop,o=t.appStore.getState().dispatch;if(my(!1),i&&a){Qg(i.itemId,{zone:i.zoneCompound,index:i.index},{zone:a.zone,index:a.index},t.appStore);let e=a.zone!==i.zoneCompound||a.index!==i.index;o({type:`setUi`,ui:{itemSelector:{zone:a.zone,index:a.index},isDragging:!1},recordHistory:e}),py(i.itemId,t.scrollToComponent)}else o({type:`setUi`,ui:{isDragging:!1},recordHistory:!1});r.endDrag();let s=()=>t.outlineDndStore.getState().reset();if(!n||n.status===`idle`)s();else{let e=un(()=>{n.status===`idle`&&(s(),e?.())})}},vy=[],yy=({children:e})=>{let t=z(),n=(0,H.useContext)(rg),[r]=(0,H.useState)(()=>Nv()),i=V(e=>e.dnd?.disableOutlineDrag??!1),a=qm({mouse:[new qu.Distance({value:5})]}),o=(0,H.useMemo)(()=>({outlineDndStore:r,appStore:t,scrollToComponent:e=>n.getState().scrollToComponent(e)}),[r,t,n]);return(0,U.jsx)(Pv.Provider,{value:r,children:(0,U.jsx)(Gd,{sensors:i?vy:a,onBeforeDragStart:e=>{hy(e,o)},onDragOver:(e,t)=>{e.preventDefault(),gy(e,t,o)},onDragMove:(e,t)=>{gy(e,t,o)},onDragEnd:e=>{_y(e,o)},children:e})})};d();var by={LayerTreeRoot:`_LayerTreeRoot_1qowl_1`};d();var xy=e=>{let t={};return Object.keys(e).forEach(e=>{let[n]=e.split(`:`);n&&(t[n]||(t[n]=[]),t[n].push(e))}),t},Sy=(e,t,n,r)=>{if(r!==void 0)return r;let[,i]=e.split(`:`);if(i)return Sv(e,n,t)?.label??i},Cy=({config:e,itemId:t,index:n,nodes:r,zoneCompound:i,zones:a,zonesByParent:o,componentFallbackLabel:s})=>{let c=(r[t]?.data.type)?.toString()??s,l=e.components[c]?.label??c;return{childZones:(o[t]||[]).map(t=>wy({config:e,nodes:r,zoneCompound:t,zones:a,zonesByParent:o})),componentType:c,index:n,itemId:t,label:l,zoneCompound:i}},wy=({config:e,label:t,nodes:n,zoneCompound:r,zones:i,zonesByParent:a=xy(i),componentFallbackLabel:o})=>({items:(i[r]?.contentIds??[]).map((t,o)=>Cy({config:e,itemId:t,index:o,nodes:n,zoneCompound:r,zones:i,zonesByParent:a})),label:Sy(r,n,e,t),zoneCompound:r}),Ty=p(`LayerTreeRoot`,by),Ey=({selectedId:e,trees:t})=>{let n=V(e=>e.dnd?.disableOutlineDrag??!1);return(0,U.jsx)(yy,{children:(0,U.jsx)(`div`,{className:Ty(),"data-puck-dnd-disabled":n||void 0,children:t.map(t=>(0,U.jsx)(ly,{depth:0,selectedId:e,tree:t},t.zoneCompound))})})};d(),d();var Dy=p(`CollapseAll`,{CollapseAll:`_CollapseAll_1r4cy_1`,"CollapseAll-icon":`_CollapseAll-icon_1r4cy_5`,"CollapseAll--visible":`_CollapseAll--visible_1r4cy_10`});function Oy({className:e}){let t=V(e=>Object.keys(e.state.ui.itemExpanded??{}).length>0),n=V(e=>e.dispatch),r=B(`outline-header-collapseall`);return(0,U.jsx)(`div`,{className:Bv(Dy({visible:t}),e),children:(0,U.jsx)(Ee,{title:r,onClick:()=>{n({type:`setUi`,ui:{itemExpanded:{}}})},children:(0,U.jsx)(ge,{className:Dy(`icon`)})})})}var ky=Oy;d(),d();var Ay=p(`OutlineHeader`,{OutlineHeader:`_OutlineHeader_ntv8r_1`}),jy=({children:e,title:t})=>{let n=B(`outline-header-title`);return(0,U.jsxs)(`div`,{className:Ay(),children:[(0,U.jsx)(kh,{rank:`2`,size:`xs`,children:n??t}),e]})};d();var My=p(`OutlineWrapper`,{OutlineWrapper:`_OutlineWrapper_b9ln0_1`,"OutlineWrapper-collapseAll":`_OutlineWrapper-collapseAll_b9ln0_9`,"OutlineWrapper-layers":`_OutlineWrapper-layers_b9ln0_15`}),Ny=({children:e})=>(0,U.jsx)(`div`,{className:My(),children:e}),Py=()=>{let e=V(e=>e.overrides.outline),t=V(e=>e.config),n=V(e=>e.state.indexes.nodes),r=V(e=>e.state.indexes.zones),i=V(e=>e.selectedItem?.props.id||null),a=B(`label-component`),o=V(zt(e=>bv(e.state,`root`))),s=(0,H.useMemo)(()=>o.map(e=>wy({config:t,label:o.length===1?``:e.split(`:`)[1],nodes:n,zoneCompound:e,zones:r,componentFallbackLabel:a})),[t,n,o,r,a]),c=(0,H.useMemo)(()=>e||Ny,[e]);return(0,U.jsxs)(c,{children:[(0,U.jsx)(jy,{children:(0,U.jsx)(ky,{className:My(`collapseAll`)})}),(0,U.jsx)(`div`,{className:My(`layers`),children:(0,U.jsx)(Ey,{selectedId:i,trees:s})})]})};d();var Fy=p(`OutlinePlugin`,{OutlinePlugin:`_OutlinePlugin_1ylsc_1`}),Iy=(e={})=>({name:`outline`,label:e.label??`Outline`,render:()=>(0,U.jsx)(`div`,{className:Fy(),children:(0,U.jsx)(Py,{})}),icon:e.icon??(0,U.jsx)(we,{})});d(),d(),d();var Ly={Breadcrumbs:`_Breadcrumbs_8c6w5_1`,"Breadcrumbs-breadcrumbLabel":`_Breadcrumbs-breadcrumbLabel_8c6w5_7`,"Breadcrumbs-breadcrumb":`_Breadcrumbs-breadcrumb_8c6w5_7`};d();var Ry=e=>{let t=V(e=>e.selectedItem?.props.id),n=V(e=>e.config),r=V(e=>e.state.indexes.nodes[t]?.path),i=z(),a=B(`label-page`),o=B(`label-component`);return(0,H.useMemo)(()=>{let t=r?.map(e=>{let[t]=e.split(`:`);if(t===`root`)return{label:n?.root?.label||a,selector:null};let r=i.getState().state.indexes.nodes[t],s=r.path[r.path.length-1],c=(i.getState().state.indexes.zones[s]?.contentIds||[]).indexOf(t);return{label:r?n.components[r.data.type]?.label??r.data.type:o,selector:r?{index:c,zone:r.path[r.path.length-1]}:null}})||[];return e?t.slice(t.length-e):t},[r,e,a,o])},zy=p(`Breadcrumbs`,Ly),By=({children:e,numParents:t=1})=>{let n=V(e=>e.setUi),r=Ry(t);return(0,U.jsxs)(`div`,{className:zy(),children:[r.map((e,t)=>(0,U.jsxs)(`div`,{className:zy(`breadcrumb`),children:[(0,U.jsx)(`button`,{type:`button`,className:zy(`breadcrumbLabel`),onClick:()=>n({itemSelector:e.selector}),children:e.label}),(0,U.jsx)(Oe,{size:16})]},t)),e]})};d(),d();var Vy=p(`PuckFields`,{PuckFields:`_PuckFields_wnj25_1`,"PuckFields--isLoading":`_PuckFields--isLoading_wnj25_6`,"PuckFields-loadingOverlay":`_PuckFields-loadingOverlay_wnj25_10`,"PuckFields-loadingOverlayInner":`_PuckFields-loadingOverlayInner_wnj25_25`,"PuckFields-field":`_PuckFields-field_wnj25_32`,"PuckFields--wrapFields":`_PuckFields--wrapFields_wnj25_36`}),Hy=({children:e})=>(0,U.jsx)(U.Fragment,{children:e}),Uy=(e,t)=>(n,r)=>u(null,null,function*(){let{dispatch:i,state:a,selectedItem:o,resolveComponentData:s}=t.getState(),{data:u,ui:d}=a,{itemSelector:f}=d,p=u.root.props||u.root,m=o?o.props:p,h=l(c({},m),{[e]:n});if(o&&f){let e=yield s(l(c({},o),{props:h}),`replace`),n=Yg(t.getState().state,o.props.id);if(!n)return;i({type:`replace`,destinationIndex:n.index,destinationZone:n.zone||`root:default-zone`,data:e.node,ui:r})}else u.root.props?i({type:`replaceRoot`,root:(yield s(l(c({},u.root),{props:h}),`replace`)).node,ui:c(c({},d),r),recordHistory:!0}):i({type:`setData`,data:{root:h}})}),Wy=({fieldName:e})=>{let t=V(t=>t.fields.fields[e]),n=V(t=>((t.selectedItem?t.selectedItem.readOnly:t.state.data.root.readOnly)||{})[e]),r=V(n=>t?n.selectedItem?`${n.selectedItem.props.id}_${t.type}_${e}`:`root_${t.type}_${e}`:null),i=V(zt(e=>{let{selectedItem:t,permissions:n}=e;return t?n.getPermissions({item:t}):n.getPermissions({root:!0})})),a=z(),o=(0,H.useCallback)(Uy(e,a),[e]),{visible:s=!0}=t??{},c=(0,H.useContext)(Rm.ctx);return(0,H.useEffect)(()=>a.subscribe(t=>t.getCurrentData().props?.[e],t=>{c.setState({[e]:t})}),[a,c]),!t||!r||!s||t.type===`slot`?null:(0,U.jsx)(`div`,{className:Vy(`field`),children:(0,U.jsx)(Zh,{field:t,name:e,id:r,readOnly:!i.edit||n,onChange:o})},r)},Gy=(0,H.memo)(({fieldName:e})=>{let t=z(),n=(0,H.useMemo)(()=>{let n=t.getState().getCurrentData().props?.[e];return{[e]:n}},[]);return(0,U.jsx)(Rm.Provider,{value:n,children:(0,U.jsx)(Wy,{fieldName:e})})}),Ky=(0,H.memo)(({wrapFields:e=!0})=>{let t=V(e=>e.overrides),n=V(e=>((e.selectedItem?e.componentState[e.selectedItem.props.id]?.loadingCount:e.componentState.root?.loadingCount)??0)>0),r=V(zt(e=>e.state.ui.itemSelector)),i=V(e=>e.selectedItem?.props.id),a=z();R(a,i);let o=V(e=>e.fields.loading),s=V(zt(e=>e.fields.id===i?Object.keys(e.fields.fields):[])),c=o||n,l=(0,H.useMemo)(()=>t.fields||Hy,[t]);return(0,U.jsxs)(`form`,{className:Vy({wrapFields:e}),onSubmit:e=>{e.preventDefault()},children:[(0,U.jsx)(l,{isLoading:c,itemSelector:r,children:s.map(e=>(0,U.jsx)(Gy,{fieldName:e},e))}),c&&(0,U.jsx)(`div`,{className:Vy(`loadingOverlay`),children:(0,U.jsx)(`div`,{className:Vy(`loadingOverlayInner`),children:(0,U.jsx)(E,{size:16})})})]})});d();var qy=p(`FieldsPlugin`,{FieldsPlugin:`_FieldsPlugin_18cj3_1`,"FieldsPlugin-header":`_FieldsPlugin-header_18cj3_7`}),Jy=()=>{let e=B(`label-page`);return V(e=>{let t=e.selectedItem;return t?e.config.components[t.type]?.label??t.type:null})??e},Yy=({desktopSideBar:e=`right`,label:t,icon:n}={})=>({name:`fields`,label:t??`Fields`,render:()=>(0,U.jsxs)(`div`,{className:qy(),children:[(0,U.jsx)(`div`,{className:qy(`header`),children:(0,U.jsx)(By,{numParents:2,children:(0,U.jsx)(Jy,{})})}),(0,U.jsx)(Ky,{})]}),icon:n??(0,U.jsx)(Fe,{}),mobileOnly:e===`right`});d(),d(),d(),d(),d();var Xy=`@import "https://rsms.me/inter/inter.css";

/* styles/color.css */
@layer puck-tokens {
  :root {
    --puck-color-rose-01: #4a001c;
    --puck-color-rose-02: #670833;
    --puck-color-rose-03: #87114c;
    --puck-color-rose-04: #a81a66;
    --puck-color-rose-05: #bc5089;
    --puck-color-rose-06: #cc7ca5;
    --puck-color-rose-07: #d89aba;
    --puck-color-rose-08: #e3b8cf;
    --puck-color-rose-09: #efd6e3;
    --puck-color-rose-10: #f6eaf1;
    --puck-color-rose-11: #faf4f8;
    --puck-color-rose-12: #fef8fc;
    --puck-color-azure-01: #00175d;
    --puck-color-azure-02: #002c77;
    --puck-color-azure-03: #014292;
    --puck-color-azure-04: #0158ad;
    --puck-color-azure-05: #3479be;
    --puck-color-azure-06: #6499cf;
    --puck-color-azure-07: #88b0da;
    --puck-color-azure-08: #abc7e5;
    --puck-color-azure-09: #cfdff0;
    --puck-color-azure-10: #e7eef7;
    --puck-color-azure-11: #f3f6fb;
    --puck-color-azure-12: #f7faff;
    --puck-color-green-01: #002000;
    --puck-color-green-02: #043604;
    --puck-color-green-03: #084e08;
    --puck-color-green-04: #0c680c;
    --puck-color-green-05: #1d882f;
    --puck-color-green-06: #2faa53;
    --puck-color-green-07: #56c16f;
    --puck-color-green-08: #7dd78b;
    --puck-color-green-09: #b8e8bf;
    --puck-color-green-10: #ddf3e0;
    --puck-color-green-11: #eff8f0;
    --puck-color-green-12: #f3fcf4;
    --puck-color-yellow-01: #211000;
    --puck-color-yellow-02: #362700;
    --puck-color-yellow-03: #4c4000;
    --puck-color-yellow-04: #645a00;
    --puck-color-yellow-05: #877614;
    --puck-color-yellow-06: #ab9429;
    --puck-color-yellow-07: #bfac4e;
    --puck-color-yellow-08: #d4c474;
    --puck-color-yellow-09: #e6deb1;
    --puck-color-yellow-10: #f3efd9;
    --puck-color-yellow-11: #f9f7ed;
    --puck-color-yellow-12: #fcfaf0;
    --puck-color-red-01: #4c0000;
    --puck-color-red-02: #6a0a10;
    --puck-color-red-03: #8a1422;
    --puck-color-red-04: #ac1f35;
    --puck-color-red-05: #bf5366;
    --puck-color-red-06: #ce7e8e;
    --puck-color-red-07: #d99ca8;
    --puck-color-red-08: #e4b9c2;
    --puck-color-red-09: #efd7db;
    --puck-color-red-10: #f6eaec;
    --puck-color-red-11: #faf4f5;
    --puck-color-red-12: #fff9fa;
    --puck-color-grey-01: #181818;
    --puck-color-grey-02: #292929;
    --puck-color-grey-03: #404040;
    --puck-color-grey-04: #5a5a5a;
    --puck-color-grey-05: #767676;
    --puck-color-grey-06: #949494;
    --puck-color-grey-07: #ababab;
    --puck-color-grey-08: #c3c3c3;
    --puck-color-grey-09: #dcdcdc;
    --puck-color-grey-10: #efefef;
    --puck-color-grey-11: #f5f5f5;
    --puck-color-grey-12: #fafafa;
    --puck-color-black: #000000;
    --puck-color-white: #ffffff;
  }
}

/* styles/tokens.css */
@layer puck-tokens {
  :root {
    --puck-color-surface: var(--puck-color-white);
    --puck-color-surface-muted: var(--puck-color-grey-11);
    --puck-color-surface-subtle: var(--puck-color-grey-12);
    --puck-color-surface-inverse: var(--puck-color-grey-01);
    --puck-color-border: var(--puck-color-grey-09);
    --puck-color-border-hover: var(--puck-color-grey-05);
    --puck-color-border-muted: var(--puck-color-grey-10);
    --puck-color-border-inverse: var(--puck-color-grey-05);
    --puck-color-text: var(--puck-color-black);
    --puck-color-text-secondary: var(--puck-color-grey-04);
    --puck-color-text-muted: var(--puck-color-grey-05);
    --puck-color-text-subtle: var(--puck-color-grey-07);
    --puck-color-text-inverse: var(--puck-color-white);
    --puck-opacity-text-inverse: 0.75;
    --puck-color-interactive: var(--puck-color-azure-04);
    --puck-color-interactive-hover: var(--puck-color-azure-03);
    --puck-color-interactive-active: var(--puck-color-azure-02);
    --puck-color-interactive-subtle: var(--puck-color-azure-10);
    --puck-color-interactive-soft: var(--puck-color-azure-11);
    --puck-color-interactive-soft-hover: var(--puck-color-azure-12);
    --puck-color-interactive-neutral-hover: var(--puck-color-grey-10);
    --puck-color-interactive-inverse-hover: var(--puck-color-azure-06);
    --puck-color-interactive-inverse-active: var(--puck-color-azure-07);
    --puck-color-focus-ring: var(--puck-color-azure-05);
    --puck-color-selection-bg: color-mix( in srgb, var(--puck-color-azure-09) 30%, transparent );
    --puck-color-selection-border: var(--puck-color-azure-08);
    --puck-color-line-placeholder: var(--puck-color-azure-06);
    --puck-color-highlight: var(--puck-color-rose-07);
    --puck-color-bg-disabled: var(--puck-color-grey-07);
    --puck-color-text-disabled: var(--puck-color-grey-03);
    --puck-color-overlay-backdrop: color-mix( in srgb, var(--puck-color-black) 75%, transparent );
    --puck-space-1: 4px;
    --puck-space-2: 8px;
    --puck-space-3: 12px;
    --puck-space-4: 16px;
    --puck-space-5: 24px;
    --puck-space-chrome-gutter: var(--puck-space-4);
    --puck-radius-none: 0;
    --puck-radius-xs: 2px;
    --puck-radius-s: 3px;
    --puck-radius-m: 4px;
    --puck-radius-l: 8px;
    --puck-radius-pill: 30px;
    --puck-radius-round: 100%;
    --puck-border-width-hairline: 0.5px;
    --puck-border-width-regular: 1px;
    --puck-border-width-focus: 2px;
    --puck-border-width-strong: 4px;
    --puck-duration-fast: 50ms;
    --puck-duration-medium: 150ms;
    --puck-duration-slow: 250ms;
    --puck-ease-exit: ease-in;
    --puck-ease-emphasized: ease-in-out;
    --puck-ease-entrance: ease-out;
    --puck-font-weight-regular: 400;
    --puck-font-weight-medium: 500;
    --puck-font-weight-semibold: 600;
    --puck-font-weight-bold: 700;
    --puck-font-weight-heavy: 800;
    --puck-letter-spacing-ui: 0.05ch;
    --puck-letter-spacing-heading: 0.08ch;
    --puck-icon-size-xs: 14px;
    --puck-icon-size-s: 16px;
    --puck-icon-size-m: 18px;
    --puck-icon-size-l: 24px;
    --puck-space-m-unitless: 24;
    --puck-user-sidebar-left-width: var(--puck-sidebar-width);
    --puck-user-sidebar-right-width: var(--puck-sidebar-width);
    --puck-slot-min-empty-height: 128px;
    --puck-line-placeholder-width: 2px;
  }
}

/* styles/typography.css */
@layer puck-tokens {
  :root {
    --puck-font-size-scale-base-unitless: 12;
    --puck-font-size-xxxs-unitless: 12;
    --puck-font-size-xxs-unitless: 14;
    --puck-font-size-xs-unitless: 16;
    --puck-font-size-s-unitless: 18;
    --puck-font-size-m-unitless: 21;
    --puck-font-size-l-unitless: 24;
    --puck-font-size-xl-unitless: 28;
    --puck-font-size-xxl-unitless: 36;
    --puck-font-size-xxxl-unitless: 48;
    --puck-font-size-xxxxl-unitless: 56;
    --puck-font-size-xxxs: calc( 1rem * var(--puck-font-size-xxxs-unitless) / 16 );
    --puck-font-size-xxs: calc(1rem * var(--puck-font-size-xxs-unitless) / 16);
    --puck-font-size-xs: calc(1rem * var(--puck-font-size-xs-unitless) / 16);
    --puck-font-size-s: calc(1rem * var(--puck-font-size-s-unitless) / 16);
    --puck-font-size-m: calc(1rem * var(--puck-font-size-m-unitless) / 16);
    --puck-font-size-l: calc(1rem * var(--puck-font-size-l-unitless) / 16);
    --puck-font-size-xl: calc(1rem * var(--puck-font-size-xl-unitless) / 16);
    --puck-font-size-xxl: calc(1rem * var(--puck-font-size-xxl-unitless) / 16);
    --puck-font-size-xxxl: calc( 1rem * var(--puck-font-size-xxxl-unitless) / 16 );
    --puck-font-size-xxxxl: calc( 1rem * var(--puck-font-size-xxxxl-unitless) / 16 );
    --puck-font-size-base: var(--puck-font-size-xs);
    --puck-line-height-reset: 1;
    --puck-line-height-xs: calc( var(--puck-space-m-unitless) / var(--puck-font-size-m-unitless) );
    --puck-line-height-s: calc( var(--puck-space-m-unitless) / var(--puck-font-size-s-unitless) );
    --puck-line-height-m: calc( var(--puck-space-m-unitless) / var(--puck-font-size-xs-unitless) );
    --puck-line-height-l: calc( var(--puck-space-m-unitless) / var(--puck-font-size-xxs-unitless) );
    --puck-line-height-xl: calc( var(--puck-space-m-unitless) / var(--puck-font-size-scale-base-unitless) );
    --puck-line-height-base: var(--puck-line-height-m);
    --puck-fallback-font-stack:
      -apple-system,
      BlinkMacSystemFont,
      Segoe UI,
      Helvetica Neue,
      sans-serif,
      Apple Color Emoji,
      Segoe UI Emoji,
      Segoe UI Symbol;
    --puck-font-family: Inter, var(--puck-fallback-font-stack);
    --puck-font-family-monospaced:
      ui-monospace,
      "Cascadia Code",
      "Source Code Pro",
      Menlo,
      Consolas,
      "DejaVu Sans Mono",
      monospace;
  }
  @supports (font-variation-settings: normal) {
    :root {
      --puck-font-family: InterVariable, var(--puck-fallback-font-stack);
    }
  }
}

/* bundle/core.css */
:root {
  --_puck-styles-loaded: "true";
}
#frame-root {
  height: 1px;
  min-height: 100vh;
}
[data-puck-entry] {
  position: relative;
  z-index: 0;
}

/* bundle/index.css */

/* css-module:/home/runner/work/puck/puck/packages/core/components/ActionBar/styles.module.css/#css-module-data */
._ActionBar_5vdfr_1 {
  align-items: center;
  cursor: default;
  display: flex;
  width: auto;
  padding-top: var(--puck-actionbar-space-y, var(--puck-space-1));
  padding-bottom: var(--puck-actionbar-space-y, var(--puck-space-1));
  padding-inline-start: var(--puck-actionbar-space-x, 0);
  padding-inline-end: var(--puck-actionbar-space-x, 0);
  border-radius: var(--puck-actionbar-radius, var(--puck-radius-l));
  background: var(--puck-actionbar-color-bg, var(--puck-color-surface-inverse));
  color: var(--puck-color-text-inverse);
  font-family: var(--puck-font-family);
  min-height: 26px;
}
._ActionBar-label_5vdfr_17 {
  color: var(--puck-actionbar-color-text, var(--puck-color-text-inverse));
  font-size: var(--puck-actionbar-font-size, var(--puck-font-size-xxxs));
  opacity: var(--puck-actionbar-opacity-text, var(--puck-opacity-text-inverse));
  font-weight: var(--puck-font-weight-medium);
  padding-inline-start: var(--puck-space-2);
  padding-inline-end: var(--puck-space-2);
  margin-inline-start: var(--puck-space-1);
  margin-inline-end: var(--puck-space-1);
  text-overflow: ellipsis;
  white-space: nowrap;
}
._ActionBarAction_5vdfr_30 + ._ActionBar-label_5vdfr_17 {
  padding-inline-start: 0;
}
._ActionBar-label_5vdfr_17 + ._ActionBarAction_5vdfr_30 {
  margin-inline-start: calc(var(--puck-space-1) * -1);
}
._ActionBar-group_5vdfr_38 {
  align-items: center;
  border-inline-start: var(--puck-border-width-hairline) solid var(--puck-actionbar-color-separator, var(--puck-color-border-inverse));
  display: flex;
  height: 100%;
  padding-inline-start: var(--puck-space-1);
  padding-inline-end: var(--puck-space-1);
}
._ActionBar-group_5vdfr_38:first-of-type {
  border-inline-start: 0;
}
._ActionBar-group_5vdfr_38:empty {
  display: none;
}
._ActionBarAction_5vdfr_30 {
  background: transparent;
  border: none;
  color: var(--puck-actionbar-color-text, var(--puck-color-text-inverse));
  cursor: pointer;
  padding: var(--puck-actionbar-action-space, 6px);
  margin-inline-start: var(--puck-space-1);
  margin-inline-end: var(--puck-space-1);
  border-radius: var(--puck-radius-m);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: var(--puck-actionbar-opacity-text, var(--puck-opacity-text-inverse));
  transition: color var(--puck-duration-fast) var(--puck-ease-exit), opacity var(--puck-duration-fast) var(--puck-ease-exit);
}
._ActionBarAction--disabled_5vdfr_74 {
  cursor: auto;
  color: var( --puck-actionbar-color-action-disabled, var(--puck-color-text-inverse) );
  opacity: var(--puck-actionbar-opacity-action-disabled, 0.54);
}
._ActionBarAction_5vdfr_30 svg {
  max-width: none !important;
}
._ActionBarAction_5vdfr_30:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: calc(var(--puck-border-width-focus) * -1);
}
@media (hover: hover) and (pointer: fine) {
  ._ActionBarAction_5vdfr_30:hover:not(._ActionBarAction--disabled_5vdfr_74) {
    color: var( --puck-actionbar-color-action-hover, var(--puck-color-interactive-inverse-hover) );
    opacity: 1;
    transition: none;
  }
}
._ActionBarAction_5vdfr_30:active:not(._ActionBarAction--disabled_5vdfr_74),
._ActionBarAction--active_5vdfr_104 {
  color: var( --puck-actionbar-color-action-active, var(--puck-color-interactive-inverse-active) );
  opacity: 1;
  transition: none;
}
._ActionBar-group_5vdfr_38 * {
  margin: 0;
}
._ActionBar-separator_5vdfr_117 {
  background: var( --puck-actionbar-color-separator, var(--puck-color-border-inverse) );
  margin-inline: var(--puck-space-1);
  width: var( --puck-border-width-hairline );
  height: 100%;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/AutoField/styles.module.css/#css-module-data */
._InputWrapper_qyenz_1 + ._InputWrapper_qyenz_1 {
  margin-top: var(--puck-space-3);
}
._Input-label_qyenz_5 {
  align-items: center;
  color: var(--puck-field-label-color-text, var(--puck-color-text-secondary));
  display: flex;
  padding-bottom: var(--puck-field-label-space-y, var(--puck-space-3));
  font-size: var(--puck-field-label-font-size, var(--puck-font-size-xxs));
  font-weight: var( --puck-field-label-font-weight, var(--puck-font-weight-semibold) );
}
._Input-labelIcon_qyenz_17 {
  color: var(--puck-field-label-color-icon, var(--puck-color-text-subtle));
  display: flex;
  margin-inline-end: var(--puck-space-1);
  padding-inline-start: var(--puck-space-1);
}
._Input-disabledIcon_qyenz_24 {
  color: var(--puck-color-text-muted);
  margin-inline-start: auto;
}
._Input-input_qyenz_29 {
  background: var(--puck-field-color-bg, var(--puck-color-surface));
  border-width: var( --puck-field-border-width, var(--puck-border-width-regular) );
  border-style: solid;
  border-color: var(--puck-field-color-border, var(--puck-color-border));
  border-radius: var(--puck-field-radius, var(--puck-radius-m));
  box-sizing: border-box;
  color: var(--puck-field-color-text, var(--puck-color-text));
  font-family: inherit;
  font-size: var(--puck-font-size-xs);
  padding: var(--puck-field-space-y, var(--puck-space-3)) var( --puck-field-space-x, calc( var(--puck-space-4) - var(--puck-field-border-width, var(--puck-border-width-regular)) ) );
  transition: border-color var(--puck-duration-fast) var(--puck-ease-exit);
  width: 100%;
  max-width: 100%;
}
@media (min-width: 458px) {
  ._Input-input_qyenz_29 {
    font-size: var(--puck-field-font-size, var(--puck-font-size-xxs));
  }
}
._Input-select_qyenz_61 {
  position: relative;
  width: 100%;
}
select._Input-input_qyenz_29 {
  appearance: none;
  cursor: pointer;
}
._Input-selectIcon_qyenz_71 {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  fill: var(--puck-field-color-border, var(--puck-color-border));
  stroke-width: 0;
}
._Input-selectIcon_qyenz_71:dir(rtl) {
  right: auto;
  left: 12px;
}
@media (hover: hover) and (pointer: fine) {
  ._Input_qyenz_1:has(> input):hover ._Input-input_qyenz_29:not([readonly]),
  ._Input_qyenz_1:has(> textarea):hover ._Input-input_qyenz_29:not([readonly]) {
    border-color: var( --puck-field-color-border-hover, var(--puck-color-border-hover) );
    transition: none;
  }
  ._Input_qyenz_1:has(> ._Input-select_qyenz_61):hover ._Input-input_qyenz_29:not([disabled]) {
    color: var( --puck-field-color-text-hover, var(--puck-field-color-text, var(--puck-color-text)) );
    background-color: var( --puck-field-color-bg-hover, var(--puck-color-interactive-soft-hover) );
    border-color: var( --puck-field-color-border-hover, var(--puck-color-border-hover) );
    transition: none;
  }
  ._Input_qyenz_1:not(._Input--readOnly_qyenz_111):has(> ._Input-select_qyenz_61):hover ._Input-selectIcon_qyenz_71 {
    fill: var(--puck-field-color-border-hover, var(--puck-color-border-hover));
  }
}
._Input-input_qyenz_29:focus {
  border-color: var( --puck-field-color-border-hover, var(--puck-color-border-hover) );
  outline: var(--puck-border-width-focus) solid var(--puck-field-color-border-focus, var(--puck-color-focus-ring));
  transition: none;
}
._Input--readOnly_qyenz_111 > ._Input-input_qyenz_29,
._Input--readOnly_qyenz_111 > ._Input-select_qyenz_61 > select._Input-input_qyenz_29 {
  background-color: var( --puck-field-color-bg-disabled, var(--puck-color-surface-muted) );
  border-color: var( --puck-field-color-border-disabled, var(--puck-color-border) );
  color: var( --puck-field-color-text-disabled, var(--puck-color-text-secondary) );
  cursor: default;
  opacity: 1;
  outline: 0;
  transition: none;
}
._Input--readOnly_qyenz_111 > ._Input-select_qyenz_61 > select._Input-input_qyenz_29 ~ ._Input-selectIcon_qyenz_71 {
  fill: var(--puck-field-color-text-disabled, var(--puck-color-text-secondary));
}
._Input-radioGroupItems_qyenz_150 {
  --_puck-field-radio-radius: var(--puck-field-radius, var(--puck-radius-m));
  --_puck-field-radio-border-width: var( --puck-field-border-width, var(--puck-border-width-regular) );
  --_puck-field-radio-border-color: var( --puck-field-color-border, var(--puck-color-border) );
  display: flex;
  border: var(--_puck-field-radio-border-width) solid var(--_puck-field-radio-border-color);
  border-radius: var(--_puck-field-radio-radius);
  flex-wrap: wrap;
}
._Input-radio_qyenz_150 {
  border-inline-end: var(--_puck-field-radio-border-width) solid var(--_puck-field-radio-border-color);
  flex-grow: 1;
}
._Input-radio_qyenz_150:first-of-type {
  border-bottom-left-radius: var(--_puck-field-radio-radius);
  border-top-left-radius: var(--_puck-field-radio-radius);
}
._Input-radio_qyenz_150:first-of-type ._Input-radioInner_qyenz_179 {
  border-bottom-left-radius: calc(var(--_puck-field-radio-radius) - var(--_puck-field-radio-border-width));
  border-top-left-radius: calc(var(--_puck-field-radio-radius) - var(--_puck-field-radio-border-width));
}
._Input-radio_qyenz_150:last-of-type {
  border-bottom-right-radius: var(--_puck-field-radio-radius);
  border-inline-end: 0;
  border-top-right-radius: var(--_puck-field-radio-radius);
}
._Input-radio_qyenz_150:last-of-type ._Input-radioInner_qyenz_179 {
  border-bottom-right-radius: calc(var(--_puck-field-radio-radius) - var(--_puck-field-radio-border-width));
  border-top-right-radius: calc(var(--_puck-field-radio-radius) - var(--_puck-field-radio-border-width));
}
._Input-radioInner_qyenz_179 {
  background-color: var(--puck-field-color-bg, var(--puck-color-surface));
  color: var(--puck-field-color-text, var(--puck-color-text));
  cursor: pointer;
  font-size: var(--puck-field-font-size, var(--puck-font-size-xxs));
  padding: var(--puck-field-space-y, var(--puck-space-3)) var( --puck-field-space-x, calc(var(--puck-space-4) - var(--_puck-field-radio-border-width)) );
  text-align: center;
  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit), color var(--puck-duration-fast) var(--puck-ease-exit);
}
._Input-radio_qyenz_150:has(:focus-visible) {
  outline: var(--puck-border-width-focus) solid var(--puck-field-color-border-focus, var(--puck-color-focus-ring));
  outline-offset: var(--puck-border-width-focus);
  position: relative;
}
@media (hover: hover) and (pointer: fine) {
  ._Input-radioInner_qyenz_179:hover {
    background-color: var( --puck-field-color-bg-hover, var(--puck-color-interactive-soft-hover) );
    color: var( --puck-field-color-text-hover, var(--puck-field-color-text, var(--puck-color-text)) );
    transition: none;
  }
}
._Input--readOnly_qyenz_111 ._Input-radioGroupItems_qyenz_150 {
  border-color: var( --puck-field-color-border-disabled, var(--puck-color-border) );
}
._Input--readOnly_qyenz_111 ._Input-radioInner_qyenz_179 {
  background-color: var(--puck-field-color-bg, var(--puck-color-surface));
  color: var(--puck-field-color-text, var(--puck-color-text-secondary));
  cursor: default;
}
._Input--readOnly_qyenz_111 ._Input-radio_qyenz_150 {
  border-inline-end: var(--_puck-field-radio-border-width) solid var(--puck-field-color-border-disabled, var(--puck-color-border));
}
._Input--readOnly_qyenz_111 ._Input-radio_qyenz_150:last-of-type {
  border-inline-end: 0;
}
._Input-radio_qyenz_150 ._Input-radioInput_qyenz_261:checked ~ ._Input-radioInner_qyenz_179 {
  background-color: var( --puck-field-color-bg-active, var(--puck-color-interactive-soft) );
  color: var(--puck-field-color-text-active, var(--puck-color-interactive));
  font-weight: var(--puck-font-weight-medium);
}
._Input--readOnly_qyenz_111 ._Input-radioInput_qyenz_261:checked ~ ._Input-radioInner_qyenz_179 {
  background-color: var( --puck-field-color-bg-disabled, var(--puck-color-surface-muted) );
  color: var( --puck-field-color-text-disabled, var(--puck-color-text-secondary) );
}
._Input-radio_qyenz_150 ._Input-radioInput_qyenz_261 {
  clip: rect(0 0 0 0);
  clip-path: inset(100%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
textarea._Input-input_qyenz_29 {
  margin-bottom: calc(var(--puck-space-1) * -1);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/AutoField/fields/ArrayField/styles.module.css/#css-module-data */
._ArrayField_62huh_5 {
  --_puck-field-array-border-color: var( --puck-field-color-border, var(--puck-color-border) );
  --_puck-field-array-border-width: var( --puck-field-border-width, var(--puck-border-width-regular) );
  --_puck-field-array-radius: var(--puck-field-radius, var(--puck-radius-m));
  --_puck-field-array-radius-inner: calc( var(--_puck-field-array-radius) - var(--_puck-field-array-border-width) );
  display: flex;
  flex-direction: column;
  background: var( --puck-field-color-bg-active, var(--puck-color-interactive-soft) );
  border: var(--_puck-field-array-border-width) solid var(--_puck-field-array-border-color);
  border-radius: var(--_puck-field-array-radius);
}
._ArrayField--isDraggingFrom_62huh_30 {
  background-color: var( --puck-field-color-bg-active, var(--puck-color-interactive-soft) );
  overflow: hidden;
}
._ArrayField-addButton_62huh_38 {
  background-color: var(--puck-field-color-bg, var(--puck-color-surface));
  border: none;
  border-radius: var(--_puck-field-array-radius-inner);
  display: flex;
  color: var(--puck-field-array-add-color-icon, var(--puck-color-interactive));
  justify-content: center;
  cursor: pointer;
  width: 100%;
  margin: 0;
  padding: calc(var(--puck-field-space-y, var(--puck-space-3)) + 2px) var( --puck-field-space-x, calc(var(--puck-space-4) - var(--_puck-field-array-border-width)) );
  text-align: left;
  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit);
}
._ArrayField--hasItems_62huh_58 > ._ArrayField-addButton_62huh_38 {
  border-top: var(--_puck-field-array-border-width) solid var(--_puck-field-array-border-color);
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
._ArrayField-addButton_62huh_38:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: var(--puck-border-width-focus);
  position: relative;
}
@media (hover: hover) and (pointer: fine) {
  ._ArrayField_62huh_5:not(._ArrayField--isDraggingFrom_62huh_30) > ._ArrayField-addButton_62huh_38:hover {
    background: var( --puck-field-color-bg-hover, var(--puck-color-interactive-soft-hover) );
    color: var( --puck-field-color-text-hover, var(--puck-field-color-text, var(--puck-color-text)) );
    transition: none;
  }
}
._ArrayField_62huh_5:not(._ArrayField--isDraggingFrom_62huh_30) > ._ArrayField-addButton_62huh_38:active {
  background: var( --puck-field-color-bg-hover, var(--puck-color-interactive-soft-hover) );
  transition: none;
}
._ArrayField-inner_62huh_93 {
  margin-top: -1px;
}
._ArrayFieldItem_62huh_101 {
  display: block;
  position: relative;
  border-top-left-radius: var(--_puck-field-array-radius-inner);
  border-top-right-radius: var(--_puck-field-array-radius-inner);
  border-top: var(--_puck-field-array-border-width) solid var(--_puck-field-array-border-color);
}
._ArrayFieldItem--isDragging_62huh_110 {
  border-top: transparent;
}
._ArrayFieldItem--isExpanded_62huh_114::before {
  display: none;
}
._ArrayFieldItem--isExpanded_62huh_114 {
  border-bottom: 0;
  outline-offset: 0px !important;
  outline: var(--_puck-field-array-border-width) solid var(--puck-field-color-border-focus, var(--puck-color-focus-ring)) !important;
  z-index: 2;
}
._ArrayFieldItem--isDragging_62huh_110 {
  outline: var(--puck-border-width-focus) var(--puck-field-color-border-dragging, var(--puck-color-selection-border)) solid !important;
}
._ArrayFieldItem--isDragging_62huh_110 ._ArrayFieldItem-summary_62huh_132:active {
  background-color: var(--puck-field-color-bg, var(--puck-color-surface));
}
._ArrayFieldItem_62huh_101 + ._ArrayFieldItem_62huh_101 {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
._ArrayFieldItem-summary_62huh_132 {
  --_puck-drag-icon-color: var(--puck-field-color-text, var(--puck-color-text));
  --_puck-drag-icon-color-hover: var( --puck-field-color-text-hover, var(--puck-field-color-text, var(--puck-color-text)) );
  background: var(--puck-field-color-bg, var(--puck-color-surface));
  color: var(--puck-field-color-text, var(--puck-color-text));
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 2px;
  justify-content: space-between;
  font-size: var(--puck-field-font-size, var(--puck-font-size-xxs));
  list-style: none;
  padding: var(--puck-field-space-y, var(--puck-space-3)) var( --puck-field-space-x, calc(var(--puck-space-4) - var(--_puck-field-array-border-width)) );
  position: relative;
  overflow: hidden;
  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit);
}
._ArrayFieldItem--noFields_62huh_167 > ._ArrayFieldItem-summary_62huh_132 {
  cursor: grab;
}
._ArrayFieldItem_62huh_101:first-of-type > ._ArrayFieldItem-summary_62huh_132 {
  border-top-left-radius: var(--_puck-field-array-radius-inner);
  border-top-right-radius: var(--_puck-field-array-radius-inner);
}
._ArrayField--addDisabled_62huh_176 > ._ArrayField-inner_62huh_93 > ._ArrayFieldItem_62huh_101:last-of-type:not(._ArrayFieldItem--isExpanded_62huh_114) > ._ArrayFieldItem-summary_62huh_132 {
  border-bottom-left-radius: var(--_puck-field-array-radius-inner);
  border-bottom-right-radius: var(--_puck-field-array-radius-inner);
}
._ArrayField--addDisabled_62huh_176 > ._ArrayField-inner_62huh_93 > ._ArrayFieldItem--isExpanded_62huh_114:last-of-type {
  border-bottom-left-radius: var(--_puck-field-array-radius-inner);
  border-bottom-right-radius: var(--_puck-field-array-radius-inner);
}
._ArrayFieldItem-summary_62huh_132:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: var(--puck-border-width-focus);
}
@media (hover: hover) and (pointer: fine) {
  ._ArrayFieldItem-summary_62huh_132:hover {
    background-color: var( --puck-field-color-bg-hover, var(--puck-color-interactive-soft-hover) );
    color: var( --puck-field-color-text-hover, var(--puck-field-color-text, var(--puck-color-text)) );
    transition: none;
  }
}
._ArrayFieldItem-summary_62huh_132:active {
  background-color: var( --puck-field-color-bg-hover, var(--puck-color-interactive-soft-hover) );
  transition: none;
}
._ArrayFieldItem--isExpanded_62huh_114 > ._ArrayFieldItem-summary_62huh_132 {
  background: var( --puck-field-color-bg-active, var(--puck-color-interactive-soft) );
  color: var(--puck-field-color-text-active, var(--puck-color-interactive));
  font-weight: var(--puck-font-weight-semibold);
  transition: none;
}
._ArrayFieldItem-body_62huh_228 {
  background: var(--puck-field-color-surface, var(--puck-color-surface));
  display: none;
}
._ArrayFieldItem--isExpanded_62huh_114 > ._ArrayFieldItem-body_62huh_228 {
  display: block;
}
._ArrayFieldItem-fieldset_62huh_237 {
  border: none;
  border-top: var(--_puck-field-array-border-width) solid var(--_puck-field-array-border-color);
  margin: 0;
  min-width: 0;
  padding: var(--puck-field-space-surface-y, var(--puck-space-4)) var( --puck-field-space-surface-x, calc(var(--puck-space-4) - var(--_puck-field-array-border-width)) );
}
._ArrayFieldItem-rhs_62huh_250 {
  display: flex;
  gap: var(--puck-space-1);
  align-items: center;
}
._ArrayFieldItem-actions_62huh_256 {
  color: var(--puck-color-text-secondary);
  display: flex;
  gap: var(--puck-space-1);
  opacity: 0;
}
._ArrayFieldItem-summary_62huh_132:focus-within > ._ArrayFieldItem-rhs_62huh_250 > ._ArrayFieldItem-actions_62huh_256,
._ArrayFieldItem-summary_62huh_132:hover > ._ArrayFieldItem-rhs_62huh_250 > ._ArrayFieldItem-actions_62huh_256 {
  opacity: 1;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/IconButton/IconButton.module.css/#css-module-data */
._IconButton_1pxxt_1 {
  align-items: center;
  background: var(--puck-iconbutton-color-bg, transparent);
  border: none;
  border-radius: var(--puck-iconbutton-radius, var(--puck-radius-m));
  color: var(--puck-iconbutton-color-icon, currentColor);
  display: flex;
  font-family: var(--puck-font-family);
  justify-content: center;
  padding: var(--puck-iconbutton-space, var(--puck-space-1));
  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit), color var(--puck-duration-fast) var(--puck-ease-exit);
}
._IconButton--active_1pxxt_15 {
  color: var( --puck-iconbutton-color-icon-active, var(--puck-color-interactive) );
}
._IconButton_1pxxt_1:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: calc(var(--puck-border-width-focus) * -1);
}
@media (hover: hover) and (pointer: fine) {
  ._IconButton_1pxxt_1:hover:not(._IconButton--disabled_1pxxt_28) {
    background: var( --_puck-iconbutton-color-bg-hover, var( --puck-iconbutton-color-bg-hover, var(--puck-color-interactive-neutral-hover) ) );
    color: var( --puck-iconbutton-color-icon-hover, var(--puck-color-interactive) );
    cursor: pointer;
    transition: none;
  }
}
._IconButton_1pxxt_1:active {
  background: var( --puck-iconbutton-color-bg-active, var(--puck-color-interactive-soft) );
  transition: none;
}
._IconButton--disabled_1pxxt_28 {
  color: var( --puck-iconbutton-color-icon-disabled, var(--puck-color-text-subtle) );
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Loader/styles.module.css/#css-module-data */
@keyframes _loader-animation_1w5zn_1 {
  0% {
    transform: rotate(0deg) scale(1);
  }
  50% {
    transform: rotate(180deg) scale(0.8);
  }
  100% {
    transform: rotate(360deg) scale(1);
  }
}
._Loader_1w5zn_13 {
  background: transparent;
  border-radius: var(--puck-radius-round);
  border: var(--puck-border-width-focus) solid currentColor;
  border-bottom-color: transparent;
  display: inline-block;
  animation: _loader-animation_1w5zn_1 1s 0s infinite linear;
  animation-fill-mode: both;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/DragIcon/styles.module.css/#css-module-data */
._DragIcon_5e515_1 {
  color: var(--_puck-drag-icon-color, var(--puck-color-text-muted));
  cursor: grab;
  padding: var(--puck-space-1);
  border-radius: var(--puck-radius-m);
}
._DragIcon--disabled_5e515_10 {
  cursor: no-drop;
}
@media (hover: hover) and (pointer: fine) {
  ._DragIcon_5e515_1:not(._DragIcon--disabled_5e515_10):hover {
    color: var(--_puck-drag-icon-color-hover, var(--puck-color-focus-ring));
  }
}

/* components/Sortable/styles.css */
[data-dnd-placeholder]:not([data-puck-line-drag] *) * {
  opacity: 0 !important;
}
[data-dnd-placeholder]:not([data-puck-line-drag] *) {
  background: var( --_puck-field-array-color-placeholder, var(--puck-color-azure-06) ) !important;
  border: none !important;
  color: transparent !important;
  opacity: 0.3 !important;
  outline: none !important;
  transition: none !important;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/ExternalInput/styles.module.css/#css-module-data */
._ExternalInput-actions_143vl_1 {
  display: flex;
}
._ExternalInput-button_143vl_5 {
  display: flex;
  gap: var(--puck-space-2);
  align-items: center;
  justify-content: center;
  background-color: var(--puck-field-color-bg, var(--puck-color-surface));
  border: var(--puck-field-border-width, var(--puck-border-width-regular)) solid var(--puck-field-color-border, var(--puck-color-border));
  border-radius: var(--puck-field-radius, var(--puck-radius-m));
  color: var(--puck-field-color-text-active, var(--puck-color-interactive));
  padding: var(--puck-field-space-y, var(--puck-space-3)) var( --puck-field-space-x, calc( var(--puck-space-4) - var(--puck-field-border-width, var(--puck-border-width-regular)) ) );
  font-size: var(--puck-field-font-size, var(--puck-font-size-xxs));
  font-weight: var(--puck-font-weight-medium);
  white-space: nowrap;
  text-overflow: ellipsis;
  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit);
  position: relative;
  overflow: hidden;
  flex-grow: 1;
  cursor: pointer;
}
._ExternalInput--dataSelected_143vl_34 ._ExternalInput-button_143vl_5 {
  color: var(--puck-field-color-text, var(--puck-color-text));
  display: block;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
}
._ExternalInput--readOnly_143vl_41 ._ExternalInput-button_143vl_5 {
  background-color: var( --puck-field-color-bg-disabled, var(--puck-color-surface-muted) );
}
._ExternalInput-detachButton_143vl_48 {
  border: var(--puck-field-border-width, var(--puck-border-width-regular)) solid var(--puck-field-color-border, var(--puck-color-border));
  border-top-right-radius: var(--puck-field-radius, var(--puck-radius-m));
  border-bottom-right-radius: var(--puck-field-radius, var(--puck-radius-m));
  background-color: var( --puck-field-external-detach-color-bg, var(--puck-color-surface-subtle) );
  color: var( --puck-field-external-detach-color-text, var(--puck-color-text-muted) );
  display: flex;
  gap: var(--puck-space-2);
  align-items: center;
  justify-content: center;
  padding: var(--puck-space-2) var(--puck-space-3);
  position: relative;
  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit), color var(--puck-duration-fast) var(--puck-ease-exit);
  margin-inline-start: -1px;
  cursor: pointer;
}
._ExternalInput-button_143vl_5:focus-visible,
._ExternalInput-detachButton_143vl_48:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: var(--puck-border-width-focus);
  z-index: 1;
}
@media (hover: hover) and (pointer: fine) {
  ._ExternalInput_143vl_1:not(._ExternalInput--readOnly_143vl_41) ._ExternalInput-button_143vl_5:hover,
  ._ExternalInput_143vl_1:not(._ExternalInput--readOnly_143vl_41) ._ExternalInput-detachButton_143vl_48:hover {
    background: var( --puck-field-color-bg-hover, var(--puck-color-interactive-soft-hover) );
    transition: none;
  }
  ._ExternalInput_143vl_1:not(._ExternalInput--readOnly_143vl_41) ._ExternalInput-detachButton_143vl_48:hover {
    color: var( --puck-field-color-text-hover, var(--puck-field-external-detach-color-text, var(--puck-color-text-muted)) );
  }
  ._ExternalInput--dataSelected_143vl_34:not(._ExternalInput--readOnly_143vl_41) ._ExternalInput-button_143vl_5:hover {
    color: var( --puck-field-color-text-hover, var(--puck-field-color-text, var(--puck-color-text)) );
  }
}
._ExternalInput_143vl_1:not(._ExternalInput--readOnly_143vl_41) ._ExternalInput-button_143vl_5:active,
._ExternalInput_143vl_1:not(._ExternalInput--readOnly_143vl_41) ._ExternalInput-detachButton_143vl_48:active {
  background: var( --puck-field-color-bg-hover, var(--puck-color-interactive-soft-hover) );
  transition: none;
}
._ExternalInputModal_143vl_118 {
  color: var(--puck-color-text);
  display: grid;
  grid-template-rows: min-content minmax(128px, 100%) min-content;
  grid-template-columns: 100%;
  position: relative;
  min-height: 50dvh;
  max-height: 90dvh;
}
._ExternalInputModal-grid_143vl_128 {
  display: flex;
  flex-direction: column;
}
@media (min-width: 458px) {
  ._ExternalInputModal-grid_143vl_128 {
    display: grid;
    grid-template-columns: 100%;
  }
  ._ExternalInputModal--filtersToggled_143vl_139 ._ExternalInputModal-grid_143vl_128 {
    grid-template-columns: 25% 75%;
  }
}
._ExternalInputModal-filters_143vl_144 {
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border);
}
._ExternalInputModal--filtersToggled_143vl_139 ._ExternalInputModal-filters_143vl_144 {
  display: none;
}
@media (min-width: 458px) {
  ._ExternalInputModal-filters_143vl_144 {
    border-inline-end: var(--puck-border-width-regular) solid var(--puck-color-border);
    display: none;
  }
  ._ExternalInputModal--filtersToggled_143vl_139 ._ExternalInputModal-filters_143vl_144 {
    display: block;
  }
}
._ExternalInputModal-masthead_143vl_164 {
  background-color: var(--puck-color-surface-subtle);
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border);
  display: flex;
  flex-wrap: wrap;
  gap: var(--puck-space-5);
  padding: var(--puck-space-5);
}
._ExternalInputModal-tableWrapper_143vl_173 {
  position: relative;
  overflow-x: auto;
  overflow-y: auto;
  flex-grow: 1;
}
._ExternalInputModal-table_143vl_173 {
  border-collapse: unset;
  border-spacing: 0px;
  color: var(--puck-color-text);
  position: relative;
  z-index: 0;
  min-width: 100%;
}
._ExternalInputModal-thead_143vl_189 {
  background-color: var(--puck-color-surface);
  position: sticky;
  top: 0;
  z-index: 1;
}
._ExternalInputModal-th_143vl_189 {
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border);
  color: var(--puck-color-text-secondary);
  font-weight: var(--puck-font-weight-medium);
  font-size: var(--puck-font-size-xxs);
  padding: var(--puck-space-4) var(--puck-space-5);
}
._ExternalInputModal-td_143vl_204 {
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border-muted);
  padding: var(--puck-space-4) var(--puck-space-5);
}
._ExternalInputModal-tr_143vl_210 ._ExternalInputModal-td_143vl_204:first-of-type {
  font-weight: var(--puck-font-weight-medium);
  width: 1%;
  white-space: nowrap;
}
@media (hover: hover) and (pointer: fine) {
  ._ExternalInputModal-tbody_143vl_217 ._ExternalInputModal-tr_143vl_210:hover {
    background: var(--puck-color-interactive-soft-hover);
    color: var(--puck-color-interactive);
    cursor: pointer;
    position: relative;
    margin-inline-start: -5px;
  }
  ._ExternalInputModal-tbody_143vl_217 ._ExternalInputModal-tr_143vl_210:hover ._ExternalInputModal-td_143vl_204:first-of-type {
    border-inline-start: var(--puck-border-width-strong) solid var(--puck-color-interactive);
    padding-inline-start: 20px;
  }
}
._ExternalInputModal-tbody_143vl_217 ._ExternalInputModal-tr_143vl_210:last-of-type ._ExternalInputModal-td_143vl_204 {
  border-bottom: none;
}
._ExternalInputModal-tableWrapper_143vl_173 {
  display: none;
}
._ExternalInputModal--hasData_143vl_244 ._ExternalInputModal-tableWrapper_143vl_173 {
  display: block;
}
._ExternalInputModal-loadingBanner_143vl_248 {
  display: none;
  background-color: color-mix(in srgb, var(--puck-color-surface) 90%, transparent);
  padding: 64px;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
._ExternalInputModal--isLoading_143vl_265 ._ExternalInputModal-loadingBanner_143vl_248 {
  display: flex;
}
._ExternalInputModal-searchForm_143vl_269 {
  display: flex;
  flex-wrap: wrap;
  gap: var(--puck-space-3);
  flex-grow: 1;
}
@media (min-width: 458px) {
  ._ExternalInputModal-searchForm_143vl_269 {
    flex-wrap: nowrap;
  }
}
._ExternalInputModal-search_143vl_269 {
  display: flex;
  background: var(--puck-color-surface);
  border-width: var(--puck-border-width-regular);
  border-style: solid;
  border-color: var(--puck-color-border);
  border-radius: var(--puck-radius-m);
  flex-grow: 1;
  transition: border-color var(--puck-duration-fast) var(--puck-ease-exit);
}
._ExternalInputModal-search_143vl_269:focus-within {
  border-color: var(--puck-color-border-hover);
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  transition: none;
}
@media (hover: hover) and (pointer: fine) {
  ._ExternalInputModal-search_143vl_269:hover {
    border-color: var(--puck-color-border-hover);
    transition: none;
  }
}
._ExternalInputModal-searchIcon_143vl_306 {
  align-items: center;
  background: var(--puck-color-surface-subtle);
  border-bottom-left-radius: var(--puck-radius-m);
  border-top-left-radius: var(--puck-radius-m);
  border-inline-end: var(--puck-border-width-regular) solid var(--puck-color-border);
  color: var(--puck-color-text-subtle);
  display: flex;
  justify-content: center;
  padding: var(--puck-space-3) calc(var(--puck-space-4) - var(--puck-border-width-regular));
  transition: color var(--puck-duration-fast) var(--puck-ease-exit);
}
._ExternalInputModal-search_143vl_269:focus-within ._ExternalInputModal-searchIcon_143vl_306 {
  color: var(--puck-color-text-secondary);
  transition: none;
}
@media (hover: hover) and (pointer: fine) {
  ._ExternalInputModal-search_143vl_269:hover ._ExternalInputModal-searchIcon_143vl_306 {
    color: var(--puck-color-text-secondary);
    transition: none;
  }
}
._ExternalInputModal-searchIconText_143vl_333 {
  clip: rect(0 0 0 0);
  clip-path: inset(100%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
._ExternalInputModal-searchInput_143vl_343 {
  border: none;
  border-radius: var(--puck-radius-m);
  background: var(--puck-color-surface);
  font-family: inherit;
  font-size: var(--puck-font-size-xxs);
  padding: var(--puck-space-3) calc(var(--puck-space-4) - var(--puck-border-width-regular));
  width: 100%;
}
._ExternalInputModal-searchInput_143vl_343:focus {
  outline: 0;
}
._ExternalInputModal-searchActions_143vl_358 {
  display: flex;
  gap: var(--puck-space-2);
  height: 44px;
  width: 100%;
}
@media (min-width: 458px) {
  ._ExternalInputModal-searchActions_143vl_358 {
    width: auto;
  }
}
._ExternalInputModal-searchActionIcon_143vl_371 {
  align-self: center;
}
._ExternalInputModal-footerContainer_143vl_375 {
  background-color: var(--puck-color-surface-subtle);
  border-top: var(--puck-border-width-regular) solid var(--puck-color-border);
  color: var(--puck-color-text-secondary);
  padding: var(--puck-space-4);
}
._ExternalInputModal-footer_143vl_375 {
  font-weight: var(--puck-font-weight-medium);
  font-size: var(--puck-font-size-xxs);
  text-align: right;
}
._ExternalInputModal-field_143vl_388 {
  color: var(--puck-color-text-secondary);
  margin: var(--puck-space-4);
  margin-bottom: var(--puck-space-3);
  display: block;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Modal/styles.module.css/#css-module-data */
._Modal_g5xob_1 {
  background: var(--puck-color-overlay-backdrop);
  display: none;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
  padding: 32px;
}
._Modal--isOpen_g5xob_15 {
  display: flex;
}
._Modal-inner_g5xob_19 {
  width: 100%;
  max-width: 1024px;
  border-radius: var(--puck-radius-l);
  overflow: hidden;
  background: var(--puck-color-surface);
  display: flex;
  flex-direction: column;
  max-height: 90dvh;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Heading/styles.module.css/#css-module-data */
._Heading_97eh4_1 {
  display: block;
  color: var(--_puck-heading-color, var(--puck-color-text));
  font-weight: var(--puck-font-weight-bold);
  margin: 0;
}
._Heading_97eh4_1 b {
  font-weight: var(--puck-font-weight-bold);
}
._Heading--xxxxl_97eh4_12 {
  font-size: var(--puck-font-size-xxxxl);
  letter-spacing: var(--puck-letter-spacing-heading);
  font-weight: var(--puck-font-weight-heavy);
}
._Heading--xxxl_97eh4_18 {
  font-size: var(--puck-font-size-xxxl);
}
._Heading--xxl_97eh4_22 {
  font-size: var(--puck-font-size-xxl);
}
._Heading--xl_97eh4_26 {
  font-size: var(--puck-font-size-xl);
}
._Heading--l_97eh4_30 {
  font-size: var(--puck-font-size-l);
}
._Heading--m_97eh4_34 {
  font-size: var(--puck-font-size-m);
}
._Heading--s_97eh4_38 {
  font-size: var(--puck-font-size-s);
}
._Heading--xs_97eh4_42 {
  font-size: var(--puck-font-size-xs);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Button/Button.module.css/#css-module-data */
._Button_oe4qj_1 {
  --_puck-button-default-space-x: 20px;
  --_puck-button-default-font-size: var(--puck-font-size-xxs);
  --_puck-button-default-font-weight: var(--puck-font-weight-regular);
  --_puck-button-default-color-bg-disabled: var(--puck-color-bg-disabled);
  --_puck-button-default-color-text-disabled: var(--puck-color-text-disabled);
  appearance: none;
  background: none;
  border: var(--puck-border-width-regular) solid transparent;
  border-radius: var(--puck-button-radius, var(--puck-radius-m));
  color: var(--puck-color-text-inverse);
  display: inline-flex;
  align-items: center;
  gap: var(--puck-space-2);
  letter-spacing: var(--puck-letter-spacing-ui);
  font-family: var(--puck-font-family);
  box-sizing: border-box;
  line-height: 1;
  text-align: center;
  text-decoration: none;
  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit), color var(--puck-duration-fast) var(--puck-ease-exit);
  cursor: pointer;
  white-space: nowrap;
  margin: 0;
}
._Button_oe4qj_1:hover,
._Button_oe4qj_1:active {
  transition: none;
}
._Button--medium_oe4qj_34 {
  min-height: 34px;
  padding-bottom: var( --puck-button-medium-space-y, calc(var(--puck-space-2) - var(--puck-border-width-regular)) );
  padding-inline-start: var( --puck-button-medium-space-x, calc(var(--_puck-button-default-space-x) - var(--puck-border-width-regular)) );
  padding-inline-end: var( --puck-button-medium-space-x, calc(var(--_puck-button-default-space-x) - var(--puck-border-width-regular)) );
  padding-top: var( --puck-button-medium-space-y, calc(var(--puck-space-2) - var(--puck-border-width-regular)) );
  font-weight: var( --puck-button-medium-font-weight, var(--_puck-button-default-font-weight) );
  font-size: var( --puck-button-medium-font-size, var(--_puck-button-default-font-size) );
}
._Button--large_oe4qj_62 {
  padding-bottom: var( --puck-button-large-space-y, calc(var(--puck-space-3) - var(--puck-border-width-regular)) );
  padding-inline-start: var( --puck-button-large-space-x, calc(var(--_puck-button-default-space-x) - var(--puck-border-width-regular)) );
  padding-inline-end: var( --puck-button-large-space-x, calc(var(--_puck-button-default-space-x) - var(--puck-border-width-regular)) );
  padding-top: var( --puck-button-large-space-y, calc(var(--puck-space-3) - var(--puck-border-width-regular)) );
  font-weight: var( --puck-button-large-font-weight, var(--_puck-button-default-font-weight) );
  font-size: var( --puck-button-large-font-size, var(--_puck-button-default-font-size) );
}
._Button-icon_oe4qj_89 {
  margin-top: 2px;
}
._Button--primary_oe4qj_93 {
  background: var( --puck-button-primary-color-bg, var(--puck-color-interactive) );
  border-color: var(--puck-button-primary-color-border, transparent);
  color: var(--puck-button-primary-color-text, var(--puck-color-text-inverse));
}
._Button_oe4qj_1:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: var(--puck-border-width-focus);
}
@media (hover: hover) and (pointer: fine) {
  ._Button--primary_oe4qj_93:hover {
    background-color: var( --puck-button-primary-color-bg-hover, var(--puck-color-interactive-hover) );
  }
}
._Button--primary_oe4qj_93:active {
  background-color: var( --puck-button-primary-color-bg-active, var(--puck-color-interactive-active) );
}
._Button--primary_oe4qj_93._Button--disabled_oe4qj_123,
._Button--primary_oe4qj_93._Button--disabled_oe4qj_123:hover {
  background-color: var( --puck-button-primary-color-bg-disabled, var(--_puck-button-default-color-bg-disabled) );
  color: var( --puck-button-primary-color-text-disabled, var(--_puck-button-default-color-text-disabled) );
}
._Button--secondary_oe4qj_135 {
  background: var(--puck-button-secondary-color-bg, transparent);
  border-color: var(--puck-button-secondary-color-border, currentColor);
  color: var(--puck-button-secondary-color-text, currentColor);
}
@media (hover: hover) and (pointer: fine) {
  ._Button--secondary_oe4qj_135:hover {
    background-color: var( --puck-button-secondary-color-bg-hover, var(--puck-color-interactive-soft) );
    color: var(--puck-button-secondary-color-text, var(--puck-color-text));
  }
}
._Button--secondary_oe4qj_135:active {
  background-color: var( --puck-button-secondary-color-bg-active, var(--puck-color-interactive-soft) );
  color: var(--puck-button-secondary-color-text, var(--puck-color-text));
}
._Button--secondary_oe4qj_135._Button--disabled_oe4qj_123,
._Button--secondary_oe4qj_135._Button--disabled_oe4qj_123:hover {
  background-color: var( --puck-button-secondary-color-bg-disabled, var(--_puck-button-default-color-bg-disabled) );
  color: var( --puck-button-secondary-color-text-disabled, var(--_puck-button-default-color-text-disabled) );
}
._Button--flush_oe4qj_171 {
  border-radius: var(--puck-radius-none);
}
._Button--disabled_oe4qj_123:hover {
  cursor: not-allowed;
}
._Button--fullWidth_oe4qj_179 {
  justify-content: center;
  width: 100%;
}
._Button-spinner_oe4qj_184 {
  padding-inline-start: var(--puck-space-2);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/RichTextMenu/styles.module.css/#css-module-data */
._RichTextMenu_1ve2j_1 {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
._RichTextMenu--form_1ve2j_7 {
  border-top-left-radius: var(--puck-field-radius, var(--puck-radius-m));
  border-top-right-radius: var(--puck-field-radius, var(--puck-radius-m));
  padding: var(--puck-field-richtext-menu-space-y, 6px) var(--puck-field-richtext-menu-space-x, 6px);
  background-color: var( --puck-field-richtext-menu-color-bg, var(--puck-color-surface-subtle) );
  position: relative;
  scrollbar-width: none;
  overflow-x: auto;
}
._RichTextMenu-group_1ve2j_21 {
  display: flex;
  align-items: space-between;
  flex-direction: row;
  flex-wrap: nowrap;
  padding-inline: 6px;
  gap: 2px;
  position: relative;
}
._RichTextMenu-group_1ve2j_21:first-of-type {
  padding-left: 0;
}
._RichTextMenu-group_1ve2j_21:last-of-type {
  padding-right: 0;
}
._RichTextMenu--inline_1ve2j_39 ._RichTextMenu-group_1ve2j_21 {
  color: var(--puck-color-text-inverse);
  gap: 0px;
  flex-wrap: nowrap;
}
._RichTextMenu-group_1ve2j_21 + ._RichTextMenu-group_1ve2j_21 {
  border-left: var(--puck-border-width-regular) solid var( --puck-field-richtext-menu-color-separator, var(--puck-color-border-muted) );
}
._RichTextMenu--inline_1ve2j_39 ._RichTextMenu-group_1ve2j_21 + ._RichTextMenu-group_1ve2j_21 {
  border-left: var(--puck-border-width-hairline) solid var(--puck-color-border-inverse);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/RichTextMenu/components/Control/styles.module.css/#css-module-data */
._Control_id4pm_1 .lucide {
  height: var(--puck-icon-size-m);
  width: var(--puck-icon-size-m);
}
._Control--inline_id4pm_6 .lucide {
  height: var(--puck-actionbar-action-size, var(--puck-icon-size-s));
  width: var(--puck-actionbar-action-size, var(--puck-icon-size-s));
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Select/styles.module.css/#css-module-data */
._Select_1n4iv_1 {
  position: relative;
  z-index: 1;
}
._Select-buttonInner_1n4iv_6 {
  align-items: center;
  display: flex;
}
._Select-buttonIcon_1n4iv_11 {
  align-items: center;
  display: flex;
  justify-content: center;
}
._Select--standalone_1n4iv_17 ._Select-buttonIcon_1n4iv_11 .lucide {
  height: var(--puck-icon-size-m);
  width: var(--puck-icon-size-m);
}
._Select--actionBar_1n4iv_22 ._Select-buttonIcon_1n4iv_11 .lucide {
  height: var(--puck-actionbar-action-size, var(--puck-icon-size-s));
  width: var(--puck-actionbar-action-size, var(--puck-icon-size-s));
}
._Select-items_1n4iv_27 {
  background: var(--puck-color-surface);
  border: var(--puck-border-width-regular) solid var(--puck-color-border);
  border-radius: var(--puck-radius-l);
  margin: 10px 8px;
  margin-left: 0;
  padding: var(--puck-space-1);
  z-index: 2;
  list-style: none;
}
._SelectItem_1n4iv_38 {
  background: transparent;
  border-radius: var(--puck-radius-m);
  border: none;
  color: var(--puck-color-text-secondary);
  cursor: pointer;
  display: flex;
  gap: var(--puck-space-2);
  align-items: center;
  font-size: var(--puck-font-size-xxs);
  margin: 0;
  padding: var(--puck-space-2) var(--puck-space-3);
  width: 100%;
}
._SelectItem--isSelected_1n4iv_53 {
  background: var(--puck-color-interactive-soft);
  color: var(--puck-color-interactive);
  font-weight: var(--puck-font-weight-medium);
}
._SelectItem--isSelected_1n4iv_53 ._SelectItem-icon_1n4iv_59 {
  color: var(--puck-color-interactive);
}
._SelectItem_1n4iv_38:hover {
  background: var(--puck-color-interactive-soft);
  color: var(--puck-color-interactive);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/RichTextEditor/styles.module.css/#css-module-data */
._RichTextEditor_5wzos_1 .ProseMirror {
  white-space: pre-wrap;
  word-wrap: break-word;
  cursor: text;
  outline: none;
  position: relative;
}
._RichTextEditor_5wzos_1 .rich-text * {
  white-space: pre-wrap;
  user-select: auto;
  -webkit-user-select: auto;
}
._RichTextEditor_5wzos_1 .rich-text blockquote {
  margin: 1em 0;
  padding: 0 1em;
  border-left: var(--puck-border-width-strong) solid var(--puck-color-border);
}
._RichTextEditor_5wzos_1 .rich-text code {
  background-color: var(--puck-color-surface-muted);
  padding: var(--puck-space-1) var(--puck-space-2);
  border-radius: var(--puck-radius-m);
}
._RichTextEditor_5wzos_1 .rich-text p:empty::before {
  content: "\\a0";
}
._RichTextEditor_5wzos_1 .rich-text pre code {
  display: block;
  padding: var(--puck-space-2) var(--puck-space-3);
}
._RichTextEditor_5wzos_1 .rich-text > *:first-child,
._RichTextEditor_5wzos_1 .ProseMirror > *:first-child,
._RichTextEditor_5wzos_1 .rich-text * p:first-of-type {
  margin-top: 0;
}
._RichTextEditor_5wzos_1 .rich-text > *:last-child,
._RichTextEditor_5wzos_1 .ProseMirror > *:last-child,
._RichTextEditor_5wzos_1 .rich-text * p:last-of-type {
  margin-bottom: 0;
}
._RichTextEditor--editor_5wzos_50 {
  color: var(--puck-field-color-text, var(--puck-color-text));
  background: var(--puck-field-color-bg, var(--puck-color-surface));
  border-width: var( --puck-field-border-width, var(--puck-border-width-regular) );
  border-style: solid;
  border-color: var(--puck-field-color-border, var(--puck-color-border));
  border-radius: var(--puck-field-radius, var(--puck-radius-m));
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  font-family: inherit;
  font-size: var(--puck-field-font-size, var(--puck-font-size-xxs));
  resize: vertical;
  text-align: initial;
  transition: border-color var(--puck-duration-fast) var(--puck-ease-exit);
  width: 100%;
  max-width: 100%;
  min-height: 128px;
}
._RichTextEditor--editor_5wzos_50 .rich-text {
  flex-grow: 1;
}
._RichTextEditor--editor_5wzos_50 .rich-text:not(:has(.ProseMirror)),
._RichTextEditor--editor_5wzos_50 .rich-text .ProseMirror {
  height: 100%;
  padding: var(--puck-field-space-y, var(--puck-space-3)) var( --puck-field-space-x, calc( var(--puck-space-4) - var(--puck-field-border-width, var(--puck-border-width-regular)) ) );
}
._RichTextEditor--editor_5wzos_50 .rich-text ul,
._RichTextEditor--editor_5wzos_50 .rich-text ol {
  padding-left: var(--puck-space-5);
}
._RichTextEditor--editor_5wzos_50 .rich-text li {
  line-height: 1.5;
}
._RichTextEditor--editor_5wzos_50 .rich-text p {
  margin-block: var(--puck-space-3);
}
._RichTextEditor--editor_5wzos_50 .rich-text ul {
  list-style: disc;
}
._RichTextEditor--editor_5wzos_50 .rich-text ol {
  list-style: decimal;
}
._RichTextEditor--editor_5wzos_50:focus-within {
  border-color: var( --puck-field-color-border-hover, var(--puck-color-border-hover) );
  outline: var(--puck-border-width-focus) solid var(--puck-field-color-border-focus, var(--puck-color-focus-ring));
  transition: none;
}
@media (hover: hover) and (pointer: fine) {
  ._RichTextEditor--editor_5wzos_50:hover:not(._RichTextEditor--disabled_5wzos_123) {
    border-color: var( --puck-field-color-border-hover, var(--puck-color-border-hover) );
    transition: none;
  }
}
._RichTextEditor--editor_5wzos_50._RichTextEditor--disabled_5wzos_123 {
  background: var( --puck-field-color-bg-disabled, var(--puck-color-surface-muted) );
  border-color: var( --puck-field-color-border-disabled, var(--puck-color-border) );
}
._RichTextEditor--editor_5wzos_50._RichTextEditor--disabled_5wzos_123 .rich-text:not(:has(.ProseMirror)),
._RichTextEditor--editor_5wzos_50._RichTextEditor--disabled_5wzos_123 .rich-text .ProseMirror {
  color: var( --puck-field-color-text-disabled, var(--puck-color-text-secondary) );
}
._RichTextEditor--editor_5wzos_50._RichTextEditor--disabled_5wzos_123 .ProseMirror[contenteditable=false] {
  cursor: default;
}
._RichTextEditor_5wzos_1:not(:focus-within):not(._RichTextEditor--isActive_5wzos_159) .ProseMirror ::selection {
  background-color: transparent;
}
._RichTextEditor-menu_5wzos_165 {
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border-muted);
  position: sticky;
  top: 0;
  z-index: 1;
}
._RichTextEditor--disabled_5wzos_123 ._RichTextEditor-menu_5wzos_165 {
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/AutoField/fields/ObjectField/styles.module.css/#css-module-data */
._ObjectField_c5reb_1 {
  display: flex;
  flex-direction: column;
  background-color: var(--puck-field-color-surface, var(--puck-color-surface));
  border: var(--puck-field-border-width, var(--puck-border-width-regular)) solid var(--puck-field-color-border, var(--puck-color-border));
  border-radius: var(--puck-field-radius, var(--puck-radius-m));
}
._ObjectField-fieldset_c5reb_10 {
  border: none;
  margin: 0;
  min-width: 0;
  padding: var(--puck-field-space-surface-y, var(--puck-space-4)) var( --puck-field-space-surface-x, calc( var(--puck-space-4) - var(--puck-field-border-width, var(--puck-border-width-regular)) ) );
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Drawer/styles.module.css/#css-module-data */
._Drawer_1n90m_1 {
  display: flex;
  flex-direction: column;
  font-family: var(--puck-font-family);
  gap: var(--puck-space-3);
}
._Drawer-draggable_1n90m_8 {
  position: relative;
}
._Drawer-draggableBg_1n90m_12 {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
  z-index: -1;
}
._DrawerItem-draggable_1n90m_22 {
  background: var(--puck-drawer-item-color-bg, var(--puck-color-surface));
  color: var(--puck-drawer-item-color-text, var(--puck-color-text));
  cursor: grab;
  padding: var(--puck-drawer-item-space, var(--puck-space-3));
  display: flex;
  border: var(--puck-drawer-item-border-width, var(--puck-border-width-regular)) var(--puck-drawer-item-color-border, var(--puck-color-border)) solid;
  border-radius: var(--puck-drawer-item-radius, var(--puck-radius-m));
  font-size: var(--puck-drawer-item-font-size, var(--puck-font-size-xxs));
  justify-content: space-between;
  align-items: center;
  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit), color var(--puck-duration-fast) var(--puck-ease-exit);
}
._DrawerItem--disabled_1n90m_38 ._DrawerItem-draggable_1n90m_22 {
  background: var(--puck-color-surface-muted);
  color: var(--puck-color-text-muted);
  cursor: not-allowed;
}
._DrawerItem_1n90m_22:focus-visible {
  outline: 0;
}
._Drawer_1n90m_1:not(._Drawer--isDraggingFrom_1n90m_48) ._DrawerItem_1n90m_22:focus-visible ._DrawerItem-draggable_1n90m_22 {
  border-radius: var(--puck-radius-m);
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: var(--puck-border-width-focus);
}
@media (hover: hover) and (pointer: fine) {
  ._Drawer_1n90m_1:not(._Drawer--isDraggingFrom_1n90m_48) ._DrawerItem_1n90m_22:not(._DrawerItem--disabled_1n90m_38) ._DrawerItem-draggable_1n90m_22:hover {
    background-color: var( --puck-drawer-item-color-bg-hover, var(--puck-color-interactive-soft-hover) );
    color: var( --puck-drawer-item-color-text-hover, var(--puck-color-interactive) );
    transition: none;
  }
}
._DrawerItem-name_1n90m_72 {
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/DraggableComponent/styles.module.css/#css-module-data */
._DraggableComponent_1627v_1 {
  position: absolute;
  pointer-events: none;
}
._DraggableComponent-overlayWrapper_1627v_6 {
  height: 100%;
  width: 100%;
  top: 0;
  position: absolute;
  pointer-events: none;
  box-sizing: border-box;
  z-index: 1;
}
._DraggableComponent-overlay_1627v_6 {
  cursor: pointer;
  height: 100%;
  outline: var( --puck-slot-component-border-width, var(--puck-border-width-focus) ) var( --puck-slot-component-color-overlay-border, var(--puck-color-selection-border) ) solid;
  outline-offset: calc(var(--puck-slot-component-border-width, var(--puck-border-width-focus)) * -1);
  width: 100%;
}
._DraggableComponent_1627v_1:focus-visible > ._DraggableComponent-overlayWrapper_1627v_6 {
  outline: var(--puck-border-width-regular) solid var(--puck-color-focus-ring);
}
._DraggableComponent-loadingOverlay_1627v_38 {
  background: var(--puck-color-surface);
  color: var(--puck-color-text);
  border-radius: var(--puck-radius-m);
  display: flex;
  padding: var(--puck-space-2);
  top: var(--puck-space-2);
  right: var(--puck-space-2);
  position: absolute;
  z-index: 1;
  pointer-events: all;
  box-sizing: border-box;
  opacity: 0.8;
  z-index: 1;
}
._DraggableComponent--hover_1627v_54 > ._DraggableComponent-overlayWrapper_1627v_6 > ._DraggableComponent-overlay_1627v_6 {
  background: var( --puck-slot-component-color-overlay, var(--puck-color-selection-bg) );
  outline: var( --puck-slot-component-border-width, var(--puck-border-width-focus) ) var( --puck-slot-component-color-overlay-border, var(--puck-color-selection-border) ) solid;
}
._DraggableComponent--isSelected_1627v_72 > ._DraggableComponent-overlayWrapper_1627v_6 > ._DraggableComponent-overlay_1627v_6 {
  outline-color: var( --puck-slot-component-color-border-selected, var(--puck-color-selection-border) );
}
._DraggableComponent_1627v_1:has(._DraggableComponent--hover_1627v_54 > ._DraggableComponent-overlayWrapper_1627v_6) > ._DraggableComponent-overlayWrapper_1627v_6 {
  display: none;
}
._DraggableComponent-actionsOverlay_1627v_89 {
  position: sticky;
  opacity: 0;
  pointer-events: none;
  z-index: 2;
}
._DraggableComponent--isSelected_1627v_72 ._DraggableComponent-actionsOverlay_1627v_89 {
  opacity: 1;
  pointer-events: auto;
}
._DraggableComponent-actions_1627v_89 {
  position: absolute;
  width: auto;
  cursor: grab;
  display: flex;
  box-sizing: border-box;
  transform-origin: right top;
  min-height: 36px;
}
._DraggableComponent-actionsAction_1627v_111 {
  height: var(--puck-actionbar-action-size, var(--puck-icon-size-s));
  width: var(--puck-actionbar-action-size, var(--puck-icon-size-s));
}

/* components/DraggableComponent/styles.css */
[data-puck-component] * {
  pointer-events: none;
  user-select: none;
  -webkit-user-select: none;
}
[data-puck-component] {
  cursor: grab;
  pointer-events: auto !important;
  user-select: none;
  -webkit-user-select: none;
}
[data-puck-dropzone] {
  pointer-events: auto !important;
}
[data-puck-disabled] {
  cursor: pointer;
}
[data-dnd-placeholder]:not([data-puck-line-drag] *) {
  background: var( --puck-slot-component-color-placeholder, var(--puck-color-azure-06) ) !important;
  border: none !important;
  color: transparent !important;
  opacity: 0.3 !important;
  outline: none !important;
  transition: none !important;
}
[data-dnd-placeholder]:not([data-puck-line-drag] *) *,
[data-dnd-placeholder]:not([data-puck-line-drag] *)::after,
[data-dnd-placeholder]:not([data-puck-line-drag] *)::before {
  opacity: 0 !important;
}
[data-puck-line-drag] [data-dnd-placeholder] {
  opacity: 0.4 !important;
  outline: none !important;
  transition: none !important;
}
[data-puck-line-drag] [data-dnd-dragging][data-puck-component] {
  opacity: 0.9 !important;
}
[data-dnd-dragging][data-puck-component] {
  pointer-events: none !important;
  outline: var( --puck-slot-component-border-width, var(--puck-border-width-focus) ) var(--puck-slot-component-color-border-dragging, var(--puck-color-azure-09)) solid !important;
  outline-offset: calc(var(--puck-slot-component-border-width, var(--puck-border-width-focus)) * -1) !important;
}
[data-dnd-dragging][data-puck-component] > :first-child {
  margin-top: 0 !important;
}
[data-dnd-dragging][data-puck-component] > :last-child {
  margin-bottom: 0 !important;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/DropZone/styles.module.css/#css-module-data */
._DropZone_wc2ks_1 {
  position: relative;
  height: 100%;
  min-height: var(--puck-slot-min-empty-height);
  outline-offset: calc(var(--puck-slot-border-width, var(--puck-border-width-focus)) * -1);
  width: 100%;
}
._DropZone--hasChildren_wc2ks_11 {
  min-height: 0;
}
._DropZone_wc2ks_1:empty {
  min-height: var(--puck-slot-min-empty-height);
}
[data-puck-entry]:not([data-puck-dragging]) ._DropZone_wc2ks_1 {
  transition: min-height var(--puck-duration-medium) var(--puck-ease-exit);
}
._DropZone--isAreaSelected_wc2ks_24,
._DropZone--hoveringOverArea_wc2ks_25:not(._DropZone--isRootZone_wc2ks_25) {
  background: var(--puck-slot-color-bg, var(--puck-color-selection-bg));
  outline: var(--puck-slot-border-width, var(--puck-border-width-focus)) var(--puck-slot-border-style, dashed) var(--puck-slot-color-border, var(--puck-color-selection-border));
}
._DropZone_wc2ks_1:empty {
  background: var(--puck-slot-color-bg, var(--puck-color-selection-bg));
  outline: var(--puck-slot-border-width, var(--puck-border-width-focus)) var(--puck-slot-border-style, dashed) var(--puck-slot-color-border, var(--puck-color-selection-border));
}
._DropZone-item_wc2ks_39 {
  position: relative;
}
._DropZone-linePlaceholder_wc2ks_43 {
  background: var( --puck-slot-component-color-placeholder, var(--puck-color-line-placeholder) );
  border-radius: calc(var(--puck-line-placeholder-width, 2px) / 2);
  pointer-events: none;
  position: absolute;
  z-index: 1;
}
._DropZone-hitbox_wc2ks_55 {
  position: absolute;
  bottom: calc(var(--puck-space-3) * -1);
  height: var(--puck-space-5);
  width: 100%;
  z-index: 1;
}
[data-puck-dragging] ._DropZone--isEnabled_wc2ks_63 {
  outline: var(--puck-slot-border-width, var(--puck-border-width-focus)) var(--puck-slot-border-style, dashed) var(--puck-slot-color-border, var(--puck-color-selection-border));
}
._DropZone_wc2ks_1 > *:not([data-puck-component]):not([data-puck-line-placeholder]) {
  opacity: 0;
}
body:has(._DropZone--isAnimating_wc2ks_74:empty) [data-puck-overlay] {
  opacity: 0 !important;
}

/* lib/overlay-portal/styles.css */
[data-puck-overlay-portal],
[data-puck-overlay-portal] * {
  pointer-events: auto !important;
}
[data-puck-entry][data-puck-dragging] [data-puck-overlay-portal],
[data-puck-entry][data-puck-dragging] [data-puck-overlay-portal] * {
  pointer-events: none !important;
}
[data-puck-entry][data-puck-preview-mode=edit] [data-puck-overlay-portal]:hover {
  outline: 2px var(--puck-color-azure-09, #cfdff0) dashed;
  outline-offset: 2px;
}
[data-puck-entry][data-puck-preview-mode=edit] [data-puck-overlay-portal]:focus-within {
  outline: 2px var(--puck-color-azure-07, #88b0da) dashed;
  outline-offset: 2px;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/InlineTextField/styles.module.css/#css-module-data */
._InlineTextField_104qp_1 {
  cursor: text;
  display: inline-block;
  white-space: pre-wrap;
  text-decoration: inherit;
}
[data-dnd-dragging] ._InlineTextField_104qp_1 {
  cursor: none;
  caret-color: transparent;
}
[data-dnd-dragging] ._InlineTextField_104qp_1::selection {
  display: none;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/Fields/styles.module.css/#css-module-data */
._PuckFields_wnj25_1 {
  position: relative;
  font-family: var(--puck-font-family);
}
._PuckFields--isLoading_wnj25_6 {
  min-height: 48px;
}
._PuckFields-loadingOverlay_wnj25_10 {
  background: var(--puck-color-surface);
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  top: 0px;
  position: absolute;
  z-index: 1;
  pointer-events: all;
  box-sizing: border-box;
  opacity: 0.8;
}
._PuckFields-loadingOverlayInner_wnj25_25 {
  display: flex;
  padding: var(--puck-space-4);
  position: sticky;
  top: 0;
}
._PuckFields-field_wnj25_32 * {
  box-sizing: border-box;
}
._PuckFields--wrapFields_wnj25_36 ._PuckFields-field_wnj25_32 {
  color: var(--puck-color-text-secondary);
  padding: var(--puck-space-4);
  padding-bottom: var(--puck-space-3);
  display: block;
}
._PuckFields--wrapFields_wnj25_36 ._PuckFields-field_wnj25_32 + ._PuckFields-field_wnj25_32 {
  border-top: var(--puck-border-width-regular) solid var(--puck-color-border);
  margin-top: var(--puck-space-2);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/ComponentList/styles.module.css/#css-module-data */
._ComponentList_htktj_1 {
  max-width: 100%;
}
._ComponentList--isExpanded_htktj_5 + ._ComponentList_htktj_1 {
  margin-top: var(--puck-space-3);
}
._ComponentList-content_htktj_9 {
  display: none;
}
._ComponentList--isExpanded_htktj_5 > ._ComponentList-content_htktj_9 {
  display: block;
}
._ComponentList-title_htktj_17 {
  background-color: transparent;
  border: 0;
  color: var(--puck-drawer-category-color-text, var(--puck-color-text-muted));
  cursor: pointer;
  display: flex;
  font: inherit;
  font-size: var(--puck-drawer-category-font-size, var(--puck-font-size-xxxs));
  list-style: none;
  margin-bottom: 6px;
  padding: var(--puck-drawer-category-space, var(--puck-space-2));
  text-transform: uppercase;
  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit), color var(--puck-duration-fast) var(--puck-ease-exit);
  gap: var(--puck-space-1);
  border-radius: var(--puck-radius-m);
  width: 100%;
}
._ComponentList-title_htktj_17:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: var(--puck-border-width-focus);
}
@media (hover: hover) and (pointer: fine) {
  ._ComponentList-title_htktj_17:hover {
    background-color: var( --puck-drawer-category-color-bg-hover, var(--puck-color-interactive-soft) );
    color: var( --puck-drawer-category-color-text-hover, var(--puck-color-interactive) );
    transition: none;
  }
}
._ComponentList-title_htktj_17:active {
  background-color: var( --puck-drawer-category-color-bg-active, var(--puck-color-interactive-subtle) );
  transition: none;
}
._ComponentList-titleIcon_htktj_63 {
  margin-inline-start: auto;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/Preview/styles.module.css/#css-module-data */
._PuckPreview_zbic3_1 {
  position: relative;
  height: 100%;
}
._PuckPreview-frame_zbic3_6 {
  border: none;
  height: 100%;
  width: 100%;
}
._PuckPreview-frame_zbic3_6[data-puck-outline-dragging] {
  pointer-events: none;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/LayerTree/components/drop-line/styles.module.css/#css-module-data */
._DropLine_eyz3q_2 {
  background: var(--_puck-outline-color-drop-indicator);
  border-radius: calc(var(--_puck-outline-drop-indicator-size) / 2);
  height: var(--_puck-outline-drop-indicator-size);
  inset-inline: 0;
  pointer-events: none;
  position: absolute;
  z-index: 1;
}
._DropLine--top_eyz3q_12 {
  top: 0;
}
._DropLine--bottom_eyz3q_16 {
  bottom: 0;
}
._DropLine--top_eyz3q_12._DropLine--outset_eyz3q_20 {
  top: calc(-1 * var(--_puck-outline-drop-indicator-size));
}
._DropLine--bottom_eyz3q_16._DropLine--outset_eyz3q_20 {
  bottom: calc(-1 * var(--_puck-outline-drop-indicator-size));
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/LayerTree/components/empty-zone-placeholder/styles.module.css/#css-module-data */
._LayerTree-helper_1m7e4_2 {
  color: var(--puck-outline-color-text-helper, var(--puck-color-text-subtle));
  padding-top: var(--puck-space-1);
  padding-bottom: var(--puck-space-1);
  padding-inline-start: var(--_puck-outline-label-indent);
  border: var(--_puck-outline-border-width) solid transparent;
}
._LayerTree-helperRoot_1m7e4_11 {
  padding-inline-start: var(--puck-space-3);
}
._LayerTree-helper_1m7e4_2[data-puck-drop-target] {
  position: relative;
  overflow: visible;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/LayerTree/components/layer/styles.module.css/#css-module-data */
._Layer_onfgu_1 {
  position: relative;
  border: var(--_puck-outline-border-width) solid transparent;
  border-radius: var(--_puck-outline-radius);
}
._Layer-inner_onfgu_8 {
  align-items: center;
  border: var(--_puck-outline-border-width) solid transparent;
  border-radius: var(--_puck-outline-radius);
  cursor: pointer;
  display: flex;
  position: relative;
  transition: color var(--puck-duration-fast) var(--puck-ease-exit);
}
._Layer--isSortable_onfgu_18 > ._Layer-inner_onfgu_8 {
  cursor: grab;
}
._Layer-content_onfgu_22 {
  display: flex;
  gap: var(--puck-space-4);
  flex: 1 1 auto;
  min-width: 0;
}
._Layer-clickable_onfgu_29 {
  align-items: center;
  background: none;
  border: 0;
  border-radius: var(--_puck-outline-radius);
  color: inherit;
  cursor: inherit;
  display: flex;
  flex: 1 1 auto;
  font: inherit;
  min-width: 0;
  padding: 0;
}
[data-puck-dnd-disabled] ._Layer-inner_onfgu_8,
[data-puck-dnd-disabled] ._Layer-clickable_onfgu_29 {
  cursor: pointer;
}
._Layer-clickable_onfgu_29:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: var(--puck-border-width-focus);
  position: relative;
  z-index: 1;
}
._Layer-caret_onfgu_57 {
  visibility: hidden;
  display: flex;
  flex-shrink: 0;
}
._Layer-caret_onfgu_57 svg {
  height: var(--_puck-outline-caret-size);
  width: var(--_puck-outline-caret-size);
}
._Layer--containsZone_onfgu_68 > ._Layer-inner_onfgu_8 > ._Layer-content_onfgu_22 {
  font-weight: var(--puck-font-weight-bold);
}
._Layer--containsZone_onfgu_68 > ._Layer-inner_onfgu_8 > ._Layer-caret_onfgu_57 {
  visibility: visible;
}
._Layer-title_onfgu_76 {
  display: flex;
  gap: var(--puck-space-2);
  align-items: center;
  overflow-x: hidden;
  margin: var(--puck-space-1);
  cursor: pointer;
}
._Layer-name_onfgu_85 {
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
._Layer-icon_onfgu_91 {
  color: var(--puck-outline-color-icon, var(--puck-color-text-subtle));
  margin-top: var(--puck-space-1);
}
._Layer-icon_onfgu_91 svg {
  height: var(--_puck-outline-icon-size);
  width: var(--_puck-outline-icon-size);
}
._Layer-zones_onfgu_101 {
  display: none;
  margin-inline-start: var(--puck-outline-space-indent, var(--puck-space-4));
}
._Layer--isExpanded_onfgu_106 > ._Layer-zones_onfgu_101 {
  display: block;
}
._Layer--isExpanded_onfgu_106 > ._Layer-inner_onfgu_8 > ._Layer-caret_onfgu_57 svg {
  transform: rotate(90deg);
}
@media (hover: hover) and (pointer: fine) {
  ._Layer_onfgu_1:not(._Layer--isSelected_onfgu_115) > ._Layer-inner_onfgu_8:hover {
    --_puck-outline-actions-color-bg: var(--_puck-outline-color-bg-hover);
    border-color: var(--_puck-outline-color-border-hover);
    background: var(--_puck-outline-color-bg-hover);
    transition: none;
  }
}
._Layer--isSelected_onfgu_115 > ._Layer-inner_onfgu_8 {
  border-color: var( --puck-outline-color-border-selected, var(--puck-color-selection-border) );
}
._Layer--isSelected_onfgu_115 > ._Layer-inner_onfgu_8 {
  --_puck-outline-actions-color-bg: var(--_puck-outline-color-bg-selected);
  background: var(--_puck-outline-color-bg-selected);
}
._Layer--isExpandCandidate_onfgu_138 > ._Layer-inner_onfgu_8 {
  border-color: var(--_puck-outline-color-border-hover);
  background: var(--_puck-outline-color-bg-hover);
}
._Layer--isDragSource_onfgu_143 > ._Layer-inner_onfgu_8 {
  color: var(--puck-color-text-muted);
  background: transparent;
}
._Layer--isDragSource_onfgu_143 > ._Layer-zones_onfgu_101 {
  opacity: 0.5;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/LayerTree/components/layer-actions/styles.module.css/#css-module-data */
._LayerActions_d90t9_2 {
  position: sticky;
  inset-inline-end: calc(var(--puck-space-1) * -1);
  padding-inline: var(--puck-space-1);
  display: flex;
  visibility: hidden;
  flex-shrink: 0;
  color: var(--_puck-outline-color-text);
  background: var(--_puck-outline-actions-color-bg);
  border-top-right-radius: var(--_puck-outline-radius);
  border-bottom-right-radius: var(--_puck-outline-radius);
}
._LayerActions--visible_d90t9_18 {
  visibility: visible;
}
._LayerActions_d90t9_2 svg {
  height: var(--_puck-outline-caret-size);
  width: var(--_puck-outline-caret-size);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/LayerTree/components/layer-tree-items/styles.module.css/#css-module-data */
._LayerTree_o5tyt_1 {
  color: var(--_puck-outline-color-text);
  font-family: var(--puck-outline-font-family, var(--puck-font-family));
  font-size: var(--puck-outline-font-size, var(--puck-font-size-xxxs));
  margin: 0;
  position: relative;
  list-style: none;
  padding: 0;
}
._LayerTree--nested_o5tyt_12 {
  margin-inline-start: var(--puck-outline-space-indent, var(--puck-space-3));
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/LayerTree/components/layer-tree-zone/styles.module.css/#css-module-data */
._LayerTree-zoneTitle_fvhlh_2 {
  color: var(--_puck-outline-zone-color-text);
  font-size: var( --puck-outline-zone-font-size, calc(var(--puck-font-size-xxxs) * 0.9) );
  display: flex;
  gap: var(--puck-space-2);
  align-items: center;
  overflow-x: hidden;
  padding-top: var(--puck-space-1);
  padding-bottom: var(--puck-space-1);
  padding-inline-start: var(--_puck-outline-label-indent);
  border: var(--_puck-outline-border-width) solid transparent;
}
._LayerTree-zoneIcon_fvhlh_19 {
  margin-top: var(--puck-space-1);
}
._LayerTree-zoneIcon_fvhlh_19 svg {
  height: var(--_puck-outline-icon-size);
  width: var(--_puck-outline-icon-size);
}
._LayerTree-zoneTitle_fvhlh_2[data-puck-drop-target] {
  color: var(--_puck-outline-color-text-hover);
  position: relative;
  overflow: visible;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/LayerTree/styles.module.css/#css-module-data */
._LayerTreeRoot_1qowl_1 {
  min-width: max-content;
  --_puck-iconbutton-color-bg-hover: transparent;
  --_puck-outline-color-text: var( --puck-outline-color-text, var(--puck-color-text-primary) );
  --_puck-outline-border-width: var( --puck-outline-border-width, var(--puck-border-width-regular) );
  --_puck-outline-radius: var(--puck-outline-radius, var(--puck-radius-m));
  --_puck-outline-caret-size: var( --puck-outline-action-size, var(--puck-icon-size-s) );
  --_puck-outline-icon-size: var( --puck-outline-icon-size, var(--puck-icon-size-xs) );
  --_puck-outline-color-bg-selected: var( --puck-outline-color-bg-selected, var(--puck-color-interactive-subtle) );
  --_puck-outline-color-bg-hover: var( --puck-outline-color-bg-hover, var(--puck-color-interactive-soft) );
  --_puck-outline-color-border-hover: var( --puck-outline-color-border-hover, var(--puck-color-interactive-subtle) );
  --_puck-outline-color-text-hover: var( --puck-outline-color-text-hover, var(--puck-color-interactive) );
  --_puck-outline-color-drop-indicator: var( --puck-outline-color-drop-indicator, var(--puck-color-line-placeholder) );
  --_puck-outline-drop-indicator-size: var(--puck-line-placeholder-width);
  --_puck-outline-zone-color-text: var( --puck-outline-zone-color-text, var(--puck-color-text-muted) );
  --_puck-outline-actions-color-bg: transparent;
  --_puck-outline-caret-slot: calc( var(--_puck-outline-caret-size) + var(--puck-iconbutton-space, var(--puck-space-1)) * 2 );
  --_puck-outline-label-indent: calc( var(--_puck-outline-caret-slot) + var(--puck-space-2) + var(--_puck-outline-border-width) );
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/Outline/components/collapse-all/styles.module.css/#css-module-data */
._CollapseAll_1r4cy_1 {
  visibility: hidden;
}
._CollapseAll-icon_1r4cy_5 {
  height: var(--puck-icon-size-m);
  width: var(--puck-icon-size-m);
}
._CollapseAll--visible_1r4cy_10 {
  visibility: visible;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/Outline/components/outline-header/styles.module.css/#css-module-data */
._OutlineHeader_ntv8r_1 {
  display: flex;
  align-items: center;
  width: 100%;
  gap: var(--puck-space-2);
  padding-block: var(--puck-space-3);
  padding-inline: var(--puck-space-4);
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border);
  box-sizing: border-box;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/Outline/styles.module.css/#css-module-data */
._OutlineWrapper_b9ln0_1 {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-height: 0;
  min-width: 0;
}
._OutlineWrapper-collapseAll_b9ln0_9 {
  display: flex;
  align-items: center;
  margin-inline-start: auto;
}
._OutlineWrapper-layers_b9ln0_15 {
  flex-grow: 1;
  min-height: 0;
  overflow: auto;
  padding: var(--puck-space-1);
  box-sizing: border-box;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/Layout/styles.module.css/#css-module-data */
._Puck_tzaxg_19 {
  font-family: var(--puck-font-family);
  overflow-x: hidden;
  visibility: visible !important;
}
@media (min-width: 766px) {
  ._Puck_tzaxg_19 {
    overflow-x: auto;
  }
}
._Puck-portal_tzaxg_31 {
  position: relative;
  z-index: 2;
}
._PuckLayout_tzaxg_36 {
  height: 100dvh;
}
._PuckLayout-inner_tzaxg_40 {
  --puck-frame-width: auto;
  --puck-pluginbar-width: min-content;
  --puck-sidebar-width: 0px;
  --puck-sidebar-left-width: var( --puck-user-sidebar-left-width, var(--puck-sidebar-width) );
  --puck-sidebar-right-width: var( --puck-user-sidebar-right-width, var(--puck-sidebar-width) );
  background-color: var(--puck-color-surface-subtle);
  display: grid;
  grid-template-areas: "header" "editor" "left" "right" "sidenav";
  grid-template-columns: var(--puck-frame-width);
  grid-template-rows: min-content auto 0 0 var(--puck-pluginbar-width);
  height: 100%;
  position: relative;
  transition: grid-template-rows var(--puck-duration-medium) var(--puck-ease-exit);
  z-index: 0;
  overflow: hidden;
}
@media (min-width: 638px) {
  ._PuckLayout-inner_tzaxg_40 {
    --puck-pluginbar-width: 68px;
    grid-template-areas: "header header header header" "sidenav left editor right";
    grid-template-columns: var(--puck-pluginbar-width) 0 var(--puck-frame-width) 0;
    grid-template-rows: min-content auto;
  }
  ._Puck--hidePlugins_tzaxg_73 ._PuckLayout-inner_tzaxg_40 {
    --puck-pluginbar-width: 0;
  }
}
._PuckLayout--mounted_tzaxg_78 ._PuckLayout-inner_tzaxg_40 {
  --puck-sidebar-width: 186px;
}
._PuckLayout--mobilePanelHeightToggle_tzaxg_82._PuckLayout--leftSideBarVisible_tzaxg_82 ._PuckLayout-inner_tzaxg_40 {
  grid-template-rows: 0 auto 30% 0 var(--puck-pluginbar-width);
  transition: grid-template-rows var(--puck-duration-medium) var(--puck-ease-entrance);
}
._PuckLayout--mobilePanelHeightToggle_tzaxg_82._PuckLayout--leftSideBarVisible_tzaxg_82._PuckLayout--isExpanded_tzaxg_90 ._PuckLayout-inner_tzaxg_40 {
  grid-template-rows: 0 auto 55% 0 var(--puck-pluginbar-width);
  transition: grid-template-rows var(--puck-duration-medium) var(--puck-ease-entrance);
}
@media (min-width: 638px) {
  ._PuckLayout--mobilePanelHeightToggle_tzaxg_82._PuckLayout--leftSideBarVisible_tzaxg_82 ._PuckLayout-inner_tzaxg_40 {
    grid-template-columns: var(--puck-pluginbar-width) var(--puck-sidebar-left-width) var( --puck-frame-width ) 0;
    grid-template-rows: min-content auto;
  }
}
._PuckLayout--mobilePanelHeightMinContent_tzaxg_110._PuckLayout--leftSideBarVisible_tzaxg_82 ._PuckLayout-inner_tzaxg_40,
._PuckLayout--mobilePanelHeightMinContent_tzaxg_110._PuckLayout--leftSideBarVisible_tzaxg_82._PuckLayout--isExpanded_tzaxg_90 ._PuckLayout-inner_tzaxg_40 {
  grid-template-rows: 0 auto min-content 0 var(--puck-pluginbar-width);
}
@media (min-width: 638px) {
  ._PuckLayout--mobilePanelHeightToggle_tzaxg_82._PuckLayout--leftSideBarVisible_tzaxg_82 ._PuckLayout-inner_tzaxg_40,
  ._PuckLayout--mobilePanelHeightToggle_tzaxg_82._PuckLayout--leftSideBarVisible_tzaxg_82._PuckLayout--isExpanded_tzaxg_90 ._PuckLayout-inner_tzaxg_40,
  ._PuckLayout--mobilePanelHeightMinContent_tzaxg_110._PuckLayout--leftSideBarVisible_tzaxg_82 ._PuckLayout-inner_tzaxg_40,
  ._PuckLayout--mobilePanelHeightMinContent_tzaxg_110._PuckLayout--leftSideBarVisible_tzaxg_82._PuckLayout--isExpanded_tzaxg_90 ._PuckLayout-inner_tzaxg_40 {
    grid-template-columns: var(--puck-pluginbar-width) var(--puck-sidebar-left-width) var( --puck-frame-width ) 0;
    grid-template-rows: min-content auto;
  }
}
@media (min-width: 638px) {
  ._PuckLayout--rightSideBarVisible_tzaxg_137 ._PuckLayout-inner_tzaxg_40 {
    grid-template-columns: var(--puck-pluginbar-width) 0 var(--puck-frame-width) var(--puck-sidebar-right-width);
  }
}
@media (min-width: 638px) {
  ._PuckLayout--leftSideBarVisible_tzaxg_82._PuckLayout--rightSideBarVisible_tzaxg_137 ._PuckLayout-inner_tzaxg_40 {
    grid-template-columns: var(--puck-pluginbar-width) var(--puck-sidebar-left-width) var( --puck-frame-width ) var(--puck-sidebar-right-width);
  }
}
@media (min-width: 458px) {
  ._PuckLayout-mounted_tzaxg_156 ._PuckLayout-inner_tzaxg_40 {
    --puck-frame-width: minmax(266px, auto);
  }
}
@media (min-width: 638px) {
  ._PuckLayout_tzaxg_36 ._PuckLayout-inner_tzaxg_40 {
    --puck-sidebar-width: minmax(186px, 250px);
  }
}
@media (min-width: 766px) {
  ._PuckLayout_tzaxg_36 ._PuckLayout-inner_tzaxg_40 {
    --puck-frame-width: auto;
  }
}
@media (min-width: 990px) {
  ._PuckLayout_tzaxg_36 ._PuckLayout-inner_tzaxg_40 {
    --puck-sidebar-width: 256px;
  }
}
@media (min-width: 1198px) {
  ._PuckLayout_tzaxg_36 ._PuckLayout-inner_tzaxg_40 {
    --puck-sidebar-width: 274px;
  }
}
@media (min-width: 1398px) {
  ._PuckLayout_tzaxg_36 ._PuckLayout-inner_tzaxg_40 {
    --puck-sidebar-width: 290px;
  }
}
@media (min-width: 1598px) {
  ._PuckLayout_tzaxg_36 ._PuckLayout-inner_tzaxg_40 {
    --puck-sidebar-width: 320px;
  }
}
._PuckLayout-nav_tzaxg_197 {
  border-top: var(--puck-border-width-regular) solid var(--puck-color-border);
  background-color: var( --puck-pluginbar-color-bg, var(--puck-color-surface-subtle) );
  grid-area: sidenav;
  overflow: hidden;
  width: 100%;
}
@media (min-width: 638px) {
  ._PuckLayout-nav_tzaxg_197 {
    border-top: 0;
    border-right: var(--puck-border-width-regular) solid var(--puck-color-border);
    box-sizing: border-box;
  }
}
._PuckLayout-header_tzaxg_217 {
  grid-area: header;
}
._PuckLayout--leftSideBarVisible_tzaxg_82 ._PuckLayout-header_tzaxg_217 {
  overflow: hidden;
}
@media (min-width: 638px) {
  ._PuckLayout--leftSideBarVisible_tzaxg_82 ._PuckLayout-header_tzaxg_217 {
    overflow: auto;
  }
}
._PuckPluginTab_tzaxg_231 {
  display: none;
  flex-grow: 1;
  max-height: 100%;
}
._PuckPluginTab--visible_tzaxg_237 {
  display: flex;
  flex-direction: column;
  min-height: 0;
}
._PuckPluginTab-body_tzaxg_243 {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  max-height: 100%;
  min-height: 0;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/MenuBar/styles.module.css/#css-module-data */
._MenuBar_1hxnj_1 {
  background-color: var(--_puck-menu-bar-color-bg, var(--puck-color-surface));
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border);
  display: none;
  left: 0;
  margin-top: 1px;
  padding: var(--puck-space-2) var(--puck-space-4);
  position: absolute;
  right: 0;
  top: 100%;
  z-index: 2;
}
._MenuBar--menuOpen_1hxnj_14 {
  display: block;
}
@media (min-width: 638px) {
  ._MenuBar_1hxnj_1 {
    border: none;
    display: block;
    margin-top: 0;
    overflow-y: visible;
    padding: 0;
    position: static;
  }
}
._MenuBar-inner_1hxnj_29 {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: var(--puck-space-2) var(--puck-space-4);
  justify-content: flex-end;
}
@media (min-width: 638px) {
  ._MenuBar-inner_1hxnj_29 {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }
}
._MenuBar-history_1hxnj_45 {
  display: flex;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/Header/styles.module.css/#css-module-data */
._PuckHeader_c2nei_1 {
  --_puck-menu-bar-color-bg: var( --puck-header-color-bg, var(--puck-color-surface) );
  background: var(--puck-header-color-bg, var(--puck-color-surface));
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border);
  color: var(--puck-header-color-text, var(--puck-color-text));
  --_puck-heading-color: var(--puck-header-color-text, var(--puck-color-text));
  grid-area: header;
  position: relative;
  max-width: 100vw;
}
@media (min-width: 638px) {
  ._PuckHeader_c2nei_1 {
    padding-left: 67px;
  }
  ._PuckHeader--hidePlugins_c2nei_21 {
    padding-left: 0;
  }
}
._PuckHeader-inner_c2nei_26 {
  align-items: end;
  display: grid;
  gap: var(--puck-space-chrome-gutter);
  grid-template-areas: "left middle right";
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: auto;
  padding: var(--puck-space-chrome-gutter);
}
@media (min-width: 638px) {
  ._PuckHeader-inner_c2nei_26 {
    border-left: var(--puck-border-width-regular) solid var(--puck-color-border);
  }
  ._PuckHeader--hidePlugins_c2nei_21 ._PuckHeader-inner_c2nei_26 {
    border-left: none;
  }
}
._PuckHeader-toggle_c2nei_46 {
  display: flex;
  margin-inline-start: calc(var(--puck-space-1) * -1);
  padding-top: 2px;
}
._PuckHeader-rightSideBarToggle_c2nei_52,
._PuckHeader-leftSideBarToggle_c2nei_53 {
  display: none;
}
@media (min-width: 638px) {
  ._PuckHeader-rightSideBarToggle_c2nei_52,
  ._PuckHeader-leftSideBarToggle_c2nei_53 {
    display: block;
  }
}
._PuckHeader-title_c2nei_64 {
  align-self: center;
}
._PuckHeader-path_c2nei_68 {
  font-family: var(--puck-font-family-monospaced);
  font-size: var(--puck-font-size-xxs);
  font-weight: normal;
  word-break: break-all;
}
._PuckHeader-tools_c2nei_75 {
  display: flex;
  gap: var(--puck-space-4);
  justify-content: flex-end;
}
._PuckHeader-menuButton_c2nei_81 {
  color: var(--puck-color-text-muted);
  margin-inline-start: calc(var(--puck-space-1) * -1);
}
._PuckHeader--menuOpen_c2nei_86 ._PuckHeader-menuButton_c2nei_81 {
  color: var(--puck-color-text);
}
@media (min-width: 638px) {
  ._PuckHeader-menuButton_c2nei_81 {
    display: none;
  }
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/SidebarSection/styles.module.css/#css-module-data */
._SidebarSection_1uv88_1 {
  display: flex;
  position: relative;
  flex-direction: column;
  color: var(--puck-color-text);
}
._SidebarSection_1uv88_1:last-of-type {
  flex-grow: 1;
}
._SidebarSection-title_1uv88_12 {
  background: var(--_puck-sidebar-section-color-bg, var(--puck-color-surface));
  padding: var(--puck-space-4);
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border);
  border-top: var(--puck-border-width-regular) solid var(--puck-color-border);
  overflow-x: auto;
}
._SidebarSection--noBorderTop_1uv88_20 > ._SidebarSection-title_1uv88_12 {
  border-top: 0px;
}
._SidebarSection-content_1uv88_24:last-child {
  padding-bottom: var(--puck-space-1);
}
._SidebarSection_1uv88_1:last-of-type ._SidebarSection-content_1uv88_24 {
  border-bottom: none;
  flex-grow: 1;
}
._SidebarSection-breadcrumbLabel_1uv88_33 {
  background: none;
  border: 0;
  border-radius: var(--puck-radius-xs);
  color: var(--puck-color-interactive);
  cursor: pointer;
  font: inherit;
  flex-shrink: 0;
  padding: 0;
  transition: color var(--puck-duration-fast) var(--puck-ease-exit);
}
._SidebarSection-breadcrumbLabel_1uv88_33:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: var(--puck-border-width-focus);
}
@media (hover: hover) and (pointer: fine) {
  ._SidebarSection-breadcrumbLabel_1uv88_33:hover {
    color: var(--puck-color-interactive-hover);
    transition: none;
  }
}
._SidebarSection-breadcrumbLabel_1uv88_33:active {
  color: var(--puck-color-interactive-active);
  transition: none;
}
._SidebarSection-breadcrumbs_1uv88_62 {
  align-items: center;
  display: flex;
  gap: var(--puck-space-1);
}
._SidebarSection-breadcrumb_1uv88_33 {
  align-items: center;
  display: flex;
  gap: var(--puck-space-1);
}
._SidebarSection-heading_1uv88_74 {
  padding-inline-end: var(--puck-space-4);
}
._SidebarSection-loadingOverlay_1uv88_78 {
  background: var(--puck-color-surface);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  top: 0;
  position: absolute;
  z-index: 1;
  pointer-events: all;
  box-sizing: border-box;
  opacity: 0.8;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Breadcrumbs/styles.module.css/#css-module-data */
._Breadcrumbs_8c6w5_1 {
  align-items: center;
  display: flex;
  gap: var(--puck-space-1);
}
._Breadcrumbs-breadcrumbLabel_8c6w5_7 {
  background: none;
  border: 0;
  border-radius: var(--puck-radius-xs);
  color: var(--puck-color-interactive);
  cursor: pointer;
  font: inherit;
  flex-shrink: 0;
  padding: 0;
  transition: color var(--puck-duration-fast) var(--puck-ease-exit);
}
._Breadcrumbs-breadcrumbLabel_8c6w5_7:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: var(--puck-border-width-focus);
}
@media (hover: hover) and (pointer: fine) {
  ._Breadcrumbs-breadcrumbLabel_8c6w5_7:hover {
    color: var(--puck-color-interactive-hover);
    transition: none;
  }
}
._Breadcrumbs-breadcrumbLabel_8c6w5_7:active {
  color: var(--puck-color-interactive-active);
  transition: none;
}
._Breadcrumbs-breadcrumb_8c6w5_7 {
  align-items: center;
  display: flex;
  gap: var(--puck-space-1);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/ViewportControls/styles.module.css/#css-module-data */
._ViewportControls_v26yb_1 {
  position: relative;
}
._ViewportControls--fullScreen_v26yb_5 {
  border-radius: 32px;
  display: flex;
  position: absolute;
  bottom: var(--puck-space-3);
  right: var(--puck-space-3);
  overflow: hidden;
}
._ViewportControls-toggleButton_v26yb_14 {
  display: none;
}
._ViewportControls--fullScreen_v26yb_5 ._ViewportControls-toggleButton_v26yb_14 {
  align-items: center;
  background-color: var(--puck-color-surface-inverse);
  border: var(--puck-border-width-regular) solid var(--puck-color-border-inverse);
  border-radius: var(--puck-radius-pill);
  cursor: pointer;
  color: var(--puck-color-text-inverse);
  display: flex;
  justify-content: center;
  width: 42px;
  height: 42px;
  z-index: 1;
}
._ViewportControls--fullScreen_v26yb_5 ._ViewportControls-toggleButton_v26yb_14:hover {
  color: var(--puck-color-interactive-inverse-hover);
  border: var(--puck-border-width-regular) solid var(--puck-color-interactive-inverse-hover);
}
._ViewportControls-actions_v26yb_39 {
  display: flex;
}
._ViewportControls-actionsInner_v26yb_43 {
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  z-index: 0;
  overflow: hidden;
}
._ViewportControls--fullScreen_v26yb_5 ._ViewportControls-actionsInner_v26yb_43 {
  background: var(--puck-color-surface-muted);
  border: var(--puck-border-width-regular) solid var(--puck-color-border);
  border-radius: var(--puck-radius-pill);
  margin-left: none;
  margin-right: none;
  padding-right: 42px;
}
._ViewportControls--fullScreen_v26yb_5 ._ViewportControls-actionsInner_v26yb_43 {
  transform: translateX(100%);
  transition: transform var(--puck-duration-medium) var(--puck-ease-emphasized);
}
._ViewportControls--fullScreen_v26yb_5._ViewportControls--isExpanded_v26yb_67 ._ViewportControls-actionsInner_v26yb_43 {
  transform: translateX(42px);
}
._ViewportControls-divider_v26yb_72 {
  border-inline-end: var(--puck-border-width-regular) solid var(--puck-color-border);
  margin-bottom: var(--puck-space-2);
  margin-top: var(--puck-space-2);
}
._ViewportControls-zoomSelect_v26yb_79 {
  appearance: none;
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='%23c3c3c3'><polygon points='0,0 100,0 50,50'/></svg>") no-repeat;
  background-size: 10px;
  color: currentColor;
  background-position: calc(100% - 12px) calc(50% + 3px);
  background-repeat: no-repeat;
  border: 0;
  font-size: var(--puck-font-size-xxxs);
  padding: 0;
  padding-left: var(--puck-space-2);
  width: 96px;
}
._ViewportControls--fullScreen_v26yb_5 ._ViewportControls-zoom_v26yb_79 {
  display: none;
}
@media (min-width: 638px) {
  ._ViewportControls-zoom_v26yb_79,
  ._ViewportControls--fullScreen_v26yb_5 ._ViewportControls-zoom_v26yb_79 {
    display: flex;
    justify-content: center;
  }
}
._ViewportControls-zoomSelect_v26yb_79:dir(rtl) {
  background-position: 12px calc(50% + 3px);
}
._ViewportButton-inner_v26yb_110 {
  align-items: center;
  display: flex;
  justify-content: center;
  height: 32px;
  width: 32px;
}
._ViewportButton--isActive_v26yb_118 ._ViewportButton-inner_v26yb_110 {
  color: var(--puck-color-interactive);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/Canvas/styles.module.css/#css-module-data */
._PuckCanvas_zw9iy_1 {
  color: var(--puck-canvas-color-text, var(--puck-color-text));
  background: var(--puck-canvas-color-bg, var(--puck-color-surface-muted));
  display: flex;
  grid-area: editor;
  flex-direction: column;
  padding: var(--puck-space-chrome-gutter);
  position: relative;
  overflow: auto;
}
@media (min-width: 1198px) {
  ._PuckCanvas_zw9iy_1 {
    padding: calc(var(--puck-space-chrome-gutter) * 1.5);
    padding-top: calc(var(--puck-space-chrome-gutter) * 0.5);
  }
  ._PuckCanvas_zw9iy_1:not(._PuckCanvas_zw9iy_1:has(._PuckCanvas-controls_zw9iy_18)) {
    padding-top: calc(var(--puck-space-chrome-gutter) * 1.5);
  }
}
._PuckCanvas--fullScreen_zw9iy_23 {
  padding: 0;
  overflow: hidden;
}
@media (min-width: 1198px) {
  ._PuckCanvas--fullScreen_zw9iy_23 {
    padding: 0;
  }
}
._PuckCanvas-inner_zw9iy_34 {
  display: flex;
  height: 100%;
  justify-content: center;
  min-width: 288px;
  position: relative;
  width: 100%;
}
._PuckCanvas-root_zw9iy_43 {
  background: var(--puck-canvas-preview-color-bg, var(--puck-color-surface));
  outline: var(--puck-border-width-regular) solid var(--puck-color-border);
  box-sizing: content-box;
  min-width: 321px;
  position: absolute;
  pointer-events: none;
  transform-origin: top;
  top: 0;
  bottom: 0;
  opacity: 0;
}
@media (min-width: 1198px) {
  ._PuckCanvas-root_zw9iy_43 {
    min-width: unset;
  }
}
@media (prefers-reduced-motion: reduce) {
  ._PuckCanvas-root_zw9iy_43 {
    transition: none !important;
  }
}
._PuckCanvas--ready_zw9iy_68 ._PuckCanvas-root_zw9iy_43 {
  pointer-events: unset;
  opacity: 1;
}
._PuckCanvas-loader_zw9iy_73 {
  align-items: center;
  color: var(--puck-color-text-subtle);
  display: flex;
  height: 100%;
  justify-content: center;
  transition: opacity var(--puck-duration-slow) var(--puck-ease-entrance);
  opacity: 0;
  pointer-events: none;
}
._PuckCanvas--showLoader_zw9iy_84 ._PuckCanvas-loader_zw9iy_73 {
  opacity: 1;
}
._PuckCanvas--showLoader_zw9iy_84._PuckCanvas--ready_zw9iy_68 ._PuckCanvas-loader_zw9iy_73 {
  opacity: 0;
  height: 0;
  transition: none;
}
._PuckCanvas-controls_zw9iy_18 {
  padding-bottom: calc(var(--puck-space-chrome-gutter) * 0.5);
}
._PuckCanvas--fullScreen_zw9iy_23 ._PuckCanvas-controls_zw9iy_18 {
  padding-bottom: 0;
  z-index: 1;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/ResizeHandle/styles.module.css/#css-module-data */
@media (min-width: 766px) {
  ._ResizeHandle_144bf_2 {
    position: absolute;
    width: 5px;
    height: 100%;
    cursor: col-resize;
    z-index: 10;
    background: transparent;
    top: 0;
  }
  ._ResizeHandle_144bf_2:hover {
    background: rgba(0, 0, 0, 0.1);
  }
  ._ResizeHandle--left_144bf_16 {
    right: -3px;
  }
  ._ResizeHandle--right_144bf_20 {
    left: -3px;
  }
}

/* components/Puck/components/ResizeHandle/styles.css */
[data-resize-overlay] {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  cursor: col-resize;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/Sidebar/styles.module.css/#css-module-data */
._Sidebar_16oed_1 {
  border-block-start: var(--puck-border-width-regular) solid var(--puck-color-border);
  position: relative;
  display: none;
  flex-direction: column;
  overflow-y: auto;
}
._Sidebar--isVisible_16oed_10 {
  display: flex;
}
._Sidebar--left_16oed_14 {
  --_puck-sidebar-section-color-bg: var( --puck-sidebar-left-color-bg, var(--puck-color-surface) );
  background: var( --puck-sidebar-left-color-bg, var(--puck-color-surface-subtle) );
  grid-area: left;
}
@media (min-width: 766px) {
  ._Sidebar--left_16oed_14 {
    border-block-start: 0;
    border-inline-end: var(--puck-border-width-regular) solid var(--puck-color-border);
  }
}
._Sidebar--right_16oed_34 {
  --_puck-sidebar-section-color-bg: var( --puck-sidebar-right-color-bg, var(--puck-color-surface) );
  background: var(--puck-sidebar-right-color-bg, var(--puck-color-surface));
  grid-area: right;
}
@media (min-width: 766px) {
  ._Sidebar--right_16oed_34 {
    border-block-start: 0;
    border-inline-start: var(--puck-border-width-regular) solid var(--puck-color-border);
  }
}
._Sidebar-resizeHandle_16oed_51 {
  position: absolute;
  height: 100%;
}
._Sidebar--left_16oed_14 + ._Sidebar-resizeHandle_16oed_51 {
  grid-area: left;
  justify-self: end;
}
._Sidebar--right_16oed_34 + ._Sidebar-resizeHandle_16oed_51 {
  grid-area: right;
  justify-self: start;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/Nav/styles.module.css/#css-module-data */
._Nav_vll2r_1 {
  display: flex;
}
._Nav-list_vll2r_5 {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  overflow-x: auto;
  gap: var(--puck-space-2);
}
@media (min-width: 638px) {
  ._Nav-list_vll2r_5 {
    padding-top: 32px;
    flex-direction: column;
    gap: var(--puck-space-4);
    width: 100%;
  }
}
._Nav-mobileActions_vll2r_23 {
  align-items: center;
  display: flex;
  justify-content: center;
  margin-inline-start: auto;
  padding: var(--puck-space-1) var(--puck-space-4);
  border-inline-start: var(--puck-border-width-regular) solid var(--puck-color-border);
}
@media (min-width: 638px) {
  ._Nav-mobileActions_vll2r_23 {
    display: none;
  }
}
._NavItem-link_vll2r_39 {
  text-align: center;
  align-items: center;
  color: var(--puck-pluginbar-color-text, var(--puck-color-text-secondary));
  display: flex;
  gap: var(--puck-space-2);
  text-decoration: none;
  cursor: pointer;
  border-radius: var(--puck-radius-m);
  padding: var(--puck-space-2) var(--puck-space-1);
  width: 64px;
  box-sizing: border-box;
}
@media (min-width: 638px) {
  ._NavItem-link_vll2r_39 {
    width: auto;
  }
}
._NavItem_vll2r_39:first-of-type {
  padding-left: var(--puck-space-4);
}
._NavItem_vll2r_39:last-of-type {
  padding-right: var(--puck-space-4);
}
@media (min-width: 638px) {
  ._NavItem_vll2r_39:first-of-type,
  ._NavItem_vll2r_39:last-of-type {
    padding: 0;
  }
}
._NavItem-link_vll2r_39 {
  border-top: var(--puck-border-width-strong) solid transparent;
  border-bottom: var(--puck-border-width-strong) solid transparent;
  border-radius: var(--puck-radius-none);
  flex-direction: column;
  font-size: var(--puck-pluginbar-font-size, var(--puck-font-size-xxxs));
}
@media (min-width: 638px) {
  ._NavItem-link_vll2r_39 {
    border: 0;
    border-left: var(--puck-border-width-strong) solid transparent;
    border-right: var(--puck-border-width-strong) solid transparent;
  }
}
._NavItem-linkIcon_vll2r_90 {
  height: 2em;
  width: 2em;
}
._NavItem-linkIcon_vll2r_90 svg {
  height: 100%;
  width: 100%;
}
._NavItem--active_vll2r_100 > ._NavItem-link_vll2r_39 {
  background-color: var(--puck-color-interactive-subtle);
  color: var( --puck-pluginbar-color-text-selected, var(--puck-color-interactive) );
  font-weight: var(--puck-font-weight-semibold);
}
._NavItem--active_vll2r_100 > ._NavItem-link_vll2r_39 {
  background-color: transparent;
  border-top-color: var(--puck-color-interactive);
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  font-weight: var(--puck-font-weight-semibold);
}
@media (min-width: 638px) {
  ._NavItem--active_vll2r_100 > ._NavItem-link_vll2r_39 {
    border-top-color: transparent;
    border-right-color: var( --puck-pluginbar-color-text-selected, var(--puck-color-interactive) );
  }
}
._NavItem_vll2r_39:not(._NavItem--active_vll2r_100) > ._NavItem-link_vll2r_39:hover {
  background-color: var( --puck-pluginbar-color-bg-hover, var(--puck-color-interactive-soft) );
  color: var(--puck-pluginbar-color-text-hover, var(--puck-color-interactive));
}
@media (min-width: 638px) {
  ._NavItem--mobileOnly_vll2r_136 {
    display: none;
  }
}
._NavItem--desktopOnly_vll2r_141 {
  display: none;
}
@media (min-width: 638px) {
  ._NavItem--desktopOnly_vll2r_141 {
    display: block;
  }
}

/* css-module:/home/runner/work/puck/puck/packages/core/plugins/blocks/styles.module.css/#css-module-data */
._BlocksPlugin_9af19_1 {
  padding: var(--puck-drawer-space, var(--puck-space-4));
  height: 100%;
  overflow-y: auto;
  box-sizing: border-box;
}

/* css-module:/home/runner/work/puck/puck/packages/core/plugins/outline/styles.module.css/#css-module-data */
._OutlinePlugin_1ylsc_1 {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-height: 0;
  min-width: 0;
  position: relative;
}

/* css-module:/home/runner/work/puck/puck/packages/core/plugins/fields/styles.module.css/#css-module-data */
._FieldsPlugin_18cj3_1 {
  background: var(--puck-color-surface);
  height: 100%;
  overflow-y: auto;
}
._FieldsPlugin-header_18cj3_7 {
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border);
  font-weight: var(--puck-font-weight-semibold);
  padding-bottom: var(--puck-space-2);
  padding-left: var(--puck-space-4);
  padding-right: var(--puck-space-4);
  padding-top: var(--puck-space-2);
}
@media (min-width: 638px) {
  ._FieldsPlugin-header_18cj3_7 {
    padding: var(--puck-space-4);
  }
}`,Zy=`/* styles/color.css */
@layer puck-tokens {
  :root {
    --puck-color-rose-01: #4a001c;
    --puck-color-rose-02: #670833;
    --puck-color-rose-03: #87114c;
    --puck-color-rose-04: #a81a66;
    --puck-color-rose-05: #bc5089;
    --puck-color-rose-06: #cc7ca5;
    --puck-color-rose-07: #d89aba;
    --puck-color-rose-08: #e3b8cf;
    --puck-color-rose-09: #efd6e3;
    --puck-color-rose-10: #f6eaf1;
    --puck-color-rose-11: #faf4f8;
    --puck-color-rose-12: #fef8fc;
    --puck-color-azure-01: #00175d;
    --puck-color-azure-02: #002c77;
    --puck-color-azure-03: #014292;
    --puck-color-azure-04: #0158ad;
    --puck-color-azure-05: #3479be;
    --puck-color-azure-06: #6499cf;
    --puck-color-azure-07: #88b0da;
    --puck-color-azure-08: #abc7e5;
    --puck-color-azure-09: #cfdff0;
    --puck-color-azure-10: #e7eef7;
    --puck-color-azure-11: #f3f6fb;
    --puck-color-azure-12: #f7faff;
    --puck-color-green-01: #002000;
    --puck-color-green-02: #043604;
    --puck-color-green-03: #084e08;
    --puck-color-green-04: #0c680c;
    --puck-color-green-05: #1d882f;
    --puck-color-green-06: #2faa53;
    --puck-color-green-07: #56c16f;
    --puck-color-green-08: #7dd78b;
    --puck-color-green-09: #b8e8bf;
    --puck-color-green-10: #ddf3e0;
    --puck-color-green-11: #eff8f0;
    --puck-color-green-12: #f3fcf4;
    --puck-color-yellow-01: #211000;
    --puck-color-yellow-02: #362700;
    --puck-color-yellow-03: #4c4000;
    --puck-color-yellow-04: #645a00;
    --puck-color-yellow-05: #877614;
    --puck-color-yellow-06: #ab9429;
    --puck-color-yellow-07: #bfac4e;
    --puck-color-yellow-08: #d4c474;
    --puck-color-yellow-09: #e6deb1;
    --puck-color-yellow-10: #f3efd9;
    --puck-color-yellow-11: #f9f7ed;
    --puck-color-yellow-12: #fcfaf0;
    --puck-color-red-01: #4c0000;
    --puck-color-red-02: #6a0a10;
    --puck-color-red-03: #8a1422;
    --puck-color-red-04: #ac1f35;
    --puck-color-red-05: #bf5366;
    --puck-color-red-06: #ce7e8e;
    --puck-color-red-07: #d99ca8;
    --puck-color-red-08: #e4b9c2;
    --puck-color-red-09: #efd7db;
    --puck-color-red-10: #f6eaec;
    --puck-color-red-11: #faf4f5;
    --puck-color-red-12: #fff9fa;
    --puck-color-grey-01: #181818;
    --puck-color-grey-02: #292929;
    --puck-color-grey-03: #404040;
    --puck-color-grey-04: #5a5a5a;
    --puck-color-grey-05: #767676;
    --puck-color-grey-06: #949494;
    --puck-color-grey-07: #ababab;
    --puck-color-grey-08: #c3c3c3;
    --puck-color-grey-09: #dcdcdc;
    --puck-color-grey-10: #efefef;
    --puck-color-grey-11: #f5f5f5;
    --puck-color-grey-12: #fafafa;
    --puck-color-black: #000000;
    --puck-color-white: #ffffff;
  }
}

/* styles/tokens.css */
@layer puck-tokens {
  :root {
    --puck-color-surface: var(--puck-color-white);
    --puck-color-surface-muted: var(--puck-color-grey-11);
    --puck-color-surface-subtle: var(--puck-color-grey-12);
    --puck-color-surface-inverse: var(--puck-color-grey-01);
    --puck-color-border: var(--puck-color-grey-09);
    --puck-color-border-hover: var(--puck-color-grey-05);
    --puck-color-border-muted: var(--puck-color-grey-10);
    --puck-color-border-inverse: var(--puck-color-grey-05);
    --puck-color-text: var(--puck-color-black);
    --puck-color-text-secondary: var(--puck-color-grey-04);
    --puck-color-text-muted: var(--puck-color-grey-05);
    --puck-color-text-subtle: var(--puck-color-grey-07);
    --puck-color-text-inverse: var(--puck-color-white);
    --puck-opacity-text-inverse: 0.75;
    --puck-color-interactive: var(--puck-color-azure-04);
    --puck-color-interactive-hover: var(--puck-color-azure-03);
    --puck-color-interactive-active: var(--puck-color-azure-02);
    --puck-color-interactive-subtle: var(--puck-color-azure-10);
    --puck-color-interactive-soft: var(--puck-color-azure-11);
    --puck-color-interactive-soft-hover: var(--puck-color-azure-12);
    --puck-color-interactive-neutral-hover: var(--puck-color-grey-10);
    --puck-color-interactive-inverse-hover: var(--puck-color-azure-06);
    --puck-color-interactive-inverse-active: var(--puck-color-azure-07);
    --puck-color-focus-ring: var(--puck-color-azure-05);
    --puck-color-selection-bg: color-mix( in srgb, var(--puck-color-azure-09) 30%, transparent );
    --puck-color-selection-border: var(--puck-color-azure-08);
    --puck-color-line-placeholder: var(--puck-color-azure-06);
    --puck-color-highlight: var(--puck-color-rose-07);
    --puck-color-bg-disabled: var(--puck-color-grey-07);
    --puck-color-text-disabled: var(--puck-color-grey-03);
    --puck-color-overlay-backdrop: color-mix( in srgb, var(--puck-color-black) 75%, transparent );
    --puck-space-1: 4px;
    --puck-space-2: 8px;
    --puck-space-3: 12px;
    --puck-space-4: 16px;
    --puck-space-5: 24px;
    --puck-space-chrome-gutter: var(--puck-space-4);
    --puck-radius-none: 0;
    --puck-radius-xs: 2px;
    --puck-radius-s: 3px;
    --puck-radius-m: 4px;
    --puck-radius-l: 8px;
    --puck-radius-pill: 30px;
    --puck-radius-round: 100%;
    --puck-border-width-hairline: 0.5px;
    --puck-border-width-regular: 1px;
    --puck-border-width-focus: 2px;
    --puck-border-width-strong: 4px;
    --puck-duration-fast: 50ms;
    --puck-duration-medium: 150ms;
    --puck-duration-slow: 250ms;
    --puck-ease-exit: ease-in;
    --puck-ease-emphasized: ease-in-out;
    --puck-ease-entrance: ease-out;
    --puck-font-weight-regular: 400;
    --puck-font-weight-medium: 500;
    --puck-font-weight-semibold: 600;
    --puck-font-weight-bold: 700;
    --puck-font-weight-heavy: 800;
    --puck-letter-spacing-ui: 0.05ch;
    --puck-letter-spacing-heading: 0.08ch;
    --puck-icon-size-xs: 14px;
    --puck-icon-size-s: 16px;
    --puck-icon-size-m: 18px;
    --puck-icon-size-l: 24px;
    --puck-space-m-unitless: 24;
    --puck-user-sidebar-left-width: var(--puck-sidebar-width);
    --puck-user-sidebar-right-width: var(--puck-sidebar-width);
    --puck-slot-min-empty-height: 128px;
    --puck-line-placeholder-width: 2px;
  }
}

/* styles/typography.css */
@layer puck-tokens {
  :root {
    --puck-font-size-scale-base-unitless: 12;
    --puck-font-size-xxxs-unitless: 12;
    --puck-font-size-xxs-unitless: 14;
    --puck-font-size-xs-unitless: 16;
    --puck-font-size-s-unitless: 18;
    --puck-font-size-m-unitless: 21;
    --puck-font-size-l-unitless: 24;
    --puck-font-size-xl-unitless: 28;
    --puck-font-size-xxl-unitless: 36;
    --puck-font-size-xxxl-unitless: 48;
    --puck-font-size-xxxxl-unitless: 56;
    --puck-font-size-xxxs: calc( 1rem * var(--puck-font-size-xxxs-unitless) / 16 );
    --puck-font-size-xxs: calc(1rem * var(--puck-font-size-xxs-unitless) / 16);
    --puck-font-size-xs: calc(1rem * var(--puck-font-size-xs-unitless) / 16);
    --puck-font-size-s: calc(1rem * var(--puck-font-size-s-unitless) / 16);
    --puck-font-size-m: calc(1rem * var(--puck-font-size-m-unitless) / 16);
    --puck-font-size-l: calc(1rem * var(--puck-font-size-l-unitless) / 16);
    --puck-font-size-xl: calc(1rem * var(--puck-font-size-xl-unitless) / 16);
    --puck-font-size-xxl: calc(1rem * var(--puck-font-size-xxl-unitless) / 16);
    --puck-font-size-xxxl: calc( 1rem * var(--puck-font-size-xxxl-unitless) / 16 );
    --puck-font-size-xxxxl: calc( 1rem * var(--puck-font-size-xxxxl-unitless) / 16 );
    --puck-font-size-base: var(--puck-font-size-xs);
    --puck-line-height-reset: 1;
    --puck-line-height-xs: calc( var(--puck-space-m-unitless) / var(--puck-font-size-m-unitless) );
    --puck-line-height-s: calc( var(--puck-space-m-unitless) / var(--puck-font-size-s-unitless) );
    --puck-line-height-m: calc( var(--puck-space-m-unitless) / var(--puck-font-size-xs-unitless) );
    --puck-line-height-l: calc( var(--puck-space-m-unitless) / var(--puck-font-size-xxs-unitless) );
    --puck-line-height-xl: calc( var(--puck-space-m-unitless) / var(--puck-font-size-scale-base-unitless) );
    --puck-line-height-base: var(--puck-line-height-m);
    --puck-fallback-font-stack:
      -apple-system,
      BlinkMacSystemFont,
      Segoe UI,
      Helvetica Neue,
      sans-serif,
      Apple Color Emoji,
      Segoe UI Emoji,
      Segoe UI Symbol;
    --puck-font-family: Inter, var(--puck-fallback-font-stack);
    --puck-font-family-monospaced:
      ui-monospace,
      "Cascadia Code",
      "Source Code Pro",
      Menlo,
      Consolas,
      "DejaVu Sans Mono",
      monospace;
  }
  @supports (font-variation-settings: normal) {
    :root {
      --puck-font-family: InterVariable, var(--puck-fallback-font-stack);
    }
  }
}

/* bundle/core.css */
:root {
  --_puck-styles-loaded: "true";
}
#frame-root {
  height: 1px;
  min-height: 100vh;
}
[data-puck-entry] {
  position: relative;
  z-index: 0;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/ActionBar/styles.module.css/#css-module-data */
._ActionBar_5vdfr_1 {
  align-items: center;
  cursor: default;
  display: flex;
  width: auto;
  padding-top: var(--puck-actionbar-space-y, var(--puck-space-1));
  padding-bottom: var(--puck-actionbar-space-y, var(--puck-space-1));
  padding-inline-start: var(--puck-actionbar-space-x, 0);
  padding-inline-end: var(--puck-actionbar-space-x, 0);
  border-radius: var(--puck-actionbar-radius, var(--puck-radius-l));
  background: var(--puck-actionbar-color-bg, var(--puck-color-surface-inverse));
  color: var(--puck-color-text-inverse);
  font-family: var(--puck-font-family);
  min-height: 26px;
}
._ActionBar-label_5vdfr_17 {
  color: var(--puck-actionbar-color-text, var(--puck-color-text-inverse));
  font-size: var(--puck-actionbar-font-size, var(--puck-font-size-xxxs));
  opacity: var(--puck-actionbar-opacity-text, var(--puck-opacity-text-inverse));
  font-weight: var(--puck-font-weight-medium);
  padding-inline-start: var(--puck-space-2);
  padding-inline-end: var(--puck-space-2);
  margin-inline-start: var(--puck-space-1);
  margin-inline-end: var(--puck-space-1);
  text-overflow: ellipsis;
  white-space: nowrap;
}
._ActionBarAction_5vdfr_30 + ._ActionBar-label_5vdfr_17 {
  padding-inline-start: 0;
}
._ActionBar-label_5vdfr_17 + ._ActionBarAction_5vdfr_30 {
  margin-inline-start: calc(var(--puck-space-1) * -1);
}
._ActionBar-group_5vdfr_38 {
  align-items: center;
  border-inline-start: var(--puck-border-width-hairline) solid var(--puck-actionbar-color-separator, var(--puck-color-border-inverse));
  display: flex;
  height: 100%;
  padding-inline-start: var(--puck-space-1);
  padding-inline-end: var(--puck-space-1);
}
._ActionBar-group_5vdfr_38:first-of-type {
  border-inline-start: 0;
}
._ActionBar-group_5vdfr_38:empty {
  display: none;
}
._ActionBarAction_5vdfr_30 {
  background: transparent;
  border: none;
  color: var(--puck-actionbar-color-text, var(--puck-color-text-inverse));
  cursor: pointer;
  padding: var(--puck-actionbar-action-space, 6px);
  margin-inline-start: var(--puck-space-1);
  margin-inline-end: var(--puck-space-1);
  border-radius: var(--puck-radius-m);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: var(--puck-actionbar-opacity-text, var(--puck-opacity-text-inverse));
  transition: color var(--puck-duration-fast) var(--puck-ease-exit), opacity var(--puck-duration-fast) var(--puck-ease-exit);
}
._ActionBarAction--disabled_5vdfr_74 {
  cursor: auto;
  color: var( --puck-actionbar-color-action-disabled, var(--puck-color-text-inverse) );
  opacity: var(--puck-actionbar-opacity-action-disabled, 0.54);
}
._ActionBarAction_5vdfr_30 svg {
  max-width: none !important;
}
._ActionBarAction_5vdfr_30:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: calc(var(--puck-border-width-focus) * -1);
}
@media (hover: hover) and (pointer: fine) {
  ._ActionBarAction_5vdfr_30:hover:not(._ActionBarAction--disabled_5vdfr_74) {
    color: var( --puck-actionbar-color-action-hover, var(--puck-color-interactive-inverse-hover) );
    opacity: 1;
    transition: none;
  }
}
._ActionBarAction_5vdfr_30:active:not(._ActionBarAction--disabled_5vdfr_74),
._ActionBarAction--active_5vdfr_104 {
  color: var( --puck-actionbar-color-action-active, var(--puck-color-interactive-inverse-active) );
  opacity: 1;
  transition: none;
}
._ActionBar-group_5vdfr_38 * {
  margin: 0;
}
._ActionBar-separator_5vdfr_117 {
  background: var( --puck-actionbar-color-separator, var(--puck-color-border-inverse) );
  margin-inline: var(--puck-space-1);
  width: var( --puck-border-width-hairline );
  height: 100%;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/DraggableComponent/styles.module.css/#css-module-data */
._DraggableComponent_1627v_1 {
  position: absolute;
  pointer-events: none;
}
._DraggableComponent-overlayWrapper_1627v_6 {
  height: 100%;
  width: 100%;
  top: 0;
  position: absolute;
  pointer-events: none;
  box-sizing: border-box;
  z-index: 1;
}
._DraggableComponent-overlay_1627v_6 {
  cursor: pointer;
  height: 100%;
  outline: var( --puck-slot-component-border-width, var(--puck-border-width-focus) ) var( --puck-slot-component-color-overlay-border, var(--puck-color-selection-border) ) solid;
  outline-offset: calc(var(--puck-slot-component-border-width, var(--puck-border-width-focus)) * -1);
  width: 100%;
}
._DraggableComponent_1627v_1:focus-visible > ._DraggableComponent-overlayWrapper_1627v_6 {
  outline: var(--puck-border-width-regular) solid var(--puck-color-focus-ring);
}
._DraggableComponent-loadingOverlay_1627v_38 {
  background: var(--puck-color-surface);
  color: var(--puck-color-text);
  border-radius: var(--puck-radius-m);
  display: flex;
  padding: var(--puck-space-2);
  top: var(--puck-space-2);
  right: var(--puck-space-2);
  position: absolute;
  z-index: 1;
  pointer-events: all;
  box-sizing: border-box;
  opacity: 0.8;
  z-index: 1;
}
._DraggableComponent--hover_1627v_54 > ._DraggableComponent-overlayWrapper_1627v_6 > ._DraggableComponent-overlay_1627v_6 {
  background: var( --puck-slot-component-color-overlay, var(--puck-color-selection-bg) );
  outline: var( --puck-slot-component-border-width, var(--puck-border-width-focus) ) var( --puck-slot-component-color-overlay-border, var(--puck-color-selection-border) ) solid;
}
._DraggableComponent--isSelected_1627v_72 > ._DraggableComponent-overlayWrapper_1627v_6 > ._DraggableComponent-overlay_1627v_6 {
  outline-color: var( --puck-slot-component-color-border-selected, var(--puck-color-selection-border) );
}
._DraggableComponent_1627v_1:has(._DraggableComponent--hover_1627v_54 > ._DraggableComponent-overlayWrapper_1627v_6) > ._DraggableComponent-overlayWrapper_1627v_6 {
  display: none;
}
._DraggableComponent-actionsOverlay_1627v_89 {
  position: sticky;
  opacity: 0;
  pointer-events: none;
  z-index: 2;
}
._DraggableComponent--isSelected_1627v_72 ._DraggableComponent-actionsOverlay_1627v_89 {
  opacity: 1;
  pointer-events: auto;
}
._DraggableComponent-actions_1627v_89 {
  position: absolute;
  width: auto;
  cursor: grab;
  display: flex;
  box-sizing: border-box;
  transform-origin: right top;
  min-height: 36px;
}
._DraggableComponent-actionsAction_1627v_111 {
  height: var(--puck-actionbar-action-size, var(--puck-icon-size-s));
  width: var(--puck-actionbar-action-size, var(--puck-icon-size-s));
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Drawer/styles.module.css/#css-module-data */
._Drawer_1n90m_1 {
  display: flex;
  flex-direction: column;
  font-family: var(--puck-font-family);
  gap: var(--puck-space-3);
}
._Drawer-draggable_1n90m_8 {
  position: relative;
}
._Drawer-draggableBg_1n90m_12 {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
  z-index: -1;
}
._DrawerItem-draggable_1n90m_22 {
  background: var(--puck-drawer-item-color-bg, var(--puck-color-surface));
  color: var(--puck-drawer-item-color-text, var(--puck-color-text));
  cursor: grab;
  padding: var(--puck-drawer-item-space, var(--puck-space-3));
  display: flex;
  border: var(--puck-drawer-item-border-width, var(--puck-border-width-regular)) var(--puck-drawer-item-color-border, var(--puck-color-border)) solid;
  border-radius: var(--puck-drawer-item-radius, var(--puck-radius-m));
  font-size: var(--puck-drawer-item-font-size, var(--puck-font-size-xxs));
  justify-content: space-between;
  align-items: center;
  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit), color var(--puck-duration-fast) var(--puck-ease-exit);
}
._DrawerItem--disabled_1n90m_38 ._DrawerItem-draggable_1n90m_22 {
  background: var(--puck-color-surface-muted);
  color: var(--puck-color-text-muted);
  cursor: not-allowed;
}
._DrawerItem_1n90m_22:focus-visible {
  outline: 0;
}
._Drawer_1n90m_1:not(._Drawer--isDraggingFrom_1n90m_48) ._DrawerItem_1n90m_22:focus-visible ._DrawerItem-draggable_1n90m_22 {
  border-radius: var(--puck-radius-m);
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: var(--puck-border-width-focus);
}
@media (hover: hover) and (pointer: fine) {
  ._Drawer_1n90m_1:not(._Drawer--isDraggingFrom_1n90m_48) ._DrawerItem_1n90m_22:not(._DrawerItem--disabled_1n90m_38) ._DrawerItem-draggable_1n90m_22:hover {
    background-color: var( --puck-drawer-item-color-bg-hover, var(--puck-color-interactive-soft-hover) );
    color: var( --puck-drawer-item-color-text-hover, var(--puck-color-interactive) );
    transition: none;
  }
}
._DrawerItem-name_1n90m_72 {
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/DropZone/styles.module.css/#css-module-data */
._DropZone_wc2ks_1 {
  position: relative;
  height: 100%;
  min-height: var(--puck-slot-min-empty-height);
  outline-offset: calc(var(--puck-slot-border-width, var(--puck-border-width-focus)) * -1);
  width: 100%;
}
._DropZone--hasChildren_wc2ks_11 {
  min-height: 0;
}
._DropZone_wc2ks_1:empty {
  min-height: var(--puck-slot-min-empty-height);
}
[data-puck-entry]:not([data-puck-dragging]) ._DropZone_wc2ks_1 {
  transition: min-height var(--puck-duration-medium) var(--puck-ease-exit);
}
._DropZone--isAreaSelected_wc2ks_24,
._DropZone--hoveringOverArea_wc2ks_25:not(._DropZone--isRootZone_wc2ks_25) {
  background: var(--puck-slot-color-bg, var(--puck-color-selection-bg));
  outline: var(--puck-slot-border-width, var(--puck-border-width-focus)) var(--puck-slot-border-style, dashed) var(--puck-slot-color-border, var(--puck-color-selection-border));
}
._DropZone_wc2ks_1:empty {
  background: var(--puck-slot-color-bg, var(--puck-color-selection-bg));
  outline: var(--puck-slot-border-width, var(--puck-border-width-focus)) var(--puck-slot-border-style, dashed) var(--puck-slot-color-border, var(--puck-color-selection-border));
}
._DropZone-item_wc2ks_39 {
  position: relative;
}
._DropZone-linePlaceholder_wc2ks_43 {
  background: var( --puck-slot-component-color-placeholder, var(--puck-color-line-placeholder) );
  border-radius: calc(var(--puck-line-placeholder-width, 2px) / 2);
  pointer-events: none;
  position: absolute;
  z-index: 1;
}
._DropZone-hitbox_wc2ks_55 {
  position: absolute;
  bottom: calc(var(--puck-space-3) * -1);
  height: var(--puck-space-5);
  width: 100%;
  z-index: 1;
}
[data-puck-dragging] ._DropZone--isEnabled_wc2ks_63 {
  outline: var(--puck-slot-border-width, var(--puck-border-width-focus)) var(--puck-slot-border-style, dashed) var(--puck-slot-color-border, var(--puck-color-selection-border));
}
._DropZone_wc2ks_1 > *:not([data-puck-component]):not([data-puck-line-placeholder]) {
  opacity: 0;
}
body:has(._DropZone--isAnimating_wc2ks_74:empty) [data-puck-overlay] {
  opacity: 0 !important;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/InlineTextField/styles.module.css/#css-module-data */
._InlineTextField_104qp_1 {
  cursor: text;
  display: inline-block;
  white-space: pre-wrap;
  text-decoration: inherit;
}
[data-dnd-dragging] ._InlineTextField_104qp_1 {
  cursor: none;
  caret-color: transparent;
}
[data-dnd-dragging] ._InlineTextField_104qp_1::selection {
  display: none;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Loader/styles.module.css/#css-module-data */
@keyframes _loader-animation_1w5zn_1 {
  0% {
    transform: rotate(0deg) scale(1);
  }
  50% {
    transform: rotate(180deg) scale(0.8);
  }
  100% {
    transform: rotate(360deg) scale(1);
  }
}
._Loader_1w5zn_13 {
  background: transparent;
  border-radius: var(--puck-radius-round);
  border: var(--puck-border-width-focus) solid currentColor;
  border-bottom-color: transparent;
  display: inline-block;
  animation: _loader-animation_1w5zn_1 1s 0s infinite linear;
  animation-fill-mode: both;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/RichTextMenu/styles.module.css/#css-module-data */
._RichTextMenu_1ve2j_1 {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
._RichTextMenu--form_1ve2j_7 {
  border-top-left-radius: var(--puck-field-radius, var(--puck-radius-m));
  border-top-right-radius: var(--puck-field-radius, var(--puck-radius-m));
  padding: var(--puck-field-richtext-menu-space-y, 6px) var(--puck-field-richtext-menu-space-x, 6px);
  background-color: var( --puck-field-richtext-menu-color-bg, var(--puck-color-surface-subtle) );
  position: relative;
  scrollbar-width: none;
  overflow-x: auto;
}
._RichTextMenu-group_1ve2j_21 {
  display: flex;
  align-items: space-between;
  flex-direction: row;
  flex-wrap: nowrap;
  padding-inline: 6px;
  gap: 2px;
  position: relative;
}
._RichTextMenu-group_1ve2j_21:first-of-type {
  padding-left: 0;
}
._RichTextMenu-group_1ve2j_21:last-of-type {
  padding-right: 0;
}
._RichTextMenu--inline_1ve2j_39 ._RichTextMenu-group_1ve2j_21 {
  color: var(--puck-color-text-inverse);
  gap: 0px;
  flex-wrap: nowrap;
}
._RichTextMenu-group_1ve2j_21 + ._RichTextMenu-group_1ve2j_21 {
  border-left: var(--puck-border-width-regular) solid var( --puck-field-richtext-menu-color-separator, var(--puck-color-border-muted) );
}
._RichTextMenu--inline_1ve2j_39 ._RichTextMenu-group_1ve2j_21 + ._RichTextMenu-group_1ve2j_21 {
  border-left: var(--puck-border-width-hairline) solid var(--puck-color-border-inverse);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/RichTextMenu/components/Control/styles.module.css/#css-module-data */
._Control_id4pm_1 .lucide {
  height: var(--puck-icon-size-m);
  width: var(--puck-icon-size-m);
}
._Control--inline_id4pm_6 .lucide {
  height: var(--puck-actionbar-action-size, var(--puck-icon-size-s));
  width: var(--puck-actionbar-action-size, var(--puck-icon-size-s));
}

/* components/DraggableComponent/styles.css */
[data-puck-component] * {
  pointer-events: none;
  user-select: none;
  -webkit-user-select: none;
}
[data-puck-component] {
  cursor: grab;
  pointer-events: auto !important;
  user-select: none;
  -webkit-user-select: none;
}
[data-puck-dropzone] {
  pointer-events: auto !important;
}
[data-puck-disabled] {
  cursor: pointer;
}
[data-dnd-placeholder]:not([data-puck-line-drag] *) {
  background: var( --puck-slot-component-color-placeholder, var(--puck-color-azure-06) ) !important;
  border: none !important;
  color: transparent !important;
  opacity: 0.3 !important;
  outline: none !important;
  transition: none !important;
}
[data-dnd-placeholder]:not([data-puck-line-drag] *) *,
[data-dnd-placeholder]:not([data-puck-line-drag] *)::after,
[data-dnd-placeholder]:not([data-puck-line-drag] *)::before {
  opacity: 0 !important;
}
[data-puck-line-drag] [data-dnd-placeholder] {
  opacity: 0.4 !important;
  outline: none !important;
  transition: none !important;
}
[data-puck-line-drag] [data-dnd-dragging][data-puck-component] {
  opacity: 0.9 !important;
}
[data-dnd-dragging][data-puck-component] {
  pointer-events: none !important;
  outline: var( --puck-slot-component-border-width, var(--puck-border-width-focus) ) var(--puck-slot-component-color-border-dragging, var(--puck-color-azure-09)) solid !important;
  outline-offset: calc(var(--puck-slot-component-border-width, var(--puck-border-width-focus)) * -1) !important;
}
[data-dnd-dragging][data-puck-component] > :first-child {
  margin-top: 0 !important;
}
[data-dnd-dragging][data-puck-component] > :last-child {
  margin-bottom: 0 !important;
}

/* lib/overlay-portal/styles.css */
[data-puck-overlay-portal],
[data-puck-overlay-portal] * {
  pointer-events: auto !important;
}
[data-puck-entry][data-puck-dragging] [data-puck-overlay-portal],
[data-puck-entry][data-puck-dragging] [data-puck-overlay-portal] * {
  pointer-events: none !important;
}
[data-puck-entry][data-puck-preview-mode=edit] [data-puck-overlay-portal]:hover {
  outline: 2px var(--puck-color-azure-09, #cfdff0) dashed;
  outline-offset: 2px;
}
[data-puck-entry][data-puck-preview-mode=edit] [data-puck-overlay-portal]:focus-within {
  outline: 2px var(--puck-color-azure-07, #88b0da) dashed;
  outline-offset: 2px;
}`,Qy=`data-puck-style-source`,$y=`puck`,eb=`data-puck-style-id`,tb={uiDefault:`ui-default`,iframeInteractions:`iframe-styles`},nb=new WeakMap,rb=e=>{if(e)return e;if(typeof document<`u`)return document},ib=e=>{let t=nb.get(e);if(t)return t;let n=new Map;return nb.set(e,n),n},ab=(e,t,n=!1)=>{let r=e.head;r&&(t.parentElement===r?(n&&r.firstChild!==t&&r.prepend(t),!n&&r.lastChild!==t&&r.append(t)):n?r.prepend(t):r.append(t))},ob=(e,t,n,r=!1)=>{let i=e.createElement(`style`);return i.setAttribute(Qy,$y),i.setAttribute(eb,t),i.textContent=n,ab(e,i,r),i},sb=e=>e?.getAttribute(Qy)===$y,cb=e=>{let t=rb(e?.document);(0,H.useInsertionEffect)(()=>{if(!e||!t)return;let n=ib(t),r=n.get(e.id);if(r)r.count+=1,r.el.textContent!==e.cssText&&(r.el.textContent=e.cssText),ab(t,r.el,e.prepend);else{let r=ob(t,e.id,e.cssText,e.prepend);n.set(e.id,{count:1,el:r})}return()=>{let t=n.get(e.id);t&&(--t.count,t.count<=0&&(t.el.remove(),n.delete(e.id)))}},[e?.cssText,e?.id,e?.prepend,e?.document,t])},lb=null,ub=()=>lb===null?typeof document>`u`?!1:(lb=getComputedStyle(document.documentElement).getPropertyValue(`--_puck-styles-loaded`).trim()!==``,lb):lb,db=()=>{cb(ub()?null:{cssText:Xy,id:tb.uiDefault,prepend:!0}),(0,H.useEffect)(()=>{},[])},fb=e=>{cb(e?{cssText:Zy,document:e,id:tb.iframeInteractions}:null)},pb=`style, link[rel="stylesheet"]`,mb=`data-puck-style-mirror`,hb=e=>!e.matches(pb)||sb(e)?!1:e.tagName!==`STYLE`||!!e.innerHTML.trim(),gb=e=>{let t=[];return e.querySelectorAll(pb).forEach(e=>{hb(e)&&t.push(e)}),t},_b=e=>Array.from(document.styleSheets).find(t=>t.ownerNode.href===e.href),vb=e=>{if(e)try{return Array.from(e.cssRules).map(e=>e.cssText).join(``)}catch{console.warn(`Access to stylesheet %s is denied. Ignoring…`,e.href)}return``},yb=(e,t)=>{let n=e.attributes;n?.length>0&&Array.from(n).forEach(e=>{t.setAttribute(e.name,e.value)})},bb=e=>setTimeout(e,0),xb=({children:e,debug:t=!1,onStylesLoaded:n=()=>null,syncHostStyles:r=!0})=>{let{document:i,window:a}=Cb();return fb(i),(0,H.useEffect)(()=>{if(!a||!i)return()=>{};let e=[],o={},s=()=>{e.forEach(({mirror:e})=>{e.remove()}),e=[],Array.from(i.head.querySelectorAll(`[${mb}="true"]`)).forEach(e=>{e.remove()}),Object.keys(o).forEach(e=>{delete o[e]})},c=t=>e.findIndex(e=>e.original===t),l=(e,n=!1)=>u(null,null,function*(){let r;if(e.nodeName===`LINK`&&n){r=document.createElement(`style`),r.type=`text/css`;let n=_b(e);n||=(yield new Promise(t=>{let n=()=>{t(),e.removeEventListener(`load`,n)};e.addEventListener(`load`,n)}),_b(e));let i=vb(n);if(!i){t&&console.warn(`Tried to load styles for link element, but couldn't find them. Skipping...`);return}r.innerHTML=i,r.setAttribute(`data-href`,e.getAttribute(`href`))}else r=e.cloneNode(!0);return r.setAttribute(mb,`true`),r}),d=n=>u(null,null,function*(){let r=c(n);if(r>-1){t&&console.log(`Tried to add an element that was already mirrored. Updating instead...`),e[r].mirror.innerText=n.innerText;return}let a=yield l(n);if(!a)return;let s=(0,xm.default)(a.outerHTML);o[s]?t&&console.log(`iframe already contains element that is being mirrored. Skipping...`):(o[s]=!0,i.head.append(a),e.push({original:n,mirror:a}),t&&console.log(`Added style node ${n.outerHTML}`))}),f=n=>{var r;let i=c(n);if(i===-1){t&&console.log(`Tried to remove an element that did not exist. Skipping...`);return}let a=(0,xm.default)(n.outerHTML);(r=e[i]?.mirror)==null||r.remove(),delete o[a],t&&console.log(`Removed style node ${n.outerHTML}`)},p=new MutationObserver(e=>{e.forEach(e=>{e.type===`childList`&&(e.addedNodes.forEach(e=>{if(e.nodeType===Node.TEXT_NODE||e.nodeType===Node.ELEMENT_NODE){let t=e.nodeType===Node.TEXT_NODE?e.parentElement:e;t&&hb(t)&&bb(()=>d(t))}}),e.removedNodes.forEach(e=>{if(e.nodeType===Node.TEXT_NODE||e.nodeType===Node.ELEMENT_NODE){let t=e.nodeType===Node.TEXT_NODE?e.parentElement:e;t&&t.matches(pb)&&!sb(t)&&bb(()=>f(t))}}))})});if(!r)return n(),()=>{p.disconnect(),s()};let m=a.parent.document,h=gb(m),g=[],_=0,v=m.getElementsByTagName(`html`)[0];yb(v,i.documentElement);let y=m.getElementsByTagName(`body`)[0];return yb(y,i.body),Promise.all(h.map((t,n)=>u(null,null,function*(){if(t.nodeName===`LINK`){let e=t.href;if(g.indexOf(e)>-1)return;g.push(e)}let n=yield l(t);if(n)return e.push({original:t,mirror:n}),n}))).then(e=>{let t=e.filter(e=>e!==void 0);t.forEach(e=>{e.onload=()=>{_+=1,_>=t.length&&n()},e.onerror=()=>{let r=e instanceof HTMLLinkElement?e.href:void 0;console.warn(`AutoFrame couldn't load a stylesheet${r?`: ${r}`:``}. This can happen if the parent document's stylesheet is blocked by the iframe's CSP, returns a non-2xx status, or fails to reach the network.`),_+=1,_>=t.length&&n()}}),i.head.querySelectorAll(`[${mb}="true"]`).forEach(e=>{e.remove()}),i.head.append(...t),t.forEach(e=>{e.nodeName===`STYLE`&&(_+=1)}),_>=t.length&&n(),p.observe(m.head,{childList:!0,subtree:!0}),t.forEach(e=>{let t=(0,xm.default)(e.outerHTML);o[t]=!0})}),()=>{p.disconnect(),s()}},[r]),(0,U.jsx)(U.Fragment,{children:e})},Sb=(0,H.createContext)({}),Cb=()=>(0,H.useContext)(Sb);function wb(e){var t=e,{children:n,className:r,debug:i,id:a,onReady:o=()=>{},onNotReady:s=()=>{},frameRef:u,syncHostStyles:d=!0}=t,p=f(t,[`children`,`className`,`debug`,`id`,`onReady`,`onNotReady`,`frameRef`,`syncHostStyles`]);let[m,h]=(0,H.useState)(!1),[g,_]=(0,H.useState)({}),[v,y]=(0,H.useState)(),[b,x]=(0,H.useState)(!1);return(0,H.useEffect)(()=>{m&&x(!d)},[m,d]),(0,H.useEffect)(()=>{if(u.current){let e=u.current.contentDocument,t=u.current.contentWindow;_({document:e||void 0,window:t||void 0}),y(u.current.contentDocument?.getElementById(`frame-root`)),e&&t&&b?o():s()}},[u,m,b]),(0,U.jsx)(`iframe`,l(c({},p),{className:r,id:a,srcDoc:`<!DOCTYPE html><html><head></head><body><div id="frame-root" data-puck-entry></div></body></html>`,ref:u,onLoad:()=>{h(!0)},children:(0,U.jsx)(Sb.Provider,{value:g,children:m&&v&&(0,U.jsx)(xb,{debug:i,onStylesLoaded:()=>x(!0),syncHostStyles:d,children:(0,_t.createPortal)(n,v)})})}))}wb.displayName=`AutoFrame`;var Tb=wb;d();var Eb=St(Z_),Db=(0,H.memo)(()=>{let e=V(zt(e=>e.state.indexes.nodes.root?.flatData.props)),t=V(e=>e.config),n=V(e=>e.metadata),r=k_(t,(0,H.useMemo)(()=>{let t=C({props:e??{}});return Ye(t)},[e]),Eb),i=(0,H.useMemo)(()=>l(c({},r),{children:(0,U.jsx)(rv,{zone:T}),puck:{renderDropZone:rv,isEditing:!0,dragRef:null,metadata:n},editMode:!0}),[r,n]),a=At(t.root?.fields??{},i);return t.root?.render?t.root?.render(l(c(c({},i),a),{id:`puck-root`})):(0,U.jsx)(U.Fragment,{children:i.children})});Db.displayName=`EditorPage`;var Ob=Db;d();var kb=p(`PuckPreview`,{PuckPreview:`_PuckPreview_zbic3_1`,"PuckPreview-frame":`_PuckPreview-frame_zbic3_6`}),Ab=e=>{let t=V(e=>e.status);(0,H.useEffect)(()=>{if(e.current&&t===`READY`){let t=e.current,n=e=>{let n=new Bg(`pointermove`,l(c({},e),{bubbles:!0,cancelable:!1,clientX:e.clientX,clientY:e.clientY,pointerId:e.pointerId,pointerType:e.pointerType,isPrimary:e.isPrimary,originalTarget:e.target}));t.dispatchEvent(n)},r=()=>{var e;i(),(e=t.contentDocument)==null||e.addEventListener(`pointermove`,n,{capture:!0})},i=()=>{var e;(e=t.contentDocument)==null||e.removeEventListener(`pointermove`,n)};return r(),()=>{i()}}},[t])},jb=e=>{let t=V(e=>e.state.ui.previewMode),n=V(e=>e.status),r=V(e=>e.iframe.enabled);(0,H.useEffect)(()=>{(r?(e.current?.contentDocument)?.querySelector(`[data-puck-entry]`):e.current)?.setAttribute(`data-puck-preview-mode`,t)},[t,n,r])},Mb=({id:e=`puck-preview`})=>{let t=V(e=>e.dispatch),n=V(e=>e.config),r=V(e=>e.setStatus),i=V(e=>e.iframe),a=V(e=>e.overrides),o=V(e=>e.metadata),s=V(e=>e.state.ui.previewMode===`edit`?null:e.state.data),c=(0,H.useMemo)(()=>a.iframe,[a]),l=(0,H.useRef)(null);Ab(l),jb(l);let u=s?(0,U.jsx)(ov,{data:s,config:n,metadata:o}):(0,U.jsx)(Ob,{});return(0,H.useEffect)(()=>{i.enabled||r(`READY`)},[i.enabled]),(0,U.jsx)(`div`,{className:kb(),id:e,"data-puck-preview":!0,onClick:e=>{let n=e.target;!n.hasAttribute(`data-puck-component`)&&!n.hasAttribute(`data-puck-dropzone`)&&t({type:`setUi`,ui:{itemSelector:null}})},children:i.enabled?(0,U.jsx)(Tb,{id:`preview-frame`,className:kb(`frame`),"data-rfd-iframe":!0,syncHostStyles:i.syncHostStyles,onReady:()=>{r(`READY`)},onNotReady:()=>{r(`MOUNTED`)},frameRef:l,children:(0,U.jsx)(Sb.Consumer,{children:({document:e})=>c?(0,U.jsx)(c,{document:e,children:u}):u})}):(0,U.jsx)(`div`,{id:`preview-frame`,className:kb(`frame`),ref:l,"data-puck-entry":!0,children:u})})};d(),d();var Nb=({overrides:e,plugins:t})=>{let n=c({},e);return t?.forEach(e=>{e.overrides&&Object.keys(e.overrides).forEach(t=>{let r=t;if(!e.overrides?.[r])return;if(r===`fieldTypes`){let t=e.overrides.fieldTypes;Object.keys(t).forEach(e=>{n.fieldTypes=n.fieldTypes||{};let r=n.fieldTypes[e],i=n=>t[e](l(c({},n),{children:r?r(n):n.children}));n.fieldTypes[e]=i});return}let i=n[r];n[r]=t=>e.overrides[r](l(c({},t),{children:i?i(t):t.children}))})}),n},Pb=({overrides:e,plugins:t})=>(0,H.useMemo)(()=>Nb({overrides:e,plugins:t}),[t,e]);d(),d();var Fb={Puck:`_Puck_tzaxg_19`,"Puck-portal":`_Puck-portal_tzaxg_31`,PuckLayout:`_PuckLayout_tzaxg_36`,"PuckLayout-inner":`_PuckLayout-inner_tzaxg_40`,"Puck--hidePlugins":`_Puck--hidePlugins_tzaxg_73`,"PuckLayout--mounted":`_PuckLayout--mounted_tzaxg_78`,"PuckLayout--mobilePanelHeightToggle":`_PuckLayout--mobilePanelHeightToggle_tzaxg_82`,"PuckLayout--leftSideBarVisible":`_PuckLayout--leftSideBarVisible_tzaxg_82`,"PuckLayout--isExpanded":`_PuckLayout--isExpanded_tzaxg_90`,"PuckLayout--mobilePanelHeightMinContent":`_PuckLayout--mobilePanelHeightMinContent_tzaxg_110`,"PuckLayout--rightSideBarVisible":`_PuckLayout--rightSideBarVisible_tzaxg_137`,"PuckLayout-mounted":`_PuckLayout-mounted_tzaxg_156`,"PuckLayout-nav":`_PuckLayout-nav_tzaxg_197`,"PuckLayout-header":`_PuckLayout-header_tzaxg_217`,PuckPluginTab:`_PuckPluginTab_tzaxg_231`,"PuckPluginTab--visible":`_PuckPluginTab--visible_tzaxg_237`,"PuckPluginTab-body":`_PuckPluginTab-body_tzaxg_243`};d();var Ib=({children:e})=>(0,U.jsx)(U.Fragment,{children:e});d();var Lb=()=>{let e=z(),t=(0,H.useCallback)(()=>{let t=e.getState().dispatch;t({type:`setUi`,ui:e=>({previewMode:e.previewMode===`edit`?`interactive`:`edit`})})},[e]);qe({meta:!0,i:!0},t),qe({ctrl:!0,i:!0},t)};d(),d(),d();var Rb=p(`MenuBar`,{MenuBar:`_MenuBar_1hxnj_1`,"MenuBar--menuOpen":`_MenuBar--menuOpen_1hxnj_14`,"MenuBar-inner":`_MenuBar-inner_1hxnj_29`,"MenuBar-history":`_MenuBar-history_1hxnj_45`});function zb({menuOpen:e=!1,renderHeaderActions:t,setMenuOpen:n}){let r=V(e=>e.history.back),i=V(e=>e.history.forward),a=V(e=>e.history.hasFuture()),o=V(e=>e.history.hasPast()),s=B(`header-undo`),c=B(`header-redo`);return(0,U.jsx)(`div`,{className:Rb({menuOpen:e}),onClick:e=>{let t=e.target;window.matchMedia(`(min-width: 638px)`).matches||t.tagName===`A`&&t.getAttribute(`href`)?.startsWith(`#`)&&n(!1)},children:(0,U.jsxs)(`div`,{className:Rb(`inner`),children:[(0,U.jsxs)(`div`,{className:Rb(`history`),children:[(0,U.jsx)(Ee,{type:`button`,title:s,disabled:!o,onClick:r,children:(0,U.jsx)(Ne,{size:21})}),(0,U.jsx)(Ee,{type:`button`,title:c,disabled:!a,onClick:i,children:(0,U.jsx)(O,{size:21})})]}),(0,U.jsx)(U.Fragment,{children:t&&t()})]})})}d();var Bb=p(`PuckHeader`,{PuckHeader:`_PuckHeader_c2nei_1`,"PuckHeader--hidePlugins":`_PuckHeader--hidePlugins_c2nei_21`,"PuckHeader-inner":`_PuckHeader-inner_c2nei_26`,"PuckHeader-toggle":`_PuckHeader-toggle_c2nei_46`,"PuckHeader-rightSideBarToggle":`_PuckHeader-rightSideBarToggle_c2nei_52`,"PuckHeader-leftSideBarToggle":`_PuckHeader-leftSideBarToggle_c2nei_53`,"PuckHeader-title":`_PuckHeader-title_c2nei_64`,"PuckHeader-path":`_PuckHeader-path_c2nei_68`,"PuckHeader-tools":`_PuckHeader-tools_c2nei_75`,"PuckHeader-menuButton":`_PuckHeader-menuButton_c2nei_81`,"PuckHeader--menuOpen":`_PuckHeader--menuOpen_c2nei_86`}),Vb=(0,H.memo)(({hidePlugins:e})=>{let{onPublish:t,renderHeader:n,renderHeaderActions:r,headerTitle:i,headerPath:a,iframe:o}=kx(),s=V(e=>e.dispatch),u=z(),d=(0,H.useMemo)(()=>n?(console.warn("`renderHeader` is deprecated. Please use `overrides.header` and the `usePuck` hook instead"),e=>{var t=e,{actions:r}=t,i=f(t,[`actions`]);let a=n,o=V(e=>e.state);return(0,U.jsx)(a,l(c({},i),{dispatch:s,state:o,children:r}))}):Ib,[n]),p=(0,H.useMemo)(()=>r?(console.warn("`renderHeaderActions` is deprecated. Please use `overrides.headerActions` and the `usePuck` hook instead."),e=>{let t=r,n=V(e=>e.state);return(0,U.jsx)(t,l(c({},e),{dispatch:s,state:n}))}):Ib,[r]),m=V(e=>e.overrides.header||d),h=V(e=>e.overrides.headerActions||p),[g,_]=(0,H.useState)(!1),v=V(e=>(e.state.indexes.nodes.root?.data).props.title??``),y=V(e=>e.state.ui.leftSideBarVisible),b=V(e=>e.state.ui.rightSideBarVisible),x=(0,H.useCallback)(e=>{let t=window.matchMedia(`(min-width: 638px)`).matches,n=e===`left`?y:b,r=e===`left`?`rightSideBarVisible`:`leftSideBarVisible`;s({type:`setUi`,ui:c({[`${e}SideBarVisible`]:!n},t?{}:{[r]:!1})})},[s,y,b]),S=B(`header-publish`),C=B(`label-page`),w=B(`header-toggle-leftsidebar`),T=B(`header-toggle-rightsidebar`),E=B(`header-toggle-menubar`);return(0,U.jsx)(m,{actions:(0,U.jsx)(U.Fragment,{children:(0,U.jsx)(h,{children:(0,U.jsx)(km,{onClick:()=>{let e=u.getState().state.data;t&&t(e)},icon:(0,U.jsx)(Ke,{size:`14px`}),children:S})})}),children:(0,U.jsx)(`header`,{className:Bb({leftSideBarVisible:y,rightSideBarVisible:b,hidePlugins:e}),children:(0,U.jsxs)(`div`,{className:Bb(`inner`),children:[(0,U.jsxs)(`div`,{className:Bb(`toggle`),children:[(0,U.jsx)(`div`,{className:Bb(`leftSideBarToggle`),children:(0,U.jsx)(Ee,{type:`button`,onClick:()=>{x(`left`)},title:w,children:(0,U.jsx)(ae,{focusable:`false`})})}),(0,U.jsx)(`div`,{className:Bb(`rightSideBarToggle`),children:(0,U.jsx)(Ee,{type:`button`,onClick:()=>{x(`right`)},title:T,children:(0,U.jsx)(ce,{focusable:`false`})})})]}),(0,U.jsx)(`div`,{className:Bb(`title`),children:(0,U.jsxs)(kh,{rank:`2`,size:`xs`,children:[i||v||C,a&&(0,U.jsxs)(U.Fragment,{children:[` `,(0,U.jsx)(`code`,{className:Bb(`path`),children:a})]})]})}),(0,U.jsxs)(`div`,{className:Bb(`tools`),children:[(0,U.jsx)(`div`,{className:Bb(`menuButton`),children:(0,U.jsx)(Ee,{type:`button`,onClick:()=>_(!g),title:E,children:g?(0,U.jsx)(Be,{focusable:`false`}):(0,U.jsx)(me,{focusable:`false`})})}),(0,U.jsx)(zb,{dispatch:s,onPublish:t,menuOpen:g,renderHeaderActions:()=>(0,U.jsx)(h,{children:(0,U.jsx)(km,{onClick:()=>{let e=u.getState().state.data;t&&t(e)},icon:(0,U.jsx)(Ke,{size:`14px`}),children:S})}),setMenuOpen:_})]})]})})})});d(),d();var Hb=p(`SidebarSection`,{SidebarSection:`_SidebarSection_1uv88_1`,"SidebarSection-title":`_SidebarSection-title_1uv88_12`,"SidebarSection--noBorderTop":`_SidebarSection--noBorderTop_1uv88_20`,"SidebarSection-content":`_SidebarSection-content_1uv88_24`,"SidebarSection-breadcrumbLabel":`_SidebarSection-breadcrumbLabel_1uv88_33`,"SidebarSection-breadcrumbs":`_SidebarSection-breadcrumbs_1uv88_62`,"SidebarSection-breadcrumb":`_SidebarSection-breadcrumb_1uv88_33`,"SidebarSection-heading":`_SidebarSection-heading_1uv88_74`,"SidebarSection-loadingOverlay":`_SidebarSection-loadingOverlay_1uv88_78`}),Ub=({children:e,title:t,background:n,showBreadcrumbs:r,noBorderTop:i,isLoading:a})=>(0,U.jsxs)(`div`,{className:Hb({noBorderTop:i}),style:{background:n},children:[(0,U.jsx)(`div`,{className:Hb(`title`),children:(0,U.jsxs)(`div`,{className:Hb(`breadcrumbs`),children:[r&&(0,U.jsx)(By,{}),(0,U.jsx)(`div`,{className:Hb(`heading`),children:(0,U.jsx)(kh,{rank:`2`,size:`xs`,children:t})})]})}),(0,U.jsx)(`div`,{className:Hb(`content`),children:e}),a&&(0,U.jsx)(`div`,{className:Hb(`loadingOverlay`),children:(0,U.jsx)(E,{size:32})})]});d(),d(),d();var Wb={ViewportControls:`_ViewportControls_v26yb_1`,"ViewportControls--fullScreen":`_ViewportControls--fullScreen_v26yb_5`,"ViewportControls-toggleButton":`_ViewportControls-toggleButton_v26yb_14`,"ViewportControls-actions":`_ViewportControls-actions_v26yb_39`,"ViewportControls-actionsInner":`_ViewportControls-actionsInner_v26yb_43`,"ViewportControls--isExpanded":`_ViewportControls--isExpanded_v26yb_67`,"ViewportControls-divider":`_ViewportControls-divider_v26yb_72`,"ViewportControls-zoomSelect":`_ViewportControls-zoomSelect_v26yb_79`,"ViewportControls-zoom":`_ViewportControls-zoom_v26yb_79`,"ViewportButton-inner":`_ViewportButton-inner_v26yb_110`,"ViewportButton--isActive":`_ViewportButton--isActive_v26yb_118`},Gb={Smartphone:(0,U.jsx)(ne,{size:16}),Tablet:(0,U.jsx)(ze,{size:16}),Monitor:(0,U.jsx)(w,{size:16}),FullWidth:(0,U.jsx)(He,{size:16})},Kb=p(`ViewportControls`,Wb),qb=p(`ViewportButton`,Wb),Jb=({children:e,title:t,onClick:n,isActive:r,disabled:i})=>(0,U.jsx)(`span`,{className:qb({isActive:r}),suppressHydrationWarning:!0,children:(0,U.jsx)(Ee,{type:`button`,title:t,disabled:i||r,onClick:n,suppressHydrationWarning:!0,children:(0,U.jsx)(`span`,{className:qb(`inner`),children:e})})}),Yb=[{label:`25%`,value:.25},{label:`50%`,value:.5},{label:`75%`,value:.75},{label:`100%`,value:1},{label:`125%`,value:1.25},{label:`150%`,value:1.5},{label:`200%`,value:2}],Xb=({viewport:e,isActive:t,onClick:n})=>{let r=B(`viewport-switch`,{label:e.label??``}),i=B(`viewport-switch-default`);return(0,U.jsx)(Jb,{title:e.label?r:i,onClick:n,isActive:t,children:typeof e.icon==`string`?Gb[e.icon]||e.icon:e.icon||Gb.Smartphone})},Zb=({autoZoom:e,zoom:t,onViewportChange:n,onZoom:r,fullScreen:i})=>{let a=V(e=>e.viewports),o=V(e=>e.state.ui.viewports),s=Yb.find(t=>t.value===e),c=B(`viewport-zoom-auto`,{zoom:(e*100).toFixed(0)}),l=(0,H.useMemo)(()=>[...Yb,...s?[]:[{value:e,label:c}]].filter(t=>t.value<=e).sort((e,t)=>e.value>t.value?1:-1),[e,c]),[u,d]=(0,H.useState)(o.current.width);(0,H.useEffect)(()=>{d(o.current.width)},[o.current]);let[f,p]=(0,H.useState)(!1),m=B(`viewport-zoom-out`),h=B(`viewport-zoom-in`),g=B(`viewport-toggle-menu`);return(0,U.jsxs)(`div`,{className:Kb({isExpanded:f,fullScreen:i}),suppressHydrationWarning:!0,children:[(0,U.jsx)(`div`,{className:Kb(`actions`),children:(0,U.jsxs)(`div`,{className:Kb(`actionsInner`),children:[a.map((e,t)=>(0,U.jsx)(Xb,{viewport:e,onClick:()=>{d(e.width),n(e)},isActive:u===e.width},t)),(0,U.jsx)(`div`,{className:Kb(`divider`)}),(0,U.jsx)(Jb,{title:m,disabled:t<=l[0]?.value,onClick:e=>{e.stopPropagation(),r(l[Math.max(l.findIndex(e=>e.value===t)-1,0)].value)},children:(0,U.jsx)(ke,{size:16})}),(0,U.jsx)(Jb,{title:h,disabled:t>=l[l.length-1]?.value,onClick:e=>{e.stopPropagation(),r(l[Math.min(l.findIndex(e=>e.value===t)+1,l.length-1)].value)},children:(0,U.jsx)(he,{size:16})}),(0,U.jsxs)(`div`,{className:Kb(`zoom`),children:[(0,U.jsx)(`div`,{className:Kb(`divider`)}),(0,U.jsx)(`select`,{className:Kb(`zoomSelect`),value:t.toString(),onClick:e=>{e.stopPropagation()},onChange:e=>{r(parseFloat(e.currentTarget.value))},children:l.map(e=>(0,U.jsx)(`option`,{value:e.value,label:e.label},e.label))})]})]})}),(0,U.jsx)(`button`,{className:Kb(`toggleButton`),title:g,onClick:()=>p(e=>!e),children:f?(0,U.jsx)(Re,{size:16}):(0,U.jsx)(w,{size:16})})]})};d();var Qb={PuckCanvas:`_PuckCanvas_zw9iy_1`,"PuckCanvas-controls":`_PuckCanvas-controls_zw9iy_18`,"PuckCanvas--fullScreen":`_PuckCanvas--fullScreen_zw9iy_23`,"PuckCanvas-inner":`_PuckCanvas-inner_zw9iy_34`,"PuckCanvas-root":`_PuckCanvas-root_zw9iy_43`,"PuckCanvas--ready":`_PuckCanvas--ready_zw9iy_68`,"PuckCanvas-loader":`_PuckCanvas-loader_zw9iy_73`,"PuckCanvas--showLoader":`_PuckCanvas--showLoader_zw9iy_84`};d();var $b=(0,H.createContext)(null),ex=({children:e})=>{let t=(0,H.useRef)(null),n=(0,H.useMemo)(()=>({frameRef:t}),[]);return(0,U.jsx)($b.Provider,{value:n,children:e})},tx=()=>{let e=(0,H.useContext)($b);if(e===null)throw Error(`useCanvasFrame must be used within a FrameProvider`);return e},nx=p(`PuckCanvas`,Qb),rx=!0,ix=150,ax=()=>{let{frameRef:e}=tx(),t=ie(e),{viewports:n=h,ui:r}=kx(),{dispatch:i,overrides:a,setUi:o,zoomConfig:s,setZoomConfig:u,status:d,iframe:f,_experimentalFullScreenCanvas:p}=V(zt(e=>({dispatch:e.dispatch,overrides:e.overrides,setUi:e.setUi,zoomConfig:e.zoomConfig,setZoomConfig:e.setZoomConfig,status:e.status,iframe:e.iframe,_experimentalFullScreenCanvas:e._experimentalFullScreenCanvas}))),{leftSideBarVisible:m,rightSideBarVisible:g,leftSideBarWidth:_,rightSideBarWidth:v,viewports:y}=V(zt(e=>({leftSideBarVisible:e.state.ui.leftSideBarVisible,rightSideBarVisible:e.state.ui.rightSideBarVisible,leftSideBarWidth:e.state.ui.leftSideBarWidth,rightSideBarWidth:e.state.ui.rightSideBarWidth,viewports:e.state.ui.viewports}))),[b,x]=(0,H.useState)(!1),S=(0,H.useRef)(!1),C=(0,H.useMemo)(()=>({children:e})=>(0,U.jsx)(U.Fragment,{children:e}),[]),w=(0,H.useMemo)(()=>a.preview||C,[a]),T=(0,H.useCallback)(()=>{if(e.current){let t=e.current,n=ye(t);return{width:n.contentBox.width,height:n.contentBox.height}}return{width:0,height:0}},[e]);(0,H.useEffect)(()=>{t()},[e,m,g,_,v,y]),(0,H.useEffect)(()=>{let{height:e}=T();y.current.height===`auto`&&u(l(c({},s),{rootHeight:e/s.zoom}))},[s.zoom,T,u]),(0,H.useEffect)(()=>{rx&&t()},[y.current.width,y]),(0,H.useEffect)(()=>{if(!e.current)return;let n=new ResizeObserver(()=>{S.current||t()});return n.observe(e.current),()=>{n.disconnect()}},[e.current]);let[D,O]=(0,H.useState)(!1);(0,H.useEffect)(()=>{setTimeout(()=>{O(!0)},500)},[]);let k=z();return(0,H.useEffect)(()=>{if(typeof window>`u`||r?.viewports?.current)return;let t=window.innerWidth,i=e.current?.getBoundingClientRect().width;if(!t||!i||n.length===0)return;let a=Object.values(n).find(e=>e.width===`100%`),o=!!a,s=Object.entries(n).filter(([e,t])=>t.width!==`100%`).map(([e,n])=>({key:e,diff:Math.abs(t-(typeof n.width==`string`?t:n.width)),value:n})).sort((e,t)=>e.diff>t.diff?1:-1)[0].value;if(s.width<i&&o&&(s=a),f.enabled){let e=k.getState(),t={state:l(c({},e.state),{ui:l(c({},e.state.ui),{viewports:l(c({},e.state.ui.viewports),{current:l(c({},e.state.ui.viewports.current),{height:s?.height||`auto`,width:s?.width})})})})},n=e.history;e.history.histories.length===1&&(n=l(c({},n),{histories:[t]})),k.setState(l(c({},t),{history:n}))}},[n,e.current,f,k,r?.viewports?.current]),(0,U.jsxs)(`div`,{className:nx({ready:d===`READY`||!f.enabled||!f.waitForStyles,showLoader:D,fullScreen:p}),onClick:e=>{let t=e.target;!t.hasAttribute(`data-puck-component`)&&!t.hasAttribute(`data-puck-dropzone`)&&i({type:`setUi`,ui:{itemSelector:null},recordHistory:!1})},children:[y.controlsVisible&&f.enabled&&(0,U.jsx)(`div`,{className:nx(`controls`),children:(0,U.jsx)(Zb,{fullScreen:p,autoZoom:s.autoZoom,zoom:s.zoom,onViewportChange:e=>{x(!0),S.current=!0;let n=l(c({},e),{height:e.height||`auto`,zoom:s.zoom}),r={viewports:l(c({},y),{current:n})};o(r),rx&&t({viewports:l(c({},y),{current:n})})},onZoom:e=>{x(!0),S.current=!0,u(l(c({},s),{zoom:e}))}})}),(0,U.jsxs)(`div`,{className:nx(`inner`),ref:e,children:[(0,U.jsx)(`div`,{className:nx(`root`),style:{width:f.enabled?y.current.width:`100%`,height:s.rootHeight,transform:f.enabled?`scale(${s.zoom})`:void 0,transition:b?`width ${ix}ms ease-out, height ${ix}ms ease-out, transform ${ix}ms ease-out`:``,overflow:f.enabled?void 0:`auto`},suppressHydrationWarning:!0,id:`puck-canvas-root`,onTransitionEnd:()=>{x(!1),S.current=!1},children:(0,U.jsx)(w,{children:(0,U.jsx)(Mb,{})})}),(0,U.jsx)(`div`,{className:nx(`loader`),children:(0,U.jsx)(E,{size:24})})]})]})};d();function ox(e,t){let[n,r]=(0,H.useState)(null),i=(0,H.useRef)(null),a=V(t=>e===`left`?t.state.ui.leftSideBarWidth:t.state.ui.rightSideBarWidth);return(0,H.useEffect)(()=>{if(typeof window<`u`&&!a)try{let n=localStorage.getItem(`puck-sidebar-widths`);if(n){let r=JSON.parse(n)[e];r&&t({type:`setUi`,ui:{[e===`left`?`leftSideBarWidth`:`rightSideBarWidth`]:r}})}}catch(t){console.error(`Failed to load ${e} sidebar width from localStorage`,t)}},[t,e,a]),(0,H.useEffect)(()=>{a!==void 0&&r(a)},[a]),{width:n,setWidth:r,sidebarRef:i,handleResizeEnd:(0,H.useCallback)(n=>{t({type:`setUi`,ui:{[e===`left`?`leftSideBarWidth`:`rightSideBarWidth`]:n}});let r={};try{let e=localStorage.getItem(`puck-sidebar-widths`);r=e?JSON.parse(e):{}}catch(t){console.error(`Failed to save ${e} sidebar width to localStorage`,t)}finally{localStorage.setItem(`puck-sidebar-widths`,JSON.stringify(l(c({},r),{[e]:n})))}window.dispatchEvent(new CustomEvent(`viewportchange`,{bubbles:!0,cancelable:!1}))},[t,e])}}d(),d(),d();var sx=p(`ResizeHandle`,{ResizeHandle:`_ResizeHandle_144bf_2`,"ResizeHandle--left":`_ResizeHandle--left_144bf_16`,"ResizeHandle--right":`_ResizeHandle--right_144bf_20`}),cx=({position:e,sidebarRef:t,onResize:n,onResizeEnd:r})=>{let{frameRef:i}=tx(),a=ie(i),o=(0,H.useRef)(null),s=(0,H.useRef)(!1),c=(0,H.useRef)(0),l=(0,H.useRef)(0),u=(0,H.useCallback)(t=>{if(!s.current)return;let r=t.clientX-c.current,i=e===`left`?l.current+r:l.current-r;n(Math.max(192,i)),t.preventDefault()},[n,e]),d=(0,H.useCallback)(()=>{if(!s.current)return;s.current=!1,document.body.style.cursor=``,document.body.style.userSelect=``;let e=document.getElementById(`resize-overlay`);e&&document.body.removeChild(e),document.removeEventListener(`mousemove`,u),document.removeEventListener(`mouseup`,d),r(t.current?.getBoundingClientRect().width||0),a()},[r]),f=(0,H.useCallback)(e=>{s.current=!0,c.current=e.clientX,l.current=t.current?.getBoundingClientRect().width||0,document.body.style.cursor=`col-resize`,document.body.style.userSelect=`none`;let n=document.createElement(`div`);n.id=`resize-overlay`,n.setAttribute(`data-resize-overlay`,``),document.body.appendChild(n),document.addEventListener(`mousemove`,u),document.addEventListener(`mouseup`,d),e.preventDefault()},[e,u,d]);return(0,U.jsx)(`div`,{ref:o,className:sx({[e]:!0}),onMouseDown:f})};d();var lx=p(`Sidebar`,{Sidebar:`_Sidebar_16oed_1`,"Sidebar--isVisible":`_Sidebar--isVisible_16oed_10`,"Sidebar--left":`_Sidebar--left_16oed_14`,"Sidebar--right":`_Sidebar--right_16oed_34`,"Sidebar-resizeHandle":`_Sidebar-resizeHandle_16oed_51`}),ux=({position:e,sidebarRef:t,isVisible:n,onResize:r,onResizeEnd:i,children:a})=>(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(`div`,{ref:t,className:lx({[e]:!0,isVisible:n}),children:a}),(0,U.jsx)(`div`,{className:`${lx(`resizeHandle`)}`,children:(0,U.jsx)(cx,{position:e,sidebarRef:t,onResize:r,onResizeEnd:i})})]});d();var dx=e=>{let t=e;for(;t&&t!==document.body;){let e=window.getComputedStyle(t);if(e.display===`none`||e.visibility===`hidden`||e.opacity===`0`||t.getAttribute(`aria-hidden`)===`true`||t.hasAttribute(`hidden`))return!1;t=t.parentElement}return!0},fx=e=>{if(e?.defaultPrevented)return!0;let t=(e?.composedPath)?.call(e)[0]||e?.target||document.activeElement;if(t instanceof HTMLElement){let e=t.tagName.toLowerCase();if(e===`input`||e===`textarea`||e===`select`||t.isContentEditable)return!0;let n=t.getAttribute(`role`);if(n===`textbox`||n===`combobox`||n===`searchbox`||n===`listbox`||n===`grid`)return!0}let n=document.querySelector(`dialog[open], [aria-modal="true"], [role="dialog"], [role="alertdialog"]`);return!!(n&&dx(n))},px=()=>{let e=z(),t=(0,H.useCallback)(t=>{if(fx(t))return!1;let{state:n,dispatch:r,permissions:i,selectedItem:a}=e.getState(),o=n.ui?.itemSelector;return o?.zone&&a&&i.getPermissions({item:a}).delete&&r({type:`remove`,index:o.index,zone:o.zone}),!0},[e]);qe({delete:!0},t),qe({backspace:!0},t)};d(),d();var mx={Nav:`_Nav_vll2r_1`,"Nav-list":`_Nav-list_vll2r_5`,"Nav-mobileActions":`_Nav-mobileActions_vll2r_23`,"NavItem-link":`_NavItem-link_vll2r_39`,NavItem:`_NavItem_vll2r_39`,"NavItem-linkIcon":`_NavItem-linkIcon_vll2r_90`,"NavItem--active":`_NavItem--active_vll2r_100`,"NavItem--mobileOnly":`_NavItem--mobileOnly_vll2r_136`,"NavItem--desktopOnly":`_NavItem--desktopOnly_vll2r_141`},hx=p(`Nav`,mx),gx=p(`NavItem`,mx),_x=({label:e,icon:t,onClick:n,isActive:r,mobileOnly:i,desktopOnly:a})=>(0,U.jsx)(`li`,{className:gx({active:r,mobileOnly:i,desktopOnly:a}),children:n&&(0,U.jsxs)(`div`,{className:gx(`link`),onClick:n,children:[t&&(0,U.jsx)(`span`,{className:gx(`linkIcon`),children:t}),(0,U.jsx)(`span`,{className:gx(`linkLabel`),children:e})]})}),vx=({items:e,mobileActions:t})=>(0,U.jsxs)(`nav`,{className:hx(),children:[(0,U.jsx)(`ul`,{className:hx(`list`),children:Object.entries(e).map(([e,t])=>(0,U.jsx)(_x,c({},t),e))}),t&&(0,U.jsx)(`div`,{className:hx(`mobileActions`),children:t})]});d();var yx=e=>c({enabled:!0,waitForStyles:!0,syncHostStyles:!0},e),bx=p(`Puck`,Fb),xx=p(`PuckLayout`,Fb),Sx=p(`PuckPluginTab`,Fb),Cx=typeof window>`u`?H.useEffect:H.useLayoutEffect,wx=()=>{let e=B(`label-page`),t=V(e=>e.selectedItem?e.config.components[e.selectedItem.type]?.label??e.selectedItem.type.toString():e.config.root?.label);return(0,U.jsx)(Ub,{noBorderTop:!0,showBreadcrumbs:!0,title:t||e,children:(0,U.jsx)(Ky,{})})},Tx=({children:e,visible:t,mobileOnly:n})=>(0,U.jsx)(`div`,{className:Sx({visible:t,mobileOnly:n}),children:(0,U.jsx)(`div`,{className:Sx(`body`),children:e})}),Ex=({children:e})=>{let{iframe:t,initialHistory:n,plugins:r,height:i}=kx(),a=V(e=>e.dnd),o=(0,H.useMemo)(()=>yx(t),[t]);db();let s=V(e=>e.dispatch),l=V(e=>e.state.ui.leftSideBarVisible),u=V(e=>e.state.ui.rightSideBarVisible),d=V(e=>e.instanceId),{width:f,setWidth:p,sidebarRef:m,handleResizeEnd:h}=ox(`left`,s),{width:_,setWidth:v,sidebarRef:y,handleResizeEnd:b}=ox(`right`,s);(0,H.useEffect)(()=>{window.matchMedia(`(min-width: 638px)`).matches||s({type:`setUi`,ui:{leftSideBarVisible:!1,rightSideBarVisible:!1}});let e=()=>{window.matchMedia(`(min-width: 638px)`).matches||s({type:`setUi`,ui:e=>c(c({},e),e.rightSideBarVisible?{leftSideBarVisible:!1}:{})})};return window.addEventListener(`resize`,e),()=>{window.removeEventListener(`resize`,e)}},[]);let x=V(e=>e.overrides),S=(0,H.useMemo)(()=>x.puck||Ib,[x]),[C,w]=(0,H.useState)(!1);Cx(()=>{w(!0)},[]);let T=V(e=>e.status===`READY`);Ge(),(0,H.useEffect)(()=>{if(T&&o.enabled){let e=sg();if(e)return Pe(e)}},[T,o.enabled]),Lb(),px();let E={};f&&(E[`--puck-user-sidebar-left-width`]=`${f}px`),_&&(E[`--puck-user-sidebar-right-width`]=`${_}px`);let D=V(e=>e.setUi),O=V(e=>e.state.ui.plugin?.current),k=z(),A=(0,H.useMemo)(()=>!!r?.find(e=>e.name===`legacy-side-bar`),[r]),j=B(`plugin-blocks`),ee=B(`plugin-outline`),te=B(`plugin-fields`),M=(0,H.useMemo)(()=>{let e={},t=[yv({label:j}),Iy({label:ee})],n=e=>e.name===`legacy-side-bar`?-1:0,i=[...t,...r??[]].sort((e,t)=>n(e)-n(t));return r?.some(e=>e.name===`fields`)||i.push(Yy({label:te})),i?.forEach(t=>{t.name&&t.render&&(e[t.name]&&delete e[t.name],e[t.name]={label:t.label??t.name,icon:t.icon??(0,U.jsx)(Me,{}),onClick:()=>{t.name===O?D(l?{leftSideBarVisible:!1}:{leftSideBarVisible:!0}):t.name&&D({plugin:{current:t.name},leftSideBarVisible:!0})},isActive:l&&O===t.name,render:t.render,mobilePanelHeight:t.mobilePanelHeight??`toggle`,mobileOnly:A||t.mobileOnly,desktopOnly:t.name===`legacy-side-bar`||t.desktopOnly})}),e},[r,O,k,l,j,ee,te]),N=M[O??Object.keys(M)[0]]?.mobilePanelHeight??`toggle`;(0,H.useEffect)(()=>{if(!O){let e=Object.keys(M);D({plugin:{current:e[0]}})}},[M,O]);let P=M.fields&&M.fields.mobileOnly===!1,F=V(e=>e.state.ui.mobilePanelExpanded??!1),I=B(`layout-maximize`),ne=B(`layout-minimize`);return(0,U.jsxs)(`div`,{className:`Puck ${bx({hidePlugins:A})}`,id:d,style:{height:i,visibility:`hidden`},children:[(0,U.jsx)(p_,{disableAutoScroll:a?.disableAutoScroll,behavior:a?.behavior,children:(0,U.jsx)(S,{children:e||(0,U.jsx)(ex,{children:(0,U.jsx)(`div`,{className:xx({leftSideBarVisible:l,mounted:C,rightSideBarVisible:!P&&u,isExpanded:F,mobilePanelHeightToggle:N===`toggle`,mobilePanelHeightMinContent:N===`min-content`}),style:{height:i},children:(0,U.jsxs)(`div`,{className:xx(`inner`),style:E,children:[(0,U.jsx)(`div`,{className:xx(`header`),children:(0,U.jsx)(Vb,{hidePlugins:A})}),(0,U.jsx)(`div`,{className:xx(`nav`),children:(0,U.jsx)(vx,{items:M,mobileActions:l&&N===`toggle`&&(0,U.jsx)(Ee,{type:`button`,title:F?ne:I,onClick:()=>{D({mobilePanelExpanded:!F})},children:F?(0,U.jsx)(g,{size:21}):(0,U.jsx)(Je,{size:21})})})}),(0,U.jsx)(ux,{position:`left`,sidebarRef:m,isVisible:l,onResize:p,onResizeEnd:h,children:Object.entries(M).map(([e,{mobileOnly:t,render:n,label:r}])=>(0,U.jsx)(Tx,{visible:O===e,mobileOnly:t,children:(0,U.jsx)(n,{})},e))}),(0,U.jsx)(ax,{}),!P&&(0,U.jsx)(ux,{position:`right`,sidebarRef:y,isVisible:u,onResize:v,onResizeEnd:b,children:(0,U.jsx)(wx,{})})]})})})})}),(0,U.jsx)(`div`,{id:`puck-portal-root`,className:bx(`portal`)})]})},Dx=(0,H.createContext)({});function Ox(e){return(0,U.jsx)(Dx.Provider,{value:e,children:e.children})}var kx=()=>(0,H.useContext)(Dx);function Ax({children:e}){let{config:t,data:n,ui:r,onChange:i,permissions:a={},plugins:o,overrides:s,viewports:u=h,iframe:d,dnd:f,initialHistory:p,metadata:m,dictionary:g,onAction:_,fieldTransforms:y,_experimentalFullScreenCanvas:b,_experimentalVirtualization:x}=kx(),S=(0,H.useMemo)(()=>yx(d),[d]),[w]=(0,H.useState)(()=>{let e=c(c({},De.ui),r),i={};Object.keys(n?.root||{}).length>0&&!n?.root?.props&&console.warn("Warning: Defining props on `root` is deprecated. Please use `root.props`, or republish this page to migrate automatically.");let a=n?.root?.props||n?.root||{},o=c(c({},t.root?.defaultProps),a),s=j(C(l(c({},n?.root),{props:o})),t),u=l(c({},De),{data:l(c({},n),{root:l(c({},n?.root),{props:s.props}),content:n.content||[]}),ui:l(c(c({},e),i),{componentList:t.categories?Object.entries(t.categories).reduce((e,[t,n])=>l(c({},e),{[t]:{title:n.title,components:n.components,expanded:n.defaultExpanded,visible:n.visible}}),{}):{}})});return k(u,t)}),{appendData:T=!0}=p||{},[E]=(0,H.useState)([...p?.histories||[],...T?[{state:w}]:[]].map(e=>{let n=c(c({},w),e.state);return e.state.indexes||(n=k(n,t)),l(c({},e),{state:n})})),D=(0,H.useMemo)(()=>p?.index!==void 0&&p?.index>=0&&p?.index<E.length?p?.index:E.length-1,[]),O=E[D].state,A=Pb({overrides:s,plugins:o}),ee=(0,H.useMemo)(()=>{let e=(o||[]).reduce((e,t)=>c(c({},e),t.fieldTransforms),{});return c(c({},e),y)},[y,o]),te=Kh(),M=(0,H.useCallback)(e=>({instanceId:te,state:e,config:t,plugins:o||[],overrides:A,viewports:u,iframe:S,_experimentalFullScreenCanvas:!!b,_experimentalVirtualization:!!x,onAction:_,metadata:m,dictionary:g||{},dnd:f,fieldTransforms:ee}),[te,O,t,o,A,u,S,b,x,_,m,g,f,ee]),[N]=(0,H.useState)(()=>_e(M(O)));(0,H.useEffect)(()=>{},[N]),(0,H.useEffect)(()=>{let e=N.getState().state;N.setState(c({},M(e)))},[M]),v(N,{histories:E,index:D,initialAppState:O});let P=(0,H.useRef)(null);(0,H.useEffect)(()=>N.subscribe(e=>e.state.data,e=>{if(i){if(Te(e,P.current))return;i(e),P.current=e}}),[i]),Ue(N,a);let F=fv(N);return(0,H.useEffect)(()=>{let{resolveAndCommitData:e}=N.getState();setTimeout(()=>{e()},0)},[]),(0,U.jsx)(Ve.Provider,{value:N,children:(0,U.jsx)(uv.Provider,{value:F,children:e})})}function jx(e){return(0,U.jsx)(Ox,l(c({},e),{children:(0,U.jsx)(Ax,l(c({},e),{children:(0,U.jsx)(Ex,{children:e.children})}))}))}jx.Components=_v,jx.Fields=Ky,jx.Layout=Ex,jx.Outline=Py,jx.Preview=Mb,d(),d(),d(),d(),d(),d(),d(),d(),d(),d(),d(),d(),d(),d();function Mx(e,t){return Object.fromEntries($e.map(n=>{let r=n.id===`drive-premium`?`premium`:n.id===`reserva-directa`?`direct`:`caribe`,i={label:n.name,defaultProps:Object.fromEntries(Object.entries(structuredClone(n.data.content[0].props)).filter(([e])=>e!==`id`)),fields:{brand:{type:`text`,label:`Marca`},logoUrl:{...e,label:`Logotipo`},heading:{type:`textarea`,label:`Título de portada`},eyebrow:{type:`text`,label:`Etiqueta de portada`},description:{type:`textarea`,label:`Descripción de portada`},primaryColor:{type:`text`,label:`Color principal (#hex)`},backgroundColor:{type:`text`,label:`Color de fondo (#hex)`},currency:{type:`text`,label:`Símbolo de moneda`},animation:{type:`radio`,label:`Animaciones`,options:[{label:`Activadas`,value:`yes`},{label:`Desactivadas`,value:`no`}]},demoMode:{type:`radio`,label:`Aviso de vehículos de muestra`,options:[{label:`Mostrar`,value:`yes`},{label:`Ocultar: ya es mi flota`,value:`no`}]},heroImage:{...e,label:`Fotografía de portada / familia`},coupleImage:{...e,label:`Fotografía de viaje en pareja`},familyImage:{...e,label:`Fotografía de viaje en grupo`},featureTitle:{type:`textarea`,label:`Título editorial / pasos`},featureDescription:{type:`textarea`,label:`Descripción editorial`},assistanceTitle:{type:`textarea`,label:`Título de asesoría premium`},assistanceDescription:{type:`textarea`,label:`Descripción de asesoría premium`},fleetTitle:{type:`text`,label:`Título de la flota`},pickupTitle:{type:`text`,label:`Título de recogida`},pickupDescription:{type:`textarea`,label:`Descripción de recogida y entrega`},footerText:{type:`textarea`,label:`Pie de página`},locations:{type:`array`,label:`Lugares de recogida y devolución`,getItemSummary:e=>e.name||`Lugar`,defaultItemProps:{name:`Nuevo lugar`},arrayFields:{name:{type:`text`,label:`Nombre`}}},vehicles:{type:`array`,label:`Catálogo manual del tema: vehículos y tarifas`,getItemSummary:e=>e.name||`Vehículo`,defaultItemProps:{reference:``,name:`Nuevo vehículo`,category:`SUV`,seats:5,bags:2,transmission:`Automática`,dailyRate:0,image:``,photo:4,description:``},arrayFields:{reference:{type:`text`,label:`Referencia única (opcional)`},name:{type:`text`,label:`Nombre o modelo`},category:{type:`text`,label:`Categoría`},image:{...e,label:`Fotografía del vehículo`},description:{type:`textarea`,label:`Descripción y condiciones`},seats:{type:`number`,label:`Pasajeros`,min:1,max:60},bags:{type:`number`,label:`Maletas`,min:0,max:60},transmission:{type:`select`,label:`Transmisión`,options:[{label:`Automática`,value:`Automática`},{label:`Manual`,value:`Manual`}]},dailyRate:{type:`number`,label:`Tarifa diaria de referencia`,min:0},photo:{type:`select`,label:`Fotografía de muestra alternativa`,options:[{label:`Sedán`,value:3},{label:`SUV`,value:4},{label:`Familiar`,value:5}]}}},faqs:{type:`array`,label:`Preguntas frecuentes`,defaultItemProps:{question:`Nueva pregunta`,answer:``},getItemSummary:e=>e.question||`Pregunta`,arrayFields:{question:{type:`text`,label:`Pregunta`},answer:{type:`textarea`,label:`Respuesta`}}}},render:e=>{let n={...Qe,...e},i=new Set,a=(e,t,n)=>Number.isFinite(Number(e))?Math.min(n,Math.max(t,Number(e))):t;return(0,U.jsx)(et,{variant:r,publicContext:t,settings:{...n,locations:(Array.isArray(n.locations)?n.locations:[]).filter(e=>e&&typeof e.name==`string`&&e.name.trim()),faqs:(Array.isArray(n.faqs)?n.faqs:[]).filter(e=>e&&typeof e.question==`string`),vehicles:(Array.isArray(n.vehicles)?n.vehicles:[]).filter(Boolean).map((e,t)=>{let n=e.reference||`vehicle-${t}`;for(;i.has(n);)n+=`-${t}`;return i.add(n),{...e,reference:n,dailyRate:a(e.dailyRate,0,1e6),seats:Math.round(a(e.seats,1,60)),bags:Math.round(a(e.bags,0,60)),photo:[3,4,5].includes(Number(e.photo))?Number(e.photo):4}})}})}};return[n.data.content[0].type,i]}))}async function Nx(e,t){if(t){let e=await fetch(`https://rvbjmcszteqzjvswfslk.supabase.co/functions/v1/public-website`,{method:`POST`,headers:{"Content-Type":`application/json`,apikey:`sb_publishable_kKsZGPYxzP4lHuaOssMkvA_OECdOxnZ`},body:JSON.stringify({...t,action:`assets`}),signal:AbortSignal.timeout(15e3)}),n=await e.json();if(!e.ok)throw Error(n.error||`No se pudo cargar el catálogo.`);return n.assets||[]}let n=await a.from(`websites`).select(`id`).eq(`workspace_id`,e).maybeSingle();if(n.error)throw n.error;if(!n.data)return[];let r=await a.rpc(`get_website_public_assets`,{p_website_id:n.data.id});if(r.error)throw r.error;return r.data||[]}var Px={day:`día`,week:`semana`,month:`mes`,year:`año`};function Fx({workspaceId:e,context:t,title:n=`Vehículos y propiedades`,kind:r=`all`,operation:i=`all`}){let[a,o]=(0,H.useState)([]),[s,c]=(0,H.useState)(!0),[l,u]=(0,H.useState)(``),[d,f]=(0,H.useState)(``);(0,H.useEffect)(()=>{let n=!0;return c(!0),u(``),Nx(e,t).then(e=>{n&&o(e)}).catch(()=>{n&&u(`No se pudo cargar el catálogo. Inténtalo más tarde.`)}).finally(()=>{n&&c(!1)}),()=>{n=!1}},[e,t?.websiteSlug,t?.pageSlug]);let p=a.filter(e=>(r===`all`||r===e.kind)&&(i===`all`||e.operation===`both`||e.operation===i)&&`${e.name} ${e.category||``} ${e.zone||``} ${e.city||``}`.toLowerCase().includes(d.toLowerCase())),m=(e,t)=>e===null?`Consultar precio`:new Intl.NumberFormat(`es-DO`,{style:`currency`,currency:t}).format(e);return(0,U.jsxs)(`section`,{className:`pct-live-assets`,children:[(0,U.jsxs)(`header`,{children:[(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`span`,{children:`CATÁLOGO ACTUALIZADO`}),(0,U.jsx)(`h2`,{children:n}),(0,U.jsx)(`p`,{children:`Disponibilidad sujeta a confirmación.`})]}),(0,U.jsx)(`input`,{"aria-label":`Buscar en el catálogo`,value:d,onChange:e=>f(e.target.value),placeholder:`Buscar nombre, tipo o zona…`})]}),l?(0,U.jsx)(`p`,{role:`alert`,children:l}):s?(0,U.jsx)(`p`,{role:`status`,children:`Cargando catálogo…`}):p.length?(0,U.jsx)(`div`,{className:`pct-live-assets-grid`,children:p.map(e=>(0,U.jsxs)(`article`,{children:[/^https?:\/\//i.test(e.image_url)?(0,U.jsx)(`img`,{src:e.image_url,alt:e.name,loading:`lazy`}):(0,U.jsx)(`div`,{className:`pct-live-assets-noimage`,children:e.kind===`vehicle`?`Vehículo`:`Propiedad`}),(0,U.jsxs)(`div`,{className:`pct-live-assets-body`,children:[(0,U.jsxs)(`small`,{children:[e.kind===`vehicle`?`Vehículo`:`Propiedad`,` · `,e.operation===`both`?`Venta y alquiler`:e.operation===`sale`?`Venta`:`Alquiler`,e.status===`rented`?` · Alquilado`:e.status===`reserved`?` · Reservado`:``]}),(0,U.jsx)(`h3`,{children:e.name}),(0,U.jsx)(`p`,{children:e.kind===`vehicle`?[e.make,e.model,e.year,e.seats?`${e.seats} pasajeros`:``].filter(Boolean).join(` · `):[e.zone,e.city,e.bedrooms?`${e.bedrooms} habitaciones`:``,e.area?`${e.area} m²`:``].filter(Boolean).join(` · `)}),(0,U.jsx)(`p`,{className:`pct-live-assets-description`,children:e.description}),i!==`rent`&&e.operation!==`rent`&&(0,U.jsxs)(`strong`,{children:[`Venta: `,m(e.sale_price,e.currency)]}),i!==`sale`&&e.operation!==`sale`&&(0,U.jsxs)(`strong`,{children:[`Alquiler: `,m(e.rent_price,e.currency),e.rent_price===null?``:` / ${Px[e.rent_period]||e.rent_period}`]}),t?(0,U.jsx)(st,{kind:`asset-request`,listingId:e.id,itemName:e.name,...t},e.id):(0,U.jsx)(`p`,{className:`pct-live-assets-preview`,children:`Las consultas se habilitan al publicar.`})]})]},e.id))}):(0,U.jsx)(`p`,{children:t?`No hay opciones para estos filtros.`:`Selecciona activos en CMS → Vehículos y propiedades.`})]})}async function Ix(e,t=!0){let n=a.from(`website_catalog_items`).select(`*, crm_item:crm_products_services(id,item_type,name,description,image_url,unit_price,currency,is_active,track_inventory,stock_quantity,low_stock_threshold)`).eq(`website_id`,e).order(`sort_order`,{ascending:!0}).order(`created_at`,{ascending:!0});t||(n=n.eq(`is_active`,!0));let{data:r,error:i}=await n;if(i)throw i;return(r||[]).map(e=>{let t=e.crm_item;return t?{...e,item_type:t.item_type,name:t.name,description:t.description,image_url:e.image_url||t.image_url,image_override_url:e.image_url,price:t.unit_price,currency:t.currency,crm_is_active:t.is_active}:e}).filter(e=>t||e.is_active&&e.crm_is_active!==!1)}async function Lx(e,t){let{data:n,error:r}=await a.from(`website_catalog_items`).insert({website_id:e,crm_item_id:t.crm_item_id,item_type:t.item_type,name:t.name.trim(),description:t.description?.trim()||``,image_url:t.image_url?.trim()||null,price:t.price??null,link_url:t.link_url?.trim()||null,is_active:t.is_active??!0,sort_order:t.sort_order??0}).select(`*`).single();if(r)throw r;return n}async function Rx(e,t){let n={};for(let e of[`item_type`,`name`,`description`,`image_url`,`price`,`link_url`,`is_active`,`sort_order`])t[e]!==void 0&&(n[e]=t[e]);typeof n.name==`string`&&(n.name=n.name.trim()),typeof n.description==`string`&&(n.description=n.description.trim()),typeof n.image_url==`string`&&(n.image_url=n.image_url.trim()||null),typeof n.link_url==`string`&&(n.link_url=n.link_url.trim()||null);let{data:r,error:i}=await a.from(`website_catalog_items`).update(n).eq(`id`,e).select(`*`).single();if(i)throw i;return r}async function zx(e){let{data:t,error:n}=await a.from(`website_templates`).select(`*`).eq(`website_id`,e).order(`created_at`,{ascending:!1});if(n)throw n;return t??[]}async function Bx(e,t,n,r={}){let{data:i,error:o}=await a.from(`website_templates`).insert({website_id:e,name:t.trim(),template_type:`puck_json`,puck_data:n,theme_settings:r}).select(`*`).single();if(o)throw o;return i}async function Vx(e,t,n,r,i={}){if(r.size<=0||r.size>26214400)throw Error(`El ZIP debe pesar menos de 25 MB y no estar vacío.`);let o=`${t}/themes/${e}/${crypto.randomUUID()}.zip`,{error:s}=await a.storage.from(`website-media`).upload(o,r,{contentType:`application/zip`,cacheControl:`3600`});if(s)throw s;let{data:c,error:l}=await a.from(`website_templates`).insert({website_id:e,name:n.trim(),template_type:`static_zip`,theme_settings:i,storage_path:o}).select(`*`).single();if(l)throw await a.storage.from(`website-media`).remove([o]),l;return c}async function Hx(e){if(e.storage_path){let{error:t}=await a.storage.from(`website-media`).remove([e.storage_path]);if(t)throw t}let{error:t}=await a.from(`website_templates`).delete().eq(`id`,e.id);if(t)throw t}async function Ux(e,t){let n=e.template_type===`puck_json`?{builder_data:e.puck_data,website_template_id:null}:{website_template_id:e.id},{error:r}=await a.from(`website_pages`).update(n).eq(`id`,t);if(r)throw r;let i=e.theme_settings,o=i.colors??{},s=i.fonts??{},c={};if(typeof o.primary==`string`&&(c.primary_color=o.primary),typeof o.secondary==`string`&&(c.secondary_color=o.secondary),typeof o.accent==`string`&&(c.accent_color=o.accent),typeof s.heading==`string`&&(c.font_heading=s.heading),typeof s.body==`string`&&(c.font_body=s.body),Object.keys(c).length>0){let{error:t}=await a.from(`websites`).update(c).eq(`id`,e.website_id);if(t)throw t}let l={};if(i.colors&&(l.colors=i.colors),i.fonts&&(l.fonts=i.fonts),i.spacing&&(l.spacing=i.spacing),typeof i.border_radius==`string`&&(l.border_radius=i.border_radius),typeof i.button_style==`string`&&(l.button_style=i.button_style),Object.keys(l).length>0){l.theme_name=e.name;let t=await qx(e.website_id);if(t){let{error:e}=await a.from(`website_themes`).update(l).eq(`id`,t.id);if(e)throw e}}}async function Wx(e){let{data:t,error:n}=await a.from(`websites`).select(`*`).eq(`workspace_id`,e).order(`created_at`,{ascending:!0}).limit(1).maybeSingle();if(n)throw n;return t}async function Gx(e,t){let n={workspace_id:e,name:t.name?.trim()||`Mi sitio web`,slug:t.slug?.trim()||`mi-sitio-web`,custom_domain:t.custom_domain?.trim().toLowerCase()||null,status:t.status||`draft`,logo_url:t.logo_url??null,favicon_url:t.favicon_url??null,primary_color:t.primary_color||`#2563eb`,secondary_color:t.secondary_color||`#1e293b`,accent_color:t.accent_color||`#f59e0b`,font_heading:t.font_heading||`Inter`,font_body:t.font_body||`Inter`,contact_email:t.contact_email??null,contact_phone:t.contact_phone??null,address:t.address??null,facebook_url:t.facebook_url??null,instagram_url:t.instagram_url??null,whatsapp_number:t.whatsapp_number??null},{data:r,error:i}=await a.from(`websites`).insert(n).select(`*`).single();if(i)throw i;return r}async function Kx(e,t){let n={};for(let[e,r]of Object.entries(t))r!==void 0&&(n[e]=r);if(t.name!==void 0&&(n.name=t.name.trim()),t.slug!==void 0&&(n.slug=t.slug.trim()),Object.keys(n).length===0)throw Error(`No hay cambios para guardar en el sitio web.`);let{data:r,error:i}=await a.from(`websites`).update(n).eq(`id`,e).select(`*`).single();if(i)throw i;return r}async function qx(e){let{data:t,error:n}=await a.from(`website_themes`).select(`*`).eq(`website_id`,e).maybeSingle();if(n)throw n;return t}async function Jx(e){let{data:t,error:n}=await a.from(`website_themes`).insert({website_id:e,theme_name:`Default`,colors:{},fonts:{},spacing:{scale:`comfortable`},border_radius:`medium`,button_style:`rounded`}).select(`*`).single();if(n)throw n;return t}async function Yx(e,t){let n={};if(t.theme_name!==void 0&&(n.theme_name=t.theme_name),t.colors!==void 0&&(n.colors=t.colors),t.fonts!==void 0&&(n.fonts=t.fonts),t.spacing!==void 0&&(n.spacing=t.spacing),t.border_radius!==void 0&&(n.border_radius=t.border_radius),t.button_style!==void 0&&(n.button_style=t.button_style),Object.keys(n).length===0)throw Error(`No hay cambios para guardar en el tema del sitio web.`);let{data:r,error:i}=await a.from(`website_themes`).update(n).eq(`id`,e).select(`*`).single();if(i)throw i;return r}function Xx(e){let t=e.name.split(`.`).pop()?.toLowerCase();if(!t)throw Error(`El archivo no tiene una extensión válida.`);return t}function Zx(e,t){if(![`image/png`,`image/jpeg`,`image/webp`,`image/svg+xml`,`image/x-icon`,`image/vnd.microsoft.icon`].includes(e.type))throw Error(`Formato no permitido. Usa PNG, JPG, WEBP, SVG o ICO.`);let n=t===`favicon`?2097152:5242880;if(e.size>n)throw Error(t===`favicon`?`El favicon no puede superar 2 MB.`:`El logo no puede superar 5 MB.`)}function Qx(e){if(!e)return null;let t=e.indexOf(`/website-media/`);return t===-1?null:e.substring(t+15)}async function $x(e,t,n){Zx(n,t);let r=Xx(n),i=`${e}/branding/${t}-${Date.now()}.${r}`,{error:o}=await a.storage.from(`website-media`).upload(i,n,{cacheControl:`3600`,upsert:!1});if(o)throw o;let{data:s}=a.storage.from(`website-media`).getPublicUrl(i);if(!s.publicUrl)throw Error(`No se pudo obtener la URL pública de la imagen.`);return{path:i,url:s.publicUrl}}async function eS(e){let t=Qx(e);if(!t)return;let{error:n}=await a.storage.from(`website-media`).remove([t]);if(n)throw n}async function tS(e){let{data:t,error:n}=await a.from(`website_pages`).select(`*`).eq(`website_id`,e).order(`sort_order`,{ascending:!0}).order(`created_at`,{ascending:!0});if(n)throw n;return t||[]}async function nS(e,t){let n={website_id:e,title:t.title?.trim()||`Nueva página`,slug:t.slug?.trim()||`nueva-pagina`,page_type:t.page_type||`standard`,status:t.status||`draft`,is_home:!1,sort_order:t.sort_order??0},{data:r,error:i}=await a.from(`website_pages`).insert(n).select(`*`).single();if(i)throw i;return r}async function rS(e,t){let n={...t,...t.title===void 0?{}:{title:t.title.trim()},...t.slug===void 0?{}:{slug:t.slug.trim()}},{data:r,error:i}=await a.from(`website_pages`).update(n).eq(`id`,e).select(`*`).single();if(i)throw i;return r}async function iS(e){let{error:t}=await a.from(`website_pages`).delete().eq(`id`,e);if(t)throw t}async function aS(e,t){let{error:n}=await a.from(`website_pages`).update({is_home:!1}).eq(`website_id`,e).eq(`is_home`,!0);if(n)throw n;let{error:r}=await a.from(`website_pages`).update({is_home:!0,page_type:`home`}).eq(`id`,t).eq(`website_id`,e);if(r)throw r}async function oS(e){let{error:t}=await a.from(`website_pages`).update({is_home:!1}).eq(`id`,e);if(t)throw t}async function sS(e,t){let n=[...t].sort((e,t)=>e.sort_order-t.sort_order);for(let t=0;t<n.length;t+=1){let r=n[t],{error:i}=await a.from(`website_pages`).update({sort_order:t}).eq(`id`,r.id).eq(`website_id`,e);if(i)throw i}}var cS=(0,H.createContext)(null),lS=()=>(0,H.useContext)(cS);function uS({workspaceId:e,websiteId:t=``,publicContext:n,children:r,initialCatalog:i,businessInfo:o,onCatalogLoaded:s}){let[c,l]=(0,H.useState)([]),[u,d]=(0,H.useState)(!0),[f,p]=(0,H.useState)(``),[m,h]=(0,H.useState)(0),[g,_]=(0,H.useState)(i||[]),[v,y]=(0,H.useState)(o||null),b=(0,H.useCallback)(()=>h(e=>e+1),[]);return(0,H.useEffect)(()=>{let r=!0;return d(!0),p(``),l([]),(async()=>{if(!n&&t){let[n,i,o]=await Promise.all([a.rpc(`get_website_public_assets`,{p_website_id:t}),Ix(t,!1),a.from(`websites`).select(`name,logo_url`).eq(`id`,t).eq(`workspace_id`,e).single()]);if(n.error)throw n.error;if(o.error)throw o.error;return r&&(_(i),y(o.data),s?.(i)),n.data||[]}return r&&(_(i||[]),y(o||null)),Nx(e,n)})().then(e=>{r&&l(e)}).catch(()=>{r&&p(`No se pudo actualizar el catálogo del CRM.`)}).finally(()=>{r&&d(!1)}),()=>{r=!1}},[e,t,n?.websiteSlug,n?.pageSlug,m,i,o,s]),(0,U.jsx)(cS.Provider,{value:{items:c,catalog:g,business:v,loading:u,error:f,refresh:b,workspaceId:e,websiteId:t,isPublic:!!n},children:r})}function dS({workspaceId:e,title:t=`Solicita tu traslado`,description:n=`Aeropuerto, hotel o destino: coordina tu próximo viaje con nosotros.`,publicContext:r}){let i=lS(),[o,s]=(0,H.useState)([]),[c,l]=(0,H.useState)(!0),[u,d]=(0,H.useState)(``),[f,p]=(0,H.useState)(!1),[m,h]=(0,H.useState)(``),[g,_]=(0,H.useState)(``),[v,y]=(0,H.useState)(!1),[b,x]=(0,H.useState)(0),S=(0,H.useRef)(``),C=o.find(e=>e.id===g);(0,H.useEffect)(()=>{let e=!0;return l(!0),d(``),(async()=>{if(r){let e=await fetch(`https://rvbjmcszteqzjvswfslk.supabase.co/functions/v1/public-website`,{method:`POST`,headers:{"Content-Type":`application/json`,apikey:`sb_publishable_kKsZGPYxzP4lHuaOssMkvA_OECdOxnZ`},body:JSON.stringify({...r,action:`transfer-routes`}),signal:AbortSignal.timeout(15e3)}),t=await e.json();if(!e.ok)throw Error(t.error||`No se pudieron cargar las rutas.`);return t.routes||[]}if(!i?.websiteId)return[];let e=await a.rpc(`get_website_transfer_routes`,{p_website_id:i.websiteId});if(e.error)throw e.error;return e.data||[]})().then(t=>{e&&s(t)}).catch(()=>{e&&d(`No se pudieron cargar las tarifas de traslados.`)}).finally(()=>{e&&l(!1)}),()=>{e=!1}},[e,i?.websiteId,r?.websiteSlug,r?.pageSlug,b]);async function w(e){if(e.preventDefault(),!r||f||m)return;let t=new FormData(e.currentTarget),n=e=>String(t.get(e)||``).trim();p(!0),d(``),S.current||=crypto.randomUUID();try{let e=await a.functions.invoke(`submit-website-form`,{body:{kind:`transfer-request`,...r,submissionKey:S.current,website:n(`website`),fields:{name:n(`name`),email:n(`email`),phone:n(`phone`),message:n(`message`),consent:n(`consent`)},trip:{route_id:g,pickup_at:dt(n(`pickup_at`)),return_at:v?dt(n(`return_at`)):null,passengers:n(`passengers`),bags:n(`bags`),child_seats:n(`child_seats`),flight_number:n(`flight_number`),return_flight:n(`return_flight`),meeting_point:n(`meeting_point`),return_meeting:n(`return_meeting`)}}});if(e.error){let t=e.error.context,n=t instanceof Response?await t.clone().json().catch(()=>null):null;throw Error(n?.error||`No se pudo enviar la solicitud. Inténtalo de nuevo.`)}h(e.data?.reference||`Recibida`)}catch(e){d(e.message)}finally{p(!1)}}return m?(0,U.jsxs)(`section`,{className:`transfer-public`,role:`status`,children:[(0,U.jsx)(`span`,{className:`transfers-eyebrow`,children:`SOLICITUD RECIBIDA`}),(0,U.jsx)(`h2`,{children:m}),(0,U.jsx)(`p`,{children:`El operador revisará disponibilidad y se pondrá en contacto contigo. Tu traslado todavía no está confirmado y no se ha realizado ningún cobro.`})]}):(0,U.jsxs)(`section`,{className:`transfer-public`,id:`reservar-transfer`,children:[(0,U.jsx)(`span`,{className:`transfers-eyebrow`,children:`TRASLADOS PRIVADOS`}),(0,U.jsx)(`h2`,{children:t}),(0,U.jsx)(`p`,{children:n}),c?(0,U.jsx)(`p`,{role:`status`,children:`Cargando rutas…`}):u&&o.length===0?(0,U.jsxs)(`p`,{role:`alert`,children:[u,` `,(0,U.jsx)(`button`,{onClick:()=>x(e=>e+1),children:`Reintentar`})]}):o.length===0?(0,U.jsx)(`p`,{children:r?`No hay rutas disponibles para solicitar en este momento.`:`Crea las tarifas en Transfers / Traslados y activa «Publicar en CMS». Este bloque las mostrará automáticamente.`}):(0,U.jsxs)(`form`,{onSubmit:w,children:[(0,U.jsxs)(`label`,{children:[`Ruta y categoría`,(0,U.jsxs)(`select`,{required:!0,value:g,onChange:e=>_(e.target.value),children:[(0,U.jsx)(`option`,{value:``,children:`Selecciona tu traslado`}),o.map(e=>(0,U.jsxs)(`option`,{value:e.id,children:[e.name,` · `,e.category]},e.id))]})]}),C&&(0,U.jsxs)(`p`,{children:[C.origin,` → `,C.destination,` · Hasta `,C.max_passengers,` pasajeros y `,C.max_bags,` maletas. Duración estimada: `,C.duration_minutes,` min.`]}),(0,U.jsxs)(`div`,{className:`transfer-form-grid`,children:[(0,U.jsxs)(`label`,{children:[`Nombre`,(0,U.jsx)(`input`,{required:!0,name:`name`,autoComplete:`name`,maxLength:180})]}),(0,U.jsxs)(`label`,{children:[`Correo electrónico`,(0,U.jsx)(`input`,{required:!0,name:`email`,type:`email`,autoComplete:`email`,maxLength:200})]}),(0,U.jsxs)(`label`,{children:[`Teléfono`,(0,U.jsx)(`input`,{required:!0,name:`phone`,type:`tel`,autoComplete:`tel`,maxLength:50})]}),(0,U.jsxs)(`label`,{children:[`Fecha y hora de recogida · hora RD`,(0,U.jsx)(`input`,{required:!0,type:`datetime-local`,name:`pickup_at`})]}),(0,U.jsxs)(`label`,{children:[`Pasajeros`,(0,U.jsx)(`input`,{required:!0,name:`passengers`,type:`number`,min:1,max:C?.max_passengers||60,defaultValue:1})]}),(0,U.jsxs)(`label`,{children:[`Maletas`,(0,U.jsx)(`input`,{required:!0,name:`bags`,type:`number`,min:0,max:C?.max_bags??60,defaultValue:0})]}),(0,U.jsxs)(`label`,{children:[`Sillas infantiles solicitadas`,(0,U.jsx)(`input`,{name:`child_seats`,type:`number`,min:0,max:10,defaultValue:0})]}),(0,U.jsxs)(`label`,{children:[`Número de vuelo (si aplica)`,(0,U.jsx)(`input`,{name:`flight_number`,maxLength:40})]}),(0,U.jsxs)(`label`,{children:[`Hotel / punto de encuentro`,(0,U.jsx)(`input`,{name:`meeting_point`,maxLength:300})]})]}),(0,U.jsxs)(`label`,{className:`transfer-check`,children:[(0,U.jsx)(`input`,{type:`checkbox`,checked:v,onChange:e=>y(e.target.checked)}),`Necesito ida y vuelta`]}),v&&(0,U.jsxs)(`div`,{className:`transfer-form-grid`,children:[(0,U.jsxs)(`label`,{children:[`Recogida de vuelta · hora RD`,(0,U.jsx)(`input`,{required:!0,name:`return_at`,type:`datetime-local`})]}),(0,U.jsxs)(`label`,{children:[`Vuelo de vuelta`,(0,U.jsx)(`input`,{name:`return_flight`,maxLength:40})]}),(0,U.jsxs)(`label`,{children:[`Encuentro de vuelta`,(0,U.jsx)(`input`,{name:`return_meeting`,maxLength:300})]})]}),(0,U.jsxs)(`label`,{children:[`Indicaciones o necesidades especiales`,(0,U.jsx)(`textarea`,{name:`message`,maxLength:2e3})]}),C&&(0,U.jsxs)(`div`,{className:`transfer-public-total`,children:[`Tarifa por vehículo · `,v?`dos trayectos`:`un trayecto`,(0,U.jsx)(`strong`,{children:Ze(ut(C,v),C.currency)}),(0,U.jsxs)(`small`,{children:[Number(C.tax_rate)?`Incluye ${C.tax_rate}% de impuesto.`:`Impuesto configurado: 0%.`,` Sillas infantiles y extras sujetos a confirmación. Sin cobro en línea.`]})]}),(0,U.jsxs)(`label`,{className:`transfer-check`,children:[(0,U.jsx)(`input`,{required:!0,name:`consent`,type:`checkbox`,value:`accepted`}),`Acepto que utilicen estos datos para gestionar mi solicitud de traslado.`]}),(0,U.jsxs)(`label`,{className:`transfer-honeypot`,"aria-hidden":`true`,children:[`Sitio web`,(0,U.jsx)(`input`,{tabIndex:-1,name:`website`,autoComplete:`off`})]}),u&&(0,U.jsx)(`p`,{className:`transfer-error`,role:`alert`,children:u}),(0,U.jsx)(`button`,{className:`transfer-primary`,disabled:f||!r||!C,children:f?`Enviando…`:`Solicitar reserva`}),(0,U.jsx)(`p`,{children:r?`La solicitud requiere confirmación del operador. Horarios en America/Santo_Domingo.`:`Vista previa: las solicitudes se habilitan al publicar la página.`})]})]})}function fS({title:e=`Reserva tu próxima experiencia`,description:t=`Selecciona una salida y solicita tus cupos.`,publicContext:n}){let r=lS(),[i,o]=(0,H.useState)([]),[s,c]=(0,H.useState)(!0),[l,u]=(0,H.useState)(``),[d,f]=(0,H.useState)(!1),[p,m]=(0,H.useState)(``),[h,g]=(0,H.useState)(``),[_,v]=(0,H.useState)(`1`),[y,b]=(0,H.useState)(`0`),[x,S]=(0,H.useState)(`0`),[C,w]=(0,H.useState)(!1),[T,E]=(0,H.useState)(0),D=(0,H.useRef)(``);(0,H.useEffect)(()=>{let e=!0;return c(!0),u(``),(async()=>{if(n){let e=await fetch(`https://rvbjmcszteqzjvswfslk.supabase.co/functions/v1/public-website`,{method:`POST`,headers:{"Content-Type":`application/json`,apikey:`sb_publishable_kKsZGPYxzP4lHuaOssMkvA_OECdOxnZ`},body:JSON.stringify({...n,action:`tour-departures`}),signal:AbortSignal.timeout(15e3)}),t=await e.json();if(!e.ok)throw Error(t.error);return t.departures||[]}if(!r?.websiteId)return[];let e=await a.rpc(`get_website_tour_departures`,{p_website_id:r.websiteId});if(e.error)throw e.error;return e.data||[]})().then(t=>{e&&o(t)}).catch(()=>{e&&u(`No se pudieron cargar las salidas disponibles.`)}).finally(()=>{e&&c(!1)}),()=>{e=!1}},[r?.websiteId,n?.websiteSlug,n?.pageSlug,T]);let O=i.find(e=>e.id===h),k=Number(_)+Number(y)+Number(x),A=O?Number(_)*Number(O.adult_price)+Number(y)*Number(O.child_price)+Number(x)*Number(O.infant_price):0;async function j(e){if(e.preventDefault(),!n||d||!O)return;if(k<1||k>O.available)return u(`Revisa los participantes y los cupos indicados.`);let t=new FormData(e.currentTarget),r=e=>String(t.get(e)||``).trim();f(!0),u(``),D.current||=crypto.randomUUID();try{let e=await a.functions.invoke(`submit-website-form`,{body:{kind:`tour-request`,...n,submissionKey:D.current,website:r(`website`),fields:{name:r(`name`),email:r(`email`),phone:r(`phone`),message:r(`message`),consent:r(`consent`)},trip:{departure_id:h,adults:_,children:y,infants:x,pickup_required:C,pickup_point:r(`pickup_point`)}}});if(e.error){let t=e.error.context,n=t instanceof Response?await t.clone().json().catch(()=>null):null;throw Error(n?.error||`No se pudo enviar la solicitud.`)}m(e.data?.reference||`Recibida`)}catch(e){u(e.message)}finally{f(!1)}}return p?(0,U.jsxs)(`section`,{className:`transfer-public`,role:`status`,children:[(0,U.jsx)(`span`,{className:`transfers-eyebrow`,children:`SOLICITUD RECIBIDA`}),(0,U.jsx)(`h2`,{children:p}),(0,U.jsx)(`p`,{children:`El operador confirmará cupos, punto y hora de recogida. No se ha realizado ningún cobro ni se han bloqueado cupos con esta solicitud.`})]}):(0,U.jsxs)(`section`,{className:`transfer-public`,id:`reservar-tour`,children:[(0,U.jsx)(`span`,{className:`transfers-eyebrow`,children:`TOURS Y EXPERIENCIAS`}),(0,U.jsx)(`h2`,{children:e}),(0,U.jsx)(`p`,{children:t}),s?(0,U.jsx)(`p`,{children:`Cargando salidas…`}):l&&!i.length?(0,U.jsxs)(`p`,{role:`alert`,children:[l,(0,U.jsx)(`button`,{onClick:()=>E(e=>e+1),children:`Reintentar`})]}):i.length?(0,U.jsxs)(`form`,{onSubmit:j,children:[(0,U.jsxs)(`label`,{children:[`Tour y salida`,(0,U.jsxs)(`select`,{required:!0,value:h,onChange:e=>g(e.target.value),children:[(0,U.jsx)(`option`,{value:``,children:`Selecciona una salida`}),i.map(e=>(0,U.jsxs)(`option`,{value:e.id,disabled:Number(e.available)===0,children:[e.name,` · `,lt(e.starts_at),` · `,e.available,` cupos`]},e.id))]})]}),O&&(0,U.jsxs)(`p`,{children:[O.description,(0,U.jsx)(`br`,{}),`Encuentro: `,O.meeting_point||`Por coordinar con el operador`]}),(0,U.jsxs)(`div`,{className:`transfer-form-grid`,children:[(0,U.jsxs)(`label`,{children:[`Nombre del contacto`,(0,U.jsx)(`input`,{name:`name`,required:!0,maxLength:180,autoComplete:`name`})]}),(0,U.jsxs)(`label`,{children:[`Correo`,(0,U.jsx)(`input`,{name:`email`,type:`email`,required:!0,maxLength:200,autoComplete:`email`})]}),(0,U.jsxs)(`label`,{children:[`Teléfono`,(0,U.jsx)(`input`,{name:`phone`,type:`tel`,required:!0,maxLength:50,autoComplete:`tel`})]}),[[`Adultos`,_,v],[`Niños`,y,b],[`Infantes`,x,S]].map(([e,t,n])=>(0,U.jsxs)(`label`,{children:[String(e),(0,U.jsx)(`input`,{type:`number`,required:!0,min:`0`,max:O?.available||1e3,value:t,onChange:e=>n(e.target.value)})]},String(e)))]}),(0,U.jsxs)(`label`,{className:`transfer-check`,children:[(0,U.jsx)(`input`,{type:`checkbox`,checked:C,onChange:e=>w(e.target.checked)}),`Necesito recogida`]}),C&&(0,U.jsxs)(`label`,{children:[`Hotel o punto solicitado`,(0,U.jsx)(`input`,{required:!0,name:`pickup_point`,maxLength:300})]}),(0,U.jsxs)(`label`,{children:[`Mensaje`,(0,U.jsx)(`textarea`,{name:`message`,maxLength:2e3})]}),O&&(0,U.jsxs)(`div`,{className:`transfer-public-total`,children:[k,` participantes · Cada participante ocupa un cupo, incluidos infantes.`,(0,U.jsx)(`strong`,{children:Ze(A+Math.round(A*Number(O.tax_rate))/100,O.currency)}),(0,U.jsxs)(`p`,{children:[`Adulto `,Ze(Number(O.adult_price),O.currency),` · Niño `,Ze(Number(O.child_price),O.currency),` · Infante `,Ze(Number(O.infant_price),O.currency),` antes de impuestos. Total con el impuesto configurado.`]})]}),(0,U.jsxs)(`label`,{className:`transfer-check`,children:[(0,U.jsx)(`input`,{name:`consent`,type:`checkbox`,required:!0,value:`accepted`}),`Acepto que gestionen estos datos para atender mi solicitud.`]}),(0,U.jsxs)(`label`,{className:`transfer-honeypot`,"aria-hidden":`true`,children:[`Web`,(0,U.jsx)(`input`,{name:`website`,tabIndex:-1,autoComplete:`off`})]}),l&&(0,U.jsx)(`p`,{role:`alert`,className:`transfer-error`,children:l}),(0,U.jsx)(`button`,{className:`transfer-primary`,disabled:d||!n||!O||k<1||k>Number(O?.available||0),children:d?`Enviando…`:`Solicitar reserva`}),(0,U.jsxs)(`p`,{children:[`Cupos orientativos hasta confirmación del operador. Horarios en America/Santo_Domingo. `,n?``:`Vista previa: envío desactivado.`]})]}):(0,U.jsx)(`p`,{children:n?`No hay salidas disponibles en este momento.`:`Configura los tours y salidas en Tours / Operaciones y activa su publicación en CMS.`})]})}var pS=[`RentalCaribe`,`RentalPremium`,`RentalDirect`,`RealEstateSearch`,`RealEstateGuided`,`RealEstateOwners`,`RealEstateVisits`,`HaircareProfessional`,`HaircareNatural`,`HaircareRoutine`,`TropicalExplorer`,`AdventureHeader`,`AdventureHero`,`AdventureRoute`,`TourSplitHero`,`TourItineraries`,`Header`,`CatalogCards`],mS={apartment:`Apartamento`,house:`Casa`,villa:`Villa`,studio:`Estudio`,land:`Terreno`,commercial:`Local comercial`,office:`Oficina`,project:`Proyecto`};function hS(e){return e.filter(e=>e.kind===`property`).flatMap(e=>(e.operation===`both`?[`buy`,`rent`]:e.operation===`rent`?[`rent`]:[`buy`]).map(t=>({id:`${e.id}:${t}`,listingId:e.id,title:e.name,description:e.description,zone:e.zone||``,city:e.city||``,address:``,kind:mS[e.category||``]||`Propiedad`,operation:t,price:Number((t===`rent`?e.rent_price:e.sale_price)||0),priceOnRequest:(t===`rent`?e.rent_price:e.sale_price)===null,currency:e.currency,rentPeriod:e.rent_period,beds:Number(e.bedrooms||0),baths:Number(e.bathrooms||0),area:Number(e.area||0),image:e.image_url||``,x:50,y:50,lat:null,lng:null,pool:!1,preferences:[]})))}function gS({type:e,component:t,props:n}){let r=lS(),[i,a]=(0,H.useState)(``);if(!r||n.dataSource===`manual`)return(0,U.jsx)(t,{...n});if(r.loading)return(0,U.jsx)(`div`,{className:`website-asset-state`,role:`status`,children:`Cargando contenido de tu CRM…`});if(r.error)return(0,U.jsxs)(`div`,{className:`website-asset-state`,role:`alert`,children:[r.error,` `,(0,U.jsx)(`button`,{onClick:r.refresh,children:`Actualizar`})]});let o=e.startsWith(`Rental`)?r.items.filter(e=>e.kind===`vehicle`&&e.operation!==`sale`):e.startsWith(`RealEstate`)?r.items.filter(e=>e.kind===`property`):e.startsWith(`Haircare`)?r.catalog.filter(e=>e.item_type===`product`):[`TropicalExplorer`,`AdventureRoute`,`TourItineraries`].includes(e)?r.catalog.filter(e=>e.item_type===`service`):[],s=Array.from(new Set(o.map(e=>e.currency||`DOP`))),c=s.includes(i)?i:s[0]||``,l=c?r.items.filter(e=>e.currency===c):r.items,u=c?r.catalog.filter(e=>(e.currency||`DOP`)===c):r.catalog,d={...n},f=r.business;c&&(d.currency=c),f&&(e===`Header`?d.brandName=f.name:d.brand=f.name,f.logo_url&&(d.logoUrl=f.logo_url));let p=u.filter(e=>e.item_type===`product`&&e.is_active&&e.crm_is_active!==!1),m=u.filter(e=>e.item_type===`service`&&e.is_active&&e.crm_is_active!==!1);return e.startsWith(`Rental`)&&(d.vehicles=l.filter(e=>e.kind===`vehicle`&&e.operation!==`sale`).map(e=>({reference:e.id,listingId:e.id,name:e.name,category:e.category||`Vehículo`,seats:Number(e.seats||1),bags:Number(e.bags||0),transmission:e.transmission===`manual`?`Manual`:`Automática`,dailyRate:Number(e.rent_price||0),priceOnRequest:e.rent_price===null,currency:e.currency,image:e.image_url||``,photo:4,description:e.description||``})),d.demoMode=`no`),e.startsWith(`RealEstate`)&&(d.properties=hS(l),d.demoMode=`no`),e.startsWith(`Haircare`)&&(d.products=p.map((e,t)=>({id:e.id,catalogId:e.id,name:e.name,description:e.description,image:e.image_override_url||e.image_url||``,currency:e.currency||`DOP`,price:Number(e.price||0),priceOnRequest:e.price===null,type:`Producto`,need:``,texture:[],size:``,line:`CATÁLOGO`,photo:4+t%4})),d.demoMode=`no`),e===`TropicalExplorer`&&(d.destinations=m.map(e=>({title:e.name,description:e.description,imageUrl:e.image_url||``,category:`Servicio / experiencia`,duration:e.price===null?`Consultar`:Ze(Number(e.price),e.currency||`DOP`)}))),e===`AdventureRoute`&&(d.stops=m.map(e=>({title:e.name,description:e.description,imageUrl:e.image_url||``,duration:e.price===null?`Consultar precio`:Ze(Number(e.price),e.currency||`DOP`)}))),e===`AdventureHero`&&(d.stops=m.slice(0,4).map(e=>({name:e.name}))),e===`TourItineraries`&&(d.items=m.map(e=>({title:e.name,description:e.description,imageUrl:e.image_url||``,imageAlt:e.name,destination:``,duration:``,price:e.price===null?`Consultar`:Ze(Number(e.price),e.currency||`DOP`)}))),e===`CatalogCards`&&(d.itemIds=r.catalog.filter(e=>e.is_active).map(e=>e.id)),(0,U.jsxs)(U.Fragment,{children:[s.length>1&&(0,U.jsxs)(`div`,{className:`crm-template-currency`,children:[(0,U.jsxs)(`label`,{children:[`Ver catálogo en `,(0,U.jsx)(`select`,{value:c,onChange:e=>a(e.target.value),children:s.map(e=>(0,U.jsx)(`option`,{children:e},e))})]}),(0,U.jsx)(`small`,{children:`Precios en su moneda original.`})]}),(0,U.jsx)(t,{...d})]})}var _S=e=>e.map(e=>({label:e,value:e})),vS={heroEyebrow:`Texto sobre la portada`,collectionEyebrow:`Etiqueta de la colección`,secondaryEyebrow:`Etiqueta secundaria`,catalogEyebrow:`Etiqueta del catálogo`,guideEyebrow:`Etiqueta de asesoría`,routineEyebrow:`Etiqueta de la rutina`,textureEyebrow:`Etiqueta de las texturas`,duoEyebrow:`Etiqueta de los dúos`,heroTitle:`Título de portada`,heroDescription:`Descripción de portada`,collectionTitle:`Título de colección`,collectionDescription:`Descripción de colección`,catalogTitle:`Título del catálogo`,guideTitle:`Título de asesoría`,guideDescription:`Descripción de asesoría`,footerText:`Texto del pie de página`,secondaryTitle:`Título secundario`,duoTitle:`Título de los dúos`,textureTitle:`Título de las texturas`,routineTitle:`Título de la rutina`,routineDescription:`Descripción de la rutina`,adviceText:`Consejo general`,adviceFooter:`Cierre del artículo`};function yS(e,t,n){return Object.fromEntries(ot.map(r=>{let i=it[r.id],a={label:r.name,defaultProps:structuredClone(i),fields:{brand:{type:`text`,label:`Marca`},brandSubtitle:{type:`text`,label:`Subtítulo de marca`},announcement:{type:`text`,label:`Franja superior`},logoUrl:{...e,label:`Logotipo (opcional)`},demoMode:{type:`radio`,label:`Aviso de catálogo de muestra`,options:[{label:`Mostrar: todavía contiene ejemplos`,value:`yes`},{label:`Ocultar: ya son mis productos`,value:`no`}]},currency:{type:`text`,label:`Símbolo de moneda (usa la moneda de tu catálogo)`},accent:{type:`text`,label:`Color principal (#hex)`},softColor:{type:`text`,label:`Color de fondo suave (#hex)`},animation:{type:`radio`,label:`Animaciones`,options:[{label:`Activadas`,value:`yes`},{label:`Desactivadas`,value:`no`}]},texts:{type:`object`,label:`Textos de las secciones`,objectFields:Object.fromEntries(Object.keys(i.texts).map(e=>[e,{type:`textarea`,label:vS[e]||e}]))},images:{type:`object`,label:`Fotografías (vacío conserva la imagen del tema)`,objectFields:Object.fromEntries([[`hero`,`Portada profesional / cabello liso`],[`curly`,`Cabello rizado / portada natural`],[`wavy`,`Cabello ondulado`],[`afro`,`Cabello afro`],[`shampoo`,`Shampoo de la colección`],[`conditioner`,`Acondicionador`],[`spray`,`Spray`],[`mask`,`Mascarilla`]].map(([t,n])=>[t,{...e,label:n}]))},products:{type:`array`,label:`Productos (vincula con el catálogo o edita la ficha)`,getItemSummary:e=>e.name||`Producto`,defaultItemProps:{id:``,name:`Nuevo producto`,type:`Shampoo`,need:`Hidratación`,texture:[...tt],price:0,size:``,photo:4,line:``,image:``,description:``,catalogId:``},arrayFields:{id:{type:`text`,label:`Referencia interna única (opcional)`},catalogId:{type:`select`,label:`Vincular a un producto del catálogo CMS (actualiza nombre, imagen, precio y descripción)`,options:[{label:`Ficha manual / de muestra`,value:``},...t.filter(e=>e.item_type===`product`&&e.is_active&&e.crm_is_active!==!1).map(e=>({label:e.name,value:e.id}))]},name:{type:`text`,label:`Nombre (si es manual)`},description:{type:`textarea`,label:`Descripción (si es manual)`},image:{...e,label:`Imagen (si es manual; vacío usa la del tema)`},price:{type:`number`,label:`Precio (si es manual)`,min:0},size:{type:`text`,label:`Tamaño / presentación`},line:{type:`text`,label:`Línea o colección`},type:{type:`select`,label:`Tipo de producto`,options:_S(at)},need:{type:`select`,label:`Necesidad`,options:_S(rt)},texture:{type:`custom`,label:`Tipos de cabello`,render:({value:e=[],onChange:t,readOnly:n})=>(0,U.jsx)(`div`,{children:tt.map(r=>(0,U.jsxs)(`label`,{style:{display:`block`},children:[(0,U.jsx)(`input`,{type:`checkbox`,checked:(e||[]).includes(r),disabled:n,onChange:()=>t((e||[]).includes(r)?e.filter(e=>e!==r):[...e||[],r])}),` `,r]},r))})},photo:{type:`select`,label:`Imagen del tema como alternativa`,options:[{label:`Shampoo`,value:4},{label:`Acondicionador`,value:5},{label:`Spray`,value:6},{label:`Mascarilla`,value:7}]}}},guides:{type:`array`,label:`Artículos y consejos`,getItemSummary:e=>e.title||`Artículo`,defaultItemProps:{title:`Nuevo consejo`,body:``},arrayFields:{title:{type:`text`,label:`Título`},body:{type:`textarea`,label:`Contenido`}}}},render:e=>{let a={...i,...e},o=new Set,s=(Array.isArray(a.products)?a.products:[]).flatMap((e,n)=>{if(!e||typeof e!=`object`)return[];let r=e.catalogId?t.find(t=>t.id===e.catalogId&&t.item_type===`product`&&t.is_active&&t.crm_is_active!==!1):void 0;if(e.catalogId&&!r)return[];let i=e.catalogId||e.id||`product-${n}`;for(;o.has(i);)i+=`-${n}`;return o.add(i),[{...e,id:i,name:r?.name??e.name,description:r?.description??e.description,image:r?r.image_override_url||r.image_url||`/previews/haircare/placeholder.svg`:e.image,currency:r?.currency||e.currency,priceOnRequest:!!(r&&r.price===null),price:Number.isFinite(Number(r?r.price:e.price))?Math.max(0,Number(r?r.price:e.price)):0,photo:[4,5,6,7].includes(Number(e.photo))?Number(e.photo):4,texture:Array.isArray(e.texture)?e.texture:[]}]});return(0,U.jsx)(ct,{concept:r.id,motion:a.animation!==`no`,settings:{...a,products:s,texts:{...i.texts,...a.texts},images:{...i.images,...a.images},guides:Array.isArray(a.guides)?a.guides:[]},publicContext:n})}};return[r.type,a]}))}var bS=[{title:`Análisis de la zona`,description:`El primer paso es conocer tu propiedad y escuchar tus objetivos.`,items:`Características y estado del inmueble
Contexto de la zona
Revisión con un asesor`},{title:`Presentación del inmueble`,description:`Preparamos una presentación que permita conocer cada espacio con claridad.`,items:`Selección de fotografías
Ficha y descripción de la propiedad
Material para compartir con interesados`},{title:`Seguimiento de consultas`,description:`Organizamos las conversaciones y las solicitudes de visita en un mismo proceso.`,items:`Consultas recibidas
Coordinación de visitas
Actualizaciones del proceso`}],xS=[{id:`corales`,title:`Apartamento en Los Corales`,zone:`Los Corales`,kind:`Apartamento`,operation:`buy`,price:285e3,beds:2,baths:2,area:108,pool:!0,image:`https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85`,x:79,y:24},{id:`cocotal`,title:`Villa con jardín en Cocotal`,zone:`Cocotal`,kind:`Villa`,operation:`buy`,price:42e4,beds:3,baths:3,area:185,pool:!0,image:`https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=85`,x:39,y:49},{id:`vista`,title:`Estudio en Vista Cana`,zone:`Vista Cana`,kind:`Estudio`,operation:`buy`,price:195e3,beds:1,baths:1,area:65,pool:!1,image:`https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85`,x:27,y:79},{id:`bavaro`,title:`Apartamento en Bávaro`,zone:`Bávaro`,kind:`Apartamento`,operation:`buy`,price:32e4,beds:2,baths:2,area:120,pool:!0,image:`https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=85`,x:20,y:22},{id:`capcana`,title:`Residencia en Cap Cana`,zone:`Cap Cana`,kind:`Villa`,operation:`buy`,price:61e4,beds:4,baths:4,area:280,pool:!0,image:`https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=85`,x:72,y:85},{id:`proyecto`,title:`Residencias del Caribe`,zone:`Los Corales`,kind:`Proyecto`,operation:`buy`,price:245e3,beds:2,baths:2,area:96,pool:!0,image:`https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85`,x:65,y:36},{id:`rent-corales`,title:`Apartamento cerca de la playa`,zone:`Los Corales`,kind:`Apartamento`,operation:`rent`,price:1400,beds:2,baths:2,area:95,pool:!0,image:`https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85`,x:68,y:28},{id:`rent-cocotal`,title:`Villa amueblada en Cocotal`,zone:`Cocotal`,kind:`Villa`,operation:`rent`,price:2800,beds:3,baths:3,area:195,pool:!0,image:`https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=85`,x:44,y:59}],SS={query:``,operation:`buy`,kind:``,maxPrice:``,beds:``,pool:!1,favoritesOnly:!1,sort:`relevance`};function CS(e,t,n,r=`Punta Cana`){let i=e=>e.normalize(`NFD`).replace(/[\u0300-\u036f]/g,``).toLowerCase().trim(),a=i(t.query),o=e.filter(e=>e.operation===t.operation&&(!a||i(`${e.title} ${e.zone} ${e.city||r} ${e.address||``}`).includes(a))&&(!t.kind||e.kind===t.kind)&&(!t.maxPrice||e.price<=Number(t.maxPrice))&&(!t.beds||e.beds>=Number(t.beds))&&(!t.pool||e.pool)&&(!t.favoritesOnly||n.includes(e.id)));return t.sort===`price-asc`&&o.sort((e,t)=>e.price-t.price),t.sort===`price-desc`&&o.sort((e,t)=>t.price-e.price),o}var wS=e=>e.priceOnRequest?`Consultar precio`:`${new Intl.NumberFormat(`es-DO`,{style:`currency`,currency:e.currency||`USD`}).format(e.price)}${e.operation===`rent`?` / ${{day:`día`,week:`semana`,month:`mes`,year:`año`}[e.rentPeriod||`month`]||`período`}`:``}`,TS=[{id:`garden`,label:`Jardín`,symbol:`❋`},{id:`nearBeach`,label:`Cerca del mar`,symbol:`≈`},{id:`homeOffice`,label:`Home office`,symbol:`⌘`}],ES={corales:[`nearBeach`,`homeOffice`],cocotal:[`garden`,`homeOffice`],vista:[`homeOffice`],bavaro:[`nearBeach`],capcana:[`garden`,`nearBeach`,`homeOffice`],proyecto:[`nearBeach`]},DS=xS.filter(e=>e.operation===`buy`).map(e=>({...e,preferences:ES[e.id]||[]}));function OS(e,t,n,r=DS){return r.filter(r=>(!e||r.kind===e)&&Number.isFinite(t)&&r.price<=t&&n.every(e=>r.preferences.includes(e)))}function kS(e=new Date){let t=new Intl.DateTimeFormat(`en-CA`,{timeZone:`America/Santo_Domingo`,year:`numeric`,month:`2-digit`,day:`2-digit`}).formatToParts(e),n=e=>t.find(t=>t.type===e)?.value;return`${n(`year`)}-${n(`month`)}-${n(`day`)}`}function AS(e,t){let n=new Date(`${e}T12:00:00Z`);return n.setUTCDate(n.getUTCDate()+t),n.toISOString().slice(0,10)}function jS(e=0,t=kS()){let n=AS(t,-((new Date(`${t}T12:00:00Z`).getUTCDay()+6)%7)+e*7);return Array.from({length:7},(e,t)=>AS(n,t))}function MS(e,t={weekday:`short`,day:`numeric`,month:`short`}){return new Intl.DateTimeFormat(`es-DO`,{...t,timeZone:`America/Santo_Domingo`}).format(new Date(`${e}T12:00:00Z`))}var NS=[{key:`friday-villa`,reference:`capcana`,day:4,minutes:540},{key:`friday-apartment`,reference:`corales`,day:4,minutes:720},{key:`saturday-villa`,reference:`cocotal`,day:5,minutes:630},{key:`saturday-studio`,reference:`vista`,day:5,minutes:780},{key:`sunday-apartment`,reference:`bavaro`,day:6,minutes:660}],PS=e=>`${String(Math.floor(e/60)).padStart(2,`0`)}:${String(e%60).padStart(2,`0`)}`;function FS(e=0,t=kS(),n=DS,r=NS){let i=jS(e,t);return r.filter(e=>n.some(t=>t.id===e.reference)&&[4,5,6].includes(Number(e.day))&&e.minutes>=540&&e.minutes<=780).map(e=>({...e,day:Number(e.day),minutes:Number(e.minutes),id:`${i[e.day]}-${e.key}`,date:i[e.day],duration:60,property:n.find(t=>t.id===e.reference)})).sort((e,t)=>e.day-t.day||e.minutes-t.minutes)}var IS={submissionStatus:``,contactFormId:``,publicMode:!1,brand:`HABITA`,brandSubtitle:`REAL ESTATE · PUNTA CANA`,heading:``,description:``,eyebrow:``,heroImage:``,accent:`#454781`,animation:`yes`,demoMode:`yes`,footer:`HABITA · Consulta disponibilidad con nuestro equipo.`,ownerPlan:bS,properties:DS,slots:NS},LS=(0,H.createContext)(IS),RS=()=>(0,H.useContext)(LS);function zS({onClick:e}){let t=RS();return(0,U.jsxs)(`button`,{type:`button`,className:`rc-brand`,onClick:e||(()=>window.scrollTo({top:0,behavior:`instant`})),children:[t.brand,(0,U.jsx)(`span`,{children:t.brandSubtitle})]})}function BS(){let e=RS();return e.publicMode||e.demoMode===`no`?(0,U.jsx)(`footer`,{className:`rc-demo-footer`,children:e.footer}):(0,U.jsx)(`footer`,{className:`rc-demo-footer`,children:`HABITA · Propuesta de diseño. Propiedades, fotografías y horarios de muestra. Los formularios no envían datos al CRM.`})}function VS({title:e=`Habla con un asesor`,property:t}){let n=RS(),[r,i]=(0,H.useState)(!1);return(0,U.jsxs)(`form`,{"data-listing-id":t?.listingId,className:`rc-inquiry`,onSubmit:e=>{e.preventDefault(),i(!0)},children:[(0,U.jsx)(`h3`,{children:e}),(0,U.jsxs)(`label`,{children:[`Nombre`,(0,U.jsx)(`input`,{name:`name`,autoComplete:`name`,required:!0})]}),(0,U.jsxs)(`label`,{children:[`Correo electrónico`,(0,U.jsx)(`input`,{name:`email`,type:`email`,autoComplete:`email`,required:!0})]}),(0,U.jsxs)(`label`,{children:[`Mensaje`,(0,U.jsx)(`textarea`,{name:`message`,rows:3,defaultValue:t?`Me interesa ${t.title}, en ${t.zone}.`:``,required:!0})]}),(0,U.jsxs)(`label`,{children:[(0,U.jsx)(`input`,{type:`checkbox`,name:`consent`,value:`accepted`,required:!0}),`Acepto que guarden mis datos para atender esta consulta.`]}),(0,U.jsx)(`button`,{type:`submit`,className:`rc-primary`,children:n.publicMode?`Enviar consulta ↗`:`Preparar consulta de muestra ↗`}),n.submissionStatus&&(0,U.jsx)(`p`,{className:`rc-notice`,role:`status`,children:n.submissionStatus}),r&&(0,U.jsx)(`p`,{className:`rc-notice`,role:`status`,children:`Consulta de demostración preparada. No se ha enviado ningún mensaje.`})]})}function HS({property:e,onClose:t}){let n=(0,H.useRef)(null);return(0,H.useEffect)(()=>{e&&!n.current?.open&&n.current?.showModal(),!e&&n.current?.open&&n.current.close()},[e]),(0,U.jsxs)(`dialog`,{className:`rc-property-dialog`,ref:n,onClose:t,children:[(0,U.jsx)(`button`,{className:`rc-close`,"aria-label":`Cerrar ficha`,onClick:()=>n.current?.close(),children:`×`}),e&&(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(`img`,{src:e.image,alt:e.title}),(0,U.jsxs)(`div`,{className:`rc-property-dialog-body`,children:[(0,U.jsxs)(`p`,{className:`rc-eyebrow`,children:[e.zone,e.listingId?``:` · PROPIEDAD DE MUESTRA`]}),(0,U.jsx)(`h2`,{children:e.title}),(0,U.jsx)(`strong`,{children:wS(e)}),(0,U.jsxs)(`p`,{children:[e.beds,` habitaciones · `,e.baths,` baños · `,e.area,` m²`]}),(0,U.jsx)(VS,{property:e,title:`Solicitar información`},e.id)]})]})]})}function US(){let e=RS(),t=e.properties,n=t.some(e=>e.kind===`Villa`)?`Villa`:t[0]?.kind||``,r=t.some(e=>e.preferences?.includes(`garden`))?[`garden`]:[],[i,a]=(0,H.useState)(1),[o,s]=(0,H.useState)(n),[c,l]=(0,H.useState)(65e4),[u,d]=(0,H.useState)(r),[f,p]=(0,H.useState)([]),[m,h]=(0,H.useState)(!1),[g,_]=(0,H.useState)(null),v=OS(o,c,u,t),y=m?t.filter(e=>f.includes(e.id)):v;function b(){a(1),s(n),l(65e4),d(r),h(!1)}function x(e){d(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e]),h(!1)}function S(e){p(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])}return(0,U.jsxs)(`div`,{className:`rc-site rc-guided`,children:[(0,U.jsxs)(`header`,{className:`rc-header`,children:[(0,U.jsx)(zS,{onClick:b}),(0,U.jsxs)(`nav`,{"aria-label":`Navegación de búsqueda guiada`,children:[(0,U.jsx)(`button`,{onClick:()=>{a(1),h(!1)},children:`Encontrar hogar`}),(0,U.jsxs)(`button`,{onClick:()=>{h(!0),a(3)},children:[`Mi selección `,(0,U.jsx)(`span`,{children:f.length})]}),(0,U.jsx)(`a`,{href:`#guided-advisor`,children:`Asesoría`})]})]}),(0,U.jsxs)(`main`,{className:`rc-guided-main`,children:[(0,U.jsxs)(`section`,{className:`rc-guided-intro`,children:[(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`p`,{className:`rc-eyebrow`,children:e.eyebrow||`TU PRÓXIMO HOGAR, A TU MANERA`}),(0,U.jsx)(`h1`,{children:e.heading||(0,U.jsxs)(U.Fragment,{children:[`Cuéntanos cómo`,(0,U.jsx)(`br`,{}),`quieres vivir`]})}),(0,U.jsx)(`p`,{children:e.description||`Te ayudamos a descubrir espacios que se adaptan a lo que buscas. Un paso a la vez.`})]}),(0,U.jsx)(`img`,{src:e.heroImage||t[4]?.image||t[0]?.image,alt:`Residencia de inspiración en el Caribe`})]}),(0,U.jsx)(`nav`,{className:`rc-stepper`,"aria-label":`Pasos de la búsqueda`,children:[`Tu espacio`,`Tu presupuesto`,`Tu selección`].map((e,t)=>(0,U.jsxs)(`button`,{"aria-current":i===t+1?`step`:void 0,onClick:()=>{a(t+1),h(!1)},children:[(0,U.jsx)(`span`,{children:String(t+1).padStart(2,`0`)}),e]},e))}),(0,U.jsxs)(`div`,{className:`rc-guided-workspace`,children:[(0,U.jsxs)(`section`,{className:`rc-question-panel`,"aria-label":`Preferencias del comprador`,children:[i===1&&(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(`p`,{className:`rc-eyebrow`,children:`01 · TU ESPACIO`}),(0,U.jsx)(`h2`,{children:`¿Qué tipo de hogar buscas?`}),(0,U.jsx)(`div`,{className:`rc-home-types`,children:[{name:`Apartamento`,icon:`▤`},{name:`Villa`,icon:`⌂`},{name:`Estudio`,icon:`▧`}].map(e=>(0,U.jsxs)(`button`,{"aria-pressed":o===e.name,onClick:()=>{s(e.name),h(!1)},children:[(0,U.jsx)(`span`,{"aria-hidden":`true`,children:e.icon}),e.name,o===e.name&&(0,U.jsx)(`b`,{"aria-hidden":`true`,children:`✓`})]},e.name))}),(0,U.jsx)(`button`,{className:`rc-text-link`,onClick:()=>s(``),children:`No tengo preferencia de tipo`}),(0,U.jsx)(`h3`,{children:`¿Qué es importante para ti?`}),(0,U.jsx)(`p`,{className:`rc-muted`,children:`Puedes elegir varias opciones o explorar sin preferencias.`}),(0,U.jsx)(`div`,{className:`rc-preference-chips`,children:TS.map(e=>(0,U.jsxs)(`button`,{"aria-pressed":u.includes(e.id),onClick:()=>x(e.id),children:[(0,U.jsx)(`span`,{"aria-hidden":`true`,children:e.symbol}),e.label]},e.id))}),(0,U.jsx)(`button`,{className:`rc-primary`,onClick:()=>a(2),children:`Continuar con el presupuesto →`})]}),i===2&&(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(`p`,{className:`rc-eyebrow`,children:`02 · TU PRESUPUESTO`}),(0,U.jsx)(`h2`,{children:`Un rango que vaya contigo.`}),(0,U.jsx)(`p`,{className:`rc-muted`,children:`Indica el precio máximo de las propiedades que quieres ver.`}),(0,U.jsxs)(`label`,{className:`rc-budget-label`,children:[`Presupuesto máximo en `,e.properties[0]?.currency||`USD`,(0,U.jsxs)(`strong`,{children:[e.properties[0]?.currency||`USD`,` `,c.toLocaleString(`en-US`)]}),(0,U.jsx)(`input`,{type:`range`,min:15e4,max:15e5,step:25e3,value:c,onChange:e=>l(Number(e.target.value))})]}),(0,U.jsxs)(`div`,{className:`rc-range-labels`,children:[(0,U.jsxs)(`span`,{children:[e.properties[0]?.currency||`USD`,` 150,000`]}),(0,U.jsxs)(`span`,{children:[e.properties[0]?.currency||`USD`,` 1,500,000`]})]}),(0,U.jsx)(`div`,{className:`rc-budget-options`,children:[3e5,45e4,65e4,1e6].map(t=>(0,U.jsxs)(`button`,{"aria-pressed":c===t,onClick:()=>l(t),children:[e.properties[0]?.currency||`USD`,` `,t.toLocaleString(`en-US`)]},t))}),(0,U.jsxs)(`p`,{className:`rc-match-note`,role:`status`,children:[v.length,` `,v.length===1?`propiedad coincide`:`propiedades coinciden`,` con tus preferencias actuales.`]}),(0,U.jsxs)(`div`,{className:`rc-panel-actions`,children:[(0,U.jsx)(`button`,{className:`rc-text-link`,onClick:()=>a(1),children:`← Volver`}),(0,U.jsx)(`button`,{className:`rc-primary`,onClick:()=>a(3),children:`Ver mi selección →`})]})]}),i===3&&(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(`p`,{className:`rc-eyebrow`,children:`03 · TU SELECCIÓN`}),(0,U.jsx)(`h2`,{children:m?`Tus espacios guardados.`:`Un paso más cerca de casa.`}),(0,U.jsx)(`p`,{className:`rc-muted`,children:m?`Aquí encontrarás las propiedades que has guardado durante esta visita.`:`Esta selección usa el tipo, las preferencias y el presupuesto que elegiste.`}),(0,U.jsxs)(`p`,{className:`rc-big-result`,role:`status`,children:[y.length,(0,U.jsx)(`span`,{children:y.length===1?`propiedad de muestra`:`propiedades de muestra`})]}),(0,U.jsxs)(`div`,{className:`rc-panel-actions`,children:[(0,U.jsx)(`button`,{className:`rc-text-link`,onClick:()=>{a(1),h(!1)},children:`Editar preferencias`}),(0,U.jsx)(`a`,{className:`rc-primary`,href:`#guided-results`,children:`Explorar selección ↓`})]})]})]}),(0,U.jsxs)(`aside`,{className:`rc-search-summary`,children:[(0,U.jsx)(`p`,{className:`rc-eyebrow`,children:`TU BÚSQUEDA`}),(0,U.jsxs)(`h2`,{children:[`El espacio ideal`,(0,U.jsx)(`br`,{}),`empieza por ti.`]}),(0,U.jsxs)(`dl`,{children:[(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`dt`,{children:`Tipo de hogar`}),(0,U.jsx)(`dd`,{children:o||`Sin preferencia`})]}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`dt`,{children:`Presupuesto máximo`}),(0,U.jsxs)(`dd`,{children:[e.properties[0]?.currency||`USD`,` `,c.toLocaleString(`en-US`)]})]}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`dt`,{children:`Preferencias`}),(0,U.jsx)(`dd`,{children:u.length?u.map(e=>TS.find(t=>t.id===e)?.label).join(` · `):`Abierto a explorar`})]})]}),(0,U.jsx)(`img`,{src:v[0]?.image||e.heroImage||t[0]?.image,alt:`Propiedad de muestra`}),(0,U.jsx)(`small`,{children:`Opciones de demostración. Consulta disponibilidad con un asesor.`})]})]}),(0,U.jsxs)(`section`,{className:`rc-guided-results`,id:`guided-results`,children:[(0,U.jsxs)(`header`,{children:[(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`p`,{className:`rc-eyebrow`,children:`ESPACIOS PARA DESCUBRIR`}),(0,U.jsx)(`h2`,{children:m?`Tu selección guardada`:`Una selección para ti`})]}),(0,U.jsx)(`button`,{className:`rc-text-link`,onClick:()=>{a(1),h(!1)},children:`Ajustar búsqueda ↗`})]}),y.length===0?(0,U.jsxs)(`div`,{className:`rc-empty`,children:[(0,U.jsx)(`h3`,{children:m?`Aún no has guardado propiedades.`:`Probemos otra combinación.`}),(0,U.jsx)(`p`,{children:m?`Pulsa Guardar en cualquier propiedad para añadirla aquí.`:`Amplía el presupuesto o elimina alguna preferencia para ver más opciones.`}),(0,U.jsx)(`button`,{className:`rc-primary`,onClick:()=>{d([]),s(``),l(15e5),h(!1)},children:`Explorar más opciones →`})]}):y.map(e=>(0,U.jsxs)(`article`,{className:`rc-guided-property`,children:[(0,U.jsxs)(`button`,{className:`rc-guided-property-main`,onClick:()=>_(e),children:[(0,U.jsx)(`img`,{src:e.image,alt:e.title,loading:`lazy`}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`h3`,{children:e.title}),(0,U.jsxs)(`p`,{children:[e.zone,` · Punta Cana`]}),(0,U.jsx)(`strong`,{children:wS(e)}),(0,U.jsxs)(`small`,{children:[e.beds,` habitaciones · `,e.area,` m²`]})]}),(0,U.jsx)(`span`,{"aria-hidden":`true`,children:`↗`})]}),(0,U.jsx)(`button`,{className:`rc-save-button`,"aria-pressed":f.includes(e.id),onClick:()=>S(e.id),children:f.includes(e.id)?`✓ Guardada`:`♡ Guardar`})]},e.id))]}),(0,U.jsxs)(`section`,{className:`rc-advisor`,id:`guided-advisor`,children:[(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`p`,{className:`rc-eyebrow`,children:`CUANDO NECESITES UNA MANO`}),(0,U.jsx)(`h2`,{children:`Un asesor te acompaña.`}),(0,U.jsx)(`p`,{children:`Conversemos sobre lo que hace que un espacio se sienta tuyo.`})]}),(0,U.jsx)(VS,{})]})]}),(0,U.jsx)(BS,{}),(0,U.jsx)(HS,{property:g,onClose:()=>_(null)})]})}function WS(){let e=RS(),t=e.properties,n=e.ownerPlan,[r,i]=(0,H.useState)(0),a=n[r]||n[0],[o,s]=(0,H.useState)(0),[c,l]=(0,H.useState)(null),u=t;return(0,U.jsxs)(`div`,{className:`rc-site rc-owners`,id:`owner-top`,children:[(0,U.jsxs)(`header`,{className:`rc-header`,children:[(0,U.jsx)(zS,{}),(0,U.jsxs)(`nav`,{"aria-label":`Navegación para propietarios`,children:[(0,U.jsx)(`a`,{href:`#owner-request`,children:`Vender`}),(0,U.jsx)(`a`,{href:`#owner-method`,children:`Nuestro método`}),(0,U.jsx)(`a`,{href:`#owner-team`,children:`Equipo`})]}),(0,U.jsx)(`a`,{className:`rc-outline`,href:`#owner-request`,children:`Hablemos de tu propiedad ↗`})]}),(0,U.jsxs)(`main`,{children:[(0,U.jsxs)(`section`,{className:`rc-owner-intro`,children:[(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`p`,{className:`rc-eyebrow`,children:e.eyebrow||`PARA PROPIETARIOS`}),(0,U.jsx)(`h1`,{children:e.heading||(0,U.jsxs)(U.Fragment,{children:[`Tu propiedad,`,(0,U.jsx)(`br`,{}),`bien representada.`]})}),(0,U.jsx)(`p`,{children:e.description||`Una mirada profesional para presentar tu inmueble, conectar con interesados y acompañarte en cada paso.`}),(0,U.jsx)(`a`,{className:`rc-text-link`,href:`#owner-method`,children:`Conoce cómo trabajamos ↓`})]}),(0,U.jsx)(`img`,{src:e.heroImage||u[o]?.image||u[0]?.image,alt:`Ejemplo de presentación de una propiedad`})]}),(0,U.jsxs)(`section`,{className:`rc-owner-request`,id:`owner-request`,children:[(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`p`,{className:`rc-eyebrow`,children:`EMPECEMOS CON UNA CONVERSACIÓN`}),(0,U.jsx)(`h2`,{children:`Solicita una valoración profesional`}),(0,U.jsx)(`p`,{children:`Cuéntanos sobre tu inmueble. Un asesor revisaría sus características antes de orientarte.`})]}),(0,U.jsxs)(`form`,{onSubmit:e=>{e.preventDefault();let t=new FormData(e.currentTarget);l({address:String(t.get(`address`)||``).trim(),kind:String(t.get(`kind`)||``)})},children:[(0,U.jsxs)(`label`,{children:[`Dirección o sector`,(0,U.jsx)(`input`,{name:`address`,autoComplete:`street-address`,placeholder:`Ej. Cocotal, Punta Cana`,minLength:5,required:!0})]}),(0,U.jsxs)(`label`,{children:[`Tipo de inmueble`,(0,U.jsxs)(`select`,{name:`kind`,defaultValue:``,required:!0,children:[(0,U.jsx)(`option`,{value:``,disabled:!0,children:`Selecciona`}),(0,U.jsx)(`option`,{children:`Villa`}),(0,U.jsx)(`option`,{children:`Apartamento`}),(0,U.jsx)(`option`,{children:`Estudio`}),(0,U.jsx)(`option`,{children:`Terreno`}),(0,U.jsx)(`option`,{children:`Local comercial`})]})]}),(0,U.jsxs)(`label`,{children:[`Tu nombre`,(0,U.jsx)(`input`,{name:`name`,autoComplete:`name`,required:!0})]}),(0,U.jsxs)(`label`,{children:[`Tu correo`,(0,U.jsx)(`input`,{name:`email`,type:`email`,autoComplete:`email`,placeholder:`tu@correo.com`,required:!0})]}),(0,U.jsx)(`button`,{className:`rc-primary`,type:`submit`,children:`Solicitar asesoría ↗`}),(0,U.jsx)(`p`,{className:`rc-notice`,role:`status`,children:e.submissionStatus})]}),(0,U.jsx)(`small`,{children:`La valoración requiere una revisión profesional; esta página no calcula un precio automático.`}),c&&(0,U.jsxs)(`div`,{className:`rc-owner-success`,role:`status`,children:[(0,U.jsx)(`strong`,{children:`Solicitud de ejemplo preparada`}),(0,U.jsxs)(`p`,{children:[c.kind,` · `,c.address,`. En esta demostración no se envían correos ni se registra información en el CRM.`]}),(0,U.jsx)(`button`,{onClick:()=>l(null),children:`Seguir editando`})]})]}),(0,U.jsxs)(`section`,{className:`rc-owner-dossier`,id:`owner-method`,children:[(0,U.jsxs)(`div`,{className:`rc-owner-gallery`,children:[(0,U.jsx)(`img`,{src:u[o]?.image||u[0]?.image,alt:`Fotografía de muestra: ${u[o]?.title||``}`}),(0,U.jsx)(`div`,{children:u.map((e,t)=>(0,U.jsx)(`button`,{"aria-label":`Ver fotografía ${t+1}`,"aria-pressed":o===t,onClick:()=>s(t),children:(0,U.jsx)(`img`,{src:e.image,alt:``,loading:`lazy`})},e.id))}),(0,U.jsx)(`span`,{children:`Una presentación cuidada, desde el primer vistazo.`})]}),(0,U.jsxs)(`div`,{className:`rc-owner-plan`,children:[(0,U.jsx)(`p`,{className:`rc-eyebrow`,children:`PLAN DE VENTA`}),(0,U.jsxs)(`h2`,{children:[`Una presentación`,(0,U.jsx)(`br`,{}),`que marca la diferencia.`]}),(0,U.jsx)(`div`,{className:`rc-plan-tabs`,role:`tablist`,"aria-label":`Etapas del plan`,children:n.map((e,t)=>(0,U.jsxs)(`button`,{role:`tab`,id:`owner-tab-${t}`,"aria-selected":r===t,"aria-controls":`owner-plan-content`,onClick:()=>i(t),children:[String(t+1).padStart(2,`0`),(0,U.jsx)(`span`,{children:e.title})]},e.title))}),(0,U.jsxs)(`div`,{id:`owner-plan-content`,role:`tabpanel`,"aria-labelledby":`owner-tab-${r}`,children:[(0,U.jsx)(`h3`,{children:a?.title||``}),(0,U.jsx)(`p`,{children:a?.description||``}),(0,U.jsx)(`ul`,{children:(a?.items||``).split(`
`).filter(Boolean).map(e=>(0,U.jsx)(`li`,{children:e},e))})]}),(0,U.jsx)(`a`,{href:`#owner-request`,className:`rc-text-link`,children:`Quiero conocer el plan para mi propiedad ↗`})]})]}),(0,U.jsxs)(`section`,{className:`rc-owner-process`,children:[(0,U.jsx)(`p`,{className:`rc-eyebrow`,children:`NUESTRO PROCESO`}),(0,U.jsx)(`div`,{children:[`Conocemos tu propiedad`,`Preparamos su presentación`,`Coordinamos las visitas`].map((e,t)=>(0,U.jsxs)(`article`,{children:[(0,U.jsx)(`span`,{children:String(t+1).padStart(2,`0`)}),(0,U.jsx)(`h3`,{children:e}),(0,U.jsx)(`p`,{children:[`Escuchamos tus objetivos y revisamos las características del inmueble.`,`Organizamos imágenes, información y una ficha para tus interesados.`,`Damos seguimiento a las consultas y a las solicitudes de visita.`][t]})]},e))})]}),(0,U.jsxs)(`section`,{className:`rc-owner-team`,id:`owner-team`,children:[(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`p`,{className:`rc-eyebrow`,children:`EQUIPO HABITA`}),(0,U.jsxs)(`h2`,{children:[`Tu próximo paso,`,(0,U.jsx)(`br`,{}),`con acompañamiento.`]}),(0,U.jsx)(`p`,{children:`Una conversación directa para entender qué necesitas y cómo te gustaría avanzar.`})]}),(0,U.jsx)(`a`,{className:`rc-primary`,href:`#owner-request`,children:`Solicitar contacto →`})]})]}),(0,U.jsx)(BS,{})]})}function GS(){let e=RS(),t=e.properties,[n,r]=(0,H.useState)(0),[i,a]=(0,H.useState)(``),[o,s]=(0,H.useState)(!1),[c,l]=(0,H.useState)([]),[u,d]=(0,H.useState)(`all`),[f,p]=(0,H.useState)(null),[m,h]=(0,H.useState)(``),g=jS(n),_=FS(n,void 0,t,e.slots),v=_.filter(e=>(!o||c.includes(e.id))&&(u===`all`||e.day===Number(u))),y=v.find(e=>e.id===i)||v.find(e=>e.key===`saturday-villa`)||v[0];function b(e){a(e.id),h(``)}function x(e){r(t=>Math.max(0,t+e)),h(``)}return(0,U.jsxs)(`div`,{className:`rc-site rc-visits`,children:[(0,U.jsxs)(`header`,{className:`rc-header`,children:[(0,U.jsx)(zS,{}),(0,U.jsxs)(`nav`,{"aria-label":`Navegación de visitas`,children:[(0,U.jsx)(`a`,{href:`#visit-properties`,children:`Propiedades`}),(0,U.jsx)(`button`,{"aria-pressed":!o,onClick:()=>s(!1),children:`Visitas abiertas`}),(0,U.jsxs)(`button`,{"aria-pressed":o,onClick:()=>s(e=>!e),children:[`Mi agenda `,(0,U.jsx)(`span`,{children:c.length})]})]})]}),(0,U.jsxs)(`main`,{className:`rc-visits-main`,children:[(0,U.jsxs)(`section`,{className:`rc-visits-intro`,children:[(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`p`,{className:`rc-eyebrow`,children:e.eyebrow||`CONOCE TU PRÓXIMO ESPACIO`}),(0,U.jsx)(`h1`,{children:e.heading||(0,U.jsxs)(U.Fragment,{children:[`Tu próximo hogar`,(0,U.jsx)(`br`,{}),`se conoce en persona.`]})}),(0,U.jsx)(`p`,{children:e.description||`Recorre, descubre y siente cada espacio. Explora las visitas de muestra y elige el horario que prefieras.`})]}),(0,U.jsx)(`img`,{src:e.heroImage||_[2]?.property.image||t[0]?.image,alt:`Villa de inspiración para una visita`})]}),(0,U.jsxs)(`section`,{className:`rc-visit-planner`,"aria-label":`Planificador de visitas`,children:[(0,U.jsxs)(`div`,{className:`rc-calendar-top`,children:[(0,U.jsxs)(`div`,{className:`rc-week-navigation`,children:[(0,U.jsx)(`button`,{disabled:n===0,"aria-label":`Semana anterior`,onClick:()=>x(-1),children:`←`}),(0,U.jsxs)(`h2`,{children:[MS(g[0],{day:`numeric`,month:`short`}),` — `,MS(g[6],{day:`numeric`,month:`short`})]}),(0,U.jsx)(`button`,{"aria-label":`Semana siguiente`,onClick:()=>x(1),children:`→`})]}),(0,U.jsxs)(`label`,{children:[`Mostrar`,(0,U.jsxs)(`select`,{value:u,onChange:e=>d(e.target.value),children:[(0,U.jsx)(`option`,{value:`all`,children:`Todo el fin de semana`}),(0,U.jsx)(`option`,{value:`4`,children:`Viernes`}),(0,U.jsx)(`option`,{value:`5`,children:`Sábado`}),(0,U.jsx)(`option`,{value:`6`,children:`Domingo`})]})]})]}),(0,U.jsxs)(`div`,{className:`rc-calendar-caption`,children:[(0,U.jsx)(`span`,{children:o?e.publicMode?`Tus solicitudes`:`Tus solicitudes de demostración`:e.publicMode?`Horarios para solicitar visita`:`Visitas abiertas · horarios de muestra`}),(0,U.jsxs)(`span`,{children:[v.length,` `,v.length===1?`visita`:`visitas`]})]}),(0,U.jsx)(`div`,{className:`rc-calendar-scroll`,children:(0,U.jsxs)(`div`,{className:`rc-week-calendar`,children:[(0,U.jsxs)(`div`,{className:`rc-calendar-days`,children:[(0,U.jsx)(`span`,{children:`Hora`}),[4,5,6].map(e=>(0,U.jsx)(`strong`,{children:MS(g[e],{weekday:`short`,day:`numeric`})},e))]}),(0,U.jsxs)(`div`,{className:`rc-calendar-grid`,children:[(0,U.jsx)(`div`,{className:`rc-calendar-times`,children:[9,10,11,12,13,14].map(e=>(0,U.jsx)(`span`,{style:{top:`${(e-9)*80}px`},children:PS(e*60)},e))}),[4,5,6].map(e=>(0,U.jsx)(`div`,{className:`rc-calendar-day`,children:v.filter(t=>t.day===e).map(e=>(0,U.jsxs)(`button`,{className:`rc-visit-event${y?.id===e.id?` rc-visit-event-selected`:``}`,style:{top:`${(e.minutes-540)/60*80}px`,height:`${e.duration/60*80-7}px`},onClick:()=>b(e),"aria-pressed":y?.id===e.id,"aria-label":`${e.property.title}, ${MS(e.date)}, ${PS(e.minutes)}`,children:[(0,U.jsx)(`img`,{src:e.property.image,alt:``}),(0,U.jsxs)(`span`,{children:[(0,U.jsx)(`b`,{children:e.property.title}),(0,U.jsxs)(`small`,{children:[PS(e.minutes),`–`,PS(e.minutes+e.duration)]}),c.includes(e.id)&&(0,U.jsx)(`em`,{children:`Solicitud de ejemplo`})]})]},e.id))},e))]})]})}),v.length===0&&(0,U.jsxs)(`div`,{className:`rc-empty`,children:[(0,U.jsx)(`h3`,{children:o?`Tu agenda está por empezar.`:`No hay visitas con esta selección.`}),(0,U.jsx)(`p`,{children:`Explora los horarios de muestra para preparar una solicitud.`}),(0,U.jsx)(`button`,{className:`rc-primary`,onClick:()=>{s(!1),d(`all`)},children:`Ver todas las visitas`})]})]}),y&&(0,U.jsxs)(`section`,{className:`rc-booking-summary`,"data-inquiry":`Solicitud de visita: ${y.property.title} (${y.property.id}), ${y.property.zone}. Fecha: ${y.date}, hora: ${PS(y.minutes)}. Pendiente de confirmación.`,"aria-label":`Solicitud de visita`,children:[(0,U.jsx)(`img`,{src:y.property.image,alt:y.property.title}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`p`,{className:`rc-eyebrow`,children:`TU VISITA`}),(0,U.jsx)(`h2`,{children:y.property.title}),(0,U.jsxs)(`p`,{children:[y.property.zone,` · `,wS(y.property)]}),(0,U.jsxs)(`strong`,{children:[MS(y.date,{weekday:`long`,day:`numeric`,month:`long`}),` · `,PS(y.minutes)]}),(0,U.jsx)(`small`,{children:`Duración de muestra: 1 hora · Sujeto a confirmación.`}),(0,U.jsx)(`button`,{className:`rc-text-link`,onClick:()=>{let e=v[(v.findIndex(e=>e.id===y.id)+1)%v.length];e&&b(e)},children:`Probar otro horario ↗`})]}),(0,U.jsxs)(`form`,{onSubmit:e=>{e.preventDefault(),l(e=>e.includes(y.id)?e:[...e,y.id]),h(y.id)},children:[(0,U.jsxs)(`label`,{children:[`Tu nombre`,(0,U.jsx)(`input`,{name:`name`,autoComplete:`name`,required:!0})]}),(0,U.jsxs)(`label`,{children:[`Correo electrónico`,(0,U.jsx)(`input`,{name:`email`,type:`email`,autoComplete:`email`,required:!0})]}),(0,U.jsx)(`button`,{className:`rc-primary`,type:`submit`,children:e.publicMode?`Solicitar visita →`:`Solicitar visita de muestra →`}),m===y.id&&(0,U.jsx)(`p`,{className:`rc-notice`,role:`status`,children:`Solicitud de ejemplo añadida a Mi agenda. No se envió información ni se reservó un horario real.`}),(0,U.jsx)(`p`,{className:`rc-notice`,role:`status`,children:e.submissionStatus})]},y.id)]}),(0,U.jsxs)(`section`,{className:`rc-upcoming-visits`,id:`visit-properties`,children:[(0,U.jsxs)(`header`,{children:[(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`p`,{className:`rc-eyebrow`,children:`ENCUENTRA TU PRÓXIMA VISITA`}),(0,U.jsx)(`h2`,{children:`Próximas visitas abiertas`})]}),(0,U.jsx)(`button`,{className:`rc-text-link`,onClick:()=>{s(!1),d(`all`)},children:`Ver toda la agenda ↗`})]}),_.map(e=>(0,U.jsxs)(`article`,{children:[(0,U.jsx)(`img`,{src:e.property.image,alt:e.property.title,loading:`lazy`}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`h3`,{children:e.property.title}),(0,U.jsxs)(`p`,{children:[e.property.zone,` · Punta Cana`]})]}),(0,U.jsxs)(`div`,{className:`rc-upcoming-date`,children:[(0,U.jsx)(`strong`,{children:MS(e.date)}),(0,U.jsxs)(`small`,{children:[PS(e.minutes),`–`,PS(e.minutes+e.duration)]})]}),(0,U.jsx)(`button`,{className:`rc-outline`,onClick:()=>p(e.property),children:`Ver detalles ↗`})]},e.id))]})]}),(0,U.jsx)(BS,{}),(0,U.jsx)(HS,{property:f,onClose:()=>p(null)})]})}var KS=[{id:`guiada`,type:`RealEstateGuided`,name:`Inmobiliaria · Búsqueda guiada`,heading:`Cuéntanos cómo quieres vivir`,description:`Te ayudamos a descubrir espacios que se adaptan a lo que buscas. Un paso a la vez.`,accent:`#454781`},{id:`propietarios`,type:`RealEstateOwners`,name:`Inmobiliaria · Propietarios`,heading:`Tu propiedad, bien representada.`,description:`Una mirada profesional para presentar tu inmueble, conectar con interesados y acompañarte en cada paso.`,accent:`#975c45`},{id:`visitas`,type:`RealEstateVisits`,name:`Inmobiliaria · Agenda de visitas`,heading:`Tu próximo hogar se conoce en persona.`,description:`Recorre, descubre y siente cada espacio. Solicita una visita; nuestro equipo confirmará la disponibilidad.`,accent:`#376353`}].map(e=>({...e,data:{root:{props:{title:e.name}},content:[{type:e.type,props:{...IS,properties:e.id===`propietarios`?[IS.properties[1],IS.properties[4],IS.properties[0]]:IS.properties,heading:e.heading,description:e.description,accent:e.accent,slots:NS,contactFormId:`${e.id}-contact`,id:`${e.id}-design`}},{type:`ContactForm`,props:{id:`${e.id}-contact`,title:`Contacta con nuestro equipo`,description:`Déjanos tu consulta y nos pondremos en contacto contigo.`,showName:`yes`,nameLabel:`Nombre`,showEmail:`yes`,emailLabel:`Correo electrónico`,showPhone:`no`,phoneLabel:`Teléfono`,showMessage:`yes`,messageLabel:`Mensaje`,showConsent:`no`,consentLabel:`Acepto que me contacten.`,submitLabel:`Enviar consulta`,successMessage:`Recibimos tu solicitud. Nuestro equipo te contactará.`,animation:`none`}}]},theme:{colors:{primary:e.accent,secondary:`#202323`,accent:e.accent},fonts:{heading:`Georgia, serif`,body:`Arial, sans-serif`}}}));function qS({settings:e,component:t,publicContext:n}){let[r,i]=(0,H.useState)(``),o=(0,H.useRef)(!1),s=(0,H.useRef)(new WeakMap);async function c(t){if(!n||(t.preventDefault(),t.stopPropagation(),o.current))return;let r=t.target,c=new FormData(r),l=r.closest(`section, dialog`),u=l?.getAttribute(`data-inquiry`)||l?.textContent?.slice(0,1200)||``,d=s.current.get(r)||crypto.randomUUID();s.current.set(r,d),o.current=!0,i(`Enviando solicitud…`);try{let{data:t,error:o}=await a.functions.invoke(`submit-website-form`,{body:{...n,kind:r.dataset.listingId?`asset-request`:`contact`,listingId:r.dataset.listingId,formId:e.contactFormId,submissionKey:d,website:String(c.get(`website`)||``),fields:{name:String(c.get(`name`)||``).trim(),email:String(c.get(`email`)||``).trim(),phone:``,consent:String(c.get(`consent`)||``),message:[c.get(`message`),c.get(`address`),c.get(`kind`),u].filter(Boolean).join(`
`).slice(0,2e3)}}});if(o||t?.ok!==!0)throw Error(`No se pudo enviar la solicitud. Inténtalo de nuevo.`);s.current.delete(r),r.reset(),i(`Solicitud recibida. Nuestro equipo te contactará para confirmar los detalles.`)}catch(e){i(e instanceof Error?e.message:`No se pudo enviar.`)}finally{o.current=!1}}return(0,U.jsx)(LS.Provider,{value:{...e,submissionStatus:r},children:(0,U.jsxs)(`div`,{className:`rc-theme${e.animation===`no`?` rc-no-motion`:``}${n?` rc-public`:``}`,style:{"--rc-accent":e.accent},onSubmitCapture:c,children:[(0,U.jsx)(t,{}),r&&(0,U.jsx)(`p`,{className:`rc-submit-status`,role:`status`,children:r})]})})}function JS(e,t){let n=[US,WS,GS];return Object.fromEntries(KS.map((r,i)=>{let a={label:r.name,defaultProps:r.data.content[0].props,fields:{brand:{type:`text`,label:`Marca`},brandSubtitle:{type:`text`,label:`Subtítulo de marca`},heading:{type:`textarea`,label:`Título principal`},description:{type:`textarea`,label:`Descripción principal`},eyebrow:{type:`text`,label:`Texto sobre el título`},heroImage:{...e,label:`Imagen de portada (opcional)`},accent:{type:`text`,label:`Color principal (#hex)`},footer:{type:`textarea`,label:`Pie de página`},animation:{type:`radio`,label:`Animaciones`,options:[{label:`Activadas`,value:`yes`},{label:`Desactivadas`,value:`no`}]},demoMode:{type:`radio`,label:`Aviso de datos de muestra`,options:[{label:`Mostrar`,value:`yes`},{label:`Ocultar`,value:`no`}]},properties:{type:`array`,label:`Catálogo manual del tema: propiedades y fotografías`,getItemSummary:e=>e.title||`Propiedad`,defaultItemProps:{id:``,title:`Nueva propiedad`,zone:``,kind:`Villa`,operation:`buy`,price:0,beds:0,baths:0,area:0,image:``,preferences:[],x:50,y:50,pool:!1},arrayFields:{id:{type:`text`,label:`Referencia única (usada en la agenda)`},title:{type:`text`,label:`Título`},zone:{type:`text`,label:`Zona`},kind:{type:`select`,label:`Tipo`,options:[`Villa`,`Apartamento`,`Estudio`,`Proyecto`].map(e=>({label:e,value:e}))},price:{type:`number`,label:`Precio USD`,min:0},beds:{type:`number`,label:`Habitaciones`,min:0},baths:{type:`number`,label:`Baños`,min:0},area:{type:`number`,label:`Área m²`,min:0},image:e,preferences:{type:`custom`,label:`Características`,render:({value:e=[],onChange:t,readOnly:n})=>(0,U.jsx)(`div`,{children:[{label:`Jardín`,value:`garden`},{label:`Cerca del mar`,value:`nearBeach`},{label:`Home office`,value:`homeOffice`}].map(r=>(0,U.jsxs)(`label`,{style:{display:`block`},children:[(0,U.jsx)(`input`,{type:`checkbox`,checked:e.includes(r.value),disabled:n,onChange:()=>t(e.includes(r.value)?e.filter(e=>e!==r.value):[...e,r.value])}),r.label]},r.value))})}}},...r.id===`propietarios`?{ownerPlan:{type:`array`,label:`Etapas del plan de venta`,defaultItemProps:{title:`Nueva etapa`,description:``,items:``},arrayFields:{title:{type:`text`,label:`Título`},description:{type:`textarea`,label:`Descripción`},items:{type:`textarea`,label:`Puntos (uno por línea)`}}}}:{},...r.id===`visitas`?{slots:{type:`array`,label:`Horarios semanales (solicitudes sujetas a confirmación)`,defaultItemProps:{key:`nuevo-horario`,reference:``,day:4,minutes:540},arrayFields:{key:{type:`text`,label:`Identificador único del horario`},reference:{type:`text`,label:`Referencia de propiedad`},day:{type:`select`,label:`Día`,options:[{label:`Viernes`,value:4},{label:`Sábado`,value:5},{label:`Domingo`,value:6}]},minutes:{type:`number`,label:`Minuto del día (540 = 09:00; 780 = 13:00)`,min:540,max:780,step:30}}}}:{}},render:e=>(0,U.jsx)(qS,{settings:{...IS,...e,publicMode:!!t,properties:(e.properties||[]).map((e,t)=>({...e,id:e.id||`property-${t}`,preferences:e.preferences||[]}))},component:n[i],publicContext:t})};return[r.type,a]}))}var YS={type:`select`,label:`Animación al aparecer`,options:[{label:`Sin animación`,value:`none`},{label:`Desvanecer y subir`,value:`fade-up`},{label:`Desvanecer`,value:`fade-in`},{label:`Deslizar desde la izquierda`,value:`slide-left`},{label:`Acercamiento suave`,value:`zoom-in`}]},XS=e=>e&&e!==`none`?` puck-animate-${e}`:``;function ZS({logoUrl:e,brandName:t,showNavigation:n,navigationItems:r,showButton:i,buttonText:a,buttonUrl:o,backgroundColor:s,textColor:c}){let[l,u]=(0,H.useState)(!1),d=()=>u(!1);return(0,U.jsxs)(`header`,{id:`inicio`,className:`puck-header${l?` puck-header--menu-open`:``}`,style:{backgroundColor:s||`#ffffff`,color:c||`#0f172a`},children:[(0,U.jsxs)(`a`,{className:`puck-header-brand`,href:`#inicio`,"aria-label":t||`Inicio`,onClick:d,children:[e&&(0,U.jsx)(`img`,{src:e,alt:t||`Logotipo`}),t&&(0,U.jsx)(`span`,{children:t})]}),n===`yes`&&(0,U.jsxs)(U.Fragment,{children:[(0,U.jsxs)(`button`,{type:`button`,className:`puck-header-toggle`,"aria-label":l?`Cerrar menú de navegación`:`Abrir menú de navegación`,"aria-expanded":l,"aria-controls":`puck-main-navigation`,onClick:()=>u(e=>!e),children:[(0,U.jsx)(`span`,{}),(0,U.jsx)(`span`,{}),(0,U.jsx)(`span`,{})]}),(0,U.jsx)(`nav`,{id:`puck-main-navigation`,className:`puck-header-navigation`,"aria-label":`Navegación principal`,children:(r||[]).map((e,t)=>(0,U.jsx)(`a`,{href:e.url||`#`,onClick:d,children:e.label},`${e.url}-${t}`))})]}),i===`yes`&&a&&(0,U.jsx)(`a`,{className:`puck-header-button`,href:o||`#contacto`,onClick:d,children:a})]})}var QS={components:{Header:{label:`Encabezado del sitio`,fields:{logoUrl:{type:`text`,label:`URL del logotipo`},brandName:{type:`text`,label:`Nombre de la empresa`},showNavigation:{type:`radio`,label:`Mostrar navegación`,options:[{label:`Sí`,value:`yes`},{label:`No`,value:`no`}]},navigationItems:{type:`array`,label:`Enlaces del menú`,arrayFields:{label:{type:`text`,label:`Texto del enlace`},url:{type:`text`,label:`Destino del enlace`}},defaultItemProps:{label:`Nueva sección`,url:`#servicios`}},showButton:{type:`radio`,label:`Mostrar botón de acción`,options:[{label:`Sí`,value:`yes`},{label:`No`,value:`no`}]},buttonText:{type:`text`,label:`Texto del botón`},buttonUrl:{type:`text`,label:`Destino del botón`},backgroundColor:{type:`text`,label:`Color de fondo`},textColor:{type:`text`,label:`Color del texto`}},defaultProps:{logoUrl:``,brandName:`Mi empresa`,showNavigation:`yes`,navigationItems:[{label:`Inicio`,url:`#inicio`},{label:`Servicios`,url:`#servicios`},{label:`Contacto`,url:`#contacto`}],showButton:`yes`,buttonText:`Contáctanos`,buttonUrl:`#contacto`,backgroundColor:`#ffffff`,textColor:`#0f172a`},render:e=>(0,U.jsx)(ZS,{...e})},Hero:{label:`Portada`,fields:{animation:YS,eyebrow:{type:`text`,label:`Texto superior`},title:{type:`text`,label:`Título principal`},description:{type:`textarea`,label:`Descripción`},imageUrl:{type:`text`,label:`URL de la imagen`},buttonText:{type:`text`,label:`Texto del botón`},buttonUrl:{type:`text`,label:`Destino del botón`},alignment:{type:`radio`,label:`Alineación`,options:[{label:`Izquierda`,value:`left`},{label:`Centro`,value:`center`}]}},defaultProps:{animation:`none`,eyebrow:`BIENVENIDO`,title:`Tu próxima gran idea comienza aquí`,description:`Presenta tu negocio con una página moderna, clara y profesional.`,imageUrl:``,buttonText:`Contáctanos`,buttonUrl:`#contacto`,alignment:`left`},render:({eyebrow:e,title:t,description:n,imageUrl:r,buttonText:i,buttonUrl:a,alignment:o,animation:s})=>(0,U.jsxs)(`section`,{className:`puck-hero${XS(s)}`,children:[r&&(0,U.jsx)(`img`,{className:`puck-hero-image`,src:r,alt:``}),(0,U.jsxs)(`div`,{className:`puck-hero-content puck-align-${o}`,children:[e&&(0,U.jsx)(`span`,{className:`puck-eyebrow`,children:e}),(0,U.jsx)(`h1`,{children:t}),n&&(0,U.jsx)(`p`,{children:n}),i&&(0,U.jsx)(`a`,{className:`puck-button puck-button-primary`,href:a||`#`,children:i})]})]})},Heading:{label:`Título`,fields:{animation:YS,text:{type:`text`,label:`Texto`},level:{type:`select`,label:`Nivel del título`,options:[{label:`Título 2`,value:`h2`},{label:`Título 3`,value:`h3`},{label:`Título 4`,value:`h4`}]},alignment:{type:`radio`,label:`Alineación`,options:[{label:`Izquierda`,value:`left`},{label:`Centro`,value:`center`},{label:`Derecha`,value:`right`}]}},defaultProps:{animation:`none`,text:`Escribe tu título`,level:`h2`,alignment:`left`},render:({text:e,level:t,alignment:n,animation:r})=>{let i={textAlign:n};return t===`h3`?(0,U.jsx)(`h3`,{className:`puck-heading${XS(r)}`,style:i,children:e}):t===`h4`?(0,U.jsx)(`h4`,{className:`puck-heading${XS(r)}`,style:i,children:e}):(0,U.jsx)(`h2`,{className:`puck-heading${XS(r)}`,style:i,children:e})}},Text:{label:`Texto descriptivo`,fields:{animation:YS,text:{type:`textarea`,label:`Contenido`},alignment:{type:`radio`,label:`Alineación`,options:[{label:`Izquierda`,value:`left`},{label:`Centro`,value:`center`},{label:`Derecha`,value:`right`}]},maxWidth:{type:`number`,label:`Ancho máximo en píxeles`,min:300,max:1200}},defaultProps:{animation:`none`,text:`Escribe aquí la información que deseas presentar a tus visitantes.`,alignment:`left`,maxWidth:900},render:({text:e,alignment:t,maxWidth:n,animation:r})=>(0,U.jsx)(`div`,{className:`puck-text${XS(r)}`,style:{maxWidth:`${n}px`,marginLeft:t===`center`?`auto`:0,marginRight:t===`center`?`auto`:0,textAlign:t},children:e.split(`
`).map((e,t)=>(0,U.jsx)(`p`,{children:e||`\xA0`},t))})},Image:{label:`Imagen`,fields:{animation:YS,imageUrl:{type:`text`,label:`URL de la imagen`},alt:{type:`text`,label:`Texto alternativo`},width:{type:`select`,label:`Tamaño`,options:[{label:`Pequeño`,value:`small`},{label:`Mediano`,value:`medium`},{label:`Grande`,value:`large`},{label:`Ancho completo`,value:`full`}]},alignment:{type:`radio`,label:`Alineación`,options:[{label:`Izquierda`,value:`left`},{label:`Centro`,value:`center`},{label:`Derecha`,value:`right`}]}},defaultProps:{animation:`none`,imageUrl:``,alt:``,width:`large`,alignment:`center`},render:({imageUrl:e,alt:t,width:n,alignment:r,animation:i})=>e?(0,U.jsx)(`div`,{className:`puck-image-wrapper${XS(i)}`,style:{textAlign:r},children:(0,U.jsx)(`img`,{className:`puck-image puck-image-${n}`,src:e,alt:t,loading:`lazy`})}):(0,U.jsx)(`div`,{className:`puck-image-placeholder`,children:`Configura la URL de la imagen en el panel de propiedades.`})},Button:{label:`Botón`,fields:{animation:YS,text:{type:`text`,label:`Texto`},url:{type:`text`,label:`Destino o URL`},alignment:{type:`radio`,label:`Alineación`,options:[{label:`Izquierda`,value:`left`},{label:`Centro`,value:`center`},{label:`Derecha`,value:`right`}]},style:{type:`select`,label:`Estilo`,options:[{label:`Principal`,value:`primary`},{label:`Secundario`,value:`secondary`},{label:`Contorno`,value:`outline`}]}},defaultProps:{animation:`none`,text:`Más información`,url:`#contacto`,alignment:`center`,style:`primary`},render:({text:e,url:t,alignment:n,style:r,animation:i})=>(0,U.jsx)(`div`,{className:`puck-button-wrapper${XS(i)}`,style:{textAlign:n},children:(0,U.jsx)(`a`,{className:`puck-button puck-button-${r}`,href:t||`#`,children:e})})},Cards:{label:`Tarjetas de servicios o productos`,fields:{animation:YS,title:{type:`text`,label:`Título de la sección`},columns:{type:`select`,label:`Columnas`,options:[{label:`2 columnas`,value:`2`},{label:`3 columnas`,value:`3`},{label:`4 columnas`,value:`4`}]},items:{type:`array`,label:`Tarjetas`,arrayFields:{title:{type:`text`,label:`Título`},description:{type:`textarea`,label:`Descripción`},imageUrl:{type:`text`,label:`URL de imagen`},linkText:{type:`text`,label:`Texto del enlace`},linkUrl:{type:`text`,label:`Destino del enlace`}},defaultItemProps:{title:`Nuevo servicio`,description:`Describe aquí este servicio o producto.`,imageUrl:``,linkText:`Más información`,linkUrl:`#contacto`}}},defaultProps:{animation:`none`,title:`Nuestros servicios`,columns:`3`,items:[{title:`Servicio 1`,description:`Describe el primer servicio.`,imageUrl:``,linkText:`Más información`,linkUrl:`#contacto`},{title:`Servicio 2`,description:`Describe el segundo servicio.`,imageUrl:``,linkText:`Más información`,linkUrl:`#contacto`},{title:`Servicio 3`,description:`Describe el tercer servicio.`,imageUrl:``,linkText:`Más información`,linkUrl:`#contacto`}]},render:({title:e,columns:t,items:n,animation:r})=>(0,U.jsxs)(`section`,{className:`puck-cards-section${XS(r)}`,id:`servicios`,children:[e&&(0,U.jsx)(`h2`,{children:e}),(0,U.jsx)(`div`,{className:`puck-cards-grid puck-cards-${t}`,children:n.map((e,t)=>(0,U.jsxs)(`article`,{className:`puck-card`,children:[e.imageUrl&&(0,U.jsx)(`img`,{src:e.imageUrl,alt:``,loading:`lazy`}),(0,U.jsxs)(`div`,{className:`puck-card-content`,children:[(0,U.jsx)(`h3`,{children:e.title}),(0,U.jsx)(`p`,{children:e.description}),e.linkText&&(0,U.jsx)(`a`,{href:e.linkUrl||`#`,children:e.linkText})]})]},t))})]})},Spacer:{label:`Espaciador`,fields:{height:{type:`number`,label:`Altura en píxeles`,min:8,max:200}},defaultProps:{height:40},render:({height:e})=>(0,U.jsx)(`div`,{"aria-hidden":`true`,style:{height:`${e}px`}})}}};function $S(e){let t=nt(JSON.stringify([`contact`,e.websiteSlug,e.pageSlug,e.id])),{sending:n,sent:r,error:i,uncertain:a,locked:o}=t,s=e.isPublic===!0,c=e.showName!==!1&&e.showName!==`no`,l=e.showEmail!==!1&&e.showEmail!==`no`,u=e.showPhone===!0||e.showPhone===`yes`,d=e.showMessage!==!1&&e.showMessage!==`no`,f=e.showConsent===!0||e.showConsent===`yes`;async function p(i){if(i.preventDefault(),!s||r||n)return;let a=i.currentTarget;await t.send(()=>{let t=new FormData(a),n={};for(let e of[`name`,`email`,`phone`,`message`]){let r=t.get(e);typeof r==`string`&&r.trim()&&(n[e]=r.trim())}return t.get(`consent`)===`accepted`&&(n.consent=`accepted`),{websiteSlug:e.websiteSlug,pageSlug:e.pageSlug,formId:e.id,fields:n,website:t.get(`website`)}})}return(0,U.jsx)(`section`,{className:`pct-contact-form-section`,id:e.sectionId||`contacto`,children:(0,U.jsxs)(`div`,{className:`pct-contact-form-card`,children:[e.title&&(0,U.jsx)(`h2`,{children:e.title}),e.description&&(0,U.jsx)(`p`,{className:`pct-contact-form-description`,children:e.description}),r?(0,U.jsx)(`div`,{className:`pct-contact-form-success`,role:`status`,children:e.successMessage||`Gracias. Recibimos tu mensaje.`}):(0,U.jsxs)(`form`,{className:`pct-contact-form`,onSubmit:e=>void p(e),children:[(0,U.jsxs)(`fieldset`,{className:`public-submission-fields`,disabled:o,children:[c&&(0,U.jsxs)(`label`,{children:[e.nameLabel||`Nombre`,(0,U.jsx)(`input`,{name:`name`,autoComplete:`name`,required:!0})]}),l&&(0,U.jsxs)(`label`,{children:[e.emailLabel||`Correo electrónico`,(0,U.jsx)(`input`,{name:`email`,type:`email`,autoComplete:`email`,required:!0})]}),u&&(0,U.jsxs)(`label`,{children:[e.phoneLabel||`Teléfono`,(0,U.jsx)(`input`,{name:`phone`,type:`tel`,autoComplete:`tel`,required:!0})]}),d&&(0,U.jsxs)(`label`,{children:[e.messageLabel||`¿Cómo podemos ayudarte?`,(0,U.jsx)(`textarea`,{name:`message`,rows:5,defaultValue:e.defaultMessage||``,required:!0})]}),f&&(0,U.jsxs)(`label`,{className:`pct-contact-form-consent`,children:[(0,U.jsx)(`input`,{type:`checkbox`,name:`consent`,value:`accepted`,required:!0}),(0,U.jsx)(`span`,{children:e.consentLabel||`Acepto que me contacten sobre esta solicitud.`})]}),(0,U.jsxs)(`label`,{className:`pct-contact-form-honeypot`,"aria-hidden":`true`,tabIndex:-1,children:[`Sitio web`,(0,U.jsx)(`input`,{name:`website`,autoComplete:`off`,tabIndex:-1})]})]}),i&&(0,U.jsx)(`p`,{className:`pct-contact-form-error`,role:`alert`,children:i}),a&&(0,U.jsx)(`p`,{role:`alert`,children:`Tus datos están bloqueados para reintentar la misma solicitud. No recargues ni cierres esta página hasta obtener la confirmación.`}),(0,U.jsx)(`button`,{className:`puck-button puck-button-primary`,type:`submit`,disabled:n||!s,children:n?`Enviando...`:a?`Reintentar la misma solicitud`:e.submitLabel||`Enviar mensaje`}),!s&&(0,U.jsx)(`p`,{className:`pct-contact-form-preview`,children:`Vista previa: el formulario se activa al publicar la página.`})]})]})})}var eC={type:`select`,label:`Animación`,options:[{label:`Sin animación`,value:`none`},{label:`Entrada suave`,value:`fade-up`},{label:`Desvanecer`,value:`fade-in`}]},tC=e=>[`fade-up`,`fade-in`].includes(e)?` puck-animate-${e}`:``,nC=e=>/^(https?:\/\/|#[^\s]*$|\/(?!\/))/.test(e||``)?e:`#contacto`;function rC({stops:e,dark:t=!1}){return(0,U.jsx)(`div`,{className:`adventure-map${t?` adventure-map-dark`:``}`,children:(0,U.jsxs)(`svg`,{viewBox:`0 0 400 420`,role:`img`,"aria-label":`Ilustración esquemática del recorrido`,children:[(0,U.jsx)(`defs`,{children:(0,U.jsx)(`pattern`,{id:t?`adventure-contours-dark`:`adventure-contours-light`,width:`100`,height:`80`,patternUnits:`userSpaceOnUse`,children:(0,U.jsx)(`path`,{d:`M-20 60 Q20 0 60 30 T120 20 M-20 72 Q20 12 60 42 T120 32 M-20 84 Q20 24 60 54 T120 44`,fill:`none`,stroke:`currentColor`,strokeWidth:`.8`,opacity:`.17`})})}),(0,U.jsx)(`rect`,{width:`400`,height:`420`,fill:`url(#${t?`adventure-contours-dark`:`adventure-contours-light`})`}),(0,U.jsx)(`path`,{d:`M155 65 C270 95 90 145 180 185 S310 250 160 280 S260 330 190 370`,fill:`none`,stroke:`#c8fc27`,strokeWidth:`4`,strokeDasharray:`7 7`}),e.slice(0,4).map((e,n)=>{let r=[155,180,160,190][n],i=[65,185,280,370][n];return(0,U.jsxs)(`g`,{children:[(0,U.jsx)(`circle`,{cx:r,cy:i,r:`10`,fill:t?`#c8fc27`:`#151813`}),(0,U.jsx)(`circle`,{cx:r,cy:i,r:`3`,fill:t?`#151813`:`#c8fc27`}),(0,U.jsx)(`text`,{x:r+20,y:i+5,fill:`currentColor`,fontSize:`13`,fontWeight:`700`,children:e.length>20?`${e.slice(0,20)}…`:e})]},`${e}-${n}`)}),(0,U.jsx)(`text`,{x:`22`,y:`400`,fill:`currentColor`,fontSize:`10`,letterSpacing:`2`,children:`RUTA ILUSTRATIVA`})]})})}function iC(e){return{AdventureHeader:{label:`Aventura · Encabezado`,fields:{brand:{type:`text`,label:`Marca`},subtitle:{type:`text`,label:`Subtítulo de marca`},buttonLabel:{type:`text`,label:`Botón`},buttonUrl:{type:`text`,label:`Enlace del botón`}},defaultProps:{brand:`RUMBO`,subtitle:`REPÚBLICA DOMINICANA`,buttonLabel:`Arma tu ruta`,buttonUrl:`#contacto`},render:({brand:e,subtitle:t,buttonLabel:n,buttonUrl:r})=>(0,U.jsxs)(`header`,{className:`adventure-header`,children:[(0,U.jsxs)(`a`,{className:`adventure-brand`,href:`#aventura-inicio`,children:[(0,U.jsxs)(`strong`,{children:[e,(0,U.jsx)(`span`,{"aria-hidden":`true`,children:`△`})]}),(0,U.jsx)(`small`,{children:t})]}),(0,U.jsxs)(`nav`,{"aria-label":`Navegación de aventura`,children:[(0,U.jsx)(`a`,{href:`#recorrido`,children:`Recorrido`}),(0,U.jsx)(`a`,{href:`#experiencias`,children:`Experiencias`}),(0,U.jsx)(`a`,{href:`#contacto`,children:`Contacto`})]}),(0,U.jsxs)(`a`,{className:`adventure-cta`,href:nC(r),children:[n,` `,(0,U.jsx)(`span`,{"aria-hidden":`true`,children:`↗`})]})]})},AdventureHero:{label:`Aventura · Portada con mapa`,fields:{eyebrow:{type:`text`,label:`Texto superior`},title:{type:`text`,label:`Primera línea del título`},emphasis:{type:`text`,label:`Segunda línea del título`},description:{type:`textarea`,label:`Descripción`},buttonLabel:{type:`text`,label:`Botón`},buttonUrl:{type:`text`,label:`Enlace`},imageUrl:e,imageAlt:{type:`text`,label:`Descripción de la imagen`},caption:{type:`text`,label:`Texto sobre la fotografía`},animation:eC,stops:{type:`array`,label:`Puntos del mapa`,arrayFields:{name:{type:`text`,label:`Nombre`}},defaultItemProps:{name:`Destino`}}},defaultProps:{eyebrow:`NATURALEZA · CULTURA · AVENTURA`,title:`SAL DE LA`,emphasis:`RUTINA`,description:`Explora una República Dominicana diferente. Montañas, ríos, cascadas y comunidades locales te esperan.`,buttonLabel:`Arma tu ruta`,buttonUrl:`#contacto`,imageUrl:`https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=2000&q=85`,imageAlt:`Cascada rodeada de bosque`,caption:`MENOS PRISA. MÁS AVENTURA.`,animation:`fade-up`,stops:[{name:`MONTAÑA`},{name:`CASCADA`},{name:`COMUNIDAD`},{name:`PLAYA`}]},render:({eyebrow:e,title:t,emphasis:n,description:r,buttonLabel:i,buttonUrl:a,imageUrl:o,imageAlt:s,caption:c,animation:l,stops:u})=>(0,U.jsxs)(`section`,{className:`adventure-hero${tC(l)}`,id:`aventura-inicio`,children:[(0,U.jsxs)(`div`,{className:`adventure-hero-top`,children:[(0,U.jsxs)(`div`,{className:`adventure-hero-copy`,children:[(0,U.jsx)(`p`,{className:`adventure-eyebrow`,children:e}),(0,U.jsxs)(`h1`,{children:[t,(0,U.jsx)(`br`,{}),(0,U.jsx)(`span`,{children:n})]}),(0,U.jsx)(`p`,{className:`adventure-description`,children:r}),(0,U.jsxs)(`a`,{className:`adventure-cta`,href:nC(a),children:[i,(0,U.jsx)(`span`,{"aria-hidden":`true`,children:`↗`})]})]}),(0,U.jsx)(rC,{stops:(u||[]).map(e=>e.name)})]}),(0,U.jsxs)(`div`,{className:`adventure-panorama`,children:[o&&(0,U.jsx)(`img`,{src:o,alt:s,fetchPriority:`high`}),(0,U.jsx)(`span`,{children:c}),(0,U.jsx)(`a`,{href:`#recorrido`,"aria-label":`Ver el recorrido`,children:`↓`})]})]})},AdventureRoute:{label:`Aventura · Recorrido numerado`,fields:{eyebrow:{type:`text`,label:`Texto superior`},title:{type:`text`,label:`Título`},description:{type:`textarea`,label:`Descripción`},animation:eC,stops:{type:`array`,label:`Paradas del recorrido`,arrayFields:{title:{type:`text`,label:`Nombre`},description:{type:`textarea`,label:`Descripción`},duration:{type:`text`,label:`Duración`},imageUrl:e},defaultItemProps:{title:`Nueva parada`,description:`Describe esta experiencia.`,duration:`2 horas`,imageUrl:``}},benefits:{type:`array`,label:`Ventajas`,arrayFields:{title:{type:`text`,label:`Título`},description:{type:`text`,label:`Descripción`}},defaultItemProps:{title:`Ventaja`,description:`Descripción`}}},defaultProps:{eyebrow:`TU PRÓXIMA AVENTURA`,title:`UN RECORRIDO INOLVIDABLE`,description:`Naturaleza, adrenalina y cultura en un solo viaje.`,animation:`fade-up`,stops:[{title:`MONTAÑA REDONDA`,description:`Vistas panorámicas que quitan el aliento.`,duration:`2–3 horas`,imageUrl:`https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80`},{title:`SALTO EL LIMÓN`,description:`Cascada, senderismo y naturaleza pura.`,duration:`3–4 horas`,imageUrl:`https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=600&q=80`},{title:`COMUNIDAD LOCAL`,description:`Gastronomía, cultura y gente increíble.`,duration:`2–3 horas`,imageUrl:`https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=600&q=80`}],benefits:[{title:`RUTAS AUTÉNTICAS`,description:`Fuera de lo convencional`},{title:`TURISMO RESPONSABLE`,description:`Apoyo a comunidades locales`},{title:`GRUPOS REDUCIDOS`,description:`Mayor conexión`},{title:`EXPERTOS LOCALES`,description:`Tu viaje en buenas manos`}]},render:({eyebrow:e,title:t,description:n,stops:r,benefits:i,animation:a})=>(0,U.jsxs)(`section`,{id:`recorrido`,className:`adventure-route${tC(a)}`,children:[(0,U.jsxs)(`div`,{className:`adventure-route-heading`,children:[(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`p`,{className:`adventure-eyebrow`,children:e}),(0,U.jsx)(`h2`,{children:t})]}),(0,U.jsx)(`p`,{children:n})]}),(0,U.jsxs)(`div`,{className:`adventure-route-body`,children:[(0,U.jsx)(`ol`,{className:`adventure-timeline`,children:(r||[]).map((e,t)=>(0,U.jsxs)(`li`,{children:[(0,U.jsx)(`span`,{className:`adventure-step-number`,children:String(t+1).padStart(2,`0`)}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`h3`,{children:e.title}),(0,U.jsx)(`p`,{children:e.description}),(0,U.jsxs)(`small`,{children:[`◷ `,e.duration]})]}),e.imageUrl&&(0,U.jsx)(`img`,{src:e.imageUrl,alt:e.title,loading:`lazy`})]},`${e.title}-${t}`))}),(0,U.jsx)(rC,{dark:!0,stops:(r||[]).map(e=>e.title)})]}),(0,U.jsx)(`div`,{className:`adventure-benefits`,id:`experiencias`,children:(i||[]).map((e,t)=>(0,U.jsxs)(`article`,{children:[(0,U.jsx)(`span`,{"aria-hidden":`true`,children:[`↗`,`❋`,`◎`,`✧`][t%4]}),(0,U.jsx)(`h3`,{children:e.title}),(0,U.jsx)(`p`,{children:e.description})]},`${e.title}-${t}`))})]})}}}var aC=e=>[`fade-up`,`fade-in`].includes(e)?` puck-animate-${e}`:``;function oC({brand:e,subtitle:t,eyebrow:n,title:r,description:i,imageUrl:a,imageAlt:o,buttonLabel:s,sectionTitle:c,sectionEyebrow:l,animation:u,destinations:d=[]}){let[f,p]=(0,H.useState)(``),[m,h]=(0,H.useState)(``),[g,_]=(0,H.useState)(`2`),[v,y]=(0,H.useState)(null),b=v?.destination?d.filter(e=>e.title===v.destination):d;return(0,U.jsxs)(`div`,{className:`tropical-explorer`,children:[(0,U.jsxs)(`section`,{className:`tropical-hero${aC(u)}`,id:`tropical-inicio`,children:[a&&(0,U.jsx)(`img`,{className:`tropical-hero-image`,src:a,alt:o,fetchPriority:`high`}),(0,U.jsxs)(`header`,{className:`tropical-header`,children:[(0,U.jsxs)(`a`,{className:`tropical-brand`,href:`#tropical-inicio`,children:[(0,U.jsx)(`span`,{"aria-hidden":`true`,children:`✳`}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`strong`,{children:e}),(0,U.jsx)(`small`,{children:t})]})]}),(0,U.jsxs)(`nav`,{"aria-label":`Navegación tropical`,children:[(0,U.jsx)(`a`,{href:`#destinos`,children:`Destinos`}),(0,U.jsx)(`a`,{href:`#experiencias-tropical`,children:`Experiencias`}),(0,U.jsx)(`a`,{href:`#contacto`,children:`Contacto`})]})]}),(0,U.jsxs)(`div`,{className:`tropical-hero-content`,children:[(0,U.jsx)(`p`,{className:`tropical-eyebrow`,children:n}),(0,U.jsx)(`h1`,{children:r}),(0,U.jsx)(`p`,{className:`tropical-description`,children:i}),(0,U.jsxs)(`a`,{className:`tropical-button`,href:`#destinos`,children:[s,` `,(0,U.jsx)(`span`,{"aria-hidden":`true`,children:`→`})]})]}),(0,U.jsxs)(`form`,{className:`tropical-finder`,"aria-label":`Explorar destinos de muestra`,onSubmit:e=>{e.preventDefault(),y({destination:f,date:m,travelers:g}),document.getElementById(`destinos`)?.scrollIntoView({behavior:window.matchMedia(`(prefers-reduced-motion: reduce)`).matches?`instant`:`smooth`})},children:[(0,U.jsxs)(`label`,{children:[(0,U.jsxs)(`span`,{children:[`⌖ `,(0,U.jsx)(`b`,{children:`Destino`})]}),(0,U.jsxs)(`select`,{value:f,onChange:e=>p(e.target.value),children:[(0,U.jsx)(`option`,{value:``,children:`Todos los destinos`}),d.map((e,t)=>(0,U.jsx)(`option`,{value:e.title,children:e.title},`${e.title}-${t}`))]})]}),(0,U.jsxs)(`label`,{children:[(0,U.jsxs)(`span`,{children:[`▦ `,(0,U.jsx)(`b`,{children:`Fecha del viaje`})]}),(0,U.jsx)(`input`,{type:`date`,"aria-label":`Fecha del viaje`,value:m,onChange:e=>h(e.target.value)})]}),(0,U.jsxs)(`label`,{children:[(0,U.jsxs)(`span`,{children:[`♧ `,(0,U.jsx)(`b`,{children:`Viajeros`})]}),(0,U.jsx)(`select`,{value:g,onChange:e=>_(e.target.value),children:[1,2,3,4,5,6,7,8].map(e=>(0,U.jsxs)(`option`,{value:e,children:[e,` `,e===1?`persona`:`personas`]},e))})]}),(0,U.jsxs)(`button`,{type:`submit`,className:`tropical-search-button`,children:[(0,U.jsx)(`span`,{"aria-hidden":`true`,children:`⌕`}),(0,U.jsx)(`span`,{className:`tropical-search-label`,children:`Explorar`})]})]})]}),(0,U.jsxs)(`section`,{className:`tropical-destinations${aC(u)}`,id:`destinos`,children:[(0,U.jsxs)(`header`,{children:[(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`p`,{className:`tropical-eyebrow`,children:l}),(0,U.jsx)(`h2`,{children:c})]}),(0,U.jsxs)(`button`,{type:`button`,className:`tropical-text-button`,onClick:()=>{y(null),p(``)},children:[`Ver todos los destinos `,(0,U.jsx)(`span`,{"aria-hidden":`true`,children:`→`})]})]}),v&&(0,U.jsxs)(`p`,{className:`tropical-search-summary`,role:`status`,children:[b.length,` `,b.length===1?`experiencia de muestra`:`experiencias de muestra`,` · `,v.travelers,` `,v.travelers===`1`?`persona`:`personas`,v.date?` · ${new Intl.DateTimeFormat(`es-DO`,{dateStyle:`long`}).format(new Date(`${v.date}T12:00:00`))}`:``,`. La disponibilidad se confirma al consultar.`]}),(0,U.jsx)(`div`,{id:`experiencias-tropical`,className:`tropical-mosaic${b.length===1?` tropical-mosaic-single`:``}`,children:b.map((e,t)=>(0,U.jsxs)(`a`,{href:`#contacto`,className:`tropical-destination`,"aria-label":`Consultar ${e.title}`,children:[e.imageUrl&&(0,U.jsx)(`img`,{src:e.imageUrl,alt:e.title,loading:`lazy`}),(0,U.jsxs)(`span`,{className:`tropical-destination-badge`,children:[e.category,` · `,e.duration]}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`h3`,{children:e.title}),(0,U.jsx)(`p`,{children:e.description}),(0,U.jsxs)(`span`,{children:[`Descubrir `,(0,U.jsx)(`b`,{"aria-hidden":`true`,children:`↗`})]})]})]},`${e.title}-${t}`))})]})]})}function sC(e){return{TropicalExplorer:{label:`Tropical · Portada, buscador y destinos`,fields:{brand:{type:`text`,label:`Marca`},subtitle:{type:`text`,label:`Subtítulo de marca`},eyebrow:{type:`text`,label:`Texto superior`},title:{type:`text`,label:`Título principal`},description:{type:`textarea`,label:`Descripción`},imageUrl:e,imageAlt:{type:`text`,label:`Descripción de la imagen`},buttonLabel:{type:`text`,label:`Botón principal`},sectionTitle:{type:`text`,label:`Título de destinos`},sectionEyebrow:{type:`text`,label:`Texto superior de destinos`},animation:{type:`select`,label:`Animación`,options:[{label:`Sin animación`,value:`none`},{label:`Entrada suave`,value:`fade-up`},{label:`Desvanecer`,value:`fade-in`}]},destinations:{type:`array`,label:`Destinos del mosaico y buscador`,arrayFields:{title:{type:`text`,label:`Destino`},description:{type:`textarea`,label:`Descripción`},imageUrl:e,category:{type:`text`,label:`Categoría`},duration:{type:`text`,label:`Duración`}},defaultItemProps:{title:`Nuevo destino`,description:`Describe la experiencia.`,imageUrl:``,category:`Experiencia`,duration:`1 día`}}},defaultProps:{brand:`RUMBO`,subtitle:`REPÚBLICA DOMINICANA`,eyebrow:`TU ESCAPADA AL CARIBE`,title:`Tu próxima aventura empieza aquí`,description:`Días de sol, agua turquesa y experiencias que se quedan contigo.`,imageUrl:`https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2200&q=85`,imageAlt:`Playa tropical de inspiración`,buttonLabel:`Explorar experiencias`,sectionTitle:`Descubre Punta Cana`,sectionEyebrow:`DESTINOS DESTACADOS`,animation:`fade-in`,destinations:[]},render:e=>(0,U.jsx)(oC,{...e})},TropicalReview:{label:`Tropical · Opinión destacada`,fields:{title:{type:`text`,label:`Texto superior`},quote:{type:`textarea`,label:`Testimonio`},author:{type:`text`,label:`Autor`},note:{type:`text`,label:`Nota`}},defaultProps:{title:`LO QUE DICEN NUESTROS VIAJEROS`,quote:`Una experiencia increíble. Todo estuvo cuidado y volvimos con recuerdos inolvidables.`,author:`Carolina M. · Argentina`,note:`Testimonio de muestra`},render:({title:e,quote:t,author:n,note:r})=>(0,U.jsxs)(`section`,{className:`tropical-review`,children:[(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`p`,{className:`tropical-eyebrow`,children:e}),(0,U.jsx)(`span`,{className:`tropical-stars`,"aria-label":`5 de 5 estrellas`,children:`★★★★★`}),(0,U.jsx)(`small`,{children:r})]}),(0,U.jsxs)(`blockquote`,{children:[(0,U.jsxs)(`p`,{children:[`“`,t,`”`]}),(0,U.jsx)(`cite`,{children:n})]}),(0,U.jsx)(`span`,{className:`tropical-review-flower`,"aria-hidden":`true`,children:`✳`})]})}}}var cC=`https://tile.openstreetmap.org/{z}/{x}/{y}.png`;function lC(e){return typeof e.lat==`number`&&Number.isFinite(e.lat)&&Math.abs(e.lat)<=85.0511&&typeof e.lng==`number`&&Number.isFinite(e.lng)&&Math.abs(e.lng)<=180}function uC(e,t){if(!lC(e))return!1;let n=((e.lng+180)%360+360)%360-180,r=((t.west+180)%360+360)%360-180,i=((t.east+180)%360+360)%360-180;return e.lat>=t.south&&e.lat<=t.north&&(t.east-t.west>=360||(r<=i?n>=r&&n<=i:n>=r||n<=i))}function dC(e){if(!Array.isArray(e))return[];let t=new Set;return e.flatMap((e,n)=>{if(!e||typeof e!=`object`)return[];let r=e,i=e=>typeof r[e]==`string`?r[e].trim():``;if(!i(`title`))return[];let a=(e,t=0)=>{let n=r[e];return(typeof n==`number`||typeof n==`string`&&n.trim()!==``)&&Number.isFinite(Number(n))?Number(n):t},o=i(`id`)||`property-${n+1}`;for(;t.has(o);)o=`${o}-${n+1}`;t.add(o);let s=i(`image`);return[{id:o,title:i(`title`),zone:i(`zone`),city:i(`city`),address:i(`address`),description:i(`description`),listingId:i(`listingId`)||void 0,currency:i(`currency`)||`USD`,rentPeriod:i(`rentPeriod`)||`month`,priceOnRequest:r.priceOnRequest===!0,kind:i(`kind`)||`Propiedad`,operation:r.operation===`rent`?`rent`:`buy`,price:Math.max(0,a(`price`)),beds:Math.max(0,a(`beds`)),baths:Math.max(0,a(`baths`)),area:Math.max(0,a(`area`)),pool:r.pool===!0||r.pool===`yes`,image:/^https?:\/\//i.test(s)||/^\/(?!\/)/.test(s)?s:``,lat:a(`lat`,NaN),lng:a(`lng`,NaN),x:a(`x`,50),y:a(`y`,50)}]})}function fC({properties:e,selectedId:n,onSelect:r,onBoundsChange:a,searchInView:o,tileUrl:s,tileAttribution:c}){let l=(0,H.useRef)(null),u=(0,H.useRef)(null),d=(0,H.useRef)(null),f=(0,H.useRef)(null),p=(0,H.useRef)(null),m=(0,H.useRef)({onSelect:r,onBoundsChange:a});(0,H.useEffect)(()=>{m.current={onSelect:r,onBoundsChange:a}},[r,a]);let[h,g]=(0,H.useState)(0),[_,v]=(0,H.useState)(``),y=(0,H.useRef)(``),b=(0,H.useRef)(``);(0,H.useEffect)(()=>{let e=!1,n,r;y.current=``,b.current=``;async function a(){try{let a=await i(()=>import(`./leaflet-src-DoC2Zuse.js`).then(e=>t(e.default,1)),__vite__mapDeps([16,1]));if(e||!l.current)return;p.current=a,r=a.map(l.current,{zoomControl:!1,scrollWheelZoom:!1}).setView([18.67,-68.43],12),u.current=r;let o=s?.startsWith(`https://`)&&[`{z}`,`{x}`,`{y}`].every(e=>s.includes(e))?s:cC,h=document.createElement(`span`);h.textContent=c||`Proveedor del mapa`,f.current=a.tileLayer(o,{maxZoom:19,noWrap:!0,attribution:o===`https://tile.openstreetmap.org/{z}/{x}/{y}.png`?`&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors`:h.innerHTML}).addTo(r),f.current.on(`tileerror`,()=>{e||v(`No se pudieron cargar algunas zonas del mapa. Revisa la conexión e inténtalo de nuevo.`)}),f.current.on(`load`,()=>{!e&&l.current?.querySelector(`img.leaflet-tile-loaded`)&&v(``)}),d.current=a.layerGroup().addTo(r),a.control.zoom({position:`bottomleft`}).addTo(r);let _=()=>{if(!r||!r.getSize().x||!r.getSize().y)return;let e=r.getBounds();m.current.onBoundsChange({south:e.getSouth(),west:e.getWest(),north:e.getNorth(),east:e.getEast()})};r.on(`moveend`,_),n=new ResizeObserver(()=>{r&&l.current?.clientWidth&&l.current.clientHeight&&(r.invalidateSize({pan:!1}),_())}),n.observe(l.current),g(e=>e+1)}catch{e||v(`No se pudo iniciar el mapa. Intenta recargar esta página.`)}}return a(),()=>{e=!0,n?.disconnect(),r?.remove(),u.current=null,d.current=null,f.current=null}},[s,c]),(0,H.useEffect)(()=>{let t=p.current,r=u.current;if(!h||!t||!r||!d.current)return;d.current.clearLayers();let i=e.filter(lC);i.forEach(e=>{let r=document.createElement(`span`);r.className=`re-live-price-tag`,r.textContent=e.price>=1e4?`${e.currency||`USD`} ${Math.round(e.price/1e3)} mil`:wS(e);let i=t.divIcon({html:r,className:`re-live-price-marker${e.id===n?` is-selected`:``}`,iconSize:[105,32],iconAnchor:[52,40]}),a=t.marker([e.lat,e.lng],{icon:i,title:`${e.title}: ${wS(e)}`,alt:e.title,keyboard:!0,zIndexOffset:e.id===n?1e3:0});a.on(`click`,()=>m.current.onSelect(e)),a.addTo(d.current)});let a=i.map(e=>`${e.id}:${e.lat}:${e.lng}`).join(`|`);!o&&i.length&&y.current!==a&&r.getSize().x>0&&(r.fitBounds(t.latLngBounds(i.map(e=>[e.lat,e.lng])),{padding:[65,65],maxZoom:14,animate:!1}),y.current=a)},[e,n,h,o]),(0,H.useEffect)(()=>{let t=e.find(e=>e.id===n),r=u.current;if(!r||!t||!lC(t))return;let i=`${t.id}:${t.lat}:${t.lng}`;i!==b.current&&(b.current=i,r.getBounds().contains([t.lat,t.lng])||r.panTo([t.lat,t.lng],{animate:!1}))},[n,h,e]);function x(){let t=e.filter(lC);p.current&&u.current&&t.length&&u.current.fitBounds(p.current.latLngBounds(t.map(e=>[e.lat,e.lng])),{padding:[65,65],maxZoom:14,animate:!1})}return(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(`div`,{ref:l,className:`re-live-map`,"aria-label":`Mapa de propiedades de OpenStreetMap`}),(0,U.jsx)(`button`,{type:`button`,className:`re-live-fit`,"aria-label":`Centrar todas las propiedades del mapa`,onClick:x,children:`⌖`}),!h&&!_&&(0,U.jsx)(`p`,{className:`re-live-map-status`,role:`status`,children:`Cargando mapa…`}),_&&(0,U.jsxs)(`div`,{className:`re-live-map-error`,role:`status`,children:[_,(0,U.jsx)(`button`,{type:`button`,onClick:()=>{v(``),f.current?.redraw()},children:`Reintentar`})]})]})}function pC(){return(0,U.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,"aria-hidden":`true`,children:[(0,U.jsx)(`circle`,{cx:`10.5`,cy:`10.5`,r:`6.5`}),(0,U.jsx)(`path`,{d:`m16 16 5 5`})]})}function mC({filled:e=!1}){return(0,U.jsx)(`svg`,{viewBox:`0 0 24 24`,"aria-hidden":`true`,fill:e?`currentColor`:`none`,children:(0,U.jsx)(`path`,{d:`M20.5 5.5a5 5 0 0 0-7 0L12 7l-1.5-1.5a5 5 0 0 0-7 7L12 21l8.5-8.5a5 5 0 0 0 0-7Z`})})}function hC({property:e}){return(0,U.jsxs)(`div`,{className:`re-facts`,children:[(0,U.jsxs)(`span`,{children:[(0,U.jsx)(`svg`,{viewBox:`0 0 24 24`,"aria-hidden":`true`,children:(0,U.jsx)(`path`,{d:`M3 18V7h18v11M3 14h18M7 14V9h4v5M13 14V9h4v5M3 20v-2M21 20v-2`})}),e.beds,` hab.`]}),(0,U.jsxs)(`span`,{children:[(0,U.jsx)(`svg`,{viewBox:`0 0 24 24`,"aria-hidden":`true`,children:(0,U.jsx)(`path`,{d:`M3 12h18l-2 6H5l-2-6ZM6 12V5a2 2 0 0 1 4 0M7 21v-3M17 21v-3`})}),e.baths,` baños`]}),(0,U.jsxs)(`span`,{children:[(0,U.jsx)(`svg`,{viewBox:`0 0 24 24`,"aria-hidden":`true`,children:(0,U.jsx)(`path`,{d:`M4 4h16v16H4ZM4 9h5V4M15 20v-5h5`})}),e.area,` m²`]})]})}function gC(){return(0,U.jsxs)(`svg`,{className:`re-map-art`,viewBox:`0 0 1000 900`,preserveAspectRatio:`none`,"aria-hidden":`true`,children:[(0,U.jsx)(`defs`,{children:(0,U.jsxs)(`pattern`,{id:`re-blocks`,width:`105`,height:`95`,patternUnits:`userSpaceOnUse`,patternTransform:`rotate(-20)`,children:[(0,U.jsx)(`rect`,{width:`105`,height:`95`,fill:`#f0eee6`}),(0,U.jsx)(`path`,{d:`M0 0h105v95M40 0v95M0 38h105M0 73h105`,stroke:`#fff`,strokeWidth:`4`}),(0,U.jsx)(`path`,{d:`M7 8h25v22H7zM48 8h48v22H48zM48 46h18v18H48zM75 46h20v18H75z`,fill:`#e4e3d9`}),(0,U.jsx)(`path`,{d:`M7 46h26v20H7z`,fill:`#dbe5cf`})]})}),(0,U.jsx)(`rect`,{width:`1000`,height:`900`,fill:`#a8dce5`}),(0,U.jsx)(`path`,{d:`M0 0H800L822 100 788 185 825 280 795 360 850 460 810 570 834 680 795 790 830 900H0Z`,fill:`url(#re-blocks)`}),(0,U.jsx)(`path`,{d:`M800 0 822 100 788 185 825 280 795 360 850 460 810 570 834 680 795 790 830 900`,fill:`none`,stroke:`#fbf7e9`,strokeWidth:`15`}),(0,U.jsx)(`path`,{d:`M100 0C130 230 310 220 400 420S300 650 450 900M0 300Q310 360 800 180M0 670Q470 600 820 720`,fill:`none`,stroke:`#d9cfad`,strokeWidth:`12`}),(0,U.jsx)(`path`,{d:`M100 0C130 230 310 220 400 420S300 650 450 900M0 300Q310 360 800 180M0 670Q470 600 820 720`,fill:`none`,stroke:`#fffdf6`,strokeWidth:`7`}),(0,U.jsx)(`path`,{d:`M330 480Q440 370 520 470T410 610Z`,fill:`#d2e2bc`}),(0,U.jsx)(`path`,{d:`M360 490Q420 450 448 490T405 553Z`,fill:`#b9d9d8`}),(0,U.jsx)(`path`,{d:`M120 100Q210 20 300 90L260 190 140 180Z`,fill:`#d5e3c5`,opacity:`.85`}),(0,U.jsxs)(`g`,{fill:`#6f7d7b`,fontFamily:`Arial,sans-serif`,fontSize:`19`,letterSpacing:`3`,children:[(0,U.jsx)(`text`,{x:`185`,y:`140`,children:`BÁVARO`}),(0,U.jsx)(`text`,{x:`630`,y:`200`,children:`LOS CORALES`}),(0,U.jsx)(`text`,{x:`360`,y:`650`,children:`COCOTAL`}),(0,U.jsx)(`text`,{x:`100`,y:`850`,children:`VISTA CANA`}),(0,U.jsx)(`text`,{x:`830`,y:`700`,fontSize:`16`,fontStyle:`italic`,fill:`#4d98aa`,transform:`rotate(-80 830 700)`,children:`Mar Caribe`})]})]})}function _C({brand:e=`HABITA`,brandSubtitle:t=`REAL ESTATE`,heading:n=`Propiedades en Punta Cana`,locationLabel:r=`Punta Cana`,properties:i=xS,mapMode:a=`schematic`,tileUrl:o,tileAttribution:s,demoMode:c=!0,publicContext:l,contactFormId:u=`realestate-contact`}={}){let[d,f]=(0,H.useState)(SS),[p,m]=(0,H.useState)(``),[h,g]=(0,H.useState)([]),[_,v]=(0,H.useState)(`cocotal`),[y,b]=(0,H.useState)(!0),[x,S]=(0,H.useState)(!1),[C,w]=(0,H.useState)(`list`),[T,E]=(0,H.useState)(1),[D,O]=(0,H.useState)(!1),[k,A]=(0,H.useState)(1),[j,ee]=(0,H.useState)(!1),[te,M]=(0,H.useState)(null),N=(0,H.useRef)(null),P=CS(i,d,h,r),F=a===`live`&&j&&te?P.filter(e=>uC(e,te)):P,I=F.find(e=>e.id===_)??F[0],ne=Math.max(1,Math.ceil(F.length/4)),L=Math.min(k,ne),re=F.slice((L-1)*4,L*4),R=(e,t)=>{f(n=>({...n,[e]:t})),A(1),b(!0)},ie=e=>{v(e.id),b(!0);let t=F.findIndex(t=>t.id===e.id);t>=0&&A(Math.floor(t/4)+1)},ae=e=>g(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e]),oe=e=>{ie(e),O(!1),N.current?.showModal()};function se(e){e.preventDefault(),R(`query`,p)}function ce(){f(SS),m(``),A(1),b(!0),ee(!1)}return(0,U.jsxs)(`section`,{"aria-label":n,className:`re-search-app re-view-${C}`,children:[(0,U.jsxs)(`header`,{className:`re-header`,children:[(0,U.jsxs)(`button`,{type:`button`,className:`re-logo`,onClick:ce,children:[e,(0,U.jsx)(`span`,{children:t})]}),(0,U.jsxs)(`nav`,{"aria-label":`Operación inmobiliaria`,children:[(0,U.jsx)(`button`,{"aria-pressed":d.operation===`buy`&&d.kind!==`Proyecto`,onClick:()=>{R(`operation`,`buy`),R(`kind`,``),R(`maxPrice`,``)},children:`Comprar`}),(0,U.jsx)(`button`,{"aria-pressed":d.operation===`rent`,onClick:()=>{R(`operation`,`rent`),R(`maxPrice`,``),R(`kind`,``)},children:`Alquilar`}),(0,U.jsx)(`button`,{"aria-pressed":d.kind===`Proyecto`,onClick:()=>{R(`operation`,`buy`),R(`kind`,`Proyecto`),R(`maxPrice`,``)},children:`Proyectos`})]}),(0,U.jsxs)(`button`,{className:`re-favorites-button${d.favoritesOnly?` re-active`:``}`,"aria-pressed":d.favoritesOnly,onClick:()=>R(`favoritesOnly`,!d.favoritesOnly),children:[(0,U.jsx)(mC,{filled:d.favoritesOnly}),` Favoritos `,(0,U.jsx)(`span`,{children:h.length})]})]}),(0,U.jsxs)(`form`,{className:`re-filterbar`,onSubmit:se,children:[(0,U.jsxs)(`label`,{className:`re-location`,children:[(0,U.jsx)(pC,{}),(0,U.jsx)(`input`,{"aria-label":`Buscar por zona o propiedad`,placeholder:r,value:p,onChange:e=>m(e.target.value)})]}),(0,U.jsxs)(`div`,{className:`re-operation`,"aria-label":`Tipo de operación`,children:[(0,U.jsx)(`button`,{type:`button`,"aria-pressed":d.operation===`buy`,onClick:()=>{R(`operation`,`buy`),R(`maxPrice`,``)},children:`Comprar`}),(0,U.jsx)(`button`,{type:`button`,"aria-pressed":d.operation===`rent`,onClick:()=>{R(`operation`,`rent`),R(`maxPrice`,``)},children:`Alquilar`})]}),(0,U.jsxs)(`select`,{"aria-label":`Tipo de propiedad`,value:d.kind,onChange:e=>R(`kind`,e.target.value),children:[(0,U.jsx)(`option`,{value:``,children:`Tipo`}),[`Apartamento`,`Villa`,`Estudio`,`Proyecto`].map(e=>(0,U.jsx)(`option`,{children:e},e))]}),(0,U.jsxs)(`select`,{"aria-label":`Precio máximo en dólares`,value:d.maxPrice,onChange:e=>R(`maxPrice`,e.target.value),children:[(0,U.jsx)(`option`,{value:``,children:`Precio`}),(d.operation===`buy`?[2e5,3e5,45e4,65e4]:[1500,2500,3500]).map(e=>(0,U.jsxs)(`option`,{value:e,children:[`Hasta `,i[0]?.currency||`USD`,` `,e.toLocaleString(`en-US`)]},e))]}),(0,U.jsxs)(`select`,{"aria-label":`Mínimo de habitaciones`,value:d.beds,onChange:e=>R(`beds`,e.target.value),children:[(0,U.jsx)(`option`,{value:``,children:`Habitaciones`}),[1,2,3,4].map(e=>(0,U.jsxs)(`option`,{value:e,children:[e,`+ habitaciones`]},e))]}),(0,U.jsxs)(`button`,{type:`button`,className:`re-more${x?` re-active`:``}`,"aria-expanded":x,"aria-controls":`re-extra-filters`,onClick:()=>S(e=>!e),children:[`☷ `,(0,U.jsx)(`span`,{children:`Más filtros`})]}),(0,U.jsxs)(`button`,{className:`re-search-submit`,type:`submit`,children:[(0,U.jsx)(pC,{}),` Buscar`]})]}),x&&(0,U.jsxs)(`div`,{className:`re-extra-filters`,id:`re-extra-filters`,children:[(0,U.jsxs)(`label`,{children:[(0,U.jsx)(`input`,{type:`checkbox`,checked:d.pool,onChange:e=>R(`pool`,e.target.checked)}),` Con piscina`]}),(0,U.jsxs)(`label`,{children:[`Zona `,(0,U.jsxs)(`select`,{"aria-label":`Zona`,value:d.query,onChange:e=>{m(e.target.value),R(`query`,e.target.value)},children:[(0,U.jsx)(`option`,{value:``,children:`Todas las zonas`}),Array.from(new Set(i.map(e=>e.zone).filter(Boolean))).map(e=>(0,U.jsx)(`option`,{children:e},e))]})]}),(0,U.jsx)(`button`,{type:`button`,onClick:ce,children:`Limpiar filtros`})]}),(0,U.jsxs)(`div`,{className:`re-mobile-switch`,children:[(0,U.jsxs)(`button`,{"aria-pressed":C===`list`,onClick:()=>w(`list`),children:[`Lista · `,F.length]}),(0,U.jsx)(`button`,{"aria-pressed":C===`map`,onClick:()=>w(`map`),children:`Ver mapa`})]}),(0,U.jsxs)(`div`,{className:`re-workspace`,children:[(0,U.jsxs)(`section`,{className:`re-results`,"aria-label":`Resultados de propiedades`,children:[(0,U.jsxs)(`div`,{className:`re-results-intro`,children:[(0,U.jsx)(`span`,{className:`re-kicker`,children:`TU PRÓXIMO ESPACIO`}),(0,U.jsx)(`h1`,{children:d.favoritesOnly?`Tus propiedades favoritas`:n}),(0,U.jsx)(`div`,{className:`re-coordinate-warning`,children:a===`live`&&P.some(e=>!lC(e))&&(0,U.jsx)(`span`,{children:`Hay propiedades sin coordenadas válidas. Aparecen en la lista, pero no en el mapa.`})}),(0,U.jsxs)(`div`,{className:`re-result-count`,children:[(0,U.jsxs)(`span`,{role:`status`,children:[F.length,` `,F.length===1?`resultado`:`resultados`,c?` de muestra`:``]}),(0,U.jsxs)(`select`,{"aria-label":`Orden de resultados`,value:d.sort,onChange:e=>R(`sort`,e.target.value),children:[(0,U.jsx)(`option`,{value:`relevance`,children:`Ordenar: Relevancia`}),(0,U.jsx)(`option`,{value:`price-asc`,children:`Precio: menor a mayor`}),(0,U.jsx)(`option`,{value:`price-desc`,children:`Precio: mayor a menor`})]})]}),(0,U.jsxs)(`div`,{className:`re-chips`,children:[(0,U.jsx)(`span`,{children:d.operation===`buy`?`Comprar`:`Alquilar`}),(0,U.jsx)(`span`,{children:d.query||r}),d.pool&&(0,U.jsx)(`span`,{children:`Piscina`}),d.favoritesOnly&&(0,U.jsx)(`span`,{children:`Favoritos`}),(0,U.jsx)(`button`,{type:`button`,onClick:ce,children:`Limpiar filtros`})]})]}),(0,U.jsx)(`div`,{className:`re-property-list`,children:re.length===0?(0,U.jsxs)(`div`,{className:`re-empty`,children:[(0,U.jsx)(pC,{}),(0,U.jsx)(`h2`,{children:`No encontramos propiedades`}),(0,U.jsx)(`p`,{children:d.favoritesOnly?`Guarda alguna propiedad con el corazón o ajusta los filtros.`:`Prueba otra zona o amplía el precio y las habitaciones.`}),(0,U.jsx)(`button`,{onClick:ce,children:`Ver todas las propiedades`})]}):re.map(e=>(0,U.jsxs)(`article`,{className:`re-property${I?.id===e.id?` re-property-selected`:``}`,children:[(0,U.jsxs)(`button`,{className:`re-property-pick`,onClick:()=>ie(e),"aria-pressed":I?.id===e.id,children:[(0,U.jsx)(`img`,{src:e.image,alt:e.title,loading:`lazy`}),(0,U.jsxs)(`div`,{className:`re-property-info`,children:[(0,U.jsx)(`span`,{className:`re-operation-badge`,children:e.operation===`buy`?`Venta`:`Alquiler`}),(0,U.jsx)(`strong`,{children:wS(e)}),(0,U.jsx)(`h2`,{children:e.title}),(0,U.jsxs)(`p`,{children:[`⌖ `,e.zone,` · `,e.city||r]}),(0,U.jsx)(hC,{property:e})]})]}),(0,U.jsx)(`button`,{className:`re-heart`,"aria-label":`${h.includes(e.id)?`Quitar de`:`Añadir a`} favoritos: ${e.title}`,"aria-pressed":h.includes(e.id),onClick:()=>ae(e.id),children:(0,U.jsx)(mC,{filled:h.includes(e.id)})}),(0,U.jsx)(`button`,{className:`re-details-link`,onClick:()=>oe(e),children:`Ver ficha ↗`})]},e.id))}),F.length>0&&(0,U.jsxs)(`footer`,{className:`re-pagination`,children:[(0,U.jsxs)(`span`,{children:[(L-1)*4+1,`–`,Math.min(L*4,F.length),` de `,F.length,` propiedades`]}),(0,U.jsx)(`div`,{children:Array.from({length:ne},(e,t)=>(0,U.jsx)(`button`,{"aria-label":`Página ${t+1}`,"aria-current":L===t+1?`page`:void 0,onClick:()=>A(t+1),children:t+1},t))})]})]}),(0,U.jsxs)(`section`,{className:`re-map${a===`live`?` re-map-live`:``}`,"aria-label":`Mapa de propiedades`,children:[a===`live`?(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(fC,{properties:P,selectedId:I?.id,onSelect:ie,onBoundsChange:M,searchInView:j,tileUrl:o,tileAttribution:s}),(0,U.jsxs)(`div`,{className:`re-map-caption`,children:[r,(0,U.jsx)(`span`,{children:c?`Ubicaciones de ejemplo`:`Ubicaciones registradas`})]}),(0,U.jsxs)(`label`,{className:`re-search-in-view`,children:[(0,U.jsx)(`input`,{type:`checkbox`,checked:j,onChange:e=>{ee(e.target.checked),A(1)}}),` Buscar al mover el mapa`]})]}):(0,U.jsxs)(U.Fragment,{children:[(0,U.jsxs)(`div`,{className:`re-map-zoom`,style:{transform:`scale(${T})`},children:[(0,U.jsx)(gC,{}),F.map(e=>(0,U.jsxs)(`button`,{className:`re-map-marker${I?.id===e.id?` re-map-marker-selected`:``}`,style:{left:`${e.x}%`,top:`${e.y}%`},"aria-label":`Seleccionar ${e.title}: ${wS(e)}`,"aria-pressed":I?.id===e.id,onClick:()=>ie(e),children:[e.currency||`USD`,` `,e.price>=1e4?`${Math.round(e.price/1e3)} mil`:e.price.toLocaleString(`en-US`),e.operation===`rent`?`/mes`:``,(0,U.jsx)(`span`,{})]},e.id))]}),(0,U.jsxs)(`div`,{className:`re-map-caption`,children:[`⌖ `,r,` `,(0,U.jsx)(`span`,{children:`Mapa ilustrativo`})]}),(0,U.jsxs)(`div`,{className:`re-map-controls`,children:[(0,U.jsx)(`button`,{"aria-label":`Acercar mapa`,disabled:T>=1.6,onClick:()=>E(e=>Math.min(1.6,e+.2)),children:`+`}),(0,U.jsx)(`button`,{"aria-label":`Alejar mapa`,disabled:T<=1,onClick:()=>E(e=>Math.max(1,e-.2)),children:`−`}),(0,U.jsx)(`button`,{"aria-label":`Restablecer vista del mapa`,onClick:()=>E(1),children:`⌖`})]})]}),y&&I&&(0,U.jsxs)(`article`,{className:`re-map-card`,"aria-label":`Propiedad seleccionada`,children:[(0,U.jsx)(`button`,{className:`re-map-card-close`,"aria-label":`Cerrar ficha del mapa`,onClick:()=>b(!1),children:`×`}),(0,U.jsx)(`img`,{src:I.image,alt:I.title}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`span`,{className:`re-map-card-type`,children:I.kind}),(0,U.jsx)(`strong`,{children:wS(I)}),(0,U.jsx)(`h2`,{children:I.title}),(0,U.jsxs)(`p`,{children:[`⌖ `,I.zone,` · `,I.city||r]}),(0,U.jsx)(hC,{property:I}),(0,U.jsxs)(`button`,{className:`re-primary`,onClick:()=>oe(I),children:[`Ver propiedad `,(0,U.jsx)(`span`,{children:`→`})]})]})]}),!F.length&&(0,U.jsx)(`div`,{className:`re-map-no-results`,children:`No hay marcadores con estos filtros.`})]})]}),(0,U.jsxs)(`dialog`,{ref:N,className:`re-detail-dialog`,onClose:()=>O(!1),children:[(0,U.jsx)(`button`,{className:`re-dialog-close`,"aria-label":`Cerrar detalle`,onClick:()=>N.current?.close(),children:`×`}),I&&(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(`img`,{className:`re-detail-photo`,src:I.image,alt:I.title}),(0,U.jsxs)(`div`,{className:`re-detail-body`,children:[(0,U.jsxs)(`p`,{className:`re-kicker`,children:[c?`PROPIEDAD DE MUESTRA`:`PROPIEDAD`,` · `,I.zone]}),(0,U.jsx)(`h2`,{children:I.title}),(0,U.jsx)(`strong`,{className:`re-detail-price`,children:wS(I)}),(0,U.jsx)(hC,{property:I}),(0,U.jsx)(`p`,{children:I.description||(c?`Fotografías, características y precios de muestra.`:`Consulta los detalles y la disponibilidad de esta propiedad con nuestro equipo.`)}),l?I.listingId?(0,U.jsx)(st,{kind:`asset-request`,listingId:I.listingId,itemName:I.title,...l}):(0,U.jsx)($S,{id:u,sectionId:`${u}-dialog`,title:`Solicitar información`,showName:`yes`,showEmail:`yes`,showPhone:`yes`,showMessage:`yes`,showConsent:`yes`,consentLabel:`Acepto que me contacten sobre esta propiedad.`,websiteSlug:l.websiteSlug,pageSlug:l.pageSlug,isPublic:!0,defaultMessage:`Me interesa ${I.title}. Referencia: ${I.id}. Ubicación: ${I.address||I.zone}.`,submitLabel:`Enviar consulta`},I.id):(0,U.jsx)(U.Fragment,{children:(0,U.jsxs)(`form`,{onSubmit:e=>{e.preventDefault(),O(!0)},children:[(0,U.jsx)(`h3`,{children:`Solicitar información`}),(0,U.jsxs)(`label`,{children:[`Nombre`,(0,U.jsx)(`input`,{required:!0,autoComplete:`name`})]}),(0,U.jsxs)(`label`,{children:[`Correo electrónico`,(0,U.jsx)(`input`,{required:!0,type:`email`,autoComplete:`email`})]}),(0,U.jsx)(`button`,{type:`submit`,className:`re-primary`,children:`Preparar consulta de muestra →`}),D&&(0,U.jsx)(`p`,{role:`status`,className:`re-demo-success`,children:`Consulta de demostración preparada. Esta vista previa no envía información al CRM.`})]})})]})]})]})]})}var vC=[[18.6805,-68.4165],[18.671,-68.432],[18.6315,-68.476],[18.7035,-68.451],[18.493,-68.397],[18.675,-68.421],[18.683,-68.419],[18.6665,-68.437]],yC={brand:`HABITA`,brandSubtitle:`REAL ESTATE`,heading:`Propiedades en Punta Cana`,locationLabel:`Punta Cana`,primaryColor:`#07513c`,mapMode:`live`,demoMode:`yes`,tileUrl:cC,tileAttribution:`OpenStreetMap contributors`,contactFormId:`realestate-contact`,properties:xS.map((e,t)=>({...e,lat:vC[t][0],lng:vC[t][1],city:`Punta Cana`,address:`${e.zone}, Punta Cana`,description:`Propiedad de muestra. Sustituye la fotografía, los datos y las coordenadas por los de tu inmueble.`}))},bC={colors:{primary:`#07513c`,secondary:`#141d27`,accent:`#659b88`},fonts:{heading:`Arial, sans-serif`,body:`Arial, sans-serif`}},xC={root:{props:{title:`Inmobiliaria · Buscador con mapa`}},content:[{type:`RealEstateSearch`,props:{...yC,id:`realestate-search`}},{type:`ContactForm`,props:{id:`realestate-contact`,title:`Hablemos de tu próxima propiedad`,description:`Cuéntanos qué buscas y nuestro equipo te ayudará a encontrar opciones.`,showName:`yes`,nameLabel:`Nombre`,showEmail:`yes`,emailLabel:`Correo electrónico`,showPhone:`yes`,phoneLabel:`Teléfono`,showMessage:`yes`,messageLabel:`¿Qué propiedad o zona te interesa?`,showConsent:`no`,consentLabel:`Acepto que me contacten.`,submitLabel:`Solicitar asesoría`,successMessage:`Gracias. Recibimos tu consulta y nos pondremos en contacto contigo.`,animation:`none`}}]};function SC(e,t){return{RealEstateSearch:{label:`Inmobiliaria · Buscador con mapa`,fields:{brand:{type:`text`,label:`Nombre de la inmobiliaria`},brandSubtitle:{type:`text`,label:`Subtítulo de marca`},heading:{type:`text`,label:`Título del listado`},locationLabel:{type:`text`,label:`Ciudad o ubicación principal`},primaryColor:{type:`text`,label:`Color principal (hexadecimal)`},demoMode:{type:`radio`,label:`Mostrar avisos de propiedades de muestra`,options:[{label:`Sí`,value:`yes`},{label:`No: ya son mis propiedades`,value:`no`}]},mapMode:{type:`select`,label:`Mapa`,options:[{label:`Mapa real (OpenStreetMap por defecto)`,value:`live`},{label:`Ilustración para bocetos`,value:`schematic`}]},tileUrl:{type:`text`,label:`URL HTTPS del proveedor de mapa ({z}/{x}/{y})`},tileAttribution:{type:`text`,label:`Crédito del proveedor (si usas otro mapa)`},properties:{type:`array`,label:`Catálogo manual del tema: propiedades`,getItemSummary:e=>e.title||`Nueva propiedad`,arrayFields:{id:{type:`text`,label:`Referencia única de la propiedad`},title:{type:`text`,label:`Título`},description:{type:`textarea`,label:`Descripción`},address:{type:`text`,label:`Dirección`},zone:{type:`text`,label:`Zona o barrio`},city:{type:`text`,label:`Ciudad`},image:e,operation:{type:`radio`,label:`Operación`,options:[{label:`Venta`,value:`buy`},{label:`Alquiler mensual`,value:`rent`}]},kind:{type:`select`,label:`Tipo de propiedad`,options:[`Apartamento`,`Villa`,`Estudio`,`Proyecto`].map(e=>({label:e,value:e}))},price:{type:`number`,label:`Precio en USD (mensual para alquiler)`,min:0},beds:{type:`number`,label:`Habitaciones`,min:0},baths:{type:`number`,label:`Baños`,min:0},area:{type:`number`,label:`Superficie en m²`,min:0},pool:{type:`radio`,label:`Piscina`,options:[{label:`Sí`,value:!0},{label:`No`,value:!1}]},lat:{type:`number`,label:`Latitud del inmueble`,min:-85.0511,max:85.0511},lng:{type:`number`,label:`Longitud del inmueble`,min:-180,max:180}},defaultItemProps:{id:``,title:`Nueva propiedad`,description:``,address:``,zone:``,city:``,image:``,operation:`buy`,kind:`Apartamento`,price:0,beds:0,baths:0,area:0,pool:!1,lat:null,lng:null}}},defaultProps:yC,render:({brand:e,brandSubtitle:n,heading:r,locationLabel:i,primaryColor:a,properties:o,mapMode:s,tileUrl:c,tileAttribution:l,demoMode:u,contactFormId:d})=>(0,U.jsx)(`div`,{style:{"--re-brand-color":/^#[\da-f]{6}$/i.test(a||``)?a:`#07513c`},children:(0,U.jsx)(_C,{brand:e,brandSubtitle:n,heading:r,locationLabel:i,properties:dC(o),mapMode:s===`schematic`?`schematic`:`live`,tileUrl:c,tileAttribution:l,demoMode:u!==`no`,publicContext:t,contactFormId:d})})}}}function CC({value:e,onChange:t,readOnly:n,items:r}){let i=Array.isArray(e)?e.filter(e=>typeof e==`string`):[];function a(e){t(i.includes(e)?i.filter(t=>t!==e):[...i,e])}return r.length===0?(0,U.jsx)(`p`,{children:`No hay elementos activos. Añade productos o servicios en la pestaña del catálogo.`}):(0,U.jsx)(`div`,{className:`website-puck-catalog-picker`,children:r.map(e=>(0,U.jsxs)(`label`,{children:[(0,U.jsx)(`input`,{type:`checkbox`,checked:i.includes(e.id),disabled:n,onChange:()=>a(e.id)}),(0,U.jsxs)(`span`,{children:[e.item_type===`product`?`Producto`:`Servicio`,`: `,e.name]})]},e.id))})}function wC(e){let t=e?.trim()||``;return/^https?:\/\//i.test(t)||t.startsWith(`/`)&&!t.startsWith(`//`)||t.startsWith(`#`)?t:``}function TC(e,t=[],n){let r=QS,i={type:`custom`,label:`Imagen de la biblioteca o URL manual`,render:({value:t,onChange:n,readOnly:r})=>(0,U.jsx)(ft,{workspaceId:e,value:typeof t==`string`?t:``,onChange:n,readOnly:r})},a={...r,components:{...r.components,TourBooking:{label:`Tours · Reservas por salida`,defaultProps:{title:`Reserva tu próxima experiencia`,description:`Selecciona fecha y participantes. Confirmaremos tus cupos y recogida.`},fields:{title:{type:`text`,label:`Título`},description:{type:`textarea`,label:`Descripción`}},render:e=>(0,U.jsx)(fS,{title:e.title,description:e.description,publicContext:n})},TransferBooking:{label:`Transfers · Solicitud de reserva`,defaultProps:{title:`Solicita tu traslado`,description:`Elige tu ruta, fecha y capacidad. Confirmaremos disponibilidad contigo.`},fields:{title:{type:`text`,label:`Título`},description:{type:`textarea`,label:`Descripción`}},render:t=>(0,U.jsx)(dS,{workspaceId:e,title:t.title,description:t.description,publicContext:n})},ConnectedAssets:{label:`Catálogo conectado · Vehículos y propiedades`,fields:{title:{type:`text`,label:`Título`},kind:{type:`select`,label:`Mostrar`,options:[{label:`Ambos`,value:`all`},{label:`Vehículos`,value:`vehicle`},{label:`Propiedades`,value:`property`}]},operation:{type:`select`,label:`Modalidad`,options:[{label:`Ambas`,value:`all`},{label:`Venta`,value:`sale`},{label:`Alquiler`,value:`rent`}]}},defaultProps:{title:`Encuentra lo que buscas`,kind:`all`,operation:`all`},render:({title:t,kind:r,operation:i})=>(0,U.jsx)(Fx,{title:t,kind:r,operation:i,workspaceId:e,context:n})},...iC(i),...sC(i),...SC(i,n),...JS(i,n),...yS(i,t,n),...Mx(i,n),Header:{...r.components.Header,fields:{...r.components.Header.fields,logoUrl:i}},Hero:{...r.components.Hero,fields:{...r.components.Hero.fields,imageUrl:i}},Image:{...r.components.Image,fields:{...r.components.Image.fields,imageUrl:i}},Cards:{...r.components.Cards,fields:{...r.components.Cards.fields,items:{...r.components.Cards.fields.items,arrayFields:{...r.components.Cards.fields.items.arrayFields,imageUrl:i}}}},TourSplitHero:{label:`Viajes · Portada editorial`,fields:{eyebrow:{type:`text`,label:`Texto pequeño`},title:{type:`text`,label:`Título`},description:{type:`textarea`,label:`Descripción`},imageUrl:i,imageAlt:{type:`text`,label:`Descripción de imagen`},primaryLabel:{type:`text`,label:`Botón principal`},primaryUrl:{type:`text`,label:`Enlace principal`},secondaryLabel:{type:`text`,label:`Enlace secundario`},secondaryUrl:{type:`text`,label:`Enlace secundario URL`},animation:{type:`select`,label:`Animación`,options:[{label:`Ninguna`,value:`none`},{label:`Desvanecer y subir`,value:`fade-up`},{label:`Desvanecer`,value:`fade-in`},{label:`Deslizar`,value:`slide-left`},{label:`Acercamiento`,value:`zoom-in`}]}},defaultProps:{eyebrow:`VIAJES CON SENTIDO`,title:`El mundo se disfruta mejor sin prisa`,description:`Diseñamos rutas cuidadas por personas que conocen cada destino.`,imageUrl:``,imageAlt:`Paisaje de viaje`,primaryLabel:`Explorar itinerarios`,primaryUrl:`#itinerarios`,secondaryLabel:`Cómo viajamos`,secondaryUrl:`#contacto`,animation:`fade-up`},render:({eyebrow:e,title:t,description:n,imageUrl:r,imageAlt:i,primaryLabel:a,primaryUrl:o,secondaryLabel:s,secondaryUrl:c,animation:l})=>(0,U.jsxs)(`section`,{id:`inicio`,className:`tour-split-hero${l&&l!==`none`?` puck-animate-${l}`:``}`,children:[(0,U.jsxs)(`div`,{className:`tour-split-copy`,children:[(0,U.jsx)(`span`,{children:e}),(0,U.jsx)(`h1`,{children:t}),(0,U.jsx)(`p`,{children:n}),(0,U.jsxs)(`div`,{className:`tour-split-actions`,children:[(0,U.jsx)(`a`,{className:`tour-primary-link`,href:wC(String(o||`#itinerarios`)),children:a}),(0,U.jsxs)(`a`,{className:`tour-secondary-link`,href:wC(String(c||`#contacto`)),children:[s,` `,(0,U.jsx)(`b`,{"aria-hidden":`true`,children:`↗`})]})]}),(0,U.jsx)(`small`,{children:`Viajes en grupos pequeños · Atención local`})]}),(0,U.jsxs)(`div`,{className:`tour-split-image-wrap`,children:[r?(0,U.jsx)(`img`,{src:String(r),alt:String(i||``)}):(0,U.jsx)(`div`,{className:`tour-image-placeholder`,children:`Añade una imagen de destino`}),(0,U.jsxs)(`div`,{className:`tour-image-note`,children:[`Rutas pensadas para ti `,(0,U.jsx)(`span`,{children:`✳`})]})]})]})},TourStats:{label:`Viajes · Franja de datos`,fields:{intro:{type:`text`,label:`Texto introductorio`},firstValue:{type:`text`,label:`Dato 1`},firstLabel:{type:`text`,label:`Descripción 1`},secondValue:{type:`text`,label:`Dato 2`},secondLabel:{type:`text`,label:`Descripción 2`},thirdValue:{type:`text`,label:`Dato 3`},thirdLabel:{type:`text`,label:`Descripción 3`}},defaultProps:{intro:`La diferencia está en los detalles`,firstValue:`12+`,firstLabel:`años creando viajes`,secondValue:`38`,secondLabel:`rutas seleccionadas`,thirdValue:`1:8`,thirdLabel:`guía por viajeros`},render:({intro:e,firstValue:t,firstLabel:n,secondValue:r,secondLabel:i,thirdValue:a,thirdLabel:o})=>(0,U.jsxs)(`section`,{className:`tour-stats`,children:[(0,U.jsx)(`p`,{children:e}),(0,U.jsxs)(`div`,{children:[(0,U.jsxs)(`article`,{children:[(0,U.jsx)(`strong`,{children:t}),(0,U.jsx)(`span`,{children:n})]}),(0,U.jsxs)(`article`,{children:[(0,U.jsx)(`strong`,{children:r}),(0,U.jsx)(`span`,{children:i})]}),(0,U.jsxs)(`article`,{children:[(0,U.jsx)(`strong`,{children:a}),(0,U.jsx)(`span`,{children:o})]})]})]})},TourItineraries:{label:`Viajes · Itinerarios destacados`,fields:{title:{type:`text`,label:`Título`},intro:{type:`textarea`,label:`Descripción`},animation:{type:`select`,label:`Animación`,options:[{label:`Ninguna`,value:`none`},{label:`Desvanecer y subir`,value:`fade-up`},{label:`Desvanecer`,value:`fade-in`},{label:`Deslizar`,value:`slide-left`},{label:`Acercamiento`,value:`zoom-in`}]},items:{type:`array`,label:`Itinerarios`,arrayFields:{destination:{type:`text`,label:`Destino`},duration:{type:`text`,label:`Duración`},title:{type:`text`,label:`Nombre de la ruta`},description:{type:`textarea`,label:`Descripción`},price:{type:`text`,label:`Precio desde`},imageUrl:i,imageAlt:{type:`text`,label:`Descripción de imagen`}}}},defaultProps:{title:`Elige tu próxima historia`,intro:`Rutas seleccionadas para descubrir cada lugar de cerca.`,animation:`fade-up`,items:[{destination:`Samaná · República Dominicana`,duration:`5 días`,title:`Entre cascadas y mar`,description:`Pueblos costeros, naturaleza y tiempo para explorar.`,price:`US$ 690`,imageUrl:`https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=85`,imageAlt:`Costa tropical`},{destination:`Marruecos · África`,duration:`8 días`,title:`Colores del Atlas`,description:`Medinas, montañas y noches bajo un cielo abierto.`,price:`US$ 1,240`,imageUrl:`https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1200&q=85`,imageAlt:`Arquitectura de Marruecos`}]},render:({title:e,intro:t,items:n,animation:r})=>(0,U.jsxs)(`section`,{id:`itinerarios`,className:`tour-itineraries${r&&r!==`none`?` puck-animate-${r}`:``}`,children:[(0,U.jsxs)(`header`,{children:[(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`span`,{children:`VIAJES SELECCIONADOS`}),(0,U.jsx)(`h2`,{children:e})]}),(0,U.jsx)(`p`,{children:t})]}),(0,U.jsx)(`div`,{className:`tour-itinerary-list`,children:(Array.isArray(n)?n:[]).map((e,t)=>(0,U.jsxs)(`article`,{className:`tour-itinerary`,children:[(0,U.jsxs)(`div`,{className:`tour-itinerary-photo`,children:[e.imageUrl&&(0,U.jsx)(`img`,{src:e.imageUrl,alt:e.imageAlt||``,loading:`lazy`}),(0,U.jsx)(`span`,{children:e.duration})]}),(0,U.jsxs)(`div`,{className:`tour-itinerary-info`,children:[(0,U.jsx)(`span`,{children:e.destination}),(0,U.jsx)(`h3`,{children:e.title}),(0,U.jsx)(`p`,{children:e.description}),(0,U.jsxs)(`footer`,{children:[(0,U.jsxs)(`strong`,{children:[`Desde `,e.price]}),(0,U.jsxs)(`a`,{href:`#contacto`,"aria-label":`Consultar ${e.title}`,children:[`Consultar `,(0,U.jsx)(`b`,{children:`↗`})]})]})]})]},`${e.title}-${t}`))})]})},CatalogCards:{label:`Catálogo de productos y servicios`,fields:{animation:{type:`select`,label:`Animación al aparecer`,options:[{label:`Sin animación`,value:`none`},{label:`Desvanecer y subir`,value:`fade-up`},{label:`Desvanecer`,value:`fade-in`},{label:`Deslizar desde la izquierda`,value:`slide-left`},{label:`Acercamiento suave`,value:`zoom-in`}]},title:{type:`text`,label:`Título de la sección`},description:{type:`textarea`,label:`Descripción`},columns:{type:`select`,label:`Columnas`,options:[{label:`2 columnas`,value:`2`},{label:`3 columnas`,value:`3`},{label:`4 columnas`,value:`4`}]},itemIds:{type:`custom`,label:`Elementos del catálogo`,render:({value:e,onChange:n,readOnly:r})=>(0,U.jsx)(CC,{value:e,onChange:n,readOnly:r,items:t})}},defaultProps:{animation:`none`,title:`Productos y servicios`,description:``,columns:`3`,itemIds:[]},render:({title:e,description:r,columns:i,itemIds:a,animation:o})=>{let s=(Array.isArray(a)?a:[]).map(e=>t.find(t=>t.id===e)).filter(e=>!!(e&&e.is_active));return n&&s.length===0?null:(0,U.jsxs)(`section`,{className:`puck-cards-section${o&&o!==`none`?` puck-animate-${o}`:``}`,id:`servicios`,children:[e&&(0,U.jsx)(`h2`,{children:e}),r&&(0,U.jsx)(`p`,{children:r}),s.length===0?(0,U.jsx)(`p`,{children:`Selecciona productos o servicios del catálogo para mostrar aquí.`}):(0,U.jsx)(`div`,{className:`puck-cards-grid puck-cards-${i}`,children:s.map(e=>{let t=wC(e.image_url),r=wC(e.link_url);return(0,U.jsxs)(`article`,{className:`puck-card`,children:[t&&(0,U.jsx)(`img`,{src:t,alt:e.name,loading:`lazy`}),(0,U.jsxs)(`div`,{className:`puck-card-content`,children:[(0,U.jsx)(`h3`,{children:e.name}),e.description&&(0,U.jsx)(`p`,{children:e.description}),e.price!==null&&(0,U.jsx)(`strong`,{children:new Intl.NumberFormat(`es-DO`,{style:`currency`,currency:e.currency||`DOP`}).format(e.price)}),r&&(0,U.jsx)(`a`,{href:r,children:`Más información`}),n&&(0,U.jsx)(st,{listingId:e.id,itemName:e.name,websiteSlug:n.websiteSlug,pageSlug:n.pageSlug})]})]},e.id)})})]})}},ContactForm:{label:`Formulario de contacto`,fields:{animation:{type:`select`,label:`Animación al aparecer`,options:[{label:`Sin animación`,value:`none`},{label:`Desvanecer y subir`,value:`fade-up`},{label:`Desvanecer`,value:`fade-in`},{label:`Deslizar desde la izquierda`,value:`slide-left`},{label:`Acercamiento suave`,value:`zoom-in`}]},title:{type:`text`,label:`Título`},description:{type:`textarea`,label:`Descripción`},showName:{type:`radio`,label:`Mostrar nombre`,options:[{label:`Sí`,value:`yes`},{label:`No`,value:`no`}]},nameLabel:{type:`text`,label:`Etiqueta de nombre`},showEmail:{type:`radio`,label:`Mostrar correo`,options:[{label:`Sí`,value:`yes`},{label:`No`,value:`no`}]},emailLabel:{type:`text`,label:`Etiqueta de correo`},showPhone:{type:`radio`,label:`Mostrar teléfono`,options:[{label:`Sí`,value:`yes`},{label:`No`,value:`no`}]},phoneLabel:{type:`text`,label:`Etiqueta de teléfono`},showMessage:{type:`radio`,label:`Mostrar mensaje`,options:[{label:`Sí`,value:`yes`},{label:`No`,value:`no`}]},messageLabel:{type:`text`,label:`Etiqueta del mensaje`},showConsent:{type:`radio`,label:`Pedir consentimiento`,options:[{label:`Sí`,value:`yes`},{label:`No`,value:`no`}]},consentLabel:{type:`text`,label:`Texto de consentimiento`},submitLabel:{type:`text`,label:`Texto del botón`},successMessage:{type:`text`,label:`Mensaje de confirmación`}},defaultProps:{animation:`none`,title:`Contáctanos`,description:`Déjanos tus datos y nos pondremos en contacto contigo.`,showName:`yes`,nameLabel:`Nombre`,showEmail:`yes`,emailLabel:`Correo electrónico`,showPhone:`no`,phoneLabel:`Teléfono`,showMessage:`yes`,messageLabel:`¿Cómo podemos ayudarte?`,showConsent:`no`,consentLabel:`Acepto que me contacten sobre esta solicitud.`,submitLabel:`Enviar mensaje`,successMessage:`Gracias. Recibimos tu mensaje.`},render:({animation:e,...t})=>(0,U.jsx)(`div`,{className:e&&e!==`none`?`puck-animate-${e}`:``,children:(0,U.jsx)($S,{...t,websiteSlug:n?.websiteSlug,pageSlug:n?.pageSlug,isPublic:!!n})})}}};for(let e of pS){let t=a.components[e];if(!t)continue;let n=t.render;t.fields={dataSource:{type:`select`,label:`Contenido de esta plantilla`,options:[{label:`Automático: datos de mi CRM`,value:`crm`},{label:`Manual: contenido de muestra o propio`,value:`manual`}]},...t.fields},t.render=t=>(0,U.jsx)(gS,{type:e,component:n,props:t});let r=t.fields,i=[`vehicles`,`properties`,`products`,`destinations`,`stops`,`itemIds`,...e===`TourItineraries`?[`items`]:[]];t.resolveFields=({props:e})=>e.dataSource===`manual`?r:Object.fromEntries(Object.entries(r).filter(([e])=>!i.includes(e)))}return a.categories={catalogs:{title:`Catálogos de mi CRM`,components:[`CatalogCards`,`ConnectedAssets`,`TransferBooking`,`TourBooking`],defaultExpanded:!0},design:{title:`Diseño y plantillas`,components:Object.keys(a.components).filter(e=>![`CatalogCards`,`ConnectedAssets`,`TransferBooking`,`TourBooking`].includes(e)),defaultExpanded:!0}},a}export{rS as A,tS as C,aS as D,sS as E,ov as F,xt as I,mt as L,$x as M,Fx as N,Kx as O,jx as P,gt as R,Ix as S,qx as T,Vx as _,GS as a,Hx as b,uS as c,oS as d,Gx as f,Jx as g,Bx as h,KS as i,Yx as j,Rx as k,lS as l,nS as m,xC as n,WS as o,Lx as p,bC as r,US as s,TC as t,Ux as u,eS as v,zx as w,Wx as x,iS as y};