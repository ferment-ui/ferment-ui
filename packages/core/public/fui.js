var FermentUI = (function (exports) {
    'use strict';

    /**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    const t$3=globalThis,e$4=t$3.ShadowRoot&&(void 0===t$3.ShadyCSS||t$3.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$2=Symbol(),o$8=new WeakMap;let n$4 = class n{constructor(t,e,o){if(this._$cssResult$=!0,o!==s$2)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$4&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=o$8.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o$8.set(s,t));}return t}toString(){return this.cssText}};const r$4=t=>new n$4("string"==typeof t?t:t+"",void 0,s$2),i$4=(t,...e)=>{const o=1===t.length?t[0]:e.reduce(((e,s,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[o+1]),t[0]);return new n$4(o,t,s$2)},S$1=(s,o)=>{if(e$4)s.adoptedStyleSheets=o.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of o){const o=document.createElement("style"),n=t$3.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,s.appendChild(o);}},c$2=e$4?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$4(e)})(t):t;

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const{is:i$3,defineProperty:e$3,getOwnPropertyDescriptor:r$3,getOwnPropertyNames:h$1,getOwnPropertySymbols:o$7,getPrototypeOf:n$3}=Object,a$1=globalThis,c$1=a$1.trustedTypes,l$1=c$1?c$1.emptyScript:"",p$1=a$1.reactiveElementPolyfillSupport,d$1=(t,s)=>t,u$1={toAttribute(t,s){switch(s){case Boolean:t=t?l$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,s){let i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t);}catch(t){i=null;}}return i}},f$1=(t,s)=>!i$3(t,s),y$1={attribute:!0,type:String,converter:u$1,reflect:!1,hasChanged:f$1};Symbol.metadata??=Symbol("metadata"),a$1.litPropertyMetadata??=new WeakMap;class b extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t);}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=y$1){if(s.state&&(s.attribute=!1),this._$Ei(),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,s);void 0!==r&&e$3(this.prototype,t,r);}}static getPropertyDescriptor(t,s,i){const{get:e,set:h}=r$3(this.prototype,t)??{get(){return this[s]},set(t){this[s]=t;}};return {get(){return e?.call(this)},set(s){const r=e?.call(this);h.call(this,s),this.requestUpdate(t,r,i);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??y$1}static _$Ei(){if(this.hasOwnProperty(d$1("elementProperties")))return;const t=n$3(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties);}static finalize(){if(this.hasOwnProperty(d$1("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(d$1("properties"))){const t=this.properties,s=[...h$1(t),...o$7(t)];for(const i of s)this.createProperty(i,t[i]);}const t=this[Symbol.metadata];if(null!==t){const s=litPropertyMetadata.get(t);if(void 0!==s)for(const[t,i]of s)this.elementProperties.set(t,i);}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);void 0!==i&&this._$Eh.set(i,t);}this.elementStyles=this.finalizeStyles(this.styles);}static finalizeStyles(s){const i=[];if(Array.isArray(s)){const e=new Set(s.flat(1/0).reverse());for(const s of e)i.unshift(c$2(s));}else void 0!==s&&i.push(c$2(s));return i}static _$Eu(t,s){const i=s.attribute;return !1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev();}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)));}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.();}removeController(t){this._$EO?.delete(t);}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t);}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S$1(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()));}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()));}attributeChangedCallback(t,s,i){this._$AK(t,i);}_$EC(t,s){const i=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,i);if(void 0!==e&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:u$1).toAttribute(s,i.type);this._$Em=t,null==r?this.removeAttribute(e):this.setAttribute(e,r),this._$Em=null;}}_$AK(t,s){const i=this.constructor,e=i._$Eh.get(t);if(void 0!==e&&this._$Em!==e){const t=i.getPropertyOptions(e),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:u$1;this._$Em=e,this[e]=r.fromAttribute(s,t.type),this._$Em=null;}}requestUpdate(t,s,i){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??f$1)(this[t],s))return;this.P(t,s,i);}!1===this.isUpdatePending&&(this._$ES=this._$ET());}P(t,s,i){this._$AL.has(t)||this._$AL.set(t,s),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t);}async _$ET(){this.isUpdatePending=!0;try{await this._$ES;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,s]of this._$Ep)this[t]=s;this._$Ep=void 0;}const t=this.constructor.elementProperties;if(t.size>0)for(const[s,i]of t)!0!==i.wrapped||this._$AL.has(s)||void 0===this[s]||this.P(s,this[s],i);}let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(s)):this._$EU();}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(s);}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$EU(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return !0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU();}updated(t){}firstUpdated(t){}}b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[d$1("elementProperties")]=new Map,b[d$1("finalized")]=new Map,p$1?.({ReactiveElement:b}),(a$1.reactiveElementVersions??=[]).push("2.0.4");

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    const t$2=globalThis,i$2=t$2.trustedTypes,s$1=i$2?i$2.createPolicy("lit-html",{createHTML:t=>t}):void 0,e$2="$lit$",h=`lit$${(Math.random()+"").slice(9)}$`,o$6="?"+h,n$2=`<${o$6}>`,r$2=document,l=()=>r$2.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof t?.[Symbol.iterator],d="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=y(1),w=Symbol.for("lit-noChange"),T=Symbol.for("lit-nothing"),A=new WeakMap,E=r$2.createTreeWalker(r$2,129);function C(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s$1?s$1.createHTML(i):i}const P=(t,i)=>{const s=t.length-1,o=[];let r,l=2===i?"<svg>":"",c=f;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,y=0;for(;y<s.length&&(c.lastIndex=y,u=c.exec(s),null!==u);)y=c.lastIndex,c===f?"!--"===u[1]?c=v:void 0!==u[1]?c=_:void 0!==u[2]?($.test(u[2])&&(r=RegExp("</"+u[2],"g")),c=m):void 0!==u[3]&&(c=m):c===m?">"===u[0]?(c=r??f,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?m:'"'===u[3]?g:p):c===g||c===p?c=m:c===v||c===_?c=f:(c=m,r=void 0);const x=c===m&&t[i+1].startsWith("/>")?" ":"";l+=c===f?s+n$2:d>=0?(o.push(a),s.slice(0,d)+e$2+s.slice(d)+h+x):s+h+(-2===d?i:x);}return [C(t,l+(t[s]||"<?>")+(2===i?"</svg>":"")),o]};class V{constructor({strings:t,_$litType$:s},n){let r;this.parts=[];let c=0,a=0;const u=t.length-1,d=this.parts,[f,v]=P(t,s);if(this.el=V.createElement(f,n),E.currentNode=this.el.content,2===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes);}for(;null!==(r=E.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(e$2)){const i=v[a++],s=r.getAttribute(t).split(h),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:c,name:e[2],strings:s,ctor:"."===e[1]?k:"?"===e[1]?H:"@"===e[1]?I:R}),r.removeAttribute(t);}else t.startsWith(h)&&(d.push({type:6,index:c}),r.removeAttribute(t));if($.test(r.tagName)){const t=r.textContent.split(h),s=t.length-1;if(s>0){r.textContent=i$2?i$2.emptyScript:"";for(let i=0;i<s;i++)r.append(t[i],l()),E.nextNode(),d.push({type:2,index:++c});r.append(t[s],l());}}}else if(8===r.nodeType)if(r.data===o$6)d.push({type:2,index:c});else {let t=-1;for(;-1!==(t=r.data.indexOf(h,t+1));)d.push({type:7,index:c}),t+=h.length-1;}c++;}}static createElement(t,i){const s=r$2.createElement("template");return s.innerHTML=t,s}}function N(t,i,s=t,e){if(i===w)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=c(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(!1),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=N(t,h._$AS(t,i.values),h,e)),i}class S{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??r$2).importNode(i,!0);E.currentNode=e;let h=E.nextNode(),o=0,n=0,l=s[0];for(;void 0!==l;){if(o===l.index){let i;2===l.type?i=new M(h,h.nextSibling,this,t):1===l.type?i=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(i=new L(h,this,t)),this._$AV.push(i),l=s[++n];}o!==l?.index&&(h=E.nextNode(),o++);}return E.currentNode=r$2,e}p(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??!0;}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=N(this,t,i),c(t)?t===T||null==t||""===t?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==w&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):u(t)?this.k(t):this._(t);}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t));}_(t){this._$AH!==T&&c(this._$AH)?this._$AA.nextSibling.data=t:this.T(r$2.createTextNode(t)),this._$AH=t;}$(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=V.createElement(C(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else {const t=new S(e,this),s=t.u(this.options);t.p(i),this.T(s),this._$AH=t;}}_$AC(t){let i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new V(t)),i}k(t){a(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new M(this.S(l()),this.S(l()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t));}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=T;}_$AI(t,i=this,s,e){const h=this.strings;let o=!1;if(void 0===h)t=N(this,t,i,0),o=!c(t)||t!==this._$AH&&t!==w,o&&(this._$AH=t);else {const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=N(this,e[s+n],i,n),r===w&&(r=this._$AH[n]),o||=!c(r)||r!==this._$AH[n],r===T?t=T:t!==T&&(t+=(r??"")+h[n+1]),this._$AH[n]=r;}o&&!e&&this.j(t);}j(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"");}}class k extends R{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===T?void 0:t;}}class H extends R{constructor(){super(...arguments),this.type=4;}j(t){this.element.toggleAttribute(this.name,!!t&&t!==T);}}class I extends R{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5;}_$AI(t,i=this){if((t=N(this,t,i,0)??T)===w)return;const s=this._$AH,e=t===T&&s!==T||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==T&&(s===T||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t);}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t);}}const Z=t$2.litHtmlPolyfillSupport;Z?.(V,M),(t$2.litHtmlVersions??=[]).push("3.1.2");const j=(t,i,s)=>{const e=s?.renderBefore??i;let h=e._$litPart$;if(void 0===h){const t=s?.renderBefore??null;e._$litPart$=h=new M(i.insertBefore(l(),t),t,void 0,s??{});}return h._$AI(t),h};

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */class s extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=j(i,this.renderRoot,this.renderOptions);}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0);}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1);}render(){return w}}s._$litElement$=!0,s[("finalized")]=!0,globalThis.litElementHydrateSupport?.({LitElement:s});const r$1=globalThis.litElementPolyfillSupport;r$1?.({LitElement:s});(globalThis.litElementVersions??=[]).push("4.0.4");

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
     */const o$5={attribute:!0,type:String,converter:u$1,reflect:!1,hasChanged:f$1},r=(t=o$5,e,r)=>{const{kind:n,metadata:i}=r;let s=globalThis.litPropertyMetadata.get(i);if(void 0===s&&globalThis.litPropertyMetadata.set(i,s=new Map),s.set(r.name,t),"accessor"===n){const{name:o}=r;return {set(r){const n=e.get.call(this);e.set.call(this,r),this.requestUpdate(o,n,t);},init(e){return void 0!==e&&this.P(o,void 0,t),e}}}if("setter"===n){const{name:o}=r;return function(r){const n=this[o];e.call(this,r),this.requestUpdate(o,n,t);}}throw Error("Unsupported decorator location: "+n)};function n$1(t){return (e,o)=>"object"==typeof o?r(t,e,o):((t,e,o)=>{const r=e.hasOwnProperty(o);return e.constructor.createProperty(o,r?{...t,wrapped:!0}:t),r?Object.getOwnPropertyDescriptor(e,o):void 0})(t,e,o)}

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

    const globalStyles = i$4 `
*, :host {
  padding: 0;
  margin: 0;
}

ul {
  list-style: none;
  list-position: inside;
}

img,
picture,
video,
iframe {
  max-inline-size: 100%; /* logical property for "width", image cannot go larger than it's size */
  max-block-size: 100%; /* logical property for "height" */;
  object-fit: contain;
}
`;

    var animationStyles = i$4 `
.t-default {
  transition: var(--fui-animation-default-speed) var(--fui-animation-default-timing-function);
}
`;

    var borderStyles = i$4 `
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
`;

    function states(className, content) {
        return r$4(`.${className}--hover:hover,
.${className}--focus:focus,
.${className}--focus:hover,
.${className}--focus-within:focus-within,
.${className}--active:active,
.${className}--disabled:disabled {
${content}
}`);
    }

    function theme(t) {
        return r$4(`.${t} {
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
    var colorStyles = r$4(`${theme('primary')}
${theme('accent')}
${theme('complement')}
${theme('neutral')}
${theme('success')}
${theme('info')}
${theme('warn')}
${theme('danger')}`);

    var displayStyles = i$4 `
.block {
  display: block;
}

.inline {
  display: inline;
}

.inline-block {
  display: inline-block;
}

.flex, [class^="fd-"], [class*=" fd-"] {
  display: flex;
  flex-direction: column;
}

.grid {
  display: grid;
}

.contents {
  display: contents;
}
`;

    var focusStyles = i$4 `
:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 4px;
  border-color: transparent; /* if it already had a border, keep it to prevent layout shift */
}
`;

    var layoutStyles = i$4 `
.body {
  overflow-x: hidden;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas: "header" "main" "footer";
  min-height: 100vh;
}

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
}

