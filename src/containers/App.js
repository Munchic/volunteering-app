/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import LoginScreen from '../components/LoginScreen/LoginScreen'
import MainScreen from '../components/MainScreen/MainScreen'

export default class App extends Component {
  state = {
    screen: 'login'
  }

  loginHandler = () => {
    this.setState({
      screen: 'main'
    })
  }

  render() {
    currentScreen = null

    switch (this.state.screen) {
      case 'login':
        currentScreen = <LoginScreen pressed={this.loginHandler}/>
        break;
      case 'main':
        currentScreen = <MainScreen />
        break;
    }
    
    return (
      <View style={styles.container}>
        {currentScreen}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(247, 247, 247)',
  },
});
