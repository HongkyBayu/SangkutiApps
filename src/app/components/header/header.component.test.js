import 'react-native';
import { shallow } from 'enzyme';
import React from 'react';
import HeaderComponent from './header.component';

describe('Header', () => {
  describe('render', () => {
    it('should render Header component', () => {
      const wrapper = shallow(<HeaderComponent />);
      const headerElement = wrapper.find('Header').first();

      expect(headerElement).toBeDefined();
    });
  });
});