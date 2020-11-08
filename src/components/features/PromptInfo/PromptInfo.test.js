import React from 'react';
import {shallow} from 'enzyme';
import PromptInfo from './PromptInfo';

describe('PromptInfo component', () => {
  it('should render without crashing', () => {
    const component = shallow(<PromptInfo />);
    expect(component).toBeTruthy();
  });
});
