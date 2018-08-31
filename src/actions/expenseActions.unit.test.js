import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import db from '../firebase/firebase';
import { 
  setExpenses, 
  startSetExpenses, 
  startAddExpense, 
  addExpense, 
  startEditExpense, 
  editExpense, 
  removeExpense, 
  startRemoveExpense 
} from './expenseActions';

const uid = 'sampleUserId';
const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
  const expenses = {
    1: {desc: 'gas bill', amount: 50, note: 'prices have certainly gone up', createdAt: 10},
    2: {desc: 'poewr bill', amount: 20, note: 'I should probably switch to solar', createdAt: 20},
  }
  db.ref(`users/${uid}/expenses`).set(expenses).then(() => done());
})

describe('Add Expense Functionality', () => {
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
      const store = createMockStore({ auth: { uid }});
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
        return db.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value')
      })
      .then(snapshot => {
        expect(snapshot.val()).toEqual(obj);
        done();
      })
    })

    it('should add an expense to the database and the store with default values', (done) => {
      const obj = {};
      const store = createMockStore({ auth: { uid }});
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
        return db.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value')
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

describe('Edit Expense Functionality', () => {
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

  it('should make requested changes in the database and the store', (done) => {
    const store = createMockStore({ auth: { uid }});
    const expense = {
      id: '0',           
    };
    const updates = {           
      note: 'Nevermind, I called long distance'
    };
    store.dispatch(startEditExpense(expense.id, updates))
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
          type: 'EDIT_EXPENSE',
          payload: {
            id: expense.id,
            updates
          }
        })
      })
      return db.ref(`users/${uid}/expenses/${expense.id}`).once('value')
        .then(snapshot => {
          expect(snapshot.val().note).toEqual('Nevermind, I called long distance')
          done()
        })
  })
})

describe('Remove Expense Functionality', () => {
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

  it('should remove an expense from the database and store', (done) => {
    const store = createMockStore({ auth: { uid }});
    const expense = { 
      id: 5,
      desc: '',
      amount: 0,
      note: '',
      createdAt: 0 
    }
    store.dispatch(startRemoveExpense(expense))
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
          type: 'REMOVE_EXPENSE',
          payload: expense.id
        })
        return db.ref(`users/${uid}/expenses/${expense.id}`).once('value');
      })
      .then(snapshot => {
        expect(snapshot.val()).toBeFalsy();
        done();
      })
  })
})

describe('Set Expenses', () => {
  it('should set up expenses action object with data', () => {
    const expenses = [{
      id: 123,
      desc: '',
      amount: 0,
      note: '',
      createdAt: 0
    }]
     const action = setExpenses(expenses);
     expect(action).toEqual({
       type: 'SET_EXPENSES',
       expenses
     })
  })

  it('should fetch the expense data from firebase', (done) => {
    const store = createMockStore({ auth: { uid }});
    const expenses = [
      {id: 0, desc: 'gas bill', amount: 50, note: 'prices have certainly gone up', createdAt: 10},
      {id: 1, desc: 'poewr bill', amount: 20, note: 'I should probably switch to solar', createdAt: 20},
    ]
    db.ref(`users/${uid}/expenses`).set(expenses).then(() => {
      store.dispatch(startSetExpenses())
        .then(() => {
          const actions = store.getActions();
          expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
          });
          done();
        })
    });
  })
})