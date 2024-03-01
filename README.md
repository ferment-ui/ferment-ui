# Ferments UI

NOTE: THIS IS STILL VERY MUCH A WORK IN PROGRESS AND SHOULD ONLY BE USED FOR INTEREST AT THIS POINT

Yet Another Design System. I got tired of the magic of Tailwinds, and wanted something similar to Shoelace that worked both in Light and Shadown DOM. So here it is! A customizable, bare-bones CSS framework that can be used standalone, but integrates very nicely with the included web components library. Features light and dark themes.

The key principals:
- the same utility and component classes can be used in the lightDOM and shadowDOM
- modern CSS (logical properties, no layout system in favour of bespoke grid, etc.)
- entirely CSS variable based, that can be overridden during build
- VERY small
  - Variables + Utilities only = 3.6kb gzipped
  - Components - ...
