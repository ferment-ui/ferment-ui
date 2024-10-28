import { z } from 'zod';

export const GlobalValuesShema = z.enum(['initial', 'inherit', 'unset', 'revert', 'revert-layer']);
export const AbsoluteSizeSchema = z.enum(['xx-small', 'x-small', 'small', 'medium', 'large', 'x-large', 'xx-large']);
export const RelativeSizeSchema = z.enum(['larger', 'smaller']);
export const AbsoluteLengthSchema = z.string().regex(/^-?\d*\.?\d+(px|cm|mm|Q|in|pc|pt)$/);
export const RelativeFontLengthSchema = z.string().regex(/^-?\d*\.?\d+(cap|ch|em|ex|ic|lh)$/);
export const RelativeRootLengthSchema = z.string().regex(/^-?\d*\.?\d+(rcap|rch|rem|rex|ric|rlh)$/);
export const RelativeViewportLengthSchema = z.string().regex(/^-?\d*\.?\d+(vh|vw|vmax|vmin|vb|vi|svh|svw|svmax|svmin|svb|svi|lvh|lvw|lvmax|lvmin|lvb|lvi|dvh|dvw|dvmax|dvmin|dvb|dvi)$/);
export const RelativeContainerQueryLengthSchema = z.string().regex(/^-?\d*\.?\d+(cqw|cqh|cqi|cqb|cqmin|cqmax)$/);
export const LengthSchema = z.union([z.literal(0), AbsoluteLengthSchema, RelativeFontLengthSchema, RelativeRootLengthSchema, RelativeViewportLengthSchema, RelativeContainerQueryLengthSchema]);
export const PercentageSchema = z.string().regex(/^-?\d*\.?\d+%$/);
export const LengthPercentageSchema = z.union([LengthSchema, PercentageSchema]);

export const VariableSchema = z.string().regex(/^--[\w-]+$/);
export const VariableRefSchema = z.string().regex(/^var\(--[\w-]+(,\s*[\w-]+)?\)$/);

export const CalcSchema = z.string().regex(/^calc\(\s*[\d\s\+\-\*\/\(\)]+\s*\)$/);

export const HexSchema = z.string().regex(/^#[0-9a-f]{3,6}$/);
export const RGBSchema = z.string().regex(/^rgb(a?)\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(,\s*(0|1|0?\.\d+))?\s*\)$/);
export const HSLSchema = z.string().regex(/^hsl(a?)\(\s*(-?\d{1,3}(?:\.\d+)?)(deg|grad|rad|turn)?\s*,\s*(\d{1,3}(?:\.\d+)?)%\s*,\s*(\d{1,3}(?:\.\d+)?)%\s*(,\s*(0|1|0?\.\d+))?\s*\)$/);
export const NamedColorSchema = z.enum([
  "aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black", "blanchedalmond", 
  "blue", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", 
  "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkgrey", 
  "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", 
  "darkslateblue", "darkslategray", "darkslategrey", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", 
  "dimgray", "dimgrey", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", 
  "ghostwhite", "gold", "goldenrod", "gray", "green", "greenyellow", "grey", "honeydew", "hotpink", "indianred", 
  "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", 
  "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen", "lightgrey", "lightpink", "lightsalmon", 
  "lightseagreen", "lightskyblue", "lightslategray", "lightslategrey", "lightsteelblue", "lightyellow", "lime", 
  "limegreen", "linen", "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", 
  "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", 
  "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", 
  "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", 
  "peru", "pink", "plum", "powderblue", "purple", "rebeccapurple", "red", "rosybrown", "royalblue", "saddlebrown", 
  "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", 
  "slategrey", "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "turquoise", "violet", 
  "wheat", "white", "whitesmoke", "yellow", "yellowgreen"
]);
export const ColorFunctionSchema = z.string().regex(/^color\(\s*from\s+.*\)$/);
export const ColorSchema = z.union([z.enum(['currentcolor', 'currentColor', 'transparent']), ColorFunctionSchema, HexSchema, RGBSchema, HSLSchema, NamedColorSchema]);

export const BorderStyleSchema = z.enum(['solid', 'dashed', 'dotted', 'double', 'groove', 'ridge', 'inset', 'outset', 'none']);
export const BorderSchema = z.object({
  width: LengthSchema,
  style: BorderStyleSchema,
  color: ColorSchema
}).default({
  width: '1px',
  style: 'solid',
  color: 'currentColor'
});

