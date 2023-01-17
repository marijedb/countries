import React from "react";
import "./Country.css"

function Country(props){

    return(
        <div className="country">
            <img className="country--flag" src={props.flag} alt="flag" />
            <p>Country: {props.name}</p>
            {props.capital && <p>Capital: {props.capital[0]}</p>}
        </div>
    )
}

export default Country