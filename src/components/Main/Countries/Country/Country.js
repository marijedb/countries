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

    function getCurrencies(){
        let currencies = ''
        for(const key in props.currencies){
            return <p>- {props.currencies[key].name}: {props.currencies[key].symbol}</p>
        }
        return currencies
    }
    
    return(
        <div className="country">
                <h3 className="country--name">{props.name}</h3>
                <img className="country--flag" src={props.flag} alt="flag" />
                {props.isExpanded ? 
                    <div className="country--info">
                        <div className="country--expand">
                            <p onClick={props.toggleIsExpanded}>Show less info</p>
                        </div>
                        <p>Capital City: {getCapital()}</p>
                        <p>Region: {props.region}</p>
                        <p>Subregion: {props.subregion}</p>
                        <p>Continent: {props.continent}</p>
                        <p>Language(s): {getLanguages()} </p>
                        <p>Population: {props.population}</p>
                        <p>Car drives on side: {props.car}</p>
                        <div>
                            Currencies: {getCurrencies()}
                        </div>
                        <a href={props.googleMaps}>Google Maps</a>
                    </div> : 
                    <div className="country--expand">
                        <p onClick={props.toggleIsExpanded}>Show more info</p>
                    </div>
                }
        </div>
    )
}

export default Country