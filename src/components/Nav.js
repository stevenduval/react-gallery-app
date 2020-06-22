import React from 'react';
import { NavLink } from 'react-router-dom';

// return nav elements with NavLinks
const Nav = () => (
        <nav className="main-nav">
        <ul>
            <li><NavLink to="/puppies">Puppies</NavLink></li>
            <li><NavLink to="/sunsets">Sunsets</NavLink></li>
            <li><NavLink to="/summer">Summer</NavLink></li>
        </ul>
        </nav>
);
// export component so it can be used elsewhere
export default Nav;