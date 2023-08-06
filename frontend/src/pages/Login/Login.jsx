import "./Login.css"
import { Link, redirect,useNavigate } from "react-router-dom";
import Footer2 from "../../components/Footer/Footer2";
import axios from 'axios';
import cookies from "js-cookie";
import { useState} from "react";
const style={
    theme:{
        height:"85vh"
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
                if(res.data.Status === 'success') {
                        console.log(res.data.id);
                        localStorage.setItem("userid",res.data.id);
                        localStorage.setItem("userName",res.data.name);
                        localStorage.setItem("userEmail",res.data.email);

                        navigate('/search');  
                    
                } else {
                    alert("username or password is wrong!")
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
        
        </>
       
    );
}
