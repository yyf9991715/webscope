import axios from 'axios'
import React,{useState,useEffect}  from 'react'
import "./Myreviewandrating.css"
import {Link} from 'react-router-dom';
import Starrating from '../Rating&Review/Starrating';


const Myreviewandrating = () => {
  var nuserid=localStorage.getItem("userid");
  var username=localStorage.getItem("userName");
  const [data,setData]=useState([]);
  const style={
    linktext:{
      color:"gray"
  }
  }
  useEffect(()=>{
    axios.get("http://localhost:4000/review/byuid/"+nuserid)
      .then(res=>{
        let results=res.data;
      for(let i=0;i<results.length;++i){
        if(!results[i].review)results[i].review="null";
      }
        setData(res.data);
      })
  },[]);

  return (
    <div>
      <div className='myreviewandrating'>
          <h1 className='mainhead1'>My Review&Rating</h1>
          <br />
          <div className='myreview-container'>
          {data.map((value)=>(
             <div className="myreview">
               <div className="myreview-review">
               <h3>{value.itemName}</h3>
                
                 <div className="myreview-rating">
                  
                   <Starrating
                   nrating={value.rating}/>
                    Rating: {value.rating} 
                 </div>
                 {value.review}
                 <a href={"/resource/"+value.itemid}
                    style={style.linktext}>
                        see book
                    </a>

               </div>
               
             </div>
          ))}
          </div>
          
      </div>
    </div>
  )
}

export default Myreviewandrating
