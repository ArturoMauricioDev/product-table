import React from 'react'
import { CategoryProductRow } from './CategoryProductRow'
import { sportsList, electronicsList } from '../assets/filteredByCategories'
import '../styles/ProductTable.css'


function ProductTable() {
    return (
        <div className='product-table'>
            <div className='product-table__header'>
                <span>Name</span>
                <span>Price</span>
            </div>
            <div className='product-table__categories'>
                <CategoryProductRow title='Sporting Goods' list={sportsList} />
                <CategoryProductRow title='Electronics' list={electronicsList} />
            </div>
        </div>
    )
}

export { ProductTable }