import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import SelectedFilters from '../../../components/Filters/SelectedFilters';
import styles from '../../../components/Filters/SelectedFilters/SelectedFilters.styles';
import { clearFilters, toggleFilter } from '../../../actions/filters';
import { SELECTED_FILTERS_KEY } from '../../../reducers/filters';

const mapStateToProps = ({ filtersReducer }) => ({
  selectedElements: filtersReducer[SELECTED_FILTERS_KEY]
});

const mapDispatchToProps = dispatch => bindActionCreators({
  clearFilters,
  toggleFilter
}, dispatch);

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(SelectedFilters)
);