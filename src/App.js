import React from 'react';
import { useState } from 'react';
import foodsJson from './foods.json';
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';
import SearchBar from './components/SearchBar';
import FoodSelected from './components/FoodSelected';
import 'bulma/css/bulma.css';
import './App.css';


function App() {
  
  const [foods, setFoods]= useState(foodsJson)
  const [selectedFood, foodSelected] = useState([])
  const [foodsCopy, setFoodsCopy] = useState(foodsJson)
  const [showForm, setShowForm] = useState(false)

  function handleClick(foods, quantity){
    console.log('Click works')
    let checkoutFood = {
      image: foods.image,
      name: foods.name, 
      quantity: quantity,
      calories: foods.calories
    }

    foodSelected([checkoutFood, ...selectedFood])
  }


  function handleToggle(){
    setShowForm(!showForm)
  }

  function handleSubmit(event){
    event.preventDefault()
    let newFood = {
      name: event.target.name.value, 
      calories: event.target.calories.value,
      image: event.target.image.value
    }

    setFoodsCopy([newFood, ...foods])
    setShowForm(false)
  }  

  function handleSearch(event){
    let meal = event.target.value
    let filteredFoods = foods.filter((foods) => {
      return foods.name.includes(meal)
    })

    setFoodsCopy(filteredFoods)
  }

  return (
    <div >

<SearchBar class="search" btnSearch={handleSearch}/>
      
{
          showForm ? <AddFood  btnSubmit={handleSubmit}/> : <button class="button is-info addFood" onClick={handleToggle}>Add Food</button>
        }
<div class="columns">
      <div class="column">
   
{
          foodsCopy.map((elem, i) => {
            return <FoodBox  
                      key={i} 
                      foods={elem} 
                      btnClick={handleClick}
                    />
          })
        }
        
</div>
      <div class="column">
      <div class="today"> 
      <FoodSelected selectedFood={selectedFood} />
      </div> 
      </div>
          
      </div>  
    </div>
  );
      }

export default App;
