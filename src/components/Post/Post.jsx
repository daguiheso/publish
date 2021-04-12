import React, { useState } from 'react'

import logo from '../../assets/images/user.png'
import Accordion from '../../common/Accordion/Accordion'
import Comment from '../Comment/Comment'
import NewComment from '../NewComment/NewComment'

function Post () {
  const [isOpenAccordion, setOpenAccordion] = useState(false)
  const toggleAccordion = () => {
    setOpenAccordion(!isOpenAccordion)
  }

  return (
    <article className="post">
      <div className="post__body">
        <figure className="post__user-image">
          <img src={logo}></img>
        </figure>
        <div className="post__info">
          <p className="post__author">Daniel Hernandez</p>
          <p className="post__date">Hace 40 min</p>
          <p className="post__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, alias! Quisquam cupiditate magnam itaque.
            Illum, perferendis adipisci, assumenda veritatis explicabo velit officiis similique neque quo laborum,
            consequuntur unde natus nesciunt.
          </p>
        </div>
      </div>

      <div className="post__footer">
        <div className="post__reactions">
          <div className="reaction reaction--blue"></div>
          <div className="reaction reaction--red"></div>
          <div className="reaction reaction--yellow"></div>
          <p className="total">13</p>
        </div>
        <div className="post__comments-total">3 comentarios</div>
      </div>

      <div className="post__actions">
        <button>Reaccionar</button>
        <button onClick={toggleAccordion}>Comentar</button>
      </div>

      <div className="post__comments">
        <Accordion isOpen={isOpenAccordion}>
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <NewComment />
        </Accordion>
      </div>
    </article>
  )
}

export default Post
