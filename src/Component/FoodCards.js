import React from "react";
import '../App.css'

const FoodCard = ({id , name , description , img , price}) => {
    return(
        <div className="foodContainer">
            {/* <div className="img">
                <img src={img} />
            </div>
                <div className="card-body">
                    <p>{name}</p>
                    <p>Description: {description}</p>
                    <p className="pizzaPrice">${price}</p>
                </div> */}
                  <div class="card">
            <img src={img} class="card-img-top shadow-lg" alt="..." />
                <div class="card-body">
                    <p class="card-text">{name}</p>
                    <p>{description}</p>
                </div>
        </div>
        </div>
    )
}

export default FoodCard;