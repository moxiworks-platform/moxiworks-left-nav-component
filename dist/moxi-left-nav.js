!function(e){var t=window.webpackHotUpdate;window.webpackHotUpdate=function(e,n){!function(e,t){if(!w[e]||!b[e])return;for(var n in b[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(m[n]=t[n]);0==--y&&0===g&&C()}(e,n),t&&t(e,n)};var n,r=!0,s="78e9944e396d2e036c7d",i=1e4,o={},a=[],l=[];function d(e){var t=E[e];if(!t)return A;var r=function(r){return t.hot.active?(E[r]?-1===E[r].parents.indexOf(e)&&E[r].parents.push(e):(a=[e],n=r),-1===t.children.indexOf(r)&&t.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),a=[]),A(r)},s=function(e){return{configurable:!0,enumerable:!0,get:function(){return A[e]},set:function(t){A[e]=t}}};for(var i in A)Object.prototype.hasOwnProperty.call(A,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(r,i,s(i));return r.e=function(e){return"ready"===u&&h("prepare"),g++,A.e(e).then(t,(function(e){throw t(),e}));function t(){g--,"prepare"===u&&(v[e]||P(e),0===g&&0===y&&C())}},r.t=function(e,t){return 1&t&&(e=r(e)),A.t(e,-2&t)},r}function c(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:n!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:x,apply:N,status:function(e){if(!e)return u;p.push(e)},addStatusHandler:function(e){p.push(e)},removeStatusHandler:function(e){var t=p.indexOf(e);t>=0&&p.splice(t,1)},data:o[e]};return n=void 0,t}var p=[],u="idle";function h(e){u=e;for(var t=0;t<p.length;t++)p[t].call(null,e)}var f,m,_,y=0,g=0,v={},b={},w={};function S(e){return+e+""===e?+e:e}function x(e){if("idle"!==u)throw new Error("check() is only allowed in idle status");return r=e,h("check"),(t=i,t=t||1e4,new Promise((function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,i=A.p+""+s+".hot-update.json";r.open("GET",i,!0),r.timeout=t,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+i+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+i+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void n(e)}e(t)}}}))).then((function(e){if(!e)return h("idle"),null;b={},v={},w=e.c,_=e.h,h("prepare");var t=new Promise((function(e,t){f={resolve:e,reject:t}}));m={};return P(0),"prepare"===u&&0===g&&0===y&&C(),t}));var t}function P(e){w[e]?(b[e]=!0,y++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=A.p+""+e+"."+s+".hot-update.js",document.head.appendChild(t)}(e)):v[e]=!0}function C(){h("ready");var e=f;if(f=null,e)if(r)Promise.resolve().then((function(){return N(r)})).then((function(t){e.resolve(t)}),(function(t){e.reject(t)}));else{var t=[];for(var n in m)Object.prototype.hasOwnProperty.call(m,n)&&t.push(S(n));e.resolve(t)}}function N(t){if("ready"!==u)throw new Error("apply() is only allowed in ready status");var n,r,i,l,d;function c(e){for(var t=[e],n={},r=t.map((function(e){return{chain:[e],id:e}}));r.length>0;){var s=r.pop(),i=s.id,o=s.chain;if((l=E[i])&&!l.hot._selfAccepted){if(l.hot._selfDeclined)return{type:"self-declined",chain:o,moduleId:i};if(l.hot._main)return{type:"unaccepted",chain:o,moduleId:i};for(var a=0;a<l.parents.length;a++){var d=l.parents[a],c=E[d];if(c){if(c.hot._declinedDependencies[i])return{type:"declined",chain:o.concat([d]),moduleId:i,parentId:d};-1===t.indexOf(d)&&(c.hot._acceptedDependencies[i]?(n[d]||(n[d]=[]),p(n[d],[i])):(delete n[d],t.push(d),r.push({chain:o.concat([d]),id:d})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var f={},y=[],g={},v=function(){console.warn("[HMR] unexpected require("+x.moduleId+") to disposed module")};for(var b in m)if(Object.prototype.hasOwnProperty.call(m,b)){var x;d=S(b);var P=!1,C=!1,N=!1,O="";switch((x=m[b]?c(d):{type:"disposed",moduleId:b}).chain&&(O="\nUpdate propagation: "+x.chain.join(" -> ")),x.type){case"self-declined":t.onDeclined&&t.onDeclined(x),t.ignoreDeclined||(P=new Error("Aborted because of self decline: "+x.moduleId+O));break;case"declined":t.onDeclined&&t.onDeclined(x),t.ignoreDeclined||(P=new Error("Aborted because of declined dependency: "+x.moduleId+" in "+x.parentId+O));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(x),t.ignoreUnaccepted||(P=new Error("Aborted because "+d+" is not accepted"+O));break;case"accepted":t.onAccepted&&t.onAccepted(x),C=!0;break;case"disposed":t.onDisposed&&t.onDisposed(x),N=!0;break;default:throw new Error("Unexception type "+x.type)}if(P)return h("abort"),Promise.reject(P);if(C)for(d in g[d]=m[d],p(y,x.outdatedModules),x.outdatedDependencies)Object.prototype.hasOwnProperty.call(x.outdatedDependencies,d)&&(f[d]||(f[d]=[]),p(f[d],x.outdatedDependencies[d]));N&&(p(y,[x.moduleId]),g[d]=v)}var T,k=[];for(r=0;r<y.length;r++)d=y[r],E[d]&&E[d].hot._selfAccepted&&g[d]!==v&&k.push({module:d,errorHandler:E[d].hot._selfAccepted});h("dispose"),Object.keys(w).forEach((function(e){!1===w[e]&&function(e){delete installedChunks[e]}(e)}));for(var V,j,M=y.slice();M.length>0;)if(d=M.pop(),l=E[d]){var U={},D=l.hot._disposeHandlers;for(i=0;i<D.length;i++)(n=D[i])(U);for(o[d]=U,l.hot.active=!1,delete E[d],delete f[d],i=0;i<l.children.length;i++){var H=E[l.children[i]];H&&((T=H.parents.indexOf(d))>=0&&H.parents.splice(T,1))}}for(d in f)if(Object.prototype.hasOwnProperty.call(f,d)&&(l=E[d]))for(j=f[d],i=0;i<j.length;i++)V=j[i],(T=l.children.indexOf(V))>=0&&l.children.splice(T,1);for(d in h("apply"),s=_,g)Object.prototype.hasOwnProperty.call(g,d)&&(e[d]=g[d]);var R=null;for(d in f)if(Object.prototype.hasOwnProperty.call(f,d)&&(l=E[d])){j=f[d];var I=[];for(r=0;r<j.length;r++)if(V=j[r],n=l.hot._acceptedDependencies[V]){if(-1!==I.indexOf(n))continue;I.push(n)}for(r=0;r<I.length;r++){n=I[r];try{n(j)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:d,dependencyId:j[r],error:e}),t.ignoreErrored||R||(R=e)}}}for(r=0;r<k.length;r++){var q=k[r];d=q.module,a=[d];try{A(d)}catch(e){if("function"==typeof q.errorHandler)try{q.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:d,error:n,originalError:e}),t.ignoreErrored||R||(R=n),R||(R=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:d,error:e}),t.ignoreErrored||R||(R=e)}}return R?(h("fail"),Promise.reject(R)):(h("idle"),new Promise((function(e){e(y)})))}var E={};function A(t){if(E[t])return E[t].exports;var n=E[t]={i:t,l:!1,exports:{},hot:c(t),parents:(l=a,a=[],l),children:[]};return e[t].call(n.exports,n,n.exports,d(t)),n.l=!0,n.exports}A.m=e,A.c=E,A.d=function(e,t,n){A.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},A.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},A.t=function(e,t){if(1&t&&(e=A(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(A.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)A.d(n,r,function(t){return e[t]}.bind(null,r));return n},A.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return A.d(t,"a",t),t},A.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},A.p="",A.h=function(){return s},d(0)(A.s=0)}([function(e,t,n){"use strict";n.r(t);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const r=new WeakMap,s=e=>"function"==typeof e&&r.has(e),i=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,o=(e,t,n=null)=>{for(;t!==n;){const n=t.nextSibling;e.removeChild(t),t=n}},a={},l={},d=`{{lit-${String(Math.random()).slice(2)}}}`,c=`\x3c!--${d}--\x3e`,p=new RegExp(`${d}|${c}`),u="$lit$";class h{constructor(e,t){this.parts=[],this.element=t;const n=[],r=[],s=document.createTreeWalker(t.content,133,null,!1);let i=0,o=-1,a=0;const{strings:l,values:{length:c}}=e;for(;a<c;){const e=s.nextNode();if(null!==e){if(o++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:n}=t;let r=0;for(let e=0;e<n;e++)f(t[e].name,u)&&r++;for(;r-- >0;){const t=l[a],n=y.exec(t)[2],r=n.toLowerCase()+u,s=e.getAttribute(r);e.removeAttribute(r);const i=s.split(p);this.parts.push({type:"attribute",index:o,name:n,strings:i}),a+=i.length-1}}"TEMPLATE"===e.tagName&&(r.push(e),s.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(d)>=0){const r=e.parentNode,s=t.split(p),i=s.length-1;for(let t=0;t<i;t++){let n,i=s[t];if(""===i)n=_();else{const e=y.exec(i);null!==e&&f(e[2],u)&&(i=i.slice(0,e.index)+e[1]+e[2].slice(0,-u.length)+e[3]),n=document.createTextNode(i)}r.insertBefore(n,e),this.parts.push({type:"node",index:++o})}""===s[i]?(r.insertBefore(_(),e),n.push(e)):e.data=s[i],a+=i}}else if(8===e.nodeType)if(e.data===d){const t=e.parentNode;null!==e.previousSibling&&o!==i||(o++,t.insertBefore(_(),e)),i=o,this.parts.push({type:"node",index:o}),null===e.nextSibling?e.data="":(n.push(e),o--),a++}else{let t=-1;for(;-1!==(t=e.data.indexOf(d,t+1));)this.parts.push({type:"node",index:-1}),a++}}else s.currentNode=r.pop()}for(const e of n)e.parentNode.removeChild(e)}}const f=(e,t)=>{const n=e.length-t.length;return n>=0&&e.slice(n)===t},m=e=>-1!==e.index,_=()=>document.createComment(""),y=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class g{constructor(e,t,n){this.__parts=[],this.template=e,this.processor=t,this.options=n}update(e){let t=0;for(const n of this.__parts)void 0!==n&&n.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=i?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],n=this.template.parts,r=document.createTreeWalker(e,133,null,!1);let s,o=0,a=0,l=r.nextNode();for(;o<n.length;)if(s=n[o],m(s)){for(;a<s.index;)a++,"TEMPLATE"===l.nodeName&&(t.push(l),r.currentNode=l.content),null===(l=r.nextNode())&&(r.currentNode=t.pop(),l=r.nextNode());if("node"===s.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(l.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,s.name,s.strings,this.options));o++}else this.__parts.push(void 0),o++;return i&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const v=` ${d} `;class b{constructor(e,t,n,r){this.strings=e,this.values=t,this.type=n,this.processor=r}getHTML(){const e=this.strings.length-1;let t="",n=!1;for(let r=0;r<e;r++){const e=this.strings[r],s=e.lastIndexOf("\x3c!--");n=(s>-1||n)&&-1===e.indexOf("--\x3e",s+1);const i=y.exec(e);t+=null===i?e+(n?v:c):e.substr(0,i.index)+i[1]+i[2]+u+i[3]+d}return t+=this.strings[e]}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const w=e=>null===e||!("object"==typeof e||"function"==typeof e),S=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class x{constructor(e,t,n){this.dirty=!0,this.element=e,this.name=t,this.strings=n,this.parts=[];for(let e=0;e<n.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new P(this)}_getValue(){const e=this.strings,t=e.length-1;let n="";for(let r=0;r<t;r++){n+=e[r];const t=this.parts[r];if(void 0!==t){const e=t.value;if(w(e)||!S(e))n+="string"==typeof e?e:String(e);else for(const t of e)n+="string"==typeof t?t:String(t)}}return n+=e[t]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class P{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===a||w(e)&&e===this.value||(this.value=e,s(e)||(this.committer.dirty=!0))}commit(){for(;s(this.value);){const e=this.value;this.value=a,e(this)}this.value!==a&&this.committer.commit()}}class C{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(_()),this.endNode=e.appendChild(_())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=_()),e.__insert(this.endNode=_())}insertAfterPart(e){e.__insert(this.startNode=_()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){for(;s(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=a,e(this)}const e=this.__pendingValue;e!==a&&(w(e)?e!==this.value&&this.__commitText(e):e instanceof b?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):S(e)?this.__commitIterable(e):e===l?(this.value=l,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,n="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=n:this.__commitNode(document.createTextNode(n)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof g&&this.value.template===t)this.value.update(e.values);else{const n=new g(t,e.processor,this.options),r=n._clone();n.update(e.values),this.__commitNode(r),this.value=n}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n,r=0;for(const s of e)void 0===(n=t[r])&&(n=new C(this.options),t.push(n),0===r?n.appendIntoPart(this):n.insertAfterPart(t[r-1])),n.setValue(s),n.commit(),r++;r<t.length&&(t.length=r,this.clear(n&&n.endNode))}clear(e=this.startNode){o(this.startNode.parentNode,e.nextSibling,this.endNode)}}class N{constructor(e,t,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=n}setValue(e){this.__pendingValue=e}commit(){for(;s(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=a,e(this)}if(this.__pendingValue===a)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=a}}class E extends x{constructor(e,t,n){super(e,t,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new A(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class A extends P{}let O=!1;try{const e={get capture(){return O=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class T{constructor(e,t,n){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=n,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;s(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=a,e(this)}if(this.__pendingValue===a)return;const e=this.__pendingValue,t=this.value,n=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),r=null!=e&&(null==t||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),r&&(this.__options=k(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=a}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const k=e=>e&&(O?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const V=new class{handleAttributeExpressions(e,t,n,r){const s=t[0];if("."===s){return new E(e,t.slice(1),n).parts}return"@"===s?[new T(e,t.slice(1),r.eventContext)]:"?"===s?[new N(e,t.slice(1),n)]:new x(e,t,n).parts}handleTextExpression(e){return new C(e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function j(e){let t=M.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},M.set(e.type,t));let n=t.stringsArray.get(e.strings);if(void 0!==n)return n;const r=e.strings.join(d);return void 0===(n=t.keyString.get(r))&&(n=new h(e,e.getTemplateElement()),t.keyString.set(r,n)),t.stringsArray.set(e.strings,n),n}const M=new Map,U=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const D=(e,...t)=>new b(e,t,"html",V),H=133;function R(e,t){const{element:{content:n},parts:r}=e,s=document.createTreeWalker(n,H,null,!1);let i=q(r),o=r[i],a=-1,l=0;const d=[];let c=null;for(;s.nextNode();){a++;const e=s.currentNode;for(e.previousSibling===c&&(c=null),t.has(e)&&(d.push(e),null===c&&(c=e)),null!==c&&l++;void 0!==o&&o.index===a;)o.index=null!==c?-1:o.index-l,o=r[i=q(r,i)]}d.forEach(e=>e.parentNode.removeChild(e))}const I=e=>{let t=11===e.nodeType?0:1;const n=document.createTreeWalker(e,H,null,!1);for(;n.nextNode();)t++;return t},q=(e,t=-1)=>{for(let n=t+1;n<e.length;n++){const t=e[n];if(m(t))return n}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const z=(e,t)=>`${e}--${t}`;let L=!0;void 0===window.ShadyCSS?L=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),L=!1);const F=e=>t=>{const n=z(t.type,e);let r=M.get(n);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},M.set(n,r));let s=r.stringsArray.get(t.strings);if(void 0!==s)return s;const i=t.strings.join(d);if(void 0===(s=r.keyString.get(i))){const n=t.getTemplateElement();L&&window.ShadyCSS.prepareTemplateDom(n,e),s=new h(t,n),r.keyString.set(i,s)}return r.stringsArray.set(t.strings,s),s},W=["html","svg"],$=new Set,B=(e,t,n)=>{$.add(e);const r=n?n.element:document.createElement("template"),s=t.querySelectorAll("style"),{length:i}=s;if(0===i)return void window.ShadyCSS.prepareTemplateStyles(r,e);const o=document.createElement("style");for(let e=0;e<i;e++){const t=s[e];t.parentNode.removeChild(t),o.textContent+=t.textContent}(e=>{W.forEach(t=>{const n=M.get(z(t,e));void 0!==n&&n.keyString.forEach(e=>{const{element:{content:t}}=e,n=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{n.add(e)}),R(e,n)})})})(e);const a=r.content;n?function(e,t,n=null){const{element:{content:r},parts:s}=e;if(null==n)return void r.appendChild(t);const i=document.createTreeWalker(r,H,null,!1);let o=q(s),a=0,l=-1;for(;i.nextNode();){for(l++,i.currentNode===n&&(a=I(t),n.parentNode.insertBefore(t,n));-1!==o&&s[o].index===l;){if(a>0){for(;-1!==o;)s[o].index+=a,o=q(s,o);return}o=q(s,o)}}}(n,o,a.firstChild):a.insertBefore(o,a.firstChild),window.ShadyCSS.prepareTemplateStyles(r,e);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)t.insertBefore(l.cloneNode(!0),t.firstChild);else if(n){a.insertBefore(o,a.firstChild);const e=new Set;e.add(o),R(n,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const J={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},X=(e,t)=>t!==e&&(t==t||e==e),G={attribute:!0,type:String,converter:J,reflect:!1,hasChanged:X},K=Promise.resolve(!0),Q=1,Y=4,Z=8,ee=16,te=32,ne="finalized";class re extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=K,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,n)=>{const r=this._attributeNameForProperty(n,t);void 0!==r&&(this._attributeToPropertyMap.set(r,n),e.push(r))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=G){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const n="symbol"==typeof e?Symbol():`__${e}`;Object.defineProperty(this.prototype,e,{get(){return this[n]},set(t){const r=this[e];this[n]=t,this._requestUpdate(e,r)},configurable:!0,enumerable:!0})}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty(ne)||e.finalize(),this[ne]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const n of t)this.createProperty(n,e[n])}}static _attributeNameForProperty(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,n=X){return n(e,t)}static _propertyValueFromAttribute(e,t){const n=t.type,r=t.converter||J,s="function"==typeof r?r:r.fromAttribute;return s?s(e,n):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const n=t.type,r=t.converter;return(r&&r.toAttribute||J.toAttribute)(e,n)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|te,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,n){t!==n&&this._attributeToProperty(e,n)}_propertyToAttribute(e,t,n=G){const r=this.constructor,s=r._attributeNameForProperty(e,n);if(void 0!==s){const e=r._propertyValueToAttribute(t,n);if(void 0===e)return;this._updateState=this._updateState|Z,null==e?this.removeAttribute(s):this.setAttribute(s,e),this._updateState=this._updateState&~Z}}_attributeToProperty(e,t){if(this._updateState&Z)return;const n=this.constructor,r=n._attributeToPropertyMap.get(e);if(void 0!==r){const e=n._classProperties.get(r)||G;this._updateState=this._updateState|ee,this[r]=n._propertyValueFromAttribute(t,e),this._updateState=this._updateState&~ee}}_requestUpdate(e,t){let n=!0;if(void 0!==e){const r=this.constructor,s=r._classProperties.get(e)||G;r._valueHasChanged(this[e],t,s.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==s.reflect||this._updateState&ee||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,s))):n=!1}!this._hasRequestedUpdate&&n&&this._enqueueUpdate()}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){let e,t;this._updateState=this._updateState|Y;const n=this._updatePromise;this._updatePromise=new Promise((n,r)=>{e=n,t=r});try{await n}catch(e){}this._hasConnected||await new Promise(e=>this._hasConnectedResolver=e);try{const e=this.performUpdate();null!=e&&await e}catch(e){t(e)}e(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&te}get _hasRequestedUpdate(){return this._updateState&Y}get hasUpdated(){return this._updateState&Q}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{(e=this.shouldUpdate(t))&&this.update(t)}catch(t){throw e=!1,t}finally{this._markUpdated()}e&&(this._updateState&Q||(this._updateState=this._updateState|Q,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~Y}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0)}updated(e){}firstUpdated(e){}}re[ne]=!0;const se="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ie=Symbol();class oe{constructor(e,t){if(t!==ie)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(se?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const ae=(e,...t)=>{const n=t.reduce((t,n,r)=>t+(e=>{if(e instanceof oe)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1],e[0]);return new oe(n,ie)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.2.1");const le=e=>e.flat?e.flat(1/0):function e(t,n=[]){for(let r=0,s=t.length;r<s;r++){const s=t[r];Array.isArray(s)?e(s,n):n.push(s)}return n}(e);class de extends re{static finalize(){super.finalize.call(this),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const e=this.styles,t=[];if(Array.isArray(e)){le(e).reduceRight((e,t)=>(e.add(t),e),new Set).forEach(e=>t.unshift(e))}else e&&t.push(e);return t}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?se?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){super.update(e);const t=this.render();t instanceof b&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){}}de.finalized=!0,de.render=(e,t,n)=>{if(!n||"object"!=typeof n||!n.scopeName)throw new Error("The `scopeName` option is required.");const r=n.scopeName,s=U.has(t),i=L&&11===t.nodeType&&!!t.host,a=i&&!$.has(r),l=a?document.createDocumentFragment():t;if(((e,t,n)=>{let r=U.get(t);void 0===r&&(o(t,t.firstChild),U.set(t,r=new C(Object.assign({templateFactory:j},n))),r.appendInto(t)),r.setValue(e),r.commit()})(e,l,Object.assign({templateFactory:F(r)},n)),a){const e=U.get(l);U.delete(l);const n=e.value instanceof g?e.value.template:void 0;B(r,l,n),o(t,t.firstChild),t.appendChild(l),U.set(t,e)}!s&&i&&window.ShadyCSS.styleElement(t.host)};customElements.define("moxi-left-nav",class extends de{static get properties(){return{message:{type:String}}}static get styles(){return ae`
      #moxi-left-navigation {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        font-family: 'Muli', sans-serif;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        width: 225px;
        background: #000;
        padding: 0;
        overflow-y: auto;
      }
      #brokerage-logo {
        padding: 16px;
      }
      #brokerage-logo img {
        display:block;
        margin: auto;
      }
      #moxi-left-nav-search {
        margin-bottom: 16px;
        padding: 0 16px;
      }
      #moxi-left-nav-search input {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        width: 193px;
        padding: 5.5px;
        border-radius: 25px;
        border: 0;
      }
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
      }
      li {
        color: #fff;
        padding: 6px 16px;
        cursor: pointer;
      }
    `}constructor(){super()}render(){return D`
      <div id="moxi-left-navigation">
        <div id="brokerage-logo">
          <img src="https://www.windermere.com/assets/shared/WRE_logo_white-268x100-18c23149838895d8ecfa41867b9bb393.png" width="150" />
        </div>
        <div id="moxi-left-nav-search">
          <input name="moxi-search" placeholder="Search Anything">
        </div>
        <ul>
          <li>Dashboard</li>
          <li>Calendar</li>
          <li>People</li>
          <li>Listings</li>
          <li>Presentation</li>
          <li>Website</li>
          <li>Campaigns</li>
          <li>Promote</li>
        </ul>
      </div>
    `}})}]);