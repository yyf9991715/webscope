import React,{useState} from 'react'
import "./Starrating.css"
import {FaStar} from "react-icons/fa"

function Starrating() {
  const [rating,setRating]=useState(null);
  const [hover,setHover]=useState(null);
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
                value={ratingValue}
                onClick={()=>setRating(ratingValue)}
              />

              <FaStar 
                className="star" 
                size={40}
                onMouseEnter={()=>setHover(ratingValue)}
                onMouseLeave={()=>setHover(null)}
                color={ratingValue<=(hover||rating)?"#ffc107":"#e4e5e9"}
              />
            </label>
          );
      })}
      <p>The rating is {rating}</p>
    </div>
  )
}

export default Starrating
