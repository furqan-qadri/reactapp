import React from "react";
import Hello from "./Hello";
import Fruits from "./components/Fruits";
import ProfilePage from "./pages/ProfilePage";

function App() {
  const seatNumbers=[1,5,9];
  const person={
    name:"bob",
    age:23,
    seatNumbers:[1,5,9],
  }

  // const fruits = ["apple", "banana", "cherry"];
  const fruits=[
    {name:"apple", emoji:"🍎", price:10},
    {name:"banana", emoji:"🍌", price:12},
    {name:"pear", emoji:"🍐", price:14},
  ]

  return (
    <div>
      <div className=" bg-slate-200 w-100 text-xl flex justify-center items-center">
        This is the homepage
      </div>
      <Hello person={person} />
      <Fruits fruits={fruits}/>

      <button className="p-4 bg-green-400 rounded-full "onClick={() => {window.location.href = "/profiles"}}>Go to Profile Page</button>


      
    </div>
  );
}

export default App;
