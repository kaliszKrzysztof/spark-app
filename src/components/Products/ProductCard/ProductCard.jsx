import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import { FaCheck } from 'react-icons/fa';
import { productImages } from '../../../data/images';

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    const { variants } = this.props;
    this.state = {
      activeVariant: variants[0]
    };
  }

  handleVariantClick = variant => () => {
    this.setState({
      activeVariant: variant
    });
  }

  renderActiveImage = () => {
    const {
      id,
      classes
    } = this.props;
    const { activeVariant } = this.state;
    try {
      const image = activeVariant.img || productImages[`${id}_${activeVariant.id}`];
      return <img className={classes.image} src={image} alt={activeVariant.name} />;
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
        <Paper className={classes.paper} elevation={0}>
          <Typography classes={{ subheading: classes.subheading }} variant="subheading" component="h4" color="inherit">
            {brandName}
          </Typography>
          {this.renderActiveImage()}
          <Typography component="p" color="inherit">
            {activeVariant.name}
          </Typography>
          <Typography classes={{ body1: classes.body1 }} component="p" color="inherit">
            {`${activeVariant.price}$`}
          </Typography>
          <div className={classes.colorButtons}>
            {variants.map(variant => (
              <Tooltip key={variant.id} title={variant.color}>
                <Button
                  style={{ backgroundImage: `url(${variant.img})` }}
                  onClick={this.handleVariantClick(variant)}
                  variant="fab"
                  mini
                  aria-label={variant.name}
                  className={classes.button}
                >
                  <FaCheck size={24} className={activeVariant.id === variant.id ? classes.activeIcon : classes.inactiveIcon} />
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