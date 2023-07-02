import React from 'react'
import { TextField,Grid ,Button} from '@mui/material';
import "./Accountsetting.css"
import { useState} from "react";

const Accountsetting = () => {

  let username=localStorage.getItem("userName");
  let useremail = localStorage.getItem("userEmail");
  const [values,setValues]=useState({
    nemail:"",
    nname:""
  })
  const handleSubmit=(event)=>{
    event.preventDefault();
   
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
            <form action="">
              <Grid item xs={12} md={12}>
                <br />
                <p>You could change your username and email:</p>
              </Grid>
              <Grid item xs={12} md={12}>
                <br />
              </Grid>
              <Grid item xs={12}md={12} className="form-group">
                    <TextField id="email" label="Email" variant="outlined" />
              </Grid>
              
              <Grid item xs={12} md={12}>
                <br />
              </Grid>
              <Grid item xs={12}md={12} className="form-group">
                <TextField id="username" label="User name" variant="outlined" />
              </Grid>
              
              
              <Grid item xs={12} md={12}>
                <br />
              </Grid>
              <Grid  item xs={12} md={12}>
                        <Button variant="contained" color="success">Save Change</Button>
              </Grid>
              </form>
          </Grid>
    </Grid>
    </div>
    </>
   
    
  )
}

export default Accountsetting
