# Icons

Icons are typically implemented one of two ways:
- font icons: typically looks like `<i class='<libraryName> <iconName>'></i>`
  - the icons are provided as a font file
  - the `<libraryName>` is a class that sets the font-family
  - the `<iconName>` sets the `content` property of a pseudo-selector to a specific unicode value 
  - the font family defines a mapping from unicode characters to the icons
- svg icons: typically looks like one of:
  - inline: `<svg>...definition</svg>`
  - `use`: `<svg><use href="icon-spritemap.svg#<iconName>"></use></svg>`
  - a js-based approach, such as from a JS framework, with a webcomponent `<lazy-svg library="<libraryName>" name="<iconName"></lazy-svg>`, or a library

- ideally you use svgs, but you should:
  - inline for ATF content
  - use or js-based for elsewhere