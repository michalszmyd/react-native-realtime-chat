import WebsocketsService from './websocket-service';
import MessageModel from '../models/message-model';

const CONNECTION_NAME = 'AppChannel';

class RoomWebsocketService {
  constructor(roomId, callback) {
    this.roomListender = new WebsocketsService;
    this.roomListender.createSubscription(CONNECTION_NAME, (payload) => {
      const message = new MessageModel(payload.data);

      if (message.roomId === roomId) callback(message);
    });
  }

  disconnect = () => {
    this.roomListender.removeSubscription(`${CONNECTION_NAME}Subscription`)
  }
}

export default RoomWebsocketService;