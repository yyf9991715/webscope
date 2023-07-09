import React,{useState,useEffect} from 'react'
import "./Searchbar.css"
import {FaSearch} from "react-icons/fa"
import { Link ,useNavigate} from "react-router-dom"
import axios from 'axios';
import Resourcecard from '../components/Resourcecard';



function Searchbar() {
  const navigate=useNavigate();
  const [results,setResults]=useState([]);
  const [data,setData]=useState({
      keyword:""
  });

  const handleSubmit= async (event)=>{
      if(data.keyword){
      event.preventDefault();
      axios.post("https://webscope2023-backend.onrender.com/book/querykey",data)
        .then(res=>{
          let results=res.data;
          for(let i=0;i<results.length;++i){
            if(results[i].avg_reviews)results[i].avg_reviews=results[i].avg_reviews.$numberDecimal;
          }
          setResults(results);
          console.log("results",results);
        })
      }else{
        alert("please type something to search");
      }
  };

    return (
      <>
  
       <div className='input-wrapper'>
        
            <input 
            placeholder="Type to search..."
            onChange={e=>setData({...data,keyword:e.target.value})}/>
            <FaSearch id="search-icon"
            onClick={handleSubmit}
            size={35}
            style={{ cursor:"pointer" }}
            />  
      </div>
      <div className="output-wrapper">

        {results.map((value) => (
          //<Link to={`/Resource/${index}`} key={index} className="resource-link">
              
              <Resourcecard
                
                title={value.title}
                author={value.author?value.author:"unknown"}
                rating={value.avg_reviews}
                linkto={"/resource/"+value.id}
                
              />
         
        ))}

      </div>


      
      
      </>
    )
  }

export default Searchbar
