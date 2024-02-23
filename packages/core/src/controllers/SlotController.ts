/**
 * Taken from patternfly-elements
 *
 * This controller is used to manage slots in a component. It is especially useful when you
 * need to forward slots, since by default the nested slot would hide any fallback content.
 */

import { html, nothing } from 'lit';
import type { ReactiveController, ReactiveElement } from 'lit';
import { Logger } from './LoggerController.js';


interface AnonymousSlot {
  hasContent: boolean;
  elements: Element[];
  slot: HTMLSlotElement | null;
}

interface NamedSlot extends AnonymousSlot {
  name: string;
  initialized: true;
}

export type Slot = NamedSlot | AnonymousSlot;

export interface SlotsConfig {
  slots: (string | null)[];
}

/**
 * If it's a named slot, return its children,
 * for the default slot, look for direct children not assigned to a slot
 */
const isSlot =
  <T extends Element = Element>(n: string | typeof SlotController.anonymous) =>
    (child: Element): child is T =>
        n === SlotController.anonymous ? !child.hasAttribute('slot')
      : child.getAttribute('slot') === n;

export class SlotController implements ReactiveController {
  public static anonymous = Symbol('anonymous slot');
  #nodes = new Map<string | typeof SlotController.anonymous, Slot>();
  #logger: Logger;
  #firstUpdated = false;
  #mo = new MutationObserver(records => this.#onMutation(records));
  #slotNames: (string | null)[];

  constructor(public host: ReactiveElement, config: SlotsConfig) {
    this.#logger = new Logger(this.host);
    if (config.slots.length >= 1) {
      this.#slotNames = config.slots;
    }
    else {
      this.#slotNames = [null];
    }

    host.addController(this);
  }

  async hostConnected() {
    this.host.addEventListener('slotchange', this.#onSlotChange as EventListener);
    this.#firstUpdated = false;
    this.#mo.observe(this.host, { childList: true });
    // Map the defined slots into an object that is easier to query
    this.#nodes.clear();
    // Loop over the properties provided by the schema
    this.#slotNames.forEach(this.#initSlot);
    this.host.requestUpdate();
    // insurance for framework integrations
    await this.host.updateComplete;
    this.host.requestUpdate();
  }

  hostUpdated() {
    if (!this.#firstUpdated) {
      this.#slotNames.forEach(this.#initSlot);
      this.#firstUpdated = true;
    }
  }

  hostDisconnected() {
    this.#mo.disconnect();
  }

  /**
   * Returns a boolean statement of whether or not any of those slots exists in the light DOM.
   *
   * @param {String|Array} name The slot name.
   * @example this.hasSlotted("header");
   */
  hasSlotted(...names: string[]): boolean {
    if (!names.length) {
      this.#logger.warn(`Please provide at least one slot name for which to search.`);
      return false;
    } else {
      return names.some(x =>
        this.#nodes.get(x)?.hasContent ?? false);
    }
  }

  /**
   * Given a slot name or slot names, returns elements assigned to the requested slots as an array.
   * If no value is provided, it returns all children not assigned to a slot (without a slot attribute).
   *
   * @example Get header-slotted elements
   * ```js
   * this.getSlotted('header')
   * ```
   *
   * @example Get header- and footer-slotted elements
   * ```js
   * this.getSlotted('header', 'footer')
   * ```
   *
   * @example Get default-slotted elements
   * ```js
   * this.getSlotted();
   * ```
   */
  getSlotted<T extends Element = Element>(...slotNames: string[]): T[] {
    if (!slotNames.length) {
      return (this.#nodes.get(SlotController.anonymous)?.elements ?? []) as T[];
    } else {
      return slotNames.flatMap(slotName =>
        this.#nodes.get(slotName)?.elements ?? []) as T[];
    }
  }

  #onSlotChange = (event: Event & { target: HTMLSlotElement }) => {
    const slotName = event.target.name;
    this.#initSlot(slotName);
    this.host.requestUpdate();
  };

  #onMutation = async (records: MutationRecord[]) => {
    const changed = [];
    for (const { addedNodes, removedNodes } of records) {
      for (const node of [...addedNodes, ...removedNodes]) {
        if (node instanceof HTMLElement && node.slot) {
          this.#initSlot(node.slot);
          changed.push(node.slot);
        }
      }
    }
    this.host.requestUpdate();
  };

  #getChildrenForSlot<T extends Element = Element>(name: string | typeof SlotController.anonymous): T[] {
    const children = Array.from(this.host.children) as T[];
    return children.filter(isSlot(name));
  }

  #initSlot = (slotName: string | null) => {
    const name = slotName || SlotController.anonymous;
    const elements = this.#nodes.get(name)?.slot?.assignedElements?.() ?? this.#getChildrenForSlot(name);
    const selector = slotName ? `slot[name="${slotName}"]` : 'slot:not([name])';
    const slot = this.host.shadowRoot?.querySelector?.<HTMLSlotElement>(selector) ?? null;
    const hasContent = !!elements.length;
    this.#nodes.set(name, { elements, name: slotName ?? '', hasContent, slot });
    this.#logger.log(slotName, hasContent);
  };

  forward(name: string, slot = name) {
    return this.hasSlotted(name) ? html`<slot name=${name} slot=${slot}></slot>` : nothing;
  }
}
