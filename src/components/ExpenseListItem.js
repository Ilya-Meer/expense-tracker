import React, { Component } from 'react';
import { removeExpense } from '../actions/expenseActions';
import { connect } from 'react-redux';
import moment from 'moment';

const ExpenseListItem = (props) => (
  <div>
    <h3>{props.desc}</h3>
    <p>{props.amount}</p>
    <p>Created on {moment.unix(props.createdAt).format("MMM Do, YYYY")}</p>

    <hr />
    <button
      onClick={() => {
        console.log(props.createdAt);
        props.dispatch(removeExpense(props))
      }}>
      Remove Expense
    </button>
  </div>
)


export default connect()(ExpenseListItem)