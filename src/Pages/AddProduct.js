import React, { useEffect , useState } from "react";
import '../App.css'
import PizzaTable from "../Component/PizzaTable";
import { REACT_APP_API_KEY , REACT_APP_API_HOST } from "../env.js";

const Login = () => {

    const [pizza, setPizza] = useState([]);
    const [dessert, setDessert] = useState([]);


        
    const getDessert = () => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': REACT_APP_API_KEY,
                'X-RapidAPI-Host': REACT_APP_API_HOST
            }
        };

        fetch('https://pizza-and-desserts.p.rapidapi.com/desserts', options)
            .then(response => response.json())
            .then(data => setDessert(data))
            .catch(err => console.error(err));

    }


    const getPizza = () => {

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'd1c420eed9msh3396b6a33ffc3c6p191b0fjsncbfc5d9cdc11',
                'X-RapidAPI-Host': 'pizza-and-desserts.p.rapidapi.com'
            }
        };

        fetch('https://pizza-and-desserts.p.rapidapi.com/pizzas', options)
            .then(response => response.json())
            .then(data => {
                setPizza(data)

            })
            .catch(err => console.error(err));
    }


    useEffect(getDessert , [])
    useEffect(getPizza , [])




    return (
        <div className="productListContainer container">
            <h2>List Of Products </h2>
            <PizzaTable />
        </div>
    )
}

export default Login;