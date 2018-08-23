import products from '../data/products';
import { generateFilterFromProducts } from './filters';

export const PRODUCTS_FETCH_REQUEST = 'PRODUCTS_FETCH_REQUEST';
export const productFetchRequest = () => ({ type: PRODUCTS_FETCH_REQUEST });

export const PRODUCTS_FETCH_SUCCESS = 'PRODUCTS_FETCH_SUCCESS';
export const productsFetchSuccess = payload => ({ type: PRODUCTS_FETCH_SUCCESS, payload });

export const PRODUCTS_FETCH_ERROR = 'PRODUCTS_FETCH_ERROR';
export const productsFetchError = error => ({ type: PRODUCTS_FETCH_ERROR, error });

export const startFetchProducts = (timeout = 500) => {
  const promise = new Promise(resolve => setTimeout(() => resolve({ data: products }), timeout));
  return (dispatch) => {
    dispatch(productFetchRequest());
    promise.then((response) => {
      dispatch(productsFetchSuccess(response.data));
      dispatch(generateFilterFromProducts(response.data));
      return response;
    }).catch(({ response }) => {
      dispatch(productsFetchError(response.data.message));
      return Promise.reject(response);
    });
  };
};
