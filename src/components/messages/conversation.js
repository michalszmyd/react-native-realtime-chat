import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Message from './message';

class Conversation extends Component {
  componentDidMount() {
    this.conversation.scrollToEnd()
  }

  componentDidUpdate() {
    this.conversation.scrollToEnd()
  }

  render() {
    const { messages, currentUserId } = this.props;

    return (
      <ScrollView
        ref={(conversation) => {
          this.conversation = conversation
        }}
        style={styles.container}>
        {messages.map(message => (
          <Message
            currentUserId={currentUserId}
            key={message.id}
            {...message}
          />
        ))}
      </ScrollView>
    )
  }
}

const styles = {
  container: {
    padding: 15,
  }
}

export default Conversation;