module.exports = {
  $schema: "./schema.json",
  $version: "1.0.0",
  bundle: ['normalize', 'utilities', 'components/**/*'],
  base: null,
  spacing: {
    baseline: "4",
    multiplier: {
      1: "1",
      2: "2",
      3: "4",
      4: "8",
      5: "14",
      6: "22",
    },
    pageWidth: "65rem",
    pagePadding: "3rem",
  },
  theme: {
    light: {
      primary: {backgroundColor: "#e5e5e5", color: "black", disabled: "", invertedDisabled: ""},
      accent: {backgroundColor: "", color: "", disabled: "", invertedDisabled: ""},
      error: {backgroundColor: "", color: "", disabled: "", invertedDisabled: ""},
      warning: {backgroundColor: "", color: "", disabled: "", invertedDisabled: ""},
      info: {backgroundColor: "", color: "", disabled: "", invertedDisabled: ""},
      success: {backgroundColor: "", color: "", disabled: "", invertedDisabled: ""},
    },
    dark: {
      primary: {backgroundColor: "black", color: "white", disabled: "", invertedDisabled: ""},
      accent: {backgroundColor: "", color: "", disabled: "", invertedDisabled: ""},
      error: {backgroundColor: "", color: "", disabled: "", invertedDisabled: ""},
      warning: {backgroundColor: "", color: "", disabled: "", invertedDisabled: ""},
      info: {backgroundColor: "", color: "", disabled: "", invertedDisabled: ""},
      success: {backgroundColor: "", color: "", disabled: "", invertedDisabled: ""},
    },
  },
  font: {
    scale: "1.333",
    scaleStart: "",
    body: {
      family: "sans-serif",
      size: "20px",
      lineHeight: "1",
      weight: "normal",
      style: "normal",
      decoration: "",
      transform: "",
      letterSpacing: "",
      shadow: "",
    },
    heading: {
      family: "",
      size: "",
      lineHeight: "1.8",
      weight: "",
      style: "",
      decoration: "",
      transform: "",
      letterSpacing: "",
      shadow: "",
    },
    h1_override: {
      family: "",
      size: "",
      lineHeight: "",
      weight: "",
      style: "",
      decoration: "",
      transform: "",
      letterSpacing: "",
      shadow: "",
    },
    h2_override: {
      family: "",
      size: "",
      lineHeight: "",
      weight: "",
      style: "",
      decoration: "",
      transform: "",
      letterSpacing: "",
      shadow: "",
    },
    h3_override: {
      family: "",
      size: "",
      lineHeight: "",
      weight: "",
      style: "",
      decoration: "",
      transform: "",
      letterSpacing: "",
      shadow: "",
    },
    h4_override: {
      family: "",
      size: "",
      lineHeight: "",
      weight: "",
      style: "",
      decoration: "",
      transform: "",
      letterSpacing: "",
      shadow: "",
    },
    h5_override: {
      family: "",
      size: "",
      lineHeight: "",
      weight: "",
      style: "",
      decoration: "",
      transform: "",
      letterSpacing: "",
      shadow: "",
    },
    h6_override: {
      family: "",
      size: "",
      lineHeight: "",
      weight: "",
      style: "",
      decoration: "",
      transform: "",
      letterSpacing: "",
      shadow: "",
    },
    subheading: {
      family: "",
      size: "",
      lineHeight: "",
      weight: "",
      style: "",
      decoration: "",
      transform: "",
      letterSpacing: "",
      shadow: "",
    },
    pullQuote: {
      family: "",
      size: "",
      lineHeight: "",
      weight: "",
      style: "",
      decoration: "",
      transform: "",
      letterSpacing: "",
      shadow: "",
    },
  },
  zIndex: {
    1: "1000",
    2: "2000",
    3: "3000",
    4: "4000",
    5: "5000",
    6: "6000",
  },
  shadow: {
    1: "0px var(--S-1) var(--S-2) 2px",
    2: "1px 1px",
    3: "1px 1px",
    4: "1px 1px",
    5: "1px 1px",
    6: "0 var(--S-6) calc(var(--S-6) * 2) 2px",
  },
  border: "1px solid currentColor",
  borderRadius: "1",
  breakpoint: {
    1: "400px",
    2: "600px",
    3: "800px",
    4: "1000px",
    5: "1200px",
    6: "1600px",
  },
  animation: {
    timing: {
      1: ".2s",
      2: ".25s",
      3: ".3s",
      4: ".35s",
      5: ".4s",
      6: ".45s",
    },
    easings: {},
    defaults: {}
  },
};
