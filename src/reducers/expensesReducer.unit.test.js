import expensesReducer from './expensesReducer';
import moment from 'moment';

describe('expenses reducer', () => {
  describe('default case', () => {
    it('sets up the default state correctly', () => {
      const state = expensesReducer(undefined, { type: '@@INIT' });
      expect(state).toEqual([]);
    })
  })

  describe('add expense functionality', () => {
    const expense = {
      id: '1',
      desc: 'Gas', 
      note: 'The gas was too much', 
      amount: '10000', 
      createdAt: moment(0)
    }

    it('adds an expense to state', () => {
      const state = expensesReducer(undefined, { type: 'ADD_EXPENSE', expense });
      expect(state).toEqual([expense])
    })
  })

  describe('remove expense functionality', () => {
    const expense = {
      id: '2',
      desc: '', 
      note: '', 
      amount: '', 
      createdAt: moment(0)
    }

    it('removes an expense from state when given the matching id', () => {
      const state = expensesReducer([expense], {type: "REMOVE_EXPENSE", payload: '2'})
      expect(state).toEqual([]);
    })

    it('does not remove an expense from state when a matching id is not detected', () => {
      const state = expensesReducer([expense], {type: "REMOVE_EXPENSE", payload: '4'})
      expect(state).toEqual([expense]);
    })
  })

  describe('edit expense functionality', () => {
    const expense = {
      id: '3',
      desc: 'Rent', 
      note: 'The rent was not cheap either', 
      amount: '2000000', 
      createdAt: moment(0)
    }

    it('edits an expense in state when given the matching id', () => {
      const state = expensesReducer([expense], { 
        type: 'EDIT_EXPENSE', 
        payload: { 
          id: '3', 
          updates: { 
            amount: '5'
          }
        }
      });
      expect(state).toEqual([{
        id: '3',
        desc: 'Rent', 
        note: 'The rent was not cheap either', 
        amount: '5', 
        createdAt: moment(0)
      }])
    })
    
    it('does not edit an expense in state when a matching id is not detected', () => {
      const state = expensesReducer([expense], { 
        type: 'EDIT_EXPENSE', 
        payload: { 
          id: '100', 
          updates: { 
            amount: '5'
          }
        }
      });
      expect(state).toEqual([{
        id: '3',
        desc: 'Rent', 
        note: 'The rent was not cheap either', 
        amount: '2000000', 
        createdAt: moment(0)
      }])
    })
  })
})


