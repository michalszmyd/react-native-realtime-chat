import ApiService from './api-service';
import UserModel from '../models/user-model';

class UsersService {
  static async signIn({ email, password }) {
    const body = {
      email,
      password,
    }

    return ApiService.post({
      url: 'authentications',
      body: JSON.stringify(body),
    }).then((attributes) => {
      return new UserModel(attributes);
    })
  }
}

export default UsersService;