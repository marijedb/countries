import React from "react";
import Country from "./Country/Country";
import "./Countries.css"

function Countries(props){

    console.log("Countries component")

    // if(props.currentResult.length !== 0){
    //     console.log("Result")
    // } else {
    //     console.log("There is no result")
    // }

    const htmlElements = props.countries.map(country => {
        return <Country 
                    key={country.name.official}
                    name={country.name.official}
                    capital={country.capital}
                    flag={country.flags.png}
                    // result={props.currentResult}
                />

    })
    return(
        <div className="countries">
            {htmlElements}
        </div>
    )
}

export default Countries