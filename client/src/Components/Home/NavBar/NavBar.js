import React, { useContext } from 'react';
import './Navbar.css';
import Logo from '../../../images/logo.png';
import { Link } from "react-router-dom";
import { AuthContext } from '../../../Context/AuthContext';

const NavBar = () => {
    const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext);

    const menuToggler = () => {
        let x = document.getElementById('navbarSupportedContent');
        if (x.style.display === 'none') {
            x.style.display = 'block';
        } else {
            x.style.display = 'none';
        }
    }

    const loginLogout = () => {
        if (isLoggedIn === true) {
            setIsLoggedIn(true)
        } else 
        setIsLoggedIn(false)
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid navbar-container">
                <img className="app-logo" src={Logo} alt="logo" />
                <button onClick={menuToggler} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse mobile-nav" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-lg-0">
                        
                        <li className="nav-item">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/projects">Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/services">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/admin">Admin</Link>
                        </li>
                    </ul>
                    <ul className="d-flex mx-auto">
                        <button className="signIn btn btn-outline-primary mt-3" type="submit" onClick={loginLogout}><Link to="/login">{isLoggedIn ? "LogOut":"LogIn"}</Link></button>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;