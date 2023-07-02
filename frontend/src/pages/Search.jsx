import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import './Search.css';
import "../components/Searchbar"
import Searchbar from '../components/Searchbar';
import Resourcecard from '../components/Resourcecard';
import axios from 'axios';

const Search = () => {
  
const [values,setValues]=useState([{
  title:"",
  author:"unkown"
}])
useEffect(()=>{
  fetch("http://localhost:4000/book/getall",{
    method:"GET",
  })
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data,"bookdata");
      setValues(data.Bookdata)
    })
},[]);


  return (
    <div className="search-container">
      <div className='searchbar-container'>
        <Searchbar/>
      </div>
      
      <div className="resources-container">
        {values.map((value) => (
          //<Link to={`/Resource/${index}`} key={index} className="resource-link">
              
              <Resourcecard
                
                title={value.title}
                author={value.author?value.author:"unknown"}
                linkto={"/resource/"+value._id}
                
              />
         
        ))}
      </div>
      
    </div>
  );
};

export default Search;
