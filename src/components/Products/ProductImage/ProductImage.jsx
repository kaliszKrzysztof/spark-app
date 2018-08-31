import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Overlay from '../../../containers/Overlay';

const ProductImage = ({
  alt,
  src,
  onLoad,
  onError,
  isHovered,
  isLoaded,
  classes
}) => (
  <div>
    {!isLoaded && (
      <div className={classes.isLoading}>
        <Overlay />
      </div>
    )}
    <img
      className={classNames(classes.image,
        isHovered && classes.hoveredImage,
        !isLoaded && classes.hidden)}
      alt={alt}
      src={src}
      onLoad={onLoad}
      onError={onError}
    />
  </div>
);

ProductImage.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  isHovered: PropTypes.bool,
  classes: PropTypes.shape({
    image: PropTypes.string.isRequired,
    hoveredImage: PropTypes.string.isRequired
  }).isRequired,
  // func
  onLoad: PropTypes.func.isRequired,
  onError: PropTypes.func.isRequired,
};

ProductImage.defaultProps = {
  isHovered: false
};

export default ProductImage;