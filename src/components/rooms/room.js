import React, { Component } from 'react';
import { KeyboardAvoidingView } from 'react-native';

import Conversation from '../messages/conversation';
import RoomsService from '../../services/rooms-service';
import RoomWebsocketService from '../../services/room-websocket-service';
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
      });

      this.initializeWebsocket();
    })
  }

  componentWillUnmount() {
    this.websocket.disconnect();
  }

  initializeWebsocket = () => {
    const { props: { roomId }, pushMessage } = this;

    this.websocket = new RoomWebsocketService(
      roomId,
      pushMessage
    );
  }

  pushMessage = (message) => {
    const { roomId } = this.props;

    if (message.roomId === roomId) {
      this.setState((state) => (
        { messages: state.messages.concat(message) }
      ))
    }
  }

  sendMessage = (attributes) => {
    RoomsService.sendMessage({
      roomId: this.props.roomId,
      ...attributes,
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