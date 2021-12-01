import React from 'react'
import '../App.css'

function SearchBar(props) {
    return (
        <div>
            <input class="search" onChange={props.btnSearch}  type="text" placeholder="Search your meal"/>
        </div>
    )
}

export default SearchBar
