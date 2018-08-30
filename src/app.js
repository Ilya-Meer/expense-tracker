
import React, { Component } from 'react';
import  { render } from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routes'
import configureStore from './store/configureStore'
import './styles/styles.scss'
import { startSetExpenses } from './actions/expenseActions';
import { firebase } from './firebase/firebase';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

const root = document.getElementById('root');

render(<p>Loading Expenses...</p>, root);

store.dispatch(startSetExpenses()).then(() => {
  render(jsx, root);   
})

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    console.log('you just logged in');
  } else {
    console.log('user just logged out');
  }
})