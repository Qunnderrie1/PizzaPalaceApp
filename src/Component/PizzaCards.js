import React from "react";
import '../App.css'
import pizza from '../Images/pizza.png'



const PizzaCard = ({ name, img , description }) => {
    return (

        <div className="dessertCards">
              <div class="card">
            <img src={img} class="card-img shadow-lg" alt="..." width="100%" />
                <div class="card-body">
                    <p class="card-text">{name}</p>
                    <p>{description}</p>
                </div>
        </div>

        </div>
    
    )
}


export default PizzaCard;