import React from 'react'
import { useParams } from 'react-router-dom'


function Homepage() {
  const params=useParams();
  console.log(params);

  return (
    <div>Profile Page {params.profileId}</div>
  )
}

export default Homepage