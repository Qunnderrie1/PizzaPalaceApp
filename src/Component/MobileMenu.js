import React from "react";
import { Link } from 'react-router-dom';

const MobileMenu = () => {


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
        </ul>
        </div>
    )
}
    export default MobileMenu;