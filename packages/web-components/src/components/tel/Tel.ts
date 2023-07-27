import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'
import { ifDefined } from 'lit/directives/if-defined.js';
import { reverse } from '../../utils.js';

/**
 *   Renders an telephone number while obfuscating it from bots
 */
@customElement('fui-tel')
export class FUITel extends LitElement {
    static styles = [
        css`
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

    @property({ type: String }) area: string = '';
    @property({ type: String }) number: string = '';
    @property({ type: Boolean }) tel: boolean = true;
    @property({ type: String }) label?: string;

    override updated() {
      if (this.tel) {
        this.setTel();
      }
    }

    setTel() {
        const a = this.shadowRoot?.querySelector('a');
        const prefix = 'tel';
        if (a) {
            a.href = `${prefix}:${reverse(this.area)}-${reverse(this.number)}`;
        }
    }

    render() {
        return html`<a part="link" aria-label='${ifDefined(this.label)}'><slot></slot><span part='default' data-area=${this.area} data-number="${this.number}"></span></a>`;
    }
}

declare global {
  interface HTMLElementTagNameMap {
    'fui-tel': FUITel;
  }
}