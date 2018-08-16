import 'react-native';
import { shallow } from 'enzyme';
import React from 'react';
import Panen from './panenScreen';

describe('Beranda Screen', () => {
  describe('render', () => {
    it('should render Beranda component', () => {
      const wrapper = shallow(<Panen />);
      const panenComponent = wrapper.find('PanenComponent').first();
      expect(panenComponent).toBeDefined();
    });
  });
});