import {
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeScreen from '../screens/home-screen';
import LoginScreen from '../screens/login-screen';

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Login: {
    screen: LoginScreen,
  }
});

const BottomStack = createBottomTabNavigator({
  Home: HomeStack,
})

const Navigator = createAppContainer(BottomStack)

export default Navigator;