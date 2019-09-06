import React, { Component } from 'react';
import { Text, View, AsyncStorage } from 'react-native';

class HomeScreen extends Component {
  componentDidMount() { 
    AsyncStorage.getItem('authenticateToken').then(token => {
      const { navigate } = this.props.navigation;

      if (token) navigate('Main');
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