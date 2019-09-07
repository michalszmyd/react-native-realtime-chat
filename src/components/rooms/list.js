import React, { Component } from 'react';
import { ScrollView, RefreshControl } from 'react-native';

import RoomsService from '../../services/rooms-service';
import Room from './item';

import CurrentUser from '../../helpers/current-user';

class Rooms extends Component {
  state = {
    rooms: [],
    filteredRooms: [],
    refreshing: false,
  }

  componentDidMount() {
    this.fetchRooms()
  }

  fetchRooms = (additionalState = {}) => {
    CurrentUser.get().then(user => {
      const { token } = user;

      RoomsService.all(token).then(rooms => {
        this.setState({
          rooms,
          filteredRooms: rooms,
          ...additionalState,
        })
      })
    })
  }

  onRefresh = () => {
    this.setState({
      refreshing: true,
    }, () => {
      this.fetchRooms({ refreshing: false });
    })
  }

  render() {
    const {
      state: {
        filteredRooms,
        refreshing,
      },
      props: {
        onRoomPress,
      }
    } = this;

    return (
      <ScrollView
        style={styles.container}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={this.onRefresh}
          />
        }
      >
        {/* <SearchBar /> */}
        {filteredRooms.map(room => (
          <Room
            key={room.id}
            {...room}
            onRoomPress={onRoomPress}
          />
        ))}
      </ScrollView>
    )
  }
}

const styles = {
  container: {
    padding: 5,
    marginTop: 5,
  }
}

export default Rooms;