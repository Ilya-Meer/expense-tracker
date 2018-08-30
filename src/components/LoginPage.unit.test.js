import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from './LoginPage';


describe('LoginPage', () => {
  it('should render the Login Page', () => {
    const wrapper = shallow(<LoginPage startLogin={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  })
})

describe('Login Button', () => {
  it('should log user in when log in button is clicked', () => {
    const startLogin = jest.fn();
    const wrapper = shallow(<LoginPage startLogin={startLogin}/>);
    wrapper.find('button').at(0).simulate('click');
    expect(startLogin).toHaveBeenCalled();
  })
})
