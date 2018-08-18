import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import CenterHeaderComponent from './centerHeader.component';

describe('CenterHeaderComponent', () => {
  let wrapper;
  let textComponent;

  beforeEach(() => {
    wrapper = shallow(<CenterHeaderComponent textTitle={'Home'}/>);
    textComponent = wrapper.find('Text').first();
  });

  describe('render', () => {
    it('should render the text component', () => {
      expect(textComponent).toBeDefined();
    });

    it('should render the text component with props textTitle equals "Home"', () => {
      expect(wrapper.props().children).toEqual('Home');
    });
  });
});