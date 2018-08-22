import React from 'react';
import PropTypes from 'prop-types';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

const Cart = ({ open, openCart, closeCart }) => (
  <SwipeableDrawer
    anchor="right"
    open={open}
    onClose={closeCart}
    onOpen={openCart}
  >
    <div
      tabIndex={0}
      role="button"
      onClick={closeCart}
      onKeyDown={closeCart}
    >
      Cart
    </div>
  </SwipeableDrawer>
);

Cart.propTypes = {
  openCart: PropTypes.func.isRequired,
  closeCart: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
};

export default Cart;