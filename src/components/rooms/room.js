import React, { Component } from 'react';

import Conversation from '../messages/conversation';
import RoomsService from '../../services/rooms-service';

import CurrentUser from '../../helpers/current-user';

class Room extends Component {
  state = {
    messages: [],
  }

  componentDidMount() {
    const { roomId } = this.props;

    CurrentUser.get().then(user => {
      const { id, token } = user;

      RoomsService.messages({ id: roomId, token }).then(messages => {
        this.setState({
          messages,
          currentUserId: id,
        });
      })
    })
  }

  render() {
    const { messages, currentUserId } = this.state;

    return (
      <Conversation
        currentUserId={currentUserId}
        messages={messages}
      />
    )
  }
}

export default Room;