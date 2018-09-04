import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyledFilters, SingleFilter } from './StyledComponents/HomeDashboard';
import { Input, Select, H2 } from './StyledComponents/Shared';
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
      <StyledFilters>
        <H2>Filters</H2>
        <div>  
          <SingleFilter>
            <label htmlFor="textInput">Text Filter</label>
            <Input 
              type="text" 
              id="textInput"
              value={this.props.filters.text}
              onChange={this.addTextFilter}
            />
          </SingleFilter>
          <SingleFilter>
            <label htmlFor="sortByFilter">Sort By</label>
            <Select 
              name="sortByFilter" 
              id="sortByFilter" 
              defaultValue="date"
              onChange={this.addSortFilter}>
              <option value="date">Date</option>
              <option value="amount">Amount</option>
            </Select>
          </SingleFilter>
          <SingleFilter>
            <label>Date Range</label>
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
          </SingleFilter>
        </div>
      </StyledFilters>
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