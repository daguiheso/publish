import React from 'react'

import NewPost from './components/NewPost/NewPost'
import Post from './components/Post/Post'
import PostsContainer from './containers/PostsContainer'

import './App.scss'

function App () {
  return (
    <div className="container">
      <section className="wrapper">
        <NewPost />
        <PostsContainer />
      </section>
    </div>
  )
}

export default App
