import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import map from 'lodash/map';
import { capitalizeFirstLetter } from '../../../services/helpers';

const SelectedFilters = ({
  selectedElements, onChangeFilter, classes
}) => (
  <Paper className={classes.paper} elevation={0}>
    {map(selectedElements, (values, key) => {
      if (values.length === 0) {
        return null;
      }
      return (
        <div key={key} id={key} className={classes.filters}>
          <Typography>{`${capitalizeFirstLetter(key)}:`}</Typography>
          {values.map(value => (
            <Chip
              key={value}
              label={capitalizeFirstLetter(value)}
              className={classes.chip}
              onDelete={() => onChangeFilter(key, value, false)}
            />))}
        </div>
      );
    })}
  </Paper>
);

SelectedFilters.propTypes = {
  selectedElements: PropTypes.shape({}).isRequired,
  onChangeFilter: PropTypes.func.isRequired,
  classes: PropTypes.shape({
    paper: PropTypes.string.isRequired,
    filters: PropTypes.string.isRequired,
    chip: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired
};

export default SelectedFilters;