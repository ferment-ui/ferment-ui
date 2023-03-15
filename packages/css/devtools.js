
const b = chrome || browser;

// const browserTheme = b.devtools.panels.themeName;
// console.log(browserTheme);

function handleShown() {
  console.log('DeclareCSS being shown');
  // load in current css variables
}

b.devtools.panels
.create("DeclareCSS", "/icons/star.png", "/panel/panel.html", function (newPanel) {
    newPanel.onShown.addListener(handleShown);
  });

