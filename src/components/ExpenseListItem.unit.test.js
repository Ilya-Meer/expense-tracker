import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from './ExpenseListItem';
import moment from 'moment';


describe('Expense List Item', () => {
  const expense = {
    id: '3',
    desc: 'Rent', 
    note: 'The rent was not cheap either', 
    amount: '2000000', 
    createdAt: moment(0)
  };

  it('should render expense list item', () => {
    const wrapper = shallow(<ExpenseListItem props={expense}/>);
    expect(wrapper).toMatchSnapshot();
  })
})
