import React from 'react'

import '../styles/ProductRow.css'

function ProductRow(props) {
    const producto = props.name
    const precio = props.price
    const theme = 'product-row ' + props.theme
    
    return (
        <div className={theme}>
            <span>{producto}</span><span>{`$${precio}`} </span>
        </div>
    )
}

export { ProductRow }