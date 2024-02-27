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