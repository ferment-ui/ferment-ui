var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { mod } from '../../utils.js';
let DCTabs = class DCTabs extends LitElement {
    constructor() {
        super(...arguments);
        this.selectedIndex = 0;
        this.cycle = false;
        this._onClick = (event) => {
            console.debug("_onClick");
            console.debug(event.target);
            const index = this._tabs.findIndex((tab) => tab == event.target);
            console.debug(index);
            if (index >= 0) {
                this.selectedIndex = index;
                this._setSelectedIndex(this.selectedIndex);
            }
        };
        this._onKeyDown = (event) => {
            var _a;
            console.debug("_onKeyDown");
            console.debug(event.target);
            const length = this._tabs.length;
            const key = event.key;
            const target = event.target;
            if (target.matches('[slot=tab]')) {
                switch (key) {
                    case "ArrowLeft":
                    case "ArrowRight":
                        const dir = key === "ArrowLeft" ? -1 : 1;
                        console.debug(this.selectedIndex, dir);
                        const current = this.selectedIndex + dir;
                        this.selectedIndex = this.cycle
                            ? mod(current, length)
                            : dir == 1
                                ? Math.min(length - 1, current)
                                : Math.max(0, current);
                        break;
                    case "End":
                        this.selectedIndex = length - 1;
                        break;
                    case "Home":
                        this.selectedIndex = 0;
                        break;
                    case "ArrowDown":
                        (_a = this._tabs[this.selectedIndex].nextElementSibling) === null || _a === void 0 ? void 0 : _a.focus();
                        return;
                    default:
                        return;
                }
            }
            else if (target.matches('[slot=panel]')) {
                if (key === "ArrowUp") {
                    this._tabs[this.selectedIndex].focus();
                }
                return;
            }
            console.debug(this.selectedIndex);
            this._setSelectedIndex(this.selectedIndex);
        };
    }
    get _tabWrapper() {
        var _a;
        return (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(".tabs");
    }
    get _panelWrapper() {
        var _a;
        return (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(".panels");
    }
    get _tabs() {
        var _a, _b;
        return (_b = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("slot[name=tab]")) === null || _b === void 0 ? void 0 : _b.assignedElements();
    }
    get _panels() {
        var _a, _b;
        return (_b = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("slot[name=panel]")) === null || _b === void 0 ? void 0 : _b.assignedElements();
    }
    createRenderRoot() {
        const root = super.createRenderRoot();
        root.addEventListener("keydown", this._onKeyDown);
        return root;
    }
    _upgradeElements() {
        var _a, _b;
        console.debug("_upgradeElements");
        (_a = this._tabs) === null || _a === void 0 ? void 0 : _a.forEach((tab) => {
            if (tab != null)
                tab.setAttribute("role", "tab");
        });
        (_b = this._panels) === null || _b === void 0 ? void 0 : _b.forEach((panel) => {
            if (panel != null)
                panel.setAttribute("role", "tabpanel");
        });
    }
    _linkPanels() {
        var _a;
        console.debug("_linkPanels");
        (_a = this._tabs) === null || _a === void 0 ? void 0 : _a.forEach((tab, index) => {
            if (tab != null) {
                tab.id = (tab === null || tab === void 0 ? void 0 : tab.id) || `${this.id}-tab-${index}`;
                const panel = tab.nextElementSibling;
                if (panel != null) {
                    panel.id = (panel === null || panel === void 0 ? void 0 : panel.id) || `${this.id}-panel-${index}`;
                    tab.setAttribute("aria-controls", panel.id);
                    panel.setAttribute("aria-labelledby", tab.id);
                }
            }
        });
    }
    _setSelectedIndex(index) {
        var _a;
        console.debug("_setSelectedIndex", index);
        (_a = this._tabs) === null || _a === void 0 ? void 0 : _a.forEach((tab, i) => {
            const panel = this._panels[i];
            if (index == i) {
                tab.setAttribute("aria-selected", "true");
                tab.tabIndex = 0;
                panel.classList.add("selected");
                panel.tabIndex = -1;
            }
            else {
                tab.setAttribute("aria-selected", "");
                tab.tabIndex = -1;
                panel.classList.remove("selected");
                panel.tabIndex = -2;
            }
        });
        this._focusSelected();
    }
    _focusSelected() {
        console.debug("_focusSelected", this.selectedIndex);
        this._tabs[this.selectedIndex].focus();
    }
    firstUpdated(_changedProperties) {
        this._upgradeElements();
        this._linkPanels();
        this._setSelectedIndex(0);
    }
    render() {
        return html `
      <div class="tabs" @click=${this._onClick} part="tabs">
        <slot name="tab"></slot>
      </div>
      <div class="panels" part="tab-panels">
        <slot name="panel"></slot>
      </div>
    `;
    }
};
DCTabs.styles = css `
    .tabs {
      display: flex;
      flex-direction: row;
      border: 1px solid black;
    }

    .panels {
      border-right: 1px solid black;
      border-bottom: 1px solid black;
      border-left: 1px solid black;
    }

    ::slotted([slot="tab"]) {
      flex: 1 0 auto;
      text-align: center;
      border-right: 1px solid black;
    }

    ::slotted([slot="panel"]) {
      display: none;
    }

    ::slotted([slot="panel"].selected) {
      display: block;
    }

    dc-tabs [slot=tab] {
      border-right: 1px solid black;
    }
    
    dc-tabs [slot=tab]:focus {
      outline: 5px solid blue;
    }
    
    dc-tabs [slot=tab]:last-of-type {
      border-right: none;
    }
    
    /* this is to have it show up as header/section until the component loads */
    dc-tabs:not(:defined) {
      display: block;
    }
  `;
__decorate([
    property({ type: Number })
], DCTabs.prototype, "selectedIndex", void 0);
__decorate([
    property({ type: Boolean })
], DCTabs.prototype, "cycle", void 0);
DCTabs = __decorate([
    customElement(`dc-tabs`)
], DCTabs);
export { DCTabs };
