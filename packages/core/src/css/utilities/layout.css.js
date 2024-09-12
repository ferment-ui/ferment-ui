import { css } from 'lit';

export default css`
/* @section Layout */
.flow > * + * {
  margin-block-start: var(--flow, 1em);
}

.page {
  padding: var(--fui-spacing-page) var(--spacing-page-y, var(--fui-spacing-page-y));
}

.page-inline {
  padding-inline: var(--fui-spacing-page-x);
}

.page-block {
  padding-block var(--spacing-page-y, var(--fui-spacing-page-y));
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

/* use flex instead of grid as grid screws up responsive images */
.start-start, .start {
  display: flex;
  justify-content: start;
  align-items: start;
}

.start-center {
  display: flex;
  justify-content: start;
  align-items: center;
}

.start-end {
  display: flex;
  justify-content: start;
  align-items: end;
}

.center-start {
  display: flex;
  justify-content: center;
  align-items: start;
}

.center-center, .center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.center-end {
  display: flex;
  justify-content: center;
  align-items: end;
}

.end-start {
  display: flex;
  justify-content: end;
  align-items: start;
}

.end-center {
  display: flex;
  justify-content: end;
  align-items: center;
}

.end-end, .end {
  display: flex;
  justify-content: end;
  align-items: end;
}

.space-between {
  place-content: space-between;
  justify-content: space-between;
}

.space-around {
  place-content: space-around;
  justify-content: space-around;
}

.wrap {
  flex-wrap: wrap;
}

.g-text {
  gap: var(--gap, --fui-spacing-text);
}

.f-0 {
  flex: 0;
}

.f-10a {
  flex: 1 0 auto;
}

.f-1 {
  flex: 1;
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

.jc-between {
  justify-content: space-between;
}

.jc-around {
  justify-content: space-around;
}

.jc-evenly {
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

.ac-start {
  align-content: start;
}

.ac-center {
  align-content: center;
}

.ac-end {
  align-content: end;
}

.ac-between {
  align-content: space-between;
}

.ac-around {
  align-content: space-around;
}

.ac-stretch {
  align-content: stretch;
}
/* @endsection */
`;