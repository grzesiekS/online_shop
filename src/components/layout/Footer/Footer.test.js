import React from 'react';
import {shallow} from 'enzyme';
import Footer from './Footer';

describe('Footer component', () => {
  it('should render without crashing', () => {
    const component = shallow(<Footer />);
    expect(component).toBeTruthy();
  });
});
