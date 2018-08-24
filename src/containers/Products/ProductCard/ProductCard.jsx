import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import ProductCard from '../../../components/Products/ProductCard';
import styles from '../../../components/Products/ProductCard/ProductCard.styles';
import { SELECTED_FILTERS_KEY } from '../../../reducers/filters';

class ProductCardContainer extends React.Component {
  constructor(props) {
    super(props);
    const { variants } = this.props;
    this.state = {
      isHovered: false,
      activeVariant: variants[0]
    };
  }

  static getDerivedStateFromProps(props, state) {
    const { prevColors } = state;
    const { variants, selectedFilters: { colors } } = props;
    if (colors && colors.length > 0 && colors !== prevColors) {
      const intersection = variants.filter(({ color }) => colors.includes(color));
      return {
        activeVariant: intersection[intersection.length - 1],
        prevColors: colors
      };
    }
    return null;
  }

  handleMouseEnter = state => () => {
    this.setState({ isHovered: state });
  }

  setActiveVariant = variant => this.setState({ activeVariant: variant })

  handleVariantClick = variant => () => {
    this.setActiveVariant(variant);
  }

  render() {
    const { activeVariant, isHovered } = this.state;
    return (
      <ProductCard
        {...this.props}
        isHovered={isHovered}
        activeVariant={activeVariant}
        onVariantClick={this.handleVariantClick}
        onMouseEnter={this.handleMouseEnter}
      />);
  }
}

const mapStateToProps = ({ filtersReducer }) => ({
  selectedFilters: filtersReducer[SELECTED_FILTERS_KEY]
});

export default withStyles(styles)(
  connect(mapStateToProps)(ProductCardContainer)
);