import React from "react";
import Country from "./Country/Country";
import "./Countries.css"

function Countries({currentResult, currentSearch, countries, handleToggle}){
    let htmlElements = ""

    if(currentResult.length !== 0){
        htmlElements = currentResult.map(result => {
            return <Country 
                        key={result.name.common}
                        name={result.name.common}
                        capital={result.capital}
                        flag={result.flags.png}
                        car={result.car.side}
                        continent={result.continents}
                        currencies={result.currencies}
                        languages={result.languages}
                        googleMaps={result.maps.googleMaps}
                        population={result.population}
                        region={result.region}
                        subregion={result.subregion}
                        isExpanded={result.isExpanded}
                        toggleIsExpanded={() => handleToggle(result.id)}
                    />
        })
    } else {
        if(currentSearch.length === 0){
            htmlElements = countries.map(country => {
                return <Country 
                            key={country.name.common}
                            name={country.name.common}
                            capital={country.capital}
                            flag={country.flags.png}
                            car={country.car.side}
                            continent={country.continents}
                            currencies={country.currencies}
                            languages={country.languages}
                            googleMaps={country.maps.googleMaps}
                            population={country.population}
                            region={country.region}
                            subregion={country.subregion}
                            isExpanded={country.isExpanded}
                            toggleIsExpanded={() => handleToggle(country.id)}
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