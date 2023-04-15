import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'
import { reverse } from '../../utils.js';

/**
 *   Renders an telephone number while obfuscating it from bots
 */
@customElement('dc-tel')
export class DCTel extends LitElement {
    static styles = [
        css`
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

    @property({ type: String }) area: string = '';
    @property({ type: String }) number: string = '';
    @property({ type: Boolean }) tel: boolean = true;

    override updated() {
        console.log('here!!!');
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
        return html`<a data-area=${this.area} data-number=${this.number}></a>`;
    }
}

declare global {
  interface HTMLElementTagNameMap {
    'dc-tel': DCTel;
  }
}