import React from 'react';
import { shallow } from 'enzyme';
import HelpPage from './HelpPage';

describe('Help Page', () => {
  const wrapper = shallow(<HelpPage />);

  it('renders properly', () => {  
    expect(wrapper).toMatchSnapshot();
  })
})
