import React from 'react'
import "./users.css"

const Users = ({users}) => {
  return (
    <> 
    {users.map((user,i) => 
        <div key={i} className='activeItem'>{user.name}</div>
    )}
    </>
  )
}

export default Users
