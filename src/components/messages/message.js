import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Message extends Component {
  render() {
    const {
      body,
      user: { username, id },
      currentUserId,
    } = this.props;

    const ownMessage = id === currentUserId;

    if (ownMessage) {
      return (
        <View style={styles.ownMessage}>
          <Text>You</Text>
          <View style={styles.ownBody}>
            <Text>{body}</Text>
          </View>
        </View>
      )
    } else {
      return (
        <View style={styles.message}>
          <Text>{username}</Text>
          <View style={styles.body}>
            <Text style={styles.text}>{body}</Text>
          </View>
        </View>
      )
    }
  }
}

const globalStyles = {
  message: {
    marginTop: 10,
    marginBottom: 10,
  },
  body: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 15,
    paddingRight: 15,
    maxWidth: '70%',
  }
}

const styles = {
  message: {
    ...globalStyles.message,
    alignItems:'flex-start',
  },
  ownMessage: {
    ...globalStyles.message,
    alignItems:'flex-end',
  },
  body: {
    ...globalStyles.body,
    backgroundColor: '#EAEAEA',
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  ownBody: {
    ...globalStyles.body,
    backgroundColor: '#4484FF',
    borderTopLeftRadius: 25,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  ownText: {
    color: '#EAEAEA',
  }
}

export default Message;