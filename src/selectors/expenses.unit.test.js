import getVisibleExpenses from './expenses';
import moment from 'moment';



const expenses = [
  {
    id: '1',
    desc: 'Gas', 
    note: 'The gas was too much', 
    amount: '10000', 
    createdAt: moment(0).add('4', 'days').valueOf()
  },
  {
    id: '2',
    desc: 'Rent', 
    note: 'The rent was absurd', 
    amount: '20000', 
    createdAt: moment(0).add('4', 'weeks').valueOf()
  },
  {
    id: '3',
    desc: 'Coffee', 
    note: 'I\'m just speechless...', 
    amount: '30000', 
    createdAt: moment(0).subtract('4', 'days').valueOf()
  }
]



describe('getVisibleExpenses filter function', () => {
  it('filters expenses by text value', () => {
    const filters = {
      text: 'e',
      sortBy: 'date', 
      startDate: undefined,
      endDate: undefined
    }    
    expect(getVisibleExpenses(expenses, filters)).toEqual([
      expenses[1], expenses[2]
    ])
  })
  it('filters expenses by amount', () => {
    const filters = {
      text: 'e',
      sortBy: 'amount', 
      startDate: undefined,
      endDate: undefined
    }
    expect(getVisibleExpenses(expenses, filters)).toEqual([
      expenses[2], expenses[1]
    ])
  })
  it('filters expenses by startDate', () => {
    const filters = {
      text: '',
      sortBy: 'date', 
      startDate: moment(0),
      endDate: undefined
    }
    expect(getVisibleExpenses(expenses, filters)).toEqual([
      expenses[1], expenses[0]
    ])
  })
  it('filters expenses by endDate', () => {
    const filters = {
      text: '',
      sortBy: 'date', 
      startDate: undefined,
      endDate: moment(0)
    }
    expect(getVisibleExpenses(expenses, filters)).toEqual([
      expenses[2]
    ])
  })
})