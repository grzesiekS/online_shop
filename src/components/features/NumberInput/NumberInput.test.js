import React from 'react';
import {shallow} from 'enzyme';
import NumberInput from './NumberInput';

describe('NumberInput component', () => {
  it('should render without crashing', () => {
    const component = shallow(<NumberInput />);
    expect(component).toBeTruthy();
  });
});
