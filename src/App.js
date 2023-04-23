
import { useEffect, useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home.js';
import Menu from './Pages/Menu.js';
import NavBar from './Component/NavBar';
import Footer from './Component/Footer';
import AddProduct from './Pages/AddProduct.js'
import MobileMenu from './Component/MobileMenu';
import AdminLogin from './Pages/AdminLogin';
import HamburgerMenu from './Component/HamburgerMenu';
import Cart from './Pages/ViewCart.js'


function App() {

  const handleMenu = () => {
    const box1 = document.querySelector(".box1")
    const box2 = document.querySelector(".box2")
    const box3 = document.querySelector(".box3")
    const mobileMenu = document.querySelector(".mobileMenu")
    const hamburgerMenu = document.querySelector("hamburgerMenuContainer")

    box1.classList.toggle('active')
    box2.classList.toggle('active')
    box3.classList.toggle('active')
    mobileMenu.classList.toggle('active')

}


  return (
    <div className="App container">
       <NavBar />
       <HamburgerMenu openClick={handleMenu} />
       <MobileMenu />
  
      <Routes>
        <Route path='/PizzaPalaceApp' element={<Home />} />
        <Route path='/Menu' element={<Menu />} />
        <Route path='/AdminLogin' element={<AdminLogin />} />
        <Route path='/AddProduct' element={<AddProduct />} />
        <Route path='/Cart' element={<Cart />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
