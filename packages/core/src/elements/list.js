import { spread } from 'ttls-helpers';

export default function (attrs, children, options) {
  const { data, itemAttrs = {}, tag = 'ul', presentational = true } = options ?? {};
  if (['ul', 'ol', 'menu', 'dir'].includes(tag) === false) {
    throw new Error(`Invalid tag for list: ${tag}. Must be one of ul, ol, menu, dir.`);
  }

  const { role, ...rest } = attrs ?? {};
  role ??= presentational ? 'presentation' : undefined;

  return /*html*/`
    <${tag} ${ifDefined('role', role)}${spread(rest)}>
      ${data.entries.map(entry => /*html*/`<li ${spread(itemAttrs)}>${entry}</li>`).join('\n')}
    </${tag}>
  `;
}