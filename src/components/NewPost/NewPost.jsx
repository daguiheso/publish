import React, { useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { NEW_POST } from '../../redux/actions'

import './NewPost.scss'

function NewPost ({ NEW_POST }) {
  const [post, setPost] = useState('')

  const onEnterPress = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault()
      submit(new Event('submit'))
    }
  }

  const handleInput = e => {
    setPost(e.target.value)
  }

  const submit = async (e) => {
    e.preventDefault()

    try {
      await NEW_POST(getNewPost())
      setPost('')
    } catch (error) {
      console.log(error)
    }
  }

  const getNewPost = () => {
    return {
      author: 'Daniel H',
      description: post,
      'created-at': new Date(),
      reactions: [],
      comments: []
    }
  }

  return (
    <form
      className="new-post"
      onSubmit={submit}>
      <div className="new-post__body">
        <textarea
          className="new-post__text-area"
          placeholder="Escribe aqui tu estado"
          name="description"
          value={post}
          onKeyDown={onEnterPress}
          onChange={handleInput}
        />
      </div>
      <div className="new-post__footer">
        <button
          type="submit"
          disabled={!post || post === ''}
          className="new-post__submit">
          Publicar
        </button>
      </div>
    </form>
  )
}

NewPost.propTypes = {
  NEW_POST: PropTypes.func
}

const mapDispatchToProps = {
  NEW_POST
}

export default connect(null, mapDispatchToProps)(NewPost)
