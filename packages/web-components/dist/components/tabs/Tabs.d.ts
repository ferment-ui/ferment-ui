import { LitElement, PropertyValues } from 'lit';
export declare class DCTabs extends LitElement {
    static styles: import("lit").CSSResult;
    selectedIndex: number;
    cycle: boolean;
    get _tabWrapper(): HTMLElement;
    get _panelWrapper(): HTMLElement;
    get _tabs(): Array<HTMLElement>;
    get _panels(): Array<HTMLElement>;
    protected createRenderRoot(): Element | ShadowRoot;
    private _upgradeElements;
    private _linkPanels;
    private _setSelectedIndex;
    private _focusSelected;
    private _onClick;
    private _onKeyDown;
    protected firstUpdated(_changedProperties: PropertyValues<any>): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'dc-tabs': DCTabs;
    }
}
