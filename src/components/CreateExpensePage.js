import React, { Component } from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { H2 } from './StyledComponents/Shared';
import { startAddExpense } from '../actions/expenseActions';

class CreateExpensePage extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(expense) {    
    this.props.startAddExpense(expense);
    this.props.history.push('/');
  }
  render() {
    return (
      <div>
        <H2>Add an Expense</H2>
        <ExpenseForm onSubmit={this.onSubmit}/>
      </div>    
    )
  }
}

export { CreateExpensePage }


const mapDispatchToProps = (dispatch) => {
  return {
    startAddExpense: (expense) => {
      dispatch(startAddExpense(expense))
    }
  }
}
export default connect(undefined, mapDispatchToProps )(CreateExpensePage);