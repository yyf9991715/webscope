import React from 'react'
import { TextField,Grid ,Button} from '@mui/material';
import { useState} from "react";
import axios from 'axios';
import "./Changepassword.css"

function Changepassword() {
  let nuserid=localStorage.getItem("userid");
  const [values,setValues]=useState({
    id:nuserid,
    password:"",
    passwordagain:""
  })
  const handleSubmit=(event)=>{
    event.preventDefault();
    if(values.password&&values.passwordagain){
      axios.post("https://webscope2023-backend.onrender.com/user/updatePW",values)
      .then(res=>
      {
        console.log(res.data.Status); 
        if(res.data.Status==="success"){
            alert("You have already change password, please login in with new password");
        }else if(res.data.Status==="pwddifferent"){
            alert("twice inputting password are different!")
        }else if(res.data.Status==="notloged"){
            alert("not login!")
       }
      })
    }else{
      alert("please complete all")
    }
  }

  return (
    <div>
      <div className='accountsetting'>
      <h1 className='mainhead1'>Change Password</h1>

      <form onSubmit={handleSubmit}>
        <div className="changepassword-form">
            <div className="changepassword-text">
                 <input type="password" placeholder="Enter password" className="inputext"
                   onChange={e=>setValues({...values,password:e.target.value})}/>
                <input type="password" placeholder="Enter Password again" className="inputext"
                    onChange={e=>setValues({...values,passwordagain:e.target.value})}/>
            </div>
            <button type="submit">Save Change</button>
         </div> 
        </form>

   
    </div>
    </div>
  )
}

export default Changepassword
