import React from "react";
import Country from "./Country/Country";
import "./Countries.css"

function Countries(props){
    let htmlElements = ""
    if(props.currentResult.length !== 0){
        htmlElements = props.currentResult.map(result => {
            return <Country 
                        key={result.name.common}
                        name={result.name.common}
                        capital={result.capital}
                        flag={result.flags.png}
                    />
        })
    } else {
        if(props.currentSearch.length === 0){
            htmlElements = props.countries.map(country => {
                return <Country 
                            key={country.name.common}
                            name={country.name.common}
                            capital={country.capital}
                            flag={country.flags.png}
                        />
            })
        } else {
            return <div>Nothing found</div>
        }
    }
    
    
    return(
        <div className="countries">
            {htmlElements}
        </div>
    )
}

export default Countries