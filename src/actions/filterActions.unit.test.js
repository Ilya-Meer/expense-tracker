import { addTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from './filterActions';
import moment from 'moment';

describe('set start date filter action creator', () => {
  it('creates the set start date filter action object', () => {
    expect(setStartDate(moment(0))).toEqual({
      type: 'SET_START_DATE', 
      payload: moment(0)
    })
  })
})

describe('set end date filter action creator', () => {
  it('creates the set end date filter action object', () => {
    expect(setEndDate(moment(0))).toEqual({
      type: 'SET_END_DATE', 
      payload: moment(0)
    })
  }) 
})

describe('Set Text Filter Action Creator', () => {
  describe('set text filter action creator with data', () => {
    it('creates the text filter action object with passed in values', () => {
      expect(addTextFilter('food')).toEqual({
        type: 'ADD_TEXT_FILTER', 
        payload: 'food'
      })
    })
  })
  describe('set text filter action creator without data', () => {
    it('creates the text filter action object with default values', () => {
      expect(addTextFilter()).toEqual({
        type: 'ADD_TEXT_FILTER', 
        payload: ''
      })
    })
  })
})

describe('set sort by date filter action creator', () => {
  it('creates the action object to sort the data by date', () => {
    expect(sortByDate()).toEqual({
      type: 'SORT_BY_DATE',
    })
  })
})

describe('set sort by amount filter action creator', () => {
  it('creates the action object to sort the data by amount', () => {
    expect(sortByAmount()).toEqual({
      type: 'SORT_BY_AMOUNT',
    })
  })
})
