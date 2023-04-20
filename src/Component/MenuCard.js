import React from "react";
import '../App.css'


const MenuCard = ({ img, title, description, price }) => {


    return (
        <>
            <div className="menu">
                <img src={img} />
                <div className="menu-body">
                    <div className="title-price">
                        <h6>{title}</h6>
                        <p>${price}.99</p>
                    </div>
                    <p>{description}</p>
                </div>

            </div>

            <hr />
        </>




    )
}


export default MenuCard;