import React, { Component } from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import getVisibleExpenses from '../selectors/expenses';
import expenseTotal from '../selectors/expenseTotal';


class ExpenseSummary extends Component {
  constructor(props) {
    super(props)

    this.sumExpenses = this.sumExpenses.bind(this);
    this.formatTotal = this.formatTotal.bind(this);
  }

  sumExpenses(arr) {
    return numeral(expenseTotal(arr) / 100).format('$0,0.00');
  }

  formatTotal() {
    if (this.props.expenses.length === 0) {
      return `Viewing 0 expenses totalling ${this.sumExpenses(this.props.expenses)}`
    } else if (this.props.expenses.length === 1) {
      return `Viewing 1 expense totalling ${this.sumExpenses(this.props.expenses)}`
    } else {
      return `Viewing ${this.props.expenses.length} expenses totalling ${this.sumExpenses(this.props.expenses)}`
    }
  }

  render() {
    return (
      <div>
        <h2>{this.formatTotal()}</h2>
      </div>
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