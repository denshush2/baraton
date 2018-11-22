import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import { connect } from "react-redux";
import Product from "../Product/Product";
import CartActions from "../../store/modules/cart/actions";
class Subsection extends Component {
  componentDidMount() {
    console.log(this);
  }
  addProduct = product => {
    this.props.addProductToCart(product);
    console.log("Add Product", product);
  };
  render() {
    const { name, products, sublevels } = this.props;
    return (
      <>
        <h3>{name}</h3>
        <Card.Group>
          {products.map(item => {
            return (
              <Product key={item.id} addProduct={this.addProduct} {...item} />
            );
          })}
        </Card.Group>
      </>
    );
  }
}
const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return {
    addProductToCart(product) {
      dispatch(CartActions.addToCart(product));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Subsection);
