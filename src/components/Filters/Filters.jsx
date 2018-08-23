import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import map from 'lodash/map';
import FiltersItem from '../../containers/Filters/FiltersItem';
import SelectedFilters from '../../containers/Filters/SelectedFilters';

const Filters = ({ availableFilters, classes }) => (
  <div className={classes.root}>
    <Paper elevation={0} className={classes.paper}>
      {map(availableFilters, (filters, key) => (
        <FiltersItem
          key={key}
          elements={filters}
          id={key}
          name={key}
        />))}
    </Paper>
    <SelectedFilters />
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