import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import SignInComponent from './signin.component';

describe('SignInComponent', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SignInComponent />);
  });
  describe('render', () => {
    it('should render View component', () => {
      const viewComponent = wrapper.find('View').first();

      expect(viewComponent).toBeDefined();
    });

    it('should render FormLabel component', () => {
      const formLabelComponent = wrapper.find('FormLabel').first();

      expect(formLabelComponent).toBeDefined();
    });

    it('should render FormInput component', () => {
      const formInputComponent = wrapper.find('FormInput').first();

      expect(formInputComponent).toBeDefined();
    });

    it('should render Button component', () => {
      const buttonComponent = wrapper.find('Button').first();

      expect(buttonComponent).toBeDefined();
    });
  });
});