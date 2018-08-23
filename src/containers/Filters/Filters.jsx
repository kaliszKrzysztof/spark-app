import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Filters from '../../components/Filters';
import styles from '../../components/Filters/Filters.styles';
import {
  AVAILABLE_FILTERS_KEY
} from '../../reducers/filters';

const mapStateToProps = ({ filtersReducer }) => ({
  availableFilters: filtersReducer[AVAILABLE_FILTERS_KEY],
});

export default withStyles(styles)(
  connect(mapStateToProps, null)(Filters)
);