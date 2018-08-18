/**
 * Rangga Bayu Triachyani
 * ranggaaabayu@gmail.com - ranggaaabayu@icloud.com
 * Github : HongkyBayu
 *
 * Represents Root of Panen Screen
 */

import React, { Component } from 'react';
import { Image } from 'react-native';
import { Icon } from 'react-native-elements';
import PanenComponent from '../components/panen/panen.component';

export default class Beranda extends Component {
  static navigationOptions = {
    drawerLabel: 'Panen',
    drawerIcon: () => (
      <Image>
        <Icon name='Home'/>
      </Image>
    ),
  };

  render() {
    return (
      <PanenComponent navigation={this.props.navigation}/>
    )
  }
}