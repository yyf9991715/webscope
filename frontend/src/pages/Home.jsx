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
            <div className="home-bac">
                <img src={bac} alt="bac" />
            </div>
            <div className="home-intro">
                <h1 className="title">
                    eLearningHelper
                </h1>
                <h1 >
                    Wlecome to the worlds's lastest resource for learning!
                </h1>
            </div>
            
        </div>
       <div className="sub-home2">
            
            <div className="left">
                <Link to="/search">
                    <img src={searchimg} alt="p1" />
                    <h3>Search for the toplc you want to learn</h3>
                </Link>
            </div>

            <div className="middle">
                <Link to="/resource" style={{textDecoration:"none"}}>
                    <img src={resourceimg} alt="p2" />
                    <h3>Find the resource</h3>
                </Link>
            </div>

            <div className="right">
                <Link to="/reviewandrating">
                    <img src={ratingimg} alt="p3" />
                    <h3>Share your review and rating</h3>
                </Link>
                
            </div>
       </div>
       <div className="sub-home4">
            <Link to="/chatgpt">
                <div className="img">
                    <img src={ai} alt="ai1img" />
                </div>
                <div className="home-intro">
                    <h1 className="title">
                        Learn What You Want
                    </h1>
                    <h1 >
                        Communication with chatgpt
                    </h1>
                </div>
            </Link>
       </div>
       <div className="sub-home3">
            <div className="left">
            <div className="home-bac">
                <img src={img} alt="end" />
            </div>
            </div>

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

       
       
       <Footer2/>
        </>
    );
}