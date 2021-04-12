
import ApiClient from './clients/ApiClient'

export default {
  getPosts: () => ApiClient.get('posts'),
  newPost: (data) => ApiClient.post('post', data)
}
