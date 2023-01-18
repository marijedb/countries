import React from "react";
import "./Country.css"

function Country(props){
    let capital = "";
    function getCapital(){
        if(props.capital === undefined) {
            capital = `No capital`
        } else if (props.capital.length > 1){
            capital = props.capital.map(city => {
                return city
            }).join(', ')
        } else {
            capital = props.capital
        }
        return capital
    }

    function getLanguages(){
        let languages = [];
        for(const key in props.languages){
            languages.push(props.languages[key])
        }
        return languages.join(', ')
    }

    

    return(
        <div className="country">
                <h3 className="country--name">{props.name}</h3>
                <img className="country--flag" src={props.flag} alt="flag" />
                <div className="country--info">
                    <p>Capital City: {getCapital()}</p>
                    <p>Region: {props.region}</p>
                    <p>Subregion: {props.subregion}</p>
                    <p>Continent: {props.continent}</p>
                    <p>Language(s): {getLanguages()} </p>
                    <p>Population: {props.population}</p>
                    <p>Car drives on side: {props.car}</p>
                    <p>Currencies: </p>
                    <a href={props.googleMaps}>Google Maps</a>
                </div>
        </div>
    )
}

export default Country