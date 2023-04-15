import { LitElement } from 'lit';
/**
 *   Renders an email address while obfuscating it from bots
 */
export declare class DCEmail extends LitElement {
    static styles: import("lit").CSSResult[];
    user: string;
    domain: string;
    mailto: boolean;
    firstUpdated(): void;
    setMailto(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'dc-email': DCEmail;
    }
}
