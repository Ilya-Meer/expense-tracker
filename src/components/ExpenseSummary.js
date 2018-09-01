import React, { Component } from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import styled from 'styled-components';
import getVisibleExpenses from '../selectors/expenses';
import expenseTotal from '../selectors/expenseTotal';


class ExpenseSummary extends Component {
  constructor(props) {
    super(props)

    this.sumExpenses = this.sumExpenses.bind(this);
    this.formatString = this.formatString.bind(this);
  }

  sumExpenses(arr) {
    return numeral(expenseTotal(arr) / 100).format('$0,0.00');
  }

  formatString() {
    if (this.props.expenses.length === 0) {
      return `Viewing 0 expenses totalling `
    } else if (this.props.expenses.length === 1) {
      return `Viewing 1 expense totalling `
    } else {
      return `Viewing ${this.props.expenses.length} expenses totalling `
    }
  }

  render() {
    const Styled = styled.div`
      width: 100%;
      margin: 0 auto;

      h1 {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 1.5rem;

        span {
          padding: 2rem 0;
          font-size: 2rem;
          color: #176ddf;
        }
      }
    `
    return (
      <Styled>
        <h1>{this.formatString()}<span>{this.sumExpenses(this.props.expenses)}</span></h1>
      </Styled>
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