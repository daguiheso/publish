const rootReducer = (state, action) => {
  const appReducers = {
    SET_POSTS: {
      ...state,
      posts: action.payload
    },
    UPDATE_POSTS: {
      ...state,
      posts: [...state.posts, action.payload]
    }
  }

  return appReducers[action.type] || state
}

export default rootReducer
