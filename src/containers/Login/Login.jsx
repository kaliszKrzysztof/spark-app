import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Login from '../../components/Login';
import styles from '../../components/Login/Login.styles';

const mapStateToProps = state => ({});

export default withStyles(styles)(
  connect(mapStateToProps)(Login)
);