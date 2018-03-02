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
import FloatingInfo from './FloatingInfo/FloatingInfo'

const event = (props) => {

  const renderInfo = () => {
    
  }

  return (
    <TouchableOpacity style={[styles.eventCard, styles[props.color]]} onPress={renderInfo}>
      <Image source={{uri: props.photo}} style={styles.eventImage} />

      <View 
          style={{
            position: 'absolute',
            borderRadius: 8,
            top: 4,
            width: '90%',
            height: '80%',
            backgroundColor: 'rgba(0, 0, 0, .6)'}}
      />
      
      <FloatingInfo
        time={props.time}
        duration={props.duration}
        location={props.location}
      />


      <Text style={styles.text.title}>{props.name}</Text>
      <Text>by {props.organizer}</Text>
    </TouchableOpacity>
  )
}

export default event
