import React from 'react';
import PropTypes from 'prop-types';
import './Header.css'
import { Link, NavLink } from 'react-router-dom';
const Headear = props => {
    return (
        <div>
            <h2 className=''>Navbar </h2>
           <nav className=''>
            <Link to='/'>Home</Link>
            <NavLink to='/contact'>Contact Us</NavLink>
            <NavLink to='/about'>about</NavLink>
            <Link to='/users'>Users</Link>
            <Link to='/posts'>Posts</Link>
        
           </nav>
        </div>
    );
};

Headear.propTypes = {
    
};

export default Headear;