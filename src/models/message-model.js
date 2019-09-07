import UserModel from "./user-model";

class MessageModel {
  constructor(attributes) {
    this.id = attributes.id;
    this.attachments = attributes.attachments;
    this.body = attributes.body;
    this.createdCt = attributes.created_at;
    this.deleted = attributes.deleted;
    this.edited = attributes.edited;
    this.roomId = attributes.room_id;
    this.user = new UserModel(attributes.user);
    this.userId = attributes.user_id;
  }
}

export default MessageModel;