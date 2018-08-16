import 'react-native';
import { shallow } from 'enzyme';
import React from 'react';
import Beranda from './berandaScreen';

describe('Beranda Screen', () => {
  describe('render', () => {
    it('should render Beranda component', () => {
      const wrapper = shallow(<Beranda />);
      const berandaComponent = wrapper.find('BerandaComponent').first();
      expect(berandaComponent).toBeDefined();
    });
  });
});