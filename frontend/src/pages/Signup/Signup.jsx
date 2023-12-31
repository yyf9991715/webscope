import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css"
import Footer2 from '../../components/Footer/Footer2';
import { useState} from "react";

const style={
    theme:{
        height:"85vh"
    }
}
export default function Signup (){
    const [error, setError] = useState('')
    const [values,setValues]=useState({
        name:"",
        email:"",
        password:"",
        passwordagain:""
    })

    const navigate = useNavigate();
    const handleSubmit=(event)=>{
        event.preventDefault();
        if(values.name&&values.email&&values.password&&values.passwordagain){
            axios.post(`${process.env.REACT_APP_backendaddress}/user/createnewuser`,values)
            .then(res=>{
                if(res.data.Status==="userexisted"){
                    alert("user name has already existed!");
                }
                else if(res.data.Status === 'success') {
                    alert("already successfully sign up, you could login in now!");
                    navigate('/login');
                } else if(res.data.Status === 'pwddifferent'){
                    alert("twice inputting password are different!");
                }else{
                    setError(res.data.Error);
                }
            })
            .catch(err=>console.log(err));
        }else{
            alert("please complete all");
        }
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
