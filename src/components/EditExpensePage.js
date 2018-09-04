import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { StyledPageWrapper, H2, Button } from './StyledComponents/Shared';
import { startEditExpense, startRemoveExpense } from '../actions/expenseActions';

class EditExpensePage extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onClick = this.onClick.bind(this);
  }
  onSubmit(expense) {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  }
  onClick(expense) {
    this.props.startRemoveExpense(this.props.expense);
    this.props.history.push('/');
  }

  render() {
    return (
      <StyledPageWrapper secondaryPage={true}>
        <H2>Edit Expense</H2>
        <ExpenseForm
          expense={this.props.expense} 
          onSubmit={this.onSubmit}
        />
        <Button
        onClick={this.onClick}
        negative={true}>
        Remove Expense
      </Button>
      </StyledPageWrapper>
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
    startEditExpense: (id, expense) => {
      dispatch(startEditExpense(id, expense));
    }, 
    startRemoveExpense: (expense) => {
      dispatch(startRemoveExpense(expense))
    }
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);