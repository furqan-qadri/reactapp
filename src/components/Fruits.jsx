import React from 'react'

function Fruits({fruits}) {
  return (

    <div className='ml-10'>
        <ul style={{ listStyleType: 'disc' }}>
            {fruits.map((fruit) => (
                <li key={fruit.name}>{fruit.name} {fruit.emoji}</li>
            ))}
        </ul>
    </div>
  )
}

export default Fruits