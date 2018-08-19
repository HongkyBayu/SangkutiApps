/**
 * Rangga Bayu Triachyani
 * ranggaaabayu@gmail.com - ranggaaabayu@icloud.com
 * Github : HongkyBayu
 *
 * Represents the Sign In component
 */

import React, { Component } from 'react';
import { View, Button } from 'react-native';
import {
  FormLabel,
  FormInput,
  FormValidationMessage
} from 'react-native-elements'

export default class SignInComponent extends Component {
  render() {
    return (
      <View>
        <FormLabel>Email</FormLabel>
        <FormInput/>
        <FormLabel>Password</FormLabel>
        <FormInput/>
        <Button title={'Sign In'}/>
      </View>
    )
  }
}
