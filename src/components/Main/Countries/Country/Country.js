import React from "react";
import "./Country.css"

function Country(props){
    // IF props.result is true, then render only that result to the screen
    // else render them all
    // let countryy = []
    // if(props.result.length !== 0){
    //     countryy = props.result.map(result => {
    //         // console.log(result)
    //         return  <div>
    //                     {/* {<img className="country--flag" src={result.flag} alt="flag" />} */}
    //                     {/* <p>Country: {result.name}</p> */}
    //                     {/* {result.capital && <p>Capital: {result.capital[0]}</p>} */}
    //                 </div>
    //     })
    // } else {
    //     // countryy = "test"
    // } 
    // // console.log(country)

    console.log("country component")
    return(
        <div className="country">
            {/* {countryy} */}
        </div>
    )
}

export default Country