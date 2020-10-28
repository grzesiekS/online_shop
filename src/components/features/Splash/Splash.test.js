import React from 'react';
import {shallow} from 'enzyme';
import Splash from './Splash';

describe('Splash component', () => {
  const title = 'Lorem Ipsum';
  const image = 'Lorem.jpg';

  it('should render without crashing', () => {
    const component = shallow(<Splash />);
    expect(component).toBeTruthy();
  });

  it('should have title and image props', () => {
    const component = shallow(<Splash title={title} image={image} />);
    expect(component.find('.title').text()).toEqual('Lorem Ipsum');
    expect(component.find('.image').type()).toBe('img');
  });
});

