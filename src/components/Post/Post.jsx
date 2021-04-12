import React, { useState } from 'react'
import PropTypes from 'prop-types'

import logo from '../../assets/images/user.png'
import Accordion from '../../common/Accordion/Accordion'
import Comment from '../Comment/Comment'
import NewComment from '../NewComment/NewComment'

import './Post.scss'

function Post ({ author, description, comments, reactions }) {
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
          <p className="post__author">{ author }</p>
          <p className="post__date">Hace 40 min</p>
          <p className="post__description">{ description }</p>
        </div>
      </div>

      <div className="post__footer">
        <div className="post__reactions">
          {
            reactions.map((reaction, index) => {
              return <div
                className={`reaction reaction--${reaction.name}`}
                key={index}
              />
            })
          }
          <p className="total">13</p>
        </div>
        <div className="post__comments-total">{ comments.length } comentarios</div>
      </div>

      <div className="post__actions">
        <button>Reaccionar</button>
        <button onClick={toggleAccordion}>Comentar</button>
      </div>

      <div className="post__comments">
        <Accordion isOpen={isOpenAccordion}>
          {
            comments.map((comment, index) => <Comment {...comment} key={index} />)
          }
          <NewComment />
        </Accordion>
      </div>
    </article>
  )
}

Post.propTypes = {
  author: PropTypes.string,
  description: PropTypes.string,
  comments: PropTypes.array,
  reactions: PropTypes.array
}

export default Post
