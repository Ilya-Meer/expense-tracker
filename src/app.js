import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import AppRouter from './routes'
import configureStore from './store/configureStore'
import './styles/styles.scss'
import { addExpense } from './actions/expenseActions';
import * as filters from './actions/filterActions';
import getVisibleExpenses from './selectors/expenses';


const store = configureStore();

store.dispatch(addExpense({desc: 'gas bill', amount: 5, createdAt: 10}))
store.dispatch(addExpense({desc: 'water bill', amount: 4, createdAt: 20}))
store.dispatch(addExpense({desc: 'phone bill', amount: 30, createdAt: 30}))
store.dispatch(addExpense({desc: 'power bill', amount: 2, createdAt: 40}))
 

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)



const root = document.getElementById('root');
render(jsx, root);  