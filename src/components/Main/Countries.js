import React from "react";
import Country from "./Countries/Country/Country";

function Countries(){
    return(
        <div className="countries">
            Countries component
            <Country />
            <Country />
        </div>
    )
}

export default Countries