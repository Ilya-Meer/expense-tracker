import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseList } from './ExpenseList';
import moment from 'moment';

describe('Expense List', () => {
  const expenses = [{
    id: '3',
    desc: 'Rent', 
    note: 'The rent was not cheap either', 
    amount: '2000000', 
    createdAt: moment(0)
  }];


  it('should render expense list with expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses}/>);
    expect(wrapper).toMatchSnapshot();
  })

  it('should render expense list with prompt if given no expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={[]}/>);
    expect(wrapper).toMatchSnapshot();
  })
})