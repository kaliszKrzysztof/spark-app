import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ProductImage from '../../../components/Products/ProductImage';
import ProductImageStyles from '../../../components/Products/ProductImage/ProductImage.styles';

class ProductImageContainer extends React.Component {
  state = {
    isLoaded: false,
    imageStatus: '',
    loadedImages: []
  }

  componentWillReceiveProps(nextProps) {
    const { loadedImages } = this.state;
    if (loadedImages.indexOf(nextProps.src) === -1) {
      this.setState({
        isLoaded: false
      });
    }
  }

  handleLoad = () => {
    const { timeout, src } = this.props;
    const { isLoaded } = this.state;
    if (!isLoaded) {
      setTimeout(() => {
        this.setState(prevState => ({
          isLoaded: true,
          loadedImages: [...prevState.loadedImages, src]
        }));
      }, timeout);
    }
  }

  handleError = () => {
    this.setState({
      imageStatus: 'Failed to load',
      isLoaded: false
    });
  }

  render() {
    const { isLoaded, imageStatus } = this.state;
    const {
      classes, alt, src, isHovered
    } = this.props;
    return (
      <ProductImage
        classes={classes}
        alt={alt}
        src={src}
        onLoad={this.handleLoad}
        onError={this.handleError}
        imageStatus={imageStatus}
        isLoaded={isLoaded}
        isHovered={isHovered}
      />
    );
  }
}

ProductImageContainer.defaultProps = {
  timeout: 500
};

export default withStyles(ProductImageStyles)(ProductImageContainer);