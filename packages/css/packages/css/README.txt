# Declare.css

The css files that make up Declare.css.

Exceptions:
- font-style has acronym `fi`, since `fs` is for the more common font-size
- overflow has acronym `of`, as opacity uses `o`
- position names are just the values (i.e. `relative` instead of `p-r`), which frees up `p` for padding
- min and max widths and heights are minw/maxw/minh/maxh so they don't collide with `m` for margin
- basic text styling has shortcuts `i` and `b` for italic and bold (but prefer `<strong>` and `<emphasis>` tags for semantics, when appropriate)

## CSS tips

- use semantic HTML tags or apply aria attributes
- ideally only use .class, [attribute], and :pseudo selectors to keep specificity low
- don't set a font size on the body (allows the user to set one they like), and all other text should use `rem` units
- flex should be your default positioning system, and grid should be used for layouts (prefer adhoc rather than a framework)
- use margins for fine-tuning layout between elements, and padding for within an element
- prefer a block or inline-block with flex's justify-content rather than text-align... it works better with different browsers/language directions
- if you don't like the default outline, replace it, never just remove it
- :hover and :focus should nearly always do the same thing (hence the `--pin` in declare.css), but remember to use :active for things like a button press
- only use opacity for a fade in effect
- transition/animations should really only use opacity and transform for speed and to not cause re-layouts


## Common confusions:

- .f is for flex, and .fd is for flex-direction, all other properties that start with f are for fonts, i.e. .ff, .fs

## TODO

- [ ] generate index.css files depending on inclusions and bundling
- [x] postcss-replace from a config file
- [ ] optional typography override?
- [ ] optional complement theme?
- [ ] optional components?
- [ ] eject option?