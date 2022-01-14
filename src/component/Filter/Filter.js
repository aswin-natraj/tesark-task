import { Input } from '@material-ui/core'
import React from 'react'
import ProductPg from '../product-pg/ProductPg'
import Pricerange from '../slider/Pricerange'
import Ratingrange from '../slider/Ratingrange'

import './filter.css'

const Filter=()=> {
    return (
        <div className='container5'>
            <div className='filter'>
            <div className='filter-hed'>
<h4 className='filter-text'>FILTER YOUR RESULT</h4><p className='line'></p>
</div>
<p className='price-text'>PRICE RANGE</p>
<Pricerange/>
<p className='price-text'>RATING RANGE</p>
<Ratingrange/>
<p className='price-text'>CUISINE TYPE</p>
<form className='cui-type'>
<p className='cui-type-item'> <input type='checkbox' s/> Any</p>
<p className='cui-type-item'> <input type='checkbox' /> American</p>
<p className='cui-type-item'> <input type='checkbox' /> Italian</p>
<p className='cui-type-item'> <input type='checkbox' /> French</p>
<p className='cui-type-item'> <input type='checkbox' /> Indochinese</p>
</form>
<p className='showmore'><a href=''>show more</a></p>
<p className='price-text'>LOCATION</p>
<form className='cui-type'>
<p className='cui-type-item'> <input type='checkbox' s/> Any</p>
<p className='cui-type-item'> <input type='checkbox' /> Shared outdoor pool</p>
<p className='cui-type-item'> <input type='checkbox' /> Hot tub/Jacuzzi</p>
<p className='cui-type-item'> <input type='checkbox' /> Saterllite or Cable TV</p>
<p className='cui-type-item'> <input type='checkbox' /> Parking</p>
</form>
<p className='showmore'><a href=''>show more</a></p>
<p className='price-text'>SIDEBAR SELECTION</p>
<select className='sidebar'>
    <option >Please Select</option>
</select>
<p className='price-text'>SIDEBAR TEXT</p>
<p className='sidetext'>A restaurant is a business that prepares and serves food and drinks to customers. Meals are generally served and eaten on the premises, but many restaurants also offer take-out and food delivery service </p>
            </div>
<ProductPg/>
        </div>
    )
}

export default Filter
