import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import Header from '../../../components/App/Header';
import styles from '../../../components/App/Header/Header.styles';
import { openCart } from '../../../actions/cart';
import { openMenu } from '../../../actions/layout';

const mapDispatchToProps = dispatch => bindActionCreators({ openCart, openMenu }, dispatch);

export default withStyles(styles)(
  connect(null, mapDispatchToProps, null, { pure: false })(Header)
);