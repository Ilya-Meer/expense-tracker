import React, { Component } from 'react';

const ExpenseListItem = (props) => (
  <div>
    <h3>{props.desc}</h3>
    <p>{props.amount}</p>
    <p>Created on {props.createdAt}</p>
  </div>
)

export default ExpenseListItem