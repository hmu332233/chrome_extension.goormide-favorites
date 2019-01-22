import { makeMenuElement } from './modules/elementBuildModules';
import { injectContextMenu } from './modules/elementInjectModules';

class ContextMenuBuilder {
  constructor() {
  }
  build({ name, handler }) {
    const newMenu = makeMenuElement({ name, clickHandler: handler });
    injectContextMenu(newMenu);
  }
}

export default ContextMenuBuilder;