import uniqBy from 'lodash/uniqBy';

export const GENERATE_FILTERS_FROM_PRODUCTS = 'GENERATE_FILTERS_FROM_PRODUCTS';

const filtersKeys = ['shape', 'colors'];

export const generateFilterFromProducts = (products) => {
  const availableFilters = {};
  const selectedFilters = {};
  products.map((product) => {
    filtersKeys.map((key) => {
      if (!Array.isArray(availableFilters[key])) {
        availableFilters[key] = [];
        selectedFilters[key] = [];
      }
      const value = product[key];
      if (typeof value === 'string') {
        availableFilters[key].push(value);
      }
      if (Array.isArray(value)) {
        availableFilters[key].push(...value);
      }
      return null;
    });
    return null;
  });
  filtersKeys.map((key) => {
    availableFilters[key] = uniqBy(availableFilters[key]);
    return null;
  });
  return {
    type: GENERATE_FILTERS_FROM_PRODUCTS,
    payload: {
      availableFilters,
      selectedFilters
    }
  };
};

export const ADD_FILTER = 'ADD_FILTER';
export const REMOVE_FILTER = 'REMOVE_FILTER';
export const toggleFilter = (key, filter, add) => ({
  type: add ? ADD_FILTER : REMOVE_FILTER,
  payload: {
    key,
    filter
  }
});

export const CLEAR_FILTERS = 'CLEAR_FILTERS';
export const clearFilters = key => ({
  type: CLEAR_FILTERS,
  payload: {
    key
  }
});
