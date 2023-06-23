import React,{useState} from 'react'
import "./Searchbar.css"
import {FaSearch} from "react-icons/fa"


function Searchbar() {
    
  return (
    <>
     <div className='input-wrapper'>
        <input placeholder="Type to search..."
        />
        <FaSearch id="search-icon"/>     
    </div>
    </>
   
  );
}

export default Searchbar
