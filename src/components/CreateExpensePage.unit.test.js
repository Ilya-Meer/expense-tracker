import React from 'react';
import { shallow } from 'enzyme';
import {CreateExpensePage} from './CreateExpensePage';
import moment from './__mocks__/moment'

describe('Create Expense Page', () => {
  let onSubmit, history, wrapper;
  beforeEach(() => {
    onSubmit = jest.fn();
    history = {
      push: jest.fn()
    }
    wrapper = shallow(<CreateExpensePage addExpense={onSubmit} history={history}/>);
  })

  it('should render properly', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should handle onSubmit', () => {
    const expense = {
      id: '3',
      desc: 'Rent', 
      note: 'The rent was not cheap either', 
      amount: '2000000', 
      createdAt: moment(0)
    };
     wrapper.find('ExpenseForm').prop('onSubmit')(expense);
     expect(history.push).toHaveBeenLastCalledWith('/');
     expect(onSubmit).toHaveBeenLastCalledWith(expense);
  })
})