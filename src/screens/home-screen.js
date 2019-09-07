import React, { Component } from 'react';
import { Text, View } from 'react-native';
import CurrentUser from '../helpers/current-user';

class HomeScreen extends Component {
  componentDidMount() {
    CurrentUser.get().then(user => {
      const { navigate } = this.props.navigation;

      if (user.token) navigate('Main');
      else navigate('Login');
    })
  }

  render() {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    )
  }
}

export default HomeScreen;