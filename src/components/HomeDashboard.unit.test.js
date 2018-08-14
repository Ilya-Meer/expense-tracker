import React from 'react';
import { shallow } from 'enzyme';
import HomeDashboard from './HomeDashboard';


describe('Home Dashboard', () => {
  it('should render the Home Dashboard', () => {
    const wrapper = shallow(<HomeDashboard />);
    expect(wrapper).toMatchSnapshot();
  })
})
