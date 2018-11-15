import React, { Component } from "react";
import { connect } from "react-redux";

import actions from "../../store/actions";
import NavBar from "../NavBar/NavBar";
import SideBar from "../SideBar/SideBar";

class Home extends Component {
  componentDidMount() {
    console.log("mounted", this);
  }
  state = {
    sideBarOpen: false
  };
  // trigger = () => {
  //   this.props.setLoading(!this.props.store.loading);
  // };
  toggleSideBar = () => {
    console.log("asdasd");
    // this.state.sideBarOpen = !this.state.sideBarOpen;
  };
  render() {
    return (
      <>
        <NavBar toggleSideBar={this.toggleSideBar} />
        <SideBar isOpen={this.state.sideBarOpen} />
        <p>
          {this.props.store.loading ? (
            <span>Loading</span>
          ) : (
            <span>loaded</span>
          )}
        </p>
        <button onClick={this.trigger}>change</button>
      </>
    );
  }
}
export default connect(
  state => ({
    store: state
  }),
  dispatch => ({
    setLoading() {
      dispatch(actions.loading(true));
    }
  })
)(Home);
