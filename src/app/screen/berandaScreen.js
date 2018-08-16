import React, { Component } from 'react';
import { Icon } from 'react-native-elements';
import BerandaComponent from '../../../src/app/components/beranda/beranda.component';
import { ScreenBeranda } from '../../../src/app/screen/screenConfig';

export default class Beranda extends Component {
  static navigationOptions = {
    drawerLabel: ScreenBeranda,
    drawerIcon: () => (
      <Icon name='Home'/>
    ),
  };

  render() {
    return (
      <BerandaComponent/>
    )
  }
}