import products from '../data/products';
import { getFilteredProducts } from '../selectors/products';
// import { PRODUCTS_KEY } from '../reducers/products';
import { SELECTED_FILTERS_KEY } from '../reducers/filters';

export const PRODUCTS_FETCH_REQUEST = 'PRODUCTS_FETCH_REQUEST';
export const productFetchRequest = () => ({ type: PRODUCTS_FETCH_REQUEST });

export const PRODUCTS_FETCH_SUCCESS = 'PRODUCTS_FETCH_SUCCESS';
export const productsFetchSuccess = payload => ({ type: PRODUCTS_FETCH_SUCCESS, payload });

export const PRODUCTS_FETCH_ERROR = 'PRODUCTS_FETCH_ERROR';
export const productsFetchError = error => ({ type: PRODUCTS_FETCH_ERROR, error });

export const CLEAR_PRODUCTS = 'CLEAR_PRODUCTS';
export const clearProducts = () => ({
  type: CLEAR_PRODUCTS
});

const fakeReq = (milliseconds, result) => new Promise((resolve) => {
  setTimeout(() => resolve(result), milliseconds);
});

export const startFetchProducts = (timeout = 500, selectedFilters) => {
  const req = fakeReq(timeout, { data: products });
  return (dispatch) => {
    dispatch(productFetchRequest());
    return req.then(({ data }) => {
      const filteredProducts = getFilteredProducts(
        { productsReducer: { products: data }, filtersReducer: { [SELECTED_FILTERS_KEY]: selectedFilters } }
      );
      dispatch(clearProducts());
      dispatch(productsFetchSuccess(filteredProducts));
      return data;
    }).catch(({ response }) => {
      dispatch(productsFetchError(response.data.message));
      return Promise.reject(response);
    });
  };
};
