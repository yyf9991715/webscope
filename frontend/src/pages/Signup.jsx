
import "./Signup.css"
import Footer2 from '../components/Footer2';
import { Link } from "react-router-dom";

const style={
    theme:{
        height:"75vh"
    }
}
export default function Signup (){
    return (
        <>
            <div style={style.theme} className="login">
                <div className="title">
                    <br />
                    <h1>Welcome to eLearningHelper</h1>
                </div>
                <div className="form">
                    <div className="text">
                            <input type="text" placeholder="Enter Username" className="inputext"/>
                            <input type="email" placeholder="Enter Email" className="inputext"/>
                            <input type="password" placeholder="Enter Password" className="inputext"/>
                            <input type="password" placeholder="Enter Password Again" className="inputext"/>
                    </div>
                    <button>Sign Up</button>
                </div> 

                <div class="signup-link">
                        Already have an account? 
                        <Link to="/ligin">Login </Link>
                </div>
        </div>
        <Footer2/>
        
                
           
           
            
       
        </>
    );
}
