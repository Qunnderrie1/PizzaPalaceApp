import React from "react";
import pizza from '../Images/pizza-1.jpg'
import orders from '../Helper/orderData.js'



const ViewCart = () => {


    return (
        <>

            <div className="cartPage container">
                <h1>Your Order</h1>

                
                <div className="customerOrdeContainer">
                            {
                               orders < 0 ?  orders.map((item) => {
                                    return <div className="row">
                                        <img src={item.img}/>
                                        <p>{item.name}</p>
                                        <p>{item.price}</p>
                                        <p>{item.description}</p>
                                        </div> 
                                }) : <p>You have no orders</p>
                            }
                          
                </div>

            </div>





        </>

    )
}


export default ViewCart;