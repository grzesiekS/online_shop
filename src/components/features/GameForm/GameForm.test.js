import React from 'react';
import {shallow} from 'enzyme';
import GameForm from './GameForm';

describe('GameForm component', () => {
  it('should render without crashing', () => {
    const component = shallow(<GameForm />);
    expect(component).toBeTruthy();
  });
});
