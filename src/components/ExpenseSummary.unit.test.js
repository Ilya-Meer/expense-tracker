import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import { ExpenseSummary } from './ExpenseSummary';

describe('Expense Summary Component', () => {
  it('should render properly with no expenses', () => {
    const wrapper = shallow(<ExpenseSummary expenses={[]} />);
    expect(wrapper).toMatchSnapshot();
  })
  it('should render properly with one expense', () => {
    const expenses = [
      {
        id: '2',
        desc: 'Rent', 
        note: 'The rent was absurd', 
        amount: '10', 
        createdAt: moment(0).add('4', 'weeks').valueOf()
      }
    ]
    const wrapper = shallow(<ExpenseSummary expenses={expenses} />);
    expect(wrapper).toMatchSnapshot();
  })
  it('should render properly with multiple expenses', () => {
    const expenses = [
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
    const wrapper = shallow(<ExpenseSummary expenses={expenses} />);
    expect(wrapper).toMatchSnapshot();
  })
})