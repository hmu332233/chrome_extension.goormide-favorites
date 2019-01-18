
function makeTabElement({ id, name }) {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.setAttribute('id', 'gLayoutTab_command');
  a.setAttribute('href', `#${id}`);
  const span = document.createElement('span');
  span.textContent = name;
  a.appendChild(span);
  li.appendChild(a);
  return li;
}

function makeMenuElement({ name, clickHandler }) {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.textContent = name;
  li.appendChild(a);
  li.addEventListener('click', clickHandler);
  return li;
}

function makeTabContentSection({ id }) {
  const div = document.createElement('div');
  div.setAttribute('id', id);
  div.setAttribute('class', 'fade tab-pane');
  return div;
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


export {
  makeFavoriteItem,
  makeMenuElement,
  makeTabContentSection,
  makeTabElement
}