import { BottomNavigation } from '@mui/material';
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import "./Footer.css"
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes

const Footer=()=>{
    return (
        <>
        <div className='footer'>
           <div className='sb_footer session_aboutus'>
                <div className='sb_footer-links'>
                    
                    <div className='sb_footer-links-div'>
                        <a href="/aboutus">
                            <h4>About us</h4>
                        </a>
                        <p>Webscope</p> 
                        
                    </div>
                    
                    <div className='sb_footer-links-div'>
                        
                        <a href="/contactus">
                            <h4>Contact us</h4>
                        </a>
                            <p>email: info@webscope.com</p> 
                            <p>address: abc Str. 123,
                                47057,Duisburg,Germany</p>        
                    </div>
                    
                </div>
           </div>
           <hr />
           <div className='sb_footer-below'>
                <p>
                    Designed by webscope
                </p>
                <a href="/privacy">
                    <p>Privacy</p>
                </a>
            </div>
        </div>

       
        </>

       
       
      

    )
}
export default Footer;