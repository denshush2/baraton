import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Sidebar, Menu, Item } from "semantic-ui-react";
import actions from "../../store/modules/cart/actions";
import CartItem from "../CartItem/CartItem";
import "./styles.scss";
import { parse } from "uri-js";

export class Cart extends Component {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    toggleCartBar: PropTypes.func.isRequired
  };
  addProductInCart = id => {
    this.props.addOne(id);
    this.forceUpdate();
  };
  componentDidMount() {
    let storage = JSON.parse(localStorage.getItem("Cart"));
    if (storage) {
      this.props.updateStore(storage);
    }
  }
  removeOneProductInCart = id => {
    this.props.removeOne(id);
    this.forceUpdate();
  };
  removeProductInCart = id => {
    this.props.removeProduct(id);
    this.forceUpdate();
  };
  componentDidUpdate() {
    console.log("update");
    localStorage.setItem("Cart", JSON.stringify(this.props.cartItems));
  }
  render() {
    const { isOpen, cartItems, toggleCartBar } = this.props;
    return (
      <>
        <Sidebar
          as={Menu}
          animation="overlay"
          icon="labeled"
          direction="right"
          onHide={toggleCartBar}
          vertical
          visible={isOpen}
          width="thin"
          className={"Cart"}
        >
          <Item.Group>
            <Item.Header>Cart</Item.Header>
            {cartItems.map(item => {
              return (
                <CartItem
                  key={item.id}
                  addOne={this.addProductInCart}
                  removeProduct={this.removeProductInCart}
                  deleteOne={this.removeProductInCart}
                  {...item}
                />
              );
            })}
          </Item.Group>

          {/* <Menu.Item as="a">
            <Icon name="home" />
            Cart
          </Menu.Item>
          <Menu.Item as="a">
            <Icon name="gamepad" />
            Games
          </Menu.Item>
          <Menu.Item as="a">
            <Icon name="camera" />
            Channels
          </Menu.Item> */}
        </Sidebar>
      </>
    );
  }
}

const mapStateToProps = state => ({
  cartItems: state.CartReducer.cart
});

const mapDispatchToProps = dispatch => {
  return {
    addOne: id => {
      dispatch(actions.addOneToCart(id));
    },
    removeOne: id => {
      dispatch(actions.deleteOneFromCart(id));
    },
    updateStore: store => {
      dispatch(actions.updateStore(store));
    },
    removeProduct: id => {
      dispatch(actions.removeProductFromCart(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
