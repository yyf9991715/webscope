import axios from 'axios'
import React,{useState,useEffect}  from 'react'
import "./Myreviewandrating.css"
import {Link} from 'react-router-dom';

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
          <h1 className='mainhead1'>User: {username} Review&Rating</h1>
          <br />
          <div>
          {data.map((value)=>(
             <div className="myreview">
               <div className="myreview-review">
                 {value.review}
                 <div className="myreview-rating">
                   Rating: {value.rating} 
                 </div>
               </div>
               <div className='myreview-book'>
                    <p>Bookid:{value.itemid}</p>
                    <Link to={"/resource/"+value.itemid}
                    style={style.linktext}>
                        see book
                    </Link>

               </div>
             </div>
          ))}
          </div>
          
      </div>
    </div>
  )
}

export default Myreviewandrating
