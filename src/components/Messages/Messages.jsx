import React from 'react'
import Message from './Message/Message'

const Messages = ({ messages, name }) => {
  return (
    <>
    {messages.map((message,i) => 
      <div key={i}><Message message={message} currentUser={name}/></div>
    )}
    </>
  )
}

export default Messages