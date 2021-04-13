import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Post from '../components/Post/Post'

import { GET_POSTS } from '../redux/actions'

function PostsContainer ({ GET_POSTS, posts }) {
  useEffect(() => {
    GET_POSTS()
  }, [])

  return posts.map((post, index) => <Post {...post} key={index} />).reverse()
}

PostsContainer.propTypes = {
  GET_POSTS: PropTypes.func,
  posts: PropTypes.array
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = {
  GET_POSTS
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer)
