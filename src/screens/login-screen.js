import React, { Component } from 'react';
import { KeyboardAvoidingView, Text, TextInput, TouchableOpacity } from 'react-native';

import UsersService from '../services/users-service';
import CurrentUser from '../helpers/current-user';

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

  onSubmit = async () => {
    const { email, password } = this.state;

    const user = await UsersService.signIn({ email, password });
    await CurrentUser.assign(user);

    this.props.navigation.navigate('Home');
  }

  render() {
    const { email, password } = this.state;

    return (
      <KeyboardAvoidingView style={styles.container}>
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
      </KeyboardAvoidingView>
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