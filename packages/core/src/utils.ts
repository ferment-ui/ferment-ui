import { ClassInfo } from "lit/directives/class-map.js";
import { StyleInfo } from "lit/directives/style-map.js";

export function mod(a: number, b: number) {
  return ((a % b) + b) % b;
}

export function getId() {
  return `${Math.floor(Math.random() * 100)}${new Date().getTime().toString(36)}`;
}

export function equalsIgnoreCase(a: string | undefined, b: string | undefined) {
  return a?.toLowerCase() === b?.toLowerCase();
}

const baseTabbableElements = 'a[href], area[href], input:not([disabled]):not([type=hidden]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [contenteditable]:not([disabled])';
export const tabbableElements = `${baseTabbableElements}, [tabindex]:not([tabindex="-1"]):not([disabled])`;
export const focusableElements = `${baseTabbableElements}, [tabindex]:not([disabled])`;


export const NavigationKeys = {
  ArrowDown: "ArrowDown",
  ArrowUp: "ArrowUp",
  ArrowLeft: "ArrowLeft",
  ArrowRight: "ArrowRight",
  Home: "Home",
  End: "End"
} as const;

type NavigationKey = typeof NavigationKeys[keyof typeof NavigationKeys];

export function isNavigationKey(key: string) {
    return Object.values(NavigationKeys).includes(key as NavigationKey);
}

export function isSelectKey(event: KeyboardEvent) {
  return ["Enter", " "].includes(event.key);
}

export function trapFocus(element: HTMLElement) {
  // TODO: implement
  const tabbableElements = element.querySelectorAll(focusableElements);
  if (tabbableElements.length > 0) {
    const firstElement = tabbableElements[0];
    const lastElement = tabbableElements[tabbableElements.length - 1];
    // firstElement.addEventListener("keydown", );
    lastElement.addEventListener("keydown", wrapFocus);
    return {
      firstElement,
      lastElement
    };
  }
  return // pass tsc
};

function wrapFocus() {
  // TODO
}

function isForwardTab(event: KeyboardEvent) {
  return event.key == "Tab" && !event.shiftKey;
}

function isBackwardTab(event: KeyboardEvent) {
  return event.key == "Tab" && event.shiftKey;
}

export function passTsc() {
  isForwardTab;
  isBackwardTab
}

// @ts-ignore, due to Symbol.iterator not being recognized on Object
const isIterable = (obj: Object) => obj == null ? false : typeof obj[Symbol.iterator] === "function";

export function join(obj: Map<string, unknown> | Object, separator = " ") {
  if (obj == null) {
    return "";
  }
  const a = isIterable(obj)
    ? Array.from(obj as Map<string, unknown>)
    : Object.entries(obj);
  return a
    .map(([k, v]) => (v ? k : undefined))
    .filter((v) => v)
    .join(separator);
};

export function reverse(str: string) {
  return str.split("").reverse().join("");
}

export function convertClassStringToObject(classString: string) {
  return classString.split(" ").reduce((acc, cur) => {
    acc[cur] = true;
    return acc;
  }, {} as Record<string, boolean>);
}

export function convertObjectToClassString(obj: ClassInfo) {
  return Object.entries(obj).filter(([_, value]) => !!value).map(([key, _]) => key).join(" ");
}

export function convertStyleStringToObject(styleString: string) {
  return styleString.split(";").reduce((acc, cur) => {
    const [key, value] = cur.split(":");
    acc[key.trim()] = value.trim();
    return acc;
  }, {} as Record<string, any>);
}

export function convertObjectToStyleString(obj: StyleInfo) {
  return Object.entries(obj).map(([key, value]) => `${key}: ${value}`).join("; ");
}

// Computes the deepest depth of an object for a given key. Arrays with defined values are also considered.
export function maxDepth(object: Record<string, any>, key: string) {
  if (object == null) return 0;
  return _maxDepthRecursive(object, key);
}

function _maxDepthRecursive(object: any, key: string): number {
  if (object == null) {
    return 0;
  }

  const prop = object[key];

  if (Array.isArray(prop)) {
    const props = prop.filter(value => value != null);
    console.log(props);
    return (props.length > 0
      ? Math.max(...props.map(value => {
        const depth = _maxDepthRecursive(value, key); console.log(value, depth); return depth;
      }))
      : 0) + 1;
  }
  else if (typeof prop === 'object' && prop !== null) { // 'null' is an 'object' in JS
    return _maxDepthRecursive(prop, key) + 1;
  }
  else return prop != null ? 1 : 0;
}

