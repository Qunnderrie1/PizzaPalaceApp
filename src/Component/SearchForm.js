import { useEffect, useState } from 'react';
import FoodCard from '../Component/FoodCards';
import '../App.css'
const SearchForm = () => {

    const [foodName , setFoodName ] = useState([]);
    const [pizzaType , setPizzaType ] = useState('');
    const [userPizzaSearch , setUserPizzaSearch ] =  useState ([]);
    const [price , setPrice] = useState('')
  
    useEffect(() => {
  

    fetch('http://localhost:3001/Menu')
        .then(response => response.json())
        .then(data => {
                setFoodName(data)
                console.log(data)
           
        })
        .catch(err => console.error(err));
      
    }, [])
  
  
    const handleSubmit = (e) => {
      e.preventDefault();
    }
  
  
  const pizzaTypeHandler = () => {
  
    const newData = foodName.filter(item => item.description == pizzaType)
  
    return setUserPizzaSearch(newData)
  
  }
  


    return (
        <div className='searchFormContainer'>
        <form onSubmit={handleSubmit}>
          <p>Pizza Type</p>
          <select value={pizzaType} onChange={(e) => setPizzaType(e.target.value)} className='form-select userChoice'>
            <option selected>All</option>
            {
              foodName.map((item) => {
                return <option value={item.description}>{item.description}</option>
              })
            }
          </select>


          <p>Price</p>
          <select value={price} onChange={(e) => setPrice(e.target.value)} className='form-select userChoice'>
            <option selected>High</option>
            <option>Low</option>
          </select>
          <button onClick={() => pizzaTypeHandler()} className='btn btn-danger searchBtn'>Search</button>
        </form>

    <div className='foodCardsContainer'>
      {
       userPizzaSearch.length > 0 ? userPizzaSearch.map((item) => {
          return <FoodCard 
          name={item.name}
           description={item.description}
            img={item.img}
            price={item.price}  />
        }) : foodName.map((item) => {
          return <FoodCard 
          name={item.name}
           description={item.description}
            img={item.img}
            price={item.price}  />
        })
      } 
      </div>

      </div>

    )
}



export default SearchForm;