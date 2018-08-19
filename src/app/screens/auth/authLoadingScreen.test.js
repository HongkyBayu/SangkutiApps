import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import AuthLoading from './authLoadingScreen';

describe('AuthLoading', () => {
  describe('render', () => {
    it('should render AuthLoadingComponent', () => {
      const wrapper = shallow(<AuthLoading />);

      const authLoadingComponent = wrapper.find('AuthLoadingComponent').first();

      expect(authLoadingComponent).toBeDefined();
    });
  });
});