import { combineReducers } from 'redux';
import auth from './auth';
import productsList from './products';
import categoriesList from './categories';

export default combineReducers({
  auth,
  productsList,
  categoriesList,
});
