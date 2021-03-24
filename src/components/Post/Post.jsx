import React from 'react'

import logo from '../../assets/images/user.png'

function Post() {
  return (
    <article className="post">
      <div className="post__left">
        <figure className="post__user-image">
          <img src={logo}></img>
        </figure>
      </div>
      <div className="post__right">
        <p className="post__author">Daniel Hernandez</p>
        <p className="post__date">Hace 40 min</p>
        <p className="post__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, alias! Quisquam cupiditate magnam itaque.
          Illum, perferendis adipisci, assumenda veritatis explicabo velit officiis similique neque quo laborum,
          consequuntur unde natus nesciunt.
        </p>
        <div className="post__actions">
          <button>Reaccionar</button>
          <button>Comentar</button>
        </div>
      </div>
      <div className="post__footer">
        <div className="reactions">
          <div className="reaction reaction--blue"></div>
          <div className="reaction reaction--red"></div>
          <div className="reaction reaction--yellow"></div>
          <p className="reaction__total">13</p>
        </div>
        <div className="post__comments-total">3 comentarios</div>
      </div>
      <div className="post__comments">

      </div>
    </article>
  )
}

export default Post
