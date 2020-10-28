import React from 'react';
import {shallow} from 'enzyme';
import Header from './Header';

describe('Header component', () => {
  it('should render without crashing', () => {
    const component = shallow(<Header />);
    expect(component).toBeTruthy();
  });
});
