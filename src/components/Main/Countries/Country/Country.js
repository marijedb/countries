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
            return <p>- {props.currencies[key].name}: <span className="country--currency">{props.currencies[key].symbol}</span></p>
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
                        <p className="country--info--headers">Capital City: <span className="country--info--details">{getCapital()}</span></p>
                        <p className="country--info--headers">Region: <span className="country--info--details">{props.region}</span></p>
                        <p className="country--info--headers">Subregion: <span className="country--info--details">{props.subregion}</span></p>
                        <p className="country--info--headers">Continent: <span className="country--info--details">{props.continent}</span></p>
                        <p className="country--info--headers">Language(s): <span className="country--info--details">{getLanguages()} </span></p>
                        <p className="country--info--headers">Population: <span className="country--info--details">{props.population}</span></p>
                        <p className="country--info--headers">Car drives on side: <span className="country--info--details">{props.car}</span></p>
                        <div>
                            <p className="country--info--headers">Currencies: <span className="country--info--details">{getCurrencies()}</span></p>
                        </div>
                        <a className="country--google--link" href={props.googleMaps}>Google Maps</a>
                    </div> : 
                    <div className="country--expand">
                        <p onClick={props.toggleIsExpanded}>Show more info</p>
                    </div>
                }
        </div>
    )
}

export default Country