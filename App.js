/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { Dimensions } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';

import BerandaComponent from './src/app/components/beranda/beranda.component';
import PanenComponent from './src/app/components/panen/panen.component';

import { Beranda, Panen } from './src/app/screen/screenConfig';

const { width } = Dimensions.get('window');

let routeConfigs = {
  Beranda: {
    screen: BerandaComponent
  },
  Panen: {
    screen: PanenComponent
  }
};

let drawerNavigatorConfigs = {
  initialRouteName: Beranda,
  drawerWidth: width / 2,
  drawerPosition: 'left',
  contentOptions: {
    activeTintColor: 'red'
  }
};

export default createDrawerNavigator(routeConfigs, drawerNavigatorConfigs);
