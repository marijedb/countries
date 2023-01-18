import React from "react";
import "./Country.css"

function Country(props){
    return(
        <div className="country">
            <div>
                {<img className="country--flag" src={props.flag} alt="flag" />}
                <p>Country: {props.name}</p>
                {props.capital && <p>Capital: {props.capital[0]}</p>}
            </div>
        </div>
    )
}

export default Country