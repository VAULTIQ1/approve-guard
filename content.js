(() => {
  const script = document.createElement("script");
  script.src = chrome.runtime.getURL("injected.js");
  script.type = "text/javascript";

  (document.head || document.documentElement).appendChild(script);
})();