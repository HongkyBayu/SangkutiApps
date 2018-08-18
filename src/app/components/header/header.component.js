/**
 * Rangga Bayu Triachyani
 * ranggaaabayu@gmail.com - ranggaaabayu@icloud.com
 * Github : HongkyBayu
 *
 * Represents the header configuration
 */

import React, { Component } from 'react';
import { Header } from 'react-native-elements';
import LeftHeaderComponent from './left/leftHeader.component';
import CenterHeaderComponent from './center/centerHeader.component';
import RightHeaderComponent from './right/rightHeader.component';

export default class HeaderComponent extends Component {
  render() {
    const { headerTitle } = this.props;
    return (
      <Header
        leftComponent={<LeftHeaderComponent />}
        centerComponent={<CenterHeaderComponent textTitle={headerTitle}/>}
        rightComponent={<RightHeaderComponent />}
      />
    )
  }
}