import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Message from './message';

class Conversation extends Component {
  componentDidUpdate() {
    this.moveToBottom()
  }

  moveToBottom = () => {
    if (!this.conversation) return;

    this.conversation.scrollToEnd({ animated: false })
  }

  render() {
    const { messages, currentUserId } = this.props;

    return (
      <ScrollView
        snapToEnd={true}
        ref={(conversation) => {
          this.conversation = conversation;
        }}
        onContentSizeChange={this.moveToBottom}
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