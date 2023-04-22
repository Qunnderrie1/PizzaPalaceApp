import React, { useEffect , useState } from "react";
import '../App.css'
import { REACT_APP_API_KEY , REACT_APP_API_HOST } from "../env.js";

const PizzaTable = ({id , name , price , description}) => {

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
                console.log(data)

            })
            .catch(err => console.error(err));
    }


    useEffect(getDessert , [])
    useEffect(getPizza , [])


    return(


        <div className="pizzaTableContainer container">
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Quantity</th>
                </tr>
                </thead>

                <tbody>
                        {
                            pizza.map((item) => {
                                return <tr>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>${item.price}.99</td>
                                    <td>{item.description}</td>
                                    <td>{item.quantity}</td>
                                </tr>
                            })
                        }
                           {
                            dessert.map((item) => {
                                return <tr>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>${item.price}.99</td>
                                    <td>{item.description}</td>
                                    <td>{item.quantity}</td>

                                </tr>
                            })
                        }
                </tbody>
            </table>
        </div>
    )

}



export default PizzaTable;