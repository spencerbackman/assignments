import React from 'react';

const Nav = () => {
    return (
        <div class = "dropdown">
            <button class="button">Menu</button>
                <div class="dropdown-content">
                    <a className="yo">Home </a>
                    <a className="yo">About </a>
                    <a className="yo">Sample Post </a>
                    <a className="yo">Contact </a>
                </div>
        </div>
    )
}

export default Nav;