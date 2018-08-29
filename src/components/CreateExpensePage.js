import React, { Component } from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
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
        <p>I am the Create route!</p>
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