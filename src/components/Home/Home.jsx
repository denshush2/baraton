import React, { Component } from "react";
import { connect } from "react-redux";
import { Sidebar, Segment, Dimmer, Loader } from "semantic-ui-react";
import { Route } from "react-router-dom";

import "./Home.scss";
import ProductsActions from "../../store/modules/products/actions";
import AppActions from "../../store/actions";
import NavBar from "../NavBar/NavBar";
import SideBar from "../SideBar/SideBar";
import Cart from "../Cart/Cart";
import Section from "../Section/Section";

class Home extends Component {
  componentDidMount() {
    console.log("mounted", this);
    this.props.getAllProducts();
  }
  state = {
    sideBarOpen: false,
    cartBarOpen: true
  };
  toggleSideBar = () => {
    this.setState({
      sideBarOpen: !this.state.sideBarOpen
    });
  };
  toggleCartBar = () => {
    this.setState({
      cartBarOpen: !this.state.cartBarOpen
    });
  };
  render() {
    const { sideBarOpen, cartBarOpen } = this.state;
    const { loading } = this.props;
    return (
      <>
        <Sidebar.Pushable as={Segment} className={"Home"}>
          <SideBar
            routes={this.props.history}
            isOpen={sideBarOpen}
            toggleSideBar={this.toggleSideBar}
          />
          <Cart isOpen={cartBarOpen} toggleCartBar={this.toggleCartBar} />
          <Sidebar.Pusher>
            <NavBar
              toggleSideBar={this.toggleSideBar}
              toggleCartBar={this.toggleCartBar}
            />
            {loading === true && (
              <Dimmer active>
                <Loader />
              </Dimmer>
            )}
            <Route path="/:section" render={props => <Section {...props} />} />
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </>
    );
  }
}
const mapStateToProps = state => ({
  products: state.ProductsReducer.products,
  loading: state.AppReducer.loading
});

const mapDispatchToProps = dispacth => {
  return {
    getAllProducts: () => {
      dispacth(ProductsActions.loadAllProducts());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
