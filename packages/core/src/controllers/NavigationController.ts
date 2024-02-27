import { ReactiveController, LitElement } from "lit";
import { focusableElements, isNavigationKey, NavigationKeys, tabbableElements } from "../utils";
export class NavigationController implements ReactiveController {
  
  host: LitElement;
  tabbableElements: HTMLElement[] = [];
  focusableElements: HTMLElement[] = [];

  constructor(host: LitElement) {
    (this.host = host).addController(this);
  }

  hostConnected() {
    console.log('host connected');
    this.updateTabbableElements();
    this.updateFocusableElements();
  }

  hostDisconnected() {
    console.log('host disconnected');
  }

  hostUpdated() {
    console.log('host updated');
    this.updateTabbableElements();
    this.updateFocusableElements();
  }

  updateTabbableElements() {
    this.tabbableElements = Array.from(this.host.shadowRoot?.querySelectorAll(tabbableElements) ?? []);
  }

  updateFocusableElements() {
    this.focusableElements = Array.from(this.host.shadowRoot?.querySelectorAll(focusableElements) ?? []);
  }

  focusOn(index: number) {
    this.focusableElements[index].focus();
  }

  navigateTo(item: number | HTMLElement): void {
    if (typeof item === 'number') {
      this.tabbableElements[item].focus();
    } else {
      item.focus();
    }
  }

  handleKeydown(e: KeyboardEvent) {
    if (isNavigationKey(e.key)) {
      e.preventDefault();
    }

    const nextKey = this.host.ariaOrientation === 'vertical' ? NavigationKeys.ArrowDown : NavigationKeys.ArrowRight;
    const prevKey = this.host.ariaOrientation === 'vertical' ? NavigationKeys.ArrowUp : NavigationKeys.ArrowLeft;

    const target = e.target as HTMLElement;

    console.log(nextKey, prevKey);

    if (e.key === nextKey) {
      const index = this.tabbableElements.findIndex(el => el === e.target);
      if (index < this.tabbableElements.length - 1) {
        target.tabIndex = -1;
        this.tabbableElements[index + 1].tabIndex = 0;
        this.focusOn(index + 1);
      } else {
        this.focusOn(0);
      }
    } else if (e.key === prevKey) {
      const index = this.tabbableElements.findIndex(el => el === e.target);
      if (index > 0) {
        target.tabIndex = -1;
        this.tabbableElements[index - 1].tabIndex = 0;
        this.focusOn(index - 1);
      } else {
        this.focusOn(this.tabbableElements.length - 1);
      }
    }
  }
}