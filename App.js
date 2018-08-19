/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { Dimensions } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';
import screens from './src/app/screens';
import { Beranda, Panen } from './src/app/screens/config/screenConfig';

const { width } = Dimensions.get('window');

let routeConfigs = {
  Beranda: {
    screen: screens.BerandaScreen
  },
  Panen: {
    screen: screens.PanenScreen
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
