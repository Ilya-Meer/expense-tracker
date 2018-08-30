import React from 'react';
import { shallow } from 'enzyme';
import {EditExpensePage} from './EditExpensePage';
import moment from './__mocks__/moment'

describe('Edit Expense Page', () => {
  let onSubmit, onClick, history, wrapper, expense;
  beforeEach(() => {
    onSubmit = jest.fn();
    onClick = jest.fn();
    history = {
      push: jest.fn()
    }
    expense = {
      id: '3',
      desc: 'Rent', 
      note: 'The rent was not cheap either', 
      amount: '2000000', 
      createdAt: moment(0)
    };
    wrapper = shallow(
      <EditExpensePage 
        expense={expense} 
        startEditExpense={onSubmit} 
        startRemoveExpense={onClick} 
        history={history}
      />
    );
  })

  it('should render properly', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should handle edit Expense', () => {
     wrapper.find('ExpenseForm').prop('onSubmit')(expense);
     expect(onSubmit).toHaveBeenLastCalledWith(expense.id, expense);
     expect(history.push).toHaveBeenLastCalledWith('/');
  })

  it('should handle remove Expense', () => {
     wrapper.find('button').prop('onClick')(expense);
     expect(onClick).toHaveBeenLastCalledWith(expense);
     expect(history.push).toHaveBeenLastCalledWith('/');
  })
})