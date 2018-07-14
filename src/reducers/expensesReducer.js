const expensesReducer = (state = [], action) => {
  switch(action.type){
    case 'ADD_EXPENSE':
      return [
        ...state, 
        action.expense
      ]
    case 'REMOVE_EXPENSE':
      return state.filter(expense => expense.id !== action.payload);
    case 'EDIT_EXPENSE':
      return state.map(obj => {
        if (obj.id === action.payload.id) {
          return {
            ...obj,
            ...action.payload.updates
          }
        }
        else {
          return obj
        }
      })
     default:
      return state;
  }
}

export default expensesReducer