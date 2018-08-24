import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import MenuDrawer from '../../../components/App/MenuDrawer';
import styles from '../../../components/App/MenuDrawer/MenuDrawer.styles';
import { closeMenu } from '../../../actions/layout';
import { MENU_OPEN_KEY } from '../../../reducers/layout';

const mapStateToProps = ({ layoutReducer }) => ({ open: layoutReducer[MENU_OPEN_KEY] });

const mapDispatchToProps = dispatch => bindActionCreators({ closeMenu }, dispatch);

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps, null, { pure: false })(MenuDrawer)
);