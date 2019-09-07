class UserModel {
  constructor(attributes) {
    this.id = attributes.id;
    this.avatarUrl = attributes.avatar_url;
    this.email = attributes.email;
    this.username = attributes.username;

    this.token = attributes.authentication_token
  }
}

export default UserModel;