import React from 'react'

function Fruit({name, emoji, price, soldOut}) {
  return (
        <>
        { price > 5 ? 
            <div className="flex bg-slate-400 text-xl font-bold text-pretty gap-1 flex-col m-2 rounded-full p-4 hover:border">
            {name} {emoji} {price} <span style={{ color: soldOut ? 'red' : 'inherit' }}>{soldOut ? 'Sold Out' : ''}</span>
            </div>
        : ''}
        </>
 
  )
}

export default Fruit