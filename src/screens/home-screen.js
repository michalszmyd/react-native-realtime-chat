import React, { Component } from 'react';
import { Text, View, ScrollView, AsyncStorage } from 'react-native';

class HomeScreen extends Component {
  componentDidMount() { 
    AsyncStorage.getItem('authToken').then(token => {
      const { replace } = this.props.navigation;

      if (token) {
        alert('Logged in');
      } else {
        replace('Login');
      }
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