import React from 'react';
import {shallow} from 'enzyme';
import PhotoCarousel from './PhotoCarousel';

describe('PhotoCarousel component', () => {
  it('should render without crashing', () => {
    const component = shallow(<PhotoCarousel />);
    expect(component).toBeTruthy();
  });
});
