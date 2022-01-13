import React from 'react'
import './Restaurant.css'

const Restaurant=()=> {
    const no=253;
    const LOC="THOOTHIKUDI";
    return (
        <div className='container3'>
           <ul className='res-menu-list'>
               <li className='res-menu-list-item'><a href='#'>Home /</a></li>
               <li className='res-menu-list-item'><a href='#'> Page </a></li>
               <li className='res-menu-list-item active1'><a href='#'>/ Feature item</a></li>
           </ul> 
           <div className='hom'>
           <h2 className='hom1'>RESTAURANT IN {LOC}</h2><p className='nopeople'>/ {no}</p><p className='line'></p>
           </div>
        </div>
    )
}

export default Restaurant
