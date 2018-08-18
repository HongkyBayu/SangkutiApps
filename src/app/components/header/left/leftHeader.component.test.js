import 'react-native';
import { shallow } from 'enzyme';
import React from 'react';
import LeftHeaderComponent from './leftHeader.component';

describe('LeftHeaderComponent', () => {
  let wrapper;
  let touchableComponent;
  const mockPressProps = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<LeftHeaderComponent openHamburgerDrawer={mockPressProps}/>);
    touchableComponent = wrapper.find('TouchableOpacity').first();
  });

  describe('render', () => {
    it('should render the TouchableOpacity component', () => {
      expect(touchableComponent).toBeDefined();
    });
    it('should render the icon of left header', () => {
      const iconComponent = wrapper.find('Icon').first();

      expect(iconComponent).toBeDefined();
    });

    it('should render the icon with props name equal to "menu"', () => {
      const iconProps = wrapper.find('Icon').props().name;

      expect(iconProps).toEqual('menu');
    });
  });

  describe('onPress', () => {
    it('should call the openHamburgerDrawer when user click', () => {
      touchableComponent.props().onPress();

      expect(mockPressProps).toHaveBeenCalled();
    });
  });
});