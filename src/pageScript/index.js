// pageScript.js
import { makeTabElement, makeMenuElement, makeTabContentSection, makeFavoriteItem } from './elementBuildModules';

function injectTab(tab) {
  const westTabDom = document.querySelector('#west_tab');
  westTabDom.appendChild(tab);
}

const TAB_ID = 'favorites_explorer_tab';
const CONTENT_ID = 'west_tab_content';

const newTab = makeTabElement({ name: '즐겨찾기', id: TAB_ID });
injectTab(newTab);


function injectContextMenu(menu) {
  const fileContextDom = document.querySelector('#project\\.explorer\\.file_context > ul');
  fileContextDom.prepend(menu);
}

const newMenu = makeMenuElement({
  name: '즐겨찾기 등록',
  clickHandler: () => {
    const selectedElement = findSelectedElement();
    addFavoriteItem(selectedElement);
  }
});
injectContextMenu(newMenu);


function injectTabContentSection(tabContent) {
  const wetTabContentDom = document.querySelector('#west_tab_content');
  wetTabContentDom.prepend(tabContent);
}

const newTabContent = makeTabContentSection({ id: TAB_ID });
injectTabContentSection(newTabContent);

function findSelectedElement() {
  const selectedElement = document.querySelector('[aria-selected=true]');
  const path = selectedElement.getAttribute('path');
  const fileType = selectedElement.getAttribute('file_type');
  const fileName = path.split('/').slice(-1)[0];
  const id = selectedElement.getAttribute('id');

  return { id, path, fileType, fileName };
}

function addFavoriteItem({ id, fileName, fileType, path }) {
  const tabContentDom = document.querySelector('#favorites_explorer_tab');
  tabContentDom.appendChild(makeFavoriteItem({ id, fileName, fileType, path }));
}