import React, { Component } from 'react';
import { removeExpense } from '../actions/expenseActions';
import { connect } from 'react-redux';

const ExpenseListItem = (props) => (
  <div>
    <h3>{props.desc}</h3>
    <p>{props.amount}</p>
    <p>Created on {props.createdAt}</p>

    <hr />
    <button
      onClick={() => {
        // console.log(props.amount)
        props.dispatch(removeExpense(props))
      }}
    >
      Remove Expense
    </button>
  </div>
)


export default connect()(ExpenseListItem)