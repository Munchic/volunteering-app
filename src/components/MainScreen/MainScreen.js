import React, { Component } from 'react';
import {
  Platform,
  Text,
  View,
  ScrollView,
  StatusBar
} from 'react-native';

import Events from './Events/Events'
import Filter from './Filter/Filter'
import NavigationBar from './NavigationBar/NavigationBar'

import styles from './styles'

export default class MainScreen extends Component {
  state = {
    screen: 'feed'
  }

  render() {
    return (
      <View style={styles.container}>
        {StatusBar.setBarStyle('dark-content', true)}
        <View style={styles.statusBar} />
          <Events />
        <NavigationBar />
      </View>
    );
  }
}

