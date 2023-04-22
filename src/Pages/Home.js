import React from "react";
import Header from '../Component/Header';
import PizzaSection from '../Component/PizzaSection.js';


const Home = () => {

    return(
        <div className="homeContainer container-fluid">
            <Header />
            <PizzaSection />
        </div>

    )
}


export default Home;