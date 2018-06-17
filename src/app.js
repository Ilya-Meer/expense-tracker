import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import styled from 'styled-components';

import './styles/styles.scss'

import Header from './components/Header'



const HomeDashboard = () => <div><p>I am the home route!</p></div> ;

const CreateExpensePage = () => <div><p>I am the Create route!</p></div>;

const EditExpensePage = () => <div><p>I am the  Edit route!</p></div>;

const HelpPage = () => <div><p>I am the Help Page route!</p></div>;


const NotFoundPage = () => (
  <div>
    <p>404!</p>
    <Link to="/">Home</Link>  
  </div>
)



const routes = (
  <BrowserRouter>
  <div>
    <Header />
    <Switch>
      <Route path="/" component={HomeDashboard} exact={true}/>
      <Route path="/create" component={CreateExpensePage}/>
      <Route path="/edit" component={EditExpensePage}/>
      <Route path="/help" component={HelpPage}/>
      <Route component={NotFoundPage}/>
    </Switch>
  </div>
  </BrowserRouter>
)

const root = document.getElementById('root');
render(routes, root);  