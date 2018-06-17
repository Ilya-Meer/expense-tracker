import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import AppRouter from './routes'

import './styles/styles.scss'




const root = document.getElementById('root');
render(<AppRouter/>, root);  