import React from "react";
import '../App.css'


const PizzaBoxModel = ({name}) => {


    return (
        <div className="pizzaBoxModel">
        <div className="pizzaBoxModelCard">
            <h1>{name}</h1>

        </div>

    </div>
    )
}

export default PizzaBoxModel;