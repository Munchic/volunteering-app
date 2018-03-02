import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import * as firebase from 'firebase';

import Event from './Event/Event'

import styles from './styles'

var config = {
  apiKey: "AIzaSyA7pp-ODqJ4BxcMXsr9izCj_JoPIC_5SBo",
  authDomain: "hsv-events-database.firebaseapp.com",
  databaseURL: "https://hsv-events-database.firebaseio.com",
  projectId: "hsv-events-database",
  storageBucket: "hsv-events-database.appspot.com",
  messagingSenderId: "626247394764"
};

firebase.initializeApp(config);

const database = firebase.database()
const eventsRef = database.ref('events')

class Events extends Component {
  state = {
    events: [
      {name: 'Barbeque Night', time: '12:00pm - Jan 30, 2017', color: 'paid'},
      {name: 'Free Yoga Class', time: '6:30pm - Jan 31, 2017', color: 'paid'},
      {name: 'Barbeque Night', time: '12:00pm - Jan 30, 2017', color: 'free'},
      {name: 'Barbeque Night', time: '12:00pm - Jan 30, 2017', color: 'paid'},
      {name: 'Barbeque Night', time: '12:00pm - Jan 30, 2017', color: 'free'},
    ]
  }

  componentDidMount () {
    eventsRef.on('value', gotData, errData)

    function gotData(data) {
      const a = data.val()
      this.fetchDataHandler(a)
    }

    function errData(err) {
      alert(err)
    }


  }

  render () {

    fetchDataHandler = (data) => {
      this.setState({
        events: data,
      })
    }

    const events = (
      <View style={styles.container}>
        {this.state.events.map((event, index) =>
          <Event
            name={event.name}
            time={event.time}
            organizer={event.organizer}
            duration={event.duration}
            location={event.location}
            color={event.color}
            photo={event.photo}
            key={index}
          />
        )}
      </View>
    )
    
    return (
      <ScrollView>
        {events}
      </ScrollView>
    )
  }
}

export default Events
