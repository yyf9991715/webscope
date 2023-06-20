import * as React from 'react';
import { Link, useMatch, useResolvedPath } from "react-router-dom"

const  Navbar=()=>{
    return (
        <nav className='nav'> 
        <Link to="/" className='site-title'>
            eLearningHelper
        </Link>
        <ul>
            <li>
                <Link to="/userprofilsetting">User Profil </Link>
            </li>
            <li>
                 <Link to="/aboutus">Aboutus </Link>
            </li>
            <li>
                <Link to="/login">Login </Link>
            </li>
            <li>
                <Link to="/signin">Sign in </Link>
            </li>
        
            
        </ul>

        </nav>
      
    );
} 
export default Navbar;