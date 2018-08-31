import expenseTotal from './expenseTotal';
import moment from 'moment';

const expenses = [
  {
    id: '1',
    desc: 'Gas', 
    note: 'The gas was too much', 
    amount: '10', 
    createdAt: moment(0).add('4', 'days').valueOf()
  },
  {
    id: '2',
    desc: 'Rent', 
    note: 'The rent was absurd', 
    amount: '10', 
    createdAt: moment(0).add('4', 'weeks').valueOf()
  },
  {
    id: '3',
    desc: 'Coffee', 
    note: 'I\'m just speechless...', 
    amount: '10', 
    createdAt: moment(0).subtract('4', 'days').valueOf()
  }
]

describe('expenseTotal function', () => {
  it('should return the sum of the amounts of all expenses', () => {
    const total = expenseTotal(expenses);
    expect(total).toBe(30);  
  })

  it('should return 0 if given an empty array', () => {
    const arr = [];

    const total = expenseTotal(arr);
    expect(total).toBe(0);  
  })
})