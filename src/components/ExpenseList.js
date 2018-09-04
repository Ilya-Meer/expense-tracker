import React from 'react';
import { connect } from 'react-redux';
import { StyledExpenseList } from './StyledComponents/HomeDashboard';
import { H2 } from './StyledComponents/Shared'
import getVisibleExpenses from '../selectors/expenses';
import ExpenseListItem from './ExpenseListItem';

export const ExpenseList = (props) => {
  
  return (
    <StyledExpenseList>
      <H2>Expense List</H2>
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