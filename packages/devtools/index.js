const browser = chrome ?? browser;

browser.devtools.panels.create(
  "Ferment UI", // title
  "/images/icon.png", // icon
  "/panel.html", // content
  (newPanel) => {
    newPanel.onShown.addListener(initialisePanel);
    newPanel.onHidden.addListener(unInitialisePanel);
  }
);

function initialisePanel(panelWindow) {
  // code invoked on panel creation
}

function unInitialisePanel(panelWindow) {
  // code invoked on panel destruction
}