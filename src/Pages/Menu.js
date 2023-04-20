import React, { useEffect, useState } from "react";
import MenuCard from "../Component/MenuCard";



const Menu = () => {


    const [pizzaMenuContainer , setPizzaMenuContainer ] = useState([])
    const [dessertMenuContainer , setDessertMenuContainer ] = useState([]);
    const [addMore , setAddMore ] = useState(false);
    const [showText  , setShowText] = useState('Show More');
    const [moreItems , setMoreItems ] = useState([]);
    const [menuitems , setMenuItems ] = useState([])


    const PizzaMenu = () => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'd1c420eed9msh3396b6a33ffc3c6p191b0fjsncbfc5d9cdc11',
                'X-RapidAPI-Host': 'pizza-and-desserts.p.rapidapi.com'
            }
        };

        fetch('https://pizza-and-desserts.p.rapidapi.com/pizzas', options)
            .then(response => response.json())
            .then(data => setPizzaMenuContainer(data))
            .catch(err => console.error(err));

    }


    
    const DessertMenu = () => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'd1c420eed9msh3396b6a33ffc3c6p191b0fjsncbfc5d9cdc11',
                'X-RapidAPI-Host': 'pizza-and-desserts.p.rapidapi.com'
            }
        };

        fetch('https://pizza-and-desserts.p.rapidapi.com/desserts', options)
            .then(response => response.json())
            .then(data => setDessertMenuContainer(data))
            .catch(err => console.error(err));

    }

    useEffect(PizzaMenu, [])
    useEffect(DessertMenu, [])


    const newMenu = pizzaMenuContainer.slice(0 , 3);
    const newDessert = dessertMenuContainer.slice(0 , 3);

    const handleMore = () => {

       const i = pizzaMenuContainer.slice(3 , 6);

       if(addMore){
        setAddMore(false)
        setShowText("Show More")
        setMoreItems(pizzaMenuContainer.slice(3 , 6))
        

       }else{
        setAddMore(true)
        setShowText("Show Less")
        setMoreItems(pizzaMenuContainer.slice(3 , 6))
       }
    }





    return(

        <div className="menuContainer container">
            <div className="menuTitle">
                <h4>Menu</h4>
                <hr />
            </div>
            <>
            {
                newMenu.map((item ) => {
                    return <MenuCard 
                    img={item.img} 
                    title={item.name}
                     description={item.description}
                     price={item.price}
                      />
                })
            }
            </>
            {
                newDessert.map((item ) => {
                    return <MenuCard 
                    img={item.img} 
                    title={item.name}
                     description={item.description}
                     price={item.price}
                      />
                })
            }

            {
                addMore

            }

            <div className="bottomMenu">
            <button onClick={handleMore} className="showMoreBtn">{showText}</button>
            </div>

        
        </div>
    )
}


export default Menu;