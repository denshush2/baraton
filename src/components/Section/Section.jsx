import React, { Component } from "react";
// import PropTypes from "prop-types";
import { Card } from "semantic-ui-react";
import { connect } from "react-redux";
import CartActions from "../../store/modules/cart/actions";
import ProductsAction from "../../store/modules/products/actions";
import SubSection from "../Subsection/Subsection";
import Product from "../Product/Product";
import Filter from "../Filter/Filter";

export class Section extends Component {
  static propTypes = {
    // prop: PropTypes
  };
  state = {
    filters: {
      inStock: null,
      priceFrom: 0,
      priceTo: 20000,
      inStockFrom: 0,
      inStockTo: 1000
    },
    order: {
      price: null,
      inStock: null,
      quantity: null
    }
  };
  componentDidMount() {
    this.findCategoryName(this.props.categories);
    this.props.setActiveSection(
      this.props.location.state.id,
      this.props.location.state.isSublevel
    );
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.location.pathname === this.props.location.pathname) {
      console.log("component not updade path");
    } else {
      this.props.filtredProducts();
    }
  }
  filter = (name, value) => {
    console.log("filtering", name, value);
    this.setState({
      filters: { ...this.state.filters, [name]: value }
    });
    this.forceUpdate();
  };
  addProduct = product => {
    console.log("Add Product", product);
    this.props.addProductToCart(product);
    console.log("Add Product", product);
  };
  findCategoryName = categories => {
    for (let i = 0; i < categories.length; i++) {
      if (categories[i].name === this.props.match.params.section) {
        return true;
      }
    }
    return false;
  };
  sortProducts = (productA, productB) => {};
  renderProducts = products => {
    // if (this.state.filters.inStock === "inStock") {

    // }
    console.log("STATE", this.state.filters);
    if (
      this.state.filters.inStock === null &&
      this.state.filters.priceFrom === 0 &&
      this.state.filters.priceTo === 20000 &&
      this.state.filters.inStockFrom === 0 &&
      this.state.filters.inStockTo === 1000
    ) {
      return products.map(product => {
        return (
          <Product key={product.id} addProduct={this.addProduct} {...product} />
        );
      });
    } else {
      const filtered = products.filter(product => {
        let price = parseFloat(product.price.substr(1).replace(",", "."));
        console.log("price", price);
        if (
          this.state.filters.inStock === product.available &&
          this.state.filters.priceTo > price &&
          this.state.filters.priceFrom < price &&
          this.state.filters.inStockTo > product.quantity &&
          this.state.filters.inStockFrom < product.quantity
        ) {
          console.log("FIND");
          return product;
        }
      });
      console.log("FILTEREd", filtered);
      filtered.sort(this.sortProducts);
      return filtered.map(product => {
        return (
          <Product key={product.id} addProduct={this.addProduct} {...product} />
        );
      });
    }
  };
  render() {
    const { products } = this.props;
    const { filters } = this.state;
    return (
      <div>
        <h1>Section {products.name}</h1>
        {products.products && <Filter filter={this.filter} />}
        <Card.Group>
          {products.products && this.renderProducts(products.products)}
        </Card.Group>
        {products.sublevels &&
          products.sublevels.map(sublevel => {
            return (
              <SubSection
                filters={filters}
                addProduct={this.addProduct}
                key={sublevel.id}
                {...sublevel}
              />
            );
          })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.ProductsReducer.filtredProducts,
  categories: state.CategoriesReducer.menu,
  filtredProducts: state.ProductsReducer.filtredProducts
});

const mapDispatchToProps = dispacth => {
  return {
    setActiveSection: (id, isSublevel) => {
      dispacth(ProductsAction.setActiveSection(id, isSublevel));
    },
    filtredProducts: () => {
      dispacth(ProductsAction.filterProductsStart());
    },
    addProductToCart: product => {
      dispacth(CartActions.addToCart(product));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Section);
