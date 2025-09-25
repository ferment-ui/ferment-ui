export default /*css*/`
:where(body) {
  /* density presets */
  --spacing-scale-dense: 0.875;
  --spacing-scale-regular: 1;
  --spacing-scale-sparse: 1.125;

  /* default density */
  --spacing-scale: var(--spacing-scale-regular);

  --spacing-3xs: calc(var(--spacing-scale) * 0.125rem);
  --spacing-2xs: calc(var(--spacing-scale) * 0.25rem);
  --spacing-xs: calc(var(--spacing-scale) * 0.5rem);
  --spacing-s: calc(var(--spacing-scale) * .75rem);
  --spacing-m: calc(var(--spacing-scale) * 1rem);
  --spacing-l: calc(var(--spacing-scale) * 1.5rem);
  --spacing-xl: calc(var(--spacing-scale) * 2rem);
  --spacing-2xl: calc(var(--spacing-scale) * 2.5rem);
  --spacing-3xl: calc(var(--spacing-scale) * 3rem);
  --spacing-4xl: calc(var(--spacing-scale) * 4rem);

  --spacing-min: var(--spacing-xs);
  --spacing-preferred: 5%;
  --spacing-max: var(--spacing-xl);
  --spacing-fluid: clamp(var(--spacing-min), var(--spacing-preferred), var(--spacing-max));

  /* default inline scale */
  --spacing-inline-scale: 1.5;

  --spacing-inline-3xs: calc(var(--spacing-3xs) * var(--spacing-inline-scale));
  --spacing-inline-2xs: calc(var(--spacing-2xs) * var(--spacing-inline-scale));
  --spacing-inline-xs: calc(var(--spacing-xs) * var(--spacing-inline-scale));
  --spacing-inline-s: calc(var(--spacing-s) * var(--spacing-inline-scale));
  --spacing-inline-m: calc(var(--spacing-m) * var(--spacing-inline-scale));
  --spacing-inline-l: calc(var(--spacing-l) * var(--spacing-inline-scale));
  --spacing-inline-xl: calc(var(--spacing-xl) * var(--spacing-inline-scale));
  --spacing-inline-2xl: calc(var(--spacing-2xl) * var(--spacing-inline-scale));
  --spacing-inline-3xl: calc(var(--spacing-3xl) * var(--spacing-inline-scale));
  --spacing-inline-4xl: calc(var(--spacing-4xl) * var(--spacing-inline-scale));

  --spacing-inline-min: var(--spacing-inline-xs);
  --spacing-inline-preferred: 5%;
  --spacing-inline-max: var(--spacing-inline-xl);
  --spacing-inline-fluid: clamp(var(--spacing-inline-min), var(--spacing-inline-preferred), var(--spacing-inline-max));

  --spacing-gap: 1rem;
  --spacing-page: 65ch;
}`;