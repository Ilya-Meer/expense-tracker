import { combineReducers } from 'redux';
import filtersReducer from './filtersReducer';
import expensesReducer from './expensesReducer';


export default combineReducers({
  expenses: expensesReducer,
  filters: filtersReducer 
})




