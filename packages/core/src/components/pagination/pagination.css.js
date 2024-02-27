import { css } from 'lit';

export default css`
:root {
  --fui-pagination-current-background-color: var(--fui-color-info-400);
}
fui-pagination {
  display: flex;
  flex-direction: row;
  border-radius: var(--fui-border-radius, 4px);
  border: none;
}

.pagination ul {
  display: flex;
  flex-direction: row;
}

.pagination li {
  border: 1px solid black;
  border-right: 0;
  cursor: pointer;
  min-width: 2em;
}

.pagination li:first-child {
  border-top-left-radius: var(--fui-border-radius, 4px);
  border-bottom-left-radius: var(--fui-border-radius, 4px);
}

.pagination li:last-child {
  border-right: 1px solid black;
  border-top-right-radius: var(--fui-border-radius, 4px);
  border-bottom-right-radius: var(--fui-border-radius, 4px);
}

.pagination a {
  display: block;
  text-align: center;
  padding: 0 0.5em;
}

.pagination [aria-current=page] {
  background: var(--fui-pagination-current-background-color);
}

a[disabled] {
  pointer-events: none;
}

.pagination button:last-child {
  border-right: 1px solid black;
}
`