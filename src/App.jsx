import React from "react";
import Hello from "./Hello";
import Fruits from "./components/Fruits";
import ProfilePage from "./pages/ProfilePage";
import Counter from "./components/Counter";

function App() {
  const seatNumbers=[1,5,9];
  const person={
    name:"bob",
    age:23,
    seatNumbers:[1,5,9],
  }

  // const fruits = ["apple", "banana", "cherry"];
  const fruits=[
    {name:"apple", emoji:"🍎", price:9, soldOut:false},
    {name:"banana", emoji:"🍌", price:12, soldOut:false},
    {name:"pear", emoji:"🍐", price:14 , soldOut:true},
    {name:"strawberry", emoji:"🍓", price:17, soldOut:false},
  ]
  const isFriutLover=true;

  return (
    <div>
      <div className=" bg-slate-200 w-100 text-xl flex justify-center items-center">
        This is the homepage
      </div>
      <Hello person={person} />
      {/* {isFriutLover && <Fruits fruits={fruits} />} */}

      {isFriutLover ? <Fruits fruits={fruits} /> : <div>Not a fruit lover</div>}


      {/* <button className="p-4 bg-green-400 rounded-full "onClick={() => {window.location.href = "/profiles"}}>Go to Profile Page</button> */}


    <Counter/>

      
    </div>
  );
}

export default App;
