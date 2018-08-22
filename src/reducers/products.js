import {
  PRODUCTS_FETCH_REQUEST,
  PRODUCTS_FETCH_SUCCESS,
  PRODUCTS_FETCH_ERROR
} from '../actions/products';

export const PRODUCTS_KEY = 'products';
export const PRODUCTS_DATA_KEY = 'data';
export const PRODUCTS_FETCHING_KEY = 'isFetching';
export const PRODUCTS_ERROR_KEY = 'error';

const defaultState = {
  [PRODUCTS_KEY]: {
    [PRODUCTS_DATA_KEY]: [],
    [PRODUCTS_FETCHING_KEY]: false,
    [PRODUCTS_ERROR_KEY]: ''
  }
};

const productsReducer = (state = defaultState, { type, payload, error }) => {
  switch (type) {
    case PRODUCTS_FETCH_REQUEST:
      return {
        ...state,
        [PRODUCTS_KEY]: {
          ...state[PRODUCTS_KEY],
          [PRODUCTS_FETCHING_KEY]: true
        }
      };
    case PRODUCTS_FETCH_SUCCESS:
      return {
        ...state,
        [PRODUCTS_KEY]: {
          ...state[PRODUCTS_KEY],
          [PRODUCTS_DATA_KEY]: payload,
          [PRODUCTS_FETCHING_KEY]: false
        }
      };
    case PRODUCTS_FETCH_ERROR:
      return {
        ...state,
        [PRODUCTS_KEY]: {
          ...state[PRODUCTS_KEY],
          [PRODUCTS_ERROR_KEY]: error,
          [PRODUCTS_FETCHING_KEY]: false
        }
      };
    default:
      return state;
  }
};

export default productsReducer;