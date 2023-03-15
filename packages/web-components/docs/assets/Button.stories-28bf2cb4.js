import{x as E,y as _}from"./lit-element-11668974.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const A={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},k=r=>(...t)=>({_$litDirective$:r,values:t});let S=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,s,e){this._$Ct=t,this._$AM=s,this._$Ci=e}_$AS(t,s){return this.update(t,s)}update(t,s){return this.render(...s)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const f=k(class extends S{constructor(r){var t;if(super(r),r.type!==A.ATTRIBUTE||r.name!=="style"||((t=r.strings)===null||t===void 0?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(r){return Object.keys(r).reduce((t,s)=>{const e=r[s];return e==null?t:t+`${s=s.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${e};`},"")}update(r,[t]){const{style:s}=r.element;if(this.vt===void 0){this.vt=new Set;for(const e in t)this.vt.add(e);return this.render(t)}this.vt.forEach(e=>{t[e]==null&&(this.vt.delete(e),e.includes("-")?s.removeProperty(e):s[e]="")});for(const e in t){const o=t[e];o!=null&&(this.vt.add(e),e.includes("-")?s.setProperty(e,o):s[e]=o)}return E}});const C=({primary:r,backgroundColor:t=null,size:s,label:e,onClick:o})=>{const v=r?"storybook-button--primary":"storybook-button--secondary";return _`
    <button
      type="button"
      class=${["storybook-button",`storybook-button--${s||"medium"}`,v].join(" ")}
      style=${f({backgroundColor:t})}
      @click=${o}
    >
      ${e}
    </button>
  `},P={title:"Example/Button",tags:["autodocs"],render:r=>C(r),argTypes:{backgroundColor:{control:"color"},onClick:{action:"onClick"},size:{control:{type:"select"},options:["small","medium","large"]}}},n={args:{primary:!0,label:"Button"}},a={args:{label:"Button"}},l={args:{size:"large",label:"Button"}},c={args:{size:"small",label:"Button"}};var i,u,d;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Button'
  }
}`,...(d=(u=n.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var m,p,b;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Button'
  }
}`,...(b=(p=a.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var y,g,h;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    size: 'large',
    label: 'Button'
  }
}`,...(h=(g=l.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var $,B,T;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    size: 'small',
    label: 'Button'
  }
}`,...(T=(B=c.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};const x=["Primary","Secondary","Large","Small"];export{l as Large,n as Primary,a as Secondary,c as Small,x as __namedExportsOrder,P as default};
//# sourceMappingURL=Button.stories-28bf2cb4.js.map
