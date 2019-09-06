import NetInfo from "@react-native-community/netinfo";

const DEFAULT_API_URL = 'http://localhost:3000/api/v1';
const HEADER_TOKEN_NAME = 'Token';

class ApiService {
  static get = async (params) => {
    connection = await NetInfo.isConnected.fetch();
    if (!connection) throw new Error('No internet connection');

    return fetch(`${DEFAULT_API_URL}/${params.url}`, {
      headers: {
        [HEADER_TOKEN_NAME]: params.authToken || ''
      }
    }).then((response) => {
      if (response.status >= 200 && response.status < 400) return response.json();
      else throw Error(response.json());
    });
  }

  static post = async (params) => {
    connection = await NetInfo.isConnected.fetch();
    if (!connection) throw new Error('No internet connection');

    return fetch(`${DEFAULT_API_URL}/${params.url}`, {
      body: params.body,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json',
        [HEADER_TOKEN_NAME]: params.authToken || ''
      }
    }).then((response) => {
      if (response.status >= 200 && response.status < 400) {
        return response.json();
      } else {
        throw response.json();
      }
    })
  }

  static delete = async (params) => {
    connection = await NetInfo.isConnected.fetch();
    if (!connection) throw new Error('No internet connection');

    return fetch(`${DEFAULT_API_URL}/${params.url}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json',
        [HEADER_TOKEN_NAME]: params.authToken || ''
      }
    }).then((response) => {
      if (response.status >= 200 && response.status < 400) {
        return response.json();
      } else {
        throw response.json();
      }
    })
  }
}

export default ApiService;