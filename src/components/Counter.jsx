import React from 'react'
import {useState} from 'react'

function Counter() {
  const [count,setCount]=useState(0);

  return (
    <div>The count is: {count} </div>
  )
}

export default Counter