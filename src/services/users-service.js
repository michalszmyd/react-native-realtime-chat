import ApiService from './api-service';

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
      return attributes.authentication_token;
    })
  }
}

export default UsersService;