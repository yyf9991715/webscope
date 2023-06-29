import webscopeimg from "../assets/webscope.png"
import img from "../assets/elearninghelper.png"
import { Grid,Paper,Typography} from '@mui/material';
import "./Contactus.css"
import Singlebanner from "../components/Singlebanner"
import imgbac from "../assets/image-7.jpg"
import Footer2 from "../components/Footer2";

const style={
    theme:{
        height:"80vh"
    }
}
export default function Contactus (){
    return (
        <>
            <Singlebanner 
                heading="Contact Us"
                bannerimage={imgbac}
            />
            <div className="sub-contact">
            <Grid container style={style.theme}>
                <Grid item xs={1}md={1}> </Grid>
                <Grid container xs={12} md={3}>
                    <Grid item xs={12} md={12}>
                        <img src={img} alt="img" width= "350" height="300" />
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <img src={webscopeimg} alt="webimg" width= "350" height="300" />
                    </Grid>
                </Grid>
                <Grid item xs={1}md={1}> </Grid>
                <Grid item xs={12} md={6} className="contacttext" >
                    
                        <p>email: info@webscope.com</p>
                        <p>address: abc Str. 123, 47057,Duisburg,Germany</p>
                </Grid>
                
            </Grid>
            </div>
            
            <Footer2/>
        </>
    );
}