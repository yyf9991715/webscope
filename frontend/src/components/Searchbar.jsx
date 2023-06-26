import React,{useState} from 'react'
import "./Searchbar.css"
import {FaSearch} from "react-icons/fa"
import { Link } from "react-router-dom"


function Searchbar() {
    
  return (
    <>
    <Link to="/search">
     <div className='input-wrapper'>
      
          <input placeholder="Type to search..."/>
            <FaSearch id="search-icon"/>  
    </div>
    </Link>
    </>
   
  );
}

export default Searchbar
