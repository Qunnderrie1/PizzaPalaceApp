
import { useEffect, useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home.js';
import Menu from './Pages/Menu.js';
import NavBar from './Component/NavBar';
import Footer from './Component/Footer';
import background from './Images/pizzaBackground.jpg';

function App() {


 
  return (
    <div className="App container">
       <NavBar />
       <div className='cover'></div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Menu' element={<Menu />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
