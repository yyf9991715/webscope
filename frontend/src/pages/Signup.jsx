import axios from 'axios';
import "./Signup.css"
import Footer2 from '../components/Footer2';
import { Link } from "react-router-dom";
import { useState} from "react";

const style={
    theme:{
        height:"85vh"
    }
}
export default function Signup (){
    const [error, setError] = useState('')
    const [values,setValues]=useState({
        name:" ",
        email:" ",
        password:" ",
        passwordagain:" "
    })
    const handleSubmit=(event)=>{
        event.preventDefault();
        
            axios.post("http://localhost:4000/user/createnewuser",values)
            .then(res=>{
                if(res.data.Status === 'success') {
                    console.log("add new user")
                } else if(res.data.Status === 'pwddifferent'){
                    alert("twice inputting password are different!");
                }else{
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
                    <h1>Welcome to eLearningHelper</h1>
                </div>
                <form onSubmit={handleSubmit}>
                <div className="form">
                    <div className="text">
                            <input type="text" placeholder="Enter Username" className="inputext"
                            onChange={e=>setValues({...values,name:e.target.value})}/>
                            <input type="email" placeholder="Enter Email" className="inputext"
                            onChange={e=>setValues({...values,email:e.target.value})}/>
                            <input type="password" placeholder="Enter Password" className="inputext"
                            onChange={e=>setValues({...values,password:e.target.value})}/>
                            <input type="password" placeholder="Enter Password Again" className="inputext"
                            onChange={e=>setValues({...values,passwordagain:e.target.value})}/>
                    </div>
                    <button>Sign Up</button>
                </div> 
                </form>

                <div class="signup-link">
                        Already have an account? 
                        <Link to="/login">Login </Link>
                </div>
        </div>
        
                
           
           
            
       
        </>
    );
}
