import React from "react";
import Country from "./Country/Country";
import "./Countries.css"

function Countries(props){

    console.log(props.countries[1])
    const htmlElements = props.countries.map(country => {
        return <Country 
                    key={country.name.official}
                    name={country.name.official}
                    capital={country.capital}
                    flag={country.flags.png}
                />

    })
    return(
        <div className="countries">
            {htmlElements}
        </div>
    )
}

export default Countries