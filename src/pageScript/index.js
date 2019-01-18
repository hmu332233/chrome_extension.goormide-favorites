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
  li.addEventListener('click', () => {
    const selectedElement = findSelectedElement();
    addFavoriteItem(selectedElement);
  });
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
  div.setAttribute('class', 'fade tab-pane');

  return div;
}

function injectTabContentSection(tabContent) {
  const wetTabContentDom = document.querySelector('#west_tab_content');
  wetTabContentDom.prepend(tabContent);
}

const newTabContent = makeTabContentSection();
injectTabContentSection(newTabContent);

function findSelectedElement() {
  const selectedElement = document.querySelector('[aria-selected=true]');
  const path = selectedElement.getAttribute('path');
  const fileType = selectedElement.getAttribute('file_type');
  const fileName = path.split('/').slice(-1)[0];
  const id = selectedElement.getAttribute('id');

  return { id, path, fileType, fileName };
}

function makeFavoriteItem({ id, fileName, fileType, path }) {
  const div = document.createElement('div');
  div.setAttribute('item_id', id);
  div.setAttribute('path', path);
  div.setAttribute('file_type', fileType);
  div.textContent = fileName;

  div.addEventListener('click', () => {
    const convertedId = id.replace(/\//gi, "\\/").replace(/\./gi, "\\.");     
    $(`#${convertedId}`).dblclick();
  });

  return div;
}

function addFavoriteItem({ id, fileName, fileType, path }) {
  const tabContentDom = document.querySelector('#favorites_explorer_tab');
  tabContentDom.appendChild(makeFavoriteItem({ id, fileName, fileType, path }));
}