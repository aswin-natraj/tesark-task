import React from 'react'
import ProductPg from '../product-pg/ProductPg'
import './filter.css'

const Filter=()=> {
    return (
        <div className='container5'>
            <div className='filter'>
            <div className='filter-hed'>
<h4 className='filter-text'>FILTER YOUR RESULT</h4><p className='line'></p>
</div>
<p className='price-text'>PRICE RANGE</p>

            </div>
<ProductPg/>
        </div>
    )
}

export default Filter
