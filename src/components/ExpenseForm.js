import 'react-dates/initialize';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenseActions';
import moment from 'moment';


// import DatePicker from 'react-datepicker';

import { SingleDatePicker } from 'react-dates';
// import 'react-dates/lib/css/_datepicker.css';



class ExpenseForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      desc: props.expense ? props.expense.desc : '', 
      amount: props.expense ? (props.expense.amount/100).toString() : '',
      note: props.expense ? props.expense.note : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: ''
    }

    this.handleDescription = this.handleDescription.bind(this);
    this.handleAmount = this.handleAmount.bind(this);
    this.handleNote = this.handleNote.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleFocusChange = this.handleFocusChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => {
        return {
          ...this.state, 
          amount
        }
      })
    }
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
  handleDate = (date) => {
    if (date) {
      this.setState(() => {
        return {
          ...this.state,
          createdAt: date
        }
      })
    }
  }
  handleFocusChange = ({ focused }) => {
    this.setState(() => {
      return {
        calendarFocused: focused
      }
    })
  }
  handleSubmit(e) {
    e.preventDefault();
    if(!this.state.desc || !this.state.amount) {
      this.setState(() => ({
        ...this.state,
        error: "Please make sure there is a valid description and amount!"
      }))
      
    } else {
      this.setState(() => ({
        ...this.state,
        error: ''
      }))
      this.props.onSubmit({
        desc: this.state.desc,
        amount: parseFloat(this.state.amount, 10) * 100,
        note: this.state.note,
        createdAt: this.state.createdAt
      })
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>{this.state.error}</p>
        <input autoFocus type="text" name="desc" placeholder="description" value={this.state.desc} onChange={this.handleDescription}/>
        <input type="text" name="amount" placeholder="amount" value={this.state.amount} onChange={this.handleAmount}/>
        <SingleDatePicker 
          date={this.state.createdAt}
          onDateChange={this.handleDate}
          focused={this.state.calendarFocused}
          onFocusChange={this.handleFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
          displayFormat='MMMM Do, YYYY'
          // dateFormat="LL"
          // selected={this.state.createdAt}
          // onChange={this.handleDate}
        />


        <textarea name="note" id="note" cols="30" rows="10" placeholder="Add a note for your expense" value={this.state.note} onChange={this.handleNote}></textarea>
        <input type="submit" value="Submit"/>
      </form>
    )
  }
}


export default connect()(ExpenseForm);