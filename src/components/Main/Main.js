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
        const test = countries.map(country => {
            return country.name.official
        })
        console.log(test)
    }
    
    function searchCountry(event){
        setCurrentSearch(event.target.value.toLowerCase())
        console.log(currentSearch)
    }
    
    function getResult(){
        if(currentSearch !== "") {
            const result = countries.filter(country => {
                if(country.name.official.toLowerCase().includes(currentSearch)){
                    return country.name.official
                }
            })
            setCurrentResult(result)
        }    
    }

    useEffect(()=> {
        getResult()
    }, [currentSearch])

    useEffect(() => {
        getCountries()
    }, [])

    return(
        <div className="main">
            <SearchBar currentSearch={currentSearch} handleSearch={(event) => searchCountry(event)} />
            <Countries currentResult={currentResult} countries={countries} />
        </div>
    )
}

export default Main