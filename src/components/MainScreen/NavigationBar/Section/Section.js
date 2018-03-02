import React from 'react'
import {
  Platform,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import styles from './styles'

const section = (props) => {
  return (
    <TouchableOpacity onPress={props.pressed} style={styles.section}>
      <Text style={styles.text}>{props.name}</Text>
    </TouchableOpacity>
  )
}

export default section