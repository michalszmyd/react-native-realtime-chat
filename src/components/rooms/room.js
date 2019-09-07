import React, { Component } from 'react';
import { KeyboardAvoidingView } from 'react-native';

import Conversation from '../messages/conversation';
import RoomsService from '../../services/rooms-service';
import CurrentUser from '../../helpers/current-user';

import MessageForm from '../forms/message-form';

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

  sendMessage = (attributes) => {
    RoomsService.sendMessage({
      roomId: this.props.roomId,
      ...attributes,
    }).then(message => {
      this.setState({
        messages: this.state.messages.concat([message])
      })
    })
  }

  render() {
    const { messages, currentUserId } = this.state;

    return (
      <KeyboardAvoidingView style={{flex:1}} behavior="height" keyboardVerticalOffset={60}>
        <Conversation
          currentUserId={currentUserId}
          messages={messages}
        />
        <MessageForm
          onSubmit={this.sendMessage}
        />
      </KeyboardAvoidingView>
    )
  }
}

export default Room;