import { combineReducers } from 'redux';
import cartReducer from './cart';
import productsReducer from './products';
import filtersReducer from './filters';
import layoutReducer from './layout';

const rootReducer = combineReducers({
  cartReducer,
  productsReducer,
  filtersReducer,
  layoutReducer
});

export default rootReducer;