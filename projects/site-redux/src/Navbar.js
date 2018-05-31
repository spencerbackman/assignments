import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

const Navbar = (props) => {
    return(
        <div className='a'>
            <Link className='one' to="/first">Jon</Link>
            <Link className='two' to="/second">winterfell</Link>
            <Link className='four' to="/Fourth">Book</Link>
            <Link className='three' to="/third">Dogs</Link>
            <Link className='five' to="/fifth">Joke</Link>
            <Link className='six' to="/sixth">Dad Joke </Link>
            <Link className='seven' to="/Seven">Ron Quotes </Link>
        </div>
    )
}

export default Navbar;
