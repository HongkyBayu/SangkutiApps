import 'react-native';
import { shallow } from 'enzyme';
import React from 'react';
import Panen from './panenScreen';

describe('Panen Screen', () => {
  let wrapper;
  let panenComponent;

  beforeEach(() => {
    wrapper = shallow(<Panen />);
    panenComponent = wrapper.find('PanenComponent').first();
  });
  describe('render', () => {
    it('should render Panen component', () => {
      expect(panenComponent).toBeDefined();
    });

    it('should render Panen component with props title equals to "Panen"', () => {
      const panenTitle = panenComponent.props().title;

      expect(panenTitle).toEqual('Panen');
    });
  });
});