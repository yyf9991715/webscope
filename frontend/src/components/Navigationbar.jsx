import * as React from 'react';
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import "./Navigationbar.css"
import Searchbar from './Searchbar';

const  Navbar=()=>{
    return (
        <nav className='nav'> 
        <Link to="/" className='site-title'>
            eLearningHelper
        </Link>
        <div className="searchbar-container">
                <Searchbar/>
        </div>
        
        <ul>
            <li>
                <Link to="/user/accountsetting">User Profil </Link>
            </li>
            
            <li>
                <Link to="/login">Login </Link>
            </li>
            <li>
                <Link to="/signup">Sign up </Link>
            </li>    
        </ul>

        </nav>
      
    );
} 
export default Navbar;