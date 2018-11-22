import React, { Component } from "react";
import { Item, Button } from "semantic-ui-react";
import "./styles.scss";

export default class CartItem extends Component {
  componentDidMount() {
    console.log(this);
  }
  render() {
    const { id, name, addOne, removeOne, price, quantity } = this.props;
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
                    addOne(id);
                  }}
                  color="red"
                  basic
                  attached="left"
                >
                  -
                </Button>
                <Button
                  onClick={() => {
                    removeOne(id);
                  }}
                  color="green"
                  basic
                  attached="right"
                >
                  +
                </Button>
              </div>
            </Item.Content>
          </Item.Content>
        </Item>
      </>
    );
  }
}
