import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'
import { map } from 'lit/directives/map.js';

export type OverlayLayer = {
    picture: any;
    image: any;
    background: any;
}
@customElement('dc-overlay')
export class DCOverlay extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    @property({ type: Array }) layers: OverlayLayer[] = [];

    render() {
        return html`${map(this.layers, layer => html`<div class="layer" style="background-image: url(${layer.picture})"></div>`)}`;
    }
}
