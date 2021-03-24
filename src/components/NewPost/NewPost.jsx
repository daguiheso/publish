import React from 'react'

function NewPost() {
  return (
    <div className="new-post">
      <div className="new-post__body">
        <textarea
          className="new-post__text-area"
          placeholder="Escribe aqui tu estado"
        />
      </div>
      <div className="new-post__footer">
        <button className="new-post__submit">Publicar</button>
      </div>
    </div>
  )
}

export default NewPost
