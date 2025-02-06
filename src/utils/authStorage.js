import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  getAccessToken() {
    const accessToken = AsyncStorage.getItem(`${this.namespace}:accessToken`)

    return accessToken ? JSON.parse(accessToken) : []
  }

  setAccessToken(accessToken) {
    AuthStorage.setItem(`${this.namespace}:accessToken`, JSON.stringify(accessToken))
  }

  removeAccessToken() {
    AsyncStorage.removeItem(`${this.namespace}:accessToken`)
  }
}

export default AuthStorage;