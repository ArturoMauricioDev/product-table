import React, { useState, useEffect } from 'react'
import { CategoryProductRow } from './CategoryProductRow'
import { sportsList, electronicsList } from '../assets/filteredByCategories'
import '../styles/ProductTable.css'


function ProductTable() {
    const [dataCharacters, setDataCharacters] = useState([])
    const fetchCharacters = async () => {
        const response = await fetch('https://rickandmortyapi.com/api/character')
        response.json().then(response => setDataCharacters(response.results))
    }
    useEffect(() => {
        fetchCharacters()
    }, [])

    // console.log(dataCharacters)

    return (
        <div className='product-table'>
            <div className='product-table__header'>
                <span>'Rick & Morty'</span>

            </div>
            <div className='product-table__categories'>
                <CategoryProductRow title='Characters' list={dataCharacters} />
                <CategoryProductRow title='Electronics' list={electronicsList} />
            </div>
        </div>
    )
}

export { ProductTable }