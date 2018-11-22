import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Sidebar, Menu, Item } from "semantic-ui-react";
import CartItem from "../CartItem/CartItem";
import "./styles.scss";

export class Cart extends Component {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    toggleCartBar: PropTypes.func.isRequired
  };
  addProductInCart = id => {};
  removeProductInCart = id => {};
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

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
