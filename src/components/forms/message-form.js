import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/dist/Feather';

class MessageForm extends Component {
  state = {
    body: ''
  }

  onChangeBody = (value) => {
    this.setState({
      body: value
    })
  }

  onSubmit = () => {
    const { body } = this.state;

    this.props.onSubmit({ body });

    this.setState({
      body: ''
    }, () => {
      this.input.blur()
    })
  }

  render() {
    const { body } = this.state;

    return (
      <View style={styles.form}>
        <TextInput
          ref={(input) => { this.input = input }}
          onChangeText={this.onChangeBody}
          value={body}
          placeholder="Type a message"
          style={{...styles.input, ...(body !== '' ? {} : {width:'100%'})}}
          onSubmitEditing={this.onSubmit}
        />
        { body !== '' ? <TouchableOpacity style={styles.button} onPress={this.onSubmit}>
          <Icon style={styles.icon} name="send" size={26} />
        </TouchableOpacity> : null }
      </View>
    )
  }
}

const styles = {
  form: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    backgroundColor: 'rgba(255,255,255,alpha)',
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    fontSize: 14,
    padding: 12,
    paddingLeft: 19,
    borderWidth: 1.5,
    borderColor: '#6C98FF',
    borderRadius: 25,
    width: '80%',
  },
  button: {
    flex: 1,
    alignItems: 'center',
  },
  icon: {
    color: '#6C98FF',
  }

}

export default MessageForm;