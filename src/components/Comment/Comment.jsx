import React from 'react'

import logo from '../../assets/images/user.png'
import './Comment.scss'

function Comment () {
  return (
    <div className="comment">
      <div className="comment__left">
        <figure className="comment__user-image">
          <img src={logo}></img>
        </figure>
      </div>
      <div className="comment__right">
        <p className="comment__description">
          <span className="comment__author">Daniel Hernandez</span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, alias! Quisquam cupiditate.
        </p>
        <p className="comment__date">Hace 40 min</p>
      </div>
    </div>
  )
}

export default Comment
