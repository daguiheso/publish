import React from 'react'
import './NewComment.scss'

function NewComment () {
  return (
    <div className="new-comment">
      <textarea
        className="new-comment__text-area"
        placeholder="Escribe aqui tu estado">
      </textarea>
    </div>
  )
}

export default NewComment
