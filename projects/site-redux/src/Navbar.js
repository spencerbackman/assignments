import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

const Navbar = (props) => {
    return(
        <div className='a'>
            <Link className='one' to="/first">Jon Snow</Link>
            <Link className='two' to="/second">Winterfell</Link>
            <Link className='three' to="/third">Dog Pics</Link>
        </div>
    )
}

export default Navbar;