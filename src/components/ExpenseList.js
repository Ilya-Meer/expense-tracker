import React, {Component} from 'react';
import { connect } from 'react-redux';
import getVisibleExpenses from '../selectors/expenses';
import ExpenseListItem from './ExpenseListItem';
import styled from 'styled-components';


const StyledExpenseList = styled.div`
  padding: 5%;
`


export const ExpenseList = (props) => {
  
  return (
    <StyledExpenseList>
      <h1>Expense List</h1>
      <div>
        {props.expenses.length === 0 ? (
          <p>Add an Expense!</p>
         ) : (
          props.expenses.map(expense => {
            return  <ExpenseListItem key={expense.id} {...expense} />
          }))
        } 
      </div>
    </StyledExpenseList>
  )
}


const mapStateToProps = (state) => {
  return {
    expenses: getVisibleExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);