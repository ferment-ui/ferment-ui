import { css } from 'lit';

export default css`
/* @section Layout */
.flow > * + * {
  --flow: var(--f, 1em);
  margin-block-start: var(--flow);
}

.page {
  padding: var(--fui-spacing-page) var(--spacing-page-y, var(--fui-spacing-page-y));
}

.page-inline {
  padding-inline: var(--fui-spacing-page-x);
}

.page-block {
  padding-block: var(--spacing-page-y, var(--fui-spacing-page-y));
}

.container {
  --container-name: ;
  container-name: var(--container-name);
  container-type: inline-size;
}

.row {
  display: flex;
  flex-direction: row;
}

.column {
  display: flex;
  flex-direction: column;
}

.wrap {
  flex-wrap: wrap;
}

.rows {
  --min: var(--s);
  display: grid;
  grid-template-rows: var(--ram);
}

.columns {
  --min: var(--s, var(--mobile-landscape));
  --ram: repeat(auto-fit, minmax(var(--min), 1fr));
  display: grid;
  grid-template-columns: var(--ram);
}

.center {
  justify-content: center;
  align-items: center;
}

.stretch {
  justify-content: stretch;
  align-items: stretch;
}

.f-0 > * {
  flex: 0;
}

.f-1 > * {
  flex: 1;
}

.f-auto > * {
  flex: auto;
}

.f-none > * {
  flex: none;
}

.ai-start {
  align-items: start;
}

.ai-center {
  align-items: center;
}

.ai-end {
  align-items: end;
}

.ai-stretch {
  align-items: stretch;
}

.jc-start {
  justify-content: start;
}

.jc-center {
  justify-content: center;
}

.jc-end {
  justify-content: end;
}

.jc-space-between {
  justify-content: space-between;
}

.jc-space-around {
  justify-content: space-around;
}

.jc-space-evenly {
  justify-content: space-evenly;
}

.jc-stretch {
  justify-content: stretch;
}

.ji-start {
  justify-items: start;
}

.ji-center {
  justify-items: center;
}

.ji-end {
  justify-items: end;
}

.ji-stretch {
  justify-items: stretch;
}
/* @endsection */
`;