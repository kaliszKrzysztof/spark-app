import {
  MENU_OPEN,
  MENU_CLOSE,
} from '../actions/layout';

export const MENU_OPEN_KEY = 'menuOpen';

const defaultState = {
  [MENU_OPEN_KEY]: false
};

const layoutReducer = (state = defaultState, { type }) => {
  switch (type) {
    case MENU_OPEN:
      return { ...state, [MENU_OPEN_KEY]: true };
    case MENU_CLOSE:
      return { ...state, [MENU_OPEN_KEY]: false };
    default:
      return state;
  }
};

export default layoutReducer;