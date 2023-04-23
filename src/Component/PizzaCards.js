import React from "react";
import '../App.css'




const PizzaCard = ({ name, img , description , handleCard }) => {


    return (

        <div onClick={handleCard} className="dessertCards">
              <div class="card">
            <img src={img} class="card-img shadow-lg" alt="..." width="100%" />
                <div class="card-body">
                    <p class="card-text">{name}</p>
                    <p>{description}</p>
                    <button>ADD TO ORDER</button>
                </div>
        </div>

        </div>
    
    )
}


export default PizzaCard;