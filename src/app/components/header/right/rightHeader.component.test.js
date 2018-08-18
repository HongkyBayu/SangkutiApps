import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import RightHeaderComponent from './rightHeader.component';

describe('RightHeaderComponent', () => {
  let wrapper;
  let iconComponent;

  beforeEach(() => {
    wrapper = shallow(<RightHeaderComponent />);
    iconComponent = wrapper.find('Icon').first();
  });
  describe('render', () => {
    it('should render the icon component', () => {
      expect(iconComponent).toBeDefined();
    });

    it('should render the icon component with props name equals to "person"', () => {
      const iconPropsName = iconComponent.props().name;

      expect(iconPropsName).toEqual('person');
    });
  });
});