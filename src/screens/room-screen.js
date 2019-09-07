import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Room from '../components/rooms/room';

class RoomScreen extends Component {
  state = {
    id: null,
  }

  componentDidMount() {
    const { id } = this.props.navigation.state.params;

    this.setState({ id, name });
  }

  render() {
    const { id } = this.state;

    return (
      <View style={{flex:1}}>
        <Text style={styles.header}>Group chat</Text>
        { id ?
          <Room roomId={id} /> :
          <Text>Loading...</Text>
        }
      </View>
    )
  }
}

const styles = {
  header: {
    padding: 15,
    fontSize: 24,
    fontWeight: '600',
  }
}

export default RoomScreen;