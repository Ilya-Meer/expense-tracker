import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filterActions';
import { DateRangePicker } from 'react-dates';



class ExpenseListFilters extends Component {
  constructor(props) {
    super(props)

    this.state = {
      calendarFocused: null
    }

    this.handleDate = this.handleDate.bind(this);
    this.handleFocusChange = this.handleFocusChange.bind(this);
    
  }

  handleDate = ({startDate, endDate}) => {
      this.props.dispatch(setStartDate(startDate));
      this.props.dispatch(setEndDate(endDate));
  }
  handleFocusChange = ( focused ) => {
    this.setState(() => {
      return {
        calendarFocused: focused
      }
    })
  }

  render() {
    return(
      <div style={{display: "flex", flexDirection: "column"}}>
        <input 
          type="text" 
          value={this.props.filters.text}
          onChange={(e) => {
            this.props.dispatch(addTextFilter(e.target.value))
          }}
        />
        <select 
          name="sortByFilter" 
          id="sortByFilter" 
          defaultValue="none"
          onChange={(e) => {
            console.log(e.target.value);
            if ( e.target.value === "date") {
              this.props.dispatch(sortByDate())
            } else {
              this.props.dispatch(sortByAmount())
            }
          }}>
          <option value="none" disabled>Sort By</option>
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker         
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.handleDate}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.handleFocusChange}
          numberOfMonths={1}
          showClearDates={true}
          isOutsideRange={() => false}
          displayFormat='MMMM Do, YYYY'
        />



      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
}
 
export default connect(mapStateToProps)(ExpenseListFilters)