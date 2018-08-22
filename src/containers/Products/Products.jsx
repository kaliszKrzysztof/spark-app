import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Products from '../../components/Products';
import styles from '../../components/Products/Products.styles';
import { PRODUCTS_KEY } from '../../reducers/products';

const mapStateToProps = ({ productsReducer }) => ({ products: productsReducer[PRODUCTS_KEY] });

export default withStyles(styles)(
  connect(mapStateToProps)(Products)
);