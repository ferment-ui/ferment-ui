import { config as fuiConfig } from './fui.config.js';

// Material Design-inspired configuration
export const config = {
  ...fuiConfig,
  spacing: {
    ...fuiConfig.spacing,
    multiplier: {
      1: '0.125rem',  // 2dp
      2: '0.25rem',   // 4dp
      3: '0.5rem',    // 8dp
      4: '0.75rem',   // 12dp
      5: '1rem',      // 16dp
      6: '1.5rem',    // 24dp
      7: '2rem',      // 32dp
      8: '3rem',      // 48dp
      9: '4rem',      // 64dp
    },
    // Recalculate _sizes based on new multipliers
    _sizes: {
      1: `calc(var(--spacing-scale) * var(--spacing-multiplier-1))`,
      2: `calc(var(--spacing-scale) * var(--spacing-multiplier-2))`,
      3: `calc(var(--spacing-scale) * var(--spacing-multiplier-3))`,
      4: `calc(var(--spacing-scale) * var(--spacing-multiplier-4))`,
      5: `calc(var(--spacing-scale) * var(--spacing-multiplier-5))`,
      6: `calc(var(--spacing-scale) * var(--spacing-multiplier-6))`,
      7: `calc(var(--spacing-scale) * var(--spacing-multiplier-7))`,
      8: `calc(var(--spacing-scale) * var(--spacing-multiplier-8))`,
      9: `calc(var(--spacing-scale) * var(--spacing-multiplier-9))`,
    }
  },
  swatch: {
    ...fuiConfig.swatch,
    brandPrimary: {
      xl: 'oklch(70% 0.25 220)', // Material blue
      l: 'oklch(60% 0.25 220)',
      m: 'oklch(50% 0.25 220)',
      d: 'oklch(40% 0.25 220)',
      xd: 'oklch(30% 0.25 220)',
    }
  },
  shadow: {
    0: 'none',
    1: '0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12)',
    2: '0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)',
    3: '0 3px 3px -2px rgba(0,0,0,.2), 0 3px 4px 0 rgba(0,0,0,.14), 0 1px 8px 0 rgba(0,0,0,.12)',
    4: '0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12)',
    5: '0 3px 5px -1px rgba(0,0,0,.2), 0 5px 8px 0 rgba(0,0,0,.14), 0 1px 14px 0 rgba(0,0,0,.12)',
  }
};