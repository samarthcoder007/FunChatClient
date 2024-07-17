import React from 'react'

const Users = ({users}) => {
  return (
    <> 
    {users.map((user,i) => 
        <div key={i}>{user.name}</div>
    )}
    </>
  )
}

export default Users
