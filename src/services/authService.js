import axios from 'axios'

export const authService = {
  signin (username, password) {
    return axios.post('api/oauth/token', 'grant_type=password&username=' + username + '&password=' + password)
  }
}
