import { getFilteredProducts } from './products';
import { SELECTED_FILTERS_KEY } from '../reducers/filters';
import { PRODUCTS_KEY } from '../reducers/products';
import productsData from '../data/products';

describe('products selector', () => {
  it('expect to return product list if no filter selected', () => {
    const mockParameters = {
      filtersReducer: {
        [SELECTED_FILTERS_KEY]: {}
      },
      productsReducer: {
        [PRODUCTS_KEY]: []
      }
    };
    const products = getFilteredProducts.resultFunc(
      mockParameters.productsReducer[PRODUCTS_KEY],
      mockParameters.filtersReducer[SELECTED_FILTERS_KEY]
    );
    expect(products).toEqual(mockParameters.productsReducer[PRODUCTS_KEY]);
  });
  it('expect to return product with Round shape', () => {
    const mockParameters = {
      filtersReducer: {
        [SELECTED_FILTERS_KEY]: {
          shape: ['Round']
        }
      },
      productsReducer: {
        [PRODUCTS_KEY]: productsData
      }
    };
    const products = getFilteredProducts.resultFunc(
      mockParameters.productsReducer[PRODUCTS_KEY],
      mockParameters.filtersReducer[SELECTED_FILTERS_KEY]
    );
    expect(products.length).toEqual(3);
  });
  it('expect to return product with Round shape and blue color', () => {
    const mockParameters = {
      filtersReducer: {
        [SELECTED_FILTERS_KEY]: {
          shape: ['Round'],
          colors: ['blue']
        }
      },
      productsReducer: {
        [PRODUCTS_KEY]: productsData
      }
    };
    const products = getFilteredProducts.resultFunc(
      mockParameters.productsReducer[PRODUCTS_KEY],
      mockParameters.filtersReducer[SELECTED_FILTERS_KEY]
    );
    expect(products.length).toEqual(2);
  });
});