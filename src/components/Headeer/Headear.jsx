import React from 'react';
import PropTypes from 'prop-types';
import './Header.css'
import { Link } from 'react-router-dom';
const Headear = props => {
    return (
        <div>
            <h2 className=''>Navbar </h2>
           <nav className=''>
            <Link to='/'>Home</Link>
            <Link to='/contact'>Contact Us</Link>
            <Link to='/about'>About</Link>
            <Link to='/users'>Users</Link>
           </nav>
        </div>
    );
};

Headear.propTypes = {
    
};

export default Headear;