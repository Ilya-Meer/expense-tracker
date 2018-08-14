import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenseActions';

class EditExpensePage extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onClick = this.onClick.bind(this);
  }
  onSubmit(expense) {
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  }
  onClick(expense) {
    this.props.removeExpense(this.props.expense);
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <ExpenseForm
          expense={this.props.expense} 
          onSubmit={this.onSubmit}
        />
        <button
        onClick={this.onClick}>
        Remove Expense
      </button>
      </div>
    )
  }
};

export {EditExpensePage}


const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(expense => expense.id === props.match.params.id) 
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    editExpense: (id, expense) => {
      dispatch(editExpense(id, expense));
    }, 
    removeExpense: (expense) => {
      dispatch(removeExpense(expense))
    }
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);