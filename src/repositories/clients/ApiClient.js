import axios from 'axios'

const urlApiBase = 'http://localhost:3000/'

const apiClient = axios.create({
  baseURL: urlApiBase
})

apiClient.defaults.headers.post.Accept = 'application/json'
apiClient.defaults.headers.post['Content-Type'] = 'application/json'

export default apiClient
