export const CART_OPEN = 'CART_OPEN';
export const CART_CLOSE = 'CART_CLOSE';

export const openCart = () => (dispatch) => {
  dispatch({ type: CART_OPEN });
};

export const closeCart = () => (dispatch) => {
  dispatch({ type: CART_CLOSE });
};