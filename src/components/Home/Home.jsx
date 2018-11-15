import React, { Component } from "react";
import { connect } from "react-redux";

import actions from "../../store/actions";

class Home extends Component {
  componentDidMount() {
    console.log("mounted", this);
  }
  trigger = () => {
    this.props.setLoading(!this.props.store.loading);
  };
  render() {
    return (
      <div>
        <p>
          {this.props.store.loading ? (
            <span>Loading</span>
          ) : (
            <span>loaded</span>
          )}
        </p>
        <button onClick={this.trigger}>change</button>
      </div>
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
