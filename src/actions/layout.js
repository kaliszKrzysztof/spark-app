export const MENU_OPEN = 'MENU_OPEN';
export const MENU_CLOSE = 'MENU_CLOSE';

export const openMenu = () => (dispatch) => {
  dispatch({ type: MENU_OPEN });
};

export const closeMenu = () => (dispatch) => {
  dispatch({ type: MENU_CLOSE });
};