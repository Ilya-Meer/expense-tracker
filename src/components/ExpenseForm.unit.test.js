import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from './ExpenseForm';
import moment from './__mocks__/moment'

describe('Expense Form', () => {
  it('should render the Expense Form', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
  })

  it('should render the Expense Form with seed data', () => {
    const expense = {
      id: '3',
      desc: 'Rent', 
      note: 'The rent was not cheap either', 
      amount: '2000000', 
      createdAt: moment(0)
    };

    const wrapper = shallow(<ExpenseForm expense={expense}/>);
    expect(wrapper).toMatchSnapshot();
  })

  it('should render an error message when the form is submitted without description or amount', () => {
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('form').simulate('submit', {
      preventDefault: () => {}
    });
    expect(wrapper.state().error).toBe('Please make sure there is a valid description and amount!')
    expect(wrapper).toMatchSnapshot();
  })

  it('should set description on input change', () => {
    const wrapper = shallow(<ExpenseForm />);
    const input = wrapper.find('input').at(0).simulate('change', {
      target: {
        value: 'New Description'
      }
    });
    expect(wrapper.state().desc).toBe('New Description')
    expect(wrapper).toMatchSnapshot();
  })

  it('should set note on textarea change', () => {
    const wrapper = shallow(<ExpenseForm />);
    const textarea = wrapper.find('textarea').simulate('change', {
      target: {
        value: 'New Note'
      }
    });
    expect(wrapper.state().note).toBe('New Note')
    expect(wrapper).toMatchSnapshot();
  })

  it('should not set amount when given invalid input', () => {
    const wrapper = shallow(<ExpenseForm />);
    const textarea = wrapper.find('input').at(1).simulate('change', {
      target: {
        value: '100.10000'
      }
    });
    expect(wrapper.state().amount).toBe('')
    expect(wrapper).toMatchSnapshot();
  })

  it('should set amount when given valid input', () => {
    const wrapper = shallow(<ExpenseForm />);
    const textarea = wrapper.find('input').at(1).simulate('change', {
      target: {
        value: '100.00'
      }
    });
    expect(wrapper.state().amount).toBe('100.00')
    expect(wrapper).toMatchSnapshot();
  })

  it('should call the onSubmit prop when valid form is submitted', () => {
    const expense = {
      id: '3',
      desc: 'Rent', 
      note: 'The rent was not cheap either', 
      amount: '2000000', 
      createdAt: moment(0)
    };
    const onSubmitSpy = jest.fn();

    const wrapper = shallow(<ExpenseForm expense={expense} onSubmit={onSubmitSpy}/>);
    wrapper.find('form').simulate('submit', {
      preventDefault: () => {}
    });
    expect(onSubmitSpy).toHaveBeenCalledWith({
      desc: 'Rent', 
      note: 'The rent was not cheap either', 
      amount: 2000000, 
      createdAt: moment(0)
    });  
  })

  it('should set date on date change', () => {
    const now = moment()
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
  })

  it('should set calendar focus on focus change', () => {
    const focused = true;
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({focused});
    expect(wrapper.state('calendarFocused')).toEqual(focused);
  })

})


