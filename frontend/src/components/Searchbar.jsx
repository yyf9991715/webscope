import React,{useState} from 'react'
import "./Searchbar.css"
import {FaSearch} from "react-icons/fa"
import { Link } from "react-router-dom"


function Searchbar() {
    
  return (
    <>
     <div className='input-wrapper'>
      
          <input />
            <FaSearch id="search-icon"/>  
    </div>
    </>
   
  );
}

export default Searchbar
