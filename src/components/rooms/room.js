import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';

class Room extends Component {
  onRoomSelect = () => {
    const { id, onRoomPress } = this.props;

    onRoomPress(id);
  }

  render() {
    const { name, description } = this.props;
    
    return (
      <TouchableOpacity onPress={this.onRoomSelect} style={styles.container}>
        <Text style={styles.title}>{name}</Text>
        <Text>{description}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = {
  container: {
    padding: 15,
  },
  title: {
    fontSize: 16,
  }
}

export default Room;