import React from 'react'
import Fruit from './Fruit'

function Fruits({fruits}) {
  return (

    <div className='ml-10 flex flex-col gap-1'>

        {/* Making them into a list */}

        {/* <ul style={{ listStyleType: 'disc' }}>
            {fruits.map((fruit) => (
                <li key={fruit.name}>{fruit.name} {fruit.emoji}</li>
            ))}
        </ul> */}


         {/* Making them into their own component called Fruit */}

        <ul style={{ listStyleType: 'disc' }}>
            {fruits.map((fruit) => (
              <Fruit  name={fruit.name} emoji={fruit.emoji} price={fruit.price} soldOut={fruit.soldOut} />
            ))}
        </ul>

    </div>
  )
}

export default Fruits