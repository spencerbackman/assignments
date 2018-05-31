import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    return(
        <div>
            <Link to="/app">Snow</Link>
            <Link to="/second">Winterfell </Link>
            <Link to='/third'> north </Link>
        </div>
    )
}

export default Navbar;