import React from "react";
import "./SearchBar.css"

function SearchBar(props){
    return(
        <div className="searchbar">
            <input 
                className="searchbar--input" 
                type="search" 
                placeholder="Search for a country" 
                value={props.currentSearch.text}
                onChange={props.handleSearch}
            />
        </div>
    )
}

export default SearchBar