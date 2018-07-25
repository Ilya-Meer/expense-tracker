import React, { Component } from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const HomeDashboard = () => (
  <div>
    <p>I am the home route!</p>
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default HomeDashboard;