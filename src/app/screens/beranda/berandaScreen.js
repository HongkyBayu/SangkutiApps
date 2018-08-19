/**
 * Rangga Bayu Triachyani
 * ranggaaabayu@gmail.com - ranggaaabayu@icloud.com
 * Github : HongkyBayu
 *
 * Represents Root of Beranda Screen
 */

import React, { Component } from 'react';
import { Icon } from 'react-native-elements';
import BerandaComponent from '../../components/beranda/beranda.component';

export default class Beranda extends Component {
  static navigationOptions = {
    drawerLabel: 'Beranda',
    drawerIcon: () => (
      <Icon name='home'/>
    ),
  };

  render() {
    return (
      <BerandaComponent navigation={this.props.navigation}/>
    )
  }
}