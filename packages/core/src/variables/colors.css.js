// Maps swatches to their semantic names


export default /*css*/`
:root {
  /* NOTE: the '-light/-dark' suffixes are for when the
  swatches are used as background colors, so a light
  background needs a darker text color, and vice versa. */
  --color-text-light: var(--swatch-grey-xl);
  --color-text-dark: var(--swatch-grey-xd);
  --color-text-disabled-light: var(--swatch-grey-l);
  --color-text-disabled-dark: var(--swatch-grey-d);
  --color-text-muted-light: var(--color-text-disabled-light);
  --color-text-muted-dark: var(--color-text-disabled-dark);

  /* this is the "current" value in light/dark mode */
  --color-text: light-dark(var(--color-text-dark), var(--color-text-light));
  --color-text-disabled: light-dark(var(--color-text-disabled-dark), var(--color-text-disabled-light));

  --color-neutral: light-dark(var(--swatch-grey-xl), var(--swatch-grey-xd));
  --color-neutral-text: light-dark(var(--color-text-dark), var(--color-text-light));
  --color-neutral-muted: light-dark(var(--swatch-grey-l), var(--swatch-grey-d));
  --color-neutral-muted-text: light-dark(var(--color-text-dark), var(--color-text-disabled-light));
 
  --color-primary: light-dark(var(--swatch-primary-xl), var(--swatch-primary-d));
  --color-primary-muted: light-dark(var(--swatch-primary-l), var(--swatch-primary-xd));
  --color-secondary: light-dark(var(--swatch-secondary-xl), var(--swatch-secondary-d));
  --color-secondary-muted: light-dark(var(--swatch-secondary-l), var(--swatch-secondary-xd));
  --color-tertiary: light-dark(var(--swatch-tertiary-xl), var(--swatch-tertiary-d));
  --color-tertiary-muted: light-dark(var(--swatch-tertiary-l), var(--swatch-tertiary-xd));
  
  --color-brand-primary: light-dark(var(--swatch-brand-primary-xl), var(--swatch-brand-primary-d));
  --color-brand-primary-text: light-dark(var(--color-text-dark), var(--color-text-light));
  --color-brand-primary-muted: light-dark(var(--swatch-brand-primary-l), var(--swatch-brand-primary-xd));
  --color-brand-primary-muted-text: light-dark(var(--color-text-muted-dark), var(--color-text-muted-light));
  --color-brand-secondary: light-dark(var(--swatch-brand-secondary-xl), var(--swatch-brand-secondary-d));
  --color-brand-secondary-text: light-dark(var(--color-text-dark), var(--color-text-light));
  --color-brand-secondary-muted: light-dark(var(--swatch-brand-secondary-l), var(--swatch-brand-secondary-xd));
  --color-brand-secondary-muted-text: light-dark(var(--color-text-muted-dark), var(--color-text-muted-light));
  --color-brand-tertiary: light-dark(var(--swatch-brand-tertiary-xl), var(--swatch-brand-tertiary-d));
  --color-brand-tertiary-text: light-dark(var(--color-text-dark), var(--color-text-light));
  --color-brand-tertiary-muted: light-dark(var(--swatch-brand-tertiary-l), var(--swatch-brand-tertiary-xd));
  --color-brand-tertiary-muted-text: light-dark(var(--color-text-muted-dark), var(--color-text-muted-light));

  --color-info: light-dark(var(--swatch-blue-xd), var(--swatch-blue-xl));
  --color-info-text: light-dark(var(--color-text-dark), var(--color-text-light));
  --color-info-muted: light-dark(var(--swatch-blue-d), var(--swatch-blue-l));
  --color-info-muted-text: light-dark(var(--color-text-muted-dark), var(--color-text-muted-light));
  --color-success: light-dark(var(--swatch-green-xd), var(--swatch-green-xl));
  --color-success-text: light-dark(var(--color-text-dark), var(--color-text-light));
  --color-success-muted: light-dark(var(--swatch-green-d), var(--swatch-green-l));
  --color-success-muted-text: light-dark(var(--color-text-muted-dark), var(--color-text-muted-light));
  --color-warning: light-dark(var(--swatch-yellow-xd), var(--swatch-yellow-xl));
  --color-warning-text: light-dark(var(--color-text-dark), var(--color-text-light));
  --color-warning-muted: light-dark(var(--swatch-yellow-d), var(--swatch-yellow-l));
  --color-warning-muted-text: light-dark(var(--color-text-muted-dark), var(--color-text-muted-light));
  --color-error: light-dark(var(--swatch-red-xd), var(--swatch-red-xl));
  --color-error-text: light-dark(var(--color-text-dark), var(--color-text-light));
  --color-error-muted: light-dark(var(--swatch-red-d), var(--swatch-red-l));
  --color-error-muted-text: light-dark(var(--color-text-muted-dark), var(--color-text-muted-light));
}`;