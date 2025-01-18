import React from 'react';
import PropTypes from 'prop-types';
import { useLoaderData } from 'react-router-dom';

const Usears = props => {
    const users = useLoaderData()
    return (
        <div>
            <h3>Our Users: {users.length}</h3>
           <h2>users contant here</h2>  
        </div>
    );
};

Usears.propTypes = {
    
};

export default Usears;