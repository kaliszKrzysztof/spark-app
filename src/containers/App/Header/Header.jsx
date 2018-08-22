import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import Header from '../../../components/App/Header';
import styles from '../../../components/App/Header/Header.styles';
import { openCart } from '../../../actions/cart';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({ openCart }, dispatch);

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps, null, { pure: false })(Header)
);