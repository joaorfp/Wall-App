import React from 'react'

function Post(title: string, message: string) {
  return (
    <div>
      <header>{title}</header>
      <p>{message}</p>
    </div>
  )
}

export default Post