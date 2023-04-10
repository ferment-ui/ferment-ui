import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js'

@customElement('dc-loading')
export class DCLoading extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    render() {
        return html`<div>Loading...</div>`;
    }
}
