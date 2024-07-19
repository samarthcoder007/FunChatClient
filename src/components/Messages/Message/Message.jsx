import React from 'react'
import "./message.css"

const Message = ({message,currentUser}) => {

  const isSentByCurrentUser = currentUser === message.name

  return (
    isSentByCurrentUser
      ? (
        <div className="messageContainer justifyEnd">
          <p className="sentText pr-10">{currentUser}</p>
          <p className="sentText pr-10">{message.time}</p>
          <div className="messageBox backgroundBlue">
            <p className="messageText colorWhite">{message.text}</p>
          </div>
        </div>
        )
        : (
          <div className="messageContainer justifyStart">
            <div className="messageBox backgroundLight">
              <p className="messageText colorDark">{message.text}</p>
            </div>
            <p className="sentText pl-10 ">{message.name}</p>
            <p className="sentText pl-10 ">{message.time}</p>
          </div>
        )
  );
}

export default Message