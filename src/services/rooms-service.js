import ApiService from './api-service';

class RoomsService {
  static all(token) {
    return ApiService.get({
      url: 'rooms',
      authToken: token,
    })
  }
}

export default RoomsService;