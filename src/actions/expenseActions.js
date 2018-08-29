import uuid from 'uuid';
import db from '../firebase/firebase';
import moment from 'moment';

export const addExpense = (expense) => {
  return {
    type: 'ADD_EXPENSE', 
    expense
  }
}

export const startAddExpense = (expenseData = {}) => {
  return dispatch => {
    const { desc = '', note = '', amount = 0, createdAt = 0 } = expenseData;
    const expense = { 
      desc, 
      note, 
      amount, 
      createdAt: moment(createdAt).valueOf()
    };

    return db.ref('expenses').push(expense).then((ref) => {
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }))
    })
  }
}

export const removeExpense = (expense) => {
  return {
    type: 'REMOVE_EXPENSE',
    payload: expense.id
  }
}

export const editExpense = (id, updates ) => {
  return {
    type: 'EDIT_EXPENSE',
    payload: {
      id, 
      updates
    }
  }
}
