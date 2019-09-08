import ActionCable from 'react-native-actioncable'

const WEBSOCKET_URL = 'ws://localhost:3334/cable';

class WebsocketService {
  constructor() {
    this.cable = ActionCable.createConsumer(WEBSOCKET_URL);
  }

  createSubscription(name, onReceiveCallback) {
    this[`${name}Subscription`] = this.cable.subscriptions.create(name, {
      received(payload) {
        onReceiveCallback(payload)
      }
    })
  }

  removeSubscription(name) {
    this.cable.subscriptions.remove(this[name]);

    console.log('Removed connection', name);
  }
}

export default WebsocketService;