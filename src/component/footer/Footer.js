import React from 'react'
import './Footer.css'

const Footer=(props)=> {
    return (
        <div className='footer-container'>
            <div className='footer-describe'>
<p className='footer-describe-head'><i class="fas fa-utensils"></i>FindTable</p>
<p>A restaurant is a business that prepares and serves food and drinks to customers. Meals are generally served and eaten on the premises, but many restaurants also offer take-out and food delivery service and ...<a href='#' className='semore'>See more</a></p>
            </div>
            <div className='footer-sub-detail'>
<nav className='sub'>
   <input className='sub-search' type='search'  placeholder={props.placeholder}/>
   <p className='sutext'>SUBSCRIBE</p>
</nav>
<div className='footer-sub-main'>
<div className='company'>
<li className='company-list-item active11'><a href='#'>COMPANY</a></li>
<li className='company-list-item'><a href='#'>About</a></li>
<li className='company-list-item'><a href='#'>Careers</a></li>
<li className='company-list-item'><a href='#'>Press</a></li>
<li className='company-list-item'><a href='#'>Blog</a></li>
<li className='company-list-item'><a href='#'>Policies</a></li>
<li className='company-list-item'><a href='#'>Terms</a></li>
<li className='company-list-item'><a href='#'>Help</a></li>
<li className='company-list-item'><a href='#'>Disaster Response</a></li>
</div>
<div className='DISCOVER'>
<li className='company-list-item active11'><a href='#'>DISCOVER</a></li>
<li className='company-list-item'><a href='#'>About</a></li>
<li className='company-list-item'><a href='#'>Careers</a></li>
<li className='company-list-item'><a href='#'>Press</a></li>
<li className='company-list-item'><a href='#'>Blog</a></li>
<li className='company-list-item'><a href='#'>Policies</a></li>
<li className='company-list-item'><a href='#'>Terms</a></li>
<li className='company-list-item'><a href='#'>Help</a></li>
<li className='company-list-item'><a href='#'>Disaster Response</a></li>
</div>
<div className='HOSTING'>
<li className='company-list-item active11'><a href='#'>HOSTING</a></li>
<li className='company-list-item'><a href='#'>About</a></li>
<li className='company-list-item'><a href='#'>Careers</a></li>
<li className='company-list-item'><a href='#'>Press</a></li>
<li className='company-list-item'><a href='#'>Blog</a></li>
<li className='company-list-item'><a href='#'>Policies</a></li>
<li className='company-list-item'><a href='#'>Terms</a></li>
<li className='company-list-item'><a href='#'>Help</a></li>
<li className='company-list-item'><a href='#'>Disaster Response</a></li>
</div>
</div>
            </div>
            
        </div>
    )
}

export default Footer
