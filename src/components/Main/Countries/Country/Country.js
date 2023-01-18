import React from "react";
import "./Country.css"

function Country(props){
    // key={country.name.common}
    // name={country.name.common}
    // capital={country.capital}
    // flag={country.flags.svg}
    // car={country.car.side}
    // continent={country.continents}
    // currencies={country.currencies}
    // languages={country.languages}
    // googleMaps={country.maps.googleMaps}
    // population={country.population}
    // region={country.region}
    // subregion={country.subregion}
    return(
        <div className="country">
                <h3 className="country--name">{props.name}</h3>
                <img className="country--flag" src={props.flag} alt="flag" />
                {props.capital && <p>Capital: {props.capital[0]}</p>}
        </div>
    )
}

export default Country