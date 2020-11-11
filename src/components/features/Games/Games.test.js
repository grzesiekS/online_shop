import React from 'react';
import { shallow } from 'enzyme';
import Games from './Games';

describe('Games component', () => {

  const gameArray = [];
  const func = () => {};

  it('should render without crashing', () => {
    const component = shallow(<Games games={gameArray} getAllGenres={func} getAllGames={func} />);
    expect(component).toBeTruthy();
  });

  it('should throw an Error if game array is not passed to component', () => {
    expect(() => shallow(<Games />)).toThrow();
  });
});
