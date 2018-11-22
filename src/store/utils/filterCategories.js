export default {
  filter(data, sublevels = []) {
    let menu = [];
    for (let i = 0; i < data.length; i++) {
      //SET SOME CHARACTERISTICS FOR TOPLEVELS
      let menuItem = {};
      menuItem.id = data[i].id;
      menuItem.name = data[i].name;
      menuItem.toggled = false;
      menuItem.isSublevel = false;
      menuItem.url = menuItem.name
        .toLocaleLowerCase()
        .split(" ")
        .join("_");
      if (data[i].sublevels) {
        menuItem.children = this.filterSublevels(data[i].sublevels);
      }
      menu.push(menuItem);
    }
    return menu;
  },
  filterSublevels(sublevels) {
    let sublevelMenu = [];
    for (let i = 0; i < sublevels.length; i++) {
      //SET SOME CHARACTERISTICS FOR SUBLEVES
      let sublevelMenuItem = {};
      sublevelMenuItem.id = sublevels[i].id;
      sublevelMenuItem.isSublevel = true;
      sublevelMenuItem.name = sublevels[i].name;
      sublevelMenuItem.toggled = false;
      sublevelMenuItem.url = sublevelMenuItem.name
        .toLocaleLowerCase()
        .split(" ")
        .join("_");
      if (sublevels[i].sublevels) {
        sublevelMenuItem.children = this.filterSublevels(
          sublevels[i].sublevels
        );
      }
      sublevelMenu.push(sublevelMenuItem);
    }
    return sublevelMenu;
  },
  buildIdsArrayFromCategories(categories) {
    let data = [];
    for (let i = 0; i < categories.length; i++) {
      let item = {
        id: categories[i].id,
        name: categories[i].name,
        isSublevel: false
      };
      // data.push(categories[i].id);
      if (categories[i].sublevels) {
        console.log("HAS SUBLEVEL");
        item.sublevels = this.buildCategories(categories[i].sublevels);
      }
      data.push(item);
    }
    return data;
  },
  buildCategories(categories) {
    let subCategories = [];
    for (let i = 0; i < categories.length; i++) {
      let item = {};
      if (categories[i].sublevels) {
        item.sublevels = this.buildCategories(categories[i].sublevels);
      }
      item.id = categories[i].id;
      item.name = categories[i].name;
      item.isSublevel = true;
      subCategories.push(item);
    }
    return subCategories;
  }
};
