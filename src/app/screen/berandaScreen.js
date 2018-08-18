/**
 * Rangga Bayu Triachyani
 * ranggaaabayu@gmail.com - ranggaaabayu@icloud.com
 * Github : HongkyBayu
 *
 * Represents Root of Beranda Screen
 */

import React, { Component } from 'react';
import { Icon } from 'react-native-elements';
import BerandaComponent from '../components/beranda/beranda.component';
import { ScreenBeranda } from './screenConfig';

export default class Beranda extends Component {
  static navigationOptions = ({ navigation }) => {
    let drawerLabel = ScreenBeranda;
    let drawerIcon = () => (
      <Icon name='Home'/>
    );

    return { drawerLabel, drawerIcon };
  };

  render() {
    return (
      <BerandaComponent title={ScreenBeranda}/>
    )
  }
}