import React from 'react'
import IMessage from '../interfaces/IMessage'

export default function Post({ title, message }: IMessage) {
  return (
    <div>
      <p>{ title }</p>
      <p>{ message }</p>
    </div>
  )
}
