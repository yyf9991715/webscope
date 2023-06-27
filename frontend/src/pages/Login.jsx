import "./Login.css"
import { Link, redirect } from "react-router-dom";
import Footer2 from "../components/Footer2";
import axios from 'axios';
import cookies from "js-cookie";
const style={
    theme:{
        height:"65vh"
    }
}

export default function Login (){
    const handlelogin=async(event)=>{
        try {    
            let param= new URLSearchParams();
            param.append("name","yao");
            param.append("password","test");
            event.preventDefault();
            let res= await axios.post(
                "http://localhost:4000/user/auth",
                param,
                {
                    'Content-Type' :'application/x-www-form-urlencoded',
                }
            ).then(function(resb){
                console.log(resb.data);
                if(resb.data.Status==="success"){
                    console.log("login success, the id is:",resb.data.id);
                }
            });
        }catch(err){
            console.error(err);
        }
    }
    return (
        <>
        <div style={style.theme} className="login">
                <div className="title">
                    <br />
                    <h1>Login to eLearningHelper</h1>
                </div>
                <form onSubmit={handlelogin}>
                <div className="form">
                    <div className="text">
                            <input type="text" placeholder="Enter Email" className="inputext"/>
                            <input type="password" placeholder="Enter Password" className="inputext"/>
                    </div>
                    <button type="submit">Login</button>
                </div> 
                </form>
                <div class="signup-link">
                        Don't have an account? 
                        <Link to="/signup">Sign up </Link>
                </div>
        </div>
        <Footer2/>
        </>
       
    );
}