export const SpacingSchema = z.object({
  inline: z.string().default('1em'),
  block: z.string().default('1em'),
  page: z.string().default('50ch'),
  flow: z.string().default('1em'),
})

export const BreakpointSchema = z.record(z.object({
  alias: z.string(),
  spacing: SpacingSchema.optional(),
}));

export const ShadowSchema = z.record(z.string());

export const SwatchSchema = z.record(z.string());
export const FontFaceSchema = z.record(z.string());
export const FontSizeSchema = z.union(AbsoluteSizeSchema, RelativeSizeSchema);
export const FontWeightSchema = z.union(z.enum(['normal', 'bold', 'bolder', 'lighter']), z.number().positive().max(1000));
export const FontSchema = z.object({
  family: z.string(),
  size: LengthSchema.default('1rem'),
  lineHeight: z.number().positive().default(1.5),
  weight: FontWeightSchema.default('normal'),
  style: z.string().default('normal'),
  letterSpacing: z.number().default(0),
  decoration: z.string().default('none'),
  transform: z.string().default('none'),
  shadow: z.string().default('none')
});
const TypographySchema = z.object({
  rem: z.number().positive(),
  scale: z.number().positive(),
  body: FontSchema,
  heading: FontFaceSchema,
  h1: FontSchema.optional(),
  h2: FontSchema.optional(),
  h3: FontSchema.optional(),
  h4: FontSchema.optional(),
  h5: FontSchema.optional(),
  h6: FontSchema.optional(),
  label: FontSchema.optional(),
  subheading: FontSchema.optional(),
  pullquote: FontSchema.optional(),
  caption: FontSchema.optional(),
}).default({
  scale: 1.125,
  rem: '16px',
  body: {
    family: 'system-ui, sans-serif',
    size: '1rem',
  },
  heading: {
    family: 'system-ui, serif',
    weight: 'bold',
  }
})

export const LayerSchema = z.record(z.string());
export const ThemeSchema = z.record(z.string());
export const TimingSchema = z.record(z.string());

export const FUISchema = z.object({
  border: BorderSchema,
  
  layout: SpacingSchema.extend({
    base: z.number().positive().default(6),
    sizes: BreakpointSchema.default({
      479: { alias: 'xs' },
      575: { alias: 'sm' },
      767: { alias: 'md' },
      1023: { alias: 'lg' },
      1439: { alias: 'xl' }
    })
  }),
  // swatches: z.record(SwatchSchema),
  
  shadows: ShadowSchema.default({
    1: '0 0 0.5rem rgba(0, 0, 0, 0.1)',
    2: '0 0 1rem rgba(0, 0, 0, 0.1)',
    3: '0 0 1.5rem rgba(0, 0, 0, 0.1)',
    4: '0 0 2rem rgba(0, 0, 0, 0.1)',
    5: '0 0 2.5rem rgba(0, 0, 0, 0.1)',
    6: '0 0 3rem rgba(0, 0, 0, 0.1)'
  }),
  
  typography: TypographySchema
});

const FUI = FUISchema.parse({
  layout: {
    spacing: {
      base: 8,
      min: 4,
      inline: '1em',
      block: '1em',
      page: '50ch',
      flow: '1em'
    }
  }
  // swatches: {
  //   primary: '#007bff',
  //   secondary: '#6c757d',
  //   success: '#28a745',
  //   info: '#17a2b8',
  //   warning: '#ffc107',
  //   danger: '#dc3545',
  //   light: '#f8f9fa',
  //   dark: '#343a40',
  //   white: '#ffffff',
  //   black: '#000000'
  // },
  // breakpoints: {
  //   xs: 0,
  //   sm: 576,
  //   md: 768,
  //   lg: 992,
  //   xl: 1200
  // },
  // shadows: {
  //   sm: '0 0 0.5rem rgba(0, 0, 0, 0.1)',
  //   md: '0 0 1rem rgba(0, 0, 0, 0.1)',
  //   lg: '0 0 1.5rem rgba(0, 0, 0, 0.1)',
  //   xl: '0 0 2rem rgba(0, 0, 0, 0.1)'
  // }
});

console.log(FUI);