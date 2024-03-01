import { css } from 'lit';

export default css`
table {
  border-collapse: collapse;
}

thead {
  border-bottom: 1px solid black;
}

tfoot {
  border-top: 1px solid black;
}
tfoot th {
  padding: var(--fui-spacing-base);
}

th {
  text-align: start;
  align-items: center;
}

td {
  padding: var(--fui-spacing-base);
}

[aria-pressed=true] {
  background: var(--fui-color-grey-400);
}

::part(sort-icon), .table__sort-icon {
}
`;
