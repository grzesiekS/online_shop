import React from 'react';
import {shallow} from 'enzyme';
import GameForm from './GameForm';

const func = () => {};

describe('GameForm component', () => {
  it('should render without crashing', () => {
    const component = shallow(<GameForm getGenresApi={func} />);
    expect(component).toBeTruthy();
  });
});
