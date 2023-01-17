import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar/SearchBar";
import Countries from "./Countries/Countries";

function Main(){
    const [countries, setCountries] = useState([])

    const [currentSearch, setCurrentSearch] = useState("")

    const [isLoaded, setIsLoaded] = useState(false)


    async function getCountries() {
        const response = await fetch(`https://restcountries.com/v3.1/all`)
        const data = await response.json()
        setCountries(data)
        setIsLoaded(true)
    }

    function searchCountry(event){
        setCurrentSearch(event.target.value)
    }

    useEffect(() => {
        getCountries()
    }, [])

    return(
        <div className="main">
            <SearchBar currentSearch={currentSearch} handleSearch={(event) => searchCountry(event)} />
            {isLoaded && <Countries countries={countries} />}
        </div>
    )
}

export default Main