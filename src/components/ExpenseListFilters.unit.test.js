import React from 'react';
import { shallow } from 'enzyme';
import {ExpenseListFilters} from './ExpenseListFilters';
import moment from './__mocks__/moment'

const defaultFilters = {
  text: '',
  sortBy: '', 
  startDate: undefined, 
  endDate: undefined
}

const updatedFilters = {
  text: 'power',
  sortBy: 'amount', 
  startDate: moment(0), 
  endDate: moment(0).add(3, 'days')
}

describe('Expense List Filters', () => {
  let setTextFilter, setStartDate, setEndDate, sortByAmount, sortByDate, wrapper;
  beforeEach(() => {
    setTextFilter = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    sortByAmount = jest.fn();
    sortByDate = jest.fn();
    
    wrapper = shallow(
      <ExpenseListFilters
        filters={defaultFilters}
        setTextFilter={setTextFilter}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        sortByAmount={sortByAmount}
        sortByDate={sortByDate}
      />
    );
  })

  it('should render properly', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should render with updated filters', () => {
    wrapper.setProps({
      filters: updatedFilters
    })
    expect(wrapper).toMatchSnapshot();
  })

  it('should set the text filter on setTextFilter', () => {
    wrapper.find('input').at(0).simulate('change', { target: { value: 'bill' } });
    expect(setTextFilter).toHaveBeenLastCalledWith('bill');
  })

  it('should set the sortBy filter to amount when amount is selected', () => {
    wrapper.find('select').simulate('change', { target: { value: 'amount' } });
    expect(sortByAmount).toHaveBeenCalled();
  })

  it('should set the sortBy filter to date when date is selected', () => {
    wrapper.find('select').simulate('change', { target: { value: 'date' } });
    expect(sortByDate).toHaveBeenCalled();
  })

  it('should set the date filters on handleDate', () => {
    const startDate = moment(0);
    const endDate = moment(0).add(3, 'years');
    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({startDate, endDate})
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
  })

  it('should set calendar focus on handleFocusChange', () => {
    const calendarFocused = 'endDate';
    wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toEqual(calendarFocused);
  })
});