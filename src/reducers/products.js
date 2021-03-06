import {
  PRODUCTS_FETCH_REQUEST,
  PRODUCTS_FETCH_SUCCESS,
  PRODUCTS_FETCH_ERROR,
  CLEAR_PRODUCTS
} from '../actions/products';

export const PRODUCTS_KEY = 'products';
export const PRODUCTS_FETCHING_KEY = 'isFetching';
export const PRODUCTS_ERROR_KEY = 'error';

const defaultState = {
  [PRODUCTS_KEY]: [],
  [PRODUCTS_FETCHING_KEY]: false,
  [PRODUCTS_ERROR_KEY]: ''
};

const productsReducer = (state = defaultState, { type, payload, error }) => {
  switch (type) {
    case PRODUCTS_FETCH_REQUEST:
      return {
        ...state,
        [PRODUCTS_FETCHING_KEY]: true
      };
    case PRODUCTS_FETCH_SUCCESS:
      return {
        ...state,
        [PRODUCTS_KEY]: payload,
        [PRODUCTS_FETCHING_KEY]: false
      };
    case PRODUCTS_FETCH_ERROR:
      return {
        ...state,
        [PRODUCTS_ERROR_KEY]: error,
        [PRODUCTS_FETCHING_KEY]: false
      };
    case CLEAR_PRODUCTS:
      return {
        ...defaultState
      };
    default:
      return state;
  }
};

export default productsReducer;