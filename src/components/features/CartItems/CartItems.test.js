import React from 'react';
import {shallow} from 'enzyme';
import CartItems from './CartItems';

const gamesInCart = [];

describe('CartItems component', () => {
  it('should render without crashing', () => {
    const component = shallow(<CartItems getGamesInCartShort={gamesInCart} />);
    expect(component).toBeTruthy();
  });
});
