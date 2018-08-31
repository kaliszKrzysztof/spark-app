import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import map from 'lodash/map';
import FiltersItem from '../../containers/Filters/FiltersItem';
import SelectedFilters from '../../containers/Filters/SelectedFilters';

const Filters = ({ availableFilters, classes, onChangeFilter }) => (
  <div className={classes.root}>
    <Paper elevation={0} className={classes.paper}>
      {map(availableFilters, (filters, key) => (
        <FiltersItem
          onChangeFilter={onChangeFilter}
          key={key}
          elements={filters}
          id={key}
          name={key}
        />))}
    </Paper>
    <SelectedFilters onChangeFilter={onChangeFilter} />
  </div>
);

Filters.propTypes = {
  availableFilters: PropTypes.shape({}).isRequired,
  classes: PropTypes.shape({
    root: PropTypes.string.isRequired,
    paper: PropTypes.string.isRequired
  }).isRequired
};

export default Filters;