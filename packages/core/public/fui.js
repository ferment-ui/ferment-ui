var FermentUI = (function (exports) {
   'use strict';

   /**
    * @license
    * Copyright 2019 Google LLC
    * SPDX-License-Identifier: BSD-3-Clause
    */
   const t$3=globalThis,e$6=t$3.ShadowRoot&&(void 0===t$3.ShadyCSS||t$3.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$2=Symbol(),o$9=new WeakMap;let n$4 = class n{constructor(t,e,o){if(this._$cssResult$=!0,o!==s$2)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$6&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=o$9.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o$9.set(s,t));}return t}toString(){return this.cssText}};const r$6=t=>new n$4("string"==typeof t?t:t+"",void 0,s$2),i$4=(t,...e)=>{const o=1===t.length?t[0]:e.reduce(((e,s,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[o+1]),t[0]);return new n$4(o,t,s$2)},S$1=(s,o)=>{if(e$6)s.adoptedStyleSheets=o.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of o){const o=document.createElement("style"),n=t$3.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,s.appendChild(o);}},c$2=e$6?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$6(e)})(t):t;

   /**
    * @license
    * Copyright 2017 Google LLC
    * SPDX-License-Identifier: BSD-3-Clause
    */const{is:i$3,defineProperty:e$5,getOwnPropertyDescriptor:r$5,getOwnPropertyNames:h$1,getOwnPropertySymbols:o$8,getPrototypeOf:n$3}=Object,a$1=globalThis,c$1=a$1.trustedTypes,l$1=c$1?c$1.emptyScript:"",p$1=a$1.reactiveElementPolyfillSupport,d$1=(t,s)=>t,u$1={toAttribute(t,s){switch(s){case Boolean:t=t?l$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,s){let i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t);}catch(t){i=null;}}return i}},f$1=(t,s)=>!i$3(t,s),y$1={attribute:!0,type:String,converter:u$1,reflect:!1,hasChanged:f$1};Symbol.metadata??=Symbol("metadata"),a$1.litPropertyMetadata??=new WeakMap;class b extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t);}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=y$1){if(s.state&&(s.attribute=!1),this._$Ei(),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,s);void 0!==r&&e$5(this.prototype,t,r);}}static getPropertyDescriptor(t,s,i){const{get:e,set:h}=r$5(this.prototype,t)??{get(){return this[s]},set(t){this[s]=t;}};return {get(){return e?.call(this)},set(s){const r=e?.call(this);h.call(this,s),this.requestUpdate(t,r,i);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??y$1}static _$Ei(){if(this.hasOwnProperty(d$1("elementProperties")))return;const t=n$3(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties);}static finalize(){if(this.hasOwnProperty(d$1("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(d$1("properties"))){const t=this.properties,s=[...h$1(t),...o$8(t)];for(const i of s)this.createProperty(i,t[i]);}const t=this[Symbol.metadata];if(null!==t){const s=litPropertyMetadata.get(t);if(void 0!==s)for(const[t,i]of s)this.elementProperties.set(t,i);}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);void 0!==i&&this._$Eh.set(i,t);}this.elementStyles=this.finalizeStyles(this.styles);}static finalizeStyles(s){const i=[];if(Array.isArray(s)){const e=new Set(s.flat(1/0).reverse());for(const s of e)i.unshift(c$2(s));}else void 0!==s&&i.push(c$2(s));return i}static _$Eu(t,s){const i=s.attribute;return !1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev();}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)));}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.();}removeController(t){this._$EO?.delete(t);}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t);}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S$1(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()));}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()));}attributeChangedCallback(t,s,i){this._$AK(t,i);}_$EC(t,s){const i=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,i);if(void 0!==e&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:u$1).toAttribute(s,i.type);this._$Em=t,null==r?this.removeAttribute(e):this.setAttribute(e,r),this._$Em=null;}}_$AK(t,s){const i=this.constructor,e=i._$Eh.get(t);if(void 0!==e&&this._$Em!==e){const t=i.getPropertyOptions(e),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:u$1;this._$Em=e,this[e]=r.fromAttribute(s,t.type),this._$Em=null;}}requestUpdate(t,s,i){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??f$1)(this[t],s))return;this.P(t,s,i);}!1===this.isUpdatePending&&(this._$ES=this._$ET());}P(t,s,i){this._$AL.has(t)||this._$AL.set(t,s),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t);}async _$ET(){this.isUpdatePending=!0;try{await this._$ES;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,s]of this._$Ep)this[t]=s;this._$Ep=void 0;}const t=this.constructor.elementProperties;if(t.size>0)for(const[s,i]of t)!0!==i.wrapped||this._$AL.has(s)||void 0===this[s]||this.P(s,this[s],i);}let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(s)):this._$EU();}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(s);}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$EU(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return !0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU();}updated(t){}firstUpdated(t){}}b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[d$1("elementProperties")]=new Map,b[d$1("finalized")]=new Map,p$1?.({ReactiveElement:b}),(a$1.reactiveElementVersions??=[]).push("2.0.4");

   /**
    * @license
    * Copyright 2017 Google LLC
    * SPDX-License-Identifier: BSD-3-Clause
    */
   const t$2=globalThis,i$2=t$2.trustedTypes,s$1=i$2?i$2.createPolicy("lit-html",{createHTML:t=>t}):void 0,e$4="$lit$",h=`lit$${(Math.random()+"").slice(9)}$`,o$7="?"+h,n$2=`<${o$7}>`,r$4=document,l=()=>r$4.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof t?.[Symbol.iterator],d="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=y(1),w=Symbol.for("lit-noChange"),T=Symbol.for("lit-nothing"),A=new WeakMap,E=r$4.createTreeWalker(r$4,129);function C(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s$1?s$1.createHTML(i):i}const P=(t,i)=>{const s=t.length-1,o=[];let r,l=2===i?"<svg>":"",c=f;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,y=0;for(;y<s.length&&(c.lastIndex=y,u=c.exec(s),null!==u);)y=c.lastIndex,c===f?"!--"===u[1]?c=v:void 0!==u[1]?c=_:void 0!==u[2]?($.test(u[2])&&(r=RegExp("</"+u[2],"g")),c=m):void 0!==u[3]&&(c=m):c===m?">"===u[0]?(c=r??f,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?m:'"'===u[3]?g:p):c===g||c===p?c=m:c===v||c===_?c=f:(c=m,r=void 0);const x=c===m&&t[i+1].startsWith("/>")?" ":"";l+=c===f?s+n$2:d>=0?(o.push(a),s.slice(0,d)+e$4+s.slice(d)+h+x):s+h+(-2===d?i:x);}return [C(t,l+(t[s]||"<?>")+(2===i?"</svg>":"")),o]};class V{constructor({strings:t,_$litType$:s},n){let r;this.parts=[];let c=0,a=0;const u=t.length-1,d=this.parts,[f,v]=P(t,s);if(this.el=V.createElement(f,n),E.currentNode=this.el.content,2===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes);}for(;null!==(r=E.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(e$4)){const i=v[a++],s=r.getAttribute(t).split(h),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:c,name:e[2],strings:s,ctor:"."===e[1]?k:"?"===e[1]?H:"@"===e[1]?I:R}),r.removeAttribute(t);}else t.startsWith(h)&&(d.push({type:6,index:c}),r.removeAttribute(t));if($.test(r.tagName)){const t=r.textContent.split(h),s=t.length-1;if(s>0){r.textContent=i$2?i$2.emptyScript:"";for(let i=0;i<s;i++)r.append(t[i],l()),E.nextNode(),d.push({type:2,index:++c});r.append(t[s],l());}}}else if(8===r.nodeType)if(r.data===o$7)d.push({type:2,index:c});else {let t=-1;for(;-1!==(t=r.data.indexOf(h,t+1));)d.push({type:7,index:c}),t+=h.length-1;}c++;}}static createElement(t,i){const s=r$4.createElement("template");return s.innerHTML=t,s}}function N(t,i,s=t,e){if(i===w)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=c(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(!1),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=N(t,h._$AS(t,i.values),h,e)),i}class S{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??r$4).importNode(i,!0);E.currentNode=e;let h=E.nextNode(),o=0,n=0,l=s[0];for(;void 0!==l;){if(o===l.index){let i;2===l.type?i=new M(h,h.nextSibling,this,t):1===l.type?i=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(i=new L(h,this,t)),this._$AV.push(i),l=s[++n];}o!==l?.index&&(h=E.nextNode(),o++);}return E.currentNode=r$4,e}p(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??!0;}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=N(this,t,i),c(t)?t===T||null==t||""===t?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==w&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):u(t)?this.k(t):this._(t);}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t));}_(t){this._$AH!==T&&c(this._$AH)?this._$AA.nextSibling.data=t:this.T(r$4.createTextNode(t)),this._$AH=t;}$(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=V.createElement(C(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else {const t=new S(e,this),s=t.u(this.options);t.p(i),this.T(s),this._$AH=t;}}_$AC(t){let i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new V(t)),i}k(t){a(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new M(this.S(l()),this.S(l()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t));}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=T;}_$AI(t,i=this,s,e){const h=this.strings;let o=!1;if(void 0===h)t=N(this,t,i,0),o=!c(t)||t!==this._$AH&&t!==w,o&&(this._$AH=t);else {const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=N(this,e[s+n],i,n),r===w&&(r=this._$AH[n]),o||=!c(r)||r!==this._$AH[n],r===T?t=T:t!==T&&(t+=(r??"")+h[n+1]),this._$AH[n]=r;}o&&!e&&this.j(t);}j(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"");}}class k extends R{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===T?void 0:t;}}class H extends R{constructor(){super(...arguments),this.type=4;}j(t){this.element.toggleAttribute(this.name,!!t&&t!==T);}}class I extends R{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5;}_$AI(t,i=this){if((t=N(this,t,i,0)??T)===w)return;const s=this._$AH,e=t===T&&s!==T||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==T&&(s===T||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t);}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t);}}const Z=t$2.litHtmlPolyfillSupport;Z?.(V,M),(t$2.litHtmlVersions??=[]).push("3.1.2");const j=(t,i,s)=>{const e=s?.renderBefore??i;let h=e._$litPart$;if(void 0===h){const t=s?.renderBefore??null;e._$litPart$=h=new M(i.insertBefore(l(),t),t,void 0,s??{});}return h._$AI(t),h};

   /**
    * @license
    * Copyright 2017 Google LLC
    * SPDX-License-Identifier: BSD-3-Clause
    */class s extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=j(i,this.renderRoot,this.renderOptions);}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0);}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1);}render(){return w}}s._$litElement$=!0,s[("finalized")]=!0,globalThis.litElementHydrateSupport?.({LitElement:s});const r$3=globalThis.litElementPolyfillSupport;r$3?.({LitElement:s});(globalThis.litElementVersions??=[]).push("4.0.4");

   /**
    * @license
    * Copyright 2017 Google LLC
    * SPDX-License-Identifier: BSD-3-Clause
    */
   const t$1=t=>(e,o)=>{void 0!==o?o.addInitializer((()=>{customElements.define(t,e);})):customElements.define(t,e);};

   /**
    * @license
    * Copyright 2017 Google LLC
    * SPDX-License-Identifier: BSD-3-Clause
    */const o$6={attribute:!0,type:String,converter:u$1,reflect:!1,hasChanged:f$1},r$2=(t=o$6,e,r)=>{const{kind:n,metadata:i}=r;let s=globalThis.litPropertyMetadata.get(i);if(void 0===s&&globalThis.litPropertyMetadata.set(i,s=new Map),s.set(r.name,t),"accessor"===n){const{name:o}=r;return {set(r){const n=e.get.call(this);e.set.call(this,r),this.requestUpdate(o,n,t);},init(e){return void 0!==e&&this.P(o,void 0,t),e}}}if("setter"===n){const{name:o}=r;return function(r){const n=this[o];e.call(this,r),this.requestUpdate(o,n,t);}}throw Error("Unsupported decorator location: "+n)};function n$1(t){return (e,o)=>"object"==typeof o?r$2(t,e,o):((t,e,o)=>{const r=e.hasOwnProperty(o);return e.constructor.createProperty(o,r?{...t,wrapped:!0}:t),r?Object.getOwnPropertyDescriptor(e,o):void 0})(t,e,o)}

   /**
    * @license
    * Copyright 2017 Google LLC
    * SPDX-License-Identifier: BSD-3-Clause
    */function r$1(r){return n$1({...r,state:!0,attribute:!1})}

   /**
    * @license
    * Copyright 2017 Google LLC
    * SPDX-License-Identifier: BSD-3-Clause
    */
   const e$3=(e,t,c)=>(c.configurable=!0,c.enumerable=!0,c);

   /**
    * @license
    * Copyright 2021 Google LLC
    * SPDX-License-Identifier: BSD-3-Clause
    */function o$5(o){return (e,n)=>{const{slot:r,selector:s}=o??{},c="slot"+(r?`[name=${r}]`:":not([name])");return e$3(e,n,{get(){const t=this.renderRoot?.querySelector(c),e=t?.assignedElements(o)??[];return void 0===s?e:e.filter((t=>t.matches(s)))}})}}

   /**
    * @license
    * Copyright 2021 Google LLC
    * SPDX-License-Identifier: BSD-3-Clause
    */
   function*o$4(o,f){if(void 0!==o){let i=0;for(const t of o)yield f(t,i++);}}

   function mod(a, b) {
       return ((a % b) + b) % b;
   }
   function reverse(str) {
       return str.split("").reverse().join("");
   }
   function convertClassStringToObject(classString) {
       return classString.split(" ").reduce((acc, cur) => {
           acc[cur] = true;
           return acc;
       }, {});
   }
   function convertObjectToClassString(obj) {
       return Object.entries(obj).filter(([_, value]) => !!value).map(([key, _]) => key).join(" ");
   }
   function convertStyleStringToObject(styleString) {
       return styleString.split(";").reduce((acc, cur) => {
           const [key, value] = cur.split(":");
           acc[key.trim()] = value.trim();
           return acc;
       }, {});
   }
   function convertObjectToStyleString(obj) {
       return Object.entries(obj).map(([key, value]) => `${key}: ${value}`).join("; ");
   }
   // TODO: reconcile this list of focusable elements with the one above
   function getFocusableElements(root) {
       return [...root.querySelectorAll('button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"]):not([disabled]), details:not([disabled]), summary:not(:disabled)')];
   }

   var animationStyles = i$4 `
/* @section Animation */
.t-default {
  transition: var(--fui-animation-default-speed) var(--fui-animation-default-timing-function);
}

html:not(.no-js) .intro {
  opacity: var(--opacity, var(--fui-animation-default-opacity, 0));
  transform: 
    perspective(var(--perspective, var(--fui-animation-default-perspective, 0)))
    rotateX(var(--rotate-x, var(--fui-animation-default-rotate-x, 0)))
    rotateY(var(--rotate-y, var(--fui-animation-default-rotate-y, 0)))
    rotateZ(var(--rotate-z, var(--fui-animation-default-rotate-z, 0)))
    scaleX(var(--scale-x, var(--fui-animation-default-scale-x, 1)))
    scaleY(var(--scale-y, var(--fui-animation-default-scale-y, 1)))
    scaleZ(var(--scale-z, var(--fui-animation-default-scale-z, 1)))
    skewX(var(--skew-x, var(--fui-animation-default-skew-x, 0)))
    skewY(var(--skew-y, var(--fui-animation-default-skew-y, 0)))
    translateX(var(--translate-x, var(--fui-animation-default-translate-x, 0)))
    translateY(var(--translate-y, var(--fui-animation-default-translate-y, 0)))
    translateZ(var(--translate-z, var(--fui-animation-default-translate-z, 0)));
  will-change: transform, opacity;
}

html:not(.no-js) .introed {
  opacity: 1;
  transform: unset;
  transition-delay: var(--delay, 0s);
  transition-duration: var(--duration, var(--fui-animation-default-speed));
  transition-property: var(--property, all);
  transition-timing-function: var(--timing-function, var(--fui-animation-default-timing-function));
}

/* @endsection */
`;

   var borderStyles = i$4 `
/* @section Border */
.border-transparent {
  border-color: transparent;
}

.border {
  border: var(--fui-border-width) solid var(--fui-color-border);
  border-radius: var(--fui-border-radius);
}

.b {
  border: var(--fui-border-width) solid var(--fui-color-border);
}

.bt {
  border-top: var(--fui-border-width) solid var(--fui-color-border);
}

.br {
  border-right: var(--fui-border-width) solid var(--fui-color-border);
}

.bb {
  border-bottom: var(--fui-border-width) solid var(--fui-color-border);
}

.bl {
  border-left: var(--fui-border-width) solid var(--fui-color-border);
}
/* @endsection */
`;

   function states(className, content) {
       return r$6(`.${className}--hover:hover,
.${className}--focus:focus,
.${className}--focus:hover,
.${className}--focus-within:focus-within,
.${className}--active:active,
.${className}--disabled:disabled {
${content}
}`);
   }

   function theme(t) {
       return r$6(`.${t} {
  color: var(--fui-theme-${t}-color);
  background-color: var(--fui-theme-${t}-background-color);
}

.${t} :visited {
  color: var(--fui-theme-${t}-color-visited);
}

${states(t, `  color: var(--fui-theme-${t}-color);
  background-color: var(--fui-theme-${t}-background-color);`)}

.${t}-inverse {
  color: var(--fui-theme-${t}-background-color);
  background-color: var(--fui-theme-${t}-color);
}

.${t}-inverse :visited {
  color: var(--fui-theme-${t}-color-visited);
}

${states(`${t}-inverse`, `  color: var(--fui-theme-${t}-background-color);
  background-color: var(--fui-theme-${t}-color);`)}

.c-${t}-color {
  color: var(--fui-theme-${t}-color);
}

${states(`c-${t}-color`, `  color: var(--fui-theme-${t}-color);`)}

.c-${t}-background-color {
  color: var(--fui-theme-${t}-background-color);
}

${states(`c-${t}-background-color`, `  color: var(--fui-theme-${t}-background-color);`)}

.bg-${t}-color {
  background-color: var(--fui-theme-${t}-color);
}

${states(`bg-${t}-color`, `  background-color: var(--fui-theme-${t}-color);`)}

.bg-${t}-background-color {
  background-color: var(--fui-theme-${t}-background-color);
}

${states(`bg-${t}-background-color`, `  background-color: var(--fui-theme-${t}-background-color);`)}`);
   }
   var colorStyles = r$6(`
/* @section Color */
${theme('primary')}
${theme('accent')}
${theme('complement')}
${theme('neutral')}
${theme('success')}
${theme('info')}
${theme('warn')}
${theme('danger')}
/* @endsection */`);

   var displayStyles = i$4 `
/* @section Display */
.block {
  display: block;
}

.inline {
  display: inline;
}

.inline-block {
  display: inline-block;
}

.flex {
  display: flex;
}

.grid {
  display: grid;
}

.contents {
  display: contents;
}

.none {
  display: none;
}
/* @endsection */
`;

   var focusStyles = i$4 `
/* @section Focus */
:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 4px;
  border-color: transparent; /* if it already had a border, keep it to prevent layout shift */
}
/* @endsection */
`;

   var globalStyles = i$4 `
/* @section Reset */
*, *:before, *:after, :host {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

:root {
  -moz-text-size-adjust: none;
  -webkit-text-size-adjust: none;
  text-size-adjust: none;
}

img,
picture,
video,
iframe {
  max-inline-size: 100%;
  max-block-size: 100%;
  object-fit: contain;
}

a {
  text-decoration: inherit;

  &[disabled] {
    pointer-events: none;
  }

  &:not([class]) {
    text-decoration-skip-ink: auto;
    color: currentColor;
    display: inline-block;
  }
}

:visited {
  color: currentColor;
}

body {
  overflow-x: hidden;
  min-height: 100svh;
  line-height: 1.5;
  text-wrap: pretty;
}

h1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5, h6, .h6 {
  text-wrap: balance;
}

input, button,
textarea, select {
  font-family: inherit;
  font-size: inherit;
}

textarea:not([rows]) {
  min-height: 10em;
}

:target {
  scroll-margin-block: 5ex;
}
/* @endsection */
`;

   var layoutStyles = i$4 `
/* @section Layout */
.flow > * + * {
  margin-block-start: var(--flow, 1em);
}

.page {
  padding: var(--fui-spacing-page) var(--spacing-page-y, var(--fui-spacing-page-y));
}

.page-inline {
  padding-inline: var(--fui-spacing-page-x);
}

.page-block {
  padding-block var(--spacing-page-y, var(--fui-spacing-page-y));
}

.container {
  --container-name: ;
  container-name: var(--container-name);
  container-type: inline-size;
}

.row {
  display: flex;
  flex-direction: row;
}

.column {
  display: flex;
  flex-direction: column;
}

/* use flex instead of grid as grid screws up responsive images */
.start-start, .start {
  display: flex;
  justify-content: start;
  align-items: start;
}

.start-center {
  display: flex;
  justify-content: start;
  align-items: center;
}

.start-end {
  display: flex;
  justify-content: start;
  align-items: end;
}

.center-start {
  display: flex;
  justify-content: center;
  align-items: start;
}

.center-center, .center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.center-end {
  display: flex;
  justify-content: center;
  align-items: end;
}

.end-start {
  display: flex;
  justify-content: end;
  align-items: start;
}

.end-center {
  display: flex;
  justify-content: end;
  align-items: center;
}

.end-end, .end {
  display: flex;
  justify-content: end;
  align-items: end;
}

.space-between {
  place-content: space-between;
  justify-content: space-between;
}

.space-around {
  place-content: space-around;
  justify-content: space-around;
}

.wrap {
  flex-wrap: wrap;
}

.g-text {
  gap: var(--gap, --fui-spacing-text);
}

.f-0 {
  flex: 0;
}

.f-10a {
  flex: 1 0 auto;
}

.f-1 {
  flex: 1;
}

.jc-start {
  justify-content: start;
}

.jc-center {
  justify-content: center;
}

.jc-end {
  justify-content: end;
}

.jc-between {
  justify-content: space-between;
}

.jc-around {
  justify-content: space-around;
}

.jc-evenly {
  justify-content: space-evenly;
}

.jc-stretch {
  justify-content: stretch;
}

.ji-start {
  justify-items: start;
}

.ji-center {
  justify-items: center;
}

.ji-end {
  justify-items: end;
}

.ji-stretch {
  justify-items: stretch;
}

.ai-start {
  align-items: start;
}

.ai-center {
  align-items: center;
}

.ai-end {
  align-items: end;
}

.ai-stretch {
  align-items: stretch;
}

.ac-start {
  align-content: start;
}

.ac-center {
  align-content: center;
}

.ac-end {
  align-content: end;
}

.ac-between {
  align-content: space-between;
}

.ac-around {
  align-content: space-around;
}

.ac-stretch {
  align-content: stretch;
}
/* @endsection */
`;

   var marginStyles = i$4 `
.m {
  margin: var(--fui-spacing-y-min) var(--fui-spacing-x-min);
}

.mt {
  margin-top: var(--fui-spacing-y-min);
}

.mr {
  margin-right: var(--fui-spacing-x-min);
}

.mb {
  margin-bottom: var(--fui-spacing-y-min);
}

.ml {
  margin-left: var(--fui-spacing-x-min);
}

.mx {
  margin-left: var(--fui-spacing-x-min);
  margin-right: var(--fui-spacing-x-min);
}

.my {
  margin-top: var(--fui-spacing-y-min);
  margin-bottom: var(--fui-spacing-y-min);
}

.m-0 {
  margin: 0;
}

.mt-0 {
  margin-top: 0;
}

.mr-0 {
  margin-right: 0;
}

.mb-0 {
  margin-bottom: 0;
}

.ml-0 {
  margin-left: 0;
}

.m-responsive {
  margin: var(--fui-spacing-responsive-y) var(--fui-spacing-responsive-x);
}

.mt-responsive {
  margin-top: var(--fui-spacing-responsive-y);
}

.mr-responsive {
  margin-right: var(--fui-spacing-responsive-x);
}

.mb-responsive {
  margin-bottom: var(--fui-spacing-responsive-y);
}

.ml-responsive {
  margin-left: var(--fui-spacing-responsive-x);
}

.mx-responsive {
  margin-left: var(--fui-spacing-responsive-x);
  margin-right: var(--fui-spacing-responsive-x);
}

.my-responsive {
  margin-top: var(--fui-spacing-responsive-y);
  margin-bottom: var(--fui-spacing-responsive-y);
}

.ml-auto {
  margin-left: auto;
}

.mr-auto {
  margin-right: auto;
}

.mt-text {
  margin-top: var(--fui-spacing-text);
}

.mb-text {
  margin-bottom: var(--fui-spacing-text);
}
`;

   const rules = [0, 10, 20, 25, 30, 40, 50, 60, 70, 75, 80, 90, 100].map(value => `.o-${value} {
  opacity: ${value / 100};
}
`);
   var opacityStyles = r$6(`
/* @section Opacity */
${rules.join('\n')}
/* @endsection */
`);

   var paddingStyles = i$4 `
.p {
  padding: var(--fui-spacing-y-min) var(--fui-spacing-x-min);
}

.pt {
  padding-top: var(--fui-spacing-y-min);
}

.pr {
  padding-right: var(--fui-spacing-x-min);
}

.pb {
  padding-bottom: var(--fui-spacing-y-min);
}

.pl {
  padding-left: var(--fui-spacing-x-min);
}

.px {
  padding-left: var(--fui-spacing-x-min);
  padding-right: var(--fui-spacing-x-min);
}

.py {
  padding-top: var(--fui-spacing-y-min);
  padding-bottom: var(--fui-spacing-y-min);
}

.p-0 {
  padding: 0;
}

.pt-0 {
  padding-top: 0;
}

.pr-0 {
  padding-right: 0;
}

.pb-0 {
  padding-bottom: 0;
}

.pl-0 {
  padding-left: 0;
}

.p-responsive {
  padding: var(--fui-spacing-responsive-y) var(--fui-spacing-responsive-x);
}

.pt-responsive {
  padding-top: var(--fui-spacing-responsive-y);
}

.pr-responsive {
  padding-right: var(--fui-spacing-responsive-x);
}

.pb-responsive {
  padding-bottom: var(--fui-spacing-responsive-y);
}

.pl-responsive {
  padding-left: var(--fui-spacing-responsive-x);
}

.px-responsive {
  padding-left: var(--fui-spacing-responsive-x);
  padding-right: var(--fui-spacing-responsive-x);
}

.py-responsive {
  padding-top: var(--fui-spacing-responsive-y);
  padding-bottom: var(--fui-spacing-responsive-y);
}

.pt-text {
  padding-top: var(--fui-spacing-text);
}

.pb-text {
  padding-bottom: var(--fui-spacing-text);
}
`;

   var positionStyles = i$4 `
/* @section Position */
.static {
  position: static;
}

.relative {
  position: relative;
}

.absolute {
  position: absolute;
}

.sticky {
  position: sticky;
}

.fixed {
  position: fixed;
}
/* @endsection */
`;

   var screenReaderStyles = i$4 `
/* @section Other */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:active,
.sr-only-focusable:focus {
  position: static;
  width: auto;
  height: auto;
  overflow: visible;
  clip: auto;
  white-space: normal;
}
/* @endsection */
`;

   /**
    * @license
    * Copyright 2021 Google LLC
    * SPDX-License-Identifier: BSD-3-Clause
    */
   function*o$3(o,t,e=1){const i=void 0===t?0:o;t??=o;for(let o=i;e>0?o<t:t<o;o+=e)yield o;}

   function shadow(index) {
       return r$6(`.bs-${index} {
  box-shadow: var(--fui-box-shadow-${index});
}`);
   }
   var shadowStyles = r$6(`
/* @section Shadow */
.bs-0 {
  box-shadow: none;
}
${Array.from(o$3(1, 7)).map((index) => r$6(`
${shadow(index)}

${states(`bs-${index}`, `  box-shadow: var(--fui-box-shadow-${index});`)}`)).join('')}
/* @endsection */
`);

   var sizeStyles = i$4 `
.viewport {
  width: 100vw;
  height: 100vh;
}

.h-viewport {
  height: 100vh;
}

.h-100 {
  height: 100%;
}

.minh-viewport {
  min-height: 100vh;
}

.minh-100 {
  min-height: 100%;
}

.maxh-viewport {
  max-height: 100vh;
}

.maxh-100 {
  max-height: 100%;
}

.w-viewport {
  width: 100vw;
}

.w-100 {
  width: 100%;
}

.w-fit-content {
  width: fit-content;
}

.w-page {
  width: var(--fui-page-width);
}`;

   var typographyStyles = i$4 `
/* @section Typography */
body, p {
  font-family: var(--fui-body-font-family);
  font-size: var(--fui-body-font-size);
  line-height: var(--fui-body-line-height);
  font-weight: var(--fui-body-font-weight);
  font-style: var(--fui-body-font-style);
  font-variant: var(--fui-body-font-variant);
  font-kerning: var(--fui-body-font-kerning);
}

h1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5, h6, .h6 {
  font-family: var(--fui-heading-font-family);
  line-height: var(--fui-heading-line-height);
}

h1, .h1 {
  font-size: var(--fui-h1-font-size);
}

h2, .h2 {
  font-size: var(--fui-h2-font-size);
}

h3, .h3 {
  font-size: var(--fui-h3-font-size);
}

h4, .h4 {
  font-size: var(--fui-h4-font-size);
}

h5, .h5 {
  font-size: var(--fui-h5-font-size);
}

h6, .h6 {
  font-size: var(--fui-h6-font-size);
}

.bold {
  font-weight: bold;
}

.italic {
  font-style: italic;
}

.fs-smaller {
  font-size: calc(1em / var(--fui-font-size-scale));
}

.fs-medium {
  font-size: 1rem;
}

.fs-larger {
  font-size: calc(1em * var(--fui-font-size-scale));
}

.ta-start {
  text-align: start;
}

.ta-center {
  text-align: center;
}

.ta-end {
  text-align: end;
}

.td-uppercase {
  text-transform: uppercase;
}

.td-lowercase {
  text-transform: lowercase;
}

.td-capitalize {
  text-transform: capitalize;
}

.td-none {
  text-decoration: none;
}
/* @endsection */
`;

   var visibilityStyles = i$4 `
/* @section Visibility */
.v-hidden {
  visibility: hidden;
}

.v-visible {
  visibility: visible;
}
/* @endsection */
`;

   var zIndexStyles = i$4 `
/* @section Z-Index */
.zi-0 {
  z-index: 0;
}

.zi-drawer {
  z-index: var(--fui-z-index-drawer);
}

.zi-dialog {
  z-index: var(--fui-z-index-dialog);
}

.zi-dropdown {
  z-index: var(--fui-z-index-dropdown);
}

.zi-alert-group {
  z-index: var(--fui-z-index-alert-group);
}

.zi-tooltip {
  z-index: var(--fui-z-index-tooltip);
}
/* @endsection */
`;

   /**
    * @type {import('lit').CSSResultGroup}
    */
   const utilityStyles = [
       globalStyles,
       displayStyles,
       positionStyles,
       sizeStyles,
       marginStyles,
       paddingStyles,
       visibilityStyles,
       opacityStyles,
       screenReaderStyles,
       layoutStyles,
       typographyStyles,
       colorStyles,
       borderStyles,
       zIndexStyles,
       shadowStyles,
       animationStyles,
       focusStyles,
   ];

   function debug(...msgs) {
       if (localStorage.getItem('fui-debug') != null) {
           console.debug(...msgs);
       }
   }

   var __decorate$c = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
       var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
       if (typeof Reflect === "object" && typeof undefined === "function") r = undefined(decorators, target, key, desc);
       else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
       return c > 3 && r && Object.defineProperty(target, key, r), r;
   };
   class FUIBaseElement extends s {
       constructor() {
           super(...arguments);
           this.classes = {};
           this.styles = {};
           this.debug = debug;
       }
       emit(name, detail) {
           this.dispatchEvent(new CustomEvent(name, { detail, bubbles: true, composed: true }));
       }
   }
   FUIBaseElement.styles = [
       utilityStyles,
   ];
   __decorate$c([
       n$1({ type: String, attribute: 'class', converter: {
               fromAttribute: (value) => convertClassStringToObject(value),
               toAttribute: (value) => convertObjectToClassString(value)
           } })
   ], FUIBaseElement.prototype, "classes", void 0);
   __decorate$c([
       n$1({ type: String, attribute: 'style', converter: {
               fromAttribute: (value) => convertStyleStringToObject(value),
               toAttribute: (value) => convertObjectToStyleString(value)
           } })
   ], FUIBaseElement.prototype, "styles", void 0);

   var __decorate$b = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
       var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
       if (typeof Reflect === "object" && typeof undefined === "function") r = undefined(decorators, target, key, desc);
       else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
       return c > 3 && r && Object.defineProperty(target, key, r), r;
   };
   /**
    * List of hierarchical links.
    *
    * The default separator is '/'. To change it, set the `--breadcrumb-separator` CSS variable on an ancestor element (i.e. on the :root element for all breadcrumb
    * instances, and on the host element for a specific instance).
    */
   exports.FUIBreadcrumbs = class FUIBreadcrumbs extends FUIBaseElement {
       constructor() {
           super(...arguments);
           this.links = [];
       }
       render() {
           return x `<ul>${o$4(this.links, (link) => x `<li><a href=${link.href}>${link.text}</a></li>`)}</ul>`;
       }
   };
   exports.FUIBreadcrumbs.styles = [
       FUIBaseElement.styles,
       i$4 `
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
   __decorate$b([
       n$1({ type: Array })
   ], exports.FUIBreadcrumbs.prototype, "links", void 0);
   exports.FUIBreadcrumbs = __decorate$b([
       t$1('fui-breadcrumbs')
   ], exports.FUIBreadcrumbs);

   /**
    * @license
    * Copyright 2017 Google LLC
    * SPDX-License-Identifier: BSD-3-Clause
    */
   const t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e$2=t=>(...e)=>({_$litDirective$:t,values:e});let i$1 = class i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i;}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};

   /**
    * @license
    * Copyright 2018 Google LLC
    * SPDX-License-Identifier: BSD-3-Clause
    */const n="important",i=" !"+n,o$2=e$2(class extends i$1{constructor(t$1){if(super(t$1),t$1.type!==t.ATTRIBUTE||"style"!==t$1.name||t$1.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,r)=>{const s=t[r];return null==s?e:e+`${r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`}),"")}update(e,[r]){const{style:s}=e.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(r)),this.render(r);for(const t of this.ft)null==r[t]&&(this.ft.delete(t),t.includes("-")?s.removeProperty(t):s[t]=null);for(const t in r){const e=r[t];if(null!=e){this.ft.add(t);const r="string"==typeof e&&e.endsWith(i);t.includes("-")||r?s.setProperty(t,r?e.slice(0,-11):e,r?n:""):s[t]=e;}}return w}});

   var cardStyles = i$4 `
:root {
  --fui-card-border: var(--fui-border);
  --fui-card-border-radius: var(--fui-border-radius);
  --fui-card-box-shadow: var(--fui-box-shadow-0);
  --fui-card-padding: calc(var(--fui-spacing-base) * 10) calc(var(--fui-spacing-base) * 10);
}

.card, fui-card {
  display: grid;
  border-radius: var(--fui-card-border-radius);
  border: var(--fui-card-border);
  box-shadow: var(--fui-card-box-shadow);
  padding: var(--fui-card-padding);
}
`;

   var __decorate$a = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
       var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
       if (typeof Reflect === "object" && typeof undefined === "function") r = undefined(decorators, target, key, desc);
       else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
       return c > 3 && r && Object.defineProperty(target, key, r), r;
   };
   /**
    * Card component for displaying isolated content.
    * @element fui-card
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
           return x `<article class='card' part='card' style=${o$2(this._getGridTemplateRules())}>
      <slot name='image'></slot>
      <slot name='header'></slot>
      <slot></slot>
      <slot name='footer'></slot>
    </div>`;
       }
   };
   exports.FUICard.styles = [
       cardStyles
   ];
   __decorate$a([
       n$1({ type: String })
   ], exports.FUICard.prototype, "layout", void 0);
   exports.FUICard = __decorate$a([
       t$1('fui-card')
   ], exports.FUICard);

   /**
    * @license
    * Copyright 2018 Google LLC
    * SPDX-License-Identifier: BSD-3-Clause
    */const o$1=o=>o??T;

   var __decorate$9 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
       var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
       if (typeof Reflect === "object" && typeof undefined === "function") r = undefined(decorators, target, key, desc);
       else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
       return c > 3 && r && Object.defineProperty(target, key, r), r;
   };
   /**
    * Renders an email address while obfuscating it from bots
    *
    * @prop {string} user - The user part of the email address
    */
   exports.FUIEmailAddress = class FUIEmailAddress extends s {
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
           return x `<a part="link" aria-label='${o$1(this.label)}'><slot name='prefix'></slot><span part='default' data-user="${this.user}" data-domain="${this.domain}"><slot name='suffix'></slot></span></a>`;
       }
   };
   exports.FUIEmailAddress.styles = [
       i$4 `
      :host {
        display: inline-block;
      }

      a {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        color: inherit;
        text-decoration: none;
      }

      span::before {
        content: attr(data-domain) "\u0040" attr(data-user);
        unicode-bidi: bidi-override;
        direction: rtl;
      }
    `
   ];
   __decorate$9([
       n$1({ type: String })
   ], exports.FUIEmailAddress.prototype, "user", void 0);
   __decorate$9([
       n$1({ type: String })
   ], exports.FUIEmailAddress.prototype, "domain", void 0);
   __decorate$9([
       n$1({ type: Boolean })
   ], exports.FUIEmailAddress.prototype, "mailto", void 0);
   __decorate$9([
       n$1({ type: String })
   ], exports.FUIEmailAddress.prototype, "label", void 0);
   exports.FUIEmailAddress = __decorate$9([
       t$1('fui-email-address')
   ], exports.FUIEmailAddress);

   /**
    * @license
    * Copyright 2021 Google LLC
    * SPDX-License-Identifier: BSD-3-Clause
    */
   const r=(r,o,t)=>{for(const t of o)if(t[0]===r)return (0, t[1])();return t?.()};

   var __decorate$8 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
       var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
       if (typeof Reflect === "object" && typeof undefined === "function") r = undefined(decorators, target, key, desc);
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
           this.use = '';
           this.src = '';
           this.name = '';
       }
       render() {
           const method = this.use ? 'use' : this.src ? 'img' : this.name ? 'i' : 'object';
           return x `${r(method, [
            ['object', () => x `<object tabindex='${this.tabIndex}' type='image/svg+xml' data='${this.data}' aria-label='${this.label}'></object>`],
            ['use', () => x `<svg tabindex='${this.tabIndex}' aria-label='${this.label}'><use href='${this.use}'></use></svg>`],
            ['img', () => x `<img tabindex='${this.tabIndex}' src='${this.src}' alt='${this.label}' />`],
            ['i', () => x `<i tabindex='${this.tabIndex}' class='${this.name}' aria-label='${this.label}'></i>`]
        ])}`;
       }
   };
   exports.FUIIcon.styles = [
       i$4 `
      :host {
        display: inline-flex;
        pointer-events: none;
        width: 1em;
        height: 1em;
        stroke: currentColor;
        stroke-width: 2;
        stroke-linecap: round;
        stroke-linejoin: round;
        fill: none;
      }
    `
   ];
   __decorate$8([
       n$1({ type: String })
   ], exports.FUIIcon.prototype, "label", void 0);
   __decorate$8([
       n$1({ type: Number })
   ], exports.FUIIcon.prototype, "tabIndex", void 0);
   __decorate$8([
       n$1({ type: String })
   ], exports.FUIIcon.prototype, "data", void 0);
   __decorate$8([
       n$1({ type: String })
   ], exports.FUIIcon.prototype, "use", void 0);
   __decorate$8([
       n$1({ type: String })
   ], exports.FUIIcon.prototype, "src", void 0);
   __decorate$8([
       n$1({ type: String })
   ], exports.FUIIcon.prototype, "name", void 0);
   exports.FUIIcon = __decorate$8([
       t$1('fui-icon')
   ], exports.FUIIcon);

   var listStyle = i$4 `
/* @section List */
ol, ul, ::part(list) {
  list-style-type: disc;
  margin-left: 1.5em;
}

.ls-none {
  list-style-type: none;
  margin-left: unset;
}

.lst-none {
  list-style-type: none;
}

.lsp-inside {
  list-style-position: inside;
}

.lsp-outside {
  list-style-position: outside;
}
/* @endsection */
`;

   var __decorate$7 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
       var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
       if (typeof Reflect === "object" && typeof undefined === "function") r = undefined(decorators, target, key, desc);
       else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
       return c > 3 && r && Object.defineProperty(target, key, r), r;
   };
   exports.FUIList = class FUIList extends FUIBaseElement {
       constructor() {
           super(...arguments);
           this.type = 'ul';
           this.items = [];
       }
       render() {
           return r(this.type, [
               ['ul', () => x `<ul part='list'><slot>${this.items.map(item => x `<li>${item}</li>`)}</slot></ul>`],
               ['ol', () => x `<ol part='list'><slot>${this.items.map(item => x `<li>${item}</ol>`)}</slot></ol>`],
               ['dl', () => x `<dl part='list'><slot>${this.items.map(item => x `<dt>${item.dt}</dt><dd>${item.dd}</dd>`)}</slot></dl>`]
           ]);
       }
   };
   exports.FUIList.styles = [
       listStyle
   ];
   __decorate$7([
       n$1({ type: String })
   ], exports.FUIList.prototype, "type", void 0);
   __decorate$7([
       n$1({ type: Array })
   ], exports.FUIList.prototype, "items", void 0);
   exports.FUIList = __decorate$7([
       t$1('fui-list')
   ], exports.FUIList);

   var componentStyles = i$4 `
:root {
  --fui-pagination-current-background-color: var(--fui-color-info-400);
}

fui-pagination {
  display: flex;
  flex-direction: row;
}

.pagination ul {
  display: flex;
  flex-direction: row;
}

.pagination__item a {
  cursor: pointer;
  min-width: 2em;
  border: var(--fui-pagination-border, var(--fui-border));
  display: block;
  text-align: center;
  padding: 0 0.5em;
}

.pagination__item [aria-current=page] {
  background: var(--fui-pagination-current-background-color);
}

a[disabled] {
  pointer-events: none;
}

.pagination__item:not([hidden]):first-child a,
.pagination__item[hidden] + .pagination__item:not([hidden]) a {
  border-top-left-radius: var(--fui-pagination-border-radius, var(--fui-border-radius));
  border-bottom-left-radius: var(--fui-pagination-border-radius, var(--fui-border-radius));
}

.pagination__item:not([hidden]):first-child ~ .pagination__item a,
.pagination__item[hidden] + .pagination__item:not([hidden]) ~ .pagination__item a {
  border-top-left-radius: inherit;
  border-bottom-left-radius: inherit;
}



`;

   const PAGINATION_SELECT_EVENT = 'pagination-select';

   /**
    * @license
    * Copyright 2018 Google LLC
    * SPDX-License-Identifier: BSD-3-Clause
    */const e$1=e$2(class extends i$1{constructor(t$1){if(super(t$1),t$1.type!==t.ATTRIBUTE||"class"!==t$1.name||t$1.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return " "+Object.keys(t).filter((s=>t[s])).join(" ")+" "}update(s,[i]){if(void 0===this.st){this.st=new Set,void 0!==s.strings&&(this.nt=new Set(s.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in i)i[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(i)}const r=s.element.classList;for(const t of this.st)t in i||(r.remove(t),this.st.delete(t));for(const t in i){const s=!!i[t];s===this.st.has(t)||this.nt?.has(t)||(s?(r.add(t),this.st.add(t)):(r.remove(t),this.st.delete(t)));}return w}});

   var __decorate$6 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
       var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
       if (typeof Reflect === "object" && typeof undefined === "function") r = undefined(decorators, target, key, desc);
       else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
       return c > 3 && r && Object.defineProperty(target, key, r), r;
   };
   /**
    *
    * Potential improvements:
    * - [ ] don't render anything after the first page if the there is only one page, instead of hidding everything
    */
   exports.FUIPagination = class FUIPagination extends FUIBaseElement {
       constructor() {
           super(...arguments);
           this.count = 0;
           this.pageSize = 10;
           this.currentPage = 1;
           this.maxDisplayed = 8;
       }
       handleClick(e) {
           e.preventDefault();
           const target = e.target;
           if (["A", "SLOT"].includes(target.tagName) && !target.disabled) {
               this.emitPaginationEvent(target);
           }
       }
       handleKeydown(e) {
           if (e.key === 'Enter') {
               this.emitPaginationEvent(e.target);
           }
       }
       willUpdate(_changedProperties) {
           if (_changedProperties.has('maxDisplayed')) {
               if (this.maxDisplayed < 7 || this.maxDisplayed % 2 === 0) {
                   if (this.maxDisplayed < 7) {
                       console.error('maxDisplayed must be at least 8');
                   }
               }
           }
       }
       emitPaginationEvent(target) {
           var _a;
           let page = this.currentPage;
           if (target.matches('li:first-child slot, li:first-child a')) {
               page--;
           }
           else if (target.matches('li:last-child slot, li:last-child a')) {
               page++;
           }
           else {
               page = parseInt((_a = target.textContent) !== null && _a !== void 0 ? _a : '1', 10);
           }
           this.emit(PAGINATION_SELECT_EVENT, { page });
       }
       isCurrentPage(page) {
           return this.currentPage === page ? 'page' : undefined;
       }
       getPages(numPages) {
           const pages = [x `<li class='pagination__item'><a aria-current=${this.isCurrentPage(1)} tabindex='0'>1</a></li>`];
           if (numPages === 1)
               return pages;
           else if (numPages <= this.maxDisplayed) {
               for (let i = 2; i < numPages + 1; i++) {
                   pages.push(x `<li class='pagination__item'><a aria-current=${this.isCurrentPage(i)} tabindex='0'>${i}</a></li>`);
               }
           }
           else {
               // here we know there will be at least one ellipsis, depending on where currentPage is
               // to keep with maxDisplayed, we need to compute the 'low' and 'high' pages, and we know
               // there will be a 1 and a {numPages} page
               // the 'low' page is the max of either 2 or currentPage - offset, BUT if currentPage - offset < 2, 
               // we need to add the difference when we compute high page
               // if lowPage > 2, we need to add an ellipsis, which removes one page from being displayed
               const maxPages = this.maxDisplayed - 3; // -3 because we there will be pages for 1, numPages, and at least one ellipsis
               const offset = Math.floor(maxPages / 2);
               const lowerOffset = this.currentPage - offset;
               const upperOffset = this.currentPage + offset + 1;
               const lowPage = Math.max(2, lowerOffset);
               const toAdd = this.currentPage - lowPage < 0 ? Math.abs(this.currentPage - lowPage) : 0;
               const hasLowEllipsis = lowPage > 2;
               const highPage = Math.min(numPages - 1, upperOffset + toAdd - (hasLowEllipsis ? 1 : 0));
               const highEllipsis = highPage < numPages - 1;
               console.log(`currentPage: ${this.currentPage}, lowPage: ${lowPage}, toAdd: ${toAdd}, highPage: ${highPage}, lowEllipsis: ${hasLowEllipsis}, highEllipsis: ${highEllipsis}`);
               if (hasLowEllipsis) {
                   pages.push(x `<li class='pagination__item'><a>...</a></li>`);
               }
               for (let i = lowPage; i < highPage + 1; i++) {
                   pages.push(x `<li class='pagination__item'><a aria-current=${this.isCurrentPage(i)} tabindex='0'>${i}</a></li>`);
               }
               if (highEllipsis) {
                   pages.push(x `<li class='pagination__item'><a>...</a></li>`);
               }
               pages.push(x `<li class='pagination__item'><a aria-current=${this.isCurrentPage(numPages)} tabindex='0'>${numPages}</a></li>`);
           }
           return pages;
       }
       render() {
           const numPages = Math.ceil(this.count / this.pageSize);
           const isPrevious = this.currentPage <= 1;
           const isNext = numPages - this.currentPage < 1;
           return x `
    <nav class='pagination' @click=${this.handleClick} @keydown=${this.handleKeydown}>
      <ul>
        <li class='pagination__item' class=${e$1({ 'v-hidden': isPrevious })} ?aria-hidden=${isPrevious}><a tabindex='0'><slot name='previous'>Previous</slot></a></li>
        ${this.getPages(numPages)}
        <li class='pagination__item' class=${e$1({ 'v-hidden': isNext })} ?aria-hidden=${isNext}><a tabindex='0'><slot name='next'>Next</slot></a></li>
      </ul>
    </nav>`;
       }
   };
   exports.FUIPagination.styles = [
       FUIBaseElement.styles,
       componentStyles
   ];
   __decorate$6([
       n$1({ type: Number })
   ], exports.FUIPagination.prototype, "count", void 0);
   __decorate$6([
       n$1({ type: Number })
   ], exports.FUIPagination.prototype, "pageSize", void 0);
   __decorate$6([
       n$1({ type: Number })
   ], exports.FUIPagination.prototype, "currentPage", void 0);
   __decorate$6([
       n$1({ type: Number })
   ], exports.FUIPagination.prototype, "maxDisplayed", void 0);
   exports.FUIPagination = __decorate$6([
       t$1('fui-pagination')
   ], exports.FUIPagination);

   /**
    * @element fui-panel
    *
    * @description - A panel that slides in and out from the side of the screen.
    * @slot - The content of the panel.
    * @csspart panel__panel - The panel that slides in and out.
    */
   var __decorate$5 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
       var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
       if (typeof Reflect === "object" && typeof undefined === "function") r = undefined(decorators, target, key, desc);
       else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
       return c > 3 && r && Object.defineProperty(target, key, r), r;
   };
   exports.FUIPanel = class FUIPanel extends FUIBaseElement {
       constructor() {
           super(...arguments);
           this.open = false;
           this.enabled = false;
           this.maxWidth = 760;
           this.panelId = `panel-${Math.random().toString(36).slice(2, 9)}`;
       }
       firstUpdated() {
           var _a;
           // enable the burger menu if the parent is smaller than the max width
           const observer = new ResizeObserver(observedItems => {
               const { contentRect } = observedItems[0];
               this.enabled = contentRect.width <= this.maxWidth;
           });
           observer.observe((_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.host.parentElement);
       }
       toggleOpen() {
           this.open = !this.open;
           console.log('here');
           // TODO: should these event listeners be removed when the panel is closed?
           if (this.open) {
               // close the panel when clicking outside of it
               document.addEventListener('click', (event) => {
                   console.log(event.target);
                   if (event.target instanceof HTMLElement && event.target.closest('[part=panel]')) {
                       this.open = false;
                   }
               });
               // close the panel when pressing the escape key
               document.addEventListener('keydown', (event) => {
                   if (event.key === 'Escape') {
                       this.open = false;
                   }
               });
               // close the panel when pressing the tab key on the last focusable element
               // NOTE: the last focusable element needs to updated on slot change
               const lastFocusableElement = [...this._slottedElements].map(getFocusableElements).flat(Infinity).at(-1);
               lastFocusableElement === null || lastFocusableElement === void 0 ? void 0 : lastFocusableElement.addEventListener('keydown', (event) => {
                   if (event.key === 'Tab' && !event.shiftKey) {
                       this.open = false;
                   }
               });
           }
           this.emit('fui-panel', { open: this.open });
       }
       render() {
           return x `
      <div class='panel_wrapper' enabled=${this.enabled} open=${this.open} @click=${this.toggleOpen}>
        <button part='panel__trigger' type='button' aria-label=${`${this.open ? 'Close' : 'Open'} menu`} aria-controls=${this.panelId} aria-expanded=${this.open}>
          <slot name='toggle' aria-hidden='true'><span class='panel__bar'></span></slot>
        </button>
        <div id=${this.panelId} part='panel'>
          <slot />
        </div>
      </div>
    `;
       }
   };
   exports.FUIPanel.styles = i$4 `
  .panel__bar,
  .panel__bar::before,
  .panel__bar::after {
    display: block;
    width: 24px;
    height: 3px;
    background: black;
    border: 1px solid var(--color-light);
    position: absolute;
    border-radius: 3px;
    left: 50%;
    margin-left: -12px;
    transition: transform 350ms ease-in-out;
    content: '';
  }
  
  .panel__bar {
    top: 50%;
    transform: translateY(-50%);
  
    &::before {
      top: -8px;
    }

    &::after {
      top: 8px;
    }
  }
  
  [part='panel__trigger'] {
    display: block;
    inline-size: 2rem;
    block-size: 2rem; /* Nice big tap target */
    position: relative;
    z-index: 1;
    background: transparent;
    border: none;
    cursor: pointer;
  }

  [enabled='false'] [part='panel__trigger'] {
    display: none;
  }

  [enabled='true'] {
    & [part='panel'] {
      display: none;
      position: absolute;
      top: 0;
      left: 0;
      inline-size: 100%;
      block-size: 100%;
      background: black;
      color: white;
      overscroll-behavior: contain;
    }

    &[open='true'] {
      & [part='panel'] {
        display: block;
      }
    }
  }`;
   __decorate$5([
       r$1()
   ], exports.FUIPanel.prototype, "open", void 0);
   __decorate$5([
       r$1()
   ], exports.FUIPanel.prototype, "enabled", void 0);
   __decorate$5([
       n$1({ type: Number })
   ], exports.FUIPanel.prototype, "maxWidth", void 0);
   __decorate$5([
       n$1({ type: String })
   ], exports.FUIPanel.prototype, "panelId", void 0);
   __decorate$5([
       o$5({ flatten: true })
   ], exports.FUIPanel.prototype, "_slottedElements", void 0);
   exports.FUIPanel = __decorate$5([
       t$1('fui-panel')
   ], exports.FUIPanel);

   var __decorate$4 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
       var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
       if (typeof Reflect === "object" && typeof undefined === "function") r = undefined(decorators, target, key, desc);
       else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
       return c > 3 && r && Object.defineProperty(target, key, r), r;
   };
   /**
    *   Renders an telephone number while obfuscating it from bots
    */
   exports.FUIPhoneNumber = class FUIPhoneNumber extends s {
       constructor() {
           super(...arguments);
           this.country = '';
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
               a.href = `${prefix}:${this.country ? `${this.country}-` : ''}${reverse(this.area)}-${reverse(this.number)}`;
           }
       }
       render() {
           return x `<a part="link" aria-label='${o$1(this.label)}'><slot></slot><span part='default' data-area=${this.area} data-number="${this.number}"></span></a>`;
       }
   };
   exports.FUIPhoneNumber.styles = [
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
   __decorate$4([
       n$1({ type: String })
   ], exports.FUIPhoneNumber.prototype, "country", void 0);
   __decorate$4([
       n$1({ type: String })
   ], exports.FUIPhoneNumber.prototype, "area", void 0);
   __decorate$4([
       n$1({ type: String })
   ], exports.FUIPhoneNumber.prototype, "number", void 0);
   __decorate$4([
       n$1({ type: Boolean })
   ], exports.FUIPhoneNumber.prototype, "tel", void 0);
   __decorate$4([
       n$1({ type: String })
   ], exports.FUIPhoneNumber.prototype, "label", void 0);
   exports.FUIPhoneNumber = __decorate$4([
       t$1('fui-phone-number')
   ], exports.FUIPhoneNumber);

   /**
    * @license
    * Copyright 2017 Google LLC
    * SPDX-License-Identifier: BSD-3-Clause
    */class e extends i$1{constructor(i){if(super(i),this.it=T,i.type!==t.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(r){if(r===T||null==r)return this._t=void 0,this.it=r;if(r===w)return r;if("string"!=typeof r)throw Error(this.constructor.directiveName+"() called with a non-string value");if(r===this.it)return this._t;this.it=r;const s=[r];return s.raw=s,this._t={_$litType$:this.constructor.resultType,strings:s,values:[]}}}e.directiveName="unsafeHTML",e.resultType=1;const o=e$2(e);

   var __decorate$3 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
       var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
       if (typeof Reflect === "object" && typeof undefined === "function") r = undefined(decorators, target, key, desc);
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
            : T}
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
   __decorate$3([
       n$1({ type: Array })
   ], exports.FUIPricing.prototype, "prices", void 0);
   exports.FUIPricing = __decorate$3([
       t$1('fui-pricing')
   ], exports.FUIPricing);

   var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
       var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
       if (typeof Reflect === "object" && typeof undefined === "function") r = undefined(decorators, target, key, desc);
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

    fui-tabs [slot=tab] {
      border-right: 1px solid black;
    }
    
    fui-tabs [slot=tab]:focus {
      outline: 5px solid blue;
    }
    
    fui-tabs [slot=tab]:last-of-type {
      border-right: none;
    }
    
    /* this is to have it show up as header/section until the component loads */
    fui-tabs:not(:defined) {
      display: block;
    }
  `;
   __decorate$2([
       n$1({ type: Number })
   ], exports.FUITabs.prototype, "selectedIndex", void 0);
   __decorate$2([
       n$1({ type: Boolean })
   ], exports.FUITabs.prototype, "cycle", void 0);
   exports.FUITabs = __decorate$2([
       t$1(`fui-tabs`)
   ], exports.FUITabs);

   var tableStyles = i$4 `
table {
  border-collapse: collapse;
}

thead {
  border-bottom: 1px solid black;
}

tfoot {
  border-top: 1px solid black;
}
tfoot th {
  padding: var(--fui-spacing-base);
}

th {
  text-align: start;
  align-items: center;
}

td {
  padding: var(--fui-spacing-base);
}

[aria-pressed=true] {
  background: var(--fui-color-grey-400);
}

::part(sort-icon), .table__sort-icon {
}
`;

   var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
       var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
       if (typeof Reflect === "object" && typeof undefined === "function") r = undefined(decorators, target, key, desc);
       else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
       return c > 3 && r && Object.defineProperty(target, key, r), r;
   };
   // type TableHeadingData = TableHeading & {
   //   colspan: number
   //   rowspan: number
   //   hidden?: boolean
   //   subheadings: number
   // };
   exports.FUITable = class FUITable extends FUIBaseElement {
       constructor() {
           super(...arguments);
           this.headings = [];
           this.rowHeadings = [];
           this.entries = [];
           this.sortable = true;
           this.multiSort = false;
           this.showHeadingsInFooter = true;
           this.hiddenColumnHeadings = [];
           this.headingDefaults = {
               hideable: true,
               sortable: true,
               filterable: false
           };
           this.isServerControlled = true;
       }
       headingIcons(heading) {
           return !this.sortable || (typeof heading === 'object' && !heading.sort) ? T : x `<button type="button" class="table__sort-icon" part="sort-icon" aria-label="Sort"><fui-icon icon="arrow-up"></fui-icon><fui-icon icon="arrow-down"></fui-icon></button>`;
       }
       render() {
           return x `<div class=${e$1(this.classes)}>
      <table part="table">
        <slot>
          <slot name="caption"><caption part="caption">${this.caption}</caption></slot>
          <thead>
            <tr>
              ${o$4(this.headings, heading => x `
                <th colspan='1' rowspan='1' scope='col'>${typeof heading === 'object' ? heading.content : heading}${this.headingIcons(heading)}</th>
              `)}
            </tr>
          </thead>
          <tbody>
            ${o$4(this.entries, entry => x `<tr>${o$4(entry, (cell) => x `<td>${cell}</td>`)}</tr>`)}
          </tbody>
          ${this.showHeadingsInFooter
            ? x `
              <tfoot>
                ${o$4(this.headings, heading => x `<th>${typeof heading === 'object' ? heading.content : heading}</th>`)}
              </tfoot>`
            : T}
        </slot>
      </table>
      <fui-pagination count=${this.entries.length} pageSize='10'></fui-pagination>
    </div>`;
       }
   };
   exports.FUITable.styles = [
       FUIBaseElement.styles,
       tableStyles
   ];
   __decorate$1([
       n$1({ type: Array })
   ], exports.FUITable.prototype, "headings", void 0);
   __decorate$1([
       n$1({ type: Array })
   ], exports.FUITable.prototype, "rowHeadings", void 0);
   __decorate$1([
       n$1({ type: Array })
   ], exports.FUITable.prototype, "entries", void 0);
   __decorate$1([
       n$1({ type: String })
   ], exports.FUITable.prototype, "caption", void 0);
   __decorate$1([
       n$1({ type: Boolean })
   ], exports.FUITable.prototype, "sortable", void 0);
   __decorate$1([
       n$1({ type: Boolean })
   ], exports.FUITable.prototype, "multiSort", void 0);
   __decorate$1([
       n$1({ type: Boolean })
   ], exports.FUITable.prototype, "showHeadingsInFooter", void 0);
   __decorate$1([
       n$1({ type: Array })
   ], exports.FUITable.prototype, "hiddenColumnHeadings", void 0);
   __decorate$1([
       n$1({ type: Object })
   ], exports.FUITable.prototype, "headingDefaults", void 0);
   __decorate$1([
       n$1({ type: Boolean })
   ], exports.FUITable.prototype, "isServerControlled", void 0);
   exports.FUITable = __decorate$1([
       t$1('fui-table')
   ], exports.FUITable);

   const sides = ['top', 'right', 'bottom', 'left'];
   const alignments = ['start', 'end'];
   const placements = /*#__PURE__*/sides.reduce((acc, side) => acc.concat(side, side + "-" + alignments[0], side + "-" + alignments[1]), []);
   const oppositeSideMap = {
     left: 'right',
     right: 'left',
     bottom: 'top',
     top: 'bottom'
   };
   const oppositeAlignmentMap = {
     start: 'end',
     end: 'start'
   };
   function evaluate(value, param) {
     return typeof value === 'function' ? value(param) : value;
   }
   function getSide(placement) {
     return placement.split('-')[0];
   }
   function getAlignment(placement) {
     return placement.split('-')[1];
   }
   function getOppositeAxis(axis) {
     return axis === 'x' ? 'y' : 'x';
   }
   function getAxisLength(axis) {
     return axis === 'y' ? 'height' : 'width';
   }
   function getSideAxis(placement) {
     return ['top', 'bottom'].includes(getSide(placement)) ? 'y' : 'x';
   }
   function getAlignmentAxis(placement) {
     return getOppositeAxis(getSideAxis(placement));
   }
   function getAlignmentSides(placement, rects, rtl) {
     if (rtl === void 0) {
       rtl = false;
     }
     const alignment = getAlignment(placement);
     const alignmentAxis = getAlignmentAxis(placement);
     const length = getAxisLength(alignmentAxis);
     let mainAlignmentSide = alignmentAxis === 'x' ? alignment === (rtl ? 'end' : 'start') ? 'right' : 'left' : alignment === 'start' ? 'bottom' : 'top';
     if (rects.reference[length] > rects.floating[length]) {
       mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
     }
     return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
   }
   function getOppositeAlignmentPlacement(placement) {
     return placement.replace(/start|end/g, alignment => oppositeAlignmentMap[alignment]);
   }
   function getOppositePlacement(placement) {
     return placement.replace(/left|right|bottom|top/g, side => oppositeSideMap[side]);
   }
   function expandPaddingObject(padding) {
     return {
       top: 0,
       right: 0,
       bottom: 0,
       left: 0,
       ...padding
     };
   }
   function getPaddingObject(padding) {
     return typeof padding !== 'number' ? expandPaddingObject(padding) : {
       top: padding,
       right: padding,
       bottom: padding,
       left: padding
     };
   }
   function rectToClientRect(rect) {
     return {
       ...rect,
       top: rect.y,
       left: rect.x,
       right: rect.x + rect.width,
       bottom: rect.y + rect.height
     };
   }

   function computeCoordsFromPlacement(_ref, placement, rtl) {
     let {
       reference,
       floating
     } = _ref;
     const sideAxis = getSideAxis(placement);
     const alignmentAxis = getAlignmentAxis(placement);
     const alignLength = getAxisLength(alignmentAxis);
     const side = getSide(placement);
     const isVertical = sideAxis === 'y';
     const commonX = reference.x + reference.width / 2 - floating.width / 2;
     const commonY = reference.y + reference.height / 2 - floating.height / 2;
     const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
     let coords;
     switch (side) {
       case 'top':
         coords = {
           x: commonX,
           y: reference.y - floating.height
         };
         break;
       case 'bottom':
         coords = {
           x: commonX,
           y: reference.y + reference.height
         };
         break;
       case 'right':
         coords = {
           x: reference.x + reference.width,
           y: commonY
         };
         break;
       case 'left':
         coords = {
           x: reference.x - floating.width,
           y: commonY
         };
         break;
       default:
         coords = {
           x: reference.x,
           y: reference.y
         };
     }
     switch (getAlignment(placement)) {
       case 'start':
         coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
         break;
       case 'end':
         coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
         break;
     }
     return coords;
   }

   /**
    * Computes the `x` and `y` coordinates that will place the floating element
    * next to a reference element when it is given a certain positioning strategy.
    *
    * This export does not have any `platform` interface logic. You will need to
    * write one for the platform you are using Floating UI with.
    */
   const computePosition$1 = async (reference, floating, config) => {
     const {
       placement = 'bottom',
       strategy = 'absolute',
       middleware = [],
       platform
     } = config;
     const validMiddleware = middleware.filter(Boolean);
     const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(floating));
     let rects = await platform.getElementRects({
       reference,
       floating,
       strategy
     });
     let {
       x,
       y
     } = computeCoordsFromPlacement(rects, placement, rtl);
     let statefulPlacement = placement;
     let middlewareData = {};
     let resetCount = 0;
     for (let i = 0; i < validMiddleware.length; i++) {
       const {
         name,
         fn
       } = validMiddleware[i];
       const {
         x: nextX,
         y: nextY,
         data,
         reset
       } = await fn({
         x,
         y,
         initialPlacement: placement,
         placement: statefulPlacement,
         strategy,
         middlewareData,
         rects,
         platform,
         elements: {
           reference,
           floating
         }
       });
       x = nextX != null ? nextX : x;
       y = nextY != null ? nextY : y;
       middlewareData = {
         ...middlewareData,
         [name]: {
           ...middlewareData[name],
           ...data
         }
       };
       if (reset && resetCount <= 50) {
         resetCount++;
         if (typeof reset === 'object') {
           if (reset.placement) {
             statefulPlacement = reset.placement;
           }
           if (reset.rects) {
             rects = reset.rects === true ? await platform.getElementRects({
               reference,
               floating,
               strategy
             }) : reset.rects;
           }
           ({
             x,
             y
           } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
         }
         i = -1;
         continue;
       }
     }
     return {
       x,
       y,
       placement: statefulPlacement,
       strategy,
       middlewareData
     };
   };

   /**
    * Resolves with an object of overflow side offsets that determine how much the
    * element is overflowing a given clipping boundary on each side.
    * - positive = overflowing the boundary by that number of pixels
    * - negative = how many pixels left before it will overflow
    * - 0 = lies flush with the boundary
    * @see https://floating-ui.com/docs/detectOverflow
    */
   async function detectOverflow(state, options) {
     var _await$platform$isEle;
     if (options === void 0) {
       options = {};
     }
     const {
       x,
       y,
       platform,
       rects,
       elements,
       strategy
     } = state;
     const {
       boundary = 'clippingAncestors',
       rootBoundary = 'viewport',
       elementContext = 'floating',
       altBoundary = false,
       padding = 0
     } = evaluate(options, state);
     const paddingObject = getPaddingObject(padding);
     const altContext = elementContext === 'floating' ? 'reference' : 'floating';
     const element = elements[altBoundary ? altContext : elementContext];
     const clippingClientRect = rectToClientRect(await platform.getClippingRect({
       element: ((_await$platform$isEle = await (platform.isElement == null ? void 0 : platform.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || (await (platform.getDocumentElement == null ? void 0 : platform.getDocumentElement(elements.floating))),
       boundary,
       rootBoundary,
       strategy
     }));
     const rect = elementContext === 'floating' ? {
       ...rects.floating,
       x,
       y
     } : rects.reference;
     const offsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(elements.floating));
     const offsetScale = (await (platform.isElement == null ? void 0 : platform.isElement(offsetParent))) ? (await (platform.getScale == null ? void 0 : platform.getScale(offsetParent))) || {
       x: 1,
       y: 1
     } : {
       x: 1,
       y: 1
     };
     const elementClientRect = rectToClientRect(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
       rect,
       offsetParent,
       strategy
     }) : rect);
     return {
       top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
       bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
       left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
       right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
     };
   }

   function getPlacementList(alignment, autoAlignment, allowedPlacements) {
     const allowedPlacementsSortedByAlignment = alignment ? [...allowedPlacements.filter(placement => getAlignment(placement) === alignment), ...allowedPlacements.filter(placement => getAlignment(placement) !== alignment)] : allowedPlacements.filter(placement => getSide(placement) === placement);
     return allowedPlacementsSortedByAlignment.filter(placement => {
       if (alignment) {
         return getAlignment(placement) === alignment || (autoAlignment ? getOppositeAlignmentPlacement(placement) !== placement : false);
       }
       return true;
     });
   }
   /**
    * Optimizes the visibility of the floating element by choosing the placement
    * that has the most space available automatically, without needing to specify a
    * preferred placement. Alternative to `flip`.
    * @see https://floating-ui.com/docs/autoPlacement
    */
   const autoPlacement$1 = function (options) {
     if (options === void 0) {
       options = {};
     }
     return {
       name: 'autoPlacement',
       options,
       async fn(state) {
         var _middlewareData$autoP, _middlewareData$autoP2, _placementsThatFitOnE;
         const {
           rects,
           middlewareData,
           placement,
           platform,
           elements
         } = state;
         const {
           crossAxis = false,
           alignment,
           allowedPlacements = placements,
           autoAlignment = true,
           ...detectOverflowOptions
         } = evaluate(options, state);
         const placements$1 = alignment !== undefined || allowedPlacements === placements ? getPlacementList(alignment || null, autoAlignment, allowedPlacements) : allowedPlacements;
         const overflow = await detectOverflow(state, detectOverflowOptions);
         const currentIndex = ((_middlewareData$autoP = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP.index) || 0;
         const currentPlacement = placements$1[currentIndex];
         if (currentPlacement == null) {
           return {};
         }
         const alignmentSides = getAlignmentSides(currentPlacement, rects, await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating)));

         // Make `computeCoords` start from the right place.
         if (placement !== currentPlacement) {
           return {
             reset: {
               placement: placements$1[0]
             }
           };
         }
         const currentOverflows = [overflow[getSide(currentPlacement)], overflow[alignmentSides[0]], overflow[alignmentSides[1]]];
         const allOverflows = [...(((_middlewareData$autoP2 = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP2.overflows) || []), {
           placement: currentPlacement,
           overflows: currentOverflows
         }];
         const nextPlacement = placements$1[currentIndex + 1];

         // There are more placements to check.
         if (nextPlacement) {
           return {
             data: {
               index: currentIndex + 1,
               overflows: allOverflows
             },
             reset: {
               placement: nextPlacement
             }
           };
         }
         const placementsSortedByMostSpace = allOverflows.map(d => {
           const alignment = getAlignment(d.placement);
           return [d.placement, alignment && crossAxis ?
           // Check along the mainAxis and main crossAxis side.
           d.overflows.slice(0, 2).reduce((acc, v) => acc + v, 0) :
           // Check only the mainAxis.
           d.overflows[0], d.overflows];
         }).sort((a, b) => a[1] - b[1]);
         const placementsThatFitOnEachSide = placementsSortedByMostSpace.filter(d => d[2].slice(0,
         // Aligned placements should not check their opposite crossAxis
         // side.
         getAlignment(d[0]) ? 2 : 3).every(v => v <= 0));
         const resetPlacement = ((_placementsThatFitOnE = placementsThatFitOnEachSide[0]) == null ? void 0 : _placementsThatFitOnE[0]) || placementsSortedByMostSpace[0][0];
         if (resetPlacement !== placement) {
           return {
             data: {
               index: currentIndex + 1,
               overflows: allOverflows
             },
             reset: {
               placement: resetPlacement
             }
           };
         }
         return {};
       }
     };
   };

   // For type backwards-compatibility, the `OffsetOptions` type was also
   // Derivable.
   async function convertValueToCoords(state, options) {
     const {
       placement,
       platform,
       elements
     } = state;
     const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
     const side = getSide(placement);
     const alignment = getAlignment(placement);
     const isVertical = getSideAxis(placement) === 'y';
     const mainAxisMulti = ['left', 'top'].includes(side) ? -1 : 1;
     const crossAxisMulti = rtl && isVertical ? -1 : 1;
     const rawValue = evaluate(options, state);

     // eslint-disable-next-line prefer-const
     let {
       mainAxis,
       crossAxis,
       alignmentAxis
     } = typeof rawValue === 'number' ? {
       mainAxis: rawValue,
       crossAxis: 0,
       alignmentAxis: null
     } : {
       mainAxis: 0,
       crossAxis: 0,
       alignmentAxis: null,
       ...rawValue
     };
     if (alignment && typeof alignmentAxis === 'number') {
       crossAxis = alignment === 'end' ? alignmentAxis * -1 : alignmentAxis;
     }
     return isVertical ? {
       x: crossAxis * crossAxisMulti,
       y: mainAxis * mainAxisMulti
     } : {
       x: mainAxis * mainAxisMulti,
       y: crossAxis * crossAxisMulti
     };
   }

   /**
    * Modifies the placement by translating the floating element along the
    * specified axes.
    * A number (shorthand for `mainAxis` or distance), or an axes configuration
    * object may be passed.
    * @see https://floating-ui.com/docs/offset
    */
   const offset = function (options) {
     return {
       name: 'offset',
       options,
       async fn(state) {
         const {
           x,
           y
         } = state;
         const diffCoords = await convertValueToCoords(state, options);
         return {
           x: x + diffCoords.x,
           y: y + diffCoords.y,
           data: diffCoords
         };
       }
     };
   };

   /**
    * Custom positioning reference element.
    * @see https://floating-ui.com/docs/virtual-elements
    */

   const min = Math.min;
   const max = Math.max;
   const round = Math.round;
   const createCoords = v => ({
     x: v,
     y: v
   });

   function getNodeName(node) {
     if (isNode(node)) {
       return (node.nodeName || '').toLowerCase();
     }
     // Mocked nodes in testing environments may not be instances of Node. By
     // returning `#document` an infinite loop won't occur.
     // https://github.com/floating-ui/floating-ui/issues/2317
     return '#document';
   }
   function getWindow(node) {
     var _node$ownerDocument;
     return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
   }
   function getDocumentElement(node) {
     var _ref;
     return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
   }
   function isNode(value) {
     return value instanceof Node || value instanceof getWindow(value).Node;
   }
   function isElement(value) {
     return value instanceof Element || value instanceof getWindow(value).Element;
   }
   function isHTMLElement(value) {
     return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
   }
   function isShadowRoot(value) {
     // Browsers without `ShadowRoot` support.
     if (typeof ShadowRoot === 'undefined') {
       return false;
     }
     return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
   }
   function isOverflowElement(element) {
     const {
       overflow,
       overflowX,
       overflowY,
       display
     } = getComputedStyle(element);
     return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !['inline', 'contents'].includes(display);
   }
   function isTableElement(element) {
     return ['table', 'td', 'th'].includes(getNodeName(element));
   }
   function isContainingBlock(element) {
     const webkit = isWebKit();
     const css = getComputedStyle(element);

     // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
     return css.transform !== 'none' || css.perspective !== 'none' || (css.containerType ? css.containerType !== 'normal' : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== 'none' : false) || !webkit && (css.filter ? css.filter !== 'none' : false) || ['transform', 'perspective', 'filter'].some(value => (css.willChange || '').includes(value)) || ['paint', 'layout', 'strict', 'content'].some(value => (css.contain || '').includes(value));
   }
   function getContainingBlock(element) {
     let currentNode = getParentNode(element);
     while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
       if (isContainingBlock(currentNode)) {
         return currentNode;
       } else {
         currentNode = getParentNode(currentNode);
       }
     }
     return null;
   }
   function isWebKit() {
     if (typeof CSS === 'undefined' || !CSS.supports) return false;
     return CSS.supports('-webkit-backdrop-filter', 'none');
   }
   function isLastTraversableNode(node) {
     return ['html', 'body', '#document'].includes(getNodeName(node));
   }
   function getComputedStyle(element) {
     return getWindow(element).getComputedStyle(element);
   }
   function getNodeScroll(element) {
     if (isElement(element)) {
       return {
         scrollLeft: element.scrollLeft,
         scrollTop: element.scrollTop
       };
     }
     return {
       scrollLeft: element.pageXOffset,
       scrollTop: element.pageYOffset
     };
   }
   function getParentNode(node) {
     if (getNodeName(node) === 'html') {
       return node;
     }
     const result =
     // Step into the shadow DOM of the parent of a slotted node.
     node.assignedSlot ||
     // DOM Element detected.
     node.parentNode ||
     // ShadowRoot detected.
     isShadowRoot(node) && node.host ||
     // Fallback.
     getDocumentElement(node);
     return isShadowRoot(result) ? result.host : result;
   }
   function getNearestOverflowAncestor(node) {
     const parentNode = getParentNode(node);
     if (isLastTraversableNode(parentNode)) {
       return node.ownerDocument ? node.ownerDocument.body : node.body;
     }
     if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
       return parentNode;
     }
     return getNearestOverflowAncestor(parentNode);
   }
   function getOverflowAncestors(node, list, traverseIframes) {
     var _node$ownerDocument2;
     if (list === void 0) {
       list = [];
     }
     if (traverseIframes === void 0) {
       traverseIframes = true;
     }
     const scrollableAncestor = getNearestOverflowAncestor(node);
     const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
     const win = getWindow(scrollableAncestor);
     if (isBody) {
       return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], win.frameElement && traverseIframes ? getOverflowAncestors(win.frameElement) : []);
     }
     return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
   }

   function getCssDimensions(element) {
     const css = getComputedStyle(element);
     // In testing environments, the `width` and `height` properties are empty
     // strings for SVG elements, returning NaN. Fallback to `0` in this case.
     let width = parseFloat(css.width) || 0;
     let height = parseFloat(css.height) || 0;
     const hasOffset = isHTMLElement(element);
     const offsetWidth = hasOffset ? element.offsetWidth : width;
     const offsetHeight = hasOffset ? element.offsetHeight : height;
     const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
     if (shouldFallback) {
       width = offsetWidth;
       height = offsetHeight;
     }
     return {
       width,
       height,
       $: shouldFallback
     };
   }

   function unwrapElement(element) {
     return !isElement(element) ? element.contextElement : element;
   }

   function getScale(element) {
     const domElement = unwrapElement(element);
     if (!isHTMLElement(domElement)) {
       return createCoords(1);
     }
     const rect = domElement.getBoundingClientRect();
     const {
       width,
       height,
       $
     } = getCssDimensions(domElement);
     let x = ($ ? round(rect.width) : rect.width) / width;
     let y = ($ ? round(rect.height) : rect.height) / height;

     // 0, NaN, or Infinity should always fallback to 1.

     if (!x || !Number.isFinite(x)) {
       x = 1;
     }
     if (!y || !Number.isFinite(y)) {
       y = 1;
     }
     return {
       x,
       y
     };
   }

   const noOffsets = /*#__PURE__*/createCoords(0);
   function getVisualOffsets(element) {
     const win = getWindow(element);
     if (!isWebKit() || !win.visualViewport) {
       return noOffsets;
     }
     return {
       x: win.visualViewport.offsetLeft,
       y: win.visualViewport.offsetTop
     };
   }
   function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
     if (isFixed === void 0) {
       isFixed = false;
     }
     if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
       return false;
     }
     return isFixed;
   }

   function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
     if (includeScale === void 0) {
       includeScale = false;
     }
     if (isFixedStrategy === void 0) {
       isFixedStrategy = false;
     }
     const clientRect = element.getBoundingClientRect();
     const domElement = unwrapElement(element);
     let scale = createCoords(1);
     if (includeScale) {
       if (offsetParent) {
         if (isElement(offsetParent)) {
           scale = getScale(offsetParent);
         }
       } else {
         scale = getScale(element);
       }
     }
     const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
     let x = (clientRect.left + visualOffsets.x) / scale.x;
     let y = (clientRect.top + visualOffsets.y) / scale.y;
     let width = clientRect.width / scale.x;
     let height = clientRect.height / scale.y;
     if (domElement) {
       const win = getWindow(domElement);
       const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
       let currentWin = win;
       let currentIFrame = currentWin.frameElement;
       while (currentIFrame && offsetParent && offsetWin !== currentWin) {
         const iframeScale = getScale(currentIFrame);
         const iframeRect = currentIFrame.getBoundingClientRect();
         const css = getComputedStyle(currentIFrame);
         const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
         const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
         x *= iframeScale.x;
         y *= iframeScale.y;
         width *= iframeScale.x;
         height *= iframeScale.y;
         x += left;
         y += top;
         currentWin = getWindow(currentIFrame);
         currentIFrame = currentWin.frameElement;
       }
     }
     return rectToClientRect({
       width,
       height,
       x,
       y
     });
   }

   const topLayerSelectors = [':popover-open', ':modal'];
   function isTopLayer(floating) {
     return topLayerSelectors.some(selector => {
       try {
         return floating.matches(selector);
       } catch (e) {
         return false;
       }
     });
   }

   function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
     let {
       elements,
       rect,
       offsetParent,
       strategy
     } = _ref;
     const isFixed = strategy === 'fixed';
     const documentElement = getDocumentElement(offsetParent);
     const topLayer = elements ? isTopLayer(elements.floating) : false;
     if (offsetParent === documentElement || topLayer && isFixed) {
       return rect;
     }
     let scroll = {
       scrollLeft: 0,
       scrollTop: 0
     };
     let scale = createCoords(1);
     const offsets = createCoords(0);
     const isOffsetParentAnElement = isHTMLElement(offsetParent);
     if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
       if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
         scroll = getNodeScroll(offsetParent);
       }
       if (isHTMLElement(offsetParent)) {
         const offsetRect = getBoundingClientRect(offsetParent);
         scale = getScale(offsetParent);
         offsets.x = offsetRect.x + offsetParent.clientLeft;
         offsets.y = offsetRect.y + offsetParent.clientTop;
       }
     }
     return {
       width: rect.width * scale.x,
       height: rect.height * scale.y,
       x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x,
       y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y
     };
   }

   function getClientRects(element) {
     return Array.from(element.getClientRects());
   }

   function getWindowScrollBarX(element) {
     // If <html> has a CSS width greater than the viewport, then this will be
     // incorrect for RTL.
     return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
   }

   // Gets the entire size of the scrollable document area, even extending outside
   // of the `<html>` and `<body>` rect bounds if horizontally scrollable.
   function getDocumentRect(element) {
     const html = getDocumentElement(element);
     const scroll = getNodeScroll(element);
     const body = element.ownerDocument.body;
     const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
     const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
     let x = -scroll.scrollLeft + getWindowScrollBarX(element);
     const y = -scroll.scrollTop;
     if (getComputedStyle(body).direction === 'rtl') {
       x += max(html.clientWidth, body.clientWidth) - width;
     }
     return {
       width,
       height,
       x,
       y
     };
   }

   function getViewportRect(element, strategy) {
     const win = getWindow(element);
     const html = getDocumentElement(element);
     const visualViewport = win.visualViewport;
     let width = html.clientWidth;
     let height = html.clientHeight;
     let x = 0;
     let y = 0;
     if (visualViewport) {
       width = visualViewport.width;
       height = visualViewport.height;
       const visualViewportBased = isWebKit();
       if (!visualViewportBased || visualViewportBased && strategy === 'fixed') {
         x = visualViewport.offsetLeft;
         y = visualViewport.offsetTop;
       }
     }
     return {
       width,
       height,
       x,
       y
     };
   }

   // Returns the inner client rect, subtracting scrollbars if present.
   function getInnerBoundingClientRect(element, strategy) {
     const clientRect = getBoundingClientRect(element, true, strategy === 'fixed');
     const top = clientRect.top + element.clientTop;
     const left = clientRect.left + element.clientLeft;
     const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
     const width = element.clientWidth * scale.x;
     const height = element.clientHeight * scale.y;
     const x = left * scale.x;
     const y = top * scale.y;
     return {
       width,
       height,
       x,
       y
     };
   }
   function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
     let rect;
     if (clippingAncestor === 'viewport') {
       rect = getViewportRect(element, strategy);
     } else if (clippingAncestor === 'document') {
       rect = getDocumentRect(getDocumentElement(element));
     } else if (isElement(clippingAncestor)) {
       rect = getInnerBoundingClientRect(clippingAncestor, strategy);
     } else {
       const visualOffsets = getVisualOffsets(element);
       rect = {
         ...clippingAncestor,
         x: clippingAncestor.x - visualOffsets.x,
         y: clippingAncestor.y - visualOffsets.y
       };
     }
     return rectToClientRect(rect);
   }
   function hasFixedPositionAncestor(element, stopNode) {
     const parentNode = getParentNode(element);
     if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
       return false;
     }
     return getComputedStyle(parentNode).position === 'fixed' || hasFixedPositionAncestor(parentNode, stopNode);
   }

   // A "clipping ancestor" is an `overflow` element with the characteristic of
   // clipping (or hiding) child elements. This returns all clipping ancestors
   // of the given element up the tree.
   function getClippingElementAncestors(element, cache) {
     const cachedResult = cache.get(element);
     if (cachedResult) {
       return cachedResult;
     }
     let result = getOverflowAncestors(element, [], false).filter(el => isElement(el) && getNodeName(el) !== 'body');
     let currentContainingBlockComputedStyle = null;
     const elementIsFixed = getComputedStyle(element).position === 'fixed';
     let currentNode = elementIsFixed ? getParentNode(element) : element;

     // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
     while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
       const computedStyle = getComputedStyle(currentNode);
       const currentNodeIsContaining = isContainingBlock(currentNode);
       if (!currentNodeIsContaining && computedStyle.position === 'fixed') {
         currentContainingBlockComputedStyle = null;
       }
       const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === 'static' && !!currentContainingBlockComputedStyle && ['absolute', 'fixed'].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
       if (shouldDropCurrentNode) {
         // Drop non-containing blocks.
         result = result.filter(ancestor => ancestor !== currentNode);
       } else {
         // Record last containing block for next iteration.
         currentContainingBlockComputedStyle = computedStyle;
       }
       currentNode = getParentNode(currentNode);
     }
     cache.set(element, result);
     return result;
   }

   // Gets the maximum area that the element is visible in due to any number of
   // clipping ancestors.
   function getClippingRect(_ref) {
     let {
       element,
       boundary,
       rootBoundary,
       strategy
     } = _ref;
     const elementClippingAncestors = boundary === 'clippingAncestors' ? getClippingElementAncestors(element, this._c) : [].concat(boundary);
     const clippingAncestors = [...elementClippingAncestors, rootBoundary];
     const firstClippingAncestor = clippingAncestors[0];
     const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
       const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
       accRect.top = max(rect.top, accRect.top);
       accRect.right = min(rect.right, accRect.right);
       accRect.bottom = min(rect.bottom, accRect.bottom);
       accRect.left = max(rect.left, accRect.left);
       return accRect;
     }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
     return {
       width: clippingRect.right - clippingRect.left,
       height: clippingRect.bottom - clippingRect.top,
       x: clippingRect.left,
       y: clippingRect.top
     };
   }

   function getDimensions(element) {
     const {
       width,
       height
     } = getCssDimensions(element);
     return {
       width,
       height
     };
   }

   function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
     const isOffsetParentAnElement = isHTMLElement(offsetParent);
     const documentElement = getDocumentElement(offsetParent);
     const isFixed = strategy === 'fixed';
     const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
     let scroll = {
       scrollLeft: 0,
       scrollTop: 0
     };
     const offsets = createCoords(0);
     if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
       if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
         scroll = getNodeScroll(offsetParent);
       }
       if (isOffsetParentAnElement) {
         const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
         offsets.x = offsetRect.x + offsetParent.clientLeft;
         offsets.y = offsetRect.y + offsetParent.clientTop;
       } else if (documentElement) {
         offsets.x = getWindowScrollBarX(documentElement);
       }
     }
     const x = rect.left + scroll.scrollLeft - offsets.x;
     const y = rect.top + scroll.scrollTop - offsets.y;
     return {
       x,
       y,
       width: rect.width,
       height: rect.height
     };
   }

   function getTrueOffsetParent(element, polyfill) {
     if (!isHTMLElement(element) || getComputedStyle(element).position === 'fixed') {
       return null;
     }
     if (polyfill) {
       return polyfill(element);
     }
     return element.offsetParent;
   }

   // Gets the closest ancestor positioned element. Handles some edge cases,
   // such as table ancestors and cross browser bugs.
   function getOffsetParent(element, polyfill) {
     const window = getWindow(element);
     if (!isHTMLElement(element) || isTopLayer(element)) {
       return window;
     }
     let offsetParent = getTrueOffsetParent(element, polyfill);
     while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === 'static') {
       offsetParent = getTrueOffsetParent(offsetParent, polyfill);
     }
     if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static' && !isContainingBlock(offsetParent))) {
       return window;
     }
     return offsetParent || getContainingBlock(element) || window;
   }

   const getElementRects = async function (data) {
     const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
     const getDimensionsFn = this.getDimensions;
     return {
       reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
       floating: {
         x: 0,
         y: 0,
         ...(await getDimensionsFn(data.floating))
       }
     };
   };

   function isRTL(element) {
     return getComputedStyle(element).direction === 'rtl';
   }

   const platform = {
     convertOffsetParentRelativeRectToViewportRelativeRect,
     getDocumentElement,
     getClippingRect,
     getOffsetParent,
     getElementRects,
     getClientRects,
     getDimensions,
     getScale,
     isElement,
     isRTL
   };

   /**
    * Optimizes the visibility of the floating element by choosing the placement
    * that has the most space available automatically, without needing to specify a
    * preferred placement. Alternative to `flip`.
    * @see https://floating-ui.com/docs/autoPlacement
    */
   const autoPlacement = autoPlacement$1;

   /**
    * Computes the `x` and `y` coordinates that will place the floating element
    * next to a given reference element.
    */
   const computePosition = (reference, floating, options) => {
     // This caches the expensive `getClippingElementAncestors` function so that
     // multiple lifecycle resets re-use the same result. It only lives for a
     // single call. If other functions become expensive, we can add them as well.
     const cache = new Map();
     const mergedOptions = {
       platform,
       ...options
     };
     const platformWithCache = {
       ...mergedOptions.platform,
       _c: cache
     };
     return computePosition$1(reference, floating, {
       ...mergedOptions,
       platform: platformWithCache
     });
   };

   var __classPrivateFieldSet$1 = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
       if (kind === "m") throw new TypeError("Private method is not writable");
       if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
       if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
       return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
   };
   var __classPrivateFieldGet$1 = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
       if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
       if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
       return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
   };
   var _PopupController_host;
   const enterEvents = ['pointerenter', 'focus'];
   const leaveEvents = ['pointerleave', 'blur', 'keydown', 'click'];
   class PopupController {
       constructor(host, target, computePositionConfig, autoUpdateOptions) {
           _PopupController_host.set(this, void 0);
           this.show = () => {
               debug('PopupController#show');
               const host = __classPrivateFieldGet$1(this, _PopupController_host, "f");
               host.style.display = 'inline-block';
               computePosition(this.target, host, this.computePositionConfig).then(({ x, y, placement, middlewareData }) => {
                   debug('PopupController#show', { x, y, placement, middlewareData });
                   Object.assign(host.style, {
                       left: `${x}px`,
                       top: `${y}px`,
                   });
                   if (this.arrow) ;
               });
           };
           this.hide = () => {
               debug('PopupController#hide');
               __classPrivateFieldGet$1(this, _PopupController_host, "f").style.display = 'none';
           };
           debug('PopupController', arguments);
           __classPrivateFieldSet$1(this, _PopupController_host, host, "f");
           this.target = target;
           this.arrow = null;
           this.computePositionConfig = computePositionConfig !== null && computePositionConfig !== void 0 ? computePositionConfig : {
               placement: 'top-start',
               middleware: [offset(40), autoPlacement()],
           };
           this.autoUpdateOptions = autoUpdateOptions;
           host.addController(this);
       }
       hostConnected() {
           debug('PopupController#hostConnected');
           this.hide();
           enterEvents.forEach((event) => {
               this.target.addEventListener(event, this.show);
           });
           leaveEvents.forEach((event) => {
               this.target.addEventListener(event, this.hide);
           });
       }
       hostDisconnected() {
           debug('PopupController#hostDisconnected');
           enterEvents.forEach((event) => {
               this.target.removeEventListener(event, this.show);
           });
           leaveEvents.forEach((event) => {
               this.target.removeEventListener(event, this.hide);
           });
       }
   }
   _PopupController_host = new WeakMap();

   var tooltipStyles = i$4 `
.tooltip {
  width: max-content;
  position: absolute;
  top: 0;
  left: 0;
  padding: 4px;
  border: 1px solid darkgray;
  border-radius: 4px;
  background: #ccc;
  pointer-events: none;
}
`;

   var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
       var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
       if (typeof Reflect === "object" && typeof undefined === "function") r = undefined(decorators, target, key, desc);
       else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
       return c > 3 && r && Object.defineProperty(target, key, r), r;
   };
   var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
       if (kind === "m") throw new TypeError("Private method is not writable");
       if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
       if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
       return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
   };
   var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
       if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
       if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
       return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
   };
   var _FUITooltip_popupController;
   exports.FUITooltip = class FUITooltip extends FUIBaseElement {
       constructor() {
           super(...arguments);
           _FUITooltip_popupController.set(this, null);
           this.target = null;
       }
       connectedCallback() {
           var _a;
           super.connectedCallback();
           __classPrivateFieldSet(this, _FUITooltip_popupController, new PopupController(this, (_a = this.target) !== null && _a !== void 0 ? _a : this.previousElementSibling), "f");
           __classPrivateFieldGet(this, _FUITooltip_popupController, "f").hide();
       }
       willUpdate(_changedProperties) {
           var _a;
           super.willUpdate(_changedProperties);
           if (_changedProperties.has('target') && __classPrivateFieldGet(this, _FUITooltip_popupController, "f")) {
               __classPrivateFieldGet(this, _FUITooltip_popupController, "f").target = (_a = this.target) !== null && _a !== void 0 ? _a : this.previousElementSibling;
           }
       }
       render() {
           return x `<slot></slot>`;
       }
   };
   _FUITooltip_popupController = new WeakMap();
   exports.FUITooltip.styles = [
       tooltipStyles,
       i$4 `
      :host {
        display: none;
        width: max-content;
        position: absolute;
        top: 0;
        left: 0;
        padding: 4px;
        border: 1px solid darkgray;
        border-radius: 4px;
        background: #ccc;
        pointer-events: none;
      }
    `
   ];
   __decorate([
       n$1({ type: String })
   ], exports.FUITooltip.prototype, "target", void 0);
   exports.FUITooltip = __decorate([
       t$1('fui-tooltip')
   ], exports.FUITooltip);

   return exports;

})({});
