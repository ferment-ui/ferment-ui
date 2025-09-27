export function ref(path: string, prefix?: string) {
  return `var(${_var(path, prefix)})`;
}

export function _var(path: string, prefix?: string) {
  return `--${customKebabCase(`${prefix ? `${prefix}-` : ''}${path}`)}`;
}

export const config = {
  breakpoint: {
    xxs: 0,
    xs: '360px',
    sm: '600px',
    md: '900px',
    lg: '1200px',
    xl: '1536px',
    xxl: '1920px',
    xxxl: '2560px',
    xxxxl: '3840px',
  },
  spacing: {
    scaleRegular: 1,
    scaleDense: 0.875,
    scaleSparse: 1.125,
    scale: ref('spacing.scaleRegular'),
    multiplier: {
      1: '0.125rem',
      2: '0.25rem',
      3: '0.5rem',
      4: '0.75rem',
      5: '1rem',
      6: '1.5rem',
      7: '2rem',
      8: '3rem',
      9: '4rem',
    },
    _sizes: {
      1: `calc(${ref('spacing.scale')} * ${ref('spacing.multiplier.1')})`,
      2: `calc(${ref('spacing.scale')} * ${ref('spacing.multiplier.2')})`,
      3: `calc(${ref('spacing.scale')} * ${ref('spacing.multiplier.3')})`,
      4: `calc(${ref('spacing.scale')} * ${ref('spacing.multiplier.4')})`,
      5: `calc(${ref('spacing.scale')} * ${ref('spacing.multiplier.5')})`,
      6: `calc(${ref('spacing.scale')} * ${ref('spacing.multiplier.6')})`,
      7: `calc(${ref('spacing.scale')} * ${ref('spacing.multiplier.7')})`,
      8: `calc(${ref('spacing.scale')} * ${ref('spacing.multiplier.8')})`,
      9: `calc(${ref('spacing.scale')} * ${ref('spacing.multiplier.9')})`,
    },
    min: '0.25rem',
    preferred: '5vw + 1rem',
    max: '4rem',
    fluid: `clamp(${ref('spacing.min')}, ${ref('spacing.preferred')}, ${ref('spacing.max')})`,
    inline: {
      scale: 1.5,
      scaleDense: 1.25,
      scaleRegular: 1.5,
      scaleSparse: 2,
      min: '0.25rem',
      preferred: '5vw + 1rem',
      max: '4rem',
      fluid: `clamp(${ref('spacing.inline.min')}, ${ref('spacing.inline.preferred')}, ${ref('spacing.inline.max')})`,
      1: `calc(${ref('spacing.inline.scale')} * ${ref('spacing.1')})`,
      2: `calc(${ref('spacing.inline.scale')} * ${ref('spacing.2')})`,
      3: `calc(${ref('spacing.inline.scale')} * ${ref('spacing.3')})`,
      4: `calc(${ref('spacing.inline.scale')} * ${ref('spacing.4')})`,
      5: `calc(${ref('spacing.inline.scale')} * ${ref('spacing.5')})`,
      6: `calc(${ref('spacing.inline.scale')} * ${ref('spacing.6')})`,
      7: `calc(${ref('spacing.inline.scale')} * ${ref('spacing.7')})`,
      8: `calc(${ref('spacing.inline.scale')} * ${ref('spacing.8')})`,
      9: `calc(${ref('spacing.inline.scale')} * ${ref('spacing.9')})`,
    },
    gap: '1rem',
    page: '75ch',
  },
  _typography: {
    font: {
      system: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
      serif: "Georgia, Cambria, 'Times New Roman', Times, serif",
      mono: "SF Mono, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
    },
    copy: {
      s: '1rem',
      ff: ref('font.system'),
      fw: 400,
      lh: 1.5,
      ls: 'normal',
    },
    heading: {
      scale: 1.25,
      root: 'h4',
      ff: 'inherit',
      fw: 600,
      lh: 1.25,
      ls: 'normal',
    },
    h1: { s: `calc(var(--heading-scale) * var(--h2-s))` },
    h2: { s: `calc(var(--heading-scale) * var(--h3-s))` },
    h3: { s: `calc(var(--heading-scale) * var(--h4-s))` },
    h4: { s: `1rem` },
    h5: { s: `calc(var(--h4-s) * 1 / var(--heading-scale))` },
    h6: { s: `calc(var(--h5-s) * 1 / var(--heading-scale))` },
    subheading: {
      s: '0.875rem',
      ff: 'inherit',
      fw: 500,
      lh: 1.25,
      ls: 'normal',
    },
    caption: {
      ff: 'inherit',
      fs: '0.75rem',
      fw: 400,
      lh: 1.25,
      ls: 'normal',
    },
    quote: {
      ff: 'inherit',
      fs: '1rem',
      fw: 400,
      lh: 1.5,
      ls: 'normal',
    },
    code: {
      ff: 'SF Mono, monospace',
      fs: '0.875rem',
      fw: 400,
      lh: 1.5,
      ls: 'normal',
    }
  },
  swatch: {
    brandPrimary: {
      xl: 'oklch(70% 0.3 240)',
      l: 'oklch(60% 0.3 240)',
      m: 'oklch(50% 0.3 240)',
      d: 'oklch(40% 0.3 240)',
      xd: 'oklch(30% 0.3 240)',
    },
    brandSecondary: {
      xl: 'oklch(70% 0.2 240)',
      l: 'oklch(60% 0.2 240)',
      m: 'oklch(50% 0.2 240)',
      d: 'oklch(40% 0.2 240)',
      xd: 'oklch(30% 0.2 240)',
    },
    brandTertiary: {
      xl: 'oklch(70% 0.1 240)',
      l: 'oklch(60% 0.1 240)',
      m: 'oklch(50% 0.1 240)',
      d: 'oklch(40% 0.1 240)',
      xd: 'oklch(30% 0.1 240)',
    },
    primary: {
      xl: 'oklch(70% 0.1 240)',
      l: 'oklch(60% 0.1 240)',
      m: 'oklch(50% 0.1 240)',
      d: 'oklch(40% 0.1 240)',
      xd: 'oklch(30% 0.1 240)',
    },
    secondary: {
      xl: 'oklch(70% 0.05 240)',
      l: 'oklch(60% 0.05 240)',
      m: 'oklch(50% 0.05 240)',
      d: 'oklch(40% 0.05 240)',
      xd: 'oklch(30% 0.05 240)',
    },
    tertiary: {
      xl: 'oklch(70% 0.02 240)',
      l: 'oklch(60% 0.02 240)',
      m: 'oklch(50% 0.02 240)',
      d: 'oklch(40% 0.02 240)',
      xd: 'oklch(30% 0.02 240)',
    },
    grey: {
      xl: 'oklch(90% 0.02 240)',
      l: 'oklch(70% 0.02 240)',
      m: 'oklch(50% 0.02 240)',
      d: 'oklch(30% 0.02 240)',
      xd: 'oklch(10% 0.02 240)',
    },
    blue: {
      xl: 'oklch(70% 0.3 240)',
      l: 'oklch(60% 0.3 240)',
      m: 'oklch(50% 0.3 240)',
      d: 'oklch(40% 0.3 240)',
      xd: 'oklch(30% 0.3 240)',
    },
    green: {
      xl: 'oklch(70% 0.3 120)',
      l: 'oklch(60% 0.3 120)',
      m: 'oklch(50% 0.3 120)',
      d: 'oklch(40% 0.3 120)',
      xd: 'oklch(30% 0.3 120)',
    },
    yellow: {
      xl: 'oklch(70% 0.3 90)',
      l: 'oklch(60% 0.3 90)',
      m: 'oklch(50% 0.3 90)',
      d: 'oklch(40% 0.3 90)',
      xd: 'oklch(30% 0.3 90)',
    },
    red: {
      xl: 'oklch(70% 0.3 40)',
      l: 'oklch(60% 0.3 40)',
      m: 'oklch(50% 0.3 40)',
      d: 'oklch(40% 0.3 40)',
      xd: 'oklch(30% 0.3 40)',
    }
  },
  color: {
    text: {
      _: `light-dark(${ref('color.text.light')}, ${ref('color.text.dark')})`, // the "current" text color
      light: ref('swatch.grey.xl'),
      dark: ref('swatch.grey.xd'),
      mutedLight: ref('swatch.grey.l'),
      mutedDark: ref('swatch.grey.d'),
    },
    neutral: {
      _: `light-dark(${ref('swatch.grey.xl')}, ${ref('swatch.grey.xd')})`,
      text: `light-dark(${ref('color.textDark')}, ${ref('color.textLight')})`,
      muted: `light-dark(${ref('swatch.grey.l')}, ${ref('swatch.grey.d')})`,
      mutedText: `light-dark(${ref('color.text.mutedDark')}, ${ref('color.text.mutedLight')})`,
    },
    primary: {
      _: `light-dark(${ref('swatch.primary.xl')}, ${ref('swatch.primary.xd')})`,
      text: `light-dark(${ref('color.textLight')}, ${ref('color.textDark')})`,
      muted: `light-dark(${ref('swatch.primary.l')}, ${ref('swatch.primary.d')})`,
      mutedText: `light-dark(${ref('color.text.mutedLight')}, ${ref('color.text.mutedDark')})`,
    },
    brandPrimary: {
      _: `light-dark(${ref('swatch.brandPrimary.xl')}, ${ref('swatch.brandPrimary.xd')})`,
      text: `light-dark(${ref('color.textLight')}, ${ref('color.textDark')})`,
      muted: `light-dark(${ref('swatch.brandPrimary.l')}, ${ref('swatch.brandPrimary.d')})`,
      mutedText: `light-dark(${ref('color.text.mutedLight')}, ${ref('color.text.mutedDark')})`,
    },
  },
  border: {
  _: `${ref('border.width')} ${ref('border.style')} ${ref('color.primary')}`,
    radius: '4px',
    width: '1px',
    style: 'solid',
    color: 'currentColor',
  },
  shadow: {
    0: 'none',
    1: '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
    2: '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)',
    3: '0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.06)',
    4: '0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.06)',
    5: '0 25px 50px rgba(0, 0, 0, 0.25)',
  },
  animation: {
    duration: '0.2s',
    easing: 'ease-in-out',
    delay: '0s',
  },
  focus: {
    outline: '1px solid Highlight',
    outlineOffset: '4px',
    boxShadow: '0 0 0 2px Highlight',
    transition: 'outline 0.2s ease-in-out',
  },
  tappable: {
    minSize: '44px',
    padding: '0.5em',
    margin: '0.25em',
  },

  // TODO:
  _element: {
    hr: {},
    list: {
      item: {
        paddingBlock: '0.5em',
        paddingInline: '1em',
        borderBottom: ref('border'),
      }
    }
  },

  // NOTE: these have underscores because the root key is dropped
  _patternGroup: 
    {
      tag: {
        patterns: ['badge', 'tooltip'],
        scale: '1',
        inlineScale: '1.2',
        paddingBlock: '0.25em',
        paddingInline: '0.5em',
        border: ref('border'),
        boxShadow: ref('shadow.1'),
      },
      link: {
        patterns: ['link'],
        scale: '1.2',
        inlineScale: '1.2',
        paddingBlock: '0.25em',
        paddingInline: '0.5em',
        border: ref('border'),
        boxShadow: ref('shadow.1'),
      },
      control: {
        patterns: ['button', 'chip', 'breadcrumb', 'link'],
        scale: '1.2',
        inlineScale: '1.2',
        paddingBlock: '0.25em',
        paddingInline: '0.5em',
        border: ref('border'),
        boxShadow: ref('shadow.1'),
      },
      field: {
        patterns: ['input', 'select', 'switch', 'checkbox', 'radio', 'textarea', 'slider'],
        scale: '1.2',
        inlineScale: '1.2',
        paddingBlock: '0.25em',
        paddingInline: '0.5em',
        border: ref('border'),
        boxShadow: ref('shadow.1'),
      },
      panel: {
        patterns: ['card', 'modal', 'dialog', 'menu', 'listbox', 'table', 'dropdown'],
        scale: '1.2',
        inlineScale: '1.2',
        paddingInline: '0.5em',
        paddingBlock: '0.5em',
        border: ref('border'),
        boxShadow: ref('shadow.1'),
      },
      area: {
        patterns: ['alert', 'pagination', 'progress', 'stepper', 'tab', 'divider'],
        scale: '1.2',
        inlineScale: '1.2',
        paddingBlock: '0.5em',
        paddingInline: '0.5em',
        border: ref('border'),
        boxShadow: ref('shadow.1')
      }
    },
  _pattern: {
    alert: {
      scale: '1',
      inlineScale: '1.2',
      paddingBlock: '0.5em',
      paddingInline: '0.5em',
      border: ref('border'),
      boxShadow: ref('shadow.1')
    }
  },
};

