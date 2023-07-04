import React,{useState,useEffect} from 'react'
import "./Searchbar.css"
import {FaSearch} from "react-icons/fa"
import { Link ,useNavigate} from "react-router-dom"
import axios from 'axios';
import Resourcecard from '../components/Resourcecard';


function Searchbar() {
  const navigate=useNavigate();
  const [results,setResults]=useState([]);
  const [keyword,setKeyword]=useState({
    keyword:""
  });

  const handleSubmit= async (event)=>{
      
      event.preventDefault();
      axios.post("http://localhost:4000/book/querykey",keyword)
        .then(res=>{
          setResults(res.data);
          console.log("results",results);
        })
      
  };

    return (
      <>
  
       <div className='input-wrapper'>
        
            <input 
            placeholder="Type to search..."
            onChange={e=>setKeyword({keyword:e.target.value})}/>
            <FaSearch id="search-icon"
            onClick={handleSubmit}
            style={{ cursor:"pointer" }}
            />  
      </div>
      <div className="output-wrapper">
      {results.map((value)=>(
         <p>{value.title}</p>
      ))}
      </div>


      
      
      </>
    )
  }

export default Searchbar
