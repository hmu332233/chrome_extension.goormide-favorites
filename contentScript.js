// contentScript.js

// inject pageScript
var s = document.createElement('script');
s.src = chrome.extension.getURL('pageScript.js');
(document.head || document.documentElement).appendChild(s);

s.parentNode.removeChild(s);