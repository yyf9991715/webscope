import React from 'react'
import { TextField,Grid ,Button} from '@mui/material';

const Accountsetting = () => {
  return (
    <>
    <div className='accountsetting'>
      <h1 className='mainhead1'>Personal Information</h1>


    <Grid container className="form">
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
      

    </Grid>
    </div>
    </>
   
    
  )
}

export default Accountsetting
