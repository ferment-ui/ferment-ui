import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'
import { reverse } from '../../utils.js';

/**
 *   Renders an email address while obfuscating it from bots
 */
@customElement('dc-email')
export class DCEmail extends LitElement {
    static styles = [
        css`
            :host {
                display: inline-block;
            }

            span::before {
                content: attr(data-domain) "\u0040" attr(data-user);
                unicode-bidi: bidi-override;
                direction: rtl;
            }
        `
    ];

    @property({ type: String }) user: string = '';
    @property({ type: String }) domain: string = '';
    @property({ type: Boolean }) mailto: boolean = true;

    firstUpdated() {
        if (this.mailto) {
            this.setMailto();
        }
    }

    setMailto() {
        const a = this.shadowRoot?.querySelector('a');
        const prefix = 'mailto';
        if (a) {
            a.href = `${prefix}:${reverse(this.user)}\u0040${reverse(this.domain)}`;
        }
    }

    render() {
      return html`<a part="link"><slot><span data-user="${this.user}" data-domain="${this.domain}"></span></slot></a>`;
    }
}

declare global {
  interface HTMLElementTagNameMap {
    'dc-email': DCEmail;
  }
}