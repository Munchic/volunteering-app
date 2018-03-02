import React from 'react';
import {
  Platform,
  Text,
  View,
  KeyboardAvoidingView,
  Image,
  StatusBar
} from 'react-native';

import styles from './styles'
import LoginForm from './LoginForm/LoginForm'

const LoginScreen = (props) => {
  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
      {StatusBar.setBarStyle('light-content', true)}
      <View style={styles.statusBar} />
      <Image 
        source={require('./Trailer.gif')}  
        style={styles.background}
      />
      <Text style={styles.logo}>HSV</Text>
      <LoginForm pressed={props.pressed}/>
    </KeyboardAvoidingView>
  );
}

export default LoginScreen