import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Menu, Sidebar } from "semantic-ui-react";
import CategoriesActions from "../../store/modules/categories/actions";
import ProductsActions from "../../store/modules/products/actions";
import { Treebeard } from "react-treebeard";
// import SideBarItem from "../SideBarItem/SideBarItem";

// import SideBarItem from "../SideBarItem/SideBarItem";

export class SideBar extends React.Component {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    toggleSideBar: PropTypes.func.isRequired,
    routes: PropTypes.object.isRequired
  };
  state = {
    visible: true,
    active: null,
    tree: this.props.menu
  };
  componentDidMount() {
    this.props.loadCategories();
  }
  clickSection = () => {
    console.log("clicked");
  };
  onToggle = (node, toggled) => {
    if (this.state.cursor) {
      this.state.cursor.active = false;
    }
    node.active = true;
    if (node.children) {
      node.toggled = toggled;
    }
    this.setState({ cursor: node });
    console.log("PUSH", node);
    this.props.setActiveSection(node.id, node.isSublevel);
    this.props.routes.push(`/${node.url}`, {
      id: node.id,
      name: node.name,
      isSublevel: node.isSublevel
    });
  };
  render() {
    const { isOpen, toggleSideBar, menu } = this.props;
    return (
      <Sidebar
        as={Menu}
        animation="overlay"
        icon="labeled"
        onHide={toggleSideBar}
        vertical
        visible={isOpen}
        width="thin"
      >
        <Treebeard
          onClick={this.clickSection}
          data={menu}
          onToggle={this.onToggle}
        />
        {/* <SideBarItem menu={this.state.menu} /> */}
        {/* <Accordion defaultActiveIndex={0} panels={menu} /> */}
        {/* {menu.map(item => {
          return (
            <Menu.Item key={item.id} as="a">
              {item.name}
              {/* .toLocaleLowerCase()
          .split(" ")
          .join("_"); 
            </Menu.Item>
          );
        })} */}
      </Sidebar>
    );
  }
}

const mapStateToProps = state => ({
  menu: state.CategoriesReducer.menu
});

const mapDispatchToProps = dispacth => {
  return {
    loadCategories: () => {
      dispacth(CategoriesActions.loadCategories());
    },
    setActiveSection: (id, sublevel) => {
      dispacth(ProductsActions.setActiveSection(id, sublevel));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBar);
