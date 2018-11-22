import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Segment, Icon, Header } from "semantic-ui-react";

class NavBar extends React.Component {
  static propTypes = {
    toggleSideBar: PropTypes.func.isRequired,
    toggleCartBar: PropTypes.func.isRequired
  };
  handleToggle = () => {};
  render() {
    return (
      <>
        <Segment basic>
          <Header as="h3" floated="left">
            <Icon onClick={this.props.toggleSideBar} name="bars" />
            Baraton
          </Header>
          <Header as="h3" floated="right">
            <Icon onClick={this.props.toggleCartBar} name="cart" />
          </Header>
        </Segment>
      </>
    );
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
