import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import Countries from "./Countries/Countries";

function Main(){
    return(
        <div className="main">
            <SearchBar />
            <Countries />
        </div>
    )
}

export default Main