.page {
  padding: var(--fui-spacing-page);
  display: flex;
  flex-direction: column;
  gap: var(--fui-spacing-text);
}

.page-x {
  padding: 0 var(--fui-spacing-page-x);
}

.page-y {
  padding: var(--fui-spacing-page-y) 0;
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

.ta-start {
  text-align: start;
}

.ta-center {
  text-align: center;
}

.ta-end {
  text-align: end;
}

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

.gap-base {
  gap: var(--fui-spacing-base);
}

.gap-text {
  gap: var(--fui-spacing-text);
}
`;

    var positionStyles = i$4 `
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
`;

    /**
     * @license
     * Copyright 2021 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    function*o$3(o,t,e=1){const i=void 0===t?0:o;t??=o;for(let o=i;e>0?o<t:t<o;o+=e)yield o;}

    function shadow(index) {
        return r$4(`.bs-${index} {
  box-shadow: var(--fui-box-shadow-${index});
}`);
    }
    var shadowStyles = r$4(`.bs-0 {
  box-shadow: none;
}
${Array.from(o$3(1, 7)).map((index) => r$4(`
${shadow(index)}

${states(`bs-${index}`, `  box-shadow: var(--fui-box-shadow-${index});`)}`)).join('')}
`);

    var typographyStyles = i$4 `
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
  font-weight: 100;
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
`;

    var zIndexStyles = i$4 `
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
`;

    /**
     * @type {import('lit').CSSResultGroup}
     */
    const utilityStyles = [
        displayStyles,
        positionStyles,
        layoutStyles,
        typographyStyles,
        colorStyles,
        borderStyles,
        zIndexStyles,
        shadowStyles,
        animationStyles,
        focusStyles,
    ];

    var __decorate$7 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
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
        }
    }
    FUIBaseElement.styles = [
        globalStyles,
        utilityStyles
    ];
    __decorate$7([
        n$1({ type: String, attribute: 'class', converter: {
                fromAttribute: (value) => convertClassStringToObject(value),
                toAttribute: (value) => convertObjectToClassString(value)
            } })
    ], FUIBaseElement.prototype, "classes", void 0);
    __decorate$7([
        n$1({ type: String, attribute: 'style', converter: {
                fromAttribute: (value) => convertStyleStringToObject(value),
                toAttribute: (value) => convertObjectToStyleString(value)
            } })
    ], FUIBaseElement.prototype, "styles", void 0);

    var __decorate$6 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
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
    __decorate$6([
        n$1({ type: Array })
    ], exports.FUIBreadcrumbs.prototype, "links", void 0);
    exports.FUIBreadcrumbs = __decorate$6([
        t$1('fui-breadcrumbs')
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
     */const n="important",i=" !"+n,o$2=e$1(class extends i$1{constructor(t$1){if(super(t$1),t$1.type!==t.ATTRIBUTE||"style"!==t$1.name||t$1.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,r)=>{const s=t[r];return null==s?e:e+`${r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`}),"")}update(e,[r]){const{style:s}=e.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(r)),this.render(r);for(const t of this.ft)null==r[t]&&(this.ft.delete(t),t.includes("-")?s.removeProperty(t):s[t]=null);for(const t in r){const e=r[t];if(null!=e){this.ft.add(t);const r="string"==typeof e&&e.endsWith(i);t.includes("-")||r?s.setProperty(t,r?e.slice(0,-11):e,r?n:""):s[t]=e;}}return w}});

    var __decorate$5 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
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
            return x `<div class='card' part='card' style=${o$2(this._getGridTemplateRules())}>
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
    __decorate$5([
        n$1({ type: String })
    ], exports.FUICard.prototype, "layout", void 0);
    exports.FUICard = __decorate$5([
        t$1('fui-card')
    ], exports.FUICard);

    /**
     * @license
     * Copyright 2018 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const o$1=o=>o??T;

    var __decorate$4 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof undefined === "function") r = undefined(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    /**
     *   Renders an email address while obfuscating it from bots
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
            return x `<a part="link" aria-label='${o$1(this.label)}'><slot></slot><span part='default' data-user="${this.user}" data-domain="${this.domain}"></span></a>`;
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
      }

      span::before {
        content: attr(data-domain) "\u0040" attr(data-user);
        unicode-bidi: bidi-override;
        direction: rtl;
      }
    `
    ];
    __decorate$4([
        n$1({ type: String })
    ], exports.FUIEmailAddress.prototype, "user", void 0);
    __decorate$4([
        n$1({ type: String })
    ], exports.FUIEmailAddress.prototype, "domain", void 0);
    __decorate$4([
        n$1({ type: Boolean })
    ], exports.FUIEmailAddress.prototype, "mailto", void 0);
    __decorate$4([
        n$1({ type: String })
    ], exports.FUIEmailAddress.prototype, "label", void 0);
    exports.FUIEmailAddress = __decorate$4([
        t$1('fui-email-address')
    ], exports.FUIEmailAddress);

    var __decorate$3 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
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
        n$1({ type: String })
    ], exports.FUIIcon.prototype, "label", void 0);
    __decorate$3([
        n$1({ type: Number })
    ], exports.FUIIcon.prototype, "tabIndex", void 0);
    __decorate$3([
        n$1({ type: String })
    ], exports.FUIIcon.prototype, "data", void 0);
    exports.FUIIcon = __decorate$3([
        t$1('fui-icon')
    ], exports.FUIIcon);

    var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
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
    __decorate$2([
        n$1({ type: String })
    ], exports.FUIPhoneNumber.prototype, "area", void 0);
    __decorate$2([
        n$1({ type: String })
    ], exports.FUIPhoneNumber.prototype, "number", void 0);
    __decorate$2([
        n$1({ type: Boolean })
    ], exports.FUIPhoneNumber.prototype, "tel", void 0);
    __decorate$2([
        n$1({ type: String })
    ], exports.FUIPhoneNumber.prototype, "label", void 0);
    exports.FUIPhoneNumber = __decorate$2([
        t$1('fui-phone-number')
    ], exports.FUIPhoneNumber);

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */class e extends i$1{constructor(i){if(super(i),this.it=T,i.type!==t.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(r){if(r===T||null==r)return this._t=void 0,this.it=r;if(r===w)return r;if("string"!=typeof r)throw Error(this.constructor.directiveName+"() called with a non-string value");if(r===this.it)return this._t;this.it=r;const s=[r];return s.raw=s,this._t={_$litType$:this.constructor.resultType,strings:s,values:[]}}}e.directiveName="unsafeHTML",e.resultType=1;const o=e$1(e);

    var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
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
    __decorate$1([
        n$1({ type: Array })
    ], exports.FUIPricing.prototype, "prices", void 0);
    exports.FUIPricing = __decorate$1([
        t$1('fui-pricing')
    ], exports.FUIPricing);

    var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
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
    __decorate([
        n$1({ type: Number })
    ], exports.FUITabs.prototype, "selectedIndex", void 0);
    __decorate([
        n$1({ type: Boolean })
    ], exports.FUITabs.prototype, "cycle", void 0);
    exports.FUITabs = __decorate([
        t$1(`fui-tabs`)
    ], exports.FUITabs);

    return exports;

})({});
