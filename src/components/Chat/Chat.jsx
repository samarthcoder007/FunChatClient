import React, { useEffect } from 'react'
import {io} from "socket.io-client"
import queryString from "query-string"
import { useState } from 'react';
import Messages from '../Messages/Messages';
import Input from '../Input/Input';
import Users from '../Users/Users';
import { useLocation } from 'react-router-dom';
import "../../style.css"
import { Link } from 'react-router-dom';

const ENDPOINT = 'https://funchatserver.onrender.com/'

let socket;


const Chat = () => {
    const [name,setName] = useState("")
    const [room,setRoom] = useState("")
    const [users,setUsers] = useState([])
    const [message,setMessage] = useState("");
    const [messages,setMessages] = useState([])
    const location = useLocation()
    
    useEffect(() => {
      const { name, room } = queryString.parse(location.search);
      socket = io(ENDPOINT);
    
      setName(name);
      setRoom(room);
    
      socket.emit('joinroom', { name, room });
    
      
    }, []);
    
    useEffect(() => {
      socket.on('message', (payload) => {
        setMessages(messages => [...messages, payload]);
      });
    
      socket.on('roomUsers', ({ room, users }) => {
        setUsers(users);
      });
    
      return () => {
        socket.off('message');
        socket.off('roomUsers');
      };
    }, []);
    
    const handleLeaveRoom = () => {
      if (socket) { 
        socket.disconnect(); 
      }
    }

    const handleSend = (e) => {
         e.preventDefault()

         if(message){
          socket.emit('chatMessage', message, ()=>{setMessage("")})
         }
    }
  console.log(messages)

    return (
      <div className="chat-container">
        <header className="chat-header">
          <h1><i className="fas fa-smile"></i> ChatCord</h1>
          <Link onClick={handleLeaveRoom} to={'/'}>
          <button className="btn">Leave Room</button>
          </Link>
        </header>
        <main className="chat-main">
          <div className="chat-sidebar">
            <h3><i className="fas fa-comments"></i> Room Name:</h3>
            <h2 id="room-name">{room}</h2>
            <h3><i className="fas fa-users"></i> Users</h3>
            <div className='users'>
              <Users users={users}/>
            </div>
          </div>
          <div className="chat-messages">
          <Messages messages={messages} name={name}/>
          </div>
        </main>
        <Input message={message} setMessage={setMessage} handleSend={handleSend} />
      </div>
    );
}

export default Chat

