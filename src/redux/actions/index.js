import repositoryFactory from '../../repositories/RepositoryFactory'

const apiRepository = repositoryFactory.get('api')

export function GET_POSTS () {
  return async dispatch => {
    try {
      const posts = await apiRepository.getPosts()
      dispatch({ type: 'SET_POSTS', payload: posts.data })
      return posts
    } catch (error) {
      return error
    }
  }
};
