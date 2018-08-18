/**
 * Rangga Bayu Triachyani
 * ranggaaabayu@gmail.com - ranggaaabayu@icloud.com
 * Github : HongkyBayu
 *
 * Represents Panen Component
 */

import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import HeaderComponent from '../header/header.component';

export default class PanenComponent extends Component {
  render() {
    const { title } = this.props;
    return (
      <View>
        <HeaderComponent headerTitle='Panen' {...this.props}/>
        <Text>Panen</Text>
        <Button title='Go to Beranda'/>
      </View>
    )
  }
}