console.log('content.js');

const b = chrome || browser;
const docStyle = document.documentElement.style;

b.runtime.onMessage.addListener(function ({action, property, value}, sender, sendResponse) {
  switch (action) {
    case 'update':
      docStyle.setProperty(`--${property}`, value);
      break;
    case 'getConfig':
      const config = getAllCssVariables();
      sendResponse(JSON.stringify(config));
  }
});

function getAllCssVariables(prefix = "") {
  let settings = {};
  const documentStyle = getComputedStyle(document.documentElement);
  Array.from(document.styleSheets)
    .filter(
      (sheet) =>
        sheet.href === null || sheet.href.startsWith(window.location.origin)
    )
    .forEach((sheet) => {
      Array.from(sheet.cssRules).forEach((rule) => {
        if (rule.selectorText === ":root") {
          Array.from(rule.style).forEach((style) => {
            if (style.startsWith(`--${prefix}`)) {
              const properties = style.split("-").slice(2);
              let ref = settings;
              for (let i = 0; i < properties.length - 1; i++) {
                const property = properties[i];
                if (ref[property] == null) {
                  ref[property] = {};
                }
                ref = ref[property];
              }
              ref[
                properties[properties.length - 1]
              ] = style === ''
                  ? 'unset'
                  : documentStyle.getPropertyValue(style).trim();
            }
          });
        }
      });
    });
  return settings;
}