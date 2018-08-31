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
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const { desc = '', note = '', amount = 0, createdAt = 0 } = expenseData;
    const expense = { 
      desc, 
      note, 
      amount, 
      createdAt: moment(createdAt).valueOf()
    };

    return db.ref(`users/${uid}/expenses`).push(expense).then((ref) => {
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

export const startRemoveExpense = (expense) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return db.ref(`users/${uid}/expenses/${expense.id}`).remove()
      .then(() => {
        dispatch(removeExpense(expense))
      })
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

export const startEditExpense = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return db.ref(`users/${uid}/expenses/${id}`).update({
      ...updates,
      createdAt: moment(updates.createdAt).valueOf()
    })
      .then(() => {
        dispatch(editExpense(id, updates))
      })
  }
}

export const setExpenses = (expenses) => {
  return {
    type: 'SET_EXPENSES',
    expenses
  }
}

export const startSetExpenses = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return db.ref(`users/${uid}/expenses`).once('value')
    .then(snapshot => {
      const expenses = [];
      snapshot.forEach(childSnapshot => {
        expenses.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        })
      })
      dispatch(setExpenses(expenses));
    })   
  }
}
