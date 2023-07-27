var FermentUI = (function (exports) {
  'use strict';

  /**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const t$3=window,e$6=t$3.ShadowRoot&&(void 0===t$3.ShadyCSS||t$3.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$3=Symbol(),n$6=new WeakMap;let o$6 = class o{constructor(t,e,n){if(this._$cssResult$=!0,n!==s$3)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$6&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=n$6.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&n$6.set(s,t));}return t}toString(){return this.cssText}};const r$2=t=>new o$6("string"==typeof t?t:t+"",void 0,s$3),i$4=(t,...e)=>{const n=1===t.length?t[0]:e.reduce(((e,s,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[n+1]),t[0]);return new o$6(n,t,s$3)},S$1=(s,n)=>{e$6?s.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((e=>{const n=document.createElement("style"),o=t$3.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=e.cssText,s.appendChild(n);}));},c$1=e$6?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$2(e)})(t):t;

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */var s$2;const e$5=window,r$1=e$5.trustedTypes,h$1=r$1?r$1.emptyScript:"",o$5=e$5.reactiveElementPolyfillSupport,n$5={toAttribute(t,i){switch(i){case Boolean:t=t?h$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t);}catch(t){s=null;}}return s}},a$1=(t,i)=>i!==t&&(i==i||t==t),l$3={attribute:!0,type:String,converter:n$5,reflect:!1,hasChanged:a$1},d$1="finalized";let u$1 = class u extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u();}static addInitializer(t){var i;this.finalize(),(null!==(i=this.h)&&void 0!==i?i:this.h=[]).push(t);}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Ep(s,i);void 0!==e&&(this._$Ev.set(e,s),t.push(e));})),t}static createProperty(t,i=l$3){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e);}}static getPropertyDescriptor(t,i,s){return {get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l$3}static finalize(){if(this.hasOwnProperty(d$1))return !1;this[d$1]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s]);}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(c$1(i));}else void 0!==i&&s.push(c$1(i));return s}static _$Ep(t,i){const s=i.attribute;return !1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)));}addController(t){var i,s;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t));}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1);}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i]);}));}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return S$1(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}));}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}));}attributeChangedCallback(t,i,s){this._$AK(t,s);}_$EO(t,i,s=l$3){var e;const r=this.constructor._$Ep(t,s);if(void 0!==r&&!0===s.reflect){const h=(void 0!==(null===(e=s.converter)||void 0===e?void 0:e.toAttribute)?s.converter:n$5).toAttribute(i,s.type);this._$El=t,null==h?this.removeAttribute(r):this.setAttribute(r,h),this._$El=null;}}_$AK(t,i){var s;const e=this.constructor,r=e._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=e.getPropertyOptions(r),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:n$5;this._$El=r,this[r]=h.fromAttribute(i,t.type),this._$El=null;}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||a$1)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$E_=this._$Ej());}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$Ek();}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(s);}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return !0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek();}updated(t){}firstUpdated(t){}};u$1[d$1]=!0,u$1.elementProperties=new Map,u$1.elementStyles=[],u$1.shadowRootOptions={mode:"open"},null==o$5||o$5({ReactiveElement:u$1}),(null!==(s$2=e$5.reactiveElementVersions)&&void 0!==s$2?s$2:e$5.reactiveElementVersions=[]).push("1.6.2");

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  var t$2;const i$3=window,s$1=i$3.trustedTypes,e$4=s$1?s$1.createPolicy("lit-html",{createHTML:t=>t}):void 0,o$4="$lit$",n$4=`lit$${(Math.random()+"").slice(9)}$`,l$2="?"+n$4,h=`<${l$2}>`,r=document,u=()=>r.createComment(""),d=t=>null===t||"object"!=typeof t&&"function"!=typeof t,c=Array.isArray,v=t=>c(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),a="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,m=/>/g,p=RegExp(`>|${a}(?:([^\\s"'>=/]+)(${a}*=${a}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g=/'/g,$=/"/g,y=/^(?:script|style|textarea|title)$/i,w=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=w(1),T=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),E=new WeakMap,C=r.createTreeWalker(r,129,null,!1);function P(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==e$4?e$4.createHTML(i):i}const V=(t,i)=>{const s=t.length-1,e=[];let l,r=2===i?"<svg>":"",u=f;for(let i=0;i<s;i++){const s=t[i];let d,c,v=-1,a=0;for(;a<s.length&&(u.lastIndex=a,c=u.exec(s),null!==c);)a=u.lastIndex,u===f?"!--"===c[1]?u=_:void 0!==c[1]?u=m:void 0!==c[2]?(y.test(c[2])&&(l=RegExp("</"+c[2],"g")),u=p):void 0!==c[3]&&(u=p):u===p?">"===c[0]?(u=null!=l?l:f,v=-1):void 0===c[1]?v=-2:(v=u.lastIndex-c[2].length,d=c[1],u=void 0===c[3]?p:'"'===c[3]?$:g):u===$||u===g?u=p:u===_||u===m?u=f:(u=p,l=void 0);const w=u===p&&t[i+1].startsWith("/>")?" ":"";r+=u===f?s+h:v>=0?(e.push(d),s.slice(0,v)+o$4+s.slice(v)+n$4+w):s+n$4+(-2===v?(e.push(void 0),i):w);}return [P(t,r+(t[s]||"<?>")+(2===i?"</svg>":"")),e]};class N{constructor({strings:t,_$litType$:i},e){let h;this.parts=[];let r=0,d=0;const c=t.length-1,v=this.parts,[a,f]=V(t,i);if(this.el=N.createElement(a,e),C.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes);}for(;null!==(h=C.nextNode())&&v.length<c;){if(1===h.nodeType){if(h.hasAttributes()){const t=[];for(const i of h.getAttributeNames())if(i.endsWith(o$4)||i.startsWith(n$4)){const s=f[d++];if(t.push(i),void 0!==s){const t=h.getAttribute(s.toLowerCase()+o$4).split(n$4),i=/([.?@])?(.*)/.exec(s);v.push({type:1,index:r,name:i[2],strings:t,ctor:"."===i[1]?H:"?"===i[1]?L:"@"===i[1]?z:k});}else v.push({type:6,index:r});}for(const i of t)h.removeAttribute(i);}if(y.test(h.tagName)){const t=h.textContent.split(n$4),i=t.length-1;if(i>0){h.textContent=s$1?s$1.emptyScript:"";for(let s=0;s<i;s++)h.append(t[s],u()),C.nextNode(),v.push({type:2,index:++r});h.append(t[i],u());}}}else if(8===h.nodeType)if(h.data===l$2)v.push({type:2,index:r});else {let t=-1;for(;-1!==(t=h.data.indexOf(n$4,t+1));)v.push({type:7,index:r}),t+=n$4.length-1;}r++;}}static createElement(t,i){const s=r.createElement("template");return s.innerHTML=t,s}}function S(t,i,s=t,e){var o,n,l,h;if(i===T)return i;let r=void 0!==e?null===(o=s._$Co)||void 0===o?void 0:o[e]:s._$Cl;const u=d(i)?void 0:i._$litDirective$;return (null==r?void 0:r.constructor)!==u&&(null===(n=null==r?void 0:r._$AO)||void 0===n||n.call(r,!1),void 0===u?r=void 0:(r=new u(t),r._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Co)&&void 0!==l?l:h._$Co=[])[e]=r:s._$Cl=r),void 0!==r&&(i=S(t,r._$AS(t,i.values),r,e)),i}class M{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:r).importNode(s,!0);C.currentNode=o;let n=C.nextNode(),l=0,h=0,u=e[0];for(;void 0!==u;){if(l===u.index){let i;2===u.type?i=new R(n,n.nextSibling,this,t):1===u.type?i=new u.ctor(n,u.name,u.strings,this,t):6===u.type&&(i=new Z(n,this,t)),this._$AV.push(i),u=e[++h];}l!==(null==u?void 0:u.index)&&(n=C.nextNode(),l++);}return C.currentNode=r,o}v(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class R{constructor(t,i,s,e){var o;this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cp=null===(o=null==e?void 0:e.isConnected)||void 0===o||o;}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===(null==t?void 0:t.nodeType)&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=S(this,t,i),d(t)?t===A||null==t||""===t?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==T&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):v(t)?this.T(t):this._(t);}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t));}_(t){this._$AH!==A&&d(this._$AH)?this._$AA.nextSibling.data=t:this.$(r.createTextNode(t)),this._$AH=t;}g(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=N.createElement(P(e.h,e.h[0]),this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.v(s);else {const t=new M(o,this),i=t.u(this.options);t.v(s),this.$(i),this._$AH=t;}}_$AC(t){let i=E.get(t.strings);return void 0===i&&E.set(t.strings,i=new N(t)),i}T(t){c(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new R(this.k(u()),this.k(u()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){var i;void 0===this._$AM&&(this._$Cp=t,null===(i=this._$AP)||void 0===i||i.call(this,t));}}class k{constructor(t,i,s,e,o){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=A;}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=S(this,t,i,0),n=!d(t)||t!==this._$AH&&t!==T,n&&(this._$AH=t);else {const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=S(this,e[s+l],i,l),h===T&&(h=this._$AH[l]),n||(n=!d(h)||h!==this._$AH[l]),h===A?t=A:t!==A&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h;}n&&!e&&this.j(t);}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}}class H extends k{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===A?void 0:t;}}const I=s$1?s$1.emptyScript:"";class L extends k{constructor(){super(...arguments),this.type=4;}j(t){t&&t!==A?this.element.setAttribute(this.name,I):this.element.removeAttribute(this.name);}}class z extends k{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5;}_$AI(t,i=this){var s;if((t=null!==(s=S(this,t,i,0))&&void 0!==s?s:A)===T)return;const e=this._$AH,o=t===A&&e!==A||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==A&&(e===A||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t);}}class Z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t);}}const B=i$3.litHtmlPolyfillSupport;null==B||B(N,R),(null!==(t$2=i$3.litHtmlVersions)&&void 0!==t$2?t$2:i$3.litHtmlVersions=[]).push("2.7.5");const D=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new R(i.insertBefore(u(),t),t,void 0,null!=s?s:{});}return l._$AI(t),l};

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */var l$1,o$3;class s extends u$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=D(i,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1);}render(){return T}}s.finalized=!0,s._$litElement$=!0,null===(l$1=globalThis.litElementHydrateSupport)||void 0===l$1||l$1.call(globalThis,{LitElement:s});const n$3=globalThis.litElementPolyfillSupport;null==n$3||n$3({LitElement:s});(null!==(o$3=globalThis.litElementVersions)&&void 0!==o$3?o$3:globalThis.litElementVersions=[]).push("3.3.2");

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const e$3=e=>n=>"function"==typeof n?((e,n)=>(customElements.define(e,n),n))(e,n):((e,n)=>{const{kind:t,elements:s}=n;return {kind:t,elements:s,finisher(n){customElements.define(e,n);}}})(e,n);

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const i$2=(i,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,i);}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this));},finisher(n){n.createProperty(e.key,i);}},e$2=(i,e,n)=>{e.constructor.createProperty(n,i);};function n$2(n){return (t,o)=>void 0!==o?e$2(n,t,o):i$2(n,t)}

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */function t$1(t){return n$2({...t,state:!0})}

  /**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */var n$1;null!=(null===(n$1=window.HTMLSlotElement)||void 0===n$1?void 0:n$1.prototype.assignedElements)?(o,n)=>o.assignedElements(n):(o,n)=>o.assignedNodes(n).filter((o=>o.nodeType===Node.ELEMENT_NODE));

  /**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  function*o$2(o,f){if(void 0!==o){let i=0;for(const t of o)yield f(t,i++);}}

  // These are not inherited, so need to be set in each shadow root
  const reset = i$4 `
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
`;
  const button = i$4 `
  button {
    display: inline-block;
    border: none;
    padding: 0;
    margin: 0;
    text-decoration: none;
    background: inherit;
    color: currentColor;
    font-family: inherit;
    font-size: 1em;
    cursor: pointer;
    text-align: center;
    -webkit-appearance: none;
    -moz-appearance: none;
  }
`;
  // These are inherited properties, so can be set once at the top of the document
  i$4 `
  ul {
    list-style: none;
    list-style-position: inside;
  }

  table {
    border-collapse: collapse;
  }

  img, embed, object, video {
    max-width: 100%;
  }
`;

  var __decorate$7 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  /**
   * List of hierarchical links.
   *
   * The default separator is '/'. To change it, set the `--breadcrumb-separator` CSS variable on an ancestor element (i.e. on the :root element for all breadcrumb
   * instances, and on the host element for a specific instance).
   */
  exports.FUIBreadcrumbs = class FUIBreadcrumbs extends s {
      constructor() {
          super(...arguments);
          this.links = [];
      }
      render() {
          // this.links = [{ href: '#', text: 'Home' }, { href: '#', text: 'About'}];
          // this.links = [];
          return x `<ul>${o$2(this.links, (link) => x `<li><a href=${link.href}>${link.text}</a></li>`)}</ul>`;
      }
  };
  exports.FUIBreadcrumbs.styles = [
      reset,
      i$4 `
            :host {
                display: block;
            }

            ul {
                list-style: none;
            }

            li {
                display: inline-block;
            }

            li:not(:last-child)::after {
                content: var(--breadcrumb-separator, '/');
            }

            a {
                padding: 5px 10px;
            }
        `
  ];
  __decorate$7([
      n$2({ type: Array })
  ], exports.FUIBreadcrumbs.prototype, "links", void 0);
  exports.FUIBreadcrumbs = __decorate$7([
      e$3('fui-breadcrumbs')
  ], exports.FUIBreadcrumbs);

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e$1=t=>(...e)=>({_$litDirective$:t,values:e});let i$1 = class i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i;}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};

  /**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const i="important",n=" !"+i,o$1=e$1(class extends i$1{constructor(t$1){var e;if(super(t$1),t$1.type!==t.ATTRIBUTE||"style"!==t$1.name||(null===(e=t$1.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,r)=>{const s=t[r];return null==s?e:e+`${r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`}),"")}update(e,[r]){const{style:s}=e.element;if(void 0===this.ut){this.ut=new Set;for(const t in r)this.ut.add(t);return this.render(r)}this.ut.forEach((t=>{null==r[t]&&(this.ut.delete(t),t.includes("-")?s.removeProperty(t):s[t]="");}));for(const t in r){const e=r[t];if(null!=e){this.ut.add(t);const r="string"==typeof e&&e.endsWith(n);t.includes("-")||r?s.setProperty(t,r?e.slice(0,-11):e,r?i:""):s[t]=e;}}return T}});

  var __decorate$6 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  /**
   * Card component for displaying isolated content.
   * @element dc-card
   * @prop {String} layout - Position of the layout element. Can be 'left', 'right', 'top', or 'bottom'. Defaults to 'left'.
   */
  exports.FUICard = class FUICard extends s {
      constructor() {
          super(...arguments);
          this.layout = 'top';
      }
      _getGridTemplateRules() {
          const gridTemplate = {
              gridTemplateAreas: `
      'image'
      'header'
      'body'
      'footer'`,
              gridTemplateColumns: '1fr',
              gridTemplateRows: 'auto 1fr auto'
          };
          switch (this.layout) {
              case 'bottom':
                  gridTemplate.gridTemplateAreas = `
          'header'
          'body'
          'footer'
          'image'`;
                  break;
              case 'left':
                  gridTemplate.gridTemplateAreas = `
          'image header'
          'image body'
          'image footer'`;
                  gridTemplate.gridTemplateColumns = 'auto 1fr';
                  gridTemplate.gridTemplateRows = 'auto';
                  break;
              case 'right':
                  gridTemplate.gridTemplateAreas = `
          'header image'
          'body image'
          'footer image'`,
                      gridTemplate.gridTemplateColumns = '1fr auto';
                  gridTemplate.gridTemplateRows = 'auto';
                  break;
          }
          return gridTemplate;
      }
      render() {
          return x `<div class='card' part='card' style=${o$1(this._getGridTemplateRules())}>
      <slot name='image'></slot>
      <slot name='header'></slot>
      <slot></slot>
      <slot name='footer'></slot>
    </div>`;
      }
  };
  exports.FUICard.styles = [
      i$4 `
      :host {
        display: flex;
        flex-direction: row;
        align-items: stretch;
      }

      .card {
        flex: 1;
        display: grid;
        border: 1px solid currentColor;
        border-radius: var(--br);
        box-shadow: var(--bs-1);
        overflow: hidden;
        padding: var(--S-card);
      }

      slot[name='image'] {
        grid-area: image;
        display: grid;
      }

      slot[name='header'] {
        grid-area: header;
      }

      slot:not([name]) {
        grid-area: body;
      }

      slot[name='footer'] {
        grid-area: footer;
      }
    `
  ];
  __decorate$6([
      n$2({ type: String })
  ], exports.FUICard.prototype, "layout", void 0);
  exports.FUICard = __decorate$6([
      e$3('fui-card')
  ], exports.FUICard);

  /**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const l=l=>null!=l?l:A;

  function mod(a, b) {
      return ((a % b) + b) % b;
  }
  function getId() {
      return new Date().getTime().toString(36);
  }
  // @ts-ignore, due to Symbol.iterator not being recognized on Object
  const isIterable = (obj) => obj == null ? false : typeof obj[Symbol.iterator] === "function";
  function join(obj, separator = " ") {
      if (obj == null) {
          return "";
      }
      const a = isIterable(obj)
          ? Array.from(obj)
          : Object.entries(obj);
      return a
          .map(([k, v]) => (v ? k : undefined))
          .filter((v) => v)
          .join(separator);
  }
  function reverse(str) {
      return str.split("").reverse().join("");
  }

  var __decorate$5 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  /**
   *   Renders an email address while obfuscating it from bots
   */
  exports.FUIEmail = class FUIEmail extends s {
      constructor() {
          super(...arguments);
          this.user = '';
          this.domain = '';
          this.mailto = true;
      }
      firstUpdated() {
          if (this.mailto) {
              this.setMailto();
          }
      }
      setMailto() {
          var _a;
          const a = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('a');
          const prefix = 'mailto';
          if (a) {
              a.href = `${prefix}:${reverse(this.user)}\u0040${reverse(this.domain)}`;
          }
      }
      render() {
          return x `<a part="link" aria-label='${l(this.label)}'><slot></slot><span part='default' data-user="${this.user}" data-domain="${this.domain}"></span></a>`;
      }
  };
  exports.FUIEmail.styles = [
      i$4 `
            :host {
                display: flex;
                justify-content: center;
            }

            a {
              position: relative;
              display: flex;
              justify-content: center;
              align-items: center;
            }

            span::before {
                content: attr(data-domain) "\u0040" attr(data-user);
                unicode-bidi: bidi-override;
                direction: rtl;
            }
        `
  ];
  __decorate$5([
      n$2({ type: String })
  ], exports.FUIEmail.prototype, "user", void 0);
  __decorate$5([
      n$2({ type: String })
  ], exports.FUIEmail.prototype, "domain", void 0);
  __decorate$5([
      n$2({ type: Boolean })
  ], exports.FUIEmail.prototype, "mailto", void 0);
  __decorate$5([
      n$2({ type: String })
  ], exports.FUIEmail.prototype, "label", void 0);
  exports.FUIEmail = __decorate$5([
      e$3('fui-email')
  ], exports.FUIEmail);

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */class e extends i$1{constructor(i){if(super(i),this.et=A,i.type!==t.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(r){if(r===A||null==r)return this.ft=void 0,this.et=r;if(r===T)return r;if("string"!=typeof r)throw Error(this.constructor.directiveName+"() called with a non-string value");if(r===this.et)return this.ft;this.et=r;const s=[r];return s.raw=s,this.ft={_$litType$:this.constructor.resultType,strings:s,values:[]}}}e.directiveName="unsafeHTML",e.resultType=1;const o=e$1(e);

  class FUIBaseElement extends s {
      connectedCallback() {
          super.connectedCallback();
          this.id = this.id || getId();
      }
  }

  var __decorate$4 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  exports.FUIFaq = class FUIFaq extends FUIBaseElement {
      constructor() {
          super(...arguments);
          this.faqs = [];
          this.selectedQuestions = [];
          this.allTagsTemplate = 'All';
          this._selectedQuestions = new Set();
      }
      willUpdate(_changedProperties) {
          if (_changedProperties.has('selectedQuestions')) {
              this._selectedQuestions = new Set(this.selectedQuestions.map(q => q.toString()));
          }
      }
      _tagClick(e) {
          const target = e.target;
          const tag = target.textContent;
          this.selectedTag = tag !== this.allTagsTemplate ? tag : undefined;
      }
      _faqClick(e) {
          e.preventDefault();
          const key = e.target.dataset.key;
          if (this._selectedQuestions.has(key)) {
              this._selectedQuestions.delete(key);
          }
          else
              this._selectedQuestions.add(key);
          this.requestUpdate();
      }
      focusFaq(key) {
          const faq = this.renderRoot.querySelector(`[data-key=${key}]`);
          if (!faq) {
              console.debug('No faq found with key', key);
          }
          else {
              faq.focus();
          }
      }
      _getTagTemplate(tag, selected) {
          return x `<li part='tag'><button part='${join({ button: true, selected })}' type='button' ?aria-selected=${selected}>${tag}</button></li>`;
      }
      _getFaqTemplate(faq, index) {
          var _a;
          const key = (_a = faq.key) !== null && _a !== void 0 ? _a : index.toString();
          const selected = this._selectedQuestions.has(key);
          return x `
    <li part='faq' ?hidden=${!(this.selectedTag == null || faq.tags.includes(this.selectedTag))}>
      <details part='${join({ details: true })}' ?open='${selected}'>
        <summary part='${join({ question: true, selected })}' data-key=${key}>${faq.title}</summary>
        <p part='answer'>${o(faq.content)}</p>
      </details>
    </li>`;
      }
      render() {
          if (this.faqs == null)
              return;
          const tags = Array.from(this.faqs.reduce((acc, faq) => { faq.tags.forEach(tag => acc.add(tag)); return acc; }, new Set()));
          return x `
      <ul part='tags' class='tags' @click="${this._tagClick}">
        ${this._getTagTemplate(this.allTagsTemplate, this.selectedTag == null)}
        ${tags.map(tag => this._getTagTemplate(tag, tag === this.selectedTag))}
      </ul>
      <ul part='faqs' class='faqs' @click=${this._faqClick}>
        ${this.faqs.map((faq, index) => this._getFaqTemplate(faq, index))}
      </ul>
    `;
      }
  };
  exports.FUIFaq.styles = [
      button,
      i$4 `
      :host {
        display: flex;
        flex-direction: column;
      }

      ul {
        list-style: none;
        list-style-position: inside;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
      }

      summary {
        cursor: pointer;
        list-style: none;
        list-style-position: inside;
        padding: var(--p-faq-v, 4px) var(--p-faq-h, 4px);
      }

      details summary > * {
        display: inline;
      }
    `
  ];
  __decorate$4([
      n$2({ type: Array })
  ], exports.FUIFaq.prototype, "faqs", void 0);
  __decorate$4([
      n$2({ type: String })
  ], exports.FUIFaq.prototype, "selectedTag", void 0);
  __decorate$4([
      n$2({ type: Array })
  ], exports.FUIFaq.prototype, "selectedQuestions", void 0);
  __decorate$4([
      n$2({ type: Object })
  ], exports.FUIFaq.prototype, "allTagsTemplate", void 0);
  __decorate$4([
      t$1()
  ], exports.FUIFaq.prototype, "_selectedQuestions", void 0);
  exports.FUIFaq = __decorate$4([
      e$3('fui-faq')
  ], exports.FUIFaq);

  var __decorate$3 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  exports.FUIIcon = class FUIIcon extends s {
      constructor() {
          super(...arguments);
          this.label = '';
          this.tabIndex = -1;
          // TODO: app props for icon for font based, use for svg, and src for img
          this.data = '';
      }
      render() {
          return x `<object tabindex='${this.tabIndex}' type='image/svg+xml' data='${this.data}' aria-label='${this.label}'></object>`;
      }
  };
  exports.FUIIcon.styles = [
      i$4 `
      :host {
        display: flex;
        pointer-events: none;
        width: var(--S-icon, 1rem);
        height: var(--S-icon, 1rem);
        stroke: currentColor;
        stroke-width: 2;
        stroke-linecap: round;
        stroke-linejoin: round;
        fill: none;
      }
    `
  ];
  __decorate$3([
      n$2({ type: String })
  ], exports.FUIIcon.prototype, "label", void 0);
  __decorate$3([
      n$2({ type: Number })
  ], exports.FUIIcon.prototype, "tabIndex", void 0);
  __decorate$3([
      n$2({ type: String })
  ], exports.FUIIcon.prototype, "data", void 0);
  exports.FUIIcon = __decorate$3([
      e$3('fui-icon')
  ], exports.FUIIcon);

  var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  exports.FUIPricing = class FUIPricing extends s {
      constructor() {
          super(...arguments);
          this.prices = [];
      }
      render() {
          if (this.prices == null)
              return;
          return this.prices.map(price => x `
      <div class='pricing' part='pricing'>
        <slot name='header'>
          <header part='header'>${o(price.header)}</header>
        </slot>
        <slot name='price'>
          <p part='price'>${price.price}</p>
        </slot>
        <slot name='description'>${o(price.description)}</slot>
        <slot name='features'>
          ${price.features
            ? x `<ul part='features'>${price.features.map((feature) => x `<li part='feature'>${o(feature)}</li>`)}</ul>`
            : A}
        </slot>
        <slot name='footer'></slot>
      </div>`);
      }
  };
  exports.FUIPricing.styles = [
      i$4 `
      :host {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: var(--gap);
        --gap: 1rem;
        margin: 0 var(--gap);
      }

      .pricing {
        border: 1px solid black;
        border-radius: 10px;
      }
    `
  ];
  __decorate$2([
      n$2({ type: Array })
  ], exports.FUIPricing.prototype, "prices", void 0);
  exports.FUIPricing = __decorate$2([
      e$3('fui-pricing')
  ], exports.FUIPricing);

  var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  exports.FUITabs = class FUITabs extends s {
      constructor() {
          super(...arguments);
          this.selectedIndex = 0;
          this.cycle = false;
          this._onClick = (event) => {
              console.debug("_onClick");
              console.debug(event.target);
              const index = this._tabs.findIndex((tab) => tab == event.target);
              console.debug(index);
              if (index >= 0) {
                  this.selectedIndex = index;
                  this._setSelectedIndex(this.selectedIndex);
              }
          };
          this._onKeyDown = (event) => {
              var _a;
              console.debug("_onKeyDown");
              console.debug(event.target);
              const length = this._tabs.length;
              const key = event.key;
              const target = event.target;
              if (target.matches('[slot=tab]')) {
                  switch (key) {
                      case "ArrowLeft":
                      case "ArrowRight":
                          const dir = key === "ArrowLeft" ? -1 : 1;
                          console.debug(this.selectedIndex, dir);
                          const current = this.selectedIndex + dir;
                          this.selectedIndex = this.cycle
                              ? mod(current, length)
                              : dir == 1
                                  ? Math.min(length - 1, current)
                                  : Math.max(0, current);
                          break;
                      case "End":
                          this.selectedIndex = length - 1;
                          break;
                      case "Home":
                          this.selectedIndex = 0;
                          break;
                      case "ArrowDown":
                          (_a = this._tabs[this.selectedIndex].nextElementSibling) === null || _a === void 0 ? void 0 : _a.focus();
                          return;
                      default:
                          return;
                  }
              }
              else if (target.matches('[slot=panel]')) {
                  if (key === "ArrowUp") {
                      this._tabs[this.selectedIndex].focus();
                  }
                  return;
              }
              console.debug(this.selectedIndex);
              this._setSelectedIndex(this.selectedIndex);
          };
      }
      get _tabWrapper() {
          var _a;
          return (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(".tabs");
      }
      get _panelWrapper() {
          var _a;
          return (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(".panels");
      }
      get _tabs() {
          var _a, _b;
          return (_b = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("slot[name=tab]")) === null || _b === void 0 ? void 0 : _b.assignedElements();
      }
      get _panels() {
          var _a, _b;
          return (_b = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("slot[name=panel]")) === null || _b === void 0 ? void 0 : _b.assignedElements();
      }
      createRenderRoot() {
          const root = super.createRenderRoot();
          root.addEventListener("keydown", this._onKeyDown);
          return root;
      }
      _upgradeElements() {
          var _a, _b;
          console.debug("_upgradeElements");
          (_a = this._tabs) === null || _a === void 0 ? void 0 : _a.forEach((tab) => {
              if (tab != null)
                  tab.setAttribute("role", "tab");
          });
          (_b = this._panels) === null || _b === void 0 ? void 0 : _b.forEach((panel) => {
              if (panel != null)
                  panel.setAttribute("role", "tabpanel");
          });
      }
      _linkPanels() {
          var _a;
          console.debug("_linkPanels");
          (_a = this._tabs) === null || _a === void 0 ? void 0 : _a.forEach((tab, index) => {
              if (tab != null) {
                  tab.id = (tab === null || tab === void 0 ? void 0 : tab.id) || `${this.id}-tab-${index}`;
                  const panel = tab.nextElementSibling;
                  if (panel != null) {
                      panel.id = (panel === null || panel === void 0 ? void 0 : panel.id) || `${this.id}-panel-${index}`;
                      tab.setAttribute("aria-controls", panel.id);
                      panel.setAttribute("aria-labelledby", tab.id);
                  }
              }
          });
      }
      _setSelectedIndex(index) {
          var _a;
          console.debug("_setSelectedIndex", index);
          (_a = this._tabs) === null || _a === void 0 ? void 0 : _a.forEach((tab, i) => {
              const panel = this._panels[i];
              if (index == i) {
                  tab.setAttribute("aria-selected", "true");
                  tab.tabIndex = 0;
                  panel.classList.add("selected");
                  panel.tabIndex = -1;
              }
              else {
                  tab.setAttribute("aria-selected", "");
                  tab.tabIndex = -1;
                  panel.classList.remove("selected");
                  panel.tabIndex = -2;
              }
          });
          this._focusSelected();
      }
      _focusSelected() {
          console.debug("_focusSelected", this.selectedIndex);
          this._tabs[this.selectedIndex].focus();
      }
      firstUpdated(_changedProperties) {
          this._upgradeElements();
          this._linkPanels();
          this._setSelectedIndex(0);
      }
      render() {
          return x `
      <div class="tabs" @click=${this._onClick} part="tabs">
        <slot name="tab"></slot>
      </div>
      <div class="panels" part="tab-panels">
        <slot name="panel"></slot>
      </div>
    `;
      }
  };
  exports.FUITabs.styles = i$4 `
    .tabs {
      display: flex;
      flex-direction: row;
      border: 1px solid black;
    }

    .panels {
      border-right: 1px solid black;
      border-bottom: 1px solid black;
      border-left: 1px solid black;
    }

    ::slotted([slot="tab"]) {
      flex: 1 0 auto;
      text-align: center;
      border-right: 1px solid black;
    }

    ::slotted([slot="panel"]) {
      display: none;
    }

    ::slotted([slot="panel"].selected) {
      display: block;
    }

    dc-tabs [slot=tab] {
      border-right: 1px solid black;
    }
    
    dc-tabs [slot=tab]:focus {
      outline: 5px solid blue;
    }
    
    dc-tabs [slot=tab]:last-of-type {
      border-right: none;
    }
    
    /* this is to have it show up as header/section until the component loads */
    dc-tabs:not(:defined) {
      display: block;
    }
  `;
  __decorate$1([
      n$2({ type: Number })
  ], exports.FUITabs.prototype, "selectedIndex", void 0);
  __decorate$1([
      n$2({ type: Boolean })
  ], exports.FUITabs.prototype, "cycle", void 0);
  exports.FUITabs = __decorate$1([
      e$3(`fui-tabs`)
  ], exports.FUITabs);

  var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  /**
   *   Renders an telephone number while obfuscating it from bots
   */
  exports.FUITel = class FUITel extends s {
      constructor() {
          super(...arguments);
          this.area = '';
          this.number = '';
          this.tel = true;
      }
      updated() {
          if (this.tel) {
              this.setTel();
          }
      }
      setTel() {
          var _a;
          const a = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('a');
          const prefix = 'tel';
          if (a) {
              a.href = `${prefix}:${reverse(this.area)}-${reverse(this.number)}`;
          }
      }
      render() {
          return x `<a part="link" aria-label='${l(this.label)}'><slot></slot><span part='default' data-area=${this.area} data-number="${this.number}"></span></a>`;
      }
  };
  exports.FUITel.styles = [
      i$4 `
            :host {
                display: flex;
                justify-content: center;
            }

            a {
              position: relative;
              display: flex;
              justify-content: center;
              align-items: center;
            }

            span::before {
                content: attr(data-number) "-" attr(data-area);
                unicode-bidi: bidi-override;
                direction: rtl;
            }
        `
  ];
  __decorate([
      n$2({ type: String })
  ], exports.FUITel.prototype, "area", void 0);
  __decorate([
      n$2({ type: String })
  ], exports.FUITel.prototype, "number", void 0);
  __decorate([
      n$2({ type: Boolean })
  ], exports.FUITel.prototype, "tel", void 0);
  __decorate([
      n$2({ type: String })
  ], exports.FUITel.prototype, "label", void 0);
  exports.FUITel = __decorate([
      e$3('fui-tel')
  ], exports.FUITel);

  return exports;

})({});
