import React from 'react'

function FoodSelected(props) {
  
    const {selectedFood} = props
console.log(selectedFood)
    const total = selectedFood.reduce((sum, elem) => {
        return sum + (elem.quantity*elem.calories)
    }, 0)

    return (
        <div>
            <h1>Today's foods</h1>
            <br/>
            {
                selectedFood.map((elem) => {
                    const {name, quantity, calories} = elem
                    return (
                        <div>
                         🔥 {quantity}  {name} = {quantity*calories} cal
                        </div>    
                    )
                })
            }
            <br/>
            <h3>Total in calories:  {Math.round(total)} cal </h3>
        </div>
    )
}

export default FoodSelected
