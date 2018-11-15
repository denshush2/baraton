import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class NavBar extends React.Component {
  static propTypes = {
    toggleSideBar: PropTypes.func.isRequired
  };
  handleToggle = () => {
    console.log("toogle");
  };
  render() {
    return <></>;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
