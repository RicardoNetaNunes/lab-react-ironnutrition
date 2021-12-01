import React from "react";

function AddFood(props) {

  const {btnSubmit} = props

 return (
  <div class="form">
   <h1>Add a new food</h1>
   <form onSubmit={btnSubmit}>
        <div class="field">
            <label class="label">Food name</label>
            <div class="control">
            <input name="name" class="input" type="text" placeholder="      Food name" />
            </div>
        </div>

        <div class="field">
            <label class="label">Number of calories</label>
            <div class="control has-icons-left has-icons-right">
            <input
            name="calories"
            class="input is-success"
            type="number"
            placeholder="Calories"
            />
            </div>
        </div>
        <div class="field">
            <label class="label">Image</label>
            <div class="control has-icons-left has-icons-right">
            <input
            name="image"
            class="input is-success"
            type="text"
            placeholder="Enter image url"
            />
            </div>
        </div>
        <div class="field is-grouped">
            <div class="control addP">
            <button class="button is-link add">  Add  </button>
            </div>
        </div>
    </form>
   </div>
 );
}

export default AddFood;
