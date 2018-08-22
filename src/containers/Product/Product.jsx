import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Product from '../../components/Product';
import styles from '../../components/Product/Product.styles';

const mapStateToProps = state => ({});

export default withStyles(styles)(
  connect(mapStateToProps)(Product)
);