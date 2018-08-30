import { combineReducers } from 'redux';
import filtersReducer from './filtersReducer';
import expensesReducer from './expensesReducer';
import authReducer from './authReducer';


export default combineReducers({
  expenses: expensesReducer,
  filters: filtersReducer,
  auth: authReducer
})




