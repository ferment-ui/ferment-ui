import { css } from "lit";
// These are not inherited, so need to be set in each shadow root
export const reset = css `
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
`;
// These are inherited properties, so can be set once at the top of the document
export const global = css `
    ul {
        list-style: none;
    }

    table {
        border-collapse: collapse;
    }

    img, embed, object, video {
        max-width: 100%;
    }
`;
