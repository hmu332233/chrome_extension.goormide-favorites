// pageScript.js
import TabBuilder from './TabBuilder';
import ContextMenuBuilder from './ContextMenuBuilder';
import FavoriteItemBuilder from './FavoriteItemBuilder';


const TAB_ID = 'favorites_explorer_tab';
const tabBuilber = new TabBuilder();
const contextMenuBuilder = new ContextMenuBuilder();
const favoriteItemBuilder = new FavoriteItemBuilder();

tabBuilber.build({ name: '즐겨찾기', id: TAB_ID });
contextMenuBuilder.build({ name: '즐겨찾기 등록', handler: favoriteItemBuilder.build });