import { css } from 'lit';

export default css`
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

.pt-text {
  padding-top: var(--fui-spacing-text);
}

.pb-text {
  padding-bottom: var(--fui-spacing-text);
}
`;