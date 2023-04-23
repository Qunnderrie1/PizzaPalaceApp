import React from "react";



const Cart = ({cartpage , img}) => {

    return (
        <div className="cartContainer">

            <img onClick={cartpage}  src={img}  />
            <p>$0.00</p>
        </div>
    )
}


export default Cart;