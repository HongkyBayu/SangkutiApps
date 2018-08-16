/**
 * Rangga Bayu Triachyani
 * ranggaaabayu@gmail.com - ranggaaabayu@icloud.com
 * Github : HongkyBayu
 *
 * Represents Beranda Components
 */

import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class BerandaComponent extends Component {
  render() {
    return (
      <View>
        <Text>Beranda</Text>
        <Button title='Go to Panen'/>
      </View>
    )
  }
}