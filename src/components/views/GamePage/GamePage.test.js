import React from 'react';
import {shallow} from 'enzyme';
import GamePage from './GamePage';

const gameData = {
  _id: '1',
  description: 'Lorem ipsum',
  name: 'Lorem ipsum',
  photos: ['lorem.jpg'],
  price: 100,
};

const defaultMatch = {
  params: {
    id: '1',
  },
};

const func = () => {};

describe('GamePage component', () => {
  it('should render without crashing', () => {
    const component = shallow(<GamePage game={gameData} getSelectedGameApi={func} match={defaultMatch} />);
    expect(component).toBeTruthy();
  });

  it('should throw error without game props', () => {
    expect(() => shallow(<GamePage />)).toThrow();
  });
});
