import ApiService from './api-service';

import RoomModel from '../models/room-model';
import MessageModel from '../models/message-model';

class RoomsService {
  static all(token) {
    return ApiService.get({
      url: 'rooms',
      authToken: token,
    }).then(rooms => (
      rooms.map(room => new RoomModel(room))
    ))
  }

  static find({ id, token }) {
    return ApiService.get({
      url: `rooms/${id}`,
      authToken: token,
    }).then(room => (
      new RoomModel(room)
    ))
  }

  static messages({ id, token }) {
    return ApiService.get({
      url: `rooms/${id}/messages`,
      authToken: token,
    }).then(messages => (
      messages.map(message => new MessageModel(message))
    ))
  }
}

export default RoomsService;