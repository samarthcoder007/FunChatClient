import { useState } from 'react'
import { Link } from 'react-router-dom'
import "../../style.css"


function Home() {

   const [name,setName] = useState("")
   const [room,setRoom] = useState("")

  return (
    <>
        <div className="join-container">
			<header className="join-header">
				<h1><i className="fas fa-smile"></i> ChatCord</h1>
			</header>
			<main className="join-main">
				<form action="chat">
					<div className="form-control">
						<label htmlFor="username">Username</label>
						<input
							type="text"
							name="username"
							id="username"
							placeholder="Enter username..."
							required={true}
              onChange={(e)=>{setName(e.target.value)}}
						/>
					</div>
					<div className="form-control">
						<label htmlFor="room">Room</label>
						<input
							type="text"
							name="room"
							id="room"
							placeholder="Enter room..."
							required={true}
              onChange={(e)=>{setRoom(e.target.value)}}
						/>
					</div>
					<Link onClick={e => (!name || !room)? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
					<button type="submit" className="btn">Join Chat</button>
					</Link>
				</form>
			</main>
		</div>
    </>
  )
}

export default Home
