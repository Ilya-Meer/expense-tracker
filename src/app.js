import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { BrowserRouter, Link, Route } from 'react-router-dom'


import './styles/styles.scss'



const HomeDashboard = () => <div><p>I am the home route!</p></div> ;

const CreateExpensePage = () => <div><p>I am the Create route!</p></div>;

const EditExpensePage = () => <div><p>I am the  Edit route!</p></div>;

const HelpPage = () => <div><p>I am the Help Page route!</p></div>;


const routes = (
  <BrowserRouter>
    <div>
      <Route path="/" component={HomeDashboard} exact={true}/>
      <Route path="/create" component={CreateExpensePage}/>
      <Route path="/edit" component={EditExpensePage}/>
      <Route path="/help" component={HelpPage}/>
    </div>
  </BrowserRouter>
)

const root = document.getElementById('root');
render(routes, root);  