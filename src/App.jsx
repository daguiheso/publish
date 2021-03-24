import React from 'react'
import NewPost from './components/NewPost/NewPost'
import Post from './components/Post/Post'
import PostsContainer from './containers/PostsContainer'

function App() {
  return (
    <div>
      <div className="container">
        <section className="wrapper">
          <NewPost />
          <PostsContainer>
            <Post />
          </PostsContainer>
        </section>
      </div>
    </div>
  )
}

export default App
