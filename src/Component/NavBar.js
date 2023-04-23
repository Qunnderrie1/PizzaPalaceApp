import React from "react";
import { Link } from 'react-router-dom';
import logo from '../Images/logo.png';
import cart from '../Images/cart.png'
import Cart from "./Cart";
import { useNavigate } from "react-router-dom";

import '../App.css'

const NavBar = () => {

    const navigate = useNavigate();


    const handleCart = () => {
        navigate('/Cart')
    }



    return (
        <div className="navBar container-fluid">
            <div className="navBarBackground container">
            <div className="logo">
                <img src={logo} width="25px" height="25px"/>
            <p className="logo">Pizza Palace</p>
            </div>
            <ul className="nav-items">
                <li>
                <Link to="/PizzaPalaceApp">Home</Link>
                </li>
                <li>
                <Link to="/Menu">Menu</Link>
                </li>
                <li>
                <Link to="/AdminLogin">Admin</Link>
                </li>
                <li>
                    <Cart cartpage={handleCart} img={cart} />
                </li>
            </ul>

            </div>
        

        </div>
    )
}

export default NavBar;