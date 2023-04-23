import React from "react";
import { useNavigate } from "react-router-dom";



const Header = () => {

const navigate = useNavigate();

const handleOrder = () => {
    navigate('/Menu')
}

    return (
        <div className="headerContainer ">
            <div className="cover"></div>
            <div className="header-left container">
            <h2>WE HAVE THE BEST  NEW <span>YORK STYLE</span> PIZZA.</h2>
            <p>Limited Time Only</p>
            <button onClick={handleOrder}>ORDER NOW</button>
            <p>Prices may vary in some locations</p>
            </div>
        </div>
    )
}

export default Header;