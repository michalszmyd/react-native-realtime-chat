import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';

import Rooms from '../components/rooms/list';

class RoomsScreen extends Component {
  onRoomChange = (roomId) => {
    this.props.navigation.navigate('Room', { id: roomId })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Rooms</Text>
        <Rooms onRoomPress={this.onRoomChange} />
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
  },
  header: {
    padding: 15,
    fontSize: 24,
    fontWeight: '600',
  }
}

export default RoomsScreen;