import { config as fuiConfig } from './fui.config.js';

// Bootstrap-inspired configuration
export const config = {
  ...fuiConfig,
  breakpoint: {
    xxs: 0,
    xs: '576px',    // Bootstrap sm
    sm: '768px',    // Bootstrap md  
    md: '992px',    // Bootstrap lg
    lg: '1200px',   // Bootstrap xl
    xl: '1400px',   // Bootstrap xxl
    xxl: '1920px',
    xxxl: '2560px',
    xxxxl: '3840px',
  },
  spacing: {
    ...fuiConfig.spacing,
    multiplier: {
      1: '0.25rem',   // Bootstrap uses 4px base
      2: '0.5rem',    // 8px
      3: '1rem',      // 16px  
      4: '1.5rem',    // 24px
      5: '3rem',      // 48px
      6: '4rem',      // 64px
      7: '5rem',      // 80px
      8: '6rem',      // 96px
      9: '8rem',      // 128px
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
      xl: 'oklch(65% 0.15 260)', // Bootstrap blue-ish
      l: 'oklch(55% 0.15 260)',
      m: 'oklch(45% 0.15 260)',
      d: 'oklch(35% 0.15 260)',
      xd: 'oklch(25% 0.15 260)',
    }
  }
};