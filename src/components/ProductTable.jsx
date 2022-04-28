import React from 'react'
import { CategoryProductRow } from './CategoryProductRow'
import '../styles/ProductTable.css'

function ProductTable() {
    return (
        <div className='product-table'>
            <div className='product-table__header'>
                <span>Name</span>
                <span>Price</span>
            </div>
            <div className='product-table__categories'>
                <CategoryProductRow />
                <CategoryProductRow />
            </div>
        </div>
    )
}

export { ProductTable }