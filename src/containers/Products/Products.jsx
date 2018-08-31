import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import qs from 'qs';
import { withStyles } from '@material-ui/core/styles';
import Products from '../../components/Products';
import styles from '../../components/Products/Products.styles';
import { startFetchProducts } from '../../actions/products';
import { generateFilterFromProducts, setActiveFilters } from '../../actions/filters';
import { PRODUCTS_FETCHING_KEY, PRODUCTS_ERROR_KEY, PRODUCTS_KEY } from '../../reducers/products';
import { SELECTED_FILTERS_KEY, LAST_ACTION_SOURCE_KEY, FILTER_ACTION_SOURCE } from '../../reducers/filters';


class ProductsContainer extends React.Component {
  componentDidMount() {
    const {
      startFetchProducts, generateFilterFromProducts, setActiveFilters, history
    } = this.props;
    const filters = qs.parse(history.location.search, { ignoreQueryPrefix: true });
    if (filters) {
      setActiveFilters(filters);
    }
    startFetchProducts(2000, filters).then((products) => {
      generateFilterFromProducts(products);
    });
  }

  componentDidUpdate(prevProps) {
    const { selectedFilters, startFetchProducts, lastAction } = this.props;
    if (prevProps.selectedFilters !== selectedFilters && lastAction === FILTER_ACTION_SOURCE.USER) {
      startFetchProducts(2000, selectedFilters);
    }
  }

  render() {
    const {
      products,
      isFetching,
      error,
      classes
    } = this.props;
    return (
      <Products
        products={products}
        isFetching={isFetching}
        error={error}
        classes={classes}
      />
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  startFetchProducts,
  generateFilterFromProducts,
  setActiveFilters
}, dispatch);

const mapStateToProps = ({ productsReducer, filtersReducer }) => ({
  products: productsReducer[PRODUCTS_KEY],
  isFetching: productsReducer[PRODUCTS_FETCHING_KEY],
  error: productsReducer[PRODUCTS_ERROR_KEY],
  selectedFilters: filtersReducer[SELECTED_FILTERS_KEY],
  lastAction: filtersReducer[LAST_ACTION_SOURCE_KEY]
});

export default withStyles(styles)(
  withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductsContainer))
);