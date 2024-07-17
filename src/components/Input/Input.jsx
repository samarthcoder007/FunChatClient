import React from 'react'

const Input = ({ message, setMessage, handleSend}) => {
  return (
    <div className="chat-form-container">
      <form id="chat-form">
        <input
          id="msg"
          type="text"
          value={message}
          onChange={(e)=>{setMessage(e.target.value)}}
          placeholder="Enter Message"
          required
          autoComplete="off"
        />

        <button className="btn" onClick={e => {handleSend(e)}}><i className="fas fa-paper-plane"></i> Send</button>
      </form>
    </div>
  )
}

export default Input