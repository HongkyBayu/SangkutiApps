/**
 * Rangga Bayu Triachyani
 * ranggaaabayu@gmail.com - ranggaaabayu@icloud.com
 * Github : HongkyBayu
 *
 * Represents Beranda Components
 */

import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import HeaderComponent from '../header/header.component';

export default class BerandaComponent extends Component {
  render() {
    const { title } = this.props;
    return (
      <View>
        <HeaderComponent headerTitle={title}/>
        <Text>Beranda</Text>
        <Button title='Go to Panen'/>
      </View>
    )
  }
}