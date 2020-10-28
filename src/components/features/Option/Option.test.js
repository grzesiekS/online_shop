import React from 'react';
import { shallow } from 'enzyme';
import Option from './Option';

describe('Option component', () => {

  it('should render without crashing', () => {
    const component = shallow(<Option />);
    expect(component).toBeTruthy();
  });
});
