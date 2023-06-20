import { BottomNavigation } from '@mui/material';
import { Link, useMatch, useResolvedPath } from "react-router-dom"

const Footer=()=>{
    return (
        
        <footer className="footer">
            <h4>Copyright @</h4>
            <ul>
                <li>
                    <Link to="/aboutus"> webscope</Link>
                </li>
            </ul>
            
        
         </footer>

    );
}
export default Footer;