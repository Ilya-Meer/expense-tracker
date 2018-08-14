import React, { Component } from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenseActions';

class CreateExpensePage extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(expense) {    
    this.props.addExpense(expense);
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
    addExpense: (expense) => {
      dispatch(addExpense(expense))
    }
  }
}
export default connect(undefined, mapDispatchToProps )(CreateExpensePage);