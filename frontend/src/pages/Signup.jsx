import { TextField,Grid } from '@mui/material';
import Button from '@mui/material/Button';
import "./Signup.css"

const style={
    theme:{
        height:"75vh"
    }
}
export default function Signup (){
    return (
        <>
        
        <Grid container style={style.theme}>
        <div class="background-image"></div>
        <div class="overlay"></div>
           
            <Grid item xs={12}md={12}>
                <div className="text">
                    <h1>Get Start eLearningHelper now!</h1>
                    <p>Creat an account</p>
                </div>
           </Grid>

           <Grid item xs={12}md={12}>
                <TextField id="email" label="email" variant="outlined" />
           </Grid>
           <Grid item xs={12}md={12}>
                <TextField id="password" label="Password" variant="outlined" />
           </Grid>
           <Grid item xs={12}md={12}>
                <TextField id="passwordagain" label="Password Again" variant="outlined" />
           </Grid>
           <Grid  container  xs={12}md={12}>
                <Grid item xs={4}  md={4}></Grid>
                <Grid  item xs={12} md={4}>
                    <Button variant="contained" color="success">Sign Up</Button>
                </Grid>
                <Grid item xs={12}md={12}>
                    <div class="signup-link">
                        <p> Already have an account? </p>
                        <a href="/login" >Login</a> 
                    </div>
                </Grid>
           </Grid>
                
           
           
            
        </Grid>
        </>
    );
}
