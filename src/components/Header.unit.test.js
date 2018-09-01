import React from 'react';
import { shallow } from 'enzyme';
import { Header } from './Header';

describe('Header Component', () => {
  const wrapper = shallow(<Header startLogout={() => {}}/>);

  it('renders properly', () => {  
    expect(wrapper).toMatchSnapshot();
  })


  it('logs user out when logout button is clicked', () => {
    const startLogout = jest.fn();
    const wrapper = shallow(<Header startLogout={startLogout}/>);
    wrapper.find('li').at(2).simulate('click');
    expect(startLogout).toHaveBeenCalled();
  })
})
