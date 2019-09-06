import {
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeScreen from '../screens/home-screen';
import LoginScreen from '../screens/login-screen';
import RoomsScreen from '../screens/rooms-screen';
import RoomScreen from '../screens/room-screen';

const LoginSwitches = createSwitchNavigator({
  Login: {
    screen: LoginScreen,
  }
})

const RoomsStack = createStackNavigator({
  Rooms: {
    screen: RoomsScreen
  },
  Room: {
    screen: RoomScreen
  }
})

const MainScreen = createBottomTabNavigator({
  Rooms: RoomsStack,
})

const HomeStack = createSwitchNavigator({
  Home: {
    screen: HomeScreen,
  },
  Login: {
    screen: LoginSwitches,
  },
  Main: {
    screen: MainScreen
  }
});


const Navigator = createAppContainer(HomeStack)

export default Navigator;