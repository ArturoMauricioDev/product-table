import React, { createContext, useState } from "react";
import { electronicsList, sportsList } from '../assets/filteredByCategories'

const SearchContext = createContext()

function SearchProvider(props) {

    const [searchValue, setSearchValue] = useState('')

    const filterdElectronicsProducts =
        electronicsList.filter(item => {
            return item.name.toLowerCase().includes(searchValue.toLowerCase())
        })

    const filterdSportsProducts =
        sportsList.filter(item => {
            return item.name.toLowerCase().includes(searchValue.toLowerCase())
        })

    return (
        <SearchContext.Provider value={
            {
                searchValue,
                setSearchValue,
                filterdElectronicsProducts,
                filterdSportsProducts
            }
        }>
            {props.children}
        </SearchContext.Provider>
    )

}

export { SearchContext, SearchProvider }




