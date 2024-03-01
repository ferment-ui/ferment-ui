import { css } from 'lit';

export default css`
table {
  border-collapse: collapse;
}

td {
  padding: var(--fui-spacing-base);
}

thead {
  border-bottom: 1px solid black;
}

th {
  text-align: start;
  display: table-cell;
}

th > button {
  text-align: start;
  padding: var(--fui-spacing-base);
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: top;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;
  font-family: var(--fui-font-family-body);
}

th .sort-icons::before {
  content: '▲';
}

th .sort-icons::after {
  content: '▼';
}

tfoot {
  border-top: 1px solid black;
}
tfoot th {
  padding: var(--fui-spacing-base);
}

button {
  background-color: unset;
}

[aria-pressed=true] {
  background: var(--fui-color-grey);
}

::part(sort-button) {
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: top;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;
  font-family: var(--fui-font-family-body);
}
`;
