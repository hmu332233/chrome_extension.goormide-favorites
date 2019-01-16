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


function makeMenuElement() {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.textContent = '즐겨찾기 등록';
  li.appendChild(a);
  return li;
}

function injectContextMenu(menu) {
  const fileContextDom = document.querySelector('#project\\.explorer\\.file_context > ul');
  fileContextDom.prepend(menu);
}

const newMenu = makeMenuElement();
injectContextMenu(newMenu);

function makeTabContentSection() {
  const div = document.createElement('div');
  div.setAttribute('id', 'favorites_explorer_tab');

  return div;
}

function injectTabContentSection(tabContent) {
  const wetTabContentDom = document.querySelector('#west_tab_content');
  wetTabContentDom.prepend(tabContent);
}

const newTabContent = makeTabContentSection();
injectTabContentSection(newTabContent);