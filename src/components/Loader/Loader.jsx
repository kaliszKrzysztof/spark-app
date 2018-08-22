import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';


const Loader = ({ classes, size }) => (
  <div className={classes.root}>
    <CircularProgress className={classes.progress} size={size} />
  </div>
);

Loader.propTypes = {
  size: PropTypes.number,
  classes: PropTypes.shape({
    root: PropTypes.string.isRequired,
    progress: PropTypes.string.isRequired
  }).isRequired
};

Loader.defaultProps = {
  size: 50
};

export default Loader;