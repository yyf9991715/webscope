import React from 'react'
import { TextField,Grid ,Button} from '@mui/material';

const Accountsetting = () => {
  async function useEffect(){
    let userData= fetch("localhost:4000/user/userdata").then(response=>{
      return response.json()
    })
    .then(data=>{
      console.log(data);
    })
  }
  return (
    <>
    <div className='accountsetting'>
      <h1 className='mainhead1'>Personal Information</h1>


    <Grid container className="form">
          <Grid item xs={12}md={12}>
             <p>Username:</p>
             <p>Email:</p>
          </Grid>
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

           <Grid item xs={12} md={12}>
            <br />
          </Grid>
      

    </Grid>
    </div>
    </>
   
    
  )
}

export default Accountsetting
