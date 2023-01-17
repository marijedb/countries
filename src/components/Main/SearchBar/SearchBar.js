import React from "react";
import "./SearchBar.css"

function SearchBar(){
    return(
        <div className="searchbar">
            <input className="searchbar--input" type="text" placeholder="Search for a country" />
        </div>
    )
}

export default SearchBar