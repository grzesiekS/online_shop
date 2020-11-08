import React from 'react';
import {shallow} from 'enzyme';
import CartItems from './CartItems';

describe('CartItems component', () => {
  it('should render without crashing', () => {
    const component = shallow(<CartItems />);
    expect(component).toBeTruthy();
  });
});
