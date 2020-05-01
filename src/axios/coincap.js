import axios from "axios"

const apiClient = axios.create({
  baseURL: 'https://api.coincap.io/v2',
  withCredentials: false,
})


export default {
  getRates() {
    return apiClient.get('/rates')
  },
  getCryptos() {
    return apiClient.get('/assets?limit=100')
  }
}