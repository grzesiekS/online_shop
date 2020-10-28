import React from 'react';
import { shallow } from 'enzyme';
import Games from './Games';

describe('Games component', () => {
  it('should render without crashing', () => {
    const component = shallow(<Games />);
    expect(component).toBeTruthy();
  });
});
