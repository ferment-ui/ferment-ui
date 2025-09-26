import { kebabCase, _var, _ref, cartesian } from './utils'
import { it } from 'vitest';

it.for([
  ['simpleCamelCase', 'simple-camel-case'],
  ['with spaces', 'with-spaces'],
  ['with_underscores', 'with-underscores'],
  ['with.dots', 'with-dots'],
  ['already-kebab-case', 'already-kebab-case'],
  ['multiple   spaces', 'multiple-spaces'],
  ['PascalCase', 'pascal-case'],
  ['UPPERCase', 'upper-case'],
  ['mixed_Spaces.And.Cases', 'mixed-spaces-and-cases'],
  ['aB', 'a-b'],
  ['A', 'a'],
  ['', ''],
])('kebabCase("%s") should return "%s"', ([input, expected], { expect }) => {
  expect(kebabCase(input)).toBe(expected)
})

it.for([
  // [name, customPrefix, expected]
  ['fooBar', '', '--foo-bar'],
  ['fooBar', 'my', '--my-foo-bar'],
  [['foo', 'Bar'], '', '--foo-bar'],
  [['foo', 'Bar'], 'my', '--my-foo-bar'],
  ['already-kebab-case', '', '--already-kebab-case'],
  ['already-kebab-case', 'prefix', '--prefix-already-kebab-case'],
  ['', '', '--'],
  ['', 'prefix', '--prefix-'],
])('_var(%j, %j) should return %j', ([name, customPrefix, expected], { expect }) => {
  expect(_var(name, customPrefix)).toBe(expected)
})

it.for([
  // [name, fallbacks, customPrefix, expected]
  ['fooBar', undefined, '', 'var(--foo-bar)'],
  ['fooBar', '', '', 'var(--foo-bar)'],
  ['fooBar', '1rem', '', 'var(--foo-bar, 1rem)'],
  ['fooBar', '1rem', 'my', 'var(--my-foo-bar, 1rem)'],
  [['foo', 'Bar'], undefined, '', 'var(--foo-bar)'],
  [['foo', 'Bar'], '2px', '', 'var(--foo-bar, 2px)'],
  [['foo', 'Bar'], '2px', 'prefix', 'var(--prefix-foo-bar, 2px)'],
  ['already-kebab-case', undefined, '', 'var(--already-kebab-case)'],
  ['already-kebab-case', 'red', 'prefix', 'var(--prefix-already-kebab-case, red)'],
  ['', undefined, '', 'var(--)'],
  ['', 'fallback', '', 'var(--, fallback)'],
  ['', 'fallback', 'prefix', 'var(--prefix-, fallback)'],
])('_ref(%j, %j, %j) should return %j', ([name, fallbacks, customPrefix, expected], { expect }) => {
  expect(_ref(name, fallbacks, customPrefix)).toBe(expected)
})

