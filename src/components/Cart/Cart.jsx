import React from 'react';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import { MdClose } from 'react-icons/md';

const Cart = ({
  open, openCart, closeCart, classes
}) => (
  <Drawer
    anchor="right"
    open={open}
    onClose={closeCart}
    onOpen={openCart}
  >
    <div className={classes.drawerHeader}>
      <IconButton onClick={closeCart}>
        <MdClose size={28} />
      </IconButton>
    </div>
    <Divider />
    <div className={classes.root}>
      <Typography>Your Cart is empty</Typography>
    </div>
  </Drawer>
);

Cart.propTypes = {
  openCart: PropTypes.func.isRequired,
  closeCart: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  classes: PropTypes.shape({
    root: PropTypes.string.isRequired,
    button: PropTypes.string.isRequired,
  }).isRequired
};

export default Cart;