import React from 'react';
import {shallow} from 'enzyme';
import Homepage from './Homepage';

describe('Homepage component', () => {
  it('should render without crashing', () => {
    const component = shallow(<Homepage />);
    expect(component).toBeTruthy();
  });
});
