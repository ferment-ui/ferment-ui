var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { reverse } from '../../utils.js';
/**
 *   Renders an telephone number while obfuscating it from bots
 */
let DCTel = class DCTel extends LitElement {
    constructor() {
        super(...arguments);
        this.area = '';
        this.number = '';
        this.tel = true;
    }
    updated() {
        console.log('here!!!');
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
        return html `<a data-area=${this.area} data-number=${this.number}></a>`;
    }
};
DCTel.styles = [
    css `
            :host {
                display: inline-block;
            }

            a::before {
                content: attr(data-number) "-" attr(data-area);
                unicode-bidi: bidi-override;
                direction: rtl;
            }
        `
];
__decorate([
    property({ type: String })
], DCTel.prototype, "area", void 0);
__decorate([
    property({ type: String })
], DCTel.prototype, "number", void 0);
__decorate([
    property({ type: Boolean })
], DCTel.prototype, "tel", void 0);
DCTel = __decorate([
    customElement('dc-tel')
], DCTel);
export { DCTel };
