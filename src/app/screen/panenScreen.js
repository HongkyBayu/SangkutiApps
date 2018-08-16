/**
 * Rangga Bayu Triachyani
 * ranggaaabayu@gmail.com - ranggaaabayu@icloud.com
 * Github : HongkyBayu
 *
 * Represents Root of Panen Screen
 */

import React, { Component } from 'react';
import { Icon } from 'react-native-elements';
import { ScreenPanen } from './screenConfig';
import PanenComponent from '../components/panen/panen.component';

export default class Beranda extends Component {
  static navigationOptions = {
    drawerLabel: ScreenPanen,
    drawerIcon: () => (
      <Icon name='Home'/>
    ),
  };

  render() {
    return (
      <PanenComponent />
    )
  }
}