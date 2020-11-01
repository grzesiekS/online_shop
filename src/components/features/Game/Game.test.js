import React from 'react';
import {shallow} from 'enzyme';
import Game from './Game';

describe('Game component', () => {
  it('should render without crashing', () => {
    const component = shallow(<Game />);
    expect(component).toBeTruthy();
  });
});
