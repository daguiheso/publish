import React from 'react'
import PropTypes from 'prop-types'
import './Accordion.scss'

function Accordion ({ children, isOpen }) {
  return (
    <div className="accordion">
      <div className={`accordion__content ${!isOpen ? 'accordion__content--collapsed' : ''}`}>
        {children}
      </div>
    </div>
  )
}

Accordion.propTypes = {
  isOpen: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default Accordion
