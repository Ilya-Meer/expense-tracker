import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import db from '../firebase/firebase';
import { startAddExpense, addExpense, editExpense, removeExpense } from './expenseActions';

const createMockStore = configureMockStore([thunk]);

describe('Add Expense Action Creator', () => {
  describe('Add Expense with data', () => {
    it('should generate an action object to create an expense with passed in values', () => {
      const expense = {
        desc: 'sample', 
        note: 'test', 
        amount: 0, 
        createdAt: 100
      }
      const addAction = addExpense({...expense});
   
      expect(addAction).toEqual({
        type: 'ADD_EXPENSE', 
        expense
      });    
    })
  })

  describe('Add Expense to database and store', () => {
    it('should add an expense to the database and the store', (done) => {
      const store = createMockStore({});
      const obj = {
        desc: 'MacBook', 
        note: 'For work!', 
        amount: 1000, 
        createdAt: 12312313
      }
      store.dispatch(startAddExpense(obj))
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
          type: 'ADD_EXPENSE',
          expense: {
            id: expect.any(String),
            ...obj
          }
        })
        return db.ref(`expenses/${actions[0].expense.id}`).once('value')
      })
      .then(snapshot => {
        expect(snapshot.val()).toEqual(obj);
        done();
      })
    })

    it('should add an expense to the database and the store with default values', (done) => {
      const obj = {};
      const store = createMockStore({});
      store.dispatch(startAddExpense(obj))
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
          type: 'ADD_EXPENSE',
          expense: {
            id: expect.any(String),
            desc: '',
            amount: 0,
            note: '',
            createdAt: 0
          }
        })
        return db.ref(`expenses/${actions[0].expense.id}`).once('value')
      })
      .then(snapshot => {
        expect(snapshot.val()).toEqual({
          desc: '',
          amount: 0,
          note: '',
          createdAt: 0
        });
        done();
      })
    })
  })
})

describe('Edit Expense Action Creator', () => {
  it('should generate an action object to edit an expense', () => {
    const obj = {
      id: '123', 
      desc: 'sample'
    }
    const editAction = editExpense(obj.id, obj);

    expect(editAction).toEqual({
      type: 'EDIT_EXPENSE', 
      payload: {
        id: obj.id,
        updates: obj
      }
    });    
  })
})

describe('Remove Expense Action Creator', () => {
  it('should generate an action object to remove an expense', () => {
    const obj = {
      id: '123'
    } 
    const removeAction = removeExpense(obj);

    expect(removeAction).toEqual({
      type: 'REMOVE_EXPENSE', 
      payload: obj.id
    });
  })
})