import React, { useEffect ,useState} from 'react'
import "./Mylibrary.css"
import axios from 'axios';
import {TiDelete} from "react-icons/ti"

const Mylibrary = () => {
  const userid=Number(localStorage.getItem("userid"));
  const [results,setResults]=useState([]);
  const data=[];
  const[add,setAdd]=useState(true);
  const titemid="";
  const style={
    linktext:{
      color:"gray"
  }
  }

  useEffect(()=>{
    axios.get("http://localhost:4000/lib/byuid/"+userid)
          .then(res=>{
            setResults(res.data);
          })
  },[]);

 function handleOnclick(itemid){
  console.log(itemid);
  const data={userid,itemid};
  axios.post("http://localhost:4000/lib/del",data)
      .then(res=>{
        if(res.data.Status==="success") {
          alert("cancel favorite");
          window.location.reload(false);
        }
      })
 }
  return (
    <div>
        <div className='mylibrary'>
          <h1 className='mainhead1'>My Library</h1>
        </div>
        <div className="mylib-container">
              {results.map((value)=>(
                 <div className="mylib">
                  <div className="mylib-content">
                 
                      <h3>{value.itemName}</h3>
                      <a href={"/resource/"+value.itemid}
                      style={style.linktext}>
                          see book
                    </a>
                    <br />
                    <TiDelete
                      id="id"
                      className='heart'
                      size={30}
                      onClick={()=>handleOnclick(value.itemid)}
                      color={"gray"}
                      />
                </div>
                </div>
                
              ))}
            </div>
    </div>
  )
}

export default Mylibrary
