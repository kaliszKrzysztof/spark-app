import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import classNames from 'classnames';
import { productImages } from '../../../data/images';

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    const { variants, activeColorId } = this.props;
    this.state = {
      activeVariant: activeColorId ? variants[activeColorId] : variants[0],
      isHovered: false
    };
  }

  handleVariantClick = variant => () => {
    this.setState({
      activeVariant: variant
    });
  }

  handleMouseEnter = state => () => {
    this.setState({ isHovered: state });
  }

  renderActiveImage = () => {
    const {
      id,
      classes
    } = this.props;
    const { activeVariant, isHovered } = this.state;
    try {
      const image = activeVariant.img || productImages[`${id}_${activeVariant.id}`];
      return <img className={classNames(classes.image, isHovered && classes.hoveredImage)} src={image} alt={activeVariant.name} />;
    } catch (e) {
      return null;
    }
  }

  render() {
    const {
      brand_name: brandName,
      variants,
      classes
    } = this.props;
    const { activeVariant } = this.state;
    return (
      <div className={classes.root}>
        <Paper
          onMouseEnter={this.handleMouseEnter(true)}
          onMouseLeave={this.handleMouseEnter(false)}
          className={classes.paper}
          elevation={0}
        >
          <Typography classes={{ subheading: classes.subheading }} variant="subheading" component="h4" color="inherit">
            {brandName}
          </Typography>
          {this.renderActiveImage()}
          <Typography classes={{ body1: classes.body1 }} component="p" color="inherit">
            {activeVariant.name}
          </Typography>
          <Typography className={classes.productPrice} classes={{ body1: classes.body1 }} component="p" color="inherit">
            {`${activeVariant.price}$`}
          </Typography>
          <div className={classes.colorButtons}>
            {variants.map(variant => (
              <Tooltip key={variant.id} title={variant.color} disableTouchListener disableFocusListener>
                <Button
                  style={{ backgroundImage: `url(${variant.img})` }}
                  onClick={this.handleVariantClick(variant)}
                  variant="fab"
                  mini
                  aria-label={variant.name}
                  className={classNames(
                    classes.button,
                    activeVariant.id !== variant.id && classes.inactiveIcon
                  )}
                >
                  <Typography className={classes.hidden}>{variant.color}</Typography>
                </Button>
              </Tooltip>
            ))}
          </div>
        </Paper>
      </div>
    );
  }
}

ProductCard.propTypes = {
  brand_name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  variants: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ProductCard;