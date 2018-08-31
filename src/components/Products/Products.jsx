import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Filters from '../../containers/Filters';
import Overlay from '../../containers/Overlay';
import ProductCard from '../../containers/Products/ProductCard';

const Products = ({
  products, isFetching, classes
}) => (
  <Grid container spacing={24}>
    {isFetching && <Overlay size={50} positionAbsolute={!!(products.length)} />}
    <Grid item xs={12}>
      <Filters />
    </Grid>
    {products.length === 0 && !isFetching
      ? <Typography className={classes.emptyList} variant="headline">Products list is empty</Typography>
      : products.map(product => (
        <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
          <ProductCard {...product} />
        </Grid>
      ))}
  </Grid>
);

Products.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  isFetching: PropTypes.bool.isRequired,
  classes: PropTypes.shape({
    emptyList: PropTypes.string.isRequired
  }).isRequired
};

export default Products;