import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'
import { ifDefined } from 'lit/directives/if-defined.js';
import { reverse } from '../../utils.js';

/**
 *   Renders an email address while obfuscating it from bots
 */
@customElement('fui-email-address')
export class FUIEmailAddress extends LitElement {
  static styles = [
    css`
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

  @property({ type: String }) user: string = '';
  @property({ type: String }) domain: string = '';
  @property({ type: Boolean }) mailto: boolean = true;
  @property({ type: String }) label?: string;

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
    return html`<a part="link" aria-label='${ifDefined(this.label)}'><slot></slot><span part='default' data-user="${this.user}" data-domain="${this.domain}"></span></a>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fui-email-address': FUIEmailAddress;
  }
}