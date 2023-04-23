import React from "react";
import pizza from '../Images/pizza-1.jpg'




const ViewCart = () => {


    return (
        <>

            <div className="cartPage container">
                <h1>Your Order</h1>
                <div className="customerOrdeContainer">

                    <div className="row">
                        <div className="col">
                            <img src={pizza} width="200px" />
                        </div>
                        <div className="col">
                            <p>$14.99</p>
                            <p>Pizza Hulk</p>
                            <p>Packed with extra cheese and sasage</p>
                            <button>PAY NOW</button>

                        </div>


                    </div>
                </div>

            </div>





        </>

    )
}


export default ViewCart;