import 'react-native';
import { shallow } from 'enzyme';
import React from 'react';
import HeaderComponent from './header.component';

describe('Header', () => {
  let wrapper;
  let headerElement;
  const navigation = {
    openDrawer: jest.fn()
  };

  beforeEach(() => {
    wrapper = shallow(<HeaderComponent navigation={navigation}/>);
    headerElement = wrapper.find('Header').first();
  });
  describe('render', () => {
    it('should render Header component', () => {
      expect(headerElement).toBeDefined();
    });
  });

  describe('onPress', () => {
    it('should call the openDrawer() when onToggleDrawer is clicked ', () => {
      wrapper.instance()._onToggleDrawer();

      expect(navigation.openDrawer).toHaveBeenCalled();
    });
  });
});