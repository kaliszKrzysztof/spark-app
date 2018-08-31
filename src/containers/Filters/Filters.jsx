import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import qs from 'qs';
import { withStyles } from '@material-ui/core/styles';
import size from 'lodash/size';
import Filters from '../../components/Filters';
import styles from '../../components/Filters/Filters.styles';
import { AVAILABLE_FILTERS_KEY } from '../../reducers/filters';
import { toggleFilter } from '../../actions/filters';

class FiltersContainer extends React.Component {
  handleChangeFilter = (id, element, selected) => {
    const {
      toggleFilter, history, location: { pathname }
    } = this.props;
    const newSearch = qs.parse(history.location.search, { ignoreQueryPrefix: true });
    if (!newSearch[id]) {
      newSearch[id] = [];
    } else if (typeof newSearch[id] === 'string') {
      newSearch[id] = [newSearch[id]];
    }
    if (selected) {
      newSearch[id].push(element);
    } else {
      const toRemove = newSearch[id].indexOf(element);
      newSearch[id].splice(toRemove, 1);
    }
    history.push({
      pathname,
      search: qs.stringify(newSearch, { encode: false, arrayFormat: 'brackets' })
    });
    toggleFilter(id, element, selected);
  }

  render() {
    const { availableFilters, classes } = this.props;
    return size(availableFilters) > 0 && (
      <Filters
        availableFilters={availableFilters}
        onChangeFilter={this.handleChangeFilter}
        classes={classes}
      />
    );
  }
}

const mapStateToProps = ({ filtersReducer }) => ({
  availableFilters: filtersReducer[AVAILABLE_FILTERS_KEY],
});

const mapDispatchToProps = dispatch => bindActionCreators({
  toggleFilter
}, dispatch);

export default withStyles(styles)(
  withRouter(connect(mapStateToProps, mapDispatchToProps)(FiltersContainer))
);