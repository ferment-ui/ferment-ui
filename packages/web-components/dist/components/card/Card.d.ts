import { LitElement } from 'lit';
/**
 * Card component for displaying isolated content.
 * @element dc-card
 * @prop {String} layout - Position of the layout element. Can be 'left', 'right', 'top', or 'bottom'. Defaults to 'left'.
 */
export declare class DCCard extends LitElement {
    static styles: import("lit").CSSResult[];
    layout: 'left' | 'right' | 'top' | 'bottom';
    _getGridTemplateRules(): {
        gridTemplateAreas: string;
        gridTemplateColumns: string;
        gridTemplateRows: string;
    };
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'dc-card': DCCard;
    }
}
