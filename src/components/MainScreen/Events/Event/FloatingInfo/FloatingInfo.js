import React from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import styles from './styles'

const floatingInfo = (props) => {
  return (
    <View style={styles.overlay}>
      <View style={styles.topLeft}>
        <Text style={styles.text}>{props.time}</Text>
      </View>

      <View style={styles.topRight}>
        <Text style={styles.text}>{props.duration}</Text>
      </View>

      <View style={styles.bottomLeft}>
        <Text style={styles.text}>{props.location}</Text>
      </View>
    </View>
  )
}

export default floatingInfo