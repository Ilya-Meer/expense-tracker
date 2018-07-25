import { createStore, combineReducers } from 'redux';
import rootReducer from '../reducers';
import getVisibleExpenses from '../selectors/expenses.js';
import * as expenseActions from '../actions/expenseActions';
import * as filterActions from '../actions/filterActions';


export default () => {
  const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  return store;
}


