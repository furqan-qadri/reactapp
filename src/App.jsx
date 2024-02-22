import {React, ReactDOM, useState} from "react";
import Hello from "./Hello";
import Fruits from "./components/Fruits";
import ProfilePage from "./pages/ProfilePage";
import Counter from "./components/Counter";
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import FroalaEditorComponent from 'react-froala-wysiwyg';

import { Navigation, Pagination, Scrollbar, A11y, Autoplay, FreeMode} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Dogapi from "./Dogapi";
import Testing from "./Testing"

// Install Swiper modules
import { useRef, useEffect } from 'react';
import 'swiper/css/bundle';
import EditorContainer from "./Editorcontainer";




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

  
  const config={
    placeholder: 'Edit Your Contedfdfsnt Here!',
    charCounterCount: true,
  }

  const [editorContent, setEditorContent] = useState("what is up");

  return (

    <div id="">
      <EditorContainer tag='textarea'
          config={config}
          model={{ text: "what is up" }}

          // model={model}
          // onModelChange={handleModelChange}
          /> 
      <div className=" bg-slate-200 w-100 text-xl flex justify-center items-center">
        Furqan Qadri's local
      </div>
      {/* <Hello person={person} /> */}
      {/* {isFriutLover && <Fruits fruits={fruits} />} */}

      {/* {isFriutLover ? <Fruits fruits={fruits} /> : <div>Not a fruit lover</div>} */}


      {/* <button className="p-4 bg-green-400 rounded-full "onClick={() => {window.location.href = "/profiles"}}>Go to Profile Page</button> */}


    <Counter/>

    {/* <swiper-container className="h-10 bg-black" slides-per-view="1" speed="500" loop="true" css-mode="true" navigation="true" data-swiper-autoplay="2000">
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
  ...
    </swiper-container> */}


{/* <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      freeMode="enabled"
      // autoplay={{ delay: 800 }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>Slide 1 <img src="/vite.svg" alt="" className="h-[400px] w-full" /></SwiperSlide>
      <SwiperSlide>Slide 1 <img src="/vite.svg" alt="" className="h-[400px] w-full" /></SwiperSlide>
      <SwiperSlide>Slide 1 <img src="/vite.svg" alt="" className="h-[400px] w-full" /></SwiperSlide>
      <SwiperSlide>Slide 1 <img src="/vite.svg" alt="" className="h-[400px] w-full" /></SwiperSlide>
      <SwiperSlide>Slide 1 <img src="/vite.svg" alt="" className="h-[400px] w-full" /></SwiperSlide>
      ...
    </Swiper> */}


    {/* <Dogapi/> */}
    {/* <Testing/> */}
    </div>
  );
}

export default App;



               