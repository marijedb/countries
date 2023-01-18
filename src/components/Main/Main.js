import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar/SearchBar";
import Countries from "./Countries/Countries";

function Main(){
    const [countries, setCountries] = useState([])

    const [currentSearch, setCurrentSearch] = useState("")

    const [currentResult, setCurrentResult] = useState([])


    async function getCountries() {
        const response = await fetch(`https://restcountries.com/v3.1/all`)
        const data = await response.json()
        setCountries(data)
    }
    
    function searchCountry(event){
        const search = event.target.value.toLowerCase()
        if(search.length === 0){
            setCurrentSearch("")
        } else {
            setCurrentSearch(search)
        }
    }
    
    function getResult(){
        if(currentSearch.length !== 0) {
            const result = countries.reduce((filteredCountry, country) => {
                if(country.name.common.toLowerCase().includes(currentSearch)){
                    filteredCountry.push(country)
                }
                return filteredCountry
            }, [])
            setCurrentResult(result)
        } else {
            setCurrentResult([])
        }
    }

    useEffect(()=> {
        getResult() 
    },[currentSearch])

    useEffect(() => {
        getCountries()
    }, [])

    return(
        <div className="main">
            <SearchBar currentSearch={currentSearch} handleSearch={(event) => searchCountry(event)} />
            <Countries currentSearch={currentSearch} currentResult={currentResult} countries={countries} />
        </div>
    )
}

export default Main