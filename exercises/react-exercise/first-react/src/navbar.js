import React from 'react';
import './nav.css'
const Navbar = () => {
  
    return(
        <div className="bar"> 
            <ul> 
                <li><a> home</a></li>
                <li><a> about</a></li>
                <li><a> pricing</a></li>
                <li><a> contact</a></li>
                <li><a> products</a></li>
            </ul>
        </div>
    )
}

export default Navbar;