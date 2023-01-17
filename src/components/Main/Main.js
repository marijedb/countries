import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar/SearchBar";
import Countries from "./Countries/Countries";

function Main(){
    const [countries, setCountries] = useState([])

    const [currentSearch, setCurrentSearch] = useState("")

    const [currentResult, setCurrentResult] = useState([])


    async function getCountries() {
        console.log("getCountries, updates countries state")
        const response = await fetch(`https://restcountries.com/v3.1/all`)
        const data = await response.json()
        setCountries(data)
    }
    
    function searchCountry(event){
        console.log("searchCountry() updates CurrentSearch State")
        const search = event.target.value.toLowerCase()
        if(search.length === 0){
            setCurrentSearch("")
        } else {
            setCurrentSearch(search)
        }
    }
    
    function getResult(){
        console.log("getResults() updates currentResult State")
        if(currentSearch.length !== 0) {
            const result = countries.filter(country => {
                if(country.name.official.toLowerCase().includes(currentSearch)){
                    return country.name.official
                }
            })
            setCurrentResult(result)
        } else {
            setCurrentResult([])
        }
    }

    useEffect(()=> {
        console.log("useEffect getResults")
        getResult() 
    },[currentSearch])

    useEffect(() => {
        console.log("UseEffect get countries")
        getCountries()
    }, [])

    return(
        <div className="main">
            {console.log("main component")}
            <SearchBar currentSearch={currentSearch} handleSearch={(event) => searchCountry(event)} />
            <Countries  currentResult={currentResult} countries={countries} />
        </div>
    )
}

export default Main