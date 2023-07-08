import webscopeimg from "../../assets/webscope.png"
import "./Aboutus.css"
import { Grid,Paper,Typography} from '@mui/material';
import Singlebanner from "../../components/Singlebanner";
import imgbac from "../../assets/image-8.jpg"
import Footer2 from "../../components/Footer/Footer2";
const style={
    theme:{
        height:"75vh"
    }
}
export default function Aboutus (){
    return (
        <>
            <div className="sub-intro">
                
                <Singlebanner 
                heading="About Us"
                bannerimage={imgbac}
                />
                <br />
                <br />

                <Grid container style={style.theme}>
                    <Grid item xs={1} md={1}></Grid>
                    <Grid item xs={11} md={4}> 
                            <img src={webscopeimg} alt="img" width= "350" height="300" />  
                    </Grid>
                    <Grid item xs={12} md={6}> 
                        
                            <br />
                            <br />
                            <h2>WEBSCOPE Member</h2>
                            <br />
                            <p>Ruidan LIU</p>
                            <p>Yifei YAO</p>
                            <p>Francisco Checa Laín</p>
                            <br />
                            <br />
                        
                    </Grid>
                </Grid>
                
                
                <Footer2/> 
            </div>
           
        </>
    );
    
}