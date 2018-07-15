import React, { Component } from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const HomeDashboard = () => (
  <div>
    <p>I am the home route!</p>
    <ExpenseList />
    <ExpenseListFilters />
  </div>
);

export default HomeDashboard;