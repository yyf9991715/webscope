import "./Login.css"
import Button from '@mui/material/Button';
import { TextField,Grid } from '@mui/material';

const style={
    theme:{
        height:"75vh"
    }
}


export default function Login (){
    return (
        <>
        
        <Grid container style={style.theme}>
            <div class="background-image"></div>
            <div class="overlay"></div>
           
            <Grid item xs={12}md={12}>
                <div className="text">
                    <br />
                    <h1>Login to eLearningHelper</h1>
                    
                </div>
           </Grid>
           <Grid item xs={12}md={12}>
                <TextField id="email" label="email" variant="outlined" />
           </Grid>
           <Grid item xs={12}md={12}>
                <TextField id="password" label="Password" variant="outlined" />
           </Grid>
           
           <Grid  container  xs={12}md={12}>
                <Grid item xs={4}  md={4}></Grid>
                <Grid  item xs={12} md={4}>
                    <Button variant="contained" color="success">Login</Button>
                </Grid>
                <Grid item xs={12}md={12}>
                    <div class="signup-link">
                        <p> Don't have an account? </p>
                        <a href="/signup" >Sign up</a> 
                    </div>
                </Grid>
           </Grid>
                
           
           
            
        </Grid>
            
            
        
           
            
        
            
        
        </>
       
    );
}