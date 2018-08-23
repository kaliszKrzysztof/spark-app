import { combineReducers } from 'redux';
import cartReducer from './cart';
import productsReducer from './products';
import filtersReducer from './filters';

const rootReducer = combineReducers({
  cartReducer,
  productsReducer,
  filtersReducer
});

export default rootReducer;