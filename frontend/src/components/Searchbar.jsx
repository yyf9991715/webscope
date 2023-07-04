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
  let result=[];
   async function getResultAndSet(){

     result = await axios.post("http://localhost:4000/book/querykey",keyword);
     result = result.data;
     await setResults(result);
     console.log(result);

    return result;
  };
  const handleSubmit= async (event)=>{
      // .then(res=>{
      //   console.log(res.data);
      //   this.setResults(res.data);
      //   console.log(results);
      // })
      event.preventDefault();

        await getResultAndSet();
      navigate("/searched");
      
  };


  if(results===[]){return (
    <>
    <form >
     <div className='input-wrapper'>
      
          <input 
          placeholder="Type to search..."
          onChange={e=>setKeyword({keyword:e.target.value})}/>
          <FaSearch id="search-icon"
          onClick={handleSubmit}
          style={{ cursor:"pointer" }}
          />  
    </div>
    </form>
    </>
   
  );}
  else {
    return (
      <>
      <form >
       <div className='input-wrapper'>
        
            <input 
            placeholder="Type to search..."
            onChange={e=>setKeyword({keyword:e.target.value})}/>
            <FaSearch id="search-icon"
            onClick={handleSubmit}
            style={{ cursor:"pointer" }}
            />  
      </div>
      </form>

      
      
      </>
    )
  }
}

export default Searchbar
