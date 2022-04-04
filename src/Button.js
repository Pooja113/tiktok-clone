import React from 'react'

const Button = ({title,color}) => {
  return (
    <div>
      <button style={{backgroundColor:color}} >{title}</button>
    </div>
  )
}

export default Button
