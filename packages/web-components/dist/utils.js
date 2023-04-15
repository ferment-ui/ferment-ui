export function mod(a, b) {
    return ((a % b) + b) % b;
}
export const focusableElements = 'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])';
export function trapFocus(element) {
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
    return; // pass tsc
}
;
function wrapFocus() {
    // TODO
}
function isForwardTab(event) {
    return event.key == "Tab" && !event.shiftKey;
}
function isBackwardTab(event) {
    return event.key == "Tab" && event.shiftKey;
}
export function passTsc() {
    isForwardTab;
    isBackwardTab;
}
// @ts-ignore, due to Symbol.iterator not being recognized on Object
const isIterable = (obj) => obj == null ? false : typeof obj[Symbol.iterator] === "function";
export function join(obj, separator = " ") {
    if (obj == null) {
        return "";
    }
    const a = isIterable(obj)
        ? Array.from(obj)
        : Object.entries(obj);
    return a
        .map(([k, v]) => (v ? k : undefined))
        .filter((v) => v)
        .join(separator);
}
;
export function reverse(str) {
    return str.split("").reverse().join("");
}
