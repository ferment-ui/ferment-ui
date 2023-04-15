var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let DCFaq = class DCFaq extends LitElement {
    constructor() {
        super(...arguments);
        this.faqs = [];
    }
    _tagClick(e) {
        const target = e.target;
        this.activeTag = target.innerText;
    }
    render() {
        const tags = Array.from(this.faqs.reduce((acc, faq) => { faq.tags.forEach(tag => acc.add(tag)); return acc; }, new Set()));
        return html `
      <div class='tags'>
        <ul @click="${this._tagClick}">
          ${tags.map(tag => html `<li><button>${tag}</button></li>`)}
        <ul>
      </div>
      <div class='faqs'>
        <ul>
          ${this.faqs.filter(faq => this.activeTag == null || faq.tags.includes(this.activeTag)).map(faq => html `<li><details><summary>${faq.title}</summary>${faq.content}</details>Tags: ${faq.tags.join(', ')}</li>`)}
        </ul>
      </div>
    `;
    }
};
DCFaq.styles = [
    css `
      :host {
        display: block;
      }

      ul {
        list-style: none;
        list-style-position: inside;
      }

      button {
        outline: none;
        border: none;
        background: none;
      }
    `
];
__decorate([
    property({ type: Array })
], DCFaq.prototype, "faqs", void 0);
__decorate([
    property({ type: String })
], DCFaq.prototype, "activeTag", void 0);
DCFaq = __decorate([
    customElement('dc-faq')
], DCFaq);
export { DCFaq };
