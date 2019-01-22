import { makeFavoriteItem } from './modules/elementBuildModules';
import { injectFavoriteItem } from './modules/elementInjectModules';

class FavoriteItemBuilder {
  constructor() {

    this.handleItemClick = this.handleItemClick.bind(this);
    this.build = this.build.bind(this);
    this.findSelectedElement = this.findSelectedElement.bind(this);
  }

  handleItemClick({ id }) {
    const convertedId = id.replace(/\//gi, "\\/").replace(/\./gi, "\\.");     
    $(`#${convertedId}`).dblclick();
  }

  build() {
    const { id, path, fileType, fileName } = this.findSelectedElement();
    const handler = () => this.handleItemClick({ id });
    const favoriteItem = makeFavoriteItem({ id, path, fileType, fileName }, { handler });
    injectFavoriteItem(favoriteItem);
  }

  findSelectedElement() {
    const selectedElement = document.querySelector('[aria-selected=true]');
    const path = selectedElement.getAttribute('path');
    const fileType = selectedElement.getAttribute('file_type');
    const fileName = path.split('/').slice(-1)[0];
    const id = selectedElement.getAttribute('id');
  
    return { id, path, fileType, fileName };
  }
}

export default FavoriteItemBuilder;