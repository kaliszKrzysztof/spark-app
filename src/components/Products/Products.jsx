import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Loader from '../../containers/Loader';
import ProductCard from '../../containers/Products/ProductCard';

const Products = ({
  products: { data, isFetching }
}) => {
  if (isFetching) {
    return <Loader size={50} />;
  }
  if (data.length === 0) {
    return <span>Products list is empty</span>;
  }
  return (
    <Grid container spacing={24}>
      {data.map(product => (
        <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
          <ProductCard {...product} />
        </Grid>
      ))}
    </Grid>
  );
};

Products.propTypes = {
  products: PropTypes.shape({
    data: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.string
  }).isRequired
};

export default Products;