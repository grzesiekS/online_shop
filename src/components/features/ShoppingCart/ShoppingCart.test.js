import React from 'react';
import {shallow} from 'enzyme';
import ShoppingCart from './ShoppingCart';

describe('ShoppingCart component', () => {
  it('should render without crashing', () => {
    const component = shallow(<ShoppingCart />);
    expect(component).toBeTruthy();
  });
});
