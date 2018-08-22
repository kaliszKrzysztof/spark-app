import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import WishList from '../../components/WishList';
import styles from '../../components/WishList/WishList.styles';

const mapStateToProps = state => ({});

export default withStyles(styles)(
  connect(mapStateToProps)(WishList)
);