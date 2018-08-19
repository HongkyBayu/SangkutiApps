import { AsyncStorage } from 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import generateToken from '../../../fixtures/AuthenticationTestData';
import AuthLoadingComponent from './authLoading.component';

jest.mock('react-native', () => ({
  AsyncStorage: {
    getItem: jest.fn(() => {
      return new Promise((resolve, reject) => {
        resolve(JSON.stringify(generateToken));
      });
    }),
  }
}));

describe('AuthLoadingComponent', () => {
  let wrapper;
  const mockNavigation = {
    navigation : {
      navigate: jest.fn()
    }
  };

  beforeEach(() => {
    wrapper = shallow(<AuthLoadingComponent navigation={mockNavigation}/>)
  });

  describe('render', () => {
    it('should render View component', () => {
      const viewComponent = wrapper.find('View').first();

      expect(viewComponent).toBeDefined();
    });
  });
});