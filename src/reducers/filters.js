import {
  GENERATE_FILTERS_FROM_PRODUCTS,
  ADD_FILTER,
  REMOVE_FILTER,
  CLEAR_FILTERS,
  SET_ACTIVE_FILTERS
} from '../actions/filters';

export const AVAILABLE_FILTERS_KEY = 'availableFilters';
export const SELECTED_FILTERS_KEY = 'selectedFilters';
export const LAST_ACTION_SOURCE_KEY = 'lastActionSource';
export const FILTER_ACTION_SOURCE = {
  USER: 'USER',
  API: 'API'
};

const defaultState = {
  [AVAILABLE_FILTERS_KEY]: {},
  [SELECTED_FILTERS_KEY]: {},
  [LAST_ACTION_SOURCE_KEY]: FILTER_ACTION_SOURCE.API
};

const productsReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case GENERATE_FILTERS_FROM_PRODUCTS:
      return {
        ...state,
        [AVAILABLE_FILTERS_KEY]: payload.availableFilters,
        [SELECTED_FILTERS_KEY]: {
          ...payload.selectedFilters,
          ...state[SELECTED_FILTERS_KEY],
        },
        [LAST_ACTION_SOURCE_KEY]: FILTER_ACTION_SOURCE.API
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
        },
        [LAST_ACTION_SOURCE_KEY]: FILTER_ACTION_SOURCE.USER
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
        },
        [LAST_ACTION_SOURCE_KEY]: FILTER_ACTION_SOURCE.USER
      };
    case SET_ACTIVE_FILTERS:
      return {
        ...state,
        [SELECTED_FILTERS_KEY]: {
          ...state[SELECTED_FILTERS_KEY],
          ...payload
        },
        [LAST_ACTION_SOURCE_KEY]: FILTER_ACTION_SOURCE.API
      };
    case CLEAR_FILTERS:
      return {
        ...defaultState
      };
    default:
      return state;
  }
};

export default productsReducer;