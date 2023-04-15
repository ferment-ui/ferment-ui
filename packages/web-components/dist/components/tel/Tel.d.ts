import { LitElement } from 'lit';
/**
 *   Renders an telephone number while obfuscating it from bots
 */
export declare class DCTel extends LitElement {
    static styles: import("lit").CSSResult[];
    area: string;
    number: string;
    tel: boolean;
    updated(): void;
    setTel(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'dc-tel': DCTel;
    }
}
