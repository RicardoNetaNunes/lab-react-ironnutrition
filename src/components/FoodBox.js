
import { useState } from 'react'


function FoodBox(props) {

  //console.log(props)
  const {foods,  btnClick} = props
  const [qty, setQty] = useState(0)
  //console.log(foods)
  
  function handleQty(event) {
    setQty(event.target.value)
}
    console.log(setQty)

  return (
        <div>
            <div className="box">
  <article className="media">
    <div className="media-left">
      <figure className="image is-64x64">
        <img src={foods.image}  alt="food"/>
      </figure>
    </div>
    <div className="media-content">
      <div className="content">
        <p>
          <strong>{foods.name}</strong> <br />
          <small>{foods.calories}</small>
        </p>
      </div>
    </div>
    <div className="media-right">
      <div className="field has-addons">
        <div className="control">
          <input value={qty} onChange={handleQty} className="input" type="number" />
        </div>
        <div className="control">
          <button onClick={() => {btnClick(foods, qty)}} className="button is-info">
            +
          </button>
        </div>
      </div>
    </div>
  </article>
</div>
        </div>
    )
}

export default FoodBox
