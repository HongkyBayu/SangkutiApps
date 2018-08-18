import 'react-native';
import { shallow } from 'enzyme';
import React from 'react';
import Beranda from './berandaScreen';

describe('Beranda Screen', () => {
  let wrapper;
  let berandaComponent;

  beforeEach(() => {
    wrapper = shallow(<Beranda />);
    berandaComponent = wrapper.find('BerandaComponent').first();
  });
  describe('render', () => {
    it('should render Beranda component', () => {
      expect(berandaComponent).toBeDefined();
    });

    it('should render Beranda component with props title equals to "Beranda"', () => {
      const berandaTitle = berandaComponent.props().title;

      expect(berandaTitle).toEqual('Beranda');
    });
  });
});