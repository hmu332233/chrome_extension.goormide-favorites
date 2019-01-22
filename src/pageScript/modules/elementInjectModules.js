function appendItem(selector, element) {
  const dom = document.querySelector(selector);
  dom.appendChild(element);
}

function prependItem(selector, element) {
  const dom = document.querySelector(selector);
  dom.prepend(element);
}

function injectTab(tab) {
  appendItem('#west_tab', tab)
}

function injectContextMenu(menu) {
  prependItem('#project\\.explorer\\.file_context > ul', menu);
}

function injectTabContentSection(tabContent) {
  appendItem('#west_tab_content', tabContent);
}

function injectFavoriteItem(item) {
  appendItem('#favorites_explorer_tab', item);
}

export {
  injectTab,
  injectContextMenu,
  injectTabContentSection,
  injectFavoriteItem
}