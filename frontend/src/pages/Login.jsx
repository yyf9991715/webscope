import "./Login.css"
import { Link } from "react-router-dom";
import Footer2 from "../components/Footer2";

const style={
    theme:{
        height:"65vh"
    }
}


export default function Login (){
    return (
        <>
        <div style={style.theme} className="login">
                <div className="title">
                    <br />
                    <h1>Login to eLearningHelper</h1>
                </div>
                <div className="form">
                    <div className="text">
                            <input type="email" placeholder="Enter Email" className="inputext"/>
                            <input type="password" placeholder="Enter Password" className="inputext"/>
                    </div>
                    <button>Login</button>
                </div> 

                <div class="signup-link">
                        Don't have an account? 
                        <Link to="/signup">Sign up </Link>
                </div>
        </div>
        <Footer2/>
        </>
       
    );
}
