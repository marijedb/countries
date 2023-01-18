import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar/SearchBar";
import Countries from "./Countries/Countries";
import "./Main.css"
import { nanoid } from 'nanoid'

function Main(){
    const [countries, setCountries] = useState([])

    const [currentSearch, setCurrentSearch] = useState("")

    const [currentResult, setCurrentResult] = useState([])


    async function getCountries() {
        const response = await fetch(`https://restcountries.com/v3.1/all`)
        const data = await response.json()
        const updatedData = await data.map(country => {
            return {
                ...country,
                isExpanded: false,
                id: nanoid()
            }
        })
        setCountries(updatedData)
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

    function handleToggleClick(id){
        if(currentResult.length > 0){
            setCurrentResult(prevResult => prevResult.map(result => {
                if(id === result.id){
                    return {
                        ...result,
                        isExpanded: !result.isExpanded
                    } 
                } else {
                    return result
                }
            }))
        } else {
            setCountries(prevCountries => prevCountries.map(country => {
                if(id === country.id){
                    return {
                        ...country,
                        isExpanded: !country.isExpanded
                    }
                } else {
                    return country
                }
            }))
        }
    }

    useEffect(()=> {
        getResult() 
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[currentSearch])

    useEffect(() => {
        getCountries()
    }, [])

    return(
        <div className="main">
            <SearchBar currentSearch={currentSearch} handleSearch={(event) => searchCountry(event)} />
            <Countries currentSearch={currentSearch} currentResult={currentResult} countries={countries} handleToggle={(id) => handleToggleClick(id)}/>
        </div>
    )
}

export default Main