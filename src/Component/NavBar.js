import React from "react";
import { Link } from 'react-router-dom';
import logo from '../Images/pizzaLogo.png';

const NavBar = () => {
    return (
        <div className="navBar">
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
            </ul>

        </div>
    )
}

export default NavBar;