/**
 * Recursively converts the config object into CSS variables under the :root rule.
 * Skips keys prefixed with '_'.
 * Uses _var for variable names.
 * @param {object} obj - The config object or sub-object.
 * @param {string[]} path - The path of keys leading to this obj.
 * @param {Array<string>} out - The array collecting CSS variable declarations.
 */
function configToCssVars(obj: any, validRefs: Set<string>, path: string = '', out: string[] = []) {
  for (const key in obj) {
    if (!Object.prototype.hasOwnProperty.call(obj, key)) continue;
    const value = obj[key];
    const nextPath = `${path}${key.startsWith('_') ? '' : `.${key}`}`;
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      configToCssVars(value, validRefs, nextPath, out);
    } else {
      // Only add primitive values (string, number, boolean)
      if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
        const varName = _var(nextPath);
        if (!validRefs.has(varName)) {
          console.warn(`Warning: Variable ${varName} is defined but not referenced anywhere.`);
        }
        out.push(`${_var(nextPath)}: ${value};`);
      }
    }
  }
  return out;
}

/**
 * Generates the full CSS string for :root with all config variables.
 * @returns {string} CSS string
 */
function generateConfigCssVars(obj: any = config) {
  const varNames = new Set<string>();

  // First pass: collect all variable names
  function collectVarNames(currentObj: any, path: string) {
    for (const key in currentObj) {
      if (!Object.prototype.hasOwnProperty.call(currentObj, key)) continue;
      const value = currentObj[key];
      const newPath = key.startsWith('_') ? path : (path ? `${path}.${key}` : key);
      
      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        collectVarNames(value, newPath);
      } else if (typeof value !== 'function') {
        varNames.add(_var(newPath));
      }
    }
  }

  collectVarNames(obj, '');
  const vars = configToCssVars(obj, varNames);
  return `export default \`:root {\n  ${vars.join('\n  ')}\n}\`;`;
}

console.log(generateConfigCssVars(config));

function customKebabCase(str: string) {
  return str
    .replace(/^\./, '')
    .replace(/([a-z])([A-Z])/g, "$1-$2") 
    .replace(/[\s_.]+/g, "-")
    .toLowerCase();
}