import React from 'react';
import {shallow} from 'enzyme';
import Arrowicon from './ArrowIcon';

describe('Arrowicon componment', () => {
  it('should render without crashing', () => {
    const component = shallow(<Arrowicon />);
    expect(component).toBeTruthy();
  });
});
