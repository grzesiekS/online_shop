import React from 'react';
import { shallow } from 'enzyme';
import Games from './Games';

describe('Games component', () => {

  const gameArray = [];

  it('should render without crashing', () => {
    const component = shallow(<Games games={gameArray} />);
    expect(component).toBeTruthy();
  });
});
