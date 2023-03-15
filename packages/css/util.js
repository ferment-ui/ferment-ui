// modified from https://stackoverflow.com/a/54851636/2916356
function getAllCssVariables(prefix = '') {
  let settings = {};
  const documentStyle = getComputedStyle(document.documentElement);
  Array.from(document.styleSheets)
    .filter(
      (sheet) =>
        sheet.href === null || sheet.href.startsWith(window.location.origin)
    )
    .forEach(sheet => {
      Array.from(sheet.cssRules).forEach(rule => {
        if (rule.selectorText === ':root') {
          Array.from(rule.style)
          .forEach(style => {
            // all properties start with ' ' for some reason
            if (style.startsWith(`--${prefix}`)) {
              const value = documentStyle.getPropertyValue(style).trim();
              const properties = style.split("-").slice(2);
              let ref = settings;
              for (let i = 0; i < properties.length - 1; i++) {
                const property = properties[i];
                if (ref[property] == null) {
                  ref[property] = {};
                }
                ref = ref[property];
              }
              ref[properties[properties.length - 1]] = value === ''
                ? 'unset'
                : value;

            }
          });
        }
      })
    });
  return settings;
}

export function loadDeclareConfigFromCSS() {
  return getAllCssVariables();
}

export function getPropertyNameClosure(prefix, label) {
  return function (suffix) {
    return `${prefix}-${label}-${suffix}`;
  };
}

export function maskValue(value) {
  return value === 'unset' ? '' : value;
}