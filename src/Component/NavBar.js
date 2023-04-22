import React from "react";
import { Link } from 'react-router-dom';
import logo from '../Images/pizzaLogo.png';
import MobileMenu from "./MobileMenu";
import HamburgerMenu from "./HamburgerMenu";
import '../App.css'

const NavBar = () => {
    return (
        <div className="navBar container-fluid">
            <div className="navBarBackground container">
            <div className="logo">
                <img src={logo} width="25px" height="25px"/>
            <p className="logo">Pizza Palace</p>
            </div>
            <ul className="nav-items">
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/Menu">Menu</Link>
                </li>
                <li>
                <Link to="/AdminLogin">Admin</Link>
                </li>
            </ul>

            </div>
        

        </div>
    )
}

export default NavBar;