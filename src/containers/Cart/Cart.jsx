import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import Cart from '../../components/Cart';
import styles from '../../components/Cart/Cart.styles';
import { openCart, closeCart } from '../../actions/cart';
import { CART_OPEN_KEY } from '../../reducers/cart';

const mapStateToProps = ({ cartReducer }) => ({ open: cartReducer[CART_OPEN_KEY] });

const mapDispatchToProps = dispatch => bindActionCreators({
  openCart,
  closeCart
}, dispatch);

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(Cart)
);