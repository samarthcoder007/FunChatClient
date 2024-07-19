import React, { useEffect, useRef } from 'react';
import Message from './Message/Message';

const Messages = ({ messages, name }) => {
 
  const listRef = useRef(null);

  const scrollToBottom = () => {
    listRef.current.scrollIntoView({behaviour: "smooth"})
  }

    useEffect(() => {
        scrollToBottom()
    }, [messages]);  
  
  return (
    <>
        {messages.map((message, i) => (
          <div key={i}>
            <Message message={message} currentUser={name} />
          </div>
        ))}
        <div ref={listRef} />
    </>
  );
};

export default Messages;
