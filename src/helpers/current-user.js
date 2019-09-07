import { AsyncStorage } from 'react-native';

class CurrentUser {
  static async get() {
    const user = await AsyncStorage.getItem('user');

    return user ? JSON.parse(user) : {};
  }

  static async assign(user) {
    await AsyncStorage.setItem('user', JSON.stringify(user));

    return user;
  }

  static async destroy() {
    return await AsyncStorage.removeItem('user');
  }
}

export default CurrentUser;