import "./Login.css"
import { Link, redirect,useNavigate } from "react-router-dom";
import Footer2 from "../components/Footer2";
import axios from 'axios';
import cookies from "js-cookie";
import { useState } from "react";
const style={
    theme:{
        height:"65vh"
    }
}

export default function Login (){
    const navigate=useNavigate()
    const [error, setError] = useState('')
    const [values,setValues]=useState({
        name:" ",
        password:" "
    })
    const handleSubmit=(event)=>{
        event.preventDefault();
        axios.post("http://localhost:4000/user/auth",values)
            .then(res=>{
                console.log(res)
                if(res.data.Status === 'success') {
                    navigate('/');
                } else {
                    setError(res.data.Error);
                }

            })
            .catch(err=>console.log(err));

    }
    
    return (
        <>
        <div style={style.theme} className="login">
                <div className="title">
                    <br />
                    <h1>Login to eLearningHelper</h1>
                </div>
                <form onSubmit={handleSubmit}>
                <div className="form">
                    <div className="text">
                            <input type="text" placeholder="Enter Username" className="inputext"
                                onChange={e=>setValues({...values,name:e.target.value})}/>
                            <input type="password" placeholder="Enter Password" className="inputext"
                                onChange={e=>setValues({...values,password:e.target.value})}/>
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
