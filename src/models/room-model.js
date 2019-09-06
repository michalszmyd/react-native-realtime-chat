class RoomModel {
  constructor(attributes) {
    this.id = attributes.id;
    this.channelName = attributes.room_name;
    this.deleted = attributes.deleted;
    this.description = attributes.description;
    this.lastMessageAt = attributes.last_message_at;
    this.name = attributes.name;
    this.participants = attributes.participants;
    this.roomPath = attributes.room_path;
    this.type = attributes.type;
    this.userId = attributes.user_id;
  }
}

export default RoomModel;