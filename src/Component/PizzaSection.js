import React, { useEffect, useState , useRef } from "react";
import PizzaCard from "./PizzaCards";
import { useInView } from 'react-intersection-observer';
import Divider from "./Divider";
import '../App.css'
import { REACT_APP_API_KEY , REACT_APP_API_HOST } from "../ENV/env";



const PizzaSection = () => {

    const { ref: myRef , inView: myElement} = useInView();

    const [vegPizza, setVegPizza] = useState([])
    const [pizza, setPizza] = useState([]);
    const [dessert, setDessert] = useState([]);

    console.log(myElement)


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

    const newVeggiePizza = pizza.filter((item) => item.veg == true)
        .filter((item) => item.price > 7)


    useEffect(getPizza, [])
    useEffect(getDessert, []);



    return (

        <>
        
            <div className="vegPizzaContainer container">
                <div className="vegLinkContainer">
                    <p>Veggie Pizza</p>
                </div>
                <div  className="vegContainer">

                    {
                        newVeggiePizza.map((item, i) => {
                            return <PizzaCard name={item.name} img={item.img} />
                        })
                    }

                </div>
            </div>

            <Divider />

            <div className="popularPizzas container">
                <div className="popularTitle">
                    <h2>Popular Pizza</h2>
                </div>
                <div className="popularCards">
                    {
                        newVeggiePizza ? newVeggiePizza.map((item, i) => {
                            return <PizzaCard name={item.name} img={item.img} />
                        }) : <div class="text-center">
                            <div class="spinner-border" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    }

                </div>


            </div>

            <Divider />

            <div className="meatLoversContainer container">
                <div className="vegLinkContainer">
                    <p>Meat Lovers</p>
                </div>
                <div className="vegContainer">

                    {
                        newVeggiePizza.map((item, i) => {
                            return <PizzaCard name={item.name} img={item.img} />
                        })
                    }

                </div>
            </div>

            <Divider />

            <div ref={myRef} className={myElement ? "dessertContainer container " : "dessertContainerAnimate"}>
                <div className="vegLinkContainer">
                    <p>Try Our Desserts</p>
                </div>
                <div className="dessertContainer">

                    {
                        dessert.map((item, i) => {
                            return <PizzaCard name={item.name} img={item.img} />
                        })
                    }

                </div>
            </div>




        </>
    )
}

export default PizzaSection;