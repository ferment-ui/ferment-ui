import { css } from "lit";

// These are not inherited, so need to be set in each shadow root
export const reset = css`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
`;

export const button = css`
  button {
    display: inline-block;
    border: none;
    padding: 0;
    margin: 0;
    text-decoration: none;
    background: inherit;
    color: currentColor;
    font-family: inherit;
    font-size: 1em;
    cursor: pointer;
    text-align: center;
    -webkit-appearance: none;
    -moz-appearance: none;
  }
`;

// These are inherited properties, so can be set once at the top of the document
export const global = css`
  ul {
    list-style: none;
    list-style-position: inside;
  }

  table {
    border-collapse: collapse;
  }

  img, embed, object, video {
    max-width: 100%;
  }
`