import React from 'react';
import {shallow} from 'enzyme';
import Button from './Button';

describe('Button component', () => {
  it('should render without crashing', () => {
    const component = shallow(<Button />);
    expect(component).toBeTruthy();
  });
});
