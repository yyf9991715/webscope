import  "./Home.css"
import { Grid,Paper} from '@mui/material';
import bac from "../assets/image-3.jpg"
import img from "../assets/elearninghelper.png"
import Footer2 from "../components/Footer2"
import searchimg from "../assets/search.jpg"
import resourceimg from "../assets/resource.jpg"
import ratingimg from "../assets/rating.jpg"
import { Link } from "react-router-dom"
import ai from "../assets/ai.jpg"
const style={
    theme:{
        height:"100vh"
    }
}

export default function Home (){
    return (
        <>
        <div className="sub-home1"style={style.theme}>
            <div className="home-intro">
                <h1 className="title">
                    eLearningHelper
                </h1>
                <h1 >
                    Welcome to the worlds's lastest resource for learning!
                </h1>
            </div>
            
        </div>
       <div className="sub-home2">
            
            <div className="left">
               
                    <img src={searchimg} alt="p1" />
                    <p>Search for the topic you want to learn</p>
               
            </div>

            <div className="middle">
                
                    <img src={resourceimg} alt="p2" />
                    <p>Find the best resource for you</p>
               
            </div>

            <div className="right">
                
                    <img src={ratingimg} alt="p3" />
                    <p>Share your review and rating</p>
                
                
            </div>
       </div>
       <div className="sub-home4">
            <Link to="/chatgpt">
                <div className="home-intro">
                    <h1>
                        Implementing ChatGPT<br />To solve all your questions
                    </h1>
                </div>
                <div className="logo">
                    <img src={ai} alt="p4" />
                </div>
            </Link>
       </div>
       <div className="sub-home3">
            <div className="right">
                <div>
                    <br />
                    <br />
                    <h1 >
                        Start Learning Today
                    </h1>
                    <br />
                    <br />
                </div>

                <div className="home-button">
                    <a href="/login">
                        <button> Login </button>
                    </a>

                    <a href="/signup">
                        <button> Sign Up </button>
                    </a>
                </div>
            </div>
          
            
       </div>
        </>
    );
}