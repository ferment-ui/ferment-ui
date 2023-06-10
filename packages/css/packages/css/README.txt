# Declare.css

The css files that make up Declare.css.

## Labels

```
<property>-<value>
<UTILITY>[-modifier]-<value>
```

Exceptions:
- display and position names are just the values (i.e. `relative` instead of `p-r`), which frees up `p` for padding
- flex-direction: Fd to stay consistent with flex utilities and to avoid overloading fonts

### Letter meanings

- H - heading
- B - body

- L - layout
- F - flex
- G - grid
- S - spacing
- O - override

- T - theme

- P - primary
- A - accent
- C - complement (not implemented)
- I - info
- S - success
- W - warning
- E - error

- D - disabled

## Common confusions:

- .f is for flex, all other properties that start with f are for fonts, i.e. .ff, .fs

## TODO

- [ ] postcss-replace from a config file
- [ ] optional typography override?
- [ ] components
- [ ] eject option