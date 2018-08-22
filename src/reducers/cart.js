import {
  CART_OPEN,
  CART_CLOSE,
} from '../actions/cart';

export const CART_OPEN_KEY = 'open';

const defaultState = {
  [CART_OPEN_KEY]: false
};

const cartReducer = (state = defaultState, { type }) => {
  switch (type) {
    case CART_OPEN:
      return { ...state, [CART_OPEN_KEY]: true };
    case CART_CLOSE:
      return { ...state, [CART_OPEN_KEY]: false };
    default:
      return state;
  }
};

export default cartReducer;