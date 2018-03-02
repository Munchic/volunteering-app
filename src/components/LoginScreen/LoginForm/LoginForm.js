import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import styles from './styles'

const LoginForm = (props) => {
  return (
    <View style={styles.loginForm}>
      <TextInput placeholder='Username' autoCapitalize='none' autoCorrect={false} style={styles.textInput} />
      <TextInput placeholder='Password' autoCapitalize='none' secureTextEntry={true} style={styles.textInput} />
      <TouchableOpacity style={styles.loginButton} onPress={props.pressed}>
        <Text style={styles.loginText}>Sign in</Text>
      </TouchableOpacity>
    </View>
  );
}

export default LoginForm