import  "./Home.css"
import { Grid,Paper} from '@mui/material';
import bac from "../assets/image-3.jpg"
import img from "../assets/elearninghelper.png"
import Footer2 from "../components/Footer2"
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
                
            </div>
            <div className="middle">

            </div>
            <div className="right">

            </div>
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
                    <h1 >
                        Start Learning Today
                    </h1>
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