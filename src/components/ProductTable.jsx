import React,{useContext} from 'react'
import { SearchContext } from '../context/SearchContext'

import { CategoryProductRow } from './CategoryProductRow'
//import { sportsList, electronicsList } from '../assets/filteredByCategories'
import '../styles/ProductTable.css'


function ProductTable() {

    const { filterdElectronicsProducts, filterdSportsProducts } = useContext(SearchContext)

    return (
        <div className='product-table'>
            <div className='product-table__header'>
                <span>Name</span>
                <span>Price</span>
            </div>
            <div className='product-table__categories'>
                <CategoryProductRow title='Sporting Goods' list={filterdElectronicsProducts} />
                <CategoryProductRow title='Electronics' list={filterdSportsProducts} />
            </div>
        </div>
    )
}

export { ProductTable }