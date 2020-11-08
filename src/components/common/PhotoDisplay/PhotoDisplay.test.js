import React from 'react';
import {shallow} from 'enzyme';
import PhotoDisplay from './PhotoDisplay';

describe('PhotoDisplay component', () => {
  it('should render without crashing', () => {
    const component = shallow(<PhotoDisplay />);
    expect(component).toBeTruthy();
  });
});
