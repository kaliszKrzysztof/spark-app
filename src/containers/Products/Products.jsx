import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Products from '../../components/Products';
import styles from '../../components/Products/Products.styles';
import { PRODUCTS_FETCHING_KEY, PRODUCTS_ERROR_KEY } from '../../reducers/products';
import { getFilteredProducts } from '../../selectors/products';

const mapStateToProps = ({ productsReducer, filtersReducer }) => ({
  products: getFilteredProducts({ productsReducer, filtersReducer }),
  isFetching: productsReducer[PRODUCTS_FETCHING_KEY],
  error: productsReducer[PRODUCTS_ERROR_KEY],
});

export default withStyles(styles)(
  connect(mapStateToProps)(Products)
);