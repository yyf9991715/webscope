import { Grid,Paper} from '@mui/material';
import webscopeimg from "../../assets/webscope.png"
import "./Privacy.css"
import Singlebanner from "../../components/Singlebanner"
import imgbac from "../../assets/image-6.jpg"
import Footer2 from '../../components/Footer/Footer2';
const style={
    theme:{
        height:"75vh"
    }
}
export default function Privacy (){
    return (
        <>
           <Singlebanner 
                heading="Privacy"
                bannerimage={imgbac}
            />
            <Grid container style={style.theme}>
                
                <Grid item xs={1} md={1}></Grid>
                <Grid item xs={12} md={6}>
                    <p className='normal'>"Cookie" technology is used by eLearningHelper to control the addition and deletion of items 
                        in a user's shopping cart as well as to provide the user with a better overall web experience. 
                        Cookies simply store alpha-numeric information to control the flow of data. Personal information 
                        (such as a user's identity or credit card information) 
                        is NOT stored in a cookie format and cannot be accessed by "peeking" at a user's cookies.</p>
                </Grid>
                
                <Grid item xs={12} md={4}> 
                        <br />

                        <img src={webscopeimg} alt="img" width= "350" height="300" />
                    
                </Grid>
                <br />
            </Grid>
            <Footer2/>
        </>
       
    );
}