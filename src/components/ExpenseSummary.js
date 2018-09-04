import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdAddCircleOutline } from 'react-icons/md';
import numeral from 'numeral';
import { StyledSummary } from './StyledComponents/HomeDashboard';
import getVisibleExpenses from '../selectors/expenses';
import expenseTotal from '../selectors/expenseTotal';


class ExpenseSummary extends Component {
  constructor(props) {
    super(props)

    this.sumExpenses = this.sumExpenses.bind(this);
  }

  sumExpenses(arr) {
    return numeral(expenseTotal(arr) / 100).format('$0,0.00');
  }

  render() {
    const word = this.props.expenses.length === 1 ? 'expense ' : 'expenses ';
    return (
      <StyledSummary>
        <h1>
          Viewing
          <span>{this.props.expenses.length}</span>
          {word}
          totalling 
          <span>{this.sumExpenses(this.props.expenses)}</span>
        </h1>
        <div>
          <Link to="/create">
            <MdAddCircleOutline/>Add Expense
          </Link>
        </div>
      </StyledSummary>
    )
  }
}

export { ExpenseSummary };

const mapStateToProps = (state) => {
  return {
    expenses: getVisibleExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseSummary);