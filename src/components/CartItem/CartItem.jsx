import React, { Component } from "react";
import { Item, Button } from "semantic-ui-react";
import "./styles.scss";

export default class CartItem extends Component {
  componentDidMount() {
    console.log(this);
  }
  render() {
    const {
      id,
      name,
      removeProduct,
      addOne,
      deleteOne,
      price,
      quantity
    } = this.props;
    return (
      <>
        <Item>
          <Item.Content>
            <Item.Header>{name}</Item.Header>
            <Item.Content>
              Price: {price},<br /> quantity: {quantity}
              <div>
                <Button
                  onClick={() => {
                    deleteOne(id);
                  }}
                  disabled={quantity === 1}
                  color="red"
                  basic
                  attached="left"
                >
                  -
                </Button>
                <Button
                  onClick={() => {
                    addOne(id);
                  }}
                  color="green"
                  basic
                  attached="right"
                >
                  +
                </Button>
                <Button
                  onClick={() => {
                    removeProduct(id);
                  }}
                  color="red"
                >
                  Remove
                </Button>
              </div>
            </Item.Content>
          </Item.Content>
        </Item>
      </>
    );
  }
}
