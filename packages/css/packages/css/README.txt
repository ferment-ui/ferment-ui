# Declare.css

The css files that make up Declare.css.

Exceptions:
- font-style has acronym `fi`
- position names are just the values (i.e. `relative` instead of `p-r`), which frees up `p` for padding
- min and max widths and heights are minw/maxw/minh/maxh so they don't collide with `m` for margin
- basic text styling has shortcuts `i` and `b` for italic and bold (but prefer `<strong>` and `<emphasis>` tags for semantics, when appropriate)

## Common confusions:

- .f is for flex, and .fd is for flex-direction, all other properties that start with f are for fonts, i.e. .ff, .fs

## TODO

- [ ] generate index.css files depending on inclusions and bundling
- [ ] postcss-replace from a config file
- [ ] optional typography override?
- [ ] optional complement theme?
- [ ] optional components?
- [ ] eject option?