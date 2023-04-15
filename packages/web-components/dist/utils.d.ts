export declare function mod(a: number, b: number): number;
export declare const focusableElements = "a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type=\"text\"]:not([disabled]), input[type=\"radio\"]:not([disabled]), input[type=\"checkbox\"]:not([disabled]), select:not([disabled])";
export declare function trapFocus(element: HTMLElement): {
    firstElement: Element;
    lastElement: Element;
} | undefined;
export declare function passTsc(): void;
export declare function join(obj: Map<string, unknown> | Object, separator?: string): string;
export declare function reverse(str: string): string;
