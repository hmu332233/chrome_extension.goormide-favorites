import { makeTabElement, makeTabContentSection } from './modules/elementBuildModules';
import { injectTab, injectTabContentSection } from './modules/elementInjectModules';

class TabBuilder {
  constructor() {
  }

  build({ id, name }) {
    const newTab = makeTabElement({ name, id });
    const newTabContent = makeTabContentSection({ id });

    injectTab(newTab);
    injectTabContentSection(newTabContent);
  }
}

export default TabBuilder;