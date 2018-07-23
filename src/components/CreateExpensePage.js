import React, { Component } from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenseActions';

const CreateExpensePage = (props) => {
  return (
    <div>
      <p>I am the Create route!</p>
      <ExpenseForm onSubmit={(expense) => {
        props.dispatch(addExpense(expense));
        props.history.push('/');
      }}/>
    </div>    
  )
}





export default connect()(CreateExpensePage);