import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Card, Label } from "semantic-ui-react";

export default class Product extends Component {
  static propTypes = {
    quantity: PropTypes.number.isRequired,
    price: PropTypes.string.isRequired,
    available: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    addProduct: PropTypes.func.isRequired
  };
  render() {
    const { quantity, id, price, available, addProduct, name } = this.props;
    return (
      <>
        <Card>
          <Card.Content>
            <Card.Header>{name}</Card.Header>
            <Card.Meta color="green">
              {available === true ? (
                <Label color="green">Is available({quantity})</Label>
              ) : (
                <Label color="yellow">Not available</Label>
              )}
            </Card.Meta>
            <Card.Description>
              Steve wants to add you to the group <strong>best friends</strong>
            </Card.Description>
          </Card.Content>
          {available === true && (
            <Card.Content extra>
              <div className="ui two buttons">
                <Button
                  basic
                  onClick={() => {
                    addProduct({ name: name, id: id, price: price });
                  }}
                  color="green"
                >
                  Add
                </Button>
              </div>
            </Card.Content>
          )}
        </Card>
      </>
    );
  }
}
