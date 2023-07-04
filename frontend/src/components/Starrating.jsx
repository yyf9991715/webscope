import React,{useState} from 'react'
import "./Starrating.css"
import {FaStar} from "react-icons/fa"

function Starrating({nrating}) {
  let rating=0;
  if(nrating<1) rating=0;
  else if(nrating<2) rating=1;
  else if(nrating<3) rating=2;
  else if(nrating<4) rating=3;
  else if(nrating<5) rating=4;
  else if(nrating=5) rating=5;
  return (
    <div>
     
      {[...Array(5)].map((star,i)=>
      {
          const ratingValue=i+1;
          return (
            <label>
              <input 
                type="radio" 
                name="rating" 
                value={rating}
               
              />

              <FaStar 
                className="star" 
                size={40}
                color={ratingValue<=(rating)?"#ffc107":"#e4e5e9"}
              />
            </label>
          );
      })}
    </div>
  )
}

export default Starrating
