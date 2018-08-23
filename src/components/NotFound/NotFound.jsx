import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import logo from '../../data/images/logo.png';

const NotFound = ({ classes }) => (
  <div className={classes.root}>
    <div>
      <img className={classes.image} src={logo} alt="Spark App" />
    </div>
    <Typography classes={{ display1: classes.display1 }} variant="display1">Page not found</Typography>
  </div>
);

NotFound.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    display1: PropTypes.string.isRequired,
  }).isRequired
};

export default NotFound;