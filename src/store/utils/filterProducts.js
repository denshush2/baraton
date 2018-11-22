import _ from "lodash";

export default {
  filterProductsBySection(products, { id, filters, categories }) {
    //Setup All Products
    console.log("Setup all products", filters);
    if (id === 0) {
      console.log("ALL PRODUCTS");
      return products;
    }
    let response = {};
    if (filters.isSublevel === false) {
      for (let i = 0; i < categories.length; i++) {
        if (categories[i].id === id) {
          response = this.setupProducts(categories[i], products);
          categories[i].products = [];
        }
      }
    } else {
      console.log(id, categories);
      console.log("BEFORE", categories, id);
      categories = _(categories)
        .thru(function(coll) {
          return _.union(coll, _.map(coll, "sublevels"));
        })
        .flatten()
        .find({ id: id });
      console.log("SOME DATA", categories);
      // response = this.setupProducts(categories, products);
    }

    console.log("categories", response);
    return response;
  },
  setupProducts(categories, products, sublevel = false) {
    categories.products = [];
    categories.products = _.filter(products, product => {
      return product.sublevel_id === categories.id;
    });
    if (categories.sublevels) {
      for (
        let categoriesSublevelPos = 0;
        categoriesSublevelPos < categories.sublevels.length;
        categoriesSublevelPos++
      ) {
        this.setupProducts(
          categories.sublevels[categoriesSublevelPos],
          products
        );
      }
    }
    return categories;
  }

  // filterProductsBySection1(products, { id, filters, categories }) {
  //   console.log("FILTERING");
  //   let categoriesTree = [];
  //   console.log("filter", id, filters);
  //   if (id === 0) {
  //     console.log("ALL PRODUCTS");
  //     return products;
  //   }
  //   // let categoriesTree = this.prepareCategoriesArray(categories);
  //   // console.log("TREE", categoriesTree);
  //   if (filters.isSublevel) {
  //     console.log("is Sublevel");
  //     for (let i = 0; i < categories.length; i++) {
  //       console.log("Run");
  //       let response = this.prepareCategoriesArrayIsSublevel(
  //         categories[i].sublevel,
  //         id
  //       );
  //       console.log("rEsponce", response);
  //       if (response.foundParent === true || response.found === true) {
  //         categoriesTree = response.categories;
  //       }
  //     }
  //     // categoriesTree = this.prepareCategoriesArray(categories, id);
  //     // categoriesTree = categoriesTree.filter(function(item, pos) {
  //     //   return categoriesTree.indexOf(item) === pos;
  //     // });
  //     // categories.find(2);
  //     // categories = categories.filter(function(item, pos) {
  //     //   return categories.indexOf(item) === pos;
  //     // });
  //   } else {
  //     categories = categories.map(item => {
  //       if (item.id === id) {
  //         return item;
  //       }
  //       return null;
  //     });
  //     console.log("NOT SUBLEVES", categories);
  //     //   categoriesTree = this.prepareCategoriesArray(categories);

  //     //Main Menu
  //   }
  //   console.log("TREE", categoriesTree);
  //   // console.log("products123", products, id, filters, categories);
  //   // let filteredProducts = [];
  //   // for (
  //   //   let categoriesPos = 0;
  //   //   categoriesPos < categories.length;
  //   //   categoriesPos++
  //   // ) {
  //   //   for (let productsPos = 0; productsPos < products.length; productsPos++) {
  //   //     if (categories[categoriesPos] == products[productsPos].sublevel_id) {
  //   //       filteredProducts.push(products[productsPos]);
  //   //     }
  //   //   }
  //   // }
  //   return products;
  // },
  // prepareCategoriesArray(categories, id) {
  //   let categoriesArray = [];
  //   console.log("CATEGORIEs", categories);
  //   for (let i = 0; i < categories.length; i++) {
  //     categoriesArray.push(categories[i].id);
  //     if (categories[i].sublevel) {
  //       categoriesArray.push(
  //         ...this.prepareCategoriesArray(categories[i].sublevel)
  //       );
  //     }
  //   }
  //   return categoriesArray;
  //   // let categoriesArray = categories.map(item => {
  //   //   if (item.sublevel) {
  //   //     let sublevels = this.prepareCategoriesArray(item.sublevel);
  //   //     return sublevels;
  //   //   }
  //   //   return item.id;
  //   // });
  //   // return categoriesArray;
  // },
  // prepareCategoriesArrayIsSublevel(
  //   categories,
  //   id,
  //   foundParentId = false,
  //   found = false
  // ) {
  //   console.log("GET", categories, id, foundParentId);
  //   let categoriesArray = [];
  //   for (let i = 0; i < categories.length; i++) {
  //     if (categories[i].sublevles) {
  //       if (foundParentId === true) {
  //         categoriesArray.push(categories[i].id);
  //       }
  //       if (categories[i].id === id) {
  //         foundParentId = true;
  //         console.log("PARENT FOUND");
  //         categoriesArray.push(categories[i].id);
  //       }
  //       let response = this.prepareCategoriesArrayIsSublevel(
  //         categories[i].sublevles,
  //         id,
  //         foundParentId,
  //         found
  //       );
  //       console.log("Response", response);
  //       if (foundParentId === true) {
  //         categoriesArray.push(...response.categories);
  //       }
  //     } else {
  //       console.log("NO SUBLEVELS");
  //       if (foundParentId === true) {
  //         categoriesArray.push(categories[i].id);
  //       }
  //       console.log("Parent", foundParentId, categories[i].id, id);
  //       if (categories[i].id === id) {
  //         console.log("found");
  //         found = true;
  //         categoriesArray.push(categories[i].id);
  //       }
  //     }

  //     // if (categories[i].id === id || foundParentId) {
  //     //   foundParentId = true;
  //     //   console.log("PARENT FOUNDED", foundParentId);
  //     //   categoriesArray.push(categories[i].id);
  //     //   if (categories[i].sublevles) {
  //     //     let response = this.prepareCategoriesArrayIsSublevel(
  //     //       categories[i].sublevles,
  //     //       id,
  //     //       foundParentId
  //     //     );
  //     //     categoriesArray.push(...response.categories);
  //     //   }
  //     // } else {
  //     //   console.log("ELSE", categories[i]);
  //     //   if (categories[i].sublevles) {
  //     //     let response = this.prepareCategoriesArrayIsSublevel(
  //     //       categories[i].sublevles,
  //     //       id,
  //     //       foundParentId
  //     //     );
  //     //     categoriesArray.push(...response.categories);
  //     //   }
  //     //   // categoriesArray.push(
  //     //   //   ...this.prepareCategoriesArrayIsSublevel(
  //     //   //     categories[i].sublevel,
  //     //   //     id,
  //     //   //     foundParentId
  //     //   //   )
  //     //   // );
  //     // }
  //   }

  //   let response = {
  //     categories: categoriesArray,
  //     foundParent: foundParentId,
  //     found: found
  //   };
  //   console.log("Categories Array", response);
  //   return response;
  // }
};
