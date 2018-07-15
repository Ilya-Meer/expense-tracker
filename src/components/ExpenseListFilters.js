import React from 'react';
import { connect } from 'react-redux';
import { addTextFilter, sortByAmount, sortByDate } from '../actions/filterActions';

const ExpenseListFilters = (props) => {
  return(
    <div style={{display: "flex", flexDirection: "column"}}>
      <input 
        type="text" 
        value={props.filters.text}
        onChange={(e) => {
          props.dispatch(addTextFilter(e.target.value))
        }}
      />
      <select 
        name="sortByFilter" 
        id="sortByFilter" 
        defaultValue="none"
        onChange={(e) => {
          if ( e.target.value === "date") {
            props.dispatch(sortByDate())
          } else {
            props.dispatch(sortByAmount())
          }
        }}>
        <option value="none" disabled>Sort By</option>
        <option value="date">Date</option>
        <option value="amount">Amount</option>
      </select>

    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
}

export default connect(mapStateToProps)(ExpenseListFilters)