import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import './Search.css';
import "../../components/Searchbar"
import Searchbar from '../../components/Searchbar';
import Resourcecard from '../../components/Resourcecard';
import axios from 'axios';

const Search = () => {
  
const [values,setValues]=useState([{
  title:"",
  author:"unkown",
  avg_reviews:""
}])
useEffect(()=>{
  fetch("/book/getall",{
    method:"GET",
  })
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data,"bookdata");
      let books=data.Bookdata;
      for(let i=0;i<books.length;++i){
        if(books[i].avg_reviews)books[i].avg_reviews=books[i].avg_reviews.$numberDecimal;
      }
      setValues(data.Bookdata)
    })
},[]);


  return (
    <div className="search-container">
      <div className='searchbar-container'>
        <Searchbar/>
        <br />
      </div>
      <hr />
      <p>The following is the some books:</p>
      <div className="resources-container">

        {values.map((value) => (
          //<Link to={`/Resource/${index}`} key={index} className="resource-link">
              
              <Resourcecard
                
                title={value.title}
                author={value.author?value.author:"unknown"}
                rating={value.avg_reviews}
                linkto={"/resource/"+value.id}
                
              />
         
        ))}
      </div>
      
    </div>
  );
};

export default Search;
