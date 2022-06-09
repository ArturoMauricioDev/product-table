import React, { useContext } from 'react'
import { SearchContext } from '../context/SearchContext'
import '../styles/SearchBar.css'

function SearchBar() {

    const { serchValue, setSearchValue } = useContext(SearchContext)

    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value)
    }

    return (
        <div className='search-bar__container'>
            <input type="text" placeholder="Search..." onChange={onSearchValueChange} value={serchValue} />
            <input id='show-products' type="checkbox" />
            <label htmlFor="show-products">Only show products in stock</label>
        </div>
    )
}

export { SearchBar }