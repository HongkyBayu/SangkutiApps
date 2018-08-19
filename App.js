/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { Dimensions } from 'react-native';
import {
  createDrawerNavigator,
  createStackNavigator,
  createSwitchNavigator
} from 'react-navigation';
import screens from './src/app/screens';
import { Beranda, Panen, AuthLoading, SignIn } from './src/app/screens/config/screenConfig';

const { width } = Dimensions.get('window');

let drawerRoutes = {
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

let authRoute = {
  SignIn: screens.SignInScreen
};

const AppStack = createDrawerNavigator(drawerRoutes, drawerNavigatorConfigs);
const AuthStack = createStackNavigator(authRoute);

let switchRoutes = {
  AuthLoading: screens.AuthLoadingScreen,
  App: AppStack,
  Auth: AuthStack
};

let switchNavigatorConfig = {
  initialRouteName: AuthLoading
};

export default createSwitchNavigator(switchRoutes, switchNavigatorConfig);
