import React from "react";
import { Link } from 'react-router-dom';
import Cart from "./Cart";
import { useNavigate } from "react-router-dom";
import mobileCart from '../Images/shopcart.png'

const MobileMenu = () => {

    const navigate = useNavigate();

    const handleCart = () => {
        navigate('/Cart')
    }



    return (
        <div className="mobileMenu">
        <ul className="nav-items">
            <li>
            <Link to="/PizzaPalaceApp">Home</Link>
            <hr />
            </li>
            <li>
            <Link to="/Menu">Menu</Link>
            </li>
            <hr />
            <li>
            <Link to="/AdminLogin">Admin</Link>
            </li>
            <hr />
            <li>
                    <Cart cartpage={handleCart} img={mobileCart} />
            </li>
        </ul>
        </div>
    )
}
    export default MobileMenu;