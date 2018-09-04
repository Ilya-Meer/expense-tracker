import React, { Component } from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { StyledPageWrapper, H2 } from './StyledComponents/Shared';
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
      <StyledPageWrapper secondaryPage={true}>
        <H2>Add an Expense</H2>
        <ExpenseForm onSubmit={this.onSubmit}/>
      </StyledPageWrapper>    
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