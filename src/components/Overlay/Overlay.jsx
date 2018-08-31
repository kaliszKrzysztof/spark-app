import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Loader from '../../containers/Loader';

const Overlay = ({ classes, loaderSize, positionAbsolute }) => (
  <div className={classNames(classes.root, positionAbsolute && classes.positionAbsolute)}>
    <Loader size={loaderSize} />
  </div>
);

Overlay.propTypes = {
  loaderSize: PropTypes.number,
  positionAbsolute: PropTypes.bool,
  classes: PropTypes.shape({
    root: PropTypes.string.isRequired
  }).isRequired
};

Overlay.defaultProps = {
  loaderSize: 50,
  positionAbsolute: false
};

export default Overlay;