import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import { connect } from "react-redux";
import Product from "../Product/Product";
import CartActions from "../../store/modules/cart/actions";
class Subsection extends Component {
  componentDidMount() {
    console.log(this);
  }
  componentDidUpdate() {
    console.log("SUBSECTION UPDATE");
  }
  renderProducts = products => {
    if (
      this.props.filters.inStock === null &&
      this.props.filters.priceFrom === 0 &&
      this.props.filters.priceTo === 20000 &&
      this.props.filters.inStockFrom === 0 &&
      this.props.filters.inStockTo === 1000
    ) {
      return products.map(product => {
        return (
          <Product
            key={product.id}
            addProduct={this.props.addProduct}
            {...product}
          />
        );
      });
    } else {
      const filtered = products.filter(product => {
        console.log(this.props.filters.inStock, product);
        let price = parseFloat(product.price.substr(1).replace(",", "."));
        if (
          this.props.filters.inStock === product.available &&
          this.props.filters.priceTo > price &&
          this.props.filters.priceFrom < price &&
          this.props.filters.inStockTo > product.quantity &&
          this.props.filters.inStockFrom < product.quantity
        ) {
          console.log("FIND");
          return product;
        }
      });
      console.log("FILTEREd", filtered);
      return filtered.map(product => {
        return (
          <Product key={product.id} addProduct={this.addProduct} {...product} />
        );
      });
    }
  };
  render() {
    const {
      name,
      renderProducts,
      products,
      sublevels,
      addProduct
    } = this.props;
    return (
      <>
        <h3>{name}</h3>
        <Card.Group>
          {this.renderProducts(products)}
          {/* {products.map(item => {
            return <Product key={item.id} addProduct={addProduct} {...item} />;
          })} */}
        </Card.Group>
      </>
    );
  }
}
const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Subsection);
