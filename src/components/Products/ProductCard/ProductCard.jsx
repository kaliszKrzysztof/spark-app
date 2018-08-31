import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import classNames from 'classnames';
import { colors } from '../../../data/colors';
import ProductImage from '../../../containers/Products/ProductImage';

const ProductCard = ({
  activeVariant,
  isHovered,
  variants,
  brand_name: brandName,
  classes,
  onVariantClick,
  onMouseEnter
}) => (
  <div className={classes.root}>
    <Paper
      onMouseEnter={onMouseEnter(true)}
      onMouseLeave={onMouseEnter(false)}
      className={classes.paper}
      elevation={0}
    >
      <Typography classes={{ subheading: classes.subheading }} variant="subheading" component="h4" color="inherit">
        {brandName}
      </Typography>
      <ProductImage
        timeout={500}
        src={activeVariant.img}
        alt={activeVariant.name}
        isHovered={isHovered}
      />
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
              style={{ backgroundColor: colors[variant.color] }}
              onClick={onVariantClick(variant)}
              variant="fab"
              mini
              aria-label={variant.name}
              className={classNames(
                classes.button,
                activeVariant.id === variant.id && classes.activeIcon
              )}
            >
              <Typography className={classes.hidden}>{variant.color}</Typography>
            </Button>
          </Tooltip>
        ))}
      </div>
      <Button variant="raised" className={classes.addToCart}>Add to Cart</Button>
    </Paper>
  </div>
);

ProductCard.propTypes = {
  brand_name: PropTypes.string.isRequired,
  activeVariant: PropTypes.shape({}).isRequired,
  isHovered: PropTypes.bool.isRequired,
  variants: PropTypes.arrayOf(PropTypes.object).isRequired,
  classes: PropTypes.shape({
    root: PropTypes.string.isRequired,
    paper: PropTypes.string.isRequired,
    subheading: PropTypes.string.isRequired,
    productPrice: PropTypes.string.isRequired,
    body1: PropTypes.string.isRequired,
    colorButtons: PropTypes.string.isRequired,
    activeIcon: PropTypes.string.isRequired,
    hidden: PropTypes.string.isRequired,
    addToCart: PropTypes.string.isRequired,
  }).isRequired,
  onVariantClick: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
};

export default ProductCard;