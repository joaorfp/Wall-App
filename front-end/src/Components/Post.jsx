import React from 'react'

function Post(title, message) {
  return (
    <div>
      <header>{title}</header>
      <p>{message}</p>
    </div>
  )
}

export default Post