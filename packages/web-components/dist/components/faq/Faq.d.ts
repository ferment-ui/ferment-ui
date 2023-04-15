import { LitElement } from 'lit';
import { Faq } from '../../global';
export declare class DCFaq extends LitElement {
    static styles: import("lit").CSSResult[];
    faqs: Faq[];
    activeTag?: string;
    _tagClick(e: MouseEvent): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'dc-faq': DCFaq;
    }
}
