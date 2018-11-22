import React, { Component } from "react";
// import PropTypes from "prop-types";
import { connect } from "react-redux";
import ProductsAction from "../../store/modules/products/actions";
import SubSection from "../Subsection/Subsection";

export class Section extends Component {
  static propTypes = {
    // prop: PropTypes
  };
  componentDidMount() {
    console.log(this);
    const sectionFind = this.findCategoryName(this.props.categories);
    console.log("sectionfind", this);
    this.props.setActiveSection(
      this.props.location.state.id,
      this.props.location.state.isSublevel
    );
  }
  componentWillUnmount() {}
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("UPDATE", prevProps, prevState, snapshot);
    if (prevProps.location.pathname === this.props.location.pathname) {
      console.log("component not updade path");
    } else {
      const filters = [];
      this.props.filtredProducts();
    }
  }
  findCategoryName = categories => {
    for (let i = 0; i < categories.length; i++) {
      if (categories[i].name === this.props.match.params.section) {
        return true;
      }
    }
    return false;
  };
  render() {
    const { products } = this.props;
    return (
      <div>
        <h1>Section {products.name}</h1>
        {products.sublevels &&
          products.sublevels.map((sublevel, index) => {
            return <SubSection key={sublevel.id} {...sublevel} />;
          })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.ProductsReducer.filtredProducts,
  categories: state.CategoriesReducer.menu,
  filtredProducts: state.ProductsReducer.filtredProducts
});

const mapDispatchToProps = dispacth => {
  return {
    setActiveSection: (id, isSublevel) => {
      dispacth(ProductsAction.setActiveSection(id, isSublevel));
    },
    filtredProducts: () => {
      dispacth(ProductsAction.filterProductsStart());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Section);
