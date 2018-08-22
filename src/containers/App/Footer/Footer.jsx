import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Footer from '../../../components/App/Footer';
import styles from '../../../components/App/Footer/Footer.styles';

const mapStateToProps = state => ({});

export default withStyles(styles)(
  connect(mapStateToProps, null, null, { pure: false })(Footer)
);