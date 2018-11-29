import React, { Component } from "react";
import PropTypes from "prop-types";
import { Form, Dropdown } from "semantic-ui-react";
import { Slider } from "react-semantic-ui-range";
export default class Filter extends Component {
  static propTypes = {
    prop: PropTypes
  };
  state = {
    priceRange: 1,
    inStock: [
      {
        key: "all",
        text: "All",
        value: null
      },
      {
        key: "In Stock",
        text: "In Stock",
        value: true
      },
      {
        key: "Out of Stock",
        text: "Out of Stock",
        value: false
      }
    ],
    priceFrom: [
      {
        key: "0",
        text: "0",
        value: 0
      },
      {
        key: "5",
        text: "5,000",
        value: 5
      },
      {
        key: "10",
        text: "10,000",
        value: 10000
      },
      {
        key: "20",
        text: "20,000",
        value: 20000
      }
    ],
    priceTo: [
      {
        key: "0",
        text: "0",
        value: 0
      },
      {
        key: "5",
        text: "5,000",
        value: 5
      },
      {
        key: "10",
        text: "10,000",
        value: 10000
      },
      {
        key: "20",
        text: "20,000",
        value: 20000
      }
    ],
    inStockFrom: [
      {
        key: "0",
        text: "0",
        value: 0
      },
      {
        key: "250",
        text: "250",
        value: 250
      },
      {
        key: "500",
        text: "500",
        value: 500
      },
      {
        key: "1000",
        text: "1000",
        value: 1000
      }
    ],
    inStockTo: [
      {
        key: "0",
        text: "0",
        value: 0
      },
      {
        key: "250",
        text: "250",
        value: 250
      },
      {
        key: "500",
        text: "500",
        value: 500
      },
      {
        key: "1000",
        text: "1000",
        value: 1000
      }
    ]
  };
  render() {
    const { inStock, priceFrom, priceTo, inStockTo, inStockFrom } = this.state;
    const { filter } = this.props;
    return (
      <>
        <h3>Filters</h3>
        <Form>
          <Form.Field>
            <b>In Stock</b>
            <Dropdown
              name="inStock"
              onChange={(e, { name, value }) => {
                filter(name, value);
              }}
              placeholder=""
              options={inStock}
            />
          </Form.Field>
          <Form.Field>
            <b>Price from</b>
            <Dropdown
              name="priceFrom"
              onChange={(e, { name, value }) => {
                filter(name, value);
              }}
              placeholder=""
              options={priceFrom}
            />
            <b>Price To</b>
            <Dropdown
              name="priceTo"
              onChange={(e, { name, value }) => {
                filter(name, value);
              }}
              placeholder=""
              options={priceTo}
            />
          </Form.Field>
          <Form.Field>
            <b>In stock from</b>
            <Dropdown
              name="inStockFrom"
              onChange={(e, { name, value }) => {
                filter(name, value);
              }}
              placeholder=""
              options={inStockFrom}
            />
            <b>In stock To</b>
            <Dropdown
              name="inStockTo"
              onChange={(e, { name, value }) => {
                filter(name, value);
              }}
              placeholder=""
              options={inStockTo}
            />
          </Form.Field>
        </Form>
      </>
    );
  }
}
