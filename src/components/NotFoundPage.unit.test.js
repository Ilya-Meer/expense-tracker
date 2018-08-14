import React from 'react';
import { shallow } from 'enzyme';
import NotFoundPage from './NotFoundPage';


describe('Not Found Page', () => {
  it('should render the Not Found Page', () => {
    const wrapper = shallow(<NotFoundPage />);
    expect(wrapper).toMatchSnapshot();
  })
})
