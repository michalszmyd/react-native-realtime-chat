import ApiService from './api-service';

import RoomModel from '../models/room-model';
import MessageModel from '../models/message-model';
import CurrentUser from '../helpers/current-user';

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

  static async messages({ id, token }) {
    const user = await CurrentUser.get();

    return ApiService.get({
      url: `rooms/${id}/messages`,
      authToken: user.token,
    }).then(messages => (
      messages.map(message => new MessageModel(message))
    ))
  }

  static async sendMessage({ roomId, body }) {
    const user = await CurrentUser.get();

    return ApiService.post({
      url: `rooms/${roomId}/messages`,
      authToken: user.token,
      body: JSON.stringify({ body })
    }).then(message => new MessageModel(message))
  }
}

export default RoomsService;