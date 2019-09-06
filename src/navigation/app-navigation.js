import {
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeScreen from '../screens/home-screen';
import LoginScreen from '../screens/login-screen';
import RoomsScreen from '../screens/rooms-screen';

const LoginStack = createSwitchNavigator({
  Login: {
    screen: LoginScreen,
  }
})

const MainScreen = createBottomTabNavigator({
  Rooms: RoomsScreen,
})

const HomeStack = createSwitchNavigator({
  Home: {
    screen: HomeScreen,
  },
  Login: {
    screen: LoginStack,
  },
  Main: {
    screen: MainScreen
  }
});


const Navigator = createAppContainer(HomeStack)

export default Navigator;