import React  from 'react'
import { useState } from 'react'

function User(props) {
const [count]=useState(0);
  return (
    <div className='user-card'>
      <h2>Name:{props.name}</h2>
      <h2>count:{count}</h2>
      <h3>Location:{props.location}</h3>
      <h4>Contact:@priyasingh</h4>
    </div>
  )
}

export default User
