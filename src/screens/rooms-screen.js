import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';

import RoomsService from '../services/rooms-service';

class RoomsScreen extends Component {
  state = {
    rooms: []
  }

  componentDidMount() {
    AsyncStorage.getItem('authenticateToken').then(token => {
      RoomsService.all(token).then(rooms => {
        this.setState({
          rooms
        });
      })
    })
  }

  render() {
    const { rooms } = this.state;

    return (
      <View>
        <Text>Hello from rooms</Text>
        <Text>{JSON.stringify(rooms)}</Text>
      </View>
    )
  }
}

export default RoomsScreen;