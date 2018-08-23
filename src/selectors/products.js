import { createSelector } from 'reselect';
import map from 'lodash/map';
import { SELECTED_FILTERS_KEY } from '../reducers/filters';
import { PRODUCTS_KEY } from '../reducers/products';

const getSelectedFilters = state => state.filtersReducer[SELECTED_FILTERS_KEY];

const getProducts = state => state.productsReducer[PRODUCTS_KEY];

const allTrue = obj => Object.keys(obj).every(key => obj[key]);

const checkIfProductMatchFilters = (product, filters) => {
  const productMatchFilters = {};
  map(filters, (filterValues, key) => {
    const productValue = product[key];
    productMatchFilters[key] = false;
    if (!filterValues.length) {
      productMatchFilters[key] = true;
      return null;
    }
    productMatchFilters[key] = filterValues.some((value) => {
      if (typeof productValue === 'string') {
        return productValue === value;
      }
      if (Array.isArray(productValue)) {
        const index = productValue.indexOf(value);
        return index > -1;
      }
      return false;
    });
    return null;
  });
  return productMatchFilters;
};

export const getFilteredProducts = createSelector(
  [getProducts, getSelectedFilters],
  (products, selectedFilters) => {
    if (products.length === 0) {
      return products;
    }
    const newProducts = products.reduce((accumulator, currentValue) => {
      const matchFilters = checkIfProductMatchFilters(currentValue, selectedFilters);
      if (allTrue(matchFilters)) {
        return [...accumulator, { ...matchFilters, ...currentValue }];
      }
      return accumulator;
    }, []);
    return newProducts;
  }
);