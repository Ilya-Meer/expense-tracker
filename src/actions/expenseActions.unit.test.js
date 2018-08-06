import { addExpense, editExpense, removeExpense } from './expenseActions';


describe('Add Expense Action Creator', () => {
  describe('Add Expense with data', () => {
    it('should generate an action object to create an expense with passed in values', () => {
      const obj = {
        desc: 'sample', 
        note: 'test', 
        amount: 0, 
        createdAt: 100
      }
      const addAction = addExpense({...obj});
   
      expect(addAction).toEqual({
        type: 'ADD_EXPENSE', 
        expense: {
          ...obj, 
          id: expect.any(String)
        }
      });    
    })
  })

  describe('Add Expense with defaults', () => {
    it('should generate an action object to create an expense with default values', () => {
      const obj = { }
      const addAction = addExpense({...obj});
  
      expect(addAction).toEqual({
        type: 'ADD_EXPENSE', 
        expense: {
          id: expect.any(String),
          desc: '', 
          note: '', 
          amount: 0, 
          createdAt: 0
        }
      });        
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