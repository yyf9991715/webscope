import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/e114b11cc9214759b53d1ea0a37a4ca1.png";
import "./Navigationbar.css";

const Navigationbar = ({ isLoggedIn, onLogin, onLogout }) => {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        <img src={logo} alt="eLearningHelper Logo" />
      </Link>

      <ul>
        {isLoggedIn && (
          <li>
            <Link to="/search">Search</Link>
          </li>
        )}
        {isLoggedIn ? (
          <>
            <li className="login-button">
              <Link to="/login">Login</Link>
            </li>
            <li className="signup-button">
              <Link to="/signup">Sign up</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <li className="user-profile-button">
                <Link to="/user/accountsetting">User Profile</Link>
              </li>
            </li>
            <li className="login-button">
              <button className="logout-button" onClick={onLogout}>
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navigationbar;
