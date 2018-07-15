import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenseActions'


class ExpenseForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      desc: '', 
      amount: 0,
      note: ''
    }

    this.handleDescription = this.handleDescription.bind(this);
    this.handleAmount = this.handleAmount.bind(this);
    this.handleNote = this.handleNote.bind(this);
  }

  handleDescription(e) {
    const desc = e.target.value
    this.setState(() => {
      return {
        ...this.state, 
        desc
      }
    })
  }
  handleAmount(e) {
    const amount = e.target.value
    this.setState(() => {
      return {
        ...this.state, 
        amount
      }
    })
  }
  handleNote(e) {
    const note = e.target.value
    this.setState(() => {
      return {
        ...this.state, 
        note
      }
    })
  }

  render() {
    return (
      <form onSubmit={(e) => {
          e.preventDefault();
          this.props.dispatch(addExpense(this.state))
        }}>
        <input autoFocus type="text" name="desc" placeholder="description" value={this.state.desc} onChange={this.handleDescription}/>
        <input type="number" name="amount" placeholder="amount" value={this.state.amount} onChange={this.handleAmount}/>
        <textarea name="note" id="note" cols="30" rows="10" placeholder="Add a note for your expense" value={this.state.note} onChange={this.handleNote}></textarea>
        <input type="submit" value="Submit"/>
      </form>
    )
  }
}


export default connect()(ExpenseForm);