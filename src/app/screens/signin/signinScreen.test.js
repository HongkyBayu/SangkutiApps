import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import SignIn from './signinScreen';

describe('SignIn', () => {
  describe('render', () => {
    it('should render SignInComponent', () => {
      const wrapper = shallow(<SignIn />);

      const SignInComponent = wrapper.find('SignInComponent').first();

      expect(SignInComponent).toBeDefined();
    });
  });
});