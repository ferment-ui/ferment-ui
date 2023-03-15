console.log('background.js');

const b = chrome || browser;

// set up long-lived connection
// b.runtime.onConnect.addListener(function (port) {
//   console.assert(port.name == "knockknock");
//   port.onMessage.addListener(function (msg) {
//     if (msg.joke == "Knock knock") port.postMessage({question: "Who's there?"});
//     else if (msg.answer == "Madame")
//       port.postMessage({question: "Madame who?"});
//     else if (msg.answer == "Madame... Bovary")
//       port.postMessage({question: "I don't get it."});
//   });
// });

// b.tabs.query({active: true, currentWindow: true}, function (tabs) {
//   const port = chrome.tabs.connect(tabs[0].id);
//   port.postMessage({joke: "Knock knock"});
//   port.onMessage.addListener(function (msg) {
//     if (msg.question == "Who's there?") port.postMessage({answer: "Madame"});
//     else if (msg.question == "Madame who?")
//       port.postMessage({answer: "Madame... Bovary"});
//   });
// });
/**
When we receive the message, execute the given script in the given
tab.
*/
// function handleMessage(request, sender, sendResponse) {

//   if (sender.url != browser.runtime.getURL("/devtools/panel/panel.html")) {
//     return;
//   }

  // browser.tabs.executeScript(
  //   request.tabId,
  //   {
  //     code: request.script
  //   });

// }

/**
Listen for messages from our devtools panel.
*/
// browser.runtime.onMessage.addListener(handleMessage);
