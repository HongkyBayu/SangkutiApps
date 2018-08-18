import 'react-native';
import { shallow } from 'enzyme';
import React from 'react';
import LeftHeaderComponent from './leftHeader.component';

describe('LeftHeaderComponent', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<LeftHeaderComponent />);
  });

  describe('render', () => {
    it('should render the icon of left header', () => {
      const iconComponent = wrapper.find('Icon').first();

      expect(iconComponent).toBeDefined();
    });

    it('should render the icon with props name equal to "menu"', () => {
      const iconProps = wrapper.find('Icon').props().name;

      expect(iconProps).toEqual('menu');
    });
  });
});