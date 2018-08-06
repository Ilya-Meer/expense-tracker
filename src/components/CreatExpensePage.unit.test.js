import React from 'react';
import {shallow} from 'enzyme';
import CreateExpensePage from './CreateExpensePage';




describe('Create Expense Page', () => {
  it('renders properly', () => {
    expect(CreateExpensePage).toMatchSnapshot();
  })
})
