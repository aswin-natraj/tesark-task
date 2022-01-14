import React,{useState} from 'react'
import './Search.css'

const Search=(props)=> {
   
    return (
        <div className='container1'>
            <form>
                <select className='cuisine-selector' placeholder='cuisine'>
                    <option selected="">Cuisine Type</option>
                    <option>Any</option>
                    <option>American</option>
                    <option>Italian</option>
                    <option>French</option>
                    <option>Indochinese</option>
                </select>
                <select className='people-selector' placeholder='cuisine'>
                    <option selected="">No.Of.People</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
                <button className='submit'>Find a Table</button>

            </form>
        </div>
    )
}

export default Search
