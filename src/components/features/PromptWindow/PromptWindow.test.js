import React from 'react';
import {shallow} from 'enzyme';
import PromptWindow from './PromptWindow';

describe('PromptWindow component', () => {
  it('should render without crashing', () => {
    const component = shallow(<PromptWindow />);
    expect(component).toBeTruthy();
  });
});
