import React from 'react'
import { TextField,Grid ,Button} from '@mui/material';

function Changepassword() {
  return (
    <div>
      <div className='accountsetting'>
      <h1 className='mainhead1'>Change Password</h1>


    <Grid container className="form">
        
          <Grid item xs={12}md={12} className="form-group">
                <TextField id="newpsd" label="New password" variant="outlined" />
          </Grid>

          <Grid item xs={12} md={12}>
            <br />
          </Grid>
      
          <Grid item xs={12}md={12} className="form-group">
                <TextField id="newpsdagain" label="New password again" variant="outlined" />
          </Grid>

          <Grid item xs={12} md={12}>
            <br />
          </Grid>
         
          <Grid item xs={12} md={12}>
            <br />
          </Grid>
           <Grid  item xs={12} md={12}>
                    <Button variant="contained" color="success">Save Change</Button>
           </Grid>
      

    </Grid>
    </div>
    </div>
  )
}

export default Changepassword
