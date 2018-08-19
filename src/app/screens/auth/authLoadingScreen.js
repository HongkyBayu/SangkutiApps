/**
 * Rangga Bayu Triachyani
 * ranggaaabayu@gmail.com - ranggaaabayu@icloud.com
 * Github : HongkyBayu
 *
 * Represents the root of Authentication Loading Screen
 */

import React, { Component } from 'react';
import AuthLoadingComponent from '../../components/auth/authLoading.component';

export default class AuthLoading extends Component {
  render() {
    return (
      <AuthLoadingComponent navigation={this.props.navigation}/>
    )
  }
}