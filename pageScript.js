// pageScript.js

function makeTabElement () {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.setAttribute('id', 'gLayoutTab_command');
  a.setAttribute('href', '#favorites_explorer_tab');
  const span = document.createElement('span');
  span.textContent = '즐겨찾기';

  a.appendChild(span);
  li.appendChild(a);

  return li;
}

function injectTab(tab) {
  const westTabDom = document.querySelector('#west_tab');
  westTabDom.appendChild(tab);
}

const newTab = makeTabElement();
injectTab(newTab);