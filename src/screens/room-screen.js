import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';

class RoomScreen extends Component {
  componentDidMount() {
    const id = this.props.navigation.state.params.id;
  }

  render() {
    return (
      <ScrollView>
        <Text>Hello World!</Text>
      </ScrollView>
    )
  }
}

export default RoomScreen;