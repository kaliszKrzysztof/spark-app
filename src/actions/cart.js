export const CART_OPEN = 'CART_OPEN';
export const CART_CLOSE = 'CART_CLOSE';

export const openCart = () => ({ type: CART_OPEN });

export const closeCart = () => ({ type: CART_CLOSE });