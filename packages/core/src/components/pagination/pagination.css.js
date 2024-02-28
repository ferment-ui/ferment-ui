import { css } from 'lit';

export default css`
:root {
  --fui-pagination-current-background-color: var(--fui-color-info-400);
}

fui-pagination {
  display: flex;
  flex-direction: row;
}

.pagination ul {
  display: flex;
  flex-direction: row;
}

.pagination__item a {
  cursor: pointer;
  min-width: 2em;
  border: var(--fui-pagination-border, var(--fui-border));
  display: block;
  text-align: center;
  padding: 0 0.5em;
}

.pagination__item [aria-current=page] {
  background: var(--fui-pagination-current-background-color);
}

a[disabled] {
  pointer-events: none;
}

.pagination__item:not([hidden]):first-child a,
.pagination__item[hidden] + .pagination__item:not([hidden]) a {
  border-top-left-radius: var(--fui-pagination-border-radius, var(--fui-border-radius));
  border-bottom-left-radius: var(--fui-pagination-border-radius, var(--fui-border-radius));
}

.pagination__item:not([hidden]):first-child ~ .pagination__item a,
.pagination__item[hidden] + .pagination__item:not([hidden]) ~ .pagination__item a {
  border-top-left-radius: inherit;
  border-bottom-left-radius: inherit;
}



`