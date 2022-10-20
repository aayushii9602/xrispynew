import React from 'react'
import "./Button.scss"

const Button = (props) => {
  return (
    <button className={`kave-btn ${props.className}`}>
      <span className="kave-line"></span>
      {props.name}
    </button>
  )
}

export default Button