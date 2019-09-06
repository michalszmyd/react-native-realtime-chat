import ApiService from './api-service';

import RoomModel from '../models/room-model';

class RoomsService {
  static all(token) {
    return ApiService.get({
      url: 'rooms',
      authToken: token,
    }).then(rooms => (
      rooms.map(room => new RoomModel(room))
    ))
  }
}

export default RoomsService;