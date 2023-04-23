import React from "react";



const Cart = ({img}) => {

    return (
        <div className="cartContainer">
            <img  src={img} width="25px" height="25px" />
            <p>$0.00</p>
        </div>
    )
}


export default Cart;