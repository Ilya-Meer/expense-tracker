
import React, { Component } from 'react';
import  { render } from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routes'
import configureStore from './store/configureStore'
import './styles/styles.scss'
import { startSetExpenses } from './actions/expenseActions';
import { login, logout } from './actions/authActions';
import { firebase } from './firebase/firebase';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)
const root = document.getElementById('root');

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    render(jsx, root);   
    hasRendered = true; 
  }
}

render(<p>Loading Expenses...</p>, root);

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(login(user))
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
    })
    if (history.location.pathname === '/') {
      history.push('/dashboard');
      console.log(history);
    }
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
})