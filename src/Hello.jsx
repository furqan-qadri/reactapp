import React from "react";

function Hello(props) {
  return <div className="m-4 p-4 bg-green-200 text-2xl">
    
    Hello {props.person.name} 
    Your age is {props.person.age} and  Your seats numbers are {props.person.seatNumbers}

    </div>;
}

export default Hello;
