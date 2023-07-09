import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/whitelogosmall.png";
import "./Navigationbar.css";

const Navigationbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        navigate("/");
    };

    return (
        <nav className="nav">
            <Link to="/" className="site-title">
                <img src={logo} alt="eLearningHelper Logo" />
            </Link>

            <ul>
                {!localStorage.getItem("userid") ? (
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
                            <Link to="/search">Search</Link>
                        </li>
                        <li className="user-profile-button">
                            <Link to="/user/accountsetting">User Profile</Link>
                        </li>
                        <li className="logout-button" onClick={handleLogout}>
                            Logout
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Navigationbar;
