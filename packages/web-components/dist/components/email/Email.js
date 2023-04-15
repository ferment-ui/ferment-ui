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
 *   Renders an email address while obfuscating it from bots
 */
let DCEmail = class DCEmail extends LitElement {
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
        return html `<a data-user=${this.user} data-domain=${this.domain}></a>`;
    }
};
DCEmail.styles = [
    css `
            :host {
                display: inline-block;
            }

            a::before {
                content: attr(data-domain) "\u0040" attr(data-user);
                unicode-bidi: bidi-override;
                direction: rtl;
            }
        `
];
__decorate([
    property({ type: String })
], DCEmail.prototype, "user", void 0);
__decorate([
    property({ type: String })
], DCEmail.prototype, "domain", void 0);
__decorate([
    property({ type: Boolean })
], DCEmail.prototype, "mailto", void 0);
DCEmail = __decorate([
    customElement('dc-email')
], DCEmail);
export { DCEmail };
