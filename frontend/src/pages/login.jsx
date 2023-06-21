import "./login.css"
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';



export default function Login (){
    return (
        <>
        
            <div class="background-image"></div>
            <div class="overlay"></div>
            <div className="text">
                 <h1>Login to eLearningHelper</h1>
            </div>
            <br />
            <br />
            <TextField id="username" label="User name" variant="outlined" />
            <br />
            <br />
            <TextField id="password" label="Password" variant="outlined" />
            <br />
            <br />
            <div className="login-buttons">
                <Button variant="contained" color="success">Login</Button>
            </div>
            <div class="signup-link">
                <p> Don't have an account? </p>
                <a href="/signup" >Sign up</a> 
            </div>
            
        
           
            
        
            
        
        </>
       
    );
}