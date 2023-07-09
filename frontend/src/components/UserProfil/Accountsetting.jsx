import React from 'react'
import { TextField,Grid ,Button} from '@mui/material';
import "./Accountsetting.css"
import { useState} from "react";
import axios from 'axios';
import {useNavigate } from "react-router-dom";

const Accountsetting = () => {
  const navigate=useNavigate();
  var nuserid=localStorage.getItem("userid");
  var username=localStorage.getItem("userName");
  var useremail = localStorage.getItem("userEmail");
  const [values,setValues]=useState({
    id:nuserid,
    newmail:"",
    newname:""
  })
  const handleSubmit=(event)=>{
    event.preventDefault();
    // if(values.newmail){
      axios.post("https://webscope2023-backend.onrender.com/user/upuserpro",values)
      .then(res=>{
        alert("already changed");
        console.log(res.data.data.name,res.data.data.email);
        localStorage.setItem("userName",res.data.data.name);
        localStorage.setItem("userEmail",res.data.data.email);
        username=localStorage.getItem("userName");
        useremail = localStorage.getItem("userEmail");
        navigate('/user/accountsetting');  
      })
    
   
  }
  return (
    <>
    <div className='accountsetting'>
      <h1 className='mainhead1'>Personal Information</h1>


    <Grid container className="form">
          <Grid item xs={12}md={6} className='userdata'>
            <br />
            <br />
             <p>Your Username is:{username}</p>
             <br />
             <p>Your Email is:{useremail}</p>
          </Grid>

          <Grid container xs={12} md={6}>
                <br />
                <p>You could change your username and email:</p>
              
              <form onSubmit={handleSubmit}>
                  <div className="account-form">
                <div className="account-text">
                    <input type="text" placeholder="Enter new name" className="inputext"
                      onChange={e=>setValues({...values,newname:e.target.value})}/>
                    <input type="email" placeholder="Enter new email" className="inputext"
                        onChange={e=>setValues({...values,newmail:e.target.value})}/>
                </div>
                <button type="submit">Save Change</button>
            </div> 

              </form>
          </Grid>
    </Grid>
    </div>
    </>
   
    
  )
}

export default Accountsetting
