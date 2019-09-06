import React, { Component } from 'react';
import { AsyncStorage, View, Text, TextInput, TouchableOpacity } from 'react-native';

import UsersService from '../services/users-service';

class LoginScreen extends Component {
  state = {
    email: '',
    password: '',
  }

  onChangeEmail = (email) => {
    this.setState({ email })
  }

  onChangePassword = (password) => {
    this.setState({ password })
  }

  onSubmit = () => {
    const { email, password } = this.state;

    UsersService.signIn({ email, password }).then(token => {
      AsyncStorage.setItem('authenticateToken', token).then(() => {
        this.props.navigation.navigate('Home')
      })
    })
  }

  render() {
    const { email, password } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.header}>Log in</Text>
        <TextInput
          style={styles.input}
          onChangeText={this.onChangeEmail}
          value={email}
          placeholder="Email"
          autoCompleteType="email"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          onChangeText={this.onChangePassword}
          value={password}
          placeholder="Password"
          secureTextEntry={true}
          autoCapitalize="none"
        />
        <TouchableOpacity style={styles.button} onPress={this.onSubmit}>
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = {
  container: {
    padding: 25,
    flex: 1,
    marginTop: 100,
    flexDirection: 'column',
    textAlign: 'center',
  },
  header: {
    fontSize: 29,
    fontWeight: "800",
    marginBottom: 25,
    color: '#6C98FF',
  },
  input: {
    fontSize: 14,
    padding: 12,
    paddingLeft: 19,
    borderWidth: 1.5,
    borderColor: '#6C98FF',
    borderRadius: 25,
    marginTop: 5,
    marginBottom: 10,
  },
  button: {
    padding: 10,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: '#6C98FF',
    marginTop: 15,
    borderRadius: 25,
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#EAECFF',
  }
}

export default LoginScreen;