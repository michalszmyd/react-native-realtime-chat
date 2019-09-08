import React, { Component, Fragment } from 'react';
import { Text } from 'react-native';

import Room from '../components/rooms/room';
import GlobalContext from '../contexts/global-context';

class RoomScreen extends Component {
  static contextType = GlobalContext;

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
      <Fragment>
        <Text style={styles.header}>Group chat</Text>
        { id ?
          <Room roomId={id} /> :
          <Text>Loading...</Text>
        }
      </Fragment>
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