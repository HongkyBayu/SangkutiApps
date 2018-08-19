/**
 * Rangga Bayu Triachyani
 * ranggaaabayu@gmail.com - ranggaaabayu@icloud.com
 * Github : HongkyBayu
 *
 * Represents the root Sign In screen
 */

import React, { Component } from 'react';
import SignInComponent from '../../components/signin/signin.component';

export default class SignIn extends Component {
  static navigationOptions = {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  };

  render() {
    return (
      <SignInComponent />
    )
  }
}
