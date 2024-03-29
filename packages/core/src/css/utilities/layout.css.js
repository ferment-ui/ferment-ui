import { css } from 'lit';

export default css`
.body {
  overflow-x: hidden;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas: "header" "main" "footer";
  min-height: 100vh;
}

.viewport {
  width: 100vw;
  height: 100vh;
}

.h-viewport {
  height: 100vh;
}

.h-100 {
  height: 100%;
}

.minh-viewport {
  min-height: 100vh;
}

.minh-100 {
  min-height: 100%;
}

.maxh-viewport {
  max-height: 100vh;
}

.maxh-100 {
  max-height: 100%;
}

.w-viewport {
  width: 100vw;
}

.w-100 {
  width: 100%;
}

.w-fit-content {
  width: fit-content;
}

.w-page {
  width: var(--fui-page-width);
}

.page {
  padding: var(--fui-spacing-page);
  display: flex;
  flex-direction: column;
  gap: var(--fui-spacing-text);
}

.page-x {
  padding: 0 var(--fui-spacing-page-x);
}

.page-y {
  padding: var(--fui-spacing-page-y) 0;
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

.ta-start {
  text-align: start;
}

.ta-center {
  text-align: center;
}

.ta-end {
  text-align: end;
}

.p {
  padding: var(--fui-spacing-y-min) var(--fui-spacing-x-min);
}

.pt {
  padding-top: var(--fui-spacing-y-min);
}

.pr {
  padding-right: var(--fui-spacing-x-min);
}

.pb {
  padding-bottom: var(--fui-spacing-y-min);
}

.pl {
  padding-left: var(--fui-spacing-x-min);
}

.px {
  padding-left: var(--fui-spacing-x-min);
  padding-right: var(--fui-spacing-x-min);
}

.py {
  padding-top: var(--fui-spacing-y-min);
  padding-bottom: var(--fui-spacing-y-min);
}

.p-0 {
  padding: 0;
}

.pt-0 {
  padding-top: 0;
}

.pr-0 {
  padding-right: 0;
}

.pb-0 {
  padding-bottom: 0;
}

.pl-0 {
  padding-left: 0;
}

.p-responsive {
  padding: var(--fui-spacing-responsive-y) var(--fui-spacing-responsive-x);
}

.pt-responsive {
  padding-top: var(--fui-spacing-responsive-y);
}

.pr-responsive {
  padding-right: var(--fui-spacing-responsive-x);
}

.pb-responsive {
  padding-bottom: var(--fui-spacing-responsive-y);
}

.pl-responsive {
  padding-left: var(--fui-spacing-responsive-x);
}

.px-responsive {
  padding-left: var(--fui-spacing-responsive-x);
  padding-right: var(--fui-spacing-responsive-x);
}

.py-responsive {
  padding-top: var(--fui-spacing-responsive-y);
  padding-bottom: var(--fui-spacing-responsive-y);
}

.m {
  margin: var(--fui-spacing-y-min) var(--fui-spacing-x-min);
}

.mt {
  margin-top: var(--fui-spacing-y-min);
}

.mr {
  margin-right: var(--fui-spacing-x-min);
}

.mb {
  margin-bottom: var(--fui-spacing-y-min);
}

.ml {
  margin-left: var(--fui-spacing-x-min);
}

.mx {
  margin-left: var(--fui-spacing-x-min);
  margin-right: var(--fui-spacing-x-min);
}

.my {
  margin-top: var(--fui-spacing-y-min);
  margin-bottom: var(--fui-spacing-y-min);
}

.m-0 {
  margin: 0;
}

.mt-0 {
  margin-top: 0;
}

.mr-0 {
  margin-right: 0;
}

.mb-0 {
  margin-bottom: 0;
}

.ml-0 {
  margin-left: 0;
}

.m-responsive {
  margin: var(--fui-spacing-responsive-y) var(--fui-spacing-responsive-x);
}

.mt-responsive {
  margin-top: var(--fui-spacing-responsive-y);
}

.mr-responsive {
  margin-right: var(--fui-spacing-responsive-x);
}

.mb-responsive {
  margin-bottom: var(--fui-spacing-responsive-y);
}

.ml-responsive {
  margin-left: var(--fui-spacing-responsive-x);
}

.mx-responsive {
  margin-left: var(--fui-spacing-responsive-x);
  margin-right: var(--fui-spacing-responsive-x);
}

.my-responsive {
  margin-top: var(--fui-spacing-responsive-y);
  margin-bottom: var(--fui-spacing-responsive-y);
}

.ml-auto {
  margin-left: auto;
}

.mr-auto {
  margin-right: auto;
}

.gap-base {
  gap: var(--fui-spacing-base);
}

.gap-text {
  gap: var(--fui-spacing-text);
}
`;