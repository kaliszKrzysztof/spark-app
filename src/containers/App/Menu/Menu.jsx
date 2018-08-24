import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import Menu from '../../../components/App/Menu';
import styles from '../../../components/App/Menu/Menu.styles';
import { openCart } from '../../../actions/cart';

const mapDispatchToProps = dispatch => bindActionCreators({ openCart }, dispatch);

export default withStyles(styles)(
  connect(null, mapDispatchToProps, null, { pure: false })(Menu)
);