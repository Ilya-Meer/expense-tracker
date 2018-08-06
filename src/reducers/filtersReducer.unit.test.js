import filtersReducer from './filtersReducer';
import moment from 'moment';




describe('filters reducer', () => {
  describe('default case', () => {
    it('sets up the default state correctly', () => {
      const state = filtersReducer(undefined, { type: '@@INIT' });
      const startDate = moment().startOf('month');
      const endDate = moment().endOf('month');
  
      expect(state).toEqual({
        text: '', 
        sortBy: 'date', 
        startDate, 
        endDate,
      })
    })
  })

  describe('sort by amount filtering', () => {
    it('filters the expenses by amount', () => {
      const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
      expect(state.sortBy).toBe('amount')
    })
  })
  
  describe('sort by date filtering', () => {
    it('filters the expenses by date', () => {
      const state = filtersReducer(undefined, { type: 'SORT_BY_DATE' });
      expect(state.sortBy).toBe('date')
    })
  })
  
  describe('add text filter case', () => {
    it('sets the text filter upon receiving an add text filter action', () => {
      const state = filtersReducer(undefined, { type: 'ADD_TEXT_FILTER', payload: 'e' });
      expect(state.text).toBe('e')
    })
  })

  describe('set start date filter', () => {
    it('sets a start date for the filter', () => {
      const state = filtersReducer(undefined, { type: 'SET_START_DATE', payload: moment(1) });
      expect(state.startDate).toEqual(moment(1));
    })
  })

  describe('set end date filter', () => {
    it('sets an end date for the filter', () => {
      const state = filtersReducer(undefined, { type: 'SET_END_DATE', payload: moment(1) });
      expect(state.endDate).toEqual(moment(1));
    })
  })
})






// const filtersReducer = (state = filtersReducerDefaultState, action) => {
//   switch(action.type){
//     case 'ADD_TEXT_FILTER':
//       return {
//         ...state, 
//         text: action.payload
//       }
//     case 'SORT_BY_DATE':
//       return {
//         ...state,
//         sortBy: 'date'
//       }
//     case 'SORT_BY_AMOUNT':
//       return {
//         ...state,
//         sortBy: 'amount'
//       }
//     case 'SET_START_DATE':
//       return {
//         ...state, 
//         startDate: action.payload
//       }
//     case 'SET_END_DATE':
//       return {
//         ...state, 
//         endDate: action.payload
//       }
//     default:
//       return state;
//   }
// }

// export default filtersReducer