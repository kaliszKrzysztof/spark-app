import {
  GENERATE_FILTERS_FROM_PRODUCTS,
  ADD_FILTER,
  REMOVE_FILTER,
  CLEAR_FILTERS
} from '../actions/filters';

export const AVAILABLE_FILTERS_KEY = 'availableFilters';
export const SELECTED_FILTERS_KEY = 'selectedFilters';

const defaultState = {
  [AVAILABLE_FILTERS_KEY]: {},
  [SELECTED_FILTERS_KEY]: {}
};

const productsReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case GENERATE_FILTERS_FROM_PRODUCTS:
      return {
        ...state,
        [AVAILABLE_FILTERS_KEY]: payload.availableFilters,
        [SELECTED_FILTERS_KEY]: payload.selectedFilters,
      };
    case ADD_FILTER:
      return {
        ...state,
        [SELECTED_FILTERS_KEY]: {
          ...state[SELECTED_FILTERS_KEY],
          [payload.key]: [
            ...state[SELECTED_FILTERS_KEY][payload.key],
            payload.filter
          ]
        }
      };
    case REMOVE_FILTER:
      const filters = state[SELECTED_FILTERS_KEY][payload.key];
      const removedItemIndex = filters.indexOf(payload.filter);
      if (removedItemIndex > -1) {
        filters.splice(removedItemIndex, 1);
      }
      return {
        ...state,
        [SELECTED_FILTERS_KEY]: {
          ...state[SELECTED_FILTERS_KEY],
          [payload.key]: [...filters]
        }
      };
    case CLEAR_FILTERS:
      return {
        ...state,
        [SELECTED_FILTERS_KEY]: {
          ...state[SELECTED_FILTERS_KEY],
          [payload.key]: []
        }
      };
    default:
      return state;
  }
};

export default productsReducer;