import React from 'react';
import { connect } from 'react-redux';
import { addTextFilter } from '../actions/filterActions';

const ExpenseListFilters = (props) => {
  return(
    <div>
      <input 
        type="text" 
        value={props.filters.text} 
        onChange={(e) => {
          props.dispatch(addTextFilter(e.target.value))
        }}
      />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
}

export default connect(mapStateToProps)(ExpenseListFilters)