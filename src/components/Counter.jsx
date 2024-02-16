import React from "react";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>The count is: {count} </div>
    <button onClick={() => setCount(count + 1)} className="p-4 bg-green-500 m-1 text-white rounded-full">Increment +</button>
      <button onClick={() => setCount(count - 1)} className="p-4 bg-red-500 m-1  text-white rounded-full shadow-1xl ">Decrement -</button>
    </>
  );
}

export default Counter;
