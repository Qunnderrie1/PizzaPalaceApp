import React from "react";
import '../App.css'

const FoodCard = ({name , description , img}) => {
    return(
        <div className="foodContainer">
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