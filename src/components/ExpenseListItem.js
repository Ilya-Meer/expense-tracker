import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { removeExpense } from '../actions/expenseActions';
import moment from 'moment';

const ExpenseListItem = (props) => (
  <div>
    <Link to={`/edit/${props.id}`}>
      <h3>{props.desc}</h3>
    </Link>
    <p>{props.amount}</p>
    <p>Created on {moment(props.createdAt).format("MMM Do, YYYY")}</p>
    <hr />
  </div>
)


export default ExpenseListItem