/**
 *
 * @param object an object potentially with an array at 'key'
 * @param key the key used as the recursive property
 * @returns the width of all the nested array, (essentially the number of leaf nodes)
 */
export function maxWidth(object: Record<string, any>, key: string) {
  return _maxWidthRecursive(object, key);
}

function _maxWidthRecursive(object: Record<string, any>, key: string): number {
  const prop = object[key];
  if (prop == null) {
    return 0;
  }
  else if (Array.isArray(prop)) {
    return Object.entries(prop).reduce((acc, curr) => {
      return acc + _maxWidthRecursive(curr, key);
    }, 0);
  }
  else return 1;
}

/**
 *
 * @param {number[]} a list of heading levels as taken from
 *  Array.from(root.querySelectorAll('h1, h2, h3, h4, h5, h6')).map(heading => parseInt(heading.tagName.substring(1)))
 * @returns {boolean} whether the list is well formed
 */
export function isValidHeadings(levels: number[]) {
  if (!Array.isArray(levels)) throw new Error('`levels` argument cannot be null');
  if (levels.length === 0) return true;
  const lowestLevel = levels[0];
  if (lowestLevel < 1) throw new Error('the first element (the lowest level) cannot be less than 1');
  for (let i = 1; i < levels.length; i++) {
    const currLevel = levels[i];
    if (currLevel < lowestLevel) throw new Error(`H${currLevel} at index ${i} cannot be less than the first heading H${lowestLevel}`);
    const prevLevel = levels[i - 1];
    if (currLevel > prevLevel + 1) throw new Error(`H${currLevel} at index ${i} cannot be more than one level deeper than previous heading H${prevLevel}`);
  }
  return true;
}

export function toKebabURI(string: string) {
  return encodeURIComponent(kebabCase(string));
}

/**
 *
 * @param element
 * @returns the slugified version of a text string
 */
export function getSlug(element: Element) {
  if (element == null) return null;
  return element.textContent != null ? toKebabURI(element.textContent) : null;
}

/**
 * Converts a list of items with a 'level' property into a nested map. Useful for components like TOCs and Trees
 * @param list A flat list of nested items that have a 'level' property indicating their depth in the tree.
 * @returns The list in a tree structure
 */
export function convertNestedItemListToNestedItem(list: Array<NestedItem & { level: number }>): NestedItem | null {
  if (!Array.isArray(list)) return null;
  const nestedItem: NestedItem = { children: [] };
  if (list.length === 0) return nestedItem;

  const node: NestedItem = list[0];
  (nestedItem.children as NestedItem[]).push(node);

  if (list.length === 1) {
    return nestedItem;
  }

  // iterative is most efficient since we need a stack anyways to keep track of
  // when we drop 2 or more levels, i.e. h4 -> h2
  const stack: NestedItem[] = [nestedItem, node];
  for (let i = 1; i < list.length; i++) {
    const current = list[i];
    const prev = list[i - 1];
    const diff = current.level - prev.level;

    // TODO: may want to generalize this to allow for more than one level of difference
    if (diff > 1) {
      throw new Error(`${current.level} cannot be more than one level deeper than ${prev.level}`);
    }
    else if (diff < 0) {
      for (let i = diff; i <= 0; i++) {
        stack.pop();
      }
    }
    else if (diff === 0) {
      // we replace the current top element on the stack, since the old one has no children
      stack.pop();
    }

    stack[stack.length - 1].children ??= [];
    (stack[stack.length - 1].children as NestedItem[]).push(current);
    stack.push(current);
  }

  return nestedItem;
}

/**
   * Gets the furthest ancestor node without hitting the stopSelector. selector and stopSelected must be
   * mutually exclusive
   * @param node
   * @param selector
   * @param stopSelector
   */
export function walkUp(node: Element, stopSelector: string, selector?: string) {
  const s = `${selector != null ? `${selector}, ` : ''}${stopSelector}`;
  while (node != null) {
    const ancestor = node.parentElement?.closest(s) as Element;
    if (ancestor == null || ancestor.matches(stopSelector)) {
      return node;
    }
    else node = ancestor;
  }
}

/**
 *
 * @param root reference to a root object
 * @param node reference to the node to match
 * @param key the property key to use to decend
 * @returns the parent node or null
 */
export function findParentNode(root: Obj, node: Obj, key: string | number | symbol) {
  const parent = root;
  // while (node != null) {
  //   let children = parent[key];
  //   if (children == null) return null;
  //   if (!Array.isArray(children)) {
  //     children = [children];
  //   }
  //   children.forEach(child => {

  //   })
  // }
  return parent;
}
