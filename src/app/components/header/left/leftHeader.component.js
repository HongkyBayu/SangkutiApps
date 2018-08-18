/**
 * Rangga Bayu Triachyani
 * ranggaaabayu@gmail.com - ranggaaabayu@icloud.com
 * Github : HongkyBayu
 *
 * Represents the left header configuration
 */

import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

export default class LeftHeaderComponent extends Component {
  render() {
    const { openHamburgerDrawer } = this.props;
    return (
      <TouchableOpacity onPress={openHamburgerDrawer}>
        <Icon name='menu'/>
      </TouchableOpacity>

    )
  }
}