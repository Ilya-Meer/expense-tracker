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
  }

  handleDate = ({startDate, endDate}) => {
      this.props.setStartDate(startDate);
      this.props.setEndDate(endDate);
  }
  handleFocusChange = ( focused ) => {
    this.setState(() => {
      return {
        calendarFocused: focused
      }
    })
  }
  addTextFilter = (e) => {
    this.props.setTextFilter(e.target.value)
  }
  addSortFilter = (e) => {
    if ( e.target.value === "date") {
      this.props.sortByDate()
    } else {
      this.props.sortByAmount()
    }
  }

  render() {
    return(
      <div style={{display: "flex", flexDirection: "column"}}>
        <input 
          type="text" 
          value={this.props.filters.text}
          onChange={this.addTextFilter}
        />
        <select 
          name="sortByFilter" 
          id="sortByFilter" 
          defaultValue="none"
          onChange={this.addSortFilter}>
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

const mapDispatchToProps = (dispatch) => {
  return {
    setTextFilter: (string) => {
      dispatch(addTextFilter(string))
    }, 
    setStartDate: (startDate) => {
      dispatch(setStartDate(startDate))
    }, 
    setEndDate: (endDate) => {
      dispatch(setEndDate(endDate))
    }, 
    sortByAmount: () => {
      dispatch(sortByAmount())
    },
    sortByDate: () => {
      dispatch(sortByDate())
    }
  }
}

export {ExpenseListFilters};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters)