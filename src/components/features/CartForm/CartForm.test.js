import React from 'react';
import {shallow} from 'enzyme';
import CartForm from './CartForm';

describe('CartForm component', () => {
  it('should render without crashing', () => {
    const component = shallow(<CartForm />);
    expect(component).toBeTruthy();
  });
});
