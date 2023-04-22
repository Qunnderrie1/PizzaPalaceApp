import React from "react";
import '../App.css';
import { Link } from 'react-router-dom';
const HamburgerMenu = ({openClick}) => {
    

    return(
        <div onClick={openClick}  className="hamburgerMenuContainer">
            <div className="box1"></div>
            <div className="box2"></div>
            <div className="box3"></div>

        </div>
    )
}

export default HamburgerMenu;