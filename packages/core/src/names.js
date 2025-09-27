import { breakpoints } from './breakpoints.js';
import { config } from '../templates/fui.config.js';
import { cartesian } from './utils.js';

// Factory function to create names with custom config
export function createNames(customConfig = config) {
  console.log(Object.keys(breakpoints), customConfig.sizes);
  const bpToSizesMap = cartesian(Object.keys(breakpoints), Object.keys(customConfig.spacing._sizes));
  console.log('bpToSizesMap', bpToSizesMap);
  return { bpToSizesMap };
}

// Default exports for backward compatibility
console.log(Object.keys(breakpoints), config.sizes);
export const bpToSizesMap = cartesian(Object.keys(breakpoints), Object.keys(config.spacing._sizes));
console.log('bpToSizesMap', bpToSizesMap);

export const colors = {
  neutral: "neutral",
  neutralMuted: "neutral-muted",
  primary: "primary",
  primaryMuted: "primary-muted",
  secondary: "secondary",
  secondaryMuted: "secondary-muted",
  tertiary: "tertiary",
  tertiaryMuted: "tertiary-muted",
  brandPrimary: "brand-primary",
  brandPrimaryMuted: "brand-primary-muted",
  brandSecondary: "brand-secondary",
  brandSecondaryMuted: "brand-secondary-muted",
  brandTertiary: "brand-tertiary",
  brandTertiaryMuted: "brand-tertiary-muted",
  info: "info",
  infoMuted: "info-muted",
  success: "success",
  successMuted: "success-muted",
  warning: "warning",
  warningMuted: "warning-muted",
  error: "error",
  errorMuted: "error-muted",
};

export const spacing = {
  'xxxs': 'xxxs',
  'xxs': 'xxs',
  'xs': 'xs',
  's': 's',
  'm': 'm',
  'l': 'l',
  'xl': 'xl',
  'xxl': 'xxl',
  'xxxl': 'xxxl',
  'xxxxl': 'xxxxl'
};

export const variants = {
  neutral: 'neutral',
  primary: 'primary',
  secondary: 'secondary',
  tertiary: 'tertiary',
  brandPrimary: 'brand-primary',
  brandSecondary: 'brand-secondary',
  brandTertiary: 'brand-tertiary',
  info: 'info',
  success: 'success',
  warning: 'warning',
  error: 'error'
}

export const patternGroups = {
  tag: ['badge', 'label', 'status', 'tooltip'],
  control: ['button', 'link', 'toggle', 'switch'],
  panel: ['card', 'dialog', 'modal', 'dropdown'],
  area: ['drawer', 'tab-panel', 'section', 'aside'],
  content: ['details', 'figure', 'blockquote']
}