import uuid from 'uuid';

export const addExpense = ({desc = '', note = '', amount = 0, createdAt = 0 } = {}) => {
  return {
    type: 'ADD_EXPENSE', 
    expense: {
      id : uuid(),
      desc,
      note,
      amount,
      createdAt
    }
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
