import React from 'react'
import {
  Platform,
  Text,
  View,
  Image
} from 'react-native';

import Section from './Section/Section'

import styles from './styles'

const navigationBar = (props) => {
  const sections = [
    'search',
    'filter',
    'feed',
    'history',
    'profile']

  return (
    <View style={styles.navigationBar}>
      {sections.map((section, index) => 
        <Section
          name={section}
          key={index}
        />
      )}
    </View>
  )
}

export default navigationBar